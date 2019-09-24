<script>
	import Vue from 'vue'
	//引入页面动画切换插件
	import pageAnimation from './components/page-animation'
	export default {
		mixins: [pageAnimation],
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 引入colorui样式 */
	@import "colorui/main.css";
	@import "colorui/icon.css";
	
	/* 标题字颜色 */
	.navtit{
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #252E47;
		letter-spacing: -0.29px;
		text-align: center;
		line-height: 18px;
	}
	.Index-a {
		text-decoration: none;
	}
	.txt-sty{
		font-family: PingFangSC-Semibold;
		font-size: 18px;
		color: #252E47;
		letter-spacing: -0.32px;
		text-align: center;
		line-height: 18px;
	}
</style>
