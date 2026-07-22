import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Markdown from "unplugin-vue-markdown/vite";
// import Sitemap from "vite-plugin-sitemap";
import footnote from "markdown-it-footnote";
import anchor from "markdown-it-anchor";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // let Vue compile markdown too
    }),
    Pages({
      extensions: ["vue", "md"],
    }),
    Markdown({
      wrapperComponent: "MarkdownLayoutBlog",
      markdownItSetup(md) {
        md.use(footnote);
        md.use(anchor, {
          level: [2, 3], // ## and ### get ids
          slugify: (s) =>
            s
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-"),
        });
      },
    }),
    // Sitemap({
    //   siteUrl: "https://colinwu.net",
    //   changefreq: "daily",
    //   priority: 0.7,
    //   generateIndexSitemap: true,
    //   additionalPaths: async (config) => [
    //     { loc: "/", lastmod: new Date() },
    //     { loc: "/about", lastmod: new Date() },
    //     { loc: "/projects", lastmod: new Date() },
    //     { loc: "/experience", lastmod: new Date() },
    //     { loc: "/music", lastmod: new Date() },
    //   ],
    // }),
  ],
  server: {
    allowedHosts: true,
  },
});
