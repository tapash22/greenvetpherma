<template>
  <div class="servicespage">
    <div class="container">
      <h2>Our Services</h2>
      <div
        class="row"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-once="false"
      >
        <div
          class="col-md-3 my-2"
          v-for="(pdc, index) in products"
          :key="pdc.id"
          :index="index"
        >
          <router-link :to="pdc.url">
            <div class="box">
              <i :class="pdc.icon" />
              <h3>{{ pdc.title }}</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: " Veterinary Products",
          icon: "fa fa-product-hunt",
          url: "/products",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 2,
          title: "Vet-Clinic",
          icon: "fa fa-hospital-o",
          url: "/vetclinic",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 3,
          title: "E-Magazine",
          icon: "fa fa-book",
          url: "/emagazine",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 4,
          title: "communications",
          icon: "fa fa-handshake-o",
          url: "/communications",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 5,
          title: "Business Development",
          icon: "fa fa-briefcase",
          url: "/emagazine",
          des: "licensing strategy, negotiations, due diligence, contract guidance, and financial modeling",
        },
        {
          id: 6,
          title: "Technology Analysis",
          icon: "fa fa-cc-discover",
          url: "/technology",
          des: "technology review and assessment, target disease applications, and manufacturing feasibility ",
        },

        {
          id: 7,
          title: "Market Analysis",
          icon: "fa fa-line-chart",
          url: "/marketanalysis",
          des: "market research, attribute mapping, price elasticity analysis, and market forecasting",
        },
        {
          id: 8,
          title: "Regulatory Guidance",
          icon: "fa fa-bandcamp",
          url: "/regulatory",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
h2 {
  margin-top: 130px;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;

  text-transform: uppercase;
}
.row {
  justify-content: center;
  align-items: center;
  width: 100%;
}
.col-md-3 {
  justify-content: center;
  width: 24%;
  height: 220px;
}
.col-md-3 a {
  text-decoration: none;
  color: #000;
}
.box {
  background: #fff;
  width: 250px;
  height: 200px;
  margin: 5px 10px;
  transform: scale(1);
  transition: 0.3s transform ease-out;
}
.box:hover{
    transform: scale(1.04);
  transition: 0.4s transform ease-out;
}
.box i {
  font-size: 3.5rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  color: green;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
}

@media only screen and (max-width: 436px) {
h2 {
  margin-top: 130px;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;

  text-transform: uppercase;
}
.row {
  justify-content: center;
  align-items: center;
  widows: 100%;
}
.col-md-3 {
  justify-content: center;
  width: 100%;
  height: 220px;
}
.col-md-3 a {
  text-decoration: none;
  color: #000;
}
.box {
  background: #fff;
  width: 100%;
  height: 200px;
  margin: 5px 10px;
  transform: scale(1);
  transition: 0.3s transform ease-out;
}
.box:hover{
    transform: scale(1.04);
  transition: 0.4s transform ease-out;
}
.box i {
  font-size: 3.5rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  color: green;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
}
}
</style>