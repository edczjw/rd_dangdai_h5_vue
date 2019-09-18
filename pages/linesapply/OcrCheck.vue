<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue">
			<block slot="content">身份信息</block>
		</cu-custom>

		<view class="padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<view class="text-left"><text class="text-grey text-left">仅用于全国公民身份查询中心核实身份</text></view>
				</view>
			</view>
		</view>

		<view class="solids-bottom padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="text-sm">
					<view class="text-left"><text class="text-left">拍摄时请确保身份证边框完整、字迹清晰、亮度均衡</text></view>
				</view>
			</view>
		</view>

		<view class="uni-tag--mark uni-tag-normal uni-tag uni-tag--primary" @click="_onClick">身份证 ( 正面照 )</view>
		<view class="grace-idcard-main">
			<view class="grace-idcard-items">
				<view class="grace-idcard-uper-btn" @tap="selectImg1">
					<view class="img">
						<image src="../../static/imgs/camera.png" mode="widthFix" />
					</view>
					<view class="text">拍摄或选择照片</view>
				</view>
				<view class="grace-idcard-preview">
					<image :src="idCard1" @tap="previewImg1" mode="widthFix"></image>
				</view>
			</view>
		</view>
			
		<view class="uni-tag--mark uni-tag-normal uni-tag uni-tag--primary" @click="_onClick">身份证 ( 正面照 )</view>
		<view class="grace-idcard-main">
			<view class="grace-idcard-items">
				<view class="grace-idcard-uper-btn" @tap="selectImg2">
					<view class="img">
						<image src="../../static/imgs/camera.png" mode="widthFix" />
					</view>
					<view class="text">拍摄或选择照片</view>
				</view>
				<view class="grace-idcard-preview">
					<image :src="idCard2" @tap="previewImg2" mode="widthFix" />
				</view>
			</view>
		</view>


		<view class="uni-tag--mark uni-tag-normal uni-tag uni-tag--primary">身份证信息</view>
		<view class="grace-idcard-main">
			<view class="grace-idcard-items">
			<view class="padding bg-white">
				<view class="margin-xs bg-gray cu-form-group">
					<view class="title">姓名</view>
					<input class="uni-input" name="input" placeholder="请输入姓名" />
				</view>
					
				<view class=" margin-xs bg-gray cu-form-group">
					<view class="title">民族</view>
					<input class="uni-input" name="input" placeholder="请输入民族" />
				</view>
				
				<view class=" margin-xs bg-gray cu-form-group">
					<view class="title">出生日期</view>
					<input class="uni-input" name="input" placeholder="请输入出生日期" />
				</view>
				
				<view class=" margin-xs bg-gray cu-form-group align-start">
					<view class="title">身份证号码</view>
					<textarea maxlength="-1" :disabled="idcardnum!=null" @input="textidInput" placeholder="请输入居住地址"></textarea>
				</view>
				
				<view class=" margin-xs bg-gray cu-form-group align-start">
					<view class="title">居住地址</view>
					<textarea maxlength="-1" :disabled="areaname!=null" @input="textareaBInput" placeholder="请输入居住地址"></textarea>
				</view>
			</view>
		</view>
		</view>

			<view style="margin-top:10upx;">
				<view class="padding flex flex-direction  bg-white">
					<button class="cu-btn bg-blue margin-tb-sm lg" @tap="showModal" data-target="DialogModal1">提交</button>
				</view>
			</view>
		
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">请确认</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					您提供的身份信息是本人信息且系统识别正确，以确保业务正常办理。
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">返回检查</button>
						<button class="cu-btn bg-green margin-left" @tap="next">下一步</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				idCard1: '../../static/imgs/idcard1.png',
				idCard2: '../../static/imgs/idcard2.png',
				
				areaname: null,
				idcardnum:null,
				
				modalName:null,
				textidcardValue: '',
				textareaBValue: '',
			};
		},
		onLoad: function() {
			_self = this;
		},
		methods: {
			next(){
				this.modalName = null
				uni.redirectTo({
				    url: 'AudioCheck'
				});
			},
			//显示弹框
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			//隐藏弹框
			hideModal(e) {
				this.modalName = null
			},
			
			//身份证号码输入
			textidInput(e){
				this.textidcardValue = e.detail.value
			},
			
			//居住地址输入
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			},
			
			//选择正面
			selectImg1: function() {
				uni.chooseImage({
					count: 1,
					success: function(res) {
						_self.idCard1 = res.tempFilePaths[0];
					}
				})
			},
			//选择反面
			selectImg2: function() {
				uni.chooseImage({
					count: 1,
					success: function(res) {
						_self.idCard2 = res.tempFilePaths[0];
					}
				})
			},
			previewImg1: function() {
				uni.previewImage({
					urls: [_self.idCard1]
				});
			},
			previewImg2: function() {
				uni.previewImage({
					urls: [_self.idCard2]
				});
			},
			
			//提交
			submit: function() {
				
				
				// if (this.idCard1 == '../../static/imgs/idcard1.png' || this.idCard2 == '../../static/imgs/idcard2.png') {
				// 	uni.showToast({
				// 		title: "请选择身份证照片",
				// 		icon: "none"
				// 	});
				// 	return;
				// }
				// // 因底层限制一次上传一个
				// uni.showLoading({
				// 	title: "上传中"
				// });
				// // 上传正面
				// var uploadTask1 = uni.uploadFile({
				// 	url: 'https://unidemo.dcloud.net.cn/upload',
				// 	filePath: _self.idCard1,
				// 	fileType: 'image',
				// 	name: 'data',
				// 	success: function(uploadFileRes) {
				// 		// 上传成功后返回服务器端保存的路径
				// 		console.log(uploadFileRes.data);
				// 		// 上传背面
				// 		var uploadTask2 = uni.uploadFile({
				// 			url: 'https://unidemo.dcloud.net.cn/upload',
				// 			filePath: _self.idCard2,
				// 			fileType: 'image',
				// 			name: 'data',
				// 			success: function(uploadFileRes) {
				// 				// 上传成功后返回服务器端保存的路径
				// 				console.log(uploadFileRes.data);
				// 				// 至此2张照片上传完毕
				// 				uni.hideLoading();
				// 			}
				// 		});
				// 	}
				// });
			}
		},
	}
</script>

<style>
	view {
		font-size: 28upx;
	}
	
	.uni-tag {
		box-sizing: border-box;
		padding: 0 32upx;
		height: 60upx;
		line-height: calc(60upx - 2px);
		font-size: 28upx;
		display: inline-flex;
		align-items: center;
		color: #333;
		border-radius: 6upx;
		background-color: #f8f8f8;
		border: 1px solid #f8f8f8
	}
	
	.uni-tag--primary {
		color: #fff;
		background-color: #007aff;
		border: 1px solid #007aff
	}
	.uni-tag--mark {
		border-radius: 0 30upx 30upx 0
	}
	.grace-idcard-main {
		margin: 20upx 30upx;
	}

	.grace-idcard-desc {
		line-height: 2em;
		background: #FFFFFF;
		padding: 20upx;
		border-radius: 10upx;
	}

	.grace-idcard-text {
		line-height: 2em;
		margin-top: 30upx;
	}

	.grace-idcard-items {
		background: #FFFFFF;
		padding: 30upx 0;
		display: flex;
		margin: 5upx 0 30upx;
		border-radius: 10upx;
		align-items: flex-start;
	}

	.grace-idcard-uper-btn {
		width: 276upx;
		margin: 0 60upx;
		background: #F1F1F1;
		padding-bottom: 10upx;
		border-radius: 10upx;
		text-align: center;
	}

	.grace-idcard-uper-btn .img {
		width: 80upx;
		height: 80upx;
		margin: 0 auto;
		margin-top: 30upx;
	}

	.grace-idcard-uper-btn .img image {
		width: 100upx;
		height: 100upx;
	}

	.grace-idcard-uper-btn .text {
		width: 100%;
		margin-top: 10upx;
		text-align: center;
		line-height: 2em;
	}

	.grace-idcard-preview {
		width: 50%;
		margin: 0 30upx;
	}

	.grace-idcard-preview image {
		width: 100%;
	}
</style>
