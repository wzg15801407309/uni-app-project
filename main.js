import Vue from 'vue'
import App from './App'
import { myRequest } from "./utils/request.js"

Vue.prototype.$Http=myRequest;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
