<template>
	<!-- 登录页 -->
	<view>
		<cu-custom bgColor="bg-white" class="navtit" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">易贷登录</block>
		</cu-custom>
		
		<view class="solids-bottom padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<view class="text-left"><text class="text-grey text-left">手机号码将作为登录用户名使用</text></view>
				</view>
			</view>
		</view>
		
		<form>
			<view class="cu-form-group">
				<text class='cuIcon-mobile text-orange margin-xs margin-right'></text>
				<input placeholder="请输入手机号" maxlength='11' 
				type="number"
				class="text-left" v-model="form.mobile" 
				name="input"></input>
			</view>
			
			<view class="cu-form-group">
				<text class='cuIcon-lock text-orange margin-xs margin-right'></text>
				<input placeholder="请输入验证码" maxlength='6' class="text-left" 
				v-model="form.timcou" type="number"
				name="input"></input>
				<button @click="sendck()" class='cu-btn'>
					<span v-show="showCount">验证码</span>
					<span v-show="!showCount" class="count">{{count}} s</span>
				</button>
			</view>
			
			<view class="bg-white padding-xs solids-top">		
				<view class="text-sm text-center">
					<label class="radio"><radio @click="changeradio" value="r2" :checked="current" 
					style="transform:scale(0.6)"/>
					我已阅读、知悉并同意《<a href="#" class="Index-a">用户协议</a>》、<br>
					《<a href="#" class="Index-a">个人信息采集授权书</a>》、
					《<a href="#" class="Index-a">用户注册协议</a>》</label>
				</view>
			</view>
			
			<view class="padding flex flex-direction bg-white" style="margin-top:10upx;position: fixed;bottom: 0;width: 100%; z-index: 500;">
				<button class="cu-btn bg-black margin-tb-sm round lg" @click="login()">登录</button>
			</view>
			
		</form>
		
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">登录结果</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					欢迎登陆。
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<!-- <button class="cu-btn line-green text-green" @tap="hideModal">取消</button> -->
						<button class="cu-btn bg-black round margin-left" @tap="hideModal">确定</button>
					</view>
				</view>
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
				current:false,
				showCount:true,	//验证码计数
				count:'',
				times:1,	//点击验证码次数
				
				//正则表达式
				reg:{
					//手机
					mobile:/^[1][3,4,5,7,8][0-9]{9}$/,
				},
				form:{
					mobile:'',	//手机号
					timcou:'',	//验证码
				}
			}
		},
		onLoad() {
			// this.createCode();//生成随机数验证码
		},
		
		methods: {
			
			//登录
			login() {
					if(!this.reg.mobile.test(this.form.mobile)){
						uni.showToast({
							icon:'none',
							title:'请输入正确的手机号码'
						})
					}else if(this.form.timcou == '' || this.form.timcou.length != 6){
						uni.showToast({
							icon:'none',
							title:'请输入正确的验证码'
						})
					}else if(this.current == false){
						uni.showToast({
							icon:'none',
							title:'请阅读并同意相关协议'
						})
					}else{
						uni.redirectTo({
							url: '../linesapply/OcrCheck'
						});
					}
			},
				
			//发送验证码
			sendck() {
				//校验手机格式
				if(!this.reg.mobile.test(this.form.mobile)){
					uni.showToast({
						icon:'none',
						title:'请输入正确的手机号码'
					})
				}else{
					//60s
					if(this.times == 1){
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
					else if(this.times == 2){
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
					else{
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
			changeradio(){
				this.current = !this.current;
			},
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
	.code-style{
		font-size: 16px;
		color: red;
		cursor: pointer;
	}
	.code-box{
		text-align: center;
	}
</style>
