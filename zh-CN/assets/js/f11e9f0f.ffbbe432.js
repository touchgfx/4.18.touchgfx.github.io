"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6524],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,d=p["".concat(a,".").concat(h)]||p[h]||s[h]||i;return r?n.createElement(d,c(c({ref:t},f),{},{components:r})):n.createElement(d,c({ref:t},f))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,c=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:i,src:c})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:i,src:c})),n.createElement("p",null,e.children))}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return c}});var n=r(11368),o=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},80762:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return h},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return g},default:function(){return y}});var n=r(3905),o=r(44035),i=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))f.call(t,r)&&s(e,r,t[r]);return e};const h={id:"what-is-touchgfx",title:"\u4ec0\u4e48\u662fTouchGFX\uff1f"},d=void 0,m={unversionedId:"introduction/what-is-touchgfx",id:"introduction/what-is-touchgfx",isDocsHomePage:!1,title:"\u4ec0\u4e48\u662fTouchGFX\uff1f",description:"TouchGFX is delivered as one X-Cube package the X-Cube-TouchGFX.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/what-is-touchgfx.mdx",sourceDirName:"introduction",slug:"/introduction/what-is-touchgfx",permalink:"/4.18/zh-CN/docs/introduction/what-is-touchgfx",tags:[],version:"current",frontMatter:{id:"what-is-touchgfx",title:"\u4ec0\u4e48\u662fTouchGFX\uff1f"},sidebar:"docs",previous:{title:"\u6b22\u8fce",permalink:"/4.18/zh-CN/docs/introduction/welcome"},next:{title:"\u5b89\u88c5",permalink:"/4.18/zh-CN/docs/introduction/installation"}},g=[],b={toc:g};function y(e){var t,r=e,{components:i}=r,s=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),s),c(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX is delivered as one X-Cube package the ",(0,n.kt)("em",{parentName:"p"},"X-Cube-TouchGFX"),"."),(0,n.kt)("p",null,"\u8be5\u8f6f\u4ef6\u5305\u4e3a\u60a8\u5168\u9762\u5b9e\u65bd\u57fa\u4e8eSTM32\u7684GUI\u5e94\u7528\u5f00\u53d1\u63d0\u4f9b\u4e86\u6240\u9700\u7684\u4e00\u5207\u3002 TouchGFX\u5305\u542b\u4e09\u4e2a\u4e3b\u8981\u90e8\u5206 - \u4e24\u4e2a\u5de5\u5177\u548c\u4e00\u4e2a\u6846\u67b6\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Designer\uff1a"),"TouchGFX\u4e2d\u6613\u4e8e\u4f7f\u7528\u7684GUI\u6784\u5efa\u5de5\u5177\uff0c\u8ba9\u60a8\u53ef\u4ee5\u521b\u5efaTouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684\u89c6\u89c9\u5916\u89c2\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Generator:")," A STM32CubeMX plugin where the user can configure and generate a custom TouchGFX Abstraction Layer (AL) for their STM32-based hardware."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX \u5f15\u64ce\uff1a"),"\u7528\u4e8e\u9a71\u52a8UI\u5e94\u7528\u7a0b\u5e8f\u7684TouchGFX C++\u6846\u67b6\uff0c \u4ee5\u53ca\u5904\u7406\u5c4f\u5e55\u66f4\u65b0\u3001\u7528\u6237\u4e8b\u4ef6\u548c\u5b9a\u65f6\u7b49\u3002 \u5148\u8fdb\u7684TouchGFX\u6280\u672f\u9488\u5bf9STM32\u5fae\u63a7\u5236\u5668\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u4ece\u800c\u4ee5\u6700\u4f4eCPU\u8d1f\u8377\u548c\u5185\u5b58\u6d88\u8017\u5b9e\u73b0\u63d0\u4f9b\u6700\u4f73\u6027\u80fd\u3002")),(0,n.kt)(o.Z,{imageSource:"/img/introduction/what-is-touchgfx/touchgfx-components.png",noShadow:!0,mdxType:"Figure"}))}y.isMDXComponent=!0}}]);