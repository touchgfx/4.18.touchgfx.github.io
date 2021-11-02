(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7995],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=u(r),f=a,k=p["".concat(c,".").concat(f)]||p[f]||s[f]||i;return r?n.createElement(k,o(o({ref:e},d),{},{components:r})):n.createElement(k,o({ref:e},d))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43861:function(t,e,r){"use strict";var n=r(67294);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),l=r(84487);const c=(0,n.createContext)({collectLink:()=>{}});var u=r(25026),d=r(67023),s=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(t,e,r)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,v=(t,e)=>{for(var r in e||(e={}))m.call(e,r)&&b(t,r,e[r]);if(k)for(var r of k(e))h.call(e,r)&&b(t,r,e[r]);return t};var g=function(t){var e,r=t,{isNavLink:s,to:b,href:g,activeClassName:y,isActive:_,"data-noBrokenLinkCheck":x,autoAddBaseUrl:N=!0}=r,O=((t,e)=>{var r={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&k)for(var n of k(t))e.indexOf(n)<0&&h.call(t,n)&&(r[n]=t[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:j}=(0,u.C)(),T=(0,n.useContext)(c),Z=b||g,D=(0,o.Z)(Z),C=null==Z?void 0:Z.replace("pathname://","");let E=void 0!==C?(L=C,N&&(t=>t.startsWith("/"))(L)?j(L):L):void 0;var L;E&&D&&(E=(0,d.applyTrailingSlash)(E,{trailingSlash:w,baseUrl:P}));const U=(0,n.useRef)(!1),A=s?a.OL:a.rU,S=l.Z.canUseIntersectionObserver,M=(0,n.useRef)();(0,n.useEffect)((()=>(!S&&D&&null!=E&&window.docusaurus.prefetch(E),()=>{S&&M.current&&M.current.disconnect()})),[M,E,S,D]);const X=null!==(e=null==E?void 0:E.startsWith("#"))&&void 0!==e&&e,B=!E||!D||X;return E&&D&&!X&&!x&&T.collectLink(E),B?n.createElement("a",v(v({href:E},Z&&!D&&{target:"_blank",rel:"noopener noreferrer"}),O)):n.createElement(A,v((H=v({},O),p(H,f({onMouseEnter:()=>{U.current||null==E||(window.docusaurus.preload(E),U.current=!0)},innerRef:t=>{var e,r;S&&t&&D&&(e=t,r=()=>{null!=E&&window.docusaurus.prefetch(E)},M.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.current.unobserve(e),M.current.disconnect(),r())}))})),M.current.observe(e))},to:E||""}))),s&&{isActive:_,activeClassName:y}));var H}},35096:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},25026:function(t,e,r){"use strict";r.d(e,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(t,e,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return e+r;const o=r.startsWith(e)?r:e+r.replace(/^\//,"");return i?t+o:o}(e,t,r,n)}}function o(t,e={}){const{withBaseUrl:r}=i();return r(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:r,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===r)return t;const[a]=t.split(/[#?]/),i="/"===a||a===n?a:(o=a,r?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(a,i)}},67023:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},68802:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return k},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return b},default:function(){return g}});var n=r(3905),a=r(31217),i=r(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,f=(t,e)=>{for(var r in e||(e={}))d.call(e,r)&&p(t,r,e[r]);if(u)for(var r of u(e))s.call(e,r)&&p(t,r,e[r]);return t};const k={title:"Point3D"},m=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1_point3_d",id:"api/classes/structtouchgfx_1_1_point3_d",isDocsHomePage:!1,title:"Point3D",description:"A 3D point.",source:"@site/docs/api/classes/structtouchgfx_1_1_point3_d.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_point3_d",permalink:"/4.18/docs/api/classes/structtouchgfx_1_1_point3_d",tags:[],version:"current",frontMatter:{title:"Point3D"},sidebar:"docs",previous:{title:"Point",permalink:"/4.18/docs/api/classes/structtouchgfx_1_1_point"},next:{title:"Point4",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_point4"}},b=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"U",id:"u",children:[],level:3},{value:"V",id:"v",children:[],level:3},{value:"X",id:"x",children:[],level:3},{value:"Y",id:"y",children:[],level:3},{value:"Z",id:"z",children:[],level:3}],level:2}],v={toc:b};function g(t){var e,r=t,{components:o}=r,p=((t,e)=>{var r={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&s.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=f(f({},v),p),l(e,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A 3D point. "),(0,n.kt)("h2",f({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"right"})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_point3_d#variable-u",mdxType:"Link"},"U")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The U coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_point3_d#variable-v",mdxType:"Link"},"V")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The V coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),(0,n.kt)("a",f({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_point3_d#variable-x",mdxType:"Link"},"X")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The X coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),(0,n.kt)("a",f({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_point3_d#variable-y",mdxType:"Link"},"Y")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The Y coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_point3_d#variable-z",mdxType:"Link"},"Z")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The Z coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",f({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-u",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"u"}),"U"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float U ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The U coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-v",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"v"}),"V"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float V ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The V coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-x",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"x"}),"X"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",f({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")," X ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The X coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-y",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"y"}),"Y"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",f({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")," Y ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The Y coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-z",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"z"}),"Z"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float Z ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The Z coordinate. "))))}g.isMDXComponent=!0}}]);