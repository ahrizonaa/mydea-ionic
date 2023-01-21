import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from './lib/_cors';
import { db } from './lib/_db';
import { twilioclient } from './lib/_twilio';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  if (req.body.action == 'fetch') {
    try {
      let perkCollection = db.collection('Perks');

      let perks = await perkCollection.find({}).toArray();

      res.status(200).send(perks);
    } catch (exception: any) {
      res.status(500).send(exception.message);
    }
  } else if (req.body.action == 'accept') {
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
});
