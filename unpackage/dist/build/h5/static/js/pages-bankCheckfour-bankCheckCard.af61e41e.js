(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bankCheckfour-bankCheckCard"],{"0dc0":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{modalName:null,reg:{mobile:/^[1][3,4,5,7,8][0-9]{9}$/},banklist:["中国银行","中信银行","招商银行","邮储银行","兴业银行","上海银行","浦发银行","平安银行","农业银行","民生银行","交通银行","建设银行","华夏银行","广发银行","光大银行","工商银行","北京银行"],form:{banknum:"",mobile:""}}},methods:{next:function(){""==this.form.banknum||this.form.banknum.length<19?uni.showToast({icon:"none",title:"请输入正确的银行卡号"}):this.reg.mobile.test(this.form.banknum)||uni.showToast({icon:"none",title:"请输入正确的手机号码"})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};a.default=i},"33b6":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,'uni-page-body[data-v-9886ee3c]{background-image:var(--gradualBlue);width:100vw;overflow:hidden}.DrawerPage[data-v-9886ee3c]{position:fixed;width:100vw;height:100vh;left:0;background-color:#f1f1f1;-webkit-transition:all .4s;-o-transition:all .4s;transition:all .4s}.DrawerPage.show[data-v-9886ee3c]{-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9);left:85vw;-webkit-box-shadow:0 0 %?60?% rgba(0,0,0,.2);box-shadow:0 0 %?60?% rgba(0,0,0,.2);-webkit-transform-origin:0;-ms-transform-origin:0;transform-origin:0}.DrawerWindow[data-v-9886ee3c]{position:absolute;width:85vw;height:100vh;left:0;top:0;-webkit-transform:scale(.9) translateX(-100%);-ms-transform:scale(.9) translateX(-100%);transform:scale(.9) translateX(-100%);opacity:0;pointer-events:none;-webkit-transition:all .4s;-o-transition:all .4s;transition:all .4s;padding:%?100?% 0}.DrawerWindow.show[data-v-9886ee3c]{-webkit-transform:scale(1) translateX(0);-ms-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1;pointer-events:all}.DrawerClose[data-v-9886ee3c]{position:absolute;width:40vw;height:100vh;right:0;top:0;color:rgba(0,0,0,0);padding-bottom:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.01)),to(rgba(0,0,0,.6)));background-image:-o-linear-gradient(left,rgba(0,0,0,.01),rgba(0,0,0,.6));background-image:linear-gradient(90deg,rgba(0,0,0,.01),rgba(0,0,0,.6));letter-spacing:5px;font-size:%?50?%;opacity:0;pointer-events:none;-webkit-transition:all .4s;-o-transition:all .4s;transition:all .4s}.DrawerClose.show[data-v-9886ee3c]{opacity:1;pointer-events:all;width:15vw;color:#fff}.DrawerPage .cu-bar.tabbar .action uni-button.cuIcon[data-v-9886ee3c]{width:%?64?%;height:%?64?%;line-height:%?64?%;margin:0;display:inline-block}.DrawerPage .cu-bar.tabbar .action .cu-avatar[data-v-9886ee3c]{margin:0}.DrawerPage .nav[data-v-9886ee3c]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.DrawerPage .nav .cu-item.cur[data-v-9886ee3c]{border-bottom:0;position:relative}.DrawerPage .nav .cu-item.cur[data-v-9886ee3c]:after{content:"";width:%?10?%;height:%?10?%;background-color:currentColor;position:absolute;bottom:%?10?%;border-radius:%?10?%;left:0;right:0;margin:auto}.DrawerPage .cu-bar.tabbar .action[data-v-9886ee3c]{-webkit-box-flex:initial;-webkit-flex:initial;-ms-flex:initial;flex:initial}body.?%PAGE?%[data-v-9886ee3c]{background-image:var(--gradualBlue)}',""])},"3f15":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("cu-custom",{staticClass:"navtit",attrs:{bgColor:"bg-white"}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("填写银行卡")])],2),e("v-uni-scroll-view",{staticClass:"DrawerPage",class:"viewModal"==t.modalName?"show":"",attrs:{"scroll-y":""}},[e("v-uni-view",{staticClass:"padding-sm flex align-center"},[e("v-uni-view",{staticClass:"flex-sub"},[e("v-uni-view",{staticClass:"text-left"},[e("v-uni-text",{staticClass:"text-sm text-grey"},[t._v("请注意：该银行卡将作为贷款发放和还款扣收使用，为保证放款成功请添加列表中的银行卡")]),e("v-uni-text",{staticClass:"text-sm text-right text-blue",attrs:{"data-target":"viewModal"},on:{click:function(a){a=t.$handleEvent(a),t.showModal(a)}}},[t._v("[\t    查看银行列表\t\t]")])],1)],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("卡号")]),e("v-uni-input",{staticClass:"text-right",attrs:{type:"number",maxlength:"19",placeholder:"请添加您本人的储蓄卡",name:"input"},model:{value:t.form.banknum,callback:function(a){t.$set(t.form,"banknum",a)},expression:"form.banknum"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("手机号")]),e("v-uni-input",{staticClass:"text-right",attrs:{type:"number",maxlength:"11",placeholder:"请输入银行预留手机号",name:"input"},model:{value:t.form.mobile,callback:function(a){t.$set(t.form,"mobile",a)},expression:"form.mobile"}})],1)],1),e("v-uni-view",{staticClass:"DrawerClose",class:"viewModal"==t.modalName?"show":"",on:{click:function(a){a=t.$handleEvent(a),t.hideModal(a)}}},[e("v-uni-text",{staticClass:"cuIcon-pullright"})],1),e("v-uni-scroll-view",{staticClass:"DrawerWindow",class:"viewModal"==t.modalName?"show":"",attrs:{"scroll-y":""}},[e("v-uni-view",{staticClass:"cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg"},t._l(t.banklist,function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item text-center"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"cuIcon-moneybag text-orange"}),e("v-uni-text",{staticClass:"text-black"},[t._v(t._s(a))])],1)],1)}),1)],1),e("v-uni-view",{staticClass:"padding flex flex-direction bg-white",staticStyle:{"margin-top":"10upx",position:"fixed",bottom:"0",width:"100%","z-index":"500"}},[e("v-uni-button",{staticClass:"cu-btn bg-black margin-tb-sm round lg",on:{click:function(a){a=t.$handleEvent(a),t.next(a)}}},[t._v("下一步")])],1)],1)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},"9e4a":function(t,a,e){"use strict";e.r(a);var i=e("0dc0"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);a["default"]=n.a},bf48:function(t,a,e){var i=e("33b6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6fc5fc1d",i,!0,{sourceMap:!1,shadowMode:!1})},cc78:function(t,a,e){"use strict";e.r(a);var i=e("3f15"),n=e("9e4a");for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);e("dd83");var r=e("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"9886ee3c",null);a["default"]=s.exports},dd83:function(t,a,e){"use strict";var i=e("bf48"),n=e.n(i);n.a}}]);