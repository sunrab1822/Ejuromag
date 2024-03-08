<template>
<div class="card">
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
                <div class="col-md-6 col-lg-6"><p class="db"> {{ termek[2] }}</p></div>
            </div>

        </div>

    </div>
        <Stepper orientation="vertical">
            <StepperPanel header="Személyes Adatok">
                <template #content="{ nextCallback }">
                    <div class="flex flex-column h-40rem">
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
                                <p style="margin-top: 10px;" class="col-lg-3">Ország:</p>

                                <div class=" flex justify-content-center">
                                    <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem">
                                        <template #value="slotProps">
                                            <div v-if="slotProps.value" class="flex align-items-center">
                                                <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                                                <div>{{ slotProps.value.name }}</div>
                                            </div>
                                            <span v-else>
                                                {{ slotProps.placeholder }}
                                            </span>
                                        </template>
                                        <template #option="slotProps">
                                            <div class="flex align-items-center">
                                                <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                                                <div>{{ slotProps.option.name }}</div>
                                            </div>
                                        </template>
                                    </Dropdown>
                                    </div>
                                    
                                </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Telefonszám: </p>
                                <InputMask class="col-lg-6" id="basic" v-model="value" mask="99-99-9999999?99999999" placeholder="99-99-9999999" />
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Email: </p>
                                <input class="col-lg-6" placeholder="Nyúl" required="required" v-model="RegisterCity" type="text" name="" id="">
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
                    <div class="flex flex-column h-16rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">

                        <Button>
                            <img style="width: 200px;" src="../../public/Posta_szallitas.png" alt="" srcset="">
                        </Button>
                        <Button>
                            <img style="width: 200px;" src="../../public/PostaPont_szallitas.jpg" alt="" srcset="">
                        </Button>
                        <Button>
                            <img style="width: 200px;" src="../../public/Packeta_szallitas.png" alt="" srcset="">
                        </Button>

                        </div>
                    </div>
                    <div class="flex py-4 gap-2">
                        <Button label="Back" severity="secondary" @click="prevCallback" />
                        <Button label="Next" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header III">
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

import { useTermekStore } from "../store/store"

const store = useTermekStore()
let adatok = []
let kosarNev = ref()
let kosarAr = ref(0)


onBeforeMount(() => {

adatok = JSON.parse(localStorage.getItem('data'))
kosarNev.value = JSON.parse(localStorage.getItem('data'))
kosarAr.value = store.kosar[1]
for(let termek in adatok) 
{
    kosarAr.value += adatok[termek]
    console.log(kosarAr.value += adatok);
}})

</script>


<style scoped>
Button{
    margin: 1rem;
}

</style>
