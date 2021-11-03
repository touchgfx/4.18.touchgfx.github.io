"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9805],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||i;return r?n.createElement(p,o(o({ref:t},s),{},{components:r})):n.createElement(p,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43861:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:e})}}t.Z=a},39130:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),l=r(84487);const c=(0,n.createContext)({collectLink:()=>{}});var u=r(25026),s=r(67023),d=Object.defineProperty,f=Object.defineProperties,m=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&v(e,r,t[r]);if(p)for(var r of p(t))b.call(t,r)&&v(e,r,t[r]);return e};var k=function(e){var t,r=e,{isNavLink:d,to:v,href:k,activeClassName:g,isActive:y,"data-noBrokenLinkCheck":w,autoAddBaseUrl:O=!0}=r,N=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:j}=(0,u.C)(),T=(0,n.useContext)(c),C=v||k,D=(0,o.Z)(C),E=null==C?void 0:C.replace("pathname://","");let Z=void 0!==E?(L=E,O&&(e=>e.startsWith("/"))(L)?j(L):L):void 0;var L;Z&&D&&(Z=(0,s.applyTrailingSlash)(Z,{trailingSlash:x,baseUrl:P}));const S=(0,n.useRef)(!1),A=d?a.OL:a.rU,U=l.Z.canUseIntersectionObserver,I=(0,n.useRef)();(0,n.useEffect)((()=>(!U&&D&&null!=Z&&window.docusaurus.prefetch(Z),()=>{U&&I.current&&I.current.disconnect()})),[I,Z,U,D]);const M=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,B=!Z||!D||M;return Z&&D&&!M&&!w&&T.collectLink(Z),B?n.createElement("a",_(_({href:Z},C&&!D&&{target:"_blank",rel:"noopener noreferrer"}),N)):n.createElement(A,_((W=_({},N),f(W,m({onMouseEnter:()=>{S.current||null==Z||(window.docusaurus.preload(Z),S.current=!0)},innerRef:e=>{var t,r;U&&e&&D&&(t=e,r=()=>{null!=Z&&window.docusaurus.prefetch(Z)},I.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(t),I.current.disconnect(),r())}))})),I.current.observe(t))},to:Z||""}))),d&&{isActive:y,activeClassName:g}));var W}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),i="/"===a||a===n?a:(o=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,i)}},67023:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},97695:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return h},metadata:function(){return b},toc:function(){return v},default:function(){return k}});var n=r(3905),a=r(39130),i=r(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&f(e,r,t[r]);return e};const p={title:"VideoInformation"},h=void 0,b={unversionedId:"api/classes/structtouchgfx_1_1_video_information",id:"api/classes/structtouchgfx_1_1_video_information",isDocsHomePage:!1,title:"VideoInformation",description:"This type contains various information read from a video file.",source:"@site/docs/api/classes/structtouchgfx_1_1_video_information.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_video_information",permalink:"/4.18/docs/api/classes/structtouchgfx_1_1_video_information",tags:[],version:"current",frontMatter:{title:"VideoInformation"},sidebar:"docs",previous:{title:"VideoDataReader",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_video_data_reader"},next:{title:"VideoWidget",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_video_widget"}},v=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"frame_height",id:"frame_height",children:[],level:3},{value:"frame_width",id:"frame_width",children:[],level:3},{value:"ms_between_frames",id:"ms_between_frames",children:[],level:3},{value:"number_of_frames",id:"number_of_frames",children:[],level:3}],level:2}],_={toc:v};function k(e){var t,r=e,{components:o}=r,f=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},_),f),l(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This type contains various information read from a video file. "),(0,n.kt)("h2",m({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-frame_height",mdxType:"Link"},"frame_height")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The frame height in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-frame_width",mdxType:"Link"},"frame_width")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The frame width in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-ms_between_frames",mdxType:"Link"},"ms_between_frames")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The number of milliseconds between frames.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"uint32_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_video_information#variable-number_of_frames",mdxType:"Link"},"number_of_frames")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The number of frames in the movie.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",m({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-frame_height",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"frame_height"}),"frame_height"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t frame_height ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The frame height in pixels. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-frame_width",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"frame_width"}),"frame_width"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t frame_width ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The frame width in pixels. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-ms_between_frames",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"ms_between_frames"}),"ms_between_frames"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t ms_between_frames ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The number of milliseconds between frames. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_video_information#variable-number_of_frames",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"number_of_frames"}),"number_of_frames"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint32_t number_of_frames ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The number of frames in the movie. "))))}k.isMDXComponent=!0}}]);