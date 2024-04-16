<template>
    <div class="container">
        <h1 class="h1Custom">{{siteName}}</h1>
        <div class="row">
            <div class="col-md-4 col-lg-3 col-sm-3">
                <div class="card button-85 NameSearchCard">
                    <div class="card-header">
                        <h5>Név:</h5>
                    </div>
                    <div class="card-body">
                        <div class="col-md-4 col-lg-4 col-sm-4 col-4 ProductNameDiv"><input v-model="ProductName" @keyup="SearchByProductName" type="text" placeholder="Termék neve"></div>
                    </div>
                </div>

                <div class="card button-85">
                    <div class="card-header">
                        <h5>Ár:</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <input pattern="\d*" v-model="minPrice" class="inputs" type="number" maxlength="10" name="" id="minPrice" placeholder="Min ár">
                            <span class="Price-">-</span>
                            <input pattern="\d*" v-model="maxPrice" class="inputs" type="number" maxlength="10" name="" id="maxPrice" placeholder="Max ár">
                        </div>
                    </div>
                </div>

                <div class="card button-85">
                    <div class="card-header">
                        <h5>Gyártó: </h5>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="manu in Manufacturers">
                                
                                <div class="flex align-items-center">
                                    <RadioButton v-model="SelectedManufacturer" inputId="manufacturerId" name="manufacturer" :value=manu />
                                    <label for="manufacturerId" class="ml-2">{{manu.name}}</label>
                                </div>
                            </li>

                        </ul>

                    </div>
                    
                </div>
            </div>

            <div class="col-md-8 col-lg-9 col-sm-8 productCards">
                <div v-if="Products == 0">
                    <h2 class="h2Custom">Nincs ilyen termék</h2>
                </div>
                <div v-for="product in Products" class="card button-85">
                    <div class="card-body">
                        <div class="row">
                            <h3>{{ product.name }}</h3>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <img class="ProductImg":src="product.picture" alt="" srcset="">
                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <p>{{product.description}}</p>

                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <h3>{{product.price}} Ft</h3>
                                <router-link to="/kosar" data-cy="addToCart" @click="Save(product.name, product.price, product.picture, product.description, product.id)"><button class="button-33">Vásárlás</button></router-link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
    import RadioButton from 'primevue/radiobutton';
    import {onMounted, ref, watch} from "vue";
    import { useCartStore } from "../store/store"
    import router from '@/router';

    import termekService from "../services/termekService"

    let SelectedManufacturer = ref();
    const store = useCartStore()

    let minPrice = ref(0);
    let maxPrice = ref(10000000);
    let OnePrice = []
    let datas = []
    var pathname = window.location.pathname.split("/").slice(1)[1]

    var Products = ref();
    var Manufacturers = ref();
    const siteName = ref("")
    let ProductName = ref()
    let CategoryId = ref()

    termekService.getManufacturers()
    .then(resp => {
        Manufacturers.value = resp.data;
    });

    const SearchByProductName = () => {
        if(ProductName.value == []){
            ProductShow()
        }
        else{
            termekService.getProductsBySearchByName(ProductName.value)
            .then(resp => {
                try {
                    const rawData = resp.data;
                    const fillteredData = []
                    for (let index = 0; index < rawData.length; index++) {
                            if(rawData[index].category_id === CategoryId.value){
                                fillteredData.push(rawData[index]);
                            }
                            
                        }
                    Products.value = fillteredData

                } catch (error) {
                    
                }
                SelectedManufacturer.value = false
                minPrice.value = 0
                maxPrice.value = 10000000
            });
        }
    }

    watch(SelectedManufacturer, (SelectedManufacturer) => {
        termekService.getProductsByManufacturer(SelectedManufacturer.id)
        .then(resp => {
            try {
                const rawData = resp.data[0].product;
                const fillteredData = []
                for (let index = 0; index < rawData.length; index++) {
                        if(rawData[index].category_id === CategoryId.value){
                            fillteredData.push(rawData[index]);
                        }
                        
                    }
                Products.value = fillteredData

                ProductName.value = []
                minPrice.value = 0
                maxPrice.value = 10000000
            } catch (error) {
                
            }

        });
    })

    watch(minPrice, (minPrice) => {
        if(minPrice > 0){
            termekService.getProductsByMinMaxPrice(minPrice, maxPrice.value)
            .then(resp => {
                try {
                
                const rawData = resp.data;
                const fillteredData = []
                for (let index = 0; index < rawData.length; index++) {
                    if(rawData[index].category_id === CategoryId.value){
                        fillteredData.push(rawData[index]);
                    }
                    
                }
                Products.value = fillteredData

                } catch (error) {
                    
                }
                ProductName.value = []
                SelectedManufacturer.value = false

            });
        }
    })

    watch(maxPrice, (maxPrice) =>{

        if(maxPrice > 0)
        {
            termekService.getProductsByMinMaxPrice(minPrice.value, maxPrice)
            .then(resp => {
                try {
                
                const rawData = resp.data;
                const fillteredData = []
                for (let index = 0; index < rawData.length; index++) {
                    if(rawData[index].category_id === CategoryId.value){
                        fillteredData.push(rawData[index]);
                    }
                    
                }
                Products.value = fillteredData

                } catch (error) {
                    
                }
                ProductName.value = []
                SelectedManufacturer.value = false
            });
        }
    })

    function ProductShow(){
        switch (pathname){
            case 'laptopok':
                termekService.getProducts(1)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Laptopok"
                    CategoryId.value = 1
                });
                break;
            case 'tabletek':
                termekService.getProducts(2)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Tabletek"
                    CategoryId.value = 2

                });

                break;
            case 'irodai_szamitogepek':
                termekService.getProducts(3)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Irodai számítógépek"
                    CategoryId.value = 3
                });
                
                break;
            case 'gamer_szamitogepek':
                termekService.getProducts(4)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Gamer számítógépek"
                    CategoryId.value = 4

                });
                
                break;
            case 'telefonok':
                termekService.getProducts(5)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Telefonok"
                    CategoryId.value = 5
                });
                
                break;
            case 'konzolok':
                termekService.getProducts(6)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Konzolok"
                    CategoryId.value = 6
                });

                break;
            default:

                break;
        }
    }

    function Save (ProductName, ProductPrice, ProductPicture, ProductDescription, ProductId){
        var new_data = [ProductName, ProductPrice, 1, ProductPicture, ProductDescription, ProductId];

        var old_data = store.getproductsInCart
        store.setProductsinCart([])
        for(let product in old_data)
        {
            if(old_data[product][0] == ProductName)
            {
                const index = product;
                const newDb = parseInt(old_data[index][2]) + 1;
                const newValue = parseInt(old_data[index][1]) + parseInt(store.getOnePrices[product]);
                old_data[index][2] = newDb;
                old_data[index][1] = newValue
                store.setProductsinCart(old_data)
                return
            }
        }
        old_data.push(new_data);
        store.setProductsinCart(old_data)
        store.setOnePrices([])

        datas = store.getproductsInCart
        for(let product in datas) 
        {
            if(datas[product][2] > 1) {
                OnePrice.push(datas[product][1]/datas[product][2])
            }
            else{
                OnePrice.push(datas[product][1])
            }

        }
        store.setOnePrices(OnePrice)

    }
    ProductShow();


    router.afterEach((to, from) => {
        pathname = window.location.pathname.split("/").slice(1)[1]
        ProductShow();
    });


</script>

<style lang="scss" scoped>


h3{
    margin-bottom: 2rem;
}

.ProductNameDiv{
    text-align: center;
}

.Price-{
    text-align: center;
    font-weight: bold;
}

h5{
    text-align: center;
}

.button-85{
    color: aliceblue;
    margin: auto;
    margin-top: 2rem;
}

li{
    list-style: none;
}

.minAndMax{
    width: 60px;
    font-size: small;
}

.productCards{
    text-align: center;
}

.NameSearchCard{
    padding: 10px;
}

</style>