import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import "./index.css";
import App from "./App.vue";
import router from "./routes";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.mount("#app");
