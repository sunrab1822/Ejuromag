import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderInfosView from '../views/OrderInfosView.vue' 
import AboutUsView from '../views/AboutUsView.vue'
import LoginAndRegisterView from "../views/LoginAndRegisterView.vue"
import KosarView from "../views/KosarView.vue"
import ProductsView from "../views/ProductsView.vue"
import ProfileView from "../views/ProfileViews/ProfileView.vue"
import ProfileDatasViewVue from '@/views/ProfileViews/ProfileDatasView.vue'
import ProfileOrdersViewVue from '@/views/ProfileViews/ProfileOrdersView.vue'
import OrderFinalizeView from'@/views/OrderFinalizeView.vue'
import PasswordResetView from '@/views/PasswordResetView.vue'
import ProfilePasswordResetView from '@/views/ProfileViews/ProfilePasswordResetView.vue'
import ErrorView from '../views/ErrorView.vue'

import AdminLoginView from '@/views/AdminViews/AdminLoginView.vue'
import AdminMainView from '@/views/AdminViews/AdminMainView.vue'

import { useUserStore } from "../store/store.js"

document.title = "Ejuromag"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Főoldal',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: "404",
      component: ErrorView
    },
    {
      path: "/help/Rendeles_es_szallitas",
      name: "Rendelés és szállitás",
      component: OrderInfosView
    },
    {
      path: '/help/Rolunk',
      name: 'Rólunk',
      component: AboutUsView
    },
    {
      path: '/Kosar',
      name: 'Kosár',
      component: KosarView
    },
    {
      path: '/rendeles_osszegzes',
      name: 'Rendelés összegzése',
      component: OrderFinalizeView
    },
    {
      path: '/Login',
      name: 'Belépés',
      component: LoginAndRegisterView
    },
    {
      path: '/resetPassword/:token',
      name: 'Jelszó visszaállítás',
      component: PasswordResetView
    },
    {
      path: '/profil',
      name: 'Profil',
      beforeEnter: checkIfUserLoggedIn,
      component: ProfileView
    },
    {
      path: '/laptopok',
      name: 'Laptopok',
      component: ProductsView
    },
    {
      path: '/irodai_szamitogepek',
      name: 'Irodai számítógépek',
      component: ProductsView
    },
    {
      path: '/gamer_szamitogepek',
      name: 'Gamer számítógépek',
      component: ProductsView
    },
    {
      path: '/telefonok',
      name: 'Telefonok',
      component: ProductsView
    },
    {
      path: '/tabletek',
      name: 'Tabletek',
      component: ProductsView
    },
    {
      path: '/konzolok',
      name: 'Konzolok',
      component: ProductsView
    },
    {
      path: '/profil/sajat_adatok',
      name: 'Profil_Sajat_Adatok',
      beforeEnter: checkIfUserLoggedIn,
      component: ProfileDatasViewVue
    },
    {
      path: '/profil/jelszo_csere',
      name: 'Jelszo_csere',
      beforeEnter: checkIfUserLoggedIn,
      component: ProfilePasswordResetView
    },
    {
      path: '/profil/rendelesek',
      name: 'Profil_Rendelesek',
      beforeEnter: checkIfUserLoggedIn,
      component: ProfileOrdersViewVue
    },

    {
      path: '/admin',
      name: 'Admin',
      component: AdminLoginView
    },    {
      path: '/admin/main',
      name: 'Admin_Main',
      beforeEnter: checkAdminRights,
      component: AdminMainView
    },
  ]
  
})

function checkIfUserLoggedIn(from, to, next) {
  
  let isLoggedIn;
  let store = useUserStore()

  try {
    isLoggedIn = store.isLoggedIn

    if(isLoggedIn === true) {
      next();       
  } else {
    window.location.href = 'http://localhost:5173';
  }
  } catch (error) {
    window.location.href = 'http://localhost:5173';
  }

}

function checkAdminRights(from, to, next) {
  
  let user;
  let store = useUserStore()

  try {
    user = store.getUser

    if(user.user.user.role === 1) {
      next();       
  } else {
    window.location.href = 'http://localhost:5173';
  }
  } catch (error) {
    window.location.href = 'http://localhost:5173';
  }

}
export default router

