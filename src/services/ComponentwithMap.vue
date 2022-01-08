<template>

  <GMapMap :center="center" :zoom="5" map-type-id="terrain" style="width: 100vw; height: 20rem">
    <GMapCluster :zoomOnClick="true">
      <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
        @click="center = m.position" />
    </GMapCluster>
  </GMapMap>

</template>

<script>
  export default {
  data() {
    return {
      center: { lat: 23.773063, lng: 90.429499 },
      markers: [
        {
          position: {
            lat: 23.773063, lng: 90.429499 
          }
        },
        {
          position: {
           lat: 23.198724, 
           lng: 79.860104
          }
        },
        {
          position: {
            lat: 51.165218,
            lng: 7.067116
          }
        },
        {
          position: {
            lat: 51.09256,
            lng: 6.84074
          }
        }
      ]
    };
  }
};
</script>

<style>
  body {
    margin: 0;
  }
.center{
  color: black;
}
</style>