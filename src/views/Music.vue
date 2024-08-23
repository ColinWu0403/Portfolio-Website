<!-- src/views/Projects.vue -->
<template>
  <div class="mx-auto">
    <h1
      class="mechsuit-font md:text-3xl text-2xl font-bold text-tertiary md:ml-12 ml-6 mt-4 mb-5"
    >
      Music
    </h1>
    <div class="relative">
      <!-- Shorter divider line on top -->
      <div class="divider-line-short"></div>

      <!-- Longer divider line below -->
      <div class="divider-line-long bottom-[7px]"></div>
    </div>

    <div
      class="flex flex-col max-h-screen mt-16 align-center items-center justify-center"
    >
      <h1 class="text-center text-3xl text-secondary mb-6">
        Page Under Construction
      </h1>
      <p class="text-center text-lg text-secondary">
        Follow Me on:
        <a
          target="_blank"
          href="https://open.spotify.com/artist/5Y2RNkXpVgfTdNdb44quSC"
          class="text-lime hover:text-tertiary"
          aria-label="Spotify"
          >Spotify</a
        >,
        <a
          target="_blank"
          href="https://music.apple.com/us/artist/lyenz/1703430735"
          class="text-lime hover:text-tertiary"
          aria-label="Apple Music"
          >Apple Music</a
        >,
        <a
          target="_blank"
          href="https://www.youtube.com/@lyenzmusic"
          class="text-lime hover:text-tertiary"
          aria-label="YouTube"
          >YouTube</a
        >,
        <a
          target="_blank"
          href="https://soundcloud.com/lyenzmusic"
          class="text-lime hover:text-tertiary"
          aria-label="Soundcloud"
          >SoundCloud</a
        >, and
        <a
          target="_blank"
          href="https://www.instagram.com/LyenzMusic"
          class="text-lime hover:text-tertiary"
          aria-label="Instagram"
          >Instagram</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  meta: [
    {
      name: "description",
      content: "My Music.",
    },
    {
      property: "og:description",
      content: "My Music.",
    },
    { property: "og:title", content: "Lyenz" },
    { property: "og:image", content: "./icon.svg" }, // temp logo image
  ],
});
</script>

<style scoped>
/* Decorative divider styles */
.divider-line-long {
  position: relative;
  width: 90vw; /* Adjust to viewport width */
  max-width: 50rem; /* Max width for larger screens */
  height: 1rem;
  background-color: #17ffc4;
  overflow: hidden;

  /* Clip the bottom right corner to create a diagonal cut */
  clip-path: polygon(0 0, 100% 0, calc(100% - 1rem) 100%, 0% 100%);
  z-index: 1; /* Ensure this line is on top */
}

.divider-line-long::before {
  content: "";
  position: absolute;
  top: -2rem; /* Adjust to position the diagonal cut */
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 2rem 0 0 2rem; /* Adjust size of diagonal cut */
  border-color: transparent transparent #17ffc4 transparent;
}

.divider-line-short {
  position: relative;
  width: 88vw; /* Adjust to viewport width */
  max-width: 49rem; /* Max width for larger screens */
  height: 1rem;
  background-color: #e80f58;
  overflow: hidden;
  margin-top: -0.5rem; /* Adjust to overlap the long divider */

  /* Clip the bottom right corner to create a diagonal cut */
  clip-path: polygon(0 0, 100% 0, calc(100% - 1rem) 100%, 0% 100%);
  z-index: 2; /* Ensure this line is below the shorter line */
}

.divider-line-short::before {
  content: "";
  position: absolute;
  top: -1rem; /* Adjust to position the diagonal cut */
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1rem 0 0 1rem; /* Adjust size of diagonal cut */
  border-color: transparent transparent #17ffc4 transparent;
}
</style>
