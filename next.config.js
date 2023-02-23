/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
  },
};

module.exports = nextConfig;
