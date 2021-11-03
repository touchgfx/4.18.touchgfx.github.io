"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2059],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43861:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:e})}}t.Z=a},39130:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),c=r(84487);const u=(0,n.createContext)({collectLink:()=>{}});var l=r(25026),s=r(67023),p=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&k(e,r,t[r]);if(y)for(var r of y(t))m.call(t,r)&&k(e,r,t[r]);return e};var g=function(e){var t,r=e,{isNavLink:p,to:k,href:g,activeClassName:h,isActive:v,"data-noBrokenLinkCheck":O,autoAddBaseUrl:w=!0}=r,x=((e,t)=>{var r={};for(var n in e)b.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&y)for(var n of y(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:N,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:j}=(0,l.C)(),C=(0,n.useContext)(u),M=k||g,T=(0,o.Z)(M),E=null==M?void 0:M.replace("pathname://","");let L=void 0!==E?(A=E,w&&(e=>e.startsWith("/"))(A)?j(A):A):void 0;var A;L&&T&&(L=(0,s.applyTrailingSlash)(L,{trailingSlash:N,baseUrl:P}));const D=(0,n.useRef)(!1),S=p?a.OL:a.rU,Z=c.Z.canUseIntersectionObserver,K=(0,n.useRef)();(0,n.useEffect)((()=>(!Z&&T&&null!=L&&window.docusaurus.prefetch(L),()=>{Z&&K.current&&K.current.disconnect()})),[K,L,Z,T]);const U=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,B=!L||!T||U;return L&&T&&!U&&!O&&C.collectLink(L),B?n.createElement("a",_(_({href:L},M&&!T&&{target:"_blank",rel:"noopener noreferrer"}),x)):n.createElement(S,_((I=_({},x),d(I,f({onMouseEnter:()=>{D.current||null==L||(window.docusaurus.preload(L),D.current=!0)},innerRef:e=>{var t,r;Z&&e&&T&&(t=e,r=()=>{null!=L&&window.docusaurus.prefetch(L)},K.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(K.current.unobserve(t),K.current.disconnect(),r())}))})),K.current.observe(t))},to:L||""}))),p&&{isActive:v,activeClassName:h}));var I}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),i="/"===a||a===n?a:(o=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,i)}},67023:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},73413:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return y},contentTitle:function(){return b},metadata:function(){return m},toc:function(){return k},default:function(){return g}});var n=r(3905),a=r(39130),i=r(43861),o=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&d(e,r,t[r]);return e};const y={title:"KeyMappingList"},b=void 0,m={unversionedId:"api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list",id:"api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list",isDocsHomePage:!1,title:"KeyMappingList",description:"List of KeyMappings to use.",source:"@site/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list",tags:[],version:"current",frontMatter:{title:"KeyMappingList"},sidebar:"docs",previous:{title:"KeyMapping",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping"},next:{title:"Layout",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_layout"}},k=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"keyMappingArray",id:"keymappingarray",children:[],level:3},{value:"numberOfKeys",id:"numberofkeys",children:[],level:3}],level:2}],_={toc:k};function g(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},_),d),c(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"List of KeyMappings to use. "),(0,n.kt)("h2",f({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"right"})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"const ",(0,n.kt)("a",f({parentName:"td"},{href:"structtouchgfx_1_1_keyboard_1_1_key_mapping"}),"KeyMapping")," *"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key_mapping_list#variable-keymappingarray",mdxType:"Link"},"keyMappingArray")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The array of key mappings used by the keyboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key_mapping_list#variable-numberofkeys",mdxType:"Link"},"numberOfKeys")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The number of keys in the list.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",f({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key_mapping_list#variable-keymappingarray",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"keymappingarray"}),"keyMappingArray"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const ",(0,n.kt)("a",f({parentName:"p"},{href:"structtouchgfx_1_1_keyboard_1_1_key_mapping"}),"KeyMapping")," * keyMappingArray ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The array of key mappings used by the keyboard. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key_mapping_list#variable-numberofkeys",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"numberofkeys"}),"numberOfKeys"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint8_t numberOfKeys ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The number of keys in the list. "))))}g.isMDXComponent=!0}}]);