import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./api/axios";
import "./index.scss";
import mitt, { Emitter } from "mitt";
import FlagIcon from "vue-flag-icon";
import i18n from "@/locales/i18n";
import FontAwesomeIcon from "@/imports/font-awesome";

import VueTailwindDatepicker from "vue-tailwind-datepicker";

declare global {
  interface Window {
    // eslint-disable-next-line
        eventBus: Emitter<any>;
  }
}

window.eventBus = mitt();

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(FlagIcon)
  .use(VueTailwindDatepicker as never)

  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
