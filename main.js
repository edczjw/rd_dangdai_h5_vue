import Vue from 'vue'
import App from './App'
import Vant from 'vant';
import countUp from './components/countUp.vue'
import cuCustom from './colorui/components/cu-custom.vue'
//引入vuex
import store from './store'
import mandMobile from 'mand-mobile'
import { http } from '@/utils/luch-request/index.js' // 全局挂载引入，配置相关在该index.js文件里修改

Vue.prototype.$http = http
//顶部标题
Vue.component('cu-custom',cuCustom)
Vue.use(Vant);

Vue.use(mandMobile)
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
