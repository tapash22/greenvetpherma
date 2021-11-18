<template>
  <div class="light">
    <div class="row">
      <div
        class="col-md-4"
        v-for="(src, index) in imgs"
        :key="index"
        @click="() => showImg(index)"
      >
      <div class="card">
        <img :src="src" />
      </div>
      </div>

      <!-- all props & events -->
      <vue-easy-lightbox
        style="margin-top:5%;"
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      visible: false,
      index: 0, // default: 0
      imgs: [
        "https://i.postimg.cc/KYzMp3rv/IMG-20180116-193351.jpg",
        "https://i.postimg.cc/wvRsgKGC/IMG-20180117-134234.jpg",
        "https://i.postimg.cc/L4B8f6Ly/IMG-20180116-191934.jpg",
        "https://i.postimg.cc/T1y0zHV1/IMG-20180117-134229.jpg",
      ],
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.light {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 5px;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
}
.col-md-4 {
  width: 30%;
  height: 100%;
  padding: 0;
  margin: 10px;
  border: 1px solid blue;
}
.col-md-4 .card{
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
}
.col-md-4 img {
  width: 100%;
  height: 100%;
  background-position: center;
}

@media only screen and (max-width: 767px) {
  .light {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 5px;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
}
.col-md-4 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 10px;
  border: 1px solid blue;
}
.col-md-4 .card{
    width: 300px;
    height: 200px;
    padding: 10px;
    margin: 10px;
}

.col-md-4 img {
  width: 100%;
  height: 100%;
  background-position: center;
}
}
</style>