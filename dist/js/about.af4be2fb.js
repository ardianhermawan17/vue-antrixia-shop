(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var a=n("ade3"),i=n("5530"),r=(n("4b85"),n("2b0e")),o=n("d9f7"),s=n("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,a){return n[t+Object(s["v"])(a)]=e(),n}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},g=l("justify",(function(){return{type:String,default:null,validator:v}})),h=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},p=l("alignContent",(function(){return{type:String,default:null,validator:h}})),m={align:Object.keys(f),justify:Object.keys(g),alignContent:Object.keys(p)},y={align:"align",justify:"justify",alignContent:"align-content"};function w(t,e,n){var a=y[t];if(null!=n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return a+="-".concat(n),a.toLowerCase()}}var b=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},g),{},{alignContent:{type:String,default:null,validator:h}},p),render:function(t,e){var n=e.props,i=e.data,r=e.children,s="";for(var c in n)s+=String(n[c]);var u=b.get(s);return u||function(){var t,e;for(e in u=[],m)m[e].forEach((function(t){var a=n[t],i=w(e,t,a);i&&u.push(i)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),b.set(s,u)}(),t(n.tag,Object(o["a"])(i,{staticClass:"row",class:u}),r)}})},"4ec9":function(t,e,n){"use strict";var a=n("6d61"),i=n("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var a=n("9bf2").f,i=n("7c73"),r=n("e2cc"),o=n("0366"),s=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),d=n("83ab"),f=n("f183").fastKey,v=n("69f3"),g=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,a){s(t,l,e),g(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=a&&c(a,t[u],t,n)})),v=h(e),p=function(t,e,n){var a,i,r=v(t),o=m(t,e);return o?o.value=n:(r.last=o={index:i=f(e,!0),key:e,value:n,previous:a=r.last,next:void 0,removed:!1},r.first||(r.first=o),a&&(a.next=o),d?r.size++:t.size++,"F"!==i&&(r.index[i]=o)),t},m=function(t,e){var n,a=v(t),i=f(e);if("F"!==i)return a.index[i];for(n=a.first;n;n=n.next)if(n.key==e)return n};return r(l.prototype,{clear:function(){var t=this,e=v(t),n=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete n[a.index],a=a.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),a=m(e,t);if(a){var i=a.next,r=a.previous;delete n.index[a.index],a.removed=!0,r&&(r.next=i),i&&(i.previous=r),n.first==a&&(n.first=i),n.last==a&&(n.last=r),d?n.size--:e.size--}return!!a},forEach:function(t){var e,n=v(this),a=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),r(l.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),d&&a(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,n){var a=e+" Iterator",i=h(e),r=h(a);u(t,e,(function(t,e){g(this,{type:a,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var a=n("23e7"),i=n("da84"),r=n("94ca"),o=n("6eeb"),s=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),d=n("d039"),f=n("1c7e"),v=n("d44e"),g=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),m=h?"set":"add",y=i[t],w=y&&y.prototype,b=y,x={},j=function(t){var e=w[t];o(w,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(r(t,"function"!=typeof y||!(p||w.forEach&&!d((function(){(new y).entries().next()})))))b=n.getConstructor(e,t,h,m),s.REQUIRED=!0;else if(r(t,!0)){var C=new b,k=C[m](p?{}:-0,1)!=C,O=d((function(){C.has(1)})),V=f((function(t){new y(t)})),z=!p&&d((function(){var t=new y,e=5;while(e--)t[m](e,e);return!t.has(-0)}));V||(b=e((function(e,n){u(e,b,t);var a=g(new y,e,b);return void 0!=n&&c(n,a[m],a,h),a})),b.prototype=w,w.constructor=b),(O||z)&&(j("delete"),j("has"),h&&j("get")),(z||k)&&j(m),p&&w.clear&&delete w.clear}return x[t]=b,a({global:!0,forced:b!=y},x),v(b,t),p||n.setStrong(b,t,h),b}},f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{color:"primary",dark:"","max-width":"800"}},[n("v-card-title",[n("v-icon",{attrs:{large:"",left:""}},[t._v(" mdi-format-quote-close-outline ")]),n("span",{staticClass:"title font-weight-light"},[t._v("Quotes")])],1),n("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(' "Just ordinary man who have interest in Frontend and Artifical Intelegent" ')]),n("v-card-actions",[n("v-list-item",{staticClass:"grow"},[n("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[n("v-img",{staticClass:"elevation-6",attrs:{src:"/img/fotoku.jpg"}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Imanuddin Ardian Hermawan")])],1),n("v-row",{attrs:{align:"center",justify:"end"}},[n("v-btn",{staticClass:"ma-2",attrs:{tile:"",large:"",color:"#E0F7FA",href:"https://github.com/ardianhermawan17",icon:""}},[n("v-icon",{attrs:{right:"",large:""}},[t._v("mdi-github")])],1),n("v-btn",{staticClass:"ma-2",attrs:{tile:"",large:"",color:"#E0F7FA",href:"https://www.linkedin.com/in/imanuddin-ardian-hermawan-059963170/",icon:""}},[n("v-icon",{attrs:{right:"",large:""}},[t._v("mdi-linkedin")])],1)],1)],1)],1)],1)},i=[],r={data:function(){return{}}},o=r,s=n("2877"),c=n("6544"),u=n.n(c),l=n("8336"),d=n("b0af"),f=n("99d9"),v=n("132d"),g=n("adda"),h=n("da13"),p=n("8270"),m=n("5d23"),y=n("0fd9"),w=Object(s["a"])(o,a,i,!1,null,"75e3925a",null);e["default"]=w.exports;u()(w,{VBtn:l["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VIcon:v["a"],VImg:g["a"],VListItem:h["a"],VListItemAvatar:p["a"],VListItemContent:m["a"],VListItemTitle:m["c"],VRow:y["a"]})}}]);
//# sourceMappingURL=about.af4be2fb.js.map