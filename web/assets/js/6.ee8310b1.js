(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{254:function(t,e,i){},278:function(t,e,i){"use strict";i(254)},285:function(t,e,i){"use strict";i.r(e);var s={name:"update",data:()=>({visible:!1}),mounted(){if(this.$themeConfig.update&&this.$themeConfig.update.time){const t=this.$themeConfig.update.time;if(window.localStorage){console.log("设置localStorage");window.localStorage.getItem("update_time")==t?this.visible=!1:(this.visible=!0,window.localStorage.setItem("update_time",t))}else{this.getCookie("update_time")==t?this.visible=!1:(this.setCookie("update_time",t),this.visible=!0)}}else this.visible=!1;this.$nextTick(()=>{this.visible&&document.addEventListener("click",this.closeDialog)})},computed:{title(){return this.$themeConfig.update&&this.$themeConfig.update.title?this.$themeConfig.update.title:null},updateList(){return this.$themeConfig.update&&this.$themeConfig.update.updateList?this.$themeConfig.update.updateList:[]}},methods:{setCookie(t,e,i){var s="";if(0!=(i=i||0)){var o=new Date;o.setTime(o.getTime()+1e3*i),s="; expires="+o.toGMTString()}document.cookie=t+"="+escape(e)+s+"; path=/"},getCookie(t){if(document.cookie.length>0){var e=document.cookie.indexOf(t+"=");if(-1!=e){e=e+t.length+1;var i=document.cookie.indexOf(";",e);return-1==i&&(i=document.cookie.length),unescape(document.cookie.substring(e,i)).replace(/\"/g,"")}}return null},closeDialog(t){const e=this.$refs.dialogBox;this.$refs.link;(e&&!e.contains(t.target)||"article_link"==t.target.className)&&(this.visible=!1,this.removeEvent())},removeEvent(){document.removeEventListener("click",this.closeDialog)}}},o=(i(278),i(10)),n=Object(o.a)(s,(function(){var t=this,e=t._self._c;return t.title&&t.updateList.length&&t.visible?e("div",{staticClass:"update_dialog"},[e("div",{ref:"dialogBox",staticClass:"update_container"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.updateList,(function(i,s){return e("div",{key:s,staticClass:"route"},[t._m(0,!0),t._v(" "),e("div",{staticClass:"right_content"},[e("h4",{staticClass:"time"},[t._v(t._s(i.time))]),t._v(" "),t._l(i.content,(function(i,s){return e("router-link",{key:s,ref:"link",refInFor:!0,staticClass:"article_link",attrs:{to:i.url}},[t._v(t._s(i.title))])}))],2)])})),t._v(" "),e("div",{staticClass:"footer_bottom"},[t._v("\r\n               如果您有任何建议, 欢迎加好友私聊\r\n            ")])],2)]):t._e()}),[function(){var t=this._self._c;return t("div",{staticClass:"left_line"},[t("span",{staticClass:"line"})])}],!1,null,"d3d32c74",null);e.default=n.exports}}]);