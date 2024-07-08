<!-- src/views/About.vue -->
<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-white text-3xl font-bold mb-4">About</h1>
    <p class="text-white text-lg text-center">About Page</p>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  meta: [
    {
      name: "description",
      content: "About Me",
    },
    {
      property: "og:description",
      content: "A little bit about me.",
    },
    { property: "og:title", content: "About Me" },
    { property: "og:image", content: "https://vitejs.dev/logo.svg" }, // temp logo image
  ],
});
</script>

<style scoped>
/* Add any scoped styles specific to this page if needed */
</style>
