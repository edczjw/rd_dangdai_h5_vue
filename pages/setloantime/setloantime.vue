<template>
	<view class="bg-white padding-xl">
		<cu-custom bgColor="bg-white" class="navtit" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">设定金额期限</block>
		</cu-custom>
		
		<view class="bg-gray  padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<text class="text-grey">额度于2019年10月18日后失效，请及时提款</text>
				</view>
			</view>
		</view>
		
		<view class="text-left text-xl text-bold padding-sm">您当前可借额度：</view>
		<view class="text-center text-xl text-bold padding-sm round bg-orange">
			￥32000
		</view>
		
		<view class="text-left text-xl text-bold padding-sm">借款金额</view>
		<view class="cu-form-group text-lg text-bold solid-bottom">
			￥<input 
			:placeholder="maxedu" 
			type="number" 
			@input="yzinput" 
			class="text-center"  
		    name="input"></input>元
		</view>
		
		<view class="flex padding-sm">
			<view class="flex-sub text-bold text-sm margin-xs">❈  按日计息，日利率0.067%</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				maxedu:'最低借款金额1000元',	//最高额度
			}
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
