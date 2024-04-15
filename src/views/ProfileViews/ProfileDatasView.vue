<template>
    <div class="row width">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-3 col-2">
            <ProfileNavbar />
        </div>

        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-9 col-10 button-85">
                <fieldset>
                    <legend>Fiók adatok:</legend>
                    <div class="row">
                        <p class="col-lg-2">Vezetéknév:</p>
                        <InputText class="col-lg-3 Inputs" required="required" v-model="UserLastName" type="text"
                            />
                        <p class="col-lg-2">Keresztnév:</p>
                        <InputText class="col-lg-3 Inputs" required="required" v-model="UserFirstName" type="text"
                             />
                    </div>

                    <div class="row EmailDiv">
                        <p class="col-lg-3">Email: </p>
                        <InputText class="col-lg-6 Inputs EmailInput" required="required" v-model="UserEmail"
                            type="text" />
                    </div>

                    <div class="row">
                        <p class="col-lg-3">Jelszó megerősítés: </p>
                        <Password :feedback="false" required="required" v-model="UserActualPassword"
                            class="Password col-lg-6" toggleMask></Password>
                            <ProgressSpinner v-if="loading"/>

                    </div>

                    <button class="cursor-pointer button-33" @click="Save">Mentés</button>
                </fieldset>

            <div v-if="ErrorMessage" class="alert alert-danger alert-dismissible" role="alert">
                <strong>{{ ErrorMessage }}</strong>
                <button type="button" @click="ErrorMessage=''" class="btn-close"></button>
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
import ProgressSpinner from 'primevue/progressspinner';


import { useUserStore } from "../../store/store"
import {onBeforeMount} from "vue"

const store = useUserStore()
const user = ref()
const UserEmail = ref()
const UserFirstName = ref()
const UserLastName = ref()
const UserActualPassword = ref()
let ErrorMessage = ref()
let loading = ref(false)
let Succesmessage = ref()


onBeforeMount(() => {
    user.value = store.getUser
    UserEmail.value = user.value.user.user.email
    UserLastName.value = user.value.user.user.name.split(" ")[0]
    UserFirstName.value = user.value.user.user.name.split(" ").slice(1).join(" ");
})

const Save = async() => {
    loading.value = true
    Succesmessage.value = ""
    ErrorMessage.value = ""
            try {
            const akt_login = {
            email: UserEmail.value,
            password: UserActualPassword.value,
            }
            await termekService.UserLogin(akt_login)
            try {
                const updated_data = {
                    name: UserLastName.value + " " + UserFirstName.value,
                    email: UserEmail.value
                }
                await termekService.UserUpdate(updated_data, user.value.user.token)
                const akt_updated_login = {
                email: UserEmail.value,
                password: UserActualPassword.value,
                }
                const res = await termekService.UserLogin(akt_updated_login)
                store.setUser(res)

                Succesmessage.value = "Adatok sikeresen módosítva"
            } catch (error) {
                console.log(error.message);
                ErrorMessage.value = "Hibás jelszó!"
                return
            }

        } catch (error) {
            ErrorMessage.value = "Hibás jelszó!"
        }
        loading.value = false


    }

</script>

<style lang="scss" scoped>

.button-33{
    margin-top: 1rem;
    margin-bottom: 1rem;
}

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