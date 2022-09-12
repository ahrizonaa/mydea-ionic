import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ObjectId } from 'mongodb';
import { db } from '../../lib/_db';
import { cors } from '../../lib/_cors';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  try {
    let query = { _id: new ObjectId(req.body._id) };
    let deleteElement = { $pull: { features: req.body.feature } };

    let result = await db.collection('Apps').updateOne(query, deleteElement);
    res.send(result);
  } catch (exception) {
    res.status(500).send(exception);
  }
});
