import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.email_host,
      port: process.env.email_port,
      auth: {
        user: process.env.email_user,
        pass: process.env.email_pass,
      },
    });

    let message = {
      from: process.env.email_from,
      to: process.env.email_to,
      subject: 'Resource Request',
      text: `${req.body.user} has accepted resource ${req.body.perk.name}`,
    };
    let emailresult = await transporter.sendMail(message);

    res.status(200).send(emailresult);
  } catch (exception: any) {
    res.status(500).send(exception.message);
  }
}
