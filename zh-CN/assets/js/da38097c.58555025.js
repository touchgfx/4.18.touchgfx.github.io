"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1077],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},93054:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=l},3265:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return x},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return C}});var a=n(3905),r=n(44035),i=n(93054),l=n(31217),o=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&m(e,n,t[n]);return e};const v={id:"canvas-widgets",title:"\u753b\u5e03\u63a7\u4ef6"},h=void 0,f={unversionedId:"development/ui-development/touchgfx-engine-features/canvas-widgets",id:"development/ui-development/touchgfx-engine-features/canvas-widgets",title:"\u753b\u5e03\u63a7\u4ef6",description:"\u753b\u5e03\u63a7\u4ef6\u548c\u753b\u5e03\u63a7\u4ef6\u6e32\u67d3\u5668\u662f\u5f3a\u5927\u7684\u591a\u529f\u80fdTouchGFX\u63d2\u4ef6\uff0c\u5728\u4f7f\u7528\u76f8\u5bf9\u8f83\u5c0f\u7684\u5b58\u50a8\u7a7a\u95f4\u7684\u540c\u65f6\u4fdd\u6301\u9ad8\u6027\u80fd\uff0c\u53ef\u63d0\u4f9b\u5e73\u6ed1\u3001\u6297\u952f\u9f7f\u6548\u679c\u826f\u597d\u7684\u51e0\u4f55\u56fe\u5f62\u7ed8\u5236\u3002 \u4f46\u662f\uff0c\u6e32\u67d3\u51e0\u4f55\u56fe\u5f62\u5fc5\u7136\u662f\u6210\u672c\u975e\u5e38\u9ad8\u7684\u64cd\u4f5c\uff0c\u5982\u679c\u4f7f\u7528\u4e0d\u5c0f\u5fc3\uff0c\u5f88\u5bb9\u6613\u5bf9\u5fae\u63a7\u5236\u5668\u8d44\u6e90\u9020\u6210\u6d6a\u8d39\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/canvas-widgets.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/canvas-widgets",permalink:"/4.18/zh-CN/docs/development/ui-development/touchgfx-engine-features/canvas-widgets",draft:!1,tags:[],version:"current",frontMatter:{id:"canvas-widgets",title:"\u753b\u5e03\u63a7\u4ef6"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49\u63a7\u4ef6",permalink:"/4.18/zh-CN/docs/development/ui-development/touchgfx-engine-features/custom-widgets"},next:{title:"\u52a8\u6001\u4f4d\u56fe",permalink:"/4.18/zh-CN/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"}},k={},C=[{value:"\u4f7f\u7528\u753b\u5e03\u63a7\u4ef6",id:"using-canvaswidgets",level:2},{value:"\u5b58\u50a8\u7a7a\u95f4\u5206\u914d\u548c\u4f7f\u7528",id:"memory-allocation-and-usage",level:2},{value:"TouchGFX Designer\u4e2d\u7684\u5b58\u50a8\u7a7a\u95f4\u5206\u914d",id:"memory-allocation-in-touchgfx-designer",level:3},{value:"\u7528\u6237\u4ee3\u7801\u4e2d\u7684\u5b58\u50a8\u7a7a\u95f4\u5206\u914d",id:"memory-allocation-in-user-code",level:3},{value:"CWR\u5750\u6807\u7cfb",id:"the-cwr-coordinate-system",level:2},{value:"\u81ea\u5b9a\u4e49\u753b\u5e03\u63a7\u4ef6",id:"custom-canvas-widgets",level:2},{value:"\u7ed8\u56fe\u5668\uff08#painters\uff09",id:"\u7ed8\u56fe\u5668painters",level:2},{value:"\u5b9a\u5236\u7ed8\u56fe\u5668",id:"custom-painters",level:2}],y={toc:C};function x(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=g(g({},y),m),c(t,p({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u753b\u5e03\u63a7\u4ef6\u548c\u753b\u5e03\u63a7\u4ef6\u6e32\u67d3\u5668\u662f\u5f3a\u5927\u7684\u591a\u529f\u80fdTouchGFX\u63d2\u4ef6\uff0c\u5728\u4f7f\u7528\u76f8\u5bf9\u8f83\u5c0f\u7684\u5b58\u50a8\u7a7a\u95f4\u7684\u540c\u65f6\u4fdd\u6301\u9ad8\u6027\u80fd\uff0c\u53ef\u63d0\u4f9b\u5e73\u6ed1\u3001\u6297\u952f\u9f7f\u6548\u679c\u826f\u597d\u7684\u51e0\u4f55\u56fe\u5f62\u7ed8\u5236\u3002 \u4f46\u662f\uff0c\u6e32\u67d3\u51e0\u4f55\u56fe\u5f62\u5fc5\u7136\u662f\u6210\u672c\u975e\u5e38\u9ad8\u7684\u64cd\u4f5c\uff0c\u5982\u679c\u4f7f\u7528\u4e0d\u5c0f\u5fc3\uff0c\u5f88\u5bb9\u6613\u5bf9\u5fae\u63a7\u5236\u5668\u8d44\u6e90\u9020\u6210\u6d6a\u8d39\u3002"),(0,a.kt)("p",null,"\u753b\u5e03\u63a7\u4ef6\u6e32\u67d3\u5668\uff08Canvas Widget Renderer\uff0c\u4ee5\u4e0b\u7b80\u79f0CWR\uff09\u662f\u4e00\u79cd\u901a\u7528\u56fe\u5f62API\uff0c\u4e3a\u56fe\u5143\u63d0\u4f9b\u4f18\u5316\u7ed8\u5236\uff0c\u81ea\u52a8\u6d88\u9664\u6700\u591a\u4f59\u7684\u7ed8\u5236\u3002 TouchGFX\u4f7f\u7528CWR\u53ef\u7ed8\u5236\u590d\u6742\u7684\u51e0\u4f55\u56fe\u5f62\u3002 \u901a\u8fc7\u753b\u5e03\u63a7\u4ef6\uff08Canvas Widget\uff09\u5b9a\u4e49\u51e0\u4f55\u56fe\u5f62\u3002 TouchGFX\u652f\u6301\u8bb8\u591a\u753b\u5e03\u63a7\u4ef6\uff0c\u4f46\u662f\u5c31\u50cf\u666e\u901a\u63a7\u4ef6\u4e00\u6837\uff0c\u60a8\u53ef\u4ee5\u521b\u81ea\u5b9a\u4e49\u753b\u5e03\u63a7\u4ef6\u6765\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\u3002 \u753b\u5e03\u63a7\u4ef6\u5b9a\u4e49\u8981\u901a\u8fc7CWR\u7ed8\u5236\u7684\u56fe\u5f62\u7684\u51e0\u4f55\u5f62\u72b6\uff0c\u800c\u56fe\u5f62\u4e2d\u6bcf\u4e2a\u50cf\u7d20\u7684\u5b9e\u9645\u989c\u8272\u5219\u7531\u76f8\u5173Painter\u7c7b\u5b9a\u4e49\u3002 \u540c\u6837\u5730\uff0cTouchGFX\u81ea\u5e26\u8bb8\u591aPainter\uff0c\u4f46\u662f\u60a8\u4e5f\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49Painter\u6765\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\u3002"),(0,a.kt)("h2",g({},{id:"using-canvaswidgets"}),"\u4f7f\u7528\u753b\u5e03\u63a7\u4ef6"),(0,a.kt)("p",null,"TouchGFX\u4e2d\u5176\u4ed6\u63a7\u4ef6\u7684\u5927\u5c0f\u662f\u81ea\u52a8\u8bbe\u7f6e\u7684\u3002 \u4f8b\u5982\uff0c\u53ef\u4ee5\u81ea\u52a8\u83b7\u53d6\u4f4d\u56fe\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002 \u56e0\u6b64\uff0c\u5728\u4f4d\u56fe\u63a7\u4ef6\u4e0a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"setXY()")," \u5c06\u4f4d\u56fe\u653e\u7f6e\u5728\u663e\u793a\u5c4f\u4e0a\u5c31\u8db3\u591f\u4e86\u3002"),(0,a.kt)("p",null,"\u753b\u5e03\u63a7\u4ef6\u6ca1\u6709\u9ed8\u8ba4\u5927\u5c0f\uff0c\u5176\u503c\u65e2\u53ef\u4ee5\u81ea\u52a8\u786e\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u4e00\u5f00\u59cb\u5c31\u8bbe\u7f6e\u3002 \u4e0d\u4ec5\u8981\u6ce8\u610f\u4f4d\u7f6e\uff0c\u8fd8\u8981\u6b63\u786e\u5730\u786e\u5b9a\u63a7\u4ef6\u7684\u5927\u5c0f\uff0c\u5426\u5219\u753b\u5e03\u63a7\u4ef6\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u5c06\u4e3a\u96f6\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5728\u663e\u793a\u5c4f\u4e0a\u7ed8\u5236\u4efb\u4f55\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u4e0d\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"setXY()"),"\uff0c\u800c\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"setPosition()")," \u6765\u653e\u7f6e\u548c\u8c03\u6574\u753b\u5e03\u63a7\u4ef6\u7684\u5927\u5c0f\u3002 \u5173\u4e8e\u5982\u4f55\u521b\u5efa\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u753b\u5e03\u63a7\u4ef6\u7684\u793a\u4f8b\u53e6\u8bf7\u53c2\u89c1\u4e0b\u6587Custom Canvas Widget\u90e8\u5206\u3002"),(0,a.kt)("p",null,"\u5728\u8bbe\u7f6e\u4e86\u753b\u5e03\u7a7a\u95f4\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\u540e\uff0c\u53ef\u4ee5\u5728\u5176\u5185\u90e8\u7ed8\u5236\u51e0\u4f55\u56fe\u5f62\u3002 \u5750\u6807\u7cfb\u5c06\u4f7f (0, 0) \u4f4d\u4e8e\u63a7\u4ef6\uff08\u4e0d\u662f\u663e\u793a\u5c4f\uff09\u7684\u5de6\u4e0a\u89d2\uff0cX\u8f74\u5411\u53f3\u5ef6\u4f38\u4e14Y\u8f74\u5411\u4e0b\u5ef6\u4f38\u3002"),(0,a.kt)("p",null,"TouchGFX\u8bbe\u8ba1\u5668\u4e5f\u652f\u6301\u201c\u753b\u5e03\u63a7\u4ef6\uff08Canvas Widget\uff09\u201d\uff0c\u8ba9\u4f7f\u7528\u53d8\u5f97\u7b80\u5355\uff0c\u53ef\u81ea\u52a8\u8ba1\u7b97\u5185\u5b58\u9700\u6c42\u548c\u81ea\u52a8\u5206\u914d\u5185\u5b58\u3002"),(0,a.kt)("p",null,"TouchGFX\u8bbe\u8ba1\u5668\u4e2d\u63d0\u4f9b\u7684\u63a7\u4ef6\uff0c\u57fa\u4e8eCanvasWidget\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"../ui-components/shapes/line"}),"Line")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"../ui-components/shapes/circle"}),"Circle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"../ui-components/shapes/shape"}),"Shape")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"../ui-components/progress-indicators/line-progress"}),"Line Progress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"../ui-components/progress-indicators/circle-progress"}),"Circle Progress"))),(0,a.kt)("p",null,"\u901a\u8fc7TouchGFX Designer\u4f7f\u7528\u8fd9\u4e9b\u63a7\u4ef6\u65f6\uff0c\u53ef\u901a\u8fc7\u663e\u793a\u63a7\u4ef6\u5728\u8fd0\u884c\u65f6\u7684\u72b6\u6001\uff0c\u4f7f\u5f97\u653e\u7f6e\u548c\u5927\u5c0f\u8c03\u6574\u975e\u5e38\u7b80\u5355\u3002"),(0,a.kt)("h2",g({},{id:"memory-allocation-and-usage"}),"\u5b58\u50a8\u7a7a\u95f4\u5206\u914d\u548c\u4f7f\u7528"),(0,a.kt)("p",null,"\u4e3a\u4e86\u751f\u6210\u53cd\u952f\u9f7f\u6548\u679c\u826f\u597d\u7684\u590d\u6742\u51e0\u4f55\u56fe\u5f62\uff0c\u9700\u8981\u989d\u5916\u7684\u5b58\u50a8\u7a7a\u95f4\u3002 \u4e3a\u6b64\uff0cCWR\u5fc5\u987b\u5177\u6709\u4e13\u95e8\u5206\u914d\u7684\u5b58\u50a8\u7f13\u51b2\u533a\uff0c\u4ee5\u4fbf\u5728\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u3002 CWR\u4e0eTouchGFX\u7684\u5176\u4f59\u90e8\u5206\u4e00\u6837\uff0c\u6ca1\u6709\u52a8\u6001\u5b58\u50a8\u7a7a\u95f4\u5206\u914d\u3002"),(0,a.kt)("h3",g({},{id:"memory-allocation-in-touchgfx-designer"}),"TouchGFX Designer\u4e2d\u7684\u5b58\u50a8\u7a7a\u95f4\u5206\u914d"),(0,a.kt)("p",null,"\u5728\u5411\u5c4f\u5e55\u7684\u753b\u5e03\u6dfb\u52a0\u63a7\u4ef6\u65f6\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u5b58\u50a8\u7f13\u51b2\u533a\u3002 \u7f13\u51b2\u533a\u5927\u5c0f\u57fa\u4e8e\u5c4f\u5e55\u5bbd\u5ea6\uff0c\u8ba1\u7b97\u516c\u5f0f\u4e3a (\u5bbd\u5ea6 ","\xd7"," 3) ","\xd7"," 5\u3002 \u4f46\u662f\uff0c\u8fd9\u5e76\u975e\u6240\u6709\u60c5\u51b5\u4e0b\u7684\u7406\u60f3\u7f13\u51b2\u533a\u5927\u5c0f\u3002 \u56e0\u6b64\uff0c\u53ef\u4ee5\u91cd\u5199\u7f13\u51b2\u533a\u5927\u5c0f\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/canvas-widgets/screen-canvas-buffer-override-4.17.webp",mdxType:"Figure"},"\u5728\u5c4f\u5e55\u5c5e\u6027\u4e2d\u91cd\u5199\u753b\u5e03\u7f13\u51b2\u533a\u5927\u5c0f"),(0,a.kt)("h3",g({},{id:"memory-allocation-in-user-code"}),"\u7528\u6237\u4ee3\u7801\u4e2d\u7684\u5b58\u50a8\u7a7a\u95f4\u5206\u914d"),(0,a.kt)("p",null,"\u5185\u5b58\u7f13\u51b2\u533a\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"target/main.cpp")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"simulator/main.cpp")," \u4e2d\u5206\u914d\u548c\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u6309\u5c4f\u5e55\u8bbe\u7f6e\u548c\u5206\u914d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"static const uint16_t CANVAS_BUFFER_SIZE = 3600;\nstatic uint8_t canvasBuffer[CANVAS_BUFFER_SIZE]\n")),(0,a.kt)("p",null,"\u5b9a\u4e49\u5185\u5b58\u7f13\u51b2\u533a\u5927\u5c0f\u7684\u9759\u6001\u5e38\u91cf\u548c\u5b9e\u9645\u5185\u5b58\u7f13\u51b2\u533a\u53ef\u4ee5\u5b9a\u4e49\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"main.cpp"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"ScreenView.hpp"),"\u5f00\u5934\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"main.cpp")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," \u65b9\u6cd5\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"ScreenView.cpp")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"setupScreen()")," \u65b9\u6cd5\u4e2d\u53ef\u4ee5\u6dfb\u52a0\u4ee5\u4e0b\u8bbe\u7f6e\u7f13\u51b2\u533a\u7684\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n")),(0,a.kt)("p",null,"\u9700\u8981\u7684CWR\u5b58\u50a8\u7a7a\u95f4\u7684\u91cf\u53d6\u51b3\u4e8e\u8981\u5728\u5e94\u7528\u4e2d\u7ed8\u5236\u7684\u6700\u5927\u56fe\u5f62\u5927\u5c0f\u3002 \u4f46\u662f\uff0c\u60a8\u53ef\u4ee5\u4fdd\u7559\u6bd4\u6700\u590d\u6742\u5f62\u72b6\u6240\u9700\u5185\u5b58\u7a7a\u95f4\u66f4\u5c11\u7684\u5185\u5b58\u3002 \u4e3a\u4e86\u5e94\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0cCWR\u5c06\u56fe\u5f62\u7ed8\u5236\u5206\u5272\u6210\u8f83\u5c0f\u7684\u5e27\u7f13\u51b2\u533a\u90e8\u5206\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u6709\u65f6\u9700\u8981\u4e0d\u6b62\u4e00\u6b21\u5730\u6e32\u67d3\u56fe\u50cf\uff0c\u56e0\u6b64\u6e32\u67d3\u65f6\u95f4\u7a0d\u957f\u3002 \u5728\u6a21\u62df\u5668\u6a21\u5f0f\u4e0b\u8fd0\u884c\u65f6\uff0c\u53ef\u4ee5\u66f4\u7ec6\u81f4\u5730\u67e5\u770b\u5b58\u50a8\u7a7a\u95f4\u6d88\u8017\u5e76\u8fdb\u884c\u5fae\u8c03\u3002 \u53ea\u9700\u5411main.cpp\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"CanvasWidgetRenderer::setWriteMemoryUsageReport(true);\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u65e0\u8bba\u7ed8\u5236\u64cd\u4f5c\u4f55\u65f6\u7ed3\u675f\uff0cCWR\u90fd\u5c06\u62a5\u544a\uff08\u5728\u63a7\u5236\u53f0\u4e0a\u6253\u5370\uff09\u6240\u9700\u5b58\u50a8\u7a7a\u95f4\u7684\u5927\u5c0f\u3002 \u5bf9\u4e8ecanvas_widget_example\uff0c\u53ef\u4ee5\u662f\u201cCWR\u9700\u89813604\u5b57\u8282\u201d\uff08\u7b2c\u4e00\u4e2a\u7ed8\u5236\u64cd\u4f5c\uff09\uff0c\u7136\u540e\u662f\u201cCWR\u9700\u89817932\u5b57\u8282\uff084328\u5b57\u8282\u7f3a\u5931\uff09\u201d\uff08\u7b2c\u4e8c\u4e2a\u7ed8\u5236\u64cd\u4f5c\uff09\u3002 \u5c3d\u7ba1\u663e\u793aCWR\u6ca1\u6709\u8db3\u591f\u5b58\u50a8\u7a7a\u95f4\uff08\u672c\u4f8b\u4e2d\u4e3a4328\u5b57\u8282\u7f3a\u5931\uff09\uff0c\u5e94\u7528\u4ecd\u6b63\u5e38\u8fd0\u884c\u3002 \u8fd9\u662f\u56e0\u4e3aCWR\u68c0\u6d4b\u5230\u53ef\u7528\u4e8e\u5b8c\u6210\u4e00\u6b21\u8fd0\u884c\u4e2d\u590d\u6742\u7ed8\u5236\u64cd\u4f5c\u7684\u5b58\u50a8\u7a7a\u95f4\u592a\u5c11\u3002 \u4e3a\u6b64\uff0c\u5b83\u5c06\u7ed8\u5236\u64cd\u4f5c\u5206\u5272\u6210\u4e24\u9879\u72ec\u7acb\u7684\u7ed8\u5236\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5f88\u597d\u5730\u7ed8\u5236\u56fe\u5f62\uff0c\u4f46\u9700\u8981\u66f4\u591a\u65f6\u95f4\u6e32\u67d3\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u8bbe\u7f6e\u6b63\u786e\u7684\u5b58\u50a8\u7f13\u51b2\u533a\u5927\u5c0f\u4ee5\u4fbf\u5728\u5b58\u50a8\u7a7a\u95f4\u4e0e\u6027\u80fd\uff08\u6e32\u67d3\u65f6\u95f4\uff09\u4e4b\u95f4\u53d6\u5f97\u5e73\u8861\u3002 \u597d\u7684\u8d77\u59cb\u503c\u901a\u5e38\u7ea6\u4e3a3000\uff0c\u4f46\u4f7f\u7528\u4e0a\u8ff0\u6280\u5de7\u901a\u5e38\u53ef\u4ee5\u786e\u5b9a\u66f4\u4f18\u503c\u3002 \u5982\u679c\u56fe\u5f62\u8fc7\u4e8e\u590d\u6742\u4e14\u5206\u914d\u7684\u5b58\u50a8\u7f13\u51b2\u533a\u8fc7\u5c0f\uff0c\u5c06\u4e0d\u7ed8\u5236\u90e8\u5206\u56fe\u5f62\uff08\u4e00\u4e9b\u5782\u76f4\u50cf\u7d20\u7ebf\u4f1a\u88ab\u8df3\u8fc7\uff09\uff0c\u5e76\u4e14\u6709\u53ef\u80fd\u4e0d\u7ed8\u5236\u4efb\u4f55\u5185\u5bb9\u3002 \u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\uff0c\u6e32\u67d3\u65f6\u95f4\u90fd\u4f1a\u589e\u52a0\u8bb8\u591a\u3002"),(0,a.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u5982\u679c\u60a8\u5e0c\u671b\u5e94\u7528\u4ee5\u6700\u5feb\u901f\u5ea6\u6e32\u67d3CWR\u7ed8\u56fe\uff0c\u60a8\u9700\u8981\u6ee1\u8db3\u5206\u914d\u8bf7\u6c42\u7684\u5b58\u50a8\u7a7a\u95f4\u5927\u5c0f\u3002 \u4f46\u662f\uff0c\u5982\u679c\u80fd\u591f\u63a5\u53d7\u66f4\u957f\u7684\u6e32\u67d3\u65f6\u95f4\uff0c\u5b8c\u5168\u53ef\u4ee5\u7f29\u5c0f\u5b58\u50a8\u7f13\u51b2\u533a\u3002"),(0,a.kt)("h2",g({},{id:"the-cwr-coordinate-system"}),"CWR\u5750\u6807\u7cfb"),(0,a.kt)("p",null,"TouchGFX\u4e2d\u7684\u5750\u6807\u7cfb\u901a\u5e38\u7528\u4e8e\u5bfb\u5740\u50cf\u7d20\uff0c\u4ee5\u4fbf\u5728\u663e\u793a\u5c4f\u4e0a\u5b9a\u4f4d\u4f4d\u56fe\u3002 \u4f4d\u56fe\u3001\u6587\u672c\u548c\u5176\u4ed6\u56fe\u5f62\u5143\u7d20\u90fd\u4f4d\u4e8e\u5750\u6807\u7cfb\u4e2d\uff0c\u5176\u4e2d (0,0) \u662f\u5de6\u4e0a\u89d2\u50cf\u7d20\uff0cX\u8f74\u5411\u53f3\u5ef6\u4f38\uff0cY\u8f74\u5411\u4e0b\u5ef6\u4f38\u3002 \u5728CWR\u4e2d\uff0c\u80fd\u591f\u4f7f\u7528\u6574\u6570\u5bfb\u5740\u50cf\u7d20\u662f\u4e0d\u591f\u7684\uff0c\u5c3d\u7ba1\u5728\u7279\u6b8a\u60c5\u51b5\u4e0b\u5df2\u7ecf\u8db3\u591f\uff0c\u5728\u4e00\u822c\u60c5\u51b5\u4e0b\u8fdc\u8fdc\u4e0d\u591f\u3002 \u4e3a\u4e86\u8bc1\u660e\u8fd9\u4e00\u70b9\uff0c\u5047\u8bbe\u6709\u4e00\u4e2a\u7ebf\u5bbd\u4e3a1\u7684\u5706\uff0c\u5fc5\u987b\u88ab\u7cbe\u786e\u5730\u5d4c\u5165\u4e00\u4e2a5x5\u50cf\u7d20\u7684\u65b9\u5757\u4e2d\u3002 \u6b64\u5706\u7684\u4e2d\u5fc3\u5fc5\u987b\u4f4d\u4e8e (2.5, 2.5)\uff0c\u534a\u5f84\u5fc5\u987b\u662f2\uff0c\u56e0\u6b64\u4e2d\u5fc3\u5750\u6807\u9700\u4e3a\u5c0f\u6570\u3002 \u7c7b\u4f3c\u5730\uff0c\u5982\u679c\u5706\u5e94\u5d4c\u5165\u4e00\u4e2a6x6\u50cf\u7d20\u7684\u65b9\u5757\uff0c\u5219\u4e2d\u5fc3\u5fc5\u987b\u4f4d\u4e8e (3, 3)\uff0c\u534a\u5f84\u5fc5\u987b\u662f2.5\uff0c\u56e0\u6b64\u534a\u5f84\u9700\u4e3a\u5c0f\u6570\u3002"),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b0\u7684\u56fe\u5f62\u7ed8\u5236\u5750\u6807\u5bfb\u5740\u65b9\u5f0f\u610f\u5473\u7740 (0,0) \u5904\u50cf\u7d20\u7684\u4e2d\u5fc3\u7684CWR\u5750\u6807\u4e3a (0.5, 0.5)\u3002 \u56e0\u6b64\uff0c\u5305\u542b\u5c4f\u5e55\u5de6\u4e0a\u89d2\u50cf\u7d20\u7684\u65b9\u5757\u7684\u8f6e\u5ed3\u5982\u4e0b\uff1a(0,0) -> (1,0) -> (1,1) -> (0,1) -> (0,0)\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/canvas-widgets/cwr-coordinate-system.webp",mdxType:"Figure"},"(0,0) \u5904\u50cf\u7d20\u7684CWR\u5750\u6807\u7cfb"),(0,a.kt)("p",null,"\u5c3d\u7ba1\u6700\u521d\u770b\u8d77\u6765\u4ee4\u4eba\u56f0\u60d1\uff0c\u4f46\u5f88\u5feb\u4f1a\u53d1\u73b0\u8fd9\u662f\u5341\u5206\u81ea\u7136\u7684\u3002 \u4f4d\u56fe\u7684\u5750\u6807\u7cfb\u5bfb\u5740\u50cf\u7d20\uff0c\u753b\u5e03\u63a7\u4ef6\u7684\u540c\u4e00\u5750\u6807\u7cfb\u5bfb\u5740\u50cf\u7d20\u4e4b\u524d\u6709\u95f4\u9699\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u5706\u5f62\u901a\u5e38\u9700\u8981\u79fb\u52a8\u534a\u4e2a\u50cf\u7d20\u624d\u80fd\u6b63\u786e\u653e\u7f6e\u5706\u5fc3\uff0c\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"Circle::setPixelCenter()"),"\u51fd\u6570\u4f1a\u5c06\u5706\u5fc3\u653e\u7f6e\u5728\u7ed9\u5b9a\u50cf\u7d20\u7684\u4e2d\u5fc3\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4ece\u6307\u5b9a\u7684\u5750\u6807\u518d\u5411\u53f3\u548c\u5411\u4e0b\u79fb\u52a8\u534a\u4e2a\u50cf\u7d20 ."),(0,a.kt)("h2",g({},{id:"custom-canvas-widgets"}),"\u81ea\u5b9a\u4e49\u753b\u5e03\u63a7\u4ef6"),(0,a.kt)("p",null,"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u753b\u5e03\u63a7\u4ef6\u9700\u8981\u7528\u4e0b\u5217\u51fd\u6570\u5b9e\u73b0\u65b0\u7c7b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"virtual bool drawCanvasWidget(const Rect& invalidatedArea) const;\nvirtual Rect getMinimalRect() const;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"drawCanvasWidget()")," \u5fc5\u987b\u7ed8\u5236\u81ea\u5b9a\u4e49\u63a7\u4ef6\u9700\u8981\u7ed8\u5236\u7684\u4efb\u4f55\u5185\u5bb9\uff0c\u5e76\u4e14 ",(0,a.kt)("inlineCode",{parentName:"p"},"getMinimalRect()")," \u5e94\u8be5\u8fd4\u56de Widget \u4e2d\u5305\u542b\u51e0\u4f55\u5f62\u72b6\u7684\u5b9e\u9645\u77e9\u5f62\u3002"),(0,a.kt)(i.Z,{mdxType:"Note"},"\u4f7f\u7528 ",(0,a.kt)(l.Z,{mdxType:"InlineCode"},"getMinimalRect()")," \u7684\u539f\u56e0\u5728\u4e8e\u53ef\u4ee5\u5728\u5176\u63a7\u4ef6\u5185\u90e8\u5230\u5904\u79fb\u52a8\u51e0\u4f55\u56fe\u5f62\uff0c\u5e76\u4e14\u5f53\u5f62\u72b6\u53d8\u4e3a\u4ec5\u4f7f\u6700\u5c0f\u53ef\u80fd\u533a\u57df\u65e0\u6548\u65f6\uff0c\u6539\u53d8\u63a7\u4ef6\u7684\u5927\u5c0f\u548c\u91cd\u65b0\u5b9a\u4f4d\u63a7\u4ef6\u901a\u5e38\u90fd\u4e0d\u5207\u5b9e\u9645\u3002",(0,a.kt)("p",null,"  \u51fd\u6570 ",(0,a.kt)(l.Z,{mdxType:"InlineCode"},"getMinimalRect()")," \u7684\u865a\u62df\u5b9e\u73b0\u53ef\u80fd\u53ea ",(0,a.kt)(l.Z,{mdxType:"InlineCode"},"\u8fd4\u56derect;"),"\u8fd9\u662f\u63a7\u4ef6\u7684\u5927\u5c0f\uff0c\u4f46\u8fd9\u4f1a\u5bfc\u81f4\u88ab\u753b\u5e03\u63a7\u4ef6\u8986\u76d6\u7684\u6574\u4e2a\u533a\u57df\u7684\u91cd\u65b0\u7ed8\u5236\uff0c\u800c\u4e0d\u53ea\u662f\u5305\u542b\u51e0\u4f55\u56fe\u5f62\u7684\u753b\u5e03\u63a7\u4ef6\u7684\u4e00\u90e8\u5206\u3002 \u51e0\u4f55\u56fe\u5f62\u901a\u5e38\u53ea\u5360\u636e\u753b\u5e03\u63a7\u4ef6\u7684\u4e00\u5c0f\u90e8\u5206\u3002")),(0,a.kt)("p",null,"\u753b\u5e03\u63a7\u4ef6\u5168\u90e8\u4f7f\u7528Canvas\u7c7b\uff0c\u5b83\u5982\u4e0a\u6587\u6240\u8ff0\u538b\u7f29Canvas Widget Renderer\u3002 CWR\u6709\u8bb8\u591a\u81ea\u52a8\u5e94\u7528\u7684\u4f18\u5316\uff0c\u5c3d\u7ba1\u77e5\u9053\u51e0\u4f55\u56fe\u5f62\u4e0e\u65e0\u6548\u533a\u57df\u6709\u5173\uff0c\u907f\u514d\u65e0\u6548\u533a\u57df\u4e4b\u5916\u7684\u4e0d\u5fc5\u8981\u7ed8\u5236\uff0c\u59cb\u7ec8\u662f\u4e00\u79cd\u63d0\u5347\u6027\u80fd\u7684\u597d\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u572810x10\u65b9\u5757\u5185\u90e8\u7c97\u7565\u5b9e\u73b0\u4e00\u4e2a\u83f1\u5f62\u5757\uff0c\u65b9\u5f0f\u53ef\u80fd\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"class Diamond10x10 : public CanvasWidget\n{\npublic:\n  virtual Rect getMinimalRect() const\n  {\n    return Rect(0,0,10,10);\n  }\n  virtual bool drawCanvasWidget(const Rect& invalidatedArea) const\n  {\n    Canvas canvas(this, invalidatedArea);\n    canvas.moveTo(5,0);\n    canvas.lineTo(10,5);\n    canvas.lineTo(5,10);\n    canvas.lineTo(0,5);\n    return canvas.render(); // Shape is automatically closed\n  }\n};\n")),(0,a.kt)(i.Z,{mdxType:"Note"},"\u540c\u6837\u5730\uff0c\u6ce8\u610f ",(0,a.kt)(l.Z,{mdxType:"InlineCode"},"getMinimalRect()")," \u8fd4\u56de\u5230\u6b63\u786e\u77e9\u5f62\uff0c\u5426\u5219\u5c4f\u5e55\u4e0a\u7684\u56fe\u5f62\u53ef\u80fd\u662f\u9519\u8bef\u7684\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5728\u663e\u793a\u5c4f\u4e0a\u770b\u523010x10Diamond\uff0c\u5fc5\u987b\u4f7f\u7528\u7ee7\u627f\u81ea CanvasWidget \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Diamond 10x10::setPainter()")," \u8bbe\u7f6e\u989c\u8272\u3002 \u53e6\u5916\uff0c\u5fc5\u987b\u6b63\u786e\u5730\u653e\u7f6eDiamond10x10\u5e76\u8c03\u6574\u5176\u5927\u5c0f\u3002 \u65b9\u5f0f\u53ef\u80fd\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("p",null,"\u5728\u5934\u6587\u4ef6\u4e2d\u58f0\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"Diamond10x10 box;\nPainterRGB565 myPainter;\n")),(0,a.kt)("p",null,"\u5e76\u4e14\u4ee3\u7801\u4e2d\u5e94\u6709\u7c7b\u4f3c\u8fd9\u6837\u7684\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"myPainter.setColor(Color::getColorFromRGB(0xFF, 0x0, 0x0));\nbox.setPosition(100,100,10,10);\nbox.setPainter(myPainter);\nadd(box);\n")),(0,a.kt)("h2",g({},{id:"\u7ed8\u56fe\u5668painters"}),"\u7ed8\u56fe\u5668\uff08#painters\uff09"),(0,a.kt)("p",null,"\u7ed8\u56fe\u5668\u5b9a\u4e49\u4e00\u4e2a\u914d\u8272\u65b9\u6848\uff0c\u7528\u4e8e\u586b\u5145\u2018Canvas Widget\u2019\u5bf9\u8c61\uff0c\u56e0\u6b64\u7ed8\u56fe\u5668\u9700\u8981\u4f7f\u5f62\u72b6\u53ef\u89c1\u3002 \u7ed8\u56fe\u5668\u53ef\u4ee5\u4e3a\u6240\u6709\u50cf\u7d20\u63d0\u4f9b\u5355\u4e00\u989c\u8272\uff08\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"PainterRGB565"),"\uff09\uff0c\u6216\u8005\u4ece\u63d0\u4f9b\u7684\u4f4d\u56fe\u4e2d\u590d\u5236\u6bcf\u4e2a\u50cf\u7d20\uff08\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"PainterRGB565Bitmap"),"\uff09\u3002 \u7531\u4e8e\u7ed8\u56fe\u5668\u76f4\u63a5\u5c06\u50cf\u7d20\u5199\u5165\u5e27\u7f13\u5b58\u533a\uff0c\u56e0\u6b64\u6240\u9009\u7684\u7ed8\u56fe\u5668\u5fc5\u987b\u5339\u914d\u76ee\u6807\u663e\u793a\u5c4f\u6216\u52a8\u6001\u4f4d\u56fe\u7684\u89c4\u8303\u3002 TouchGFX\u63d0\u4f9b\u7684\u7ed8\u56fe\u5668\u9762\u5411\u6240\u6709\u652f\u6301\u7684\u663e\u793a\u5c4f\uff0c\u4e13\u95e8\u7528\u4e8e\u7eaf\u8272\u6216\u4f4d\u56fe\u7ed8\u5236\u3002"),(0,a.kt)("p",null,"\u4ece\u4f4d\u56fe\u7ed8\u5236\u50cf\u7d20\u7684\u7ed8\u56fe\u5668\u4e5f\u53ef\u4ee5\u7ed8\u5236\u5e73\u94fa\u7684\u4f4d\u56fe\uff0c\u8fd9\u6709\u52a9\u4e8e\u51cf\u5c11\u5185\u5b58\u9700\u6c42\u3002"),(0,a.kt)("h2",g({},{id:"custom-painters"}),"\u5b9a\u5236\u7ed8\u56fe\u5668"),(0,a.kt)("p",null,"\u5c3d\u7ba1TouchGFX\u63d0\u4f9b\u4e00\u7ec4\u9884\u5b9a\u4e49\u7684\u7ed8\u56fe\u5668\u7c7b\uff0c\u6db5\u76d6\u4e86\u5927\u591a\u6570\u7528\u4f8b\u573a\u666f\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u5b9a\u5236\u7ed8\u56fe\u5668\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u5b9a\u5236\u7684\u7ed8\u56fe\u5668\uff0c\u5fc5\u987b\u6ce8\u610f\u6c38\u8fdc\u4e0d\u8981\u5728\u5e27\u7f13\u5b58\u533a\u4e4b\u5916\u8fdb\u884c\u5199\u64cd\u4f5c\uff08\u8fd9\u662f\u7531\u62bd\u8c61\u7ed8\u56fe\u5668\u57fa\u7c7b\u5904\u7406\u7684\uff09\u3002 \u8fd9\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49 Painter \u7684\u793a\u4f8b\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u5b83\u6765\u5c06\u5bf9\u8c61\u7ed8\u5236\u4e3a\u7ea2\u8272\uff0c\u53ea\u9700\u8981\u5b9e\u73b0\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"renderNext()"),"\u3002 \u66f4\u591a\u4fe1\u606f\u89c1AbstractPainter\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"class RedPainter : public AbstractPainterRGB565\n{\npublic:\n    virtual bool renderNext(uint8_t &red, uint8_t &green, uint8_t &blue, uint8_t &alpha)\n    {\n        red = 0xFF;\n        green = 0x00;\n        blue = 0x00;\n        alpha = 0xFF;\n    }\n};\n")),(0,a.kt)("p",null,"\u4e3a\u4e86\u5728\u7ea2\u8272\u4e0a\u65b9\u753b\u4e00\u4e2a\u65b9\u5757\u5bf9\u8c61\uff0c\u5c06\u4ee5\u4e0b\u4ee3\u7801\u653e\u5165\u5934\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"Diamond10x10 box;\nRedPainter redPaint;\n")),(0,a.kt)("p",null,"\u5e76\u5c06\u4ee5\u4e0b\u5185\u5bb9\u653e\u5165\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"box.setPosition(100,100,10,10);\nbox.setPainter(redPaint);\nadd(box);\n")),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u53ef\u4ee5\u4f7f\u7528\u66f4\u591a\u65b9\u6cd5\u6765\u521b\u5efa\u7279\u6b8aPainters\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"renderInit()"),"\uff0c\u7136\u800c\uff0cTouchGFX \u6709\u4e00\u4e9b\u901a\u7528\u7684Painters\uff0c\u6db5\u76d6\u4e86\u5927\u591a\u6570\u5e94\u7528\u3002"))}x.isMDXComponent=!0}}]);