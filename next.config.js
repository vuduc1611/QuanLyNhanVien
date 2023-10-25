/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();
const nextConfig = {
  reactStrictMode: false,
  env: {
    REACT_APP_API_URL: "http://localhost:8080",
  },
};

module.exports = nextConfig;
