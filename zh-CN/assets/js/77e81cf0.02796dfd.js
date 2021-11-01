(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8770],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return d},kt:function(){return k}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),c=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=c(r),k=n,m=u["".concat(p,".").concat(k)]||u[k]||s[k]||i;return r?a.createElement(m,o(o({ref:e},d),{},{components:r})):a.createElement(m,o({ref:e},d))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},43861:function(t,e,r){"use strict";var a=r(67294);class n extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},31217:function(t,e,r){"use strict";r.d(e,{Z:function(){return _}});var a=r(67294),n=r(73727),i=r(11368),o=r(35096),l=r(84487);const p=(0,a.createContext)({collectLink:()=>{}});var c=r(25026),d=r(67023),s=Object.defineProperty,u=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(t,e,r)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,f=(t,e)=>{for(var r in e||(e={}))h.call(e,r)&&g(t,r,e[r]);if(m)for(var r of m(e))b.call(e,r)&&g(t,r,e[r]);return t};var _=function(t){var e,r=t,{isNavLink:s,to:g,href:_,activeClassName:v,isActive:y,"data-noBrokenLinkCheck":N,autoAddBaseUrl:x=!0}=r,w=((t,e)=>{var r={};for(var a in t)h.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&m)for(var a of m(t))e.indexOf(a)<0&&b.call(t,a)&&(r[a]=t[a]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:T}}=(0,i.Z)(),{withBaseUrl:L}=(0,c.C)(),P=(0,a.useContext)(p),D=g||_,Z=(0,o.Z)(D),j=null==D?void 0:D.replace("pathname://","");let C=void 0!==j?(S=j,x&&(t=>t.startsWith("/"))(S)?L(S):S):void 0;var S;C&&Z&&(C=(0,d.applyTrailingSlash)(C,{trailingSlash:O,baseUrl:T}));const B=(0,a.useRef)(!1),A=s?n.OL:n.rU,E=l.Z.canUseIntersectionObserver;let H;(0,a.useEffect)((()=>(!E&&Z&&null!=C&&window.docusaurus.prefetch(C),()=>{E&&H&&H.disconnect()})),[C,E,Z]);const U=null!==(e=null==C?void 0:C.startsWith("#"))&&void 0!==e&&e,M=!C||!Z||U;return C&&Z&&!U&&!N&&P.collectLink(C),M?a.createElement("a",f(f({href:C},D&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(A,f((F=f({},w),u(F,k({onMouseEnter:()=>{B.current||null==C||(window.docusaurus.preload(C),B.current=!0)},innerRef:t=>{var e,r;E&&t&&Z&&(e=t,r=()=>{null!=C&&window.docusaurus.prefetch(C)},H=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(H.unobserve(e),H.disconnect(),r())}))})),H.observe(e))},to:C||""}))),s&&{isActive:y,activeClassName:v}));var F}},35096:function(t,e,r){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!a(t)}r.d(e,{b:function(){return a},Z:function(){return n}})},25026:function(t,e,r){"use strict";r.d(e,{C:function(){return i},Z:function(){return o}});var a=r(11368),n=r(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(r,a)=>function(t,e,r,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,n.b)(r))return r;if(a)return e+r;const o=r.startsWith(e)?r:e+r.replace(/^\//,"");return i?t+o:o}(e,t,r,a)}}function o(t,e={}){const{withBaseUrl:r}=i();return r(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:r,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===r)return t;const[n]=t.split(/[#?]/),i="/"===n||n===a?n:(o=n,r?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(n,i)}},67023:function(t,e,r){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var n=r(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(n).default}});var i=r(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},99809:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return b},toc:function(){return g},default:function(){return _}});var a=r(3905),n=r(31217),i=r(43861),o=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))d.call(e,r)&&u(t,r,e[r]);if(c)for(var r of c(e))s.call(e,r)&&u(t,r,e[r]);return t};const m={title:"BlitOp"},h=void 0,b={unversionedId:"api/classes/structtouchgfx_1_1_blit_op",id:"api/classes/structtouchgfx_1_1_blit_op",isDocsHomePage:!1,title:"BlitOp",description:"BlitOp instances carry the required information for performing operations on the LCD (framebuffer) using DMA.",source:"@site/docs/api/classes/structtouchgfx_1_1_blit_op.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_blit_op",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_blit_op",version:"current",frontMatter:{title:"BlitOp"},sidebar:"docs",previous:{title:"BitmapData",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data"},next:{title:"BlockTransition",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_block_transition"}},g=[{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"alpha",id:"alpha",children:[]},{value:"color",id:"color",children:[]},{value:"dstFormat",id:"dstformat",children:[]},{value:"dstLoopStride",id:"dstloopstride",children:[]},{value:"nLoops",id:"nloops",children:[]},{value:"nSteps",id:"nsteps",children:[]},{value:"operation",id:"operation",children:[]},{value:"pClut",id:"pclut",children:[]},{value:"pDst",id:"pdst",children:[]},{value:"pSrc",id:"psrc",children:[]},{value:"replaceBgAlpha",id:"replacebgalpha",children:[]},{value:"srcFormat",id:"srcformat",children:[]},{value:"srcLoopStride",id:"srcloopstride",children:[]}]}],f={toc:g};function _(t){var e,r=t,{components:o}=r,u=((t,e)=>{var r={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&c)for(var a of c(t))e.indexOf(a)<0&&s.call(t,a)&&(r[a]=t[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(e=k(k({},f),u),l(e,p({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"BlitOp instances carry the required information for performing operations on the LCD (framebuffer) using DMA. "),(0,a.kt)("h2",k({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-alpha",mdxType:"Link"},"alpha")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The alpha to use.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-color",mdxType:"Link"},"color")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Color to fill.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-dstformat",mdxType:"Link"},"dstFormat")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The destination format.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"uint16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-dstloopstride",mdxType:"Link"},"dstLoopStride")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The number of bytes to stride the destination after every loop.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"uint16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-nloops",mdxType:"Link"},"nLoops")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The number of lines.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"uint16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-nsteps",mdxType:"Link"},"nSteps")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The number of pixels in a line.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"uint32_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-operation",mdxType:"Link"},"operation")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The operation to perform.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"const uint8_t *"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-pclut",mdxType:"Link"},"pClut")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Pointer to the source CLUT entires.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"uint16_t *"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-pdst",mdxType:"Link"},"pDst")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Pointer to the destination.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"const uint16_t *"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-psrc",mdxType:"Link"},"pSrc")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Pointer to the source (pixels or indexes)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-replacebgalpha",mdxType:"Link"},"replaceBgAlpha")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Replace the background per pixel alpha value with 255 = solid.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-srcformat",mdxType:"Link"},"srcFormat")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The source format.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"uint16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_blit_op#variable-srcloopstride",mdxType:"Link"},"srcLoopStride")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The number of bytes to stride the source after every loop.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-alpha",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"alpha"}),"alpha"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t alpha ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The alpha to use. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-color",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"color"}),"color"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"structtouchgfx_1_1colortype"}),"colortype")," color ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Color to fill. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-dstformat",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"dstformat"}),"dstFormat"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t dstFormat ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The destination format. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-dstloopstride",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"dstloopstride"}),"dstLoopStride"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t dstLoopStride ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The number of bytes to stride the destination after every loop. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-nloops",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"nloops"}),"nLoops"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t nLoops ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The number of lines. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-nsteps",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"nsteps"}),"nSteps"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t nSteps ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The number of pixels in a line. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-operation",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"operation"}),"operation"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint32_t operation ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The operation to perform. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-pclut",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"pclut"}),"pClut"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const uint8_t * pClut ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Pointer to the source CLUT entires. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-pdst",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"pdst"}),"pDst"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t * pDst ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Pointer to the destination. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-psrc",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"psrc"}),"pSrc"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const uint16_t * pSrc ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Pointer to the source (pixels or indexes) "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-replacebgalpha",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"replacebgalpha"}),"replaceBgAlpha"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"bool replaceBgAlpha ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Replace the background per pixel alpha value with 255 = solid. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-srcformat",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"srcformat"}),"srcFormat"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t srcFormat ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The source format. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_blit_op#variable-srcloopstride",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"srcloopstride"}),"srcLoopStride"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t srcLoopStride ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The number of bytes to stride the source after every loop. "))))}_.isMDXComponent=!0}}]);