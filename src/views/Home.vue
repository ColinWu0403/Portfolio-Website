<!-- src/views/Home.vue -->
<template>
  <div class="max-w-7xl mx-auto px-6 md:px-12 py-10">
    <div class="flex flex-col md:flex-row md:items-start gap-10 md:gap-12">
      <!-- Left profile card -->
      <aside
        class="w-full md:w-72 flex-shrink-0 border border-secondary/30 rounded-lg bg-white/5 p-6 self-start"
      >
        <!-- Section 1: photo + name -->
        <div class="flex flex-col items-center text-center">
          <img
            src="../assets/oreo.jpg"
            alt="Colin Wu"
            class="w-32 h-32 rounded-full object-cover border-2 border-tertiary"
          />
          <h2 class="mechsuit-font text-xl text-tertiary mt-4">Colin Wu</h2>
          <p class="text-sm text-white mt-1">Chi-Che Colin Wu</p>
        </div>

        <!-- Section 2: location -->
        <div class="border-t border-white/10 mt-6 pt-4">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-location-dot text-secondary w-4 mt-1"></i>
            <div>
              <p class="font-bold text-white">Purdue University</p>
              <p class="text-sm text-gray-400">West Lafayette, IN</p>
            </div>
          </div>
        </div>

        <!-- Section 3: social links -->
        <div class="border-t border-white/10 mt-4 pt-4 space-y-1">
          <a
            href="https://github.com/ColinWu0403/"
            target="_blank"
            class="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-secondary/10 hover:text-secondary transition"
            aria-label="Visit Colin Wu's GitHub profile"
          >
            <i class="fab fa-github text-lg w-5 text-center"></i>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/colinwu0403/"
            target="_blank"
            class="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-secondary/10 hover:text-secondary transition"
            aria-label="Visit Colin Wu's LinkedIn profile"
          >
            <i class="fab fa-linkedin text-lg w-5 text-center"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://scholar.google.com/citations?hl=en&user=MFt6J4oAAAAJ"
            target="_blank"
            class="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-secondary/10 hover:text-secondary transition"
            aria-label="Visit Colin Wu's Google Scholar profile"
          >
            <i class="fab fa-google-scholar text-lg w-5 text-center"></i>
            <span>Google Scholar</span>
          </a>
          <a
            href="./ChiCheColinWuResume.pdf"
            target="_blank"
            download="ChiCheColinWuResume.pdf"
            class="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-secondary/10 hover:text-secondary transition"
            aria-label="Download my resume"
          >
            <i class="fas fa-file-alt text-lg w-5 text-center"></i>
            <span>Resume</span>
          </a>
          <a
            href="mailto:wu1886@purdue.edu"
            class="flex items-center gap-3 px-3 py-2 rounded-md text-white hover:bg-secondary/10 hover:text-secondary transition"
            aria-label="Send an email to me"
          >
            <i class="fas fa-envelope text-lg w-5 text-center"></i>
            <span>Email</span>
          </a>
        </div>
      </aside>

      <!-- Right intro section -->
      <div class="flex-1 min-w-0">
        <p class="text-secondary uppercase tracking-widest text-sm mb-2">
          Welcome
        </p>
        <h1 class="mechsuit-font text-3xl md:text-4xl text-tertiary mb-6">
          Hi, I'm Colin
        </h1>

        <div class="text-white space-y-4 leading-relaxed">
          <p>
            I'm currently a third-year student at Purdue University studying
            Computer Science. I'm passionate about creating innovative software
            and exploring new technologies. I also enjoy producing music (under
            the artist name
            <router-link
              to="/music"
              class="text-secondary hover:text-tertiary hover:underline"
              >Lyenz</router-link
            >), playing table tennis, and watching movies in my free time.
          </p>
          <p>
            I hope to learn and develop my skills to create a lasting impact
            wherever I go.
            <span class="text-tertiary">Software Engineering</span>,
            <span class="text-tertiary">Computer Engineering</span>,
            <span class="text-tertiary">Artificial Intelligence</span>, and
            <span class="text-tertiary">Data Science</span> are all fields that
            interest me.
          </p>
          <p>
            Some of the technologies I use the most:
            <span class="text-tertiary">Python</span>,
            <span class="text-tertiary">React</span>,
            <span class="text-tertiary">.NET</span>,
            <span class="text-tertiary">JavaScript</span>,
            <span class="text-tertiary">Django</span>, and
            <span class="text-tertiary">C</span>.
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

useHead({
  meta: [
    { name: "description", content: "Colin Wu's personal website" },
    { property: "og:title", content: "Colin Wu" },
    { property: "og:description", content: "A little bit about me." },
  ],
});
</script>
