(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1223],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=u(a),k=r,m=p["".concat(d,".").concat(k)]||p[k]||s[k]||l;return a?n.createElement(m,i(i({ref:e},c),{},{components:a})):n.createElement(m,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return b}});var n=a(67294),r=a(73727),l=a(11368),i=a(35096),o=a(84487);const d=(0,n.createContext)({collectLink:()=>{}});var u=a(25026),c=a(67023),s=Object.defineProperty,p=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(t,e,a)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,N=(t,e)=>{for(var a in e||(e={}))f.call(e,a)&&h(t,a,e[a]);if(m)for(var a of m(e))g.call(e,a)&&h(t,a,e[a]);return t};var b=function(t){var e,a=t,{isNavLink:s,to:h,href:b,activeClassName:v,isActive:y,"data-noBrokenLinkCheck":_,autoAddBaseUrl:w=!0}=a,x=((t,e)=>{var a={};for(var n in t)f.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&g.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:P}}=(0,l.Z)(),{withBaseUrl:j}=(0,u.C)(),D=(0,n.useContext)(d),T=h||b,L=(0,i.Z)(T),C=null==T?void 0:T.replace("pathname://","");let Z=void 0!==C?(E=C,w&&(t=>t.startsWith("/"))(E)?j(E):E):void 0;var E;Z&&L&&(Z=(0,c.applyTrailingSlash)(Z,{trailingSlash:O,baseUrl:P}));const R=(0,n.useRef)(!1),S=s?r.OL:r.rU,U=o.Z.canUseIntersectionObserver;let M;(0,n.useEffect)((()=>(!U&&L&&null!=Z&&window.docusaurus.prefetch(Z),()=>{U&&M&&M.disconnect()})),[Z,U,L]);const V=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,A=!Z||!L||V;return Z&&L&&!V&&!_&&D.collectLink(Z),A?n.createElement("a",N(N({href:Z},T&&!L&&{target:"_blank",rel:"noopener noreferrer"}),x)):n.createElement(S,N((I=N({},x),p(I,k({onMouseEnter:()=>{R.current||null==Z||(window.docusaurus.preload(Z),R.current=!0)},innerRef:t=>{var e,a;U&&t&&L&&(e=t,a=()=>{null!=Z&&window.docusaurus.prefetch(Z)},M=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.unobserve(e),M.disconnect(),a())}))})),M.observe(e))},to:Z||""}))),s&&{isActive:y,activeClassName:v}));var I}},35096:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return l},Z:function(){return i}});var n=a(11368),r=a(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[r]=t.split(/[#?]/),l="/"===r||r===n?r:(i=r,a?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},88367:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return h},default:function(){return b}});var n=a(3905),r=a(31217),l=a(43861),i=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))c.call(e,a)&&p(t,a,e[a]);if(u)for(var a of u(e))s.call(e,a)&&p(t,a,e[a]);return t};const m={title:"VideoDataReader"},f=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_video_data_reader",id:"api/classes/classtouchgfx_1_1_video_data_reader",isDocsHomePage:!1,title:"VideoDataReader",description:"Interface for classes reading video data from non-memory-mapped flash storage.",source:"@site/docs/api/classes/classtouchgfx_1_1_video_data_reader.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_video_data_reader",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_video_data_reader",version:"current",frontMatter:{title:"VideoDataReader"},sidebar:"docs",previous:{title:"VideoController",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_video_controller"},next:{title:"VideoInformation",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_video_information"}},h=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"getDataLength",id:"getdatalength",children:[]},{value:"readData",id:"readdata",children:[]},{value:"seek",id:"seek",children:[]},{value:"~VideoDataReader",id:"videodatareader",children:[]}]}],N={toc:h};function b(t){var e,a=t,{components:i}=a,p=((t,e)=>{var a={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&s.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},N),p),o(e,d({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Interface for classes reading video data from non-memory-mapped flash storage. "),(0,n.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint32_t"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_video_data_reader#function-getdatalength",mdxType:"Link"},"getDataLength")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Get the length of the data (file).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_video_data_reader#function-readdata",mdxType:"Link"},"readData")),"(void * dst, uint32_t bytes) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Read data from flash to a buffer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_video_data_reader#function-seek",mdxType:"Link"},"seek")),"(uint32_t position) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Seek to a specific position in the data (file).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_video_data_reader#function-~videodatareader",mdxType:"Link"},"~VideoDataReader")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Virtual destructor.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_video_data_reader#function-getdatalength",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"getdatalength"}),"getDataLength"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","uint32_t","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_video_data_reader#function-getdatalength",mdxType:"Link"},"getDataLength")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Get the length of the data (file). "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The length of the data. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_video_data_reader#function-readdata",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"readdata"}),"readData"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_video_data_reader#function-readdata",mdxType:"Link"},"readData")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"void *"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"dst ,"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"uint32_t"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bytes"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"=0"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Read data from flash to a buffer. "),(0,n.kt)("p",null,"This must be a synchrony method that does not return until the copy is done."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"dst"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Address of destination buffer in RAM.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bytes"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Number of bytes to copy."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"Returns true if read was successful. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_video_data_reader#function-seek",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"seek"}),"seek"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_video_data_reader#function-seek",mdxType:"Link"},"seek")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"uint32_t"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"position"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Seek to a specific position in the data (file). "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"position"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Byte position in the data that is needed next."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_video_data_reader#function-~videodatareader",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"videodatareader"}),"~VideoDataReader"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_video_data_reader#function-~videodatareader",mdxType:"Link"},"~VideoDataReader")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Virtual destructor. "))))}b.isMDXComponent=!0}}]);