<!-- src/components/NewsSection.vue -->
<template>
  <div class="max-w-6xl mx-auto w-full mt-8">
    <div class="flex items-center gap-3 mb-5">
      <div
        class="w-8 h-1 rounded-full bg-magenta dark:bg-secondary translate-y-[1px]"
      ></div>
      <p
        class="text-2xl font-bold text-primary dark:text-white whitespace-nowrap"
      >
        Recent Updates
      </p>
      <div
        class="flex-1 h-px bg-black/20 dark:bg-white/20 translate-y-[3px]"
      ></div>
    </div>

    <div
      class="rounded-sm border border-black/10 dark:border-white/10 bg-blueish/3 dark:bg-darker_slate p-6 md:p-8"
    >
      <div class="space-y-5">
        <div
          v-for="(item, idx) in sortedNews"
          :key="idx"
          class="flex flex-col md:flex-row md:gap-6"
        >
          <p
            class="text-lg font-semibold text-blueish dark:text-tertiary md:w-36 flex-shrink-0"
          >
            {{ formatDate(item.date, { year: "numeric", month: "long" }) }}
          </p>
          <p
            class="text-md text-gray-700 dark:text-gray-300 leading-relaxed"
            v-html="item.text"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { news } from "../constants/news";
import { formatDate } from "../utils/date";

const sortedNews = [...news].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);
</script>
