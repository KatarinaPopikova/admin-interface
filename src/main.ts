import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./axios";
import "./index.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUser, faArrowUpFromBracket, faArrowRightFromBracket);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
