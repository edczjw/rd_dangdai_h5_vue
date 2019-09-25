<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">确认银行卡</block>
		</cu-custom>
		
		<view class="padding-sm flex align-center">
			<view class="flex-sub">
				<view class="text-left">
					<text class="text-sm text-grey">请输入银行发送的短信验证码，完成银行卡确认</text>
				</view>
			</view>
		</view>
		
		<view class="cu-form-group">
			<text class='cuIcon-copy text-orange margin-xs margin-right'></text>
			<input placeholder="请输入验证码" maxlength='6' class="text-left" 
			v-model="form.yznum" type="number"
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
				我已阅读、知悉并同意《<a href="#" class="Index-a">还款协议</a>》</label>
			</view>
		</view>
		
		<view class="padding flex flex-direction bg-white" style="margin-top:10upx;position: fixed;bottom: 0;width: 100%; z-index: 500;">
			<button class="cu-btn bg-black margin-tb-sm round lg" @click="apply">确定申请</button>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				current:false,
				showCount:true,	//验证码计数
				count:'',
				times:1,	//点击验证码次数
				
				form:{
					yznum:'',	//验证码
					mobile:""	//手机号
				}
			}
		},
		methods:{
			//确定申请
			apply(){
				//校验
				if(this.form.yznum == '' || this.form.yznum.length < 6){
					uni.showToast({
						icon:'none',
						title:'请输入正确的验证码'
					})
				}else if(this.current == false){
					uni.showToast({
						icon:'none',
						title:'请同意《还款协议》'
					})
				}
			},
			
			//发送验证码
			sendck() {
				//校验手机格式
				if(this.form.yznum == '' || this.form.yznum.length < 6){
					uni.showToast({
						icon:'none',
						title:'请输入正确的验证码'
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
			//还款户协议选择
			changeradio(){
				this.current = !this.current;
			},
		}
	}
</script>

<style>
</style>
