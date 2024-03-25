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
                            <li>
                                
                                <div class="flex align-items-center">
                                    <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                                    <label for="ingredient1" class="ml-2">Sony</label>
                                </div>
                            </li>
                            <li>
                                <div class="flex align-items-center">
                                    <RadioButton v-model="ingredient" inputId="ingredient1" name="asd" value="asd" />
                                    <label for="ingredient1" class="ml-2">Microsoft</label>
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
                                <p>{{product.picture}}</p>
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
                                <p>{{product.price}} Ft</p>
                                <router-link to="/Kosar" @click="Save(product.name, product.price)"><button class="button-33">Vásárlás</button></router-link>
                                

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
    const siteName = ref("")
    const egy = JSON.parse(localStorage.getItem('EgyArak'))


    function Save (data1, data2){
        console.log(data1);
        console.log(data2);
        var new_data = [data1, data2, 1];

        if(localStorage.getItem('data') == null)
        {
            localStorage.setItem('data', '[]');
        }

        var old_data = JSON.parse(localStorage.getItem("data"))
        for(let product in old_data)
        {
            if(old_data[product][0] == data1)
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

    
    const Kuldes = () => {
        const adat = Products.value
        console.log(termek.id);

        // store.setKosar(adat, adat2)
    }



</script>

<style lang="scss" scoped>
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