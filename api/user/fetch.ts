import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ObjectId } from 'mongodb';
import { db } from '../lib/_db';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    let result = await db
      .collection('Users')
      .findOne({ _id: new ObjectId(req.body._id) });

    res.status(200).send(result);
  } catch (exception) {
    res.status(500).send(exception);
  }
}
