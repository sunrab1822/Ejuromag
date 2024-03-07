<template>
    <div class="row" style="max-width: 95%;">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
            <ProfileNavbar/>    
        </div>

        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 button-85" style="margin: auto;">
            <form>
                        <fieldset>
                            <legend>Fiók adatok:</legend>
                            <div class="row">
                                <p class="col-lg-2">Vezetéknév:</p>
                                <input class="col-lg-3" placeholder="Vezetéknév" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                                <p class="col-lg-2">Keresztnév:</p>
                                <input class="col-lg-3" placeholder="Keresztnév" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                            </div>
                            
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Email: </p>
                                <input class="col-lg-6" placeholder="Nyúl" required="required" v-model="RegisterCity" type="text" name="" id="">
                            </div>
                            
                            <br>

                            <div class="row">
                                <p class="col-lg-3">Jelenlegi jelszó: </p>
                                <Password :feedback="false" style="width: 280px;" toggleMask class="col-lg-6" type="password" id="jelszoRepeat" placeholder="Jelszó" required="required" v-model="LoginPassword"></Password>

                            </div>

                            <br>

                            <div class="row">
                                <p class="JelszoSzoveg col-lg-3">Jelszó: </p>
                                <Password class="Password col-lg-6" style="width: 280px;" placeholder="Jelszó" v-model="RegisterPassword" toggleMask >
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
                                <Password id="jelszoRepeat" style="width: 280px;" placeholder="jelszó Újra" required="required" v-model="RegisterPasswordAgain" class="Password col-lg-6" toggleMask></Password>
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


</script>

<style lang="scss" scoped>

</style>