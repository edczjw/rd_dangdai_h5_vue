(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-linesapply-ContractMan"],{"30d1":function(n,e,t){"use strict";t.r(e);var i=t("fe7c"),a=t("8e28");for(var s in a)"default"!==s&&function(n){t.d(e,n,function(){return a[n]})}(s);t("dec3");var o=t("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"71595b92",null);e["default"]=r.exports},"3b2d":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("7f7f");var i={data:function(){return{index:0,yzbtn:!0,picker:[{code:"0",value:"请选择"},{code:"R1",value:"父母"},{code:"R2",value:"配偶"},{code:"R3",value:"子女"}],index1:0,picker1:[{code:"0",value:"请选择"},{code:"O1",value:"亲属"},{code:"O2",value:"朋友"},{code:"O3",value:"同事"},{code:"O4",value:"同学"}],reg:{name:/^[\u4e00-\u9fa5]+$/,phone:/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/},form:{zxcode:"",zxname:"",zxphone:"",othercode:"",othername:"",otherphone:""}}},methods:{next:function(){0==this.form.zxcode||0==this.form.othercode?uni.showToast({icon:"none",title:"请选择联系人关系"}):this.reg.name.test(this.form.zxname)&&this.reg.name.test(this.form.othername)?this.reg.phone.test(this.form.zxphone)&&this.reg.phone.test(this.form.otherphone)?uni.redirectTo({url:"../index/index"}):uni.showToast({icon:"none",title:"请输入正确的手机号码"}):uni.showToast({icon:"none",title:"请输入中文联系人姓名"})},PickerChange:function(n){this.index=n.detail.value,this.form.zxcode=this.picker[this.index].code},PickerChange1:function(n){this.index1=n.detail.value,this.form.othercode=this.picker1[this.index1].code}}};e.default=i},"64ed":function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 验证码按钮默认 */.yanzhengbtn[data-v-71595b92]{background:#fde8d4}\n/* 验证码按钮激活 */.yanzhengbtns[data-v-71595b92]{background-image:-webkit-gradient(linear,left top,right top,color-stop(3%,#ffb759),to(#ff7d00));background-image:-o-linear-gradient(left,#ffb759 3%,#ff7d00 100%);background-image:linear-gradient(90deg,#ffb759 3%,#ff7d00);-webkit-box-shadow:0 6px 12px -3px rgba(255,180,92,.7);box-shadow:0 6px 12px -3px rgba(255,180,92,.7)}",""])},"8e28":function(n,e,t){"use strict";t.r(e);var i=t("3b2d"),a=t.n(i);for(var s in i)"default"!==s&&function(n){t.d(e,n,function(){return i[n]})}(s);e["default"]=a.a},d051:function(n,e,t){var i=t("64ed");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=t("4f06").default;a("7faf482f",i,!0,{sourceMap:!1,shadowMode:!1})},dec3:function(n,e,t){"use strict";var i=t("d051"),a=t.n(i);a.a},fe7c:function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",[t("cu-custom",{staticClass:"navtit",attrs:{bgColor:"bg-white"}},[t("template",{attrs:{slot:"content"},slot:"content"},[n._v("联系人信息")])],2),t("v-uni-view",{staticClass:"padding-xs flex align-center"},[t("v-uni-view",{staticClass:"flex-sub text-center"},[t("v-uni-view",{staticClass:"text-sm"},[t("v-uni-view",{staticClass:"text-left"},[t("v-uni-text",{staticClass:"text-grey text-left"},[n._v("直系亲属联系人")])],1)],1)],1)],1),t("v-uni-view",{staticClass:"bg-white"},[t("v-uni-view",{staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[n._v("关系")]),t("v-uni-view",{staticClass:"uni-list-cell-db "},[t("v-uni-picker",{attrs:{value:n.index,range:n.picker,"range-key":"value"},on:{change:function(e){e=n.$handleEvent(e),n.PickerChange(e)}}},[t("v-uni-view",{staticClass:"uni-input picker"},[n._v(n._s(n.picker[n.index].value))])],1)],1)],1),t("v-uni-view",{staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[n._v("姓名")]),t("v-uni-input",{staticClass:"text-right",attrs:{type:"text",placeholder:"请输入中文姓名",name:"input"},model:{value:n.form.zxname,callback:function(e){n.$set(n.form,"zxname",e)},expression:"form.zxname"}})],1),t("v-uni-view",{staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[n._v("电话号码")]),t("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入手机号码",name:"input"},model:{value:n.form.zxphone,callback:function(e){n.$set(n.form,"zxphone",e)},expression:"form.zxphone"}})],1),t("v-uni-view",{staticClass:"padding-xs flex align-center bg-gray  margin-top"},[t("v-uni-view",{staticClass:"flex-sub text-center"},[t("v-uni-view",{staticClass:"text-sm"},[t("v-uni-view",{staticClass:"text-left"},[t("v-uni-text",{staticClass:"text-grey text-left"},[n._v("其他联系人")])],1)],1)],1)],1),t("v-uni-view",{staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[n._v("关系")]),t("v-uni-view",{staticClass:"uni-list-cell-db"},[t("v-uni-picker",{attrs:{value:n.index1,range:n.picker1,"range-key":"value"},on:{change:function(e){e=n.$handleEvent(e),n.PickerChange1(e)}}},[t("v-uni-view",{staticClass:"uni-input picker"},[n._v(n._s(n.picker1[n.index1].value))])],1)],1)],1),t("v-uni-view",{staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[n._v("姓名")]),t("v-uni-input",{staticClass:"text-right",attrs:{type:"text",placeholder:"请输入中文姓名",name:"input"},model:{value:n.form.othername,callback:function(e){n.$set(n.form,"othername",e)},expression:"form.othername"}})],1),t("v-uni-view",{staticClass:"cu-form-group"},[t("v-uni-view",{staticClass:"title"},[n._v("电话号码")]),t("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"请输入手机号码",name:"input"},model:{value:n.form.otherphone,callback:function(e){n.$set(n.form,"otherphone",e)},expression:"form.otherphone"}})],1)],1),t("v-uni-view",{staticClass:"padding-xl solid-top flex flex-direction "},[t("v-uni-button",{staticClass:"cu-btn bg-gradual-orange round lg",class:1==n.yzbtn?"yanzhengbtn":"yanzhengbtns",on:{click:function(e){e=n.$handleEvent(e),n.next(e)},keyup:function(e){if(!e.type.indexOf("key")&&n._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e=n.$handleEvent(e),n.next(e)}}},[n._v("下一步")])],1)],1)},a=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return a})}}]);