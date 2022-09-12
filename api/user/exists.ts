import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from '../lib/_cors';
import { db } from '../lib/_db';

const handler = async function (req: VercelRequest, res: VercelResponse) {
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

export default cors(handler);
