import Vue from 'vue'
import App from './App'

import countUp from './components/countUp.vue'
import cuCustom from './colorui/components/cu-custom.vue'
//引入vuex
import store from './store'
//顶部标题
Vue.component('cu-custom',cuCustom)

//数字滚动
Vue.component('countup',countUp)
//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
//挂载
    store
})
app.$mount()
