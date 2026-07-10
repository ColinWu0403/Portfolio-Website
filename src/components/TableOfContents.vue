<!-- src/components/TableOfContents.vue -->
<script setup>
defineProps({
  headings: { type: Array, default: () => [] }, // [{ id, text, level }]
  activeId: { type: String, default: "" },
});
const emit = defineEmits(["jump"]);
</script>

<template>
  <nav v-if="headings.length" class="text-sm">
    <p
      class="font-bold text-primary dark:text-white mb-3 uppercase tracking-wide text-lg"
    >
      On this page
    </p>
    <ul class="space-y-2 border-l border-black/10 dark:border-white/10">
      <li v-for="h in headings" :key="h.id">
        <a
          :href="`#${h.id}`"
          @click.prevent="emit('jump', h.id)"
          class="block -ml-px border-l-2 py-0.5 transition"
          :class="[
            h.level === 3 ? 'pl-10' : 'pl-6',
            activeId === h.id
              ? 'border-magenta dark:border-secondary text-magenta dark:text-secondary font-semibold'
              : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-magenta dark:hover:text-secondary',
          ]"
        >
          {{ h.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
