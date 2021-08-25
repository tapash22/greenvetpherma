<template>
  <Details />
  <Navigation />
    <div class="row">
      <div class="col-md-12">
        <router-view v-slot="{ Component }">
          <transition
            enter-active-class="animate__animated animate__fadeInDown animate__fast	50ms "
            leave-active-class="animate__animated animate__fadeOutDown animate__fast 50ms"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  <Foot />
</template>

<script>
import Details from "../../services/Details.vue";
import Navigation from "../../services/Navigation.vue";
import Foot from "../../services/Footer.vue";

export default {
  components: {
    Details,
    Navigation,
    Foot,
  },
};
</script>

<style scoped>

.row {
  padding: 0;
  margin: 0;
}
.col-md-12 {
  padding: 0;
}
</style>