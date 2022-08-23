import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../lib/_db';

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    let users = db.collection('Users');
    let apps = db.collection('Apps');

    let userlist = await users.find({}).toArray();

    let applist = await apps.find({}).toArray();

    applist.forEach((app) => {
      app.originator = userlist
        .filter((user) => {
          return user._id.toString() == app.originator.toString();
        })
        .pop();

      let collabs = app.collaborators.map((collab) => {
        return collab.toString();
      });
      app.collaborators = userlist.filter((user) => {
        return collabs.includes(user._id.toString());
      });
    });

    res.status(200).send(applist);
  } catch (exception) {
    res.status(500).send(exception);
  }
}
