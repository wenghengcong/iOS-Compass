(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4,1,2,3],{2:function(e,t){},3:function(e,t){},4:function(e,t){},"9Xz5":function(e,t,a){e.exports={avatar:"avatar___2BUrR"}},EDuE:function(e,t,a){e.exports={back:"back___2l6bP",normal:"normal___HWRKS",list:"list___1QtXr"}},INpf:function(e,t,a){e.exports={sider:"sider___2HlwA",menu:"menu___6A_By",commonContainer:"commonContainer___1MkpK",commonCard:"commonCard___lsJer",cotainer:"cotainer___3LIM9",webContainer:"webContainer___bmmzT",categoryCard:"categoryCard___3pDVy",categoryContainer:"categoryContainer___6zYoH"}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=(a("i8i4"),a("EDuE")),o=a.n(l),s=(a("LLXN"),a("a97E"));t["default"]=function(){return n.a.createElement("div",{className:o.a.back},n.a.createElement(s["default"],null))}},a97E:function(e,t,a){"use strict";a.r(t);a("IzEo");var r=a("bx4M"),n=(a("Mwp2"),a("VXEj")),l=(a("Pwec"),a("CtXQ")),o=(a("B9cy"),a("Ol7k")),s=(a("lUTK"),a("BvKs")),c=a("q1tI"),i=a.n(c),m=a("jDAA"),u=a("s4uU"),_=a("INpf"),d=a.n(_),h="https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/websites.json",v="https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/category.json",p=(s["b"].SubMenu,o["a"].Header,o["a"].Footer),g=o["a"].Sider,E=o["a"].Content;class b extends c["Component"]{constructor(){super(...arguments),this.state={allWebsite:[],allCategory:[],commonSites:[],categorySites:[],isLoading:!1},this.handleWebSites=(e=>{var t=e,a=t.filter(e=>!0===e.common),r=t.filter(e=>!0!==e.common);this.setState({commonSites:a,categorySites:r})}),this.handleCategory=(e=>{}),this.handleClickMenu=(e=>{var t=e.item,a=e.key;e.keyPath;console.log("click",t),this.scrollToAnchor(a)}),this.scrollToAnchor=(e=>{if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}})}componentDidMount(){var e=this;fetch(v).then(e=>e.json()).then(function(t){e.setState({allCategory:t}),e.handleCategory(t)}).catch(e=>this.setState({error:e,isLoading:!1})),fetch(h).then(e=>e.json()).then(function(t){e.setState({allWebsite:t}),e.handleWebSites(t)}).catch(e=>this.setState({error:e,isLoading:!1}))}render(){var e=this.state.commonSites,t=[];e.length>0&&t.push(e.map(e=>{return i.a.createElement(u["default"],{key:e.url,web:e}," ")}));var a=[],c=this.state.allCategory;c.length>0&&a.push(c.map(e=>{return i.a.createElement(s["b"].Item,{key:e.name},i.a.createElement(l["a"],{type:e.icon}),i.a.createElement("span",{className:"nav-text"},e.name))}));var _=[],h=this.state.categorySites;return h.length>0&&c.map(e=>{var t=h.filter(t=>t.category===e.name),a=i.a.createElement("div",{id:e.name},i.a.createElement(r["a"],{title:e.name,className:d.a.categoryCard},i.a.createElement(n["a"],{grid:{gutter:"10px",xs:1,sm:2,md:4,lg:4,xl:5,xxl:6},dataSource:t,size:"small",renderItem:e=>i.a.createElement(n["a"].Item,{key:e.url},i.a.createElement(m["default"],{web:e}," "))})));"\u5e38\u7528"!==e.name&&_.push(a)}),i.a.createElement("div",null,i.a.createElement(o["a"],null,i.a.createElement(g,{className:d.a.sider,theme:"dark",width:150},i.a.createElement(s["b"],{className:d.a.menu,theme:"dark",mode:"inline",onClick:this.handleClickMenu},a)),i.a.createElement(o["a"],{className:d.a.cotainer},i.a.createElement(E,{className:d.a.webContainer},i.a.createElement("div",{id:"\u5e38\u7528",className:d.a.commonContainer},t),_),i.a.createElement(p,{style:{textAlign:"center"}},"Luci Design \xa92019 Created by WengHengcong"))))}}t["default"]=b},jDAA:function(e,t,a){"use strict";a.r(t);a("IzEo");var r=a("bx4M"),n=(a("+L6B"),a("2/Rp")),l=(a("/zsF"),a("PArb")),o=(a("Telt"),a("Tckk")),s=(a("tU7J"),a("wFql")),c=a("q1tI"),i=a.n(c),m=a("2iEm"),u=a("tTvj"),_=a.n(u),d=(s["a"].Title,s["a"].Paragraph);s["a"].Text;class h extends c["PureComponent"]{constructor(e){super(e),this.state={hover:!1,clickUrl:!1},this.toggleHoverEnter=(()=>{this.setState({hover:!0})}),this.toggleHoverLeave=(()=>{this.setState({hover:!1})})}componentDidMount(){}render(){var e=this.props.web,t=this.state.hover,a=!!e.cn_url||(!!e.en_url||!!e.gb_url),s=t&&a,c=function(){return i.a.createElement("div",null,i.a.createElement(m["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},i.a.createElement(o["a"],{className:_.a.normalCardAvatar,src:e.avatar}),i.a.createElement("a",{className:_.a.normalTitle},e.title),i.a.createElement(l["a"],{className:_.a.normalDivider}),i.a.createElement(d,{ellipsis:{rows:2},className:_.a.normalDesc},e.description)))},u=function(){var a=[];if(e.cn_url){var r=e.cn_title?e.cn_title:"\u4e2d\u6587";a.push(i.a.createElement(m["a"],{key:e.cn_url,to:e.cn_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.cn_url))}},i.a.createElement(n["a"],{key:e.cn_url,className:_.a.hoverButton,type:"primary"},r)))}if(e.en_url){var s=e.en_title?e.en_title:"\u82f1\u6587";a.push(i.a.createElement(m["a"],{key:e.en_url,to:e.en_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.en_url))}},i.a.createElement(n["a"],{key:e.en_url,className:_.a.hoverButton,type:"primary"},s)))}if(e.gb_url){var c=e.gb_title?e.gb_title:"GitHub";a.push(i.a.createElement(m["a"],{key:e.gb_url,to:e.gb_url,target:"_blank",onClick:a=>{t&&(a.preventDefault(),window.open(e.gb_url))}},i.a.createElement(n["a"],{key:e.gb_url,className:_.a.hoverButton,type:"primary"},c)))}return i.a.createElement("div",null,i.a.createElement(m["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},i.a.createElement(o["a"],{className:_.a.hoverCardAvatar,src:e.avatar}),i.a.createElement("a",{className:_.a.hoverTitle},e.title),i.a.createElement(l["a"],{className:_.a.hoverDivider})),i.a.createElement("span",{className:_.a.hoverUrlContainer},a))},h=s?u():c();return i.a.createElement("div",{className:_.a.card},i.a.createElement(r["a"],{hoverable:!0,size:"small",onMouseEnter:this.toggleHoverEnter,onMouseLeave:this.toggleHoverLeave,className:_.a.card},h))}}t["default"]=h},s4uU:function(e,t,a){"use strict";a.r(t);a("Telt");var r=a("Tckk"),n=a("q1tI"),l=a.n(n),o=a("9Xz5"),s=a.n(o),c=a("2iEm");class i extends n["PureComponent"]{constructor(e){super(e),this.state={hover:!1,clickUrl:!1}}render(){var e=this.props.web;return l.a.createElement("div",null,l.a.createElement(c["a"],{to:e.url,target:"_blank",onClick:t=>{t.preventDefault(),window.open(e.url)}},l.a.createElement(r["a"],{className:s.a.avatar,size:60,src:e.avatar})))}}t["default"]=i},tTvj:function(e,t,a){e.exports={card:"card___idqDW",normalCardAvatar:"normalCardAvatar___1ytbe",normalTitle:"normalTitle___1Wjqm",normalDivider:"normalDivider___zUX0p",normalDesc:"normalDesc___228jx",hoverCardAvatar:"hoverCardAvatar___2-dPq",hoverTitle:"hoverTitle___2ImuI",hoverDivider:"hoverDivider___1y5EI",desc:"desc___36sGm",hoverUrlContainer:"hoverUrlContainer___e-mxp",hoverButton:"hoverButton___3dhQf"}}}]);