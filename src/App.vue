<template>
  <div
    id="app"
    class="flex flex-col min-h-screen bg-light dark:bg-primary text-primary dark:text-white transition-colors duration-300"
  >
    <!-- Main layout components -->
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import "@fortawesome/fontawesome-free/css/all.css";
</script>

<style>
/* Global styles */
</style>
