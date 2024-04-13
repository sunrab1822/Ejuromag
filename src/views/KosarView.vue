<template>
    <div class="container">
        <h1 class="h1Custom">Kosár</h1>
        <div class="row" >

            <div class="col-md-8 col-lg-8 col-sm-12">
                <div v-for="termek in adatok" v-if="kosarNev != ''" class="row button-85 ">

                    <div class="col-md-4 col-lg-4 col-sm-4  ">
                        <img data-cy="image" class="ProductImg" :src="termek[3]" alt="Termék képe">
                    </div>

                    <div class="col-md-4 col-lg-4 col-sm-4 ">
                        <h3 data-cy="name">{{ termek[0] }}</h3>
                        <p>{{ termek[4] }}</p>
                    </div>

                    <div class="col-md-4 col-lg-4 col-sm4 ">
                        <p class="text-center Ar">{{ termek[1] }}<span> Ft</span></p>
                        <div class="row">
                            <div class="col-md-3 col-lg-3 col-sm-3 col-3"><button v-if="termek[2] >= 2" class="PlusMinus" @click="Csokkent(termek[0])">-</button></div>
                            <div class="col-md-6 col-lg-6 col-sm-3 col-3"><p data-cy="db" class="db"> {{ termek[2] }}</p></div>
                            <div class="col-md-3 col-lg-3 col-sm-3 col-3"><button class="PlusMinus" @click="Novel(termek[0])">+</button></div>
                        <!-- console.log(termek[1] += egyAra[1]) -->
                        <button data-cy="remove" @click="Torles(termek[0])" id="TorolBtn">Töröl</button>
                    </div>
                    </div>

                </div>

            </div>

            <div class="col-md-4 col-lg-4 col-sm-12 col-12">
                <div class="card button-85">

                    <div class="card-header">
                        <h2>Rendelés összegzése</h2>
                    </div>

                    <div class="card-body">
                        <form action="POST">

                            <div class="row mb-3">
                                <p class="col-md-5 col-form-label text-md-end">Összeg:</p>
                                <div class="col-md-6">
                                    <label class="form-control">{{kosarAr}} ft</label>
                                </div>
                            </div>


                            <div class="row mb-3">
                                <p class="col-md-5 col-form-label text-md-end">Szállítási költség:</p>
                                <div class="col-md-6">
                                    <label class="form-control">1000 ft</label>
                                </div>
                            </div>

                            <hr>

                            <div class="row mb-3">
                                <p data-cy="fullPriceText" class="col-md-5 col-form-label text-md-end">Végösszeg:</p>
                                <div class="col-md-6">
                                    <label data-cy="fullPrice" class="form-control">{{kosarAr + 1200}} Ft</label>
                                </div>
                            </div>

                            <div class="text-center RendelesFolyatatasaBtn">
                                <router-link to="/rendeles_osszegzes" data-cy="continue" id="RendelesFolyatatasaBtn">Folytatás</router-link>
                            </div>

                            <div class="text-center NeedToRegisterButton">
                                <router-link v-if="getloggedin" to="/Login"  id="NeedToRegisterButton">Jelentkezz be a rendelés leadásához</router-link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref, onBeforeMount} from "vue";
import { useUserStore } from "../store/store"



let adatok = []
let getloggedin = ref()
let kosarNev = ref()
let kosarAr = ref(0)
let szamlalo = 0;
const selectedTermekNeve = ref()
const TermekNeve = ref()
const user = ref()

const store = useUserStore()
if(store.getLoggedIn){
        getloggedin.value = false
    }
    else{
        getloggedin.value = true

    }

function Novel(number){
    const priceindex = 1
    for(let termek in adatok)
    {
        if(adatok[termek][0] == number)
        {
            const index = termek;
            const egy = JSON.parse(localStorage.getItem('EgyArak'))
            const newValue = parseInt(adatok[index][priceindex]) + egy[index];
            adatok[index][priceindex] = newValue;
            adatok[index][2]++
            localStorage.setItem('data', JSON.stringify(adatok));
            location.reload();
        }
    }
}

function Csokkent(number){
    const priceindex = 1
    
    for(let termek in adatok)
    {
        if(adatok[termek][0] == number)
        {
            const index = termek;
            const egy = JSON.parse(localStorage.getItem('EgyArak'))
            const newValue = parseInt(adatok[index][priceindex]) - egy[index];
            adatok[index][priceindex] = newValue;
            adatok[index][2]--
            localStorage.setItem('data', JSON.stringify(adatok));
            location.reload();
        }
    }
}


function Torles(number){

    for(let termek in adatok)
    {
        if(adatok[termek][0] == number)
        {
            const index = termek;
            const egy = JSON.parse(localStorage.getItem('EgyArak'))
            egy.splice(index, 1)
            adatok.splice(index, 1);
            localStorage.setItem('data', JSON.stringify(adatok));
            localStorage.setItem('EgyArak', JSON.stringify(egy));
            location.reload();
        }
    }
}
    
onBeforeMount(() => {

    adatok = JSON.parse(localStorage.getItem('data'))
    for(let termek in adatok) 
    {
        kosarAr.value += adatok[termek][1]
        console.log(szamlalo);

    }
    localStorage.setItem("CartPrice", kosarAr.value)

    console.log(kosarAr.value);
    console.log(JSON.parse(localStorage.getItem('data')));

    const egy = JSON.parse(localStorage.getItem('EgyArak'))
    
})

let db = ref(1)

</script>

<style scoped>

.NeedToRegisterButton{
    font-weight: bolder;
}


h3{
    text-align: center;
    margin-bottom: 1rem;
}

.ProductImg{
    margin-top: 1rem;
}

.RendelesFolyatatasaBtn{
    margin-top: 2.5rem;
    margin-bottom: 2rem;
}

p{
    text-align: center
}

.db{
    text-align: center;
    font-size: 20px;
}

.Ar{
    font-size: 32px;
    font-weight: bold;
}

.button-85  {
    margin-bottom: 20px;

}

#TorolBtn{
    margin:auto;
}

h2{
    color: white;
    text-align: center;
}




</style>
