<template>
  <div class="container">
    <h2>gallery</h2>
    <div class="row">
      <div class="col-md-6" v-for="img in images" :key="img">
        <div class="card">
          <img :src="img" />
          <div class="card-footer">
            <a href="#"><i class="fa fa-search-plus"></i></a>
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
      images: [
        "https://i.postimg.cc/zXczvwqD/R.jpg",
        "https://i.postimg.cc/25pCFzqP/bistro-4-3-500-400-80-c-58-800-600-100.jpg",
      ],
    };
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
.col-md-6 {
  justify-content: center;
  padding: 10px;
}
.card {
  position: relative;
  width: 500px;
  height: 400px;
  padding: 10px;
  box-shadow: 2px 2px 5px yellow;
}
.card img {
  display: block;
  width: 480px;
  height: 380px;
  background-position: center;
  background-size: cover;
}
.card-footer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.6);
}
.card:hover .card-footer {
  opacity: 1;
}
.card-footer i {
  color: green;
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

@media screen and (max-width: 759px) {
  h2 {
    margin-top: 190px;
    padding: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: rgb(45, 206, 131);
    text-transform: uppercase;
  }
  .card {
    position: relative;
    width: 400px;
    height: 350px;
    padding: 10px;
    box-shadow: 2px 2px 5px yellow;
  
  }
  .card img {
    display: block;
    width: 380px;
    height: 320px;
    background-position: center;
    background-size: cover;
  }
  .card-footer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.3s ease;
    background-color: rgba(0, 0, 0, 0.6);
  }
}
</style>