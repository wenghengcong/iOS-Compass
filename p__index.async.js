(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4,1,2,3],{2:function(e,t){},3:function(e,t){},4:function(e,t){},"9Xz5":function(e,t,a){e.exports={avatar:"avatar___2BUrR"}},EDuE:function(e,t,a){e.exports={back:"back___2l6bP",normal:"normal___HWRKS",list:"list___1QtXr"}},INpf:function(e,t,a){e.exports={sider:"sider___2HlwA",menu:"menu___6A_By",commonContainer:"commonContainer___1MkpK",commonCard:"commonCard___lsJer",cotainer:"cotainer___3LIM9",webContainer:"webContainer___bmmzT",categoryCard:"categoryCard___3pDVy",categoryContainer:"categoryContainer___6zYoH"}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=(a("i8i4"),a("EDuE")),o=a.n(l),s=(a("LLXN"),a("sLhr")),c=a.n(s),i=a("a97E");t["default"]=function(){return n.a.createElement("div",{className:o.a.back},n.a.createElement(c.a,{url:"https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/images/favicon.ico"}),n.a.createElement(i["default"],{key:"home"}))}},a97E:function(e,t,a){"use strict";a.r(t);a("Pwec");var r=a("CtXQ"),n=(a("IzEo"),a("bx4M")),l=(a("Mwp2"),a("VXEj")),o=(a("B9cy"),a("Ol7k")),s=(a("lUTK"),a("BvKs")),c=a("q1tI"),i=a.n(c),m=a("jDAA"),u=a("s4uU"),h=a("INpf"),_=a.n(h),d="https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/websites.json",v="https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/category.json",p=s["b"].SubMenu,g=(o["a"].Header,o["a"].Footer),E=o["a"].Sider,b=o["a"].Content;class C extends c["Component"]{constructor(){super(...arguments),this.state={allWebsite:[],allCategory:[],commonSites:[],categorySites:[],isLoading:!1},this.handleWebSites=(e=>{this.setState({allWebsite:e});var t=e,a=t.filter(e=>!0===e.common),r=t.filter(e=>!0!==e.common);this.setState({commonSites:a,categorySites:r})}),this.handleCategory=(e=>{void 0!=e&&null!=e&&this.setState({allCategory:e})}),this.handleClickMenu=(e=>{var t=e.item,a=e.key;e.keyPath;console.log("click",t),this.scrollToAnchor(a)}),this.handleClickSubMenu=(e=>{if(console.log("click",e),void 0!=e&&null!=e){var t=e[e.length-1];this.scrollToAnchor(t)}}),this.scrollToAnchor=(e=>{if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}}),this.generateCategoryBoard=(e=>{var t=this.state.categorySites,a=t.filter(t=>t.category===e.name),r=i.a.createElement("div",{id:e.name},i.a.createElement(n["a"],{title:e.name,className:_.a.categoryCard},i.a.createElement(l["a"],{grid:{gutter:"10px",xs:1,sm:2,md:4,lg:4,xl:5,xxl:6},dataSource:a,size:"small",renderItem:e=>i.a.createElement(l["a"].Item,{key:e.url},i.a.createElement(m["default"],{web:e}," "))})));return r})}componentDidMount(){var e=this;fetch(v).then(e=>e.json()).then(function(t){e.handleCategory(t)}).catch(e=>this.setState({error:e,isLoading:!1})),fetch(d).then(e=>e.json()).then(function(t){e.handleWebSites(t)}).catch(e=>this.setState({error:e,isLoading:!1}))}render(){var e=this.state.commonSites,t=[];e.length>0&&t.push(e.map(e=>{return i.a.createElement(u["default"],{key:e.url,web:e}," ")}));var a=[],n=this.state.allCategory;n.length>0&&a.push(n.map(e=>{var t=!!e.spin,a=e.children?e.children:[];if(a.length>0){var n=[];n.push(a.map(e=>{return i.a.createElement(s["b"].Item,{key:e.name},i.a.createElement(r["a"],{type:e.icon,theme:"outlined",spin:t}),i.a.createElement("span",{className:"nav-text"},e.name))}));var l=i.a.createElement(p,{key:e.name,title:i.a.createElement("span",null,i.a.createElement(r["a"],{type:e.icon,theme:"outlined",spin:t}),i.a.createElement("span",null,e.name))},n);return l}return i.a.createElement(s["b"].Item,{key:e.name},i.a.createElement(r["a"],{type:e.icon,theme:"outlined",spin:t}),i.a.createElement("span",{className:"nav-text"},e.name))}));var l=[],c=this.state.categorySites;return c.length>0&&n.map(e=>{var t=this.generateCategoryBoard(e);"\u5e38\u7528"!==e.name&&l.push(t),void 0!=e.children&&null!=e.children&&e.children.length>0&&e.children.map(e=>{var t=this.generateCategoryBoard(e);"\u5e38\u7528"!==e.name&&l.push(t)})}),i.a.createElement("div",null,i.a.createElement(o["a"],null,i.a.createElement(E,{className:_.a.sider,theme:"dark",width:150},i.a.createElement(s["b"],{className:_.a.menu,theme:"dark",mode:"inline",onOpenChange:this.handleClickSubMenu,onClick:this.handleClickMenu},a)),i.a.createElement(o["a"],{className:_.a.cotainer},i.a.createElement(b,{className:_.a.webContainer},i.a.createElement("div",{id:"\u5e38\u7528",className:_.a.commonContainer},t),l),i.a.createElement(g,{style:{textAlign:"center"}},"Luci Design \xa92019 Created by \u7fc1\u6052\u4e1b"))))}}t["default"]=C},jDAA:function(e,t,a){"use strict";a.r(t);a("IzEo");var r=a("bx4M"),n=(a("+L6B"),a("2/Rp")),l=(a("/zsF"),a("PArb")),o=(a("Telt"),a("Tckk")),s=(a("tU7J"),a("wFql")),c=a("q1tI"),i=a.n(c),m=a("2iEm"),u=a("tTvj"),h=a.n(u),_=(s["a"].Title,s["a"].Paragraph);s["a"].Text;class d extends c["PureComponent"]{constructor(e){super(e),this.state={hover:!1,clickUrl:!1},this.toggleHoverEnter=(()=>{this.setState({hover:!0})}),this.toggleHoverLeave=(()=>{this.setState({hover:!1})})}componentDidMount(){}render(){var e=this.props.web,t=this.state.hover,a=!!e.cn_url||(!!e.en_url||!!e.gb_url),s=t&&a,c=function(){return i.a.createElement("div",null,i.a.createElement(m["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},i.a.createElement(o["a"],{className:h.a.normalCardAvatar,src:e.avatar}),i.a.createElement("a",{className:h.a.normalTitle},e.title),i.a.createElement(l["a"],{className:h.a.normalDivider}),i.a.createElement(_,{ellipsis:{rows:2},className:h.a.normalDesc},e.description)))},u=function(){var a=[],r=0;e.cn_url&&r++,e.en_url&&r++,e.gb_url&&r++;var s=h.a.hover3Button;if(2==r&&(s=h.a.hover2Button),e.cn_url){var c=e.cn_title?e.cn_title:"\u4e2d\u6587";a.push(i.a.createElement(m["a"],{key:e.cn_url,to:e.cn_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.cn_url))}},i.a.createElement(n["a"],{key:e.cn_url,className:s,type:"primary"},c)))}if(e.en_url){var u=e.en_title?e.en_title:"\u82f1\u6587";a.push(i.a.createElement(m["a"],{key:e.en_url,to:e.en_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.en_url))}},i.a.createElement(n["a"],{key:e.en_url,className:s,type:"primary"},u)))}if(e.gb_url){var _=e.gb_title?e.gb_title:"GitHub";a.push(i.a.createElement(m["a"],{key:e.gb_url,to:e.gb_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.gb_url))}},i.a.createElement(n["a"],{key:e.gb_url,className:s,type:"primary"},_)))}return i.a.createElement("div",null,i.a.createElement(m["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},i.a.createElement(o["a"],{className:h.a.hoverCardAvatar,src:e.avatar}),i.a.createElement("a",{className:h.a.hoverTitle},e.title),i.a.createElement(l["a"],{className:h.a.hoverDivider})),i.a.createElement("span",{className:h.a.hoverUrlContainer},a))},d=s?u():c();return i.a.createElement("div",{className:h.a.card},i.a.createElement(r["a"],{hoverable:!0,size:"small",onMouseEnter:this.toggleHoverEnter,onMouseLeave:this.toggleHoverLeave,className:h.a.card},d))}}t["default"]=d},s4uU:function(e,t,a){"use strict";a.r(t);a("Telt");var r=a("Tckk"),n=a("q1tI"),l=a.n(n),o=a("9Xz5"),s=a.n(o),c=a("2iEm");class i extends n["PureComponent"]{constructor(e){super(e),this.state={hover:!1,clickUrl:!1}}render(){var e=this.props.web;return l.a.createElement("div",null,l.a.createElement(c["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},l.a.createElement(r["a"],{className:s.a.avatar,size:60,src:e.avatar})))}}t["default"]=i},tTvj:function(e,t,a){e.exports={card:"card___idqDW",normalCardAvatar:"normalCardAvatar___1ytbe",normalTitle:"normalTitle___1Wjqm",normalDivider:"normalDivider___zUX0p",normalDesc:"normalDesc___228jx",hoverCardAvatar:"hoverCardAvatar___2-dPq",hoverTitle:"hoverTitle___2ImuI",hoverDivider:"hoverDivider___1y5EI",desc:"desc___36sGm",hoverUrlContainer:"hoverUrlContainer___e-mxp",hover3Button:"hover3Button___1cQj4",hover2Button:"hover2Button___1UUA8"}}}]);