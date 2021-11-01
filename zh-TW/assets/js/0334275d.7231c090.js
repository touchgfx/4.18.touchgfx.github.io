(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6498],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,d=p["".concat(u,".").concat(g)]||p[g]||s[g]||i;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(67294),a=n(73727),i=n(11368),l=n(35096),o=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),m=n(67023),s=Object.defineProperty,p=Object.defineProperties,g=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(d)for(var n of d(t))f.call(t,n)&&k(e,n,t[n]);return e};var N=function(e){var t,n=e,{isNavLink:s,to:k,href:N,activeClassName:y,isActive:b,"data-noBrokenLinkCheck":w,autoAddBaseUrl:O=!0}=n,_=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:L}}=(0,i.Z)(),{withBaseUrl:T}=(0,c.C)(),E=(0,r.useContext)(u),G=k||N,B=(0,l.Z)(G),P=null==G?void 0:G.replace("pathname://","");let R=void 0!==P?(j=P,O&&(e=>e.startsWith("/"))(j)?T(j):j):void 0;var j;R&&B&&(R=(0,m.applyTrailingSlash)(R,{trailingSlash:x,baseUrl:L}));const S=(0,r.useRef)(!1),F=s?a.OL:a.rU,C=o.Z.canUseIntersectionObserver;let Z;(0,r.useEffect)((()=>(!C&&B&&null!=R&&window.docusaurus.prefetch(R),()=>{C&&Z&&Z.disconnect()})),[R,C,B]);const A=null!==(t=null==R?void 0:R.startsWith("#"))&&void 0!==t&&t,D=!R||!B||A;return R&&B&&!A&&!w&&E.collectLink(R),D?r.createElement("a",v(v({href:R},G&&!B&&{target:"_blank",rel:"noopener noreferrer"}),_)):r.createElement(F,v((I=v({},_),p(I,g({onMouseEnter:()=>{S.current||null==R||(window.docusaurus.preload(R),S.current=!0)},innerRef:e=>{var t,n;C&&e&&B&&(t=e,n=()=>{null!=R&&window.docusaurus.prefetch(R)},Z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),n())}))})),Z.observe(t))},to:R||""}))),s&&{isActive:b,activeClassName:y}));var I}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),i="/"===a||a===r?a:(l=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(a,i)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},82235:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return k},metadata:function(){return v},toc:function(){return N},default:function(){return b}});var r=n(3905),a=n(44035),i=n(22425),l=n(29415),o=n(31217),u=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))g.call(t,n)&&d(e,n,t[n]);return e};const f={id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"\u4f7f\u7528L8\u5716\u50cf\u683c\u5f0f\u6e1b\u5c11\u5b58\u5132\u7a7a\u9593\u6d88\u8017"},k=void 0,v={unversionedId:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",id:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",isDocsHomePage:!1,title:"\u4f7f\u7528L8\u5716\u50cf\u683c\u5f0f\u6e1b\u5c11\u5b58\u5132\u7a7a\u9593\u6d88\u8017",description:"L8\u683c\u5f0f\u7684\u5716\u50cf\u4f54\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u7a7a\u9593\u8f03\u5c11\uff0c\u6bd4\u8af8\u5982ARGB8888\u7b49\u683c\u5f0f\u7684\u7e6a\u88fd\u901f\u5ea6\u66f4\u5feb\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",permalink:"/4.18/zh-TW/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",version:"current",frontMatter:{id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"\u4f7f\u7528L8\u5716\u50cf\u683c\u5f0f\u6e1b\u5c11\u5b58\u5132\u7a7a\u9593\u6d88\u8017"},sidebar:"docs",previous:{title:"\u5728\u57f7\u884c\u6642\u9593\u8f09\u5165\u5716\u50cf",permalink:"/4.18/zh-TW/docs/development/ui-development/scenarios/loading-images-at-runtime"},next:{title:"\u5275\u5efa\u52d5\u614bL8\u5716\u50cf",permalink:"/4.18/zh-TW/docs/development/ui-development/scenarios/creating-dynamic-l8-images"}},N=[{value:"L8\u5716\u50cf\u7bc4\u4f8b",id:"example-l8-image",children:[]},{value:"\u5728TouchGFX Designer\u4e2d\u4f7f\u7528L8\u5716\u50cf",id:"using--l8-images-in-touchgfx-designer",children:[]},{value:"\u900f\u660e\u5716\u50cf",id:"transparent-images",children:[]},{value:"\u5c07\u5716\u50cf\u8f49\u63db\u70ba256\u8272",id:"converting-an-image-to-256-colors",children:[{value:"Paint.NET",id:"paintnet",children:[]},{value:"ImageMagick",id:"imagemagick",children:[]},{value:"\u6bd4\u8f03",id:"comparison",children:[]}]},{value:"\u624b\u52d5\u914d\u7f6e",id:"manual-configuration",children:[]}],y={toc:N};function b(e){var t,n=e,{components:u}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),d),c(t,m({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"L8\u683c\u5f0f\u7684\u5716\u50cf\u4f54\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u7a7a\u9593\u8f03\u5c11\uff0c\u6bd4\u8af8\u5982ARGB8888\u7b49\u683c\u5f0f\u7684\u7e6a\u88fd\u901f\u5ea6\u66f4\u5feb\u3002"),(0,r.kt)("p",null,"L8\u683c\u5f0f\u7684\u5716\u50cf\u5305\u542b\u8abf\u8272\u677f\u548c\u50cf\u7d20\u9663\u5217\uff1a\u8abf\u8272\u677f\u5217\u51fa\u4e86\u6307\u5b9a\u7684\u81f3\u591a256\u7a2e\u984f\u8272\uff0c\u70ba16\u4f4d\u683c\u5f0fRGB565\u300124\u4f4d\u683c\u5f0fRGB888\u621632\u4f4d\u683c\u5f0fARGB8888\u3002 \u50cf\u7d20\u9663\u5217\u5305\u542b\u6bcf\u500b\u50cf\u7d20\u7684\u4e00\u500b\u4f4d\u5143\u7d44\u3002 \u8a72\u4f4d\u5143\u7d44\u662f\u8abf\u8272\u677f\uff08\u984f\u8272\u6e05\u55ae\uff09\u7d22\u5f15\uff0c\u6307\u5411\u50cf\u7d20\u7684\u984f\u8272\u3002 \u70ba\u4e86\u7e6a\u88fdL8\u5716\u50cf\uff0cTouchGFX\u6846\u67b6\u9010\u4e00\u8b80\u53d6\u50cf\u7d20\uff0c\u5728\u8abf\u8272\u677f\u4e2d\u67e5\u627e\u984f\u8272\uff0c\u4e26\u5c07\u9019\u4e9b\u5beb\u5165\u5f71\u50cf\u7de9\u885d\u3002 \u9019\u4e9b\u64cd\u4f5c\u662f\u81ea\u52d5\u5b8c\u6210\u7684\uff0c\u901a\u904eSTM32 Chrom-ART\u786c\u9ad4\u52a0\u901f\u5668\uff08\u5982\u679c\u786c\u9ad4\u4e0a\u6709\uff09\u9032\u884c\u52a0\u901f\u3002"),(0,r.kt)("p",null,"8\u4f4d\u5143\u6bcf\u50cf\u7d20\u4ee3\u8868\u4e00\u5e45L8\u5716\u50cf\u53ef\u4f7f\u7528256\u7a2e\u4e0d\u540c\u984f\u8272\u3002 \u53e6\u4e00\u5e45L8\u5716\u50cf\u53ef\u4f7f\u7528256\u7a2e\u5176\u4ed6\u984f\u8272\uff0c\u9019\u662f\u56e0\u70ba\u5169\u5e45\u5716\u50cf\u6709\u5404\u81ea\u7684\u8abf\u8272\u677f\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/l8-image-with-4x4-pixels-and-palette-with-4-colors.png",mdxType:"Figure"},"\u4e00\u5e45\u67094 x 4\u500b\u50cf\u7d20\u7684L8\u5716\u50cf\u548c\u4e00\u500b\u5305\u542b4\u7a2e\u984f\u8272\u7684\u8abf\u8272\u677f"),(0,r.kt)("p",null,"\u6bcf\u500b\u50cf\u7d20\u4e00\u500b\u4f4d\u5143\u7d44\uff088\u4f4d\u5143\uff09\u3002 \u56e0\u6b64\uff0c\u50cf\u7d20\u5927\u5c0f\u7b49\u65bc\uff08\u5bec\u5ea6 x \u9ad8\u5ea6\uff09\u500b\u4f4d\u5143\u7d44\u3002 \u8abf\u8272\u677f\u984f\u8272\u53ef\u4ee5\u662f16\u4f4d\u300124\u4f4d\u621632\u4f4d\u984f\u8272\u3002 \u56e0\u6b64\uff0c\u6bcf\u7a2e\u984f\u8272\u5b9a\u7fa9\u5c07\u4f54\u75282\u30013\u62164\u500b\u4f4d\u5143\u7d44\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5e40\u7de9\u885d\u70ba16\u4f4d\uff08RGB565\u683c\u5f0f\uff09\uff0c\u5247\u5be6\u5fc3\u5716\u50cf\u61c9\u4ee5L8_RGB565\u683c\u5f0f\u5b58\u5132\u3002 \u5982\u679c\u5f71\u50cf\u7de9\u885d\u70ba24\u4f4d\uff08RGB888\uff09\uff0c\u5247L8\u5716\u50cf\u5fc5\u9808\u4ee5L8_RGB888\u683c\u5f0f\u5b58\u5132\u3002 \u5982\u679c\u5716\u50cf\u662f\u900f\u660e\u7684\uff0c\u5247\u5fc5\u9808\u4f7f\u752832\u4f4d\u683c\u5f0f\uff08ARGB8888\uff09\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u683c\u5f0f")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5f71\u50cf\u7de9\u885d\u683c\u5f0f")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u652f\u63f4\u900f\u660e\u50cf\u7d20")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"16\u4f4dRGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u7121")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"24\u4f4dRGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u7121")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u4e8c\u8005\u517c\u6709"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u6709")))),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,"\u9ede\u9078\u9023\u7d50\u95b1\u8b80\u95dc\u65bc\u8abf\u8272\u677f\u5716\u50cf\u683c\u5f0f\u7684\u66f4\u591a\u5167\u5bb9\uff1a",(0,r.kt)(o.Z,{to:"https://en.wikipedia.org/wiki/Indexed_color",mdxType:"Link"},"https://en.wikipedia.org/wiki/Indexed_color"))),(0,r.kt)("h2",h({},{id:"example-l8-image"}),"L8\u5716\u50cf\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u9019\u662f\u4e00\u5e45\u5178\u578b\u7684\u6a19\u8a8c\u5716\u50cf\u3002 \u9019\u5e45\u5716\u50cf\u53ea\u4f7f\u7528\u4e8616\u7a2e\u4e0d\u540c\u984f\u8272\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-with-16-24bit-colors.png",mdxType:"Figure"},"200 x 200\u50cf\u7d20L8\u5716\u50cf\uff0c\u670916\u7a2e24\u4f4d\u984f\u8272\u3002"),(0,r.kt)("p",null,"\u6b64\u5716\u50cf\u4f54\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u7a7a\u9593\u660e\u986f\u5c0f\u65bc\u6a19\u6e9624\u4f4d\u683c\u5f0f\uff08RGB888\uff09\u7684\u539f\u59cb\u5716\u50cf\u3002 \u4e0b\u8868\u5217\u51fa\u4e86\u6b64\u5be6\u5fc3\u5716\u50cf\u7684\u4e09\u7a2e\u4e0d\u540c\u8abf\u8272\u677f\u683c\u5f0f\u548c\u975eL8\u683c\u5f0f\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u5360\u7528\u91cf\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u683c\u5f0f")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u50cf\u7d20\u5927\u5c0f\uff08\u4f4d\u5143\u7d44\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8abf\u8272\u677f\u5927\u5c0f\uff08\u4f4d\u5143\u7d44\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u7e3d\u5927\u5c0f\uff08\u4f4d\u5143\u7d44\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u7e2e\u6e1b\u7387%")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"120,000"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"0"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"120,000"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,000"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"32"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,032"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"66.6%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,000"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"48"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,048"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"66.6%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,000"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"64"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,064"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"66.6%")))),(0,r.kt)("p",null,"\u6211\u5011\u770b\u5230\u5927\u5c0f\u7e2e\u6e1b\u7387\u5f88\u5927\uff0c\u8abf\u8272\u677f\u7684\u5927\u5c0f\u5728\u4e2d\u7b49\u5c3a\u5bf8\u5716\u50cf\u4e0a\u986f\u5f97\u5fae\u4e0d\u8db3\u9053\u3002"),(0,r.kt)("h2",h({},{id:"using--l8-images-in-touchgfx-designer"}),"\u5728TouchGFX Designer\u4e2d\u4f7f\u7528L8\u5716\u50cf"),(0,r.kt)("p",null,"TouchGFX\u4e2dL8\u5716\u50cf\u683c\u5f0f\u7684\u4f7f\u7528\u5341\u5206\u7c21\u55ae\u3002 \u53ea\u9700\u914d\u7f6e\u5716\u50cf\u8f49\u63db\u5668\uff0c\u4ee5\u4fbf\u5c07\u5716\u50cf\u5f9ePNG\u8f49\u63db\u70baL8\u683c\u5f0f\u3002 \u4e0b\u9762\u6211\u5011\u5c07\u4ecb\u7d39\u6574\u500b\u904e\u7a0b\uff1a"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u555f\u52d5\u65b0\u5c08\u6848\u3002 \u5c07\u5716\u50cf\u8907\u88fd\u5230\u65b0\u5c08\u6848\u4e2d\u7684assets/images\u8cc7\u6599\u593e\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-assets-images-folder.png",mdxType:"Figure"},"TouchGFX\u9805\u76ee\u7684Images\u8cc7\u6599\u593e"),(0,r.kt)("p",null,"\u73fe\u5728\u8f49\u81f3TouchGFX Designer\uff0c\u9ede\u64ca\u9802\u90e8\u5de1\u89bd\u5217\u4e2d\u7684",(0,r.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/images-view"}),"\u201c\u5716\u50cf\u201d\u9078\u9805\u5361"),"\u4e26\u9078\u4e2d\u5716\u50cf\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-images-4.17.png",mdxType:"Figure"},"\u9032\u5165TouchGFX Designer\u7684\u5716\u50cf\u8996\u5716"),(0,r.kt)("p",null,"\u5728\u8996\u7a97\u53f3\u5074\uff0c\u9078\u64c7\u5716\u50cf\u683c\u5f0fL8_RGB888\uff08\u672c\u4f8b\u904b\u884c24\u4f4d\u984f\u8272\uff09\u3002"),(0,r.kt)("p",null,"\u73fe\u5728\uff0c\u53ef\u4ee5\u5728\u756b\u5e03\u4e0a\u63d2\u5165\u5716\u50cf\u5c0f\u5de5\u5177\uff08\u9019\u88e1\u6211\u5011\u5728\u80cc\u666f\u4e0a\u63d2\u5165\u4e00\u500b\u65b9\u6846\uff09\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-canvas-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u756b\u5e03\u4e0a\u7684\u5716\u50cf\u5c0f\u5de5\u5177"),(0,r.kt)("p",null,"\u7121\u9700\u5728UI\u4ee3\u78bc\u4e2d\u505a\u4efb\u4f55\u66f4\u6539\u3002 \u6839\u64da\u6211\u5011\u5728\u201c\u5716\u50cf\u201d\u9078\u9805\u5361\u4e0a\u6240\u505a\u914d\u7f6e\uff0c\u5716\u50cf\u8f49\u63db\u5668\u8f49\u63dbPNG\u6a94\u4e26\u751f\u6210L8\u683c\u5f0f\u7684\u5716\u50cf\u3002"),(0,r.kt)("h2",h({},{id:"transparent-images"}),"\u900f\u660e\u5716\u50cf"),(0,r.kt)("p",null,"\u5982\u4e0a\u6587\u6240\u8ff0\uff0c\u9084\u53ef\u4ee5\u5c0d\u6709\u900f\u660e\u50cf\u7d20\u7684\u5716\u50cf\u4f7f\u7528L8\u5716\u50cf\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/button-image-32bit-non-opaque-argb8888.png",mdxType:"Figure"},"32\u4f4d\u5143\u683c\u5f0fARGB8888\u7684170 x 60\u50cf\u7d20\u6309\u9215\u5716\u50cf"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5716\u50cf\u4f7f\u7528108\u7a2e\u984f\u8272\uff08\u8a31\u591a\u8272\u5ea6\u7684\u85cd\u8272\uff09\u3002 \u6b64\u5716\u50cf\u53ef\u4f7f\u7528\u683c\u5f0fL8_ARGB8888\u3002 \u5927\u5c0f\u5c07\u986f\u8457\u7e2e\u6e1b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u683c\u5f0f")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u50cf\u7d20\u5927\u5c0f\uff08\u4f4d\u5143\u7d44\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8abf\u8272\u677f\u5927\u5c0f\uff08\u4f4d\u5143\u7d44\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u7e3d\u5927\u5c0f\uff08\u4f4d\u5143\u7d44\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u7e2e\u6e1b\u7387%")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,800"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"0"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,800"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"10,200"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"432"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"10,632"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"73.9%")))),(0,r.kt)("h2",h({},{id:"converting-an-image-to-256-colors"}),"\u5c07\u5716\u50cf\u8f49\u63db\u70ba256\u8272"),(0,r.kt)("p",null,"\u8a31\u591a\u5716\u50cf\u4f7f\u7528\u7684\u984f\u8272\u591a\u65bc256\u7a2e\u3002 \u9019\u5c0d\u7167\u7247\u7d1a\u771f\u5be6\u611f\u7684\u5716\u50cf\u6216\u6709\u6f38\u8b8a\u7684\u5716\u50cf\u800c\u8a00\u5f88\u5e38\u898b\u3002 \u7531\u65bc\u9019\u4e9b\u5716\u50cf\u5305\u542b\u591a\u7a2e\u984f\u8272\uff0c\u56e0\u6b64\u4e0d\u80fd\u5728TouchGFX Designer\u4e2d\u76f4\u63a5\u8f49\u63db\u70baL8\u5716\u50cf\u683c\u5f0f\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u5728\u8a31\u591a\u60c5\u6cc1\u4e0b\uff0c\u53ef\u4ee5\u6e1b\u5c11\u7279\u5b9a\u5716\u50cf\u4e2d\u4f7f\u7528\u7684\u984f\u8272\u6578\u91cf\u3002 \u5728\u7406\u60f3\u60c5\u6cc1\u4e0b\uff0c\u5e73\u9762\u8a2d\u8a08\u5e2b\u5c07\u4ee5256\u8272\u8f49\u63db/\u63d0\u4f9b\u5716\u50cf\uff0c\u4f46\u5716\u50cf\u64cd\u4f5c\u5de5\u5177\u4e5f\u53ef\u4ee5\u57f7\u884c\u8f49\u63db\uff0c\u540c\u6642\u4e0d\u6703\u904e\u5ea6\u640d\u5931\u5716\u50cf\u54c1\u8cea\u3002"),(0,r.kt)("h3",h({},{id:"paintnet"}),"Paint.NET"),(0,r.kt)("p",null,"\u6700\u7c21\u55ae\u7684\u65b9\u5f0f\u662f\u4f7f\u7528Paint.NET\u3002 \u6253\u958b\u539f\u59cb\u5716\u50cf\uff0c\u4f7f\u7528\u201cSave As\u201d\u529f\u80fd\u5c07\u5716\u50cf\u4fdd\u5b58\u70ba\u53e6\u4e00\u500b\u6a94\u3002 \u5728\u201cSave Configuration\u201d\u5c0d\u8a71\u65b9\u584a\u4e2d\uff0c\u9078\u64c78\u4f4d\u5143\u4f5c\u70ba\u50cf\u7d20\u6df1\u5ea6\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/paint-dot-net-convert-to-8bit.png",mdxType:"Figure"},"Paint.NET\u5c07\u5716\u50cf\u4fdd\u5b58\u70ba8\u4f4d\u5143\u683c\u5f0f"),(0,r.kt)("p",null,"\u73fe\u5728\uff0c\u5728\u9805\u76ee\u4e2d\u4f7f\u7528\u65b0\u7684PNG\u3002 \u8a18\u5f97\u5728TouchGFX Designer\u4e2d\u7684",(0,r.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/images-view"}),"\u201cImages\u201d\u9078\u9805\u5361"),"\u4e0a\u9078\u64c7L8_ARGB8888\u683c\u5f0f\u3002 \u5728\u8a31\u591a\u60c5\u6cc1\u4e0b\uff0c\u9670\u5f71\u8655\u7406\u4e0d\u5920\u597d\uff0c\u4f46\u6709\u900f\u660e\u908a\u7de3\u7684\u5716\u793a\u770b\u8d77\u4f86\u4e0d\u932f\u3002 \u53ef\u4ee5\u8abf\u6574\u201c\u900f\u660e\u5ea6\u95be\u503c\u201d\uff0c\u67d0\u4e9b\u60c5\u6cc1\u4e0b\u80fd\u5920\u6539\u5584\u7d50\u679c\u3002"),(0,r.kt)("h3",h({},{id:"imagemagick"}),"ImageMagick"),(0,r.kt)("p",null,"\u53e6\u4e00\u7a2e\u5408\u9069\u7684\u5de5\u5177\u662fImageMagick\uff08\u5f9e",(0,r.kt)("a",h({parentName:"p"},{href:"https://imagemagick.org/"}),"www.imagemagick.org"),"\u4e0b\u8f09\uff09\uff0c\u6709\u6642\u4e5f\u80fd\u7372\u5f97\u66f4\u597d\u7684L8\u5716\u50cf\u3002 \u6b64\u5de5\u5177\u53ef\u4ee5\u5f9e\u6307\u4ee4\u884c\u8f49\u63db\u5716\u50cf\u3002 \u56e0\u6b64\uff0c\u5b83\u9069\u5408\u7528\u5728\u8173\u672c\u4e2d\u3002 \u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\uff0c\u53ef\u5c07clock_bg.png\u8f49\u63db\u70ba\u4f7f\u7528\u81f3\u591a256\u7a2e\u984f\u8272\u7684\u5716\u50cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"magick convert clock_bg.png -colors 256 clock_bg_l8_256.png\n")),(0,r.kt)("p",null,"ImageMagick\u9084\u53ef\u4ee5\u544a\u8a34\u60a8\u5716\u50cf\u4e2d\u4f7f\u7528\u4e86\u591a\u5c11\u7a2e\u984f\u8272\u3002 \u4f7f\u7528\u8a72\u6307\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cmd"}),"magick identify -format %k Blue_Buttons_Round_Edge_small.png\n")),(0,r.kt)("h3",h({},{id:"comparison"}),"\u6bd4\u8f03"),(0,r.kt)("p",null,"\u4e0b\u9762\u63d0\u4f9b\u4e86\u4e09\u5e45\u5716\u50cf\uff08\u539f\u5716\u3001\u4f7f\u7528Paint.NET\u7684L8\u5716\u50cf\u548c\u4f7f\u7528ImageMagick\u7684L8\u5716\u50cf\uff09\u7528\u65bc\u6bd4\u8f03\uff1a"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/clock-image-original-paint-dot-net-image-magick-comparison.png",mdxType:"Figure"},"\u6642\u9418\u5716\u50cf\u6bd4\u8f03\uff0c\u5f9e\u5de6\u5230\u53f3\uff1a\u539f\u5716\u3001Paint.NET\u548cImageMagick"),(0,r.kt)("p",null,"\u4e2d\u9593\u7684\u6642\u9418\u55aa\u5931\u4e86\u908a\u754c\u9670\u5f71\u4e2d\u7684\u7d30\u7bc0\u3002 \u5169\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u6642\u9418\u80cc\u666f\u7684\u4e2d\u592e\u90e8\u5206\u770b\u8d77\u4f86\u9084\u53ef\u4ee5\u3002"),(0,r.kt)("h2",h({},{id:"manual-configuration"}),"\u624b\u52d5\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e0d\u4f7f\u7528TouchGFX Designer\u4e5f\u53ef\u4ee5\u9078\u64c7\u5716\u50cf\u683c\u5f0f\u3002 \u6307\u5b9a\u5716\u50cf\u683c\u5f0f\u7684\u6a94application.config\u4f4d\u65bc\u5c08\u6848\u6839\u76ee\u9304\u4e2d\uff1a"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"application.config"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-JSON"}),'{\n  "image_configuration": {\n    images": {\n      "Blue_Buttons_Round_Edge_small.png": {\n        "format": "L8_ARGB8888"\n      }\n    },\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB888",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  }\n}\n')),(0,r.kt)("p",null,"\u201cImage_configuration\u201d\u4e0b\u7684\u201cimages\u201d\u90e8\u5206\u6307\u5b9a\u4e86\u6bcf\u5e45\u5716\u50cf\u7684\u683c\u5f0f\u3002 \u9019\u88e1\u6c92\u6709\u63d0\u53ca\u7684\u5716\u50cf\u5c07\u4ee5\u9810\u8a2d\u683c\u5f0f\uff08opaque_image_format\u6216nonopaque_image_format\uff09\u751f\u6210\u3002"),(0,r.kt)("p",null,"\u6211\u5011\u5efa\u8b70\u4f7f\u7528TouchGFX Designer\u9032\u884c\u5716\u50cf\u914d\u7f6e\uff08\u5982\u53ef\u80fd\uff09\u3002"))}b.isMDXComponent=!0}}]);