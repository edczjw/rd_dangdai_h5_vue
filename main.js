import Vue from 'vue'
import App from './App'

import countUp from './components/countUp.vue'
import cuCustom from './colorui/components/cu-custom.vue'
//顶部标题
Vue.component('cu-custom',cuCustom)

//数字滚动
Vue.component('countup',countUp)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
