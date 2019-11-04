<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">添加银行卡</block>
		</cu-custom>
		
		<view class="padding-xs flex">
			<view class="flex-sub">
				<text class="text-sm text-left text-grey">*请绑定本人的银行卡 可用于贷款发放和还款 </text>
			</view>
		</view>
		
		<view class="shadow margin-xs di" @click="addbank">
			<van-row>
				<van-col span="16" class="text-left">
					<image class="lo" src="../../static/Icon_Addcard.png" mode="aspectFill"></image>
					<text class="gh">添加银行卡</text>
				</van-col>
				<van-col span="8"  class="text-right">
					<image class="jk" src="../../static/Icon_Add.png" mode="aspectFill"></image>
				</van-col>
			</van-row>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			// 添加银行卡
			addbank(){
				uni.redirectTo({
					url: '../bankCheckfour/bankCheckCard'
				});
			}
		}
	}
</script>

<style>
	page {
		background-image: var(--gradualBlue);
		width: 100vw;
		overflow: hidden;
	}
	.gh{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #707598;
		letter-spacing: -0.23px;
		text-align: center;
		line-height: 14px;
	}
	.di{
		height: 128upx;
		line-height: 128upx;
		background: #FFFFFF;
		box-shadow: 0 4px 12px 0 rgba(184,206,243,0.05);
		border-radius: 8px;
		border-radius: 8px;
		padding: 0 28upx;
	}
	.lo{
		width: 80upx;
		height: 80upx;
		vertical-align: middle;
		margin-right: 20upx;
	}
	.jk{
		width: 48upx;
		height: 48upx;
		vertical-align: middle;
	}
	/* 验证码按钮默认 */
	.yanzhengbtn {
		background: #FDE8D4;
	}

	/* 验证码按钮激活 */
	.yanzhengbtns {
		background-image: linear-gradient(90deg, #FFB759 3%, #FF7D00 100%);
		box-shadow: 0 6px 12px -3px rgba(255, 180, 92, 0.70);
	}
</style>
