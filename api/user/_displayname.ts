import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from '../lib/_cors';
import { ObjectId } from 'mongodb';
import { db } from '../lib/_db';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  if (req.method == 'PUT') {
    try {
      let query = { _id: new ObjectId(req.body._id) };
      let update = { $set: { displayname: req.body.displayname } };

      let result = await db.collection('Users').updateOne(query, update);
      res.status(200).send(result);
    } catch (exception) {
      res.status(500).send(exception);
    }
  } else {
    res.status(200).send(`${req.method} not implemented.`);
  }
});
