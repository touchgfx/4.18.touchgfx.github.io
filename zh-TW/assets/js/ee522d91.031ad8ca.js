(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9449],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,b=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43861:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){const e=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:e})}}t.Z=a},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),c=r(84487);const u=(0,n.createContext)({collectLink:()=>{}});var l=r(25026),s=r(67023),p=Object.defineProperty,f=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&v(e,r,t[r]);if(b)for(var r of b(t))m.call(t,r)&&v(e,r,t[r]);return e};var y=function(e){var t,r=e,{isNavLink:p,to:v,href:y,activeClassName:g,isActive:k,"data-noBrokenLinkCheck":O,autoAddBaseUrl:w=!0}=r,x=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&b)for(var n of b(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:j}}=(0,i.Z)(),{withBaseUrl:C}=(0,l.C)(),N=(0,n.useContext)(u),E=v||y,T=(0,o.Z)(E),D=null==E?void 0:E.replace("pathname://","");let S=void 0!==D?(A=D,w&&(e=>e.startsWith("/"))(A)?C(A):A):void 0;var A;S&&T&&(S=(0,s.applyTrailingSlash)(S,{trailingSlash:P,baseUrl:j}));const U=(0,n.useRef)(!1),Z=p?a.OL:a.rU,B=c.Z.canUseIntersectionObserver,L=(0,n.useRef)();(0,n.useEffect)((()=>(!B&&T&&null!=S&&window.docusaurus.prefetch(S),()=>{B&&L.current&&L.current.disconnect()})),[L,S,B,T]);const M=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,W=!S||!T||M;return S&&T&&!M&&!O&&N.collectLink(S),W?n.createElement("a",_(_({href:S},E&&!T&&{target:"_blank",rel:"noopener noreferrer"}),x)):n.createElement(Z,_((I=_({},x),f(I,d({onMouseEnter:()=>{U.current||null==S||(window.docusaurus.preload(S),U.current=!0)},innerRef:e=>{var t,r;B&&e&&T&&(t=e,r=()=>{null!=S&&window.docusaurus.prefetch(S)},L.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.current.unobserve(t),L.current.disconnect(),r())}))})),L.current.observe(t))},to:S||""}))),p&&{isActive:k,activeClassName:g}));var I}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),i="/"===a||a===n?a:(o=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,i)}},67023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},10480:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return b},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return v},default:function(){return y}});var n=r(3905),a=r(31217),i=r(43861),o=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&f(e,r,t[r]);return e};const b={title:"CacheTableEntry"},h=void 0,m={unversionedId:"api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",id:"api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",isDocsHomePage:!1,title:"CacheTableEntry",description:"Cache bookkeeping.",source:"@site/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",permalink:"/4.18/zh-TW/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",tags:[],version:"current",frontMatter:{title:"CacheTableEntry"},sidebar:"docs",previous:{title:"CacheableContainer",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_cacheable_container"},next:{title:"Callback",permalink:"/4.18/zh-TW/docs/api/classes/structtouchgfx_1_1_callback"}},v=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"data",id:"data",children:[],level:3}],level:2}],_={toc:v};function y(e){var t,r=e,{components:o}=r,f=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},_),f),c(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Cache bookkeeping. "),(0,n.kt)("h2",d({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"right"})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"uint8_t *"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_bitmap_1_1_cache_table_entry#variable-data",mdxType:"Link"},"data")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Pointer to location of image data for this ",(0,n.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," in the cache. 0 if bitmap not cached.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",d({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_cache_table_entry#variable-data",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",d({},{id:"data"}),"data"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint8_t * data ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Pointer to location of image data for this ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," in the cache. 0 if bitmap not cached. "))))}y.isMDXComponent=!0}}]);