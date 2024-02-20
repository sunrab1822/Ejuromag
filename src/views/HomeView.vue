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
<vueper-slides autoplay>
  <vueper-slide :style="'background-color:lightblue'" v-for="i in 5" :key="i">
    <template #content>
      <div class="vueperslide__content-wrapper" style="flex-direction: row">
        <p>asd</p>
    </div>
    </template>
    </vueper-slide>
</vueper-slides>
</template>

<style scoped>


.button{
  display: inline-block;
  position: relative;
  margin: 100px 100px;
  transform: rotate(270deg);
  margin-top: 20px;
  padding-top: 10px;
  width: 120px;
  height: 50px;
  background-color: brown;
  text-align: center;
  color: white;
  line-height: 50px;
  transition: 0.5s ease;


  background-size: 0px;
    background-repeat: no-repeat;
    background-position: center;
}

.font{
    transform: rotate(180deg);
    vertical-align:text-bottom;
    margin: -10px;
    font-size: 16px;
    font-weight: bold;
}
.margin-transition:hover{
  height: 260px;
  width: 200px;
  background-size: 150px;

}

.Laptop{
    background-image: url('/laptop.png');
}
.Konzol{
    background-image: url('/game-console.png');

}
.Tablet{
    background-image: url('/tablet.png');

}

</style>
