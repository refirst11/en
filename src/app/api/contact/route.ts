import { createTransport } from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.text();
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    to: process.env.MAIL_ADDRESS,
    subject: 'Contact message',
    text: body,
  });

  return NextResponse.json({ success: true });
}
