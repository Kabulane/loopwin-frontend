import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import './styles/base.css'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import fr from '../shared/utils/locales/fr.json'

const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    messages: { fr }
})
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(router);
app.use(pinia);
app.use(i18n);
app.mount('#app');
