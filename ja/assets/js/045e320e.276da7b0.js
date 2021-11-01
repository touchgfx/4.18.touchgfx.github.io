(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2730],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,d=p["".concat(u,".").concat(g)]||p[g]||s[g]||i;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(67294),a=n(73727),i=n(11368),l=n(35096),o=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),m=n(67023),s=Object.defineProperty,p=Object.defineProperties,g=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(d)for(var n of d(t))f.call(t,n)&&k(e,n,t[n]);return e};var N=function(e){var t,n=e,{isNavLink:s,to:k,href:N,activeClassName:y,isActive:b,"data-noBrokenLinkCheck":w,autoAddBaseUrl:O=!0}=n,_=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:L}}=(0,i.Z)(),{withBaseUrl:E}=(0,c.C)(),G=(0,r.useContext)(u),T=k||N,B=(0,l.Z)(T),P=null==T?void 0:T.replace("pathname://","");let j=void 0!==P?(R=P,O&&(e=>e.startsWith("/"))(R)?E(R):R):void 0;var R;j&&B&&(j=(0,m.applyTrailingSlash)(j,{trailingSlash:x,baseUrl:L}));const F=(0,r.useRef)(!1),S=s?a.OL:a.rU,C=o.Z.canUseIntersectionObserver;let Z;(0,r.useEffect)((()=>(!C&&B&&null!=j&&window.docusaurus.prefetch(j),()=>{C&&Z&&Z.disconnect()})),[j,C,B]);const A=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,D=!j||!B||A;return j&&B&&!A&&!w&&G.collectLink(j),D?r.createElement("a",v(v({href:j},T&&!B&&{target:"_blank",rel:"noopener noreferrer"}),_)):r.createElement(S,v((I=v({},_),p(I,g({onMouseEnter:()=>{F.current||null==j||(window.docusaurus.preload(j),F.current=!0)},innerRef:e=>{var t,n;C&&e&&B&&(t=e,n=()=>{null!=j&&window.docusaurus.prefetch(j)},Z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),n())}))})),Z.observe(t))},to:j||""}))),s&&{isActive:b,activeClassName:y}));var I}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),i="/"===a||a===r?a:(l=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(a,i)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},35422:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return k},metadata:function(){return v},toc:function(){return N},default:function(){return b}});var r=n(3905),a=n(44035),i=n(22425),l=n(29415),o=n(31217),u=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))g.call(t,n)&&d(e,n,t[n]);return e};const f={id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"L8\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u305f\u30e1\u30e2\u30ea\u6d88\u8cbb\u91cf\u306e\u524a\u6e1b"},k=void 0,v={unversionedId:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",id:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",isDocsHomePage:!1,title:"L8\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u305f\u30e1\u30e2\u30ea\u6d88\u8cbb\u91cf\u306e\u524a\u6e1b",description:"L8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u753b\u50cf\u306f\u3001ARGB8888\u306a\u3069\u3088\u308a\u3082Flash\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u4f7f\u7528\u91cf\u304c\u5c11\u306a\u304f\u3001\u9ad8\u901f\u3067\u63cf\u753b\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",permalink:"/4.18/ja/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",version:"current",frontMatter:{id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"L8\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u305f\u30e1\u30e2\u30ea\u6d88\u8cbb\u91cf\u306e\u524a\u6e1b"},sidebar:"docs",previous:{title:"\u5b9f\u884c\u6642\u306e\u753b\u50cf\u306e\u8aad\u8fbc\u307f",permalink:"/4.18/ja/docs/development/ui-development/scenarios/loading-images-at-runtime"},next:{title:"\u30c0\u30a4\u30ca\u30df\u30c3\u30afL8\u753b\u50cf\u306e\u4f5c\u6210",permalink:"/4.18/ja/docs/development/ui-development/scenarios/creating-dynamic-l8-images"}},N=[{value:"L8\u753b\u50cf\u306e\u4f8b",id:"example-l8-image",children:[]},{value:"TouchGFX Designer\u3067\u306eL8\u753b\u50cf\u306e\u4f7f\u7528",id:"using--l8-images-in-touchgfx-designer",children:[]},{value:"\u900f\u660e\u5ea6\u306e\u3042\u308b\u753b\u50cf",id:"transparent-images",children:[]},{value:"256\u8272\u3078\u306e\u753b\u50cf\u5909\u63db",id:"converting-an-image-to-256-colors",children:[{value:"Paint.NET",id:"paintnet",children:[]},{value:"ImageMagick",id:"imagemagick",children:[]},{value:"\u6bd4\u8f03",id:"comparison",children:[]}]},{value:"\u624b\u52d5\u306b\u3088\u308b\u8a2d\u5b9a",id:"manual-configuration",children:[]}],y={toc:N};function b(e){var t,n=e,{components:u}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),d),c(t,m({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"L8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u753b\u50cf\u306f\u3001ARGB8888\u306a\u3069\u3088\u308a\u3082Flash\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u4f7f\u7528\u91cf\u304c\u5c11\u306a\u304f\u3001\u9ad8\u901f\u3067\u63cf\u753b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"L8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u753b\u50cf\u306f\u30ab\u30e9\u30fc\uff65\u30d1\u30ec\u30c3\u30c8\u3068\u30d4\u30af\u30bb\u30eb\uff65\u30a2\u30ec\u30a4\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002\u30ab\u30e9\u30fc\uff65\u30d1\u30ec\u30c3\u30c8\u306b\u306f256\u306e\u7570\u306a\u308b\u8272\u304c\u3001\u305d\u308c\u305e\u308c16\u30d3\u30c3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8RGB565\u300124\u30d3\u30c3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8RGB888\u3001\u307e\u305f\u306f32\u30d3\u30c3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8ARGB8888\u3067\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30d4\u30af\u30bb\u30eb\uff65\u30a2\u30ec\u30a4\u306f\u5404\u30d4\u30af\u30bb\u30eb\u304c1\u30d0\u30a4\u30c8\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30d0\u30a4\u30c8\u306f\u3001\u30ab\u30e9\u30fc\uff65\u30d1\u30ec\u30c3\u30c8\uff08\u8272\u306e\u30ea\u30b9\u30c8\uff09\u3078\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3067\u3001\u305d\u306e\u30d4\u30af\u30bb\u30eb\u306b\u5bfe\u5fdc\u3059\u308b\u8272\u3092\u6307\u3057\u3066\u3044\u307e\u3059\u3002 TouchGFX\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u306f\u3001\u30d4\u30af\u30bb\u30eb\u30921\u3064\u305a\u3064\u8aad\u307f\u53d6\u308a\u3001\u30d1\u30ec\u30c3\u30c8\u5185\u3067\u5bfe\u5fdc\u3059\u308b\u8272\u3092\u898b\u3064\u3051\u3001\u305d\u308c\u3089\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u3001L8\u753b\u50cf\u3092\u63cf\u753b\u3057\u307e\u3059\u3002 \u3053\u306e\u64cd\u4f5c\u306f\u81ea\u52d5\u7684\u306b\u884c\u308f\u308c\u3001STM32 Chrom-ART\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf\u306b\u3088\u3063\u3066\u52a0\u901f\u5316\u3055\u308c\u307e\u3059\uff08\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4e0a\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u5834\u5408\uff09\u3002"),(0,r.kt)("p",null,"\u30d4\u30af\u30bb\u30eb\u3042\u305f\u308a8\u30d3\u30c3\u30c8\u3068\u3044\u3046\u306e\u306f\u30011\u3064\u306eL8\u753b\u50cf\u304c256\u306e\u7570\u306a\u308b\u8272\u3092\u4f7f\u7528\u3067\u304d\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u5225\u306eL8\u753b\u50cf\u3082\u5225\u306e256\u8272\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u3064\u307e\u308a\u30012\u3064\u306e\u753b\u50cf\u306b\u306f\u305d\u308c\u305e\u308c\u72ec\u81ea\u306e\u30d1\u30ec\u30c3\u30c8\u304c\u3042\u308b\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/l8-image-with-4x4-pixels-and-palette-with-4-colors.png",mdxType:"Figure"},"4x4\u30d4\u30af\u30bb\u30eb\u306eL8\u753b\u50cf\u30684\u8272\u306e\u30d1\u30ec\u30c3\u30c8"),(0,r.kt)("p",null,"\u30d4\u30af\u30bb\u30eb\u306f\u305d\u308c\u305e\u308c1\u30d0\u30a4\u30c8\uff088\u30d3\u30c3\u30c8\uff09\u3067\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u30d4\u30af\u30bb\u30eb\u306e\u30b5\u30a4\u30ba\u306f\u5e45 x \u9ad8\u3055\u306e\u30d0\u30a4\u30c8\u6570\u306b\u306a\u308a\u307e\u3059\u3002 \u30d1\u30ec\u30c3\u30c8\u306e\u8272\u306f16\u30d3\u30c3\u30c8\u300124\u30d3\u30c3\u30c8\u3001\u307e\u305f\u306f32\u30d3\u30c3\u30c8\uff65\u30ab\u30e9\u30fc\u306b\u3067\u304d\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u305d\u308c\u305e\u308c\u306e\u8272\u306e\u5b9a\u7fa9\u306b2\u30d0\u30a4\u30c8\u30013\u30d0\u30a4\u30c8\u3001\u307e\u305f\u306f4\u30d0\u30a4\u30c8\u3092\u5fc5\u8981\u3068\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c16\u30d3\u30c3\u30c8\uff08RGB565\u5f62\u5f0f\uff09\u306e\u5834\u5408\u3001\u5857\u308a\u3064\u3076\u3057\u753b\u50cf\u306fL8_RGB565\u3067\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304c24\u30d3\u30c3\u30c8\uff08RGB888\uff09\u306e\u5834\u5408\u3001L8\u753b\u50cf\u306fL8_RGB888\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u753b\u50cf\u304c\u900f\u660e\u306a\u5834\u5408\u306f\u300132\u30d3\u30c3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\uff08ARGB8888\uff09\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u5f62\u5f0f")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u900f\u660e\u306a\u30d4\u30af\u30bb\u30eb\u306e\u30b5\u30dd\u30fc\u30c8")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"16\u30d3\u30c3\u30c8RGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u306a\u3057")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"24\u30d3\u30c3\u30c8RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u306a\u3057")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u4e21\u65b9"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u3042\u308a")))),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,"\u30d1\u30ec\u30c3\u30c8\u306e\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)(o.Z,{to:"https://en.wikipedia.org/wiki/Indexed_color",mdxType:"Link"},"https://en.wikipedia.org/wiki/Indexed_color\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,r.kt)("h2",h({},{id:"example-l8-image"}),"L8\u753b\u50cf\u306e\u4f8b"),(0,r.kt)("p",null,"\u6b21\u306b\u793a\u3059\u306e\u306f\u4e00\u822c\u7684\u306a\u30ed\u30b4\u753b\u50cf\u3067\u3059\u3002 \u3053\u306e\u753b\u50cf\u3067\u306f16\u8272\u306e\u307f\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-with-16-24bit-colors.png",mdxType:"Figure"},"16\u8272\u306e24\u30d3\u30c3\u30c8\uff65\u30ab\u30e9\u30fc\u3092\u4f7f\u7528\u3057\u305f200x200\u30d4\u30af\u30bb\u30eb\u306eL8\u753b\u50cf"),(0,r.kt)("p",null,"\u3053\u306e\u753b\u50cf\u306eFlash\u5185\u306e\u30b5\u30a4\u30ba\u306f\u3001\u6a19\u6e96\u306e24\u30d3\u30c3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\uff08RGB888\uff09\u306e\u5143\u306e\u753b\u50cf\u3088\u308a\u3082\u5927\u5e45\u306b\u5c0f\u3055\u304f\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u6b21\u306e\u30c6\u30fc\u30d6\u30eb\u306f\u3001\u3053\u306e\u5177\u4f53\u7684\u306a\u753b\u50cf\u306b\u3064\u3044\u3066\u30013\u3064\u306e\u7570\u306a\u308b\u30d1\u30ec\u30c3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3068\u975eL8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5834\u5408\u306e\u3001Flash\u4f7f\u7528\u91cf\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d4\u30af\u30bb\u30eb\u306e\u30b5\u30a4\u30ba\uff08\u30d0\u30a4\u30c8\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d1\u30ec\u30c3\u30c8\u306e\u30b5\u30a4\u30ba\uff08\u30d0\u30a4\u30c8\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5168\u4f53\u30b5\u30a4\u30ba\uff08\u30d0\u30a4\u30c8\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u524a\u6e1b\u7387\uff08%\uff09")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"120,000"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"0"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"120,000"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB565"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,000"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"32"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,032"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"66.6%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,000"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"48"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,048"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"66.6%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,000"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"64"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,064"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"66.6%")))),(0,r.kt)("p",null,"\u30b5\u30a4\u30ba\u306e\u524a\u6e1b\u7387\u306f\u975e\u5e38\u306b\u5927\u304d\u304f\u3001\u30d1\u30ec\u30c3\u30c8\u306e\u30b5\u30a4\u30ba\u306f\u4e2d\u898f\u6a21\u30b5\u30a4\u30ba\u306e\u753b\u50cf\u306b\u3068\u3063\u3066\u4e9b\u7d30\u306a\u3082\u306e\u3067\u3042\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",h({},{id:"using--l8-images-in-touchgfx-designer"}),"TouchGFX Designer\u3067\u306eL8\u753b\u50cf\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"TouchGFX\u3067L8\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u306e\u306f\u3068\u3066\u3082\u7c21\u5358\u3067\u3059\u3002 \u753b\u50cf\u30b3\u30f3\u30d0\u30fc\u30bf\u3092\u3001PNG\u304b\u3089L8\u5f62\u5f0f\u306b\u753b\u50cf\u3092\u5909\u63db\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308b\u3060\u3051\u3067\u3059\u3002 \u6b21\u306b\u3001\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u5168\u4f53\u3092\u7c21\u5358\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX Designer\u3067\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u59cb\u3057\u307e\u3059\u3002 \u81ea\u5206\u306e\u753b\u50cf\u3092\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306eassets/images\u30d5\u30a9\u30eb\u30c0\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-assets-images-folder.png",mdxType:"Figure"},"TouchGFX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306eImages\u30d5\u30a9\u30eb\u30c0"),(0,r.kt)("p",null,"\u6b21\u306b\u3001TouchGFX Designer\u306b\u79fb\u52d5\u3057\u3001\u4e0a\u90e8\u306e\u30d0\u30fc\u306e",(0,r.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/images-view"}),"Images\u30bf\u30d6"),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u753b\u50cf\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-images-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306e\u753b\u50cf\u30d3\u30e5\u30fc\u5185\u306e\u30ed\u30b4"),(0,r.kt)("p",null,"\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u53f3\u5074\u3067\u3001\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8L8_RGB888\u3092\u9078\u629e\u3057\u307e\u3059\uff08\u3053\u306e\u4f8b\u3067\u306f\u300124\u30d3\u30c3\u30c8\uff65\u30ab\u30e9\u30fc\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u307e\u3059\uff09\u3002"),(0,r.kt)("p",null,"\u753b\u50cf\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30ad\u30e3\u30f3\u30d0\u30b9\u306b\u633f\u5165\u3055\u308c\u307e\u3059\uff08\u3053\u306e\u4f8b\u3067\u306f\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u30dc\u30c3\u30af\u30b9\u3092\u633f\u5165\u3057\u3066\u3044\u307e\u3059\uff09\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-canvas-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u306e\u30ad\u30e3\u30f3\u30d0\u30b9\u4e0a\u306e\u753b\u50cf\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),(0,r.kt)("p",null,"UI\u30b3\u30fc\u30c9\u3067\u306f\u3001\u4f55\u3082\u5909\u66f4\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u753b\u50cf\u30b3\u30f3\u30d0\u30fc\u30bf\u304cPNG\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u63db\u3057\u3001L8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u753b\u50cf\u3092\u751f\u6210\u3057\u307e\u3059\u3002Images\u30bf\u30d6\u3067\u3059\u3067\u306b\u8a2d\u5b9a\u6e08\u307f\u3060\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)("h2",h({},{id:"transparent-images"}),"\u900f\u660e\u5ea6\u306e\u3042\u308b\u753b\u50cf"),(0,r.kt)("p",null,"\u524d\u8ff0\u3057\u305f\u3088\u3046\u306b\u3001\u900f\u660e\u5ea6\u306e\u3042\u308b\u753b\u50cf\u306bL8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/button-image-32bit-non-opaque-argb8888.png",mdxType:"Figure"},"32\u30d3\u30c3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8ARGB8888\u306e170x60\u30d4\u30af\u30bb\u30eb\u306e\u30dc\u30bf\u30f3\u753b\u50cf"),(0,r.kt)("p",null,"\u4e0a\u306e\u753b\u50cf\u306f108\u8272\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\uff08\u591a\u6570\u306e\u6fc3\u6de1\u306e\u9752\u8272\uff09\u3002 \u3053\u306e\u753b\u50cf\u3067\u306f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8L8_ARGB8888\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u30b5\u30a4\u30ba\u306f\u5927\u5e45\u306b\u524a\u6e1b\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d4\u30af\u30bb\u30eb\u306e\u30b5\u30a4\u30ba\uff08\u30d0\u30a4\u30c8\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d1\u30ec\u30c3\u30c8\u306e\u30b5\u30a4\u30ba\uff08\u30d0\u30a4\u30c8\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5168\u4f53\u30b5\u30a4\u30ba\uff08\u30d0\u30a4\u30c8\uff09")),(0,r.kt)("th",h({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u524a\u6e1b\u7387\uff08%\uff09")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"ARGB888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,800"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"0"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"40,800"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"10,200"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"432"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"10,632"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"73.9%")))),(0,r.kt)("h2",h({},{id:"converting-an-image-to-256-colors"}),"256\u8272\u3078\u306e\u753b\u50cf\u5909\u63db"),(0,r.kt)("p",null,"\u591a\u304f\u306e\u753b\u50cf\u306f256\u8272\u3088\u308a\u591a\u304f\u306e\u8272\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002 \u30d5\u30a9\u30c8\u30ea\u30a2\u30ea\u30b9\u30c6\u30a3\u30c3\u30af\u306a\u753b\u50cf\u3084\u30b0\u30e9\u30c7\u30fc\u30b7\u30e7\u30f3\u306e\u3042\u308b\u753b\u50cf\u3067\u306f\u5f53\u305f\u308a\u524d\u306e\u3053\u3068\u3067\u3059\u3002 \u3053\u308c\u3089\u306e\u753b\u50cf\u306f\u591a\u304f\u306e\u8272\u3092\u542b\u3093\u3067\u3044\u308b\u305f\u3081\u3001TouchGFX Designer\u3067\u306fL8\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u76f4\u63a5\u5909\u63db\u3067\u304d\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u305f\u3060\u3057\u591a\u304f\u306e\u5834\u5408\u3001\u7279\u5b9a\u306e\u753b\u50cf\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u8272\u306e\u6570\u3092\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u7406\u60f3\u7684\u306b\u306f\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u304c256\u8272\u306b\u753b\u50cf\u3092\u5909\u63db\u3057\u3066\u63d0\u4f9b\u3059\u308b\u306e\u304c\u671b\u307e\u3057\u3044\u306e\u3067\u3059\u304c\u3001\u753b\u50cf\u64cd\u4f5c\u30c4\u30fc\u30eb\u3067\u3082\u753b\u50cf\u54c1\u8cea\u3092\u5931\u3044\u3059\u304e\u308b\u3053\u3068\u306a\u304f\u5909\u63db\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",h({},{id:"paintnet"}),"Paint.NET"),(0,r.kt)("p",null,"\u6700\u3082\u7c21\u5358\u306a\u65b9\u6cd5\u306fPaint.NET\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u5143\u306e\u753b\u50cf\u3092\u958b\u304d\u3001Save As\u3092\u4f7f\u7528\u3057\u3066\u753b\u50cf\u3092\u5225\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002 Save Configuration\u30c0\u30a4\u30a2\u30ed\u30b0\u3067\u3001\u30d4\u30af\u30bb\u30eb\u6df1\u5ea6\u306b8\u30d3\u30c3\u30c8\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/paint-dot-net-convert-to-8bit.png",mdxType:"Figure"},"Paint.NET\u3067\u753b\u50cf\u30928\u30d3\u30c3\u30c8\uff65\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u4fdd\u5b58"),(0,r.kt)("p",null,"\u6b21\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067\u65b0\u3057\u3044PNG\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 TouchGFX Designer\u306e",(0,r.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/images-view"}),"Images\u30bf\u30d6"),'\u3067\u306f\u3001\u5fc5\u305aL8_ARGB8888\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u30b7\u30e3\u30c9\u30a6\u30a4\u30f3\u30b0\u306f\u5341\u5206\u306b\u51e6\u7406\u3055\u308c\u307e\u305b\u3093\u304c\u3001\u591a\u304f\u306e\u5834\u5408\u3001\u900f\u660e\u306a\u30a8\u30c3\u30b8\u306e\u30a2\u30a4\u30b3\u30f3\u306f\u3046\u307e\u304f\u8868\u793a\u3055\u308c\u307e\u3059\u3002 "Transparency threshold"\u5024\u3092\u8abf\u6574\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u3001\u305d\u308c\u306b\u3088\u3063\u3066\u7d50\u679c\u304c\u5411\u4e0a\u3059\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002'),(0,r.kt)("h3",h({},{id:"imagemagick"}),"ImageMagick"),(0,r.kt)("p",null,"\u9069\u3057\u305f\u3082\u30461\u3064\u306e\u30c4\u30fc\u30eb\u306f\u3001ImageMagick\uff08",(0,r.kt)("a",h({parentName:"p"},{href:"https://imagemagick.org/"}),"www.imagemagick.org"),"\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\uff09\u3067\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u3055\u3089\u306b\u512a\u308c\u305fL8\u753b\u50cf\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30c4\u30fc\u30eb\u3067\u306f\u30b3\u30de\u30f3\u30c9\uff65\u30e9\u30a4\u30f3\u304b\u3089\u753b\u50cf\u5909\u63db\u304c\u3067\u304d\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u306e\u4f7f\u7528\u304c\u9069\u3057\u3066\u3044\u307e\u3059\u3002 clock_bg.png\u3092\u6700\u5927\u3067256\u8272\u3092\u4f7f\u7528\u3059\u308b\u753b\u50cf\u306b\u5909\u63db\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"magick convert clock_bg.png -colors 256 clock_bg_l8_256.png\n")),(0,r.kt)("p",null,"ImageMagick\u3067\u306f\u3001\u753b\u50cf\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b\u8272\u306e\u6570\u3092\u77e5\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cmd"}),"magick identify -format %k Blue_Buttons_Round_Edge_small.png\n")),(0,r.kt)("h3",h({},{id:"comparison"}),"\u6bd4\u8f03"),(0,r.kt)("p",null,"\u6bd4\u8f03\u306e\u305f\u3081\u306e3\u3064\u306e\u753b\u50cf\uff08\u30aa\u30ea\u30b8\u30ca\u30eb\u3001Paint.NET\u4f7f\u7528\u306eL8\u3001ImageMagick\u4f7f\u7528\u306eL8\uff09\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/clock-image-original-paint-dot-net-image-magick-comparison.png",mdxType:"Figure"},"\u6642\u8a08\u306e\u753b\u50cf\u306e\u6bd4\u8f03: \u5de6\u304b\u3089\u3001\u30aa\u30ea\u30b8\u30ca\u30eb\u3001Paint.NET\u3001ImageMagick"),(0,r.kt)("p",null,"\u771f\u3093\u4e2d\u306e\u6642\u8a08\u3067\u306f\u3001\u5883\u754c\u306e\u5f71\u306e\u8a73\u7d30\u304c\u5931\u308f\u308c\u3066\u3044\u307e\u3059\u3002 \u3069\u3061\u3089\u306e\u5909\u63db\u3082\u3001\u6642\u8a08\u306e\u80cc\u666f\u306e\u4e2d\u5fc3\u90e8\u306f\u554f\u984c\u306a\u3044\u3088\u3046\u306b\u898b\u3048\u307e\u3059\u3002"),(0,r.kt)("h2",h({},{id:"manual-configuration"}),"\u624b\u52d5\u306b\u3088\u308b\u8a2d\u5b9a"),(0,r.kt)("p",null,"TouchGFX Designer\u3092\u4f7f\u7528\u305b\u305a\u306b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u306b\u3042\u308bapplication.config\u30d5\u30a1\u30a4\u30eb\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"application.config"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-JSON"}),'{\n  "image_configuration": {\n    images": {\n      "Blue_Buttons_Round_Edge_small.png": {\n        "format": "L8_ARGB8888"\n      }\n    },\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB888",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  }\n}\n')),(0,r.kt)("p",null,'"image_configuration"\u306e\u4e0b\u306e"images"\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u500b\u3005\u306e\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u6307\u5b9a\u3055\u308c\u306a\u3044\u753b\u50cf\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\uff08opaque_image_format\u307e\u305f\u306fnonopaque_image_format\uff09\u3067\u751f\u6210\u3055\u308c\u307e\u3059\u3002'),(0,r.kt)("p",null,"\u753b\u50cf\u306e\u8a2d\u5b9a\u3067\u306f\u3001\u53ef\u80fd\u306a\u9650\u308aTouchGFX Designer\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"))}b.isMDXComponent=!0}}]);