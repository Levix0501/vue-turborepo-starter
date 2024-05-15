import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import { setupRouter } from '@/router'
import { setupPinia } from './stores'

function bootstrap() {
  const app = createApp(App)

  setupPinia(app)
  setupRouter(app)

  app.mount('#app')
}

bootstrap()
