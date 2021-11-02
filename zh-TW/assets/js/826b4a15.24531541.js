(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4403],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return d},kt:function(){return s}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):u(u({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),h=l(o),s=r,m=h["".concat(c,".").concat(s)]||h[s]||p[s]||i;return o?n.createElement(m,u(u({ref:t},d),{},{components:o})):n.createElement(m,u({ref:t},d))}));function s(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,u=new Array(i);u[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,u[1]=a;for(var l=2;l<i;l++)u[l]=o[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},44035:function(e,t,o){"use strict";var n=o(67294),r=o(25026);t.Z=function(e){const t=e.noShadow||!1,o=e.width,i=e.height,u=(0,r.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:u,target:"_blank"},n.createElement("img",{width:o,height:i,src:u})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:u,target:"_blank"},n.createElement("img",{width:o,height:i,src:u})),n.createElement("p",null,e.children))}},35096:function(e,t,o){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}o.d(t,{b:function(){return n},Z:function(){return r}})},25026:function(e,t,o){"use strict";o.d(t,{C:function(){return i},Z:function(){return u}});var n=o(11368),r=o(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(o,n)=>function(e,t,o,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if((0,r.b)(o))return o;if(n)return t+o;const u=o.startsWith(t)?o:t+o.replace(/^\//,"");return i?e+u:u}(t,e,o,n)}}function u(e,t={}){const{withBaseUrl:o}=i();return o(e,t)}},45926:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return g},default:function(){return T}});var n=o(3905),r=o(44035),i=Object.defineProperty,u=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&p(e,o,t[o]);if(c)for(var o of c(t))d.call(t,o)&&p(e,o,t[o]);return e};const s={id:"development-introduction",title:"\u958b\u767c\u7c21\u4ecb"},m=void 0,f={unversionedId:"development/development-introduction",id:"development/development-introduction",isDocsHomePage:!1,title:"\u958b\u767c\u7c21\u4ecb",description:"\u4e3b\u8981\u64cd\u4f5c",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/development-introduction.mdx",sourceDirName:"development",slug:"/development/development-introduction",permalink:"/4.18/zh-TW/docs/development/development-introduction",tags:[],version:"current",frontMatter:{id:"development-introduction",title:"\u958b\u767c\u7c21\u4ecb"},sidebar:"docs",previous:{title:"Memory Usage",permalink:"/4.18/zh-TW/docs/basic-concepts/memory-usage"},next:{title:"\u786c\u9ad4\u9078\u64c7\u4ecb\u7d39",permalink:"/4.18/zh-TW/docs/development/hardware-selection/hardware-selection-introduction"}},g=[{value:"\u4e3b\u8981\u64cd\u4f5c",id:"main-activities",children:[],level:2},{value:"\u4e3b\u8981\u90e8\u4ef6",id:"main-components",children:[],level:2},{value:"\u786c\u9ad4\u9078\u64c7",id:"hardware-selection",children:[{value:"\u539f\u578b\u8a2d\u8a08",id:"prototyping",children:[],level:3},{value:"\u5ba2\u88fd\u5316\u786c\u9ad4",id:"custom-hardware",children:[],level:3}],level:2},{value:"\u958b\u767c\u677f\u642d\u5efa",id:"board-bring-up",children:[{value:"STM32CubeMX",id:"stm32cubemx",children:[],level:3},{value:"TouchGFX Board Setups (TBSs)",id:"application-templates-ats",children:[],level:3}],level:2},{value:"TouchGFX AL\u958b\u767c",id:"touchgfx-al-development",children:[{value:"TouchGFX Generator",id:"touchgfx-generator",children:[],level:3}],level:2},{value:"UI\u958b\u767c",id:"ui-development",children:[{value:"TouchGFX Designer",id:"touchgfx-designer",children:[],level:3},{value:"TouchGFX Board Setups",id:"application-templates",children:[],level:3},{value:"Demos and Examples",id:"ui-templates",children:[],level:3},{value:"\u5ba2\u88fd\u5316\u786c\u9ad4",id:"custom-hardware-1",children:[],level:3}],level:2},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"workflow",children:[{value:"\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u548c\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc",id:"generated-code-and-user-code",children:[],level:3},{value:"\u66f4\u6539\u7de8\u8b6f\u5668/IDE",id:"change-of-compileride",children:[],level:3}],level:2}],v={toc:g};function T(e){var t,o=e,{components:i}=o,p=((e,t)=>{var o={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=h(h({},v),p),u(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h2",h({},{id:"main-activities"}),"\u4e3b\u8981\u64cd\u4f5c"),(0,n.kt)("p",null,"\u4e00\u500bTouchGFX\u5c08\u6848\u6703\u6d89\u53ca\u5230\u958b\u767c\u968e\u6bb5\u7684\u4e00\u7cfb\u5217\u64cd\u4f5c\u3002 \u6bcf\u500b\u64cd\u4f5c\u7684\u5de5\u4f5c\u91cf\u53d6\u6c7a\u65bc\u5c08\u6848\u7684\u76ee\u6a19\u3002 \u5982\u679c\u60a8\u6b63\u5728\u57f7\u884cUI\u539f\u578b\u8a2d\u8a08\uff0c\u5247\u61c9\u7528\u7a0b\u5f0f\u7684\u4e3b\u8981\u90e8\u5206\u53ef\u4f7f\u7528\u9810\u88fd\u4ee3\u78bc\uff0c\u4ee5\u8df3\u904e\u5927\u591a\u6578\u6b65\u9a5f\uff0c\u5f9e\u800c\u52a0\u5feb\u5c08\u6848\u958b\u767c\u901f\u5ea6\u3002 \u5982\u679c\u60a8\u4ee5\u5ba2\u88fd\u677f\u4f86\u5b8c\u6210\u6574\u500b\u5c08\u6848\uff0c\u60a8\u5c07\u5728\u5c08\u6848\u958b\u767c\u4e2d\u6d89\u53ca\u9019\u4e9b\u64cd\u4f5c\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/tgfx-activities.png",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX\u5c08\u6848\u7684\u4e3b\u8981\u64cd\u4f5c"),(0,n.kt)("h2",h({},{id:"main-components"}),"\u4e3b\u8981\u90e8\u4ef6"),(0,n.kt)("p",null,"\u60a8\u7684TouchGFX\u5c08\u6848\u7531\u4e94\u500b\u4e3b\u8981\u7684\u786c\u9ad4\u548c\u8edf\u9ad4\u90e8\u4ef6\u7d44\u6210\u3002 \u6bcf\u500b\u64cd\u4f5c\u90fd\u6703\u70ba\u60a8\u7684TouchGFX\u5c08\u6848\u751f\u6210\u4e00\u500b\u4e3b\u8981\u90e8\u4ef6\u3002 TouchGFXEngine\u4e0d\u662f\u4efb\u4f55\u4e3b\u8981\u64cd\u4f5c\u7684\u8f38\u51fa\uff0c\u800c\u662fTouchGFX\u5c08\u6848\u7684\u8d77\u9ede\uff0c\u4e14\u5728\u4e0b\u8f09\u548c\u5b89\u88dd\u5f8c\u5373\u53ef\u4f7f\u7528\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/tgfx-components.png",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX\u5c08\u6848\u7684\u4e3b\u8981\u90e8\u4ef6"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u5404\u7bc0\u5c07\u6982\u8ff0\u6bcf\u500b\u64cd\u4f5c\u53ca\u90e8\u4ef6\u3002 \u672c\u7ae0\u7bc0\u7684\u5176\u9918\u5404\u5c0f\u7bc0\u5c07\u9032\u4e00\u6b65\u8a73\u7d30\u63cf\u8ff0\u6bcf\u500b\u64cd\u4f5c\u3002"),(0,n.kt)("h2",h({},{id:"hardware-selection"}),"\u786c\u9ad4\u9078\u64c7"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-004.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u6b64\u64cd\u4f5c\u662fTouchGFX\u5c08\u6848\u4e2d\u7684\u521d\u59cb\u64cd\u4f5c\u3002 \u9078\u64c7\u8981\u904b\u884c\u61c9\u7528\u7a0b\u5f0f\u7684\u786c\u9ad4\u3002 \u78ba\u5b9a\u6240\u9700\u7684\u786c\u9ad4\u5143\u4ef6\uff0c\u4e26\u5f04\u6e05\u9019\u4e9b\u786c\u9ad4\u5c0dTouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u5f71\u97ff\u3002 \u5b8c\u6210\u6b64\u6b65\u5f8c\uff0c\u60a8\u5c31\u64c1\u6709\u4e86\u4e00\u500b\u53ef\u7528\u65bcTouchGFX\u9805\u76ee\u7684\u986f\u793a\u677f\u3002"),(0,n.kt)("h3",h({},{id:"prototyping"}),"\u539f\u578b\u8a2d\u8a08"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u9032\u884cUI\u539f\u578b\u8a2d\u8a08\uff0cSTM32\u8a55\u4f30\u5957\u4ef6\u662f\u500b\u5feb\u901f\u4e14\u4fbf\u5229\u7684\u7406\u60f3\u4e4b\u9078\u3002 \u9019\u88e1\u7121\u9700\u8003\u616e\u786c\u9ad4\u5143\u4ef6\u3001\u4e0d\u540c\u5143\u4ef6\u9593\u7684\u9023\u63a5\u6216\u985e\u4f3c\u554f\u984c\u3002 \u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u786c\u9ad4\u64cd\u4f5c\u53ea\u9700\u57fa\u65bcMCU\u6027\u80fd\u3001\u5132\u5b58\u5668\u8a2d\u7f6e\u548c\u986f\u793a\u5668\u5c3a\u5bf8\u65b9\u9762\uff0c\u4e26\u9078\u64c7\u6700\u8cbc\u8fd1\u60a8\u7684\u6700\u7d42\u7522\u54c1\u7684STM32\u8a55\u4f30\u5957\u4ef6\u3002"),(0,n.kt)("h3",h({},{id:"custom-hardware"}),"\u5ba2\u88fd\u5316\u786c\u9ad4"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u8981\u5efa\u7acb\u81ea\u5df1\u7684\u786c\u9ad4\u89e3\u6c7a\u65b9\u6848\uff0c\u9078\u64c7\u5f88\u591a\uff0c\u540c\u6642\u8981\u8003\u616e\u7684\u554f\u984c\u4e5f\u591a\u3002 ",(0,n.kt)("a",h({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\u786c\u9ad4\u9078\u64c7"),"\u5c07\u5354\u52a9\u60a8\u5b8c\u6210\u6b64\u4efb\u52d9\u3001\u56de\u7b54\u8a31\u591a\u554f\u984c\uff0c\u4e26\u63cf\u8ff0\u60a8\u7684\u9078\u64c7\u5982\u4f55\u5f71\u97ffTouchGFX\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,n.kt)("p",null,"\u901a\u5e38\u76f4\u5230\u5c08\u6848\u958b\u767c\u5f8c\u671f\u624d\u6703\u6709\u6700\u7d42\u7684\u786c\u9ad4\u3002 \u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u901a\u5e38\u6703\u9078\u64c7\u4e00\u500b\u985e\u4f3c\u65bc\u6700\u7d42\u677f\u5b50\u7684STM32\u8a55\u4f30\u5957\u4ef6\uff0c\u4e26\u5728UI\u958b\u767c\u7684\u7b2c\u4e00\u6b65\u4e2d\u4f7f\u7528\u8a72\u5957\u4ef6\u3002 \u5982\u679c\u60a8\u6c92\u6709\u9019\u6a23\u7684\u958b\u767c\u677f\uff0c\u4e5f\u53ef\u4ee5\u53ea\u4f7f\u7528\u5728PC\u4e0a\u904b\u884c\u7684TouchGFXSimulator\u4f86\u958b\u59cb\u3002"),(0,n.kt)("p",null,"\u6709\u95dc\u6b64\u6b65\u9a5f\u7684\u5b8c\u6574\u8aaa\u660e\uff0c\u8acb\u53c3\u898b",(0,n.kt)("a",h({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\u786c\u9ad4\u9078\u64c7"),"\u90e8\u5206\u3002"),(0,n.kt)("h2",h({},{id:"board-bring-up"}),"\u958b\u767c\u677f\u642d\u5efa"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-003.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u6b64\u64cd\u4f5c\u662f\u4e00\u9805\u8b93TOUCHGFX\u904b\u884c\u65bc\u958b\u767c\u677f\u4e0a\u7684\u6838\u5fc3\u4efb\u52d9\u3002 \u8f38\u51fa\u5143\u4ef6\u88ab\u7a31\u70ba\u958b\u767c\u7248\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\uff0c\u662f\u4e9b\u901a\u7528\u7684\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\uff0c\u7528\u65bc\u8a2d\u7f6eMCU\u53ca\u6240\u6709\u5468\u908a\uff0c\u70ba\u57f7\u884c\u61c9\u7528\u7a0b\u5f0f\u505a\u6e96\u5099\u3002 \u8a72\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u7368\u7acb\u65bcTouchGFX\uff0c\u50c5\u8655\u7406\u7d14\u786c\u9ad4\u8a2d\u7f6e\u3002"),(0,n.kt)("h3",h({},{id:"stm32cubemx"}),"STM32CubeMX"),(0,n.kt)("p",null,"The main tool for this activity is STM32CubeMX. \u5b83\u53ef\u4ee5\u5354\u52a9\u60a8\u8a2d\u5b9aMCU\u4e26\u751f\u6210\u57fa\u672c\u7684\u7684\u555f\u52d5\u7a0b\u5f0f\u78bc\u3002 \u5c0d\u65bc\u5916\u8a2d\uff08\u5982\u5916\u90e8RAM\u548c\u986f\u793a\u5668\uff09\uff0c\u60a8\u5c07\u81ea\u884c\u6dfb\u52a0\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u548c\u7279\u5b9a\u5468\u908a\u9a45\u52d5\u7a0b\u5f0f\u3002 It is also possible to do the entire Board Initialization Code without use of STM32CubeMX, but is not recommended unless you have expert knowledge on STM32 and board bring up."),(0,n.kt)("h3",h({},{id:"application-templates-ats"}),"TouchGFX Board Setups (TBSs)"),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. \u9019\u5305\u62ec\u6240\u9700\u7684\u6240\u6709\u958b\u767c\u677f\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u3002 The TBSs are based on a STM32CubeMX configuration, so it is possible for you to modify the configuration if you want to experiment or add access to more peripherals."),(0,n.kt)("p",null,"\u6709\u95dc\u6b64\u6b65\u9a5f\u7684\u5b8c\u6574\u8aaa\u660e\uff0c\u8acb\u53c3\u898b",(0,n.kt)("a",h({parentName:"p"},{href:"board-bring-up/board-introduction"}),"\u958b\u767c\u677f\u642d\u5efa\u555f\u52d5")," \u7ae0\u7bc0\u3002"),(0,n.kt)("h2",h({},{id:"touchgfx-al-development"}),"TouchGFX AL\u958b\u767c"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-002.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u6b64\u64cd\u4f5c\u662fTouchGFXEngine\u5728\u5b8c\u5168\u521d\u59cb\u5316\u904e\u7684\u986f\u793a\u677f\uff08\u986f\u793a\u677f+\u958b\u767c\u677f\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\uff09\u4e0a\u904b\u884c\u7684\u95dc\u9375\u3002 \u8f38\u51fa\u5143\u4ef6\u88ab\u7a31\u70baTouchGFX\u62bd\u8c61\u5c64\uff08AL\uff09\uff0c\u9019\u662f\u4e00\u500b\u8edf\u9ad4\u5c64\u4e5f\u4f7f\u786c\u9ad4\u62bd\u8c61\u5316\uff0c\u4e26\u4f7fTouchGFXEngine\u53ef\u5728\u60a8\u7684\u958b\u767c\u677f\u4e0a\u904b\u884c\u3002"),(0,n.kt)("h3",h({},{id:"touchgfx-generator"}),"TouchGFX Generator"),(0,n.kt)("p",null,"The main tool in this activity is TouchGFX Generator which is a STM32CubeMX plugin that allows you to configure and generate most of the TouchGFX AL code. \u60a8\u4e5f\u80fd\u81ea\u884c\u7de8\u5bebTouchGFXAL\u7a0b\u5f0f\u78bc\u4e2d\u7684\u67d0\u4e9b\u90e8\u5206\u3002 \u9019\u500b\u6b65\u9a5f\u4e2d\uff0cTouchGFXGenerator\u5c07\u5354\u52a9\u60a8\u5efa\u7acb\u8981\u57f7\u884c\u7684\u7a7a\u51fd\u6578\u3002"),(0,n.kt)("p",null,"\u8acb\u7279\u5225\u6ce8\u610f\uff0c\u70ba\u4f7fTouchGFXAL\u6b63\u5e38\u5de5\u4f5c\uff0c\u6b63\u78ba\u5b8c\u6210\u958b\u767c\u677f\u7684\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u4e26\u6b63\u78ba\u914d\u7f6eMCU\u3001\u5916\u90e8RAM\u3001\u986f\u793a\u5668\u7b49\u975e\u5e38\u91cd\u8981\u3002"),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. \u9019\u5305\u62ec\u6240\u6709\u60a8\u9700\u8981\u7684TouchGFXAL\u7a0b\u5f0f\u78bc\u3002 The TBSs are based on a CubeMX and TouchGFX Generator configuration, so it is possible for you to modify the configuration if you want to experiment later on."),(0,n.kt)("p",null,"\u6709\u95dc\u6b64\u6b65\u9a5f\u7684\u5b8c\u6574\u8aaa\u660e\uff0c\u8acb\u53c3\u898b ",(0,n.kt)("a",h({parentName:"p"},{href:"touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL \u958b\u767c"),"\u7ae0\u7bc0\u3002"),(0,n.kt)("h2",h({},{id:"ui-development"}),"UI\u958b\u767c"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-000.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u6b64\u64cd\u4f5c\u53ef\u80fd\u6703\u662f\u958b\u767c\u6b64\u5c08\u6848\u6642\u82b1\u8cbb\u6700\u591a\u6642\u9593\u7684\u90e8\u5206\u3002 \u60a8\u5c07\u5728\u9019\u88e1\u5275\u5efa\u4f7f\u7528\u8005\u4ecb\u9762\u7684\u7a0b\u5f0f\u78bc\uff0c\u8a72\u4ee3\u78bc\u5c07\u69cb\u6210TouchGFX\u5c08\u6848\u53ef\u8996\u5316\u7684\u90e8\u5206\uff0c\u8a72\u5143\u4ef6\u88ab\u7a31\u70baTouchGFXUI\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,n.kt)("h3",h({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,n.kt)("p",null,"\u6b64\u64cd\u4f5c\u7684\u4e3b\u8981\u5de5\u5177\u662fTouchGFXDesigner\u4ee5\u53ca\u60a8\u6700\u559c\u611b\u7684IDE\u6216\u6587\u5b57\u7de8\u8f2f\u5668\u3002 \u5728TouchGFXDesigner\u4e2d\uff0c\u60a8\u53ef\u4ee5\u8a2d\u7f6e\u3001\u8a2d\u8a08\u548c\u5275\u5efa\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684\u8996\u7a97\uff0c\u4e26\u7528C++\u7a0b\u5f0f\u78bc\u751f\u6210UI\u61c9\u7528\u7a0b\u5f0f\u7684\u4e3b\u8981\u90e8\u5206\u3002 \u5c0d\u65bc\u61c9\u7528\u7a0b\u5f0f\u908f\u8f2f\uff08\u8655\u7406\u4e8b\u4ef6\uff0c\u8207\u7cfb\u7d71\u7684\u975eUI\u90e8\u5206\u9032\u884c\u901a\u8a0a\uff09\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528IDE\u6216\u6587\u5b57\u7de8\u8f2f\u5668\u7de8\u5bebC++\u7a0b\u5f0f\u78bc\uff0c\u8a72\u4ee3\u78bc\u8207TouchGFXDesigner\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u4e92\u901a\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-screen-4.17.png",noShadow:!0,width:"300",mdxType:"Figure"}),(0,n.kt)("h3",h({},{id:"application-templates"}),"TouchGFX Board Setups"),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX and do not want to spend time doing the other activities, you can either base your application on the PC based TouchGFX Simulator or you can use one of the existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits. \u7121\u8ad6\u5982\u4f55\uff0c\u60a8\u90fd\u53ef\u4ee5\u7acb\u5373\u958b\u767cUI\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,n.kt)("h3",h({},{id:"ui-templates"}),"Demos and Examples"),(0,n.kt)("p",null,"If you just want something to run or want to be inspired you can select one of the TouchGFX demos or examples which can be found when creating a new project in TouchGFX Designer. \u5982\u679c\u9019\u6a23\u7684\u8a71\uff0c\u53ea\u9700\u7de8\u8b6f\u3001\u71d2\u5beb\u7a0b\u5f0f\u78bc\u4e26\u57f7\u884c\uff0c\u7121\u9808\u5176\u5b83\u64cd\u4f5c\u3002"),(0,n.kt)("h3",h({},{id:"custom-hardware-1"}),"\u5ba2\u88fd\u5316\u786c\u9ad4"),(0,n.kt)("p",null,"If you have already done all the other activities and thus have a running board ready for a TouchGFX Application you can either start from scratch or select one of the examples or demo. \u5982\u679c\u5ba2\u88fd\u677f\u7684\u89e3\u6790\u5ea6\u8207\u7bc4\u4f8b\u4e00\u81f4\uff0c\u5247\u7bc4\u4f8b\u4e5f\u61c9\u8a72\u80fd\u5728\u60a8\u7684\u5ba2\u88fd\u677f\u4e0a\u904b\u884c\u3002"),(0,n.kt)("p",null,"\u6709\u95dc\u6b64\u6b65\u9a5f\u7684\u5b8c\u6574\u8aaa\u660e\uff0c\u8acb\u53c3\u898b",(0,n.kt)("a",h({parentName:"p"},{href:"ui-development/ui-development-introduction"}),"UI\u958b\u767c"),"\u7ae0\u7bc0\u3002"),(0,n.kt)("h2",h({},{id:"workflow"}),"\u5de5\u4f5c\u6d41\u7a0b"),(0,n.kt)("p",null,"\u5982\u60a8\u6240\u898b\uff0cTouchGFX\u958b\u767c\u6d89\u53ca\u8a31\u591a\u64cd\u4f5c\u548c\u5de5\u5177\u3002 \u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u60a8\u7121\u9700\u4e00\u6b21\u6027\u5b8c\u6210\u6240\u6709\u64cd\u4f5c\uff0c\u800c\u4e14\u5728\u958b\u59cb\u9032\u884cUI\u958b\u767c\u4e4b\u524d\uff0c\u4e0d\u4e00\u5b9a\u9700\u8981\u4f7f\u7528\u986f\u793a\u677f\u3001\u958b\u767c\u7248\u521d\u59cb\u5316\u7a0b\u5f0f\u78bc\u548cTouchGFXAL\u3002 \u53ef\u4f7f\u7528STM32\u8a55\u4f30\u5957\u4ef6\u6216TouchGFXSimulator\u4f86\u5b8c\u6210\u9019\u4e9b\u64cd\u4f5c\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",noShadow:!0,width:"700",mdxType:"Figure"},"TouchGFXDesigner\u5de5\u4f5c\u6d41\u7a0b"),(0,n.kt)("h3",h({},{id:"generated-code-and-user-code"}),"\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u548c\u4f7f\u7528\u8005\u7a0b\u5f0f\u78bc"),(0,n.kt)("p",null,"\u5728\u958b\u767c\u677f\u642d\u5efa\u555f\u52d5\u3001TouchGFXAL\u958b\u767c\u548cUI\u958b\u767c\u6240\u9700\u7684\u4e09\u500b\u8edf\u9ad4\u64cd\u4f5c\u4e2d\uff0c\u60a8\u5c07\u4f7f\u7528\u5de5\u5177\u4f86\u751f\u6210\u7a0b\u5f0f\u78bc\u3002 \u9019\u4e9b\u5de5\u5177\u7684\u5171\u540c\u9ede\u662f\u5b83\u5011\u4e0d\u6703\u751f\u6210\u6240\u6709\u60a8\u6240\u9700\u7684\u4ee3\u78bc\uff0c\u60a8\u4f9d\u7136\u9700\u8981\u5728\u5c08\u6848\u4e2d\u6dfb\u52a0\u7279\u5b9a\u7528\u6236\u4ee3\u78bc\u3002 \u5c0d\u65bc\u9019\u4e09\u7a2e\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u5728\u4f7f\u7528\u5de5\u5177\u548c\u7de8\u5beb\u7a0b\u5f0f\u78bc\u4e4b\u9593\u4f86\u56de\u5207\u63db\u3002 \u5de5\u5177\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u548c\u7528\u6236\u7a0b\u5f0f\u78bc\u662f\u7368\u7acb\u7684\uff0c\u4e26\u53ef\u4ee5\u500b\u5225\u66f4\u65b0\u3002"),(0,n.kt)("p",null,"\u6709\u6642\uff0c\u60a8\u9084\u53ef\u4ee5\u5728\u4e0d\u540c\u64cd\u4f5c\u4e4b\u9593\u4f86\u56de\u5207\u63db\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u5de5\u5177\u3002 \u5728\u9032\u884cTouchGFXAL\u958b\u767c\u6642\uff0c\u60a8\u901a\u5e38\u6703\u4f7f\u7528\u975e\u5e38\u7c21\u55ae\u7684TouchGFXUI\u4f86\u6e2c\u8a66TouchGFXAL\u3002 \u800c\u4e14\u5728\u4e0d\u540c\u64cd\u4f5c\u4e4b\u9593\u9032\u884c\u5207\u63db\u4e0d\u6703\u6709\u554f\u984c\uff0c\u50cf\u662f\u5de5\u5177\u3001\u751f\u6210\u7a0b\u5f0f\u78bc\u548c\u60a8\u7684\u7528\u6236\u7a0b\u5f0f\u78bc\u5171\u5b58\uff0c\u4e26\u5728\u66f4\u65b0\u6642\u4e0d\u6703\u51fa\u73fe\u4efb\u4f55\u554f\u984c\u3002"),(0,n.kt)("h3",h({},{id:"change-of-compileride"}),"\u66f4\u6539\u7de8\u8b6f\u5668/IDE"),(0,n.kt)("p",null,"\u5728\u9019\u4e9b\u64cd\u4f5c\u4e2d\uff0c\u60a8\u5fc5\u9808\u70ba\u76ee\u6a19\u958b\u767c\u677f\u7de8\u8b6f\u7a0b\u5f0f\u78bc\u3002 The compilers supported by TouchGFX are IAR, ARMCC, ARMCLANG and GCC(STM32CubeIDE). The toolchain selected for your TouchGFX project is configured in STM32CubeMX, so if you want to change it you should open the TouchGFX project .ioc file in STM32CubeMX and change the toolchain setting. When selecting an TouchGFX Board Setup (TBS) in TouchGFX Designer it will have one toolchain preselected, so you will only find a project file for one of the toolchains. \u7531\u65bcAT\u8207.ioc\u6a94\u662f\u914d\u5408\u7684\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5c07\u5176\u6253\u958b\u4e26\u66f4\u6539\u5de5\u5177\u93c8\uff0c\u4ee5\u9069\u61c9\u5c08\u6848\u9700\u6c42\u3002"))}T.isMDXComponent=!0}}]);