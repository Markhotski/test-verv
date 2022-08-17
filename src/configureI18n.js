import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

function initI18n() {
  i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: 'en',
      load: 'currentOnly',
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      backend: {
        loadPath: '/locales/{{lng}}.json',
      },
    });
}

export default initI18n;
