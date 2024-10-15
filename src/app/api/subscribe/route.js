// app/api/subscribe/route.js
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = 'https://pryljrdqyydarajxempu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByeWxqcmRxeXlkYXJhanhlbXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5Mjg0NDcsImV4cCI6MjA0NDUwNDQ0N30.FAHOUhgDP3825DXq4ulOJCVLe0XN9zdDAOJhnJr1tMk';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    console.log('Attempting to insert email:', email);

    // Insert the email into the Supabase table
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email }]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('Email inserted successfully:', data);
    return NextResponse.json({ message: 'Email captured successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
