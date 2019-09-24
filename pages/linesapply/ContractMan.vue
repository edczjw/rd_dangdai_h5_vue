<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">联系人信息</block>
		</cu-custom>
		
		<view class="padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<view class="text-left"><text class="text-grey text-left">直系亲属联系人</text></view>
				</view>
			</view>
		</view>
		
		<view class="cu-form-group">
			<view class="title">关系</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{index>-1?picker[index]:'请选择'}}
				</view>
			</picker>
		</view>
		
		<view class="cu-form-group">
			<view class="title">姓名</view>
			<input class="text-right" placeholder="请输入" name="input"></input>
		</view>
		
		<view class="cu-form-group"  >
			<view class="title">电话号码</view>
			<input class="text-right" placeholder="请输入" name="input"></input>
		</view>
		
		
		<view class="padding-xs flex align-center  margin-top">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<view class="text-left"><text class="text-grey text-left">其他联系人</text></view>
				</view>
			</view>
		</view>
		
		<view class="cu-form-group">
			<view class="title">关系</view>
			<picker @change="PickerChange1" :value="index1" :range="picker1">
				<view class="picker">
					{{index1>-1?picker1[index1]:'请选择'}}
				</view>
			</picker>
		</view>
		
		<view class="cu-form-group">
			<view class="title">姓名</view>
			<input class="text-right" placeholder="请输入" name="input"></input>
		</view>
		
		<view class="cu-form-group"  >
			<view class="title">电话号码</view>
			<input class="text-right" placeholder="请输入" name="input"></input>
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
				//直系亲属
				index: -1,
				picker: ['父母', '配偶','子女' ],
				
				//其他联系人
				index1: -1,
				picker1: ['父母', '兄弟姐妹','夫妻','同事','其他' ],
			}
		},
		methods:{
			//下一步
			next(){
				uni.redirectTo({
				    url: '../index/index'
				});
			},
			
			//直系亲属修改值
			PickerChange(e) {
				this.index = e.detail.value
				console.log(this.index)
			},
			
			//其他修改值
			PickerChange1(e) {
				this.index1 = e.detail.value
				console.log(this.index1)
			},
		}
	}
</script>

<style>
</style>
