<!-- src/components/Footer.vue -->
<template>
  <footer
    class="text-white py-4 flex items-center justify-between fixed bottom-0 left-0 right-0 bg-gray-800"
  >
    <div class="ml-8">
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
    <div class="mr-8">
      <a href="#" class="text-gray-400 hover:text-white mx-2">
        <i class="fab fa-github"></i>
      </a>
      <a href="#" class="text-gray-400 hover:text-white mx-2">
        <i class="fas fa-file-alt"></i>
      </a>
      <a href="#" class="text-gray-400 hover:text-white mx-2">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="#" class="text-gray-400 hover:text-white mx-2">
        <i class="fas fa-ellipsis-h"></i>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const fullName = ref("Colin Wu");
const currentYear = new Date().getFullYear();

// Check if the content height is shorter than viewport height
const adjustFooterPosition = () => {
  const footer = document.querySelector("footer");
  if (footer) {
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;

    if (bodyHeight <= windowHeight) {
      footer.classList.add("absolute", "bottom-0");
    }
  }
};

onMounted(() => {
  adjustFooterPosition();
  window.addEventListener("resize", adjustFooterPosition);
});

// Clean up event listener on component unmount
onBeforeUnmount(() => {
  window.removeEventListener("resize", adjustFooterPosition);
});
</script>

<style scoped>
/* Scoped styles for Footer.vue */
/* Adjust styles as per your design requirements */
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
