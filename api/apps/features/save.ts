import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ObjectId } from 'mongodb';
import { db } from 'api/lib/_db';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    let query = { _id: new ObjectId(req.body._id) };
    let update = { $push: { features: req.body.feature } };

    let result = await db.collection('Apps').updateOne(query, update);
    res.status(200).send(result);
  } catch (exception) {
    res.status(500).send(exception);
  }
}
