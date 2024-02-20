import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/RendelesEsSzallitasView.vue' 
import RolunkView from '../views/RolunkView.vue'
import LoginAndRegisterView from "../views/LoginAndRegisterView.vue"
import KosarView from "../views/KosarView.vue"
import Termekekiew from "../views/Termekekiew.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/help/Rendeles_es_szallitas",
      name: "Rendeles és szallitas",
      component: HelpView
    },
    {
      path: '/help/Rolunk',
      name: 'Rolunk',
      component: RolunkView
    },
    {
      path: '/Kosar',
      name: 'Kosar',
      component: KosarView
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginAndRegisterView
    },
    {
      path: '/laptopok',
      name: 'Laptopok',
      component: Termekekiew
    },
    {
      path: '/tabletek',
      name: 'Tabletek',
      component: Termekekiew
    },
    {
      path: '/konzolok',
      name: 'Konzolok',
      component: Termekekiew
    }
    
  ]
})

export default router
