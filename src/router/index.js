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
      name: 'Főoldal',
      component: HomeView
    },
    {
      path: "/help/Rendeles_es_szallitas",
      name: "Rendelés és szállitás",
      component: HelpView
    },
    {
      path: '/help/Rolunk',
      name: 'Rólunk',
      component: RolunkView
    },
    {
      path: '/Kosar',
      name: 'Kosár',
      component: KosarView
    },
    {
      path: '/Login',
      name: 'Belépés',
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

router.beforeEach((to, from, next) => {
  document.title = to.name + " - Ejuromag";
  next();
});

export default router
