<!-- src/components/TableOfContents.vue -->
<script setup>
import { ref } from "vue";

defineProps({
  headings: { type: Array, default: () => [] },
  activeId: { type: String, default: "" },
});
const emit = defineEmits(["jump"]);

const showToc = ref(true);
</script>

<template>
  <div v-if="headings.length" class="text-sm">
    <div class="flex items-center mb-3">
      <p
        class="font-bold uppercase tracking-wide text-lg text-primary dark:text-white mr-4"
      >
        Contents
      </p>
      <button
        @click="showToc = !showToc"
        class="flex items-center text-md gap-1 px-2 py-0.5 rounded border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-magenta dark:hover:text-tertiary hover:border-magenta/40 dark:hover:border-tertiary/40 transition"
      >
        <i
          :class="showToc ? 'fas fa-eye-slash' : 'fas fa-eye'"
          class="text-md"
        ></i>
        {{ showToc ? "Hide" : "Show" }}
      </button>
    </div>

    <nav v-show="showToc">
      <ul class="space-y-2 border-l border-black/10 dark:border-white/10">
        <li v-for="h in headings" :key="h.id">
          <a
            :href="`#${h.id}`"
            @click.prevent="emit('jump', h.id)"
            class="block -ml-px border-l-2 py-0.5 transition"
            :class="[
              h.level === 3 ? 'pl-10' : 'pl-6',
              activeId === h.id
                ? 'border-magenta dark:border-tertiary text-magenta dark:text-tertiary font-semibold'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-magenta dark:hover:text-tertiary',
            ]"
          >
            {{ h.text }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
