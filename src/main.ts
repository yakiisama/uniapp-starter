import * as Pinia from 'pinia'
import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'

import '@/mock/index'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  return {
    app,
    Pinia,
  }
}
