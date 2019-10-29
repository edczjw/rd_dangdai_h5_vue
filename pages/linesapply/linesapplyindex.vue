<template>
	<!-- 介绍页 -->
	<view>
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">民易贷</block>
		</cu-custom>
		
		<view class="bg-do">
			<view class="top-img">
				<image src="../../static/header_banner.png" mode=""></image>
			</view>
			
			<view class="po-img">
				<image src="../../static/px_bg.png" mode=""></image>
				<button class="ho-button" @click="apply">立即借款</button>
			</view>
		</view>
		
		
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
	.bg-do{
		background: #FF3A22;
		height: 1800upx;
		width: 100%;
	}
	.po-img{
		width: 100%;
		text-align: center;
		position: absolute;
		top: 750upx;
	}
	.po-img image{
		width: 702upx;
		height: 528upx;
	}
	.top-img image{
		width: 100%;
		height: 800upx;
	}
	.ho-button{
		position: absolute;
		top: 300upx;
		left: 98upx;
		width: 554upx;
		height: 96upx;
		line-height: 96upx;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #FF7D00;
		letter-spacing: -0.2px;
		text-align: center;
		background-image: linear-gradient(90deg, #FFE6B3 3%, #FFD669 100%);
		box-shadow: 0 4px 0 0 #FBB255;
		border-radius: 24px;
	}
</style>
