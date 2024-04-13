<template>

    <div v-if="Sites==1" class="container">

        <div class="row LoginStyle">
            <div class="col-lg-12 col-md-12 col-12">
                <h1 class="LoginMain">Belépés</h1>

                <div class=" button-85">
                    <div class="margintop row LoginMobile">
                        <p>Email:</p>

                        <input data-cy="EmailInput" class="EmailAndPasswordInput"type="text" placeholder="Email: " @keyup.enter="Login" v-model="LoginEmail">
                    </div>

                    <div class="margintop row LoginMobile">
                        <p>Jelszó: </p>
                        <input data-cy="PasswordInput" class="EmailAndPasswordInput" type="password" id="jelszoRepeat" @keyup.enter="Login" placeholder="Jelszó"
                            required="required" v-model="LoginPassword"></input>

                    </div>


                </div>

                <ProgressSpinner v-if="loading"/>


                <div class="">
                    <button data-cy="LoginButton" class="button-85" @click="Login">Belépés</button>
                    <button data-cy="PasswordResetButton" class="button-85" @click="Sites=3">Elfelejtett Jelszó</button>
                    <button data-cy="RegisterButton" class="button-85" @click="Sites=2">Regisztráció</button>
                </div>

                <div data-cy="ErrorMessage" v-if="hiba" class="alert alert-danger alert-dismissible" role="alert">
                    <strong>{{ hiba }}</strong>
                    <button type="button" @click="hiba=''" class="btn-close"></button>
                </div>
            </div>

            <div data-cy="Succesmessage" v-if="Succesmessage" class="alert alert-success alert-dismissible" role="alert">
                        <strong>{{ Succesmessage }}</strong>
                        <button type="button" @click="Succesmessage=''" class="btn-close"></button>
            </div>

        </div>
    </div>

    <div v-if="Sites==3" class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12 col-sm-12">
                <h1 class="LoginMain">Elfelejtett jelszó</h1>

                <div class=" button-85">
                    <div class="margintop row LoginMobile">
                        <p >Email:</p>

                        <input data-cy="ResetEmailInput" class="EmailAndPasswordInput" type="text" placeholder="Email: " @keyup.enter="EmailReset" v-model="ResetEmail">
                    </div>


                </div>
                <ProgressSpinner v-if="loading" />

                <div>
                        <button data-cy="EmailResetButton" @click="EmailReset" class="button-85">Kűldés</button>
                        <button class="button-85" @click="Sites=1, hiba = ''">Mégse</button>
                    </div>
                    <div data-cy="ErrorMessage" v-if="hiba" class="alert alert-danger alert-dismissible" role="alert">
                        <strong>{{ hiba }}</strong>
                        <button type="button" @click="hiba=''" class="btn-close"></button>
                    </div>
            </div>

        </div>


    </div>

    <div v-if="Sites==2" class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
                <h1 class="LoginMain">Regisztráció</h1>
                
                <div class="col-md-4 col-lg-4 col-sl-4 col-4 Adatok button-85">

                    <div class="margintop">
                        <p>Vezetéknév: </p>
                        <input data-cy="VezeteknevInput" required="required" v-model="RegisterLastName" class="inputs" type="text"
                            name="" id="Vezeteknev">
                    </div>

                    <div class="margintop">
                        <p>Keresztnév: </p>
                        <input data-cy="KeresztnevInput" required="required" v-model="RegisterFirstName" 
                            type="text" name="" id="Keresztnev">
                    </div>

                    <div class="margintop">
                        <p>Email: </p>
                        <input data-cy="EmailInput" class="EmailAndPasswordInput" required="required" v-model="RegisterEmail" type="email" id="email"
                            name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$">
                    </div>

                    <div class="margintop">
                        <p class="JelszoSzoveg">Jelszó: </p>
                        <Password data-cy="JelszoInput" class="Password" placeholder="Jelszó" v-model="RegisterPassword" toggleMask>
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

                    <div class="margintop">
                        <p class="JelszoSzoveg">Jelszó újra: </p>
                        <Password data-cy="JelszoUjraInput" id="jelszoRepeat" placeholder="jelszó Újra" required="required"
                            v-model="RegisterPasswordAgain" class="Password" toggleMask></Password>
                    </div>

                </div>
                <div>
                    <ProgressSpinner class="RegisterLoading" v-if="loading" />

                </div>

                <div data-cy="ErrorMessage" v-if="hiba" class="alert alert-danger alert-dismissible" role="alert">
                    <strong>{{ hiba }}</strong>
                    <button type="button" @click="hiba=''" class="btn-close"></button>
                </div>

                <div class="button-85 RegisterDiv">
                    <div>
                        <button data-cy="RegisztrácioButton" class="RegisterBtn" @click="Register">Regisztráció</button>
                    </div>
                    <div>
                        <button class="MegseBtn" @click="Sites=1, hiba = ''">Mégse</button>

                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>

    import termekService from "../services/termekService"

    import Password from 'primevue/password';
    import { useRouter  } from "vue-router";
    import { ref } from 'vue';  
    import { useUserStore } from "../store/store"
    import ProgressSpinner from 'primevue/progressspinner';


    const store = useUserStore()

    const router = useRouter()    

    let hiba = ref()
    let Succesmessage = ref()
    let Sites = ref(1)

    const RegisterLastName = ref()
    const RegisterFirstName = ref()

    const RegisterPassword = ref()
    const RegisterPasswordAgain = ref()
    const RegisterEmail = ref()

    const loading = ref(false)
    
    const LoginEmail = ref()
    const LoginPassword = ref()

    const ResetEmail = ref()

    const Register = async() => {
        loading.value = true
        hiba.value = ""
        Succesmessage.value = ""
        const akt_register = {
        name: RegisterLastName.value + " " + RegisterFirstName.value,
        email: RegisterEmail.value,
        password: RegisterPassword.value,
        password_confirmation: RegisterPasswordAgain.value
    }

    if(akt_register.name !== NaN && akt_register.email !== undefined && akt_register.password !== undefined && akt_register.password_confirmation !== undefined)
    {
        try {
            const res = await termekService.UserRegister(akt_register)
            Sites.value = 1
            LoginEmail.value = akt_register.email

            }   
        catch (error) {
        console.log(error.message);
        hiba.value = "A két jelszó nem egyezik vagy az emailcím már használatban van"
        }
        Succesmessage.value =  "Sikeresen regisztráltál!"

    }
    else{
        hiba.value = "A mezők kitöltése kötelező!"

    }
        loading.value = false

    }


    const EmailReset = async() => {
        loading.value = true
        hiba.value = ""
        Succesmessage.value = ""
        if(ResetEmail.value && ResetEmail.value!== undefined){
            try{
            const res = await termekService.ResetPasswordToken({email: ResetEmail.value})

            }
            catch(error){
                console.log(error.message);
                hiba.value = "Nem található az email"
                loading.value = false
                return
            }
            ResetEmail.value = null
            Sites.value = 1
            Succesmessage.value = "Email elküldve"
        }
        loading.value = false

    }


    const Login = async() => {
        loading.value = true
        hiba.value = ""
        Succesmessage.value = ""
        const akt_login = {
        email: LoginEmail.value,
        password: LoginPassword.value,
        }

        try {
            const res = await termekService.UserLogin(akt_login)
            store.setUser(res)
            store.setLoggedIn(true)
            router.push({ name: "Profil" })
        } catch (error) {

            if(error.response.status == 401){
                hiba.value = "Nem megfelelő email vagy jelszó"
            }
            if(error.response.status == 500){
                hiba.value = "Hiba a szerveren"
            }
            if(error.response.status == 422){
                hiba.value = "A mezők kitöltése kötelező"  
            }
        }
        loading.value = false
    }
</script>

<style lang="scss" scoped>
.RegisterLoading{
    margin-top: 3rem;
}

strong{
    font-size: large;
}

.alert{
    height: 5rem;
}

.ResetPasswordDiv{
    width: 50%;
    margin: auto;
    text-align: center;
}

.button-85{
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.JelszoSzoveg{
    width: 100px;
}


.RegisterBtn{
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: rgb(0, 0, 0);
    box-shadow: 0 0 20px #eee;
    background-image: linear-gradient(to top, #fffb00 0%, #ffae00 51%, #ffd651 100%);
}

.MegseBtn{
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: rgb(0, 0, 0);
    box-shadow: 0 0 20px #eee;
    background-image: linear-gradient(to right, #ffdfdb 0%, #c2aaa3c7 51%, #867977 100%);
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
.RegisterDiv{

    margin: auto;
    min-width: 55%;
    width: 20%
}


@media (max-width: 770px) {
    .LoginStyle{
    width: 100%;
    }
    .LoginMobile{
        margin-left: 55px;
    }
}
</style>