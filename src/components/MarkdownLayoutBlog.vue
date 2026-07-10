<!-- src/components/MarkdownLayoutBlog.vue -->
<script setup>
import { formatDate } from "../utils/date";

defineProps({
  frontmatter: { type: Object, default: () => ({}) },
});
</script>

<template>
  <article>
    <header class="mb-8">
      <h1
        id="top"
        class="text-3xl font-bold md:text-4xl text-magenta dark:text-tertiary"
      >
        {{ frontmatter.title }}
      </h1>
      <p
        v-if="frontmatter.date"
        class="text-md text-primary dark:text-light italic mt-2"
      >
        {{ formatDate(frontmatter.date) }}
      </p>
    </header>
    <div class="prose dark:prose-invert max-w-none">
      <slot />
    </div>
  </article>
</template>
