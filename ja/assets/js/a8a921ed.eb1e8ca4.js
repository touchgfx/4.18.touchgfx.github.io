(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1408],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},6771:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("p",null,r.createElement("div",{class:"videoWrapper"},r.createElement("video",{controls:!0},r.createElement("source",{src:this.props.url,type:"video/mp4"}))))}}t.Z=a},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(67294),a=n(73727),i=n(11368),o=n(35096),c=n(84487);const l=(0,r.createContext)({collectLink:()=>{}});var p=n(25026),s=n(67023),u=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))g.call(t,n)&&v(e,n,t[n]);return e};var k=function(e){var t,n=e,{isNavLink:u,to:v,href:k,activeClassName:y,isActive:C,"data-noBrokenLinkCheck":w,autoAddBaseUrl:O=!0}=n,E=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:N}}=(0,i.Z)(),{withBaseUrl:T}=(0,p.C)(),S=(0,r.useContext)(l),j=v||k,P=(0,o.Z)(j),B=null==j?void 0:j.replace("pathname://","");let M=void 0!==B?(Z=B,O&&(e=>e.startsWith("/"))(Z)?T(Z):Z):void 0;var Z;M&&P&&(M=(0,s.applyTrailingSlash)(M,{trailingSlash:x,baseUrl:N}));const D=(0,r.useRef)(!1),_=u?a.OL:a.rU,F=c.Z.canUseIntersectionObserver,A=(0,r.useRef)();(0,r.useEffect)((()=>(!F&&P&&null!=M&&window.docusaurus.prefetch(M),()=>{F&&A.current&&A.current.disconnect()})),[A,M,F,P]);const I=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,R=!M||!P||I;return M&&P&&!I&&!w&&S.collectLink(M),R?r.createElement("a",b(b({href:M},j&&!P&&{target:"_blank",rel:"noopener noreferrer"}),E)):r.createElement(_,b((U=b({},E),m(U,d({onMouseEnter:()=>{D.current||null==M||(window.docusaurus.preload(M),D.current=!0)},innerRef:e=>{var t,n;F&&e&&P&&(t=e,n=()=>{null!=M&&window.docusaurus.prefetch(M)},A.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.current.unobserve(t),A.current.disconnect(),n())}))})),A.current.observe(t))},to:M||""}))),u&&{isActive:C,activeClassName:y}));var U}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),i="/"===a||a===r?a:(o=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,i)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3716:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return k},toc:function(){return y},default:function(){return w}});var r=n(3905),a=n(44035),i=n(29415),o=n(31217),c=n(22425),l=n(6771),p=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&f(e,n,t[n]);return e};const v={id:"achieving-better-performance-with-cacheable-container",title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306b\u3088\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a"},b=void 0,k={unversionedId:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",id:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",isDocsHomePage:!1,title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306b\u3088\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b7\u30ca\u30ea\u30aa\u306b\u304a\u3044\u3066\u3001RAM\u3092\u4f7f\u7528\u3057\u3066\u4e00\u90e8\u306e\u518d\u5229\u7528\u53ef\u80fd\u306a\u63cf\u753b\u3092\u4fdd\u5b58\u3059\u308b\u3053\u3068\u3067\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a\u3092\u9054\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",permalink:"/4.18/ja/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",tags:[],version:"current",frontMatter:{id:"achieving-better-performance-with-cacheable-container",title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306b\u3088\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a"},sidebar:"docs",previous:{title:"General UI Component Performance",permalink:"/4.18/ja/docs/development/ui-development/ui-components/general-ui-component-performance"},next:{title:"\u5b9f\u884c\u6642\u306e\u753b\u50cf\u306e\u8aad\u8fbc\u307f",permalink:"/4.18/ja/docs/development/ui-development/scenarios/loading-images-at-runtime"}},y=[{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3078\u306e\u5f71\u97ff",id:"performance-impact",children:[],level:2},{value:"\u30c6\u30b9\u30c8\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",id:"test-application",children:[],level:2},{value:"\u8907\u96d1\u306a\u30b3\u30f3\u30c6\u30ca\u306e\u518d\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance-of-redrawing-complex-containers",children:[],level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3088\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u5411\u4e0a",id:"improving-performance-through-caching",children:[],level:2},{value:"\u307e\u3068\u3081",id:"conclusion",children:[],level:2}],C={toc:y};function w(e){var t,n=e,{components:p}=n,f=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},C),f),s(t,u({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30b7\u30ca\u30ea\u30aa\u306b\u304a\u3044\u3066\u3001RAM\u3092\u4f7f\u7528\u3057\u3066\u4e00\u90e8\u306e\u518d\u5229\u7528\u53ef\u80fd\u306a\u63cf\u753b\u3092\u4fdd\u5b58\u3059\u308b\u3053\u3068\u3067\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a\u3092\u9054\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c9\u30e9\u30c3\u30b0\u307e\u305f\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff08\u753b\u50cf\u3084\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\u306a\u3069\uff09\u3092\u79fb\u52d5\u3059\u308b\u5834\u5408\u3001TouchGFX\u3067\u306f\u3059\u3079\u3066\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u3053\u308c\u3089\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u518d\u63cf\u753b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001\u305d\u308c\u307e\u3067\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30ab\u30d0\u30fc\u3057\u3066\u3044\u305f\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u90e8\u5206\u3067\u3042\u3063\u3066\u3082\u518d\u63cf\u753b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u3001\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3001\u30b7\u30a7\u30fc\u30d7\u3001\u307e\u305f\u306f\u5927\u304d\u306a\u900f\u904e\u753b\u50cf\u306a\u3069\u3001\u8907\u96d1\u306a\u8a08\u7b97\u3092\u8981\u3059\u308b\u3082\u306e\u3067\u3042\u308b\u5834\u5408\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u52b9\u7387\u7684\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u306e\u306f\u56f0\u96e3\u3067\u3059\u3002\u3053\u308c\u3089\u306f\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u305b\u305a\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u304b\u3089\u3067\u3059\u3002 \u3053\u306e\u7d50\u679c\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u518d\u63cf\u753b\u306b\u4f55\u30df\u30ea\u79d2\u3082\u304b\u304b\u308b\u3088\u3046\u306b\u306a\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u3082\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u7528\u3057\u3066\u3001\u6642\u9593\u306e\u304b\u304b\u308b\u518d\u63cf\u753b\u3092\u907f\u3051\u308b\u3053\u3068\u3067\u3001\u8a08\u7b97\u304c\u8907\u96d1\u306a\u8981\u7d20\u3092\u542b\u3080\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u901f\u5ea6\u3092\u4e0a\u3052\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u53d6\u308a\u4e0a\u3052\u307e\u3059\u3002  \u3053\u306e\u8a18\u4e8b\u3067\u306e\u6e2c\u5b9a\u306fSTM32F429Discovery\u30dc\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u884c\u308f\u308c\u307e\u3057\u305f\u304c\u3001\u4e00\u822c\u7684\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306b\u3088\u308b\u624b\u6cd5\u306f\u3001\u305d\u306e\u4ed6\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002 \u63d0\u4f9b\u3055\u308c\u3066\u3044\u308bRAM\u306e\u4e00\u90e8\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u306e\u305f\u3081\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u300c",(0,r.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7"),"\u300d\u3082\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",g({},{id:"performance-impact"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3078\u306e\u5f71\u97ff"),(0,r.kt)("p",null,"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3067\u306e\u8a08\u7b97\u306b\u6642\u9593\u306e\u304b\u304b\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u79fb\u52d5\u306f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059\u306e\u3067\u3001\u591a\u304f\u306e\u5c0f\u3055\u3044\u30b9\u30c6\u30c3\u30d7\u3092\u5c55\u958b\u3059\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u4f4e\u901f\u304b\u3064\u920d\u3044\u52d5\u4f5c\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30d5\u30ec\u30fc\u30e0\u3054\u3068\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u304b\u3089\u3067\u3059\u3002 \u9ad8\u901f\u3067\uff08\u6642\u9593\u5185\u306b\uff09\u5b8c\u4e86\u3059\u308b\u3088\u3046\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3059\u308b\u3068\u3001\u500b\u3005\u306e\u30b9\u30c6\u30c3\u30d7\u304c\u5927\u304d\u304f\u306a\u308a\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u30b9\u30e0\u30fc\u30ba\u306b\u8868\u793a\u3055\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306b\u793a\u3059\u306e\u306fSTM32F429-DISCO\u30dc\u30fc\u30c9\uff08240x320\uff09\u306e\u5b9f\u884c\u4f8b\u3067\u3001\u30d5\u30eb\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u30b3\u30f3\u30c6\u30ca\u304c\u5782\u76f4\u306b\u4e0a\u5411\u304d\u306b\u79fb\u52d5\u3059\u308b\u3068\u540c\u6642\u306b\u3001\u540c\u69d8\u306e\u30b3\u30f3\u30c6\u30ca\u304c\u4e0b\u304b\u3089\u79fb\u52d5\u3057\u3066\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0b\u306e\u30d3\u30c7\u30aa\u3067\u306f\u3001",(0,r.kt)("a",g({parentName:"p"},{href:"../ui-components/buttons/toggle-button"}),"ToggleButton"),"\u30b9\u30a4\u30c3\u30c1\u3067\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306e\u30aa\u30f3/\u30aa\u30d5\u3092\u5207\u308a\u66ff\u3048\u3066\u3044\u307e\u3059\u3002 \u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u9055\u3044\u304c\u306f\u3063\u304d\u308a\u3068\u898b\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)(l.Z,{url:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Cacheable%20Container/Cacheable%20Container%20example.mp4",mdxType:"Video"}),(0,r.kt)("p",null,"\u79fb\u52d5\u3059\u308b2\u3064\u306e\u30b3\u30f3\u30c6\u30ca\u306f\u305d\u308c\u305e\u308c\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306e",(0,r.kt)("a",g({parentName:"p"},{href:"../ui-components/shapes/box"}),"\u30dc\u30c3\u30af\u30b9"),"\u3001",(0,r.kt)("a",g({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2"),"\u3001",(0,r.kt)("a",g({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc"),"\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002 \u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\u306f\u3001\u53cc\u7dda\u5f62\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\uff65\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3068\u30b0\u30ed\u30fc\u30d0\u30eb\uff65\u30a2\u30eb\u30d5\u30a1174\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u304a\u308a\u3001\u63cf\u753b\u306b\u975e\u5e38\u306b\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002 \u30b9\u30af\u30ea\u30fc\u30f3\u5168\u4f53\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306b\u304b\u304b\u308b\u6642\u9593\u306f\u3001STM32F429-DISCO\u30dc\u30fc\u30c9\u4e0a\u3067\u304a\u3088\u305d100ms\u3067\u3059\u3002"),(0,r.kt)("h2",g({},{id:"test-application"}),"\u30c6\u30b9\u30c8\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u76f8\u4e92\u306b\u95a2\u9023\u3059\u308b2\u3064\u306e\u8981\u7d20\u3092\u79fb\u52d5\u3055\u305b\u308b\u305f\u3081\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u3068\u3044\u3046\u540d\u524d\u306e\u89aa\u30b3\u30f3\u30c6\u30ca\u5185\u306b\u3053\u308c\u3089\u3092\u914d\u7f6e\u3057\u307e\u3059\u3002\u3053\u306e\u89aa\u30b3\u30f3\u30c6\u30ca\u306f\u3044\u305a\u308c\u304b\u306e\u5b50\u30b3\u30f3\u30c6\u30ca\u306e2\u500d\u306e\u9ad8\u3055\u306b\u6307\u5b9a\u3059\u308b\u306e\u3067\u3001\u3053\u3053\u3067\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"240x640\uff082*320\uff09"),"\u306e\u9ad8\u3055\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002 TouchGFX Designer\u3067\u30b3\u30f3\u30c6\u30ca\u3092\u79fb\u52d5\u30a2\u30cb\u30e1\u30fc\u30bf\u3068\u3057\u3066\u5ba3\u8a00\u3059\u308b\u3053\u3068\u3067\u3001\u3053\u306e\u30b3\u30f3\u30c6\u30ca\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30a3\u30c3\u30af\u3092\u53d7\u3051\u53d6\u308a\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6e2c\u5b9a\u4e2d\u306b\u6642\u9593\u306e\u7d4c\u904e\u3068\u3068\u3082\u306b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/toucgfx-designer-test-application-overview-4.17.png",mdxType:"Figure"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306e\u30c6\u30b9\u30c8\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6982\u8981"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"container1"),"\u3068\u3044\u3046\u540d\u524d\u306e\u4e0a\u65b9\u306e\u30b3\u30f3\u30c6\u30ca\u306f\u3001x=0, y=0\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"container2"),"\u3068\u3044\u3046\u540d\u524d\u306e\u4e0b\u65b9\u306e\u30b3\u30f3\u30c6\u30ca\u306f\u3001\u89aa\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u5185\u3067container1\u306e\u771f\u4e0b\u306e\u3001x=0, y=320\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"container1"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"container2"),"\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u5185\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u3092\u79fb\u52d5\u3059\u308b\u3068\u3001\u3053\u306e2\u3064\u306e\u8981\u7d20\u3082\u4e00\u7dd2\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u3092x=0, y=-320\u306e\u4f4d\u7f6e\u306b\u79fb\u52d5\u3059\u308b\u3068\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"container1"),"\u306f\u8868\u793a\u3055\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u304c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"container2"),"\u306f\u5b8c\u5168\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u30892\u3064\u306e\u72b6\u614b\u9593\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001TouchGFX Designer\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0b\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u3092\u3001\u4e0b\u306b\u3042\u308b\u5834\u5408\u306f\u4e0a\u306b\u3001\u3059\u3067\u306b\u4e0a\u306b\u3042\u308b\u5834\u5408\u306f\u4e0b\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002 \u5206\u304b\u308a\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u306b\u3001\u3053\u306e\u30b3\u30fc\u30c9\u306f\u30d3\u30e5\u30fc\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"handleClickEvent"),"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306b\u633f\u5165\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u30e6\u30fc\u30b6\u304c\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\uff08ToggleButton\u306e\u4e0b\u306e\uff09\u3069\u3053\u304b\u3092\u30bf\u30c3\u30c1\u3059\u308b\u3068\u5e38\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{9-12}","{9-12}":!0}),"void Screen1View::handleClickEvent(const ClickEvent& evt)\n{\n    //Forward event to base View (for the ToggleButton to work)\n    View::handleClickEvent(evt);\n    //If touch is released and y > 50 (below the ToggleButton), move masterContainer\n    if (evt.getType() == ClickEvent::RELEASED && evt.getY() > 50)\n    {\n        const int endPosition = masterContainer.getY() >= 0 ? -320 : 0;\n        masterContainer.startMoveAnimation(masterContainer.getX(), endPosition,\n                            20 /* ticks */,\n                            EasingEquations::cubicEaseInOut,\n                            EasingEquations::cubicEaseInOut);\n    }\n}\n")),(0,r.kt)("h2",g({},{id:"performance-of-redrawing-complex-containers"}),"\u8907\u96d1\u306a\u30b3\u30f3\u30c6\u30ca\u306e\u518d\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,r.kt)("p",null,"\u524d\u306b\u8ff0\u3079\u305f\u3088\u3046\u306b\u3001\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u5c0f\u3055\u306a\u5404\u30b9\u30c6\u30c3\u30d7\u3054\u3068\u306b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u6642\u9593\u304c\u304b\u304b\u308b\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\u3092\u518d\u63cf\u753b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u30011\u30d5\u30ec\u30fc\u30e0\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306f\u304a\u3088\u305d100ms\u306b\u306a\u308a\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u6bce\u79d210\u30d5\u30ec\u30fc\u30e0\uff0810fps\uff09\u3067\u3059\u3002 \u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u306720\u30d5\u30ec\u30fc\u30e0\u306a\u306e\u3067\u3001\u304a\u3088\u305d2\u79d2\u304b\u304b\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"STM32F429-DISCO\u8a55\u4fa1\u30ad\u30c3\u30c8\u4e0a\u3067\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306fGPIO G14\u306e\u30c7\u30b8\u30bf\u30eb\u4fe1\u53f7\u3068\u3057\u3066\u5f97\u3089\u308c\u307e\u3059\u3002 VSYNC\u4fe1\u53f7\u306fG13\u3067\u5f97\u3089\u308c\u307e\u3059\u3002 GPIO\u306e\u8a2d\u5b9a\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"GPIO.cpp"),"\u30d5\u30a1\u30a4\u30eb\u3067\u884c\u308f\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u753b\u50cf\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"masterContainer"),"\u3092\u4e0a\u5411\u304d\u306b\u79fb\u52d5\u3055\u305b\u305f\u3068\u304d\u306e\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eVSYNC\u3068RENDER_TIME\u306e\u6e2c\u5b9a\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-vsync-and-render-time.png",mdxType:"Figure"},"vsync\u3068\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306e\u6e2c\u5b9a"),(0,r.kt)("p",null,"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306f\u6700\u521d\u306e\u4fe1\u53f7\uff08\u30a2\u30af\u30c6\u30a3\u30d6\uff65\u30ed\u30fc\uff09\u3067\u3059\u3002 \u79fb\u52d5\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u6700\u521d\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306f\u300199.29ms\u3067\u3042\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0b\u306e\u4fe1\u53f7\u306fVSYNC\u3067\u3001\u30d4\u30af\u30bb\u30eb\u304c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30af\u30ed\u30c3\u30af\u51fa\u529b\u3055\u308c\u308b\u3068\u304d\u306b\u3001\u5404\u30d5\u30ec\u30fc\u30e0\u3067\u30cf\u30a4\uff08\u9ad8\uff09\u304b\u3089\u30ed\u30fc\uff08\u4f4e\uff09\u306b\u9077\u79fb\u3057\u307e\u3059\u3002 \u4e0a\u306e\u6e2c\u5b9a\u3067\u306f\u30011\u30d5\u30ec\u30fc\u30e0\u306e\u63cf\u753b\u6642\u9593\u304c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u4e0a\u306e7\u30d5\u30ec\u30fc\u30e0\u5206\u306e\u6642\u9593\u306b\u76f8\u5f53\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002 8\u756a\u76ee\u306eVSYNC\u4fe1\u53f7\u3067\u3001\u6b21\u306e\u30d5\u30ec\u30fc\u30e0\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002 \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u4e2d\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u306f\uff08\u5225\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e\uff09\u305d\u308c\u307e\u3067\u306b\u63cf\u753b\u3055\u308c\u305f\u30d5\u30ec\u30fc\u30e0\u304c\u7e70\u308a\u8fd4\u3057\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",g({},{id:"improving-performance-through-caching"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3088\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u5411\u4e0a"),(0,r.kt)("p",null,"\u4e0a\u306b\u793a\u3057\u305f\u79fb\u52d5\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u30e1\u30e2\u30ea\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u305f\u5f8c\u306f\u3001\u305d\u306e\u30e1\u30e2\u30ea\u5185\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u30d4\u30af\u30bb\u30eb\u3092\uff08DMA\u3092\u4f7f\u7528\u3057\u3066\uff09\u5358\u7d14\u306b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u4f7f\u7528\u3057\u3066\u8907\u96d1\u306a\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u518d\u63cf\u753b\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u307f\u306e\u4f7f\u7528\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u6bce\u79d260\u30d5\u30ec\u30fc\u30e0\uff0860fps\uff09\u3092\u9054\u6210\u53ef\u80fd\u3067\u3042\u3063\u3066\u3082\u3001\u540c\u3058\u8a08\u7b97\u3092\u7e70\u308a\u8fd4\u3057\u884c\u3046\u3053\u3068\u3067\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u30d3\u30b8\u30fc\u72b6\u614b\uff08\u304a\u305d\u3089\u304f\u8ca0\u8377100%\uff09\u306b\u306a\u308b\u53ef\u80fd\u6027\u306f\u9ad8\u304f\u3001\u3088\u308a\u91cd\u8981\u306a\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3067\u304d\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u306e\u3053\u306e\u300c\u30a4\u30f3\u30e1\u30e2\u30ea\uff65\u30a4\u30e1\u30fc\u30b8\u300d\u3092\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\u3055\u307e\u3056\u307e\u306a\u5834\u6240\u306b\u8868\u793a\u3067\u304d\u307e\u3059\u3002\u30b3\u30f3\u30c6\u30ca\u3092\u518d\u63cf\u753b\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"The first thing to do is to enable caching through TouchGFX Designer by checking the ",(0,r.kt)("em",{parentName:"p"},"Cacheable")," property on the two Containers ",(0,r.kt)("inlineCode",{parentName:"p"},"container1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"container2"),":"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/cacheable-container-option-in-touchgfx-designer-4.17.png",mdxType:"Figure"},"\u30b3\u30f3\u30c6\u30ca\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\uff65\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u6b21\u306e\u624b\u9806\u306f\u3001\u3053\u308c\u3089\u306e\u30b3\u30f3\u30c6\u30ca\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u5148\u3068\u3057\u3066\u3001RAM\u5185\u306b2\u3064\u306e\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u914d\u7f6e\u3059\u308bRAM\u5185\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002 \u3053\u3053\u306b\u6319\u3052\u308b\u7279\u5b9a\u306e\u4f8b\u3067\u306f\u3001SDRAM\uff08STM32F429\u3067\u306f\u30a2\u30c9\u30ec\u30b90xd0000000\u304b\u3089\u59cb\u307e\u308b\uff09\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u76f4\u5f8c\u306b\u914d\u7f6e\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"Windows\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u5185\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"#ifdef SIMULATOR\n    uint32_t sdramBuffer[8*1024*1024/4];\n    uint16_t* sdram = (uint16_t*)sdramBuffer;\n#else\n    uint16_t* sdram = (uint16_t*)(0xd0000000 + 320*240*2*2);\n#endif\n")),(0,r.kt)("p",null,"\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u521d\u671f\u5316\u3057\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u7528\u306b2\u3064\u306e\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{2-2}","{2-2}":!0}),"//Create bitmap cache and two dynamic bitmap for caching, each bitmap is 150Kb\nBitmap::setCache(sdram, 320*1024, 2); //320Kb cache\ndynamicBitmap1 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\ndynamicBitmap2 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\n")),(0,r.kt)("p",null,"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u30b3\u30f3\u30c6\u30ca\u306b\u5272\u308a\u5f53\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\uff65\u30e2\u30fc\u30c9\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"//Assign the bitmaps to the Cacheable Containers\ncontainer1.setCacheBitmap(dynamicBitmap1);\ncontainer2.setCacheBitmap(dynamicBitmap2);\n\n//Enable caching\ncontainer1.enableCachedMode(true);\ncontainer2.enableCachedMode(true);\n\n//Finally update the cached bitmaps\ncontainer1.updateCache();\ncontainer2.updateCache();\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Container::updateCache()"),"\u3092\u547c\u3073\u51fa\u3059\u3068\u30012\u3064\u306e\u30b3\u30f3\u30c6\u30ca\u304c\u305d\u308c\u305e\u308c\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u5185\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002 \u30b3\u30f3\u30c6\u30ca\u306e\u5185\u5bb9\u3092\u66f4\u65b0\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u5e38\u306b\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u958b\u767a\u8005\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9\u3067\u51e6\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"container1"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"container2"),"\u306b\u5bfe\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6e2c\u5b9a\u3067\u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u304c99ms\u304b\u30895ms\u3078\u306820\u500d\u306e\u77ed\u7e2e\u3092\u793a\u3059\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u3064\u307e\u308a\u300160fps\u3067\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u5b9f\u73fe\u53ef\u80fd\u3067\u300120\u30d5\u30ec\u30fc\u30e0\u304b\u3089\u306a\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u3092\u3088\u308a\u77ed\u6642\u9593\u3067\u51e6\u7406\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-comparison.png",mdxType:"Figure"},"vsync\u3068\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306e\u6e2c\u5b9a"),(0,r.kt)("h2",g({},{id:"conclusion"}),"\u307e\u3068\u3081"),(0,r.kt)("p",null,"\uff08\u79fb\u52d5\u983b\u5ea6\u306e\u9ad8\u3044\uff09\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u6642\u306b\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306b\u3088\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u8a08\u7b97\u304c\u8907\u96d1\u306a\u5bfe\u8c61\u306e\u5834\u5408\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u3092\u5927\u304d\u304f\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u5909\u66f4\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\uff08\u6642\u9593\u66f4\u65b0\u6642\u306e\u6642\u8a08\u306e\u6587\u5b57\u76e4\u306a\u3069\uff09\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u5236\u5fa1\u3055\u308c\u308b\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u6642\u306e\u7279\u5b9a\u306e\u30dd\u30a4\u30f3\u30c8\u3067\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u518d\u8a08\u7b97\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"loading-images-at-runtime",mdxType:"Link"},"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7: \u5b9f\u884c\u6642\u306e\u753b\u50cf\u306e\u8aad\u8fbc\u307f"))))}w.isMDXComponent=!0}}]);