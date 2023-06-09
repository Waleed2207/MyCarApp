import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import he from './he.json';

const resources = {
  he: {translation: he},
};

void i18next.use(initReactI18next).init({
  resources,
  lng: 'he',
  fallbackLng: 'he',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;

export const translate = i18next.t;
