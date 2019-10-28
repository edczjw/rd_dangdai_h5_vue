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
	/* 引入vant样式 */
	@import 'vant/lib/index.css';
	@import 'mand-mobile/lib/mand-mobile.css'
	.body{
	    /*距离顶部范围应该在88-95范围内*/
	    padding-top: 90upx;
	    top: var(--status-bar-height);
	}
	/* 标题字颜色 */
	.navtit{
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #252E47;
		letter-spacing: -0.29px;
		text-align: center;
		line-height: 18px;
	}
	.Index-a {
		text-decoration: none;
		color: #FF7D00;
	}
	
	.bottom-ss{
		background: #FFFFFF;
		width: 100%;
		position: fixed;
		height: 266upx;
		z-index: 999;
		bottom: 0;
		left: 0;
	}
	.txt-sty{
		font-family: PingFangSC-Semibold;
		font-size: 18px;
		color: #252E47;
		letter-spacing: -0.32px;
		text-align: center;
		line-height: 18px;
	}
	
	.txt-sty2{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #78829B;
		letter-spacing: -0.23px;
		text-align: center;
		line-height: 14px;
	}
	.page{
		background: #FFFFFF;
		position: relative;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-repeat: no-repeat;
		background: cover;
	}
	
</style>
