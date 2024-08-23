import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      siteUrl: "https://colinwu.net",
      changefreq: "daily",
      priority: 0.7,
      generateIndexSitemap: true,
      additionalPaths: async (config) => [
        { loc: "/", lastmod: new Date() },
        { loc: "/about", lastmod: new Date() },
        { loc: "/projects", lastmod: new Date() },
        { loc: "/experience", lastmod: new Date() },
        { loc: "/music", lastmod: new Date() },
      ],
    }),
  ],
});
