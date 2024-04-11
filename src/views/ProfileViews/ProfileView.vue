<template>
    <div class="container width">
        <h1 class="h1Custom">Üdvözlünk: {{user.user.user.name}}</h1>
    </div>
    <div class="row width">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-3 col-3">
        <ProfileNavbar/>    
    </div>

    <div class="col-lg-11 col-md-11 col-sm-11 col-xs-9 col-9">
        <p>
            A fiókban megtekinthetők a legutóbbi rendelések, szerkeszthető a jelszó, valamint egyéb fiók adatok.
        </p>
    </div>
    </div>    



</template>

<script setup>
import { ref } from "vue";
import ProfileNavbar from '../../components/ProfileNavbar.vue';
import { useUserStore } from "../../store/store"
import {onBeforeMount} from "vue"
const user = ref()
const store = useUserStore()

onBeforeMount(() => {
    user.value = store.getUser
    console.log(user.value);
})

</script>


<style lang="scss" scoped>


</style>