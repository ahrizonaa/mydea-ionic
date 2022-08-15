import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from './lib/_db';

var getAllApps = async (req: VercelRequest, res: VercelResponse) => {
  return await db.collection('Apps').find({}).toArray();
};

var functions = {
  GET: async (req: VercelRequest, res: VercelResponse) => {
    let apps = await db.collection('Apps').find({}).toArray();
    res.status(200).send(apps);
  },
  POST: async (req: VercelRequest, res: VercelResponse) => {
    return await db.collection('Apps').insertOne(req.body);
  },
  PUT: async (req: VercelRequest, res: VercelResponse) => {
    let result = await db.collection('Apps').insertOne({
      name: req.body.name,
      originator: req.body.originator,
      features: req.body.features,
      timeline: req.body.timeline,
    });
    res.status(200).send(result);
  },
};

export default async function (req: VercelRequest, res: VercelResponse) {
  await functions[req.method](req, res);
}
