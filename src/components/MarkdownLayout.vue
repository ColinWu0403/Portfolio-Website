<!-- src/components/MarkdownLayout.vue -->
<script setup>
import { formatDate } from "../utils/date";

defineProps({
  frontmatter: { type: Object, default: () => ({}) },
});
</script>

<template>
  <article>
    <header class="mb-8">
      <h1 class="mechsuit-font text-2xl md:text-3xl text-tertiary">
        {{ frontmatter.title }}
      </h1>
      <p v-if="frontmatter.date" class="text-sm text-gray-500 italic mt-2">
        {{ formatDate(frontmatter.date) }}
      </p>
    </header>
    <div class="prose prose-invert max-w-none">
      <slot />
    </div>
  </article>
</template>
