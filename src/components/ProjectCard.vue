<!-- src/components/ProjectCard.vue -->
<template>
  <div
    class="flex flex-col bg-blueish/5 dark:bg-darker_slate text-white p-5 rounded-sm shadow-md border border-white/5"
  >
    <h2 class="text-xl font-bold text-primary dark:text-white mb-2">
      {{ title }}
    </h2>

    <p
      class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 description-text"
    >
      {{ description }}
    </p>

    <ul class="flex flex-wrap gap-2 mb-4">
      <li
        v-for="(tech, index) in technologies"
        :key="index"
        class="px-2.5 py-1 text-[0.7rem] font-medium rounded-full"
        :style="{
          color: getColorClass(tech.color),
          backgroundColor: getColorClass(tech.color) + '1a',
        }"
      >
        {{ tech.name }}
      </li>
    </ul>

    <div
      v-if="githubLink || demoLink"
      class="flex gap-3 pt-3 mt-auto border-t border-blueish/30 dark:border-white/10"
    >
      <a
        :href="githubLink"
        target="_blank"
        class="text-blueish/50 dark:text-slate hover:text-magenta dark:hover:text-tertiary mx-2 text-2xl transition"
        aria-label="Source Code on GitHub"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        :href="demoLink"
        target="_blank"
        class="text-blueish/50 dark:text-slate hover:text-magenta dark:hover:text-tertiary mx-2 text-2xl transition"
        aria-label="Demo Link"
      >
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  dateRange: String,
  title: String,
  description: String,
  technologies: Array,
  githubLink: String,
  demoLink: String,
});

// Function to map Tailwind CSS color classes or hex codes
const getColorClass = (color) => {
  switch (color) {
    case "primary":
      return "#040112";
    case "secondary":
      return "#17FFC4";
    case "tertiary":
      return "#ffd627";
    case "blueish":
      return "#4361EE";
    case "magenta":
      return "#E80F58";
    case "lime":
      return "#45F414";
    case "slate":
      return "#aaa6c3";
    case "dark_slate":
      return "#4b4959";
    case "orange":
      return "#fb5607";
    case "light_blue":
      return "#4cc9f0";
    case "violet":
      return "#a100f2";
    case "red":
      return "#ff0000";
    case "purple":
      return "#7900ff";
    default:
      return "#ffffff"; // Default to white if color is undefined
  }
};
</script>

<style scoped>
.description-text {
  white-space: pre-line; /* Preserve whitespace and interpret \n as line breaks */
}
</style>
