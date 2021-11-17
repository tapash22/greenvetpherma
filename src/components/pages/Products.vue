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
          <div class="row product">
            <div class="col-md-4" v-for="product in products" :key="product.id">
              <div class="card">
                <div class="card-body">
                  <img :src="product.img" />
                </div>
                <div class="card-footer">
                  <p>{{ product.title }}</p>
                  <router-link :to="product.url">Details</router-link>
                </div>
              </div>
            </div>
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
          id: 6,
          title: "Ex-clusive",
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
  padding-top: 10%;
  padding-right: 10%;
  padding-left: 10%;
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
.col-md-12 .product {
  width: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: left;
}
.col-md-12 .product .col-md-4 {
  width: 33%;
  padding: 5px;
  margin: 0;
}
.product .card {
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 10px;
}
.card .card-body {
  width: 100%;
  height: 260px;
  padding: 0;
  margin: 0;
  border: none;
}
.card .card-body img {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.card .card-footer {
  width: 100%;
  height: auto;
  border: none;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  background: black;
}
.card-footer p {
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  text-align: left;
  background: #000;
  padding: 0;
  margin: 0;
}
.card-footer a{
  font-size: 1.1rem;
  font-weight: 500;
  color: rgb(44, 186, 252);
  text-decoration: none;
}

@media only screen and (max-width: 767px) {
}
</style>