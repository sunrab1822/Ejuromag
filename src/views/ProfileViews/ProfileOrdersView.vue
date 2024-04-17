<template>
    <div class="row width">
        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2 col-2">
            <ProfileNavbar />
        </div>

        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-10 col-10">
            <h1 class="h1Custom">Rendelések</h1>
            <div v-for="order in orders" class="OrderStyle">
                <h1>Rendelésed azonosító száma: {{ order.id }}</h1>
                <h1>Szállítási cím: {{ order.adress }}</h1>
                <h1>Rendelés összege: {{ order.price }} Ft</h1>
                <div v-for="product in order.products" class="card button-85">
                    <div class="card-body">
                        <div class="row">
                            <h2>{{ product.name }}</h2>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <img class="ProductImg" :src="product.picture" alt="" srcset="">
                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <p>{{product.description}}</p>


                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <h2>{{product.price}} Ft</h2>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

<script setup>
import ProfileNavbar from '../../components/ProfileNavbar.vue';
import termekService from '@/services/termekService';
import {useUserStore} from "../../store/store"
import {ref, onBeforeMount} from "vue"

const orders = ref()
const user = ref()
const userToken = ref()

const store = useUserStore()

onBeforeMount(() => {
    user.value = store.getUser
    userToken.value = user.value.user.token

    termekService.GetOrder(userToken.value)
    .then(resp => {
        orders.value = resp.data;

    });

})


</script>

<style lang="scss" scoped>

.OrderStyle{
    border: 2px solid white;
    background-color: aliceblue;
    margin: 1.2rem;
}

.ProductImg{
    width: 65%;
}

h1{
    margin: 1rem;
}


h2{
    margin-bottom: 2rem;
    text-align: center;
}

.ProductNameDiv{
    text-align: center;
}

.Price-{
    text-align: center;
    font-weight: bold;
}


.button-85{
    color: aliceblue;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
}

.productCards{
    text-align: center;
}

.NameSearchCard{
    padding: 10px;
}

</style>