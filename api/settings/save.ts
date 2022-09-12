import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from 'api/lib/_cors';
import { ObjectId } from 'mongodb';
import { db } from '../lib/_db';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  try {
    let collection = db.collection('Users');

    let settings = Object.keys(req.body.settings);

    let response = {
      modifiedCount: 0,
    };

    for (let i = 0; i < settings.length; i++) {
      let query = { _id: new ObjectId(req.body.user._id) };
      let property = `settings.${settings[i]}`;
      let updateVal = {};
      updateVal[property] = req.body.settings[settings[i]];

      let update = { $set: updateVal };
      let result = await collection.updateOne(query, update);
      response.modifiedCount += result.modifiedCount;
    }

    res.status(200).send(response);
  } catch (exception) {
    res.status(500).send(exception);
  }
});
