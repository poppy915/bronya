import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "test",
    meta: {
      title: "bronya",
    },
    component: () => import("../view/test/index.vue"),
  },
  {
    path: "/one",
    name: "one",
    component: () => import("../view/one/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
