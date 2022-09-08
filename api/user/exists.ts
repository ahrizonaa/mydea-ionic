import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../lib/_db';

// const allowCors = (fn) => async (req, res) => {
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   // another common pattern
//   // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET,OPTIONS,PATCH,DELETE,POST,PUT'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//   );
//   if (req.method === 'OPTIONS') {
//     res.status(200).end();
//     return;
//   }
//   return await fn(req, res);
// };

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

export default handler;
