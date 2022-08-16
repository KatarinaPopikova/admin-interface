import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./axios";
import "./index.scss";
import mitt, { Emitter } from "mitt";
import FlagIcon from "vue-flag-icon";

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
} from "@fortawesome/free-solid-svg-icons";

declare global {
  interface Window {
    // eslint-disable-next-line
    eventBus: Emitter<any>;
  }
}

window.eventBus = mitt();
/* add icons to the library */
library.add(
  faUser,
  faArrowUpFromBracket,
  faArrowRightFromBracket,
  faXmark,
  faMagnifyingGlass,
  faPenToSquare
);

createApp(App)
  .use(store)
  .use(router)
  .use(FlagIcon)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
