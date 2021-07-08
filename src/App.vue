<template>
  <Navigation />
  <div class="row">
    <div class="col-md-12">
      <router-view />

    </div>
  </div>
  <Footer />
</template>

<script>
import Navigation from "./services/Navigation.vue";
import Footer from "./services/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>

