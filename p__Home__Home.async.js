(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1,2,3,4],{"9Xz5":function(e,t,a){e.exports={avatar:"avatar___2BUrR"}},AlSd:function(e,t,a){"use strict";a.r(t);a("IzEo");var r=a("bx4M"),n=(a("/zsF"),a("PArb")),l=(a("tU7J"),a("wFql")),o=a("q1tI"),s=a.n(o),i=a("2iEm"),c=a("yHKG"),m=a.n(c),u=(l["a"].Title,l["a"].Paragraph);l["a"].Text;class h extends o["PureComponent"]{constructor(e){super(e)}render(){var e=this.props.web,t=s.a.createElement("div",null,s.a.createElement(i["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},s.a.createElement("div",{className:m.a.normalTitle},e.title),s.a.createElement(n["a"],{className:m.a.normalDivider}),s.a.createElement(u,{ellipsis:{rows:2},className:m.a.normalDesc},e.description)));return s.a.createElement("div",{className:m.a.card},s.a.createElement(r["a"],{hoverable:!0,size:"small",className:m.a.card},t))}}t["default"]=h},INpf:function(e,t,a){e.exports={sider:"sider___2HlwA",cotainer:"cotainer___3LIM9",webContainer:"webContainer___bmmzT",commonContainer:"commonContainer___1MkpK",categoryCard:"categoryCard___3pDVy",categoryContainer:"categoryContainer___6zYoH"}},a97E:function(e,t,a){"use strict";a.r(t);a("4eJr");var r=a("3LgI"),n=(a("Pwec"),a("CtXQ")),l=(a("IzEo"),a("bx4M")),o=(a("Mwp2"),a("VXEj")),s=(a("B9cy"),a("Ol7k")),i=(a("lUTK"),a("BvKs")),c=a("q1tI"),m=a.n(c),u=a("jDAA"),h=a("s4uU"),d=a("INpf"),v=a.n(d),_=a("AlSd"),p="https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/websites.json",g="https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/category.json",E=i["b"].SubMenu,C=(s["a"].Header,s["a"].Footer),y=s["a"].Sider,b=s["a"].Content;class k extends c["Component"]{constructor(){super(...arguments),this.state={allWebsite:[],allCategory:[],commonSites:[],categorySites:[],isLoading:!1,collapsed:!1},this.handleWebSites=(e=>{this.setState({allWebsite:e});var t=e,a=t.filter(e=>!0===e.common),r=t.filter(e=>!0!==e.common);this.setState({commonSites:a,categorySites:r})}),this.handleCategory=(e=>{void 0!=e&&null!=e&&this.setState({allCategory:e})}),this.handleClickScreenWidthChange=(e=>{console.log(e),this.setState({collapsed:e||!1})}),this.handleClickMenu=(e=>{var t=e.item,a=e.key;e.keyPath;console.log("click",t),this.scrollToAnchor(a)}),this.handleClickSubMenu=(e=>{if(console.log("click",e),void 0!=e&&null!=e){var t=e[e.length-1];this.scrollToAnchor(t)}}),this.scrollToAnchor=(e=>{if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}}),this.generateCategoryWebCard=(e=>{return void 0==e.style||null==e.style||0==e.style?m.a.createElement(u["default"],{web:e}," "):1==e.style?m.a.createElement(_["default"],{web:e}," "):void 0}),this.generateCategoryBoard=(e=>{var t=this.state.categorySites,a=t.filter(t=>t.category===e.name),r=m.a.createElement("div",{id:e.name},m.a.createElement(l["a"],{title:e.name,className:v.a.categoryCard},m.a.createElement(o["a"],{grid:{gutter:{xs:8,sm:35,md:35,lg:24,xl:5,xxl:5},xs:2,sm:2,md:3,lg:4,xl:5,xxl:6},dataSource:a,size:"small",renderItem:e=>m.a.createElement(o["a"].Item,{key:e.url},this.generateCategoryWebCard(e))})));return r})}componentDidMount(){var e=this;fetch(g).then(e=>e.json()).then(function(t){e.handleCategory(t)}).catch(e=>this.setState({error:e,isLoading:!1})),fetch(p).then(e=>e.json()).then(function(t){e.handleWebSites(t)}).catch(e=>this.setState({error:e,isLoading:!1}))}render(){var e=this.state.commonSites,t=[];e.length>0&&t.push(e.map(e=>{return m.a.createElement(h["default"],{key:e.url,web:e}," ")}));var a=[],l=this.state.allCategory;l.length>0&&a.push(l.map(e=>{var t=!!e.spin,a=e.children?e.children:[];if(a.length>0){var r=[];r.push(a.map(e=>{return m.a.createElement(i["b"].Item,{key:e.name},m.a.createElement(n["a"],{type:e.icon,theme:"outlined",spin:t}),m.a.createElement("span",{className:"nav-text"},e.name))}));var l=m.a.createElement(E,{key:e.name,title:m.a.createElement("span",null,m.a.createElement(n["a"],{type:e.icon,theme:"outlined",spin:t}),m.a.createElement("span",null,e.name))},r);return l}return m.a.createElement(i["b"].Item,{key:e.name},m.a.createElement(n["a"],{type:e.icon,theme:"outlined",spin:t}),m.a.createElement("span",{className:"nav-text"},e.name))}));var o=[],c=this.state.categorySites;return c.length>0&&l.map(e=>{var t=this.generateCategoryBoard(e);"\u5e38\u7528"!==e.name&&o.push(t),void 0!=e.children&&null!=e.children&&e.children.length>0&&e.children.map(e=>{var t=this.generateCategoryBoard(e);"\u5e38\u7528"!==e.name&&o.push(t)})}),m.a.createElement("div",null,m.a.createElement(s["a"],null,m.a.createElement(y,{className:v.a.sider,breakpoint:"sm",theme:"dark",onBreakpoint:this.handleClickScreenWidthChange},m.a.createElement(i["b"],{theme:"dark",mode:"inline",inlineCollapsed:this.state.collapsed,onOpenChange:this.handleClickSubMenu,onClick:this.handleClickMenu},a)),m.a.createElement(s["a"],{className:v.a.cotainer},m.a.createElement(b,{className:v.a.webContainer},m.a.createElement("div",{id:"\u5e38\u7528",className:v.a.commonContainer},t),o),m.a.createElement(C,{style:{textAlign:"center"}},"Luci Design \xa92019 Created by \u7fc1\u6052\u4e1b"))),m.a.createElement(r["a"],null))}}t["default"]=k},jDAA:function(e,t,a){"use strict";a.r(t);a("IzEo");var r=a("bx4M"),n=(a("+L6B"),a("2/Rp")),l=(a("/zsF"),a("PArb")),o=(a("Telt"),a("Tckk")),s=(a("tU7J"),a("wFql")),i=a("q1tI"),c=a.n(i),m=a("2iEm"),u=a("tTvj"),h=a.n(u),d=(s["a"].Title,s["a"].Paragraph);s["a"].Text;class v extends i["PureComponent"]{constructor(e){super(e),this.state={hover:!1,clickUrl:!1},this.toggleHoverEnter=(()=>{this.setState({hover:!0})}),this.toggleHoverLeave=(()=>{this.setState({hover:!1})})}componentDidMount(){}render(){var e=this.props.web,t=this.state.hover,a=!!e.cn_url||(!!e.en_url||!!e.gb_url),s=t&&a,i=function(){return c.a.createElement("div",null,c.a.createElement(m["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},c.a.createElement(o["a"],{className:h.a.normalCardAvatar,src:e.avatar}),c.a.createElement("a",{className:h.a.normalTitle},e.title),c.a.createElement(l["a"],{className:h.a.normalDivider}),c.a.createElement(d,{ellipsis:{rows:2},className:h.a.normalDesc},e.description)))},u=function(){var a=[],r=0;e.cn_url&&r++,e.en_url&&r++,e.gb_url&&r++;var s=h.a.hover3Button;if(2==r&&(s=h.a.hover2Button),e.cn_url){var i=e.cn_title?e.cn_title:"\u4e2d\u6587";a.push(c.a.createElement(m["a"],{key:e.cn_url,to:e.cn_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.cn_url))}},c.a.createElement(n["a"],{key:e.cn_url,className:s,type:"primary"},i)))}if(e.en_url){var u=e.en_title?e.en_title:"\u82f1\u6587";a.push(c.a.createElement(m["a"],{key:e.en_url,to:e.en_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.en_url))}},c.a.createElement(n["a"],{key:e.en_url,className:s,type:"primary"},u)))}if(e.gb_url){var d=e.gb_title?e.gb_title:"GitHub";a.push(c.a.createElement(m["a"],{key:e.gb_url,to:e.gb_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.gb_url))}},c.a.createElement(n["a"],{key:e.gb_url,className:s,type:"primary"},d)))}return c.a.createElement("div",null,c.a.createElement(m["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},c.a.createElement(o["a"],{className:h.a.hoverCardAvatar,src:e.avatar}),c.a.createElement("a",{className:h.a.hoverTitle},e.title),c.a.createElement(l["a"],{className:h.a.hoverDivider})),c.a.createElement("span",{className:h.a.hoverUrlContainer},a))},v=s?u():i();return c.a.createElement("div",null,c.a.createElement(r["a"],{hoverable:!0,size:"small",onMouseEnter:this.toggleHoverEnter,onMouseLeave:this.toggleHoverLeave,className:h.a.card},v))}}t["default"]=v},s4uU:function(e,t,a){"use strict";a.r(t);a("Telt");var r=a("Tckk"),n=a("q1tI"),l=a.n(n),o=a("9Xz5"),s=a.n(o),i=a("2iEm");class c extends n["PureComponent"]{constructor(e){super(e),this.state={hover:!1,clickUrl:!1}}render(){var e=this.props.web;return l.a.createElement("div",null,l.a.createElement(i["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},l.a.createElement(r["a"],{className:s.a.avatar,size:60,src:e.avatar})))}}t["default"]=c},tTvj:function(e,t,a){e.exports={card:"card___idqDW",normalCardAvatar:"normalCardAvatar___1ytbe",normalTitle:"normalTitle___1Wjqm",normalDivider:"normalDivider___zUX0p",normalDesc:"normalDesc___228jx",hoverCardAvatar:"hoverCardAvatar___2-dPq",hoverTitle:"hoverTitle___2ImuI",hoverDivider:"hoverDivider___1y5EI",desc:"desc___36sGm",hoverUrlContainer:"hoverUrlContainer___e-mxp",hover3Button:"hover3Button___1cQj4",hover2Button:"hover2Button___1UUA8"}},yHKG:function(e,t,a){e.exports={card:"card___7FFIh",normalTitle:"normalTitle___rfcGf",normalDivider:"normalDivider___1kH2T",normalDesc:"normalDesc___3PRmJ"}}}]);