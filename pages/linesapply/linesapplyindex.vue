<template>
	<!-- 介绍页 -->
	<view>
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">民易贷</block>
		</cu-custom>
		
		<view class="">
			<image src="../../static/header_banner.png" mode=""></image>
		</view>
		
		<view class="">
			<image src="../../static/px_bg.png" mode=""></image>
		</view>
		
		<button class="cu-btn bg-black margin-tb-sm round lg" @click="apply">抢先申请</button>
	</view>
</template>

<script>
	export default {onShow: function() {
			console.log('App1 Show')
		},
		onHide: function() {
			console.log('App1 Hide')
		},
		data() {
			return {
				
			}
		},
		onLoad() {
		},
		
		methods: {
			apply(){
				uni.navigateTo({
				    url: '../index/index'
				});
			}
		}
	}
</script>

<style>
</style>
