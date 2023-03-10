import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    success: "true",
    creds:
      "user: " + process.env.MAIL_USER + " // pass: " + process.env.MAIL_PASS,
  });
}
