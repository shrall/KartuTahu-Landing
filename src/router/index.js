import { createRouter, createWebHistory } from "vue-router";

import Home from "/src/views/Home.vue";
import HomeMobile from "/src/views/HomeMobile.vue";

//Routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },{
    path: "/mobile",
    name: "HomeMobile",
    component: HomeMobile,
    meta: {
      title: "Home",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;