<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
  components: { VueperSlides, VueperSlide },
  data() {
        return {
            slides: [
                {
<<<<<<< HEAD
                    image: "/ejuromag/vueperSlides1.webp",
                    link: 'http://bgs.jedlik.eu/ejuromag/help/Rolunk'
                },
                {
                    image: "/ejuromag/vueperSlides2.webp",
                    link: 'http://bgs.jedlik.eu/ejuromag/login'
=======
                    image: "/vueperSlides1.webp",
                    link: 'http://localhost:5173/help/Rolunk'
                },
                {
                    image: "/vueperSlides2.webp",
                    link: 'http://localhost:5173/login'
>>>>>>> parent of 82768b6 (localhost átírva)
                },
                {

                    image: "/ejuromag/vueperSlides3.webp",
                },
                {
                    image: "/ejuromag/vueperSlides4.webp",
                },
            ]
        }
    }
}




</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-2 col-md-2 " >
                <router-link to="/laptopok">
                    <div data-cy="LaptopButton" class="button margin-transition laptopPng">
                        <p class="font">Laptopok</p>
                    </div>
                </router-link>
            </div>

            <div class="col-lg-2 col-md-2 " >
                <router-link to="/gamer_szamitogepek">
                    <div data-cy="GamerPcButton" class="button margin-transition gamerpcPng">
                        <p class="font">Gamer Számitógépek</p>
                    </div>
                </router-link>
            </div>

            <div class="col-lg-2 col-md-2 " >
                <router-link to="/irodai_szamitogepek">
                    <div data-cy="OfficePcButton" class="button margin-transition officepcPng">
                        <p class="font">Irodai Számítógépek</p>
                    </div>
                </router-link>
            </div>


            <div class="col-lg-2 col-md-2 ">
                <router-link to="/konzolok">
                    <div data-cy="ConsoleButton" class="button margin-transition consolePng">
                        <p class="font">Konzolok</p>
                    </div>
                </router-link>
            </div>

            <div class="col-lg-2 col-md-2 ">
                <router-link to="/telefonok">
                    <div data-cy="PhoneButton" class="button margin-transition phonePng">
                        <p class="font">Telefonok</p>
                    </div>
                </router-link>
            </div>

            <div class="col-lg-2 col-md-2 ">
                <router-link to="/tabletek">
                    <div data-cy="TabletButton" class="button margin-transition tabletPng">
                        <p class="font">Tabletek</p>
                    </div>
                </router-link>
            </div>

        </div>
    </div>
<vueper-slides id="vueper-slides" autoplay>
    <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
    :title="slide.title"
    :content="slide.content"
    :link="slide.link" />
</vueper-slides>
</template>

<style scoped>

#vueper-slides{
    margin: 1rem;
}

.vueperslide__title, .vueperslide__content{
    font-weight: bold;
    color: black;
    text-decoration: none;
}

</style>
