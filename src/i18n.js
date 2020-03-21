import i18n from "i18next";

import Backend from "i18next-xhr-backend";
import { getItem } from "app/utils";
console.log(getItem("lang"));
const backendOpts = {
  loadPath: `/locales/{{lng}}/{{ns}}.json`
};
i18n
  .use(Backend)
  // .use(LanguageDetector)
  .init({
    debug: "true",
    fallbackLng: getItem("lang") ? getItem("lang") : "id",
    backend: backendOpts,
    ns: ["general"],
    defaultNS: "general"
  });
export default i18n;
