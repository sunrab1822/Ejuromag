import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderInfosView from '../views/OrderInfosView.vue' 
import AboutUsView from '../views/AboutUsView.vue'
import LoginAndRegisterView from "../views/LoginAndRegisterView.vue"
import CartView from "../views/CartView.vue"
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
      path: '/ejuromag/',
      name: 'Főoldal',
      component: HomeView
    },
    {
      path: '/ejuromag/:pathMatch(.*)*',
      name: "404",
      component: ErrorView
    },
    {
      path: "/ejuromag/help/Rendeles_es_szallitas",
      name: "Rendelés és szállitás",
      component: OrderInfosView
    },
    {
      path: '/ejuromag/help/Rolunk',
      name: 'Rólunk',
      component: AboutUsView
    },
    {
      path: '/ejuromag/kosar',
      name: 'Kosár',
      component: CartView
    },
    {
      path: '/ejuromag/rendeles_osszegzes',
      name: 'Rendelés összegzése',
      beforeEnter: checkIfUserLoggedIn,
      component: OrderFinalizeView
    },
    {
      path: '/ejuromag/login',
      name: 'Belépés',
      component: LoginAndRegisterView
    },
    {
      path: '/ejuromag/resetPassword/:token',
      name: 'Jelszó visszaállítás',
      component: PasswordResetView
    },
    {
      path: '/ejuromag/profil',
      name: 'Profil',
      beforeEnter: checkIfUserLoggedIn,
      component: ProfileView
    },
    {
      path: '/ejuromag/laptopok',
      name: 'Laptopok',
      component: ProductsView
    },
    {
      path: '/ejuromag/irodai_szamitogepek',
      name: 'Irodai számítógépek',
      component: ProductsView
    },
    {
      path: '/ejuromag/gamer_szamitogepek',
      name: 'Gamer számítógépek',
      component: ProductsView
    },
    {
      path: '/ejuromag/telefonok',
      name: 'Telefonok',
      component: ProductsView
    },
    {
      path: '/ejuromag/tabletek',
      name: 'Tabletek',
      component: ProductsView
    },
    {
      path: '/ejuromag/konzolok',
      name: 'Konzolok',
      component: ProductsView
    },
    {
      path: '/ejuromag/profil/sajat_adatok',
      name: 'Profil Saját Adatok',
      beforeEnter: checkIfUserLoggedIn,
      component: ProfileDatasViewVue
    },
    {
      path: '/ejuromag/profil/jelszo_csere',
      name: 'Jelszó csere',
      beforeEnter: checkIfUserLoggedIn,
      component: ProfilePasswordResetView
    },
    {
      path: '/ejuromag/profil/rendelesek',
      name: 'Profil Rendelések',
      beforeEnter: checkIfUserLoggedIn,
      component: ProfileOrdersViewVue
    },

    {
      path: '/ejuromag/admin',
      name: 'Admin',
      component: AdminLoginView
    },    {
      path: '/ejuromag/admin/main',
      name: 'Admin Main',
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
    window.location.href = 'http://bgs.jedlik.eu/ejuromag';
  }
  } catch (error) {
    window.location.href = 'http://bgs.jedlik.eu/ejuromag';
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
    window.location.href = 'http://bgs.jedlik.eu/ejuromag';
  }
  } catch (error) {
    window.location.href = 'http://bgs.jedlik.eu/ejuromag';
  }

}
export default router

