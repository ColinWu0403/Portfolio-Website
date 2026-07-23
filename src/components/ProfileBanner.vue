<!-- src/components/ProfileBanner.vue -->
<template>
  <div
    class="w-full rounded-sm border border-black/10 dark:border-white/10 bg-blueish/3 dark:bg-darker_slate p-6 md:p-8"
  >
    <div
      class="flex flex-col md:flex-row md:items-center gap-8 md:ml-12 md:mr-12"
    >
      <!-- Left column: everything except the photo -->
      <div class="flex-1 min-w-0 order-2 md:order-1">
        <h1
          class="font-semibold text-3xl md:text-4xl text-primary dark:text-white"
        >
          Hello There! I'm
          <!-- <router-link to="/about" class="text-magenta dark:text-tertiary">
            Colin Wu</router-link
          > -->
          <NameEyeReveal
            name="Colin Wu"
            to="/about"
            class="text-magenta dark:text-secondary hover:opacity-80 transition"
          />
        </h1>

        <div
          class="border-t border-dashed border-black/10 dark:border-white/10 my-6"
        ></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p
              class="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3"
            >
              Current Research
            </p>
            <div class="flex items-start gap-3">
              <div
                class="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded overflow-hidden bg-white"
              >
                <img
                  src="../assets/tamu.svg"
                  alt="Texas A&M"
                  class="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <p class="font-semibold text-primary dark:text-white">
                  Texas A&M University
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Dept. of Computer Science
                </p>
              </div>
            </div>
          </div>

          <div>
            <p
              class="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3"
            >
              Education
            </p>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div
                  class="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded overflow-hidden bg-white"
                >
                  <img
                    src="../assets/tamu.svg"
                    alt="Texas A&M"
                    class="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <p class="font-semibold text-primary dark:text-white">
                    M.S. in Computer Science
                  </p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Texas A&M University · 2026–2028
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div
                  class="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded overflow-hidden bg-gold"
                >
                  <img
                    src="../assets/purdue.svg"
                    alt="Purdue"
                    class="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <p class="font-semibold text-primary dark:text-white">
                    B.S. in Computer Science
                  </p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Purdue University · 2022–2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="border-t border-dashed border-black/10 dark:border-white/10 my-6"
        ></div>

        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
        >
          <p class="italic text-sm text-gray-600 dark:text-gray-400 max-w-lg">
            M.S. student interested in HCI, AI, NLP, and Embedded Systems, with
            applications in Software Engineering and Healthcare.
          </p>

          <div
            class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mt-4 md:mt-0"
          >
            <a
              href="mailto:colinwu@tamu.edu"
              class="flex items-center link-underline gap-1.5 text-gray-600 dark:text-gray-400 hover:text-magenta dark:hover:text-tertiary transition"
            >
              <i class="fas fa-envelope"></i> Email
            </a>
            <span class="text-gray-300 dark:text-gray-700">/</span>
            <a
              href="https://www.linkedin.com/in/colinwu0403/"
              target="_blank"
              class="flex items-center link-underline gap-1.5 text-gray-600 dark:text-gray-400 hover:text-magenta dark:hover:text-tertiary transition"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <span class="text-gray-300 dark:text-gray-700">/</span>
            <a
              href="https://github.com/ColinWu0403/"
              target="_blank"
              class="flex items-center link-underline gap-1.5 text-gray-600 dark:text-gray-400 hover:text-magenta dark:hover:text-tertiary transition"
            >
              <i class="fab fa-github"></i> GitHub
            </a>
            <span class="text-gray-300 dark:text-gray-700">/</span>
            <router-link
              to="/cv"
              class="flex items-center link-underline gap-1.5 text-gray-600 dark:text-gray-400 hover:text-magenta dark:hover:text-tertiary transition"
            >
              <i class="fas fa-file-lines"></i> CV
            </router-link>
          </div>
        </div>
      </div>

      <!-- Right column: photo, vertically centered against the whole card -->
      <div
        class="flex justify-center md:justify-end flex-shrink-0 order-1 md:order-2"
      >
        <!-- <div @mouseenter="sortRef.sortDown()" @mouseleave="sortRef.restoreUp()">
          <PixelSortImage
            ref="sortRef"
            src="./oreo.jpg"
            class="w-44 h-44 md:w-52 md:h-52 rounded-full hover:cursor-crosshair object-cover border-2 border-magenta/30 dark:border-secondary/30"
          />
        </div> -->
        <img
          src="../assets/oreo.jpg"
          alt="Colin Wu"
          class="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-2 border-magenta/30 dark:border-secondary/30"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PixelSortImage from "./PixelSortImage.vue";
import NameEyeReveal from "./NameEyeReveal.vue";
import { ref } from "vue";
const sortRef = ref(null);

const tamuLogo = ref(null);
const purdueLogo = "../assets/purdue.svg";
</script>
