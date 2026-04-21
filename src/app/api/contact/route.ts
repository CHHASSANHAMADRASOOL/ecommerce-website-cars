import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Configure your SMTP settings (e.g., Gmail or Resend)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New VIP Inquiry from ${name}`,
      text: message,
      html: `<h3>New Message</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}