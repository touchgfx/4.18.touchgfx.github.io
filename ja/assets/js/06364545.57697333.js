"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2701],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return s}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),h=l(o),s=r,m=h["".concat(c,".").concat(s)]||h[s]||p[s]||i;return o?n.createElement(m,a(a({ref:t},d),{},{components:o})):n.createElement(m,a({ref:t},d))}));function s(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},44035:function(e,t,o){var n=o(67294),r=o(25026);t.Z=function(e){const t=e.noShadow||!1,o=e.width,i=e.height,a=(0,r.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:o,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:o,height:i,src:a})),n.createElement("p",null,e.children))}},35096:function(e,t,o){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}o.d(t,{b:function(){return n},Z:function(){return r}})},25026:function(e,t,o){o.d(t,{C:function(){return i},Z:function(){return a}});var n=o(11368),r=o(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(o,n)=>function(e,t,o,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if((0,r.b)(o))return o;if(n)return t+o;const a=o.startsWith(t)?o:t+o.replace(/^\//,"");return i?e+a:a}(t,e,o,n)}}function a(e,t={}){const{withBaseUrl:o}=i();return o(e,t)}},12488:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return g},default:function(){return T}});var n=o(3905),r=o(44035),i=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&p(e,o,t[o]);if(c)for(var o of c(t))d.call(t,o)&&p(e,o,t[o]);return e};const s={id:"development-introduction",title:"\u958b\u767a\u306e\u6982\u8981"},m=void 0,f={unversionedId:"development/development-introduction",id:"development/development-introduction",isDocsHomePage:!1,title:"\u958b\u767a\u306e\u6982\u8981",description:"\u4e3b\u306a\u4f5c\u696d",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/development-introduction.mdx",sourceDirName:"development",slug:"/development/development-introduction",permalink:"/4.18/ja/docs/development/development-introduction",tags:[],version:"current",frontMatter:{id:"development-introduction",title:"\u958b\u767a\u306e\u6982\u8981"},sidebar:"docs",previous:{title:"Memory Usage",permalink:"/4.18/ja/docs/basic-concepts/memory-usage"},next:{title:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u9078\u629e\u306e\u6982\u8981",permalink:"/4.18/ja/docs/development/hardware-selection/hardware-selection-introduction"}},g=[{value:"\u4e3b\u306a\u4f5c\u696d",id:"main-activities",children:[],level:2},{value:"\u898b\u51fa\u3057\u3078\u306e\u76f4\u30ea\u30f3\u30af",id:"main-components",children:[],level:2},{value:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u9078\u629e",id:"hardware-selection",children:[{value:"\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u4f5c\u6210",id:"prototyping",children:[],level:3},{value:"\u30ab\u30b9\u30bf\u30e0\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2",id:"custom-hardware",children:[],level:3}],level:2},{value:"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052",id:"board-bring-up",children:[{value:"STM32CubeMX",id:"stm32cubemx",children:[],level:3},{value:"TouchGFX Board Setups (TBSs)",id:"application-templates-ats",children:[],level:3}],level:2},{value:"TouchGFX AL\uff08\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\uff09\u958b\u767a",id:"touchgfx-al-development",children:[{value:"TouchGFX Generator",id:"touchgfx-generator",children:[],level:3}],level:2},{value:"UI\u958b\u767a",id:"ui-development",children:[{value:"TouchGFX Designer",id:"touchgfx-designer",children:[],level:3},{value:"TouchGFX Board Setups",id:"application-templates",children:[],level:3},{value:"Demos and Examples",id:"ui-templates",children:[],level:3},{value:"\u30ab\u30b9\u30bf\u30e0\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2",id:"custom-hardware-1",children:[],level:3}],level:2},{value:"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc",id:"workflow",children:[{value:"\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u3068\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"generated-code-and-user-code",children:[],level:3},{value:"\u30b3\u30f3\u30d1\u30a4\u30e9 / IDE\u306e\u5909\u66f4",id:"change-of-compileride",children:[],level:3}],level:2}],v={toc:g};function T(e){var t,o=e,{components:i}=o,p=((e,t)=>{var o={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=h(h({},v),p),a(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h2",h({},{id:"main-activities"}),"\u4e3b\u306a\u4f5c\u696d"),(0,n.kt)("p",null,"TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u958b\u767a\u6bb5\u968e\u306b\u304a\u3044\u3066\u53d6\u308a\u7d44\u3080\u4e00\u9023\u306e\u4f5c\u696d\u304c\u542b\u307e\u308c\u307e\u3059\u3002 \u5404\u4f5c\u696d\u306e\u5de5\u6570\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u76ee\u6a19\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002 UI\u306e\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5927\u90e8\u5206\u306b\u65e2\u88fd\u306e\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3067\u304d\u308b\u305f\u3081\u3001\u4f5c\u696d\u306e\u5927\u534a\u3092\u7701\u7565\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u958b\u767a\u3092\u52a0\u901f\u3067\u304d\u307e\u3059\u3002 \u30ab\u30b9\u30bf\u30e0\uff65\u30dc\u30fc\u30c9\u306b\u57fa\u3065\u304f\u30d5\u30eb\uff65\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5834\u5408\u306f\u3001\u5404\u4f5c\u696d\u306b\u53d6\u308a\u7d44\u3080\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/tgfx-activities.png",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4e3b\u306a\u4f5c\u696d"),(0,n.kt)("h2",h({},{id:"main-components"}),"\u898b\u51fa\u3057\u3078\u306e\u76f4\u30ea\u30f3\u30af"),(0,n.kt)("p",null,"TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u30015\u3064\u306e\u4e3b\u306a\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304a\u3088\u3073\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002 \u5404\u4f5c\u696d\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u4e3b\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u751f\u6210\u3057\u307e\u3059\u3002 TouchGFX\u30a8\u30f3\u30b8\u30f3\u306f\u3001\u3044\u305a\u308c\u306e\u4e3b\u8981\u4f5c\u696d\u306e\u51fa\u529b\u3067\u3082\u3042\u308a\u307e\u305b\u3093\u3002\u3053\u306e\u30a8\u30f3\u30b8\u30f3\u306f\u3001TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u51fa\u767a\u70b9\u3068\u306a\u308b\u3082\u306e\u3067\u3042\u308a\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304a\u3088\u3073\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5b8c\u4e86\u6b21\u7b2c\u3001\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/tgfx-components.png",noShadow:!0,width:"600",mdxType:"Figure"},"TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4e3b\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,n.kt)("p",null,"\u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u5404\u4f5c\u696d\u304a\u3088\u3073\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u6982\u8981\u3092\u793a\u3057\u3001 \u7ae0\u306e\u5f8c\u534a\u3067\u5404\u4f5c\u696d\u306e\u8a73\u7d30\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",h({},{id:"hardware-selection"}),"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u9078\u629e"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-004.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u3053\u306e\u4f5c\u696d\u306fTouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6700\u521d\u306e\u5de5\u7a0b\u3067\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u5fc5\u8981\u306a\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6c7a\u5b9a\u3057\u3001\u305d\u308c\u3089\u304cTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4e0e\u3048\u308b\u5f71\u97ff\u3092\u5224\u65ad\u3057\u307e\u3059\u3002 \u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u5b8c\u4e86\u3059\u308b\u3068\u3001TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30dc\u30fc\u30c9\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",h({},{id:"prototyping"}),"\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u4f5c\u6210"),(0,n.kt)("p",null,"UI\u306e\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u3001\u8fc5\u901f\u306b\u7acb\u3061\u4e0a\u3052\u3001\u5b9f\u884c\u3067\u304d\u308bSTM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u304c\u6700\u9069\u306e\u9078\u629e\u80a2\u3067\u3059\u3002 \u3053\u306e\u30ad\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308c\u3070\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u3064\u3044\u3066\u3001\u30dc\u30fc\u30c9\u3078\u306e\u63a5\u7d9a\u65b9\u6cd5\u306a\u3069\u306e\u554f\u984c\u3092\u8003\u616e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002 \u3053\u306e\u5834\u5408\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u9078\u629e\u4f5c\u696d\u306f\u3001\u63d0\u4f9b\u4e2d\u306eSTM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3092\u9078\u3076\u3060\u3051\u3067\u5b8c\u4e86\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u6027\u80fd\u3001\u30e1\u30e2\u30ea\u306e\u8a2d\u5b9a\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b5\u30a4\u30ba\u3068\u3044\u3046\u89b3\u70b9\u304b\u3089\u3001\u6700\u7d42\u88fd\u54c1\u306b\u6700\u3082\u5408\u3063\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h3",h({},{id:"custom-hardware"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2"),(0,n.kt)("p",null,"\u72ec\u81ea\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u3001\u591a\u6570\u306e\u9078\u629e\u80a2\u3068\u691c\u8a0e\u3059\u3079\u304d\u8ab2\u984c\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u4f5c\u696d\u306b\u95a2\u3057\u3066\u306f\u300c",(0,n.kt)("a",h({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u9078\u629e"),"\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u591a\u304f\u306e\u7591\u554f\u306b\u5bfe\u3059\u308b\u7b54\u3048\u3068\u3001\u9078\u629e\u304cTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4e0e\u3048\u308b\u5f71\u97ff\u306b\u3064\u3044\u3066\u306e\u89e3\u8aac\u304c\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7d42\u76e4\u306b\u306a\u308b\u307e\u3067\u3001\u6700\u7d42\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3092\u7528\u610f\u3067\u304d\u306a\u3044\u30b1\u30fc\u30b9\u306f\u5c11\u306a\u304f\u3042\u308a\u307e\u305b\u3093\u3002 \u305d\u306e\u3088\u3046\u306a\u5834\u5408\u306b\u306f\u3001\u307e\u305a\u6700\u7d42\u88fd\u54c1\u306e\u30dc\u30fc\u30c9\u306b\u8fd1\u3044STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3092\u9078\u629e\u3057\u3001UI\u958b\u767a\u306e\u521d\u671f\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3053\u308c\u3092\u4f7f\u7528\u3059\u308b\u3068\u3044\u3046\u65b9\u6cd5\u304c\u4e00\u822c\u7684\u3067\u3059\u3002 \u305d\u306e\u3088\u3046\u306a\u30dc\u30fc\u30c9\u304c\u306a\u3044\u5834\u5408\u306f\u3001PC\u3067\u52d5\u4f5c\u3059\u308bTouchGFX Simulator\u3092\u4f7f\u7528\u3057\u3066\u958b\u767a\u306b\u7740\u624b\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u8a73\u7d30\u306f\u300c",(0,n.kt)("a",h({parentName:"p"},{href:"hardware-selection/hardware-selection-introduction"}),"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u9078\u629e"),"\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",h({},{id:"board-bring-up"}),"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-003.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u3053\u306e\u4f5c\u696d\u306f\u3001TouchGFX\u3092\u30dc\u30fc\u30c9\u4e0a\u3067\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306e\u4e2d\u5fc3\u7684\u306a\u30bf\u30b9\u30af\u3067\u3059\u3002 \u51fa\u529b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u30dc\u30fc\u30c9\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3068\u547c\u3070\u308c\u308b\u3082\u306e\u3067\u3059\u3002\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3068\u3059\u3079\u3066\u306e\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u3092\u8a2d\u5b9a\u3059\u308b\u4e00\u822c\u7684\u306a\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3067\u3042\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5b9f\u884c\u306e\u6e96\u5099\u3092\u6574\u3048\u307e\u3059\u3002 \u3053\u306e\u521d\u671f\u5316\u30b3\u30fc\u30c9\u306fTouchGFX\u304b\u3089\u72ec\u7acb\u3057\u3066\u304a\u308a\u3001\u7d14\u7c8b\u306b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u8a2d\u5b9a\u306e\u307f\u3092\u884c\u3044\u307e\u3059\u3002"),(0,n.kt)("h3",h({},{id:"stm32cubemx"}),"STM32CubeMX"),(0,n.kt)("p",null,"The main tool for this activity is STM32CubeMX. CubeMX\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8a2d\u5b9a\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u4e00\u822c\u7684\u306a\u8d77\u52d5\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u307e\u3059\u3002 \u5916\u90e8RAM\u3084\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306a\u3069\u306e\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u306b\u3064\u3044\u3066\u306f\u3001\u30e6\u30fc\u30b6\u304c\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3068\u7279\u5b9a\u306e\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u7528\u306e\u30c9\u30e9\u30a4\u30d0\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002 It is also possible to do the entire Board Initialization Code without use of STM32CubeMX, but is not recommended unless you have expert knowledge on STM32 and board bring up."),(0,n.kt)("h3",h({},{id:"application-templates-ats"}),"TouchGFX Board Setups (TBSs)"),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. \u3053\u308c\u3089\u306b\u306f\u3001\u5fc5\u8981\u306a\u30dc\u30fc\u30c9\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3082\u3059\u3079\u3066\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 The TBSs are based on a STM32CubeMX configuration, so it is possible for you to modify the configuration if you want to experiment or add access to more peripherals."),(0,n.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u8a73\u7d30\u306f\u300c",(0,n.kt)("a",h({parentName:"p"},{href:"board-bring-up/board-introduction"}),"\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052"),"\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",h({},{id:"touchgfx-al-development"}),"TouchGFX AL\uff08\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\uff09\u958b\u767a"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-002.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u3053\u306e\u4f5c\u696d\u306f\u3001\u5b8c\u5168\u306b\u521d\u671f\u5316\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30dc\u30fc\u30c9(\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30dc\u30fc\u30c9 + \u30dc\u30fc\u30c9\u521d\u671f\u5316\u30b3\u30fc\u30c9) \u4e0a\u3067\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u3092\u5b9f\u884c\u3059\u308b\u4e0a\u3067\u91cd\u8981\u3067\u3059\u3002 \u51fa\u529b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001TouchGFX\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\uff08AL\uff1aAbstraction Layer\uff09\u3068\u547c\u3070\u308c\u308b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30ec\u30a4\u30e4\u3067\u3059\u3002\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3092\u62bd\u8c61\u5316\u3057\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u304c\u30dc\u30fc\u30c9\u4e0a\u3067\u52d5\u4f5c\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",h({},{id:"touchgfx-generator"}),"TouchGFX Generator"),(0,n.kt)("p",null,"The main tool in this activity is TouchGFX Generator which is a STM32CubeMX plugin that allows you to configure and generate most of the TouchGFX AL code. \u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001TouchGFX AL\u30b3\u30fc\u30c9\u306e\u4e00\u90e8\u306f\u30e6\u30fc\u30b6\u81ea\u8eab\u3067\u4f5c\u6210\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002 TouchGFX Generator\u306f\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u3001\u30e6\u30fc\u30b6\u304c\u5185\u5bb9\u3092\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306e\u7a7a\u306e\u95a2\u6570\u3092\u4f5c\u6210\u3057\u3066\u30e6\u30fc\u30b6\u3092\u652f\u63f4\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"TouchGFX AL\u304c\u6a5f\u80fd\u3059\u308b\u306b\u306f\u3001\u30dc\u30fc\u30c9\u521d\u671f\u5316\u30b3\u30fc\u30c9\u304c\u9069\u5207\u306b\u4f5c\u6210\u3055\u308c\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3001\u5916\u90e8RAM\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3001\u305d\u306e\u4ed6\u304c\u9069\u5207\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002"),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. \u3053\u308c\u306b\u306f\u3001\u5fc5\u8981\u306aTouchGFX AL\u30b3\u30fc\u30c9\u3082\u3059\u3079\u3066\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 The TBSs are based on a CubeMX and TouchGFX Generator configuration, so it is possible for you to modify the configuration if you want to experiment later on."),(0,n.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u8a73\u7d30\u306f\u300c",(0,n.kt)("a",h({parentName:"p"},{href:"touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL\u306e\u958b\u767a"),"\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",h({},{id:"ui-development"}),"UI\u958b\u767a"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/activity-puzzle-000.png",noShadow:!0,width:"400",mdxType:"Figure"}," "),(0,n.kt)("p",null,"\u304a\u305d\u3089\u304f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u958b\u767a\u306e\u6642\u9593\u306e\u307b\u3068\u3093\u3069\u304c\u3001\u3053\u306e\u4f5c\u696d\u306b\u8cbb\u3084\u3055\u308c\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u308c\u304c\u3001TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30e6\u30fc\u30b6\u306e\u76ee\u306b\u89e6\u308c\u308b\u90e8\u5206\u3067\u3042\u308b\u3001TouchGFX UI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u547c\u3070\u308c\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u69cb\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",h({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,n.kt)("p",null,"\u3053\u306e\u4f5c\u696d\u306e\u4e3b\u306a\u30c4\u30fc\u30eb\u306fTouchGFX Designer\u3068\u3001\u4f7f\u3044\u6163\u308c\u305fIDE\u307e\u305f\u306f\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30c7\u30a3\u30bf\u3067\u3059\u3002 TouchGFX Designer\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u753b\u9762\u3092\u8a2d\u5b9a\u3001\u8a2d\u8a08\u3001\u4f5c\u6210\u3057\u3001UI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4e3b\u8981\u90e8\u5206\u3092C++\u30b3\u30fc\u30c9\u3068\u3057\u3066\u751f\u6210\u3057\u307e\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8ad6\u7406(\u30a4\u30d9\u30f3\u30c8\u51e6\u7406\u3001\u30b7\u30b9\u30c6\u30e0\u306eUI\u4ee5\u5916\u306e\u90e8\u5206\u3068\u306e\u3084\u308a\u53d6\u308a) \u306b\u3064\u3044\u3066\u306f\u3001IDE\u307e\u305f\u306f\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30c7\u30a3\u30bf\u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u304cC++\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u30b3\u30fc\u30c9\u306fTouchGFX Designer\u304c\u751f\u6210\u3059\u308b\u30b3\u30fc\u30c9\u3068\u5171\u5b58\u3057\u3001\u3084\u308a\u53d6\u308a\u3057\u307e\u3059\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-screen-4.17.png",noShadow:!0,width:"300",mdxType:"Figure"}),(0,n.kt)("h3",h({},{id:"application-templates"}),"TouchGFX Board Setups"),(0,n.kt)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX and do not want to spend time doing the other activities, you can either base your application on the PC based TouchGFX Simulator or you can use one of the existing TouchGFX Board Setup (TBS) for one of the standard STM32 Evaluation Kits. \u3044\u305a\u308c\u306e\u5834\u5408\u3082\u3001\u305f\u3060\u3061\u306bUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u7740\u624b\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h3",h({},{id:"ui-templates"}),"Demos and Examples"),(0,n.kt)("p",null,"If you just want something to run or want to be inspired you can select one of the TouchGFX demos or examples which can be found when creating a new project in TouchGFX Designer. \u3053\u306e\u5834\u5408\u306b\u5fc5\u8981\u306a\u4f5c\u696d\u306f\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u3001\u66f8\u8fbc\u307f\u3001\u5b9f\u884c\u3060\u3051\u3067\u3059\u3002"),(0,n.kt)("h3",h({},{id:"custom-hardware-1"}),"\u30ab\u30b9\u30bf\u30e0\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2"),(0,n.kt)("p",null,"If you have already done all the other activities and thus have a running board ready for a TouchGFX Application you can either start from scratch or select one of the examples or demo. \u30ab\u30b9\u30bf\u30e0\uff65\u30dc\u30fc\u30c9\u3068\u30b5\u30f3\u30d7\u30eb\u306e\u89e3\u50cf\u5ea6\u304c\u540c\u3058\u3067\u3042\u308c\u3070\u3001\u30b5\u30f3\u30d7\u30eb\u306f\u30ab\u30b9\u30bf\u30e0\uff65\u30dc\u30fc\u30c9\u4e0a\u3067\u3082\u52d5\u4f5c\u3059\u308b\u306f\u305a\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u8a73\u7d30\u306f\u300c",(0,n.kt)("a",h({parentName:"p"},{href:"ui-development/ui-development-introduction"}),"UI\u306e\u958b\u767a"),"\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",h({},{id:"workflow"}),"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc"),(0,n.kt)("p",null,"\u898b\u3066\u306e\u3068\u304a\u308a\u3001TouchGFX\u306e\u958b\u767a\u306b\u306f\u3001\u591a\u304f\u306e\u4f5c\u696d\u3068\u30c4\u30fc\u30eb\u304c\u95a2\u4e0e\u3057\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u305d\u3046\u3057\u305f\u4f5c\u696d\u3092\u3059\u3079\u3066\u540c\u6642\u306b\u884c\u3046\u5fc5\u8981\u306f\u306a\u3044\u3053\u3068\u306b\u7559\u610f\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u5fc5\u305a\u3057\u3082UI\u958b\u767a\u7740\u624b\u307e\u3067\u306b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30dc\u30fc\u30c9\u3001\u30dc\u30fc\u30c9\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3001TouchGFX AL\u304c\u5fc5\u8981\u306b\u306a\u308b\u3068\u306f\u304b\u304e\u308a\u307e\u305b\u3093\u3002 \u3053\u308c\u3089\u306fSTM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u307e\u305f\u306fTouchGFX Simulator\u3067\u4ee3\u7528\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(r.Z,{imageSource:"/img/development/development-introduction/touchgfx-designer-workflow-4.17.svg",noShadow:!0,width:"700",mdxType:"Figure"},"TouchGFX Designer\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc"),(0,n.kt)("h3",h({},{id:"generated-code-and-user-code"}),"\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u3068\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,n.kt)("p",null,"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306b\u95a2\u3059\u308b3\u3064\u306e\u4f5c\u696d\u3001\u3064\u307e\u308a\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u3001TouchGFX AL\u306e\u958b\u767a\u3001UI\u306e\u958b\u767a\u306e\u305d\u308c\u305e\u308c\u3067\u306f\u3001\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30c4\u30fc\u30eb\u306b\u5171\u901a\u3059\u308b\u306e\u306f\u3001\u5fc5\u8981\u306a\u30b3\u30fc\u30c9\u306e\u3059\u3079\u3066\u304c\u751f\u6210\u3055\u308c\u308b\u308f\u3051\u3067\u306f\u306a\u3044\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u30e6\u30fc\u30b6\u304c\u4f5c\u6210\u3059\u308b\u30b3\u30fc\u30c9\u3082\u8ffd\u52a0\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u308c\u30893\u3064\u306e\u30c4\u30fc\u30eb\u3067\u306f\u3001\u30c4\u30fc\u30eb\u306e\u4f7f\u7528\u3068\u30b3\u30fc\u30c9\u4f5c\u6210\u306e\u9593\u3092\u81ea\u7531\u306b\u884c\u304d\u6765\u3067\u304d\u307e\u3059\u3002 \u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u3068\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u306f\u72ec\u7acb\u3057\u3066\u304a\u308a\u3001\u5225\u3005\u306b\u66f4\u65b0\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u4f5c\u696d\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u3067\u4f7f\u7528\u3059\u308b\u30c4\u30fc\u30eb\u304c\u5909\u308f\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002 \u305d\u3046\u3057\u305f\u72b6\u6cc1\u306f\u3001TouchGFX AL\u306e\u958b\u767a\u306b\u304a\u3044\u3066\u3057\u3070\u3057\u3070\u767a\u751f\u3057\u307e\u3059\u3002\u3053\u3053\u306b\u306f\u3001TouchGFX AL\u3092\u30c6\u30b9\u30c8\u3059\u308b\u305f\u3081\u306e\u3001\u3054\u304f\u5358\u7d14\u306aTouchGFX UI\u304c\u3042\u308a\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\u3053\u306e\u3088\u3046\u306b\u4f5c\u696d\u9593\u3092\u79fb\u52d5\u3057\u3066\u3082\u4f55\u306e\u554f\u984c\u3082\u751f\u3058\u307e\u305b\u3093\u3002\u30c4\u30fc\u30eb\u3001\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u3001\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u306f\u554f\u984c\u306a\u304f\u5171\u5b58\u3057\u3001\u66f4\u65b0\u3067\u304d\u308b\u304b\u3089\u3067\u3059\u3002"),(0,n.kt)("h3",h({},{id:"change-of-compileride"}),"\u30b3\u30f3\u30d1\u30a4\u30e9 / IDE\u306e\u5909\u66f4"),(0,n.kt)("p",null,"\u4f5c\u696d\u4e2d\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30dc\u30fc\u30c9\u5411\u3051\u306e\u30b3\u30fc\u30c9\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u5fc5\u8981\u304c\u751f\u3058\u307e\u3059\u3002 The compilers supported by TouchGFX are IAR, ARMCC, ARMCLANG and GCC(STM32CubeIDE). The toolchain selected for your TouchGFX project is configured in STM32CubeMX, so if you want to change it you should open the TouchGFX project .ioc file in STM32CubeMX and change the toolchain setting. When selecting an TouchGFX Board Setup (TBS) in TouchGFX Designer it will have one toolchain preselected, so you will only find a project file for one of the toolchains. AT\u306b\u306f.ioc\u30d5\u30a1\u30a4\u30eb\u3082\u4ed8\u5c5e\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u3001\u5fc5\u8981\u306b\u5408\u308f\u305b\u3066\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3\u306b\u5909\u66f4\u3067\u304d\u307e\u3059"))}T.isMDXComponent=!0}}]);