<!-- src/views/Projects.vue -->
<template>
  <div class="mx-auto">
    <!--  -->
    <h1 class="mechsuit-font text-3xl font-bold text-tertiary ml-12 mt-4 mb-5">
      Projects
    </h1>
    <div class="relative">
      <!-- Shorter divider line on top -->
      <div class="divider-line-short"></div>

      <!-- Longer divider line below -->
      <div class="divider-line-long bottom-[7px]"></div>
    </div>

    <div class="flex flex-col space-y-8 py-8 px-12">
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
        :imageSrc="project.imageSrc"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";
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
</style>
