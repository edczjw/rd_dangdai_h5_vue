<template>
	<view>
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">易贷</block>
		</cu-custom>
		
		<view class="solids-bottom padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="solid-bottom text-sm">
					<view class="text-left padding"><text class="text-grey text-left">手机号码将作为登录用户名使用</text></view>
				</view>
			</view>
		</view>
		
		
		<form>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="请输入手机号" name="input"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>
			
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="请输入验证码" name="input"></input>
				<button class='cu-btn bg-green shadow'>验证码</button>
			</view>
			
			<view class="cu-form-group">
				<view class="title">随机数</view>
				<input placeholder="请输入如下随机数" name="input"></input>
			</view>
			
			<view class="cu-form-group">
				<view>
					<label>
						<checkbox value="cb" checked="true" color="#FFCC33" style="transform:scale(0.7)" />我已阅读、知悉并同意<a href="#">《用户协议》</a>
					</label>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'yidai',
			}
		},
		onLoad() {

		},
		methods: {
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
