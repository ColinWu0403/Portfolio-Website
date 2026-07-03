<!-- src/views/Home.vue -->
<template>
  <div class="max-w-8xl mx-auto px-6 md:px-12 py-10">
    <div class="flex flex-col md:flex-row md:items-start gap-10 md:gap-12 mb-2">
      <!-- Left profile card -->
      <ProfileCard />

      <!-- Right intro section -->
      <div class="flex-1 min-w-0">
        <!-- Header -->
        <h1
          class="mechsuit-font md:text-2xl text-2xl font-bold text-blueish dark:text-tertiary mb-5"
        >
          About
        </h1>
        <!-- <div class="relative mb-5">
          <div class="divider-line-short"></div>
          <div class="divider-line-long bottom-[5.5px]"></div>
        </div> -->

        <div class="text-primary dark:text-light space-y-4 leading-relaxed">
          <p>
            Hello! I'm a M.S. in Computer Science student at
            <span class="text-magenta dark:text-secondary"
              >Texas A&M University</span
            >. Previously, I received my B.S. in Computer Science from
            <span class="text-magenta dark:text-secondary"
              >Purdue University</span
            >.
          </p>
          <p>
            Some of my research interests include
            <span class="text-violet dark:text-tertiary"
              >Human Computer Interaction (HCI)</span
            >,
            <span class="text-violet dark:text-tertiary"
              >Artifical Intelligence</span
            >,
            <span class="text-violet dark:text-tertiary"
              >Natural Language Processing (NLP)</span
            >,
            <span class="text-violet dark:text-tertiary">Embedded Systems</span
            >, and
            <span class="text-violet dark:text-tertiary">Bioinformatics</span>
            with applications of these fields in
            <span class="text-lime dark:text-magenta"
              >Software Engineering</span
            >
            and <span class="text-lime dark:text-magenta">Healthcare</span>.
            <br />
            I've previously worked with Prof.
            <a
              href="https://tianyi-zhang.github.io"
              target="_blank"
              class="text-magenta dark:text-secondary hover:text-blueish dark:hover:text-tertiary hover:underline"
              >Tianyi Zhang</a
            >
            at Human-Centered Software Systems Lab.
          </p>
          <p>
            I'm passionate about creating innovative software and exploring new
            technologies. I also enjoy listening to and producing music (under
            the artist name
            <router-link
              to="/music"
              class="text-magenta dark:text-secondary hover:text-blueish dark:hover:text-tertiary hover:underline"
              >Lyenz</router-link
            >), playing table tennis, hiking, and watching movies in my free
            time.
          </p>
        </div>

        <!-- Optional: featured projects preview, pulling from your existing constants/projects.js -->
        <!--
        <div class="mt-10">
          <h3 class="mechsuit-font text-xl text-tertiary mb-4">Featured Projects</h3>
          ...
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import ProfileCard from "../components/ProfileCard.vue";

useHead({
  meta: [
    { name: "description", content: "Colin Wu's personal website" },
    { property: "og:title", content: "Colin Wu" },
    { property: "og:description", content: "A little bit about me." },
  ],
});
</script>

<style scoped>
/* Decorative divider styles */
.divider-line-long {
  position: relative;
  width: 50vw; /* Adjust to viewport width */
  max-width: 30rem; /* Max width for larger screens */
  height: 0.75rem;
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
  width: 48vw; /* Adjust to viewport width */
  max-width: 29rem; /* Max width for larger screens */
  height: 0.75rem;
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
