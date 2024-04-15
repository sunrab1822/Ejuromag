<template>

    <div class="container">
        <div class="row LoginStyle">
            <div class="col-lg-12 col-md-12 col-12">
                <h1 class="LoginMain">Új jelszó megadása</h1>

                <div class=" button-85">
                    <div class="margintop">

                        <div class="margintop">
                            <p>Új Jelszó: </p>
                            <Password class="Password" placeholder="Jelszó" v-model="resetPassword" toggleMask>
                                <template #header>
                                    <h6>Válasz jelszót</h6>
                                </template>
                                <template #footer>
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
                    </div>

                    <div class="margintop">
                        <p>Új jelszó megerősítése: </p>
                        <Password class="Password" placeholder="Jelszó" :feedback="false"  v-model="resetPasswordAgain" toggleMask>
                        </Password>
                    </div>


                </div>

                <ProgressSpinner v-if="loading"/>


                <div class="">
                    <button class="button-85" @click="ResetPassword">Mentés</button>
                </div>

                <div v-if="ErrorMessage" class="alert alert-danger alert-dismissible" role="alert">
                    <strong>{{ ErrorMessage }}</strong>
                    <button type="button" @click="ErrorMessage=''" class="btn-close"></button>
                </div>

                <div v-if="Succesmessage" class="alert alert-success alert-dismissible" role="alert">
                    <strong>{{ Succesmessage }}</strong>
                    <button type="button" @click="Succesmessage=''" class="btn-close"></button>
                </div>
            </div>



        </div>
    </div>

</template>

<script setup>

    import termekService from "../services/termekService"
    import ProgressSpinner from 'primevue/progressspinner';
    import Password from 'primevue/password';
    import { ref } from 'vue';  

    const token = window.location.pathname.split('/')[2];   

    let ErrorMessage = ref()
    let Succesmessage = ref()

    const loading = ref(false)

    const resetPassword = ref()
    const resetPasswordAgain = ref()

    const ResetPassword = async() => {
        loading.value = true
        ErrorMessage.value = ""
        Succesmessage.value = ""
        const akt_newpassword = {
        token: token,
        password: resetPassword.value
    }
    if(!akt_newpassword.password )
    {
        ErrorMessage.value = "A jelszó nem lehet üres!"
        loading.value = false
        return
    }

    if(resetPassword.value === resetPasswordAgain.value)
    {
        try {
            const res = await termekService.ResetPassword(akt_newpassword)

            }   
        catch (error) {
            loading.value = false
            ErrorMessage.value = "ErrorMessage a szerveren!"
            return
        }
        Succesmessage.value = "A jelszó sikeresen megváltoztatva!"

    }
    else{
        ErrorMessage.value = "A két jelszó nem egyezik!"

    }
        loading.value = false
    }

</script>

<style lang="scss" scoped>

strong{
    font-size: large;
}

.alert{
    height: 5rem;
}


.button-85{
    margin-top: 2rem;
    margin-bottom: 1rem;
}


.LoginMain{
    text-align: center;
    color:white;
}

div{
    padding: 5px
    
}

button{
    margin: 10px;
    width: 150px;
}

.margintop{
    margin: 10px 0px 10px 0px;
}

input, .Password{ 
    width: 200px; 
    height: 30px; 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
    border-radius: 10px;

} 

.Password{
    height: 40px;
    width: 280px;
}

p{
    width: 180px; 
    margin: 2px; 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
}
p, input{
    display: inline-block;
}

.row{
    text-align: center;
}

.LoginStyle{
    width: 50%;
    margin:auto;
    text-align: center
}


@media (max-width: 770px) {
    .LoginStyle{
    width: 100%;
    }
}
</style>