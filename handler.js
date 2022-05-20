import serverless from "serverless-http";
import { config, SES } from "aws-sdk";
import express from "express";
import cors from "cors";
import { urlencoded, json } from "body-parser";

const app = express();

if (!AWS.config.region) {
  AWS.config.update({
    region: "us-east-1"
  });
}

const ses = new AWS.SES();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  const emailParams = {
    Source: "joshuahurdt@gmail.com", // Your Verified Email
    Destination: {
      ToAddresses: ["joshuahurdt@gmail.com"] // Your verfied Email
    },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `${message}  from ${name}, email: ${email}, phone: ${phone}`
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "You Received a Message from www.domainname.com"
      }
    }
  };

  ses.sendEmail(emailParams, (err, data) => {
    if (err) {
      res.status(402).send(`${err} ${err.stack}`);
    }
    if (data) {
      res.send(data);
    }
  });
});

module.exports.form = serverless(app);
