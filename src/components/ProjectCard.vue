<!-- src/components/ProjectCard.vue -->
<template>
  <div
    class="flex bg-darker_slate text-white p-4 rounded-lg shadow-md mb-4 max-w-5xl"
  >
    <div class="flex-1 relative">
      <!-- Title and Date -->
      <p class="text-sm text-secondary">{{ dateRange }}</p>
      <h2 class="text-2xl font-bold text-white">{{ title }}</h2>
      <!-- Description Box -->
      <div class="bg-dark_slate p-2 mt-2 mb-4 max-w-full rounded-md">
        <p class="text-white description-text">{{ description }}</p>
      </div>
      <!-- Technologies -->
      <ul class="flex flex-wrap mb-4">
        <li
          v-for="(tech, index) in technologies"
          :key="index"
          :style="{ color: getColorClass(tech.color) }"
          :class="`mr-2 mb-2 px-2 py-1 font-[500] rounded`"
        >
          {{ tech.name }}
        </li>
      </ul>
      <!-- Source Links -->
      <div class="flex">
        <a
          :href="githubLink"
          target="_blank"
          class="text-slate hover:text-tertiary mx-2 text-2xl"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          :href="demoLink"
          target="_blank"
          class="text-slate hover:text-tertiary mx-2 text-2xl"
        >
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
    <!-- Project Image -->
    <div class="ml-4 w-1/3 flex items-center">
      <img
        :src="imageSrc"
        :alt="title"
        class="shadow-md max-h-full"
        loading="lazy"
      />
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
  imageSrc: String,
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
