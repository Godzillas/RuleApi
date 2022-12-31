(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{465:function(e,t,o){"use strict";o.r(t);var c={layout:"layout",head:function(){return{title:"COS上传配置"}},data:function(){return{key:"",form:{cosAccessKey:"",cosSecretKey:"",cosBucket:"",cosBucketName:"",cosPath:"",cosPrefix:""}}},beforeDestroy:function(){},created:function(){},mounted:function(){var e=this;localStorage.getItem("webkey")?e.key=localStorage.getItem("webkey"):(e.$message({message:"认证失效！",type:"error"}),e.$router.push({path:"/"})),e.getConfig()},methods:{save:function(){var e=this,t=e.form,data={webkey:e.key,params:JSON.stringify(t)},o=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});e.$axios.$post(e.$api.apiConfigUpdate(),this.qs.stringify(data)).then((function(t){o.close(),1==t.code?(e.$message({message:t.msg,type:"success"}),e.getConfig()):e.$message({message:t.msg,type:"error"})})).catch((function(t){o.close(),console.log(t),e.$message({message:"接口请求异常，请检查网络！",type:"error"})}))},getConfig:function(){var e=this,data={webkey:e.key};e.$axios.$post(e.$api.getApiConfig(),this.qs.stringify(data)).then((function(t){1==t.code&&(e.form.cosAccessKey=t.data.cosAccessKey,e.form.cosSecretKey=t.data.cosSecretKey,e.form.cosBucket=t.data.cosBucket,e.form.cosBucketName=t.data.cosBucketName,e.form.cosPath=t.data.cosPath,e.form.cosPrefix=t.data.cosPrefix)})).catch((function(t){console.log(t),e.$message({message:"接口请求异常，请检查网络！",type:"error"})}))}}},l=o(26),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-container"},[t("el-row",{attrs:{gutter:15}},[t("el-col",{attrs:{span:24}},[t("div",{staticClass:"data-box"},[t("div",{staticClass:"page-title"},[t("h4",[e._v("COS上传配置")]),e._v(" "),t("p",[e._v("COS为腾讯云对象存储，和其它上传方式三选一配置即可，"),t("a",{attrs:{href:"https://cloud.tencent.com/document/product/436/7751",target:"_blank"}},[e._v("官方文档")])])]),e._v(" "),t("div",{staticClass:"page-form"},[t("el-form",{ref:"form",attrs:{model:e.form,"label-position":"top","label-width":"80px"}},[t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("AccessKey")]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入AccessKey"},model:{value:e.form.cosAccessKey,callback:function(t){e.$set(e.form,"cosAccessKey",t)},expression:"form.cosAccessKey"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("SecretKey")]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入SecretKey"},model:{value:e.form.cosSecretKey,callback:function(t){e.$set(e.form,"cosSecretKey",t)},expression:"form.cosSecretKey"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("地域节点Bucket"),t("span",[e._v("地域节点：如ap-guangzhou")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入地域节点Bucket"},model:{value:e.form.cosBucket,callback:function(t){e.$set(e.form,"cosBucket",t)},expression:"form.cosBucket"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("存储桶名称BucketName")]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入存储桶名称BucketName"},model:{value:e.form.cosBucketName,callback:function(t){e.$set(e.form,"cosBucketName",t)},expression:"form.cosBucketName"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("访问地址Path"),t("span",[e._v("对象存储外网访问地址，格式为https://外网域名，末尾不要加斜杆")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入对象存储外网访问地址"},model:{value:e.form.cosPath,callback:function(t){e.$set(e.form,"cosPath",t)},expression:"form.cosPath"}})],1),e._v(" "),t("el-form-item",[t("p",{staticClass:"form-label",attrs:{slot:"label"},slot:"label"},[e._v("文件夹名称"),t("span",[e._v("直接输入名称，不要加斜杠")])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入文件夹名称"},model:{value:e.form.cosPrefix,callback:function(t){e.$set(e.form,"cosPrefix",t)},expression:"form.cosPrefix"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save()}}},[e._v("保存设置")])],1)],1)],1)])])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);