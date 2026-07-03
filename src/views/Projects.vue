<!-- src/views/Projects.vue -->
<template>
  <div class="max-w-8xl mx-auto px-6 md:px-12 py-10">
    <div class="flex flex-col md:flex-row md:items-start gap-10 md:gap-12">
      <!-- Left profile card -->
      <div class="hidden md:block">
        <ProfileCard />
      </div>

      <!-- Right section -->
      <div class="flex-1 min-w-0">
        <!-- Header -->
        <h1
          class="mechsuit-font md:text-2xl text-2xl font-bold text-blueish dark:text-secondary mb-5"
        >
          Projects
        </h1>
        <!-- <div class="relative mb-5">
          <div class="divider-line-short"></div>
          <div class="divider-line-long bottom-[5.5px]"></div>
        </div> -->

        <!-- Projects grid: 2 per row on desktop -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="index"
            :dateRange="project.dateRange"
            :title="project.title"
            :description="project.description"
            :technologies="
              project.technologies.map((tech) => ({
                name: tech.name,
                color: tech.color,
              }))
            "
            :githubLink="project.githubLink"
            :demoLink="project.demoLink"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import ProfileCard from "../components/ProfileCard.vue";
import { projects } from "../constants/projects";
import { useHead } from "@vueuse/head";

const projectList = projects;

useHead({
  meta: [
    {
      name: "description",
      content: "My Personal Projects.",
    },
    {
      property: "og:description",
      content: "My Personal Projects.",
    },
    { property: "og:title", content: "Colin's Projects" },
    { property: "og:image", content: "https://vitejs.dev/logo.svg" }, // temp logo image
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
