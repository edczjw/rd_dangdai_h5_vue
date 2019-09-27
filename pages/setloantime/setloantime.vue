<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">设定金额期限</block>
		</cu-custom>
		
		<view class="solids-bottom padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<text class="text-grey">额度于2019年10月18日后失效，请及时提款</text>
				</view>
			</view>
		</view>
		
		<input type="text" value="" />
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
