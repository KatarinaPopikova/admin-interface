import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./apis/axios";
import "./index.scss";
import mitt, { Emitter } from "mitt";
import FlagIcon from "vue-flag-icon";
import i18n from "@/locales/i18n";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUser, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faArrowRightFromBracket,
  faXmark,
  faMagnifyingGlass,
  faCheck,
  faUserGear,
  faBars,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

declare global {
  interface Window {
    // eslint-disable-next-line
    eventBus: Emitter<any>;
  }
}

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

window.eventBus = mitt();
/* add icons to the library */
library.add(
  faUser,
  faArrowUpFromBracket,
  faArrowRightFromBracket,
  faXmark,
  faMagnifyingGlass,
  faPenToSquare,
  faCheck,
  faUserGear,
  faBars,
  faArrowLeft
);

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(FlagIcon)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
