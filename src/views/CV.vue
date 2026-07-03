<!-- src/views/CV.vue -->
<template>
  <div class="max-w-8xl mx-auto px-6 md:px-12 py-10">
    <div class="flex flex-col md:flex-row md:items-start gap-10 md:gap-12">
      <!-- Left profile card -->
      <div class="hidden md:block">
        <ProfileCard />
      </div>

      <!-- Right section -->
      <div class="flex-1 min-w-0">
        <div class="rounded-lg overflow-hidden bg-white">
          <!-- PDF preview -->
          <iframe
            src="./ChiCheColinWuResume.pdf#toolbar=1&navpanes=0&zoom=100"
            title="Colin Wu's Resume"
            class="w-full h-[800px]"
          ></iframe>

          <!-- Fallback / download bar -->
          <div
            class="flex items-center justify-between px-5 py-2 bg-blueish/10 dark:bg-darker_slate border-t border-black/50 dark:border-white/10 text-sm transition"
          >
            <a
              :href="resumePath"
              download="ChiCheColinWuResume.pdf"
              class="items-center gap-3 px-8 py-2 rounded-md bg-blueish/10 dark:bg-tertiary/10 hover:bg-magenta/10 dark:hover:bg-secondary/10 text-blueish hover:text-magenta dark:text-tertiary dark:hover:text-secondary text-md font-semibold hover:underline transition"
            >
              Download CV
            </a>
            <a
              :href="resumePath"
              target="_blank"
              class="text-blueish hover:text-magenta dark:text-tertiary dark:hover:text-secondary text-md font-semibold hover:underline flex items-center gap-1 transition"
            >
              Open in new tab
              <i class="fas fa-arrow-up-right-from-square text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import ProfileCard from "../components/ProfileCard.vue";

const resumePath = "/ChiCheColinWuResume.pdf";
const resumeViewerSrc = `${resumePath}#toolbar=1&navpanes=0&zoom=75`;

useHead({
  meta: [
    { name: "description", content: "Colin Wu's CV" },
    { property: "og:title", content: "Colin Wu" },
    { property: "og:description", content: "Colin Wu's CV and resume." },
  ],
});
</script>
