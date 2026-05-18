import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: () => import("../views/About.vue") },
    { path: "/contact", component: () => import("../views/Contact.vue") },
  ],
});

export default router;
