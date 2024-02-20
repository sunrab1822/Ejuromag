<template>
    <form action="">
    <div v-if="LoginOrRegister==true" class="container Adatok">
        <div class="row">
            
            <h1 class="LoginMain">Belépés</h1>

            <div class="col-md-4 col-lg-4">

            </div>

            <div class="col-md-4 col-lg-4">
                <div>
                    <p>Felhasználónév/Email:</p>
                    
                    <input class="inputs" type="text" placeholder="Felhasználónév/Email: " v-model="username">
                </div>
               
                <div>
                    <p>Jelszó: </p>
                    <input  class="inputs" type="password" placeholder="Jelszó" v-model="password">
                </div>
                
                <div>
                    <button>Belépés</button>
                    <button>Elfelejtett Jelszó</button>
                    <button @click="LoginOrRegister=false">Regisztráció</button>
                </div>

            </div>

            <div class="col-md-4 col-lg-4">

            </div>
        </div>
    </div>

    <div v-if="LoginOrRegister==false" class="container Adatok">
        <div class="row">
            <h1 class="LoginMain">Regisztráció</h1>

            <div class="col-md-4 col-lg-4 ">
                <div >
                    <p>Vezetéknév: </p>
                    <input v-model="vezeteknev" class="inputs" type="text" name="" id="">
                </div>

                <div>                
                    <p>Keresztnév: </p>
                    <input v-model="keresztnev" class="inputs" type="text" name="" id="">
                </div>

                <div>
                    <p>Irányítószám: </p>
                    <input v-model="iranyitoszam" class="inputs" type="number" max="9985" min="2000" name="" id=""></div>
                <div>      

                    <p>Város: </p>
                    <input v-model="varos" class="inputs" type="text" name="" id="">
                </div>

                <div>
                    <p>Utca, házszám: </p>
                    <input v-model="utcaHazszam" class="inputs" type="text" name="" id="">
                </div>

                <div>
                    <p>Telefonszám: </p>
                    <input v-model="telefonszam" class="inputs" type="text" name="" id="">
                </div>

            </div>

            <div class="col-md-4 col-lg-4 ">
                <div>
                    <p>Felhasználónév: </p>
                    <input v-model="felhasznalonev" class="inputs" type="text" placeholder="Felhasználónév">
                </div>

                <div>
                    <p>Email: </p>
                    <input v-model="email" class="inputs" type="email" placeholder="Email">
                </div>

                <div>
                    <p>Jelszó: </p>
                    <input v-model="jelszo" class="inputs" type="password">
                    <Input id="password" label="Password" :help="errors.password" v-model="password" type="password" />

                    <Input id="password-repeat" label="Password Repeat"
                        :help="hasPasswordMismatch ? { message: 'Password mismatch' } : null" v-model="passwordRepeat" type="password" />
                </div>

                <div>
                    <p>Jelszó újra: </p>
                    <input :help="hasPasswordMismatch ? { message: 'A két jelszó nem egyezik' } : null" v-model="jelszoRepeat" class="inputs" type="password">
                </div>

            </div>

            <div class="col-md-4 col-lg-4">
                <button>Regisztráció</button>
                <button @click="LoginOrRegister=true">Mégse</button>
            </div>
        </div>
    </div>
</form>
</template>

<script setup>
    import { computed, ref } from 'vue';    
    const LoginOrRegister = ref(true)
    const vezeteknev = ref()
    const keresztnev = ref()
    const iranyitoszam = ref()
    const varos = ref()
    const utcaHazszam = ref()
    const felhasznalonev = ref()
    const jelszo = ref()
    const jelszoRepeat = ref()
    const email = ref()
    const telefonszam = ref()
    
    const username = ref()
    const password = ref()

    const hasPasswordMismatch = computed(() => {
        return jelszo.value == jelszoRepeat.value
    })
</script>

<style lang="scss" scoped>


input { 
            width: 200px; 
            height: 30px; 
            margin: 2px; 
            -moz-box-sizing: border-box; 
            -webkit-box-sizing: border-box; 
            box-sizing: border-box; 
} 

p{
    width: 120px; 
    height: 60px; 
    margin: 2px; 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
}
.Adatok{
    text-align: center;
}
p, input{
    display: inline-block;
}

</style>