<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<div id="app">
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img id="Logo" src="/EjuroMagLogo.png" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ms-auto">
                <!-- Authentication Links -->
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Light</a></li>
                            <li><a class="dropdown-item" href="#">Dark</a></li>
                            <li><a class="dropdown-item" href="#">Default</a></li>
                        </ul>
                    </div>

                    <li class="nav-item">
                        <a id="Kosar" class="nav-link" href="/Kosar"><i class="fa-solid fa-cart-shopping"></i></a>
                    </li>
                    <div class="dropdown">
                        <a class="nav-link fa-solid fa-user" @click="Login"></a>
                    </div>
                </ul>
            </div>
        </div>

    </nav>
</div>
</template>

<script setup>

import { ref } from "vue";
import { useUserStore } from "../store/store"
import { useRouter  } from "vue-router";


const router = useRouter()    
const store = useUserStore()


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


#search{
  width: 70%;
}

#kocsi{
  font-size: larger;
}

#ToHome{
  text-decoration: none;
  color: darkmagenta;
  font-size: large;
}
</style>