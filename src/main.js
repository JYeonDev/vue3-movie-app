import { createApp } from 'vue'
import App from './App'
import router from './routes'  // 폴더내부에 index 파일을 가져올때는 파일명이 생략이 가능하다. index.js 생략
import store from './store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')