import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../lib/_db';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    let perkCollection = db.collection('Perks');

    let perks = await perkCollection.find({}).toArray();

    res.status(200).send(perks);
  } catch (exception: any) {
    res.status(500).send(exception.message);
  }
}
