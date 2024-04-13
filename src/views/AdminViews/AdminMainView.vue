<template class="main">
    <div>
        <div class="row MainRow">
            <div class="col-lg-1 col-md-1 col-sm-1 col-1">
                <table>
                    <tr>
                        <th>Menu</th>
                    </tr>
                    <tr>
                        <td><button
                                @click="New=true, Modositas=false, selectedProduct=0, ErrorMessage = '', Succesmessage=''">New</button>
                        </td>
                    </tr>
                    <tr>
                        <td><button
                                @click="Modositas=true, New=false, selectedProduct=0, ErrorMessage = '',Succesmessage=''">Change</button>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="col-lg-10 col-md-10 col-sm-7 col-7">
                
                <div v-if="New">
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
                                        class="categoryDropDown md:w-14rem" />

                                    <Dropdown v-model="selectedManufacturer" :options="manufacturers" optionLabel="name"
                                        placeholder="Select a Manufacturer" checkmark :highlightOnSelect="false"
                                        class=" md:w-14rem" />

                                    <FloatLabel class="ImageInputFloatLabel">
                                        <InputText class="ImageInput" id="username" v-model="selectedImageLink" />
                                        <label for="username">Product image link</label>
                                    </FloatLabel>

                                </div>
                                <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                                    <FloatLabel>
                                        <Textarea v-model="selectedDescription" rows="5" cols="30" />
                                        <label>Description</label>
                                    </FloatLabel>
                                </div>

                                <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                                    <input v-model="selectedPrice" class="PriceInput" placeholder="Price in Ft"
                                        type="text">
                                    <button class="button-33"
                                        @click="AddNewProduct">Mentés</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="Modositas && selectedProduct == 0">
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
                                <p class="SlotTextBlack">{{ categorys[slotProps.data.category_id-1].categoryName }}</p>
                            </template>
                        </Column>
                        <Column field="manufacturer_id" header="manufacturer" sortable>
                            <template #body="slotProps">
                                <p class="SlotTextBlack" >{{ manufacturers[slotProps.data.manufacturer_id-1].name }}</p>
                            </template>
                        </Column>
                    </DataTable>
                </div>

                <div v-if="Modositas && selectedProduct != 0">
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
                                    <Dropdown v-model="selectedCategory" id="category" :options="categorys"
                                        optionLabel="categoryName" placeholder="Select a Category" checkmark
                                        :highlightOnSelect="false" class="categoryDropDown md:w-14rem" />

                                    <Dropdown v-model="manufacturers[selectedProduct.manufacturer_id-1]"
                                        :value="manufacturers.id" id="manufacturer" :options="manufacturers"
                                        optionLabel="name" placeholder="Select a Manufacturer" checkmark
                                        :highlightOnSelect="false" class=" md:w-14rem" />

                                    <FloatLabel class="ImageInputFloatLabel">
                                        <InputText class="ImageInput" id="username" v-model="selectedProduct.picture" />
                                        <label for="username">Product image link</label>
                                    </FloatLabel>

                                </div>
                                <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                                    <FloatLabel>
                                        <Textarea v-model="selectedProduct.description" rows="5" cols="30" />
                                        <label>Description</label>
                                    </FloatLabel>
                                </div>

                                <div class="col-md-4 col-lg-4 col-sm-4 col-4">
                                    <input v-model="selectedProduct.price" class="PriceInput" placeholder="Price in Ft"
                                        type="text">
                                    <button class="button-33"
                                        @click="ChangeProduct">Modosít</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div class="col-lg-1 col-md-1 col-sm-2 col-2 WelcomeDiv">
                <table>
                    <DataTable class="WelcomeTable" :value="user.user">
                        <Column field="name" id="WelcomeText" header="Welcome"></Column>
                    </DataTable>

                </table>
                <Button @click="LogOut">Logout</Button>
            </div>

        </div>

        <div v-if="ErrorMessage" class="alert alert-danger alert-dismissible" role="alert">
            <strong>{{ ErrorMessage }}</strong>
            <button type="button" @click="ErrorMessage = ''" class="btn-close"></button>
        </div>

        <div v-if="Succesmessage" class="alert alert-success alert-dismissible" role="alert">
            <strong>{{ Succesmessage }}</strong>
            <button type="button" @click="Succesmessage = ''" class="btn-close"></button>
        </div>

    </div>
    <AdminFooter />
</template>

<script setup>
import AdminFooter from '@/components/AdminFooter.vue'

import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import router from "@/router";
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';


import { ref, onMounted, watch, onBeforeMount, computed } from 'vue';
import termekService from "../../services/termekService.js"
import { useUserStore } from "../../store/store.js"

const ErrorMessage = ref()
const Succesmessage = ref()


const selectedManufacturer = ref()
const selectedCategory = ref()
const selectedDescription = ref()
const selectedName = ref()
const selectedPrice = ref()
const selectedImageLink = ref()

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

    termekService.getManufacturers()
    .then(resp => {
        manufacturers.value = resp.data;

    });

    termekService.getAllProducts()
        .then(resp => {
        products.value = resp.data;
        });

    termekService.getCategories()
    .then(resp=> {
        categorys.value = resp.data;
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
    let categoryId = document.getElementById("category").querySelector("span").textContent;
    let manufacturerId = document.getElementById("manufacturer");
    Succesmessage.value = ""
    ErrorMessage.value = ''
    if(categoryId == null || manufacturerId == null || selectedProduct.value.name == null || selectedProduct.value.description == null || selectedProduct.value.price == null){
        ErrorMessage.value = "Please fill all fields"
        return
    }
    

    const changed_product = {
        category_id: categoryId,
        manufacturer_id: manufacturerId,
        name: selectedProduct.value.name,
        description: selectedProduct.value.description,
        price: selectedProduct.value.price,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuZ8qJdOA0UUnYhR7mf5xtGHeOYTp6_qmOXY8vELaGA&s"
    }

    try {
        // termekService.UpdateProduct(changed_product, selectedProduct.value.id, user.value.user.token)   
        Succesmessage.value = "Product added succesfully"
        ErrorMessage.value = ''
        selectedCategory.value = selectedManufacturer.value = selectedProduct.value.name = selectedProduct.value.description = selectedProduct.value.price =  null
        selectedProduct.value = 0
        termekService.getAllProducts()
        .then(resp => {
        products.value = resp.data;
        });

    } catch (error) {
        ErrorMessage.value = error.message
    }
}

</script>

<style scoped>

@import '../../assets/scss/adminStyle.scss'

</style>

