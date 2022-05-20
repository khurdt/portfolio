import serverless from "serverless-http";
import { config, SES } from "aws-sdk";
import express from "express";
import cors from "cors";
import { urlencoded, json } from "body-parser";

const app = express();

if (!config.region) {
  config.update({
    region: 'add your region'
  });
}

const ses = new SES();

app.use(cors());

//parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));

//parse application/json
app.use(json());

app.post('/contact.html', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const emailParams = {
    Source: 'joshuahurdt@gmail.com',
    Destination: {
      toAddresses: ['joshuahurdt@gmail.com']
    },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `${message} from ${email}`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'You Received a Message from https://khurdt.github.io/portfolio/contact.html'
      }
    }
  }

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
