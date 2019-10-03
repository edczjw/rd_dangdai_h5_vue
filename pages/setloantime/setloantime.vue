<template>
	<view class="bg-white page">
		<cu-custom bgColor="bg-white" class="navtit" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">设定金额期限</block>
		</cu-custom>
		
		<view class="bg-gray  padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<text class="text-grey">额度于2019年10月18日后失效，请及时提款</text>
				</view>
			</view>
		</view>
		
		<view class="margin">
			<view class="text-left text-xl text-bold padding-sm">您当前可借额度：</view>
			<view class=" text-xl text-bold bg-yellow text-center shadow animation-scale-up"
			style="width: 160upx;height: 160upx;line-height:160upx;border-radius: 100%;
			margin: 0 auto;">
				￥{{edu}}
			</view>
		</view>
		
		<view class="margin" style="border-top:1upx solid #FBBD08;">
			<view class="text-left text-xl text-bold padding-sm">借款金额：</view>
			<view class="cu-form-group text-xxl text-bold solid-bottom">
				￥<input 
				:placeholder="maxedu" 
				:maxlength="edu.length"
				type="number" 
				@blur="loaninput" 
				class="text-center"  
				name="input"></input>元
			</view>
		</view>
		
		<view class="margin">
			<view class="padding-sm">
				<view class="text-bold text-sm">❈  按日计息，日利率0.067%</view>
			</view>
		</view>
		
		<view class="padding-sm" v-if="showplan">
			<view class="cu-form-group">
				<view class="text-bold text-sm">还款期数</view>
				<picker @change="PickerChange" :value="index" :range="picker" range-key="value">
					<view class="uni-input text-center text-bold text-sm picker">
					{{picker[index].value}}</view>
				</picker>
			</view>
			
			<view class="solids text-bold shadow-lg"
			style="border-top:1upx solid #FBBD08;" >
				<view class="flex padding-sm">
					<view class="flex-sub text-center">应还</view>
					<view class="flex-sub text-center">￥62.52</view>
				</view>
				<view class="flex padding-sm">
					<view class="flex-sub text-center">还款日</view>
					<view class="flex-sub text-center">11月22日</view>
				</view>
				<view class="flex padding-sm">
					<view class="flex-sub text-center">还款详情</view>
					<view class="flex-sub text-center">
						<a href="#" class="Index-a" @click="watchdetail">查看</a>
					</view>
				</view>
			</view>
		</view>
		
		<view class="padding-xl solid-top flex flex-direction ">
			<button class="cu-btn bg-gradual-orange round lg" 
			:class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'" @click="next"
			 @keyup.enter="next">下一步</button>
		</view>
		
		<!-- 提示框 -->
		<view>
		    <uni-popup ref="popup" class="text-red" type="center">{{tips}}</uni-popup>
			
			<uni-popup ref="popupdetail" class="text-red padding" type="center">
				 <view class="text-bold solid"
				 style="width: 200px;" v-for="(item,index) of list"
				 :key="index">
				 	<view class="flex padding-sm">
				 		<view class="flex-sub text-center">{{item.index}}</view>
				 		<view class="flex-sub text-center">{{item.value}}</view>
				 	</view>
				 </view>
			</uni-popup>
		</view>
		
	</view>
</template>

<script>
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default{
		data(){
			return{
				
				animation:'',
				edu:'32000',	//可用额度
				showplan:false,		//展示还款详情
				maxedu:'最低借款金额1000元',	//最高额度
				yzbtn: true, //验证码按钮状态
				tips:'',//提示
				index: 0,
				
				list:[{
					index:0,
					value:'we'
				},{
					index:1,
					value:'we'
				},{
					index:2,
					value:'we'
				},{
					index:3,
					value:'we'
				},{
					index:4,
					value:'we'
				},{
					index:5,
					value:'we'
				},{
					index:5,
					value:'we'
				},{
					index:5,
					value:'we'
				},{
					index:5,
					value:'we'
				},{
					index:5,
					value:'we'
				},{
					index:5,
					value:'we'
				},{
					index:5,
					value:'we'
				}],
				
				
				picker: [{
					code:'M1',
					value:'6期'
				}, {
					code:'M2',
					value:'9期'
				},{
					code:'M3',
					value:'12期'
				}],
				
				form:{
					qishu:''
				}
			}
		},
		components: {
			uniPopup
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
			// 打开提示框
			openPopup(){
				this.$refs.popup.open()
			},
			// 关闭提示框
			closePopup(){
				this.$refs.popup.close();
			},
			
			// 打开提示框1
			openPopup1(){
				this.$refs.popupdetail.open()
			},
			// 关闭提示框1
			closePopup1(){
				this.$refs.popupdetail.close();
			},
					
			//婚姻修改值
			PickerChange(e) {
				this.index = e.detail.value
				this.form.qishu = this.picker[this.index].code;
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
