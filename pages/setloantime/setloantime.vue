<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">设定金额期限</block>
		</cu-custom>
		
		<view class="header-img">
			<image src="../../static/bg4.png" mode=""></image>
		</view>
		
		<view class="tedo">
			<view class="tedo1">最高可借</view>
			<view class="tedo2"><text class="slod">￥</text>15,000</view>
			<view class="tedo3">额度于2019年10月18日后失效，请及时提款</view>
		</view>
		
		<view class="gomo">
			<view class="loantext margin-left-xl margin-right-xl margin-bottom-xs margin-top-xl">
				借款金额(元)
			</view>
			
			<view class="cu-form-group  fm margin-top">
				<text class='margin-left-xs dolar'>￥</text>
				<input 
				:placeholder="maxedu" 
				maxlength='11'
				type="number" 
				class="toinput padding-left-xs text-left" 
				v-model="form.money"
				name="input"></input>
			</view>
			
			<view class="tipp margin-left-xl margin-top-xl">
				当前最高可用额度15000元，日利率0.067%
			</view>
		
			<view class="cengj" v-if="sho">
			hello
			</view>
			
			<view class="userloan" v-if="sho">
			借款用途
			</view>
		</view>
		
		<view class="bottom-ss">
		<view class="rad padding-left-xl padding-top padding-bottom text-black">
			<label class="radio">
				<radio @click="changeradio" value="r2" :checked="current" style="transform:scale(0.5)" />
				<text style="color: #707598;">我已阅读、知悉并同意</text><a href="#" class="Index-a">《借款协议》</a>
			</label>
		</view>
		<view class="padding-left-xl padding-right-xl padding-bottom-xl flex flex-direction ">
			<button class="cu-btn bg-gradual-orange round lg"
			:class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'" @click="next"
			 @keyup.enter="next">下一步</button>
		</view>
		</view>
		
	</view>
</template>

<script>
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default{
		data(){
			return{
				sho:true,
				current:false,
				activeNames: ['1'],
				animation:'',
				edu:'32000.00',	//可用额度
				showplan:false,		//展示还款详情
				maxedu:'借款金额不得低于1000',	//最高额度
				yzbtn: true, //验证码按钮状态
				tips:'',//提示
				index: 0,
			
				form:{
					qishu:''
				}
			}
		},
		onLoad() {
			this.keyupEnter();
		},
		methods:{
			watchdetail(){
				this.openPopup1();
			},
			
			//下一步
			next(){
				if(this.yzbtn == false){
					console.log('跳转')
				}else{
					this.tips = '请输入正确的借款金额'
					this.yzbtn = true;
					this.openPopup();
				}
			},
			
			//借款金额输入校验
			loaninput(e) {
				if(e.detail.value < 1000){
					this.tips = '最低借款金额 1000 元'
					this.yzbtn = true;
					this.showplan = false;
					this.openPopup();
				}else if(parseInt(e.detail.value) > this.edu){
					this.tips = '您的可借额度是 '+this.edu+' 元'
					this.yzbtn = true;
					this.showplan = false;
					this.openPopup();
				}else if(e.detail.value%100!=0){
					this.tips = '借款金额必须是100的倍数'
					this.yzbtn = true;
					this.showplan = false;
					this.openPopup();
				}else{
					//激活按钮
					this.yzbtn = false;
					
					//显示借款详情
					this.showplan = true;
					
				}
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
		}
	}
</script>

<style>
	.userloan{
		background: #FFFFFF;
		box-shadow: 0 3px 3px 0 rgba(85,100,122,0.03);
		border-radius: 8px;
		border-radius: 8px;
		height: 114upx;
		margin-top: 25upx;
	}
	.cengj{
		background: #FFFFFF;
		box-shadow: 0 3px 3px 0 rgba(85,100,122,0.03);
		border-radius: 8px 8px 0 0;
		border-radius: 8px 8px 0px 0px;
		width:690upx;
		height: 244upx;
		margin: 0 auto;
		margin-top: 50upx;
	}
	.slod{
		/* color: #FFEA42; */
		background-image: -webkit-linear-gradient(135deg, #FFFFFF 15%, #FFECAE 85%);
		-webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
		-webkit-text-fill-color: transparent; /*text-fill-color会覆盖color所定义的字体颜色： */
		text-shadow: 0 4upx 2upx 0 rgba(255,62,0,0.50), inset 0 -2upx 0 0 #FFEA42;
		font-size: 52upx;
	}
	.tedo{
		width: 100%;
		position: absolute;
		top: 296upx;
		text-align: center;
	}
	.tedo3{
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #FFCDAE;
		letter-spacing: 0;
		text-align: center;
	}
	.tedo2{
		font-family: PingFangSC-Semibold;
		font-size: 112upx;
		
		background-image: -webkit-linear-gradient(135deg, #FFFFFF 15%, #FFECAE 85%);
		-webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
		-webkit-text-fill-color: transparent; /*text-fill-color会覆盖color所定义的字体颜色： */
		text-shadow: 0 4upx 2upx 0 rgba(255,62,0,0.50), inset 0 -2upx 0 0 #FFEA42;
		color: #000000;
		letter-spacing: -4upx;
		text-align: center;
		line-height: 156upx;
	}
	.tedo1{
		font-family: PingFangSC-Medium;
		font-size: 36upx;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		text-shadow: 0 0 6upx rgba(255,44,0,0.60);
	}
	.fm{
		border-bottom: 1upx solid #E6E6E6;
	}
	
	.toinput{
		text-align: vertical-align;
		font-weight:400;
		/* letter-spacing: 0; */
		font-family: PingFangSC-Regular;
		font-size: 52upx;
		color: #FF7D00;
	}
	.dolar{
		font-family: PingFangSC-Semibold;
		font-size: 44upx;
		font-weight:400;
		color: #FF7D00;
		text-align: right;
		line-height: 72upx;
	}
	.tipp{
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #707598;
		letter-spacing: 0;
		line-height: 28upx;
	}
	.loantext{
		width: 166upx;
		height: 24upx;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #535777;
		letter-spacing: 0;
		line-height: 24upx;
	}
	.rad{
		font-family: PingFangSC-Regular;
		font-size: 20upx;
		letter-spacing: -0.4upx;
		line-height: 28upx;
	}
	.bottom-ss{
		background: #FFFFFF;
		width: 100%;
		position: fixed;
		bottom: 0;
	}
	.header-img{
		width: 100%;
	}
	.header-img image{
		width: 100%;
		height: 590upx;
	}
	/* 验证码按钮默认 */
	.yanzhengbtn {
		background: #FDE8D4;
	}

	/* 验证码按钮激活 */
	.yanzhengbtns {
		background-image: linear-gradient(90deg, #FFB759 3%, #FF7D00 100%);
		box-shadow: 0 12upx 24upx -6upx rgba(255, 180, 92, 0.70);
	}
	.gomo{
		position: absolute;
		top: 590upx;
		left: 30upx;
		background: #FFFFFF;
		box-shadow: 0 6upx 6upx 0 rgba(85,100,122,0.03);
		border-radius: 16upx;
		width: 689upx;
		height: 311upx;
		margin: 0 auto;
	}
</style>
