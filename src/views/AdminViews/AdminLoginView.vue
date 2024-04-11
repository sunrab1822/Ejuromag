<template class="main">
    <div class="container">
        <div class="row">

            <div class="card col-12 LoginCard">
                <div class="card-header">
                    <h2 id="LoginName">Login</h2>
                </div>
                <ul class="list-group list-group-flush">
                    <br>
                    <li class="list-group-item">Email:
                        <input @keyup.enter="LoginAdmin" v-model="LoginAdminEmail" type="text">
                    </li>
                    <br>
                    <li class="list-group-item">Password:
                        <input @keyup.enter="LoginAdmin" v-model="LoginAdminPassword" type="password">
                    </li>
                    <li class="list-group-item">
                        <Button id="LoginBtn" @click="LoginAdmin">Login</Button>
                    </li>
                </ul>

                <ProgressSpinner v-if="loading" />

                <div v-if="hiba" class="alert alert-danger alert-dismissible" role="alert">
                    <strong>{{ hiba }}</strong>
                    <button type="button" @click="hiba=''" class="btn-close"></button>
                </div>

                <div v-if="Succesmessage" class="alert alert-success alert-dismissible" role="alert">
                    <strong>{{ Succesmessage }}</strong>
                    <button type="button" @click="Succesmessage=''" class="btn-close"></button>
                </div>
            </div>



        </div>

    </div>

    <AdminFooter/>

</template>

<script setup>
import AdminFooter from '../../components/AdminFooter.vue';
import Button from 'primevue/button';
import {ref} from "vue";
import { useRouter  } from "vue-router";

import termekService from '@/services/termekService';
import { useUserStore } from "../../store/store.js"
import ProgressSpinner from 'primevue/progressspinner';


const store = useUserStore()
const router = useRouter()    

const loading = ref(false)
const hiba = ref("")
const Succesmessage = ref("")
const LoginAdminEmail = ref("")
const LoginAdminPassword = ref("")

store.setLoggedIn(false);
store.setUser(null);

const LoginAdmin = async() => {
        loading.value = true
        hiba.value = ""
        Succesmessage.value = ""
        const akt_login = {
        email: LoginAdminEmail.value,
        password: LoginAdminPassword.value,
        }

        try {
            const res = await termekService.UserLogin(akt_login)
            if(res.user.user.role == 1){
                store.setUser(res)
                store.setLoggedIn(true)
                router.push({ name: "Admin_Main" })
            }
            else{
                hiba.value = "You are not admin!"
            }
            console.log(res.user.user.role);

        } catch (error) {

            console.log(error);

            if(error.response.status == 401){
                hiba.value = "Email or password is incorrect!"
            }
            if(error.response.status == 500){
                hiba.value = "Error on server!"
            }
            if(error.response.status == 422){
                hiba.value = "Please fill every field!"  
            }
        }
        loading.value = false
    }

</script>

<style scoped>

@import '../../assets/scss/adminStyle.scss'

</style>

