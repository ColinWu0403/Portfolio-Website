<!-- src/views/Blog.vue -->
<script setup>
import { useHead } from "@vueuse/head";
import { formatDate } from "../utils/date";

const modules = import.meta.glob("../content/blog/\*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

// Parsing markdown files
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const data = {};
  match[1].split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  });
  return data;
}

const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.split("/").pop().replace(".md", "");
    return { slug, ...parseFrontmatter(raw) };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

useHead({
  meta: [
    { name: "description", content: "My Blog." },
    { property: "og:description", content: "My Blog." },
    { property: "og:title", content: "Blog" },
    { property: "og:image", content: "https://vitejs.dev/logo.svg" },
  ],
});
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 md:px-12 py-6">
    <h1
      class="mechsuit-font text-2xl font-bold text-blueish dark:text-tertiary mb-2"
    >
      Blog
    </h1>
    <p class="text-primary dark:text-white mb-6">Listen to me yap here</p>

    <div class="space-y-4">
      <router-link
        v-for="post in posts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="block border border-magenta/30 dark:border-secondary/30 rounded-lg p-5 hover:border-magenta/90 dark:hover:border-secondary/50 hover:bg-pink/10 dark:hover:bg-white/5 transition"
      >
        <h2 class="text-xl font-bold text-primary dark:text-white">
          {{ post.title }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-md mt-1">
          {{ post.description }}
        </p>
        <p class="text-sm text-magenta dark:text-secondary mt-3">
          {{
            formatDate(post.date, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          }}
        </p>
      </router-link>
    </div>
  </div>
</template>
