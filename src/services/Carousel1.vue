<template>
  <div class="sld">
    <div class="sd" v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" />
     
    </div>

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
        "https://i.postimg.cc/QC5zpRzr/sven-mieke-olon-Uw-Urm-Qk-unsplash.jpg",
        "https://i.postimg.cc/QdjzTYkR/sticker-mule-q-Nhst-Taw-Qr-I-unsplash.jpg",
        "https://i.postimg.cc/Xvz1tjSb/daniel-tuttle-IHUF0j-Iey4-unsplash.jpg",
        "https://i.postimg.cc/j2VgdMS3/benigno-hoyuela-jrk1j7i96-HI-unsplash.jpg",
        "https://i.postimg.cc/02SHq48Q/s1.jpg",
        "https://i.postimg.cc/K8rq1g3h/s2.jpg",

      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted() {
    this.startSlide();
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 5000);
    },

    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style scoped>
.sld {
    width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
}

.sd {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
img {
  height: 500px;
  width: 100%;
  opacity: 1;
  filter: brightness(90%);
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  color: #fff;
  font-weight: bold;
  font-size: 2.5rem;
  font-weight: 500;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 20px;
}
.prev {
  left: 20px;
}

@media screen and (max-width: 759px) {
  .sld {
  width: 100%;
  height: 100%;
}

.sd {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
  img {
    height: 300px;
    width: 100%;
    opacity: 1;
    filter: brightness(90%);
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 40%;
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
    right: 25px;
  }
  .prev {
    left: 10px;
  }
}
</style>