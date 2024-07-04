<!-- src/components/Footer.vue -->
<template>
  <footer class="text-white py-2 flex items-center justify-between w-full mb-2">
    <div class="ml-12">
      <p>
        {{ fullName }} &copy; {{ currentYear }} |
        <a
          target="_blank"
          class="text-white hover:text-white"
          href="https://github.com/ColinWu0403/Portfolio-Website-Vue"
          >Source Code
        </a>
      </p>
    </div>
    <div class="mr-8 items-center">
      <a
        target="_blank"
        href="https://github.com/ColinWu0403/"
        class="text-gray-400 hover:text-white mx-4 text-4xl"
      >
        <i class="fab fa-github" alt="github"></i>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/colinwu0403/"
        class="text-gray-400 hover:text-white mx-4 text-4xl"
      >
        <i class="fab fa-linkedin" alt="linkedin"></i>
      </a>
      <a
        target="_blank"
        href="#"
        class="text-gray-400 hover:text-white mx-4 text-4xl"
      >
        <i class="fas fa-file-alt" alt="resume"></i>
      </a>
      <a
        target="_blank"
        href="mailto:wu1886@purdue.edu"
        class="text-gray-400 hover:text-white mx-4 text-4xl"
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
footer {
  position: relative;
}

html,
body {
  height: 100%;
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
