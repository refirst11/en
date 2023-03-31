import { createTransport } from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });
  await transporter.sendMail({
    to: process.env.NEXT_PUBLIC_MAIL_TO,
    subject: 'お問い合わせ',
    text: req.body,
  });

  res.status(200).json({
    success: true,
  });
};
