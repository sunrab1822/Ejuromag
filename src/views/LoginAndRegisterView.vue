<template>

    <div v-if="Sites==1" class="container">
        <div class="row LoginStyle">
            <div class="col-lg-12 col-md-12 col-12">
                <h1 class="LoginMain">Belépés</h1>

                <div class=" button-85">
                    <div class="margintop">
                        <p>Email:</p>

                        <input type="text" placeholder="Email: " @keyup.enter="Login" v-model="LoginEmail">
                    </div>

                    <div class="margintop">
                        <p>Jelszó: </p>
                        <input type="password" id="jelszoRepeat" @keyup.enter="Login" placeholder="Jelszó"
                            required="required" v-model="LoginPassword"></input>

                    </div>


                </div>
                <div class="">
                    <button class="button-85" :disabled="Loading ? disabled : ''" @click="Login">Belépés</button>
                    <button class="button-85" @click="Sites=3">Elfelejtett Jelszó</button>
                    <button class="button-85" @click="Sites=2">Regisztráció</button>
                </div>

                <div v-if="hiba" class="alert alert-danger alert-dismissible" role="alert">
                    <strong>{{ hiba }}</strong>
                    <button type="button" @click="hiba=''" class="btn-close"></button>
                </div>
            </div>



        </div>
    </div>

    <div v-if="Sites==3" class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
                <div class="ResetPasswordDiv">
                    <h1 class="LoginMain">Elfelejtett jelszó</h1>
                    <div class=" button-85">
                        <div class="row">
                            <p>Email cím:</p>

                            <input type="text" placeholder="Email " v-model="ResetEmail">
                        </div>

                        <div class="row">
                            <p>Email cím ismét: </p>
                            <input type="text" placeholder="Email ismét " v-model="ResetEmailAgain">

                        </div>

                    </div>
                    <div v-if="hiba" class="alert alert-danger alert-dismissible" role="alert">
                        <strong>{{ hiba }}</strong>
                        <button type="button" @click="hiba=''" class="btn-close"></button>
                    </div>
                    <div>
                        <button class="button-85">Kűldés</button>
                        <button class="button-85" @click="Sites=1">Mégse</button>
                    </div>
                </div>
            </div>

        </div>


    </div>

    <div v-if="Sites==2" class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
                <h1 class="LoginMain">Regisztráció</h1>

                <div class="col-md-4 col-lg-4 Adatok button-85">
                    <div class="margintop">
                        <p>Vezetéknév: </p>
                        <input placeholder="Fity" required="required" v-model="RegisterLastName" class="inputs" type="text"
                            name="" id="Vezeteknev">
                    </div>

                    <div class="margintop">
                        <p>Keresztnév: </p>
                        <input placeholder="Matyi" required="required" v-model="RegisterFirstName" class="inputs"
                            type="text" name="" id="Keresztnev">
                    </div>

                    <div class="margintop">
                        <p>Irányítószám: </p>
                        <InputOtp v-model="RegisterPostalCode" integerOnly />

                    </div>
                    <div class="margintop">

                        <p>Város: </p>
                        <input placeholder="Nyúl" required="required" v-model="RegisterCity" class="inputs" type="text"
                            name="" id="">
                    </div>

                    <div class="margintop">
                        <p>Utca, házszám: </p>
                        <input placeholder="Iskola utca 7" required="required" v-model="RegisterStreet" class="inputs"
                            type="text" name="" id="">
                    </div>

                    <div class="margintop">
                        <p>Telefonszám: </p>
                        <input pattern="\d*" placeholder="06123456789" required="required" v-model="RegisterPhoneNumber"
                            class="inputs" type="text" name="" id="" maxlength="15" minlength="8">
                    </div>

                </div>

                <div class="col-md-4 col-lg-4 Adatok button-85">

                    <div class="margintop">
                        <p>Email: </p>
                        <input required="required" v-model="RegisterEmail" placeholder="Email" type="email" id="email"
                            name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$">
                    </div>

                    <div class="margintop">
                        <p class="JelszoSzoveg">Jelszó: </p>
                        <Password class="Password" placeholder="Jelszó" v-model="RegisterPassword" toggleMask>
                            <template #header>
                                <h6>Válasz jelszót</h6>
                            </template>
                            <template #footer>
                                <Divider />
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
                        <Password id="jelszoRepeat" placeholder="jelszó Újra" required="required"
                            v-model="RegisterPasswordAgain" class="Password" toggleMask></Password>
                    </div>

                </div>

                <div class="col-md-4 col-lg-4 Adatok button-85">
                    <div>
                        <button class="RegisterBtn" @click="Register">Regisztráció</button>
                    </div>
                    <div>
                        <button class="MegseBtn" @click="Sites=1">Mégse</button>

                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>

    import termekService from "../services/termekService"
    import InputOtp from 'primevue/inputotp';

    import Password from 'primevue/password';
    import { useRouter  } from "vue-router";
    import { ref } from 'vue';  
    import { useUserStore } from "../store/store"

    const store = useUserStore()

    const router = useRouter()    

    let hiba = ref()
    let Sites = ref(1)

    const RegisterLastName = ref()
    const RegisterFirstName = ref()
    const RegisterPostalCode = ref(0)
    const RegisterCity = ref()
    const RegisterStreet = ref()
    const RegisterPassword = ref()
    const RegisterPasswordAgain = ref()
    const RegisterEmail = ref()
    const RegisterPhoneNumber = ref()
    
    const LoginEmail = ref()
    const LoginPassword = ref()

    const ResetEmail = ref()
    const ResetEmailAgain = ref()

    let Loading = ref(true)

    // const hasPasswordMismatch = computed(() => {
    //     return jelszo.value == jelszoRepeat.value
    // })

    const Register = async() => {
        const akt_register = {
        name: RegisterLastName.value + " " + RegisterFirstName.value,
        email: RegisterEmail.value,
        password: RegisterPassword.value,
        password_confirmation: RegisterPasswordAgain.value
    }

    console.log(typeof(akt_register.name));
    console.log(akt_register.email);
    console.log(akt_register.password);
    console.log(akt_register.password_confirmation);

    if(akt_register.name !== NaN && akt_register.email !== undefined && akt_register.password !== undefined && akt_register.password_confirmation !== undefined)
    {
        try {
            const res = await termekService.UserRegister(akt_register)
            Sites.value = 1
            LoginEmail.value = akt_register.email
            alert("Sikeresen regisztráltál.")

            }   
        catch (error) {
        console.log(error.message);

        }}
    }




    const Login = async() => {
        Loading.value = false
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
            hiba.value = error;       
            Loading.value = true
            console.log(error.message);
        }
    }
</script>

<style lang="scss" scoped>

.alert{
    height: 5rem;
}

.ResetPasswordDiv{
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
    padding: 5px;
    
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
    text-align: left;
}

.LoginStyle{
    max-width: 23rem; 
    margin:auto;
}

</style>