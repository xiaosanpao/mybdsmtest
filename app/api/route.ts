import { NextRequest, NextResponse } from 'next/server';
import { TestResult } from '@/lib/types';

// This API endpoint could be used for analytics or if you later decide
// to store results on the server. Currently, it just echoes back the received results
// since we're storing everything client-side.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the data structure
    if (!body || !body.scores || !body.primaryRole) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }
    
    // In a real implementation, you might save this data to a database
    // For now, we just echo it back
    const result: TestResult = {
      primaryRole: body.primaryRole,
      scores: body.scores,
      timestamp: new Date().toISOString()
    };
    
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // This endpoint doesn't support GET requests directly
  // In a more complex app, you might use this to retrieve results by ID
  
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}