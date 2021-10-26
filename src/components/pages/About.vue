<template>
  <div class="container">
    <h2>About Us</h2>
    <div
      class="row my-2"
      data-aos="fade-up"
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
      data-aos="fade-up"
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
      data-aos-delay="300"
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
      data-aos-delay="200"
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
      class="row my-3"
      data-aos="fade-left"
      data-aos-delay="100"
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
  padding: 0;
  margin: 10px;
  width: 100%;
  height: 200px;
  background: #fff;
  display: flex;
}
.col-md-2 {
  width: 20%;
  height: 100%;
  padding: 20px;
}
.col-md-2 img {
  width: 200px;
  height: 160px;
  padding: 20px;
}
.col-md-10 {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 80%;
  display: flex;
}
.box {
  width: 30%;
  padding: 0;
  margin: 0;
  background: rgb(255, 255, 255);
}
.box h3 {
  font-size: 2rem;
  font-weight: 700;
  padding: 10px;
  margin-top: 27%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 10px;
  background: rgb(44, 186, 252);
  color: #fff;
}
.text {
  height: 100%;
  width: 70%;
  padding: 10px;
}
.text .wrap {
  font-size: 1.2;
  font-weight: 500;
  padding: 20px;
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