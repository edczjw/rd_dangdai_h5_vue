<template>
	<view>
		<cu-custom bgColor="bg-black">
			<block slot="content">借款确认</block>
		</cu-custom>
		
		<view class="solid-bottom padding text-sm">
			<view class="text-left"><text class="text-grey text-left">借款信息</text></view>
		</view>
		
		<view class="padding bg-white solid-bottom">
			<view class="flex">
				<view class="flex-sub padding-sm margin-xs radius">借款金额</view>
				<view class="flex-sub padding-sm margin-xs radius text-right">1500</view>
			</view>
			
			<view class="flex">
				<view class="flex-sub padding-sm margin-xs radius">收款银行卡</view>
				<view class="flex padding-sm margin-xs radius text-right">尾号8888（中国银行）</view>
			</view>
			
			<view class="flex">
				<view class="flex-sub padding-sm margin-xs radius">借款期限</view>
				<view class="flex-sub padding-sm margin-xs radius text-right">6期</view>
			</view>
			
			<view class="flex">
				<view class="flex-sub padding-sm margin-xs radius">首次还款日</view>
				<view class="flex-sub padding-sm margin-xs radius text-right">2019-09-22</view>
			</view>
			
			<view class="flex">
				<view class="flex-sub padding-sm margin-xs radius">还款方式</view>
				<view class="flex-sub padding-sm margin-xs radius text-right">等额本息</view>
			</view>
		</view>
		
		<view class="solid-bottom padding text-sm">
			<view class="text-left"><text class="text-grey text-left">请输入手机尾号8888（银行卡银行预留手机号码）收到的短信验证码，完成确认</text></view>
		</view>
		
		<view class="cu-form-group">
			<view class="title">验证码</view>
			<input placeholder="请输入验证码"  class="text-left" name="input"></input>
			<button @click="sendck()" class='cu-btn bg-gray'>
				<span v-show="showCount">获取验证码</span>
				<span v-show="!showCount" class="count">{{count}} s</span>
			</button>
		</view>
		
		<view class="bg-white padding solids-top">
			<view class="text-sm text-center">
				<label class="radio"><radio @click="changeradio" value="r2" :checked="current" style="transform:scale(0.6)"/>
				我已阅读、知悉并同意《<a href="#" class="Index-a">借款协议</a>》、
				《<a href="#" class="Index-a">担保协议</a>》</label>
			</view>
		</view>
		
		<view class="padding flex flex-direction bg-white" style="margin-top:10upx;position: fixed;bottom: 0;width: 100%; z-index: 500;">
			<button class="cu-btn bg-black margin-tb-sm round lg">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				current:false,
				showCount:true,
				count:'',
				times:1,	//点击验证码次数
				verificationCode:'',   //生成的验证码
			}
		},
		methods:{
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
			
			// 用户协议选择
			changeradio(){
				this.current = !this.current;
			},
		}
	}
</script>

<style>
</style>
