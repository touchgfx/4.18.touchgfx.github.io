"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3273],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},78540:function(e,t,n){n.r(t),n.d(t,{assets:function(){return T},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return v}});var r=n(3905),a=n(44035),o=n(37793),i=n(22425),l=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&d(e,n,t[n]);return e};const g={id:"scenarios-create-at",title:"\u521b\u5efaTouchGFX\u5e94\u7528\u6a21\u677f"},k=void 0,f={unversionedId:"development/scenarios/scenarios-create-at",id:"development/scenarios/scenarios-create-at",title:"\u521b\u5efaTouchGFX\u5e94\u7528\u6a21\u677f",description:"TouchGFX\u677f\u4ef6\u8bbe\u7f6e\uff08TBS\uff09\u662f.tpa\u6587\u4ef6\uff0c\u5b9a\u4e49\u4e86\u8fd0\u884cTouchGFX\u5e94\u7528\u7684\u5e73\u53f0\u3002 \u5bf9\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u6b64\u65b9\u6cd5\u53ef\u65b9\u4fbf\u7684\u751f\u6210\u80fd\u8fd0\u884c\u5728\u786c\u4ef6\u5e73\u53f0\u4e0a\u7684\u5e94\u7528\u7a0b\u5e8f\u6a21\u677f\uff0c\u5e76\u72ec\u7acb\u4e8e UI\u4ee3\u7801\u3002 \u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u4f7f\u7528\u5185\u7f6e\u5de5\u5177tgfx.exe\uff0c\u5c06\u73b0\u6709\u7684TouchGFX\u9879\u76ee\u5c01\u88c5\u5230\u53ef\u518d\u5206\u53d1\u7684TBS\u4e2d\u3002 \u672c\u6587\u4e2d\u7684\u793a\u4f8b\u57fa\u4e8e\u540d\u4e3a\u201cMyApplication\u201d\u7684\u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-create-at.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-create-at",permalink:"/4.18/zh-CN/docs/development/scenarios/scenarios-create-at",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-create-at",title:"\u521b\u5efaTouchGFX\u5e94\u7528\u6a21\u677f"},sidebar:"docs",previous:{title:"\u66f4\u6539\u5e94\u7528\u7684\u50cf\u7d20\u683c\u5f0f",permalink:"/4.18/zh-CN/docs/development/scenarios/scenarios-change-pixelformat-bpp"},next:{title:"\u5916\u90e8\u4e8b\u4ef6\u4f5c\u4e3a\u89e6\u53d1\u5668",permalink:"/4.18/zh-CN/docs/development/scenarios/example-gpio"}},T={},v=[{value:"\u63cf\u8ff0TouchGFX\u5e94\u7528\u6a21\u677f",id:"describe-application-template",level:2},{value:"\u521b\u5efaTouchGFX\u5e94\u7528\u6a21\u677f",id:"\u521b\u5efatouchgfx\u5e94\u7528\u6a21\u677f",level:2},{value:"\u6d4b\u8bd5&amp; \u9a8c\u8bc1",id:"\u6d4b\u8bd5-\u9a8c\u8bc1",level:2},{value:"\u6700\u7ec8\u8bf4\u660e",id:"\u6700\u7ec8\u8bf4\u660e",level:2},{value:"\u4e00\u822c\u63d0\u793a",id:"\u4e00\u822c\u63d0\u793a",level:3},{value:"\u7248\u672c\u63a7\u5236",id:"\u7248\u672c\u63a7\u5236",level:3}],y={toc:v};function N(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),d),p(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TouchGFX\u677f\u4ef6\u8bbe\u7f6e"),"\uff08TBS\uff09\u662f",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6587\u4ef6\uff0c\u5b9a\u4e49\u4e86\u8fd0\u884cTouchGFX\u5e94\u7528\u7684",(0,r.kt)("em",{parentName:"p"},"\u5e73\u53f0"),"\u3002 \u5bf9\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u6b64\u65b9\u6cd5\u53ef\u65b9\u4fbf\u7684\u751f\u6210\u80fd\u8fd0\u884c\u5728\u786c\u4ef6\u5e73\u53f0\u4e0a\u7684\u5e94\u7528\u7a0b\u5e8f\u6a21\u677f\uff0c\u5e76\u72ec\u7acb\u4e8e ",(0,r.kt)("em",{parentName:"p"},"UI"),"\u4ee3\u7801\u3002 \u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u4f7f\u7528\u5185\u7f6e\u5de5\u5177",(0,r.kt)("inlineCode",{parentName:"p"},"tgfx.exe"),"\uff0c\u5c06\u73b0\u6709\u7684TouchGFX\u9879\u76ee\u5c01\u88c5\u5230\u53ef\u518d\u5206\u53d1\u7684TBS\u4e2d\u3002 \u672c\u6587\u4e2d\u7684\u793a\u4f8b\u57fa\u4e8e\u540d\u4e3a",(0,r.kt)("em",{parentName:"p"},"\u201cMyApplication\u201d"),"\u7684\u5e94\u7528\u3002"),(0,r.kt)("p",null,"\u5728\u62e5\u6709\u4e86\u529f\u80fd\u5b8c\u6574\u7684TouchGFX\u9879\u76ee\u540e\uff0c\u9700\u6267\u884c\u4e0b\u5217\u6b65\u9aa4\u6765\u521b\u5efaTBS\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u63cf\u8ff0TouchGFX\u5e94\u7528\u6a21\u677f")," \u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"tgfx.exe"),"\u5e76\u7f16\u8f91json\u6587\u4ef6(inherits from .touchgfx)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efaTouchGFX\u5e94\u7528\u6a21\u677f")," \u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"tgfx.exe"),"\u4ee5\u5b8c\u6210",(0,r.kt)("inlineCode",{parentName:"li"},".tpa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6d4b\u8bbe& \u548c\u9a8c\u8bc1"),"\u5bfc\u5165designer\u5de5\u5177\uff0c\u521b\u5efa\u5e76\u9a8c\u8bc1\u5e94\u7528")),(0,r.kt)("h2",h({},{id:"describe-application-template"}),"\u63cf\u8ff0TouchGFX\u5e94\u7528\u6a21\u677f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tgfx.exe"),"\u5de5\u5177\u751f\u6210\u914d\u7f6e\u6587\u4ef6\uff08.json\uff09\uff0c\u8be5\u6587\u4ef6\u63cf\u8ff0TBS\u7684\u5185\u90e8\u4fe1\u606f\u3002 TouchGFX Designer\u8bfb\u53d6\u6b64\u4fe1\u606f\u5e76\u5c06\u5176\u5448\u73b0\u7ed9\u7528\u6237\u3002 \u6253\u5f00",(0,r.kt)("em",{parentName:"p"},"TouchGFX Environment"),"\u63a7\u5236\u53f0\uff0c\u5e76\u5728\u5e94\u7528\u7684",(0,r.kt)("em",{parentName:"p"},"parent"),"\u76ee\u5f55\u4e2d\u6267\u884c\u4e0b\u5217\u6307\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -d MyApplication\n")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-zip.webp",width:"550px",mdxType:"Figure"},"\u4e3a.tpa\u51c6\u5907\u6587\u4ef6"),(0,r.kt)("p",null,"\u5728\u8fd0\u884c\u6307\u4ee4\u7684\u76ee\u5f55\u4e2d\u4f1a\u521b\u5efa\u4e0b\u5217\u6587\u4ef6\uff1a"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-desc-files.webp",width:"240px",mdxType:"Figure"},"\u751f\u6210\u7684\u6587\u4ef6\u5217\u8868"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u6700\u7ec8\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6587\u4ef6\u4e4b\u524d\uff0c\u5728TouchGFX Designer\u4e2d\u7f16\u8f91",(0,r.kt)("inlineCode",{parentName:"p"},"MyApplication.json"),"\uff0c\u4ee5\u4fbf\u63a7\u5236\u5411\u7528\u6237\u663e\u793aTBS\u7684\u65b9\u5f0f\u3002 \u7528\u6237\u5e94\u7f16\u8f91\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f5c\u8005")," \u4f7f\u7528",(0,r.kt)("em",{parentName:"li"},"Author"),"\u5b57\u6bb5\u6307\u5b9a\u4f5c\u8005\u59d3\u540d\u3001\u7535\u5b50\u90ae\u7bb1\u548cURL\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6570\u636e")," \u4f7f\u7528",(0,r.kt)("em",{parentName:"li"},"Data"),"\u5b57\u6bb5\u6307\u5b9aTBS\u7248\u672c\u3001\u7167\u7247\u3001\u5f00\u53d1\u677f\u540d\u79f0\u3001\u4f9b\u5e94\u5546\u3001\u63cf\u8ff0\u548c\u8be6\u7ec6\u4fe1\u606f\u94fe\u63a5\u3002")),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"MyApplication.json"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-json"}),'   ...\n    "Author": [\n      {\n        "Name": "Chad Brody",\n        "Contact": "chad.brody@mycompany.com",\n        "URL": "http://mycompany.com/"\n      }\n    ],  \n  ...  \n  "Data": {\n    "Version": {\n      "Major": 1,\n      "Minor": 0,\n      "Build": 0\n    },\n    "Name": "MyApplication",\n    "HumanFriendlyName": "MyApplication",\n    "BoardName": "Custom STM32 Board",\n    "Type": "TGAT",\n    "Vendor": "MyCompany",\n    "Description": "This is a working project on which to base your UI on top of.",\n    "DocumentationLink": "",\n    "Category": "",\n    "Images": [\n      "http://mysite.com/MyCustomBoard-front.png",\n      "http://mysite.com/MyCustomBoard-back.png"\n    ],\n    ...\n  }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u52a1\u5fc5\u5c06\u201c\u7c7b\u578b\u201d\u5c5e\u6027\u8bbe\u7f6e\u4e3a",(0,r.kt)("b",null,"TGAT"),"\u3002 \u5426\u5219\uff0c\u8be5TBS\u5c06\u4e0d\u4f1a\u663e\u793a\u5728TouchGFX Designer\u4e2d\uff01"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u5f53\u521b\u5efaUI\u6a21\u677f\u6216\u7279\u5b9a\u786c\u4ef6\u6a21\u677f\u7684\u6f14\u793a\u65f6\uff0c\u201c\u7c7b\u578b\u201d\u5c5e\u6027\u5206\u522b\u662f",(0,r.kt)("b",null,"TGUI"),"\u548c",(0,r.kt)("b",null,"TGAPP"),"\u3002"),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u5728\u663e\u793aTBS\u7684\u6269\u5c55\u4fe1\u606f\u5361\u65f6\uff0cTouchGFX Designer\u80fd\u591f\u663e\u793a\u8be5\u5217\u8868\u4e2d\u7684\u6700\u591a\u4e09\u5e45\u56fe\u7247\uff08\u56fe\u7247\u5f15\u7528\u5fc5\u987b\u662fURL\uff09\u3002 \u56fe\u7247\u7684\u6700\u4f73\u5206\u8fa8\u7387\u4e3a400x280\u50cf\u7d20\u3002 "),(0,r.kt)("h2",h({},{id:"\u521b\u5efatouchgfx\u5e94\u7528\u6a21\u677f"}),"\u521b\u5efaTouchGFX\u5e94\u7528\u6a21\u677f"),(0,r.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\u521b\u5efa\u6700\u7ec8\u7684\u201c.tpa\u201d\u6587\u4ef6\uff0c\u5e76\u5b8c\u6210TouchGFX\u5e94\u7528\u6a21\u677f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -rc -d MyApplication\n")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-tpa.webp",width:"570px",mdxType:"Figure"},"\u521b\u5efaTouchGFX\u5e94\u7528\u6a21\u677f"),(0,r.kt)("h2",h({},{id:"\u6d4b\u8bd5-\u9a8c\u8bc1"}),"\u6d4b\u8bd5& \u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4e3a\u4e86\u9a8c\u8bc1",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6587\u4ef6\u80fd\u591f\u4f5c\u4e3aTBS\u88abTouchGFX Designer\u8bfb\u53d6\u5e76\u7528\u4e8e\u521b\u5efa\u65b0\u5e94\u7528\uff0c\u6267\u884c\u4e0b\u5217\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u81ea\u5df1\u7684\u8981\u6c42\u91cd\u547d\u540d",(0,r.kt)("inlineCode",{parentName:"li"},".tpa"),"\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},".tpa"),"\u6587\u4ef6\u590d\u5236\u6216\u79fb\u52a8\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\TouchGFX\\4.13.0\\app\\packages"),"\u3002 \u7136\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u5c06TBS\u4ece\u672c\u5730\u6587\u4ef6\u5939\u5bfc\u5165TouchGFX Designer\u3002")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-mv-to-pkg.webp",width:"550",mdxType:"Figure"},"\u5c06TBS\u5b89\u88c5\u5230\u672c\u5730\u6587\u4ef6\u5939"),(0,r.kt)("ol",h({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00TouchGFX Designer\uff0c\u5728",(0,r.kt)("em",{parentName:"li"},"By Parterners"),"\u9009\u9879\u5361\u4e0b\u9009\u62e9\u8be5TBS\u3002")),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-designer-main-info-4-17.webp",width:"550",mdxType:"Figure"},"TBS\u7684\u76f8\u5173\u4fe1\u606f"),(0,r.kt)("h2",h({},{id:"\u6700\u7ec8\u8bf4\u660e"}),"\u6700\u7ec8\u8bf4\u660e"),(0,r.kt)("p",null,"\u4e0b\u9762\u4e00\u8282\u5305\u542b\u5728\u4e3aTBS\u5f00\u53d1\u4ee3\u7801\u6216\u5206\u53d1TBS\u65f6\u8981\u8003\u8651\u7684\u4e8b\u9879\u7684\u63d0\u793a\u3002"),(0,r.kt)("h3",h({},{id:"\u4e00\u822c\u63d0\u793a"}),"\u4e00\u822c\u63d0\u793a"),(0,r.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u5728\u5206\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u4e4b\u524d\u5e94\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u63d0\u4f9b\u7684\u6240\u6709IDE\u9879\u76ee\u6309\u9884\u671f\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664",(0,r.kt)("em",{parentName:"li"},"build"),"-\u548c",(0,r.kt)("em",{parentName:"li"},"generated"),"\u6587\u4ef6\u5939\uff0c\u4ee5\u4fbf\u51cf\u5c11TBS\u7684\u6587\u4ef6\u5927\u5c0f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u5728TouchGFX\u9879\u76ee\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"li"},".touchgfx"),"\u4e2d\u5b9a\u4e49\u7684\u81ea\u5b9a\u4e49\u6307\u4ee4\uff08",(0,r.kt)("em",{parentName:"li"},"PostGenerate"),"-\u7b49\uff09\u6309\u9884\u671f\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u786e\u4fddTBS\u53ef\u4ee5\u88abTouchGFX Designer\u8bfb\u53d6\u5e76\u7528\u4e8e\u521b\u5efa\u65b0\u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u4e00\u79cd\u76f4\u63a5\u7684\u65b9\u5f0f\u6765\u6307\u5b9aTBS\u7248\u672c\u4e4b\u95f4\u7684\u5347\u7ea7\u6d41\u7a0b\u3002")),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u5728\u4fee\u6539TouchGFX\u9879\u76ee\u6216\u201c.json\u201d\u6587\u4ef6\u7684\u5185\u5bb9\u540e\uff0c\u52a1\u5fc5\u91cd\u65b0\u6253\u5305\u5e94\u7528\u6a21\u677f\u3002"),(0,r.kt)("p",null,"\u5728\u5206\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u540e\uff0c\u5e94\u6307\u793a\u7528\u6237\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6587\u4ef6\u590d\u5236\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\TouchGFX\\4.13.0\\app\\packages"),"\u4e2d\uff0c\u5e76\u91cd\u542fTouchGFX Designer\uff08\u82e5\u5df2\u6253\u5f00\uff09\u3002"),(0,r.kt)("h3",h({},{id:"\u7248\u672c\u63a7\u5236"}),"\u7248\u672c\u63a7\u5236"),(0,r.kt)("p",null,"\u5f00\u53d1\u8005\u901a\u5e38\u4f1a\u5c06\u6574\u4e2a\u5f00\u53d1\u9879\u76ee\uff08\u677f\u542f\u52a8\u642d\u5efa\u3001TouchGFX AL\u548cTouchGFX UI\uff09\u4fdd\u5b58\u5728\u540c\u4e00\u4e2a\u5b58\u50a8\u5e93\u4e2d\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u53ef\u5206\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6587\u4ef6\u3002 \u4f46\u662f\uff0c\u4e3a\u4e86\u8ba9\u56e2\u961f\u6210\u5458\u80fd\u591f\u542f\u52a8\u65b0\u7684TouchGFX\u5e94\u7528\uff0c\u5728\u8fdb\u884c\u6d4b\u8bd5\u548c\u9a8c\u8bc1\u65f6\uff0c\u7edf\u4e00\u7684\u5e73\u53f0\u4ee3\u7801\u5f88\u6709\u7528\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u901a\u8fc7\u5206\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6587\u4ef6\u548c/\u6216\u4f7f\u7528\u5de5\u5177\uff08\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"repo"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"git\u5b50\u6a21"),"\uff09\u6765\u6a21\u5757\u5316\u4ee3\u7801\u5e93\uff0c\u6700\u597d\u6309\u7167\u524d\u6587\u6240\u8ff0",(0,r.kt)("inlineCode",{parentName:"p"},".json"),"\u63cf\u8ff0\u6587\u4ef6\u4e2d\u6307\u5b9a\u7684\u7248\u672c\u6765\u547d\u540dTBS\u7ec4\u4ef6\u7248\u672c\u3002 \u5982\u679c\u4f7f\u7528\u6a21\u5757\u5316\u65b9\u6cd5\uff0c\u5219",(0,r.kt)("em",{parentName:"p"},"platform"),"\u4ee3\u7801\u5728\u88ab\u7528\u4f5c\u4e3b\u9879\u76ee\u7ed3\u6784\u4e2d\u7684\u6a21\u5757\u7684\u540c\u65f6\uff0c\u4ecd\u53ef\u7528\u4e8e\u521b\u5efa\u53ef\u5206\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},".tpa"),"\u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-json"}),'  "Data": {\n    "Version": {\n      "Major": 3,\n      "Minor": 0,\n      "Build": 0\n    },\n')),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"$ git tag\nv1.1.0\nv2.0.0\nv2.1.0\nv3.0.0\n")))}N.isMDXComponent=!0}}]);