<template>
  <Carousel :items-to-show="3" :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in products" :key="slide.id">
      <router-link :to="slide.url">
        <div class="card">
          <i :class="slide.icon" />
          <p>{{ slide.title }}</p>
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
          icon: "fa fa-cc-discover",
          url: "/demo",
          des: "technology review and assessment, target disease applications, and manufacturing feasibility ",
        },
        {
          id: 2,
          title: "Business Development",
          icon: "fa fa-briefcase",
          url: "/demo",
          des: "licensing strategy, negotiations, due diligence, contract guidance, and financial modeling",
        },
        {
          id: 3,
          title: "Market Analysis",
          icon: "fa fa-map-marker",
          url: "/demo",
          des: "market research, attribute mapping, price elasticity analysis, and market forecasting",
        },
        {
          id: 4,
          title: "Regulatory Guidance",
          icon: "fa fa-quora",
          url: "/demo",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 5,
          title: "Products",
          icon: "fa fa-product-hunt",
          url: "/demo",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 6,
          title: "Vet-Clinic",
          icon: "fa fa-hospital-o",
          url: "/demo",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 7,
          title: "E-Magazine",
          icon: "fa fa-book",
          url: "/demo",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 8,
          title: "communications",
          icon: "fa fa-handshake-o",
          url: "/demo",
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
a{
  text-decoration: none;
}
.card {
  width: 300px;
  height: 200px;
  padding: 20px;
  margin: 0;
  cursor: pointer;
  background: rgb(44, 186, 252);
}
.card i {
  margin-top: 30px;
  font-size: 4rem;
  font-weight: 900;
  color: rgb(3, 112, 3);
}
.card p {
  font-size: 1.1rem;
  font-weight: 900;
  color: #fff;
  padding: 10px;
  text-transform: uppercase;
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