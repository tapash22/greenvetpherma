<template>
  <div class="container">
    <h2>About Us</h2>
    <div class="row my-2">
      <div class="col-md-12">
        <div class="text">
          <p class="wrap">
            We introduce ourselves as eminent suppliers of premium quality range
            of cattle, poultry, aqua and pet animels products as medicines and
            feed supplements. We also provide Communications, Business Development, Technology Analysis, Market Analysis and Regulatory
            Guidance
          </p>
        </div>
      </div>
    </div>

    <div
      class="row my-2"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-once="false"
    >
      <div class="col-md-2">
        <img src="../../assets/image/v.png" />
      </div>

      <div class="col-md-10">
        <div class="text">
          <p class="wrap">
            Our vision is to be a leading service provider company by providing
            high quality & affordable medicine for healthier lives.We visualize
            ourselves to be a highly respected pharma marketing company to grow
            by innovating technologies updating know how and maintaining highly
            ethical standards in business operation ensuring benefit to society
            at large.Our purpose is to provide affordable and innovative
            services at affordable price.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Oswald&family=Roboto+Slab:wght@300&display=swap");

h2 {
  margin-top: 120px;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.row {
  padding: 10px;
  margin: 10px;
  width: 100%;
  background: #fff;
  display: flex;
}
.row .col-md-12 {
  box-shadow: 0 0 10px rgba(0, 128, 0, 0.644);
}
.row .col-md-12 .text .wrap {
  padding: 30px;
  margin: 5px;
  text-align: justify;
  font-size: 1.3rem;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
}
.col-md-2 {
  width: 30%;
  height: 100%;
  padding: 10px;
}
.col-md-2 img {
  width: 350px;
  height: 300px;
  padding: 10px;
}
.col-md-10 {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 70%;
  display: flex;
}
.col-md-10 .text {
  height: 100%;
  width: 100%;
  padding: 10px;
  margin: 5px;
}
.text .wrap {
  font-size: 1.2;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  letter-spacing: 1px;
  padding: 10px;
  margin: 5px;
  text-align: justify;
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
}
</style>