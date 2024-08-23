const SitemapPlugin = require("sitemap-webpack-plugin").default;

// Get the current date in YYYY-MM-DD format
const currentDate = new Date().toISOString().split("T")[0];

const paths = [
  {
    path: "/",
    lastmod: currentDate,
    priority: 1.0,
  },
  {
    path: "/about",
    lastmod: currentDate,
    priority: 0.8,
  },
  {
    path: "/projects",
    lastmod: currentDate,
    priority: 0.8,
  },
  {
    path: "/experience",
    lastmod: currentDate,
    priority: 0.8,
  },
  {
    path: "/music",
    lastmod: currentDate,
    priority: 0.8,
  },
  // Add other routes here
];

module.exports = {
  plugins: [
    new SitemapPlugin({
      base: "https://www.colinwu.net", // Replace with your domain
      paths,
      options: {
        filename: "sitemap.xml",
        lastmod: true,
        changefreq: "monthly",
      },
    }),
  ],
};
