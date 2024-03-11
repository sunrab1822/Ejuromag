<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3">
                <div class="card">
                    <div class="card-header">
                        <h5>Név:</h5>
                    </div>
                    <div class="card-body">
                        <div class="row kartyak ">
                            <div class="col-md-4 col-lg-4"><input  type="text" placeholder="Termék neve"></div>
                        </div>
                    </div>
                </div>

                <br>

                <div class="card">
                    <div class="card-header">
                        <h5>Ár:</h5>
                    </div>
                    <div class="card-body">
                        <div class="row kartyak ">
                            <div class="col-md-4 col-lg-4"><input class="minAndMax" type="text" placeholder="min"></div>
                            <div class="col-md-4 col-lg-4"><p style="font-weight: bolder;">-</p></div>
                            <div class="col-md-4 col-lg-4"><input class="minAndMax" type="text" placeholder="max"></div>
                        </div>
                    </div>
                </div>

                <br>

                <div class="card">
                    <div class="card-header">
                        <h5>Gyártó: </h5>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>
                                <label for=""><input type="checkbox" name="" id="" style="margin-right: 10px;"><span>Sony</span></label>
                            </li>
                            <li>
                                <label for=""><input type="checkbox" name="" id="" style="margin-right: 10px;"><span>Nintendo</span></label>

                            </li>
                            <li>
                                <label for=""><input type="checkbox" name="" id="" style="margin-right: 10px;"><span>Microsoft</span></label>
                            </li>
                        </ul>

                    </div>
                    

                </div>
            </div>

            <div class="col-md-9 col-lg-9 kartyak">
                <div v-for="termek in MintaTermekek" class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 col-lg-4">
                                <p>{{termek.name}}</p>
                            </div>

                            <div class="col-md-4 col-lg-4">
                                <p>{{termek.description}}</p>
                                <!-- <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p>
                                <p>{{termek}}</p> -->


                            </div>

                            <div class="col-md-4 col-lg-4">
                                <p>{{termek.price}} Ft</p>
                                <router-link to="/Kosar" @click="Save(termek.name, termek.price)"><button>Vásárlás</button></router-link>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeMount} from 'vue'
    import { useTermekStore } from "../store/store"
    import termekService from "../services/termekService"

    const store = useTermekStore()

    function Save (data1, data2){
        console.log(data1);
        console.log(data2);
        var new_data = [data1, data2, 1];

        if(localStorage.getItem('data') == null)
        {
            localStorage.setItem('data', '[]');
        }

        var old_data = JSON.parse(localStorage.getItem("data"))
        for(let termek in old_data)
        {
            if(old_data[termek][0] == data1)
            {
                const index = termek;
                const newValue = parseInt(old_data[index][2]) + 1;
                old_data[index][2] = newValue;
                localStorage.setItem('data', JSON.stringify(old_data))
                return
            }
        }
        old_data.push(new_data);
        localStorage.setItem('data', JSON.stringify(old_data))
        console.log(old_data);

    }

    var pathname = window.location.pathname
    var MintaTermekek = ref();

    switch (pathname){
            case '/laptopok':
                console.log("laptopok");
                termekService.getTermek(1)
                .then(resp => {
                    MintaTermekek.value = resp.data[0].product;
                    console.log(resp.data[0].product);
                });
                console.log(MintaTermekek);

                break;
            case '/konzolok':
                console.log("konzolok");
                termekService.getTermek(3)
                .then(resp => {
                    MintaTermekek.value = resp.data[0].product;
                    console.log(resp.data[0].product);
                });

                break;
            case '/tabletek':
                console.log("tabletek");
                termekService.getTermek(2)
                .then(resp => {
                    MintaTermekek.value = resp.data[0].product;
                    console.log(resp.data[0].product);
                });

                break;
            default:
                break;
        }

    
    const Kuldes = () => {
        const adat = MintaTermekek.value
        console.log(termek.id);

        // store.setKosar(adat, adat2)
    }
</script>

<style lang="scss" scoped>

li{
    list-style: none;
}

.minAndMax{
    width: 60px;
    font-size: small;
}

.kartyak{
    text-align: center;
}

</style>