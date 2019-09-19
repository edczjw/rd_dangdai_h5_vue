<template>
	<view>
		<cu-custom bgColor="bg-black">
			<block slot="content">居住信息</block>
		</cu-custom>
		
		<view class="cu-form-group margin-top">
			<view class="title">婚姻状态</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{index>-1?picker[index]:'请选择'}}
				</view>
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
			<input class="text-right" placeholder="请输入" name="input"></input>
			<text class='cuIcon-locationfill text-orange'></text>
		</view>
		
		<view class="cu-form-group"  >
			<view class="title">详细地址</view>
			<input class="text-right" placeholder="幸福大道232号财富花园2#1204号" name="input"></input>
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
				index: -1,
				picker: ['请选择','已婚', '未婚', '离异','丧偶','其他'],
			}
		},
		methods:{
			//下一步
			next(){
				uni.redirectTo({
				    url: 'ContractMan'
				});
			},
			//婚姻修改值
			PickerChange(e) {
				this.index = e.detail.value
				console.log(this.index)
			},
		}
	}
</script>

<style>
</style>
