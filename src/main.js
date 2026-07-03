import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import "./index.css";
import App from "./App.vue";
import router from "./routes";
import MarkdownLayoutBlog from "./components/MarkdownLayoutBlog.vue";

const app = createApp(App);
const head = createHead();

app.component("MarkdownLayoutBlog", MarkdownLayoutBlog);

app.use(router);
app.use(head);
app.mount("#app");
