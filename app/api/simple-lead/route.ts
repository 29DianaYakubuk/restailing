import { NextRequest, NextResponse } from 'next/server';
import { simpleLeadFormSchema } from '@/lib/validations/simpleLeadForm';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured()) {
      throw new Error(
        'Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.'
      );
    }

    const body = await request.json();

    const validated = simpleLeadFormSchema.parse(body);

    // Insert into Supabase
    const { data, error } = await supabase
      .from('simple_leads')
      .insert([
        {
          name: validated.name,
          email: validated.email,
          phone: validated.phone,
          service: validated.service,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message);
    }

    console.log('New simple lead saved to Supabase:', data);

    return NextResponse.json(
      {
        success: true,
        data: {
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          createdAt: data.created_at,
        },
        message: 'Lead submitted successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing simple lead:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process lead',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!isSupabaseConfigured()) {
      throw new Error(
        'Supabase is not configured. Please set environment variables.'
      );
    }

    const { data: simpleLeads, error } = await supabase
      .from('simple_leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({
      success: true,
      leads: simpleLeads,
      count: simpleLeads.length,
    });
  } catch (error) {
    console.error('Error fetching simple leads:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch leads',
      },
      { status: 500 }
    );
  }
}
