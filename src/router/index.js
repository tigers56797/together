import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
    meta: { showTopbar: true }, // 需要显示 topbar
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("../pages/Calendar.vue"),
    meta: { showTopbar: false }, // 不显示 topbar
  },
  {
    path: "/countdown",
    name: "Countdown",
    component: () => import("../pages/Countdown.vue"),
    meta: { showTopbar: false }, // 不显示 topbar
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../pages/Game.vue"),
    meta: { showTopbar: false }, // 不显示 topbar
  },
  {
    path: "/memory",
    name: "Memory",
    component: () => import("../pages/Memory.vue"),
    meta: { showTopbar: false }, // 不显示 topbar
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../pages/Setting.vue"),
    meta: { showTopbar: false }, // 不显示 topbar
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
