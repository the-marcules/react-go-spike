import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    welcome: 'Welcome to Audi Vesuv',
                    subWelcome: 'Upload and verify your crash results.',
                    Profile: 'Profile',
                    'file-upload-heading': 'Upload file',
                    Upload: 'Upload',
                    "Crash Tests": "Crash Tests"
                },
            },
            de: {
                translation: {
                    welcome: 'Willkommen zu Audi Vesuv',
                    subWelcome:
                        'Laden Sie Ihre Absturzergebnisse hoch und überprüfen Sie sie.',
                    Profile: 'Profil',
                    'file-upload-heading': 'Datei hochladen',
                    Upload: 'Hochladen',
                    "Crash Tests": "Crash Tests"
                },
            },
        },
    });

export default i18n;
