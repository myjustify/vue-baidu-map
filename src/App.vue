<template>
  <div class="app">
    <baidu-map
        class="map"
        :center="state.center"
        :zoom="state.zoom"
        :scroll-wheel-zoom="true"
        @moving="syncCenterAndZoom"
        @moveend="syncCenterAndZoom"
        @zoomend="syncCenterAndZoom"
        @ready="mapReady"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue"
defineProps({
  test: String
})

const state = reactive({
  center: {
    lng: 111.52,
    lat: 36.08
  },
  zoom: 7
})

function syncCenterAndZoom(e) {
  const { lng, lat } = e.target.getCenter()
  state.center.lng = lng
  state.center.lat = lat
  state.zoom = e.target.getZoom()
}

function mapReady({ BMap, map }) {
  // state.BMap = BMap
  // state.map = map
}
</script>
<style lang="scss" scoped>
.app {
  width: 500px;
  height: 500px;
  .map{
    width: 100%;
    height: 100%;
  }
}
</style>