<template>
  <div class="demos">
    <div class="image">
      <img src="../../assets/image/product.jpg" />
    </div>
    <div class="container">
      <h2>Product List</h2>
      <div class="row">
        <div class="col-md-12">
          <p>We are delivery best products</p>
          <div class="row product">
            <div class="col-md-4" v-for="product in products" :key="product.id">
              <div class="card">
                <div class="card-body">
                  <img :src="product.data().image" />
                </div>
                <div class="card-footer">
                  <p>{{ product.data().product_title }}</p>
                  <router-link
                    :to="{ name: 'SingleProduct', params: { id: product.id } }"
                    >Details</router-link
                  >
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
import { db } from "../../firebase";
export default {
  data() {
    return {
      products: [],
      product: {
        product_title: "",
        link: "",
        descripsion: "",
        pdf: "",
        image: "",
      },
      active_item: null,
    };
  },
  created() {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.products.push(doc);
        });
      });
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.demos {
  width: 100%;
  padding-top: 10%;
  padding-right: 10%;
  padding-left: 10%;
  margin: 0;
  position: relative;
}
.demos .image {
  width: 100%;
  height: 400px;
  margin-top: -5%;
}
.demos .image img {
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

@media only screen and (max-width: 767px) {
}
</style>