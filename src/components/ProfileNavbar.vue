<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="flex justify-content-center profileNavbar">
        <Sidebar v-model:visible="visible">
            <template #container="{ closeCallback }">
                <div class="flex flex-column h-full">
                    <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                        <span class="inline-flex align-items-center gap-2">

                            <span class="font-semibold text-2xl text-primary">Profilod</span>
                        </span>
                        <span>
                            <Button type="button" @click="closeCallback" icon="fa-solid fa-x" rounded outlined class="h-2rem w-2rem"></Button>
                        </span>
                    </div>
                    <div class="overflow-y-auto">
                        <ul class="list-none p-3 m-0">
                            <li>

                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <router-link to="/profil/rendelesek" v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-home mr-2"></i>
                                            <span class="font-medium">Rendelések</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/profil/jelszo_csere" v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-bookmark mr-2"></i>
                                            <span class="font-medium">Jelszó csere</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/profil/sajat_adatok" v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-bookmark mr-2"></i>
                                            <span class="font-medium">Fiókadatok</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-users mr-2"></i>
                                            <span @click="LogOut" class="font-medium">Kijelentkezés</span>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-auto">
                        <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                        <div class="m-3 flex align-items-center p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                            <Avatar image="http://bgs.jedlik.eu/ejuromag/UserImg.webp" shape="circle" size="large"/>
                            <span class="font-bold">{{user.user.user.name}}</span>
                        </div>
                    </div>
                </div>
            </template>
        </Sidebar>
        <Button icon="fa-solid fa-arrow-right " @click="visible = true" />
    </div>


</template>

<script setup>
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import termekService from "../services/termekService"

import { useUserStore } from "../store/store"
import {onBeforeMount} from "vue"
import router from "@/router";


const user = ref()
const store = useUserStore()
const LogOut = async() => {
    const res = await termekService.UserLogOut(user.value.user.token);
    store.setLoggedIn(false);
    store.setUser(null);

    router.push({ name: "Főoldal" })
}

onBeforeMount(() => {
    user.value = store.getUser
})


const visible = ref(false);

</script>


<style lang="scss" scoped>

.profileNavbar{
    height: 400px;
    padding: -10px;
}

</style>