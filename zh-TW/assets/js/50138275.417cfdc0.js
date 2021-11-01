(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4701],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){"use strict";var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return l}});var r=n(11368),o=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},40939:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return h},metadata:function(){return b},toc:function(){return g},default:function(){return y}});var r=n(3905),o=n(44035),a=n(22425),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&d(e,n,t[n]);return e};const f={id:"using-non-memory-mapped-flash",title:"\u4f7f\u7528\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u5b58\u5132\u5f71\u50cf"},h=void 0,b={unversionedId:"development/scenarios/using-non-memory-mapped-flash",id:"development/scenarios/using-non-memory-mapped-flash",isDocsHomePage:!1,title:"\u4f7f\u7528\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u5b58\u5132\u5f71\u50cf",description:"\u672c\u7bc0\u5c07\u8a0e\u8ad6\u5982\u4f55\u5c07\u6240\u6709\u5716\u50cf\u9023\u7d50\u5230\u53ef\u4ee5\u653e\u5165\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u4e8c\u9032\u4f4d\u6a94\u6848\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u57f7\u884c\u6642\u9593\u4f7f\u7528\u8a72\u6a94\u548c\u9ede\u9663\u5716\u7de9\u5b58\u3002 TouchGFX\u4e0d\u80fd\u7e6a\u88fd\u5b58\u5132\u5728\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u9ede\u9663\u5716\uff0c\u4f46\u5c07\u9ede\u9663\u5716\u5b58\u5728RAM\u7684\u7de9\u5b58\u4e2d\uff0c\u5c31\u80fd\u5728\u61c9\u7528\u4e2d\u4f7f\u7528\u9ede\u9663\u5716\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/using-non-memory-mapped-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-non-memory-mapped-flash",permalink:"/4.18/zh-TW/docs/development/scenarios/using-non-memory-mapped-flash",version:"current",frontMatter:{id:"using-non-memory-mapped-flash",title:"\u4f7f\u7528\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u5b58\u5132\u5f71\u50cf"},sidebar:"docs",previous:{title:"\u901a\u904e\u90e8\u5206\u5f71\u50cf\u7de9\u885d\u964d\u4f4e\u8a18\u61b6\u9ad4\u4f7f\u7528\u7387",permalink:"/4.18/zh-TW/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"},next:{title:"\u4f7f\u7528\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u5b58\u5132\u5716\u50cf\u548c\u5b57\u9ad4",permalink:"/4.18/zh-TW/docs/development/scenarios/using-serial-flash"}},g=[{value:"\u5c07\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u9ede\u9663\u5716\u8cc7\u6599\u8907\u88fd\u5230\u7de9\u5b58",id:"copying-bitmap-data-from-flash-to-cache",children:[]},{value:"BitmapDatabase\u8868",id:"the-bitmapdatabase-table",children:[]},{value:"\u9023\u7d50\u5668\u8173\u672c\u4fee\u6539",id:"linker-script-modifications",children:[]},{value:"\u4fee\u6539BlockCopy\u51fd\u6578",id:"modifying-the-blockcopy-function",children:[]},{value:"\u5c07\u5716\u50cf\u9023\u7d50\u5230RAM",id:"linking-images-to-ram",children:[]}],k={toc:g};function y(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),d),i(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u7bc0\u5c07\u8a0e\u8ad6\u5982\u4f55\u5c07\u6240\u6709\u5716\u50cf\u9023\u7d50\u5230\u53ef\u4ee5\u653e\u5165\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u4e8c\u9032\u4f4d\u6a94\u6848\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u57f7\u884c\u6642\u9593\u4f7f\u7528\u8a72\u6a94\u548c\u9ede\u9663\u5716\u7de9\u5b58\u3002 TouchGFX\u4e0d\u80fd\u7e6a\u88fd\u5b58\u5132\u5728\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u9ede\u9663\u5716\uff0c\u4f46\u5c07\u9ede\u9663\u5716\u5b58\u5728RAM\u7684\u7de9\u5b58\u4e2d\uff0c\u5c31\u80fd\u5728\u61c9\u7528\u4e2d\u4f7f\u7528\u9ede\u9663\u5716\u3002"),(0,r.kt)("p",null,"\u53c3\u898b",(0,r.kt)("a",m({parentName:"p"},{href:"../ui-development/touchgfx-engine-features/caching-bitmaps"}),"\u7de9\u5b58\u9ede\u9663\u5716"),"\u4e00\u6587\u4e2d\u95dc\u65bc\u9ede\u9663\u5716\u7de9\u5b58\u7684\u7d9c\u5408\u8a0e\u8ad6\u3002"),(0,r.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u5011\u5047\u8a2d\u60a8\u8a2d\u7f6e\u4e86\u9ede\u9663\u5716\u7de9\u5b58\uff0c\u4e26\u5e0c\u671b\u5c07\u9ede\u9663\u5716\u5b58\u5132\u5728\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002 \u8a72\u5feb\u9583\u8a18\u61b6\u9ad4\u53ef\u4ee5\u662fUSB\u5132\u5b58\u88dd\u7f6e\u3001NAND flash\u7b49\u3002"),(0,r.kt)("p",null,"\u76ee\u6a19\u662f\u5c07\u5716\u50cf\u9023\u7d50\u5230\u7279\u5b9a\u4f4d\u5740\uff0c\u5c07\u5716\u50cf\u8907\u88fd\u5230\u6a94\u6848\u4e2d\uff0c\u4e26\u5e6b\u52a9TouchGFX\u5c07\u5176\u5f9e\u6a94\u6848\u8907\u88fd\u5230\u7de9\u5b58\u3002"),(0,r.kt)("h3",m({},{id:"copying-bitmap-data-from-flash-to-cache"}),"\u5c07\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u9ede\u9663\u5716\u8cc7\u6599\u8907\u88fd\u5230\u7de9\u5b58"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u5728\u7de9\u5b58\u9ede\u9663\u5716\u6642\uff0cTouchGFX\u6703\u5c07\u50cf\u7d20\u5f9e\u539f\u59cb\u4f4d\u7f6e\u8907\u88fd\u5230\u9ede\u9663\u5716\u7de9\u5b58\u3002"),(0,r.kt)("p",null,"\u901a\u904e\u5f9eHAL\u985e\u8abf\u7528\u6b64\u65b9\u6cd5\u4f86\u5b8c\u6210\u9019\u7a2e\u8907\u88fd\uff1a"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"HAL.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n")),(0,r.kt)("p",null,"\u5982\u679c\u9ede\u9663\u5716\u5b58\u5132\u5728\u666e\u901a\u53ef\u5b9a\u5740\u5feb\u9583\u8a18\u61b6\u9ad4\uff08\u5982\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u6216\u8a18\u61b6\u9ad4\u6620\u5c04\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff09\u4e2d\uff0c\u5247\u4f7f\u7528TouchGFX\u5eab\u4e2d\u63d0\u4f9b\u7684\u666e\u901ablockCopy\u51fd\u6578\u5373\u53ef\uff0c\u7121\u9700\u4efb\u4f55\u984d\u5916\u7684\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c\u9ede\u9663\u5716\u5b58\u5132\u5728\u4e0d\u53ef\u5b9a\u5740\u7684\u5b58\u5132\u4f4d\u7f6e\uff08\u5982\u6a94\u6848\u7cfb\u7d71\uff09\uff0c\u5247\u4e00\u822c\u7684\u64cd\u4f5c\u662f\u4e0d\u5920\u7684\uff0c\u60a8\u9700\u8981\u63d0\u4f9b\u66f4\u65b0\u904e\u7684\u7248\u672c\uff0c\u4ee5\u4fbf\u80fd\u5920\u5f9e\u7279\u5b9a\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u9996\u5148\u6211\u5011\u9700\u8981\u78ba\u4fdd\u9ede\u9663\u5716\u5df2\u9023\u7d50\u5230\u56fa\u5b9a\u4f4d\u5740\u3002"),(0,r.kt)("h2",m({},{id:"the-bitmapdatabase-table"}),"BitmapDatabase\u8868"),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684\u6240\u6709\u9ede\u9663\u5716\u90fd\u751f\u6210\u5230generated/images/src\u8cc7\u6599\u593e\u4e2d\u7684.cpp\u6587\u4ef6\u3002 \u5728\u9019\u88e1\u9ede\u9663\u5716\u8868\u793a\u70ba\u4f4d\u5143\u7d44\u9663\u5217\u3002"),(0,r.kt)("p",null,"C++\u7de8\u8b6f\u5668\u548c\u7de8\u8b6f\u5176\u4ed6\u539f\u59cb\u7a0b\u5f0f\u78bc\u4e00\u6a23\u7de8\u8b6f\u9019\u4e9b\u9663\u5217\uff0c\u4e26\u4e14\u5c07\u5b83\u5011\u9023\u7d50\u5230\u61c9\u7528\u7a0b\u5f0f\u4e2d\u3002"),(0,r.kt)("p",null,"\u9019\u662f\u4e00\u500b\u7c21\u55ae\u61c9\u7528\u7a0b\u5f0f\u7684\u87a2\u5e55\u622a\u5716\uff0c\u8a72\u61c9\u7528\u7a0b\u5f0f\u6709\u4e00\u500b\u6309\u9215\u548c\u4e00\u500b\u986f\u793a\u65cb\u8f49\u6a19\u793a\u7684\u7d0b\u7406\u6620\u5c04\u5668\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/scenarios/using-non-memory-mapped-flash/screen-shot.png",mdxType:"Figure"},"\u6309\u9215\u548c\u7d0b\u7406\u6620\u5c04\u5668"),(0,r.kt)("p",null,"\u8a72\u61c9\u7528\u4f7f\u75283\u5f35\u5716\u50cf\uff1aButton_Pressed\u3001Button_Released\u548cLogo\u3002"),(0,r.kt)("p",null,"\u90193\u5f35\u9ede\u9663\u5716\u88ab\u8f49\u63db\u70ba.cpp\u6a94\uff0c\u4e26\u4f5c\u70ba\u61c9\u7528\u7a0b\u5f0f\u7684\u4e00\u90e8\u5206\u9032\u884c\u9023\u7d50\u3002 \u5728\u540d\u70babitmap_database\u7684\u8868\u4e2d\u5f15\u7528\u9ede\u9663\u5716\u3002 \u6b64\u8868\u4f4d\u65bc\u6587\u4ef6BitmapDatabase.cpp\u4e2d\u3002 \u4e0b\u8868\u4f86\u81ea\u4e0a\u9762\u7684\u7bc4\u4f8b\uff08\u522a\u6e1b\u4e86\u4e00\u4e9b\u7d30\u7bc0\uff09\uff1a"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"BitmapDatabase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"extern const unsigned char _blue_buttons_round_edge_small[];\nextern const unsigned char _blue_buttons_round_edge_small_pressed[];\nextern const unsigned char _blue_logo_touchgfx_logo[];\n\nconst touchgfx::Bitmap::BitmapData bitmap_database[] =\n{\n    { _blue_buttons_round_edge_small, ... },\n    { _blue_buttons_round_edge_small_pressed, ... },\n    { _blue_logo_touchgfx_logo, ... }\n};\n\n")),(0,r.kt)("p",null,"\u9996\u5148\u8072\u660e\u7684\u9663\u5217\u662f\u5305\u542b\u5404\u9ede\u9663\u5716\u7684\u50cf\u7d20\u7684\u9663\u5217\u3002 \u9019\u4e9b\u9663\u5217\u5728\u5176\u4ed6.cpp\u6a94\u4e2d\u5b9a\u7fa9\u3002 bitmap_database\u9663\u5217\u4fdd\u5b58\u4e86\u9019\u4e9b\u9663\u5217\u7684\u4f4d\u5740\u3002 TouchGFX\u4f7f\u7528\u6b64\u9663\u5217\u67e5\u627e\u9ede\u9663\u5716\u50cf\u7d20\u7684\u4f4d\u5740\u3002"),(0,r.kt)("p",null,"\u7576\u958b\u767c\u8005\u8acb\u6c42\u7de9\u5b58\u9ede\u9663\u5716\u6642\uff0cTouchGFX\u67e5\u627e\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u9ede\u9663\u5716\u4f4d\u5740\uff08\u5728bitmap_database\u9663\u5217\u4e2d\uff09\u4e26\u5f9e\u9019\u88e1\u8907\u88fd\u8cc7\u6599\u3002"),(0,r.kt)("h2",m({},{id:"linker-script-modifications"}),"\u9023\u7d50\u5668\u8173\u672c\u4fee\u6539"),(0,r.kt)("p",null,"\u9023\u7d50\u5668\u70ba\u9ede\u9663\u5716\u9078\u64c7\u4f4d\u5740\u3002 \u6b64\u985e\u9078\u64c7\u57fa\u65bc\u9ede\u9663\u5716\u6240\u5728\u7684\u5340\u6bb5\u3002 TouchGFX\u4e2d\u7684\u6240\u6709\u9ede\u9663\u5716\u9ed8\u8a8d\u653e\u5165",(0,r.kt)("strong",{parentName:"p"},"ExtFlashSection"),"\u4e2d\u3002"),(0,r.kt)("p",null,"\u6a19\u6e96\u9023\u7d50\u5668\u8173\u672c\uff08\u6b64\u8655\u662f\u5c31GCC\u800c\u8a00\uff09\u5c07\u6b64\u5206\u5340\u9023\u540c\u5176\u4ed6\u552f\u8b80\u8cc7\u6599\u4e00\u8d77\u653e\u5165\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,r.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u5011\u5c07\u5716\u50cf\u8cc7\u6599\u653e\u5165ExtFlashSection\u4e2d\u7684\u5730\u5740",(0,r.kt)("strong",{parentName:"p"},"0x24000000"),"\u3002 \u60a8\u53ef\u4ee5\u9078\u64c7\u672a\u4f7f\u7528\u904e\u7684\u4efb\u4f55\u4f4d\u5740\uff08\u4e0d\u662f\u7a0b\u5f0f\u78bc\u6216\u8cc7\u6599\u4f4d\u5740\u7a7a\u9593\u7684\u4e00\u90e8\u5206\uff09\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u9664\u4e86\u666e\u901a\u7684\u5167\u90e8FLASH\u548cRAM\uff0c\u6211\u5011\u5b9a\u7fa9\u4e00\u500b\u65b0\u7684\u5b58\u5132\u5340\uff08USB\u5feb\u9583\u8a18\u61b6\u9ad4\u4f4d\u57400x24000000\uff09\uff1a"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K\n  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K\n  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M\n}\n")),(0,r.kt)("p",null,"\u7136\u5f8c\uff0c\u6211\u5011\u6307\u793a\u9023\u7d50\u5668\u5c07ExtFlashSection\u653e\u5165USB\u5340\uff1a"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"ExtFlashSection :\n{\n   *(ExtFlashSection ExtFlashSection.*)\n} >USB\n")),(0,r.kt)("p",null,"\u5728\u9023\u7d50\u6210\u529f\u5f8c\uff0c\u53ef\u901a\u904e\u6aa2\u67e5.map\u6587\u4ef6\uff08application.map\uff09\u4f86\u6aa2\u67e5\u9ede\u9663\u5716\u5730\u5740\u3002 \u4e0b\u9762\u662fapplication.map\u7684\u4e00\u90e8\u5206\uff1a"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"application.map"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"ExtFlashSection\n                0x24000000    0x23ec0\n *(ExtFlashSection ExtFlashSection.*)\n ExtFlashSection\n                0x24000000    0x10000 TouchGFX/build/.../Blue_Logo_touchgfx_logo.o\n                0x24000000                _blue_logo_touchgfx_logo\n ExtFlashSection\n                0x24010000     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small.o\n                0x24010000                _blue_buttons_round_edge_small\n ExtFlashSection\n                0x24019f60     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small_pressed.o\n                0x24019f60                _blue_buttons_round_edge_small_pressed\n")),(0,r.kt)("p",null,"\u5728\u9019\u88e1\u6211\u5011\u53ef\u4ee5\u770b\u5230\uff0c\u5716\u50cf\u7684\u7e3d\u5927\u5c0f\u70ba0x23ec0 = 147,136\u4f4d\u5143\u7d44\u3002 \u4fdd\u5b58\u9ede\u9663\u5716\u76843\u500b\u9663\u5217\u7684\u4f4d\u5740\u5f9e0x24000000\u958b\u59cb\u76f8\u7e7c\u6392\u5217\u3002"),(0,r.kt)("p",null,"\u73fe\u5728\uff0c\u5047\u8a2d\u60a8\u60f3\u8981\u5c07\u9ede\u9663\u5716\u8cc7\u6599\u50b3\u8f38\u5230SD\u5361\u4e2d\u3002 \u6211\u5011\u53ef\u4ee5\u7528\u7c21\u55ae\u7684objcopy\u6307\u4ee4\u5f9e.elf\u6a94\u4e2d\u63d0\u53d6\u9ede\u9663\u5716\u7684\u4e8c\u9032\u4f4d\u8cc7\u6599\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf\n$ ls -l images.bin\n-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin\n")),(0,r.kt)("p",null,"\u9019\u6a23\u53ef\u4ee5\u5f97\u5230\u4e00\u500b\u53ea\u5305\u542b\u5716\u50cf\u4f4d\u5143\u7d44\u9663\u5217\u7684\u6a94\uff08images.bin\uff09\u3002 \u6b64\u6a94\u53ef\u4ee5\u8907\u88fd\u5230USB\u5feb\u9583\u8a18\u61b6\u9ad4\u3001SD\u5361\u751a\u81f3\u662f\u5feb\u9583\u8a18\u61b6\u9ad4\u6676\u7247\u3002"),(0,r.kt)("p",null,"\u73fe\u5728\u7684\u89c0\u5ff5\u662f\uff0c\u7576TouchGFX\u8acb\u6c42\u4f4d\u57400x24000000\u4ee5\u4e0a\u7684\u8cc7\u6599\u6642\uff0c\u6211\u5011\u5f9eSD\u5361\u4e0a\u7684images.bin\u6a94\u7372\u53d6\u8cc7\u6599\u3002"),(0,r.kt)("h2",m({},{id:"modifying-the-blockcopy-function"}),"\u4fee\u6539BlockCopy\u51fd\u6578"),(0,r.kt)("p",null,"\u8a18\u4f4f\uff0c\u5728\u5c07\u9ede\u9663\u5716\u7de9\u5b58\u5230RAM\u6642\uff0cTouchGFX\u8abf\u7528HAL::BlockCopy\u4ee5\u7372\u53d6\u8cc7\u6599\u3002"),(0,r.kt)("p",null,"\u70ba\u4e86\u9023\u7d50\u5230SD\u5361\u4e0a\u7684\u8cc7\u6599\uff0c\u6211\u5011\u53ef\u4ee5\u5728\u7279\u5b9aHAL\u985e\u4e2d\u5be6\u73fe\u65b0\u7684BlockCopy\u3002 \u9019\u88e1\u6211\u5011\u5047\u8a2d\u985e\u7684\u540d\u7a31\u70baTouchGFXHAL\uff08\u7531TouchGFX Generator\u751f\u6210\uff09\uff1a"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"TouchGFXHal.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"class TouchGFXHAL : public TouchGFXGeneratedHAL\n{\npublic:\n    ...\n    virtual bool blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n}\n")),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"TouchGFXHal.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"// This function is called whenever a bitmap is cached. Must copy a number of bytes from the (non-memory-mapped) source\n// to the cache.\nbool TouchGFXHAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes)\n{\n  // If requested data is located within the memory block we have assigned for ExtFlashSection,\n  // provide an implementation for data copying.\n  if (src >= 0x24000000 && src < 0x24100000)\n  {\n    void* dataOffset = src - 0x24000000;\n    // In this example we assume graphics is placed in SD card, and that we have an appropriate function\n    // for copying data from there.\n    sdcard_read(dest, dataOffset, numBytes);\n    return true;\n  }\n  else\n  {\n    // For all other addresses, just use the default implementation.\n    // This is important, as blockCopy is also used for other things in the core framework.\n    return HAL::blockCopy(dest, src, numBytes);\n  }\n}\n")),(0,r.kt)("p",null,"\u73fe\u5728\uff0c\u53ef\u4ee5\u958b\u59cb\u5f9eSD\u5361\u7de9\u5b58\u9ede\u9663\u5716\u3002"),(0,r.kt)("p",null,"\u5982\u679cTouchGFX\u5617\u8a66\u7e6a\u88fd\u6c92\u6709\u7de9\u5b58\u7684\u9ede\u9663\u5716\uff0c\u5b83\u5c07\u5617\u8a66\u5f9e",(0,r.kt)("inlineCode",{parentName:"p"},"bitmap_database"),"\u8868\u4e2d\u627e\u5230\u7684\u4f4d\u5740\u8b80\u53d6\u50cf\u7d20\u3002 \u6b64\u5730\u5740\u5c07\u8655\u65bc\u7bc4\u570d0x24000000 - 0x24100000\u4ee5\u5167\uff0c\u8b80\u53d6\u5c07\u5c0e\u81f4\u7570\u5e38\u3002"),(0,r.kt)("h2",m({},{id:"linking-images-to-ram"}),"\u5c07\u5716\u50cf\u9023\u7d50\u5230RAM"),(0,r.kt)("p",null,"\u5982\u679c\u53ef\u7528RAM\u8db3\u5920\u5927\uff0c\u80fd\u5920\u5b58\u5132\u6240\u6709\u5716\u50cf\uff08\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0cRAM\u5927\u65bc147,136\u4f4d\u5143\u7d44\uff09\uff0c\u5247\u7121\u9700\u4f7f\u7528\u9ede\u9663\u5716\u7de9\u5b58\u4f86\u8907\u88fd\u5716\u50cf\u3002"),(0,r.kt)("p",null,"\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u70ba\u5716\u50cf\u9078\u64c7RAM\u4e2d\u7684\u56fa\u5b9a\u4f4d\u5740\u548c\u7bc4\u570d"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u9023\u7d50\u5668\u8173\u672c\u4e2d\u522a\u9664RAM\u5340\u4e2d\u7684\u7bc4\u570d"),(0,r.kt)("li",{parentName:"ul"},"\u5275\u5efa\u5177\u6709\u9078\u5b9a\u4f4d\u5740\u548c\u5927\u5c0f\u7684\u65b0\u5340IMAGES"),(0,r.kt)("li",{parentName:"ul"},"\u5c07ExtFlashSection\u653e\u5728IMAGES\u5340"),(0,r.kt)("li",{parentName:"ul"},"\u9023\u7d50\u61c9\u7528\u4e26\u6aa2\u67e5.map\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u5f9eapplication.elf\u5275\u5efaimages.bin\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u555f\u52d5TouchGFX\u4e4b\u524d\uff0c\u5c07\u6574\u500bimages.bin\u6a94\u5f9eSD\u5361\u8907\u88fd\u5230RAM\u4e2d\u7684\u9078\u5b9a\u4f4d\u5740")),(0,r.kt)("p",null,"\u8a72\u89e3\u6c7a\u65b9\u6848\u8f03\u70ba\u7c21\u55ae\uff0c\u4f46\u6709\u4e00\u4e9b\u7f3a\u9ede\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7528RAM\u5fc5\u9808\u8db3\u5920\u5927\uff0c\u80fd\u5920\u4fdd\u5b58\u6240\u6709\u5716\u50cf"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u65bc\u8981\u5f9eSD\u5361\u8907\u88fd\uff0c\u56e0\u6b64\u555f\u52d5\u6642\u9593\u6703\u6bd4\u8f03\u9577\uff08\u767e\u842c\u4f4d\u5143\u7d44\u53ef\u80fd\u9700\u8981\u6578\u79d2\uff09")))}y.isMDXComponent=!0}}]);