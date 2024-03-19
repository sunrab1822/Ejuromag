<template>
    <div class="container">
        <h1 class="h1Custom">Kosár</h1>
        <div class="row">

            <div class="col-md-8 col-lg-8">
                <div v-for="termek in adatok" v-if="kosarNev != ''" class="row button-85">

                    <div class="col-md-4 col-lg-4">
                        <!-- <img src="" alt="Termék képe"> -->
                        <p>asd</p>
                    </div>

                    <div class="col-md-4 col-lg-4">
                        <p>{{ termek[0] }}</p>
                    </div>

                    <div class="col-md-4 col-lg-4">
                        <p class="text-center Ar">{{ termek[1] }}<span> Ft</span></p>
                        <div class="row">
                            <div class="col-md-3 col-lg-3"><button v-if="termek[2] >= 2" class="PlusMinus" @click="Csokkent(termek[0])">-</button></div>
                            <div class="col-md-6 col-lg-6"><p class="db"> {{ termek[2] }}</p></div>
                            <div class="col-md-3 col-lg-3"><button class="PlusMinus" @click="Novel(termek[0])">+</button></div>
                        <!-- console.log(termek[1] += egyAra[1]) -->
                        <button @click="Torles(termek[0])" id="TorolBtn">Töröl</button>
                    </div>
                    </div>

                </div>

            </div>

            <div class="col-md-4 col-lg-4">
                <div class="card">

                    <div class="card-header">
                        <h2>Rendelés összegzése</h2>
                    </div>

                    <div class="card-body">
                        <form action="POST">

                            <div class="row mb-3">
                                <label for="" class="col-md-5 col-form-label text-md-end">Összeg:</label>
                                <div class="col-md-6">
                                    <label for="" class="form-control">{{kosarAr}} ft</label>
                                </div>
                            </div>


                            <div class="row mb-3">
                                <label for="" class="col-md-5 col-form-label text-md-end">Szállítási költség:</label>
                                <div class="col-md-6">
                                    <label for="" class="form-control">1200 ft</label>
                                </div>
                            </div>

                            <hr>

                            <div class="row mb-3">
                                <label for="" class="col-md-5 col-form-label text-md-end">Végösszeg:</label>
                                <div class="col-md-6">
                                    <label for="" class="form-control">{{kosarAr + 1200}} Ft</label>
                                </div>
                            </div>

                            <div class="text-center" style="margin:2rem;">
                                <router-link to="/rendeles_osszegzes"  id="RendelesFolyatatasaBtn">Folytatás</router-link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref, onMounted, onBeforeMount, onBeforeUnmount} from "vue";

let adatok = []
let adatok2 = ""
let kosarNev = ref()
let kosarAr = ref(0)
let szamlalo = 0;
const selectedTermekNeve = ref()
const TermekNeve = ref()

function Novel(asd){
    const priceindex = 1
    for(let termek in adatok)
    {
        if(adatok[termek][0] == asd)
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

function Csokkent(asd){
    const priceindex = 1
    
    for(let termek in adatok)
    {
        if(adatok[termek][0] == asd)
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

function Torles(asd){

    for(let termek in adatok)
    {
        if(adatok[termek][0] == asd)
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



    console.log(kosarAr.value);
    console.log(JSON.parse(localStorage.getItem('data')));

    const egy = JSON.parse(localStorage.getItem('EgyArak'))
    // console.log(adatok[0][1]);

    // if(kosarNev.value == ''){
    //     kosarAr.value = parseInt(localStorage.getItem("ar"))
    //     kosarNev.value = localStorage.getItem("nev")

    // }
    // else{
    //     localStorage.setItem("ar", kosarAr.value)
    //     localStorage.setItem("nev", kosarNev.value)

    // } 
    
})

let db = ref(1)

</script>

<style lang="scss" scoped>


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
</style>
