<template>
  <div class="container">
    <h2>About Us</h2>
    <div class="row my-2">
      <div class="col-md-2">
        <img src="../../assets/logo.png" />
      </div>

      <div class="col-md-10">
        <div class="box">
          <h3>Company History</h3>
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

    <div class="row my-2">
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
    <div class="row my-2">
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
    <div class="row my-2">
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
        <div class="row my-2">
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
    <div class="row">
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
    <contact></contact>
  </div>
</template>
<script>
import Contact from "./Contact.vue";
export default {
  components: {
    Contact,
  },
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
.box {
  position: relative;
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
    display: flex;
    justify-content: center;
  }
  .col-md-2 {
    align-items: center;
    justify-content: center;
  }
  .col-md-2 img {
    width: 100px;
    height: 80px;
    margin-left: 32%;
  }
  .box {
    margin-left: 25%;
  }

  .box2 {
    margin-left: 30%;
  }
  .text p {
    text-align: center;
  }
}
</style>