(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{jDAA:function(e,a,r){"use strict";r.r(a);r("TC19");var t=r("qM57"),n=(r("BZHA"),r("i4rf")),l=(r("Vumi"),r("w8AX")),o=(r("CEet"),r("TkTU")),c=r("q1tI"),s=r.n(c),i=r("2iEm"),m=r("tTvj"),u=r.n(m);class v extends c["PureComponent"]{constructor(e){super(e),this.state={hover:!1,clickUrl:!1},this.toggleHoverEnter=(()=>{this.setState({hover:!0})}),this.toggleHoverLeave=(()=>{this.setState({hover:!1})})}componentDidMount(){}render(){var e=this.props.web,a=this.state.hover,r=!!e.cn_url||(!!e.en_url||!!e.gb_url),c=a&&r,m=function(){return s.a.createElement("div",null,s.a.createElement(i["a"],{to:e.url,target:"_blank",onClick:a=>{a.preventDefault(),window.open(e.url)}},s.a.createElement(o["a"],{className:u.a.normalCardAvatar,src:e.avatar}),s.a.createElement("a",{className:u.a.normalTitle},e.title),s.a.createElement(l["a"],{className:u.a.normalDivider}),s.a.createElement("a",{className:u.a.normalDesc},e.description)))},v=function(){var r=[];return e.en_url&&r.push(s.a.createElement(i["a"],{key:e.en_url,to:e.en_url,target:"_blank",onClick:r=>{a&&(r.preventDefault(),window.open(e.en_url))}},s.a.createElement(n["a"],{key:e.en_url,className:u.a.hoverButton,type:"primary"},"\u82f1\u6587"))),e.cn_url&&r.push(s.a.createElement(i["a"],{key:e.cn_url,to:e.cn_url,target:"_blank",onClick:r=>{a&&(r.preventDefault(),window.open(e.cn_url))}},s.a.createElement(n["a"],{key:e.cn_url,className:u.a.hoverButton,type:"primary"},"\u4e2d\u6587"))),e.gb_url&&r.push(s.a.createElement(i["a"],{key:e.gb_url,to:e.gb_url,target:"_blank",onClick:r=>{a&&(r.preventDefault(),window.open(e.gb_url))}},s.a.createElement(n["a"],{key:e.gb_url,className:u.a.hoverButton,type:"primary"},"GitHub"))),s.a.createElement("div",null,s.a.createElement(i["a"],{to:e.url,target:"_blank",onClick:a=>{a.preventDefault(),window.open(e.url)}},s.a.createElement(o["a"],{className:u.a.hoverCardAvatar,src:e.avatar}),s.a.createElement("a",{className:u.a.hoverTitle},e.title),s.a.createElement(l["a"],{className:u.a.hoverDivider})),s.a.createElement("span",{className:u.a.hoverUrlContainer},r))},_=c?v():m();return s.a.createElement("div",{className:u.a.card},s.a.createElement(t["a"],{hoverable:!0,size:"small",onMouseEnter:this.toggleHoverEnter,onMouseLeave:this.toggleHoverLeave,className:u.a.card},_))}}a["default"]=v},tTvj:function(e,a,r){e.exports={card:"card___idqDW",normalCardAvatar:"normalCardAvatar___1ytbe",normalTitle:"normalTitle___1Wjqm",normalDivider:"normalDivider___zUX0p",normalDesc:"normalDesc___228jx",hoverCardAvatar:"hoverCardAvatar___2-dPq",hoverTitle:"hoverTitle___2ImuI",hoverDivider:"hoverDivider___1y5EI",desc:"desc___36sGm",hoverUrlContainer:"hoverUrlContainer___e-mxp",hoverButton:"hoverButton___3dhQf"}}}]);