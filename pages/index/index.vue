<template>
	<!-- 登录页 -->
	<view>
		<cu-custom bgColor="bg-black" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">易贷登录</block>
		</cu-custom>
		
		<view class="solids-bottom padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="solid-bottom text-sm">
					<view class="text-left"><text class="text-grey text-left">手机号码将作为登录用户名使用</text></view>
				</view>
			</view>
		</view>
		
		<form>
			<view class="cu-form-group">
				<text class='cuIcon-mobile text-orange margin-xs margin-right'></text>
				<input placeholder="请输入手机号" maxlength='11' class="text-left" v-model="form.mobile" name="input"></input>
			</view>
			
			<view class="cu-form-group">
				<text class='cuIcon-lock text-orange margin-xs margin-right'></text>
				<input placeholder="请输入验证码" maxlength='6' class="text-left" v-model="form.timcou" name="input"></input>
				<button @click="sendck()" :disabled="loginyzm" class='cu-btn'>
					<span v-show="showCount">验证码</span>
					<span v-show="!showCount" class="count">{{count}} s</span>
				</button>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title">随机数</view>
				<input placeholder="请输入随机数"  class="text-right" v-model="form.randcou" name="input"></input>
				<view class="basis-xs bg-grey padding code-box">
					<span class="code-style" @click="createCode">	
					{{verificationCode}}
					</span>
				</view>
			</view> -->
			
			<view class="bg-white padding-xs solids-top">		
				<view class="text-sm text-center">
					<label class="radio"><radio @click="changeradio" value="r2" :checked="current" style="transform:scale(0.6)"/>
					我已阅读、知悉并同意《<a href="#" class="Index-a">用户协议</a>》、<br>
					《<a href="#" class="Index-a">个人信息采集授权书</a>》、
					《<a href="#" class="Index-a">用户注册协议</a>》</label>
				</view>
			</view>
			
			<view class="padding flex flex-direction bg-white" style="margin-top:10upx;position: fixed;bottom: 0;width: 100%; z-index: 500;">
				<button class="cu-btn bg-black margin-tb-sm round lg" @tap="showModal" 
				data-target="DialogModal1">登录</button>
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
				loginyzm:true,		//验证码点击
				title: 'yidai',
				current:false,
				show:false,
				modalName:null,
				showCount:true,
				count:'',
				verificationCode:'',   //生成的验证码
				times:1,	//点击验证码次数
				form:{
					mobile:'',
					timcou:'',
					randcou:'',
				}
			}
		},
		onLoad() {
			// this.createCode();//生成随机数验证码
		},
		
		methods: {
			//校验
			CheckLogin(){
				
			},
			
			//显示弹框
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			//隐藏弹框
			hideModal(e) {
				this.modalName = null
				console.log(this.form)
				uni.redirectTo({
				    url: '../linesapply/OcrCheck'
				});
			},
				
			//发送验证码
			sendck() {
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
					
			},
						
			//通过随机数生成验证码
			// createCode:function () {    
			// 	this.verificationCode = '';
			// 	var code = '';
			// 	var codeLength = 4;     //验证码长度
			// 	var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
			// 	for(var i = 0;i<codeLength;i++){
			// 		var index = Math.floor(Math.random()*36);
			// 		code += random[index];
			// 	}
			// 	this.verificationCode = code
			// },
					
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
