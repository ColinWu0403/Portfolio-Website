<!-- src/views/BlogPost.vue -->
<template>
  <div class="max-w-3xl mx-auto px-6 md:px-12 py-10">
    <router-link to="/blog" class="text-secondary hover:text-tertiary text-sm">
      &larr; Back to Blog
    </router-link>

    <div v-if="notFound" class="mt-8 text-white">
      Sorry, that post doesn't exist.
    </div>
    <component :is="PostComponent" v-else-if="PostComponent" class="mt-6" />
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";

const route = useRoute();
const modules = import.meta.glob("../content/blog/\*.md");

const PostComponent = ref(null);
const notFound = ref(false);

watchEffect(async () => {
  const slug = route.params.slug;
  const loader = modules[`../content/blog/${slug}.md`];

  if (!loader) {
    notFound.value = true;
    PostComponent.value = null;
    return;
  }

  notFound.value = false;
  const mod = await loader();
  PostComponent.value = mod.default;

  useHead({
    title: mod.frontmatter?.title
      ? `${mod.frontmatter.title} — Colin Wu`
      : "Colin's Blog",
  });
});
</script>
