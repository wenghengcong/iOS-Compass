(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5,1,2,3,4],{2:function(e,t){},3:function(e,t){},4:function(e,t){},"9Xz5":function(e,t,a){e.exports={avatar:"avatar___2BUrR"}},AlSd:function(e,t,a){"use strict";a.r(t);a("IzEo");var r=a("bx4M"),n=(a("/zsF"),a("PArb")),l=(a("tU7J"),a("wFql")),o=a("q1tI"),s=a.n(o),i=a("2iEm"),c=a("yHKG"),m=a.n(c),u=(l["a"].Title,l["a"].Paragraph);l["a"].Text;class h extends o["PureComponent"]{constructor(e){super(e)}render(){var e=this.props.web,t=s.a.createElement("div",null,s.a.createElement(i["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},s.a.createElement("div",{className:m.a.normalTitle},e.title),s.a.createElement(n["a"],{className:m.a.normalDivider}),s.a.createElement(u,{ellipsis:{rows:2},className:m.a.normalDesc},e.description)));return s.a.createElement("div",{className:m.a.card},s.a.createElement(r["a"],{hoverable:!0,size:"small",className:m.a.card},t))}}t["default"]=h},EDuE:function(e,t,a){e.exports={back:"back___2l6bP",normal:"normal___HWRKS",list:"list___1QtXr"}},INpf:function(e,t,a){e.exports={sider:"sider___2HlwA",cotainer:"cotainer___3LIM9",webContainer:"webContainer___bmmzT",commonContainer:"commonContainer___1MkpK",categoryCard:"categoryCard___3pDVy",categoryContainer:"categoryContainer___6zYoH"}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=(a("i8i4"),a("EDuE")),o=a.n(l),s=(a("LLXN"),a("sLhr")),i=a.n(s),c=a("a97E");t["default"]=function(){return n.a.createElement("div",{className:o.a.back},n.a.createElement(i.a,{url:"https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/images/favicon.ico"}),n.a.createElement(c["default"],{key:"home"}))}},a97E:function(e,t,a){"use strict";a.r(t);a("4eJr");var r=a("3LgI"),n=(a("Pwec"),a("CtXQ")),l=(a("IzEo"),a("bx4M")),o=(a("Mwp2"),a("VXEj")),s=(a("B9cy"),a("Ol7k")),i=(a("lUTK"),a("BvKs")),c=a("q1tI"),m=a.n(c),u=a("jDAA"),h=a("s4uU"),d=a("INpf"),v=a.n(d),_=a("AlSd"),p="https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/websites.json",g="https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/category.json",E=i["b"].SubMenu,C=(s["a"].Header,s["a"].Footer),y=s["a"].Sider,k=s["a"].Content;class b extends c["Component"]{constructor(){super(...arguments),this.state={allWebsite:[],allCategory:[],commonSites:[],categorySites:[],isLoading:!1,collapsed:!1},this.handleWebSites=(e=>{this.setState({allWebsite:e});var t=e,a=t.filter(e=>!0===e.common),r=t.filter(e=>!0!==e.common);this.setState({commonSites:a,categorySites:r})}),this.handleCategory=(e=>{void 0!=e&&null!=e&&this.setState({allCategory:e})}),this.handleClickScreenWidthChange=(e=>{console.log(e),this.setState({collapsed:e||!1})}),this.handleClickMenu=(e=>{var t=e.item,a=e.key;e.keyPath;console.log("click",t),this.scrollToAnchor(a)}),this.handleClickSubMenu=(e=>{if(console.log("click",e),void 0!=e&&null!=e){var t=e[e.length-1];this.scrollToAnchor(t)}}),this.scrollToAnchor=(e=>{if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}}),this.generateCategoryWebCard=(e=>{return void 0==e.style||null==e.style||0==e.style?m.a.createElement(u["default"],{web:e}," "):1==e.style?m.a.createElement(_["default"],{web:e}," "):void 0}),this.generateCategoryBoard=((e,t,a)=>{var r=t.name;void 0!=e&&null!=e&&e.length>0&&(r=e+"\uff1e"+t.name);var n=m.a.createElement("div",{id:t.name},m.a.createElement(l["a"],{title:r,className:v.a.categoryCard},m.a.createElement(o["a"],{grid:{gutter:{xs:8,sm:35,md:35,lg:24,xl:5,xxl:5},xs:2,sm:2,md:3,lg:4,xl:5,xxl:6},dataSource:a,size:"small",renderItem:e=>m.a.createElement(o["a"].Item,{key:e.url},this.generateCategoryWebCard(e))})));return n})}componentDidMount(){var e=this;fetch(g).then(e=>e.json()).then(function(t){e.handleCategory(t)}).catch(e=>this.setState({error:e,isLoading:!1})),fetch(p).then(e=>e.json()).then(function(t){e.handleWebSites(t)}).catch(e=>this.setState({error:e,isLoading:!1}))}render(){var e=this.state.commonSites,t=[];e.length>0&&t.push(e.map(e=>{return m.a.createElement(h["default"],{key:e.url,web:e}," ")}));var a=[],l=this.state.allCategory;l.length>0&&a.push(l.map(e=>{var t=!!e.spin,a=e.children?e.children:[];if(a.length>0){var r=[];r.push(a.map(e=>{return m.a.createElement(i["b"].Item,{key:e.name},m.a.createElement(n["a"],{type:e.icon,theme:"outlined",spin:t}),m.a.createElement("span",{className:"nav-text"},e.name))}));var l=m.a.createElement(E,{key:e.name,title:m.a.createElement("span",null,m.a.createElement(n["a"],{type:e.icon,theme:"outlined",spin:t}),m.a.createElement("span",null,e.name))},r);return l}return m.a.createElement(i["b"].Item,{key:e.name},m.a.createElement(n["a"],{type:e.icon,theme:"outlined",spin:t}),m.a.createElement("span",{className:"nav-text"},e.name))}));var o=[],c=this.state.categorySites;return c.length>0&&l.map(e=>{var t=this.state.categorySites,a=t.filter(t=>t.category===e.name),r=this.generateCategoryBoard("",e,a);"\u5e38\u7528"!==e.name&&void 0!=a&&null!=a&&a.length>0&&o.push(r),void 0!=e.children&&null!=e.children&&e.children.length>0&&e.children.map(t=>{var a=this.state.categorySites,r=a.filter(e=>e.category===t.name),n=this.generateCategoryBoard(e.name,t,r);"\u5e38\u7528"!==t.name&&void 0!=r&&null!=r&&r.length>0&&o.push(n)})}),m.a.createElement("div",null,m.a.createElement(s["a"],null,m.a.createElement(y,{className:v.a.sider,breakpoint:"sm",theme:"dark",onBreakpoint:this.handleClickScreenWidthChange},m.a.createElement(i["b"],{theme:"dark",mode:"inline",inlineCollapsed:this.state.collapsed,onOpenChange:this.handleClickSubMenu,onClick:this.handleClickMenu},a)),m.a.createElement(s["a"],{className:v.a.cotainer},m.a.createElement(k,{className:v.a.webContainer},m.a.createElement("div",{id:"\u5e38\u7528",className:v.a.commonContainer},t),o),m.a.createElement(C,{style:{textAlign:"center"}},"Luci Design \xa92019 Created by \u7fc1\u6052\u4e1b"))),m.a.createElement(r["a"],null))}}t["default"]=b},jDAA:function(e,t,a){"use strict";a.r(t);a("IzEo");var r=a("bx4M"),n=(a("+L6B"),a("2/Rp")),l=(a("/zsF"),a("PArb")),o=(a("Telt"),a("Tckk")),s=(a("tU7J"),a("wFql")),i=a("q1tI"),c=a.n(i),m=a("s/Ur"),u=a.n(m),h=a("2iEm"),d=a("tTvj"),v=a.n(d),_=(s["a"].Title,s["a"].Paragraph);s["a"].Text;class p extends i["PureComponent"]{constructor(e){super(e),this.state={hover:!1,clickUrl:!1},this.toggleHoverEnter=(()=>{this.setState({hover:!0})}),this.toggleHoverLeave=(()=>{this.setState({hover:!1})})}componentDidMount(){}render(){var e=this.props.web,t=this.state.hover,a=!!e.one_url||(!!e.sec_url||!!e.thi_url),s=t&&a,i=function(){return c.a.createElement("div",null,c.a.createElement(h["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},c.a.createElement(o["a"],{className:v.a.normalCardAvatar,src:e.avatar}),c.a.createElement("a",{className:v.a.normalTitle},e.title),c.a.createElement(l["a"],{className:v.a.normalDivider}),c.a.createElement(u.a,{maxWidth:576},t=>{return t?c.a.createElement(_,{ellipsis:{rows:1},className:v.a.normalDesc},e.description):c.a.createElement(_,{ellipsis:{rows:2},className:v.a.normalDesc},e.description)})))},m=function(){var a=[],r=0;e.one_url&&r++,e.sec_url&&r++,e.thi_url&&r++;var s=v.a.hover3ButtonFirst,i=v.a.hover3ButtonFirst,m=v.a.hover3ButtonFirst;if(1==r?s=v.a.hover1Button:2==r?(s=v.a.hover2Button,i=v.a.hover2Button):(s=v.a.hover3Button,i=v.a.hover3Button,m=v.a.hover3Button),e.one_url){var u=e.one_title?e.one_title:"\u4e2d\u6587";a.push(c.a.createElement(h["a"],{key:e.one_url,to:e.one_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.one_url))}},c.a.createElement(n["a"],{key:e.one_url,className:s,type:"primary"},u)))}if(e.sec_url){var d=e.sec_title?e.sec_title:"\u82f1\u6587";a.push(c.a.createElement(h["a"],{key:e.sec_url,to:e.sec_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.sec_url))}},c.a.createElement(n["a"],{key:e.sec_url,className:i,type:"primary"},d)))}if(e.thi_url){var _=e.thi_title?e.thi_title:"GitHub";a.push(c.a.createElement(h["a"],{key:e.thi_url,to:e.thi_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.thi_url))}},c.a.createElement(n["a"],{key:e.thi_url,className:m,type:"primary"},_)))}return c.a.createElement("div",null,c.a.createElement(h["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},c.a.createElement(o["a"],{className:v.a.hoverCardAvatar,src:e.avatar}),c.a.createElement("a",{className:v.a.hoverTitle},e.title),c.a.createElement(l["a"],{className:v.a.hoverDivider})),c.a.createElement("span",{className:v.a.hoverUrlContainer},a))},d=s?m():i();return c.a.createElement("div",null,c.a.createElement(r["a"],{hoverable:!0,size:"small",onMouseEnter:this.toggleHoverEnter,onMouseLeave:this.toggleHoverLeave,className:v.a.card},d))}}t["default"]=p},s4uU:function(e,t,a){"use strict";a.r(t);a("Telt");var r=a("Tckk"),n=a("q1tI"),l=a.n(n),o=a("9Xz5"),s=a.n(o),i=a("2iEm");class c extends n["PureComponent"]{constructor(e){super(e),this.state={hover:!1,clickUrl:!1}}render(){var e=this.props.web;return l.a.createElement("div",null,l.a.createElement(i["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},l.a.createElement(r["a"],{className:s.a.avatar,size:60,src:e.avatar})))}}t["default"]=c},tTvj:function(e,t,a){e.exports={card:"card___idqDW",normalCardAvatar:"normalCardAvatar___1ytbe",normalTitle:"normalTitle___1Wjqm",normalDivider:"normalDivider___zUX0p",normalDesc:"normalDesc___228jx",hoverCardAvatar:"hoverCardAvatar___2-dPq",hoverTitle:"hoverTitle___2ImuI",hoverDivider:"hoverDivider___1y5EI",desc:"desc___36sGm",hoverUrlContainer:"hoverUrlContainer___e-mxp",hover1Button:"hover1Button___2g5X1",hover2Button:"hover2Button___1UUA8",hover3Button:"hover3Button___1cQj4"}},yHKG:function(e,t,a){e.exports={card:"card___7FFIh",normalTitle:"normalTitle___rfcGf",normalDivider:"normalDivider___1kH2T",normalDesc:"normalDesc___3PRmJ"}}}]);