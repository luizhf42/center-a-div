import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { createPinia } from "pinia";
import { inject } from "@vercel/analytics";

inject();

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
