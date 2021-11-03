"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4387],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},53130:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return g},default:function(){return y}});var r=n(3905),o=n(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&s(e,n,t[n]);return e};const d={id:"welcome",title:"TouchGFX\u6587\u4ef6",sidebar_label:"Welcome",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications."},m=void 0,h={unversionedId:"introduction/welcome",id:"introduction/welcome",isDocsHomePage:!1,title:"TouchGFX\u6587\u4ef6",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/introduction/welcome.mdx",sourceDirName:"introduction",slug:"/introduction/welcome",permalink:"/4.18/zh-TW/docs/introduction/welcome",tags:[],version:"current",frontMatter:{id:"welcome",title:"TouchGFX\u6587\u4ef6",sidebar_label:"Welcome",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications."},sidebar:"docs",next:{title:"\u4ec0\u9ebc\u662fTouchGFX\uff1f",permalink:"/4.18/zh-TW/docs/introduction/what-is-touchgfx"}},g=[{value:"\u95dc\u65bc\u672c\u6587\u4ef6",id:"about-this-documentation",children:[{value:"\u76ee\u6a19\u4f7f\u7528\u8005",id:"target-user",children:[],level:3}],level:2}],b={toc:g};function y(e){var t,n=e,{components:i}=n,s=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},b),s),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u6b61\u8fce\u4f7f\u7528TouchGFX\u7684\u5b98\u65b9\u6587\u4ef6\uff01"),(0,r.kt)(o.Z,{imageSource:"/img/introduction/welcome/frontpage-4.17.png",noShadow:"true",mdxType:"Figure"}),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u662f\u672c\u6587\u4ef6\u6216TouchGFX\u7684\u65b0\u4f7f\u7528\u8005\uff0c\u6211\u5011\u5efa\u8b70\u60a8\u900f\u904e\u95b1\u8b80\u672c\u6587\u4ef6\u4f86\u5927\u6982\u4e86\u89e3\u6587\u4e2d\u5167\u5bb9\u3002 \u5074\u908a\u6b04\u4e2d\u7684\u76ee\u9304\u4f7f\u60a8\u53ef\u4ee5\u8f15\u9b06\u5b58\u53d6\u6587\u4e2d\u611f\u8208\u8da3\u7684\u4e3b\u984c\u3002 \u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u641c\u5c0b\u529f\u80fd\u3002"),(0,r.kt)("h2",f({},{id:"about-this-documentation"}),"\u95dc\u65bc\u672c\u6587\u4ef6"),(0,r.kt)("p",null,"\u672c\u7db2\u7ad9\u7684\u4e3b\u8981\u6587\u4ef6\u5206\u70ba\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"what-is-touchgfx"}),(0,r.kt)("strong",{parentName:"a"},"\u7c21\u4ecb"))," - \u95b1\u8b80\u6709\u95dcTouchGFX\u7684\u57fa\u790e\u8cc7\u8a0a\u548c\u5b89\u88dd\u6307\u5357\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),(0,r.kt)("strong",{parentName:"a"},"\u57fa\u672c\u6982\u5ff5"))," - \u4ecb\u7d39\u95dc\u9375\u5716\u5f62\u6982\u5ff5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"../development/development-introduction"}),(0,r.kt)("strong",{parentName:"a"},"\u958b\u767c"))," - \u5982\u4f55\u958b\u767cTouchGFX\u61c9\u7528\uff0c\u5305\u62ec\u7d50\u69cb\u3001\u5de5\u4f5c\u6d41\u7a0b\u548c\u5de5\u5177\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"../tutorials/tutorial-01"}),(0,r.kt)("strong",{parentName:"a"},"\u6559\u5b78"))," - TouchGFX\u6559\u5b78\u96c6\u5408\u3002")),(0,r.kt)("h3",f({},{id:"target-user"}),"\u76ee\u6a19\u4f7f\u7528\u8005"),(0,r.kt)("p",null,"\u672cTouchGFX\u6587\u4ef6\u7684\u76ee\u6a19\u8b80\u8005\u70ba\u5728C++\u548cSTM32\u4e0a\u7684\u5d4c\u5165\u5f0fGUI\u958b\u767c\u9818\u57df\u5177\u6709\u76f8\u61c9\u57fa\u790e\u77e5\u8b58\u8207\u6280\u80fd\u7684\u8edf\u9ad4\u958b\u767c\u4eba\u54e1\u3002 \u5d4c\u5165\u5f0fGUI\u958b\u767c\u65b0\u624b\u53ef\u53c3\u95b1\u300c\u57fa\u672c\u6982\u5ff5\uff08Basic Concepts\uff09\u300d\u7ae0\u7bc0\uff0c\u540c\u6642\u6240\u6709\u7684\u958b\u767c\u8005\u90fd\u53ef\u4ee5\u5728\u5faa\u5e8f\u6f38\u9032\u5730\u7684\u6307\u5357\u548c\u6559\u5b78\u4e2d\u5f97\u5230\u6536\u7372\u4ee5\u5229GUI\u958b\u767c\u66f4\u70ba\u9806\u5229\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"We would really like to improve this documentation in any way possible.")," ",(0,r.kt)("em",{parentName:"p"},"If you don\u2019t understand something, or cannot find what you are looking for in the docs, help us make the documentation better by letting us know in the ",(0,r.kt)("a",f({parentName:"em"},{href:"https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx"}),"forum"),"!")))}y.isMDXComponent=!0}}]);