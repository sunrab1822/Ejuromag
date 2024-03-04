<template>
    <div class="container">
        <h1 class="h1Custom">Kosár</h1>
        <div class="row">

            <div class="col-md-8 col-lg-8">
                <div class="row termekContainer">

                    <div class="col-md-4 col-lg-4">
                        <!-- <img src="" alt="Termék képe"> -->
                        <p>asd</p>
                    </div>

                    <div class="col-md-4 col-lg-4">
                        <p>{{ kosarNev }}</p>
                    </div>

                    <div class="col-md-4 col-lg-4">
                        <p class="text-center Ar">{{ kosarAr }}<span> Ft</span></p>
                        <div class="row">
                            <div class="col-md-3 col-lg-3"><button class="PlusMinus" @click="Csokkent">-</button></div>
                            <div class="col-md-6 col-lg-6"><p class="db"> {{ db }}</p></div>
                            <div class="col-md-3 col-lg-3"><button class="PlusMinus" @click="Novel">+</button></div>
                        </div>
                        <button @click="Torles" id="TorolBtn">Töröl</button>

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
                                    <label for="" class="form-control">asd</label>
                                </div>
                            </div>


                            <div class="row mb-3">
                                <label for="" class="col-md-5 col-form-label text-md-end">Szállítási költség:</label>
                                <div class="col-md-6">
                                    <label for="" class="form-control">asd</label>
                                </div>
                            </div>

                            <hr>

                            <div class="row mb-3">
                                <label for="" class="col-md-5 col-form-label text-md-end">Végösszeg:</label>
                                <div class="col-md-6">
                                    <label for="" class="form-control">asd</label>
                                </div>
                            </div>

                            <div class="text-center">
                                <button id="RendelesFolyatatasaBtn">Folytatás</button>
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
import { useTermekStore } from "../store/store"

const store = useTermekStore()
let adatok = []
let adatok2 = ""
let kosarNev = ref()
let kosarAr = ref()
let szamlalo = 0;
const selectedTermekNeve = ref()
const TermekNeve = ref()

const Torles = () => {

    localStorage.clear();
    kosarAr.value = kosarNev.value = ""
}

onMounted(async () => {

    egyAra = kosarAr.value
})
    
onBeforeMount(() => {

    kosarNev.value = store.SelectedtermekNev
    kosarAr.value = store.SelectedtermekAr
    adatok.value = store.kosar
    if(adatok.value == "")
    {
        console.log(adatok);

    }
    if(kosarNev.value == ''){
        kosarAr.value = localStorage.getItem("ar")
        kosarNev.value = localStorage.getItem("nev")
        adatok.value = JSON.parse(localStorage.getItem("kosar"))

    }
    else{
        localStorage.setItem("ar", kosarAr.value)
        localStorage.setItem("nev", kosarNev.value)
        localStorage.setKosar()

    } 
    
})

let egyAra;
let db = ref(1)
const Novel = () => {
        db.value++
        kosarAr.value += egyAra

}
const Csokkent = () => {
    if(db.value > 1)
    {
        db.value--
        kosarAr.value -= egyAra
    }
    if(db.value == 0)
    {
        db.value = 1
    }
}

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
</style>
