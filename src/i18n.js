import { initReactI18next } from "react-i18next";
import translationToEn from "@/locale/en.json";
import translationToAR from "@/locale/ar.json";
import i18n from "i18next";

const resources = {
  en: {
    translation: translationToEn,
  },
  ar: {
    translation: translationToAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
  order: ["localStorage", "cookie"],
  caches: ["localStorage", "cookie"],
});

export default i18n;
