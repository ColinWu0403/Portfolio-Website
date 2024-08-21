<template>
  <div id="app" class="flex flex-col min-h-screen">
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
