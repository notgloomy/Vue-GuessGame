import { createRouter, createWebHistory } from 'vue-router'
import GameHome from '../views/GameHome/GameHome.vue'
import GameLogin from '@/views/GameLogin/GameLogin.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GameHome
    },
    {
      path: '/login',
      name: 'login',
      component:GameLogin
    }
  ]
})

export default router
