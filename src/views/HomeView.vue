<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide }
}

const slides = [
  {
    title: 'Slide #1',
    content: 'Slide 1 content.'
  },
  {
    title: 'Slide #2',
    content: 'Slide 2 content.'
  }
]
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 " >
                <a href="/laptopok">
                    <div class="button margin-transition Laptop">
                        <p class="font">Laptopok</p>
                    </div>
                </a>
            </div>


            <div class="col-lg-4 col-md-4 ">
                <a href="/konzolok">
                    <div class="button margin-transition Konzol">
                        <p class="font">Konzolok</p>
                    </div>
                </a>
            </div>

            <div class="col-lg-4 col-md-4 ">
                <a href="/tabletek">
                    <div class="button margin-transition Tablet">
                        <p class="font">Tabletek</p>
                    </div>
                </a>
            </div>

        </div>
    </div>
<vueper-slides id="vueper-slides" autoplay>
  <vueper-slide :style="'background-color:green'" v-for="i in 5" :key="i">
    <template #content>
      <div class="vueperslide__content-wrapper" style="flex-direction: row">
        <p>asd</p>
    </div>
    </template>
    </vueper-slide>
</vueper-slides>
</template>

<style scoped>


</style>
