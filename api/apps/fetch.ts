import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../lib/_db';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    // let apps = await db.collection('Apps').find({}).toArray();

    let apps = await db
      .collection('Apps')
      .find({})
      .map(async (doc) => {
        let orig: any = await db
          .collection('Users')
          .findOne({ _id: doc.originator });
        delete orig.pfp;
        doc.originator = orig;
        doc.collaborators = doc.collaborators.map(async (c) => {
          let collab = await db.collection('Users').findOne({ _id: c });
          delete collab.pfp;
          return collab;
        });
        return doc;
      })
      .toArray();

    res.status(200).send(apps);
  } catch (exception) {
    res.status(500).send(exception);
  }
}
