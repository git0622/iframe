import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import useVant from './util/vant'
let app = createApp(App)
useVant(app)
app.use(store).use(router).mount('#app')
