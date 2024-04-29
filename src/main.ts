import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import en from "./locales/en.json"
import ru from "./locales/ru.json"
import uz from "./locales/uz.json"

const app = createApp(App);

const i18n = createI18n({
    locale: document.cookie.split('=')[1],
    messages:{
        en: en,
        ru: ru,
        uz: uz,
    }
});

app.use(i18n)
app.mount("#app");