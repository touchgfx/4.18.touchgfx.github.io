"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6679],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return s}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=d(t),s=i,g=m["".concat(u,".").concat(s)]||m[s]||p[s]||o;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44035:function(e,n,t){var r=t(67294),i=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return n?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:t,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:t,height:o,src:l})),r.createElement("p",null,e.children))}},65407:function(e,n,t){var r=t(67294),i=t(25026);n.Z=function(e){var n,t;const o=(0,i.Z)(e.url),l=null!=(n=e.width)?n:"100%",a=null!=(t=e.height)?t:"100%";return r.createElement("div",{class:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:l,height:a},r.createElement("source",{src:o,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},82985:function(e,n,t){var r=t(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}n.Z=i},35096:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return i}})},25026:function(e,n,t){t.d(n,{C:function(){return o},Z:function(){return l}});var r=t(11368),i=t(35096);function o(){const{siteConfig:{baseUrl:e="/",url:n}={}}=(0,r.Z)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(r)return n+t;const l=t.startsWith(n)?t:n+t.replace(/^\//,"");return o?e+l:l}(n,e,t,r)}}function l(e,n={}){const{withBaseUrl:t}=o();return t(e,n)}},81883:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return f},contentTitle:function(){return v},metadata:function(){return h},toc:function(){return k},default:function(){return y}});var r=t(3905),i=t(44035),o=t(82985),l=t(65407),a=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&s(e,t,n[t]);if(c)for(var t of c(n))m.call(n,t)&&s(e,t,n[t]);return e};const f={id:"main-window",title:"\u4e3b\u7a97\u53e3"},v=void 0,h={unversionedId:"development/ui-development/designer-user-guide/main-window",id:"development/ui-development/designer-user-guide/main-window",isDocsHomePage:!1,title:"\u4e3b\u7a97\u53e3",description:"TouchGFX Designer\u7684\u4e3b\u7a97\u53e3\u7531\u5bfc\u822a\u680f\u3001\u6307\u4ee4\u6309\u94ae\u3001\u901a\u77e5\u680f\u548c\u8be6\u7ec6\u65e5\u5fd7\u7ec4\u6210\u3002 \u56f4\u7ed5\u2018\u89c6\u56fe\u2019\uff08\u201c\u89c6\u56fe\u201d\u533a\u57df\uff0c\u5373\u4e0b\u56fe\u4e2d\u6a21\u7cca\u5316\u7684\u90e8\u5206\uff09\uff0c\u4e3b\u7a97\u53e3\u652f\u6491\u8d77\u4e86\u4e00\u4e2a\u6846\u67b6\u7ed3\u6784\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/main-window.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/main-window",permalink:"/4.18/zh-CN/docs/development/ui-development/designer-user-guide/main-window",tags:[],version:"current",frontMatter:{id:"main-window",title:"\u4e3b\u7a97\u53e3"},sidebar:"docs",previous:{title:"\u6587\u4ef6\u83dc\u5355",permalink:"/4.18/zh-CN/docs/development/ui-development/designer-user-guide/file-menu"},next:{title:"\u753b\u5e03\u89c6\u56fe",permalink:"/4.18/zh-CN/docs/development/ui-development/designer-user-guide/canvas-view"}},k=[{value:"\u5bfc\u822a\u680f",id:"navigation-bar",children:[],level:2},{value:"\u547d\u4ee4",id:"commands",children:[{value:"\u751f\u6210\u4ee3\u7801",id:"generate-code",children:[],level:3},{value:"\u8fd0\u884c\u4eff\u771f",id:"run-simulator",children:[],level:3},{value:"\u8fd0\u884c\u76ee\u6807",id:"run-target",children:[],level:3}],level:2},{value:"\u901a\u77e5\u680f",id:"notification-bar",children:[],level:2},{value:"\u8be6\u7ec6\u65e5\u5fd7",id:"detailed-log",children:[],level:2},{value:"\u8272\u8c03\u4e3b\u9898",id:"theme",children:[],level:2}],w={toc:k};function y(e){var n,t=e,{components:a}=t,s=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&m.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=g(g({},w),s),u(n,d({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX Designer\u7684\u4e3b\u7a97\u53e3\u7531",(0,r.kt)("a",g({parentName:"p"},{href:"#navigation-bar"}),"\u5bfc\u822a\u680f"),"\u3001",(0,r.kt)("a",g({parentName:"p"},{href:"#commands"}),"\u6307\u4ee4\u6309\u94ae"),"\u3001",(0,r.kt)("a",g({parentName:"p"},{href:"#notification-bar"}),"\u901a\u77e5\u680f"),"\u548c",(0,r.kt)("a",g({parentName:"p"},{href:"#detailed-log"}),"\u8be6\u7ec6\u65e5\u5fd7"),"\u7ec4\u6210\u3002 \u56f4\u7ed5\u2018\u89c6\u56fe\u2019",(0,r.kt)("em",{parentName:"p"},"\uff08\u201c\u89c6\u56fe\u201d\u533a\u57df\uff0c\u5373\u4e0b\u56fe\u4e2d\u6a21\u7cca\u5316\u7684\u90e8\u5206\uff09"),"\uff0c\u4e3b\u7a97\u53e3\u652f\u6491\u8d77\u4e86\u4e00\u4e2a\u6846\u67b6\u7ed3\u6784\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u7684\u4e3b\u7a97\u53e3"),(0,r.kt)("h2",g({},{id:"navigation-bar"}),"\u5bfc\u822a\u680f"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u901a\u8fc7\u5bfc\u822a\u680f\uff08\u53c2\u89c1\u4e0b\u56fe\uff09\u53ef\u4ee5\u8fdb\u884c\u5bfc\u822a\uff0c\u89c6\u56fe\u53ef\u66f4\u6539\u4e3a\u4e0b\u5217\u89c6\u56fe\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"canvas-view"}),"\u753b\u5e03"),"\uff0c\u7528\u4ee5\u62d6\u653e\u5f0f\u6784\u5efa\u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"images-view"}),"\u56fe\u50cf"),"\uff0c\u7528\u4ee5\u7ba1\u7406\u5de5\u7a0b\u4e2d\u7528\u5230\u7684\u56fe\u50cf\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"texts-view"}),"\u6587\u672c"),"\uff0c\u7528\u4e8e\u7ba1\u7406\u5de5\u7a0b\u4e2d\u7528\u5230\u7684\u6587\u672c\u548c\u5b57\u4f53\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"config-view"}),"\u914d\u7f6e"),"\uff0c\u7528\u4e8e\u914d\u7f6e\u5de5\u7a0b\u4e2d\u7684\u5404\u79cd\u8bbe\u7f6e\u9879\u3002")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u6587\u4ef6"),"\u83dc\u5355\uff0c\u53ef\u4ee5\u5728\u76f8\u5e94\u7684\u6587\u4ef6\u7ba1\u7406\u5668\u7a97\u53e3\u4e2d\u6253\u5f00\u5de5\u7a0b\u76ee\u5f55\uff0c\u4ece\u800c\u8f7b\u677e\u6d4f\u89c8\u4ee3\u7801\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-navigation-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5bfc\u822a\u680f"),(0,r.kt)("h2",g({},{id:"commands"}),"\u547d\u4ee4"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u7684\u6307\u4ee4\u90e8\u5206\uff0c\u53ef\u4ee5\u627e\u5230\u4e09\u4e2a\u6309\u94ae\uff1a\u201c\u751f\u6210\u4ee3\u7801\u201d\u3001\u201c\u8fd0\u884c\u4eff\u771f\u201d\u548c\u201c\u8fd0\u884c\u76ee\u6807\u201d\u3002 ",(0,r.kt)("em",{parentName:"p"},"\uff08\u53c2\u89c1\u4e0b\u56fe\uff09\u3002")),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-actions-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5de5\u7a0b\u547d\u4ee4\u6309\u94ae"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6309\u94ae\u6267\u884c\u7684\u547d\u4ee4\u53ef\u4ee5\u5728\u201c\u914d\u7f6e\u201d\u89c6\u56fe\u4e2d\u7684",(0,r.kt)("a",g({parentName:"p"},{href:"config-view#build"}),"\u521b\u5efa"),"\u9875\u8fdb\u884c\u91cd\u7f6e\u3002"),(0,r.kt)("h3",g({},{id:"generate-code"}),"\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u201c\u751f\u6210\u4ee3\u7801\u201d\u547d\u4ee4\u89e6\u53d1\u5b8c\u6574\u7684\u4ee3\u7801\u751f\u6210\u64cd\u4f5c\uff0c\u5176\u540e\u5c06\u6267\u884c\u4e0b\u5217\u547d\u4ee4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u8d44\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u4ee3\u7801\u7684\u540e\u7eed\u547d\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u76ee\u6807\u7a0b\u5e8f\u7684\u540e\u7eed\u547d\u4ee4")),(0,r.kt)("h3",g({},{id:"run-simulator"}),"\u8fd0\u884c\u4eff\u771f"),(0,r.kt)("p",null,"\u201c\u8fd0\u884c\u4eff\u771f\u5668\u201d\u547d\u4ee4\u4f1a\u89e6\u53d1\u5b8c\u6574\u7684\u4ee3\u7801\u751f\u6210\uff0c\u5176\u540e\u4f1a\u6267\u884c\u4e0b\u5217\u547d\u4ee4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u8d44\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u4ee3\u7801\u7684\u540e\u7eed\u547d\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u4eff\u771f\u7a0b\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u4eff\u771f")),(0,r.kt)("p",null,"\u201c\u8fd0\u884c\u4eff\u771f\u201d\u547d\u4ee4\u7684\u5feb\u6377\u952e\u65b9\u5f0f\uff1a ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F5")),(0,r.kt)("h3",g({},{id:"run-target"}),"\u8fd0\u884c\u76ee\u6807"),(0,r.kt)("p",null,"\u201c\u8fd0\u884c\u76ee\u6807\u201d\u547d\u4ee4\u89e6\u53d1\u5b8c\u6574\u7684\u4ee3\u7801\u751f\u6210\uff0c\u5176\u540e\u6267\u884c\u4e0b\u5217\u547d\u4ee4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u8d44\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u4ee3\u7801\u7684\u540e\u7eed\u547d\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u76ee\u6807\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u76ee\u6807\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u70e7\u5f55\u76ee\u6807\u7a0b\u5e8f")),(0,r.kt)("p",null,"\u201c\u8fd0\u884c\u76ee\u6807\u201d\u547d\u4ee4\u7684\u5feb\u6377\u952e\u65b9\u5f0f\uff1a ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F6")),(0,r.kt)("p",null,"\u201c\u751f\u6210\u4ee3\u7801\u201d\u547d\u4ee4\u7684\u5feb\u6377\u952e\u65b9\u5f0f\uff1a ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F7")),(0,r.kt)("h2",g({},{id:"notification-bar"}),"\u901a\u77e5\u680f"),(0,r.kt)("p",null,"\u901a\u77e5\u680f\u4f4d\u4e8e\u4e3b\u7a97\u53e3\u5e95\u90e8\uff0c\u663e\u793a\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u547d\u4ee4\u7684\u72b6\u6001\u3002 \u5982\u679c\u547d\u4ee4\u8fd0\u884c\u5931\u8d25\uff0c\u901a\u77e5\u680f\u4e2d\u7684\u6587\u672c\u5c06\u53d8\u4e3a\u7ea2\u8272\uff0c\u5e76\u5c06\u663e\u793a\u5931\u8d25\u7684\u6307\u4ee4\u53ca\u9519\u8bef\u56fe\u6807\u3002 \u547d\u4ee4\u6267\u884c\u6210\u529f\u540e\u5c06\u5148\u53d8\u4e3a\u7eff\u8272\uff0c\u5176\u540e\u4f1a\u4ece\u901a\u77e5\u680f\u4e2d\u6e05\u9664\uff0c\u800c\u6267\u884c\u5931\u8d25\u7684\u547d\u4ee4\u4f1a\u7ee7\u7eed\u663e\u793a\uff0c\u76f4\u81f3\u53e6\u4e00\u547d\u4ee4\u5f00\u59cb\u6267\u884c\u3002"),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/notification-bar-success.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\u7684\u6267\u884c\u6210\u529f\u7684\u901a\u77e5\u680f"),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/notification-bar-fail.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\u7684\u6267\u884c\u5931\u8d25\u7684\u901a\u77e5\u680f"),(0,r.kt)("h2",g({},{id:"detailed-log"}),"\u8be6\u7ec6\u65e5\u5fd7"),(0,r.kt)("p",null,"\u70b9\u51fb\u901a\u77e5\u680f\u4e0a\u7684\u4efb\u4f55\u4f4d\u7f6e\u90fd\u5c06\u6253\u5f00\u4e00\u4e2a\u7a97\u53e3\uff0c\u5176\u5185\u663e\u793aTouchGFX Designer\u8fd0\u884c\u4e0a\u4e00\u6761\u547d\u4ee4\u7684\u5b8c\u6574\u65e5\u5fd7\u3002 \u547d\u4ee4\u6267\u884c\u7684\u8f93\u51fa\u5c06\u6d41\u5165\u8be5\u7a97\u53e3",(0,r.kt)("em",{parentName:"p"},"\uff08\u89c1\u4e0b\u9762GIF\u52a8\u753b\uff09"),"\uff0c\u70b9\u51fb\u8be6\u7ec6\u65e5\u5fd7\u7a97\u53e3\u53f3\u4e0a\u89d2\u7684\u6d6e\u7a97/\u53bb\u6d6e\u7a97\u6309\u94ae\uff0c\u65e5\u5fd7\u7a97\u53e3\u53ef\u4ee5\u662f\u6d6e\u7a97\u5316\uff0c\u6216\u6062\u590d\u9ed8\u8ba4\u3002"),(0,r.kt)("p",null,"\u6253\u5f00\u201c\u8be6\u7ec6\u65e5\u5fd7\u201d\u7a97\u53e3\u7684\u5feb\u6377\u952e\u65b9\u5f0f\uff1a ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"ALT + L")),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/designer-user-guide/main-window/designer-main-window-log.mp4",mdxType:"LoopVideo"},"TouchGFX Designer\u4e2d\u7684\u8be6\u7ec6\u65e5\u5fd7"),(0,r.kt)("h2",g({},{id:"theme"}),"\u8272\u8c03\u4e3b\u9898"),(0,r.kt)("p",null,"TouchGFX Designer\u652f\u6301\u6d45\u8272\u548c\u6df1\u8272\u4e3b\u9898\uff08\u53c2\u89c1\u4e0b\u56fe\uff09\u3002 \u60a8\u53ef\u4ee5\u5728",(0,r.kt)("a",g({parentName:"p"},{href:"file-menu#file"}),"\u6587\u4ef6\u83dc\u5355"),"\u4e2d\u5c06\u4e3b\u9898\u5207\u6362\u6210\u60a8\u60f3\u8981\u7684\u8272\u8c03\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-light.png",mdxType:"Figure"},"TouchGFX Designer\u6d45\u8272\u8c03\u6a21\u5f0f"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-dark.png",mdxType:"Figure"},"TouchGFX Designer\u6df1\u8272\u8c03\u6a21\u5f0f"))}y.isMDXComponent=!0}}]);