import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import CapsSpaceButton from '@caps-space/components'

import '@caps-space/theme-chalk/src/index.scss'

const app = createApp(App)

app.use(router)
app.use(CapsSpaceButton)

app.mount('#app')
