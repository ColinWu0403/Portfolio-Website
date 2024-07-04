<template>
  <div>
    <!-- Main layout components -->
    <Navbar />
    <router-view />
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
