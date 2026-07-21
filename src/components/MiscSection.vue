<!-- src/components/MiscSection.vue -->
<script setup>
const items = [
  {
    emoji: "🎵",
    html: 'I love music! I play the piano and produce music, this is <a href="https://soundcloud.com/lyenzmusic" target="_blank" class="text-blueish dark:text-secondary hover:text-magenta dark:hover:text-tertiary hover:underline transition">my SoundCloud</a>.',
  },
  {
    emoji: "📝",
    html: 'I write on my <a href="/blog" target="_blank" class="text-blueish dark:text-secondary hover:text-magenta dark:hover:text-tertiary hover:underline transition">blog</a>.',
  },
  {
    emoji: "🏃",
    html: "I enjoy playing table tennis 🏓 \& hiking ⛰️.",
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
        Misc.
      </p>
      <div
        class="flex-1 h-px bg-black/20 dark:bg-white/20 translate-y-[3px]"
      ></div>
    </div>

    <div class="space-y-3">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
      >
        <span class="flex-shrink-0 text-md">{{ item.emoji }}</span>
        <span class="text-md" v-html="item.html"></span>
      </div>
    </div>
  </div>
</template>
