const _ = require("lodash");

const twilio = require("twilio")(
    process.env.TWILIO_DEMO_ACCOUNT_SID,
    process.env.TWILIO_DEMO_AUTH_TOKEN,
);

const myTwilioNumber = "+447830355458";

twilio.messages
    .list({to: myTwilioNumber})
    .then(messages => {
        _.uniqBy(messages, "from")
            .forEach(message => {
                twilio.calls.create({
                    to: message.from,
                    from: myTwilioNumber,
                    twiml: `
                    <Response>
                        <Say>This could all get very messy very quickly</Say>
                    </Response>
                    `
                });
            });
    });
