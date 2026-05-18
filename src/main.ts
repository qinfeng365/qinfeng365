import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/fonts/FiraCode.css";
import "./assets/styles/global.less";

createApp(App).use(router).mount("#app");
