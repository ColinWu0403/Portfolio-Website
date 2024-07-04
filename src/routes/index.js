import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Experience from "../views/Experience.vue";
import Projects from "../views/Projects.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  // {
  //   path: "/resume",
  //   name: "Resume",
  //   component: Resume,
  // },
  // {
  //   path: "/other",
  //   name: "Other",
  //   component: Other,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
