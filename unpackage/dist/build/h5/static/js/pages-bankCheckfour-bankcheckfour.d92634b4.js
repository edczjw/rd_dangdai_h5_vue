(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bankCheckfour-bankcheckfour"],{"4ba5":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("cu-custom",{staticClass:"navtit",attrs:{bgColor:"bg-white"}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("验证")])],2),e("v-uni-view",{staticClass:"flex bg-white solid-bottom"},[e("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-grey"},[e("v-uni-text",{staticClass:"cuIcon-ticket margin-xs"}),t._v("关联银行卡")],1),e("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-right text-grey"},[t._v("尾号8888（中国银行）")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-text",{staticClass:"cuIcon-mobile margin-xs"}),e("v-uni-input",{staticClass:"text-left",attrs:{placeholder:"请输入银行预留手机号",name:"input"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-text",{staticClass:"cuIcon-lock margin-xs"}),e("v-uni-input",{staticClass:"text-left",attrs:{placeholder:"请输入验证码",name:"input"}}),e("v-uni-button",{staticClass:"cu-btn bg-black shadow",on:{click:function(n){n=t.$handleEvent(n),t.sendck()}}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.showCount,expression:"showCount"}]},[t._v("验证码")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.showCount,expression:"!showCount"}],staticClass:"count"},[t._v(t._s(t.count)+" s")])])],1),e("v-uni-view",{staticClass:"padding flex flex-direction bg-white",staticStyle:{"margin-top":"10upx",position:"fixed",bottom:"0",width:"100%","z-index":"500"}},[e("v-uni-button",{staticClass:"cu-btn bg-black margin-tb-sm round lg",attrs:{"data-target":"DialogModal1"},on:{click:function(n){n=t.$handleEvent(n),t.showModal(n)}}},[t._v("确定")])],1)],1)},s=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return s})},"89ae":function(t,n,e){"use strict";e.r(n);var i=e("4ba5"),s=e("d1e2");for(var a in s)"default"!==a&&function(t){e.d(n,t,function(){return s[t]})}(a);var o=e("2877"),u=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"6016715a",null);n["default"]=u.exports},d1e2:function(t,n,e){"use strict";e.r(n);var i=e("eb96"),s=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=s.a},eb96:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{showCount:!0,count:"",times:1}},methods:{sendck:function(){var t=this;if(1==this.times){var n=60;this.timer||(this.count=n,this.showCount=!1,this.times=2,this.timer=setInterval(function(){t.count>0&&t.count<=n?t.count--:(t.showCount=!0,clearInterval(t.timer),t.timer=null)},1e3))}else if(2==this.times){var e=120;this.timer||(this.count=e,this.showCount=!1,this.times=3,this.timer=setInterval(function(){t.count>0&&t.count<=e?t.count--:(t.showCount=!0,clearInterval(t.timer),t.timer=null)},1e3))}else{var i=200;this.timer||(this.count=i,this.showCount=!1,this.timer=setInterval(function(){t.count>0&&t.count<=i?t.count--:(t.showCount=!0,clearInterval(t.timer),t.timer=null)},1e3))}}}};n.default=i}}]);