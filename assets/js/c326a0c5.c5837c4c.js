(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5549],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var r=n(67294),a=n(73727),i=n(11368),l=n(35096),o=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),p=n(67023),d=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,N=(t,e)=>{for(var n in e||(e={}))f.call(e,n)&&h(t,n,e[n]);if(k)for(var n of k(e))g.call(e,n)&&h(t,n,e[n]);return t};var b=function(t){var e,n=t,{isNavLink:d,to:h,href:b,activeClassName:y,isActive:v,"data-noBrokenLinkCheck":_,autoAddBaseUrl:x=!0}=n,w=((t,e)=>{var n={};for(var r in t)f.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&k)for(var r of k(t))e.indexOf(r)<0&&g.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:O}}=(0,i.Z)(),{withBaseUrl:T}=(0,c.C)(),j=(0,r.useContext)(u),C=h||b,L=(0,l.Z)(C),Z=null==C?void 0:C.replace("pathname://","");let D=void 0!==Z?(E=Z,x&&(t=>t.startsWith("/"))(E)?T(E):E):void 0;var E;D&&L&&(D=(0,p.applyTrailingSlash)(D,{trailingSlash:P,baseUrl:O}));const U=(0,r.useRef)(!1),A=d?a.OL:a.rU,S=o.Z.canUseIntersectionObserver;let B;(0,r.useEffect)((()=>(!S&&L&&null!=D&&window.docusaurus.prefetch(D),()=>{S&&B&&B.disconnect()})),[D,S,L]);const M=null!==(e=null==D?void 0:D.startsWith("#"))&&void 0!==e&&e,H=!D||!L||M;return D&&L&&!M&&!_&&j.collectLink(D),H?r.createElement("a",N(N({href:D},C&&!L&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(A,N((I=N({},w),s(I,m({onMouseEnter:()=>{U.current||null==D||(window.docusaurus.preload(D),U.current=!0)},innerRef:t=>{var e,n;S&&t&&L&&(e=t,n=()=>{null!=D&&window.docusaurus.prefetch(D)},B=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(B.unobserve(e),B.disconnect(),n())}))})),B.observe(e))},to:D||""}))),d&&{isActive:v,activeClassName:y}));var I}},35096:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return i},Z:function(){return l}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+l:l}(e,t,n,r)}}function l(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[a]=t.split(/[#?]/),i="/"===a||a===r?a:(l=a,n?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(a,i)}},67023:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},37016:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return k},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return h},default:function(){return b}});var r=n(3905),a=n(31217),i=n(43861),l=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&s(t,n,e[n]);if(c)for(var n of c(e))d.call(e,n)&&s(t,n,e[n]);return t};const k={title:"Pair"},f=void 0,g={unversionedId:"api/classes/structtouchgfx_1_1_pair",id:"api/classes/structtouchgfx_1_1_pair",isDocsHomePage:!1,title:"Pair",description:"A simple struct for holding pairs of data.",source:"@site/docs/api/classes/structtouchgfx_1_1_pair.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_pair",permalink:"/4.18/docs/api/classes/structtouchgfx_1_1_pair",version:"current",frontMatter:{title:"Pair"},sidebar:"docs",previous:{title:"PainterXRGB8888L8Bitmap",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_painter_x_r_g_b8888_l8_bitmap"},next:{title:"PartialFrameBufferManager",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_partial_frame_buffer_manager"}},h=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"Pair",id:"pair",children:[]},{value:"Pair",id:"pair-1",children:[]},{value:"Pair",id:"pair-2",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"first",id:"first",children:[]},{value:"second",id:"second",children:[]}]}],N={toc:h};function b(t){var e,n=t,{components:l}=n,s=((t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&c)for(var r of c(t))e.indexOf(r)<0&&d.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=m(m({},N),s),o(e,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null," A simple struct for holding pairs of data. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"T1")," The type of the first element. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"T2")," The type of the second element. ")),(0,r.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"right"})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_pair#function-pair",mdxType:"Link"},"Pair")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Constructor initializing the elements it holds, using their default constructors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"template \\","<","class U ,class V \\",">",(0,r.kt)("br",null)),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_pair#function-pair",mdxType:"Link"},"Pair")),"(const ",(0,r.kt)("a",m({parentName:"td"},{href:"structtouchgfx_1_1_pair"}),"Pair"),"<"," U, V ",">"," & p)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Copy constructor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_pair#function-pair",mdxType:"Link"},"Pair")),"(const T1 & x, const T2 & y)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Constructor initializing the elements it holds, using their copy constructor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",m({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"right"})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"T1"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_pair#variable-first",mdxType:"Link"},"first")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The first element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"T2"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_pair#variable-second",mdxType:"Link"},"second")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The second element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_pair#function-pair",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"pair"}),"Pair"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_pair#function-pair",mdxType:"Link"},"Pair")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Constructor initializing the elements it holds, using their default constructors. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_pair#function-pair",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"pair-1"}),"Pair"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_pair#function-pair",mdxType:"Link"},"Pair")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"const ",(0,r.kt)("a",m({parentName:"td"},{href:"structtouchgfx_1_1_pair"}),"Pair"),"<"," U, V ",">"," &"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"p"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Copy constructor. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Template Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"U"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Generic type parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Generic type parameter."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"p"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The pair to copy from."))))))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_pair#function-pair",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"pair-2"}),"Pair"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_pair#function-pair",mdxType:"Link"},"Pair")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"const T1 &"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"x ,"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"const T2 &"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Constructor initializing the elements it holds, using their copy constructor. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Reference to the first element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Reference to the second element."))))))),(0,r.kt)("h2",m({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_pair#variable-first",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"first"}),"first"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"T1 first ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The first element. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_pair#variable-second",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"second"}),"second"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"T2 second ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The second element. "))))}b.isMDXComponent=!0}}]);