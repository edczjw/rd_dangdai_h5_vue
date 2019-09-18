<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue">
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
			<input class="text-right" placeholder="例:幸福大道232号财富花园2#1204号" name="input"></input>
		</view>
		
	</view>
</template>

<script>
	export default {
		data(){
			return {
				index: -1,
				picker: ['请选择','已婚', '未婚', '离异','丧偶','其他'],
				lotusAddressData:{
						visible:false,
						provinceName:'',
						cityName:'',
						townName:'',
					},
				region:'',
			}
		},
		methods:{
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
