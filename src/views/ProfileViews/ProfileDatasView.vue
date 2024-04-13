<template>
    <div class="row width">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-3 col-2">
            <ProfileNavbar />
        </div>

        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-9 col-10 button-85">
            <form>
                <fieldset>
                    <legend>Fiók adatok:</legend>
                    <div class="row">
                        <p class="col-lg-2">Vezetéknév:</p>
                        <InputText class="col-lg-3 Inputs" required="required" v-model="UserLastName" type="text"
                            name="" id="" />
                        <p class="col-lg-2">Keresztnév:</p>
                        <InputText class="col-lg-3 Inputs" required="required" v-model="UserFirstName" type="text"
                            name="" id="" />
                    </div>

                    <div class="row EmailDiv">
                        <p class="col-lg-3">Email: </p>
                        <InputText class="col-lg-6 Inputs EmailInput" required="required" v-model="UserEmail"
                            type="text" name="" id="" />
                    </div>

                    <div class="row">
                        <p class="JelszoSzoveg col-lg-3">Jelszó megerősítés: </p>
                        <Password :feedback="false" required="required" v-model="UserActualPassword"
                            class="Password col-lg-6" toggleMask></Password>
                    </div>

                    <button class="cursor-pointer button-33" @click="Save">Mentés</button>
                </fieldset>
            </form>
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
</template>

<script setup>
import ProfileNavbar from '../../components/ProfileNavbar.vue';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import { ref } from "vue";
import termekService from '@/services/termekService';

import { useUserStore } from "../../store/store"
import {onBeforeMount} from "vue"

const store = useUserStore()
const user = ref()
const UserEmail = ref()
const UserFirstName = ref()
const UserLastName = ref()
const UserActualPassword = ref()
let hiba = ref()
let Succesmessage = ref()


onBeforeMount(() => {
    user.value = store.getUser
    UserEmail.value = user.value.user.user.email
    UserLastName.value = user.value.user.user.name.split(" ")[0]
    UserFirstName.value = user.value.user.user.name.split(" ")[1]
})

const Save = () => {
    try {
        const akt_login = {
        email: UserEmail.value,
        password: UserActualPassword.value,
        }
        termekService.UserLogin(akt_login)
    } catch (error) {
        hiba.value = "Hibás jelszó!"
        return
    }

}

</script>

<style lang="scss" scoped>

.EmailDiv{
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.Inputs{
    width: 260px; 
    margin: auto;
}

.EmailInput{
    width: 40rem;
    margin-left: 1%;
}

.Password{
    width: 280px;
}
@media screen and (max-width: 600px) {
  .EmailInput {
    width: 260px;
    margin: auto;
  }
}
</style>