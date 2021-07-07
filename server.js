const express = require("express");
const bodyParser = require("body-parser");
const twiml = require("twilio").twiml;

const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({extended: false}));



app.all("/", (req, res) => {
   res.contentType("xml");
    res.send(`
        <Response>
            <Message>Use promocode LIFTOFFEMEAJULY for $10 free credit or email ghockin@twilio.com for local currency</Message>
        </Response>
    `);
});

app.all("/sms", (req, res) => {
    const messagingResponse = new twiml.MessagingResponse();
    const name = req.body.Body;
    messagingResponse.message(`Hi ${name} you are amazing`);

    res.send(messagingResponse.toString());
});

app.all("/voice", (req, res) => {
    res.contentType("xml");

    const voiceResponse = new twiml.VoiceResponse();
    voiceResponse.say("Space is big, really big.");
    voiceResponse.play("https://api.twilio.com/cowbell.mp3");

    res.send(voiceResponse.toString());
});

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});
