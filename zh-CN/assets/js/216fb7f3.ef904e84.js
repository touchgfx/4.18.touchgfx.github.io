(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[512],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:e},s),{},{components:n})):r.createElement(m,i({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var r=n(67294),a=n(73727),o=n(11368),i=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e)=>{for(var n in e||(e={}))k.call(e,n)&&g(t,n,e[n]);if(m)for(var n of m(e))h.call(e,n)&&g(t,n,e[n]);return t};var b=function(t){var e,n=t,{isNavLink:d,to:g,href:b,activeClassName:N,isActive:_,"data-noBrokenLinkCheck":y,autoAddBaseUrl:O=!0}=n,w=((t,e)=>{var n={};for(var r in t)k.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&h.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:P}}=(0,o.Z)(),{withBaseUrl:F}=(0,u.C)(),j=(0,r.useContext)(c),C=g||b,T=(0,i.Z)(C),E=null==C?void 0:C.replace("pathname://","");let D=void 0!==E?(I=E,O&&(t=>t.startsWith("/"))(I)?F(I):I):void 0;var I;D&&T&&(D=(0,s.applyTrailingSlash)(D,{trailingSlash:x,baseUrl:P}));const Z=(0,r.useRef)(!1),L=d?a.OL:a.rU,S=l.Z.canUseIntersectionObserver;let A;(0,r.useEffect)((()=>(!S&&T&&null!=D&&window.docusaurus.prefetch(D),()=>{S&&A&&A.disconnect()})),[D,S,T]);const U=null!==(e=null==D?void 0:D.startsWith("#"))&&void 0!==e&&e,M=!D||!T||U;return D&&T&&!U&&!y&&j.collectLink(D),M?r.createElement("a",v(v({href:D},C&&!T&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(L,v((B=v({},w),p(B,f({onMouseEnter:()=>{Z.current||null==D||(window.docusaurus.preload(D),Z.current=!0)},innerRef:t=>{var e,n;S&&t&&T&&(e=t,n=()=>{null!=D&&window.docusaurus.prefetch(D)},A=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(A.unobserve(e),A.disconnect(),n())}))})),A.observe(e))},to:D||""}))),d&&{isActive:_,activeClassName:N}));var B}},35096:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return o},Z:function(){return i}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return o?t+i:i}(e,t,n,r)}}function i(t,e={}){const{withBaseUrl:n}=o();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[a]=t.split(/[#?]/),o="/"===a||a===r?a:(i=a,n?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(a,o)}},67023:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},1814:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return h},toc:function(){return g},default:function(){return b}});var r=n(3905),a=n(31217),o=n(43861),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&p(t,n,e[n]);if(u)for(var n of u(e))d.call(e,n)&&p(t,n,e[n]);return t};const m={title:"FontProvider"},k=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_font_provider",id:"api/classes/classtouchgfx_1_1_font_provider",isDocsHomePage:!1,title:"FontProvider",description:"A generic pure virtual definition of a FontProvider, which is a class capable of returning a Font based on a FontId.",source:"@site/docs/api/classes/classtouchgfx_1_1_font_provider.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_font_provider",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_font_provider",version:"current",frontMatter:{title:"FontProvider"},sidebar:"docs",previous:{title:"FontManager",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_font_manager"},next:{title:"FrameBufferAllocator",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator"}},g=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"getFont",id:"getfont",children:[]},{value:"~FontProvider",id:"fontprovider",children:[]}]}],v={toc:g};function b(t){var e,n=t,{components:i}=n,p=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&d.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=f(f({},v),p),l(e,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null," A generic pure virtual definition of a FontProvider, which is a class capable of returning a ",(0,r.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_font"}),"Font")," based on a FontId.\nAn application-specific derivation of this class must be implemented. "),(0,r.kt)("h2",f({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"right"})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"virtual","\xa0",(0,r.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_font"}),"Font")," *"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_font_provider#function-getfont",mdxType:"Link"},"getFont")),"(",(0,r.kt)("a",f({parentName:"td"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")," fontId) =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Gets a ",(0,r.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_font"}),"Font"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_font_provider#function-~fontprovider",mdxType:"Link"},"~FontProvider")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,r.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",f({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(o.Z,{url:"classtouchgfx_1_1_font_provider#function-getfont",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"getfont"}),"getFont"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"virtual","\xa0","Font *","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_font_provider#function-getfont",mdxType:"Link"},"getFont")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("a",f({parentName:"td"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"fontId"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Gets a ",(0,r.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_font"}),"Font"),". "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"fontId"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The FontId of the font to get."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The font with a font id of fontId. ")))),(0,r.kt)(o.Z,{url:"classtouchgfx_1_1_font_provider#function-~fontprovider",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"fontprovider"}),"~FontProvider"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"virtual","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_font_provider#function-~fontprovider",mdxType:"Link"},"~FontProvider")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Finalizes an instance of the ",(0,r.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," class. "))))}b.isMDXComponent=!0}}]);