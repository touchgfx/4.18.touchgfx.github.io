"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7630],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=u(n),m=r,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?a.createElement(k,l(l({ref:e},p),{},{components:n})):a.createElement(k,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(t,e,n){var a=n(67294),r=n(25026);e.Z=function(t){const e=t.noShadow||!1,n=t.width,o=t.height,l=(0,r.Z)(t.imageSource);return e?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,t.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,t.children))}},35096:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){n.d(e,{C:function(){return o},Z:function(){return l}});var a=n(11368),r=n(35096);function o(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return o?t+l:l}(e,t,n,a)}}function l(t,e={}){const{withBaseUrl:n}=o();return n(t,e)}},49079:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return h},toc:function(){return g},default:function(){return f}});var a=n(3905),r=n(44035),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&d(t,n,e[n]);if(c)for(var n of c(e))p.call(e,n)&&d(t,n,e[n]);return t};const m={id:"memory-usage",title:"\u8a18\u61b6\u9ad4\u4f7f\u7528"},k=void 0,h={unversionedId:"basic-concepts/memory-usage",id:"basic-concepts/memory-usage",isDocsHomePage:!1,title:"\u8a18\u61b6\u9ad4\u4f7f\u7528",description:"\u524d\u8a00",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/memory-usage.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/memory-usage",permalink:"/4.18/zh-TW/docs/basic-concepts/memory-usage",tags:[],version:"current",frontMatter:{id:"memory-usage",title:"\u8a18\u61b6\u9ad4\u4f7f\u7528"},sidebar:"docs",previous:{title:"\u4f5c\u696d\u7cfb\u7d71",permalink:"/4.18/zh-TW/docs/basic-concepts/operating-system"},next:{title:"\u958b\u767c\u7c21\u4ecb",permalink:"/4.18/zh-TW/docs/development/development-introduction"}},g=[{value:"\u524d\u8a00",id:"introduction",children:[],level:2},{value:"\u975c\u614b\u5b58\u5132\u5206\u914d",id:"static-memory-allocation",children:[{value:"Screen\u548cWidget",id:"screens-and-widgets",children:[],level:3},{value:"\u61c9\u7528\u7a0b\u5f0f\u7a0b\u5f0f\u78bc",id:"application-code",children:[],level:3},{value:"\u8cc7\u7522",id:"assets",children:[],level:3}],level:2},{value:"\u6aa2\u67e5\u5b58\u5132\u7a7a\u9593\u4f7f\u7528\u91cf",id:"checking-memory-usage",children:[{value:"\u5167\u90e8RAM",id:"internal-ram",children:[],level:3},{value:"Internal Flash",id:"internal-flash",children:[],level:3},{value:"\u5916\u90e8Flash",id:"external-flash",children:[],level:3},{value:"\u7e3d\u7d50",id:"summary",children:[],level:3}],level:2},{value:"Demo 1",id:"demo-1",children:[{value:"\u7e3d\u7d50",id:"summary-1",children:[],level:3}],level:2}],b={toc:g};function f(t){var e,n=t,{components:o}=n,d=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&c)for(var a of c(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=s(s({},b),d),l(e,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h2",s({},{id:"introduction"}),"\u524d\u8a00"),(0,a.kt)("p",null,"\u5728\u672c\u7bc0\u4e2d\uff0c\u6211\u5011\u5c07\u8a0e\u8ad6TouchGFX\u61c9\u7528\u7684\u5b58\u5132\u7a7a\u9593\u4f7f\u7528\u91cf\u3002 \u5178\u578b\u7684TouchGFX\u61c9\u7528\u4f7f\u75284\u985e\u8a18\u61b6\u9ad4\uff0c\u4f46\u9019\u53d6\u6c7a\u65bc\u4f7f\u7528\u7684\u786c\u9ad4\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u8a18\u61b6\u9ad4\u985e\u578b"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u4f7f\u7528"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5167\u90e8RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5167\u90e8RAM\u7528\u65bc\u5b58\u5132\u914d\u7f6e\u8cc7\u6599\uff0c\u5982\u6240\u6709Widget\u7684\u5ea7\u6a19\u548c\u8272\u5f69\u3002 \u9019\u88e1\u5b58\u5132\u4e86\u7576\u524d\u87a2\u5e55\u7684\u5e7e\u500b\u7269\u4ef6\u3002",(0,a.kt)("br",null),"\u5305\u542bUI\u4efb\u52d9\u57f7\u884c\u6642\u9593stack\u7684\u4f5c\u696d\u7cfb\u7d71\u8a18\u61b6\u9ad4\u4e5f\u4f4d\u65bc\u5167\u90e8RAM\u4e2d\u3002 \u5176\u4ed6\u8edf\u9ad4\u5143\u4ef6\u7684\u6240\u6709\u8cc7\u6599\uff08\u5982\u6a94\u6848\u7cfb\u7d71\u548c\u986f\u793a\u5668\u9a45\u52d5\uff09\u540c\u6a23\u4f4d\u65bc\u5167\u90e8RAM\u4e2d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Internal Flash"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7528\u65bc\u5b58\u5132\u61c9\u7528\u7a0b\u5f0f\u78bc\u3001TouchGFX\u5eab\u548c\u4f7f\u7528\u7684\u5176\u4ed6\u5eab\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5916\u90e8RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5916\u90e8RAM\u901a\u5e38\u7528\u65bc\u63d0\u4f9b\u5f71\u50cf\u7de9\u885d\uff0c\u4e5f\u53ef\u4ee5\u662f\u9ede\u9663\u5716\u5feb\u53d6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5916\u90e8Flash"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7528\u65bc\u5b58\u5132\u5716\u50cf\u3001\u5b57\u9ad4\u548c\u6587\u5b57\u3002")))),(0,a.kt)("h2",s({},{id:"static-memory-allocation"}),"\u975c\u614b\u5b58\u5132\u5206\u914d"),(0,a.kt)("p",null,"TouchGFX\u53ea\u4f7f\u7528\u975c\u614b\u5b58\u5132\u5206\u914d\u3002 \u9019\u610f\u5473\u8457\u6240\u6709\u5b58\u5132\u7a7a\u9593\u90fd\u662f\u9810\u5148\u5206\u914d\u7684\u3002 TouchGFX\u5728\u57f7\u884c\u6642\u9593\u4e2d\u4e0d\u9032\u884c\u5b58\u5132\u7a7a\u9593\u5206\u914d\u3002 \u5982\u679c\u61c9\u7528\u53ef\u4ee5\u4e00\u958b\u59cb\u5c31\u5d4c\u5165\u8a18\u61b6\u9ad4\uff0c\u5247\u53ef\u78ba\u4fdd\u6c38\u9060\u4e0d\u6703\u7121\u5b58\u5132\u7a7a\u9593\u53ef\u7528\u3002"),(0,a.kt)("h3",s({},{id:"screens-and-widgets"}),"Screen\u548cWidget"),(0,a.kt)("p",null,"\u5728TouchGFX\u4e2d\uff0c\u901a\u904e\u958b\u767c\u8a31\u591aC++\u985e\u4f86\u5275\u5efa\u4f7f\u7528\u8005\u4ecb\u9762\u3002 TouchGFX Designer\u5728\u60a8\u8a2d\u8a08\u4ecb\u9762\u6642\u5275\u5efa\u985e\u3002 \u5c0d\u65bc\u5728TouchGFX Designer\u4e2d\u8a2d\u8a08\u7684\u6bcf\u500b\u4ecb\u9762\uff0c\u60a8\u6703\u81ea\u52d5\u7372\u5f97\u8a31\u591a\u985e\uff08",(0,a.kt)("a",s({parentName:"p"},{href:"../development/ui-development/software-architecture/model-view-presenter-design-pattern"}),"MVP"),"\u67b6\u69cb\uff09\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5728\u986f\u793a\u5668\u4e0a\u986f\u793a\u4ecb\u9762\u6642\uff0cTouchGFX\u6703\u5728\u5167\u90e8RAM\u4e2d\u81ea\u52d5\u5206\u914d\u985e\u7684\u7269\u4ef6\u3002"),(0,a.kt)("p",null,"\u7576\u5f9e\u4e00\u500b\u4ecb\u9762\u5207\u63db\u5230\u53e6\u4e00\u500b\u4ecb\u9762\u6642\uff0c\u4e0d\u518d\u4f7f\u7528\u70ba\u4e0a\u4e00\u500b\u4ecb\u9762\u5206\u914d\u7684\u7269\u4ef6\uff0c\u800c\u53ea\u4f7f\u7528\u65b0\u4ecb\u9762\u7684\u7269\u4ef6\u3002 \u56e0\u6b64\uff0c\u5c07\u5728\u5167\u90e8RAM\u4e2d\u820a\u7269\u4ef6\u6240\u5728\u7684\u4f4d\u7f6e\u5206\u914d\u65b0\u7269\u4ef6\uff08\u820a\u7269\u4ef6\u88ab\u8986\u84cb\uff09\u3002 \u5167\u90e8RAM\u50c5\u5728\u4e00\u500b\u6642\u9593\u9ede\u4fdd\u5b58\u4e00\u500b\u986f\u793a\u5668\u7684\u7269\u4ef6\u3002"),(0,a.kt)("p",null,"\u6839\u64da\u5b9a\u7fa9\u7684\u985e\uff0cC++\u7de8\u8b6f\u5668\u80fd\u5920\u8a08\u7b97\u6700\u5927\u4ecb\u9762\u985e\u7684\u5927\u5c0f\uff0c\u4e26\u70ba\u9019\u4e9b\u985e\u9810\u7559\u5b58\u5132\u7a7a\u9593\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5167\u90e8RAM\u4e2d\u7684\u5b58\u5132\u7a7a\u9593\u4f7f\u7528\u91cf\u4e0d\u53d6\u6c7a\u65bc\u61c9\u7528\u4e2d\u4ecb\u9762\u7684\u6578\u91cf\uff0c\u800c\u662f\u53d6\u6c7a\u65bc\u6700\u5927\u4ecb\u9762\u7684\u5927\u5c0f\u3002"),(0,a.kt)("p",null,"\u70ba\u9019\u4e9b\u7269\u4ef6\u7559\u51fa\u7684\u5b58\u5132\u7a7a\u9593\u7a31\u70baFrontendHeap\u3002"),(0,a.kt)("p",null,"TouchGFX"),(0,a.kt)("h3",s({},{id:"application-code"}),"\u61c9\u7528\u7a0b\u5f0f\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u61c9\u7528\u7a0b\u5f0f\u7a0b\u5f0f\u78bc\u901a\u5e38\u5b58\u5132\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002 \u61c9\u7528\u7a0b\u5f0f\u7a0b\u5f0f\u78bc\u5305\u62ec\u60a8\u7de8\u5beb\u7684\u7a0b\u5f0f\u78bc\u3001TouchGFX Designer\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u3001\u4f86\u81eaTouchGFX Designer\u5eab\u548c\u60a8\u4f7f\u7528\u7684\u5176\u4ed6\u5eab\u7684\u7a0b\u5f0f\u78bc\u3002"),(0,a.kt)("p",null,"\u96a8\u8457\u60a8\u7de8\u5beb\u7684\u7a0b\u5f0f\u78bc\u548c\u6dfb\u52a0\u5230\u61c9\u7528\u7684\u4ecb\u9762\u8d8a\u4f86\u8d8a\u591a\uff0c\u61c9\u7528\u7a0b\u5f0f\u78bc\u7684\u6578\u91cf\u5fc5\u7136\u589e\u52a0\u3002 \u5728\u60a8\u9996\u6b21\u4f7f\u7528\u67d0\u9805\u7279\u6027\u6642\uff0c\u5f9e\u51fd\u5f0f\u5eab\u4e2d\u53d6\u51fa\u7684\u7a0b\u5f0f\u78bc\u7684\u91cf\u96a8\u4e4b\u589e\u52a0\u3002 \u4f8b\u5982\uff0c\u5728\u60a8\u9996\u6b21\u5c07Button\u6dfb\u52a0\u5230\u4ecb\u9762\u6642\uff0cTouchGFX\u5eab\u4e2d\u7684Button\u7a0b\u5f0f\u78bc\u5c31\u6703\u5305\u542b\u5728\u60a8\u7684\u61c9\u7528\u4e2d\uff0c\u5c0e\u81f4\u7a0b\u5f0f\u78bc\u91cf\u589e\u52a0\u3002 The second time you add a Button to the same or another screen, no additional code is taken from the TouchGFX library, and the application only grows by the amount of code you write or TouchGFX Designer generates."),(0,a.kt)("h3",s({},{id:"assets"}),"\u8cc7\u7522"),(0,a.kt)("p",null,"\u8af8\u5982\u5716\u50cf\u3001\u5b57\u4e32\u548c\u5b57\u9ad4\u4e4b\u985e\u7684\u8cc7\u7522\u6703\u88ab\u8f49\u63db\u70baC++\u6a94\u4e26\u9023\u7d50\u5230\u61c9\u7528\u4e2d\u3002 \u8cc7\u7522\u7684\u8cc7\u6599\u901a\u5e38\u5132\u5b58\u5728\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\uff0c\u4f46\u4e5f\u53ef\u5132\u5b58\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002 \u9019\u662f\u901a\u904e\u9023\u7d50\u5668\u8173\u672c\u4f86\u63a7\u5236\u7684\u3002"),(0,a.kt)("p",null,"\u5728\u6dfb\u52a0\u5716\u50cf\u6642\uff0c\u61c9\u7528\u7684\u5927\u5c0f\u8207\u5716\u50cf\u5927\u5c0f\u6210\u6b63\u6bd4\u3002"),(0,a.kt)("p",null,"\u5728\u6dfb\u52a0\u6587\u5b57\u6642\uff0c\u6587\u5b57\u4e2d\u7684\u6bcf\u500b\u5b57\u5143\u6703\u5c0e\u81f4\u61c9\u7528\u7684\u5927\u5c0f\u589e\u52a0\u5169\u500b\u4f4d\u5143\u7d44\u3002 \u5982\u679c\u540c\u4e00\u500b\u5b57\u4e32\u4f7f\u7528\u4e86\u5169\u6b21\uff0c\u61c9\u7528\u5927\u5c0f\u53ea\u589e\u52a0\u4e00\u6b21\u3002"),(0,a.kt)("p",null,"\u53ea\u5f9e\u5b57\u9ad4\u6a94\u4e2d\u7372\u53d6\u61c9\u7528\u4f7f\u7528\u7684\u5b57\u5143\u3002 \u9019\u610f\u5473\u8457\u5982\u679c\u61c9\u7528\u4e2d\u53ea\u4f7f\u7528\u5927\u5beb\u5b57\u6bcdA-Z\uff0c\u5247\u61c9\u7528\u4e2d\u4e0d\u5305\u542b\u5b57\u9ad4\u4e2d\u7684\u5c0f\u5beb\u5b57\u6bcda-z\u3002 \u5982\u679c\u65e5\u5f8c\u6dfb\u52a0\u4f7f\u7528\u9019\u4e9b\u5b57\u6bcd\u7684\u6587\u5b57\uff0c\u5247\u61c9\u7528\u4e2d\u5b57\u9ad4\u7684\u8cc7\u6599\u91cf\u6703\u589e\u52a0\u3002"),(0,a.kt)("p",null,"\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u5b57\u5143\u7684\u5927\u5c0f\u53d6\u6c7a\u65bc\u9078\u64c7\u7684\u5b57\u9ad4\u5927\u5c0f\u3002 \u5982\u679c\u5b57\u9ad4\u589e\u5927\uff0c\u61c9\u7528\u5927\u5c0f\u4e5f\u6703\u589e\u52a0\u3002"),(0,a.kt)("h2",s({},{id:"checking-memory-usage"}),"\u6aa2\u67e5\u5b58\u5132\u7a7a\u9593\u4f7f\u7528\u91cf"),(0,a.kt)("p",null,"\u901a\u904e\u6aa2\u67e5\u9023\u7d50\u5668\u751f\u6210\u7684\u6620\u5c04\u6a94\uff0c\u53ef\u4ee5\u627e\u5230\u7279\u5b9a\u61c9\u7528\u7684\u5b58\u5132\u7a7a\u9593\u4f7f\u7528\u91cf\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u5011\u4f86\u6aa2\u67e5IAR Embedded Workbench\u751f\u6210\u7684\u6620\u5c04\u6a94\u3002 \u5176\u4ed6\u7de8\u8b6f\u5668\u4e5f\u6703\u751f\u6210\u985e\u4f3c\u7684\u6620\u5c04\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u5728TouchGFX Designer\u4e2d\u70baSTM32F746Discovery\u8a55\u4f30\u5957\u4ef6\u5275\u5efa\u4e00\u500b\u7a7a\u5c08\u6848\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/create-project-4.17.png",noShadow:"true",mdxType:"Figure"},"\u5177\u6709\u4e00\u500bBox\u548c\u4e00\u500bButton\u7684STM32F746\u5c08\u6848"),(0,a.kt)("p",null,"\u5728IAR\u4e2d\u6253\u958b\u5c08\u6848\u5f8c\uff0c\u67e5\u770b\u95dc\u65bcIAR\u751f\u6210.MAP\u6a94\u7684\u5c6c\u6027\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/enable-map-file.png",noShadow:"true",mdxType:"Figure"},"\u751f\u6210\u9023\u7d50\u5668\u6620\u5c04\u6a94"),(0,a.kt)("p",null,"\u5728IAR\u4e2d\u9032\u884c\u7de8\u8b6f\u5f8c\uff0c\u53ef\u4ee5\u6aa2\u67e5\u9023\u7d50\u5668\u6620\u5c04\u6a94STM32F746G_DISCO.map\uff0c\u8a72\u6587\u4ef6\u4f4d\u65bc",(0,a.kt)("em",{parentName:"p"},"EWARM/STM32F746G_DISCO/List"),"\u8cc7\u6599\u593e\u3002"),(0,a.kt)("p",null,"IAR\u9023\u7d50\u5668\u6620\u5c04\u6a94\u5305\u542b\u4e00\u500b\u6975\u4f73\u7684\u7e3d\u7d50\u3002 \u67e5\u627e",(0,a.kt)("em",{parentName:"p"},"\u201c\u6a21\u7d44\u7e3d\u7d50\u201d"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"*******************************************************************************\n*** MODULE SUMMARY\n***\n\n    Module                                   ro code  ro data  rw data\n    ------                                   -------  -------  -------\ncommand line/config:\n    ------------------------------------------------------------------\n    Total:\n\nC:\\TouchGFXProjectsDocumentation\\STM32F746MemoryUsage\\EWARM\\STM32F746G_DISCO\\Obj: [1]\n    ApplicationFontProvider.o                              20\n    BitmapDatabase.o                              12       40\n    Blue_Buttons_Round_Edge_small.o                    40'800\n    Blue_Buttons_Round_Edge_small_pressed.o            40'800\n    Font_verdana_10_4bpp_0.o                               24\n    Font_verdana_20_4bpp_0.o                               72\n    Font_verdana_40_4bpp_0.o                              280\n    FrontendApplication.o                         46       60\n    FrontendApplicationBase.o                    706      816\n    GeneratedFont.o                               84       84\n    Kerning_verdana_10_4bpp.o                               4\n    Kerning_verdana_20_4bpp.o                               4\n    Kerning_verdana_40_4bpp.o                               4\n    Model.o                                       10\n    OSWrappers.o                                 156        1        9\n    STM32DMA.o                                   898      176\n    STM32TouchController.o                       162       24        4\n...\n    heap_4.o                                     444            32'792\n...\ntouchgfx_core.a: [7]\n    AbstractButton.o                             136\n    AbstractPartition.o                            8\n    Application.o                              2'218      290       28\n    Bitmap.o                                   1'064      604       36\n    Box.o                                        108      104\n    Button.o                                     276      308\n    ConstFont.o                                   62\n    Container.o                                  510      396\n    DMA.o                                        558      252\n    DisplayTransformation.o                      192\n    Drawable.o                                   418\n    FontManager.o                                 12                 4\n    Gestures.o                                   364       60\n    HAL.o                                      1'758      544       18\n    LCD24bpp.o                                 2'732    1'604       80\n    Screen.o                                   1'924      124\n    TouchCalibration.o                           252                76\n    TypedText.o                                                     14\n    ------------------------------------------------------------------\n    Total:                                    12'728    4'286      256\n\n    Gaps                                                    4        3\n    Linker created                                         36    2'560\n----------------------------------------------------------------------\n    Grand Total:                              38'676   88'973   42'731\n")),(0,a.kt)("p",null,"\u6b64\u8868\u5305\u542b\u4e09\u5217\u6578\u5b57\uff0c \u5176\u4e2d\u7684",(0,a.kt)("em",{parentName:"p"},"ro\u7a0b\u5f0f\u78bc"),"\u548c",(0,a.kt)("em",{parentName:"p"},"ro\u8cc7\u6599"),"\u70ba\u552f\u8b80\uff0c\u4f4d\u65bc\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\uff0c ",(0,a.kt)("em",{parentName:"p"},"rw\u8cc7\u6599"),"\u70ba\u975e\u5e38\u91cf\u8b80\u5beb\u8b8a\u6578\uff0c\u4f4d\u65bcRAM\u4e2d\u3002"),(0,a.kt)("p",null,"\u8868\u4e2d\u7684\u884c\u5283\u5206\u70ba7\u584a\u3002 \u7b2c\u4e00\u584a\u70ba\u5c08\u6848\u4e2d\u7684\u6240\u6709.cpp\u6587\u4ef6\u3002 \u5f8c\u9762\u7684\u516d\u584a\u70ba\u5c08\u6848\u4e2d\u4f7f\u7528\u7684\u51fd\u5f0f\u5eab\uff08.a\u6587\u4ef6\uff09\u3002 \u6700\u5f8c\u4e00\u500b\u662fTouchGFX\u5eab\u3002"),(0,a.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u770b\u5230TouchGFX\u5eab\uff08\u201ctouchgfx_core.a:","[7]","\u201d\u90e8\u5206\uff09\u70ba\u61c9\u7528\u589e\u52a0\u4e8612,728\u4f4d\u5143\u7d44\u7684\u7a0b\u5f0f\u78bc\uff08\u548c4,286\u4f4d\u5143\u7d44\u7684\u5e38\u91cf\u8cc7\u6599\uff09\u3002"),(0,a.kt)("h3",s({},{id:"internal-ram"}),"\u5167\u90e8RAM"),(0,a.kt)("p",null,"\u70ba\u4e86\u627e\u5230\u5167\u90e8RAM\u7684\u7e3d\u4f7f\u7528\u91cf\uff0c\u6211\u5011\u4f86\u770b\u6a21\u7d44\u7e3d\u7d50\u8868\u5e95\u90e8\u7684",(0,a.kt)("em",{parentName:"p"},"\u201c\u7e3d\u8a08\u201d"),"\u4e00\u884c\u3002 \u7b2c\u4e09\u5217\u662f\u5167\u90e8RAM\u3002 \u9019\u8868\u793a\u5c08\u6848\u4f7f\u7528\u4e86\u5167\u90e8RAM\u768442,731\u4f4d\u5143\u7d44\u7a7a\u9593\u3002 \u6211\u5011\u4f86\u770bTouchGFX\u5eab\u7684\u7e3d\u503c\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX\u5eab","[7]"," \u4f7f\u7528\u4e86256\u4f4d\u5143\u7d44\u3002 heap_4.o\u4f7f\u7528\u4e8632,792\u4f4d\u5143\u7d44\u3002 \u9019\u662f\u70baFREERTOS\u9810\u7559\u7684\u52d5\u614b\u8a18\u61b6\u9ad4\u5806\u3002 32Kb\u662f\u9810\u8a2d\u503c\uff0c\u4f46\u5806\u7684\u5927\u5c0f\u53ef\u5728STM32CubeMX\u4e2d\u914d\u7f6e\u3002 \u5178\u578b\u7684TouchGFX\u7a0b\u5f0f\u4f7f\u7528\u6b64\u5806\u4e2d\u5e7eKb\u7684\u7a7a\u9593\uff0c\u4e3b\u8981\u7528\u4f86\u70ba\u4f7f\u7528\u8005\u4ecb\u9762\u4efb\u52d9\u5206\u914d\u68e7\u3002"),(0,a.kt)("p",null,"\u901a\u904e\u641c\u7d22FrontendHeap\uff0c\u6211\u5011\u53ef\u4ee5\u627e\u5230\u4ecb\u9762\u7269\u4ef6\u7684\u5927\u5c0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"FrontendHeap::getInstance()::instance\n                        0x2000'95d0   0x240  Data  Gb  TouchGFXConfiguration.o [1]\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u8005\u4ecb\u9762\u6240\u9700\u7684\u7269\u4ef6\u4f54\u7528\u4e860x240\u4f4d\u5143\u7d44 = 576\u4f4d\u5143\u7d44\u7684\u7a7a\u9593\u3002"),(0,a.kt)("h3",s({},{id:"internal-flash"}),"Internal Flash"),(0,a.kt)("p",null,"\u5f9e",(0,a.kt)("em",{parentName:"p"},"\u201d\u7e3d\u8a08\u201d"),"\u4e00\u884c\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u6b64\u61c9\u7528\u4f7f\u7528\u4e8638,676\u4f4d\u5143\u7d44\u7a0b\u5f0f\u78bc + 88,973\u4f4d\u5143\u7d44\u8cc7\u6599\u3002 \u5176\u4e2d\u53ea\u6709\u4e00\u90e8\u5206\u662f\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3002 \u81f3\u5c11\u5169\u5f35Button\u5716\u50cf\u4f4d\u65bc\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002"),(0,a.kt)("p",null,"\u70ba\u4e86\u627e\u51fa\u6703\u6709\u591a\u5c11\u7a0b\u5f0f\u78bc\u548c\u8cc7\u6599\u5b58\u5132\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\uff0c\u6211\u5011\u9996\u5148\u6aa2\u67e5",(0,a.kt)("em",{parentName:"p"},"\u201c\u5b58\u5132\u7e3d\u7d50\u201d"),"\uff08\u522a\u9664\u4e86\u4e00\u4e9b\u7d30\u7bc0\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),'*******************************************************************************\n*** PLACEMENT SUMMARY\n***\n\n"A0":  place at address 0x800\'0000 { ro section .intvec };\n"P1":  place in [from 0x800\'0000 to 0x80f\'ffff] { ro };\n"P2":  place in [from 0x2000\'0000 to 0x2004\'ffff] { rw };\n"P3":  place in [from 0x9000\'0000 to 0x90ff\'ffff] {\n          section ExtFlashSection, section FontFlashSection,\n          section TextFlashSection };\n')),(0,a.kt)("p",null,"\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u8d77\u59cb\u4f4d\u5740\u70ba0x08000000\u3002 \u5b83\u88ab\u5169\u500b\u5340\u57df\u201cA0\u201d\u548c\u201dP1\u201d\u8986\u84cb\u3002"),(0,a.kt)("p",null,"\u7e7c\u7e8c\u770b\u6620\u5c04\u6a94\uff0c\u53ef\u4ee5\u770b\u5230\u9019\u4e9b\u5340\u57df\u4e2d\u7684\u5167\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,15-15}","{5-5,15-15}":!0}),"  Section                Kind         Address      Size  Object\n  -------                ----         -------      ----  ------\n\"A0\":                                             0x1c8\n  .intvec                ro code   0x800'0000     0x1c8  startup_stm32f746xx.o [1]\n                                 - 0x800'01c8     0x1c8\n\n\"P1\":                                             0xb05d\n  .text                   ro code   0x800'01c8     0x9b8  main.o [1]\n  .text                   ro code   0x800'0b80      0x14  memset.o [5]\n...\n  .text                   ro code   0x800'b17a       0x2  AbstractButton.o [7]\n  .rodata                 const     0x800'b17c       0x1  unwind_debug.o [6]\n  .rodata                 const     0x800'b17d       0x0  zero_init3.o [5]\n  .rodata                 const     0x800'b17d       0x0  lz77_init_single.o [5]\n  Initializer bytes       const     0x800'b17d      0xa8  <for P2-1>\n                                  - 0x800'b225    0xb05d\n")),(0,a.kt)("p",null,"\u9019\u8868\u793a\u201dA0\u201d\u4f7f\u7528\u4e860x1c8\u4f4d\u5143\u7d44 = 456\u4f4d\u5143\u7d44\uff0c\u201dP1\u201d\u4f7f\u7528\u4e860xb05d\u4f4d\u5143\u7d44 = 45,149\u4f4d\u5143\u7d44\u3002 \u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u7e3d\u4f7f\u7528\u91cf\u70ba45,605\u4f4d\u5143\u7d44\u3002"),(0,a.kt)("h3",s({},{id:"external-flash"}),"\u5916\u90e8Flash"),(0,a.kt)("p",null,"\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u70ba\u201dP3\u201d\u5340\u57df\uff08\u8d77\u59cb\u4f4d\u5740\u70ba0x90000000\uff09\u3002 \u4e0b\u9762\u662f\u8a72\u5340\u57df\u7684\u5167\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{14-14}","{14-14}":!0}),"\"P3\":                                          0x1'4076\n  ExtFlashSection        const    0x9000'0000    0x9f60  Blue_Buttons_Round_Edge_small.o [1]\n  ExtFlashSection        const    0x9000'9f60    0x9f60  Blue_Buttons_Round_Edge_small_pressed.o [1]\n  FontFlashSection       const    0x9001'3ec0     0x118  Font_verdana_40_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'3fd8      0x48  Font_verdana_20_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'4020      0x18  Font_verdana_10_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'4038      0x10  Table_verdana_10_4bpp.o [1]\n  FontFlashSection       const    0x9001'4048      0x10  Table_verdana_20_4bpp.o [1]\n  FontFlashSection       const    0x9001'4058      0x10  Table_verdana_40_4bpp.o [1]\n  FontFlashSection       const    0x9001'4068       0x4  Kerning_verdana_10_4bpp.o [1]\n  FontFlashSection       const    0x9001'406c       0x4  Kerning_verdana_20_4bpp.o [1]\n  FontFlashSection       const    0x9001'4070       0x4  Kerning_verdana_40_4bpp.o [1]\n  TextFlashSection       const    0x9001'4074       0x2  Texts.o [1]\n                                - 0x9001'4076  0x1'4076\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u7e3d\u4f7f\u7528\u91cf\u70ba0x14076\u4f4d\u5143\u7d44 = 82,038\u4f4d\u5143\u7d44\u3002 \u5169\u5f35Button\u5716\u50cf\uff082 x 0x9f60\u4f4d\u5143\u7d44 = 40,800\u4f4d\u5143\u7d44\uff09\u4f7f\u7528\u4e86\u5176\u4e2d\u7684\u5927\u90e8\u5206\u3002 \u5176\u9918\u8cc7\u6599\u5c6c\u65bc3\u7a2e\u5b57\u9ad4\u3002 \u5728\u672c\u4f8b\u4e2d\uff0c\u7531\u65bc\u4e0d\u4f7f\u7528\u4efb\u4f55\u6587\u5b57\uff0c\u53ea\u5305\u542b\u201c?\u201d\u5b57\u5143\uff0c\u56e0\u6b64\u5b83\u5011\u7528\u4e0d\u4e86\u591a\u5c11\u7a7a\u9593\u3002"),(0,a.kt)("h3",s({},{id:"summary"}),"\u7e3d\u7d50"),(0,a.kt)("p",null,"\u5916\u90e8RAM\u4e2d\u53ea\u6709\u5f71\u50cf\u7de9\u885d\u3002 \u7531\u65bc\u5b83\u5011\u672a\u88ab\u5b9a\u7fa9\u70ba\u61c9\u7528\u4e2d\u7684\u8b8a\u6578\uff0c\u56e0\u6b64\u5728\u9023\u7d50\u5668\u8173\u672c\u4e2d\u627e\u4e0d\u5230\u5b83\u5011\u3002 \u89e3\u6790\u5ea6\u70ba480x272\u50cf\u7d20\uff0824\u4f4d\u5143\uff09\u3002 \u6709\u5169\u500b\u5f71\u50cf\u7de9\u885d\uff0c\u7e3d\u4f7f\u7528\u91cf\u70ba480 ","*"," 272 ","*"," 3 * 2 = 786,360\u4f4d\u5143\u7d44\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u8a18\u61b6\u9ad4\u985e\u578b"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u4f7f\u7528"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5167\u90e8RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"42.731 \u4f4d\u5143\u7d44")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"TouchGFX\u4ecb\u9762\u7269\u4ef6"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"576 \u4f4d\u5143\u7d44")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Internal Flash"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"45605 \u4f4d\u5143\u7d44")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"TouchGFX\u6846\u67b6"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"12,728\u4f4d\u5143\u7d44\u7a0b\u5f0f\u78bc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5916\u90e8RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"786.360 \u4f4d\u5143\u7d44")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5916\u90e8Flash"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"82.028 \u4f4d\u5143\u7d44")))),(0,a.kt)("h2",s({},{id:"demo-1"}),"Demo 1"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u53e6\u4e00\u500b\u7bc4\u4f8b\uff1aTouchGFX Designer\u4e2d\u53ef\u4ee5\u627e\u5230\u7684TouchGFX Demo1\u7684\u8cc7\u6599\u91cf\u3002 \u5b83\u5305\u542b5\u500b\u4ecb\u9762\u548c100\u591a\u5f35\u5716\u50cf\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/demo1.png",noShadow:"true",mdxType:"Figure"},"STM32F746 Demo 1"),(0,a.kt)("h3",s({},{id:"summary-1"}),"\u7e3d\u7d50"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u8a18\u61b6\u9ad4\u985e\u578b"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u4f7f\u7528"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5167\u90e8RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"51.387 \u4f4d\u5143\u7d44")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"TouchGFX\u4ecb\u9762\u7269\u4ef6"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"10.772 \u4f4d\u5143\u7d44")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Internal Flash"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"187.768 \u4f4d\u5143\u7d44")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"TouchGFX\u6846\u67b6\u7a0b\u5f0f\u78bc"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"85.174\u4f4d\u5143\u7d44\u7a0b\u5f0f\u78bc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5916\u90e8RAM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"786.360 \u4f4d\u5143\u7d44")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5916\u90e8Flash"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"5.281.812 \u4f4d\u5143\u7d44")))))}f.isMDXComponent=!0}}]);