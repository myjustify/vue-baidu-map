<template>
  <div class="app">
    <baidu-map
        class="map"
        :center="state.center"
        :zoom="state.zoom"
        :scroll-wheel-zoom="true"
        @ready="mapReady"
    >
      <template v-if="state.map">
        <bm-marker
            :position="{ lng: state.center.lng, lat:state.center.lat }"
        />
        <bm-info-window
            ref="infoWindow"
            class="infoWindow"
            :auto-pan="true"
            :width="400"
            :height="0"
            :position="{ lng: state.center.lng, lat: state.center.lat }"
            :show="state.show"
            @open="state.show=true"
            @close="state.show=false"
        >
          <div>1111111</div>
        </bm-info-window>
      </template>
    </baidu-map>

    <button @click="state.show = true">打开</button>
  </div>
</template>

<script setup>
import {onMounted, reactive} from "vue"
defineProps({
  test: String
})

const state = reactive({
  center: {
    lng: 111.52,
    lat: 36.08
  },
  zoom: 7,
  map: null,
  show: true
})

function syncCenterAndZoom(e) {
  const { lng, lat } = e.target.getCenter()
  state.center.lng = lng
  state.center.lat = lat
  state.zoom = e.target.getZoom()
}

function mapReady({ BMap, map }) {
  state.map = map
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