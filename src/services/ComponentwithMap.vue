<template>
<div class="map">
  <GMapMap :center="center" :zoom="5" map-type-id="terrain" style="width: 100vw; height: 500px">
    <GMapCluster :zoomOnClick="true">
      <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
        @click="center = m.position" />
    </GMapCluster>
  </GMapMap>
</div>
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
  .map {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 500px;
  }
.center{
  color: black;
}
</style>