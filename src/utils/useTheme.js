// src/utils/useTheme.js
import { ref, watchEffect } from "vue";

const theme = ref(
  localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"),
);

function applyTheme(value) {
  document.documentElement.classList.toggle("dark", value === "dark");
  localStorage.setItem("theme", value);
}

applyTheme(theme.value); // apply immediately on load, avoids flash
watchEffect(() => applyTheme(theme.value));

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };
  return { theme, toggleTheme };
}
