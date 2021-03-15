import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { OvermindPlugin } from './overmind'

createApp(App).use(OvermindPlugin).use(store).use(router).mount('#app')
