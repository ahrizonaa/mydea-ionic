import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../lib/_db';

const handler = async function (req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  try {
    let search = await db.collection('Users').findOne({ tel: req.body.tel });
    res.status(200).send(search);
  } catch (exception) {
    res.status(500).send({
      msg: 'Error searching for user',
      exception: {
        msg: exception.message,
        name: exception.name,
        stack: exception.stack,
      },
    });
  }
};

export default handler;
