<template>
  <div class="container">
    <h2>gallery</h2>
    <div class="row">
      <Lightbox />
      <!-- <div class="col-md-6" v-for="img in images" :key="img">
        <div class="card">
          <img :src="img" />
          <div class="card-footer">
            <a href="#"><i class="fa fa-search-plus"></i></a>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Lightbox from '../../services/Lightbox.vue';
export default {
  components:{
    Lightbox,
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
  padding-top: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: rgb(45, 206, 131);
  text-transform: uppercase;
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
  
}
</style>