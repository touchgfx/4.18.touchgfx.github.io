(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9606],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,h=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43861:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){const e=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:e})}}t.Z=a},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),c=r(84487);const u=(0,n.createContext)({collectLink:()=>{}});var l=r(25026),s=r(67023),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&g(e,r,t[r]);if(h)for(var r of h(t))m.call(t,r)&&g(e,r,t[r]);return e};var k=function(e){var t,r=e,{isNavLink:d,to:g,href:k,activeClassName:y,isActive:_,"data-noBrokenLinkCheck":O,autoAddBaseUrl:w=!0}=r,x=((e,t)=>{var r={};for(var n in e)b.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:N,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:j}=(0,l.C)(),C=(0,n.useContext)(u),T=g||k,U=(0,o.Z)(T),E=null==T?void 0:T.replace("pathname://","");let D=void 0!==E?(S=E,w&&(e=>e.startsWith("/"))(S)?j(S):S):void 0;var S;D&&U&&(D=(0,s.applyTrailingSlash)(D,{trailingSlash:N,baseUrl:P}));const L=(0,n.useRef)(!1),Z=d?a.OL:a.rU,A=c.Z.canUseIntersectionObserver;let M;(0,n.useEffect)((()=>(!A&&U&&null!=D&&window.docusaurus.prefetch(D),()=>{A&&M&&M.disconnect()})),[D,A,U]);const B=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,I=!D||!U||B;return D&&U&&!B&&!O&&C.collectLink(D),I?n.createElement("a",v(v({href:D},T&&!U&&{target:"_blank",rel:"noopener noreferrer"}),x)):n.createElement(Z,v((W=v({},x),p(W,f({onMouseEnter:()=>{L.current||null==D||(window.docusaurus.preload(D),L.current=!0)},innerRef:e=>{var t,r;A&&e&&U&&(t=e,r=()=>{null!=D&&window.docusaurus.prefetch(D)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),r())}))})),M.observe(t))},to:D||""}))),d&&{isActive:_,activeClassName:y}));var W}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),i="/"===a||a===n?a:(o=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,i)}},67023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},42245:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return h},contentTitle:function(){return b},metadata:function(){return m},toc:function(){return g},default:function(){return k}});var n=r(3905),a=r(31217),i=r(43861),o=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&p(e,r,t[r]);return e};const h={title:"KerningNode"},b=void 0,m={unversionedId:"api/classes/structtouchgfx_1_1_kerning_node",id:"api/classes/structtouchgfx_1_1_kerning_node",isDocsHomePage:!1,title:"KerningNode",description:"Structure providing information about a kerning for a given pair of characters.",source:"@site/docs/api/classes/structtouchgfx_1_1_kerning_node.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_kerning_node",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_kerning_node",version:"current",frontMatter:{title:"KerningNode"},sidebar:"docs",previous:{title:"InternalFlashFont",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_internal_flash_font"},next:{title:"Key",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key"}},g=[{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"distance",id:"distance",children:[]},{value:"unicodePrevChar",id:"unicodeprevchar",children:[]}]}],v={toc:g};function k(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},v),p),c(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," Structure providing information about a kerning for a given pair of characters.\nUsed by ",(0,n.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD")," when rendering, calculating text width etc. "),(0,n.kt)("h2",f({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"right"})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"int8_t"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_kerning_node#variable-distance",mdxType:"Link"},"distance")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The kerning distance.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_kerning_node#variable-unicodeprevchar",mdxType:"Link"},"unicodePrevChar")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The Unicode for the first character in the kerning pair.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",f({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_kerning_node#variable-distance",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"distance"}),"distance"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int8_t distance ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The kerning distance. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_kerning_node#variable-unicodeprevchar",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"unicodeprevchar"}),"unicodePrevChar"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")," unicodePrevChar ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The Unicode for the first character in the kerning pair. "))))}k.isMDXComponent=!0}}]);