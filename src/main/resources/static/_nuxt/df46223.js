(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{461:function(e,t,o){"use strict";o.r(t);var n={layout:"layout",head:function(){return{title:"安全设置"}},data:function(){return{key:"",form:{banRobots:!1,silenceTime:"",interceptTime:""}}},beforeDestroy:function(){},created:function(){},mounted:function(){var e=this;localStorage.getItem("webkey")?e.key=localStorage.getItem("webkey"):(e.$message({message:"认证失效！",type:"error"}),e.$router.push({path:"/"})),e.getConfig()},methods:{save:function(){var e=this,t=e.form;e.form.banRobots,t.banRobots;var o=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),data={webkey:e.key,params:JSON.stringify(t)};e.$axios.$post(e.$api.apiConfigUpdate(),this.qs.stringify(data)).then((function(t){o.close(),1==t.code?(e.$message({message:t.msg,type:"success"}),e.getConfig()):e.$message({message:t.msg,type:"error"})})).catch((function(t){o.close(),console.log(t),e.$message({message:"接口请求异常，请检查网络！",type:"error"})}))},getConfig:function(){var e=this,data={webkey:e.key};e.$axios.$post(e.$api.getApiConfig(),this.qs.stringify(data)).then((function(t){1==t.code&&(e.form.silenceTime=t.data.silenceTime,e.form.interceptTime=t.data.interceptTime,1==t.data.banRobots?e.form.banRobots=!0:e.form.banRobots=!1)})).catch((function(t){console.log(t),e.$message({message:"接口请求异常，请检查网络！",type:"error"})}))}}},l=o(26),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-container"},[t("el-row",{attrs:{gutter:15}},[t("el-col",{attrs:{span:24}},[t("div",{staticClass:"data-box"},[t("div",{staticClass:"page-title"},[t("h4",[e._v("安全设置")]),e._v(" "),t("p",[e._v("在这里设置安全控制项")])]),e._v(" "),t("div",{staticClass:"page-form"},[t("el-form",{ref:"form",attrs:{model:e.form,"label-position":"top","label-width":"80px"}},[t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("机器人限制模式"),t("span",{staticClass:"text-gray"},[e._v("开启后，将对疑似非人类行为进行拦截和通知")])]),e._v(" "),t("el-switch",{model:{value:e.form.banRobots,callback:function(t){e.$set(e.form,"banRobots",t)},expression:"form.banRobots"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("疑似攻击自动封禁时间"),t("span",[e._v("单位秒，当用户疑似进行攻击行为时，进行封禁")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入时间(s)"},model:{value:e.form.silenceTime,callback:function(t){e.$set(e.form,"silenceTime",t)},expression:"form.silenceTime"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("多次触发违规自动封禁时间"),t("span",[e._v("单位秒，当用户疑多次触发违规词时，进行封禁")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入时间(s)"},model:{value:e.form.interceptTime,callback:function(t){e.$set(e.form,"interceptTime",t)},expression:"form.interceptTime"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save()}}},[e._v("保存设置")])],1)],1)],1)])])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);