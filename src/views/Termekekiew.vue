<template>
    <div class="container">
        <div v-for="i in 5" class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4 col-lg-4">
                        <p>{{MintaTermekek[0][0]}}</p>
                    </div>

                    <div class="col-md-4 col-lg-4">
                        <p v-for="termek in MintaTermekek[0]"></p>
                        <p>{{MintaTermekek[0][1]}}</p>
                        <p>{{MintaTermekek[0][3]}}</p>
                        <p>{{MintaTermekek[0][4]}}</p>
                        <p>{{MintaTermekek[0][5]}}</p>
                        <p>{{MintaTermekek[0][6]}}</p>
                        <p>{{MintaTermekek[0][7]}}</p>
                        <p>{{MintaTermekek[0][8]}}</p>
                        <p>{{MintaTermekek[0][9]}}</p>


                    </div>

                    <div class="col-md-4 col-lg-4">
                        <p>{{MintaTermekek[0][2]}}</p>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeMount} from 'vue'

    var pathname = window.location.pathname
    var MintaTermekek = [];
    var MintaLaptop = ["Laptop képe" ,"Laptop neve", "Laptop ar", "Laptop Memória Tipus", "Laptop Memoria Méret", "Laptop Memória Sebesség",
                        "Laptop Processzor", "Laptop Integrált Videókártya (Igen vagy nem)", "Laptop Merevlemez Kapacitás",
                        "Laptop Operációs Rendszer" ]
    var MintaTablet = ["Tablet képe" ,"Tablet neve", "Tablet ar", "Tablet Képernyő átló", "Tablet Memoria Méret", "Tablet Processzor Sebesség",
                        "Tablet Processzor", "Tablet Kapacitás", "Tablet Operációs Rendszer", "Tablet Tömeg"]
    var MintaKonzol = ["Konzol képe","Konzol neve", "Konzol ar", "Konzol Processzor Sebesség","Konzol Processzor", "Konzol Kapacitás", "Konzol Tömeg"]
                    
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
    

</script>

<style lang="scss" scoped>

.container{
    text-align: center;
}

</style>