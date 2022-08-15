import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ObjectId } from 'mongodb';
import { db } from '../lib/_db';
import { cors } from '../lib/_cors';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method == 'GET') {
      res.status(200).send('User fetch works!');
      return;
    }
    let result = await db
      .collection('Users')
      .findOne({ _id: new ObjectId(req.body._id) });

    res.status(200).send(result);
  } catch (exception) {
    res.status(500).send(exception);
  }
});
