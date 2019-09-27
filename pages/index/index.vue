<template>
	<!-- 登录页 -->
	<view class="bg-white">
		<cu-custom bgColor="bg-white" class="navtit" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">易贷登录</block>
		</cu-custom>

		<view class="solids-bottom padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<view class="text-left">
						<text class="text-grey text-left">手机号码将作为登录用户名使用</text>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-form-group">
			<text class='cuIcon-mobile shadow margin-xs margin-right'></text>
			<input placeholder="请输入手机号" maxlength='11' type="number" @input="yzinput" class="text-left" v-model="form.mobile"
			 name="input"></input>
		</view>

		<view class="cu-form-group">
			<text class='cuIcon-lock shadow margin-xs margin-right'></text>
			<input placeholder="请输入验证码" maxlength='6' class="text-left" v-model="form.timcou" type="number" name="input"></input>
			<button type="warn" @click="sendck" class='cu-btn round ' :class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'">
				<span v-show="showCount">验证码</span>
				<span v-show="!showCount" class="count">{{count}} s</span>
			</button>
		</view>

		<view class="padding-xl solid-top flex flex-direction ">
			<button class="cu-btn bg-gradual-orange round lg" :class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'" @click="login"
			 @keyup.enter="login">登录</button>
		</view>

		<view class="padding-sm">
			<view class="text-sm text-center">
				<label class="radio">
					<radio @click="changeradio" value="r2" :checked="current" style="transform:scale(0.6)" />
					我已阅读、知悉并同意《<a href="#" class="Index-a">用户协议</a>》<br>
					《<a href="#" class="Index-a">个人信息采集授权书</a>》、
					《<a href="#" class="Index-a">用户注册协议</a>》</label>
			</view>
		</view>

		<!-- <div style="height: 2rem;line-height: 2rem; width:100%;text-align: center;">地理位置：{{ gpsdetail }}</div> -->
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
				current: false,
				showCount: true, //验证码计数
				yzbtn: true, //验证码按钮状态
				count: '',
				times: 1, //点击验证码次数
				gpsdetail: "", //详细地理位置

				//正则表达式
				reg: {
					//手机
					mobile: /^[1][3,4,5,7,8][0-9]{9}$/,
				},
				form: {
					mobile: '', //手机号
					timcou: '', //验证码
				}
			}
		},
		onLoad() {
			this.getarea();
			this.keyupEnter()
		},

		methods: {
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
				if (e.detail.value == '' && !this.reg.mobile.test(e.detail.value)) {
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
			getarea() {
				var _that = this;
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						_that.gpsdetail = "经度：" + res.longitude + ",纬度：" + res.latitude + ",邮编：";
					}
				});

			},

			//返回
			back() {
				uni.redirectTo({
					url: 'MSloanapply'
				});
			},
			//登录
			login() {
				if (!this.reg.mobile.test(this.form.mobile)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码'
					})
				} else if (this.form.timcou == '' || this.form.timcou.length != 6) {
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
					uni.redirectTo({
						url: '../linesapply/OcrCheck'
					});
				}
			},

			//发送验证码
			sendck() {
				//校验手机格式
				if (!this.reg.mobile.test(this.form.mobile)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码'
					})
				} else {
					//60s
					if (this.times == 1) {
						const TIME_COUNT = 60; //更改倒计时时间
						if (!this.timer) {
							this.count = TIME_COUNT;
							this.showCount = false;
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
	/* 验证码按钮默认 */
	.yanzhengbtn {
		background: #FDE8D4;
	}

	/* 验证码按钮激活 */
	.yanzhengbtns {
		background-image: linear-gradient(90deg, #FFB759 3%, #FF7D00 100%);
		box-shadow: 0 6px 12px -3px rgba(255, 180, 92, 0.70);
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
</style>
