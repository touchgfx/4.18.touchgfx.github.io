(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5510],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(i,".").concat(f)]||d[f]||m[f]||l;return n?r.createElement(h,o(o({ref:e},p),{},{components:n})):r.createElement(h,o({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(t,e,n){"use strict";var r=n(67294),a=n(25026);e.Z=function(t){const e=t.noShadow||!1,n=t.width,l=t.height,o=(0,a.Z)(t.imageSource);return e?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,t.children))}},35096:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return o}});var r=n(11368),a=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const o=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+o:o}(e,t,n,r)}}function o(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},72478:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return f},contentTitle:function(){return h},metadata:function(){return s},toc:function(){return g},default:function(){return b}});var r=n(3905),a=n(44035),l=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))c.call(e,n)&&m(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&m(t,n,e[n]);return t};const f={id:"touchgfx-al-development-introduction",title:"TouchGFX AL\uff08\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\uff09\u958b\u767a\u306e\u6982\u8981"},h=void 0,s={unversionedId:"development/touchgfx-hal-development/touchgfx-al-development-introduction",id:"development/touchgfx-hal-development/touchgfx-al-development-introduction",isDocsHomePage:!1,title:"TouchGFX AL\uff08\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\uff09\u958b\u767a\u306e\u6982\u8981",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u696d",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-al-development-introduction.mdx",sourceDirName:"development/touchgfx-hal-development",slug:"/development/touchgfx-hal-development/touchgfx-al-development-introduction",permalink:"/4.18/ja/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",tags:[],version:"current",frontMatter:{id:"touchgfx-al-development-introduction",title:"TouchGFX AL\uff08\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\uff09\u958b\u767a\u306e\u6982\u8981"},sidebar:"docs",previous:{title:"11. Flash\u30ed\u30fc\u30c0",permalink:"/4.18/ja/docs/development/board-bring-up/how-to/11-flash-loader"},next:{title:"\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\uff65\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",permalink:"/4.18/ja/docs/development/touchgfx-hal-development/touchgfx-architecture"}},g=[{value:"\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\u306e\u5f79\u5272",id:"responsibilities-of-the-abstraction-layer",children:[],level:2},{value:"\u8a2d\u5b9a\u4f8b: 2\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1 - LTDC\u4ed8\u304d\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9",id:"example-setup-two-framebuffers---mcu-with-ltdc",children:[],level:2}],k={toc:g};function b(t){var e,n=t,{components:l}=n,m=((t,e)=>{var n={};for(var r in t)c.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=d(d({},k),m),o(e,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/activities-selected-002.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u696d"),(0,r.kt)("p",null,"TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306eTouchGFX\u62bd\u8c61\u5316\u30ec\u30a4\u30e4(AL) \u306f\u3001\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u30d5\u30a7\u30fc\u30ba\u3067\u958b\u767a\u3055\u308c\u308b\u30dc\u30fc\u30c9\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3068TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u9593\u306b\u5b58\u5728\u3059\u308b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002 \u4e3b\u306a\u30bf\u30b9\u30af\u306f\u3001\u30a8\u30f3\u30b8\u30f3\u3068\u57fa\u76e4\u3068\u306a\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u304a\u3088\u3073\u30aa\u30da\u30ec\u30fc\u30b7\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u3092\u3064\u306a\u304e\u5408\u308f\u305b\u308b\u3053\u3068\u3067\u3059\u3002 \u3053\u306e\u305f\u3081\u306b\u306f\u3001\u57fa\u76e4\u3068\u306a\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3068OS\u306e\u8a73\u7d30\u4ed5\u69d8\u3092\u62bd\u8c61\u5316\u3057\u3001\u30a8\u30f3\u30b8\u30f3\u304c\u7d71\u4e00\u3055\u308c\u305f\u65b9\u6cd5\u3067\u51e6\u7406\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"AL(\u62bd\u8c61\u5316\u30ec\u30a4\u30e4) \u306f\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u62bd\u8c61\u5316\u30ec\u30a4\u30e4(HAL) \u3068\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u62bd\u8c61\u5316\u30ec\u30a4\u30e4(OSAL) \u3068\u3044\u30462\u3064\u306e\u7570\u306a\u308b\u90e8\u5206\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/components-selected-002.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\u306e\u539f\u7406\u3084\u5f79\u5272\u3068\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u6982\u7565\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002 \u7279\u5b9a\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306b\u5bfe\u3057\u3066\u3053\u308c\u3092\u5b9f\u73fe\u3059\u308b\u65b9\u6cd5\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u964d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u300c",(0,r.kt)("a",d({parentName:"li"},{href:"touchgfx-architecture"}),"\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\uff65\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"),"\u300d\u3067\u306f\u3001AL\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u3068AL\u306e\u9593\u306b\u5404\u3005\u306e\u76f8\u4e92\u4f5c\u7528\u30dd\u30a4\u30f3\u30c8\uff08\u30d5\u30c3\u30af\u3068\u547c\u3073\u307e\u3059\uff09\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u300c",(0,r.kt)("a",d({parentName:"li"},{href:"touchgfx-generator"}),"Generator\u30e6\u30fc\u30b6\uff65\u30ac\u30a4\u30c9"),"\u300d\u3067\u306f\u3001TouchGFX Generator\u3092\u4f7f\u7528\u3057\u3066AL\u5b9f\u88c5\u306e\u57fa\u790e\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3001\u3055\u3089\u306b\u8907\u96d1\u306a\u554f\u984c\u306b\u3064\u3044\u3066\u3082\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u300c",(0,r.kt)("a",d({parentName:"li"},{href:"scenarios/scenarios-ltdc-parallel-rgb"}),"\u30b7\u30ca\u30ea\u30aa"),"\u300d\u3067\u306f\u3001\u7279\u5b9a\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u8a2d\u5b9a\u3067AL\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u5177\u4f53\u4f8b\u3092\u6319\u3052\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002")),(0,r.kt)("h2",d({},{id:"responsibilities-of-the-abstraction-layer"}),"\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\u306e\u5f79\u5272"),(0,r.kt)("p",null,"\u300c\u57fa\u672c\u6982\u5ff5\u300d\u306e\u7ae0\u306e\u300c",(0,r.kt)("a",d({parentName:"p"},{href:"../../basic-concepts/rendering"}),"\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8aac\u660e\u3057\u305f\u3088\u3046\u306b\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306b\u306f\u3001\u4ee5\u4e0b\u306e3\u3064\u306e\u57fa\u672c\u30b9\u30c6\u30c3\u30d7\u3092\u5b9f\u884c\u3059\u308b\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5165\u529b\u306e\u53ce\u96c6(\u30bf\u30c3\u30c1\u5ea7\u6a19\u3001\u30dc\u30bf\u30f3)"),(0,r.kt)("li",{parentName:"ol"},"\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306e\u66f4\u65b0"),(0,r.kt)("li",{parentName:"ol"},"\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0")),(0,r.kt)("p",null,"\u3053\u306e3\u3064\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u3088\u3063\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u73fe\u5728\u306e\u72b6\u614b\u3092\u53cd\u6620\u3059\u308b\u3088\u3046\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u66f4\u65b0\u3059\u308b\u3068\u3044\u3046TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u4e3b\u306a\u5f79\u5272\u304c\u679c\u305f\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30c7\u30fc\u30bf\u306e\u5b9f\u969b\u306e\u8ee2\u9001\u3084\u5916\u90e8\u5165\u529b\u306e\u53ce\u96c6\u306f\u3001\u30a8\u30f3\u30b8\u30f3\u306b\u3088\u3063\u3066\u76f4\u63a5\u51e6\u7406\u3055\u308c\u308b\u308f\u3051\u3067\u306f\u306a\u304f\u3001\u30a8\u30f3\u30b8\u30f3\u304b\u3089TouchGFX AL\u306b\u59d4\u8b72\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3092\u7e70\u308a\u8fd4\u3057\u66f4\u65b0\u3057\u307e\u3059\u3002 \u3059\u3079\u3066\u306e\u30d5\u30ec\u30fc\u30e0\u304c\u8ee2\u9001\u3055\u308c\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u6b63\u3057\u304f\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u306b\u306f\u3001\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u5b9f\u969b\u306e\u66f4\u65b0\u983b\u5ea6\u304a\u3088\u3073\u30ec\u30c7\u30a3\u72b6\u614b\u3068\u540c\u671f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u540c\u671f\u304c\u884c\u308f\u308c\u306a\u3044\u5834\u5408\u3001\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306f\u66f4\u65b0\u3092\u7e70\u308a\u8fd4\u3059\u306e\u3067\u3001\u8ee2\u9001\u3055\u308c\u308b\u524d\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u4e0a\u66f8\u304d\u3055\u308c\u3066\u3057\u307e\u3046\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u540c\u671f\u3092\u884c\u3046\u306e\u306fAL\u306e\u5f79\u5272\u3067\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX AL\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea\u9818\u57df\u3068\u305d\u306e\u30e1\u30e2\u30ea\u9818\u57df\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u5fa1\u3059\u308b\u5f79\u5272\u3082\u62c5\u3063\u3066\u3044\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u3059\u3079\u3066\u306e\u30a2\u30af\u30bb\u30b9\u306fAL\u3092\u4ecb\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX AL\u306e\u5f79\u5272\u3092\u8a73\u3057\u304f\u8aac\u660e\u3059\u308b\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u5f79\u5272"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3068\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u8ee2\u9001\u306e\u540c\u671f"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u6b21\u306e\u30d5\u30ec\u30fc\u30e0\u304c\u8a08\u7b97\u3055\u308c\u3001\u4f7f\u7528\u53ef\u80fd\u306a\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u6642\u70b9\u3067\u3001\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3092\u505c\u6b62\u3057\u3066\u3001\u65b0\u305f\u306b\u30a2\u30bb\u30f3\u30d6\u30eb\u3055\u308c\u305f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3055\u308c\u308b\u524d\u306b\u4e0a\u66f8\u304d\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30bf\u30c3\u30c1\u304a\u3088\u3073\u7269\u7406\u30dc\u30bf\u30f3\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u30ec\u30dd\u30fc\u30c8"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30bf\u30c3\u30c1\uff65\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u305f\u304b\u3069\u3046\u304b\u3068\u3001\u305d\u306e\u5ea7\u6a19\u3092\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002 \u7269\u7406\u30dc\u30bf\u30f3\u3084\u305d\u308c\u306b\u985e\u4f3c\u3059\u308b\u3082\u306e\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u5316\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u30a8\u30f3\u30b8\u30f3\u306b\u30ec\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002 ",(0,r.kt)("br",null),"\u305d\u306e\u4ed6\u306e\u5916\u90e8\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u5225\u306e\u30e1\u30ab\u30cb\u30ba\u30e0\u3092\u901a\u3057\u3066TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4f1d\u64ad\u3055\u308c\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",d({parentName:"td"},{href:"../ui-development/touchgfx-engine-features/backend-communication"}),"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u901a\u4fe1\u306b\u95a2\u3059\u308b\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306e\u540c\u671f"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea\u306fTouchGFX AL\u306e\u62c5\u5f53\u7bc4\u56f2\u3067\u3042\u308a\u3001\u3053\u3053\u306b\u306f\u3055\u307e\u3056\u307e\u306a\u30a2\u30af\u30bf\u30fc(\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\uff65\u30b9\u30ec\u30c3\u30c9\u3084DMA\u306a\u3069) \u304c\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u306e\u3067\u3001TouchGFX AL\u306f\u3053\u306e\u30e1\u30e2\u30ea\u3092\u4fdd\u8b77\u3059\u308b\u65b9\u6cd5\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u6b21\u306b\u4f7f\u7528\u53ef\u80fd\u306a\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u9818\u57df\u306e\u30ec\u30dd\u30fc\u30c8"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"AL\u306f\u3001\u6b21\u306b\u66f4\u65b0\u53ef\u80fd\u306a\u306e\u306f\u73fe\u5728\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u3069\u306e\u90e8\u5206\u306a\u306e\u304b\u3092\u56de\u7b54\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u6a19\u6e96\u306e2\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a\u3067\u306f\u3001\u5e38\u306b1\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5168\u4f53\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u5c02\u7528\u306b\u306a\u308a\u3001\u3082\u30461\u3064\u304c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u306e\u8ee2\u9001\u7528\u306b\u306a\u308b\u305f\u3081\u3001\u3053\u308c\u306f\u5e38\u306b\u5b8c\u5168\u306a\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u306a\u308a\u307e\u3059\u3002 1\u3064\u307e\u305f\u306f\u90e8\u5206\u7684\u306a\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a\u3067\u306f\u3001\u3082\u3063\u3068\u8907\u96d1\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u64cd\u4f5c\u306e\u5b9f\u884c"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30b7\u30fc\u30f3\uff65\u30e2\u30c7\u30eb\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u306b\u3001\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306fAL\u306b\u90e8\u5206\u7684\u306a\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u884c\u3046\u3088\u3046\u306b\u8981\u6c42\u3057\u307e\u3059\u3002 \u7279\u5b9a\u306eTouchGFX AL\u5b9f\u88c5\u3067\u306f\u3001\u57fa\u76e4\u3068\u306a\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3092\u5229\u7528\u3057\u3066\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u884c\u3044\u307e\u3059\u3002 \u4e00\u4f8b\u3068\u3057\u3066\u306f\u3001Chrom-ART\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf\u306b\u3088\u308b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u4e0a\u3067\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u3002 TouchGFX\u306b\u306f\u3001\u3059\u3079\u3066\u306e\u4f7f\u7528\u53ef\u80fd\u306a\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5bfe\u3057\u3066\u6700\u9069\u5316\u3055\u308c\u305f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u624b\u6cd5\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306e\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001\u51e6\u7406"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30a8\u30f3\u30b8\u30f3\u306fAL\u306b\u3001\u8ee2\u9001\u306e\u5fc5\u8981\u304c\u3042\u308b\u306e\u306f\u3069\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u3069\u306e\u90e8\u5206\u306a\u306e\u304b\u3092\u901a\u77e5\u3057\u307e\u3059\u3002 AL\u306f\u3053\u306e\u8ee2\u9001\u3092\u958b\u59cb\u3057\u3066\u3001\u6700\u7d42\u7684\u306b\u306f\u30d4\u30af\u30bb\u30eb\u3092\u7269\u7406\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u4e0a\u306b\u8868\u793a\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")))),(0,r.kt)("p",null,"TouchGFX AL\u306f\u30d1\u30c3\u30b7\u30d6\u306a\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u3001\u72ec\u81ea\u306e\u30b9\u30ec\u30c3\u30c9\u3084\u305d\u308c\u306b\u985e\u4f3c\u3059\u308b\u3082\u306e\u3092\u6301\u305f\u306a\u3044\u305f\u3081\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u304b\u3089\u547c\u3073\u51fa\u3055\u308c\u305f\u7279\u5b9a\u306e\u30d5\u30c3\u30af(\u6a5f\u80fd) \u307e\u305f\u306f\u5272\u8fbc\u307f\u3092\u4ecb\u3057\u3066\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u53ef\u80fd\u306a\u4e00\u9023\u306e\u30d5\u30c3\u30af\u3068\u5272\u8fbc\u307f\u3092\u4ee5\u4e0b\u306e\u56f3\u306b\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-hooks-00.png",noShadow:!0,mdxType:"Figure"},"\u4f7f\u7528\u53ef\u80fd\u306a\u30d5\u30c3\u30af\u3068\u5272\u8fbc\u307f"),(0,r.kt)("p",null,"\u57fa\u76e4\u3068\u306a\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u304a\u3088\u3073\u30aa\u30da\u30ec\u30fc\u30b7\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u304c\u4e0e\u3048\u3089\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u3001AL\u306e\u5f79\u5272\u304c\u679c\u305f\u3055\u308c\u308b\u3088\u3046\u306b\u3053\u308c\u3089\u306e\u30d5\u30c3\u30af\u3092\u5b9f\u88c5\u3059\u308b\u304b\u3069\u3046\u304b\u306f\u3001AL\u958b\u767a\u8005\u306e\u5224\u65ad\u306b\u59d4\u306d\u3089\u308c\u307e\u3059\u3002 \u5f79\u5272\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306bAL\u958b\u767a\u8005\u304c\u4ed6\u306e\u624b\u6bb5\u3092\u5fc5\u8981\u3068\u3059\u308b\u5834\u5408\u3001\u958b\u767a\u8005\u306f\u7279\u5b9a\u306e\u30dd\u30a4\u30f3\u30c8\u3067\u30a2\u30af\u30c6\u30a3\u30d6\u5316\u3059\u308b\u3088\u3046\u306b\u5272\u8fbc\u307f\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3068\u3057\u3066\u306f\u3001LTDC\u5782\u76f4\u540c\u671f\u5272\u8fbc\u307f\u3084\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30bf\u30a4\u30de\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u3002 ",(0,r.kt)("em",{parentName:"p"},"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30ec\u30c7\u30a3"),"\u5272\u8fbc\u307f\u306f\u3001\u5782\u76f4\u540c\u671f\u5272\u8fbc\u307f\u306e\u4f8b\u3067\u3059\u3002 \u3053\u308c\u3089\u306e\u5272\u8fbc\u307f\u306e\u8a2d\u5b9a\u306f\u3001AL\u958b\u767a\u306e\u4e00\u90e8\u3068\u898b\u306a\u3055\u308c\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",d({},{id:"example-setup-two-framebuffers---mcu-with-ltdc"}),"\u8a2d\u5b9a\u4f8b: 2\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1 - LTDC\u4ed8\u304d\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9"),(0,r.kt)("p",null,"\u4e00\u822c\u7684\u306a\u8a2d\u5b9a\u306e\u4e00\u3064\u306f\u30012\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3068LTDC\u4ed8\u304d\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u3088\u308b\u3082\u306e\u3067\u3059\u3002 \u5404\u30d5\u30c3\u30af\u306eAL\u30a2\u30af\u30b7\u30e7\u30f3\u306f\u3001\u3053\u306e\u8a2d\u5b9a\u3067\u306f\u4e3b\u306b\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"LTDC VSYNC\u5272\u8fbc\u307f\u306b\u53cd\u5fdc\u3059\u308b\u3088\u3046\u306bAL\u3092\u8a2d\u5b9a\u3057\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u304c\u65b0\u3057\u3044\u30d5\u30ec\u30fc\u30e0\u3092\u53d7\u4fe1\u3059\u308b\u6e96\u5099\u304c\u3067\u304d\u308b\u305f\u3073\u306bI1\u304c\u5b9f\u884c\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002 \u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3068\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3092\u540c\u671f\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u30d5\u30c3\u30af\u3068\u5272\u8fbc\u307f"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u30a2\u30af\u30b7\u30e7\u30f3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"I1: \u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30ec\u30c7\u30a3"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u3053\u308c\u3092\u30c8\u30ea\u30ac\u3059\u308b\u306b\u306f\u3001LTDC VSYNC\u5272\u8fbc\u307f\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3092\u30d6\u30ed\u30c3\u30af\u89e3\u9664\u3057\u3001\u524d\u306e\u30d5\u30ec\u30fc\u30e0\u3067\u6e96\u5099\u3055\u308c\u305f\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8ee2\u9001\u3092\u958b\u59cb\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"H1: \u30bf\u30c3\u30c1\u304a\u3088\u3073\u7269\u7406\u30dc\u30bf\u30f3\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u30ec\u30dd\u30fc\u30c8"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30bf\u30c3\u30c1\uff65\u30a4\u30d9\u30f3\u30c8\u307e\u305f\u306f\u7269\u7406\u30dc\u30bf\u30f3\u306e\u30af\u30ea\u30c3\u30af\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u8fd4\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"H2: \u6b21\u306b\u4f7f\u7528\u53ef\u80fd\u306a\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u9818\u57df\u306e\u53d6\u5f97"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30c0\u30d6\u30eb\uff65\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a\u3092\u4f7f\u7528\u3057\u3066\u3001\u5358\u306b\u3001\u73fe\u5728\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3055\u308c\u3066\u3044\u306a\u3044\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5168\u9818\u57df\u3092\u8fd4\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"H3: \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u64cd\u4f5c\u306e\u5b9f\u884c"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u6a5f\u80fd\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002 \u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u652f\u63f4\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u64cd\u4f5c\u3068\u305d\u308c\u4ee5\u5916\u306b\u5bfe\u3059\u308b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff65\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"H4: \u9818\u57df\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306e\u5b8c\u4e86"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30a2\u30af\u30b7\u30e7\u30f3\u306a\u3057")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"H5: \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u7d42\u4e86"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u3092\u30d6\u30ed\u30c3\u30af\u3057\u307e\u3059\u3002")))),(0,r.kt)("p",null,"\u3053\u306e\u8a2d\u5b9a\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5b9f\u884c\u30d5\u30ed\u30fc\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-actions-00.png",noShadow:!0,mdxType:"Figure"},"2\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3068LTDC\u4ed8\u304d\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u3088\u308b\u8a2d\u5b9a\u306e\u5b9f\u884c\u30d5\u30ed\u30fc"),(0,r.kt)("p",null,"\u3053\u308c\u306f\u3001\u3053\u306e\u8a2d\u5b9a\u306eAL\u306e\u5168\u4f53\u8a2d\u8a08\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u4ee5\u964d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\u306e\u5b9f\u88c5\u65b9\u6cd5\u306b\u8a73\u3057\u304f\u8e0f\u307f\u8fbc\u3093\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"))}b.isMDXComponent=!0}}]);