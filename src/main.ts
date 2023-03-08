import { createApp } from 'vue'
import App from './App.vue'
// import BaiduMap from "./components"
import BaiduMap from "../dist/v3-baidu-map"
const app = createApp(App)
app.use(BaiduMap, {
    ak: import.meta.env.VITE_BAIDUMAP_AK
})
app.mount('#app')