// src/utils/useMobileNav.js
import { ref } from "vue";

const isMobileNavOpen = ref(false);

export function useMobileNav() {
  return { isMobileNavOpen };
}
