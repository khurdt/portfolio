const aws = require('aws-sdk');
const nodemailer = require('nodemailer');
const ses = new aws.SES();

module.exports.sendEmail = async (event, context, callback) => {

  let stringifiedEvent = JSON.stringify(event);
  let parsedEvent = JSON.parse(stringifiedEvent);
  let responseBody = JSON.parse(parsedEvent.body);
  let name = await responseBody.name;
  let email = await responseBody.email;
  let phone = await responseBody.phone;
  let message = await responseBody.message;

  const transporter = nodemailer.createTransport({
    SES: ses
  });

  try {
    if (name !== undefined) {
      await transporter.sendMail({
        from: process.env.EMAIL_ID, // sender address
        to: process.env.EMAIL_ID, // receiver address
        cc: email,
        subject: `${name} contacted you from your portfolio website`, // subject line, taken from client request
        html: `<p>${name}</p><p>${phone}</p><p>${email}</p><p>${message}</p>`
      });
    }
  } catch (error) {
    console.log(error);
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody),
    isBase64Encoded: false,
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': 'https://khurdt.github.io',
    },
  });
}
