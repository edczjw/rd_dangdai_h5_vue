<template>
	<view class="pop">
	<!-- 登录页 -->
		<!-- 获取地理位置，腾讯地图 -->
		<iframe id="geoPage" width=0 height=0 frameborder=0  style="display:none;" scrolling="no"
			src="https://apis.map.qq.com/tools/geolocation?key=QC3BZ-UMCCG-YQIQ3-ISQAN-JITQ7-E2FI2&referer=myapp">
		</iframe>
		  
		<!-- <cu-custom bgColor="bg-white" class="navtit" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">易贷登录</block>
		</cu-custom> -->
	<view class="header-img">
		<image src="../../static/header.png" mode=""></image>
	</view>
	<view class="padding bg-white boxlo">
		<view class="cu-form-group">
			<text class='cuIcon-mobile  margin-xs margin-right'></text>
			<input placeholder="请输入手机号码" maxlength='11' 
			type="number" @blur="yzinput" class="text-left" 
			v-model="form.phone"
			 name="input"></input>
		</view>

		<view class="cu-form-group">
			<text class='cuIcon-lock  margin-xs margin-right'></text>
			<input placeholder="请输入验证码" maxlength='6' class="text-left" v-model="form.verification" type="number" name="input"></input>
			<button type="warn" @click="sendck" size="mini" class='cu-btn round ' 
			:class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'">
				<span v-show="showCount">获取验证码</span>
				<span v-show="!showCount" class="count">{{count}} s</span>
			</button>
		</view>
		
		<view class="rads margin-top-xl flex flex-direction ">
			<button class="cu-btn bg-gradual-orange round lg" :class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'" @click="login"
			 @keyup.enter="login">登录</button>
		</view>
		
		<view class="rad margin-top-xl text-black">
			<label class="radio">
				<radio @click="changeradio" value="r2" :checked="current" style="transform:scale(0.5)" />
				<text style="color: #707598;">我已阅读、知悉并同意</text>《<a href="#" class="Index-a">用户协议</a>》、
				《<a href="#" class="Index-a">个人信息采集授权书</a>》、
				《<a href="#" class="Index-a">用户注册协议</a>》
			</label>
		</view>
		</view>
	</view>
</template>
<script>
	export default {
		onShow: function() {
			console.log('App1 Show')
		},
		onHide: function() {
			console.log('App1 Hide')
		},
		data() {
			return {	
				agreeConf: {
					checked: false,
					name: 'agree1',
					size: '',
					disabled: false,
					introduction: '未选中状态',
				},
				current:false,
				showCount: true, //验证码计数
				yzbtn: true, //验证码按钮状态
				count: '',
				times: 1, //点击验证码次数
				gpsdetail: null, //详细地理位置

				//正则表达式
				reg: {
					//手机
					mobile: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
				},
				form: {
					phone: '', //手机号
					verification: '', //验证码
					chkApprove: 0,		//勾选
					geographyLocation:"",		//地理位置
				}
			}
		},
		onLoad() {
			this.getgps();
			this.keyupEnter()
		},
		methods: {
			getgps(){
				//获取地理位置
				var loc;
				var _that = this;
				window.addEventListener('message', function(event) {
					// 接收位置信息
					loc = event.data;
						if(loc  && loc.module == 'geolocation') {
							//定位成功,防止其他应用也会向该页面post信息，需判断module是否为'geolocation'
							//将地理位置赋给表单
							if(loc.district){
								_that.form.geographyLocation = loc.district
							}else{
								_that.form.geographyLocation = loc.province
							}
						}else { 
							//定位组件在定位失败后，也会触发message, event.data为null
							// console.log('定位失败');
							_that.form.geographyLocation = null;
						}
					
					console.log(_that.form.geographyLocation)
					// "nation": "中国",
					// "province": "广东省",
					// "city":"深圳市",
					// "district":"南山区",
					// "addr":"深圳大学杜鹃山(白石路北250米)",
				}, false);
				
				//设置6s超时，防止定位组件长时间获取位置信息未响应
				setTimeout(function() {
					if(!loc) {
						//主动与前端定位组件通信（可选），获取粗糙的IP定位结果
						alert('请求超时')
					}
				}, 6000); //6s为推荐值，业务调用方可根据自己的需求设置改时间，不建议太短
				
			},
			
			//监听键盘
			keyupEnter() {
				var lett = this;
				document.onkeydown = function(e) {
					var key = window.event.keyCode;
					if (key == 13) {
						lett.login();
					}
				}
			},

			//手机号码输入框实时输入
			yzinput(e) {
				if (!this.reg.mobile.test(e.detail.value)) {
					this.yzbtn = true;
					this.showCount = true;
					clearInterval(this.timer); // 清除定时器
					this.timer = null;
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码'
					})
				} else {
					this.yzbtn = false;
				}
			},

			//返回
			back() {
				uni.redirectTo({
					url: 'MSloanapply'
				});
			},
			//登录
			login() {
				if (!this.reg.mobile.test(this.form.phone)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码'
					})
				} else if (this.form.verification == '' || this.form.verification.length != 6) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的验证码'
					})
				} else if (this.current == false) {
					uni.showToast({
						icon: 'none',
						title: '请阅读并同意相关协议'
					})
				} else {
					// 调接口
					if(this.current == false){
						this.form.chkApprove = 0
					}else{
						this.form.chkApprove = 1
					}
					this.$http
					.post(this.$store.state.domain+'/myds/user/login',this.form)
					.then(res => {
						if(res.data.code == 0){
							uni.showToast({
								icon: 'passed',
								title: '登录成功'
							})
						}else{
							uni.showToast({
								icon: 'none',
								title: res.data.msg
							})
						}
					})
					.catch(err => {
					})
					
					// uni.redirectTo({
					// 	url: '../linesapply/OcrCheck'
					// });
				}
			},

			//发送验证码
			sendck() {
				//校验手机格式
				if (!this.reg.mobile.test(this.form.phone)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码'
					})
				} else {
					//60s
					let data ={
						phone: this.form.phone
					};
					if (this.times == 1) {
						const TIME_COUNT = 60; //更改倒计时时间
						if (!this.timer) {
							this.count = TIME_COUNT;
							this.showCount = false;
							
							this.$http
							.post(this.$store.state.domain+'/myds/user/getVerificationCode',data)
							.then(res => {
								
								//失败返回
								if(res.data.result != '0'){
									// 提示
									uni.showToast({
										icon: 'warning-o',
										title: '获取短信验证码失败，请重新获取！'
									})
									clearInterval(this.timer); // 清除定时器
									this.timer = null;
								}
							})
							.catch(err => {
								
							})
							
							this.times = 2;
							this.timer = setInterval(() => {
								if (this.count > 0 && this.count <= TIME_COUNT) {
									this.count--;
								} else {
									this.showCount = true;
									clearInterval(this.timer); // 清除定时器
									this.timer = null;
								}
							}, 1000)
						}
					}
					//120s
					else if (this.times == 2) {
						const TIME_COUNT = 120; //更改倒计时时间
						if (!this.timer) {
							this.count = TIME_COUNT;
							this.showCount = false;
							
							
							this.$http
							.post(this.$store.state.domain+'/myds/user/getVerificationCode',data)
							.then(res => {
								
								//失败返回
								if(res.data.result != '0'){
									// 提示
									uni.showToast({
										icon: 'warning-o',
										title: '获取短信验证码失败，请重新获取！'
									})
									clearInterval(this.timer); // 清除定时器
									this.timer = null;
								}
							})
							.catch(err => {
								
							})
							this.times = 3;
							this.timer = setInterval(() => {
								if (this.count > 0 && this.count <= TIME_COUNT) {
									this.count--;
								} else {
									this.showCount = true;
									clearInterval(this.timer); // 清除定时器
									this.timer = null;
								}
							}, 1000)
						}
					}
					//200s
					else {
						const TIME_COUNT = 200; //更改倒计时时间
						if (!this.timer) {
							this.count = TIME_COUNT;
							this.showCount = false;
							
							
							this.$http
							.post(this.$store.state.domain+'/myds/user/getVerificationCode',data)
							.then(res => {
								
								//失败返回
								if(res.data.result != '0'){
									// 提示
									uni.showToast({
										icon: 'warning-o',
										title: '获取短信验证码失败，请重新获取！'
									})
									clearInterval(this.timer); // 清除定时器
									this.timer = null;
								}
							})
							.catch(err => {
								
							})
							
							this.timer = setInterval(() => {
								if (this.count > 0 && this.count <= TIME_COUNT) {
									this.count--;
								} else {
									this.showCount = true;
									clearInterval(this.timer); // 清除定时器
									this.timer = null;
								}
							}, 1000)
						}
					}
				}

			},

			// 用户协议选择
			changeradio() {
				this.current = !this.current;
			},
		}
	}
</script>

<style>
	.rads{		
		margin-top: 90upx;
	}
	.rad{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		letter-spacing: -0.2px;
		line-height: 28upx;
	}
	.header-img{
		width: 100%;
	}
	.header-img image{
		width: 100%;
		height: 590upx;
	}
	.boxlo{
		position: absolute;
		top: 510upx;
		left: 30upx;
		height: 664upx;
		width: 689upx;
		margin: 0 auto;
		box-shadow: 0 3px 3px 0 rgba(85,100,122,0.03);
		border-radius: 8px;
	}
	.pop{
		height: 100%;
	    background-repeat: no-repeat;
	    background-position: center;
	    background-size: cover;
	    background-attachment: fixed;
	}
	.cu-form-group{
		border: 1upx solid #EEF1F5;
		margin: 20upx auto;
		border-radius: 48upx;
	}
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}

	.code-style {
		font-size: 16px;
		color: red;
		cursor: pointer;
	}

	.code-box {
		text-align: center;
	}
	
	/* 验证码按钮默认 */
	.yanzhengbtn {
		background: #FDE8D4;
	}
	
	/* 验证码按钮激活 */
	.yanzhengbtns {
		background-image: linear-gradient(90deg, #FFB759 3%, #FF7D00 100%);
		box-shadow: 0 6px 12px -3px rgba(255, 180, 92, 0.70);
	}
</style>
