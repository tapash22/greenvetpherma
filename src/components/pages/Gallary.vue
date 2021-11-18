<template>
  <div class="container">
    <h2>gallery</h2>
    <div class="row">
      <Lightbox />
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
h2 {
  margin-top: 120px;
  padding-top: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: rgb(45, 206, 131);
  text-transform: uppercase;
}
.row{
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
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