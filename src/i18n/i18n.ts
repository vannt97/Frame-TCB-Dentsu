import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import { LANGUAGE } from "../constants/language";
i18n.use(initReactI18next).use(I18NextHttpBackend).init({
  lng: LANGUAGE.VIETNAM,
  fallbackLng: LANGUAGE.VIETNAM,
  debug: false,
  
});

export default i18n;
 // we init with resources

  // resources: {
  //   en: {
  //     translation: {
  //       common: common_en,
  //     },
  //   },
  //   vi: {
  //     translation: {
  //       common: common_vi,
  //     },
  //   },
  // },
