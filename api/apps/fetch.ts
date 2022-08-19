import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../lib/_db';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    // let apps = await db.collection('Apps').find({}).toArray();

    let apps = await db
      .collection('Apps')
      .find({})
      .map((doc) => {
        let orig: any = db.collection('Users').findOne({ _id: doc.originator });
        doc.originator = {
          _id: orig._id,
          displayname: orig.displayname,
        };
        let collabs: any[] = doc.collaborators.map((c) => {
          return db.collection('Users').findOne({ _id: c });
        });
        doc.collaborators = collabs.map((collab) => {
          return { _id: collab._id, displayname: collab.displayname };
        });
        return doc;
      })
      .toArray();

    res.status(200).send(apps);
  } catch (exception) {
    res.status(500).send(exception);
  }
}
