<template>
  <div class="partners">
    <div class="container">
      <div class="row">
        <h2>Our partners</h2>
        <div class="col-md-12" style="width: 100%; height: 100%">
          <Carousel />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../../services/Carousel.vue";
export default {
  components: {
    Carousel,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.partners {
  margin-top: 150px;
}
.row {
  padding: 0;
  margin: 0;
  position: relative;
}
h2 {
  padding-top: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: rgb(45, 206, 131);
  text-transform: uppercase;
}

@media only screen and (max-width: 767px) {
  .partners {
    margin-top: 150px;
  }
  .row {
    padding: 0;
    margin: 0;
    position: relative;
  }
  h2 {
    margin-top: 150px;
    padding: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: rgb(45, 206, 131);
    text-transform: uppercase;
  }
}
</style>