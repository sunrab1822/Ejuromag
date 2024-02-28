<template>

<form action="" >
    <div v-if="LoginOrRegister==true" class="container">
        <div class="row">
            
            <h1 class="LoginMain">Belépés</h1>

            <div class="Adatok col-md-7 col-lg-7 button-85">
                <div>
                    <p>Felhasználónév/Email:</p>
                    
                    <input class="inputs" type="text" placeholder="Felhasználónév/Email: " v-model="username">
                </div>
               
                <div>
                    <p>Jelszó: </p>
                    <input  class="inputs" type="password" placeholder="Jelszó" v-model="password">
                </div>
                


            </div>
            <div class="col-md-5 col-lg-5">
                <div class="ButtonDiv">
                    <button class="button-85">Belépés</button>
                    <button class="button-85">Elfelejtett Jelszó</button>
                    <button class="button-85" @click="LoginOrRegister=false">Regisztráció</button>
                </div>
            </div>


        </div>
    </div>

    <div v-if="LoginOrRegister==false" class="container">
        <div class="row">
            <h1 class="LoginMain">Regisztráció</h1>

            <div class="col-md-4 col-lg-4 Adatok button-85">
                <div >
                    <p>Vezetéknév: </p>
                    <input placeholder="Fity" required="required" v-model="vezeteknev" class="inputs" type="text" name="" id="">
                </div>

                <div>                
                    <p>Keresztnév: </p>
                    <input placeholder="Matyi" required="required" v-model="keresztnev" class="inputs" type="text" name="" id="">
                </div>

                <div>
                    <p>Irányítószám: </p>
                    <input placeholder="1234" required="required" type="text" pattern="\d*" title="Csak számot tartalmazhat az irányítószám" minlength="4" maxlength="4">
</div>
                <div>      

                    <p>Város: </p>
                    <input placeholder="Nyúl" required="required" v-model="varos" class="inputs" type="text" name="" id="">
                </div>

                <div>
                    <p>Utca, házszám: </p>
                    <input placeholder="Iskola utca 7" required="required" v-model="utcaHazszam" class="inputs" type="text" name="" id="">
                </div>

                <div>
                    <p>Telefonszám: </p>
                    <input pattern="\d*" placeholder="06123456789" required="required" v-model="telefonszam" class="inputs" type="text" name="" id="" maxlength="15" minlength="8">
                </div>

            </div>

            <div class="col-md-4 col-lg-4 Adatok button-85">
                <div>
                    <p>Felhasználónév: </p>
                    <input required="required" v-model="felhasznalonev" class="inputs" type="text" placeholder="Felhasználónév">
                </div>

                <div>
                    <p>Email: </p>
                    <input required="required" v-model="email" placeholder="Email" type="email" id="email" name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$">
                </div>

                <div>
                    <p>Jelszó: </p>
                    <Password class="Password" v-model="jelszo" toggleMask >
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
                    <p>Jelszó újra: </p>
                    <input placeholder="jelszó Újra" required="required" id="jelszoRepeat" label="Password Repeat" v-model="jelszoRepeat" type="password" />
                </div>

            </div>

            <div class="col-md-4 col-lg-4 Adatok button-85">
                <div >
                    <button class="RegisterBtn" type="submit">Regisztráció</button>
                </div>
                <div>
                    <button class="MegseBtn" @click="LoginOrRegister=true">Mégse</button>

                </div>
            </div>
        </div>
    </div>
</form>
</template>

<script setup>
    import Password from 'primevue/password';

    import { computed, ref } from 'vue';    
    const LoginOrRegister = ref(true)
    const vezeteknev = ref()
    const keresztnev = ref()
    let iranyitoszam = ref(0)
    const varos = ref()
    const utcaHazszam = ref()
    const felhasznalonev = ref()
    const jelszo = ref()
    const jelszoRepeat = ref()
    const email = ref()
    const telefonszam = ref()
    
    const username = ref()
    const password = ref()

    // const hasPasswordMismatch = computed(() => {
    //     return jelszo.value == jelszoRepeat.value
    // })


    console.log(iranyitoszam.value.toString().length);
</script>

<style lang="scss" scoped>

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
}
.p-inputtext{
    width: 50px;
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