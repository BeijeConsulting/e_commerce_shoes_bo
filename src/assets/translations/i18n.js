import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          usernamePlaceholder: "Phone number",
          password: "Password",
          showPassword: "Show",
          login: "Login",
        },
      },
      it: {
        translation: {
          usernamePlaceholder: "Numero di telefono",
          password: "Password",
          showPassword: "Mostra",
          login: "Accedi",
        },
      },

      zh: {
        translation: {
          usernamePlaceholder: "手机号码",
          password: "健谈的",
          showPassword: "显示密码",
          login: "登录",
        },
      },
    },
  });

export default i18n;
