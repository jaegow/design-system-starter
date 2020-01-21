import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Moment from 'moment';
import { buildLoggers } from './modules/Log';

// eslint-disable-next-line no-unused-vars
const { log, info, error } = buildLoggers('globalization');

const locale_fallback_id = 'en';
// pulling in legacy system translations
const current_locale_id = locale_fallback_id;
const translation = {};
log({ translation });

Moment.locale(current_locale_id);

const il8n_options = {
  resources: {
    [locale_fallback_id]: {
      translation,
    },
    [current_locale_id]: {
      translation,
    },
  },
  lng: current_locale_id,
  fallbackLng: locale_fallback_id,
  interpolation: {
    escapeValue: false,
  },
};

log('il8n options', il8n_options);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(il8n_options, (err) => {
    if (err) return error('i18n translation error', err);
    return info('i18n translation init complete');
  });
