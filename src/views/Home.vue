<!-- src/views/Home.vue -->
<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="mechsuit-font text-secondary text-6xl font-bold mb-4">
      Colin Wu
    </h1>
    <p class="text-white text-lg text-center">Website</p>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  meta: [
    {
      name: "description",
      content: "Colin's Personal Website",
    },
    {
      property: "og:description",
      content: "Colin's Personal Website",
    },
    { property: "og:title", content: "Colin's Homepage" },
    { property: "og:image", content: "https://vitejs.dev/logo.svg" }, // temp logo image
  ],
});
</script>

<style scoped>
/* Add any scoped styles specific to this page if needed */
</style>
