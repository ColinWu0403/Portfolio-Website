<!-- src/components/Navbar.vue -->
<template>
  <nav
    class="fixed top-0 right-0 h-full text-white w-32 flex flex-col items-end justify-start mt-4 mr-4 p-4"
  >
    <router-link
      v-for="(link, idx) in navLinks"
      :key="idx"
      :to="link.path"
      class="my-4 text-lg"
      :class="{ 'font-bold': isCurrentRoute(link.path) }"
    >
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";

// Define your navigation links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  // { name: "Resume", path: "/resume" },
  // { name: "Other", path: "/other" },
];

// Function to check if a route is current
const isCurrentRoute = (routePath) => {
  const currentRoute = useRoute();
  return currentRoute.path === routePath;
};
</script>

<style scoped>
/* Scoped styles for Navbar.vue */
/* Adjust styles as per your design requirements */
.nav-link {
  text-decoration: none;
  color: white;
  transition: background-color 0.3s ease;
}
.nav-link:hover {
  background-color: #4a5568;
}
</style>
