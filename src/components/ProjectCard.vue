<!-- src/components/ProjectCard.vue -->
<template>
  <div
    class="flex bg-gray-800 text-white p-4 rounded-lg shadow-md mb-8 max-w-4xl"
  >
    <div class="flex-1 relative">
      <p class="text-sm text-gray-400">{{ dateRange }}</p>
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <div class="bg-gray-700 p-2 mt-2 mb-4 max-w-full rounded-sm">
        <p class="text-white description-text">{{ description }}</p>
      </div>
      <ul class="flex flex-wrap mb-4">
        <li
          v-for="(tech, index) in technologies"
          :key="index"
          class="mr-2 mb-2 px-2 py-1 bg-gray-600 rounded"
        >
          {{ tech }}
        </li>
      </ul>
      <div class="flex">
        <a
          :href="githubLink"
          target="_blank"
          class="text-gray-400 hover:text-white mx-2 text-2xl"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          :href="demoLink"
          target="_blank"
          class="text-gray-400 hover:text-white mx-2 text-2xl"
        >
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
    <div class="ml-4 w-1/3 relative items-center">
      <img
        :src="imageSrc"
        :alt="title"
        class="rounded-lg shadow-md max-h-full"
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
</script>

<style scoped>
.description-text {
  white-space: pre-line; /* Preserve whitespace and interpret \n as line breaks */
}
</style>
