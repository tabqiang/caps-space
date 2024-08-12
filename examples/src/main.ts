import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import CapsSpaceButton from '@caps-space/components' // 引入组件库

// import '@caps-space/theme-chalk/src/index.scss' // 引入样式
import '../../packages/theme-chalk/src/index.scss' // 引入样式

const app = createApp(App)

app.use(router)
app.use(CapsSpaceButton) // 使用组件库

app.mount('#app')
