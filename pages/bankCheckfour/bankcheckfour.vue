<template>
	<view>
		<cu-custom bgColor="bg-black">
			<block slot="content">验证</block>
		</cu-custom>
		
		<view class="flex bg-white solid-bottom">
			<view class="flex-sub padding-sm margin-xs text-grey">
				<text class='cuIcon-ticket margin-xs'></text>关联银行卡
			</view>
			<view class="flex-sub padding-sm margin-xs text-right text-grey">尾号8888（中国银行）</view>
		</view>
		
		<view class="cu-form-group">
			<text class='cuIcon-mobile margin-xs'></text>
			<input placeholder="请输入银行预留手机号"  class="text-left" name="input"></input>
		</view>
		
		<view class="cu-form-group">
			<text class='cuIcon-lock margin-xs'></text>
			<input placeholder="请输入验证码"  class="text-left" name="input"></input>
			<button @click="sendck()" class='cu-btn bg-black shadow'>
				<span v-show="showCount">验证码</span>
				<span v-show="!showCount" class="count">{{count}} s</span>
			</button>
		</view>
		
		<view class="padding flex flex-direction bg-white" style="margin-top:10upx;position: fixed;bottom: 0;width: 100%; z-index: 500;">
			<button class="cu-btn bg-black margin-tb-sm round lg" @tap="showModal" data-target="DialogModal1">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				showCount:true,
				count:'',
			}
		},
		methods:{
			//发送验证码
			sendck() {
				const TIME_COUNT = 60; //更改倒计时时间
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
			},
		}
	}
</script>

<style>
</style>
