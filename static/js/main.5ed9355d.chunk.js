(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){},120:function(e,t,a){e.exports=a(218)},125:function(e,t,a){},126:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},127:function(e,t,a){},18:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),c=a.n(l),o=(a(125),a(126),a(127),a(112),a(69)),i=(a(219),a(90)),s=(a(136),a(11)),u=a(41),m=a(42),h=a(46),v=a(43),d=a(47),g=(a(138),a(35)),f=(a(220),a(71)),p=(a(142),a(72)),E=(a(144),a(89)),b=(a(91),a(54)),y=a(222),k=a(223),w=a(18),C=a.n(w),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={hover:!1,clickUrl:!1},a.toggleHoverEnter=function(){a.setState({hover:!0})},a.toggleHoverLeave=function(){a.setState({hover:!1})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.web,t=this.state.hover,a=!!e.cn_url||(!!e.en_url||!!e.gb_url),n=t&&a?function(){var a=[];return e.en_url&&a.push(r.a.createElement(y.a,null,r.a.createElement(k.a,{key:e.en_url,to:e.en_url,target:"_blank",onClick:function(a){t&&(a.preventDefault(),window.open(e.en_url))}},r.a.createElement(p.a,{key:e.en_url,className:C.a.hoverButton,type:"primary"},"\u82f1\u6587")))),e.cn_url&&a.push(r.a.createElement(y.a,null,r.a.createElement(k.a,{key:e.cn_url,to:e.cn_url,target:"_blank",onClick:function(a){t&&(a.preventDefault(),window.open(e.cn_url))}},r.a.createElement(p.a,{key:e.cn_url,className:C.a.hoverButton,type:"primary"},"\u4e2d\u6587")))),e.gb_url&&a.push(r.a.createElement(y.a,null,r.a.createElement(k.a,{key:e.gb_url,to:e.gb_url,target:"_blank",onClick:function(a){t&&(a.preventDefault(),window.open(e.gb_url))}},r.a.createElement(p.a,{key:e.gb_url,className:C.a.hoverButton,type:"primary"},"GitHub")))),r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(k.a,{to:e.url,target:"_blank",onClick:function(t){t.preventDefault(),window.open(e.url)}},r.a.createElement(b.a,{className:C.a.hoverCardAvatar,src:e.avatar}),r.a.createElement("a",{className:C.a.hoverTitle},e.title),r.a.createElement(E.a,{className:C.a.hoverDivider}))),r.a.createElement("span",{className:C.a.hoverUrlContainer},a))}():r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(k.a,{to:e.url,target:"_blank",onClick:function(t){t.preventDefault(),window.open(e.url)}},r.a.createElement(b.a,{className:C.a.normalCardAvatar,src:e.avatar}),r.a.createElement("a",{className:C.a.normalTitle},e.title),r.a.createElement(E.a,{className:C.a.normalDivider}),r.a.createElement("a",{className:C.a.normalDesc},e.description))));return r.a.createElement("div",{className:C.a.card},r.a.createElement(o.a,{hoverable:!0,size:"small",onMouseEnter:this.toggleHoverEnter,onMouseLeave:this.toggleHoverLeave,className:C.a.card},n))}}]),t}(n.PureComponent),N=a(116),S=a.n(N),j=a(226),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={hover:!1,clickUrl:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.web;return r.a.createElement(j.a,null,r.a.createElement(k.a,{to:e.url,target:"_blank",onClick:function(t){t.preventDefault(),window.open(e.url)}},r.a.createElement(b.a,{className:S.a.avatar,size:60,src:e.avatar})))}}]),t}(n.PureComponent),D=a(34),x=a.n(D),A=(f.b.SubMenu,g.a.Header,g.a.Footer),H=g.a.Sider,L=g.a.Content,M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={allWebsite:[],allCategory:[],commonSites:[],categorySites:[],isLoading:!1},a.handleWebSites=function(e){var t=e,n=t.filter(function(e){return!0===e.common}),r=t.filter(function(e){return!0!==e.common});a.setState({commonSites:n,categorySites:r})},a.handleCategory=function(e){},a.handleClickMenu=function(e){var t=e.item,n=e.key;e.keyPath;console.log("click",t),a.scrollToAnchor(n)},a.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this;fetch("https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/category.json").then(function(e){return e.json()}).then(function(e){t.setState({allCategory:e}),t.handleCategory(e)}).catch(function(t){return e.setState({error:t,isLoading:!1})}),fetch("https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/data/websites.json").then(function(e){return e.json()}).then(function(e){t.setState({allWebsite:e}),t.handleWebSites(e)}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state.commonSites,t=[];e.length>0&&t.push(e.map(function(e){return r.a.createElement(O,{key:e.url,web:e}," ")}));var a=[],n=this.state.allCategory;n.length>0&&a.push(n.map(function(e){return r.a.createElement(f.b.Item,{key:e.name},r.a.createElement(s.a,{type:e.icon}),r.a.createElement("span",{className:"nav-text"},e.name))}));var l=[],c=this.state.categorySites;return c.length>0&&n.map(function(e){var t=c.filter(function(t){return t.category===e.name}),a=r.a.createElement("div",{id:e.name},r.a.createElement(o.a,{title:e.name,className:x.a.categoryCard},r.a.createElement(i.a,{grid:{gutter:"10px",xs:1,sm:2,md:4,lg:4,xl:5,xxl:6},dataSource:t,size:"small",renderItem:function(e){return r.a.createElement(i.a.Item,{key:e.url},r.a.createElement(_,{web:e}," "))}})));"\u5e38\u7528"!==e.name&&l.push(a)}),r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(H,{className:x.a.sider,theme:"dark",width:150},r.a.createElement(f.b,{className:x.a.menu,theme:"dark",mode:"inline",onClick:this.handleClickMenu},a)),r.a.createElement(g.a,{className:x.a.cotainer},r.a.createElement(L,{className:x.a.webContainer},r.a.createElement("div",{id:"\u5e38\u7528",className:x.a.commonContainer},t),l),r.a.createElement(A,{style:{textAlign:"center"}},"Luci Design \xa92019 Created by WengHengcong"))))}}]),t}(n.Component);var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.5ed9355d.chunk.js.map