import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  BrowserRouter as Router,  Route} from "react-router-dom";
import {Routes} from "react-router";
import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

//Localization

i18n
    .use(initReactI18next) //passes i18n down to react-18next
    .use(LanguageDetector)
    .use(I18NextHttpBackend)
    .init({
        supportedLngs: ['en', 'ru'],
        fallbackLng: 'en',
        detection: {
            order: [
                'cookie', "localStorage", "htmlTag", 'path', 'subdomain'
            ],
            caches: ['cookie']
        },

    })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>} />
        </Routes>
    </Router>
);

