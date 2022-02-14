<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <h3>According to our client's requirments, we provide local market analysis. Our team has extensive knowledge about Bangladesh market.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
    window.scrollTo(0, 0);
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Oswald&family=Roboto+Slab:wght@300&display=swap");
.row {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 130px;
}
.row .col-md-12 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-12 .box {
  background: rgb(24, 192, 214);
  padding: 10px;
  margin: 10px;
  box-shadow: 2px 2px 5px #12c3f3;
}
.box h3 {
  font-size: 1.4rem;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  color: #fff;
  text-align: center;
  padding: 40px;
}

@media only screen and (max-width: 436px) {
  .row {
  widows: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 130px;
}
.row .col-md-12 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-12 .box {
  background: rgb(24, 192, 214);
  padding: 10px;
  margin: 10px;
  box-shadow: 2px 2px 5px #12c3f3;
  width:100%;
}
.box h3 {
  font-size: 1.4rem;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  color: #fff;
  text-align: center;
  padding: 10px;
}
}
</style>