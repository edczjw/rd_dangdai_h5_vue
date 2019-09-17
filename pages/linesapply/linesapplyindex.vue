<template>
	<view>
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">易贷</block>
		</cu-custom>
		
		<view class="padding">
			<image style="width: 100%; background-color: #eeeeee;" src="../../static/timg.jpg"
				@error="imageError"></image>
		</view>
		
		<view class="tabbar bg-white" style="position: fixed;bottom: 0;width: 100%; z-index: 500;">
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-blue margin-tb-sm lg">抢先申请</button>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
