<template class="main">
    <div class="container" style="height: 50rem">
        <div class="row">
            <div class="col-1">
                <table>
                    <tr>
                        <th>Menu</th>
                    </tr>
                    <tr>
                        <td><button @click="New=true, Modositas=false, ErrorMessage = '', Succesmessage=''">New</button></td>
                    </tr>
                    <tr>
                        <td><button @click="Modositas=true, New=false, ErrorMessage = '',Succesmessage=''">Change</button></td>
                    </tr>
                </table>
            </div>

            <div v-if="New" class="col-10">
                <div class="card button-85">
                    <div class="card-body">
                        <div class="row">
                            <FloatLabel class="NameInputFloatLabel">
                                <InputText class="NameInput" id="username" v-model="selectedName" />
                                <label for="username">Product name</label>
                            </FloatLabel>

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
                                <input v-model="selectedPrice" class="PriceInput" placeholder="Price in Ft" type="text">
                                <button style="margin-left: 3rem;" class="button-33"
                                    @click="AddNewProduct">Mentés</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="Modositas && selectedProduct == 0" class="col-10">
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


            <div v-if="Modositas && selectedProduct != 0" class="col-10">
                <div class="card button-85">
                    <div class="card-body">
                        <div class="row">
                            <FloatLabel class="NameInputFloatLabel">
                                <InputText class="NameInput" id="username" v-model="selectedProduct.name" />
                                <label for="username">Product name</label>
                            </FloatLabel>

                        </div>
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                                <Dropdown v-model="selectedCategory"  :options="categorys" optionLabel="categoryName"
                                    placeholder="Select a Category" :highlightOnSelect="false"
                                    style="margin-bottom: 1.3rem;" class=" md:w-14rem" />

                                <Dropdown v-model="selectedManufacturer" :options="manufacturers" optionLabel="name"
                                    placeholder="Select a Manufacturer" checkmark :highlightOnSelect="false"
                                    class=" md:w-14rem" />

                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                                <FloatLabel>
                                    <Textarea v-model="selectedProduct.description" rows="5" cols="30" />
                                    <label>Description</label>
                                </FloatLabel>
                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                                <input v-model="selectedProduct.price" class="PriceInput" placeholder="Price in Ft" type="text">
                                <button style="margin-left: 3rem;" class="button-33"
                                    @click="ChangeProduct">Modosít</button>

                            </div>
                        </div>
                    </div>
                </div>
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
        <br>

        <div v-if="ErrorMessage" class="alert alert-danger alert-dismissible" role="alert">
            <strong>{{ ErrorMessage }}</strong>
            <button type="button" @click="ErrorMessage = ''" class="btn-close"></button>
        </div>

        <div v-if="Succesmessage" class="alert alert-success alert-dismissible" role="alert">
            <strong>{{ Succesmessage }}</strong>
            <button type="button" @click="Succesmessage = ''" class="btn-close"></button>
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
import InputText from 'primevue/inputtext';


import { ref, onMounted, watch, onBeforeMount } from 'vue';
import termekService from "../../services/termekService.js"
import { useUserStore } from "../../store/store.js"

const ErrorMessage = ref()
const Succesmessage = ref()

const selectedManufacturer = ref()
const selectedCategory = ref()
const selectedDescription = ref()
const selectedName = ref()
const selectedPrice = ref()

const products = ref();
const productsByManufacturer = ref()
const manufacturers = ref()
const categorys = ref()
let selectedProduct = ref(0)

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

const AddNewProduct = () => {
    Succesmessage.value = ""
    ErrorMessage.value = ''

    if(selectedCategory.value == null || selectedManufacturer.value == null || selectedName.value == null || selectedDescription.value == null || selectedPrice.value == null){
        ErrorMessage.value = "Please fill all fields"
        return
    }

    const new_product = {
        category_id: selectedCategory.value.id,
        manufacturer_id: selectedManufacturer.value.id,
        name: selectedName.value,
        description: selectedDescription.value,
        price: selectedPrice.value,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuZ8qJdOA0UUnYhR7mf5xtGHeOYTp6_qmOXY8vELaGA&s"
    }

    try {
        termekService.CreateNewProduct(new_product, user.value.user.token)   
        Succesmessage.value = "Product added succesfully"
        ErrorMessage.value = ''
        selectedCategory.value = selectedManufacturer.value = selectedName.value = selectedDescription.value = selectedPrice.value = null
    } catch (error) {
        ErrorMessage.value = "Error adding product"
    }

}

const ChangeProduct = () => {
    Succesmessage.value = ""
    ErrorMessage.value = ''
    console.log(selectedProduct.value.name);

    if(selectedCategory.value.id == null || selectedManufacturer.value.id == null || selectedProduct.value.name == null || selectedProduct.value.description == null || selectedProduct.value.price == null){
        ErrorMessage.value = "Please fill all fields"
        return
    }
    

    const changed_product = {
        category_id: selectedCategory.value.id,
        manufacturer_id: selectedManufacturer.value.id,
        name: selectedProduct.value.name,
        description: selectedProduct.value.description,
        price: selectedProduct.value.price,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuZ8qJdOA0UUnYhR7mf5xtGHeOYTp6_qmOXY8vELaGA&s"
    }

    try {
        termekService.UpdateProduct(changed_product, selectedProduct.value.id, user.value.user.token)   
        Succesmessage.value = "Product added succesfully"
        ErrorMessage.value = ''
        selectedCategory.value.id = selectedManufacturer.value.id = selectedProduct.value.name = selectedProduct.value.description = selectedProduct.value.price =  null
        selectedProduct.value = 0
        termekService.getAllProducts()
        .then(resp => {
        products.value = resp.data;
        });

    } catch (error) {
        ErrorMessage.value = "Error adding product"
    }
}

</script>

<style scoped>

.NameInputFloatLabel{
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.NameInput{
    text-align: center;
    width: 48rem;
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

