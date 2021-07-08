<template>
  <div class="sld">
    <transition-group name="fade" tag="div">
      <div class="sd" v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; </a>
    <a class="next" @click="next" href="#">&#10095; </a>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://i.postimg.cc/mgTRVQmx/4.jpg",
        "https://i.postimg.cc/xd420BnY/3.jpg",
        "https://i.postimg.cc/PfZjj6cs/2.jpg",
        "https://i.postimg.cc/tg7KmDPc/1.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

//   mounted: function() {
//     this.startSlide();
//   },

  methods: {
    // startSlide: function() {
    //   this.timer = setInterval(this.next, 4000);
    // },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped>
.sld{
  padding: 0;
  margin: 0;
}
img {
  height:400px;
  width:1340px;
  margin-left: 5px;
  opacity: 1;
  filter: brightness(90%);
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 15%;
  width: auto;
  color: green;
  font-weight: bold;
  font-size: 4rem;
  font-weight: 500;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 10px;
}

.prev {
  left: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}
@media screen and (max-width: 759px) {
  .sld{
  padding: 0;
  margin: 0;
}
img {
  height:400px;
  width:100%;
  margin-left: 5px;
  opacity: 1;
  filter: brightness(90%);
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 7%;
  width: auto;
  color: green;
  font-weight: bold;
  font-size: 2rem;
  font-weight: 500;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 5px;
}

.prev {
  left: 5px;
}

}



</style>