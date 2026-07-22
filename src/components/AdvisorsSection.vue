<!-- src/components/AdvisorsSection.vue -->
<script setup>
const people = [
  {
    name: "Prof. Tianyi Zhang",
    role: "Purdue Univeristy",
    url: "https://tianyi-zhang.github.io/",
  },
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
        <span class="md:hidden">Advisors</span>
        <span class="hidden md:inline">Advisors &amp; Collaborators</span>
      </p>
      <div
        class="flex-1 h-px bg-black/20 dark:bg-white/20 translate-y-[3px]"
      ></div>
    </div>

    <p class="text-md text-gray-600 dark:text-gray-400 mb-3">
      I am fortunate to work with amazing researchers across multiple
      institutions.
    </p>

    <div class="divide-y divide-black/10 dark:divide-white/10">
      <a
        v-for="person in people"
        :key="person.name"
        :href="person.url"
        target="_blank"
        class="flex items-center gap-3 py-4 group"
      >
        <span
          class="w-2 h-2 rounded-full flex-shrink-0 bg-blueish dark:bg-secondary"
        ></span>
        <span
          class="font-semibold text-primary link-underline dark:text-white group-hover:text-magenta dark:group-hover:text-tertiary transition"
        >
          {{ person.name }}
        </span>
        <span
          class="text-sm text-gray-500 dark:text-gray-400 translate-y-[1px]"
        >
          {{ person.role }}
        </span>
      </a>
    </div>
  </div>
</template>
