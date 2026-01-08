import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Retrieve session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent'],
    });

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Find payment in database
    const { data: payment, error: findError } = await supabase
      .from('payments')
      .select('*')
      .eq('session_id', sessionId)
      .single();

    if (findError) {
      console.error('Payment not found in database:', findError);
      return NextResponse.json(
        { error: 'Payment not found in database' },
        { status: 404 }
      );
    }

    // Update payment with details from Stripe
    const paymentIntent = session.payment_intent as Stripe.PaymentIntent;

    const { error: updateError } = await supabase
      .from('payments')
      .update({
        status: session.payment_status === 'paid' ? 'succeeded' : 'failed',
        payment_intent_id: paymentIntent?.id || null,
        payment_method_type: paymentIntent?.payment_method_types?.[0] || null,
        receipt_url: (paymentIntent?.charges?.data[0] as any)?.receipt_url || null,
        customer_email: session.customer_details?.email || null,
        updated_at: new Date().toISOString(),
      })
      .eq('session_id', sessionId);

    if (updateError) {
      console.error('Failed to update payment:', updateError);
    }

    // Fetch updated payment
    const { data: updatedPayment } = await supabase
      .from('payments')
      .select('*')
      .eq('session_id', sessionId)
      .single();

    return NextResponse.json({
      success: true,
      payment: updatedPayment,
    });
  } catch (error: any) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      {
        error: error.message || 'Failed to verify payment',
      },
      { status: 500 }
    );
  }
}
