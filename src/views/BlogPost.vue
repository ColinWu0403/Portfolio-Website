<!-- src/views/BlogPost.vue -->
<template>
  <div class="max-w-7xl mx-auto px-6 md:px-12 py-6">
    <router-link
      to="/blog"
      class="text-blueish dark:text-secondary hover:text-magenta dark:hover:text-tertiary text-md"
    >
      &larr; Back to Blog
    </router-link>

    <div v-if="notFound" class="mt-8 text-primary dark:text-white">
      Sorry, this post doesn't exist.
    </div>

    <!-- Blog Body -->
    <div v-else class="md:grid md:grid-cols-[200px_1fr] md:gap-20 mt-6">
      <!-- Table of Contents -->
      <aside
        v-if="headings.length"
        class="hidden md:block sticky top-10 self-start"
      >
        <TableOfContents
          :headings="headings"
          :activeId="activeId"
          @jump="scrollToHeading"
        />
      </aside>

      <!-- Article -->
      <div class="min-w-0">
        <div ref="articleRef" class="max-w-2xl mx-0">
          <component :is="PostComponent" v-if="PostComponent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, watchEffect, nextTick, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import TableOfContents from "../components/TableOfContents.vue";

const route = useRoute();
const modules = import.meta.glob("../content/blog/\*.md");

const PostComponent = shallowRef(null); // was: ref(null)
const notFound = ref(false);
const articleRef = ref(null);
const headings = ref([]);
const activeId = ref("");
const pageTitle = ref("Colin's Blog"); // new

// Called synchronously here, at the top level of setup — no await before it.
// @vueuse/head accepts a ref and stays reactive to it afterward.
useHead({ title: pageTitle });

let observer = null;

function teardownObserver() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
}

function buildHeadings() {
  teardownObserver();
  if (!articleRef.value) return;

  const nodes = articleRef.value.querySelectorAll("h2[id], h3[id]");
  headings.value = Array.from(nodes).map((el) => ({
    id: el.id,
    text: el.textContent,
    level: Number(el.tagName[1]),
  }));

  if (!nodes.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeId.value = entry.target.id;
      });
    },
    { rootMargin: "-100px 0px -70% 0px" },
  );

  nodes.forEach((el) => observer.observe(el));
}

function scrollToHeading(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
  activeId.value = id;
}

watchEffect(async () => {
  const slug = route.params.slug;
  const loader = modules[`../content/blog/${slug}.md`];

  if (!loader) {
    notFound.value = true;
    PostComponent.value = null;
    headings.value = [];
    return;
  }

  notFound.value = false;
  headings.value = [];
  activeId.value = "";

  const mod = await loader();
  PostComponent.value = mod.default;
  pageTitle.value = mod.frontmatter?.title
    ? `${mod.frontmatter.title} — Colin Wu`
    : "Colin's Blog"; // reactive assignment instead of a fresh useHead() call

  await nextTick();
  buildHeadings();
  console.log("Headings found:", headings.value); // keep this in for now
});

onBeforeUnmount(teardownObserver);
</script>
