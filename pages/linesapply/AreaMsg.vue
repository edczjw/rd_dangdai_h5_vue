<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">个人信息</block>
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
		
	</view>
</template>

<script>
	export default {
		data(){
			return {
				index: -1,
				picker: ['已婚', '未婚', '离异','丧偶','其他'],
			}
		},
		methods:{
			//修改值
			PickerChange(e) {
				this.index = e.detail.value
				console.log(this.index)
			},
		}
	}
</script>

<style>
</style>
