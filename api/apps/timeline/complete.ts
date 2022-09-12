import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from 'api/lib/_cors';
import { ObjectId } from 'mongodb';
import { db } from '../../lib/_db';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  try {
    let query = { _id: new ObjectId(req.body.app._id) };
    let event = {};
    event[`timeline.${req.body.eventindex}.inProgress`] = false;
    event[`timeline.${req.body.eventindex}.isDone`] = true;

    let update = { $set: event };

    let result = await db.collection('Apps').updateOne(query, update);
    res.status(200).send(result);
  } catch (exception) {
    res.status(500).send(exception);
  }
});
