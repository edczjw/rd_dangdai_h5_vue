<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">银行卡验证</block>
		</cu-custom>
		
		<view class="flex bg-gray padding-xs">
			<view class="flex-sub text-grey">
				<text class='cuIcon-ticket margin-xs'></text>关联银行卡
			</view>
			<view class="flex-sub text-right text-grey">尾号：
			<text class="text-yellow">8888（中国银行）</text></view>
		</view>
		
		<view class="bg-white padding">
			<view class="cu-form-group">
				<text class='cuIcon-mobile margin-xs'></text>
				<input placeholder="请输入银行预留手机号"  class="text-left" name="input"></input>
			</view>
			
			<view class="cu-form-group">
				<text class='cuIcon-lock margin-xs'></text>
				<input placeholder="请输入验证码"  class="text-left" name="input"></input>
				<button type="warn" @click="sendck()"  class='cu-btn round' 
				:class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'">
					<span v-show="showCount">验证码</span>
					<span v-show="!showCount" class="count">{{count}} s</span>
				</button>
			</view>
			
			<view class="padding-xl solid-top flex flex-direction ">
				<button class="cu-btn bg-gradual-orange round lg" 
				:class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'" @click="next"
				 @keyup.enter="next">确定</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data(){
			return{
				showCount:true,
				count:'',
				yzbtn: true, //验证码按钮状态
				times:1,	//点击验证码次数
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
</style>
