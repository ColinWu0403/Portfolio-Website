<!-- src/components/ThemeToggle.vue -->
<template>
  <button
    @click="toggleTheme"
    class="w-9 h-9 flex items-center justify-center rounded-full text-lg transition text-primary hover:text-blueish hover:bg-blueish/10 dark:text-white dark:hover:text-tertiary dark:hover:bg-tertiary/10"
    :aria-label="
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    "
  >
    <i v-if="theme === 'dark'" class="fas fa-sun"></i>
    <i v-else class="fas fa-moon"></i>
  </button>
</template>

<script setup>
import { useTheme } from "../utils/useTheme";
const { theme, toggleTheme } = useTheme();
</script>
