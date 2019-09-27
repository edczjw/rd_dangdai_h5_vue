<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">身份信息</block>
		</cu-custom>
		
		<view class="padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<view class="text-left"><text class="text-grey text-left">仅用于核实身份</text></view>
				</view>
			</view>
		</view>
		
		<view class="solids-bottom padding-xs flex align-center bg-white">
			<view class="flex-sub text-center ">
				<view class="text-sm">
					<view class="text-center padding-sm">
						<text class="text-center">为保证系统识别的效率和效果</text>
					</view>
					<view class="text-center padding-sm">
						<text class="text-center text-blue text-lg">请正对手机，确保所处环境光线充足</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="img text-center padding-xs">
			<image style="width:50%; height: 560upx;" src="../../static/imgs/realface.png" mode=""></image>
		</view>
		
		<!-- 随机数 -->
		<view class=" padding-xs text-center ">
			<text class="text-greytext-sm text-center">
				请记住以下数字，并在即将开始的认证过程中，清晰地读出
			</text>
		</view>
	    <view class="padding modal-layer-popup-number">
			<span>4</span><span>6</span><span>9</span><span>9</span>
		</view>
		
		<view class="padding-xl flex flex-direction">
			<button class="cu-btn bg-gradual-orange margin-tb-sm round lg" 
			 @click="start">开始认证</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		onShow: function() {
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
		methods:{
			//开始认证
			start(){
				uni.redirectTo({
				    url: 'AreaMsg'
				});
			},
		}
	}
</script>

<style>
	.modal-layer-popup-number {
	  font-size: 0;
	  text-align: center;
	}
	
	.modal-layer-popup-number span {
	  font-size: 54upx;
	  color: #333;
	  display: inline-block;
	  width: 2.55rem;
	  height: 3.0rem;
	  line-height: 3.0rem;
	  margin-right: .43rem;
	  border: 1px solid #e1e1e1;
	  -webkit-border-radius: 10px;
	  -moz-border-radius: 10px;
	  border-radius: 10px;
	  text-align: center;
	  -webkit-box-sizing: border-box;
	  -moz-box-sizing: border-box;
	  box-sizing: border-box;
	}
	
	.modal-layer-popup-number span:last-child {
	  margin-right: 0;
	}
</style>
