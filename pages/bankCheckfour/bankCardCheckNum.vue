<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">银行卡确认</block>
		</cu-custom>
		
		<view class="padding">
		<view class="padding-xs">
			<view class="text-left text-sm text-grey">
				<text>请输入银行发送的短信验证码，完成银行卡确认</text>
			</view>
		</view>
		
			<view class="cu-form-group">
				<text class='cuIcon-copy margin-xs margin-right'></text>
				<input placeholder="请输入验证码" maxlength='6' class="text-left" 
				v-model="form.yznum" type="number"
				name="input"></input>
				<button  type="warn" @click="sendck()" class='cu-btn round ' 
				:class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'">
					<span v-show="showCount">验证码</span>
					<span v-show="!showCount" class="count">{{count}} s</span>
				</button>
			</view>
			
			<view class="padding-sm text-sm text-center">
				<label class="radio">
					<radio @click="changeradio" value="r2" :checked="current" 
				style="transform:scale(0.6)"/>
				我已阅读、知悉并同意《<a href="#" class="Index-a">还款协议</a>》</label>
			</view>
			
			<view class="padding-xl flex flex-direction ">
				<button class="cu-btn bg-gradual-orange round lg" :class="yzbtn==true? 
				'yanzhengbtn':'yanzhengbtns'" @click="apply"
				 @keyup.enter="apply">确定申请</button>
			</view>
			
	</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				current:false,
				showCount:true,	//验证码计数
				yzbtn: true, //验证码按钮状态
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
