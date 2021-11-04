"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4328],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,f=d["".concat(o,".").concat(s)]||d[s]||u[s]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},35096:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},61783:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return y},toc:function(){return b},default:function(){return v}});var a=n(3905),r=n(44035),i=n(22425),l=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&d(e,n,t[n]);return e};const f={id:"creating-dynamic-l8-images",title:"\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u753b\u50cf\u306e\u4f5c\u6210"},g=void 0,y={unversionedId:"development/ui-development/scenarios/creating-dynamic-l8-images",id:"development/ui-development/scenarios/creating-dynamic-l8-images",isDocsHomePage:!1,title:"\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u753b\u50cf\u306e\u4f5c\u6210",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u753b\u50cf\u306e\u4f7f\u7528\u65b9\u6cd5\u3001\u7279\u306b\u30d1\u30ec\u30c3\u30c8\u306e\u4f5c\u6210\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/creating-dynamic-l8-images.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/creating-dynamic-l8-images",permalink:"/4.18/ja/docs/development/ui-development/scenarios/creating-dynamic-l8-images",tags:[],version:"current",frontMatter:{id:"creating-dynamic-l8-images",title:"\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u753b\u50cf\u306e\u4f5c\u6210"},sidebar:"docs",previous:{title:"L8\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u305f\u30e1\u30e2\u30ea\u6d88\u8cbb\u91cf\u306e\u524a\u6e1b",permalink:"/4.18/ja/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"},next:{title:"\u4f4e\u30b3\u30b9\u30c8\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4e0a\u306eTouchGFX",permalink:"/4.18/ja/docs/development/scenarios/touchgfx-on-lowcost-hardware"}},b=[{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u753b\u50cf",id:"dynamic-l8-images",children:[{value:"24\u30d3\u30c3\u30c8\uff65\u30d1\u30ec\u30c3\u30c8\u306b\u3088\u308b\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u753b\u50cf\u306e\u4f5c\u6210",id:"creating-a-dynamic-l8-image-with-24-bit-palette",children:[],level:3},{value:"\u30d1\u30ec\u30c3\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9",id:"accessing-the-palette",children:[],level:3}],level:2},{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u4f8b",id:"dynamic-l8-bitmap-example",children:[{value:"\u30d1\u30ec\u30c3\u30c8\u306e\u64cd\u4f5c",id:"manipulating-the-palette",children:[],level:3}],level:2}],h={toc:b};function v(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},h),d),c(t,o({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u753b\u50cf\u306e\u4f7f\u7528\u65b9\u6cd5\u3001\u7279\u306b\u30d1\u30ec\u30c3\u30c8\u306e\u4f5c\u6210\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",s({parentName:"p"},{href:"../touchgfx-engine-features/dynamic-bitmaps"}),"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u6982\u8981\u306b\u3064\u3044\u3066\u306f\u3053\u3061\u3089"),"\u3001",(0,a.kt)("a",s({parentName:"p"},{href:"using-the-l8-image-format-to-reduce-memory-consumption"}),"L8\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u6982\u8981\u306b\u3064\u3044\u3066\u306f\u3053\u3061\u3089"),"\u3092\u304a\u8aad\u307f\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",s({},{id:"dynamic-l8-images"}),"\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u753b\u50cf"),(0,a.kt)("p",null,"\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306f\u3001\u4ed6\u306e\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3068\u540c\u3058\u3088\u3046\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u304c\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u7528\u306b\u4f5c\u6210\u3059\u308b\u30d1\u30ec\u30c3\u30c8\u306e\u30bf\u30a4\u30d7\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u70b9\u304c\u7570\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"TouchGFX\u306f\u3001\u4ee5\u4e0b\u306e3\u3064\u306e\u30bf\u30a4\u30d7\u306e\u30d1\u30ec\u30c3\u30c8\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u30d1\u30ec\u30c3\u30c8")),(0,a.kt)("th",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_ARGB8888"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"32\u30d3\u30c3\u30c8\u3001\u8d64\u8272\u3001\u7dd1\u8272\u3001\u9752\u8272\u3001\u30d4\u30af\u30bb\u30eb\uff65\u30a2\u30eb\u30d5\u30a1\u30c1\u30e3\u30f3\u30cd\u30eb\u305d\u308c\u305e\u308c\u306b8\u30d3\u30c3\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB888"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"24\u30d3\u30c3\u30c8\u3001\u8d64\u8272\u3001\u7dd1\u8272\u3001\u9752\u8272\u305d\u308c\u305e\u308c\u306b8\u30d3\u30c3\u30c8\u3067\u3001\u30d4\u30af\u30bb\u30eb\uff65\u30a2\u30eb\u30d5\u30a1\u30c1\u30e3\u30f3\u30cd\u30eb\u306a\u3057")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB565"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"16\u30d3\u30c3\u30c8\u3001\u8d64\u8272\u306b\u306f5\u30d3\u30c3\u30c8\u3001\u7dd1\u8272\u306b\u306f6\u30d3\u30c3\u30c8\u3001\u9752\u8272\u306b\u306f5\u30d3\u30c3\u30c8\u3067\u3001\u30d4\u30af\u30bb\u30eb\uff65\u30a2\u30eb\u30d5\u30a1\u30c1\u30e3\u30f3\u30cd\u30eb\u306a\u3057")))),(0,a.kt)("h3",s({},{id:"creating-a-dynamic-l8-image-with-24-bit-palette"}),"24\u30d3\u30c3\u30c8\uff65\u30d1\u30ec\u30c3\u30c8\u306b\u3088\u308b\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u753b\u50cf\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"\u3053\u3053\u3067\u306f\u300124\u30d3\u30c3\u30c8\uff65\u30d1\u30ec\u30c3\u30c8\u3067100x100\u30d4\u30af\u30bb\u30eb\u306eL8\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(100, 100, Bitmap::CLUT_FORMAT_L8_RGB888, 256);\n")),(0,a.kt)("p",null,"\u3053\u306e\u547c\u3073\u51fa\u3057\u3067\u3001100x100 L8\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306824\u30d3\u30c3\u30c8\uff65\u30d1\u30ec\u30c3\u30c8\u304c\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3057\u305f\u3002 \u30d1\u30ec\u30c3\u30c8\u306b\u306f\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u7528\u306b256\u8272\u304c\u4fdd\u6301\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u3053\u306e\u8272\u6570\u306f\u30e1\u30e2\u30ea\u6d88\u8cbb\u3092\u6291\u3048\u308b\u305f\u3081\u306b\u76ee\u7684\u306e\u30b5\u30a4\u30ba\u306b\u8abf\u6574\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",s({},{id:"accessing-the-palette"}),"\u30d1\u30ec\u30c3\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9"),(0,a.kt)("p",null,"\uff08\u6700\u521d\u306e32\u30d3\u30c3\u30c8\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30a2\u30c9\u30ec\u30b9\u306e\uff09\u30d4\u30af\u30bb\u30eb\u306e\u3059\u3050\u5f8c\u306e2\u30d0\u30a4\u30c8\u306b\u306f\u3001L8\u30d1\u30ec\u30c3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\uff08\u30ea\u30c8\u30eb\uff65\u30a8\u30f3\u30c7\u30a3\u30a2\u30f3\u3067\uff09\u683c\u7d0d\u3055\u308c\u3001\u305d\u306e\u5f8c\u306e2\u30d0\u30a4\u30c8\u306b\u306f\u3001\u30d1\u30ec\u30c3\u30c8\u5185\u306e\u30a8\u30f3\u30c8\u30ea\u6570\u304c\uff08\u30ea\u30c8\u30eb\uff65\u30a8\u30f3\u30c7\u30a3\u30a2\u30f3\u3067\uff09\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002\u305d\u306e\u5f8c\u306b\u306f\u5b9f\u969b\u306e\u30d1\u30ec\u30c3\u30c8\u306e\u8272\u304c\u7d9a\u304d\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u30d1\u30ec\u30c3\u30c8\u306e\u8272\u306f\u30d4\u30af\u30bb\u30eb\uff0832\u30d3\u30c3\u30c8\u5272\u5f53\u3066\uff09\u306e4\u30d0\u30a4\u30c8\u5f8c\u308d\u306b\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30d1\u30ec\u30c3\u30c8\u306e\u30dd\u30a4\u30f3\u30bf\uff08\u73fe\u6642\u70b9\u3067\u672a\u521d\u671f\u5316\uff09\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"//Get a pointer to the bitmap data (pixels and palette)\nuint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n//1 byte pr pixel, round up to 32-bit\nuint32_t byteSize = 100*100;\nbyteSize = ((byteSize + 3) & ~3);\n\n//Palette size is saved in byte 2 and 3\nint palSize = (data[3] << 8) | data[2];\n\n//Palette starts four bytes after the pixels\nuint8_t* pal = (data + byteSize + 4);\n")),(0,a.kt)("h2",s({},{id:"dynamic-l8-bitmap-example"}),"\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u4f8b"),(0,a.kt)("p",null,"\u3053\u3053\u304b\u3089\u306f\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u4f5c\u6210\u65b9\u6cd5\u3068\u30d1\u30ec\u30c3\u30c8\u306e\u64cd\u4f5c\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3001\u4f8b\u3092\u901a\u3057\u3066\u898b\u3066\u3044\u304d\u307e\u3059\u3002 \u30d1\u30ec\u30c3\u30c8\u306e\u64cd\u4f5c\u306f\u3001\u4e00\u822c\u7684\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u901a\u5e38\u306f\u884c\u3044\u307e\u305b\u3093\u3002 \u4ee5\u4e0b\u306e\u4f8b\u306f\u3001\u30d1\u30ec\u30c3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306e\u5b9f\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"First we create a Screen in TouchGFX Designer and insert a white Box in the background and an Image at e.g. x=140, y=8:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/designer-img-4.17.png",mdxType:"Figure"},"\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"\u6b21\u306b\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u3066\u3001Screen1View.cpp\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002 \u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u521d\u671f\u5316\u3057\u3066\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u3092\u3001",(0,a.kt)("em",{parentName:"p"},"setupScreen"),"\u306b\u633f\u5165\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"200x256\u30d4\u30af\u30bb\u30eb\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 L8\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u5185\u306e\u5404\u30d4\u30af\u30bb\u30eb\u306f1\u30d0\u30a4\u30c8\u3067\u3042\u308b\u3053\u3068\u3092\u899a\u3048\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002 \u753b\u50cf\u306e\u5404\u884c\u306b\u7570\u306a\u308b\u8272\u3092\u4ed8\u3051\u307e\u3059\u3002 \u6700\u521d\u306e\u884c\u306f\u30ab\u30e9\u30fc0\u3001\u6700\u5f8c\u306e\u884c\u306f\u30ab\u30e9\u30fc255\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u6b21\u306b\u30d1\u30ec\u30c3\u30c8\u5185\u306e\u8272\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002 \u30d1\u30ec\u30c3\u30c8\u306e\u958b\u59cb\u30a2\u30c9\u30ec\u30b9\u3092\u8a08\u7b97\u3057\u3001256\u8272\u306eRGB\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u3001\u7dd1\u8272\u304b\u3089\u8d64\u8272\u3078\u79fb\u308a\u3001\u518d\u3073\u7dd1\u8272\u306b\u623b\u308b\u8272\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),'#ifdef SIMULATOR\nuint32_t cacheBuffer[320*1024/4]; //simulate PSRAM\nuint16_t* psram = (uint16_t*)cacheBuffer;\n#else\nuint16_t* psram = (uint16_t*)(0xd0000000 + 480*272*2*2); //Address after two 16bit framebuffers\n#endif\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n\n    //Create one dynamic bitmap\n    Bitmap::setCache(psram, 320*1024, 1); //320Kb cache\n    const uint16_t palSize = 256;\n    BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(200, 256, Bitmap::CLUT_FORMAT_L8_RGB888, palSize);\n    imageDynamic.setBitmap(Bitmap(dynamicBitmap1));\n\n    if (dynamicBitmap1 == BITMAP_INVALID)\n    {\n        touchgfx_printf("Unable to create dynamic bitmap\\n");\n    }\n    else\n    {\n        uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n        uint8_t* pixel = data;\n        //make colored rows\n        for (int y = 0; y<256; y++)\n        {\n            for (int x = 0; x<200; x++)\n            {\n                *pixel++ = y;\n            }\n        }\n\n        uint32_t byteSize = 200*256;\n        byteSize = ((byteSize + 3) & ~3);\n\n        //Palette starts four bytes after the pixels\n        uint8_t* pal = (data + byteSize + 4);\n\n        //Make palette with 256 colors from green to red to green\n        for (int i = 0; i < palSize; i++)\n        {\n            //BGR\n            pal[i * 3 + 0] = 0x00;\n            pal[i * 3 + 1] = 127 * (1 + cosf(i * 6.28f / (palSize - 1)));\n            pal[i * 3 + 2] = 255 * (sinf(i * 3.14f / (palSize - 1)));\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u3053\u308c\u306b\u3088\u3063\u3066\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306f\u6b21\u306e\u3088\u3046\u306a\u8868\u793a\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/img-20200225-151937.bmp",mdxType:"Figure"},"L8\u753b\u50cf\u306e\u8868\u793a"),(0,a.kt)("h3",s({},{id:"manipulating-the-palette"}),"\u30d1\u30ec\u30c3\u30c8\u306e\u64cd\u4f5c"),(0,a.kt)("p",null,"\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306b\u4f7f\u7528\u3059\u308b\u30d1\u30ec\u30c3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308c\u3070\u3001\u7c21\u5358\u306b\u30d1\u30ec\u30c3\u30c8\u3092\u64cd\u4f5c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u3053\u3067\u306f\u30011\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u305a\u3064\u4e0b\u306b\u8272\u3092\u5faa\u74b0\u3055\u305b\u3001\u3059\u3079\u3066\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u753b\u50cf\u3092\u5f37\u5236\u7684\u306b\u518d\u63cf\u753b\u3057\u307e\u3059\u3002"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"...\nvoid Screen1View::handleTickEvent()\n{\n    //get palette address\n    uint8_t* data = Bitmap::dynamicBitmapGetAddress(imageDynamic.getBitmap());\n    uint32_t byteSize = 200*256;\n    byteSize = ((byteSize + 3) & ~3);\n    const int palSize = (data[3] << 8) | data[2];\n    uint8_t* pal = (data + byteSize + 4);\n\n    //Cycle palette, copy color 0\n    int8_t blue = pal[0], green = pal[1], red = pal[2];\n\n    //Move palette down, 1->0, 2->1, ...\n    for (int i = 3; i < palSize * 3; i++)\n    {\n        pal[i - 3] = pal[i];\n    }\n\n    //Insert color 0 as color 255\n    pal[(palSize - 1) * 3 + 0] = blue;\n    pal[(palSize - 1) * 3 + 1] = green;\n    pal[(palSize - 1) * 3 + 2] = red;\n\n    //Force redraw by invalidating\n    imageDynamic.invalidate();\n}\n")),(0,a.kt)("p",null,"\u3053\u308c\u306b\u3088\u3063\u3066\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u5185\u306e\u8272\u304c\u300c\u4e0a\u65b9\u306b\u300d\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,a.kt)(r.Z,{width:"200",imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/demo.gif",mdxType:"Figure"},"L8\u30d1\u30ec\u30c3\u30c8\u306e\u5faa\u74b0"))}v.isMDXComponent=!0}}]);