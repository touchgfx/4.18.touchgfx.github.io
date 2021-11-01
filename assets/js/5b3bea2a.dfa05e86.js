(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6776],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var r=n(67294),a=n(73727),i=n(11368),o=n(35096),c=n(84487);const l=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,y=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||(e={}))_.call(e,n)&&y(t,n,e[n]);if(m)for(var n of m(e))h.call(e,n)&&y(t,n,e[n]);return t};var g=function(t){var e,n=t,{isNavLink:d,to:y,href:g,activeClassName:k,isActive:v,"data-noBrokenLinkCheck":x,autoAddBaseUrl:O=!0}=n,w=((t,e)=>{var n={};for(var r in t)_.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&h.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:N,baseUrl:T}}=(0,i.Z)(),{withBaseUrl:P}=(0,u.C)(),j=(0,r.useContext)(l),E=y||g,D=(0,o.Z)(E),C=null==E?void 0:E.replace("pathname://","");let L=void 0!==C?(I=C,O&&(t=>t.startsWith("/"))(I)?P(I):I):void 0;var I;L&&D&&(L=(0,s.applyTrailingSlash)(L,{trailingSlash:N,baseUrl:T}));const Z=(0,r.useRef)(!1),A=d?a.OL:a.rU,S=c.Z.canUseIntersectionObserver;let U;(0,r.useEffect)((()=>(!S&&D&&null!=L&&window.docusaurus.prefetch(L),()=>{S&&U&&U.disconnect()})),[L,S,D]);const R=null!==(e=null==L?void 0:L.startsWith("#"))&&void 0!==e&&e,M=!L||!D||R;return L&&D&&!R&&!x&&j.collectLink(L),M?r.createElement("a",b(b({href:L},E&&!D&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(A,b((B=b({},w),p(B,f({onMouseEnter:()=>{Z.current||null==L||(window.docusaurus.preload(L),Z.current=!0)},innerRef:t=>{var e,n;S&&t&&D&&(e=t,n=()=>{null!=L&&window.docusaurus.prefetch(L)},U=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.unobserve(e),U.disconnect(),n())}))})),U.observe(e))},to:L||""}))),d&&{isActive:v,activeClassName:k}));var B}},35096:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return i},Z:function(){return o}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const o=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+o:o}(e,t,n,r)}}function o(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[a]=t.split(/[#?]/),i="/"===a||a===r?a:(o=a,n?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(a,i)}},67023:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},92047:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return _},metadata:function(){return h},toc:function(){return y},default:function(){return g}});var r=n(3905),a=n(31217),i=n(43861),o=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&p(t,n,e[n]);if(u)for(var n of u(e))d.call(e,n)&&p(t,n,e[n]);return t};const m={title:"TypedTextData"},_=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",id:"api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",isDocsHomePage:!1,title:"TypedTextData",description:"The data structure for typed texts.",source:"@site/docs/api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",permalink:"/4.18/docs/api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data",version:"current",frontMatter:{title:"TypedTextData"},sidebar:"docs",previous:{title:"TypedText",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_typed_text"},next:{title:"UIEventListener",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_u_i_event_listener"}},y=[{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"alignment",id:"alignment",children:[]},{value:"direction",id:"direction",children:[]},{value:"fontIdx",id:"fontidx",children:[]}]}],b={toc:y};function g(t){var e,n=t,{components:o}=n,p=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&d.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=f(f({},b),p),c(e,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The data structure for typed texts. "),(0,r.kt)("h2",f({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"right"})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"const ",(0,r.kt)("a",f({parentName:"td"},{href:"../namespacetouchgfx#typedef-alignment"}),"Alignment")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-alignment",mdxType:"Link"},"alignment")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The alignment of the typed text (LEFT,CENTER,RIGHT)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"const ",(0,r.kt)("a",f({parentName:"td"},{href:"../namespacetouchgfx#typedef-textdirection"}),"TextDirection")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-direction",mdxType:"Link"},"direction")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The text direction (LTR,RTL,...) of the typed text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"const unsigned char"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-fontidx",mdxType:"Link"},"fontIdx")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The ID of the font associated with the typed text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",f({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-alignment",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"alignment"}),"alignment"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const ",(0,r.kt)("a",f({parentName:"p"},{href:"../namespacetouchgfx#typedef-alignment"}),"Alignment")," alignment ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The alignment of the typed text (LEFT,CENTER,RIGHT) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-direction",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"direction"}),"direction"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const ",(0,r.kt)("a",f({parentName:"p"},{href:"../namespacetouchgfx#typedef-textdirection"}),"TextDirection")," direction ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The text direction (LTR,RTL,...) of the typed text. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_typed_text_1_1_typed_text_data#variable-fontidx",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"fontidx"}),"fontIdx"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const unsigned char fontIdx ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The ID of the font associated with the typed text. "))))}g.isMDXComponent=!0}}]);