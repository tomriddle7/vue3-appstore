import { createWebHistory, createRouter } from "vue-router";
import Application from "@/components/Application.vue";
import Game from "@/components/Game.vue";

const routes = [
  {
    path: "/application",
    name: "Application",
    component: Application,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;