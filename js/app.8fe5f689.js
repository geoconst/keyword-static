(function(t){function e(e){for(var s,r,c=e[0],i=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2395:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s,n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],c=(a("7c55"),a("2877")),i={},l=Object(c["a"])(i,o,r,!1,null,null,null),u=l.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap",class:{init:!t.showResult}},[t._m(0),a("div",{staticClass:"search"},[a("div",{staticClass:"search-in"},[a("div",{staticClass:"col-select"},[a("a-select",{staticClass:"select",attrs:{defaultValue:"country",size:"large"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.countrys,(function(e){return a("a-select-option",{key:e.value},[a("i",{staticClass:"flag",style:{backgroundImage:"url("+e.img+")"}}),t._v(t._s(e.name))])})),1)],1),a("div",{staticClass:"col-input"},[a("a-auto-complete",{staticClass:"input",attrs:{size:"large",dataSource:t.dataSource,placeholder:"请输入关键词",defaultActiveFirstOption:!1,allowClear:!0},on:{search:t.onSearchKeyword},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),a("div",{staticClass:"col-btn"},[a("a-button",{staticClass:"btn",attrs:{"html-type":"submit",size:"large"},on:{click:t.onSearch}},[t._v("搜索")])],1)])]),t.showResult?a("div",{staticClass:"result"},[a("div",{staticClass:"total"},[t._v("找到"),a("b",[t._v(t._s(t.counts))]),t._v("条记录")]),a("a-table",{attrs:{columns:t.tableColumns,loading:t.loading,rowKey:function(t){return t.keyword},dataSource:t.tableDataSource,pagination:t.pagination},scopedSlots:t._u([{key:"keyword",fn:function(e,s){return[a("span",{staticClass:"keyword",on:{click:function(){t.onShowDetail(s.keyword)}}},[t._v(t._s(e))]),a("a-tooltip",{attrs:{placement:"topLeft",arrowPointAtCenter:"",title:"去亚马逊搜索此关键词"}},[a("a",{staticClass:"link-amazon",attrs:{href:t.currentCountryInfo.link+"?k="+s.keyword,target:"_blank"}})])]}},{key:"numFormat",fn:function(e,s){return[a("div",{staticClass:"right"},[e<0?a("span",{staticClass:"gray center"},[t._v("N/A")]):a("span",[t._v(t._s(t._f("number")(e)))])])]}},{key:"precentFormat",fn:function(e,s){return[a("div",{staticClass:"right"},[t._v(t._s(e)+"%")])]}},{key:"stringFormat",fn:function(e,s){return[e.length<1?a("span",{staticClass:"gray"},[t._v("N/A")]):a("span",[t._v(t._s(e))])]}}],null,!1,3365970002)},[t._l(t.tableColumns,(function(e){return[a("span",{attrs:{slot:"customTitle_"+e.dataIndex},slot:"customTitle_"+e.dataIndex},[e.desc.length>0?a("span",[a("a-tooltip",[a("template",{slot:"title"},[t._v(" "+t._s(e.desc)+" ")]),a("span",{staticClass:"table-tit"},[t._v(t._s(e.name))])],2)],1):a("span",[t._v(t._s(e.name))])])]}))],2)],1):t._e(),a("a-drawer",{staticClass:"chart",attrs:{placement:"bottom",closable:!1,destroyOnClose:!0,visible:t.visible,height:"500px"},on:{close:t.onCloseDrawer}},[a("div",{staticClass:"chart-tit"},[t._v("关键词："),a("strong",{staticClass:"key"},[t._v(t._s(t.detailKeyword))])]),a("div",{staticClass:"chart-datas"},[a("div",{staticClass:"item"},[t._v("月份："+t._s(t.detailDataSource.month))]),a("div",{staticClass:"item"},[t._v("top3点击率："+t._s(t.detailDataSource.top3Clicks)+"%")]),a("div",{staticClass:"item"},[t._v("top3转化率："+t._s(t.detailDataSource.top3Convers)+"%")]),a("div",{staticClass:"item"},[t._v("搜索量："),t.detailDataSource.searchs<0?a("span",[t._v("N/A")]):a("span",[t._v(t._s(t._f("number")(t.detailDataSource.searchs)))])]),a("div",{staticClass:"item"},[t._v("去年同期搜索量："),t.detailDataSource.yoySearchs<0?a("span",[t._v("N/A")]):a("span",[t._v(t._s(t._f("number")(t.detailDataSource.yoySearchs)))])]),a("div",{staticClass:"item"},[t._v("上月搜索量："),t.detailDataSource.momSearchs<0?a("span",[t._v("N/A")]):a("span",[t._v(t._s(t._f("number")(t.detailDataSource.momSearchs)))])])]),a("echart",{attrs:{datas:t.detailDataSource}})],1)],1)},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("h1",{staticClass:"logo"},[s("img",{attrs:{src:a("cf05"),alt:""}})]),s("div",{staticClass:"links"},[s("a",{staticClass:"link-home",attrs:{href:"#"}},[t._v("首页")]),s("a",{staticClass:"link-report",attrs:{href:"#"}},[t._v("关键词报告")]),s("a",{staticClass:"link-login",attrs:{href:"#"}},[t._v("登录")])])])}],h=(a("7db0"),a("b0c0"),a("2909")),f=a("ade3"),v=a("8f58"),y=a.n(v),_=(a("8fef"),a("0458")),g=a.n(_),b=a("c4c6"),w=a.n(b),k=(a("55af"),a("9456")),S=a.n(k),C=(a("76b6"),a("073a")),x=a.n(C),O=(a("f182"),a("edb7")),T=a.n(O),D=(a("f4e4"),a("bc3a")),j=a.n(D),I=a("6612"),A=a.n(I),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%",height:"350px"},attrs:{id:"chart"}})},N=[],R=(a("4160"),a("ac1f"),a("1276"),a("159b"),{name:"echart",props:["datas"],mounted:function(){this.drawChart()},methods:{drawChart:function(){var t=[],e=[],a=[],s=[];this.datas.searchs_his.forEach((function(e){t.push(e.split(",")[0])})),this.datas.searchs_his.forEach((function(t){e.push(t.split(",")[1])})),this.datas.clicks_his.forEach((function(t){a.push(t.split(",")[1])})),this.datas.convers_his.forEach((function(t){s.push(t.split(",")[1])}));var n=echarts.init(document.getElementById("chart")),o={color:["#add1f8","#ffc015","#0c6"],tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"},label:{backgroundColor:"#ccc",color:"#222"}},formatter:function(t){var e="";return t.forEach((function(t,a){e+=t.marker+" "+t.seriesName+" : "+(a>0?t.value+"%":t.value)+"</br>"})),e}},legend:{data:["搜索量","点击率","转化率"]},xAxis:{data:t,splitLine:{show:!1}},yAxis:[{splitLine:{show:!1}},{splitLine:{show:!1}}],series:[{name:"搜索量",type:"bar",barWidth:30,data:e},{name:"点击率",type:"line",yAxisIndex:1,data:a},{name:"转化率",type:"line",yAxisIndex:1,data:s}]};n.setOption(o)}}}),F=R,P=Object(c["a"])(F,E,N,!1,null,null,null),L=P.exports;j.a.interceptors.response.use((function(t){if(null==t.data&&"JSON"===t.config.responseType&&null!=t.request.responseText)try{t.data=JSON.parse(t.request.responseText)}catch(e){}return t}));var z=[{name:"美国",value:"us",link:"https://www.amazon.com/s",img:a("700e")},{name:"加拿大",value:"ca",link:"https://www.amazon.ca/s",img:a("de79")}],K=[{name:"关键词",desc:"",slots:{title:"customTitle_keyword"},dataIndex:"keyword",scopedSlots:{customRender:"keyword"}},{name:"月份",desc:"",slots:{title:"customTitle_month"},dataIndex:"month"},{name:"月搜索量",desc:"",slots:{title:"customTitle_searchs"},dataIndex:"searchs",scopedSlots:{customRender:"numFormat"}},{name:"去年同月",desc:"",slots:{title:"customTitle_yoySearchs"},dataIndex:"yoySearchs",scopedSlots:{customRender:"numFormat"}},{name:"上月搜索量",desc:"",slots:{title:"customTitle_momSearchs"},dataIndex:"momSearchs",scopedSlots:{customRender:"numFormat"}},{name:"Top3点击占比",desc:"Top3的商品点击量占该关键词总点击量的比率",slots:{title:"customTitle_top3clicks"},dataIndex:"top3clicks",scopedSlots:{customRender:"precentFormat"}},{name:"Top3转化占比",desc:"Top3的商品转化数占该关键词总转化数的比率",slots:{title:"customTitle_top3convers"},dataIndex:"top3convers",scopedSlots:{customRender:"precentFormat"}},{name:"近3月霸榜率",desc:"近3个月，该关键词下，Top3中出现过的商品与Top3中总的商品数的比率",slots:{title:"customTitle_month3Asins"},dataIndex:"month3Asins",scopedSlots:{customRender:"stringFormat"}},{name:"近6月霸榜率",desc:"近6个月，该关键词下，Top3中出现过的商品与Top3中总的商品数的比率",slots:{title:"customTitle_month6Asins"},dataIndex:"month6Asins",scopedSlots:{customRender:"stringFormat"}},{name:"近12月霸榜率",desc:"近12个月，该关键词下，Top3中出现过的商品与Top3中总的商品数的比率",slots:{title:"customTitle_month12Asins"},dataIndex:"month12Asins",scopedSlots:{customRender:"stringFormat"}}],$={components:(s={},Object(f["a"])(s,y.a.name,y.a),Object(f["a"])(s,y.a.Option.name,y.a.Option),Object(f["a"])(s,g.a.name,g.a),Object(f["a"])(s,S.a.name,S.a),Object(f["a"])(s,w.a.name,w.a),Object(f["a"])(s,x.a.name,x.a),Object(f["a"])(s,T.a.name,T.a),Object(f["a"])(s,"echart",L),s),filters:{number:function(t){return A()(t).format("0,0")}},data:function(){return{countrys:z,dataSource:[],tableColumns:K,tableDataSource:[],detailDataSource:[],showResult:!1,loading:!0,pagination:!1,visible:!1,country:"us",keyword:"",detailKeyword:"",counts:0,isNextLoaded:!0,currentCountryInfo:{}}},mounted:function(){window.addEventListener("scroll",this.scroll)},destroyed:function(){window.removeEventListener("scroll",this.scroll)},methods:{scroll:function(){if(this.isNextLoaded&&this.tableDataSource.length>0){var t=document.documentElement.scrollTop+window.innerHeight+10>=document.documentElement.offsetHeight;t&&(this.isNextLoaded=!1,this.onNextPage())}},onSearchKeyword:function(t){var e=this;t.length>=3&&j.a.get("/api/autocomplete",{params:{country:this.country,keyword:t}}).then((function(t){t.data.code>0?e.dataSource=t.data.data.suggests:alert(t.data.msg)})).catch((function(t){console.log(t)}))},onSearch:function(){var t=this;this.keyword&&this.keyword.length?j.a.get("/api/search",{params:{country:this.country,keyword:this.keyword}}).then((function(e){e.data.code>0?(t.showResult=!0,t.dataSource=[],t.currentCountryInfo=t.countrys.find((function(e){return e.value===t.country})),t.tableDataSource=e.data.data.keywords,t.counts=e.data.data.count):alert(e.data.msg)})).catch((function(t){console.log(t)})):alert("请输入关键词")},onNextPage:function(){var t=this;j.a.get("/api/nextpage",{params:{country:this.country,keyword:this.keyword}}).then((function(e){var a;e.data.code>0?(t.isNextLoaded=!0,(a=t.tableDataSource).push.apply(a,Object(h["a"])(e.data.data.keywords))):alert(e.data.msg)})).catch((function(t){console.log(t)}))},onShowDetail:function(t){var e=this;this.detailKeyword=t,j.a.get("/api/detail",{params:{country:this.country,keyword:t}}).then((function(t){t.data.code>0?(e.detailDataSource=t.data.data,e.showDrawer()):alert(t.data.msg)})).catch((function(t){console.log(t)}))},onCloseDrawer:function(){this.visible=!1},showDrawer:function(){this.visible=!0}}},J=$,M=Object(c["a"])(J,p,m,!1,null,null,null),H=M.exports;n["default"].use(d["a"]);var q=[{path:"/",name:"Home",component:H}],B=new d["a"]({routes:q}),V=B;n["default"].config.productionTip=!1,new n["default"]({router:V,render:function(t){return t(u)}}).$mount("#app")},"700e":function(t,e,a){t.exports=a.p+"img/us.2e9ea4b0.svg"},"7c55":function(t,e,a){"use strict";var s=a("2395"),n=a.n(s);n.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.282fb7d9.png"},de79:function(t,e,a){t.exports=a.p+"img/ca.17ac1874.svg"}});
//# sourceMappingURL=app.8fe5f689.js.map