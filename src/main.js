import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import as component
import Badge from 'primevue/badge';

// import as directive
import BadgeDirective from 'primevue/badgedirective';


import App from './App.vue'
import router from './router'

import 'bootstrap'
import './assets/scss/style.scss'
import './assets/scss/footerStyle.scss'
import './assets/scss/homeStyle.scss'



const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(PrimeVue);
app.directive('badge', BadgeDirective);


app.mount('#app')
