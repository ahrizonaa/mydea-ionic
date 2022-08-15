import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../lib/_db';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    let result = await db.collection('Apps').insertOne({
      name: req.body.name,
      originator: req.body.originator,
      features: req.body.features,
      timeline: req.body.timeline,
    });
    res.status(200).send(result);
  } catch (exception) {
    res.status(500).send(exception);
  }
}
