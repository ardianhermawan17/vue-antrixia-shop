(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["books"],{"0bc6":function(t,e,i){},"17b3":function(t,e,i){},"4de9":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",{staticClass:"ma-0 pa-0",attrs:{"grid-list-sm":""}},[i("v-subheader",[t._v(" All Books ")]),i("v-layout",{attrs:{wrap:""}},t._l(t.books,(function(e){return i("v-flex",{key:"book-"+e.id,attrs:{xs6:""}},[i("v-card",{attrs:{to:"/book/"+e.slug}},[i("v-img",{staticClass:"white--text",attrs:{src:t.getImage(e.cover)}}),i("v-card-title",{staticClass:"fill-height align-end",domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),[i("div",{staticClass:"text-center"},[i("v-pagination",{attrs:{length:t.lengthPage,"total-visible":5},on:{input:t.go},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)]],2)},a=[],s={name:"Books",data:function(){return{books:[],page:0,lengthPage:0}},created:function(){this.go()},methods:{go:function(){var t=this,e="/books?page="+this.page;this.axios.get(e).then((function(e){var i=e.data.data,n=e.data.meta;t.books=i,t.lengthPage=n.last_page,t.page=n.current_page})).catch((function(t){var e=t.responses;console.log(e)}))}}},r=s,o=i("2877"),l=i("6544"),u=i.n(l),c=i("b0af"),h=i("99d9"),v=i("a523"),g=i("0e8f"),d=i("adda"),p=i("a722"),f=i("891e"),m=i("e0c7"),b=Object(o["a"])(r,n,a,!1,null,"0a7a4fe4",null);e["default"]=b.exports;u()(b,{VCard:c["a"],VCardTitle:h["d"],VContainer:v["a"],VFlex:g["a"],VImg:d["a"],VLayout:p["a"],VPagination:f["a"],VSubheader:m["a"]})},"891e":function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("d3b7"),i("25f0");var n=i("2909"),a=i("5530"),s=(i("17b3"),i("9d26")),r=i("dc22"),o=i("a9ad"),l=i("de2c"),u=i("7560"),c=i("58df");e["a"]=Object(c["a"])(o["a"],Object(l["a"])({onVisible:["init"]}),u["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(a["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,a=Math.floor(e/2),s=this.length-a+1+i;if(this.value>a&&this.value<s){var r=this.value-a+2,o=this.value+a-2-i;return[1,"..."].concat(Object(n["a"])(this.range(r,o)),["...",this.length])}if(this.value===a){var l=this.value+a-1-i;return[].concat(Object(n["a"])(this.range(1,l)),["...",this.length])}if(this.value===s){var u=this.value-a+1;return[1,"..."].concat(Object(n["a"])(this.range(u,this.length)))}return[].concat(Object(n["a"])(this.range(1,a)),["..."],Object(n["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var n=t;n<=e;n++)i.push(n);return i},genIcon:function(t,e,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button"},on:i?{}:{click:n}},[t(s["a"],[e])])])},genItem:function(t,e){var i=this,n=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},e0c7:function(t,e,i){"use strict";var n=i("5530"),a=(i("0bc6"),i("7560")),s=i("58df");e["a"]=Object(s["a"])(a["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(n["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=books.9bb70030.js.map