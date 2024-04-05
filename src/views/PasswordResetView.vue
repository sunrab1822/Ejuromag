<template>

    <div class="container">
        <Toast position="top-left" group="tl" />

        <div class="row LoginStyle">
            <div class="col-lg-12 col-md-12 col-12">
                <h1 class="LoginMain">Új jelszó megadása</h1>

                <div class=" button-85">
                    <div class="margintop">

                        <div class="margintop">
                            <p class="JelszoSzoveg">Új Jelszó: </p>
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
                        <p class="JelszoSzoveg">Új jelszó megerősítése: </p>
                        <Password class="Password" placeholder="Jelszó" :feedback="false"  v-model="resetPasswordAgain" toggleMask>
                        </Password>
                    </div>


                </div>
                <div class="">
                    <button class="button-85" @click="ResetPassword">Mentés</button>
                </div>

                <div v-if="hiba" class="alert alert-danger alert-dismissible" role="alert">
                    <strong>{{ hiba }}</strong>
                    <button type="button" @click="hiba=''" class="btn-close"></button>
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
    import Toast from 'primevue/toast';

    import Password from 'primevue/password';
    import { useRouter  } from "vue-router";
    import { ref } from 'vue';  
    import { useUserStore } from "../store/store"

    const token = window.location.pathname.split('/')[2];
    console.log(token);

    const store = useUserStore()

    const router = useRouter()    

    let hiba = ref()
    let Succesmessage = ref()

    const resetPassword = ref()
    const resetPasswordAgain = ref()

    const ResetPassword = async() => {
        const akt_newpassword = {
        token: token,
        password: resetPassword.value
    }
    console.log(akt_newpassword);

    if(akt_newpassword.password !== NaN && akt_newpassword.password == resetPasswordAgain.value)
    {
        try {
            const res = await termekService.ResetPasswordToken(akt_newpassword)
            toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });


            }   
        catch (error) {
            hiba.value = "A két jelszó nem egyezik!"
            console.log(error.message);

        }}
        Succesmessage.value = "A jelszó sikeresen megváltoztatva!"
    }


    // const Login = async() => {
    //     Loading.value = false
    //     const akt_login = {
    //     email: LoginEmail.value,
    //     password: LoginPassword.value,
    //     }

    //     try {
    //         const res = await termekService.UserLogin(akt_login)
    //         store.setUser(res)
    //         store.setLoggedIn(true)
    //         router.push({ name: "Profil" })
    //     } catch (error) {

    //         if(error.response.status == 401){
    //             hiba.value = "Nem megfelelő email vagy jelszó"
    //         }
    //         if(error.response.status == 500){
    //             hiba.value = "Hiba a szerveren"
    //         }
    //         if(error.response.status == 422){
    //             hiba.value = "A mezők kitöltése kötelező"  
    //         }
    //         Loading.value = true
    //     }
    // }
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
.Adatok{
    display: inline-block;
    margin: 5px;
    width: auto; 
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