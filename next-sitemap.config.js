/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://360.one",
  generateRobotsTxt: true,
  additionalSitemaps: ["/sitemap-0.xml"],
  exclude: ["/sitemap-0.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["http://360.one/sitemap-0.xml"],
  },
};
