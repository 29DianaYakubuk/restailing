import { NextRequest, NextResponse } from 'next/server';
import { leadFormSchema } from '@/lib/validations/leadForm';
import type { LeadWithMetadata } from '@/types';

const leads: LeadWithMetadata[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validated = leadFormSchema.parse(body);

    const leadWithMetadata: LeadWithMetadata = {
      ...validated,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    leads.push(leadWithMetadata);

    console.log('New lead received:', leadWithMetadata);

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
  return NextResponse.json({
    success: true,
    leads,
    count: leads.length,
  });
}
