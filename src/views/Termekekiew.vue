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
                <div v-for="i in 5" class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 col-lg-4">
                                <p>{{MintaTermekek[0][0]}}</p>
                            </div>

                            <div class="col-md-4 col-lg-4">
                                <p>{{MintaTermekek[0][1]}}</p>
                                <p>{{MintaTermekek[0][3]}}</p>
                                <p>{{MintaTermekek[0][4]}}</p>
                                <p>{{MintaTermekek[0][5]}}</p>
                                <p>{{MintaTermekek[0][6]}}</p>
                                <p>{{MintaTermekek[0][7]}}</p>
                                <p>{{MintaTermekek[0][8]}}</p>
                                <p>{{MintaTermekek[0][9]}}</p>
                                <p>{{MintaTermekek[0][10]}}</p>


                            </div>

                            <div class="col-md-4 col-lg-4">
                                <p>{{MintaTermekek[0][2]}}</p>
                                <router-link to="/Kosar" @click="Kuldes"><button>Vásárlás</button></router-link>
                                

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

    const store = useTermekStore()

    var pathname = window.location.pathname
    var MintaTermekek = [];
    var MintaLaptop = ["Laptop képe" ,"Laptop neve", "Laptop ar", "Laptop Gyártó", "Laptop Memória Tipus", "Laptop Memoria Méret", "Laptop Memória Sebesség",
                        "Laptop Processzor", "Laptop Integrált Videókártya (Igen vagy nem)", "Laptop Merevlemez Kapacitás",
                        "Laptop Operációs Rendszer" ]
    var MintaTablet = ["Tablet képe" ,"Tablet neve", "Tablet ar", "Tablet Gyártó" , "Tablet Képernyő átló", "Tablet Memoria Méret", "Tablet Processzor Sebesség",
                        "Tablet Processzor", "Tablet Kapacitás", "Tablet Operációs Rendszer", "Tablet Tömeg"]
    var MintaKonzol = ["Konzol képe","Konzol neve", "Konzol ar", "Konzol Gyártó" , "Konzol Processzor Sebesség","Konzol Processzor", "Konzol Kapacitás", "Konzol Tömeg"]
                    
    onBeforeMount(() => {
        MintaTermekek = [];
        console.log(MintaTermekek);
        switch (pathname){
            case '/laptopok':
                console.log("laptopok");
                MintaTermekek.push(MintaLaptop)
                console.log(MintaTermekek);

                break;
            case '/konzolok':
                console.log("konzolok");
                MintaTermekek.push(MintaKonzol)
                console.log(MintaTermekek);

                break;
            case '/tabletek':
                console.log("tabletek");
                MintaTermekek.push(MintaTablet)
                console.log(MintaTermekek);

                break;
            default:
                break;
        }
    })
    
    const Kuldes = () => {
        const adat = MintaTermekek[0][0]
        const adat2 = MintaTermekek[0][1]
        store.setTermekNev(adat, adat2)
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