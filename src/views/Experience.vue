<!-- src/views/Experience.vue -->
<template>
  <div class="max-w-8xl mx-auto px-6 md:px-12 py-10">
    <div class="flex flex-col md:flex-row md:items-start gap-10 md:gap-12">
      <!-- Left profile card -->
      <ProfileCard />

      <!-- Right section -->
      <div class="flex-1 min-w-0">
        <!-- Header -->
        <h1
          class="mechsuit-font md:text-2xl text-2xl font-bold text-tertiary mb-5"
        >
          Experience
        </h1>
        <div class="relative mb-5">
          <!-- Shorter divider line on top -->
          <div class="divider-line-short"></div>

          <!-- Longer divider line below -->
          <div class="divider-line-long bottom-[5.5px]"></div>
        </div>

        <!-- Experience Cards -->
        <div class="flex flex-col space-y-8">
          <ExperienceCard
            v-for="experience in experiences"
            :key="experience.id"
            :title="experience.title"
            :company="experience.company"
            :dates="experience.dates"
            :description="experience.description"
          />
        </div>

        <!-- Header -->
        <h1
          class="mechsuit-font md:text-2xl text-2xl font-bold text-tertiary mb-5"
        >
          Leadership
        </h1>
        <div class="relative mb-5">
          <!-- Shorter divider line on top -->
          <div class="divider-line-short"></div>

          <!-- Longer divider line below -->
          <div class="divider-line-long bottom-[5.5px]"></div>
        </div>

        <!-- Leadership Cards -->
        <div class="flex flex-col space-y-8">
          <ExperienceCard
            v-for="experience in leadership"
            :key="experience.id"
            :title="experience.title"
            :company="experience.company"
            :dates="experience.dates"
            :description="experience.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import ExperienceCard from "../components/ExperienceCard.vue";
import ProfileCard from "../components/ProfileCard.vue";
import { experiences, leadership } from "../constants/experiences";

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
