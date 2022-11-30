import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LogInView from "../views/LogInView.vue";
import AdminView from "../views/admin/AdminView.vue";
import MainOverview from "../views/admin/overview/MainOverview.vue";
import ActivityOverview from "../views/admin/overview/ActivityOverview.vue";
import SummaryOverview from "../views/admin/overview/SummaryOverview.vue";
import MainDetailView from "../views/admin/detail/MainDetailView.vue";
import ActivityDetailView from "../views/admin/detail/ActivityDetailView.vue";
import SummaryDetailView from "../views/admin/detail/SummaryDetailView.vue";
import TicketDetailView from "../views/admin/detail/TicketDetailView.vue";
import i18n from "@/locales/i18n";
import EmailEditorView from "@/views/admin/detail/email-editor/EmailEditorView.vue";

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
        children: [
          {
            path: "",
            name: "adminToOverview",
            redirect: `/${i18n.global.locale}/admin/overview`,
          },
          {
            path: "overview",
            name: "overview",
            component: MainOverview,
            children: [
              {
                path: "activity",
                name: "activity",
                alias: "",
                component: ActivityOverview,
              },
              {
                path: "summary",
                name: "summary",
                component: SummaryOverview,
              },
            ],
          },
          {
            path: ":id",
            name: "detail",
            component: MainDetailView,
            children: [
              {
                path: "activity",
                name: "activityDetail",
                alias: "",
                component: ActivityDetailView,
              },
              {
                path: "summary",
                name: "summaryDetail",
                component: SummaryDetailView,
              },
              {
                path: "ticket",
                name: "ticket",
                component: TicketDetailView,
              },
            ],
          },
          {
            path: ":id/activity/email/:email_id",
            name: "emailEditor",
            component: EmailEditorView,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  const allowedLanguages = ["sk", "en"];
  if (!language || !allowedLanguages.includes(<string>language)) {
    language = "sk";
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  i18n.global.locale = language;
  next();
});

export default router;
