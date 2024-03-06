<template>
    <div class="container" style="max-width: 95%;">
        <h1 class="h1Custom">Üdvözlünk XY</h1>
    </div>
    <div class="row" style="max-width: 95%;">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
        <ProfileNavbar/>    
    </div>

    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
        <p>
            A fiókban megtekinthetők a legutóbbi rendelések, módosíthatók a szállítási és számlázási címek és szerkeszthető a jelszó, valamint egyéb fiók adatok.
        </p>
    </div>
    </div>    



</template>

<script setup>
import { ref } from "vue";
import ProfileNavbar from '../components/ProfileNavbar.vue';


const visible = ref(false);

</script>


<style lang="scss" scoped>

</style>