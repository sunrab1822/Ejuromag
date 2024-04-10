<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
  components: { VueperSlides, VueperSlide },
  data() {
        return {
            slides: [
                {
                    image: "/public/vueperSlides1.webp",
                    link: 'http://localhost:5173/help/Rolunk'
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    image: "asd",
                    link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    image: "asd",
                    link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
                },
                {
                    title: 'El Teide Volcano, Spain',
                    content: 'Photo by Max Rive',
                    image: "asd",
                    link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
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
                <a  href="/laptopok">
                    <div class="button margin-transition laptopPng">
                        <p class="font">Laptopok</p>
                    </div>
                </a>
            </div>

            <div class="col-lg-2 col-md-2 " >
                <a href="/gamer_szamitogepek">
                    <div class="button margin-transition gamerpcPng">
                        <p class="font">Gamer Számitógépek</p>
                    </div>
                </a>
            </div>

            <div class="col-lg-2 col-md-2 " >
                <a href="/irodai_szamitogepek">
                    <div class="button margin-transition officepcPng">
                        <p class="font">Irodai Számítógépek</p>
                    </div>
                </a>
            </div>


            <div class="col-lg-2 col-md-2 ">
                <a href="/konzolok">
                    <div class="button margin-transition consolePng">
                        <p class="font">Konzolok</p>
                    </div>
                </a>
            </div>

            <div class="col-lg-2 col-md-2 ">
                <a href="/telefonok">
                    <div class="button margin-transition phonePng">
                        <p class="font">Telefonok</p>
                    </div>
                </a>
            </div>

            <div class="col-lg-2 col-md-2 ">
                <a href="/tabletek">
                    <div class="button margin-transition tabletPng">
                        <p class="font">Tabletek</p>
                    </div>
                </a>
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

</style>
