<template>
	<view>
		<cu-custom bgColor="bg-white" class="navtit">
			<block slot="content">填写银行卡</block>
		</cu-custom>
		
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">
		<view class="padding-xs flex align-center">
			<view class="flex-sub">
				<view>
					<text class="text-sm text-left text-grey">请注意：该银行卡将作为贷款发放和还款扣收使用，为保证放款成功请添加列表中的银行卡。     </text>
					[	 <text class='text-sm text-blue' 
					@tap="showModal" data-target="viewModal">
					     查看银行列表	
					</text>	]
				</view>
			</view>
		</view>
			<view class="cu-form-group" >
			<text class='cuIcon-card margin-xs margin-right'></text>
				<input class="text-left" type="number" maxlength="19" placeholder="请添加您本人的储蓄卡" v-model="form.banknum" name="input"></input>
			</view>
			
			<view class="cu-form-group"  >
				<text class='cuIcon-mobile margin-xs margin-right'></text>
				<input class="text-left" type="number" maxlength="11" placeholder="请输入银行预留手机号" v-model="form.mobile" name="input"></input>
			</view>
			
			<view class="padding-xl solid-top flex flex-direction ">
				<button class="cu-btn bg-gradual-orange round lg" 
				:class="yzbtn==true? 'yanzhengbtn':'yanzhengbtns'" @click="next"
				 @keyup.enter="next">下一步</button>
			</view>
		</scroll-view>
		
		<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
			<text class="cuIcon-pullright"></text>
		</view>
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				<view class="bg-white text-center padding solid-bottom text-xl">
					银行列表
				</view>
				<view class="cu-item text-center" v-for="(item,index) in banklist" :key="index">
					<view class="content">
						<image :src="item.img" mode="aspectFit"></image>
						<text class="text-black text-xl">{{item.bankname}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				modalName:null,
				yzbtn: true, //验证码按钮状态
				img:'../../static/bankimg/gongshang.png',
				reg:{
					//手机
					mobile:/^[1][3,4,5,7,8][0-9]{9}$/,
				},
				
				//银行列表
				banklist:[
					{
						img:'../../static/bankimg/zhongguo.png',
						bankname:'中国银行'
					},
					{
						img:'../../static/bankimg/zhongxin.png',
						bankname:'中信银行'
					},
					{
						img:'../../static/bankimg/zhaoshang.png',
						bankname:'招商银行'
					},
					{
						img:'../../static/bankimg/youzheng.png',
						bankname:'邮储银行'
					},
					{
						img:'../../static/bankimg/xingye.png',
						bankname:'兴业银行'
					},
					{
						img:'../../static/bankimg/shanghai.png',
						bankname:'上海银行'
					},
					{
						img:'../../static/bankimg/pufa.png',
						bankname:'浦发银行'
					},
					{
						img:'../../static/bankimg/pingan.png',
						bankname:'平安银行'
					},
					{
						img:'../../static/bankimg/nongye.png',
						bankname:'农业银行'
					},
					{
						img:'../../static/bankimg/minsheng.png',
						bankname:'民生银行'
					},
					{
						img:'../../static/bankimg/jiaotong.png',
						bankname:'交通银行'
					},
					{
						img:'../../static/bankimg/jianshe.png',
						bankname:'建设银行'
					},
					{
						img:'../../static/bankimg/huaxia.png',
						bankname:'华夏银行'
					},
					{
						img:'../../static/bankimg/guangfa.png',
						bankname:'广发银行'
					},
					{
						img:'../../static/bankimg/guangda.png',
						bankname:'光大银行'
					},
					{
						img:'../../static/bankimg/gongshang.png',
						bankname:'工商银行'
					},
					{
						img:'../../static/bankimg/beijing.png',
						bankname:'北京银行'
					}],
				
				form:{
					banknum:'',		//卡号
					mobile:'',		//手机号
				}
			}
		},
		methods:{
			//下一步
			next(){
				//校验
				if(this.form.banknum == '' || this.form.banknum.length < 19){
					uni.showToast({
						icon:'none',
						title:'请输入正确的银行卡号'
					})
				}else if(!this.reg.mobile.test(this.form.banknum)){
					uni.showToast({
						icon:'none',
						title:'请输入正确的手机号码'
					})
				}
			},
			
			//切换
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
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
	.DrawerPage {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.4s;
	}
	
	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}
	
	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
	}
	
	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}
	
	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 50%;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
	}
	
	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}
	
	.DrawerPage .cu-bar.tabbar .action button.cuIcon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}
	
	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}
	
	.DrawerPage .nav {
		flex: 1;
	}
	
	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}
	
	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}
	
	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
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
