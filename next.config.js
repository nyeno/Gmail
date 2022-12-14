/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "ssl.gstatic.com",
      "fonts.gstatic.com",
      "www.gstatic.com",
      "lh3.googleusercontent.com",
      "www.google.com"
    ],
  },
};

module.exports = nextConfig;
