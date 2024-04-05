import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderInfosView from '../views/OrderInfosView.vue' 
import AboutUsView from '../views/AboutUsView.vue'
import LoginAndRegisterView from "../views/LoginAndRegisterView.vue"
import KosarView from "../views/KosarView.vue"
import ProductsView from "../views/ProductsView.vue"
import ProfileView from "../views/ProfileView.vue"
import ProfileDatasViewVue from '@/views/ProfileViews/ProfileDatasView.vue'
import ProfileAdressesViewVue from '@/views/ProfileViews/ProfileAdressesView.vue'
import ProfileOrdersViewVue from '@/views/ProfileViews/ProfileOrdersView.vue'
import OrderFinalizeView from'@/views/OrderFinalizeView.vue'
import PasswordResetView from '@/views/PasswordResetView.vue'
import ProfilePasswordResetView from '@/views/ProfileViews/ProfilePasswordResetView.vue'

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
    }
    ,
    {
      path: '/Login',
      name: 'Belépés',
      component: LoginAndRegisterView
    },
    {
      path: '/jelszo_modositasa/:token',
      name: 'Jelszó visszaállítás',
      component: PasswordResetView
    },
    {
      path: '/profil',
      name: 'Profil',
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
      component: ProfileDatasViewVue
    },
    {
      path: '/profil/jelszo_csere',
      name: 'Jelszo_csere',
      component: ProfilePasswordResetView
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
