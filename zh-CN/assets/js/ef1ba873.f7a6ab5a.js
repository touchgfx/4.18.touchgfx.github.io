"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8216],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},39130:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(67294),a=n(73727),i=n(11368),o=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))k.call(e,n)&&b(t,n,e[n]);if(m)for(var n of m(e))h.call(e,n)&&b(t,n,e[n]);return t};var v=function(t){var e,n=t,{isNavLink:d,to:b,href:v,activeClassName:y,isActive:_,"data-noBrokenLinkCheck":N,autoAddBaseUrl:x=!0}=n,O=((t,e)=>{var n={};for(var r in t)k.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&h.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:j}=(0,u.C)(),T=(0,r.useContext)(c),C=b||v,D=(0,o.Z)(C),E=null==C?void 0:C.replace("pathname://","");let Z=void 0!==E?(q=E,x&&(t=>t.startsWith("/"))(q)?j(q):q):void 0;var q;Z&&D&&(Z=(0,s.applyTrailingSlash)(Z,{trailingSlash:w,baseUrl:P}));const L=(0,r.useRef)(!1),A=d?a.OL:a.rU,S=l.Z.canUseIntersectionObserver,U=(0,r.useRef)();(0,r.useEffect)((()=>(!S&&D&&null!=Z&&window.docusaurus.prefetch(Z),()=>{S&&U.current&&U.current.disconnect()})),[U,Z,S,D]);const M=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,B=!Z||!D||M;return Z&&D&&!M&&!N&&T.collectLink(Z),B?r.createElement("a",g(g({href:Z},C&&!D&&{target:"_blank",rel:"noopener noreferrer"}),O)):r.createElement(A,g((W=g({},O),p(W,f({onMouseEnter:()=>{L.current||null==Z||(window.docusaurus.preload(Z),L.current=!0)},innerRef:t=>{var e,n;S&&t&&D&&(e=t,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},U.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.current.unobserve(e),U.current.disconnect(),n())}))})),U.current.observe(e))},to:Z||""}))),d&&{isActive:_,activeClassName:y}));var W}},35096:function(t,e,n){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){n.d(e,{C:function(){return i},Z:function(){return o}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const o=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+o:o}(e,t,n,r)}}function o(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[a]=t.split(/[#?]/),i="/"===a||a===r?a:(o=a,n?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(a,i)}},67023:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},56192:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return h},toc:function(){return b},default:function(){return v}});var r=n(3905),a=n(39130),i=n(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&p(t,n,e[n]);if(u)for(var n of u(e))d.call(e,n)&&p(t,n,e[n]);return t};const m={title:"Point"},k=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1_point",id:"api/classes/structtouchgfx_1_1_point",isDocsHomePage:!1,title:"Point",description:"A simple struct containing coordinates.",source:"@site/docs/api/classes/structtouchgfx_1_1_point.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_point",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_point",tags:[],version:"current",frontMatter:{title:"Point"},sidebar:"docs",previous:{title:"PixelDataWidget",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_pixel_data_widget"},next:{title:"Point3D",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_point3_d"}},b=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"dist_sqr",id:"dist_sqr",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"x",id:"x",children:[],level:3},{value:"y",id:"y",children:[],level:3}],level:2}],g={toc:b};function v(t){var e,n=t,{components:o}=n,p=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&d.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=f(f({},g),p),l(e,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A simple struct containing coordinates. "),(0,r.kt)("h2",f({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"right"})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"unsigned"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_point#function-dist_sqr",mdxType:"Link"},"dist_sqr")),"(struct ",(0,r.kt)("a",f({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," & o)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The squared distance from this ",(0,r.kt)("a",f({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," to another ",(0,r.kt)("a",f({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",f({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"right"})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"int32_t"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_point#variable-x",mdxType:"Link"},"x")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The x coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"int32_t"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_point#variable-y",mdxType:"Link"},"y")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The y coordinate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",f({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_point#function-dist_sqr",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"dist_sqr"}),"dist_sqr"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"unsigned","\xa0",(0,r.kt)(a.Z,{to:"structtouchgfx_1_1_point#function-dist_sqr",mdxType:"Link"},"dist_sqr")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"struct ",(0,r.kt)("a",f({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," &"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"o"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"The squared distance from this ",(0,r.kt)("a",f({parentName:"p"},{href:"structtouchgfx_1_1_point"}),"Point")," to another ",(0,r.kt)("a",f({parentName:"p"},{href:"structtouchgfx_1_1_point"}),"Point"),". "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"o"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The point to get the squared distance to."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The squared distance. ")))),(0,r.kt)("h2",f({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_point#variable-x",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"x"}),"x"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"int32_t x ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The x coordinate. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_point#variable-y",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"y"}),"y"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"int32_t y ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The y coordinate. "))))}v.isMDXComponent=!0}}]);