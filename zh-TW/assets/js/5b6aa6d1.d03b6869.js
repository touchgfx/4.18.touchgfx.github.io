(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2648],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,s=d["".concat(p,".").concat(h)]||d[h]||m[h]||c;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){"use strict";var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,c=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:c,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:c,src:i})),a.createElement("p",null,e.children))}},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return c},Z:function(){return i}});var a=n(11368),r=n(35096);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},75774:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return g},metadata:function(){return f},toc:function(){return k},default:function(){return v}});var a=n(3905),r=n(44035),c=n(22425),i=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))m.call(t,n)&&d(e,n,t[n]);return e};const s={id:"caching-bitmaps",title:"\u5feb\u53d6\u9ede\u9663\u5716"},g=void 0,f={unversionedId:"development/ui-development/touchgfx-engine-features/caching-bitmaps",id:"development/ui-development/touchgfx-engine-features/caching-bitmaps",isDocsHomePage:!1,title:"\u5feb\u53d6\u9ede\u9663\u5716",description:"\u5728\u672c\u7bc0\u4e2d\uff0c\u6211\u5011\u5c07\u8a0e\u8ad6TouchGFX\u4e2d\u7684\u9ede\u9663\u5716\u5feb\u53d6\u3002 \u9ede\u9663\u5716\u5feb\u53d6\u662f\u5c08\u7528RAM\u7de9\u885d\u5340\uff0c\u53ef\u5c07\u9ede\u9663\u5716\u4fdd\u5b58\uff08\u6216\u5feb\u53d6\uff09\u5728\u61c9\u7528\u7a0b\u5f0f\u4e2d\u3002 \u5982\u679c\u5feb\u53d6\u4e86\u9ede\u9663\u5716\uff0c\u5728\u7e6a\u88fd\u9ede\u9663\u5716\u6642\uff0cTouchGFX\u5c07\u81ea\u52d5\u4f7f\u7528RAM\u7684\u5feb\u53d6\u4f5c\u70ba\u50cf\u7d20\u4f86\u6e90\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/caching-bitmaps.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/caching-bitmaps",permalink:"/4.18/zh-TW/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps",tags:[],version:"current",frontMatter:{id:"caching-bitmaps",title:"\u5feb\u53d6\u9ede\u9663\u5716"},sidebar:"docs",previous:{title:"\u81ea\u8a02\u5bb9\u5668",permalink:"/4.18/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-containers"},next:{title:"\u81ea\u8a02\u5c0f\u90e8\u4ef6",permalink:"/4.18/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-widgets"}},k=[{value:"\u8a2d\u7f6e\u9ede\u9663\u5716\u5feb\u53d6",id:"setup-the-bitmap-cache",children:[{value:"\u9ede\u9663\u5716\u5feb\u53d6\u914d\u7f6e",id:"bitmap-cache-configuration",children:[{value:"\u4f7f\u7528TouchGFX Generator\u6642\u555f\u7528\u9ede\u9663\u5716\u5feb\u53d6",id:"\u4f7f\u7528touchgfx-generator\u6642\u555f\u7528\u9ede\u9663\u5716\u5feb\u53d6",children:[],level:4}],level:3},{value:"BlockCopy\u5c07\u8cc7\u6599\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u8907\u88fd\u5230\u5feb\u53d6",id:"blockcopy-copies-data-from-flash-to-the-cache",children:[],level:3}],level:2},{value:"\u5feb\u53d6\u64cd\u4f5c",id:"cache-operations",children:[],level:2},{value:"\u5feb\u53d6\u7b56\u7565",id:"cache-strategies",children:[{value:"\u57fa\u65bc\u87a2\u5e55\u7684\u5feb\u53d6\u9ede\u9663\u5716",id:"cache-bitmap-on-a-screen-basis",children:[],level:3},{value:"\u66ff\u63db\u5feb\u53d6\u4e2d\u7684\u80cc\u666f\u9ede\u9663\u5716",id:"replace-the-background-bitmaps-in-the-cache",children:[],level:3}],level:2},{value:"\u5feb\u53d6\u5b58\u5132\u7a7a\u9593\u7ba1\u7406",id:"cache-memory-management",children:[],level:2}],b={toc:k};function v(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},b),d),o(t,p({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u5728\u672c\u7bc0\u4e2d\uff0c\u6211\u5011\u5c07\u8a0e\u8ad6TouchGFX\u4e2d\u7684\u9ede\u9663\u5716\u5feb\u53d6\u3002 \u9ede\u9663\u5716\u5feb\u53d6\u662f\u5c08\u7528RAM\u7de9\u885d\u5340\uff0c\u53ef\u5c07\u9ede\u9663\u5716\u4fdd\u5b58\uff08\u6216\u5feb\u53d6\uff09\u5728\u61c9\u7528\u7a0b\u5f0f\u4e2d\u3002 \u5982\u679c\u5feb\u53d6\u4e86\u9ede\u9663\u5716\uff0c\u5728\u7e6a\u88fd\u9ede\u9663\u5716\u6642\uff0cTouchGFX\u5c07\u81ea\u52d5\u4f7f\u7528RAM\u7684\u5feb\u53d6\u4f5c\u70ba\u50cf\u7d20\u4f86\u6e90\u3002"),(0,a.kt)("p",null,"\u9ede\u9663\u5716\u5feb\u53d6\u5728\u8a31\u591a\u60c5\u6cc1\u4e0b\u5341\u5206\u6709\u7528\u3002 \u5f9eRAM\u8b80\u53d6\u8cc7\u6599\u901a\u5e38\u6bd4\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u8981\u5feb\uff08\u7279\u5225\u662f\u5728\u4f7f\u7528\u7d0b\u7406\u6620\u5c04\u5668\u6642\uff0c\u539f\u56e0\u662f\u5b83\u4f7f\u7528\u975e\u7dda\u6027\u8a18\u61b6\u9ad4\u5b58\u53d6\uff09\uff0c\u56e0\u6b64\uff0c\u5feb\u53d6\u5230RAM\u53ef\u63d0\u5347UI\u6027\u80fd\u3002 \u6ce8\u610f\uff0c\u5f9e\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u5feb\u53d6\u5230\u5916\u90e8RAM\u53ef\u80fd\u6703\u964d\u4f4e\u6027\u80fd\u3002 \u5982\u679c\u7de9\u5b58\u5230RAM\uff0c\u7531\u65bc\u5c07\u5f9eRAM\u8b80\u53d6\u9ede\u9663\u5716\uff08\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u5beb\u5165\u5feb\u9583\u8a18\u61b6\u9ad4\u8981\u6c42\u662f\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\uff09\uff0c\u56e0\u6b64\u53ef\u4ee5\u5728\u986f\u793aUI\u7684\u540c\u6642\u5c07\u5feb\u9583\u8a18\u61b6\u9ad4\u7528\u65bc\u5176\u4ed6\u76ee\u7684\uff08\u5982\u65e5\u8a8c\u6a94\uff09\u3002  \u7576\u60a8\u9700\u8981\u4fee\u6539\u9ede\u9663\u5716\u50cf\u7d20\u6642\uff0c\u9ede\u9663\u5716\u9700\u4f4d\u65bc\u53ef\u4fee\u6539\u7684\u8a18\u61b6\u9ad4\u4e2d\uff0c\u9019\u4e00\u9ede\u5f88\u5be6\u7528\u3002"),(0,a.kt)("p",null,"\u51fa\u65bc\u6027\u80fd\u65b9\u9762\u7684\u8003\u616e\uff0cTouchGFX\u8981\u6c42\u5b58\u5132\u5728\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u6240\u6709\u5716\u5f62\u8cc7\u6599\u90fd\u80fd\u76f4\u63a5\u5b58\u53d6\uff08\u901a\u904e\u6307\u6a19\uff09\uff0c\u7121\u9700\u901a\u904e\u9a45\u52d5\u5c64\u3002 \u9019\u610f\u5473\u8457TouchGFX\u4e0d\u80fd\u5f9e\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\uff08\u5982SD\u5361\uff09\u76f4\u63a5\u6e32\u67d3\u3002 \u70ba\u4e86\u6253\u7834\u9019\u4e00\u9650\u5236\uff0c\u9ede\u9663\u5716\u5feb\u53d6\u63d0\u4f9b\u4e86\u4e00\u7a2e\u5728\u4e0a\u96fb\u671f\u9593\u5feb\u53d6RAM\u4e2d\u7684\u90e8\u5206\u6216\u5168\u90e8\u9ede\u9663\u5716\u8cc7\u6599\u7684\u6a5f\u5236\u3002 \u56e0\u6b64\uff0c\u7576\u60a8\u9700\u8981\u5c07\u9ede\u9663\u5716\u4fdd\u5b58\u5728\u6162\u901f\u5916\u90e8\u8a18\u61b6\u9ad4\uff08\u5982\u786c\u789f\u6216SD\u5361\uff09\u4e0a\u6642\uff0c\u9ede\u9663\u5716\u5feb\u53d6\u5c07\u5341\u5206\u6709\u7528\u3002"),(0,a.kt)("h2",h({},{id:"setup-the-bitmap-cache"}),"\u8a2d\u7f6e\u9ede\u9663\u5716\u5feb\u53d6"),(0,a.kt)("p",null,"\u70ba\u4e86\u4f7f\u7528\u9ede\u9663\u5716\u5feb\u53d6\u7279\u6027\uff0c\u60a8\u9996\u5148\u9700\u8981\u5411TouchGFX\u63d0\u4f9b\u9ede\u9663\u5716\u5feb\u53d6\u914d\u7f6e\uff0c\u7136\u5f8c\uff08\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff09\u63d0\u4f9b",(0,a.kt)("inlineCode",{parentName:"p"},"BlockCopy"),"\u51fd\u6578\u7684\u786c\u9ad4\u7279\u5b9a\u7684\u5be6\u73fe\uff0c\u4ee5\u4fbf\u5f9e\u5916\u90e8\u8a18\u61b6\u9ad4\u8b80\u53d6\u8cc7\u6599\u3002"),(0,a.kt)("h3",h({},{id:"bitmap-cache-configuration"}),"\u9ede\u9663\u5716\u5feb\u53d6\u914d\u7f6e"),(0,a.kt)("p",null,"\u9ede\u9663\u5716\u5feb\u53d6\u914d\u7f6e\u5305\u62ec\u6307\u5411\u7de9\u885d\u5340\u7684\u6307\u6a19\u548c\u7de9\u885d\u5340\u5927\u5c0f\u3002 \u5728\u547c\u53ebBitmap::setCache\u6642\uff0c\u5fc5\u9808\u5411TouchGFX\u63d0\u4f9b\u9019\u5169\u500b\u503c\u3002 \u6b64\u547c\u53eb\u901a\u5e38\u4f4d\u65bcFrontendApplication.cpp\u6587\u4ef6\u4e2d\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize);\n}\n")),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u7bc4\u4f8b\u4e2d\uff0c\u5916\u90e8\u8a18\u61b6\u9ad4\u4e2d\u76843 MB\u7de9\u885d\u4f5c\u70ba\u9ede\u9663\u5716\u5feb\u53d6\u88ab\u50b3\u905e\u5230TouchGFX\u3002 \u4f4d\u5740\u7531\u958b\u767c\u8005\u81ea\u884c\u9078\u64c7\u3002 \u5728\u4e0b\u4e00\u500b\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u53ea\u5ba3\u544a\u4e00\u500b\u9663\u5217\uff0c\u4e26\u4e14\u53ea\u50b3\u905e\u9663\u5217\u7684\u4f4d\u5740\u548c\u5927\u5c0f\u3002 \u9663\u5217\u7684\u5177\u9ad4\u4f4d\u7f6e\u5c07\u53d6\u6c7a\u65bc\u9023\u7d50\u5668\u8173\u672c\u3002 \u5728\u5167\u90e8RAM\u4e2d\u5275\u5efa\uff08\u5c0f\uff09\u9ede\u9663\u5716\u5feb\u53d6\u6642\u6700\u5e38\u4f7f\u7528\u6b64\u65b9\u6cd5\uff1a"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\n// Define an array for the bitmap cache\nuint16_t cache[128*1024]; //256 KB cache\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    Bitmap::setCache(cache, sizeof(cache));\n}\n")),(0,a.kt)("h4",h({},{id:"\u4f7f\u7528touchgfx-generator\u6642\u555f\u7528\u9ede\u9663\u5716\u5feb\u53d6"}),"\u4f7f\u7528TouchGFX Generator\u6642\u555f\u7528\u9ede\u9663\u5716\u5feb\u53d6"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528CubeMX\u548cTouchGFX Generator\uff0c\u5247\u4e5f\u53ef\u4ee5\u5728TouchGFXHAL.cpp\u4e2d\u555f\u7528\u548c\u914d\u7f6e\u9ede\u9663\u5716\u5feb\u53d6\u3002"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::initialize()\n{\n    /* Initialize TouchGFX Engine */\n    TouchGFXGeneratedHAL::initialize();\n\n    uint16_t* cacheStartAddr = (uint16_t*)0xC0008000;\n    uint32_t cacheSize = 0x300000; //3 MB, as example\n\n    touchgfx::Bitmap::setCache(cache, sizeof(cache));\n}\n")),(0,a.kt)("p",null,"If you want to reuse the cache, the previous one must be removed before setting the new one, this is done by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::Bitmap::removeCache()"),". \u5982\u679c\u50c5\u5728\u61c9\u7528\u4e2d\u8a2d\u7f6e\u4e00\u6b21\uff0c\u5247\u7121\u9700\u522a\u9664\u5feb\u53d6\u3002"),(0,a.kt)("p",null,"\u5982\u9700\u5feb\u53d6\u6240\u6709\u7684\u9ede\u9663\u5716\uff0c\u5247\u5feb\u53d6\u5927\u5c0f\u5fc5\u9808\u8db3\u5920\u5927\uff0c\u624d\u80fd\u5305\u542b\u6240\u6709\u9ede\u9663\u5716\u8cc7\u6599\u3002 \u6ce8\u610f\uff1a\u6703\u6709\u5c11\u91cf\u5b58\u5132\u7a7a\u9593\u7528\u65bc\u8a18\u9304\uff088\u500b\u4f4d\u5143\u7d44 x \u61c9\u7528\u4e2d\u7684\u9ede\u9663\u5716\u6578\u91cf\uff09\uff0c\u56e0\u6b64\u5fc5\u9808\u5206\u914d\u6bd4\u539f\u59cb\u50cf\u7d20\u8cc7\u6599\u7684\u5be6\u969b\u9700\u6c42\u7a0d\u5927\u7684\u5b58\u5132\u7a7a\u9593\u3002 \u8a72\u503c\u53d6\u6c7a\u65bc\u61c9\u7528\u4e2d\u7684\u9ede\u9663\u5716\u6578\u91cf\uff0c\u4f46\u984d\u5916\u591a\u5e7e\u5343\u4f4d\u5143\u7d44\u901a\u5e38\u5373\u5df2\u8db3\u5920\u3002"),(0,a.kt)("h3",h({},{id:"blockcopy-copies-data-from-flash-to-the-cache"}),"BlockCopy\u5c07\u8cc7\u6599\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u8907\u88fd\u5230\u5feb\u53d6"),(0,a.kt)("p",null,"\u5728\u5feb\u53d6\u9ede\u9663\u5716\u6642\uff0cTouchGFX\u6703\u4f7f\u7528HAL\u985e\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"BlockCopy"),"\u51fd\u6578\u5c07\u50cf\u7d20\u5f9e\u539f\u59cb\u4f4d\u7f6e\u8907\u88fd\u5230\u9ede\u9663\u5716\u5feb\u53d6\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9ede\u9663\u5716\u5b58\u5132\u5728\u666e\u901a\u53ef\u5b9a\u5740\u5feb\u9583\u8a18\u61b6\u9ad4\uff08\u5982\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u6216\u8a18\u61b6\u9ad4\u6620\u5c04\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff08\u5982QSPI\u5feb\u9583\u8a18\u61b6\u9ad4\uff09\uff09\u4e2d\uff0c\u5247\u60a8\u7121\u9700\u57f7\u884c\u4efb\u4f55\u64cd\u4f5c\u3002 \u5167\u5efa\u5be6\u73fe\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c\u9ede\u9663\u5716\u5b58\u5132\u5728\u4e0d\u53ef\u5b9a\u5740\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\uff08\u5982\u6a94\u6848\u7cfb\u7d71\u6216\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\uff09\u4e2d\uff0c\u5247\u6a19\u6e96\u8907\u88fd\u6cd5\u662f\u4e0d\u5920\u7684\uff0c\u60a8\u9700\u8981\u63d0\u4f9b\u80fd\u5920\u5f9e\u7279\u5b9a\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u7684\u66f4\u65b0\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u95b1\u8b80",(0,a.kt)("a",h({parentName:"p"},{href:"../../scenarios/using-non-memory-mapped-flash"}),"\u4f7f\u7528\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u5b58\u5132\u5716\u50cf"),"\u4e00\u7bc0\u4e2d\u95dc\u65bc\u8a72\u4e3b\u984c\u7684\u66f4\u591a\u5167\u5bb9\u3002"),(0,a.kt)("h2",h({},{id:"cache-operations"}),"\u5feb\u53d6\u64cd\u4f5c"),(0,a.kt)("p",null,"\u9ede\u9663\u5716\u5feb\u53d6\u64cd\u4f5c\u5168\u90e8\u653e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Bitmap"),"\u985e\u4e2d\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u9ede\u9663\u5716"),"\u5feb\u53d6\u65b9\u6cd5")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"bool Bitmap::cache(BitmapId id)")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u6b64\u65b9\u6cd5\u5feb\u53d6\u4e00\u500b\u9ede\u9663\u5716\u3002 \u50c5\u7576\u5feb\u53d6\u4e2d\u6709\u8db3\u5920\u5927\u7684\u672a\u4f7f\u7528\u5b58\u5132\u7a7a\u9593\u6642\uff0c\u624d\u5feb\u53d6\u9ede\u9663\u5716\u3002 \u5982\u679c\u9ede\u9663\u5716\u5df2\u5feb\u53d6\uff0c\u8fd4\u56detrue\u3002 \u5feb\u53d6\u5df2\u5feb\u53d6\u7684\u9ede\u9663\u5716\u4e0d\u6703\u6709\u4efb\u4f55\u4f5c\u7528\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"bool Bitmap::cacheReplaceBitmap(BitmapId out, BitmapId in)")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u6b64\u65b9\u6cd5\u7528\u53e6\u4e00\u500b\u9ede\u9663\u5716\uff08\u5165\uff09\u66ff\u63db\u5feb\u53d6\u4e2d\u7684\u9ede\u9663\u5716\uff08\u51fa\uff09\u3002 \u50c5\u7576\u8981\u66ff\u63db\u7684\u9ede\u9663\u5716\u5df2\u5feb\u53d6\u4e14\u9ede\u9663\u5716\u5927\u5c0f\uff08\u4f4d\u5143\u7d44\u6578\uff09\u76f8\u540c\u6642\uff0c\u6b64\u65b9\u6cd5\u624d\u80fd\u6210\u529f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"bool Bitmap::cacheRemoveBitmap(BitmapId id)")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u6b64\u65b9\u6cd5\u522a\u9664\u5feb\u53d6\u4e2d\u7684\u9ede\u9663\u5716\u3002 \u9ede\u9663\u5716\u4f7f\u7528\u7684\u5b58\u5132\u7a7a\u9593\u6b64\u5f8c\u53ef\u7528\u65bc\u5feb\u53d6\u53e6\u4e00\u500b\u9ede\u9663\u5716\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"void Bitmap::clearCache()")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u6b64\u65b9\u6cd5\u522a\u9664\u5feb\u53d6\u4e2d\u7684\u6240\u6709\u5df2\u5feb\u53d6\u9ede\u9663\u5716\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"void Bitmap::cacheAll()")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"\u6b64\u65b9\u6cd5\u5feb\u53d6\u6240\u6709\u9ede\u9663\u5716\u3002 \u5982\u679c\u5206\u914d\u7528\u65bc\u5feb\u53d6\u7684RAM\u7a7a\u9593\uff08\u6216\u53ef\u7528\u7a7a\u9593\uff09\u5c0f\u65bc\u9ede\u9663\u5716\u7684\u7e3d\u5927\u5c0f\uff0c\u5247\u4e0d\u80fd\u4f7f\u7528\u6b64\u65b9\u6cd5\u3002")))),(0,a.kt)("h2",h({},{id:"cache-strategies"}),"\u5feb\u53d6\u7b56\u7565"),(0,a.kt)("p",null,"\u5982\u679c\u53ef\u5206\u914d\u7528\u65bc\u9ede\u9663\u5716\u5feb\u53d6\u7684RAM\u7a7a\u9593\u5c0f\u65bc\u9ede\u9663\u5716\u7684\u7e3d\u5927\u5c0f\uff0c\u5247\u555f\u52d5\u904e\u7a0b\u4e2d\u4e0d\u80fd\u5feb\u53d6\u6240\u6709\u9ede\u9663\u5716\u3002 \u8209\u500b\u4f8b\u5b50\uff0c\u60a8\u53ef\u4ee5\u9078\u64c7\u53ea\u5feb\u53d6\u7b2c\u4e00\u500b\u87a2\u5e55\u9700\u8981\u7684\u9ede\u9663\u5716\u3002 \u5728\u87a2\u5e55\u4e4b\u9593\u5207\u63db\u6642\uff0c\u60a8\u53ef\u4ee5\u522a\u9664\u90e8\u5206\u6216\u5168\u90e8\u5df2\u5feb\u53d6\u7684\u9ede\u9663\u5716\uff0c\u4e26\u5feb\u53d6\u4e0b\u4e00\u500b\u87a2\u5e55\u6240\u9700\u7684\u9ede\u9663\u5716\u3002 \u4e0b\u4e00\u7bc0\u5c0d\u6b64\u9032\u884c\u4e86\u8209\u4f8b\u8aaa\u660e\u3002"),(0,a.kt)("h3",h({},{id:"cache-bitmap-on-a-screen-basis"}),"\u57fa\u65bc\u87a2\u5e55\u7684\u5feb\u53d6\u9ede\u9663\u5716"),(0,a.kt)("p",null,"\u61c9\u7528\u7a0b\u5f0f\u4f7f\u7528\u8005\u4ecb\u9762\u7531\u4e00\u7d44\u8996\u5716\u7d44\u6210\u3002 \u8996\u5716\u5e7e\u4e4e\u90fd\u6703\u4f7f\u7528\u4e00\u4e9b\u9ede\u9663\u5716\u3002  A simple strategy for caching is to cache all the bitmaps used by a View in the ",(0,a.kt)("inlineCode",{parentName:"p"},"View::setupScreen")," method and clear the cache in the ",(0,a.kt)("inlineCode",{parentName:"p"},"View::tearDownScreen")," method:"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::setupScreen()\n{\n    //ensure background is cached\n    Bitmap::cache(BITMAP_SCREEN2_ID);\n    //cache some icons\n    Bitmap::cache(BITMAP_ICON10_ID);\n    Bitmap::cache(BITMAP_ICON11_ID);\n    Bitmap::cache(BITMAP_ICON12_ID);\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    //Remove all bitmaps from the cache\n    Bitmap::clearCache();\n}\n")),(0,a.kt)("p",null,"\u5feb\u53d6\u7684\u5b58\u5132\u7a7a\u9593\u8981\u6c42\u662f\u9ede\u9663\u5716\u4f7f\u7528\u91cf\u6700\u591a\u7684\u87a2\u5e55\u6240\u4f7f\u7528\u7684\u9ede\u9663\u5716\u5927\u5c0f\u3002 \u6b64\u65b9\u6cd5\u7684\u7f3a\u9ede\u662f\u5982\u679c\u5169\u500b",(0,a.kt)("inlineCode",{parentName:"p"},"\u8996\u5716"),"\u90fd\u4f7f\u7528\u4e00\u500b\u9ede\u9663\u5716\uff0c\u5f9e\u7b2c\u4e00\u500b",(0,a.kt)("inlineCode",{parentName:"p"},"\u8996\u5716"),"\u9000\u51fa\u6642\u5feb\u53d6\u4e2d\u7684\u9ede\u9663\u5716\u6703\u88ab\u64e6\u9664\uff0c\u4e26\u5728\u9032\u5165\u7b2c\u4e8c\u500b",(0,a.kt)("inlineCode",{parentName:"p"},"\u8996\u5716"),"\u6642\u518d\u6b21\u5feb\u53d6\u3002"),(0,a.kt)("p",null,"\u53ef\u5c0dBitmap::cacheRemoveBitmap\u4f7f\u7528\u9078\u64c7\u6027\u672a\u5feb\u53d6\u9ede\u9663\u5716\uff0c\u5f9e\u800c\u6e1b\u5c11\u6b64\u6d88\u8017\u3002 CacheRemoveBitmap\u7684\u7f3a\u9ede\u662f\u5feb\u53d6\u5b58\u5132\u7a7a\u9593\u788e\u7247\u5316\u3002"),(0,a.kt)("p",null,"\u5feb\u53d6\u7684\u53e6\u4e00\u500b\u666e\u904d\u7f3a\u9ede\u662f\u5728\u66f4\u6539UI\uff08\u5982\u6dfb\u52a0\u6309\u9215\uff09\u6642\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u66f4\u65b0\u5feb\u53d6\u7a0b\u5f0f\u78bc\u4f86\u5305\u542b\u65b0\u9ede\u9663\u5716\u3002"),(0,a.kt)("h3",h({},{id:"replace-the-background-bitmaps-in-the-cache"}),"\u66ff\u63db\u5feb\u53d6\u4e2d\u7684\u80cc\u666f\u9ede\u9663\u5716"),(0,a.kt)("p",null,"\u5982\u679c\u61c9\u7528\u4e2d\u6709\u4e00\u7d44\u5c0f\u9ede\u9663\u5716\uff08\u5982\u5716\u793a\uff09\u548c\u4e00\u4e9b\u5927\u7684\u5168\u5c4f\u201c\u80cc\u666f\u201d\u9ede\u9663\u5716\uff0c\u5247\u53ef\u4ee5\u4f7f\u7528\u53e6\u4e00\u7a2e\u7b56\u7565\uff1a"),(0,a.kt)("p",null,"\u5728\u9032\u5165\u7b2c\u4e00\u500b\u87a2\u5e55\u4e4b\u524d\u5feb\u53d6\u6240\u6709\u5c0f\u9ede\u9663\u5716\u3002 FrontendApplication\u69cb\u9020\u51fd\u6578\u662f\u57f7\u884c\u5feb\u53d6\u7684\u7406\u60f3\u4f4d\u7f6e\u3002 \u53e6\u5916\uff0c\u5feb\u53d6\u7b2c\u4e00\u500b\u87a2\u5e55\u7684\u80cc\u666f\u9ede\u9663\u5716\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : touchgfx::MVPApplication(),\n      transitionCallback(),\n      frontendHeap(heap),\n      model(m)\n{\n    //cache some icons\n    Bitmap::cache(BITMAP_ICON10_ID);\n    Bitmap::cache(BITMAP_ICON11_ID);\n    Bitmap::cache(BITMAP_ICON12_ID);\n\n    //cache first background\n    Bitmap::cache(BITMAP_SCREEN1_ID);\n    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember ID in a variable\n}\n")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"View::setupScreen")," method replace the cached background bitmap with the required bitmap:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"Screen1View::setupScreen()\n{\n    //ensure background is cached\n    Bitmap::cacheReplaceBitmap(backgroundBitmapCached, BITMAP_SCREEN1_ID);\n    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember new ID of cached bitmap\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::tearDownScreen()\n{\n    //nothing cache related\n}\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u6b64\u7b56\u7565\u7684\u5feb\u53d6\u5b58\u5132\u7a7a\u9593\u8981\u6c42\u662f\u5feb\u53d6\u7684\u9ede\u9663\u5716\u548c\u4e00\u5f35\u80cc\u666f\u9ede\u9663\u5716\u7684\u7e3d\u5927\u5c0f\u3002 \u76f8\u6bd4\u65bc\u524d\u4e00\u7a2e\u65b9\u6cd5\uff0c\u6b64\u65b9\u6cd5\u7531\u65bc\u8996\u5716\u7a0b\u5f0f\u78bc\u8f03\u5c11\uff0c\u5176\u7a0b\u5f0f\u78bc\u66f4\u6613\u65bc\u7dad\u8b77\u3002 \u7531\u65bc\u79fb\u5165\u548c\u79fb\u51fa\u5feb\u53d6\u7684\u9ede\u9663\u5716\u8f03\u5c11\uff0c\u56e0\u6b64\u6027\u80fd\u66f4\u512a\u3002"),(0,a.kt)("p",null,"\u7531\u65bc\u5b58\u5132\u7a7a\u9593\u4e0d\u6703\u788e\u7247\u5316\uff0ccacheReplaceBitmap\u64cd\u4f5c\u6bd4 cacheRemoveBitmap\u65b9\u6cd5\u66f4\u597d\u3002"),(0,a.kt)("h2",h({},{id:"cache-memory-management"}),"\u5feb\u53d6\u5b58\u5132\u7a7a\u9593\u7ba1\u7406"),(0,a.kt)("p",null,"\u70ba\u4e86\u7372\u5f97\u9ede\u9663\u5716\u5feb\u53d6\u7684\u5b8c\u6574\u6548\u679c\uff0c\u5fc5\u9808\u7406\u89e3\u5feb\u53d6\u7684\u5167\u90e8\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5feb\u53d6\u4ee5\u68e7(stack)\u7684\u5f62\u5f0f\u5be6\u73fe\u3002 \u5728\u4e4b\u524d\u5feb\u53d6\u7684\u9ede\u9663\u5716\u4e4b\u5f8c\u5feb\u53d6\u65b0\u9ede\u9663\u5716\u3002 \u7576\u9ede\u9663\u5716\u5f9e\u5feb\u53d6\u4e2d\u522a\u9664\u6642\uff0c\u9ede\u9663\u5716\u4f7f\u7528\u7684\u5b58\u5132\u7a7a\u9593\u6703\u88ab\u6a19\u8a18\u70ba\u201cfree\u201d\uff0c\u4f46\u4e0d\u80fd\u7acb\u5373\u4f7f\u7528\u8a72\u5b58\u5132\u7a7a\u9593\uff0c\u9664\u975e\u522a\u9664\u7684\u9ede\u9663\u5716\u4f4d\u65bc\u68e7(stack)\u9802\u90e8\u3002 \u5982\u679c\u9ede\u9663\u5716\u4f4d\u65bc\u5feb\u53d6\u7684\u201c\u4e2d\u9593\u201d\uff0c\u5c07\u5728\u4e0b\u4e00\u6b21\u547c\u53ebBitmap::cache\u6642\u57f7\u884c\u58d3\u7e2e\u64cd\u4f5c\uff0c\u4ee5\u4fbf\u53d6\u56de\u5b58\u5132\u7a7a\u9593\u3002 \u5982\u679c\u4e0d\u5728\u5feb\u53d6\u4e2d\u6709\u201c\u7a7a\u6d1e\u201d\u7684\u60c5\u6cc1\u4e0b\u8abf\u7528Bitmap::cache\uff0c\u5247\u53ef\u4ee5\u907f\u514d\u9019\u7a2e\u201c\u9ad8\u6210\u672c\u201d\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u4e0b\u5716\u63cf\u8ff0\u4e86\u539f\u7406\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u4e0a\u4e00\u500b\u5df2\u5206\u914d\u9ede\u9663\u5716\u4e4b\u4e0a\u5206\u914d\u5feb\u53d6\uff1a")),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-cache.png",noShadow:"true",width:"340",mdxType:"Figure"},"\u5b58\u5132\u7a7a\u9593\u4e2d\u9ede\u9663\u5716\u7684\u5206\u914d\u9806\u5e8f"),(0,a.kt)("ol",h({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"\u522a\u9664\u5f8c\u6a19\u8a18\u672a\u4f7f\u7528\u7684\u5b58\u5132\u7a7a\u9593\uff1a")),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache.png",noShadow:"true",width:"340",mdxType:"Figure"},"\u522a\u9664\u5df2\u7de9\u5b58\u9ede\u9663\u5716\u5f8c\u7de9\u5b58\u4e2d\u7684\u672a\u4f7f\u7528\u5b58\u5132\u7a7a\u9593"),(0,a.kt)("ol",h({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"\u5206\u914d\u4e0b\u4e00\u5f35\u9ede\u9663\u5716\u6642\uff0c\u6703\u58d3\u7e2e\u5feb\u53d6\u4e26\u5728\u9802\u90e8\u9032\u884c\u5206\u914d\uff1a")),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-compact.png",noShadow:"true",width:"340",mdxType:"Figure"},"\u5728\u5feb\u53d6\u9ede\u9663\u5716\u4e4b\u524d\uff0c\u5feb\u53d6\u53d6\u56de\u672a\u4f7f\u7528\u7684\u5b58\u5132\u7a7a\u9593"),(0,a.kt)("ol",h({},{start:4}),(0,a.kt)("li",{parentName:"ol"},"\u5728\u522a\u9664\u6700\u9802\u7aef\uff08\u4e0a\u4e00\u6b21\u5206\u914d\uff09\u7684\u9ede\u9663\u5716\u6642\uff0c\u6703\u7acb\u5373\u91cb\u653e\u5b58\u5132\u7a7a\u9593\u53ca\u5176\u4e0b\u65b9\u7684\u4efb\u4f55\u7a7a\u9592\u5b58\u5132\u7a7a\u9593\uff1a")),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache-top.png",noShadow:"true",width:"700",mdxType:"Figure"},"\u522a\u9664\u6700\u9802\u7aef\u9ede\u9663\u5716\u5feb\u53d6"),(0,a.kt)("p",null,"\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u4e0b\u4e00\u6b21\u5feb\u53d6\u64cd\u4f5c\u5c07\u4e0d\u5305\u62ec\u58d3\u7e2e\u3002"),(0,a.kt)("p",null,"\u8a72\u52d5\u756b\u5c55\u793a\u4e86\u6b64\u4ee3\u78bc\u7684\u5b8c\u6574\u9806\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"Bitmap::cache(BITMAP_BITMAP1_ID);\nBitmap::cache(BITMAP_BITMAP2_ID);\nBitmap::cache(BITMAP_BITMAP3_ID);\n...\nBitmap::cacheRemoveBitmap(BITMAP_BITMAP2_ID);\n...\nBitmap::cache(BITMAP_BITMAP4_ID);\n...\nBitmap::cacheRemoveBitmap(BITMAP_BITMAP3_ID);\nBitmap::cacheRemoveBitmap(BITMAP_BITMAP4_ID);\n")),(0,a.kt)(r.Z,{width:"600",imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-bitmap-animation.gif",noShadow:"true",mdxType:"Figure"},"\u5feb\u53d6\u548c\u672a\u5feb\u53d6\u9ede\u9663\u5716"))}v.isMDXComponent=!0}}]);