(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3182],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,m=p["".concat(a,".").concat(h)]||p[h]||f[h]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=p;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44035:function(e,t,r){"use strict";var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,c=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:c,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:c,src:i})),n.createElement("p",null,e.children))}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return c},Z:function(){return i}});var n=r(11368),o=r(35096);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=c();return r(e,t)}},54245:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return h},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return g},default:function(){return y}});var n=r(3905),o=r(44035),c=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&f(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&f(e,r,t[r]);return e};const h={id:"what-is-touchgfx",title:"TouchGFX\u3068\u306f"},m=void 0,d={unversionedId:"introduction/what-is-touchgfx",id:"introduction/what-is-touchgfx",isDocsHomePage:!1,title:"TouchGFX\u3068\u306f",description:"TouchGFX\u306f\u30011\u3064\u306eX-Cube\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3042\u308bX-Cube-TouchGFX\u3068\u3057\u3066\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/introduction/what-is-touchgfx.mdx",sourceDirName:"introduction",slug:"/introduction/what-is-touchgfx",permalink:"/4.18/ja/docs/introduction/what-is-touchgfx",tags:[],version:"current",frontMatter:{id:"what-is-touchgfx",title:"TouchGFX\u3068\u306f"},sidebar:"docs",previous:{title:"Welcome",permalink:"/4.18/ja/docs/introduction/welcome"},next:{title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/4.18/ja/docs/introduction/installation"}},g=[],b={toc:g};function y(e){var t,r=e,{components:c}=r,f=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),f),i(t,u({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX\u306f\u30011\u3064\u306eX-Cube\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3042\u308b",(0,n.kt)("em",{parentName:"p"},"X-Cube-TouchGFX\u3068\u3057\u3066\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("p",null,"\u3053\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u306f\u3001STM32\u30d9\u30fc\u30b9\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306eGUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b8c\u5168\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u3059\u3079\u3066\u306e\u3082\u306e\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 TouchGFX\u306f\u3001\u4e3b\u306b\u6b21\u306e3\u3064\u306e\u90e8\u5206\uff082\u3064\u306e\u30c4\u30fc\u30eb\u30681\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\uff09\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Designer:"),"\u4f7f\u3044\u3084\u3059\u3044TouchGFX\u306eGUI\u30d3\u30eb\u30c0\u3067\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5916\u89b3\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Generator:"),"CubeMX\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u3001STM32\u30d9\u30fc\u30b9\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u5411\u3051\u306e\u30ab\u30b9\u30bf\u30e0\u306eTouchGFX\u62bd\u8c61\u5316\u30ec\u30a4\u30e4(AL)\u3092\u8a2d\u5b9a\u304a\u3088\u3073\u751f\u6210\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Engine:"),"UI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u52d5\u4f5c\u3055\u305b\u308bTouchGFX C++\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3059\u3002 \u753b\u9762\u66f4\u65b0\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30d9\u30f3\u30c8\u3001\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u51e6\u7406\u3057\u307e\u3059\u3002 \u9ad8\u5ea6\u306aTouchGFX\u30c6\u30af\u30ce\u30ed\u30b8\u306fSTM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u5411\u3051\u306b\u6700\u9069\u5316\u3055\u308c\u3066\u304a\u308a\u3001CPU\u8ca0\u8377\u3068\u30e1\u30e2\u30ea\u4f7f\u7528\u91cf\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u3064\u3064\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u6700\u5927\u5316\u3057\u307e\u3059\u3002")),(0,n.kt)(o.Z,{imageSource:"/img/introduction/what-is-touchgfx/touchgfx-components.png",noShadow:!0,mdxType:"Figure"}))}y.isMDXComponent=!0}}]);