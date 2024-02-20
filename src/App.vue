<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppNav from './components/AppNav.vue';
import AppNav2 from './components/AppNav2.vue';
</script>

<template>
  <AppNav/>
  <AppNav2/>
  <RouterView />
  <AppFooter/>
</template>

<style scoped>
</style>
