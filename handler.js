import serverless from "serverless-http";
import { config, SES } from "aws-sdk";
import express from "express";
import cors from "cors";
import { urlencoded, json } from "body-parser";

const app = express();

if (!config.region) {
  config.update({
    region: "us-east-1"
  });
}

const ses = new SES();

let allowedOrigins = [
  'https://khurdt.github.io',
  'https://khurdt.github.io/portfolio/contact.html',
  'https://khurdt.github.io/portfolio/'
];

//implementing limits using CORS
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      //If a specific origin isn't found on the list of allowed origins
      let message = 'The CORS policy for this application does not allow access from origin ' + origin;
      return callback(new Error(message), false);
    }
    return callback(null, true);
  }
}));

app.use(urlencoded({ extended: false }));
app.use(json());

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
      res.status(200).send(data);
    }
  });
});

module.exports.form = serverless(app);
