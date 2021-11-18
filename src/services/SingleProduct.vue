<template>
  <div class="singleproduct">
    <div class="image">
      <img src="../assets/image/home.jpg" />
    </div>
    <div class="container">
      <h2>Product Detail</h2>
      <div class="row">
        <div class="col-md-12">
          <p>We serve best product for you::{{product.product_title}}</p>
          <div class="box">
              <div class="image">
                  <img :src="product.image"/>
              </div>
              <div class="text">
                  <ul>
                  <li>{{prouct.product_title}}</li>
                  <li>{{product.link}}</li>
                  <li> {{product.pdf}}</li>
                  </ul>
                  <p>{{product.descripsion}}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  name:'SingleProduct',
  data() {
    return {
      id: this.$route.params.id,
      product: [],
    };
  },



  created() {
    var docRef = db.collection("products").doc(this.id);
    docRef.get().then((doc) => {
      if (doc.exists) {
        this.product = doc.data();
      } else {
        console.log("No such document!");
      }
    });
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.singleproduct {
  width: 100%;
  padding-top: 10%;
  padding-right: 10%;
  padding-left: 10%;
  margin: 0;
}
.singleproduct .image {
  width: 100%;
  height: 400px;
  margin-top: -5%;
}
.singleproduct .image img {
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
  height: 250px;
  padding: 0;
  margin: 10px;
}
.card .card-body {
  width: 100%;
  height: 200px;
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
  text-transform: uppercase;
}
.card-footer a {
  font-size: 1.1rem;
  font-weight: 500;
  color: rgb(44, 186, 252);
  text-decoration: none;
}

</style>