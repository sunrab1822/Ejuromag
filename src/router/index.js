import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/RendelesEsSzallitasView.vue' 
import RolunkView from '../views/RolunkView.vue'
import LoginAndRegisterView from "../views/LoginAndRegisterView.vue"
import KosarView from "../views/KosarView.vue"
import Termekekiew from "../views/Termekekiew.vue"
import ProfileView from "../views/ProfileView.vue"
import ProfileDatasViewVue from '@/views/ProfileViews/ProfileDatasView.vue'
import ProfileAdressesViewVue from '@/views/ProfileViews/ProfileAdressesView.vue'
import ProfileOrdersViewVue from '@/views/ProfileViews/ProfileOrdersView.vue'
import RendelesVeglegesiteseViewVue from'@/views/RendelesVeglegesiteseView.vue'

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
      path: '/rendeles_osszegzes',
      name: 'Rendelés összegzése',
      component: RendelesVeglegesiteseViewVue
    }
    ,
    {
      path: '/Login',
      name: 'Belépés',
      component: LoginAndRegisterView
    },
    {
      path: '/profil',
      name: 'Profil',
      component: ProfileView
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
    },
    {
      path: '/profil/sajat_adatok',
      name: 'Profil_Sajat_Adatok',
      component: ProfileDatasViewVue
    },
    {
      path: '/profil/cim',
      name: 'Profil_Cim',
      component: ProfileAdressesViewVue
    },
    {
      path: '/profil/rendelesek',
      name: 'Profil_Rendelesek',
      component: ProfileOrdersViewVue
    }
    
  ]
  
})

router.beforeEach((to, from, next) => {
  document.title = to.name + " - Ejuromag";
  next();
});

export default router
