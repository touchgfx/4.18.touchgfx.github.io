"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3950],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,k=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43861:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:e})}}t.Z=a},39130:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),c=r(84487);const l=(0,n.createContext)({collectLink:()=>{}});var u=r(25026),s=r(67023),p=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&m(e,r,t[r]);if(k)for(var r of k(t))b.call(t,r)&&m(e,r,t[r]);return e};var h=function(e){var t,r=e,{isNavLink:p,to:m,href:h,activeClassName:_,isActive:g,"data-noBrokenLinkCheck":O,autoAddBaseUrl:w=!0}=r,x=((e,t)=>{var r={};for(var n in e)y.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&k)for(var n of k(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:N,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:j}=(0,u.C)(),C=(0,n.useContext)(l),U=m||h,E=(0,o.Z)(U),D=null==U?void 0:U.replace("pathname://","");let M=void 0!==D?(T=D,w&&(e=>e.startsWith("/"))(T)?j(T):T):void 0;var T;M&&E&&(M=(0,s.applyTrailingSlash)(M,{trailingSlash:N,baseUrl:P}));const I=(0,n.useRef)(!1),L=p?a.OL:a.rU,S=c.Z.canUseIntersectionObserver,Z=(0,n.useRef)();(0,n.useEffect)((()=>(!S&&E&&null!=M&&window.docusaurus.prefetch(M),()=>{S&&Z.current&&Z.current.disconnect()})),[Z,M,S,E]);const A=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,B=!M||!E||A;return M&&E&&!A&&!O&&C.collectLink(M),B?n.createElement("a",v(v({href:M},U&&!E&&{target:"_blank",rel:"noopener noreferrer"}),x)):n.createElement(L,v((W=v({},x),d(W,f({onMouseEnter:()=>{I.current||null==M||(window.docusaurus.preload(M),I.current=!0)},innerRef:e=>{var t,r;S&&e&&E&&(t=e,r=()=>{null!=M&&window.docusaurus.prefetch(M)},Z.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.current.unobserve(t),Z.current.disconnect(),r())}))})),Z.current.observe(t))},to:M||""}))),p&&{isActive:g,activeClassName:_}));var W}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),i="/"===a||a===n?a:(o=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,i)}},67023:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},29772:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return k},contentTitle:function(){return y},metadata:function(){return b},toc:function(){return m},default:function(){return h}});var n=r(3905),a=r(39130),i=r(43861),o=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&d(e,r,t[r]);return e};const k={title:"KeyMapping"},y=void 0,b={unversionedId:"api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping",id:"api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping",isDocsHomePage:!1,title:"KeyMapping",description:"Mapping from key id to Unicode character.",source:"@site/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping",tags:[],version:"current",frontMatter:{title:"KeyMapping"},sidebar:"docs",previous:{title:"Keyboard",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_keyboard"},next:{title:"KeyMappingList",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list"}},m=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"keyId",id:"keyid",children:[],level:3},{value:"keyValue",id:"keyvalue",children:[],level:3}],level:2}],v={toc:m};function h(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},v),d),c(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Mapping from key id to Unicode character. "),(0,n.kt)("h2",f({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"right"})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key_mapping#variable-keyid",mdxType:"Link"},"keyId")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Id of a key.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key_mapping#variable-keyvalue",mdxType:"Link"},"keyValue")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Unicode equivalent of the key id.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",f({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key_mapping#variable-keyid",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"keyid"}),"keyId"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint8_t keyId ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Id of a key. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key_mapping#variable-keyvalue",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"keyvalue"}),"keyValue"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")," keyValue ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Unicode equivalent of the key id. "))))}h.isMDXComponent=!0}}]);