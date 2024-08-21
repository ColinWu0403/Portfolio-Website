<!-- src/components/Footer.vue -->
<template>
  <footer class="text-white py-2 flex items-center justify-between w-full mb-2">
    <div class="ml-12">
      <p>
        {{ fullName }} &copy; {{ currentYear }} |
        <a
          target="_blank"
          class="text-white hover:text-secondary"
          href="https://github.com/ColinWu0403/Portfolio-Website-Vue"
          >Source Code
        </a>
      </p>
    </div>
    <div class="mr-8 items-center">
      <a
        target="_blank"
        href="https://github.com/ColinWu0403/"
        class="text-slate hover:text-secondary mx-4 text-4xl"
      >
        <i class="fab fa-github" alt="github"></i>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/colinwu0403/"
        class="text-slate hover:text-secondary mx-4 text-4xl"
      >
        <i class="fab fa-linkedin" alt="linkedin"></i>
      </a>
      <a
        target="_blank"
        href="#"
        class="text-slate hover:text-secondary mx-4 text-4xl"
      >
        <i class="fas fa-file-alt" alt="resume"></i>
      </a>
      <a
        target="_blank"
        href="mailto:wu1886@purdue.edu"
        class="text-slate hover:text-secondary mx-4 text-4xl"
      >
        <i class="fas fa-envelope" alt="email"></i>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const fullName = ref("Colin Wu");
const currentYear = new Date().getFullYear();
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0; /* Ensure no default margins */
}

/* App container should take full height and use flexbox */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure it takes at least the full viewport height */
}

/* Ensure main content area grows to take available space */
main {
  flex-grow: 1;
}

footer {
  position: relative;
  color: white;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
    text-align: center; /* Center align text and icons on mobile */
  }
  .ml-12 {
    margin-left: 0; /* Remove left margin for mobile */
  }
  .mr-8 {
    margin-right: 0; /* Remove right margin for mobile */
  }
}
</style>
