<!-- src/components/SkillsSection.vue -->
<script setup>
const skills = [
  { icon: "fas fa-computer", label: "Human-Computer Interaction" },
  { icon: "fas fa-circle-nodes", label: "Natural Language Processing" },
  { icon: "fas fa-brain", label: "Machine Learning" },
  { icon: "fas fa-laptop-medical", label: "Bioinformatics" },
  { icon: "fas fa-robot", label: "Large Language Models" },
  { icon: "fas fa-terminal", label: "Software Engineering" },
  { icon: "fas fa-microchip", label: "Embedded Systems" },
];
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
        Skills & Research
      </p>
      <div
        class="flex-1 h-px bg-black/20 dark:bg-white/20 translate-y-[3px]"
      ></div>
    </div>

    <div class="flex flex-wrap gap-3">
      <span
        v-for="skill in skills"
        :key="skill.label"
        class="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-medium border border-black/10 dark:border-white/10 bg-light dark:bg-white/5 text-gray-700 dark:text-gray-300"
      >
        <i
          :class="skill.icon"
          class="text-xs text-blueish dark:text-secondary"
        ></i>
        {{ skill.label }}
      </span>
    </div>
  </div>
</template>
