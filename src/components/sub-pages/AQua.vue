<template>
  <div class="products">
    <h2>Aqua</h2>
    <div class="row">
      <div
        class="col-md-4 my-2"
        v-for="(pdc, index) in products"
        :key="pdc.id"
        :index="index"
         data-aos="zoom-in"
      data-aos-delay="900"
      data-aos-once="false"
      >
        <div class="box">
          <div class="header">
            <h3>{{ pdc.title }}</h3>
          </div>
          <img :src="pdc.img" />
          <div class="footer">
            <button class="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "AQua",
          img: "https://i.postimg.cc/3ryHCSbC/a.jpg",
          price: "1000",
        },
        {
          id: 2,
          title: "AQua",
          img: "https://i.postimg.cc/BvZr8MKF/b.jpg",
          price: "1000",
        },
        {
          id: 3,
          title: "AQua",
          img: "https://i.postimg.cc/JhyQdXwg/c.jpg",
          price: "1000",
        },
        {
          id: 4,
          title: "AQua",
          img: "https://i.postimg.cc/8cbdrBWF/d.jpg",
          price: "1000",
        },
        {
          id: 5,
          title: "AQua",
          img: "https://i.postimg.cc/pX2JM4bK/e.jpg",
          price: "1000",
        },
        {
          id: 6,
          title: "AQua",
          img: "https://i.postimg.cc/NjF85X0M/f.jpg",
          price: "1000",
        },
       
      ],
    };
  },
  mounted () {
  window.scrollTo(0, 0);
},
};
</script>
<style scoped>

h2 {
  margin-top: 130px;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: rgb(45, 206, 131);
  text-transform: uppercase;
}
.row {
  justify-content: center;
  align-items: center;
}
.col-md-4 {
  justify-content: center;
  width: 400px;
  height: 300px;
}
.box {
  border: 2px solid rgb(213, 216, 15);
  justify-content: center;
  width: 300px;
  height: 300px;
  margin: 5px 10px;
  overflow: hidden;
  filter: grayscale(100%);
  transition: 0.3s all;
}
.header {
  padding: 10px;
  background: #fff;
  height: 50px;
}
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  text-align: center;
}
img {
  width: 295px;
  height: 200px;
  transition: 0.3s all;
}
img:hover {
  transform: scale(1.1);
}
.box:hover {
  filter: grayscale(0);
}
p {
  color: #000;
  font-size: 1rem;
  font-weight: 500;
}
button {
  width: 100%;
  height: 50px;
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
  .col-md-4 {
    margin-left: 10%;
  }
}
</style>