(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-loanapplyconfirm-confirmqpply"],{3142:function(t,e,i){var n=i("dc62f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1b28a416",n,!0,{sourceMap:!1,shadowMode:!1})},"4dd4":function(t,e,i){"use strict";i.r(e);var n=i("880a"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"666b":function(t,e,i){"use strict";var n=i("3142"),a=i.n(n);a.a},"729b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{staticClass:"navtit",attrs:{bgColor:"bg-white"}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("借款确认")])],2),i("v-uni-view",{staticClass:"margin bg-white padding shadow top-play"},[i("v-uni-view",{staticClass:"flex "},[i("van-divider",{staticClass:"flex-sub margin radius tio",attrs:{"content-position":"right"}},[t._v("借款信息")])],1),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"flex-sub margin radius left-tio"},[t._v("借款金额")]),i("v-uni-view",{staticClass:"flex-sub margin radius text-right right-tio"},[t._v("￥1500")])],1),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"flex-sub margin radius left-tio"},[t._v("收款银行卡")]),i("v-uni-view",{staticClass:"flex margin radius text-right right-tio"},[t._v("中国银行(尾号8888)")])],1),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"flex-sub margin radius left-tio"},[t._v("借款期数")]),i("v-uni-view",{staticClass:"flex-sub margin radius text-right right-tio"},[t._v("6期")])],1),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"flex-sub margin radius left-tio"},[t._v("还款日")]),i("v-uni-view",{staticClass:"flex-sub margin radius text-right right-tio"},[i("span",{staticStyle:{background:"#252E47",color:"#ffffff","border-radius":"6upx",padding:"0 10upx"}},[t._v("首次")]),t._v("2019-09-22")])],1),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"flex-sub margin radius left-tio"},[t._v("还款方式")]),i("v-uni-view",{staticClass:"flex-sub margin radius text-right right-tio"},[t._v("等额本息")])],1)],1),i("v-uni-view",{staticClass:"margin bg-white padding shadow def"},[i("v-uni-view",{staticClass:"margin-top padding"},[i("span",{staticClass:"his"},[t._v("短信验证码")]),i("br"),i("span",{staticClass:"hi"},[t._v("为了您的账号安全 请输入138 0138 0000 验证码")])]),i("van-password-input",{attrs:{value:t.value,mask:!1,focused:t.showKeyboard},on:{focus:function(e){e=t.$handleEvent(e),t.showKeyboard=!0}}}),i("van-number-keyboard",{staticStyle:{"z-index":"9999"},attrs:{show:t.showKeyboard},on:{input:function(e){e=t.$handleEvent(e),t.onInput(e)},delete:function(e){e=t.$handleEvent(e),t.onDelete(e)},blur:function(e){e=t.$handleEvent(e),t.showKeyboard=!1}}}),i("v-uni-view",{staticClass:"text-center padding"},[i("v-uni-button",{staticClass:"cu-btn bg-gradual-orange round",class:1==t.yzbtn?"yanzhengbtn":"yanzhengbtns",on:{click:function(e){e=t.$handleEvent(e),t.sendck()}}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.showCount,expression:"showCount"}]},[t._v("获取验证码")]),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.showCount,expression:"!showCount"}],staticClass:"count"},[t._v(t._s(t.count)+" s")])])],1)],1),i("v-uni-view",{staticClass:"bottom-ss"},[i("v-uni-view",{staticClass:"rad padding-left-xl padding-top padding-bottom text-black"},[i("md-agree",{attrs:{disabled:t.agreeConf.disabled,size:t.agreeConf.size},on:{change:function(e){e=t.$handleEvent(e),t.onChange(t.agreeConf.name,t.agreeConf.checked,e)}},model:{value:t.agreeConf.checked,callback:function(e){t.$set(t.agreeConf,"checked",e)},expression:"agreeConf.checked"}},[t._v("我已阅读、知悉并同意"),t._v("《"),i("a",{staticClass:"Index-a",attrs:{href:"#"}},[t._v("借款协议")]),t._v("》、《"),i("a",{staticClass:"Index-a",attrs:{href:"#"}},[t._v("担保协议")]),t._v("》")])],1),i("v-uni-view",{staticClass:"padding-left-xl padding-right-xl padding-bottom-xl flex flex-direction "},[i("v-uni-button",{staticClass:"cu-btn bg-gradual-orange round lg",class:1==t.yzbtn?"yanzhengbtn":"yanzhengbtns",on:{click:function(e){e=t.$handleEvent(e),t.next(e)},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e=t.$handleEvent(e),t.next(e)}}},[t._v("下一步")])],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"880a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{value:"",showKeyboard:!1,agreeConf:{checked:!1,name:"agree1",size:"",disabled:!1,introduction:"未选中状态"},code:"",current:!1,showCount:!0,yzbtn:!0,count:"",times:1,verificationCode:"",form:{timcou:""}}},methods:{onInput:function(t){this.value=(this.value+t).slice(0,6)},onDelete:function(){this.value=this.value.slice(0,this.value.length-1)},onChange:function(t,e){console.log("agree name = ".concat(t," is ").concat(e?"checked":"unchecked"))},getCode:function(){return this.code},makesure:function(){""==this.form.timcou||6!=this.form.timcou.length?uni.showToast({icon:"none",title:"请输入正确的验证码"}):0==this.current?uni.showToast({icon:"none",title:"请阅读并同意业务协议"}):uni.redirectTo({url:"../loanapplysuccess/loanapplysuccess"})},sendck:function(){var t=this;if(1==this.times){var e=60;this.timer||(this.count=e,this.showCount=!1,this.times=2,this.timer=setInterval(function(){t.count>0&&t.count<=e?t.count--:(t.showCount=!0,clearInterval(t.timer),t.timer=null)},1e3))}else if(2==this.times){var i=120;this.timer||(this.count=i,this.showCount=!1,this.times=3,this.timer=setInterval(function(){t.count>0&&t.count<=i?t.count--:(t.showCount=!0,clearInterval(t.timer),t.timer=null)},1e3))}else{var n=200;this.timer||(this.count=n,this.showCount=!1,this.timer=setInterval(function(){t.count>0&&t.count<=n?t.count--:(t.showCount=!0,clearInterval(t.timer),t.timer=null)},1e3))}},changeradio:function(){this.current=!this.current}}};e.default=n},be7f:function(t,e,i){"use strict";i.r(e);var n=i("729b"),a=i("4dd4");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("666b");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"b2a8794e",null);e["default"]=r.exports},dc62f:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".def[data-v-b2a8794e]{margin-bottom:%?300?%}.code-input-input[data-v-b2a8794e]{height:%?40?%;position:absolute;outline:none;color:rgba(0,0,0,0);text-shadow:0 0 0 rgba(0,0,0,0);width:300%;margin-left:-100%}.code-input-main[data-v-b2a8794e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.code-input-main-item[data-v-b2a8794e]{font-family:time-font-myself;border:%?1?% solid #535777;border-radius:%?4?%;width:%?60?%;height:%?70?%;line-height:%?70?%;opacity:.8;margin:%?10?%;text-align:center;font-size:%?40?%;color:#000}.his[data-v-b2a8794e]{font-family:PingFangSC-Medium;font-size:%?36?%;color:#535777;letter-spacing:-.3px;line-height:18px}.hi[data-v-b2a8794e]{font-family:PingFangSC-Regular;font-size:%?28?%;padding:%?20?% 0 0 0;display:block;color:#707598;line-height:%?28?%;text-align:justify}.top-play[data-v-b2a8794e]{border-top:%?8?% solid #ff7d00;position:relative}.htio[data-v-b2a8794e]{position:absolute;padding:%?15?%;background:#ff7d00;color:#fff;-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;right:0;top:0;border-bottom-left-radius:%?30?%}.tio[data-v-b2a8794e]{font-family:PingFangSC-Semibold;font-size:%?36?%;color:#535777;letter-spacing:-.26px;line-height:14px}.left-tio[data-v-b2a8794e]{font-family:PingFangSC-Regular;font-size:%?32?%;color:#707598;letter-spacing:0;line-height:%?28?%}.right-yio[data-v-b2a8794e]{font-family:PingFangSC-Semibold;font-size:%?32?%;color:#535777;text-align:right;font-weight:700;line-height:%?28?%}\n/* 验证码按钮默认 */.yanzhengbtn[data-v-b2a8794e]{background:#fde8d4}\n/* 验证码按钮激活 */.yanzhengbtns[data-v-b2a8794e]{background-image:-webkit-gradient(linear,left top,right top,color-stop(3%,#ffb759),to(#ff7d00));background-image:-o-linear-gradient(left,#ffb759 3%,#ff7d00 100%);background-image:linear-gradient(90deg,#ffb759 3%,#ff7d00);-webkit-box-shadow:0 6px 12px -3px rgba(255,180,92,.7);box-shadow:0 6px 12px -3px rgba(255,180,92,.7)}",""])}}]);