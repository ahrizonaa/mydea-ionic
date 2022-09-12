import type { VercelRequest, VercelResponse } from '@vercel/node';
import { twilioclient } from '../lib/_twilio';

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = async function (req: VercelRequest, res: VercelResponse) {
  try {
    let code = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    let textmsg = `${code} is your security code from Charmee`;
    await twilioclient.messages
      .create({
        body: textmsg,
        to: req.body.tel,
        from: process.env.TWILIO_PHONE_NUMBER,
      })
      .then((msg) => {
        msg.code = code;
        res.status(200).send(msg);
      });
  } catch (exception) {
    res.status(500).send(exception);
  }
};

export default allowCors(handler);
