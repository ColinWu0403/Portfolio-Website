<template>
  <div class="experience-card flex flex-col mb-8 max-w-5xl">
    <!-- Job Title -->
    <h2 class="text-2xl font-bold text-tertiary">{{ title }}</h2>

    <!-- Company and Dates Row -->
    <div class="flex justify-between items-center">
      <!-- Left Side: Company Name -->
      <p class="text-lg font-medium text-pastel_white">{{ company }}</p>

      <!-- Right Side: Dates -->
      <div class="text-right text-lg text-pastel_white">
        <p>{{ dates }}</p>
      </div>
    </div>

    <!-- Divider Line -->
    <div class="divider-line mt-2"></div>

    <!-- Job Description Bullet Points -->
    <ul class="mt-4 list-none list-inside w-4/5">
      <li
        v-for="(point, index) in description"
        :key="index"
        class="text-md text-white mb-3 custom-bullet"
      >
        {{ point }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  company: { type: String, required: true },
  dates: { type: String, required: true },
  description: { type: Array, required: true },
});
</script>

<style scoped>
/* Experience Card Styles */
.experience-card {
  margin-bottom: 2rem;
}

/* Divider Line Style */
.divider-line {
  width: 100%;
  height: 2px;
  background-color: #17ffc4; /* e80f58 ffd627  */
}

/* Custom Bullet Points */
.custom-bullet::before {
  content: "\25B6"; /* Unicode for right-pointing triangle */
  color: #ffd627; /* Set the color for the triangle */
  margin-right: 8px; /* Space between bullet and text */
}
</style>
