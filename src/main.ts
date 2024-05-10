/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from './router/router';
import { createPinia } from 'pinia'

const app = createApp(App)

registerPlugins(app)

app
.use(router)
.use(createPinia())
.mount('#app')
