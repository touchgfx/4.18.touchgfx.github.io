(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8346],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return s}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),d=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=d(a),s=n,h=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return a?r.createElement(h,o(o({ref:e},p),{},{components:a})):r.createElement(h,o({ref:e},p))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var r=a(67294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return g}});var r=a(67294),n=a(73727),i=a(11368),o=a(35096),l=a(84487);const c=(0,r.createContext)({collectLink:()=>{}});var d=a(25026),p=a(67023),u=Object.defineProperty,m=Object.defineProperties,s=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,f=(t,e,a)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,b=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&f(t,a,e[a]);if(h)for(var a of h(e))_.call(e,a)&&f(t,a,e[a]);return t};var g=function(t){var e,a=t,{isNavLink:u,to:f,href:g,activeClassName:v,isActive:N,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var r in t)k.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&h)for(var r of h(t))e.indexOf(r)<0&&_.call(t,r)&&(a[r]=t[r]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:T}}=(0,i.Z)(),{withBaseUrl:D}=(0,d.C)(),P=(0,r.useContext)(c),j=f||g,B=(0,o.Z)(j),Z=null==j?void 0:j.replace("pathname://","");let L=void 0!==Z?(R=Z,x&&(t=>t.startsWith("/"))(R)?D(R):R):void 0;var R;L&&B&&(L=(0,p.applyTrailingSlash)(L,{trailingSlash:O,baseUrl:T}));const C=(0,r.useRef)(!1),E=u?n.OL:n.rU,H=l.Z.canUseIntersectionObserver,S=(0,r.useRef)();(0,r.useEffect)((()=>(!H&&B&&null!=L&&window.docusaurus.prefetch(L),()=>{H&&S.current&&S.current.disconnect()})),[S,L,H,B]);const A=null!==(e=null==L?void 0:L.startsWith("#"))&&void 0!==e&&e,F=!L||!B||A;return L&&B&&!A&&!y&&P.collectLink(L),F?r.createElement("a",b(b({href:L},j&&!B&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(E,b((U=b({},w),m(U,s({onMouseEnter:()=>{C.current||null==L||(window.docusaurus.preload(L),C.current=!0)},innerRef:t=>{var e,a;H&&t&&B&&(e=t,a=()=>{null!=L&&window.docusaurus.prefetch(L)},S.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(S.current.unobserve(e),S.current.disconnect(),a())}))})),S.current.observe(e))},to:L||""}))),u&&{isActive:N,activeClassName:v}));var U}},35096:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return i},Z:function(){return o}});var r=a(11368),n=a(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(a,r)=>function(t,e,a,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(r)return e+a;const o=a.startsWith(e)?a:e+a.replace(/^\//,"");return i?t+o:o}(e,t,a,r)}}function o(t,e={}){const{withBaseUrl:a}=i();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[n]=t.split(/[#?]/),i="/"===n||n===r?n:(o=n,a?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(n,i)}},67023:function(t,e,a){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var n=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(n).default}});var i=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},37497:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return h},contentTitle:function(){return k},metadata:function(){return _},toc:function(){return f},default:function(){return g}});var r=a(3905),n=a(31217),i=a(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&m(t,a,e[a]);if(d)for(var a of d(e))u.call(e,a)&&m(t,a,e[a]);return t};const h={title:"BitmapData"},k=void 0,_={unversionedId:"api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",id:"api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",isDocsHomePage:!1,title:"BitmapData",description:"Data of a bitmap.",source:"@site/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",permalink:"/4.18/zh-TW/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",tags:[],version:"current",frontMatter:{title:"BitmapData"},sidebar:"docs",previous:{title:"Bitmap",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_bitmap"},next:{title:"BlitOp",permalink:"/4.18/zh-TW/docs/api/classes/structtouchgfx_1_1_blit_op"}},f=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"getFormat",id:"getformat",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"data",id:"data",children:[],level:3},{value:"extraData",id:"extradata",children:[],level:3},{value:"format_hi",id:"format_hi",children:[],level:3},{value:"format_lo",id:"format_lo",children:[],level:3},{value:"height",id:"height",children:[],level:3},{value:"solidRect_height",id:"solidrect_height",children:[],level:3},{value:"solidRect_width",id:"solidrect_width",children:[],level:3},{value:"solidRect_x",id:"solidrect_x",children:[],level:3},{value:"solidRect_y",id:"solidrect_y",children:[],level:3},{value:"width",id:"width",children:[],level:3}],level:2}],b={toc:f};function g(t){var e,a=t,{components:o}=a,m=((t,e)=>{var a={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&d)for(var r of d(t))e.indexOf(r)<0&&u.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=s(s({},b),m),l(e,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Data of a bitmap. "),(0,r.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap#enum-bitmapformat"}),"BitmapFormat")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#function-getformat",mdxType:"Link"},"getFormat")),"() const")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Gets the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," format by combining the high and low parts (format_hi ","<","<"," 3)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint8_t *const"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-data",mdxType:"Link"},"data")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The data of this ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint8_t *const"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-extradata",mdxType:"Link"},"extraData")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The data of either the alpha channel (if present) or clut data in case of indexed color bitmap. 0 if not used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_hi",mdxType:"Link"},"format_hi")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Determine the format of the data (high 3 bits)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_lo",mdxType:"Link"},"format_lo")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Determine the format of the data (low 3 bits)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-height",mdxType:"Link"},"height")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The height of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_height",mdxType:"Link"},"solidRect_height")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The height of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_width",mdxType:"Link"},"solidRect_width")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The width of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_x",mdxType:"Link"},"solidRect_x")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The x coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_y",mdxType:"Link"},"solidRect_y")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The y coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-width",mdxType:"Link"},"width")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The width of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#function-getformat",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"getformat"}),"getFormat"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"BitmapFormat","\xa0",(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#function-getformat",mdxType:"Link"},"getFormat")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Gets the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," format by combining the high and low parts (format_hi ","<","<"," 3) | format_lo. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The BitmapFormat ")))),(0,r.kt)("h2",s({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-data",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"data"}),"data"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint8_t *const data ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The data of this ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-extradata",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"extradata"}),"extraData"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint8_t *const extraData ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The data of either the alpha channel (if present) or clut data in case of indexed color bitmap. 0 if not used. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_hi",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"format_hi"}),"format_hi"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t format_hi ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Determine the format of the data (high 3 bits) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_lo",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"format_lo"}),"format_lo"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t format_lo ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Determine the format of the data (low 3 bits) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-height",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"height"}),"height"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t height ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The height of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_height",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_height"}),"solidRect_height"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_height ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The height of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_width",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_width"}),"solidRect_width"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_width ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The width of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_x",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_x"}),"solidRect_x"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_x ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The x coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_y",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_y"}),"solidRect_y"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_y ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The y coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-width",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"width"}),"width"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t width ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The width of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))))}g.isMDXComponent=!0}}]);