(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9805],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=u(r),m=a,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||i;return r?n.createElement(p,o(o({ref:e},s),{},{components:r})):n.createElement(p,o({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43861:function(t,e,r){"use strict";var n=r(67294);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,r){"use strict";r.d(e,{Z:function(){return v}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),l=r(84487);const c=(0,n.createContext)({collectLink:()=>{}});var u=r(25026),s=r(67023),d=Object.defineProperty,f=Object.defineProperties,m=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,_=(t,e,r)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))h.call(e,r)&&_(t,r,e[r]);if(p)for(var r of p(e))b.call(e,r)&&_(t,r,e[r]);return t};var v=function(t){var e,r=t,{isNavLink:d,to:_,href:v,activeClassName:g,isActive:y,"data-noBrokenLinkCheck":w,autoAddBaseUrl:O=!0}=r,N=((t,e)=>{var r={};for(var n in t)h.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&b.call(t,n)&&(r[n]=t[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:j}}=(0,i.Z)(),{withBaseUrl:P}=(0,u.C)(),T=(0,n.useContext)(c),C=_||v,D=(0,o.Z)(C),E=null==C?void 0:C.replace("pathname://","");let Z=void 0!==E?(L=E,O&&(t=>t.startsWith("/"))(L)?P(L):L):void 0;var L;Z&&D&&(Z=(0,s.applyTrailingSlash)(Z,{trailingSlash:x,baseUrl:j}));const S=(0,n.useRef)(!1),A=d?a.OL:a.rU,U=l.Z.canUseIntersectionObserver;let I;(0,n.useEffect)((()=>(!U&&D&&null!=Z&&window.docusaurus.prefetch(Z),()=>{U&&I&&I.disconnect()})),[Z,U,D]);const M=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,B=!Z||!D||M;return Z&&D&&!M&&!w&&T.collectLink(Z),B?n.createElement("a",k(k({href:Z},C&&!D&&{target:"_blank",rel:"noopener noreferrer"}),N)):n.createElement(A,k((W=k({},N),f(W,m({onMouseEnter:()=>{S.current||null==Z||(window.docusaurus.preload(Z),S.current=!0)},innerRef:t=>{var e,r;U&&t&&D&&(e=t,r=()=>{null!=Z&&window.docusaurus.prefetch(Z)},I=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(I.unobserve(e),I.disconnect(),r())}))})),I.observe(e))},to:Z||""}))),d&&{isActive:y,activeClassName:g}));var W}},35096:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},25026:function(t,e,r){"use strict";r.d(e,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(t,e,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return e+r;const o=r.startsWith(e)?r:e+r.replace(/^\//,"");return i?t+o:o}(e,t,r,n)}}function o(t,e={}){const{withBaseUrl:r}=i();return r(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:r,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===r)return t;const[a]=t.split(/[#?]/),i="/"===a||a===n?a:(o=a,r?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(a,i)}},67023:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},39366:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return h},metadata:function(){return b},toc:function(){return _},default:function(){return v}});var n=r(3905),a=r(31217),i=r(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))s.call(e,r)&&f(t,r,e[r]);if(u)for(var r of u(e))d.call(e,r)&&f(t,r,e[r]);return t};const p={title:"VideoInformation"},h=void 0,b={unversionedId:"api/classes/structtouchgfx_1_1_video_information",id:"api/classes/structtouchgfx_1_1_video_information",isDocsHomePage:!1,title:"VideoInformation",description:"This type contains various information read from a video file.",source:"@site/docs/api/classes/structtouchgfx_1_1_video_information.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_video_information",permalink:"/4.18/ja/docs/api/classes/structtouchgfx_1_1_video_information",version:"current",frontMatter:{title:"VideoInformation"},sidebar:"docs",previous:{title:"VideoDataReader",permalink:"/4.18/ja/docs/api/classes/classtouchgfx_1_1_video_data_reader"},next:{title:"VideoWidget",permalink:"/4.18/ja/docs/api/classes/classtouchgfx_1_1_video_widget"}},_=[{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"frame_height",id:"frame_height",children:[]},{value:"frame_width",id:"frame_width",children:[]},{value:"ms_between_frames",id:"ms_between_frames",children:[]},{value:"number_of_frames",id:"number_of_frames",children:[]}]}],k={toc:_};function v(t){var e,r=t,{components:o}=r,f=((t,e)=>{var r={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&d.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=m(m({},k),f),l(e,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This type contains various information read from a video file. "),(0,n.kt)("h2",m({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-frame_height",mdxType:"Link"},"frame_height")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The frame height in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-frame_width",mdxType:"Link"},"frame_width")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The frame width in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-ms_between_frames",mdxType:"Link"},"ms_between_frames")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The number of milliseconds between frames.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-number_of_frames",mdxType:"Link"},"number_of_frames")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The number of frames in the movie.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",m({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-frame_height",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"frame_height"}),"frame_height"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t frame_height ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The frame height in pixels. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-frame_width",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"frame_width"}),"frame_width"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t frame_width ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The frame width in pixels. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-ms_between_frames",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"ms_between_frames"}),"ms_between_frames"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t ms_between_frames ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The number of milliseconds between frames. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-number_of_frames",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"number_of_frames"}),"number_of_frames"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t number_of_frames ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The number of frames in the movie. "))))}v.isMDXComponent=!0}}]);