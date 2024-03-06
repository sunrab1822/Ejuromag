<template>
    <div class="row" style="max-width: 95%;">
    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
        <ProfileNavbar/>    
    </div>

    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11" style="margin-top: 50px;">
        <div class="row">
            <div style="margin: auto;" class="col-md-5 col-lg-5 button-85">
                <div v-if="SzamlazasiSzerkesztes==false">
                    <h3 >Számlázási cím<a class="cursor-pointer" @click="SzamlazasiSzerkesztes=true">Szerkesztés</a></h3>
                    <p>Név</p>
                    <p>Irányítószám, Város</p>
                    <p>Utca, házszám</p>
                </div>


                <div v-if="SzamlazasiSzerkesztes==true" style="margin: auto;">

                    <form>
                        <fieldset>
                            <legend>Számlázási cím:</legend>
                            <div class="row">
                                <p class="col-lg-3">Vezetéknév:</p>
                                <input class="col-lg-6" placeholder="Vezetéknév" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Keresztnév:</p>
                                <input class="col-lg-6" placeholder="Keresztnév" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Irányítószám: </p>
                                <InputOtp class="col-lg-6" v-model="RegisterPostalCode" integerOnly/>
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Város: </p>
                                <input class="col-lg-6" placeholder="Nyúl" required="required" v-model="RegisterCity" type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Utca, házszám: </p>
                                <input class="col-lg-6" placeholder="Iskola utca 7" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                            </div>
                            <br>
                            
                            <div class="row">
                                <p class="col-lg-3">Telefonszám: </p>
                                <InputMask class="col-lg-6" id="basic" v-model="value" mask="99-99-9999999?99999999" placeholder="99-99-9999999" />
                            </div>
                            <br>
                            
                            <input class="cursor-pointer" @click="SzamlazasiSzerkesztes=false" value="Mentés">
                            <input class="cursor-pointer" @click="SzamlazasiSzerkesztes=false" value="Mégse">
                        </fieldset>
                    </form> 
                </div>

            </div>

            <div style="margin: auto;" class="col-md-5 col-lg-5 button-85">
                <div v-if="SzallitasiSzerkesztes==false">
                    <h3 >Szállítási cím<a class="cursor-pointer" @click="SzallitasiSzerkesztes=true">Szerkesztés</a></h3>
                    <p>Név</p>
                    <p>Irányítószám, Város</p>
                    <p>Utca, házszám</p>
                </div>

                <div v-if="SzallitasiSzerkesztes==true">

                    <form>
                        <fieldset>
                            <legend>Számlázási cím:</legend>
                            <div class="row">
                                <p class="col-lg-3">Vezetéknév:</p>
                                <input class="col-lg-6" placeholder="Vezetéknév" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Keresztnév:</p>
                                <input class="col-lg-6" placeholder="Keresztnév" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Irányítószám: </p>
                                <InputOtp class="col-lg-6" v-model="RegisterPostalCode" integerOnly/>
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Város: </p>
                                <input class="col-lg-6" placeholder="Nyúl" required="required" v-model="RegisterCity" type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Utca, házszám: </p>
                                <input class="col-lg-6" placeholder="Iskola utca 7" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                            </div>
                            <br>
                            
                            <div class="row">
                                <p class="col-lg-3">Telefonszám: </p>
                                <InputMask class="col-lg-6" id="basic" v-model="value" mask="99-99-9999999?99999999" placeholder="99-99-9999999" />
                            </div>
                            <br>
                            
                            <input class="cursor-pointer" @click="SzallitasiSzerkesztes=false" value="Mentés">
                            <input class="cursor-pointer" @click="SzallitasiSzerkesztes=false" value="Mégse">

                        </fieldset>
                    </form> 
                </div>
            </div>
        </div>


    </div>
    </div>
</template>

<script setup>
import InputMask from 'primevue/inputmask';
import InputOtp from 'primevue/inputotp';

import ProfileNavbar from '../../components/ProfileNavbar.vue';
import { ref } from "vue";


const SzamlazasiSzerkesztes = ref(false)
const SzallitasiSzerkesztes = ref(false)

</script>

<style lang="scss" scoped>

a{
    margin-left: 20%;
    text-decoration: none;
}

p{
    margin-top: 8px;
}

.cursor-pointer{
    margin: 10px;

    text-align: center;
}


</style>