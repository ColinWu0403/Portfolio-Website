<!-- src/views/Home.vue -->
<template>
  <div class="flex flex-col">
    <div class="align-center justify-center">
      <h1
        class="mechsuit-font text-secondary text-center text-6xl font-bold mb-4"
      >
        Colin Wu
      </h1>
      <p class="text-white text-lg text-center">Website</p>
    </div>
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
.wave-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: black;
}

.wave-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: url("/wave-pattern.svg") repeat;
  animation: wave-animation 10s linear infinite;
}

@keyframes wave-animation {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
</style>
