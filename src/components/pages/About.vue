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
        <img src="../../assets/image/h.png" />
      </div>

      <div class="col-md-10">
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
        <img src="../../assets/image/m.png" />
      </div>

      <div class="col-md-10">
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
        <transition name="img">
          <img src="../../assets/image/v.png" />
        </transition>
      </div>
      <div class="col-md-10">
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
      data-aos-delay="300"
      data-aos-once="false"
    >
      <div class="col-md-2">
        <img src="../../assets/image/a.png" />
      </div>
      <div class="col-md-10">
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
      data-aos-delay="300"
      data-aos-once="false"
    >
      <div class="col-md-2">
        <img src="../../assets/image/u.png" />
      </div>
      <div class="col-md-10">
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
.col-md-2 {
  width: 30%;
  height: 100%;
  padding: 10px;
}
.col-md-2 img {
  width: 300px;
  height: 200px;
  padding: 10px;
}
.col-md-10 {
  padding: 10px;
  height: 100%;
  width: 70%;
  display: flex;
}
.text {
  height: 100%;
  width: 100%;
  padding: 10px;
  margin: 10px;
}
.text .wrap {
  font-size: 1.2;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  letter-spacing: 1px;
  padding: 10px;
  margin: 10px;
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