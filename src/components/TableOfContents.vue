<!-- src/components/TableOfContents.vue -->
<script setup>
import { ref, computed, reactive } from "vue";

const props = defineProps({
  headings: { type: Array, default: () => [] },
  activeId: { type: String, default: "" },
});
const emit = defineEmits(["jump"]);

const showToc = ref(true);

const tree = computed(() => {
  const result = [];
  let current = null;

  for (const h of props.headings) {
    if (h.level === 2) {
      current = { ...h, children: [] };
      result.push(current);
    } else if (h.level === 3 && current) {
      current.children.push(h);
    } else {
      result.push({ ...h, children: [] });
      current = null;
    }
  }
  return result;
});

const expanded = reactive({});
function toggleSection(id) {
  expanded[id] = !expanded[id];
}
function isExpanded(id) {
  return expanded[id] === true;
}
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

    <nav v-show="showToc" class="max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
      <ul class="space-y-0.5">
        <li v-for="h in tree" :key="h.id">
          <div class="flex items-center">
            <button
              v-if="h.children.length"
              @click="toggleSection(h.id)"
              class="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded hover:bg-black/5 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition"
              :aria-label="
                isExpanded(h.id) ? 'Collapse section' : 'Expand section'
              "
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
    </nav>
  </div>
</template>

<style scoped>
nav::-webkit-scrollbar {
  width: 4px;
}
nav::-webkit-scrollbar-track {
  background: transparent;
}
nav::-webkit-scrollbar-thumb {
  background-color: rgba(128, 128, 128, 0.4);
  border-radius: 9999px;
}
</style>
