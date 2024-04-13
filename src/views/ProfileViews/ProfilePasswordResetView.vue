<template>
    <div class="row width">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-3 col-2">
            <ProfileNavbar />
        </div>

        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-9 col-10 button-85">
                <fieldset>

                    <div class="row PasswordRest">
                        <div class="col-lg-6">
                            <h2>Biztosan szeretnéd megváltoztatni a jelszavadat?</h2>
                        </div>

                        <div class="col-lg-6">
                            <button class="cursor-pointer button-33" @click="EmailReset">Mentés</button>

                        </div>

                        <ProgressSpinner v-if="loading" />
                        <div v-if="Succesmessage" class="alert alert-success alert-dismissible" role="alert">
                            <strong>{{ Succesmessage }}</strong>
                            <button type="button" @click="Succesmessage = ''" class="btn-close"></button>
                        </div>

                    </div>


                </fieldset>
        </div>

    </div>
</template>

<script setup>
import ProfileNavbar from '../../components/ProfileNavbar.vue';
import ProgressSpinner from 'primevue/progressspinner';
import {onBeforeMount} from "vue"
import termekService from "../../services/termekService"


import { useUserStore } from "../../store/store"
import { ref } from "vue";

const store = useUserStore()
const user = ref()
const UserEmail = ref()

let Succesmessage = ref()
let loading = ref(false)

onBeforeMount(() => {
    user.value = store.getUser
    UserEmail.value = user.value.user.user.email
})

const EmailReset = async() => {
        loading.value = true
        Succesmessage.value = ""
            try{
            const res = await termekService.ResetPasswordToken({email: UserEmail.value})

            }
            catch(error){
                loading.value = false
                return
            }
            Succesmessage.value = "A jelszó cseréhez szükséges link elküldve emailban"
        
        loading.value = false

    }

</script>

<style lang="scss" scoped>


.PasswordRest{
    margin: 5rem;
}
</style>