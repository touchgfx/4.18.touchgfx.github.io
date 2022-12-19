"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9321],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children))}},7913:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return h}});var n=r(3905),o=r(44035),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&s(e,r,t[r]);return e};const m={id:"model-view-presenter-design-pattern",title:"Model-View-Presenter\u8a2d\u8a08\u6a21\u5f0f"},f=void 0,v={unversionedId:"development/ui-development/software-architecture/model-view-presenter-design-pattern",id:"development/ui-development/software-architecture/model-view-presenter-design-pattern",title:"Model-View-Presenter\u8a2d\u8a08\u6a21\u5f0f",description:"TouchGFX\u4f7f\u7528\u8005\u4ecb\u9762\u9075\u5faaModel-View-Presenter\uff08MVP\uff09\u67b6\u69cb\u6a21\u5f0f\uff0c\u5b83\u662fModel-View-Controller\uff08MVC\uff09\u6a21\u5f0f\u7684\u884d\u751f\u6a21\u5f0f\u3002 \u5169\u8005\u90fd\u5ee3\u6cdb\u7528\u65bc\u69cb\u5efa\u4f7f\u7528\u8005\u4ecb\u9762\u61c9\u7528\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/model-view-presenter-design-pattern.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/model-view-presenter-design-pattern",permalink:"/4.18/zh-TW/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern",draft:!1,tags:[],version:"current",frontMatter:{id:"model-view-presenter-design-pattern",title:"Model-View-Presenter\u8a2d\u8a08\u6a21\u5f0f"},sidebar:"docs",previous:{title:"UI\u958b\u767c\u7c21\u4ecb",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-development-introduction"},next:{title:"\u87a2\u5e55\u6982\u5ff5",permalink:"/4.18/zh-TW/docs/development/ui-development/software-architecture/screen-definition-and-mvp"}},w={},h=[],g={toc:h};function b(e){var t,r=e,{components:i}=r,s=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),s),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX\u4f7f\u7528\u8005\u4ecb\u9762\u9075\u5faaModel-View-Presenter\uff08MVP\uff09\u67b6\u69cb\u6a21\u5f0f\uff0c\u5b83\u662fModel-View-Controller\uff08MVC\uff09\u6a21\u5f0f\u7684\u884d\u751f\u6a21\u5f0f\u3002 \u5169\u8005\u90fd\u5ee3\u6cdb\u7528\u65bc\u69cb\u5efa\u4f7f\u7528\u8005\u4ecb\u9762\u61c9\u7528\u3002"),(0,n.kt)("p",null,"MVP\u6a21\u5f0f\u7684\u4e3b\u8981\u512a\u52e2\u662f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u95dc\u6ce8\u9ede\u5206\u96e2"),"\uff1a\u7a0b\u5f0f\u78bc\u5206\u6210\u4e0d\u540c\u7684\u90e8\u5206\u63d0\u4f9b\uff0c\u6bcf\u90e8\u5206\u6709\u81ea\u5df1\u7684\u4efb\u52d9\u3002 \u9019\u4f7f\u5f97\u7a0b\u5f0f\u78bc\u66f4\u7c21\u55ae\u3001\u53ef\u91cd\u8907\u4f7f\u7528\u6027\u66f4\u9ad8\u4e14\u66f4\u6613\u65bc\u7dad\u8b77\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u55ae\u5143\u6e2c\u8a66"),"\uff1a\u7531\u65bcUI\u7684\u908f\u8f2f\uff08Presenter\uff09\u7368\u7acb\u65bc\u865b\u64ec\u5c64\uff08View\uff09\uff0c\u56e0\u6b64\uff0c\u55ae\u7368\u6e2c\u8a66\u9019\u4e9b\u90e8\u5206\u6703\u5bb9\u6613\u5f88\u591a\u3002")),(0,n.kt)("p",null,"MVP\u4e2d\u5b9a\u7fa9\u4e86\u4e0b\u5217\u4e09\u500b\u985e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Model"),"\u662f\u4e00\u7a2e\u4ecb\u9762\uff0c\u7528\u65bc\u5b9a\u7fa9\u8981\u5728\u4f7f\u7528\u8005\u4ecb\u9762\u4e0a\u986f\u793a\u6216\u6709\u5176\u4ed6\u5f62\u5f0f\u64cd\u4f5c\u7684\u8cc7\u6599\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"View"),"\u662f\u4e00\u7a2e\u88ab\u52d5\u4ecb\u9762\uff0c\u7528\u65bc\u986f\u793a\u8cc7\u6599\uff08\u4f86\u81eaModel\uff09\uff0c\u4e26\u5c07\u4f7f\u7528\u8005\u6307\u4ee4\uff08\u4e8b\u4ef6\uff09\u50b3\u9001\u5230Presenter\u4ee5\u4fbf\u6839\u64da\u8a72\u8cc7\u6599\u9032\u884c\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Presenter"),"\u7684\u64cd\u4f5c\u53d6\u6c7a\u65bcModel\u548cView\u3002 \u5b83\u5f9e\u5b58\u5132\u5eab\uff08Model\uff09\u6aa2\u7d22\u8cc7\u6599\uff0c\u4e26\u5c07\u5176\u683c\u5f0f\u5316\u4ee5\u4fbf\u5728\u8996\u5716\u4e2d\u986f\u793a\u3002")),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp.webp",noShadow:!0,mdxType:"Figure"},"Model-View-Presenter\u8a2d\u8a08\u6a21\u5f0f"),(0,n.kt)("p",null,"\u5728TouchGFX\u4e2d\uff0c\u5f9eModel\u985e\u57f7\u884c\u8207\u61c9\u7528\u975eUI\u90e8\u5206\uff08\u9019\u88e1\u7a31\u70ba\u5f8c\u7aef\u7cfb\u7d71\uff09\u7684\u901a\u4fe1\u3002 \u5f8c\u7aef\u7cfb\u7d71\u662f\u5f9eUI\u63a5\u6536\u4e8b\u4ef6\uff08\u5982\u611f\u6e2c\u5668\u7684\u65b0\u6e2c\u91cf\u503c\uff09\u548c\u5c07\u4e8b\u4ef6\u8f38\u5165UI\u7684\u8edf\u9ad4\u5143\u4ef6\u3002 \u5f8c\u7aef\u7cfb\u7d71\u53ef\u4f5c\u70ba\u55ae\u7368\u7684\u4efb\u52d9\u5728\u540c\u4e00MCU\u3001\u55ae\u7368\u7684\u8655\u7406\u5668\u3001\u96f2\u6a21\u7d44\u6216\u5176\u4ed6\u786c\u9ad4\u4e0a\u904b\u884c\u3002 \u5f9eTouchGFX\u7684\u89d2\u5ea6\u4f86\u770b\uff0c\u9019\u4e26\u4e0d\u662f\u5341\u5206\u91cd\u8981\uff0c\u5b83\u53ea\u8981\u662f\u80fd\u5920\u8207\u4e4b\u901a\u4fe1\u7684\u7d44\u4ef6\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u7684\u7279\u5b9a\u901a\u4fe1\u5354\u5b9a\u4e0d\u53d7TouchGFX\u7ba1\u7406\u3002 \u5b83\u53ea\u63d0\u4f9b\u4e00\u500b\u5728\u6bcf\u500bTouchGFX\u6a19\u8a18\u547c\u53eb\u4e00\u6b21\u7684\u51fd\u6578\uff0c\u53ef\u4ee5\u5728\u5176\u4e2d\u8655\u7406\u9700\u8981\u7684\u901a\u4fe1\u3002 \u5728",(0,n.kt)("a",d({parentName:"p"},{href:"../touchgfx-engine-features/backend-communication"}),"\u5f8c\u7aef\u901a\u4fe1")," \u77ad\u89e3\u6709\u95dc\u8a72\u4e3b\u984c\u7684\u66f4\u591a\u8cc7\u8a0a\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp-2.webp",noShadow:!0,mdxType:"Figure"},"Model-View-Presenter\u548c\u5916\u90e8\u901a\u4fe1"),(0,n.kt)("p",null,"\u95dc\u65bc\u5982\u4f55\u5728TouchGFX UI\u958b\u767c\u4e2d\u5be6\u73fe\u548c\u4f7f\u7528MVP\u7684\u66f4\u591a\u5177\u9ad4\u7d30\u7bc0\uff0c\u8acb\u53c3\u898b",(0,n.kt)("a",d({parentName:"p"},{href:"code-structure"}),"\u7a0b\u5f0f\u78bc\u7d50\u69cb"),"\u4e00\u7bc0\u3002"))}b.isMDXComponent=!0}}]);