import * as twilio from 'twilio';

const twiliolib: any = twilio;

const twilioclient = new twiliolib.default(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export { twilioclient };
