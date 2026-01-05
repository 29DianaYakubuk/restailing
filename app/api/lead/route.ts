import { NextRequest, NextResponse } from 'next/server';
import { leadFormSchema } from '@/lib/validations/leadForm';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validated = leadFormSchema.parse(body);

    // Insert into Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          first_name: validated.firstName,
          last_name: validated.lastName,
          email: validated.email,
          phone: validated.phone,
          address: validated.address,
          postal_code: validated.postalCode,
          budget: validated.budget,
          start_date: validated.startDate,
          service: validated.service,
          description: validated.description,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message);
    }

    // Format response to match expected structure
    const leadWithMetadata = {
      id: data.id,
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      postalCode: data.postal_code,
      budget: data.budget,
      startDate: data.start_date,
      service: data.service,
      description: data.description,
      createdAt: data.created_at,
    };

    console.log('New lead saved to Supabase:', leadWithMetadata);

    return NextResponse.json(
      {
        success: true,
        data: leadWithMetadata,
        message: 'Lead submitted successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);

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
    const { data: leads, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    // Format response to match expected structure
    const formattedLeads = leads.map((lead) => ({
      id: lead.id,
      firstName: lead.first_name,
      lastName: lead.last_name,
      email: lead.email,
      phone: lead.phone,
      address: lead.address,
      postalCode: lead.postal_code,
      budget: lead.budget,
      startDate: lead.start_date,
      service: lead.service,
      description: lead.description,
      createdAt: lead.created_at,
    }));

    return NextResponse.json({
      success: true,
      leads: formattedLeads,
      count: formattedLeads.length,
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch leads',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'Lead ID is required',
        },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('leads').delete().eq('id', id);

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({
      success: true,
      message: 'Lead deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting lead:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete lead',
      },
      { status: 500 }
    );
  }
}
