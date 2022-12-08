import { createApp } from 'vue'

import { i18n, pinia, router } from './modules';
import App from './App.vue'
import './style.css'


createApp(App)
  .use(router)
  .use(pinia)
  .use(i18n)
  .mount('#app')
