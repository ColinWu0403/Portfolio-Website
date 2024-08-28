import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Experience from "../views/Experience.vue";
import Projects from "../views/Projects.vue";
import Music from "../views/Music.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "/",
    component: About,
    meta: {
      title: "Colin's Homepage",
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "Colin's Homepage",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "Colin's About Page",
    },
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience,
    meta: {
      title: "Colin's Experience",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: "Colin's Projects",
    },
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
    meta: {
      title: "Lyenz Music",
    },
  },
  // {
  //   path: "/other",
  //   name: "Other",
  //   component: Other,
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    component: NotFound,
    meta: {
      title: "Page Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router;
