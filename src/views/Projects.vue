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
        :technologies="project.technologies"
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

const projectList = projects;
</script>

<style scoped>
/* Add any scoped styles specific to this page if needed */
</style>
