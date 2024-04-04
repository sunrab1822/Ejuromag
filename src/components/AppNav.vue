<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<div>
    <nav class="navbar navbar-expand-md navbar-light shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="/EjuroMagLogo.webp" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <div class="row">

                    <div class="nav-item col-6" >
                        <a v-badge="cartCounter" id="Cart" data-cy="navbar-kosar-link" class="nav-link" href="/Kosar"><i class="fa-solid fa-cart-shopping"></i></a>

                    </div>
                    <div class="dropdown col-6">
                        <a class="nav-link fa-solid fa-user" data-cy="navbar-login-link" @click="Login"></a>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</div>
</template>

<script setup>

import { useUserStore } from "../store/store"
import { useRouter  } from "vue-router";
import {ref, onBeforeMount} from "vue";

let cartCounter = ref(0)

const router = useRouter()    
const store = useUserStore()

onBeforeMount(() => {
    try {
        cartCounter.value = (JSON.parse(localStorage.getItem('data')).length)

    } 
    catch (error) {
        
    }
})

const Login = () => {

    if(store.getLoggedIn){
        router.push({ name: "Profil" })
    }
    else{
        router.push({ name: "Belépés" })

    }

}


</script>
 
<style lang="scss" scoped>

.fa-user{
    font-size: 28px;

}

a{
    text-decoration: none;
    cursor: pointer;
    color: rgb(0, 0, 0);
}
a:hover{
    text-decoration: underline;
    color: rgb(99, 99, 99);
}
li{
    font-size: 15px;
}

nav{
    background-color: rgb(20, 147, 202)
}


#search{
  width: 70%;
}

#Cart{
  font-size: larger;
  width: 3rem;
}

@media (max-width: 770px) {
    #Cart{
    margin-top: 1rem;
    }
}

#ToHome{
  text-decoration: none;
  color: darkmagenta;
  font-size: large;
}



.p-badge{
        position: relative;
    }
</style>