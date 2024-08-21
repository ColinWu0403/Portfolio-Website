<!-- src/views/About.vue -->
<template>
  <div class="mx-auto h-screen">
    <h1 class="mechsuit-font text-3xl font-bold text-tertiary ml-12 mt-4 mb-5">
      About Me
    </h1>
    <div class="relative">
      <!-- Shorter divider line on top -->
      <div class="divider-line-short"></div>

      <!-- Longer divider line below -->
      <div class="divider-line-long bottom-[7px]"></div>
    </div>

    <!-- Main Container -->
    <div class="flex mt-8 px-8 w-4/5">
      <!-- Text Section -->
      <div class="w-2/3 mr-10 text-white text-base">
        <p>
          Hello! My name is Colin and I'm currently a third-year student at
          Purdue University studying Computer Science. My interest with
          technology started with creating silly games with Scratch and
          tinkering with my Raspberry PI. In high school, I did FIRST Robotics,
          which ignited my passion for STEM.
        </p>
        <br />
        <p>
          I hope to learn and develop my skills to create a lasting impact
          wherever I go.
          <span class="text-tertiary">Software Engineering</span>,
          <span class="text-tertiary">Computer Engineering</span>,
          <span class="text-tertiary">Artificial Intelligence</span>, and
          <span class="text-tertiary">Data Science</span> are all fields that
          interest me. However, I'm open to exploring the latest trends and
          seeking to deepen my knowledge!
        </p>
        <br />
        <p>
          Some of the technologies I use the most are:
          <span class="text-secondary">Python</span>,
          <span class="text-secondary">React</span>,
          <span class="text-secondary">.NET</span>,
          <span class="text-secondary">JavaScript</span>,
          <span class="text-secondary">Django</span>, and
          <span class="text-secondary">C</span>.
        </p>
        <br />
        <h3>
          Feel free to reach out to me on my socials:
          <a
            target="_blank"
            href="https://www.linkedin.com/in/colinwu0403/"
            class="text-lime hover:text-tertiary"
            >LinkedIn</a
          >,
          <a
            target="_blank"
            href="https://github.com/ColinWu0403"
            class="text-lime hover:text-tertiary"
            >GitHub</a
          >, and
          <a
            target="_blank"
            href="mailto:wu1886@purdue.edu"
            class="text-lime hover:text-tertiary"
          >
            Email</a
          >.
        </h3>
        <br />
        <h3>
          You can also download my resume here:
          <a
            href="../assets/resume.pdf"
            download="ChiCheColinWuResume.pdf"
            class="text-tertiary hover:text-magenta"
            >Download Resume</a
          >
        </h3>
      </div>
      <!-- Image Section -->
      <div class="relative mt-1 w-1/3 flex-shrink-0 group">
        <img
          src="../assets/Colin.jpg"
          alt="About Me Image"
          class="rounded-md w-60 h-80 object-cover"
        />

        <!-- Color Overlay -->
        <div
          class="absolute inset-0 w-60 h-80 cursor-pointer bg-secondary bg-opacity-30 rounded-md transition-opacity duration-300 group-hover:opacity-0"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  meta: [
    {
      name: "description",
      content: "About Me",
    },
    {
      property: "og:description",
      content: "A little bit about me.",
    },
    { property: "og:title", content: "About Me" },
    { property: "og:image", content: "https://vitejs.dev/logo.svg" }, // temp logo image
  ],
});
</script>

<style scoped>
/* Decorative divider styles */
.divider-line-long {
  position: relative;
  width: 50rem;
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
  width: 49rem;
  height: 1rem;
  background-color: #e80f58;
  overflow: hidden;

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

.group-hover\:opacity-0:hover {
  opacity: 0;
}
</style>
