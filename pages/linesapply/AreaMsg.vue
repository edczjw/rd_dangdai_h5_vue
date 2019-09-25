<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">居住信息</block>
		</cu-custom>
		
		<view class="cu-form-group margin-top">
			<view class="title">婚姻状态</view>
			<picker @change="PickerChange" :value="index" :range="picker" range-key="value">
				<view class="uni-input picker">{{picker[index].value}}</view>
			</picker>
		</view>
		
		<view class="padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<view class="text-left"><text class="text-grey text-left">请详细填写至小区、楼栋、单元及室等</text></view>
				</view>
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
		
		<view style="margin-top:10upx;">
			<view class="padding flex flex-direction bg-white" style="margin-top:10upx;position: fixed;bottom: 0;width: 100%; z-index: 500;">
				<button class="cu-btn bg-black round margin-tb-sm lg" @click="next">下一步</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				areaname: null,
				index: 0,
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
</style>
