import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'

export default createRouter({
  // Hash
  // https://google.com/#/search
  history: createWebHashHistory(),
  // pages 를 구분해준다.
  routes: [
    {
      path: '/',       // page를 구분하는 경로  ex)https://google.com/about
      component: Home     // 어떤 vue.js 컴포넌트에 연결할지 명시하면 된다.
    },
    {
      path: '/about',
      component: About
    }
  ]
})