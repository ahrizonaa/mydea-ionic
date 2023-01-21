import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from '../lib/_cors';
import { db } from '../lib/_db';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  try {
    let result = await db.collection('Users').insertOne({
      tel: req.body.tel,
      displayname: req.body.displayname,
      validatedon: req.body.validatedon,
      settings: req.body.settings,
    });

    res.status(200).send(result);
  } catch (exception) {
    res.status(500).send(exception);
  }
});
