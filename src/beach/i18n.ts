import en from "./translations/en.json";

const i18n = {
  fallbackLng: "en",
  debug: process.env.NODE_ENV !== "production",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en,
  },
  whitelist: ["en"],
};

export default i18n;
