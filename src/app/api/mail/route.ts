import { createTransport } from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });
  transporter.sendMail({
    to: process.env.NEXT_PUBLIC_MAIL_TO,
    subject: 'お問い合わせ',
    text: String(req.body),
  });

  return NextResponse.json({ success: true });
}
