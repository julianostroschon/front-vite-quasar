import { i18n } from './modules/i18n';
import { createApp } from 'vue'

import './style.css'
import App from './App.vue'


createApp(App).use(i18n).mount('#app')
