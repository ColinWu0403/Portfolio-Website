<!-- src/components/Navbar.vue -->
<template>
  <header class="w-full relative z-40">
    <div class="flex items-center justify-between px-6 md:px-12 py-5">
      <!-- Logo / name, doubles as Home link -->
      <router-link
        to="/"
        class="mechsuit-font text-xl md:text-2xl text-tertiary tracking-wide"
      >
        COLIN WU
      </router-link>

      <!-- Mobile menu icon -->
      <button
        class="md:hidden text-white"
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

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6">
        <router-link
          v-for="(link, idx) in navLinks"
          :key="idx"
          :to="link.path"
          class="nav-link relative text-lg pb-1"
          :class="{ 'nav-link-active': isCurrentRoute(link.path) }"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </div>

    <!-- Mobile slide-in menu -->
    <div
      v-if="isMobileMenuOpen"
      class="z-30 fixed top-0 right-0 h-full w-7/12 bg-darker_slate text-white px-8 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden"
    >
      <div class="flex justify-end pt-6">
        <button class="text-white text-4xl" @click="toggleMobileMenu">
          &times;
        </button>
      </div>
      <nav class="flex flex-col items-end mt-8">
        <router-link
          v-for="(link, idx) in navLinks"
          :key="idx"
          :to="link.path"
          class="my-4 text-xl nav-link relative"
          @click="toggleMobileMenu"
          :class="{ 'nav-link-active': isCurrentRoute(link.path) }"
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

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Research", path: "/research" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "CV", path: "/cv" },
];

const isCurrentRoute = (routePath) => {
  const currentRoute = useRoute();
  return currentRoute.path === routePath;
};

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: #e80f58;
}
.nav-link-active {
  font-weight: bold;
  color: #ffd627;
  border-bottom: 2px solid #ffd627;
}
</style>
