import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Application from "@/components/Application.vue";
import Game from "@/components/Game.vue";
import Detail from '@/components/Detail.vue'
import Search from '@/components/Search.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
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
  {
    path: "/app/:id",
    name: "Detail",
    component: Detail,
    props: true
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;