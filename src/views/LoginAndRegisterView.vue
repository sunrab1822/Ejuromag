<template>

    <div v-if="Sites==1" class="container">
        <div class="row">
            
            <h1 class="LoginMain">Belépés</h1>

            <div class="Adatok col-md-7 col-lg-7 button-85">
                <div>
                    <p>Email:</p>
                    
                    <input class="inputs" type="text" placeholder="Email: " v-model="LoginEmail">
                </div>
               
                <div>
                    <p>Jelszó: </p>
                    <input type="password" id="jelszoRepeat" placeholder="Jelszó" required="required" v-model="LoginPassword"></input>

                </div>
                


            </div>
            <div class="col-md-5 col-lg-5">
                <div class="ButtonDiv">
                    <button class="button-85" :disabled="Loading ? disabled : ''" @click="Login">Belépés</button>
                    <button class="button-85" @click="Sites=3" >Elfelejtett Jelszó</button>
                    <button class="button-85" @click="Sites=2">Regisztráció</button>
                </div>
            </div>

            <div v-if="hiba" class="alert alert-danger alert-dismissible" role="alert">
                    <strong>{{ hiba }}</strong>
                    <button type="button" @click="hiba=''" class="btn-close"></button>
                </div>


        </div>
    </div>

    <div v-if="Sites==3">
        <div class="row">
            <h1 class="LoginMain">Elfelejtett jelszó</h1>
            <div class="Adatok col-md-7 col-lg-7 button-85">
                <div>
                    <p>Email cím:</p>
                    
                    <input class="inputs" type="text" placeholder="Email " v-model="ResetEmail">
                </div>
               
                <div>
                    <p>Email cím ismét: </p>
                    <input class="inputs" type="text" placeholder="Email ismét " v-model="ResetEmailAgain">

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

    <div v-if="Sites==2" class="container">
        <div class="row">
            <h1 class="LoginMain">Regisztráció</h1>

            <div class="col-md-4 col-lg-4 Adatok button-85">
                <div >
                    <p>Vezetéknév: </p>
                    <input placeholder="Fity" required="required" v-model="RegisterLastName" class="inputs" type="text" name="" id="Vezeteknev">
                </div>

                <div>                
                    <p>Keresztnév: </p>
                    <input placeholder="Matyi" required="required" v-model="RegisterFirstName" class="inputs" type="text" name="" id="Keresztnev">
                </div>

                <div>
                    <p>Irányítószám: </p>
                    <input placeholder="1234" required="required" v-model="RegisterPostalCode" type="text" pattern="\d*" title="Csak számot tartalmazhat az irányítószám" minlength="4" maxlength="4" id="Iranyitoszam">
</div>
                <div>      

                    <p>Város: </p>
                    <input placeholder="Nyúl" required="required" v-model="RegisterCity" class="inputs" type="text" name="" id="">
                </div>

                <div>
                    <p>Utca, házszám: </p>
                    <input placeholder="Iskola utca 7" required="required" v-model="RegisterStreet" class="inputs" type="text" name="" id="">
                </div>

                <div>
                    <p>Telefonszám: </p>
                    <input pattern="\d*" placeholder="06123456789" required="required" v-model="RegisterPhoneNumber" class="inputs" type="text" name="" id="" maxlength="15" minlength="8">
                </div>

            </div>

            <div class="col-md-4 col-lg-4 Adatok button-85">

                <div>
                    <p>Email: </p>
                    <input required="required" v-model="RegisterEmail" placeholder="Email" type="email" id="email" name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$">
                </div>

                <div>
                    <p class="JelszoSzoveg">Jelszó: </p>
                    <Password class="Password" placeholder="Jelszó" v-model="RegisterPassword" toggleMask >
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

                <div>
                    <p class="JelszoSzoveg">Jelszó újra: </p>
                    <Password id="jelszoRepeat" placeholder="jelszó Újra" required="required" v-model="RegisterPasswordAgain" class="Password" toggleMask></Password>
                </div>

            </div>

            <div class="col-md-4 col-lg-4 Adatok button-85">
                <div >
                    <button class="RegisterBtn" @click="Register">Regisztráció</button>
                </div>
                <div>
                    <button class="MegseBtn" @click="Sites=1">Mégse</button>

                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

    import termekService from "../services/termekService"

    import Password from 'primevue/password';
    import { RouterLink, useRouter  } from "vue-router";
    import { computed, ref } from 'vue';  
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
        name: RegisterLastName.value + RegisterFirstName.value,
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
        alert("Sikeresen Belépés.")
        router.push({ name: "Profil" })
    } catch (error) {
        hiba.value = error;       
        Loading.value = true
        console.log(error.message);
    }
    }
</script>

<style lang="scss" scoped>

.JelszoSzoveg{
    width: 100px;
}

.ButtonDiv{
    width: 600px;
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
}

div{
    padding: 5px;
    
}

button{
    margin: 10px;
    width: 150px;
}

input, .Password{ 
    width: 200px; 
    height: 30px; 
    margin-top: 15px; 
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

.button-85 {
  padding: 0.3em 1.5em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  content: "";
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}

</style>