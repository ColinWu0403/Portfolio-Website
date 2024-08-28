<!-- src/components/Navbar.vue -->
<template>
  <div class="nav-container relative">
    <!-- Mobile Menu Icon -->
    <div
      class="mobile-menu-icon md:hidden py-4 cursor-pointer"
      @click="toggleMobileMenu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-10 h-10 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </div>

    <!-- Mobile Slide-In Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="z-30 fixed top-0 right-0 h-full w-7/12 bg-darker_slate text-white px-8 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden"
    >
      <span class="mb-12">&nbsp;</span>
      <div class="flex justify-end">
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
          :class="{
            'font-bold': isCurrentRoute(link.path),
            'nav-link-active': isCurrentRoute(link.path),
          }"
        >
          <span class="relative z-10">{{ link.name }}</span>
        </router-link>
      </nav>
    </div>

    <!-- Desktop Navbar -->
    <nav
      class="hidden fixed top-0 right-0 h-full text-white w-32 md:flex flex-col items-end justify-start mt-4 mr-4 p-4"
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
import { ref } from "vue";

// Define your navigation links
const navLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Music", path: "/music" },
  // { name: "Other", path: "/other" },
];

// Function to check if a route is current
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

/* Mobile-specific styles */
.mobile-menu-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

@media (min-width: 768px) {
  .mobile-menu-icon {
    display: none;
  }
}
</style>
