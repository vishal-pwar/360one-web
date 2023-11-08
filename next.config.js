/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";
// const cmsUrl = new URL(process.env.NEXT_PUBLIC_STRAPI_API_URL);
const nextConfig = {
  images: {
    domains: ["localhost", "s3.localhost.localstack.cloud"],
    // remotePatterns: [
    //   {
    //     protocol: isProd ? "https" : "http",
    //     hostname: isProd ? cmsUrl.hostname : "localhost",
    //     port: isProd ? "" : "1337",
    //     pathname: "**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
