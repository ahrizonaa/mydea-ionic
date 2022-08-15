import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from './lib/_db';

var getAllApps = async (req: VercelRequest, res: VercelResponse) => {
  return await db.collection('Apps').find({}).toArray();
};

export default async function (req: VercelRequest, res: VercelResponse) {
  switch (req.method) {
    case 'GET':
      let allApps = await getAllApps(req, res);
      res.status(200).send(allApps);
      break;
    case 'POST':
      break;
    case 'PUT':
      break;
    case 'DELETE':
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
  }
}
