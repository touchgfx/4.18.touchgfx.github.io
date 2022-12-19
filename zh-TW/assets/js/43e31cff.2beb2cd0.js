"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8317],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),g=i,d=s["".concat(u,".").concat(g)]||s[g]||m[g]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children))}},78006:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return k}});var r=n(3905),i=n(44035),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&s(e,n,t[n]);return e};const g={id:"interactions-view",title:"\u4ea4\u4e92"},d=void 0,v={unversionedId:"development/ui-development/designer-user-guide/interactions-view",id:"development/ui-development/designer-user-guide/interactions-view",title:"\u4ea4\u4e92",description:"\u60a8\u53ef\u4ee5\u901a\u904e\u4ea4\u4e92\u4f86\u914d\u7f6e\u89f8\u767c\u689d\u4ef6\u767c\u751f\u6642\u8981\u57f7\u884c\u7684\u64cd\u4f5c\u3002 TouchGFX Designer\u4e2d\u7684\u4ea4\u4e92\u7531trigger (\u89f8\u767c)\u548caction (\u64cd\u4f5c)\u7d44\u6210\uff1a",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/interactions-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/interactions-view",permalink:"/4.18/zh-TW/docs/development/ui-development/designer-user-guide/interactions-view",draft:!1,tags:[],version:"current",frontMatter:{id:"interactions-view",title:"\u4ea4\u4e92"},sidebar:"docs",previous:{title:"\u914d\u7f6e\u5716",permalink:"/4.18/zh-TW/docs/development/ui-development/designer-user-guide/config-view"},next:{title:"\u81ea\u8a02\u89f8\u767c\u689d\u4ef6\u548c\u884c\u70ba",permalink:"/4.18/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions"}},f={},k=[{value:"Triggers (\u89f8\u767c\u689d\u4ef6)",id:"triggers",level:2},{value:"Actions (\u64cd\u4f5c)",id:"actions",level:2},{value:"\u4ea4\u4e92\u4e32\u9023",id:"chaining-interactions",level:2}],b={toc:k};function h(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),s),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u904e\u4ea4\u4e92\u4f86\u914d\u7f6e\u89f8\u767c\u689d\u4ef6\u767c\u751f\u6642\u8981\u57f7\u884c\u7684\u64cd\u4f5c\u3002 TouchGFX Designer\u4e2d\u7684\u4ea4\u4e92\u7531",(0,r.kt)("strong",{parentName:"p"},"trigger (\u89f8\u767c)"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"action (\u64cd\u4f5c)"),"\u7d44\u6210\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u89f8\u767c\u662f\u958b\u59cb\u4ea4\u4e92\u7684\u689d\u4ef6 - \u70ba\u4e86\u8b93\u64cd\u4f5c\u767c\u751f\uff0c\u61c9\u7528\u4e2d\u9700\u8981\u767c\u751f\u7684\u689d\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\u64cd\u4f5c"),"\u662f\u89f8\u767c\u689d\u4ef6\u767c\u51fa\u6642\u5c07\u767c\u751f\u7684\u884c\u52d5\u3002 \u5728\u9019\u88e1\uff0c\u60a8\u53ef\u4ee5\u6c7a\u5b9a\u7576\u6eff\u8db3\u60a8\u5b9a\u7fa9\u7684\u89f8\u767c\u689d\u4ef6\u61c9\u7528\u4e2d\u767c\u751f\u7684\u60c5\u6cc1\u3002")),(0,r.kt)("p",null,"\u70ba\u4e86\u6dfb\u52a0\u4ea4\u4e92\uff0c\u8f49\u81f3\u4efb\u610f\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u7684\u201c\u4ea4\u4e92\u201d\u9078\u9805\u5361\uff0c\u9ede\u64ca\u5982\u4e0b\u5716\u6240\u793a\u7684\u201c+\u201d\u6309\u9215\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/add-interaction-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u201c\u4ea4\u4e92\u201d\u9078\u9805\u5361"),(0,r.kt)("p",null,"\u5728\u9ede\u64ca\u201c+\u201d\u6309\u9215\u5f8c\uff0c\u5c07\u6dfb\u52a0\u4e0b\u5716\u4e2d\u7684\u4ea4\u4e92\u3002 \u201c\u4ea4\u4e92\u8a73\u60c5\u201d\u5217\u8868\uff08\u5de6\u5074\uff09\u5305\u542b\u4ea4\u4e92\u7684\u7d66\u5b9a\u540d\u7a31\u548c\u53ef\u7528\u914d\u7f6e\u9078\u9805\u3002"),(0,r.kt)("p",null,"\u201c\u4ea4\u4e92\u6982\u8981\u201d\uff08\u53f3\u5074\uff09\u4e2d\u6709\u4e00\u689d\u52d5\u614b\u8aaa\u660e\uff0c\u6703\u57fa\u65bc\u9078\u64c7\u7684\u89f8\u767c\u689d\u4ef6\u548c\u64cd\u4f5c\u9032\u884c\u4fee\u6539\u3002 \u7531\u65bc\u4e0b\u5716\u4e2d\u6c92\u6709\u9078\u64c7\u89f8\u767c\u689d\u4ef6\u548c\u64cd\u4f5c\uff0c\u56e0\u6b64\u52d5\u614b\u8aaa\u660e\u70ba\u201cWhen none none\u201d\u3002"),(0,r.kt)("p",null,"\u9ede\u64ca\u201c\u4ea4\u4e92\u6982\u8981\u201d\u4e2d\u5e36\u5341\u5b57\u5716\u793a\u7684\u6309\u9215\u5c07\u522a\u9664\u4ea4\u4e92\uff0c\u522a\u9664\u524d\u986f\u793a\u78ba\u8a8d\u5f48\u7a97\u3002"),(0,r.kt)("p",null,"\u9ede\u64ca\u201c\u4ea4\u4e92\u8a73\u60c5\u201d\u8996\u5716\u4ee5\u5916\u7684\u4efb\u4f55\u4f4d\u7f6e\u5c07\u6298\u758a\u8996\u5716\u3002 \u9ede\u64ca\u201c\u4ea4\u4e92\u6982\u8981\u201d\u8996\u5716\u5c07\u6253\u958b\u201c\u4ea4\u4e92\u8a73\u60c5\u201d\u8996\u5716\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/empty-interaction-4.17.webp",mdxType:"Figure"},"\u201c\u4ea4\u4e92\u201d\u9078\u9805\u5361\u4e2d\u7684\u65b0\u4ea4\u4e92"),(0,r.kt)("h2",m({},{id:"triggers"}),"Triggers (\u89f8\u767c\u689d\u4ef6)"),(0,r.kt)("p",null,"\u7cfb\u7d71\u57fa\u65bc\u6dfb\u52a0\u5230\u7576\u524d\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u7684\u5c0f\u5de5\u5177\u586b\u5145\u201c\u89f8\u767c\u689d\u4ef6\u201d\u4e0b\u62c9\u6e05\u55ae\u3002",(0,r.kt)("br",null),"\u7a7a\u87a2\u5e55\u5c07\u53ea\u6709\u4e09\u500b\u53ef\u7528\u89f8\u767c\u689d\u4ef6\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u9ede\u64ca\u201c\u786c\u9ad4\u201d\u6309\u9215"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u87a2\u5e55\u8f49\u63db\u958b\u59cb"),"\u4ee5\u53ca",(0,r.kt)("strong",{parentName:"p"},"\u87a2\u5e55\u8f49\u63db\u7d50\u675f"),"\u3002"),(0,r.kt)("p",null,"\u6dfb\u52a0\u5c0f\u5de5\u5177\u5c07\u6dfb\u52a0\u8207\u4e4b\u76f8\u95dc\u7684\u89f8\u767c\u689d\u4ef6\u3002 \u4f8b\u5982\uff0c\u5728\u5411\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u6dfb\u52a0",(0,r.kt)("a",m({parentName:"p"},{href:"../ui-components/buttons/button"}),"\u6309\u9215"),"\u5c0f\u5de5\u5177\u6642\uff0c\u6703\u6dfb\u52a0\u89f8\u767c\u689d\u4ef6",(0,r.kt)("strong",{parentName:"p"},"\u6309\u9215\u9ede\u64ca"),"\u3002"),(0,r.kt)("p",null,"\u4e00\u4e9b\u89f8\u767c\u689d\u4ef6\uff08\u5982",(0,r.kt)("strong",{parentName:"p"},"\u6309\u9215\u9ede\u64ca"),"\uff09\u8981\u6c42\u9078\u64c7\u5143\u4ef6\uff0c\u5982\u4e0b\u5716\u6240\u793a\u3002 \u4f46\u662f\uff0c\u5982\u679c\u53ea\u6709\u4e00\u500b\u5c0f\u5de5\u5177\u8207\u89f8\u767c\u689d\u4ef6\u76f8\u5339\u914d\uff0c\u5247\u6703\u81ea\u52d5\u9078\u4e2d\u8a72\u5c0f\u5de5\u5177\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-4.17.webp",mdxType:"Figure"},"\u5728\u201c\u4ea4\u4e92\u201d\u9078\u9805\u5361\u4e0a\u9078\u4e2d\u4e86\u89f8\u767c\u689d\u4ef6\u201c\u6309\u9215\u9ede\u64ca\u201d"),(0,r.kt)("p",null,"\u5982\u4e0a\u5716\u6240\u793a\uff0c\u5728\u9078\u4e2d\u89f8\u767c\u689d\u4ef6\u5f8c\uff0c\u201c\u4ea4\u4e92\u6982\u8981\u201d\u4e2d\u7684\u52d5\u614b\u8aaa\u660e\u5df2\u5f9eWhen none none\u201d\u66f4\u65b0\u70ba\u201cWhen button1 clicked none\u201d\u3002"),(0,r.kt)("h2",m({},{id:"actions"}),"Actions (\u64cd\u4f5c)"),(0,r.kt)("p",null,"\u7cfb\u7d71\u4e5f\u57fa\u65bc\u6dfb\u52a0\u5230\u7576\u524d\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u7684\u5c0f\u5de5\u5177\u586b\u5145\u201c\u64cd\u4f5c\u201d\u4e0b\u62c9\u6e05\u55ae\u3002",(0,r.kt)("br",null),"\u7a7a\u87a2\u5e55\u5c07\u53ea\u6709\u4e94\u500b\u53ef\u7528\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u547c\u53eb\u65b0\u7684\u865b\u51fd\u6578")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u66f4\u6539\u87a2\u5e55")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u57f7\u884cC++\u7a0b\u5f0f\u78bc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8a2d\u5b9a\u8a9e\u8a00")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7b49\u5f85"))),(0,r.kt)("p",null,"\u6dfb\u52a0\u5c0f\u5de5\u5177\u6703\u6dfb\u52a0\u8207\u4e4b\u76f8\u95dc\u7684\u64cd\u4f5c\u3002 \u6dfb\u52a0\u5c0f\u5de5\u5177",(0,r.kt)("a",m({parentName:"p"},{href:"../ui-components/buttons/button"}),"\u6309\u9215"),"\u5c07\u6dfb\u52a0\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u79fb\u52d5\u5c0f\u5de5\u5177")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6f38\u96b1\u5c0f\u5de5\u5177")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u96b1\u85cf\u5c0f\u5de5\u5177")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u986f\u793a\u5c0f\u5de5\u5177"))),(0,r.kt)("p",null,"\u4e00\u4e9b\u64cd\u4f5c\uff08\u5982",(0,r.kt)("strong",{parentName:"p"},"\u79fb\u52d5\u5c0f\u5de5\u5177"),"\uff09\u8981\u6c42\u9078\u64c7\u5143\u4ef6\uff0c\u5982\u4e0b\u5716\u6240\u793a\u3002 \u4f46\u662f\uff0c\u5982\u679c\u53ea\u6709\u4e00\u500b\u5c0f\u5de5\u5177\u8207\u64cd\u4f5c\u76f8\u5339\u914d\uff0c\u5247\u6703\u81ea\u52d5\u9078\u4e2d\u8a72\u5c0f\u5de5\u5177\u3002 \u9078\u4e2d\u64cd\u4f5c",(0,r.kt)("strong",{parentName:"p"},"\u79fb\u52d5\u5c0f\u5de5\u5177"),"\u9084\u6703\u6dfb\u52a0\u66f4\u591a\u8207\u79fb\u52d5\u5c0f\u5de5\u5177\u76f8\u95dc\u7684\u5c6c\u6027\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-move-button1-action-4.17.webp",mdxType:"Figure"},"\u5728\u201c\u4ea4\u4e92\u201d\u9078\u9805\u5361\u4e0a\u9078\u4e2d\u4e86\u79fb\u52d5\u5c0f\u5de5\u5177\u64cd\u4f5c"),(0,r.kt)("p",null,"\u5982\u4e0a\u5716\u6240\u793a\uff0c\u5728\u9078\u4e2d\u64cd\u4f5c\u5f8c\uff0c\u201c\u4ea4\u4e92\u6982\u8981\u201d\u4e2d\u7684\u52d5\u614b\u8aaa\u660e\u5df2\u5f9e\u201cWhen button1 clicked none \u7121\u201d\u66f4\u65b0\u70ba\u201cWhen button1 clicked move button1\u201d\u3002"),(0,r.kt)("h2",m({},{id:"chaining-interactions"}),"\u4ea4\u4e92\u4e32\u9023"),(0,r.kt)("p",null,"\u4ea4\u4e92\u9084\u53ef\u4ee5\u7531\u53e6\u4e00\u500b\u4ea4\u4e92\u5728\u5b8c\u6210\u5176\u64cd\u4f5c\u6642\u89f8\u767c\u3002"),(0,r.kt)("p",null,"\u8981\u555f\u52d5\u8a72\u529f\u80fd\uff0c\u6a19\u8a18",(0,r.kt)("em",{parentName:"p"},"\u53ef\u4ee5\u89f8\u767c\u53e6\u4e00\u500b\u4ea4\u4e92"),"\u7684\u6838\u53d6\u65b9\u584a\u9700\u8981\u52fe\u9078\uff0c\u5982\u4e0b\u5716\u6240\u793a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/interaction-can-trigger-another-interaction-enabled-4.17.webp",mdxType:"Figure"},"\u5728\u201c\u4ea4\u4e92\u201d\u9078\u9805\u5361\u4e0a\u555f\u7528\u4e86\u201c\u53ef\u89f8\u767c\u53e6\u4e00\u500b\u4ea4\u4e92\u201d"),(0,r.kt)("p",null,"\u5728\u555f\u7528\u6b64\u529f\u80fd\u5f8c\uff0c\u53ef\u5728\u6b64\u4ea4\u4e92\u5b8c\u6210\u6642\u89f8\u767c\u5176\u4ed6\u4ea4\u4e92\uff0c\u5982\u4e0b\u5716\u6240\u793a\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/interaction-triggering-on-another-interaction-4.17.webp",mdxType:"Figure"},"\u901a\u904e\u53e6\u4e00\u500b\u4ea4\u4e92\u89f8\u767c\u4ea4\u4e92"))}h.isMDXComponent=!0}}]);