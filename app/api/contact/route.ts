import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, email, message } = body;

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Debug logging for email sending attempt
    console.log('Attempting to send email with Resend...');
    console.log('From:', 'Contact Form <onboarding@resend.dev>');
    console.log('To:', ['oneblockawayllc@gmail.com']);
    console.log('Reply-To:', email);

    // Send email using Resend - Update 'from' address to a verified domain for production
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@wallymo.com>', // Replace with verified domain in production
      to: ['oneblockawayllc@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission${firstName ? ` from ${firstName}` : ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${firstName || 'Not provided'}
Email: ${email}

Message:
${message}
      `,
    });

    console.log('Resend response data:', data);
    console.log('Resend response error:', error);

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

