<template>
	<view>
		<cu-custom bgColor="bg-black">
			<block slot="content">贷款申请</block>
		</cu-custom>
		
		<view class="bg-white padding-xl">
			<!-- 金额 -->
			<countup :num="num" color="#ff9e50" width='28' height='58' fontSize='38'></countup>
			
			<!-- 滑动变值 -->
			<view>
				<view class="flex">
					<text class="flex-sub margin-xs radius text-left text-sm" @tap="reduce ">小富即安</text> 
					<text class="flex-sub margin-xs radius text-right text-xl text-bold text-orange" @tap="add">一夜暴富</text>
				</view>
				<slider :value="num" @change="sliderChange" :min="minMoney" :max="maxMoney" show-value />
			</view>
		</view>
		<!-- 期数 -->
		<view style="overflow-y: scroll;margin-bottom: 200px;">
			<wuc-tab :tab-list="tabList5" :tabCur.sync="TabCur5" tab-class="text-center text-black bg-white" select-class="text-blue" />
			<swiper :current="TabCur5" class="swiper" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)" 
			indicator-active-color="rgba(255,255,255,0)" @change="swiperChange5">
				<swiper-item v-for="(item,index) in tabList5" :key="index">
					
				  <!-- 切换值 -->
				  <view class="bg-white padding margin text-center text-black">
					<!-- {{item.name}} -->
					
					<!-- 列表 -->
					<t-table @change="change">
						<t-tr>
							<t-th>年份</t-th>
							<t-th>还款日</t-th>
							<t-th>应还</t-th>
							<t-th>本金</t-th>
							<t-th>利息</t-th>
							<t-th>担保费</t-th>
						</t-tr>
						<t-tr v-for="item in tableList" :key="item.id">
							<t-td>{{ item.id + 1 }}</t-td>
							<t-td>{{ item.name }}</t-td>
							<t-td>{{ item.age }}</t-td>
							<t-td>{{ item.hobby }}</t-td>
							<t-td>{{ item.hobby }}</t-td>
							<t-td>{{ item.hobby }}</t-td>
						</t-tr>
					</t-table>
					
				  </view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="padding flex flex-direction bg-white solid-top" style="margin-top:10upx;position: fixed;bottom: 0;width: 100%; z-index: 500;">
			<button class="cu-btn bg-black margin-tb-sm round lg" @click="wantloan">我要借钱</button>
		</view>
	</view>
</template>

<script>
import WucTab from '@/components/wuc-tab/wuc-tab.vue';
import tTable from '@/components/t-table/t-table.vue';
import tTh from '@/components/t-table/t-th.vue';
import tTr from '@/components/t-table/t-tr.vue';
import tTd from '@/components/t-table/t-td.vue';

	export default {
		data(){
			return{
				num:1000,//初始值
				minMoney:1000,//最小值
				maxMoney:122200,//最大值
				//组别
				tabList5: [
						{ name: '6期', icon: '' },
						{ name: '9期', icon: '' },
						{ name: '12期', icon: '' }
					],
				TabCur5: 0,//默认值
				
				//表格数据
				tableList: [{
							id: 2019,
							name: '09-29',
							age: '190000',
							hobby: '189999'
						},
						{
							id: 2019,
							name: '09-29',
							age: '190000',
							hobby: '189999'
						},
						{
							id: 2019,
							name: '09-29',
							age: '190000',
							hobby: '189999'
						},
						{
							id: 2019,
							name: '09-29',
							age: '190000',
							hobby: '189999'
						},{
							id: 2019,
							name: '09-29',
							age: '190000',
							hobby: '189999'
						},{
							id: 2019,
							name: '09-29',
							age: '190000',
							hobby: '189999'
						},{
							id: 2019,
							name: '09-29',
							age: '190000',
							hobby: '189999'
						},
					],
			}
		},
		components: { 
			tTable,
			tTh,
			tTr,
			tTd,
			WucTab 
		},
		methods:{
			//我要借钱
			wantloan(){
				uni.redirectTo({
				    url: '/pages/index/index'
				});
			},
			//标签切换
			swiperChange5(e) {
				this.TabCur5 = e.target.current;
				console.log(this.TabCur5)
			},
			//滑动变值
			sliderChange(e) {
				console.log('value 发生变化：' + e.detail.value)
				this.num = parseInt(e.detail.value)
			},
			
			//增加		
			add() {
				if(this.num < 122200){
					this.num=this.num+100;
				}else{
					this.num = 122200;
				}
			},
			//减少
			reduce(){
				if(this.num>=100){
					this.num=this.num-100;
				}else{
					this.num = 1000;
				}
			}
		}
	}
</script>

<style>
	
div,
scroll-view,
swiper {
	box-sizing: border-box;
}
div {
  font-size: 28upx;
  background-color: #f1f1f1;
}
.swiper {
	min-height: 800upx;
}

.cu-bar {
	display: flex;
	position: relative;
	align-items: center;
	min-height: 100upx;
	justify-content: space-between;
}

.cu-bar .action {
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: center;
	max-width: 100%;
    background-color: #ffffff;
}

.cu-bar .action:first-child {
	margin-left: 30upx;
	font-size: 30upx;
}

.solid,
.solid-bottom {
	position: relative;
}

.solid::after,
.solid-bottom::after{
	content: " ";
	width: 200%;
	height: 200%;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: inherit;
	transform: scale(0.5);
	transform-origin: 0 0;
	pointer-events: none;
	box-sizing: border-box;
}

.solid::after {
	border: 1upx solid rgba(0, 0, 0, 0.1);
}

.solid-bottom::after {
	border-bottom: 1upx solid rgba(0, 0, 0, 0.1);
}

.text-orange{
  color:#f37b1d
}
.text-black{
  color:#333333;
}
.bg-white{
	background-color: #ffffff;
}

.padding {
	padding: 20upx;
}

.margin {
	margin: 20upx;
}

.margin-top {
	margin-top: 20upx;
}
.text-center {
	text-align: center;
}
</style>
