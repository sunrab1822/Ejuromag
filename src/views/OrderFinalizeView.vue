<template>
<div class="card hatter">
    <div v-for="termek in adatok" v-if="kosarNev != ''" class="row button-85">

        <div class="col-md-4 col-lg-4">
            <!-- <img src="" alt="Termék képe"> -->
            <img class="ProductImg" :src="termek[3]" alt="" srcset="">
        </div>

        <div class="col-md-4 col-lg-4">
            <h3 class="ProdcutCard">{{ termek[0] }}</h3>
        </div>

        <div class="col-md-4 col-lg-4">
            <h3 class="text-center Ar ProdcutCard">{{ termek[1] }}<span> Ft</span></h3>
            <h3 class="ProdcutCard"> {{ termek[2] }} db</h3>

        </div>

    </div >
        <Stepper orientation="vertical" >
            <StepperPanel header="Személyes Adatok" >
                <template #content="{ nextCallback }" >
                    <div class="flex flex-column h-40rem" >
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto font-medium p-3">

                            <div class="row">
                                <p style="margin-top: 10px;" class="col-lg-3">Vezetéknév:</p>
                                <input class="col-lg-6" placeholder="Vezetéknév" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p style="margin-top: 10px;" class="col-lg-3">Keresztnév:</p>
                                <input class="col-lg-6" placeholder="Keresztnév" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                            </div>
                            <br>    
                            <div class="row">
                                <p style="margin-top: 10px;" class="col-lg-3">Város:</p>
                                <InputOtp class="col-lg-4" v-model="RegisterPostalCode" integerOnly/>
                                <input class="col-lg-4" placeholder="Város" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p style="margin-top: 10px;" class="col-lg-3">Utca, házszám:</p>
                                <input class="col-lg-6" placeholder="Utca, házszám" required="required" v-model="RegisterStreet"  type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Telefonszám: </p>
                                <InputMask class="col-lg-6" id="basic" v-model="value" mask="+36-99-9999999?99999999" placeholder="+36-99-9999999" />
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Email: </p>
                                <input class="col-lg-6" placeholder="Email" required="required" v-model="RegisterCity" type="text" name="" id="">
                            </div>
                        </div>
                    </div>
                    <div class="flex py-4">
                        <Button label="Next" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>

            <StepperPanel header="Szállítási lehetőségek">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-19rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">

                        <Button>
                            <figure @click="nextCallback">
                                <img style="width: 200px;" src="/Posta_szallitas.png" alt="" srcset="">
                                <br><br>
                                <figcaption>1.590,- Ft</figcaption>
                            </figure>
                        </Button>
                        <Button>
                            <figure @click="nextCallback">
                                <img style="width: 200px;" src="/PostaPont_szallitas.jpg" alt="" srcset="">
                                <br><br>
                                <figcaption>990 Ft</figcaption>
                            </figure>
                        </Button>
                        <Button>
                            <figure @click="nextCallback">
                                <img style="width: 200px;" src="/Packeta_szallitas.png" alt="" srcset="">
                                <br><br>
                                <figcaption>1 480 Ft</figcaption>
                            </figure>
                        </Button>

                        </div>
                    </div>
                    <div class="flex py-4 gap-2">
                        <Button label="Back" severity="secondary" @click="prevCallback" />
                        <Button label="Next" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Összegzés">
                <template #content="{ prevCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                    </div>
                    <div class="flex py-4">
                        <Button label="Back" severity="secondary" @click="prevCallback" />
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
    </div>
</template>

<script setup>
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';
import InputOtp from 'primevue/inputotp';
import InputMask from 'primevue/inputmask';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

import {ref,onBeforeMount} from 'vue'


let adatok = []
let kosarNev = ref()
let kosarAr = ref(0)


onBeforeMount(() => {

adatok = JSON.parse(localStorage.getItem('data'))
kosarNev.value = JSON.parse(localStorage.getItem('data'))
// kosarAr.value = store.kosar[1]
// for(let termek in adatok) 
// {
//     kosarAr.value += adatok[termek]
//     console.log(kosarAr.value += adatok);
// }
})

</script>


<style scoped>

.ProdcutCard{
    color: white;
}
p{
    color: black;
}

Button{
    margin: 1rem;
}

.button-85{
    margin: auto;
    width: 70%;
    margin-top: 1rem;   
    margin-bottom: 1rem;
}

.hatter{
    margin: 1.5rem;
}

.ProductImg{
    width: 40%;
}

h3{
    text-align: center
}

.db{
    text-align: center
}

</style>
