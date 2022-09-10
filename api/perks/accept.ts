import type { VercelRequest, VercelResponse } from '@vercel/node';
import { twilioclient } from '../lib/_twilio';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    await twilioclient.messages
      .create({
        body: `${req.body.user} has requested perk ${req.body.perk.name}`,
        to: process.env.perks_contact,
        from: process.env.TWILIO_PHONE_NUMBER,
      })
      .then((msg) => {
        res.status(200).send(msg);
      });
  } catch (exception: any) {
    res.status(500).send(exception.message);
  }
}
