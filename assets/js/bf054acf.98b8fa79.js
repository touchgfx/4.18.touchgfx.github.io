(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5467],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),d=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=d(r),g=a,m=s["".concat(u,".").concat(g)]||s[g]||p[g]||i;return r?n.createElement(m,l(l({ref:e},c),{},{components:r})):n.createElement(m,l({ref:e},c))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},43861:function(t,e,r){"use strict";var n=r(67294);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,r){"use strict";r.d(e,{Z:function(){return _}});var n=r(67294),a=r(73727),i=r(11368),l=r(35096),o=r(84487);const u=(0,n.createContext)({collectLink:()=>{}});var d=r(25026),c=r(67023),p=Object.defineProperty,s=Object.defineProperties,g=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(t,e,r)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e)=>{for(var r in e||(e={}))k.call(e,r)&&f(t,r,e[r]);if(m)for(var r of m(e))b.call(e,r)&&f(t,r,e[r]);return t};var _=function(t){var e,r=t,{isNavLink:p,to:f,href:_,activeClassName:N,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=r,w=((t,e)=>{var r={};for(var n in t)k.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&b.call(t,n)&&(r[n]=t[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:O}}=(0,i.Z)(),{withBaseUrl:D}=(0,d.C)(),L=(0,n.useContext)(u),T=f||_,j=(0,l.Z)(T),Z=null==T?void 0:T.replace("pathname://","");let C=void 0!==Z?(S=Z,x&&(t=>t.startsWith("/"))(S)?D(S):S):void 0;var S;C&&j&&(C=(0,c.applyTrailingSlash)(C,{trailingSlash:P,baseUrl:O}));const E=(0,n.useRef)(!1),R=p?a.OL:a.rU,F=o.Z.canUseIntersectionObserver;let A;(0,n.useEffect)((()=>(!F&&j&&null!=C&&window.docusaurus.prefetch(C),()=>{F&&A&&A.disconnect()})),[C,F,j]);const U=null!==(e=null==C?void 0:C.startsWith("#"))&&void 0!==e&&e,M=!C||!j||U;return C&&j&&!U&&!v&&L.collectLink(C),M?n.createElement("a",h(h({href:C},T&&!j&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(R,h((B=h({},w),s(B,g({onMouseEnter:()=>{E.current||null==C||(window.docusaurus.preload(C),E.current=!0)},innerRef:t=>{var e,r;F&&t&&j&&(e=t,r=()=>{null!=C&&window.docusaurus.prefetch(C)},A=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(A.unobserve(e),A.disconnect(),r())}))})),A.observe(e))},to:C||""}))),p&&{isActive:y,activeClassName:N}));var B}},35096:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},25026:function(t,e,r){"use strict";r.d(e,{C:function(){return i},Z:function(){return l}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(t,e,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return e+r;const l=r.startsWith(e)?r:e+r.replace(/^\//,"");return i?t+l:l}(e,t,r,n)}}function l(t,e={}){const{withBaseUrl:r}=i();return r(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:r,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===r)return t;const[a]=t.split(/[#?]/),i="/"===a||a===n?a:(l=a,r?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(a,i)}},67023:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},84833:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return b},toc:function(){return f},default:function(){return _}});var n=r(3905),a=r(31217),i=r(43861),l=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,g=(t,e)=>{for(var r in e||(e={}))c.call(e,r)&&s(t,r,e[r]);if(d)for(var r of d(e))p.call(e,r)&&s(t,r,e[r]);return t};const m={title:"LCD32DebugPrinter"},k=void 0,b={unversionedId:"api/classes/classtouchgfx_1_1_l_c_d32_debug_printer",id:"api/classes/classtouchgfx_1_1_l_c_d32_debug_printer",isDocsHomePage:!1,title:"LCD32DebugPrinter",description:"The class LCD32DebugPrinter implements the DebugPrinter interface for printing debug messages on top of 32bit framebuffer.",source:"@site/docs/api/classes/classtouchgfx_1_1_l_c_d32_debug_printer.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_l_c_d32_debug_printer",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_l_c_d32_debug_printer",version:"current",frontMatter:{title:"LCD32DebugPrinter"},sidebar:"docs",previous:{title:"LCD32bpp_XRGB8888",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_l_c_d32bpp___x_r_g_b8888"},next:{title:"LCD4bpp",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_l_c_d4bpp"}},f=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_debug_printer">DebugPrinter</Link>',id:"public-functions-inherited-from-debugprinter",children:[]},{value:'Protected Functions inherited from <Link to="classtouchgfx_1_1_debug_printer">DebugPrinter</Link>',id:"protected-functions-inherited-from-debugprinter",children:[]},{value:'Protected Attributes inherited from <Link to="classtouchgfx_1_1_debug_printer">DebugPrinter</Link>',id:"protected-attributes-inherited-from-debugprinter",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"draw",id:"draw",children:[]}]}],h={toc:f};function _(t){var e,r=t,{components:l}=r,s=((t,e)=>{var r={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&d)for(var n of d(t))e.indexOf(n)<0&&p.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=g(g({},h),s),o(e,u({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," The class LCD32DebugPrinter implements the ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_debug_printer"}),"DebugPrinter")," interface for printing debug messages on top of 32bit framebuffer. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_debug_printer"}),"DebugPrinter")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer",mdxType:"Link"},"DebugPrinter")),(0,n.kt)("h2",g({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_l_c_d32_debug_printer#function-draw",mdxType:"Link"},"draw")),"(const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Draws the debug string on top of the framebuffer content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",g({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,n.kt)("h3",g({},{id:"public-functions-inherited-from-debugprinter"}),"Public Functions inherited from ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer",mdxType:"Link"},"DebugPrinter")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-debugprinter",mdxType:"Link"},"DebugPrinter")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_debug_printer"}),"DebugPrinter")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-getregion",mdxType:"Link"},"getRegion")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Returns the region where the debug string is displayed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-setcolor",mdxType:"Link"},"setColor")),"(",(0,n.kt)("a",g({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")," fg)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Sets the foreground color of the debug string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-setposition",mdxType:"Link"},"setPosition")),"(uint16_t x, uint16_t y, uint16_t w, uint16_t h)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Sets the position onscreen where the debug string will be displayed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-setscale",mdxType:"Link"},"setScale")),"(uint8_t scale)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Sets the font scale of the debug string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-setstring",mdxType:"Link"},"setString")),"(const char * string)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Sets the debug string to be displayed on top of the framebuffer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-~debugprinter",mdxType:"Link"},"~DebugPrinter")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_debug_printer"}),"DebugPrinter")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",g({},{id:"protected-functions-inherited-from-debugprinter"}),"Protected Functions inherited from ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer",mdxType:"Link"},"DebugPrinter")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"uint16_t"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-getglyph",mdxType:"Link"},"getGlyph")),"(uint8_t c) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Gets a glyph (15 bits) arranged with 3 bits wide, 5 bits high in a single uint16_t value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",g({},{id:"protected-attributes-inherited-from-debugprinter"}),"Protected Attributes inherited from ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer",mdxType:"Link"},"DebugPrinter")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),(0,n.kt)("a",g({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugforegroundcolor",mdxType:"Link"},"debugForegroundColor")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Font color to use when displaying the debug string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugregion",mdxType:"Link"},"debugRegion")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Region on screen where the debug message is displayed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugscale",mdxType:"Link"},"debugScale")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Font scaling factor to use when displaying the debug string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"const char *"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#variable-debugstring",mdxType:"Link"},"debugString")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Debug string to be displayed on screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",g({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_l_c_d32_debug_printer#function-draw",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"draw"}),"draw"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_l_c_d32_debug_printer#function-draw",mdxType:"Link"},"draw")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"rect"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Draws the debug string on top of the framebuffer content. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"rect"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The rect to draw inside."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(a.Z,{to:"classtouchgfx_1_1_debug_printer#function-draw",mdxType:"Link"},"touchgfx::DebugPrinter::draw")))))}_.isMDXComponent=!0}}]);