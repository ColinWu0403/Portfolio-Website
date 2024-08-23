<!-- src/views/Projects.vue -->
<template>
  <div class="mx-auto">
    <h1
      class="mechsuit-font md:text-3xl text-2xl font-bold text-tertiary md:ml-12 ml-6 mt-4 mb-5"
    >
      404 - Not Found
    </h1>
    <div class="relative">
      <!-- Shorter divider line on top -->
      <div class="divider-line-short"></div>

      <!-- Longer divider line below -->
      <div class="divider-line-long bottom-[7px]"></div>
    </div>

    <div
      class="flex flex-col max-h-screen mt-16 align-center items-center justify-center"
    >
      <h1 class="text-center text-4xl text-secondary mt-24 mb-24">
        Page Not Found
      </h1>
      <router-link
        to="/"
        class="text-center text-3xl text-tertiary hover:text-secondary hover:underline"
        >Back to Home</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  meta: [
    {
      name: "description",
      content: "404 Not Found.",
    },
    {
      property: "og:description",
      content: "Not Found Page.",
    },
    { property: "og:title", content: "Not Found Page" },
    { property: "og:image", content: "./icon.svg" }, // temp logo image
  ],
});
</script>

<style scoped>
/* Decorative divider styles */
.divider-line-long {
  position: relative;
  width: 90vw; /* Adjust to viewport width */
  max-width: 50rem; /* Max width for larger screens */
  height: 1rem;
  background-color: #17ffc4;
  overflow: hidden;

  /* Clip the bottom right corner to create a diagonal cut */
  clip-path: polygon(0 0, 100% 0, calc(100% - 1rem) 100%, 0% 100%);
  z-index: 1; /* Ensure this line is on top */
}

.divider-line-long::before {
  content: "";
  position: absolute;
  top: -2rem; /* Adjust to position the diagonal cut */
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 2rem 0 0 2rem; /* Adjust size of diagonal cut */
  border-color: transparent transparent #17ffc4 transparent;
}

.divider-line-short {
  position: relative;
  width: 88vw; /* Adjust to viewport width */
  max-width: 49rem; /* Max width for larger screens */
  height: 1rem;
  background-color: #e80f58;
  overflow: hidden;
  margin-top: -0.5rem; /* Adjust to overlap the long divider */

  /* Clip the bottom right corner to create a diagonal cut */
  clip-path: polygon(0 0, 100% 0, calc(100% - 1rem) 100%, 0% 100%);
  z-index: 2; /* Ensure this line is below the shorter line */
}

.divider-line-short::before {
  content: "";
  position: absolute;
  top: -1rem; /* Adjust to position the diagonal cut */
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1rem 0 0 1rem; /* Adjust size of diagonal cut */
  border-color: transparent transparent #17ffc4 transparent;
}
</style>
