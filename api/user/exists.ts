import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../lib/_db';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    res.status(200).send('auth/exists received');
    let search = await db.collection('Users').findOne({ tel: req.body.tel });
    res.status(200).send(search);
  } catch (exception) {
    res.status(500).send({
      msg: 'Error searching for user',
      exception: exception,
    });
  }
}
