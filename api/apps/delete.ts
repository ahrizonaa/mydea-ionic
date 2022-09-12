import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from 'api/lib/_cors';
import { ObjectId } from 'mongodb';
import { db } from '../lib/_db';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  try {
    let query = { _id: new ObjectId(req.body._id) };
    let deletedCount = (await db.collection('Apps').deleteOne(query))
      .deletedCount;

    let apps = await db.collection('Apps').find({}).toArray();
    res.status(200).send({ deletedCount, apps });
  } catch (exception) {
    res.status(500).send(exception);
  }
});
