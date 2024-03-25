<template>
    <div class="row width">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-3 col-2">
            <ProfileNavbar/>    
        </div>

        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-9 col-10 button-85">
            <form>
                        <fieldset>
                            <legend>Fiók adatok:</legend>
                            <div class="row">
                                <p class="col-lg-2">Vezetéknév:</p>
                                <InputText class="col-lg-3 Inputs" required="required" v-model="UserLastName"  type="text" name="" id=""/>
                                <p class="col-lg-2">Keresztnév:</p>
                                <InputText class="col-lg-3 Inputs" required="required" v-model="UserFirstName"  type="text" name="" id=""/>
                            </div>
                            
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Email: </p>
                                <InputText class="col-lg-6 Inputs asd" required="required" v-model="UserEmail" type="text" name="" id=""/>
                            </div>
                            
                            <br>

                            <div class="row">
                                <p class="col-lg-3">Jelenlegi jelszó: </p>
                                <Password :feedback="false" toggleMask class="col-lg-6 Password" type="password" id="jelszoRepeat" required="required" v-model="UserActualPassword"></Password>

                            </div>

                            <br>

                            <div class="row">
                                <p class="JelszoSzoveg col-lg-3">Jelszó: </p>
                                <Password class="Password col-lg-6" v-model="UserNewPassword" toggleMask >
                                    <template #header>
                                        <h6>Válasz jelszót</h6>
                                    </template>
                                    <template #footer>
                                        <Divider />
                                        <p class="mt-2">Ajánlások</p>
                                        <ul class="pl-2 ml-2 mt-0">
                                            <li>Minimum 1 kisbetü</li>
                                            <li>Minimum 1 nagybetü</li>
                                            <li>Minimum 1 szám</li>
                                            <li>Minimum 8 karakter</li>
                                        </ul>
                                    </template>
                                </Password>
                            </div>
                            <br>
                            <div class="row">
                                <p class="JelszoSzoveg col-lg-3">Jelszó újra: </p>
                                <Password id="jelszoRepeat" required="required" v-model="UserNewPasswordAgain" class="Password col-lg-6" toggleMask></Password>
                            </div>
                            <br>
                            
                            <button class="cursor-pointer button-33" @click="SzamlazasiSzerkesztes=false">Mentés</button>
                        </fieldset>
                    </form> 
        </div>

    </div>
</template>

<script setup>
import ProfileNavbar from '../../components/ProfileNavbar.vue';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import { ref } from "vue";

import { useUserStore } from "../../store/store"
import {onBeforeMount} from "vue"

const store = useUserStore()
const user = ref()
const UserEmail = ref()
const UserFirstName = ref()
const UserLastName = ref()
const UserActualPassword = ref()
const UserNewPassword = ref()
const UserNewPasswordAgain = ref()


onBeforeMount(() => {
    user.value = store.getUser
    UserEmail.value = user.value.user.user.email
    UserLastName.value = user.value.user.user.name
    UserFirstName.value = user.value.user.user.name
    console.log(user.value.user.user.email);
})

</script>

<style lang="scss" scoped>

.Inputs{
    width: 260px; 
    margin: auto;
}

.asd{
    width: 40rem;
    margin-left: 1%;
}

.Password{
    width: 280px;
}
@media screen and (max-width: 600px) {
  .asd {
    width: 260px;
    margin: auto;
  }
}
</style>