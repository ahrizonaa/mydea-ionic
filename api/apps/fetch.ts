import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from '../lib/_cors';
import { db } from '../lib/_db';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  try {
    let apps = db.collection('Apps');

    const agg = [
      {
        $lookup: {
          from: 'Users',
          localField: 'originator',
          foreignField: '_id',
          as: 'originator',
        },
      },
      {
        $lookup: {
          from: 'Users',
          localField: 'collaborators',
          foreignField: '_id',
          as: 'c',
        },
      },
    ];

    let result = await apps.aggregate(agg).toArray();

    res.status(200).send(result);
  } catch (exception: any) {
    console.log('ERROR OCCURRED');
    console.log(exception.message);
    console.log(exception.toString());
    res.status(500).send(exception.message);
  }
});
