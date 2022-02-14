<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <img src="../../assets/image/comming.png" />
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
  padding: 5px;
  margin: 10px;
  box-shadow: 2px 2px 5px #12c3f3;
  display: flex;
  justify-content: center;
}
.col-md-12 .box img {
  width: 100%;
  height: 100%;
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
  padding: 5px;
  margin: 10px;
  box-shadow: 2px 2px 5px #12c3f3;
  display: flex;
  justify-content: center;
  width: 100%;
}
.col-md-12 .box img {
  width: 100%;
  height: 100%;
}
}
</style>