<template>
  <div
    class="flex flex-col md:flex-row bg-darker_slate text-white p-4 rounded-lg shadow-md mb-4 max-w-5xl"
  >
    <!-- Container for Title and Description Box -->
    <div class="flex-1 flex flex-col relative">
      <!-- Title and Date -->
      <p class="text-sm text-secondary">{{ dateRange }}</p>
      <h2 class="md:text-2xl text-xl font-bold text-white">
        {{ title }}
      </h2>
      <!-- Project Image (Mobile Only) -->
      <div class="md:hidden flex justify-center mt-2 mb-4">
        <img
          :src="imageSrc"
          :alt="title"
          class="shadow-md max-h-full rounded-md"
          loading="lazy"
        />
      </div>
      <!-- Description Box -->
      <div class="bg-dark_slate p-2 mt-2 mb-4 max-w-full rounded-md">
        <p class="md:text-base text-md text-white description-text">
          {{ description }}
        </p>
      </div>
      <!-- Technologies -->
      <ul class="flex flex-wrap md:mb-4 mb-2 md:text-base text-md">
        <li
          v-for="(tech, index) in technologies"
          :key="index"
          :style="{ color: getColorClass(tech.color) }"
          :class="`mr-2 md:mb-2 px-2 py-1 font-[500] rounded`"
        >
          {{ tech.name }}
        </li>
      </ul>
      <!-- Source Links -->
      <div class="flex md:mb-0 mb-4">
        <a
          :href="githubLink"
          target="_blank"
          class="text-slate hover:text-tertiary mx-2 text-2xl transition"
          aria-label="Source Code on GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          :href="demoLink"
          target="_blank"
          class="text-slate hover:text-tertiary mx-2 text-2xl transition"
          aria-label="Demo Link"
        >
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
    <!-- Project Image (Desktop Only) -->
    <div class="md:flex-1 md:ml-4 md:w-1/3 hidden md:flex items-center">
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
