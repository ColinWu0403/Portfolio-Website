<!-- src/views/Home.vue -->
<template>
  <div class="max-w-8xl mx-auto px-6 md:px-12 py-10">
    <ProfileBanner />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import ProfileCard from "../components/ProfileCard.vue";
import ProfileBanner from "../components/ProfileBanner.vue";

useHead({
  meta: [
    { name: "description", content: "Colin Wu's personal website" },
    { property: "og:title", content: "Colin Wu" },
    { property: "og:description", content: "A little bit about me." },
  ],
});
</script>

<style scoped>
/* Decorative divider styles */
.divider-line-long {
  position: relative;
  width: 50vw; /* Adjust to viewport width */
  max-width: 30rem; /* Max width for larger screens */
  height: 0.75rem;
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
  width: 48vw; /* Adjust to viewport width */
  max-width: 29rem; /* Max width for larger screens */
  height: 0.75rem;
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
