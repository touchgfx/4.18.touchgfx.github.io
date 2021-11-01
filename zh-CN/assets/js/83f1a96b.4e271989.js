(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2211],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return d},kt:function(){return s}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):u(u({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),h=l(o),s=r,m=h["".concat(c,".").concat(s)]||h[s]||p[s]||i;return o?n.createElement(m,u(u({ref:t},d),{},{components:o})):n.createElement(m,u({ref:t},d))}));function s(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,u=new Array(i);u[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,u[1]=a;for(var l=2;l<i;l++)u[l]=o[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},44035:function(e,t,o){"use strict";var n=o(67294),r=o(25026);t.Z=function(e){const t=e.noShadow||!1,o=e.width,i=e.height,u=(0,r.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:u,target:"_blank"},n.createElement("img",{width:o,height:i,src:u})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:u,target:"_blank"},n.createElement("img",{width:o,height:i,src:u})),n.createElement("p",null,e.children))}},35096:function(e,t,o){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}o.d(t,{b:function(){return n},Z:function(){return r}})},25026:function(e,t,o){"use strict";o.d(t,{C:function(){return i},Z:function(){return u}});var n=o(11368),r=o(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(o,n)=>function(e,t,o,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if((0,r.b)(o))return o;if(n)return t+o;const u=o.startsWith(t)?o:t+o.replace(/^\//,"");return i?e+u:u}(t,e,o,n)}}function u(e,t={}){const{withBaseUrl:o}=i();return o(e,t)}},59132:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return g},default:function(){return T}});var n=o(3905),r=o(44035),i=Object.defineProperty,u=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&p(e,o,t[o]);if(c)for(var o of c(t))d.call(t,o)&&p(e,o,t[o]);return e};const s={id:"development-introduction",title:"\u5f00\u53d1\u7b80\u4ecb"},m=void 0,f={unversionedId:"development/development-introduction",id:"development/development-introduction",isDocsHomePage:!1,title:"\u5f00\u53d1\u7b80\u4ecb",description:"\u4e3b\u8981\u64cd\u4f5c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/development-introduction.mdx",sourceDirName:"development",slug:"/development/development-introduction",permalink:"/4.18/zh-CN/docs/development/development-introduction",version:"current",frontMatter:{id:"development-introduction",title:"\u5f00\u53d1\u7b80\u4ecb"},sidebar:"docs",previous:{title:"Memory Usage",permalink:"/4.18/zh-CN/docs/basic-concepts/memory-usage"},next:{title:"\u786c\u4ef6\u9009\u62e9\u4ecb\u7ecd",permalink:"/4.18/zh-CN/docs/development/hardware-selection/hardware-selection-introduction"}},g=[{value:"\u4e3b\u8981\u64cd\u4f5c",id:"main-activities",children:[]},{value:"\u4e3b\u8981\u90e8\u4ef6",id:"main-components",children:[]},{value:"\u786c\u4ef6\u9009\u62e9",id:"hardware-selection",children:[{value:"\u539f\u578b\u8bbe\u8ba1",id:"prototyping",children:[]},{value:"\u5b9a\u5236\u786c\u4ef6",id:"custom-hardware",children:[]}]},{value:"\u677f\u542f\u52a8\u642d\u5efa",id:"board-bring-up",children:[{value:"STM32CubeMX",id:"stm32cubemx",children:[]},{value:"TouchGFX Board Setups (TBSs)",id:"application-templates-ats",children:[]}]},{value:"TouchGFX AL\u5f00\u53d1",id:"touchgfx-al-development",children:[{value:"TouchGFX Generator",id:"touchgfx-generator",children:[]}]},{value:"UI\u5f00\u53d1",id:"ui-development",children:[{value:"TouchGFX Designer",id:"touchgfx-designer",children:[]},{value:"TouchGFX Board Setups",id:"application-templates",children:[]},{value:"Demos and Examples",id:"ui-templates",children:[]},{value:"\u5b9a\u5236\u786c\u4ef6",id:"custom-hardware-1",children:[]}]},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"workflow",children:[{value:"\u751f\u6210\u7684\u4ee3\u7801\u548c\u7528\u6237\u4ee3\u7801",id:"generated-code-and-user-code",children:[]},{value:"\u66f4\u6539\u7f16\u8bd1\u5668/IDE",id:"change-of-compileride",children:[]}]}],v={toc:g};function T(e){var t,o=e,{components:i}=o,p=((e,t)=>{var o={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=h(h({},v),p),u(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h2",h({},{id:"main-activities"}),"\u4e3b\u8981\u64cd\u4f5c"),(0,n.kt)("p",null,"\u4e00\u4e2aTouchGFX\u9879\u76ee\u4f1a\u6d89\u53ca\u5230\u5f00\u53d1\u9636\u6bb5\u7684\u4e00\u7cfb\u5217\u64cd\u4f5c\u3002 \u6bcf\u4e2a\u64cd\u4f5c\u7684\u5de5\u4f5c\u91cf\u53d6\u51b3\u4e8e\u9879\u76ee\u7684\u76ee\u6807\u3002 \u5982\u679c\u60a8\u6b63\u5728\u6267\u884cUI\u539f\u578b\u8bbe\u8ba1\uff0c\u5219\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u90e8\u5206\u53ef\u4f7f\u7528\u9884\u5236\u4ee3\u7801\uff0c\u4ee5\u8df3\u8fc7\u5927\u591a\u6570\u6b65\u9aa4\uff0c\u4ece\u800c\u52a0\u5feb\u9879\u76ee\u5f00\u53d1\u901f\u5ea6\u3002 \u5982\u679c\u60a8\u57fa\u4e8e\u5b9a\u5236\u677f\u6765\u5b8c\u6210\u6574\u4e2a\u9879\u76ee\uff0c\u60a8\u5c06\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\u6d89\u53ca\u6240\u6709\u8fd9\u4e9b\u64cd\u4f5c\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/tgfx-activities.png",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX\u9879\u76ee\u7684\u4e3b\u8981\u64cd\u4f5c"),(0,n.kt)("h2",h({},{id:"main-components"}),"\u4e3b\u8981\u90e8\u4ef6"),(0,n.kt)("p",null,"\u60a8\u7684TouchGFX\u9879\u76ee\u7531\u4e94\u4e2a\u4e3b\u8981\u7684\u786c\u4ef6\u548c\u8f6f\u4ef6\u90e8\u4ef6\u7ec4\u6210\u3002 \u6bcf\u4e2a\u64cd\u4f5c\u90fd\u4f1a\u4e3a\u60a8\u7684TouchGFX\u9879\u76ee\u751f\u6210\u4e00\u4e2a\u4e3b\u8981\u90e8\u4ef6\u3002 TouchGFX Engine\u4e0d\u662f\u4efb\u4f55\u4e3b\u8981\u64cd\u4f5c\u7684\u8f93\u51fa\uff0c\u800c\u662fTouchGFX\u9879\u76ee\u7684\u8d77\u70b9\uff0c\u5728\u4e0b\u8f7d\u548c\u5b89\u88c5\u540e\u5373\u53ef\u4f7f\u7528\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/tgfx-components.png",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX\u9879\u76ee\u7684\u4e3b\u8981\u90e8\u4ef6"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u5404\u8282\u5c06\u6982\u8ff0\u6bcf\u4e2a\u64cd\u4f5c\u53ca\u90e8\u4ef6\u3002 \u672c\u7ae0\u5176\u4f59\u5404\u8282\u5c06\u8fdb\u4e00\u6b65\u8be6\u7ec6\u63cf\u8ff0\u6bcf\u4e2a\u64cd\u4f5c\u3002"),(0,n.kt)("h2",h({},{id:"hardware-selection"}),"\u786c\u4ef6\u9009\u62e9"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-004.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u6b64\u64cd\u4f5c\u662fTouchGFX\u9879\u76ee\u4e2d\u7684\u521d\u59cb\u9879\u3002 \u9009\u62e9\u8981\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u7684\u786c\u4ef6\u3002 \u786e\u5b9a\u6240\u9700\u7684\u786c\u4ef6\u7ec4\u4ef6\uff0c\u5e76\u5f04\u6e05\u8fd9\u4e9b\u786c\u4ef6\u5bf9TouchGFX\u5e94\u7528\u7a0b\u5e8f\u7684\u5f71\u54cd\u3002 \u5b8c\u6210\u6b64\u6b65\u540e\uff0c\u60a8\u5c31\u62e5\u6709\u4e86\u4e00\u4e2a\u53ef\u7528\u4e8eTouchGFX\u9879\u76ee\u7684\u663e\u793a\u677f\u3002"),(0,n.kt)("h3",h({},{id:"prototyping"}),"\u539f\u578b\u8bbe\u8ba1"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u6267\u884cUI\u539f\u578b\u8bbe\u8ba1\uff0c STM32\u8bc4\u4f30\u5957\u4ef6\u5219\u662f\u5feb\u901f\u542f\u52a8\u5e76\u8fd0\u884c\u7684\u7406\u60f3\u4e4b\u9009\u3002 \u8fd9\u91cc\u65e0\u9700\u8003\u8651\u786c\u4ef6\u7ec4\u4ef6\u3001\u4e0d\u540c\u7ec4\u4ef6\u95f4\u7684\u8fde\u63a5\u6216\u7c7b\u4f3c\u95ee\u9898\u3002 \u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u786c\u4ef6\u9009\u62e9\u64cd\u4f5c\u53ea\u9700\u57fa\u4e8eMCU\u6027\u80fd\u3001\u5b58\u50a8\u5668\u8bbe\u7f6e\u548c\u663e\u793a\u5668\u5c3a\u5bf8\u65b9\u9762\u9009\u62e9\u6700\u8d34\u8fd1\u60a8\u7684\u6700\u7ec8\u4ea7\u54c1\u7684STM32\u8bc4\u4f30\u5957\u4ef6\u3002"),(0,n.kt)("h3",h({},{id:"custom-hardware"}),"\u5b9a\u5236\u786c\u4ef6"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u8981\u521b\u5efa\u81ea\u5df1\u7684\u786c\u4ef6\u89e3\u51b3\u65b9\u6848\uff0c\u9009\u62e9\u5f88\u591a\uff0c\u540c\u65f6\u8981\u8003\u8651\u7684\u95ee\u9898\u4e5f\u591a\u3002 ",(0,n.kt)("a",h({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\u786c\u4ef6\u9009\u62e9"),"\u5c06\u5e2e\u52a9\u60a8\u5b8c\u6210\u6b64\u4efb\u52a1\u3001\u56de\u7b54\u8bb8\u591a\u95ee\u9898\uff0c\u5e76\u63cf\u8ff0\u60a8\u7684\u9009\u62e9\u5982\u4f55\u5f71\u54cdTouchGFX\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,n.kt)("p",null,"\u901a\u5e38\u76f4\u5230\u9879\u76ee\u5f00\u53d1\u540e\u671f\uff0c\u5c06\u4e0d\u4f1a\u6709\u5b8c\u5907\u7684\u6700\u7ec8\u786c\u4ef6\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u901a\u5e38\u4f1a\u9009\u62e9\u4e00\u4e2a\u7c7b\u4f3c\u4e8e\u6700\u7ec8\u677f\u5b50\u7684STM32\u8bc4\u4f30\u5957\u4ef6\uff0c\u5e76\u5728UI\u5f00\u53d1\u7684\u7b2c\u4e00\u6b65\u4e2d\u4f7f\u7528\u8be5\u5957\u4ef6\u3002 \u5982\u679c\u60a8\u6ca1\u6709\u8fd9\u6837\u7684\u677f\uff0c\u4e5f\u53ef\u4ee5\u53ea\u4f7f\u7528\u5728PC\u4e0a\u8fd0\u884c\u7684TouchGFX Simulator\u6765\u5f00\u59cb\u3002"),(0,n.kt)("p",null,"\u6709\u5173\u6b64\u6b65\u9aa4\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1<",(0,n.kt)("a",h({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\u786c\u4ef6\u9009\u62e9"),"\u90e8\u5206\u3002"),(0,n.kt)("h2",h({},{id:"board-bring-up"}),"\u677f\u542f\u52a8\u642d\u5efa"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-003.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u6b64\u64cd\u4f5c\u662f\u4e00\u9879\u8ba9TOUCHGFX\u8fd0\u884c\u4e8e\u4f60\u677f\u4e0a\u7684\u4e2d\u5fc3\u4efb\u52a1\u3002 \u8f93\u51fa\u7ec4\u4ef6\u88ab\u79f0\u4e3a\u677f\u7ea7\u521d\u59cb\u5316\u4ee3\u7801\uff0c\u662f\u4e9b\u901a\u7528\u521d\u59cb\u5316\u4ee3\u7801\uff0c\u7528\u4e8e\u8bbe\u7f6eMCU\u53ca\u6240\u6709\u5916\u8bbe\uff0c\u4e3a\u6267\u884c\u5e94\u7528\u7a0b\u5e8f\u505a\u51c6\u5907\u3002 \u8be5\u521d\u59cb\u5316\u4ee3\u7801\u72ec\u7acb\u4e8eTouchGFX\uff0c\u4ec5\u5904\u7406\u7eaf\u786c\u4ef6\u8bbe\u7f6e\u3002"),(0,n.kt)("h3",h({},{id:"stm32cubemx"}),"STM32CubeMX"),(0,n.kt)("p",null,"The main tool for this activity is STM32CubeMX. \u5b83\u53ef\u4ee5\u5e2e\u52a9\u60a8\u914d\u7f6eMCU\u5e76\u751f\u6210\u57fa\u7840\u6027\u7684\u542f\u52a8\u4ee3\u7801\u3002 \u5bf9\u4e8e\u5916\u8bbe\uff08\u5982\u5916\u90e8RAM\u548c\u663e\u793a\u5668\uff09\uff0c\u60a8\u5c06\u81ea\u884c\u6dfb\u52a0\u521d\u59cb\u5316\u4ee3\u7801\u548c\u7279\u5b9a\u5916\u8bbe\u9a71\u52a8\u7a0b\u5e8f\u3002 It is also possible to do the entire Board Initialization Code without use of STM32CubeMX, but is not recommended unless you have expert knowledge on STM32 and board bring up."),(0,n.kt)("h3",h({},{id:"application-templates-ats"}),"TouchGFX Board Setups (TBSs)"),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. \u8fd9\u5305\u62ec\u6240\u9700\u7684\u6240\u6709\u677f\u7ea7\u521d\u59cb\u5316\u4ee3\u7801\u3002 The TBSs are based on a STM32CubeMX configuration, so it is possible for you to modify the configuration if you want to experiment or add access to more peripherals."),(0,n.kt)("p",null,"\u6709\u5173\u6b64\u6b65\u9aa4\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",h({parentName:"p"},{href:"board-bring-up/board-introduction"}),"\u5f00\u53d1\u677f\u642d\u5efa\u542f\u52a8"),"\u7ae0\u8282\u3002"),(0,n.kt)("h2",h({},{id:"touchgfx-al-development"}),"TouchGFX AL\u5f00\u53d1"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-002.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u6b64\u64cd\u4f5c\u662fTouchGFX Engine\u5728\u5b8c\u5168\u521d\u59cb\u5316\u8fc7\u7684\u663e\u793a\u677f\uff08\u663e\u793a\u677f + \u677f\u521d\u59cb\u5316\u4ee3\u7801\uff09\u4e0a\u8fd0\u884c\u7684\u5173\u952e\u3002 \u8f93\u51fa\u7ec4\u4ef6\u88ab\u79f0\u4e3aTouchGFX\u62bd\u8c61\u5c42\uff08AL\uff09\uff0c\u8fd9\u662f\u4e00\u4e2a\u8f6f\u4ef6\u5c42\uff0c\u662f\u786c\u4ef6\u7684\u62bd\u8c61\uff0c\u5e76\u4f7fTouchGFX Engine\u53ef\u5728\u60a8\u7684\u5f00\u53d1\u677f\u4e0a\u8fd0\u884c\u3002"),(0,n.kt)("h3",h({},{id:"touchgfx-generator"}),"TouchGFX Generator"),(0,n.kt)("p",null,"The main tool in this activity is TouchGFX Generator which is a STM32CubeMX plugin that allows you to configure and generate most of the TouchGFX AL code. \u60a8\u4e5f\u5f88\u53ef\u80fd\u81ea\u884c\u7f16\u5199TouchGFX AL\u4ee3\u7801\u4e2d\u7684\u67d0\u4e9b\u90e8\u5206\u3002 TouchGFX Generator\u901a\u8fc7\u521b\u5efa\u8981\u5b9e\u73b0\u7684\u7a7a\u51fd\u6570\u6765\u5e2e\u52a9\u60a8\u5b8c\u6210\u6b64\u6b65\u9aa4\u3002"),(0,n.kt)("p",null,"\u8bf7\u7279\u522b\u6ce8\u610f\uff0c\u4e3a\u4f7fTouchGFX AL\u6b63\u5e38\u5de5\u4f5c\uff0c\u6b63\u786e\u5b8c\u6210\u677f\u7ea7\u521d\u59cb\u5316\u4ee3\u7801\u5e76\u6b63\u786e\u914d\u7f6eMCU\u3001\u5916\u90e8RAM\u3001\u663e\u793a\u5668\u7b49\u975e\u5e38\u91cd\u8981\u3002"),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. \u8fd9\u5305\u62ec\u60a8\u9700\u8981\u7684\u6240\u6709TouchGFX AL\u4ee3\u7801\u3002 The TBSs are based on a CubeMX and TouchGFX Generator configuration, so it is possible for you to modify the configuration if you want to experiment later on."),(0,n.kt)("p",null,"\u6709\u5173\u6b64\u6b65\u9aa4\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",h({parentName:"p"},{href:"touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL\u5f00\u53d1"),"\u7ae0\u8282\u3002"),(0,n.kt)("h2",h({},{id:"ui-development"}),"UI\u5f00\u53d1"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-000.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u60a8\u53ef\u80fd\u4f1a\u5728\u6b64\u64cd\u4f5c\u4e2d\u82b1\u8d39\u5927\u90e8\u5206\u7684\u9879\u76ee\u5f00\u53d1\u65f6\u95f4\u3002 \u60a8\u5c06\u5728\u8fd9\u91cc\u521b\u5efa\u7528\u6237\u754c\u9762\u4ee3\u7801\uff0c\u8be5\u4ee3\u7801\u5c06\u6784\u6210TouchGFX\u9879\u76ee\u7684\u53ef\u89c6\u90e8\u5206\uff0c\u8be5\u7ec4\u4ef6\u88ab\u79f0\u4e3aTouchGFX UI\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,n.kt)("h3",h({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,n.kt)("p",null,"\u6b64\u64cd\u4f5c\u7684\u4e3b\u8981\u5de5\u5177\u662fTouchGFX Designer\u4ee5\u53ca\u60a8\u6700\u559c\u7231\u7684IDE\u6216\u6587\u672c\u7f16\u8f91\u5668\u3002 \u5728TouchGFX Designer\u4e2d\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u3001\u8bbe\u8ba1\u548c\u521b\u5efa\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u89c6\u7a97\uff0c\u5e76\u7528C++\u4ee3\u7801\u751f\u6210UI\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u90e8\u5206\u3002 \u5bf9\u4e8e\u5e94\u7528\u7a0b\u5e8f\u903b\u8f91\uff08\u5904\u7406\u4e8b\u4ef6\uff0c\u4e0e\u7cfb\u7edf\u7684\u975eUI\u90e8\u5206\u8fdb\u884c\u901a\u4fe1\uff09\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528IDE\u6216\u6587\u672c\u7f16\u8f91\u5668\u7f16\u5199C++\u4ee3\u7801\uff0c\u8be5\u4ee3\u7801\u4e0eTouchGFX Designer\u751f\u6210\u7684\u4ee3\u7801\u4ea4\u4e92\u5171\u5b58\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-screen-4.17.png",noShadow:!0,width:"300",mdxType:"Figure"}),(0,n.kt)("h3",h({},{id:"application-templates"}),"TouchGFX Board Setups"),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX and do not want to spend time doing the other activities, you can either base your application on the PC based TouchGFX Simulator or you can use one of the existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits. \u65e0\u8bba\u5982\u4f55\uff0c\u60a8\u90fd\u53ef\u4ee5\u7acb\u5373\u7740\u624b\u5f00\u53d1UI\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,n.kt)("h3",h({},{id:"ui-templates"}),"Demos and Examples"),(0,n.kt)("p",null,"If you just want something to run or want to be inspired you can select one of the TouchGFX demos or examples which can be found when creating a new project in TouchGFX Designer. \u5982\u679c\u8fd9\u6837\u7684\u8bdd\uff0c\u53ea\u9700\u7f16\u8bd1\u3001\u70e7\u5199\u4ee3\u7801\u5e76\u8fd0\u884c\uff0c\u65e0\u987b\u5176\u5b83\u64cd\u4f5c\u3002"),(0,n.kt)("h3",h({},{id:"custom-hardware-1"}),"\u5b9a\u5236\u786c\u4ef6"),(0,n.kt)("p",null,"If you have already done all the other activities and thus have a running board ready for a TouchGFX Application you can either start from scratch or select one of the examples or demo. \u5982\u679c\u5b9a\u5236\u677f\u7684\u5206\u8fa8\u7387\u4e0e\u793a\u4f8b\u4e00\u81f4\uff0c\u5219\u793a\u4f8b\u4e5f\u5e94\u8be5\u80fd\u5728\u60a8\u7684\u5b9a\u5236\u677f\u4e0a\u8fd0\u884c\u3002"),(0,n.kt)("p",null,"\u6709\u5173\u6b64\u6b65\u9aa4\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",h({parentName:"p"},{href:"ui-development/ui-development-introduction"}),"UI\u5f00\u53d1"),"\u7ae0\u8282\u3002"),(0,n.kt)("h2",h({},{id:"workflow"}),"\u5de5\u4f5c\u6d41\u7a0b"),(0,n.kt)("p",null,"\u5982\u60a8\u6240\u89c1\uff0cTouchGFX\u5f00\u53d1\u6d89\u53ca\u8bb8\u591a\u64cd\u4f5c\u548c\u5de5\u5177\u3002 \u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u60a8\u65e0\u9700\u4e00\u6b21\u6027\u5b8c\u6210\u6240\u6709\u64cd\u4f5c\uff0c\u800c\u4e14\u5728\u5f00\u59cb\u8fdb\u884cUI\u5f00\u53d1\u4e4b\u524d\uff0c\u4e0d\u4e00\u5b9a\u9700\u8981\u4f7f\u7528\u663e\u793a\u677f\u3001\u677f\u7ea7\u521d\u59cb\u5316\u4ee3\u7801\u548cTouchGFX AL\u3002 \u53ef\u4f7f\u7528STM32\u8bc4\u4f30\u5957\u4ef6\u6216TouchGFX Simulator\u6765\u5b8c\u6210\u8fd9\u4e9b\u64cd\u4f5c\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",noShadow:!0,width:"700",mdxType:"Figure"},"TouchGFX Designer\u5de5\u4f5c\u6d41\u7a0b"),(0,n.kt)("h3",h({},{id:"generated-code-and-user-code"}),"\u751f\u6210\u7684\u4ee3\u7801\u548c\u7528\u6237\u4ee3\u7801"),(0,n.kt)("p",null,"\u5728\u5f00\u53d1\u677f\u642d\u5efa\u542f\u52a8\u3001TouchGFX AL\u5f00\u53d1\u548cUI\u5f00\u53d1\u6240\u9700\u7684\u4e09\u4e2a\u8f6f\u4ef6\u64cd\u4f5c\u4e2d\uff0c\u60a8\u5c06\u4f7f\u7528\u5de5\u5177\u6765\u751f\u6210\u4ee3\u7801\u3002 \u8fd9\u4e9b\u5de5\u5177\u7684\u5171\u540c\u70b9\u662f\u5b83\u4eec\u4e0d\u4f1a\u751f\u6210\u60a8\u6240\u9700\u7684\u6240\u6709\u4ee3\u7801\uff0c\u60a8\u8fd8\u5c06\u5728\u9879\u76ee\u4e2d\u6dfb\u52a0\u7279\u5b9a\u7528\u6237\u4ee3\u7801\u3002 \u5bf9\u4e8e\u8fd9\u4e09\u79cd\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u5728\u4f7f\u7528\u5de5\u5177\u548c\u7f16\u5199\u4ee3\u7801\u4e4b\u95f4\u6765\u56de\u5207\u6362\u3002 \u5de5\u5177\u751f\u6210\u7684\u4ee3\u7801\u548c\u7528\u6237\u4ee3\u7801\u662f\u72ec\u7acb\u7684\uff0c\u5e76\u53ef\u4ee5\u5206\u522b\u66f4\u65b0\u3002"),(0,n.kt)("p",null,"\u6709\u65f6\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5728\u4e0d\u540c\u64cd\u4f5c\u4e4b\u95f4\u6765\u56de\u5207\u6362\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u5de5\u5177\u3002 \u5728\u8fdb\u884cTouchGFX AL\u5f00\u53d1\u65f6\uff0c\u60a8\u901a\u5e38\u4f1a\u4f7f\u7528\u975e\u5e38\u7b80\u5355\u7684TouchGFX UI\u6765\u6d4b\u8bd5TouchGFX AL\u3002 \u800c\u4e14\uff0c\u5728\u4e0d\u540c\u64cd\u4f5c\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u6ca1\u6709\u95ee\u9898\uff0c\u5de5\u5177\u3001\u751f\u6210\u4ee3\u7801\u548c\u60a8\u7684\u7528\u6237\u4ee3\u7801\u5171\u5b58\uff0c\u5e76\u5728\u66f4\u65b0\u65f6\u4e0d\u4f1a\u51fa\u73b0\u4efb\u4f55\u95ee\u9898\u3002"),(0,n.kt)("h3",h({},{id:"change-of-compileride"}),"\u66f4\u6539\u7f16\u8bd1\u5668/IDE"),(0,n.kt)("p",null,"\u5728\u8fd9\u4e9b\u64cd\u4f5c\u4e2d\uff0c\u60a8\u5fc5\u987b\u4e3a\u76ee\u6807\u677f\u7f16\u8bd1\u4ee3\u7801\u3002 The compilers supported by TouchGFX are IAR, ARMCC, ARMCLANG and GCC(STM32CubeIDE). The toolchain selected for your TouchGFX project is configured in STM32CubeMX, so if you want to change it you should open the TouchGFX project .ioc file in STM32CubeMX and change the toolchain setting. When selecting an TouchGFX Board Setup (TBS) in TouchGFX Designer it will have one toolchain preselected, so you will only find a project file for one of the toolchains. \u7531\u4e8eAT\u4e0e.ioc\u6587\u4ef6\u662f\u914d\u5957\u7684\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c06\u5176\u6253\u5f00\u5e76\u66f4\u6539\u5de5\u5177\u94fe\uff0c\u4ee5\u9002\u5e94\u9879\u76ee\u9700\u6c42\u3002"))}T.isMDXComponent=!0}}]);