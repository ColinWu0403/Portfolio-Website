<!-- src/components/ProjectSection.vue -->
<script setup>
import { projects } from "../constants/projects";
import ProjectCard from "./ProjectCard.vue";

const featured = projects.filter((p) => p.featured);
</script>

<template>
  <div class="max-w-6xl mx-auto w-full mt-8">
    <div class="flex items-center gap-3 mb-5">
      <div
        class="w-8 h-1 rounded-full bg-magenta dark:bg-secondary translate-y-[1px]"
      ></div>
      <p
        class="text-2xl font-bold text-primary dark:text-white whitespace-nowrap"
      >
        Featured Projects
      </p>
      <div
        class="flex-1 h-px bg-black/20 dark:bg-white/20 translate-y-[3px]"
      ></div>
      <router-link
        to="/projects"
        class="flex items-center gap-1.5 link-underline text-sm font-semibold text-blueish dark:text-secondary hover:text-magenta dark:hover:text-tertiary whitespace-nowrap transition"
      >
        View all projects
        <i class="fas fa-chevron-right text-xs"></i>
      </router-link>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <ProjectCard
        v-for="(project, index) in featured"
        :key="index"
        compact
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
</template>
