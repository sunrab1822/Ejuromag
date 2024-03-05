<template>
    <div class="container">
        <h1 class="h1Custom">Üdvözlünk XY</h1>
    </div>

    <ProfileNavbar/>

</template>

<script setup>
import { ref } from "vue";
import ProfileNavbar from '../components/ProfileNavbar.vue';


const visible = ref(false);

</script>


<style lang="scss" scoped>

</style>