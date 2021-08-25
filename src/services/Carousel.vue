<template>
  <Carousel :items-to-show="3" :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in products" :key="slide.id">
       
      <div class="card">
        <router-link :to="slide.url">
        <img :src="slide.img" />
        </router-link>
        <p>{{ slide.title }}</p>
      </div>
       
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Enzymes",
          img: "https://i.postimg.cc/pXbjhct3/en.jpg",
          url: "",
        },
        {
          id: 2,
          title: "Essensial Oil",
          img: "https://i.postimg.cc/KjnRDFyw/en2.jpg",
          url: "",
        },
        {
          id: 3,
          title: "Feed Sanitizer",
          img: "https://i.postimg.cc/pXbjhct3/en.jpg",
          url: "",
        },
        {
          id: 4,
          title: "Probiotic",
          img: "https://i.postimg.cc/KjnRDFyw/en2.jpg",
          url: "",
        },
         {
          id: 5,
          title: "Organic Minarels",
          img: "https://i.postimg.cc/pXbjhct3/en.jpg",
          url: "",
        },

      ],
    };
  },

  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>
<style scoped>
.card {
  width: 300px;
  height: 250px;
  padding: 0;
  background: #fff;
  border: 2px solid green;
}
.card img{
  width: 100%;
  height: 220px;
  background-position: center;
}
.card p{
  height:30px;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  color:#000;
  text-align: center;

  z-index: 1;
  text-transform: uppercase;
}

@media only screen and (max-width: 767px) {
  .card {
  width: 100%;
  height: 100px;
  padding: 0;
  background: #fff;
}
.card img{
  width: 100%;
  height: 100%;
  background-position: center;
}
.card p{
  font-size: 1rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color:#fff;
  text-align: center;
  margin-top: -20%;
  z-index: 1;
  text-transform: uppercase;
}

}
</style>