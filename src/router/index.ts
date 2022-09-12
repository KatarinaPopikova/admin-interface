import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LogInView from "../views/LogInView.vue";
import AdminView from "../views/AdminView.vue";
import AdminInfo from "../views/AdminInfoView.vue";
import i18n from "@/locales/i18n";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: `/${i18n.global.locale}`,
  },
  {
    path: "/:lang",
    children: [
      { path: "", name: "home", component: HomeView },
      {
        path: "about",
        name: "about",
        component: AboutView,
      },
      {
        path: "login",
        name: "login",
        component: LogInView,
      },
      {
        path: "admin",
        name: "admin",
        component: AdminView,
      },
      {
        path: "info",
        name: "AdminInfo",
        component: AdminInfo,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
