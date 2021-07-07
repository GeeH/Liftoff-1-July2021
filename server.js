const express = require("express");
const bodyParser = require("body-parser");
const twiml = require("twilio").twiml;

const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.all("/", (req, res) => {
   res.send("ahoy.");
});

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});
