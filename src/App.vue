<script setup>
import AppFooter from './components/AppFooter.vue';
import AppNav from './components/AppNav.vue';
import AppNav2 from './components/AppNav2.vue';

var pathname = window.location.pathname
console.log(pathname);

</script>

<template>
  <div class="BackgroundImage">
    <AppNav v-if="pathname!= '/admin' && pathname!= '/admin/main'"/>
    <AppNav2 v-if="pathname!= '/admin' && pathname!= '/admin/main'"/>
    <RouterView />
    <AppFooter v-if="pathname!= '/admin' && pathname!= '/admin/main'"/>
  </div>

</template>

<style scoped>
.BackgroundImage{
  background-image: url("/backgroundPicture.webp");
  background-size: contain;
}
</style>
