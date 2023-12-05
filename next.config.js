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
  // Adding policies:
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // {
          //   key: "Content-Security-Policy",
          //   value:
          //     "default-src 'self'; connect-src 'self' https://api-js.mixpanel.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
          // },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), battery=(), geolocation=(), microphone=()",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
