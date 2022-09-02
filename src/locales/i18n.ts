import { createI18n } from "vue-i18n";

import en from "./en.json";
import sk from "./sk.json";
const i18n = createI18n({
  locale: "sk",
  messages: {
    en: en,
    sk: sk,
  },
});

export default i18n;
