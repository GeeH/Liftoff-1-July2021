# Playbook: Liftoff Foundations

#### Introduction to the Console
Brief overview of how you sign up to Twilio (if appropriate), followed by a short tour of the console. Where do you
find everything? How do you buy a number? Where do you find your account SID and Auth Token?

#### Introduction to TwiML
A short overview of what TwiML is, common verbs and response you'll use such as `<Message>` ,`<Say>` and `<Play>`.

#### DEMO - Delivering TwiML from an SMS
- Using the number we bought earlier, set up a TwiML bin to respond to incoming text with a static response, maybe
  sending a promo code for free credit ([twiml/demo-1.xml](twiml/demo-1.xml))

#### Webhooks
An overview of what webhooks are, and how the work for responding to incoming SMS and voice calls. You could use the traditional
diagram ([incoming-sms.png](./../diagrams/incoming-sms.png)).

#### DEMO - Webhooks
- Show express serving a basic hello world message on the root route using node.js ([javascript/demo-1.js](javascript/demo-1.js))
- Return some valid TwiML as XML from the `/sms` route that replies with a message ([javascript/demo-2.js](javascript/demo-2.js))
  ; by using the `.all` method you can show it in the browser first
- Set up the number you purchased during the console demo to use this webhook (via Ngrok) instead of the TwiML bin
- Using the Twilio Node helper library (`npm install twilio`), explain how you can generate the TwiML using a
  `VoiceResponse`  instead of handwriting the TwiML ([javascript/demo-3.js](javascript/demo-2.js))
- Modify the `/sms` route, so it parses the incoming message and returns the persons name (or whatever the text in)
  ([javascript/demo-4.js](javascript/demo-4.js))

#### API
A short overview of how you trigger your own events rather than respond to incoming events. Explain that we
have a RESTful API but it's easy to use with the Twilio Client wrapper.

#### DEMO - API
- Explain what the Twilio helper library does, and how to create it using environment variables for secrets
- Use the typical 5 minute demo technique to call everyone who text in earlier back and connect them to a
  conference call ([javascript/demo-5.js](javascript/demo-5.js))

#### Wrapup
Brief overview of what we've covered today.
