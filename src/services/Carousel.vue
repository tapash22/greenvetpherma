<template>
  <Carousel :items-to-show="3" :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in products" :key="slide.id">
      <router-link :to="slide.url">
        <div class="card">
          <div class="image">
            <img :src="slide.img"/>
          </div>
          <p>{{ slide.id }}</p>
        </div>
      </router-link>
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
          title: "Technology Analysis",
          img: require('../assets/image1/technology analysis.jpg'),
          url: "/technology",
          des: "technology review and assessment, target disease applications, and manufacturing feasibility ",
        },
        {
          id: 2,
          title: "Business Development",
          img: require('../assets/image1/business development.jpg'),
          url: "/emagazine",
          des: "licensing strategy, negotiations, due diligence, contract guidance, and financial modeling",
        },
        {
          id: 3,
          title: "Market Analysis",
          img: require('../assets/image1/Market analysis.jpg'),
          url: "/marketanalysis",
          des: "market research, attribute mapping, price elasticity analysis, and market forecasting",
        },
        {
          id: 4,
          title: "Regulatory Guidance",
          img: require('../assets/image1/Regulatory Guidance.jpg'),
          url: "/emagazine",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 5,
          title: "Veterinary Products",
          img: require('../assets/image1/Veterinary Products.jpg'),
          url: "/products",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 6,
          title: "Vet-Clinic",
          img: require('../assets/image1/Vet Clinic.jpg'),
          url: "/vetclinic",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 7,
          title: "E-Magazine",
          img: require('../assets/image1/E Magazine.jpg'),
          url: "/emagazine",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 8,
          title: "communications",
          img: require('../assets/image1/communication.jpg'),
          url: "/communications",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
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
a {
  text-decoration: none;
}
.card {
  width: 300px;
  height: 300px;
  padding: 5px;
  margin: 0;
  cursor: pointer;
  border-radius: 5px;
  background: #fff;
  border: none;
  display: block;
}
/* .card i {
  margin-top: 30px;
  font-size: 4rem;
  font-weight: 900;
  color: #000;
} */
.card .image{
  width: 100%;
  height: 90%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.card .image img{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.card p {
  width: 100%;
  height: 10%;
  font-size: 1.3rem;
  font-weight: 500;
  color: #000;
  padding: 5px;
  margin: 0;
}

@media only screen and (max-width: 767px) {
  .card {
    width: 100%;
    height: 100px;
    padding: 0;
    background: #fff;
  }
  .card img {
    width: 100%;
    height: 100%;
    background-position: center;
  }
  .card p {
    font-size: 1rem;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
    color: #fff;
    text-align: center;
    margin-top: -20%;
    z-index: 1;
    text-transform: uppercase;
  }
}
</style>