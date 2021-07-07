const _ = require("lodash");

const twilio = require("twilio")(
    process.env.TWILIO_DEMO_ACCOUNT_SID,
    process.env.TWILIO_DEMO_AUTH_TOKEN,
);
