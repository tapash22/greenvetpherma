<template>
  <div class="container">
    <h2>About Us</h2>
    <div
      class="row my-2"
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-once="false"
    >
      <div class="col-md-2">
        <img src="../../assets/logo.png" />
      </div>

      <div class="col-md-10">
        <div class="box">
          <h3>History</h3>
        </div>
        <div class="text">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dicta veritatis ab cupiditate consequatur quis modi harum at
            quos reiciendis, illum optio ipsam pariatur inventore nostrum nobis
            in tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius ratione dicta veritatis ab cupiditate consequatur quis modi
            harum at quos reiciendis, illum optio ipsam pariatur inventore
            nostrum nobis in tempora.
          </p>
        </div>
      </div>
    </div>

    <div
      class="row my-2"
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-once="false"
    >
      <div class="col-md-2">
        <img src="../../assets/logo.png" />
      </div>

      <div class="col-md-10">
        <div class="box">
          <h3>Mission</h3>
        </div>
        <div class="text">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dicta veritatis ab cupiditate consequatur quis modi harum at
            quos reiciendis, illum optio ipsam pariatur inventore nostrum nobis
            in tempora.
          </p>
        </div>
      </div>
    </div>
    <div
      class="row my-2"
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-once="false"
    >
      <div class="col-md-2">
        <transition name="img">
          <img src="../../assets/logo.png" />
        </transition>
      </div>
      <div class="col-md-10">
        <div class="box">
          <transition name="txt">
            <h3>Vission</h3>
          </transition>
        </div>
        <div class="text">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dicta veritatis ab cupiditate consequatur quis modi harum at
            quos reiciendis, illum optio ipsam pariatur inventore nostrum nobis
            in tempora.
          </p>
        </div>
      </div>
    </div>
    <div
      class="row my-2"
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-once="false"
    >
      <div class="col-md-2">
        <img src="../../assets/logo.png" />
      </div>
      <div class="col-md-10">
        <div class="box">
          <h3>Activetice</h3>
        </div>
        <div class="text">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dicta veritatis ab cupiditate consequatur quis modi harum at
            quos reiciendis, illum optio ipsam pariatur inventore nostrum nobis
            in tempora.
          </p>
        </div>
      </div>
    </div>
    <div
      class="row my-2"
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-once="false"
    >
      <div class="col-md-2">
        <img src="../../assets/logo.png" />
      </div>
      <div class="col-md-10">
        <div class="box">
          <h3>UP comming</h3>
        </div>
        <div class="text">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dicta veritatis ab cupiditate consequatur quis modi harum at
            quos reiciendis, illum optio ipsam pariatur inventore nostrum nobis
            in tempora.
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
h2 {
  margin-top: 100px;
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
.col-md-2 {
  width: 20%;
  height: 100%;
  padding: 10px;
}
.col-md-2 img {
  width: 200px;
  height: 150px;
  padding: 10px;
}
.col-md-10 {
  padding: 10px;
  height: 100%;
  width: 80%;
  display: flex;
}
.box {
  width: 30%;
  padding: 0;
  margin-top: 5%;
  margin-bottom: 10%;
  background: rgb(236, 233, 233);
}
.box h3 {
  font-size: 2rem;
  font-weight: 700;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.text {
  height: 100%;
  width: 70%;
  padding: 10px;
}
.text .wrap {
  font-size: 1.2;
  font-weight: 400;
  padding: 5px;
  text-align: left;
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