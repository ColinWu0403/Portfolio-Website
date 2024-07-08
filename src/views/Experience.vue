<!-- src/views/Experience.vue -->
<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-white text-3xl font-bold mb-4">Experience</h1>
    <p class="text-white text-lg text-center">Experience Page</p>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  meta: [
    {
      name: "description",
      content: "My Work and Leadership Experiences.",
    },
    {
      property: "og:description",
      content: "My Work and Leadership Experiences.",
    },
    { property: "og:title", content: "Colin's Experience" },
    { property: "og:image", content: "https://vitejs.dev/logo.svg" }, // temp logo image
  ],
});
</script>

<style scoped>
/* Add any scoped styles specific to this page if needed */
</style>
