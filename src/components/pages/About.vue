<template>
  <div class="container">
    <h2>About Us</h2>
    <div
      class="row my-2"
      data-aos="fade-left"
      data-aos-delay="800"
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
            in tempora.
          </p>
          <hr />
        </div>
      </div>
    </div>

    <div
      class="row my-2"
      data-aos="fade-left"
      data-aos-delay="800"
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
          <hr />
        </div>
      </div>
    </div>
    <div
      class="row my-2"
      data-aos="fade-left"
      data-aos-delay="800"
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
          <hr />
        </div>
      </div>
    </div>
    <div
      class="row my-2"
      data-aos="fade-right"
      data-aos-delay="500"
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
          <hr />
        </div>
      </div>
    </div>
    <div
      class="row my-2"
      data-aos="fade-left"
      data-aos-delay="800"
      data-aos-once="false"
    >
      <div class="col-md-2">
        <img src="../../assets/logo.png" />
      </div>
      <div class="col-md-10">
        <div class="box">
          <h3>UP comming Activetice</h3>
        </div>
        <div class="text">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dicta veritatis ab cupiditate consequatur quis modi harum at
            quos reiciendis, illum optio ipsam pariatur inventore nostrum nobis
            in tempora.
          </p>
          <hr />
        </div>
      </div>
    </div>
    <div
      class="row"
      data-aos="fade-right"
      data-aos-delay="900"
      data-aos-once="false"
    >
      <div class="col-md-12 mx-4">
        <div class="box2">
          <h3>Quality policy</h3>
        </div>
        <div class="text mx-2">
          <p class="wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et
            debitis pariatur dignissimos! Perferendis exercitationem ut tempora
            blanditiis nesciunt rerum, fugiat doloribus vel ad modi, odit libero
            porro dolore! Perferendis.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem et debitis pariatur dignissimos!
            Perferendis exercitationem ut tempora blanditiis nesciunt rerum,
            fugiat doloribus vel ad modi, odit libero porro dolore! Perferendis.
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
.container {
  width: 100%;
  height: 100%;
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
.col-md-2 img {
  width: 150px;
  height: 120px;
  padding: 20px;
  margin-top: -30px;
}
.col-md-10 {
  display: block;
  justify-content: center;
}
.box {
  position: relative;
  display: flex;
  justify-content: center;
  width: 150px;
  background: green;
  box-shadow: 5px 5px 5px grey;
}
.box2 {
  position: relative;
  width: 200px;
  background: green;
  box-shadow: 5px 5px 5px grey;
}
h3 {
  color: #fff;
  padding: 5px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
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
  .row {
    position: relative;
  }
  .col-md-2 {
    display: flex;
    justify-content: center;
  }
  .col-md-2 img {
    width: 150px;
    height: 120px;
    padding: 20px;
    margin-top: -30px;
  }
  .col-md-10 {
    position: relative;
  }
  .box {
    width: 150px;
    background: green;
    box-shadow: 5px 5px 5px grey;
    margin-left: 32%;
    margin-bottom: 10px;
  }
  .box2 {
    width: 200px;
    background: green;
    box-shadow: 5px 5px 5px grey;
    margin-left: 25%;
  }
  .text {
    display: flex;
    justify-content: center;
  }

  .box h3 {
    color: #fff;
    padding: 5px;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }
}
</style>