<script setup>
import AppFooter from './components/AppFooter.vue';
import AppNav from './components/AppNav.vue';
import AppNav2 from './components/AppNav2.vue';
</script>

<template>
  <div class="test">
    <AppNav/>
    <AppNav2/>
    <RouterView />
    <AppFooter/>
  </div>

</template>

<style scoped>
.test{
  background-color: gray  ;
}
</style>
