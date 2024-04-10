<template>
<div class="card hatter">
    <div v-for="termek in adatok" v-if="kosarNev != ''" class="button-85">
        <div class="row">
            <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                <!-- <img src="" alt="Termék képe"> -->
                <img class="ProductImg" :src="termek[3]" alt="" srcset="">
            </div>
    
            <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                <h3 class="ProdcutCard">{{ termek[0] }}</h3>
            </div>
    
            <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                <h3 class="text-center Ar ProdcutCard">{{ termek[1] }}<span> Ft</span></h3>
                <h3 class="ProdcutCard"> {{ termek[2] }} db</h3>
    
            </div>
        </div>


    </div>
        <Stepper orientation="vertical" >
            <StepperPanel header="Személyes Adatok" >
                <template #content="{ nextCallback }" >
                    <div class="flex flex-column h-40rem" >
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto font-medium p-3">

                            <div class="row">
                                <p style="margin-top: 10px;" class="col-lg-3">Vezetéknév:</p>
                                <input class="col-lg-6" placeholder="Vezetéknév" required="required" v-model="OrderLastName"  type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p style="margin-top: 10px;" class="col-lg-3">Keresztnév:</p>
                                <input class="col-lg-6" placeholder="Keresztnév" required="required" v-model="OrderFirstName"  type="text" name="" id="">
                            </div>
                            <br>    
                            <div class="row">
                                <p style="margin-top: 10px;" class="col-lg-3">Város:</p>
                                <InputOtp class="col-lg-4" v-model="OrderZipCode" integerOnly/>
                                <input class="col-lg-4" placeholder="Város" required="required" v-model="OrderCity"  type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p style="margin-top: 10px;" class="col-lg-3">Utca, házszám:</p>
                                <input class="col-lg-6" placeholder="Utca, házszám" required="required" v-model="OrderCityStreet"  type="text" name="" id="">
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Telefonszám: </p>
                                <InputMask class="col-lg-6" id="basic" v-model="OrderPhoneNumber" mask="+36-99-9999999?99999999" placeholder="+36-99-9999999" />
                            </div>
                            <br>
                            <div class="row">
                                <p class="col-lg-3">Email: </p>
                                <input class="col-lg-6" placeholder="Email" required="required" v-model="OrderEmail" type="text" name="" id="">
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
                    <div class="flex flex-column OrderFinalize">
                        <div class="container border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">

                        <Button @click="OrderShippingImg ='/Posta_szallitas.png', OrderShippingPrice = 1590">
                            <figure @click="nextCallback">
                                <img class="ShippingImgs" src="/Posta_szallitas.webp" alt="" srcset="">
                                <br><br>
                                <figcaption>1.590,- Ft</figcaption>
                            </figure>
                        </Button>
                        <Button @click="OrderShippingImg = '/PostaPont_szallitas.jpg', OrderShippingPrice = 990">
                            <figure @click="nextCallback">
                                <img class="ShippingImgs" src="/PostaPont_szallitas.webp" alt="" srcset="">
                                <br><br>
                                <figcaption>990 Ft</figcaption>
                            </figure>
                        </Button>
                        <Button class="row" @click="OrderShippingImg = '/Packeta_szallitas.png', OrderShippingPrice = 1480">
                            <figure @click="nextCallback">
                                <img class="ShippingImgs" src="/Packeta_szallitas.webp" alt="" srcset="">
                                <br><br>
                                <figcaption>1 480 Ft</figcaption>
                            </figure>
                        </Button>

                        </div>
                    </div>
                    <div class="flex py-4 gap-2">
                        <Button label="Back" severity="secondary" @click="prevCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Rendelés összegzése">
                <template #content="{ prevCallback }">
                    <div class="flex flex-column h-20rem contrainer">
                        <div  class=" row border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            <div class="card col-lg-3 col-md-3 col-12" >
                                <div class="card-header">
                                    <h5>Személyes adatok:</h5>
                                </div>
                                <div class="card-body" >
                                    <p>Név: <span>{{OrderLastName}} {{OrderFirstName}}</span></p>
                                    <p>Város: <span>{{OrderCity}}</span></p>
                                    <p>Utca, házszám: <span>{{OrderZipCode}} {{OrderCityStreet}}</span></p>
                                    <p>Telefonszám: <span>{{OrderPhoneNumber}}</span></p>
                                    <p>Email: <span>{{OrderEmail}}</span></p>
                                </div>
                            </div>
                            <div class="card col-lg-3 col-md-3 col-12">
                                <div class="card-header">
                                    <h5>Szállítás</h5>
                                </div>
                                <div class="card-body">
                                    <Button class="row" style="margin: auto;">
                                        <figure>
                                            <img style="width: 7.9rem;" :src="OrderShippingImg" alt="" srcset="">
                                            <br><br>
                                            <figcaption>{{OrderShippingPrice}} Ft</figcaption>
                                        </figure>
                                    </Button>
                                </div>
                            </div>
                            <div class="card col-lg-3 col-md-3 col-12">
                                <div class="card-header">
                                    <h5>Leadás</h5>
                                </div>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <p class="col-md-5 col-form-label text-md-end">Összeg:</p>
                                        <div class="col-md-6">
                                            <label class="form-control">{{kosarAr}} ft</label>
                                        </div>
                                    </div>
        
        
                                    <div class="row mb-3">
                                        <p class="col-md-5 col-form-label text-md-end">Szállítási költség:</p>
                                        <div class="col-md-6">
                                            <label class="form-control">{{OrderShippingPrice}} ft</label>
                                        </div>
                                    </div>
        
                                    <hr>
        
                                    <div class="row mb-3">
                                        <p class="col-md-5 col-form-label text-md-end">Végösszeg:</p>
                                        <div class="col-md-6">
                                            <label class="form-control">{{kosarAr}} Ft</label>
                                        </div>
                                    </div>
                                    <router-link to="/" v-if="OrderShippingImg != 0" id="RendelesFolyatatasaBtn" @click="SendOrder">Folytatás</router-link>

                                </div>
                            </div>
                        </div>
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
import Button from 'primevue/button';

import {ref,onBeforeMount} from 'vue'
import { useUserStore } from "../store/store"
import termekService from "../services/termekService"
import router from '@/router';


const store = useUserStore()


let adatok = []
let kosarNev = ref()
let kosarAr = ref(0)
let OrderLastName = ref()
let OrderFirstName = ref()
let OrderEmail = ref()
let OrderCity = ref()
let OrderCityStreet = ref()
let OrderPhoneNumber = ref()
let OrderZipCode = ref()
let OrderShippingImg = ref(0)
let OrderShippingPrice = ref()
let user = ref()

onBeforeMount(() => {

adatok = JSON.parse(localStorage.getItem('data'))
kosarNev.value = JSON.parse(localStorage.getItem('data'))
kosarAr.value = localStorage.getItem("CartPrice")
try{
    user.value = store.getUser
    OrderLastName.value = user.value.user.user.name.split(" ")[0];
    OrderFirstName.value = user.value.user.user.name.split(" ")[1];
    OrderEmail.value = user.value.user.user.email;
    console.log(adatok[0][5]);

}
catch(err)
{
}

})

const SendOrder = () => {
    console.log("kuki");
    const ProductsId = []
    for (let index = 0; index < adatok.length; index++) {
        console.log(adatok[index][5]);
        ProductsId.push(adatok[index][5])
        
    }
    const akt_Order = {
        address: `${OrderZipCode.value}, ${OrderCity.value} ${OrderCityStreet.value}`,
        products: ProductsId
    }
    console.log(akt_Order);
        try {
            termekService.SendBuy(akt_Order, user.value.user.token)   
            alert("Rendelés leadva") 
        } 
        catch (error) {
            alert("UwU")
        }

    localStorage.removeItem('data')
    

}

</script>


<style scoped>
    .OrderFinalize{
        height: 19rem;
    }

.ShippingImgs{
    width: 180px;
}

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

@media (max-width: 1250px) {
    .button-85{
    width: 100%;
    }
    .ShippingImgs{
        width: 60px;
    }
}

.hatter{
    margin: 1.5rem;
}

.ProductImg{
    width: 5rem;
}

h3{
    text-align: center
}

.db{
    text-align: center
}

.card{
    margin: 1rem 2rem 1.5rem 0px;
}

</style>
