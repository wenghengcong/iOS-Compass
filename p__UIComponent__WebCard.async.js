(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{jDAA:function(e,a,t){"use strict";t.r(a);t("IzEo");var r=t("bx4M"),l=(t("+L6B"),t("2/Rp")),n=(t("/zsF"),t("PArb")),o=(t("Telt"),t("Tckk")),i=(t("tU7J"),t("wFql")),c=t("q1tI"),s=t.n(c),_=t("2iEm"),v=t("tTvj"),m=t.n(v),u=(i["a"].Title,i["a"].Paragraph);i["a"].Text;class h extends c["PureComponent"]{constructor(e){super(e),this.state={hover:!1,clickUrl:!1},this.toggleHoverEnter=(()=>{this.setState({hover:!0})}),this.toggleHoverLeave=(()=>{this.setState({hover:!1})})}componentDidMount(){}render(){var e=this.props.web,a=this.state.hover,t=!!e.cn_url||(!!e.en_url||!!e.gb_url),i=a&&t,c=function(){return s.a.createElement("div",null,s.a.createElement(_["a"],{to:e.url,target:"_blank",onClick:a=>{a.preventDefault(),window.open(e.url)}},s.a.createElement(o["a"],{className:m.a.normalCardAvatar,src:e.avatar}),s.a.createElement("a",{className:m.a.normalTitle},e.title),s.a.createElement(n["a"],{className:m.a.normalDivider}),s.a.createElement(u,{ellipsis:{rows:2},className:m.a.normalDesc},e.description)))},v=function(){var t=[];if(e.cn_url){var r=e.cn_title?e.cn_title:"\u4e2d\u6587";t.push(s.a.createElement(_["a"],{key:e.cn_url,to:e.cn_url,target:"_blank",onClick:t=>{a&&(t.preventDefault(),window.open(e.cn_url))}},s.a.createElement(l["a"],{key:e.cn_url,className:m.a.hoverButton,type:"primary"},r)))}if(e.en_url){var i=e.en_title?e.en_title:"\u82f1\u6587";t.push(s.a.createElement(_["a"],{key:e.en_url,to:e.en_url,target:"_blank",onClick:t=>{a&&(t.preventDefault(),window.open(e.en_url))}},s.a.createElement(l["a"],{key:e.en_url,className:m.a.hoverButton,type:"primary"},i)))}if(e.gb_url){var c=e.gb_title?e.gb_title:"GitHub";t.push(s.a.createElement(_["a"],{key:e.gb_url,to:e.gb_url,target:"_blank",onClick:t=>{a&&(t.preventDefault(),window.open(e.gb_url))}},s.a.createElement(l["a"],{key:e.gb_url,className:m.a.hoverButton,type:"primary"},c)))}return s.a.createElement("div",null,s.a.createElement(_["a"],{to:e.url,target:"_blank",onClick:a=>{a.preventDefault(),window.open(e.url)}},s.a.createElement(o["a"],{className:m.a.hoverCardAvatar,src:e.avatar}),s.a.createElement("a",{className:m.a.hoverTitle},e.title),s.a.createElement(n["a"],{className:m.a.hoverDivider})),s.a.createElement("span",{className:m.a.hoverUrlContainer},t))},h=i?v():c();return s.a.createElement("div",{className:m.a.card},s.a.createElement(r["a"],{hoverable:!0,size:"small",onMouseEnter:this.toggleHoverEnter,onMouseLeave:this.toggleHoverLeave,className:m.a.card},h))}}a["default"]=h},tTvj:function(e,a,t){e.exports={card:"card___idqDW",normalCardAvatar:"normalCardAvatar___1ytbe",normalTitle:"normalTitle___1Wjqm",normalDivider:"normalDivider___zUX0p",normalDesc:"normalDesc___228jx",hoverCardAvatar:"hoverCardAvatar___2-dPq",hoverTitle:"hoverTitle___2ImuI",hoverDivider:"hoverDivider___1y5EI",desc:"desc___36sGm",hoverUrlContainer:"hoverUrlContainer___e-mxp",hoverButton:"hoverButton___3dhQf"}}}]);