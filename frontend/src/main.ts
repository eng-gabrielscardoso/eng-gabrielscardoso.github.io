import { createApp } from 'vue'
import App from './App.vue'

import './registerServiceWorker'

import router from './router'

import 'animate.css';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'

createApp(App).use(router).mount('#app')
