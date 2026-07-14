<!-- src/components/TocList.vue -->
<template>
  <ul class="space-y-0.5">
    <li v-for="h in tree" :key="h.id">
      <div class="flex items-center">
        <button
          v-if="h.children.length"
          @click="emit('toggle', h.id)"
          class="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded hover:bg-black/5 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition"
          :aria-label="isExpanded(h.id) ? 'Collapse section' : 'Expand section'"
        >
          <i
            class="fas fa-chevron-right text-xs transition-transform"
            :class="isExpanded(h.id) ? 'rotate-90' : ''"
          ></i>
        </button>
        <span v-else class="w-6 flex-shrink-0"></span>
        <a
          :href="`#${h.id}`"
          @click.prevent="emit('jump', h.id)"
          class="block flex-1 py-1 px-2 rounded transition"
          :class="
            activeId === h.id
              ? 'text-magenta dark:text-tertiary font-bold'
              : 'text-gray-600 dark:text-gray-400 hover:text-magenta dark:hover:text-tertiary'
          "
        >
          {{ h.text }}
        </a>
      </div>

      <ul v-if="h.children.length && isExpanded(h.id)" class="space-y-0.5">
        <li v-for="child in h.children" :key="child.id">
          <a
            :href="`#${child.id}`"
            @click.prevent="emit('jump', child.id)"
            class="block py-1 pl-12 pr-2 rounded transition"
            :class="
              activeId === child.id
                ? 'text-magenta dark:text-tertiary font-bold'
                : 'text-gray-600 dark:text-gray-400 hover:text-magenta dark:hover:text-tertiary'
            "
          >
            {{ child.text }}
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  tree: { type: Array, default: () => [] },
  activeId: { type: String, default: "" },
  isExpanded: { type: Function, required: true },
});
const emit = defineEmits(["jump", "toggle"]);
</script>
