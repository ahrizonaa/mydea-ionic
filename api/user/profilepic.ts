import { imagekitclient } from '../lib/_imagekit';
import { v4 as uuidv4 } from 'uuid';

import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  IKCallback,
  UploadOptions,
  UploadResponse,
  UrlOptions,
} from 'imagekit/dist/libs/interfaces';

export default async function (req: VercelRequest, res: VercelResponse) {
  var uploadOptions: UploadOptions = {
    file: req.body.image,
    fileName: `${uuidv4()}.png`,
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
          res.status(200).send(imgHostingUrl);
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
