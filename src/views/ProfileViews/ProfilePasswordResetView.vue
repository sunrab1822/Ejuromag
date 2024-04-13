<template>
    <div class="row">
      <div class="col-2">
        <ProfileNavbar />
      </div>
  
      <div class="col-10 button-85">
        <fieldset>
          <div class="row password-reset">
            <div class="col-6">
              <h2>Biztosan szeretnéd megváltoztatni a jelszavadat?</h2>
            </div>
  
            <div class="col-6">
              <button class="cursor-pointer button-33" @click="emailReset">Mentés</button>
            </div>
  
            <ProgressSpinner v-if="loading" />
  
            <div v-if="successMessage" class="alert alert-success alert-dismissible" role="alert">
              <strong>{{ successMessage }}</strong>
              <button type="button" @click="successMessage = ''" class="btn-close"></button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </template>
  
  <script setup>
  import ProfileNavbar from '../../components/ProfileNavbar.vue';
  import ProgressSpinner from 'primevue/progressspinner';
  import { onBeforeMount } from "vue";
  import termekService from "../../services/termekService";
  import { useUserStore } from "../../store/store";
  import { ref } from "vue";
  
  const store = useUserStore();
  const user = ref();
  const userEmail = ref();
  const successMessage = ref("");
  const loading = ref(false);
  
  onBeforeMount(() => {
    user.value = store.getUser;
    userEmail.value = user.value.user.user.email;
  });
  
  const emailReset = async () => {
    loading.value = true;
    successMessage.value = "";
  
    try {
      const res = await termekService.ResetPasswordToken({ email: userEmail.value });
    } catch (error) {
      loading.value = false;
      return;
    }
  
    successMessage.value = "A jelszó cseréhez szükséges link elküldve emailban";
    loading.value = false;
  };
  </script>
  
  <style lang="scss" scoped>
  .password-reset {
    margin: 5rem;
  }
  </style>