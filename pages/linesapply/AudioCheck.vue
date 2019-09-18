<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">身份信息</block>
		</cu-custom>
		
		<view class="padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<view class="text-left"><text class="text-grey text-left">仅用于核实身份</text></view>
				</view>
			</view>
		</view>
		
		<view class="solids-bottom padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<view class="text-center"><text class="text-center">为保证系统识别的效率和效果</text></view>
					<view class="text-center padding"><text class="text-center text-blue text-bold text-lg">请正对手机，确保所处环境光线充足</text></view>
				</view>
			</view>
		</view>
		
		<view class="img text-center padding-xs">
			<image style="width:60%; height: 600upx;" src="../../static/imgs/realface.png" mode=""></image>
		</view>
		
		<view style="margin-top:10upx;">
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-blue margin-tb-sm lg">开始认证</button>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style>
</style>
