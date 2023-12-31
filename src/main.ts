import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
const pinia = createPinia()
import './style.css'

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
