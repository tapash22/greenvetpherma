<template>
  <div class="container">
    <div class="row mt-2">
      <h2>Partners</h2>
      <div
        class="col-md-2"
        v-for="(img, index) in images"
        :key="img"
        :index="index"
      >
        <img :src="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://i.postimg.cc/L64F1bQj/partner1.jpg",
        "https://i.postimg.cc/25ZsYR3N/partner2.jpg",
        "https://i.postimg.cc/kGnzW2s7/partner3.jpg",
        "https://i.postimg.cc/MHCTqXd9/flow-min-3.jpg",
        "https://i.postimg.cc/xTm8gy1h/OIP.jpg",
        "https://i.postimg.cc/Kc6BZYkX/Header-Webpage-1920x903-1.jpg",
      ],
    };
  },
    mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.container{
  width:100%;
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
.row {
  justify-content: center;
  align-items: center;
}
.col-md-2 {
  justify-content: center;
  padding: 10px;
}
img {
  width: 180px;
  height: 100px;
  background-position: center;
  background-size: cover;
  border: 1px solid #000;
  transition: 0.3s all;
  filter: brightness(50%);
}
img:hover {
  filter: brightness(100%);
}

@media only screen and (max-width: 767px) {
  h2 {
    text-align: center;
    margin-top: 190px;
  }
  .col-md-2 {
    margin: 10px;
    align-items: center;
  }
  img {
    margin-left: 25%;
    filter: brightness(50%);
  }
  img:hover {
    filter: brightness(100%);
  }
}
</style>