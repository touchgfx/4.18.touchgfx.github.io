"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5656],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},95097:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return b},default:function(){return y}});var r=n(3905),a=n(44035),o=n(22425),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&d(e,n,t[n]);return e};const h={id:"using-non-memory-mapped-flash",title:"\u753b\u50cf\u4fdd\u5b58\u306e\u305f\u3081\u306b\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u3092\u4f7f\u7528"},f=void 0,g={unversionedId:"development/scenarios/using-non-memory-mapped-flash",id:"development/scenarios/using-non-memory-mapped-flash",isDocsHomePage:!1,title:"\u753b\u50cf\u4fdd\u5b58\u306e\u305f\u3081\u306b\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u3092\u4f7f\u7528",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u5185\u306b\u914d\u7f6e\u53ef\u80fd\u306a\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a1\u30a4\u30eb\u306b\u3059\u3079\u3066\u306e\u753b\u50cf\u3092\u30ea\u30f3\u30af\u3055\u305b\u308b\u65b9\u6cd5\u3068\u3001\u5b9f\u884c\u6642\u306b\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u4e00\u7dd2\u306b\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 TouchGFX\u3067\u306f\u3001\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u63cf\u753b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u304c\u3001RAM\u5185\u306b\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u305d\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u5229\u7528\u53ef\u80fd\u306b\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/scenarios/using-non-memory-mapped-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-non-memory-mapped-flash",permalink:"/4.18/ja/docs/development/scenarios/using-non-memory-mapped-flash",tags:[],version:"current",frontMatter:{id:"using-non-memory-mapped-flash",title:"\u753b\u50cf\u4fdd\u5b58\u306e\u305f\u3081\u306b\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u3092\u4f7f\u7528"},sidebar:"docs",previous:{title:"\u30d1\u30fc\u30b7\u30e3\u30eb\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u3088\u308b\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u306e\u8efd\u6e1b",permalink:"/4.18/ja/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"},next:{title:"Using Serial Flash for images and fonts",permalink:"/4.18/ja/docs/development/scenarios/using-serial-flash"}},b=[{value:"Flash\u304b\u3089\u30ad\u30e3\u30c3\u30b7\u30e5\u3078\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30c7\u30fc\u30bf\u306e\u30b3\u30d4\u30fc",id:"copying-bitmap-data-from-flash-to-cache",children:[],level:3},{value:"Bitmap\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30c6\u30fc\u30d6\u30eb",id:"the-bitmapdatabase-table",children:[],level:2},{value:"\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5909\u66f4",id:"linker-script-modifications",children:[],level:2},{value:"BlockCopy\u95a2\u6570\u306e\u5909\u66f4",id:"modifying-the-blockcopy-function",children:[],level:2},{value:"\u753b\u50cf\u306eRAM\u3078\u306e\u30ea\u30f3\u30af",id:"linking-images-to-ram",children:[],level:2}],k={toc:b};function y(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),d),i(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u5185\u306b\u914d\u7f6e\u53ef\u80fd\u306a\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a1\u30a4\u30eb\u306b\u3059\u3079\u3066\u306e\u753b\u50cf\u3092\u30ea\u30f3\u30af\u3055\u305b\u308b\u65b9\u6cd5\u3068\u3001\u5b9f\u884c\u6642\u306b\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u4e00\u7dd2\u306b\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 TouchGFX\u3067\u306f\u3001\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u63cf\u753b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u304c\u3001RAM\u5185\u306b\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u305d\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u5229\u7528\u53ef\u80fd\u306b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u5168\u822c\u7684\u306a\u8aac\u660e\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",m({parentName:"p"},{href:"../ui-development/touchgfx-engine-features/caching-bitmaps"}),"Caching Bitmaps"),"\u306e\u8a18\u4e8b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30e6\u30fc\u30b6\u304c\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u8a2d\u5b9a\u6e08\u307f\u3067\u3042\u308a\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002 \u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9Flash\u306e\u4f8b\u3068\u3057\u3066\u306f\u3001USB\u30b9\u30c8\u30ec\u30fc\u30b8\u3084NAND Flash\u306a\u3069\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306e\u76ee\u7684\u306f\u3001\u753b\u50cf\u3092\u7279\u5b9a\u306e\u30a2\u30c9\u30ec\u30b9\u306b\u30ea\u30f3\u30af\u3057\u3001\u305d\u306e\u753b\u50cf\u3092\u30d5\u30a1\u30a4\u30eb\u306b\u30b3\u30d4\u30fc\u3057\u3066\u3001TouchGFX\u304c\u753b\u50cf\u3092\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30b3\u30d4\u30fc\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("h3",m({},{id:"copying-bitmap-data-from-flash-to-cache"}),"Flash\u304b\u3089\u30ad\u30e3\u30c3\u30b7\u30e5\u3078\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30c7\u30fc\u30bf\u306e\u30b3\u30d4\u30fc"),(0,r.kt)("p",null,"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3068\u304d\u306b\u306f\u3001TouchGFX\u304c\u30d4\u30af\u30bb\u30eb\u3092\u5143\u306e\u5834\u6240\u304b\u3089\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30b3\u30d4\u30fc\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u601d\u3044\u51fa\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30b3\u30d4\u30fc\u306f\u3001HAL\u30af\u30e9\u30b9\u304b\u3089\u6b21\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"HAL.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n")),(0,r.kt)("p",null,"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u901a\u5e38\u306e\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a\u53ef\u80fd\u306aFlash\uff08\u5185\u90e8Flash\u3084\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\u5916\u90e8Flash\u306a\u3069\uff09\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001TouchGFX\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u63d0\u4f9b\u3055\u308c\u308b\u901a\u5e38\u306eblockCopy\u95a2\u6570\u304c\u4f7f\u3048\u308b\u306e\u3067\u3001\u30e6\u30fc\u30b6\u306f\u4f55\u3082\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u4e00\u65b9\u3067\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a\u3067\u304d\u306a\u3044\u30b9\u30c8\u30ec\u30fc\u30b8\uff08\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u306a\u3069\uff09\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u901a\u5e38\u306e\u5b9f\u88c5\u3067\u306f\u4e0d\u5341\u5206\u306a\u306e\u3067\u3001\u7279\u5b9a\u306eFlash\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u8aad\u307f\u53d6\u308a\u3067\u304d\u308b\u3088\u3046\u66f4\u65b0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u7528\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3057\u304b\u3057\u307e\u305a\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u56fa\u5b9a\u30a2\u30c9\u30ec\u30b9\u306b\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",m({},{id:"the-bitmapdatabase-table"}),"Bitmap\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30c6\u30fc\u30d6\u30eb"),(0,r.kt)("p",null,"TouchGFX\u306e\u3059\u3079\u3066\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306f\u3001generated/images/src\u30d5\u30a9\u30eb\u30c0\u5185\u306e.cpp\u30d5\u30a1\u30a4\u30eb\u306b\u751f\u6210\u3055\u308c\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u30d0\u30a4\u30c8\u914d\u5217\u3068\u3057\u3066\u8868\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u914d\u5217\u306f\u3001\u4ed6\u306e\u3059\u3079\u3066\u306e\u30bd\u30fc\u30b9\uff65\u30b3\u30fc\u30c9\u3068\u540c\u69d8\u306bC++\u30b3\u30f3\u30d1\u30a4\u30e9\u306b\u3088\u3063\u3066\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ea\u30f3\u30af\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306b\u3001\u30dc\u30bf\u30f3\u3068\u56de\u8ee2\u3059\u308b\u30ed\u30b4\u3092\u793a\u3059\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\u306b\u3088\u308b\u3001\u7c21\u5358\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-non-memory-mapped-flash/screen-shot.png",mdxType:"Figure"},"\u30dc\u30bf\u30f3\u3068\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc"),(0,r.kt)("p",null,"\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001Button_Pressed\u3001Button_Released\u3001Logo\u3068\u3044\u30463\u3064\u306e\u753b\u50cf\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u30893\u3064\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306f.cpp\u30d5\u30a1\u30a4\u30eb\u306b\u5909\u63db\u3055\u308c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4e00\u90e8\u3068\u3057\u3066\u30ea\u30f3\u30af\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u753b\u50cf\u306f\u3001bitmap_database\u3068\u3044\u3046\u540d\u524d\u306e\u30c6\u30fc\u30d6\u30eb\u5185\u3067\u53c2\u7167\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306fBitmapDatabase.cpp\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u3042\u308a\u307e\u3059\u3002 \u4e0a\u306e\u4f8b\u306b\u3088\u308b\u30c6\u30fc\u30d6\u30eb\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\uff08\u8a73\u7d30\u306e\u4e00\u90e8\u306f\u524a\u9664\u3055\u308c\u3066\u3044\u307e\u3059\uff09\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"BitmapDatabase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"extern const unsigned char _blue_buttons_round_edge_small[];\nextern const unsigned char _blue_buttons_round_edge_small_pressed[];\nextern const unsigned char _blue_logo_touchgfx_logo[];\n\nconst touchgfx::Bitmap::BitmapData bitmap_database[] =\n{\n    { _blue_buttons_round_edge_small, ... },\n    { _blue_buttons_round_edge_small_pressed, ... },\n    { _blue_logo_touchgfx_logo, ... }\n};\n\n")),(0,r.kt)("p",null,"\u6700\u521d\u306b\u5ba3\u8a00\u3055\u308c\u305f\u914d\u5217\u306f\u3001\u500b\u3005\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u30d4\u30af\u30bb\u30eb\u3092\u542b\u3080\u914d\u5217\u3067\u3059\u3002 \u3053\u308c\u3089\u306e\u914d\u5217\u306f\u4ed6\u306e.cpp\u30d5\u30a1\u30a4\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u914d\u5217\u306e\u30a2\u30c9\u30ec\u30b9\u306f\u3001bitmap_database\u914d\u5217\u306b\u4fdd\u6301\u3055\u308c\u3066\u3044\u307e\u3059\u3002 TouchGFX\u306f\u3053\u306e\u914d\u5217\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u30d4\u30af\u30bb\u30eb\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u898b\u3064\u3051\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d7\u30ed\u30b0\u30e9\u30de\u304c\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3088\u3046\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b\u3068\u3001TouchGFX\u304cFlash\u5185\uff08bitmap_database\u914d\u5217\u306e\u4e2d\uff09\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u898b\u3064\u3051\u3001\u3053\u3053\u304b\u3089\u30c7\u30fc\u30bf\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",m({},{id:"linker-script-modifications"}),"\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5909\u66f4"),(0,r.kt)("p",null,"\u30ea\u30f3\u30ab\u306f\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u8a2d\u5b9a\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u304c\u914d\u7f6e\u3055\u308c\u308b\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u30d9\u30fc\u30b9\u306b\u3057\u307e\u3059\u3002 TouchGFX\u306e\u3059\u3079\u3066\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067",(0,r.kt)("strong",{parentName:"p"},"ExtFlashSection"),"\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6a19\u6e96\u306e\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\uff08\u3053\u3053\u3067\u306fGCC\u7528\uff09\u306f\u3001\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u4ed6\u306e\u8aad\u307f\u53d6\u308a\u5c02\u7528\u30c7\u30fc\u30bf\u3068\u4e00\u7dd2\u306bFlash\u5185\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001\u30a2\u30c9\u30ec\u30b9\u304c",(0,r.kt)("strong",{parentName:"p"},"0x24000000"),"\u306eExtFlashSection\u306b\u753b\u50cf\u30c7\u30fc\u30bf\u3092\u914d\u7f6e\u3057\u307e\u3059\u3002 \u4ed6\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u306a\u3044\uff08\u30b3\u30fc\u30c9\u307e\u305f\u306f\u30c7\u30fc\u30bf\u306e\u30a2\u30c9\u30ec\u30b9\u7a7a\u9593\u306e\u4e00\u90e8\u3067\u306a\u3044\uff09\u4efb\u610f\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305a\u3001\u901a\u5e38\u306e\u5185\u90e8Flash\u3068RAM\u306e\u9818\u57df\u306b\u52a0\u3048\u3066\u3001\u65b0\u3057\u3044\u30e1\u30e2\u30ea\u9818\u57df\uff08\u30a2\u30c9\u30ec\u30b9\u304c0x24000000\u306eUSB Flash\uff09\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K\n  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K\n  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M\n}\n")),(0,r.kt)("p",null,"\u6b21\u306b\u3001\u3053\u306eUSB\u9818\u57df\u306bExtFlashSection\u3092\u914d\u7f6e\u3059\u308b\u3088\u3046\u30ea\u30f3\u30ab\u306b\u547d\u4ee4\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"ExtFlashSection :\n{\n   *(ExtFlashSection ExtFlashSection.*)\n} >USB\n")),(0,r.kt)("p",null,"\u30ea\u30f3\u30af\u5f8c\u306b\u3001\u30de\u30c3\u30d7\uff65\u30d5\u30a1\u30a4\u30eb\uff08application.map\uff09\u3092\u8abf\u3079\u308b\u3053\u3068\u3067\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002 \u95a2\u9023\u3059\u308b\u90e8\u5206\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"application.map"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"ExtFlashSection\n                0x24000000    0x23ec0\n *(ExtFlashSection ExtFlashSection.*)\n ExtFlashSection\n                0x24000000    0x10000 TouchGFX/build/.../Blue_Logo_touchgfx_logo.o\n                0x24000000                _blue_logo_touchgfx_logo\n ExtFlashSection\n                0x24010000     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small.o\n                0x24010000                _blue_buttons_round_edge_small\n ExtFlashSection\n                0x24019f60     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small_pressed.o\n                0x24019f60                _blue_buttons_round_edge_small_pressed\n")),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u753b\u50cf\u306e\u5408\u8a08\u30b5\u30a4\u30ba\u304c0x23ec0 = 147,136\u30d0\u30a4\u30c8\u3067\u3042\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002 \u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4fdd\u6301\u3059\u308b3\u3064\u306e\u914d\u5217\u306f\u3001\u30a2\u30c9\u30ec\u30b90x24000000\u304b\u3089\u30b7\u30fc\u30b1\u30f3\u30b7\u30e3\u30eb\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3067\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30c7\u30fc\u30bf\u3092SD\u30ab\u30fc\u30c9\u306b\u79fb\u3057\u305f\u3044\u5834\u5408\u3092\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046\u3002 \u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u30d0\u30a4\u30ca\u30ea\uff65\u30c7\u30fc\u30bf\u306f\u3001\u5358\u7d14\u306aobjcopy\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066.elf\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u62bd\u51fa\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf\n$ ls -l images.bin\n-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin\n")),(0,r.kt)("p",null,"\u3053\u308c\u306b\u3088\u308a\u3001\u753b\u50cf\u306e\u30d0\u30a4\u30c8\u914d\u5217\u306e\u307f\u3092\u542b\u3080\u30d5\u30a1\u30a4\u30eb\uff08images.bin\uff09\u3092\u5165\u624b\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306fUSB Flash\u307e\u305f\u306fSD\u30ab\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u305f\u308a\u3001Flash\u30c1\u30c3\u30d7\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u884c\u3044\u305f\u3044\u4e8b\u306f\u3001TouchGFX\u304c\u4e0a\u8a18\u306e\u30a2\u30c9\u30ec\u30b90x24000000\u306e\u30c7\u30fc\u30bf\u3092\u6c42\u3081\u305f\u3068\u304d\u306b\u3001SD\u30ab\u30fc\u30c9\u4e0a\u306eimages.bin\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u51fa\u3059\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("h2",m({},{id:"modifying-the-blockcopy-function"}),"BlockCopy\u95a2\u6570\u306e\u5909\u66f4"),(0,r.kt)("p",null,"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092RAM\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u305f\u3068\u304d\u3001TouchGFX\u306fHAL::BlockCopy\u3092\u547c\u3073\u51fa\u3057\u3066\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u3092\u601d\u3044\u51fa\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3092SD\u30ab\u30fc\u30c9\u4e0a\u306e\u30c7\u30fc\u30bf\u306b\u30ea\u30f3\u30af\u3055\u305b\u308b\u305f\u3081\u306b\u3001\u7279\u5b9a\u306eHAL\u30af\u30e9\u30b9\u306b\u65b0\u3057\u3044BlockCopy\u3092\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u3001\u3053\u306e\u30af\u30e9\u30b9\u306e\u540d\u524d\u3092TouchGFXHAL\uff08TouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u305f\u3081\uff09\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXHal.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"class TouchGFXHAL : public TouchGFXGeneratedHAL\n{\npublic:\n    ...\n    virtual bool blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n}\n")),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXHal.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"// This function is called whenever a bitmap is cached. Must copy a number of bytes from the (non-memory-mapped) source\n// to the cache.\nbool TouchGFXHAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes)\n{\n  // If requested data is located within the memory block we have assigned for ExtFlashSection,\n  // provide an implementation for data copying.\n  if (src >= 0x24000000 && src < 0x24100000)\n  {\n    void* dataOffset = src - 0x24000000;\n    // In this example we assume graphics is placed in SD card, and that we have an appropriate function\n    // for copying data from there.\n    sdcard_read(dest, dataOffset, numBytes);\n    return true;\n  }\n  else\n  {\n    // For all other addresses, just use the default implementation.\n    // This is important, as blockCopy is also used for other things in the core framework.\n    return HAL::blockCopy(dest, src, numBytes);\n  }\n}\n")),(0,r.kt)("p",null,"\u3053\u308c\u3067\u3001SD\u30ab\u30fc\u30c9\u304b\u3089\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"TouchGFX\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u3066\u3044\u306a\u3044\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u63cf\u753b\u3057\u3088\u3046\u3068\u3059\u308b\u5834\u5408\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"bitmap_database"),"\u30c6\u30fc\u30d6\u30eb\u3067\u898b\u3064\u304b\u3063\u305f\u30a2\u30c9\u30ec\u30b9\u304b\u3089\u30d4\u30af\u30bb\u30eb\u3092\u8aad\u307f\u53d6\u308d\u3046\u3068\u3057\u307e\u3059\u3002 \u3053\u306e\u30a2\u30c9\u30ec\u30b9\u306f\u30010x24000000\uff5e0x24100000\u306e\u7bc4\u56f2\u5185\u306b\u306a\u308b\u306e\u3067\u3001\u8aad\u307f\u53d6\u308a\u306b\u3088\u3063\u3066\u4f8b\u5916\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",m({},{id:"linking-images-to-ram"}),"\u753b\u50cf\u306eRAM\u3078\u306e\u30ea\u30f3\u30af"),(0,r.kt)("p",null,"\u3059\u3079\u3066\u306e\u753b\u50cf\u3092\u4fdd\u6301\u3067\u304d\u308b\u5341\u5206\u306a\u91cf\u306eRAM\uff08\u4e0a\u306e\u4f8b\u3067\u306f147,136\u30d0\u30a4\u30c8\u8d85\uff09\u304c\u4f7f\u7528\u53ef\u80fd\u306a\u5834\u5408\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3057\u3066\u753b\u50cf\u3092\u30b3\u30d4\u30fc\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u5834\u5408\u306e\u65b9\u7b56\u306f\u3001\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u753b\u50cf\u7528\u306e\u56fa\u5b9a\u30a2\u30c9\u30ec\u30b9\u3068RAM\u306e\u7bc4\u56f2\u3092\u9078\u629e\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u3067RAM\u9818\u57df\u304b\u3089\u305d\u306e\u7bc4\u56f2\u3092\u524a\u9664\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u9078\u629e\u3057\u305f\u30a2\u30c9\u30ec\u30b9\u3068\u30b5\u30a4\u30ba\u3067\u3001\u65b0\u3057\u3044\u9818\u57dfIMAGES\u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"IMAGES\u9818\u57df\u306bExtFlashSection\u3092\u914d\u7f6e\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30ea\u30f3\u30af\u3057\u3001.map\u30d5\u30a1\u30a4\u30eb\u3092\u78ba\u8a8d\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"application.elf\u304b\u3089images.bin\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"TouchGFX\u3092\u958b\u59cb\u3059\u308b\u524d\u306b\u3001images.bin\u30d5\u30a1\u30a4\u30eb\u5168\u4f53\u3092SD\u30ab\u30fc\u30c9\u304b\u3089RAM\u5185\u306e\u9078\u629e\u3055\u308c\u305f\u30a2\u30c9\u30ec\u30b9\u306b\u30b3\u30d4\u30fc\u3059\u308b")),(0,r.kt)("p",null,"\u3053\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306f\u30b7\u30f3\u30d7\u30eb\u3067\u3059\u304c\u3001\u3044\u304f\u3064\u304b\u6b20\u70b9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u3059\u3079\u3066\u306e\u753b\u50cf\u3092\u4fdd\u6301\u3067\u304d\u308b\u5341\u5206\u306a\u91cf\u306eRAM\u304c\u4f7f\u7528\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068"),(0,r.kt)("li",{parentName:"ul"},"SD\u30ab\u30fc\u30c9\u304b\u3089\u306e\u30b3\u30d4\u30fc\u306a\u306e\u3067\u8d77\u52d5\u306b\u6642\u9593\u304c\u304b\u304b\u308b\uff08\u6570MB\u306b\u6570\u79d2\u304b\u304b\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\uff09")))}y.isMDXComponent=!0}}]);