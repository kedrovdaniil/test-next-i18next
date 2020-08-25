const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
  otherLanguages: ['ru'],
  defaultLanguage: 'en',
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
  defaultNS: 'common'
})





































// import i18n from 'i18next';
// // import Backend from 'i18next-http-backend';
// // import LanguageDetector from 'i18next-browser-languagedetector';
// import { initReactI18next } from 'react-i18next';
// import { localeSubpaths } from './next.config';

// i18n
// //   // load translation using http -> see /public/locales
// //   // learn more: https://github.com/i18next/i18next-http-backend
// //   .use(Backend)
// //   // detect user language
// //   // learn more: https://github.com/i18next/i18next-browser-languageDetector
// //   .use(LanguageDetector)
// //   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
// //   // init i18next
// //   // for all options read: https://www.i18next.com/overview/configuration-options
//   .init({
//     fallbackLng: 'en',
//     debug: true,

//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//   });

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources: {
//       en: {
//         translation: {
//           "IndexHeader": "Index Header"
//         }
//       },
//       ru: {
//         translation: {
//           "IndexHeader": "Главный заголовок"
//         }
//       }
//     },
//     lng: "en",
//     fallbackLng: "en",

//     interpolation: {
//       escapeValue: false
//     }
// });

// export default i18n;
