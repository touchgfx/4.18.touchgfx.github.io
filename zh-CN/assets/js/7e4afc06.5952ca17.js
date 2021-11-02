(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[515],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),u=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=u(r),g=a,m=s["".concat(d,".").concat(g)]||s[g]||p[g]||i;return r?n.createElement(m,l(l({ref:e},c),{},{components:r})):n.createElement(m,l({ref:e},c))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},43861:function(t,e,r){"use strict";var n=r(67294);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n=r(67294),a=r(73727),i=r(11368),l=r(35096),o=r(84487);const d=(0,n.createContext)({collectLink:()=>{}});var u=r(25026),c=r(67023),p=Object.defineProperty,s=Object.defineProperties,g=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,b=(t,e,r)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,f=(t,e)=>{for(var r in e||(e={}))k.call(e,r)&&b(t,r,e[r]);if(m)for(var r of m(e))_.call(e,r)&&b(t,r,e[r]);return t};var h=function(t){var e,r=t,{isNavLink:p,to:b,href:h,activeClassName:N,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=r,w=((t,e)=>{var r={};for(var n in t)k.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&_.call(t,n)&&(r[n]=t[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:D}}=(0,i.Z)(),{withBaseUrl:O}=(0,u.C)(),L=(0,n.useContext)(d),T=b||h,C=(0,l.Z)(T),j=null==T?void 0:T.replace("pathname://","");let Z=void 0!==j?(R=j,x&&(t=>t.startsWith("/"))(R)?O(R):R):void 0;var R;Z&&C&&(Z=(0,c.applyTrailingSlash)(Z,{trailingSlash:P,baseUrl:D}));const S=(0,n.useRef)(!1),B=p?a.OL:a.rU,A=o.Z.canUseIntersectionObserver,E=(0,n.useRef)();(0,n.useEffect)((()=>(!A&&C&&null!=Z&&window.docusaurus.prefetch(Z),()=>{A&&E.current&&E.current.disconnect()})),[E,Z,A,C]);const F=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,G=!Z||!C||F;return Z&&C&&!F&&!v&&L.collectLink(Z),G?n.createElement("a",f(f({href:Z},T&&!C&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(B,f((U=f({},w),s(U,g({onMouseEnter:()=>{S.current||null==Z||(window.docusaurus.preload(Z),S.current=!0)},innerRef:t=>{var e,r;A&&t&&C&&(e=t,r=()=>{null!=Z&&window.docusaurus.prefetch(Z)},E.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(E.current.unobserve(e),E.current.disconnect(),r())}))})),E.current.observe(e))},to:Z||""}))),p&&{isActive:y,activeClassName:N}));var U}},35096:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},25026:function(t,e,r){"use strict";r.d(e,{C:function(){return i},Z:function(){return l}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(t,e,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return e+r;const l=r.startsWith(e)?r:e+r.replace(/^\//,"");return i?t+l:l}(e,t,r,n)}}function l(t,e={}){const{withBaseUrl:r}=i();return r(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:r,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===r)return t;const[a]=t.split(/[#?]/),i="/"===a||a===n?a:(l=a,r?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(a,i)}},67023:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},70330:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return _},toc:function(){return b},default:function(){return h}});var n=r(3905),a=r(31217),i=r(43861),l=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,g=(t,e)=>{for(var r in e||(e={}))c.call(e,r)&&s(t,r,e[r]);if(u)for(var r of u(e))p.call(e,r)&&s(t,r,e[r]);return t};const m={title:"LCD8DebugPrinterBase"},k=void 0,_={unversionedId:"api/classes/classtouchgfx_1_1_l_c_d8_debug_printer_base",id:"api/classes/classtouchgfx_1_1_l_c_d8_debug_printer_base",isDocsHomePage:!1,title:"LCD8DebugPrinterBase",description:"The class LCD8DebugPrinterBase defines the abstract base class used for printing debug messages on top of a specific 8bit framebuffer, with a specifc color type.",source:"@site/docs/api/classes/classtouchgfx_1_1_l_c_d8_debug_printer_base.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_l_c_d8_debug_printer_base",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_l_c_d8_debug_printer_base",tags:[],version:"current",frontMatter:{title:"LCD8DebugPrinterBase"},sidebar:"docs",previous:{title:"LCD8bpp_RGBA2222",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_l_c_d8bpp___r_g_b_a2222"},next:{title:"LCD8RGBA2222DebugPrinter",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_l_c_d8_r_g_b_a2222_debug_printer"}},b=[{value:"Protected Functions",id:"protected-functions",children:[],level:2},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_debug_printer">DebugPrinter</Link>',id:"public-functions-inherited-from-debugprinter",children:[],level:3},{value:'Protected Functions inherited from <Link to="classtouchgfx_1_1_debug_printer">DebugPrinter</Link>',id:"protected-functions-inherited-from-debugprinter",children:[],level:3},{value:'Protected Attributes inherited from <Link to="classtouchgfx_1_1_debug_printer">DebugPrinter</Link>',id:"protected-attributes-inherited-from-debugprinter",children:[],level:3}],level:2},{value:"Protected Functions Documentation",id:"protected-functions-documentation",children:[{value:"drawColorType",id:"drawcolortype",children:[],level:3}],level:2}],f={toc:b};function h(t){var e,r=t,{components:l}=r,s=((t,e)=>{var r={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&p.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=g(g({},f),s),o(e,d({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," The class LCD8DebugPrinterBase defines the abstract base class used for printing debug messages on top of a specific 8bit framebuffer, with a specifc color type. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d8_a_b_g_r2222_debug_printer"}),"LCD8ABGR2222DebugPrinter"),", ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d8_a_r_g_b2222_debug_printer"}),"LCD8ARGB2222DebugPrinter"),", ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d8_b_g_r_a2222_debug_printer"}),"LCD8BGRA2222DebugPrinter"),", ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d8_r_g_b_a2222_debug_printer"}),"LCD8RGBA2222DebugPrinter")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": The ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_debug_printer"}),"DebugPrinter")," interface is implemented in each specific LCD8 debug printer. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer",mdxType:"Link"},"DebugPrinter")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_l_c_d8_a_b_g_r2222_debug_printer",mdxType:"Link"},"LCD8ABGR2222DebugPrinter"),",  ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_l_c_d8_a_r_g_b2222_debug_printer",mdxType:"Link"},"LCD8ARGB2222DebugPrinter"),",  ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_l_c_d8_b_g_r_a2222_debug_printer",mdxType:"Link"},"LCD8BGRA2222DebugPrinter"),",  ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_l_c_d8_r_g_b_a2222_debug_printer",mdxType:"Link"},"LCD8RGBA2222DebugPrinter")),(0,n.kt)("h2",g({},{id:"protected-functions"}),"Protected Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_l_c_d8_debug_printer_base#function-drawcolortype",mdxType:"Link"},"drawColorType")),"(const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect, const uint8_t debugColorType) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Draws the ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_debug_printer#variable-debugstring"}),"DebugPrinter::debugString")," on top of the framebuffer content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",g({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,n.kt)("h3",g({},{id:"public-functions-inherited-from-debugprinter"}),"Public Functions inherited from ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer",mdxType:"Link"},"DebugPrinter")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-debugprinter",mdxType:"Link"},"DebugPrinter")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_debug_printer"}),"DebugPrinter")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-draw",mdxType:"Link"},"draw")),"(const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect) const =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Draws the debug string on top of the framebuffer content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-getregion",mdxType:"Link"},"getRegion")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Returns the region where the debug string is displayed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-setcolor",mdxType:"Link"},"setColor")),"(",(0,n.kt)("a",g({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")," fg)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Sets the foreground color of the debug string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-setposition",mdxType:"Link"},"setPosition")),"(uint16_t x, uint16_t y, uint16_t w, uint16_t h)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Sets the position onscreen where the debug string will be displayed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-setscale",mdxType:"Link"},"setScale")),"(uint8_t scale)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Sets the font scale of the debug string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-setstring",mdxType:"Link"},"setString")),"(const char * string)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Sets the debug string to be displayed on top of the framebuffer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-~debugprinter",mdxType:"Link"},"~DebugPrinter")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_debug_printer"}),"DebugPrinter")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",g({},{id:"protected-functions-inherited-from-debugprinter"}),"Protected Functions inherited from ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer",mdxType:"Link"},"DebugPrinter")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"uint16_t"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-getglyph",mdxType:"Link"},"getGlyph")),"(uint8_t c) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Gets a glyph (15 bits) arranged with 3 bits wide, 5 bits high in a single uint16_t value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",g({},{id:"protected-attributes-inherited-from-debugprinter"}),"Protected Attributes inherited from ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer",mdxType:"Link"},"DebugPrinter")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),(0,n.kt)("a",g({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugforegroundcolor",mdxType:"Link"},"debugForegroundColor")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Font color to use when displaying the debug string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugregion",mdxType:"Link"},"debugRegion")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Region on screen where the debug message is displayed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugscale",mdxType:"Link"},"debugScale")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Font scaling factor to use when displaying the debug string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"const char *"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugstring",mdxType:"Link"},"debugString")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Debug string to be displayed on screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",g({},{id:"protected-functions-documentation"}),"Protected Functions Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_l_c_d8_debug_printer_base#function-drawcolortype",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"drawcolortype"}),"drawColorType"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_l_c_d8_debug_printer_base#function-drawcolortype",mdxType:"Link"},"drawColorType")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"rect ,"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"const uint8_t"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"debugColorType"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"const"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Draws the ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_debug_printer#variable-debugstring"}),"DebugPrinter::debugString")," on top of the framebuffer content. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"rect"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The rect to draw inside.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"debugColorType"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The specific 8bit color type to use."))))))))}h.isMDXComponent=!0}}]);