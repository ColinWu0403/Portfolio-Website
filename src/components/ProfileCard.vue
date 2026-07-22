<!-- src/components/ProfileCard.vue -->
<template>
  <aside
    class="w-full md:w-72 flex-shrink-0 border border-blueish dark:border-secondary rounded-lg bg-blueish/5 dark:bg-primary p-6"
  >
    <!-- Section 1: photo + name -->
    <div class="flex flex-col items-center text-center">
      <img
        src="../assets/oreo.jpg"
        alt="Colin Wu"
        class="w-48 h-48 rounded-full object-cover border-2 border-magenta dark:border-tertiary"
      />
      <h2 class="text-2xl font-bold text-magenta dark:text-tertiary mt-4">
        Colin Wu
      </h2>
    </div>

    <!-- Section 2: location -->
    <div class="border-t border-blueish/50 dark:border-white/10 mt-4 pt-4">
      <div class="flex items-start gap-3">
        <i
          class="fa-solid fa-location-dot text-blueish dark:text-secondary w-4 mt-1"
        ></i>
        <div>
          <p class="font-bold text-primary dark:text-white">
            Texas A&M University
          </p>
          <p class="text-sm text-blueish dark:text-gray-400">
            College Station, TX
          </p>
        </div>
      </div>
    </div>

    <!-- Section 3: social links -->
    <div
      class="border-t border-blueish/50 dark:border-white/10 mt-4 pt-4 space-y-1"
    >
      <a
        href="https://github.com/ColinWu0403/"
        target="_blank"
        class="flex items-center gap-3 px-3 py-2 rounded-md text-primary dark:text-white hover:bg-blueish/10 dark:hover:bg-secondary/10 hover:text-blueish dark:hover:text-secondary transition"
        aria-label="Visit Colin Wu's GitHub profile"
      >
        <i class="fab fa-github text-lg w-5 text-center"></i>
        <span>GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/colinwu0403/"
        target="_blank"
        class="flex items-center gap-3 px-3 py-2 rounded-md text-primary dark:text-white hover:bg-blueish/10 dark:hover:bg-secondary/10 hover:text-blueish dark:hover:text-secondary transition"
        aria-label="Visit Colin Wu's LinkedIn profile"
      >
        <i class="fab fa-linkedin text-lg w-5 text-center"></i>
        <span>LinkedIn</span>
      </a>
      <a
        href="https://scholar.google.com/citations?hl=en&user=MFt6J4oAAAAJ"
        target="_blank"
        class="flex items-center gap-3 px-3 py-2 rounded-md text-primary dark:text-white hover:bg-blueish/10 dark:hover:bg-secondary/10 hover:text-blueish dark:hover:text-secondary transition"
        aria-label="Visit Colin Wu's Google Scholar profile"
      >
        <i class="fab fa-google-scholar text-lg w-5 text-center"></i>
        <span>Google Scholar</span>
      </a>
      <a
        href="./ChiCheColinWuResume.pdf"
        target="_blank"
        class="flex items-center gap-3 px-3 py-2 rounded-md text-primary dark:text-white hover:bg-blueish/10 dark:hover:bg-secondary/10 hover:text-blueish dark:hover:text-secondary transition"
        aria-label="Download my resume"
      >
        <i class="fas fa-file-alt text-lg w-5 text-center"></i>
        <span>CV</span>
      </a>
      <a
        href="mailto:colinwu@tamu.edu"
        class="flex items-center gap-3 px-3 py-2 rounded-md text-primary dark:text-white hover:bg-blueish/10 dark:hover:bg-secondary/10 hover:text-blueish dark:hover:text-secondary transition"
        aria-label="Send an email to me"
      >
        <i class="fas fa-envelope text-lg w-5 text-center"></i>
        <span>Email</span>
      </a>
    </div>
  </aside>
</template>
