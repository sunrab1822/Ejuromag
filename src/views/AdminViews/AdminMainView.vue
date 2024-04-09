<template class="main">
    <div class="container" style="height: 50rem">
        <div class="row">
            <div class="col-1">
                <table>
                    <tr>
                        <th>Menu</th>
                    </tr>
                    <tr>
                        <td><button @click="New=true, Modositas=false">New</button></td>
                    </tr>
                    <tr>
                        <td><button @click="Modositas=true, New=false">Change</button></td>
                    </tr>
                </table>
            </div>

            <div v-if="New" class="col-10">
                <div class="card button-85">
                    <div class="card-body">
                        <div class="row">
                            <h3>Cím</h3>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <p>Kép</p>
                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <p>Leírás</p>
                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <h3>Ára Ft</h3>
                                <router-link to="/Kosar"><button class="button-33">Vásárlás</button></router-link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="Modositas" class="col-10">
                <DataTable v-model:selection="selectedProduct" selectionMode="single" paginator :rows="3"
                    :value="products" removableSort tableStyle="min-width: 50rem">
                    <Column field="id" header="id" sortable></Column>
                    <Column field="picture" header="picture" sortable>
                        <template #body="slotProps">
                            <img :src="slotProps.data.picture"
                                :alt="slotProps.data.picture" class="shadow-4" width="100" />
                        </template>
                    </Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column style="width: 20rem;" field="description" header="description" sortable></Column>
                    <Column field="price" header="price" sortable></Column>
                </DataTable>
            </div>

            <div class="col-1">
                <table>
                    <DataTable class="WelcomeTable" :value="user.user">
                        <Column field="name" id="WelcomeText" header="Welcome"></Column>
                    </DataTable>

                </table>
                <Button @click="LogOut">Logout</Button>
            </div>

        </div>

    </div>
</template>

<script setup>
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import router from "@/router";



import { ref, onMounted, watch, onBeforeMount } from 'vue';
import termekService from "../../services/termekService.js"
import { useUserStore } from "../../store/store.js"

const selectedManufacturer = ref()
const selectedCategory = ref()

const products = ref();
const productsByCategory = ref()
const productsByManufacturer = ref()
const manufacturers = []
const categorys = ref()
let selectedProduct = ref()

let Modositas = ref(false)
let New = ref(false)

const user = ref()
const store = useUserStore()
const LogOut = async() => {
    const res = await termekService.UserLogOut(user.value.user.token);
    store.setLoggedIn(false);
    store.setUser(null);

    router.push({ path: "/admin" })
}

onBeforeMount(() => {
    user.value = store.getUser
    console.log(user.value.user.user.name);
    termekService.getManufacturers()
    .then(resp => {
        manufacturers.push(resp.data);
        console.log(resp.data);
        console.log(manufacturers[0])
    });
    console.log(manufacturers);
})

onMounted(() => {
    termekService.getAllProducts()
                .then(resp => {
                    products.value = resp.data;
                });

        
});

</script>

<style scoped>

Button{
    margin-top: 4rem;
}

#WelcomeText{
    text-align: center;
}
.WelcomeTable{
    width: 10rem;
}

.p-icon, .p-button-label{
    display: none !important;
}
.boxs{
    margin-left: 7rem;
    margin-top: 2rem;
}

table{
    background-color: white;
}

td{
    font-size: 17px;
    color: white;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}
</style>

