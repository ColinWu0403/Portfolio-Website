<!-- src/components/ProjectCard.vue -->
<template>
  <div
    class="flex flex-col dark:bg-darker_slate text-white rounded-sm shadow-md border border-white/5"
    :class="compact ? 'p-4 bg-pink/5' : 'p-5 bg-blueish/5'"
  >
    <h2
      class="font-bold text-primary dark:text-white mb-2"
      :class="compact ? 'text-xl' : 'text-xl'"
    >
      {{ title }}
    </h2>

    <p
      class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 description-text"
      :class="compact ? 'text-sm line-clamp-6' : 'text-sm'"
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
        class="text-blueish/50 dark:text-slate hover:text-magenta dark:hover:text-tertiary mx-2 transition"
        :class="compact ? 'text-lg' : 'text-2xl'"
        aria-label="Source Code on GitHub"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        :href="demoLink"
        target="_blank"
        class="text-blueish/50 dark:text-slate hover:text-magenta dark:hover:text-tertiary mx-2 transition"
        :class="compact ? 'text-lg' : 'text-2xl'"
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
  compact: { type: Boolean, default: false },
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
      return "#ffffff";
  }
};
</script>

<style scoped>
.description-text {
  white-space: pre-line;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
