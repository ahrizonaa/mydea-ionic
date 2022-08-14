import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from './_db';

export default async function (req: VercelRequest, res: VercelResponse) {
  // const { name = 'World' } = req.query;
  // res.send(`Hello ${name}!`);

  const apps = await db.collection('Apps').find({}).toArray();
  res.send(apps);
}
