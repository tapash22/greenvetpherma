<template>
  <div class="products">
    <div class="image">
      <img src="../../assets/image/home.jpg" />
    </div>
    <div class="container">
      <h2>Our Product</h2>
      <div class="row">
        <div class="col-md-12">
          <p>We are delivery best products</p>
          <div class="product" v-for="product in products" :key="product.id">
            <div class="card">
              <div class="card-body">
                <router-link :to="product.url">
                <img :src="product.img"/>
                </router-link>
              </div>
              <div class="card-footer">
                <p>{{product.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div
        class="row"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-once="false"
      >
        <div
          class="col-md-4 my-2"
          v-for="(pdc, index) in products"
          :key="pdc.id"
          :index="index"
        >
          <router-link :to="pdc.url">
            <div class="box">
              <div class="header">
                <h3>{{ pdc.title }}</h3>
              </div>
              <img :src="pdc.img" />
              <div class="footer">
                <button class="btn btn-primary">Details</button>
              </div>
            </div>
          </router-link>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serviceUrl:
        "https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath: "PDF_Succinctly.pdf",
      products: [
        {
          id: 1,
          title: "Poultry",
          img: "https://i.postimg.cc/RZF42Spw/239020602-548316853262866-8205688915792121368-n.jpg",
          url: "/poultry",
        },
        {
          id: 2,
          title: "Ruminent",
          img: "https://i.postimg.cc/XYz4bRtm/239055660-561869864942902-8732590383673099750-n.jpg",
          url: "/ruminent",
        },
        {
          id: 3,
          title: "AQua",
          img: "https://i.postimg.cc/LXkcnw0H/239363573-567311807755963-1020352780872672881-n.jpg",
          url: "/aqua",
        },
        {
          id: 4,
          title: "Pet-Animal",
          img: "https://i.postimg.cc/8cbdrBWF/d.jpg",
          url: "/petanimal",
        },
        {
          id: 5,
          title: "Vet Clinic",
          img: "https://i.postimg.cc/pX2JM4bK/e.jpg",
          url: "/vetClinic",
        },
        {
          id: 6,
          title: "Others",
          img: "https://i.postimg.cc/NjF85X0M/f.jpg",
          url: "/others",
        },
      ],
    };
  },
  components: {},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.products {
  width: 100%;
  height: 100%;
  padding: 10%;
  margin: 0;
  position: relative;
}
.products .image {
  width: 100%;
  height: 400px;
  margin-top: -5%;
}
.products .image img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #000;
  background-position: center;
  background-size: cover;
}
h2 {
  padding: 10px;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.row,
.col-md-12 {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.col-md-12 p {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  padding: 10px;
  background: rgb(44, 186, 252);
  border-radius: 10px;
}
.col-md-12 .product{
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 0;
}

.product .card{
  width: 30%;
  height: 300px;
  padding: 10px;
  margin: 0;
}
.card .cad-body{
  width: 100%;
  height: 70%;
  padding: 0;
  margin: 0;
}
.card .cad-body img{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.card .card-footer{
  width: 100%;
}

@media only screen and (max-width: 767px) {
}
</style>