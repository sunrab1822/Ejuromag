<template class="main">
    <div class="container" style="height: 50rem">
        <div class="row">

            <div class="col-1">
                <table>
                    <DataTable class="WelcomeTable" :value="user.user">
                        <Column field="name" id="WelcomeText" header="Welcome"></Column>
                    </DataTable>

                </table>
                <Button @click="LogOut">Logout</Button>
            </div>

            <div class="col-2 boxs">
                <DataTable v-model:selection="selectedCategory" selectionMode="single" :value="categorys">
                    <Column field="categoryName" header="Category"></Column>
                </DataTable>
            </div>

            <div class="col-2 boxs"   v-if="selectedCategory">
                <DataTable v-model:selection="selectedManufacturer" selectionMode="single" :value="manufacturers">
                    <Column field="name" header="Manufacturer"></Column>
                </DataTable>
            </div>


            <div class="col-2 boxs" v-if="selectedManufacturer" >
                <OrderList v-model="products" listStyle="height:auto" dataKey="id">
                    <template #header> List of Products </template>
                    <template #item="slotProps">
                        <div class="flex flex-wrap p-2 items-center gap-4">
                            <img style="width: 70px;" class="w-[4rem] shadow-md shrink-0 rounded-md"
                                :src="slotProps.item.picture" :alt="slotProps.item.name" />
                            <div class="flex-1 flex flex-col gap-2">
                                <span class="font-bold">{{ slotProps.item.name }}</span>
                                <div class="flex items-center gap-2">
                                    <i class="pi pi-tag text-sm"></i>
                                    <span>{{ slotProps.item.category }}</span>
                                </div>
                            </div>
                            <span class="font-bold text-surface-900 dark:text-surface-0">{{ slotProps.item.price
                                }} Ft</span>
                        </div>
                    </template>
                </OrderList>
            </div>
        </div>

    </div>
</template>

<script setup>
import Button from 'primevue/button';
import OrderList from 'primevue/orderlist';
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
const manufacturers = ref()
const categorys = ref()

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
})

watch(selectedManufacturer, (selectedManufacturer) => {
    console.log(selectedManufacturer.id);
    termekService.getProductsByManufacturer(selectedManufacturer.id)
                .then(resp => {
                    console.log( resp.data[0]);
                    products.value =  resp.data[0].product;
                    console.log(products.value);
                });
})


onMounted(() => {
    termekService.getManufacturers()
        .then(resp => {
            manufacturers.value = resp.data;
            console.log(manufacturers.value);
        });
    termekService.getCategories()
        .then(resp => {
            categorys.value = resp.data;
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

