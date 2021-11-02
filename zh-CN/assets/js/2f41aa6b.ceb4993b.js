(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5773],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,c=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children))}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return c}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},65232:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return h},toc:function(){return g},default:function(){return y}});var r=n(3905),o=n(44035),i=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&p(e,n,t[n]);return e};const m={id:"welcome",title:"TouchGFX\u6587\u6863",sidebar_label:"\u6b22\u8fce",description:"TouchGFX\u6587\u6863\u7f51\u7ad9\u2014\u2014\u4e00\u4e2a\u65b9\u4fbf\u7528\u6237\u7684\u56fe\u5f62C++\u5de5\u5177\uff0c\u7528\u4e8e\u521b\u5efa\u5f3a\u5927\u7684\u5d4c\u5165\u5f0f\u89e6\u6478\u5e94\u7528\u7a0b\u5e8f\u3002"},d=void 0,h={unversionedId:"introduction/welcome",id:"introduction/welcome",isDocsHomePage:!1,title:"TouchGFX\u6587\u6863",description:"TouchGFX\u6587\u6863\u7f51\u7ad9\u2014\u2014\u4e00\u4e2a\u65b9\u4fbf\u7528\u6237\u7684\u56fe\u5f62C++\u5de5\u5177\uff0c\u7528\u4e8e\u521b\u5efa\u5f3a\u5927\u7684\u5d4c\u5165\u5f0f\u89e6\u6478\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/welcome.mdx",sourceDirName:"introduction",slug:"/introduction/welcome",permalink:"/4.18/zh-CN/docs/introduction/welcome",tags:[],version:"current",frontMatter:{id:"welcome",title:"TouchGFX\u6587\u6863",sidebar_label:"\u6b22\u8fce",description:"TouchGFX\u6587\u6863\u7f51\u7ad9\u2014\u2014\u4e00\u4e2a\u65b9\u4fbf\u7528\u6237\u7684\u56fe\u5f62C++\u5de5\u5177\uff0c\u7528\u4e8e\u521b\u5efa\u5f3a\u5927\u7684\u5d4c\u5165\u5f0f\u89e6\u6478\u5e94\u7528\u7a0b\u5e8f\u3002"},sidebar:"docs",next:{title:"\u4ec0\u4e48\u662fTouchGFX\uff1f",permalink:"/4.18/zh-CN/docs/introduction/what-is-touchgfx"}},g=[{value:"\u5173\u4e8e\u672c\u6587\u6863",id:"about-this-documentation",children:[{value:"\u76ee\u6807\u7528\u6237",id:"target-user",children:[],level:3}],level:2}],b={toc:g};function y(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},b),p),c(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u6b22\u8fce\u4f7f\u7528TouchGFX\u7684\u5b98\u65b9\u6587\u6863\uff01"),(0,r.kt)(o.Z,{imageSource:"/img/introduction/welcome/frontpage-4.17.png",noShadow:"true",mdxType:"Figure"}),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u662f\u672c\u6587\u6863\u6216TouchGFX\u7684\u65b0\u7528\u6237\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u901a\u8fc7\u9605\u8bfb\u5b83\u6765\u5927\u6982\u4e86\u89e3\u6587\u4e2d\u5185\u5bb9\u3002 \u4fa7\u8fb9\u680f\u4e2d\u7684\u76ee\u5f55\u4f7f\u60a8\u53ef\u4ee5\u8f7b\u677e\u8bbf\u95ee\u6587\u4e2d\u611f\u5174\u8da3\u7684\u4e3b\u9898\u3002 \u60a8\u4e5f\u53ef\u4ee5\u5728\u53f3\u4e0a\u89d2\u4f7f\u7528\u641c\u7d22\u529f\u80fd\u3002"),(0,r.kt)("h2",f({},{id:"about-this-documentation"}),"\u5173\u4e8e\u672c\u6587\u6863"),(0,r.kt)("p",null,"\u672c\u7ad9\u70b9\u7684\u4e3b\u8981\u6587\u6863\u5206\u4e3a\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"what-is-touchgfx"}),(0,r.kt)("strong",{parentName:"a"},"\u7b80\u4ecb"))," - \u9605\u8bfb\u6709\u5173TouchGFX\u7684\u57fa\u7840\u4fe1\u606f\u548c\u5b89\u88c5\u6307\u5357\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),(0,r.kt)("strong",{parentName:"a"},"\u57fa\u672c\u6982\u5ff5"))," - \u4ecb\u7ecd\u5173\u952e\u56fe\u5f62\u6982\u5ff5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"../development/development-introduction"}),(0,r.kt)("strong",{parentName:"a"},"\u5f00\u53d1"))," - \u5982\u4f55\u5f00\u53d1TouchGFX\u5e94\u7528\uff0c\u5305\u62ec\u7ed3\u6784\u3001\u5de5\u4f5c\u6d41\u548c\u5de5\u5177\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"../tutorials/tutorial-01"}),(0,r.kt)("strong",{parentName:"a"},"\u6559\u7a0b"))," - TouchGFX\u6559\u7a0b\u96c6\u5408\u3002")),(0,r.kt)("h3",f({},{id:"target-user"}),"\u76ee\u6807\u7528\u6237"),(0,r.kt)("p",null,"TouchGFX\u6587\u6863\u9762\u5411\u5728C++\u548cSTM32\u4e0a\u7684\u5d4c\u5165\u5f0fGUI\u5f00\u53d1\u9886\u57df\u5177\u6709\u76f8\u5e94\u57fa\u7840\u77e5\u8bc6\u4e0e\u6280\u80fd\u7684\u8f6f\u4ef6\u5f00\u53d1\u4eba\u5458\u3002 \u57fa\u672c\u6982\u5ff5\u7ae0\u8282\u4e3a\u5d4c\u5165\u5f0fGUI\u5f00\u53d1\u65b0\u624b\u63d0\u4f9b\u652f\u6301\uff0c\u800c\u5206\u6b65\u6307\u5357\u548c\u6559\u7a0b\u4e5f\u4e3a\u6bcf\u4e2a\u5b66\u4e60TouchGFX\u7684\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u652f\u6301\uff0c\u4ee5\u4ee4\u5176GUI\u5f00\u53d1\u66f4\u4e3a\u987a\u5229\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"We would really like to improve this documentation in any way possible.")," ",(0,r.kt)("em",{parentName:"p"},"If you don\u2019t understand something, or cannot find what you are looking for in the docs, help us make the documentation better by letting us know in the ",(0,r.kt)("a",f({parentName:"em"},{href:"https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx"}),"forum"),"!")))}y.isMDXComponent=!0}}]);