<template>
  <div class="home">
    <Slider />
    <div class="row">
      <div class="col-md-12 text">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rem
          recusandae beatae nostrum, fuga provident similique vel temporibus
          aliquam? Corrupti, sit asperiores."
        </p>
      </div>
    </div>
    <div class="container">
      <h2>Our Products</h2>
      <div
        class="row concern"
        data-aos="fade-right"
        data-aos-delay="800"
        data-aos-once="false"
      >
        <div class="col-md-4">
          <a href="/poultry">
            <div class="card">
              <div class="card-h">
                <p class="com">Poultry</p>
              </div>
              <div class="card-body">
                <img src="../../assets/image/sample.jpg" />
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/ruminent">
            <div class="card">
              <div class="card-h">
                <p class="com">Ruminent</p>
              </div>
              <div class="card-body">
                <img src="../../assets/image/sample.jpg" />
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/aqua">
            <div class="card">
              <div class="card-h">
                <p class="com">AQua</p>
              </div>
              <div class="card-body">
                <img src="../../assets/image/sample.jpg" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        class="row concern"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-once="false"
      >
        <div class="col-md-4">
          <a href="/petanimal">
            <div class="card">
              <div class="card-h">
                <p class="com">Pet-Animal</p>
              </div>
              <div class="card-body">
                <img src="../../assets/image/sample.jpg" />
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/vetClinic">
            <div class="card">
              <div class="card-h">
                <p class="com">Vet Clinic</p>
              </div>
              <div class="card-body">
                <img src="../../assets/image/sample.jpg" />
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="/others">
            <div class="card">
              <div class="card-h">
                <p class="com">Others</p>
              </div>
              <div class="card-body">
                <img src="../../assets/image/sample.jpg" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../services/Slider.vue";

export default {
  components: {
    Slider,
  },
};
</script>

<style scoped>
.home {
  margin-top: 150px;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.text {
  padding: 20px;
  box-shadow: 2px 2px 5px green;
  z-index: 1;
  background: #fff;
  opacity: 0.8;
}
.text p {
  display: flex;
  text-align: center;
  padding: 10px;
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
}
.container {
  width: 100%;
  height: 100%;
}
.container h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  padding-top: 10px;
  text-transform: uppercase;
}
.concern {
  position: relative;
  width: 100%;
  padding: 30px;
}
.concern a {
  text-decoration: none;
}
.concern .card {
  width: 250px;
  height: 250px;
  box-shadow: 2px 2px 10px blue;
}
.card-h {
  width: 105%;
  height: 50px;
  background: #fff;
  border-bottom: 2px solid #000;
  border-radius: 5%;
  margin-left: -3px;
}
.card-h p {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-align: center;
}
.card-body {
  width: 250px;
  height: 200px;
  background-position: center;
  transition: 1s all ease;
}
.card-body img {
  width: 200px;
  height: 170px;
  background-position: center;
  transition: 0.7s all ease;
  transform: scale(1.1);
}
.card-body img:hover {
  transform: scale(0.9);
}

@media screen and (max-width: 759px) {
  .concern .col-md-4 {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .concern .card-body {
    width: 200px;
    height: 200px;
    background-position: center;
    transition: 1s all ease;
  }
}
</style>