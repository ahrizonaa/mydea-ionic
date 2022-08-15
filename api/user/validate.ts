import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ObjectId } from 'mongodb';
import { db } from '../lib/_db';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    let query = { _id: new ObjectId(req.body._id) };
    let update = { $set: { validatedon: req.body.validatedon } };

    let result = await db.collection('Users').updateOne(query, update);

    res.status(200).send(result);
  } catch (exception) {
    res.status(500).send(exception);
  }
}
