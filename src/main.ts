import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueAnimXyz from '@animxyz/vue3'
import router from './router'
import '@animxyz/core' // Import css here if you haven't elsewhere
import i18n from './locales/i18n'
axios.defaults.baseURL = 'http://localhost:5000'
let app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$axios = axios

app.use(VueAxios, axios).use(VueAnimXyz).use(i18n).use(router).mount('#app')
