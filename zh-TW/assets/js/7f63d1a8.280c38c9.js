"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3953],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),s=o,f=m["".concat(u,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},46409:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return s},metadata:function(){return v},toc:function(){return g}});var r=n(3905),o=n(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};const s={id:"ui-development-introduction",title:"UI\u958b\u767c\u7c21\u4ecb"},f=void 0,v={unversionedId:"development/ui-development/ui-development-introduction",id:"development/ui-development/ui-development-introduction",title:"UI\u958b\u767c\u7c21\u4ecb",description:"\u958b\u767c\u4e00\u500b\u529f\u80fd\u6027UI\u662f\u64c1\u6709\u4e00\u500b\u6210\u529f\u7684\u5d4c\u5165\u5f0f\u5716\u5f62\u7522\u54c1\u7684\u6709\u6a5f\u7d44\u6210\u90e8\u5206\uff0c\u56e0\u6b64\uff0cTouchGFX\u7684\u76ee\u6a19\u4e0d\u50c5\u662f\u63d0\u4f9b\u5feb\u901f\u6027\u80fd\uff0c\u9084\u63d0\u4f9b\u6d41\u66a2\u7684\u958b\u767c\u9ad4\u9a57\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-development-introduction.mdx",sourceDirName:"development/ui-development",slug:"/development/ui-development/ui-development-introduction",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"ui-development-introduction",title:"UI\u958b\u767c\u7c21\u4ecb"},sidebar:"docs",previous:{title:"\u5f71\u7247\u89e3\u78bc",permalink:"/4.18/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"},next:{title:"Model-View-Presenter\u8a2d\u8a08\u6a21\u5f0f",permalink:"/4.18/zh-TW/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"}},h={},g=[],b={toc:g};function y(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),m),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-development-introduction/activities-selected-003.webp",noShadow:!0,width:"600",mdxType:"Figure"}),(0,r.kt)("p",null,"\u958b\u767c\u4e00\u500b\u529f\u80fd\u6027UI\u662f\u64c1\u6709\u4e00\u500b\u6210\u529f\u7684\u5d4c\u5165\u5f0f\u5716\u5f62\u7522\u54c1\u7684\u6709\u6a5f\u7d44\u6210\u90e8\u5206\uff0c\u56e0\u6b64\uff0cTouchGFX\u7684\u76ee\u6a19\u4e0d\u50c5\u662f\u63d0\u4f9b\u5feb\u901f\u6027\u80fd\uff0c\u9084\u63d0\u4f9b\u6d41\u66a2\u7684\u958b\u767c\u9ad4\u9a57\u3002"),(0,r.kt)("p",null,"UI\u958b\u767c\u4e00\u7ae0\u91cd\u9ede\u4ecb\u7d39TouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u8a73\u7d30\u958b\u767c\u6d41\u7a0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"software-architecture/model-view-presenter-design-pattern"}),(0,r.kt)("strong",{parentName:"a"},"\u8edf\u9ad4\u67b6\u69cb"))," - \u63cf\u8ff0TouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u7e3d\u9ad4\u67b6\u69cb\u548c\u8a2d\u8a08\uff0c\u4ee5\u53ca\u5f9eTouchGFX Designer\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u8207\u7528\u6236\u7a0b\u5f0f\u78bc\u4e4b\u9593\u7684\u95dc\u4fc2\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"working-with-touchgfx/using-ides-with-touchgfx"}),(0,r.kt)("strong",{parentName:"a"},"\u4f7f\u7528TouchGFX"))," - \u5305\u542b\u8207TouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u958b\u767c\u6d41\u7a0b\u4ee5\u53ca\u8a72\u904e\u7a0b\u4e2d\u4f7f\u7528\u7684\u4e0d\u540c\u5de5\u5177\u6709\u95dc\u7684\u8cc7\u8a0a - \u5f9ePC\u6a21\u64ec\u5668\u5230\u6240\u652f\u63f4\u7684\u8a31\u591aIDE\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"designer-user-guide/startup-window"}),(0,r.kt)("strong",{parentName:"a"},"\u8a2d\u8a08\u4eba\u54e1\u4f7f\u7528\u8005\u6307\u5357"))," - \u5305\u542b\u95dc\u65bc\u5982\u4f55\u4f7f\u7528TouchGFX\u8a2d\u8a08\u5668\u7684\u4e0d\u540c\u5143\u4ef6\u7684\u5ee3\u6cdb\u6307\u5357\u3001\u4ee5\u53ca\u63d0\u793a\u548c\u6280\u5de7\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"touchgfx-engine-features/custom-triggers-and-actions"}),(0,r.kt)("strong",{parentName:"a"},"TouchGFX\u5f15\u64ce\u7279\u6027"))," - \u5305\u542b\u8207\u4e0d\u540cTouchGFX\u5f15\u64ce\u7279\u6027\uff08\u5982\u9ede\u9663\u5716\u7de9\u5b58\u3001\u90e8\u5206\u5f71\u50cf\u7de9\u885d\u5340\u3001\u591a\u8a9e\u8a00\u652f\u63f4\u7b49\uff09\u6709\u95dc\u7684\u8cc7\u8a0a\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"ui-components/buttons/button"}),(0,r.kt)("strong",{parentName:"a"},"UI\u5143\u4ef6"))," - \u5305\u542b\u8207TouchGFX\u4e2d\u6bcf\u500bUI\u5143\u4ef6\uff08\u5f9e\u5c0f\u90e8\u4ef6\u5230\u5bb9\u5668\uff09\u6709\u95dc\u7684\u8cc7\u8a0a\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"scenarios/achieving-better-performance-with-cacheable-container"}),(0,r.kt)("strong",{parentName:"a"},"\u5834\u666f"))," - \u4ecb\u7d39\u958b\u767c\u4eba\u54e1\u53ef\u80fd\u9047\u5230\u7684\u4e0d\u540c\u5834\u666f\uff0c\u4ee5\u53ca\u76f8\u61c9\u7684\u89e3\u6c7a\u65b9\u6cd5\u3002")))}y.isMDXComponent=!0}}]);