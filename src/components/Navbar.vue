<!-- src/components/Navbar.vue -->
<template>
  <header class="w-full relative z-40">
    <div class="flex items-center justify-between px-6 md:px-12 pt-5">
      <!-- Logo / name, doubles as Home link -->
      <router-link
        to="/"
        class="mechsuit-font text-xl md:text-2xl text-magenta dark:text-tertiary tracking-wide"
      >
        COLIN WU
      </router-link>

      <!-- Mobile controls: theme toggle + menu icon, side by side -->
      <div class="flex items-center gap-3 md:hidden">
        <ThemeToggle />
        <button
          class="text-primary dark:text-white"
          @click="toggleMobileMenu"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6">
        <router-link
          v-for="(link, idx) in navLinks"
          :key="idx"
          :to="link.path"
          class="nav-link relative text-lg pb-1 link-underline"
          :class="{
            'nav-link-active text-magenta dark:text-secondary': isCurrentRoute(
              link.path,
            ),
          }"
        >
          {{ link.name }}
        </router-link>
        <ThemeToggle class="ml-1" />
      </nav>
    </div>

    <!-- Mobile full-width dropdown -->
    <div
      v-if="isMobileMenuOpen"
      class="z-30 fixed top-0 left-0 w-full h-full bg-white dark:bg-primary text-gray-900 dark:text-white px-6 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden"
    >
      <div class="flex items-center justify-between pt-5">
        <router-link
          to="/"
          class="mechsuit-font text-xl text-magenta dark:text-tertiary tracking-wide"
          @click="toggleMobileMenu"
        >
          COLIN WU
        </router-link>
        <button class="text-3xl" @click="toggleMobileMenu">&times;</button>
      </div>

      <nav class="flex flex-col items-start mt-8">
        <router-link
          v-for="(link, idx) in navLinks"
          :key="idx"
          :to="link.path"
          class="w-full py-4 text-xl nav-link link-underline relative border-b border-black/10 dark:border-white/10"
          @click="toggleMobileMenu"
          :class="{
            'nav-link-active': isCurrentRoute(link.path),
          }"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import ThemeToggle from "./ThemeToggle.vue";
import { useMobileNav } from "../utils/useMobileNav";
const { isMobileNavOpen: isMobileMenuOpen } = useMobileNav();

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Research", path: "/research" },
  { name: "CV", path: "/cv" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

const isCurrentRoute = (routePath) => {
  const currentRoute = useRoute();
  return currentRoute.path === routePath;
};

// const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  @apply text-primary dark:text-white;
  color: var(--nav-link-color);
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: var(--nav-link-hover);
}
.nav-link-active {
  font-weight: bold;
  color: var(--nav-link-active);
  /* border-bottom: 2px solid var(--nav-link-active); */
}
</style>
