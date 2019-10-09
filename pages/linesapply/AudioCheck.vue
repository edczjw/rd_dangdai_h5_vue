<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit border solid">
			<block slot="content">身份信息</block>
		</cu-custom>
		
			<view class="padding-xs align-center bg-gray">
				<view class="text-sm text-left text-grey">
					<text>仅用于核实身份</text>
				</view>
			</view>
			
		<view class="padding bg-white ">
			<view class="img text-center bg-gray solid border round-dot">
				<image style="width:40%; height: 445upx;" 
				src="../../static/imgs/realface.png"></image>
			</view>
			
			
			<view class="padding solid border align-center text-sm bg-white">
				<view class="prompt-box-text">
					<span class="prompt-box-text-number">1</span>
					<span class="prompt-box-text-content">牢记随机数，点击开始录制</span>
					<span class="prompt-box-text-border"></span></view>
				<view class="prompt-box-text">
					<span class="prompt-box-text-number">2</span>
					<span class="prompt-box-text-content">开启前置摄像头，普通话朗读数字</span>
					<span class="prompt-box-text-border"></span></view>
				<view class="prompt-box-text">
					<span class="prompt-box-text-number">3</span>
					<span class="prompt-box-text-content">完成录制，等待验证结果</span>
				</view>
			</view>
			
			<!-- 随机数 -->
			<view class="padding border solid bg-white" v-if="false">
				<view class="padding modal-layer-popup-number">
					<span>4</span><span>6</span><span>9</span><span>9</span>
				</view>
				<view class=" padding-xs text-center">
					请记住如上数字<br>并在认证过程中，清晰地读出
				</view>
			</view>
		</view>
			
			<view class="padding-xl flex flex-direction ">
				<button class="cu-btn yanzhengbtns bg-gradual-orange margin-tb-sm round lg" 
				 @click="start">
				 <text class="cuIcon-video margin-right-xs"></text>
				 开始认证
				 </button>
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
	
	/* 验证码按钮激活 */
	.yanzhengbtns {
		background-image: linear-gradient(90deg, #FFB759 3%, #FF7D00 100%);
		box-shadow: 0 6px 12px -3px rgba(255, 180, 92, 0.70);
	}
	.prompt-box-text-number {
	  -webkit-border-radius: 200upx;
	  -moz-border-radius: 200upx;
	  border-radius: 200upx;
	  border: 1upx solid #FBBD08;
	  text-align: center;
	  color: #FBBD08;
	  display: inline-block;
	  width: .934rem;
	  height: .934rem;
	  line-height: .934rem;
	  -webkit-box-sizing: border-box;
	  -moz-box-sizing: border-box;
	  box-sizing: border-box;
	  margin-right: .883rem;
	  letter-spacing: 0;
	  vertical-align: top;
	}

	.prompt-box-text {
	  margin: 0 auto 1.466rem;
	  height: .934rem;
	  line-height: .934rem;
	  width: 22.5rem;
	}

	.prompt-box-text:last-child {
	  margin-bottom: 0;
	}
	.prompt-box-text-content {
	  color: #333;
	  letter-spacing: 0;
	  white-space: nowrap;
	  display: inline-block;
	}

	.prompt-box-text-border {
	  height: .9rem;
	  margin: .247rem 0 .187rem .444rem;
	  width: 0;
	  border-left: 1upx dotted #FBBD08;
	  display: block;
	}
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
