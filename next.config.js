/** @type {import('next').NextConfig} */
const protocol = process.env.IMAGES_REMOTE_PATTERNS_PROTOCOL || "http";
const hostname = process.env.IMAGES_REMOTE_PATTERNS_HOSTNAME || "localhost";
const port = process.env.IMAGES_REMOTE_PATTERNS_PORT == undefined ? "1337" : "";
const nextConfig = {
  images: {
    //domains: ["localhost", "s3.ap-south-1.amazonaws.com"],
    remotePatterns: [
      {
        protocol: protocol,
        hostname: hostname,
        port: port,
        pathname: "**",
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
