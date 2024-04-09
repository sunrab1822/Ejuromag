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
                            <input v-model="selectedName" type="text" class="NameInput" placeholder="Product name" name="" id="">
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                                <Dropdown v-model="selectedCategory" :options="categorys" optionLabel="categoryName"
                                    placeholder="Select a Category" checkmark :highlightOnSelect="false"
                                    style="margin-bottom: 1.3rem;" class=" md:w-14rem" />

                                <Dropdown v-model="selectedManufacturer" :options="manufacturers" optionLabel="name"
                                    placeholder="Select a Manufacturer" checkmark :highlightOnSelect="false"
                                    class=" md:w-14rem" />

                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                                <FloatLabel>
                                    <Textarea v-model="selectedDescription" rows="5" cols="30" />
                                    <label>Description</label>
                                </FloatLabel>
                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                                <input class="PriceInput" placeholder="Price in Ft" type="text">
                                <button style="margin-left: 3rem;" class="button-33">Mentés</button>

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
                            <img :src="slotProps.data.picture" :alt="slotProps.data.picture" class="shadow-4"
                                width="100" />
                        </template>
                    </Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column style="width: 20rem;" field="description" header="description" sortable></Column>
                    <Column field="price" header="price" sortable></Column>
                    <Column field="category_id" header="category" sortable>
                        <template #body="slotProps">
                            <p style="color: black;">{{ slotProps.data.category_id }}</p>
                        </template>
                    </Column>
                    <Column field="manufacturer_id" header="manufacturer" sortable>
                        <template #body="slotProps">
                            <p style="color: black;">{{ slotProps.data.manufacturer_id }}</p>
                        </template>
                    </Column>
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
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import FloatLabel from 'primevue/floatlabel';



import { ref, onMounted, watch, onBeforeMount } from 'vue';
import termekService from "../../services/termekService.js"
import { useUserStore } from "../../store/store.js"

const selectedManufacturer = ref()
const selectedCategory = ref()
const selectedDescription = ref()
const selectedName = ref()

const products = ref();
const productsByManufacturer = ref()
const manufacturers = ref()
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

function SearchCategory(){
    let asd = manufacturers.length;
    return asd
}

onBeforeMount(() => {
    user.value = store.getUser
    console.log(user.value.user.user.name);

    termekService.getManufacturers()
    .then(resp => {
        manufacturers.value = resp.data;
        console.log(resp.data);
        console.log(manufacturers[0])
    });

    termekService.getAllProducts()
        .then(resp => {
        products.value = resp.data;
        });

    termekService.getCategories()
    .then(resp=> {
        categorys.value = resp.data;
        console.log(categorys.value);
    })
})


</script>

<style scoped>

.NameInput{
    text-align: center;
    margin-bottom: 1.5rem;
}
.DescriptionInput{
}
.PriceInput{
    text-align: center; 
}

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

