import { createApp } from 'vue'
import App from './App.vue'
import BaiduMap from "./components"
const app = createApp(App)
app.use(BaiduMap, {
    ak: 'fOT3G6uPsE5acPKkiG9zWiOmPpHl8w5L'
})
app.mount('#app')