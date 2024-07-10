<!-- src/components/Navbar.vue -->
<template>
  <div class="nav-container relative">
    <nav
      class="fixed top-0 right-0 h-full text-white w-32 flex flex-col items-end justify-start mt-4 mr-4 p-4"
    >
      <router-link
        v-for="(link, idx) in navLinks"
        :key="idx"
        :to="link.path"
        class="my-4 text-xl nav-link relative"
        :class="{
          'font-bold': isCurrentRoute(link.path),
          'nav-link-active': isCurrentRoute(link.path),
        }"
      >
        <span class="relative z-10">{{ link.name }}</span>
        <div v-if="isCurrentRoute(link.path)" class="active-divider"></div>
      </router-link>
    </nav>
  </div>
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
.nav-container {
  position: relative;
  display: flex;
  justify-content: flex-end; /* Ensures content is aligned to the right */
}

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
  color: #e80f58; /* #17FFC4 */
}

.active-divider {
  content: "";
  position: absolute;
  top: 50%;
  right: -2rem;
  transform: translateY(-50%);
  height: 2rem;
  background-color: #ffd627;
  z-index: 1; /* Ensure this is behind the text */
  width: calc(100% + 4.75rem); /* Adjust as needed */
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    calc(100% - calc(100% - 2.5rem)) 100%
  );
}
</style>
