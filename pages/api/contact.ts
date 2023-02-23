// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Initializing nodemailer with settings

  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.subject ||
    !req.body.message
  ) {
    res.status(400).json({
      success: "false",
    });
  }

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    secure: false,
    host: "smtp.office365.com",
    port: "587",
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // Configuring Mail Data
  const mailData = {
    from: process.env.MAIL_USER,
    to: "info@dasksoft.com",
    subject: `Inquiry from ${req.body.firstName + " " + req.body.lastName}`,
    html: `<p>Hello</p>
    <p>${
      req.body.firstName + " " + req.body.lastName
    } has contacted us for the subject of ${req.body.subject}.</p>
    <p>Message: ${req.body.message}</p>

    
    <p>The contact details are as follows:</p>
    <p>Contact Number: ${req.body.phone} </p>
    <p>Contact Email: ${req.body.email} </p>

    <p> Regards, </p>
    <p> Dasksoft Inc </p>
    `,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: any, info: any) => {
      if (err) {
        console.error(err);
        reject(err);
        res.status(500).json({
          success: "false",
          error: err,
        });
      } else {
        resolve(info);
        res.status(200).json({
          success: "true",
        });
      }
    });
  });

  // Sending the email, followed by status code.
  // try {
  //   const mailRes = transporter.sendMail(mailData);
  //   res.status(200).json({
  //     success: "true",
  //   });
  // } catch (e) {
  //   res.status(500).json({
  //     success: "false",
  //   });
  // }
}
