(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{559:function(e,a,t){"use strict";t.r(a);t(4),t(45);var l=t(406),n=[{key:780,value:"默认竞争圈",children:[{key:5,value:"奥迪(进口)"},{key:299,value:"阿斯顿马丁(进口)"},{key:479,value:"阿尔宾娜(进口)"},{key:480,value:"阿尔法·罗密欧(进口)"}]}],s={name:"Manfbrand",data:function(){return{tabs:[{key:0,value:"生产商"},{key:1,value:"生产品牌"},{key:2,value:"品牌"},{key:3,value:"生产商集团"}],selectedTab:0,value:[],texts:[],value2:[],texts2:[],value3:"",valueTab:0,data:[],data3:[],typeData:[]}},mounted:function(){if(this.data=l.a[0],1===this.valueTab){this.data3=n;var e=n.find((function(e){return e.selected}))||{};this.value3=e.key,this.value2[1]=(e.children||[]).map((function(e){return e.key})),this.typeData=l.a}},methods:{tabChange:function(e,a){if(this.selectedTab=e,this.data=l.a[a]||[],1===e){this.data3=n;var t=n.find((function(e){return e.selected}))||{};this.value3=t.key}else this.data3=[],this.value3=""},handleChange:function(e,a){console.log("value",e,a),this.valueTab=this.selectedTab,this.value=e,this.texts=a},handleChange2:function(e,a){console.log("value",e,a),this.value2=e,this.texts2=a},handleChange3:function(e,a){console.log("value",e,a),this.value3=e,this.texts3=a,a&&(this.$set(this.value2,1,(a.children||[]).map((function(e){return e.key}))),this.$set(this.texts2,1,(a.children||[]).map((function(e){return e}))))}}},u=t(0),i=Object(u.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("iw-manfbrand",{attrs:{texts:e.texts,data:e.data,"default-value":[],"default-texts":[],tabs:e.tabs,"selected-tab":e.selectedTab,"value-tab":e.valueTab,"show-check-all":!0,"show-selected":!0,multiple:!0,title:"厂商",placement:"bottom-start",size:"mini"},on:{tabChange:e.tabChange,change:e.handleChange},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),e._v(" "),t("iw-manfbrand",{attrs:{texts:e.texts2,data:e.data,"default-value":[],"default-texts":[],tabs:e.tabs,"selected-tab":e.selectedTab,"value-tab":e.valueTab,"show-check-all":!0,"show-selected":!0,multiple:!0,title:"厂商",placement:"bottom-start",size:"mini"},on:{tabChange:e.tabChange,change:e.handleChange2},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}},[t("template",{slot:"filters-select"},[t("div",{staticClass:"iw-dropdown-filters-select-item"},[t("iw-favorite",{attrs:{data:e.data3,editable:!1,"type-data":e.typeData,"show-search":!0,"append-to-body":!1,title:!1,"sub-type":e.tabs[e.selectedTab].value,type:"manfBrand",size:"mini"},on:{change:e.handleChange3},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1)])],2)],1)}),[],!1,null,null,null);a.default=i.exports}}]);