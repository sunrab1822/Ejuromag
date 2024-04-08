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
                        <div class="col-md-4 col-lg-4 col-sm-4 ProductNameDiv"><input type="text" placeholder="Termék neve"></div>
                    </div>
                </div>

                <br>

                <div class="card button-85">
                    <div class="card-header">
                        <h5>Ár:</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <input pattern="\d*" class="inputs" type="text" maxlength="10" name="" id="minPrice" placeholder="Min ár">
                            <span class="Price-">-</span>
                            <input pattern="\d*" class="inputs" type="text" maxlength="10" name="" id="maxPrice" placeholder="Max ár">
                        </div>
                    </div>
                </div>

                <br>

                <div class="card button-85">
                    <div class="card-header">
                        <h5>Gyártó: </h5>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-for="manu in Manufacturers">
                                
                                <div class="flex align-items-center">
                                    <RadioButton v-model="ingredient" inputId="manufacturerId" name="manufacturer" :value=manu.name />
                                    <label for="manufacturerId" class="ml-2">{{manu.name}}</label>
                                </div>
                            </li>

                        </ul>

                    </div>
                    

                </div>
            </div>

            <div class="col-md-8 col-lg-9 col-sm-8 productCards">
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
                                <!-- <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p> -->


                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <h3>{{product.price}} Ft</h3>
                                <router-link to="/Kosar" @click="Save(product.name, product.price, product.picture, product.description)"><button class="button-33">Vásárlás</button></router-link>
                                

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
    import {ref} from "vue";

    import termekService from "../services/termekService"

    const ingredient = ref('');
    let egyAra = []
    let adatok = []
    var pathname = window.location.pathname
    var Products = ref();
    var Manufacturers = ref();
    const siteName = ref("")
    const egy = JSON.parse(localStorage.getItem('EgyArak'))

    termekService.getManufacturers()
    .then(resp => {
        Manufacturers.value = resp.data;
        console.log(resp.data);
    });

    function Save (ProductName, ProductPrice, ProductPicture, ProductDescription){
        var new_data = [ProductName, ProductPrice, 1, ProductPicture, ProductDescription];

        if(localStorage.getItem('data') == null)
        {
            localStorage.setItem('data', '[]');
        }

        var old_data = JSON.parse(localStorage.getItem("data"))
        for(let product in old_data)
        {
            if(old_data[product][0] == ProductName)
            {
                const index = product;
                const newDb = parseInt(old_data[index][2]) + 1;
                const newValue = parseInt(old_data[index][1]) + parseInt(egy[product]);
                old_data[index][2] = newDb;
                old_data[index][1] = newValue
                console.log(old_data[index][2]);
                console.log(old_data[index][1]);
                localStorage.setItem('data', JSON.stringify(old_data))
                return
            }
        }
        old_data.push(new_data);
        localStorage.setItem('data', JSON.stringify(old_data))
        console.log(old_data);

        adatok = JSON.parse(localStorage.getItem('data'))
        for(let product in adatok) 
        {
            
            egyAra.push(adatok[product][1])
            console.log(egyAra);

        }
        localStorage.setItem('EgyArak', '[]');
        localStorage.setItem('EgyArak', JSON.stringify(egyAra));
        console.log(JSON.parse(localStorage.getItem('EgyArak')));

    }
    switch (pathname){
            case '/laptopok':
                termekService.getProducts(1)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Laptopok"
                });
                break;
            case '/tabletek':
                termekService.getProducts(2)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Tabletek"
                });

                break;
            case '/irodai_szamitogepek':
                termekService.getProducts(3)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Irodai számítógépek"
                });
                
                break;
            case '/gamer_szamitogepek':
                termekService.getProducts(4)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Gamer számítógépek"
                });
                
                break;
            case '/telefonok':
                termekService.getProducts(5)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Telefonok"
                });
                
                break;
            case '/konzolok':
                termekService.getProducts(6)
                .then(resp => {
                    Products.value = resp.data[0].product;
                    siteName.value = "Konzolok"
                });

                break;
            default:

                break;
        }



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