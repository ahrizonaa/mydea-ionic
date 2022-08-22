import { imagekitclient } from '../lib/_imagekit';
import { v4 as uuidv4 } from 'uuid';

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (req: VercelRequest, res: VercelResponse) {
  var url = '';
  try {
    imagekitclient.upload(
      {
        file: req.body.image,
        fileName: `${uuidv4()}.png`,
      },
      (err, res) => {
        if (err) {
          res.status(500).send(err);
        } else {
          url = imagekitclient.url(res.url);
          res.status(200).send(url);
        }
      }
    );
  } catch (exception) {
    res.status(500).send({
      error: exception,
      msg: exception.message,
    });
  }
}
