(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0f43":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"bg-white page"},[e("iframe",{staticStyle:{display:"none"},attrs:{id:"geoPage",width:"0",height:"0",frameborder:"0",scrolling:"no",src:"https://apis.map.qq.com/tools/geolocation?key=QC3BZ-UMCCG-YQIQ3-ISQAN-JITQ7-E2FI2&referer=myapp"}}),e("cu-custom",{staticClass:"navtit",attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"}),e("template",{attrs:{slot:"content"},slot:"content"},[n._v("易贷登录")])],2),e("v-uni-view",{staticClass:"solids-bottom bg-gray padding-xs flex align-center"},[e("v-uni-view",{staticClass:"flex-sub text-center"},[e("v-uni-view",{staticClass:"text-sm"},[e("v-uni-view",{staticClass:"text-left"},[e("v-uni-text",{staticClass:"text-grey text-left"},[n._v("手机号码将作为登录用户名使用")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-text",{staticClass:"cuIcon-mobile shadow margin-xs margin-right"}),e("v-uni-input",{staticClass:"text-left",attrs:{placeholder:"请输入手机号",maxlength:"11",type:"number",name:"input"},on:{input:function(t){t=n.$handleEvent(t),n.yzinput(t)}},model:{value:n.form.mobile,callback:function(t){n.$set(n.form,"mobile",t)},expression:"form.mobile"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-text",{staticClass:"cuIcon-lock shadow margin-xs margin-right"}),e("v-uni-input",{staticClass:"text-left",attrs:{placeholder:"请输入验证码",maxlength:"6",type:"number",name:"input"},model:{value:n.form.timcou,callback:function(t){n.$set(n.form,"timcou",t)},expression:"form.timcou"}}),e("v-uni-button",{staticClass:"cu-btn round ",class:1==n.yzbtn?"yanzhengbtn":"yanzhengbtns",attrs:{type:"warn"},on:{click:function(t){t=n.$handleEvent(t),n.sendck(t)}}},[e("span",{directives:[{name:"show",rawName:"v-show",value:n.showCount,expression:"showCount"}]},[n._v("验证码")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!n.showCount,expression:"!showCount"}],staticClass:"count"},[n._v(n._s(n.count)+" s")])])],1),e("v-uni-view",{staticClass:"padding-xl solid-top flex flex-direction "},[e("v-uni-button",{staticClass:"cu-btn bg-gradual-orange round lg",class:1==n.yzbtn?"yanzhengbtn":"yanzhengbtns",on:{click:function(t){t=n.$handleEvent(t),n.login(t)},keyup:function(t){if(!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t=n.$handleEvent(t),n.login(t)}}},[n._v("登录")])],1),e("v-uni-view",{staticClass:"padding-sm"},[e("v-uni-view",{staticClass:"text-sm text-center"},[e("v-uni-label",{staticClass:"radio"},[e("v-uni-radio",{staticStyle:{transform:"scale(0.6)"},attrs:{value:"r2",checked:n.current},on:{click:function(t){t=n.$handleEvent(t),n.changeradio(t)}}}),n._v("我已阅读、知悉并同意《"),e("a",{staticClass:"Index-a",attrs:{href:"#"}},[n._v("用户协议")]),n._v("》"),e("br"),n._v("《"),e("a",{staticClass:"Index-a",attrs:{href:"#"}},[n._v("个人信息采集授权书")]),n._v("》、\n\t\t\t\t《"),e("a",{staticClass:"Index-a",attrs:{href:"#"}},[n._v("用户注册协议")]),n._v("》")],1)],1)],1)],1)},o=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})},3935:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 验证码按钮默认 */.yanzhengbtn[data-v-6ca052d7]{background:#fde8d4}\n/* 验证码按钮激活 */.yanzhengbtns[data-v-6ca052d7]{background-image:-webkit-gradient(linear,left top,right top,color-stop(3%,#ffb759),to(#ff7d00));background-image:-o-linear-gradient(left,#ffb759 3%,#ff7d00 100%);background-image:linear-gradient(90deg,#ffb759 3%,#ff7d00);-webkit-box-shadow:0 6px 12px -3px rgba(255,180,92,.7);box-shadow:0 6px 12px -3px rgba(255,180,92,.7)}.cu-form-group .title[data-v-6ca052d7]{min-width:calc(4em + 15px)}.code-style[data-v-6ca052d7]{font-size:16px;color:red;cursor:pointer}.code-box[data-v-6ca052d7]{text-align:center}",""])},"430c":function(n,t,e){"use strict";e.r(t);var i=e("aa94"),o=e.n(i);for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);t["default"]=o.a},8857:function(n,t,e){var i=e("3935");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("4f06").default;o("7ada9adc",i,!0,{sourceMap:!1,shadowMode:!1})},aa94:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={onShow:function(){console.log("App1 Show")},onHide:function(){console.log("App1 Hide")},data:function(){return{current:!1,showCount:!0,yzbtn:!0,count:"",times:1,gpsdetail:null,reg:{mobile:/^[1][3,4,5,7,8][0-9]{9}$/},form:{mobile:"",timcou:"",gps:""}}},onLoad:function(){this.getgps(),this.keyupEnter()},methods:{getgps:function(){var n,t=this;window.addEventListener("message",function(e){n=e.data,n&&"geolocation"==n.module?n.district?t.form.gps=n.district:t.form.gps=n.province:t.form.gps=null,console.log(t.form.gps)},!1),setTimeout(function(){n||alert("请求超时")},6e3)},keyupEnter:function(){var n=this;document.onkeydown=function(t){var e=window.event.keyCode;13==e&&n.login()}},yzinput:function(n){""!=n.detail.value||this.reg.mobile.test(n.detail.value)?this.yzbtn=!1:(this.yzbtn=!0,this.showCount=!0,clearInterval(this.timer),this.timer=null,uni.showToast({icon:"none",title:"请输入正确的手机号码"}))},back:function(){uni.redirectTo({url:"MSloanapply"})},login:function(){this.reg.mobile.test(this.form.mobile)?""==this.form.timcou||6!=this.form.timcou.length?uni.showToast({icon:"none",title:"请输入正确的验证码"}):0==this.current?uni.showToast({icon:"none",title:"请阅读并同意相关协议"}):uni.redirectTo({url:"../linesapply/OcrCheck"}):uni.showToast({icon:"none",title:"请输入正确的手机号码"})},sendck:function(){var n=this;if(this.reg.mobile.test(this.form.mobile))if(1==this.times){var t=60;this.timer||(this.count=t,this.showCount=!1,this.times=2,this.timer=setInterval(function(){n.count>0&&n.count<=t?n.count--:(n.showCount=!0,clearInterval(n.timer),n.timer=null)},1e3))}else if(2==this.times){var e=120;this.timer||(this.count=e,this.showCount=!1,this.times=3,this.timer=setInterval(function(){n.count>0&&n.count<=e?n.count--:(n.showCount=!0,clearInterval(n.timer),n.timer=null)},1e3))}else{var i=200;this.timer||(this.count=i,this.showCount=!1,this.timer=setInterval(function(){n.count>0&&n.count<=i?n.count--:(n.showCount=!0,clearInterval(n.timer),n.timer=null)},1e3))}else uni.showToast({icon:"none",title:"请输入正确的手机号码"})},changeradio:function(){this.current=!this.current}}};t.default=i},d584:function(n,t,e){"use strict";var i=e("8857"),o=e.n(i);o.a},f689:function(n,t,e){"use strict";e.r(t);var i=e("0f43"),o=e("430c");for(var s in o)"default"!==s&&function(n){e.d(t,n,function(){return o[n]})}(s);e("d584");var a=e("2877"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"6ca052d7",null);t["default"]=r.exports}}]);