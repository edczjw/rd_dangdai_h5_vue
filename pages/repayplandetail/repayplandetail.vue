<template>
	<view>
		<cu-custom bgColor="bg-black">
			<block slot="content">还款计划</block>
		</cu-custom>
		<div>
			
		  <div class="cu-bar bg-white margin-top solid-bottom">
			<div class="action">
			  <text class="cuIcon-titles text-orange"></text>还款计划
			</div>
		  </div>
		  <wuc-tab :tab-list="tabList5" :tabCur.sync="TabCur5" tab-class="text-center text-black bg-white" select-class="text-blue" />
		  <swiper :current="TabCur5" class="swiper" duration="300" :circular="true" indicator-color="rgba(255,255,255,0)" 
		  indicator-active-color="rgba(255,255,255,0)" @change="swiperChange5">
			<swiper-item v-for="(item,index) in tabList5" :key="index">
			  <div class="bg-white padding margin text-center text-black">{{item.name}}</div>
			</swiper-item>
		  </swiper>
		</div>
	</view>
</template>

<script>
import WucTab from '@/components/wuc-tab/wuc-tab.vue';
export default {
	data(){
		return {
			//组别
		    tabList5: [
					{ name: '6期', icon: 'cuIcon-usefull' },
					{ name: '9期', icon: 'cuIcon-usefull' },
					{ name: '12期', icon: 'cuIcon-usefull' }
				],
			TabCur5: 0,//默认值
		}
	},
    components: { WucTab },
	methods:{
		swiperChange5(e) {
					this.TabCur5 = e.target.current;
					console.log(this.TabCur5)
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
    height: 140upx;
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
    padding: 30upx;
}

.margin {
    margin: 30upx;
}

.margin-top {
    margin-top: 30upx;
}
.text-center {
    text-align: center;
}
</style>
