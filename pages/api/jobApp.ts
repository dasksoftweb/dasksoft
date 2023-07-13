// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (!req.body.title || !req.body.name || !req.body.desc) {
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
  const mailData = {
    from: process.env.MAIL_USER,
    to: "shubhamsurve704@gmail.com",
    subject: `Job Application for ${req.body.title}`,
    html: `<p>Hello</p>
    <p>${req.body.name} has applied for the position of ${req.body.title}.</p>
    <p>The details regarding the application are as follows:</p>
    <p>Background: ${req.body.desc}</p>
    <p>CV: <a target="_blank" href=${req.body.cvUrl}> Link </a> </p>
    <p>The contact details of the applicant are as follows:</p>
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
}
