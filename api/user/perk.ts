import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from '../lib/_cors';
import { ObjectId } from 'mongodb';
import { db } from '../lib/_db';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  try {
    let userCollection = db.collection('Users');

    let query = {
      _id: new ObjectId(req.body._id),
    };

    let u = {
      perks: {
        skdfjhi1u3: {
          name: 'microsoft office',
        },
      },
    };

    let obj = {};
    let key = `perks.${req.body.perk._id}`;
    req.body.perk.accepted = true;
    obj[key] = req.body.perk;

    let update = { $set: obj };

    let perks = await userCollection.updateOne(query, update);

    res.status(200).send(perks);
  } catch (exception: any) {
    res.status(500).send(exception.message);
  }
});
