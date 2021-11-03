"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8346],{3905:function(t,a,e){e.d(a,{Zo:function(){return p},kt:function(){return s}});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var c=r.createContext({}),d=function(t){var a=r.useContext(c),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=d(t.components);return r.createElement(c.Provider,{value:a},t.children)},m={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=d(e),s=n,h=u["".concat(c,".").concat(s)]||u[s]||m[s]||i;return e?r.createElement(h,o(o({ref:a},p),{},{components:e})):r.createElement(h,o({ref:a},p))}));function s(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var i=e.length,o=new Array(i);o[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=e[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},43861:function(t,a,e){var r=e(67294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=n},39130:function(t,a,e){e.d(a,{Z:function(){return g}});var r=e(67294),n=e(73727),i=e(11368),o=e(35096),l=e(84487);const c=(0,r.createContext)({collectLink:()=>{}});var d=e(25026),p=e(67023),m=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,f=(t,a,e)=>a in t?m(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,b=(t,a)=>{for(var e in a||(a={}))k.call(a,e)&&f(t,e,a[e]);if(h)for(var e of h(a))_.call(a,e)&&f(t,e,a[e]);return t};var g=function(t){var a,e=t,{isNavLink:m,to:f,href:g,activeClassName:v,isActive:N,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=e,w=((t,a)=>{var e={};for(var r in t)k.call(t,r)&&a.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&h)for(var r of h(t))a.indexOf(r)<0&&_.call(t,r)&&(e[r]=t[r]);return e})(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:T}}=(0,i.Z)(),{withBaseUrl:D}=(0,d.C)(),P=(0,r.useContext)(c),j=f||g,B=(0,o.Z)(j),Z=null==j?void 0:j.replace("pathname://","");let L=void 0!==Z?(R=Z,x&&(t=>t.startsWith("/"))(R)?D(R):R):void 0;var R;L&&B&&(L=(0,p.applyTrailingSlash)(L,{trailingSlash:O,baseUrl:T}));const C=(0,r.useRef)(!1),E=m?n.OL:n.rU,H=l.Z.canUseIntersectionObserver,S=(0,r.useRef)();(0,r.useEffect)((()=>(!H&&B&&null!=L&&window.docusaurus.prefetch(L),()=>{H&&S.current&&S.current.disconnect()})),[S,L,H,B]);const A=null!==(a=null==L?void 0:L.startsWith("#"))&&void 0!==a&&a,F=!L||!B||A;return L&&B&&!A&&!y&&P.collectLink(L),F?r.createElement("a",b(b({href:L},j&&!B&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(E,b((U=b({},w),u(U,s({onMouseEnter:()=>{C.current||null==L||(window.docusaurus.preload(L),C.current=!0)},innerRef:t=>{var a,e;H&&t&&B&&(a=t,e=()=>{null!=L&&window.docusaurus.prefetch(L)},S.current=new window.IntersectionObserver((t=>{t.forEach((t=>{a===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(S.current.unobserve(a),S.current.disconnect(),e())}))})),S.current.observe(a))},to:L||""}))),m&&{isActive:N,activeClassName:v}));var U}},35096:function(t,a,e){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}e.d(a,{b:function(){return r},Z:function(){return n}})},25026:function(t,a,e){e.d(a,{C:function(){return i},Z:function(){return o}});var r=e(11368),n=e(35096);function i(){const{siteConfig:{baseUrl:t="/",url:a}={}}=(0,r.Z)();return{withBaseUrl:(e,r)=>function(t,a,e,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!e)return e;if(e.startsWith("#"))return e;if((0,n.b)(e))return e;if(r)return a+e;const o=e.startsWith(a)?e:a+e.replace(/^\//,"");return i?t+o:o}(a,t,e,r)}}function o(t,a={}){const{withBaseUrl:e}=i();return e(t,a)}},67271:function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t,a){const{trailingSlash:e,baseUrl:r}=a;if(t.startsWith("#"))return t;if(void 0===e)return t;const[n]=t.split(/[#?]/),i="/"===n||n===r?n:(o=n,e?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(n,i)}},67023:function(t,a,e){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0}),a.uniq=a.applyTrailingSlash=void 0;var n=e(67271);Object.defineProperty(a,"applyTrailingSlash",{enumerable:!0,get:function(){return r(n).default}});var i=e(11080);Object.defineProperty(a,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return Array.from(new Set(t))}},37497:function(t,a,e){e.r(a),e.d(a,{frontMatter:function(){return h},contentTitle:function(){return k},metadata:function(){return _},toc:function(){return f},default:function(){return g}});var r=e(3905),n=e(39130),i=e(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(t,a,e)=>a in t?o(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,s=(t,a)=>{for(var e in a||(a={}))p.call(a,e)&&u(t,e,a[e]);if(d)for(var e of d(a))m.call(a,e)&&u(t,e,a[e]);return t};const h={title:"BitmapData"},k=void 0,_={unversionedId:"api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",id:"api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",isDocsHomePage:!1,title:"BitmapData",description:"Data of a bitmap.",source:"@site/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",permalink:"/4.18/zh-TW/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_bitmap_data",tags:[],version:"current",frontMatter:{title:"BitmapData"},sidebar:"docs",previous:{title:"Bitmap",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_bitmap"},next:{title:"BlitOp",permalink:"/4.18/zh-TW/docs/api/classes/structtouchgfx_1_1_blit_op"}},f=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"getFormat",id:"getformat",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"data",id:"data",children:[],level:3},{value:"extraData",id:"extradata",children:[],level:3},{value:"format_hi",id:"format_hi",children:[],level:3},{value:"format_lo",id:"format_lo",children:[],level:3},{value:"height",id:"height",children:[],level:3},{value:"solidRect_height",id:"solidrect_height",children:[],level:3},{value:"solidRect_width",id:"solidrect_width",children:[],level:3},{value:"solidRect_x",id:"solidrect_x",children:[],level:3},{value:"solidRect_y",id:"solidrect_y",children:[],level:3},{value:"width",id:"width",children:[],level:3}],level:2}],b={toc:f};function g(t){var a,e=t,{components:o}=e,u=((t,a)=>{var e={};for(var r in t)p.call(t,r)&&a.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&d)for(var r of d(t))a.indexOf(r)<0&&m.call(t,r)&&(e[r]=t[r]);return e})(e,["components"]);return(0,r.kt)("wrapper",(a=s(s({},b),u),l(a,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Data of a bitmap. "),(0,r.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap#enum-bitmapformat"}),"BitmapFormat")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#function-getformat",mdxType:"Link"},"getFormat")),"() const")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Gets the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," format by combining the high and low parts (format_hi ","<","<"," 3)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint8_t *const"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-data",mdxType:"Link"},"data")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The data of this ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint8_t *const"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-extradata",mdxType:"Link"},"extraData")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The data of either the alpha channel (if present) or clut data in case of indexed color bitmap. 0 if not used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_hi",mdxType:"Link"},"format_hi")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Determine the format of the data (high 3 bits)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_lo",mdxType:"Link"},"format_lo")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Determine the format of the data (low 3 bits)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-height",mdxType:"Link"},"height")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The height of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_height",mdxType:"Link"},"solidRect_height")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The height of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_width",mdxType:"Link"},"solidRect_width")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The width of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_x",mdxType:"Link"},"solidRect_x")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The x coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_y",mdxType:"Link"},"solidRect_y")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The y coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const uint16_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-width",mdxType:"Link"},"width")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The width of the ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#function-getformat",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"getformat"}),"getFormat"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"BitmapFormat","\xa0",(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#function-getformat",mdxType:"Link"},"getFormat")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Gets the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," format by combining the high and low parts (format_hi ","<","<"," 3) | format_lo. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The BitmapFormat ")))),(0,r.kt)("h2",s({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-data",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"data"}),"data"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint8_t *const data ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The data of this ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-extradata",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"extradata"}),"extraData"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint8_t *const extraData ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The data of either the alpha channel (if present) or clut data in case of indexed color bitmap. 0 if not used. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_hi",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"format_hi"}),"format_hi"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t format_hi ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Determine the format of the data (high 3 bits) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-format_lo",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"format_lo"}),"format_lo"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t format_lo ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Determine the format of the data (low 3 bits) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-height",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"height"}),"height"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t height ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The height of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_height",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_height"}),"solidRect_height"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_height ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The height of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_width",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_width"}),"solidRect_width"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_width ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The width of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_x",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_x"}),"solidRect_x"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_x ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The x coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-solidrect_y",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"solidrect_y"}),"solidRect_y"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t solidRect_y ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The y coordinate of the maximum solid rectangle of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_bitmap_data#variable-width",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"width"}),"width"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const uint16_t width ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The width of the ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))))}g.isMDXComponent=!0}}]);