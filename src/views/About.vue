<!-- src/views/About.vue -->
<template>
  <div class="mx-auto">
    <h1
      class="mechsuit-font md:text-3xl text-2xl font-bold text-tertiary md:ml-12 ml-6 mt-4 mb-5"
    >
      About Me
    </h1>
    <div class="relative">
      <!-- Shorter divider line on top -->
      <div class="divider-line-short"></div>

      <!-- Longer divider line below -->
      <div class="divider-line-long bottom-[7px]"></div>
    </div>

    <!-- Main Container -->
    <div
      class="flex flex-col-reverse md:flex-row mt-8 mb-8 md:px-8 px-6 w-full md:w-4/5"
    >
      <!-- Text Section -->
      <div class="text-white md:text-base text-md md:w-2/3 md:mr-10">
        <p>
          Hello! My name is Colin and I'm currently a third-year student at
          Purdue University studying Computer Science. I’m passionate about
          creating innovative software and exploring new technologies. I also
          enjoy producing music (under the artist name
          <router-link to="/music" class="text-secondary hover:text-tertiary"
            >Lyenz</router-link
          >), playing table tennis, and watching movies in my free time.
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
          <span class="text-tertiary">Python</span>,
          <span class="text-tertiary">React</span>,
          <span class="text-tertiary">.NET</span>,
          <span class="text-tertiary">JavaScript</span>,
          <span class="text-tertiary">Django</span>, and
          <span class="text-tertiary">C</span>.
        </p>
        <br />
        <p>
          Feel free to reach out to me on my socials:
          <a
            target="_blank"
            href="https://www.linkedin.com/in/colinwu0403/"
            class="text-secondary hover:text-tertiary"
            aria-label="LinkedIn"
            >LinkedIn</a
          >,
          <a
            target="_blank"
            href="https://github.com/ColinWu0403"
            class="text-secondary hover:text-tertiary"
            aria-label="GitHub"
            >GitHub</a
          >, and
          <a
            target="_blank"
            href="mailto:wu1886@purdue.edu"
            class="text-secondary hover:text-tertiary"
            aria-label="My Email"
          >
            Email</a
          >.
        </p>
        <br />
        <h2>
          You can also download my resume here:
          <a
            href="./resume.pdf"
            target="_blank"
            download="ChiCheColinWuResume.pdf"
            class="text-tertiary hover:text-violet"
            aria-label="Download my resume"
            >Download Resume</a
          >
        </h2>
      </div>
      <!-- Image Section -->
      <div
        class="relative mt-1 md:w-1/3 w-full mb-8 md:mb-0 items-center md:items-center align-center flex-shrink-0 group"
      >
        <img
          src="../assets/Colin.jpg"
          alt="About Me Image"
          class="rounded-md w-72 h-96 object-cover"
        />

        <!-- Color Overlay -->
        <div
          class="absolute inset-0 w-72 h-96 cursor-pointer bg-secondary bg-opacity-30 rounded-md transition-opacity duration-300 group-hover:opacity-0"
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
