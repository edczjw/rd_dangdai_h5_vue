<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">居住信息</block>
		</cu-custom>
		
		<view class="bg-white margin-top-xs">
			<view class="cu-form-group">
				<view class="title">婚姻状态</view>
				<picker @change="PickerChange" :value="index" :range="picker" range-key="value">
					<view class="uni-input picker">{{picker[index].value}}</view>
				</picker>
			</view>
			
			<view class="padding-xs bg-gray">
				<view class="text-sm text-left">
					<text class="text-grey">请详细填写至小区、楼栋、单元及室等</text>
				</view>
			</view>
			
			<view class="cu-form-group"  >
				<view class="title">现居地址</view>
				<input class="text-right" placeholder="请输入" v-model="form.areanow" name="input"></input>
				<text class='cuIcon-locationfill text-orange'></text>
			</view>
			
			<view class="cu-form-group align-start">
				<view class="title">详细地址</view>
				<textarea class="text-right"  maxlength="-1" v-model="form.areadetail" :disabled="areaname!=null"
				@input="textareaBInput" placeholder="幸福大道232号财富花园2#1204号"></textarea>
			</view>
		</view>
			
			<view class="padding-xl flex flex-direction ">
				<button class="cu-btn bg-gradual-orange round lg" 
				:class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'" @click="next"
				 @keyup.enter="next">登录</button>
			</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				areaname: null,
				index: 0,
				yzbtn: true, //验证码按钮状态
				picker: [{
					code:'0',
					value:'请选择'
				},{
					code:'M1',
					value:'已婚'
				}, {
					code:'M2',
					value:'未婚'
				},{
					code:'M3',
					value:'离异'
				},{
					code:'M4',
					value:'丧偶'
				},{
					code:'M5',
					value:'其他'
				}],
				
				form:{
					marrymsg:"",	//婚姻状态
					areanow:"",		//现居地址
					areadetail:"",	//详细地址
				}
			}
		},
		methods:{
			//下一步
			next(){
				//校验信息
				if(this.form.marrymsg == 0){
					uni.showToast({
						icon:'none',
						title:'请选择婚姻状态'
					})
				}else if(this.form.areanow == '' || this.form.areadetail == ''){
					uni.showToast({
						icon:'none',
						title:'请选择或输入居住地址信息'
					})
				}else{
					//校验通过跳转
					uni.redirectTo({
						url: 'ContractMan'
					});
				}
			},
			//居住地址输入
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			},
			//婚姻修改值
			PickerChange(e) {
				this.index = e.detail.value
				this.form.marrymsg = this.picker[this.index].code;
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
