import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../lib/_db';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    // let apps = await db.collection('Apps').find({}).toArray();

    let apps = await db
      .collection('Apps')
      .find({})
      .map((doc) => {
        doc.originator = db
          .collection('Users')
          .findOne({ _id: doc.originator }, { _id: 1, displayname: 1 });
        doc.collaborators = doc.collaborators.map((c) => {
          return db
            .collection('Users')
            .findOne({ _id: c }, { projection: { _id: 1, displayname: 1 } });
        });
        return doc;
      })
      .toArray();

    res.status(200).send(apps);
  } catch (exception) {
    res.status(500).send(exception);
  }
}
