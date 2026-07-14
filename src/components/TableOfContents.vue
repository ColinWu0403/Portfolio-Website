<!-- src/components/TableOfContents.vue -->
<script setup>
import { ref, computed, reactive, watch, onBeforeUnmount } from "vue";
import TocList from "./TocList.vue";
import { useMobileNav } from "../utils/useMobileNav";

const props = defineProps({
  headings: { type: Array, default: () => [] },
  activeId: { type: String, default: "" },
});
const emit = defineEmits(["jump"]);

const { isMobileNavOpen } = useMobileNav();

const showToc = ref(true);
const mobileOpen = ref(false);

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

// Mobile only: jumping to a section should also close the overlay
function handleMobileJump(id) {
  emit("jump", id);
  mobileOpen.value = false;
}

// Prevent the page behind the full-screen overlay from scrolling while it's open
watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});
onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <!-- Desktop -->
  <div v-if="headings.length" class="hidden md:block text-sm">
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
      <TocList
        :tree="tree"
        :activeId="activeId"
        :isExpanded="isExpanded"
        @toggle="toggleSection"
        @jump="(id) => emit('jump', id)"
      />
    </nav>
  </div>

  <!-- Mobile -->
  <Teleport to="body">
    <button
      v-if="headings.length && !isMobileNavOpen"
      @click="mobileOpen = true"
      class="md:hidden fixed top-16 right-4 z-40 w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-white dark:bg-darker_slate border border-black/10 dark:border-white/10 text-primary dark:text-white hover:text-magenta dark:hover:text-tertiary transition"
      aria-label="Open table of contents"
    >
      <i class="fas fa-list text-xl"></i>
    </button>

    <div
      v-if="mobileOpen"
      class="md:hidden fixed inset-0 z-50 bg-white dark:bg-primary overflow-y-auto"
    >
      <div
        class="flex items-center justify-between px-6 py-5 border-b border-black/10 dark:border-white/10 sticky top-0 bg-white dark:bg-primary"
      >
        <p
          class="font-bold uppercase tracking-wide text-2xl text-primary dark:text-white"
        >
          Contents
        </p>
        <button
          @click="mobileOpen = false"
          class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-primary dark:text-white transition"
          aria-label="Close table of contents"
        >
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>

      <div class="px-6 py-4 text-lg">
        <TocList
          :tree="tree"
          :activeId="activeId"
          :isExpanded="isExpanded"
          @toggle="toggleSection"
          @jump="handleMobileJump"
        />
      </div>
    </div>
  </Teleport>
</template>
