"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2948],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=u(r),f=a,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(h,o(o({ref:e},s),{},{components:r})):n.createElement(h,o({ref:e},s))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43861:function(t,e,r){var n=r(67294);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},39130:function(t,e,r){r.d(e,{Z:function(){return v}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),l=r(84487);const c=(0,n.createContext)({collectLink:()=>{}});var u=r(25026),s=r(67023),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(t,e,r)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,b=(t,e)=>{for(var r in e||(e={}))k.call(e,r)&&g(t,r,e[r]);if(h)for(var r of h(e))m.call(e,r)&&g(t,r,e[r]);return t};var v=function(t){var e,r=t,{isNavLink:d,to:g,href:v,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":x,autoAddBaseUrl:w=!0}=r,N=((t,e)=>{var r={};for(var n in t)k.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&h)for(var n of h(t))e.indexOf(n)<0&&m.call(t,n)&&(r[n]=t[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:T}}=(0,i.Z)(),{withBaseUrl:P}=(0,u.C)(),j=(0,n.useContext)(c),D=g||v,C=(0,o.Z)(D),L=null==D?void 0:D.replace("pathname://","");let Z=void 0!==L?(E=L,w&&(t=>t.startsWith("/"))(E)?P(E):E):void 0;var E;Z&&C&&(Z=(0,s.applyTrailingSlash)(Z,{trailingSlash:O,baseUrl:T}));const S=(0,n.useRef)(!1),A=d?a.OL:a.rU,U=l.Z.canUseIntersectionObserver,M=(0,n.useRef)();(0,n.useEffect)((()=>(!U&&C&&null!=Z&&window.docusaurus.prefetch(Z),()=>{U&&M.current&&M.current.disconnect()})),[M,Z,U,C]);const W=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,B=!Z||!C||W;return Z&&C&&!W&&!x&&j.collectLink(Z),B?n.createElement("a",b(b({href:Z},D&&!C&&{target:"_blank",rel:"noopener noreferrer"}),N)):n.createElement(A,b((I=b({},N),p(I,f({onMouseEnter:()=>{S.current||null==Z||(window.docusaurus.preload(Z),S.current=!0)},innerRef:t=>{var e,r;U&&t&&C&&(e=t,r=()=>{null!=Z&&window.docusaurus.prefetch(Z)},M.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.current.unobserve(e),M.current.disconnect(),r())}))})),M.current.observe(e))},to:Z||""}))),d&&{isActive:y,activeClassName:_}));var I}},35096:function(t,e,r){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},25026:function(t,e,r){r.d(e,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(t,e,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return e+r;const o=r.startsWith(e)?r:e+r.replace(/^\//,"");return i?t+o:o}(e,t,r,n)}}function o(t,e={}){const{withBaseUrl:r}=i();return r(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:r,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===r)return t;const[a]=t.split(/[#?]/),i="/"===a||a===n?a:(o=a,r?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(a,i)}},67023:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},35738:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return h},contentTitle:function(){return k},metadata:function(){return m},toc:function(){return g},default:function(){return v}});var n=r(3905),a=r(39130),i=r(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,f=(t,e)=>{for(var r in e||(e={}))s.call(e,r)&&p(t,r,e[r]);if(u)for(var r of u(e))d.call(e,r)&&p(t,r,e[r]);return t};const h={title:"TextureSurface"},k=void 0,m={unversionedId:"api/classes/structtouchgfx_1_1_texture_surface",id:"api/classes/structtouchgfx_1_1_texture_surface",isDocsHomePage:!1,title:"TextureSurface",description:"A texture source.",source:"@site/docs/api/classes/structtouchgfx_1_1_texture_surface.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_texture_surface",permalink:"/4.18/zh-TW/docs/api/classes/structtouchgfx_1_1_texture_surface",tags:[],version:"current",frontMatter:{title:"TextureSurface"},sidebar:"docs",previous:{title:"TextureMapper",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_texture_mapper"},next:{title:"TiledImage",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_tiled_image"}},g=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"data",id:"data",children:[],level:3},{value:"extraData",id:"extradata",children:[],level:3},{value:"height",id:"height",children:[],level:3},{value:"stride",id:"stride",children:[],level:3},{value:"width",id:"width",children:[],level:3}],level:2}],b={toc:g};function v(t){var e,r=t,{components:o}=r,p=((t,e)=>{var r={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&d.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=f(f({},b),p),l(e,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," A texture source.\nContains a pointer to the data and the width and height of the texture. The alpha channel is used in 565 rendering with alpha. The stride is the width used when moving to the next line of the texture. "),(0,n.kt)("h2",f({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"right"})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"const uint16_t *"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_texture_surface#variable-data",mdxType:"Link"},"data")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The pixel bits or indexes for color in CLUT entries.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"const uint8_t *"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_texture_surface#variable-extradata",mdxType:"Link"},"extraData")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The alpha channel or clut data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"int32_t"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_texture_surface#variable-height",mdxType:"Link"},"height")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The height.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"int32_t"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_texture_surface#variable-stride",mdxType:"Link"},"stride")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The stride.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"int32_t"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_texture_surface#variable-width",mdxType:"Link"},"width")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The width.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",f({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-data",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"data"}),"data"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const uint16_t * data ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The pixel bits or indexes for color in CLUT entries. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-extradata",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"extradata"}),"extraData"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const uint8_t * extraData ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The alpha channel or clut data. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-height",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"height"}),"height"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int32_t height ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The height. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-stride",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"stride"}),"stride"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int32_t stride ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The stride. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_texture_surface#variable-width",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"width"}),"width"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int32_t width ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The width. "))))}v.isMDXComponent=!0}}]);