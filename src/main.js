import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'

import 'bootstrap'
import './assets/scss/style.scss'
import './assets/scss/footerStyle.scss'
import './assets/scss/homeStyle.scss'
import 'primeflex/primeflex.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(PrimeVue);


app.mount('#app')
