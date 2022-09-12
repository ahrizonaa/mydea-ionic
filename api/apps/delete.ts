import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from '../lib/_cors';
import { ObjectId } from 'mongodb';
import { db } from '../lib/_db';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  try {
    let query = { _id: new ObjectId(req.body._id) };
    let deletedCount = (await db.collection('Apps').deleteOne(query))
      .deletedCount;

    let appCollection = db.collection('Apps');

    const agg = [
      {
        $lookup: {
          from: 'Users',
          localField: 'originator',
          foreignField: '_id',
          as: 'originator',
        },
      },
      {
        $lookup: {
          from: 'Users',
          localField: 'collaborators',
          foreignField: '_id',
          as: 'c',
        },
      },
    ];

    let apps = await appCollection.aggregate(agg).toArray();

    res.status(200).send({ deletedCount, apps });
  } catch (exception) {
    res.status(500).send(exception);
  }
});
