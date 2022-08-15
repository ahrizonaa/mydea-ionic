import type { VercelRequest, VercelResponse } from '@vercel/node';
import { twilioclient } from 'api/lib/_twilio';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    let code = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    let textmsg = `${code} is your security code from Charmee`;
    await twilioclient.messages
      .create({
        body: textmsg,
        to: req.body.tel,
        from: process.env.TWILIO_PHONE_NUMBER,
      })
      .then((msg) => {
        msg.code = code;
        res.status(200).send(msg);
      });
  } catch (exception) {
    res.status(500).send(exception);
  }
}
