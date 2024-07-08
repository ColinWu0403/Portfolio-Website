<!-- src/views/Projects.vue -->
<template>
  <div class="mx-auto py-8 px-12">
    <h1 class="text-4xl font-bold text-white mb-8">Projects</h1>
    <div class="flex flex-col space-y-8">
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
/* Add any scoped styles specific to this page if needed */
</style>
