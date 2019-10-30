<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">借款确认</block>
		</cu-custom>


		<view class="margin bg-white padding shadow top-play">
				<view class="flex ">
					<van-divider class="flex-sub margin radius tio" content-position="right">借款信息</van-divider>
				</view>
				
				<view class="flex">
					<view class="flex-sub margin radius left-tio">借款金额</view>
					<view class="flex-sub margin radius text-right right-tio">￥1500</view>
				</view>

				<view class="flex">
					<view class="flex-sub margin radius left-tio">收款银行卡</view>
					<view class="flex margin radius text-right right-tio">中国银行(尾号8888)</view>
				</view>

				<view class="flex">
					<view class="flex-sub margin radius left-tio">借款期数</view>
					<view class="flex-sub margin radius text-right right-tio">6期</view>
				</view>

				<view class="flex">
					<view class="flex-sub margin radius left-tio">还款日</view>
					<view class="flex-sub margin radius text-right right-tio"><span style="background: #252E47;color: #ffffff;border-radius: 6upx;padding: 0 10upx;">首次</span>2019-09-22</view>
				</view>

				<view class="flex">
					<view class="flex-sub margin radius left-tio">还款方式</view>
					<view class="flex-sub margin radius text-right right-tio">等额本息</view>
				</view>
		</view>


		<view class="margin bg-white padding shadow def">
				
			<view class="margin-top padding">
				<span class="his">短信验证码</span><br>
				<span class="hi">为了您的账号安全 请输入138 0138 0000 验证码</span>
			</view>
			
			<van-password-input
			  :value="value"
			  :mask="false"
			  :focused="showKeyboard"
			  @focus="showKeyboard = true"
			/>
			
			<!-- 虚拟键盘 -->
			<van-number-keyboard
			style="z-index: 9999;"
			  :show="showKeyboard"
			  @input="onInput"
			  @delete="onDelete"
			  @blur="showKeyboard = false"
			/>

			<view class="text-center padding">
				<button @click="sendck()" class='cu-btn bg-gradual-orange round' :class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'">
					<span v-show="showCount">获取验证码</span>
					<span v-show="!showCount" class="count">{{count}} s</span>
				</button>
			</view>
		</view>


		<view class="bottom-ss">
			<view class="rad padding-left-xl padding-top padding-bottom text-black">
				<md-agree
				  v-model="agreeConf.checked"
				  :disabled="agreeConf.disabled"
				  :size="agreeConf.size"
				  @change="onChange(agreeConf.name, agreeConf.checked, $event)"
				>我已阅读、知悉并同意</text>《<a href="#" class="Index-a">借款协议</a>》、《<a href="#" class="Index-a">担保协议</a>》
				</md-agree>
			</view>
			<view class="padding-left-xl padding-right-xl padding-bottom-xl flex flex-direction ">
				<button class="cu-btn bg-gradual-orange round lg" :class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'" @click="next"
				 @keyup.enter="next">下一步</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				showKeyboard: false,
				agreeConf: {
					checked: false,
					name: 'agree1',
					size: '',
					disabled: false,
					introduction: '未选中状态',
				},
				code: '',
				current: false,
				showCount: true,
				yzbtn: true, //验证码按钮状态
				count: '',
				times: 1, //点击验证码次数
				verificationCode: '', //生成的验证码

				form: {
					timcou: '', //验证码
				}
			}
		},
		methods: {
			onInput(key) {
			  this.value = (this.value + key).slice(0, 6);
			},
			onDelete() {
			  this.value = this.value.slice(0, this.value.length - 1);
			},
			// 勾选协议
			onChange(name, checked) {
			  console.log(`agree name = ${name} is ${checked ? 'checked' : 'unchecked'}`)
			},
			getCode() {
				return this.code;
			},
			//确定
			makesure() {
				if (this.form.timcou == '' || this.form.timcou.length != 6) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的验证码'
					})
				} else if (this.current == false) {
					uni.showToast({
						icon: 'none',
						title: '请阅读并同意业务协议'
					})
				} else {
					//跳转至放款成功
					uni.redirectTo({
						url: '../loanapplysuccess/loanapplysuccess'
					});
				}
			},

			//发送验证码
			sendck() {
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
			},

			// 用户协议选择
			changeradio() {
				this.current = !this.current;
			},
		}
	}
</script>

<style>
	.def{
		margin-bottom: 300upx;
	}
	.code-input-input {
		height: 40upx;
		position: absolute;
		outline: none;
		color: transparent;
		text-shadow: 0 0 0 transparent;
		width: 300%;
		margin-left: -100%;
	}

	.code-input-main {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.code-input-main-item {
		font-family: time-font-myself;
		border: 1upx solid #535777;
		border-radius: 4upx;
		width: 60upx;
		height: 70upx;
		line-height: 70upx;
		opacity: 0.8;
		margin: 10upx;
		text-align: center;
		font-size: 40upx;
		color: #000000;
	}

	.his {
		font-family: PingFangSC-Medium;
		font-size: 36upx;
		color: #535777;
		letter-spacing: -0.3px;
		line-height: 18px;
	}

	.hi {
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		padding: 20upx 0 0 0;
		display: block;
		color: #707598;
		line-height: 28upx;
		text-align: justify;
	}

	.top-play {
		border-top: 8upx solid #FF7D00;
		position: relative;
	}

	.htio {
		position: absolute;
		padding: 15upx;
		background: #FF7D00;
		color: #ffffff;
		-webkit-writing-mode: vertical-rl;
		writing-mode: vertical-rl;
		right: 0;
		top: 0;
		border-bottom-left-radius: 30upx;
	}

	.tio {
		font-family: PingFangSC-Semibold;
		font-size: 36upx;
		color: #535777;
		letter-spacing: -0.26px;
		line-height: 14px;
	}

	.left-tio {
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #707598;
		letter-spacing: 0;
		line-height: 28upx;
	}

	.right-yio {
		font-family: PingFangSC-Semibold;
		font-size: 32upx;
		color: #535777;
		text-align: right;
		font-weight: bold;
		line-height: 28upx;
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
