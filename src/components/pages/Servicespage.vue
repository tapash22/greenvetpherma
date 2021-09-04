<template>
  <div class="servicespage">
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
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Technology Analysis",
          icon: "fa fa-cc-discover",
          url: "",
          des: "technology review and assessment, target disease applications, and manufacturing feasibility ",
        },
        {
          id: 2,
          title: "Business Development",
          icon: "fa fa-briefcase",
          url: "",
          des: "licensing strategy, negotiations, due diligence, contract guidance, and financial modeling",
        },
        {
          id: 3,
          title: "Market Analysis",
          icon: "fa fa-map-marker",
          url: "",
          des: "market research, attribute mapping, price elasticity analysis, and market forecasting",
        },
        {
          id: 4,
          title: "Regulatory Guidance",
          icon: "fa fa-quora",
          url: "",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 5,
          title: "Products",
          icon: "fa fa-product-hunt",
          url: "",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 6,
          title: "Vet-Clinic",
          icon: "fa fa-hospital-o",
          url: "",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 7,
          title: "E-Magazine",
          icon: "fa fa-book",
          url: "",
          des: "guidance for veterinary biologics, vaccinces, drugs, devices, nutritionals, and diagnostics",
        },
        {
          id: 8,
          title: "communications",
          icon: "fa fa-handshake-o",
          url: "",
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
  margin-top: 100px;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
 
  text-transform: uppercase;
}
.row {
  justify-content: center;
  align-items: center;
}
.col-md-3 {
  justify-content: center;
  width: 300px;
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
}
.box i{
  font-size: 3.5rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
}


@media only screen and (max-width: 767px) {
  h2 {
    margin-top: 190px;
    padding: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: rgb(45, 206, 131);
    text-transform: uppercase;
  }
  .col-md-4 {
    margin-left: 10%;
  }
}
</style>