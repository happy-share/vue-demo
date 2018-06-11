<template>
   <l-map class="map" ref="map" :zoom=13 :center="[47.413220, -1.219482]">
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'example',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      // zoom: 13,
      // center: L.latLng(47.413220, -1.219482),
      // url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      // marker: L.latLng(47.413220, -1.219482),
    }
  }
}
</script>

<style scoped>
 .map {
   width: 1000px;
   height: 1000px;
 }
</style>

