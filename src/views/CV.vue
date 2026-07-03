<template>
  <div class="max-w-8xl mx-auto px-6 md:px-12 py-10">
    <div class="flex flex-col md:flex-row md:items-start gap-10 md:gap-12">
      <!-- Left profile card -->
      <ProfileCard />

      <!-- Right section -->
      <div class="flex-1 min-w-0">
        <h1
          class="mechsuit-font md:text-2xl text-2xl font-bold text-blueish dark:text-tertiary mb-5"
        >
          CV
        </h1>
        <div class="relative mb-5">
          <!-- Shorter divider line on top -->
          <div class="divider-line-short"></div>

          <!-- Longer divider line below -->
          <div class="divider-line-long bottom-[5.5px]"></div>
        </div>

        <div class="text-primary dark:text-white space-y-4 leading-relaxed">
          <p>CV</p>
        </div>

        <!-- Optional: featured projects preview, pulling from your existing constants/projects.js -->
        <!--
        <div class="mt-10">
          <h3 class="mechsuit-font text-xl text-tertiary mb-4">Featured Projects</h3>
          ...
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import ProfileCard from "../components/ProfileCard.vue";

useHead({
  meta: [
    { name: "description", content: "Colin Wu's research" },
    { property: "og:title", content: "Colin Wu" },
    { property: "og:description", content: "A little bit about me." },
  ],
});
</script>
