<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		手机号码将作为登录用户名使用333
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'yidai'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
