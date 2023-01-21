import type { VercelRequest, VercelResponse } from '@vercel/node';
import { cors } from '../lib/_cors';
import { db } from '../lib/_db';
import { ObjectId } from 'mongodb';
import {
  IKCallback,
  UploadOptions,
  UploadResponse,
  UrlOptions,
} from 'imagekit/dist/libs/interfaces';
import { imagekitclient } from '../lib/_imagekit';
import { v4 as uuidv4 } from 'uuid';

export default cors(async function (req: VercelRequest, res: VercelResponse) {
  if (req.body.action == 'create') {
    try {
      let result = await db.collection('Users').insertOne({
        tel: req.body.tel,
        displayname: req.body.displayname,
        validatedon: req.body.validatedon,
        settings: req.body.settings,
      });

      res.status(200).send(result);
    } catch (exception) {
      res.status(500).send(exception);
    }
  } else if (req.body.action == 'displayname') {
    if (req.method == 'PUT') {
      try {
        let query = { _id: new ObjectId(req.body._id) };
        let update = { $set: { displayname: req.body.displayname } };

        let result = await db.collection('Users').updateOne(query, update);
        res.status(200).send(result);
      } catch (exception) {
        res.status(500).send(exception);
      }
    } else {
      res.status(200).send(`${req.method} not implemented.`);
    }
  } else if (req.body.action == 'exists') {
    res.status(200).send('hello world');
    try {
      let search = await db.collection('Users').findOne({ tel: req.body.tel });
      res.status(200).send(search);
    } catch (exception) {
      console.log(exception);
      res.status(500).send({
        msg: 'Error searching for user',
        exception: {
          msg: exception.message,
          name: exception.name,
          stack: exception.stack,
        },
      });
    }
  } else if (req.body.action == 'fetch') {
    try {
      let result = await db
        .collection('Users')
        .findOne({ _id: new ObjectId(req.body._id) });

      res.status(200).send(result);
    } catch (exception) {
      res.status(500).send(exception);
    }
  } else if (req.body.action == 'perk') {
    try {
      let userCollection = db.collection('Users');

      let query = {
        _id: new ObjectId(req.body._id),
      };

      let u = {
        perks: {
          skdfjhi1u3: {
            name: 'microsoft office',
          },
        },
      };

      let obj = {};
      let key = `perks.${req.body.perk._id}`;
      req.body.perk.accepted = true;
      obj[key] = req.body.perk;

      let update = { $set: obj };

      let perks = await userCollection.updateOne(query, update);

      res.status(200).send(perks);
    } catch (exception: any) {
      res.status(500).send(exception.message);
    }
  } else if (req.body.action == 'profilepic') {
    var uploadOptions: UploadOptions = {
      file: req.body.base64String,
      fileName: `${uuidv4()}.png`,
      folder: '/mdyea/profilepics',
    };

    try {
      imagekitclient.upload(
        uploadOptions,
        (imgkiterr: Error, imgkitres: UploadResponse) => {
          if (imgkiterr) {
            res.status(500).send(imgkiterr);
          } else {
            let urlOptions: UrlOptions = { src: imgkitres.url };
            let imgHostingUrl = imagekitclient.url(urlOptions);
            res.status(200).send({ imgHostingUrl: imgHostingUrl });
          }
        }
      );
    } catch (exception) {
      res.status(500).send({
        error: exception,
        msg: exception.message,
      });
    }
  } else if (req.body.action == 'validate') {
    try {
      let query = { _id: new ObjectId(req.body._id) };
      let update = { $set: { validatedon: req.body.validatedon } };

      let result = await db.collection('Users').updateOne(query, update);

      res.status(200).send(result);
    } catch (exception) {
      res.status(500).send(exception);
    }
  }
});
