<template>
    <div class="container">
        <h1 class="h1Custom">Kosár</h1>
        <div class="row">

            <div class="col-md-8 col-lg-8">
                <div class="row termekContainer">

                    <div class="col-md-4 col-lg-4">
                        <!-- <img src="" alt="Termék képe"> -->
                        <p>{{ kosarKep }}</p>
                    </div>

                    <div class="col-md-4 col-lg-4">
                        <p>{{ kosarNev }}</p>
                    </div>

                    <div class="col-md-4 col-lg-4">
                        <p class="text-center Ar">{{ ar }}<span> Ft</span></p>
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
let kosarKep = ref()
let szamlalo = 0;
const selectedTermekNeve = ref()
const TermekNeve = ref()

const Torles = () => {

    localStorage.clear();
    kosarKep.value = kosarNev.value = ""
}

onMounted(async () => {


})
    
onBeforeMount(() => {

    kosarNev.value = store.SelectedtermekNev
    kosarKep.value = store.SelectedtermekKep
    adatok.push(kosarNev.value, kosarKep.value)
    adatok2 += localStorage.getItem("kosar")


    if(kosarNev.value == ''){
        kosarKep.value = localStorage.getItem("kep")
        kosarNev.value = localStorage.getItem("nev")

    }
    else{
        localStorage.setItem("kep", kosarKep.value)
        localStorage.setItem("nev", kosarNev.value)
        localStorage.setItem("kosar", adatok2)


    }


    console.log(localStorage.getItem("kosar"));
    
    
})


const ar = ref(100000)
const egyAra = ar;
const db = ref(0)
const Novel = () => {
    db.value++
    ar.value += ar.value
}
const Csokkent = () => {
    if(db.value > 0)
    {
        db.value--
        ar.value--
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
