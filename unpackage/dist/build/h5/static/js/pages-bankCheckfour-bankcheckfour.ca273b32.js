(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bankCheckfour-bankcheckfour"],{"89ae":function(t,n,e){"use strict";e.r(n);var s=e("ca6c"),i=e("d1e2");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);var o=e("2877"),u=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,"703d67e0",null);n["default"]=u.exports},ca6c:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-black"}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("验证")])],2),e("v-uni-view",{staticClass:"flex bg-white solid-bottom"},[e("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-grey"},[e("v-uni-text",{staticClass:"cuIcon-ticket margin-xs"}),t._v("关联银行卡")],1),e("v-uni-view",{staticClass:"flex-sub padding-sm margin-xs text-right text-grey"},[t._v("尾号8888（中国银行）")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-text",{staticClass:"cuIcon-mobile margin-xs"}),e("v-uni-input",{staticClass:"text-left",attrs:{placeholder:"请输入银行预留手机号",name:"input"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-text",{staticClass:"cuIcon-lock margin-xs"}),e("v-uni-input",{staticClass:"text-left",attrs:{placeholder:"请输入验证码",name:"input"}}),e("v-uni-button",{staticClass:"cu-btn bg-black shadow",on:{click:function(n){n=t.$handleEvent(n),t.sendck()}}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.showCount,expression:"showCount"}]},[t._v("验证码")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.showCount,expression:"!showCount"}],staticClass:"count"},[t._v(t._s(t.count)+" s")])])],1),e("v-uni-view",{staticClass:"padding flex flex-direction bg-white",staticStyle:{"margin-top":"10upx",position:"fixed",bottom:"0",width:"100%","z-index":"500"}},[e("v-uni-button",{staticClass:"cu-btn bg-black margin-tb-sm round lg",attrs:{"data-target":"DialogModal1"},on:{click:function(n){n=t.$handleEvent(n),t.showModal(n)}}},[t._v("确定")])],1)],1)},i=[];e.d(n,"a",function(){return s}),e.d(n,"b",function(){return i})},d1e2:function(t,n,e){"use strict";e.r(n);var s=e("eb96"),i=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(n,t,function(){return s[t]})}(a);n["default"]=i.a},eb96:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={data:function(){return{showCount:!0,count:""}},methods:{sendck:function(){var t=this,n=60;this.timer||(this.count=n,this.showCount=!1,this.timer=setInterval(function(){t.count>0&&t.count<=n?t.count--:(t.showCount=!0,clearInterval(t.timer),t.timer=null)},1e3))}}};n.default=s}}]);