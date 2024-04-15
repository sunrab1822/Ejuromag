<template>
    <div class="container">
        <h1 class="h1Custom">Kosár</h1>
        <div class="row" >

            <div class="col-md-8 col-lg-8 col-sm-12">
                <div v-for="product in datas" class="row button-85 ">

                    <div class="col-md-4 col-lg-4 col-sm-4  ">
                        <img data-cy="image" class="ProductImg" :src="product[3]" alt="Termék képe">
                    </div>

                    <div class="col-md-4 col-lg-4 col-sm-4 ">
                        <h3 data-cy="name">{{ product[0] }}</h3>
                        <p>{{ product[4] }}</p>
                    </div>

                    <div class="col-md-4 col-lg-4 col-sm4 ">
                        <p class="text-center Price">{{ product[1] }}<span> Ft</span></p>
                        <div class="row">
                            <div class="col-md-3 col-lg-3 col-sm-3 col-3"><button v-if="product[2] >= 2" class="PlusMinus" @click="Csokkent(product[0])">-</button></div>
                            <div class="col-md-6 col-lg-6 col-sm-3 col-3"><p data-cy="db" class="db"> {{ product[2] }}</p></div>
                            <div class="col-md-3 col-lg-3 col-sm-3 col-3"><button class="PlusMinus" @click="Novel(product[0])">+</button></div>
                        <button data-cy="remove" @click="Torles(product[0])" id="DeleteButton">Töröl</button>
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
                                    <label class="form-control">{{CartPrice}} ft</label>
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
                                    <label data-cy="fullPrice" class="form-control">{{CartPrice + 1000}} Ft</label>
                                </div>
                            </div>

                            <div class="text-center OrderContinueButton">
                                <router-link v-if="getloggedin && datas.length >= 1" to="/rendeles_osszegzes" data-cy="continue" id="OrderContinueButton">Folytatás</router-link>
                            </div>

                            <div class="text-center NeedToRegisterButton">
                                <router-link v-if="!getloggedin" to="/login"  id="NeedToRegisterButton">Jelentkezz be a rendelés leadásához</router-link>
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
import { useCartStore } from "../store/store"

const cartstore = useCartStore()

let datas = []
let getloggedin = ref()
let CartPrice = ref(0)

const store = useUserStore()
if(store.getLoggedIn){
        getloggedin.value = true
    }
    else{
        getloggedin.value = false

    }

function Novel(number){
    for(let product in datas)
    {
        if(datas[product][0] == number)
        {
            const index = product;
            const newValue = parseInt(datas[index][1]) + cartstore.getOnePrices[index];
            datas[index][1] = newValue;
            datas[index][2]++
            cartstore.setProductsinCart(datas)
            DataLoading()
        }
    }
}

function Csokkent(number){    
    for(let product in datas)
    {
        if(datas[product][0] == number)
        {
            const index = product;
            const newValue = parseInt(datas[index][1]) - cartstore.getOnePrices[index];
            datas[index][1] = newValue;
            datas[index][2]--
            cartstore.setProductsinCart(datas)
            DataLoading()

        }
    }
}


function Torles(number){

    for(let product in datas)
    {
        if(datas[product][0] == number)
        {
            const index = product;
            cartstore.getOnePrices.splice(index, 1)
            datas.splice(index, 1);
            cartstore.setProductsinCart(datas)
            DataLoading()
        }
    }
}
    
onBeforeMount(() => {

    DataLoading()
})

function DataLoading() {
    datas = []
    CartPrice.value = 0
    datas = cartstore.getproductsInCart
    for(let product in datas) 
    {
        CartPrice.value += datas[product][1]

    }
    cartstore.setFullCartPrice(CartPrice.value)
}

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

.OrderContinueButton{
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

.Price{
    font-size: 32px;
    font-weight: bold;
}

.button-85  {
    margin-bottom: 20px;

}

#DeleteButton{
    margin:auto;
    float: right;
    border-radius: 5px;
    width: 80px;
    margin-top: 7px;
    padding: 9px;
    color: white;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    text-transform: uppercase;
    background-image: linear-gradient(to right, #ad3333 0%, #fd7272 51%, #ff0000 100%);
}

#DeleteButton:hover{
  background-position: right center; /* change the direction of the change here */
}

h2{
    color: white;
    text-align: center;
}




</style>
