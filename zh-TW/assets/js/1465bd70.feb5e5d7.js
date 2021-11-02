(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1476],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return d},kt:function(){return m}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),u=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=u(a),m=n,_=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return a?r.createElement(_,o(o({ref:e},d),{},{components:a})):r.createElement(_,o({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var r=a(67294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return g}});var r=a(67294),n=a(73727),i=a(11368),o=a(35096),l=a(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=a(25026),d=a(67023),s=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(t,e,a)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,b=(t,e)=>{for(var a in e||(e={}))f.call(e,a)&&h(t,a,e[a]);if(_)for(var a of _(e))k.call(e,a)&&h(t,a,e[a]);return t};var g=function(t){var e,a=t,{isNavLink:s,to:h,href:g,activeClassName:v,isActive:y,"data-noBrokenLinkCheck":N,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var r in t)f.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&_)for(var r of _(t))e.indexOf(r)<0&&k.call(t,r)&&(a[r]=t[r]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:T}}=(0,i.Z)(),{withBaseUrl:P}=(0,u.C)(),j=(0,r.useContext)(c),D=h||g,L=(0,o.Z)(D),Z=null==D?void 0:D.replace("pathname://","");let E=void 0!==Z?(C=Z,x&&(t=>t.startsWith("/"))(C)?P(C):C):void 0;var C;E&&L&&(E=(0,d.applyTrailingSlash)(E,{trailingSlash:O,baseUrl:T}));const B=(0,r.useRef)(!1),S=s?n.OL:n.rU,A=l.Z.canUseIntersectionObserver,U=(0,r.useRef)();(0,r.useEffect)((()=>(!A&&L&&null!=E&&window.docusaurus.prefetch(E),()=>{A&&U.current&&U.current.disconnect()})),[U,E,A,L]);const M=null!==(e=null==E?void 0:E.startsWith("#"))&&void 0!==e&&e,W=!E||!L||M;return E&&L&&!M&&!N&&j.collectLink(E),W?r.createElement("a",b(b({href:E},D&&!L&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(S,b((H=b({},w),p(H,m({onMouseEnter:()=>{B.current||null==E||(window.docusaurus.preload(E),B.current=!0)},innerRef:t=>{var e,a;A&&t&&L&&(e=t,a=()=>{null!=E&&window.docusaurus.prefetch(E)},U.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.current.unobserve(e),U.current.disconnect(),a())}))})),U.current.observe(e))},to:E||""}))),s&&{isActive:y,activeClassName:v}));var H}},35096:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return i},Z:function(){return o}});var r=a(11368),n=a(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(a,r)=>function(t,e,a,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(r)return e+a;const o=a.startsWith(e)?a:e+a.replace(/^\//,"");return i?t+o:o}(e,t,a,r)}}function o(t,e={}){const{withBaseUrl:a}=i();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[n]=t.split(/[#?]/),i="/"===n||n===r?n:(o=n,a?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(n,i)}},67023:function(t,e,a){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var n=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(n).default}});var i=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},11787:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return _},contentTitle:function(){return f},metadata:function(){return k},toc:function(){return h},default:function(){return g}});var r=a(3905),n=a(31217),i=a(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&p(t,a,e[a]);if(u)for(var a of u(e))s.call(e,a)&&p(t,a,e[a]);return t};const _={title:"DynamicBitmapData"},f=void 0,k={unversionedId:"api/classes/structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data",id:"api/classes/structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data",isDocsHomePage:!1,title:"DynamicBitmapData",description:"Data of a dynamic Bitmap.",source:"@site/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data",permalink:"/4.18/zh-TW/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data",tags:[],version:"current",frontMatter:{title:"DynamicBitmapData"},sidebar:"docs",previous:{title:"DrawTextureMapScanLineBase",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_l_c_d_1_1_draw_texture_map_scan_line_base"},next:{title:"EasingEquations",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_easing_equations"}},h=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"customSubformat",id:"customsubformat",children:[],level:3},{value:"extra",id:"extra",children:[],level:3},{value:"format",id:"format",children:[],level:3},{value:"height",id:"height",children:[],level:3},{value:"inuse",id:"inuse",children:[],level:3},{value:"solid",id:"solid",children:[],level:3},{value:"width",id:"width",children:[],level:3}],level:2}],b={toc:h};function g(t){var e,a=t,{components:o}=a,p=((t,e)=>{var a={};for(var r in t)d.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&s.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=m(m({},b),p),l(e,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Data of a dynamic Bitmap. "),(0,r.kt)("h2",m({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"right"})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-customsubformat",mdxType:"Link"},"customSubformat")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Custom format specifier (or L8 palette length)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-extra",mdxType:"Link"},"extra")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Extra data field, dependent on format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-format",mdxType:"Link"},"format")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Determine the format of the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-height",mdxType:"Link"},"height")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The height of the ",(0,r.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-inuse",mdxType:"Link"},"inuse")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Zero if not in use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),(0,r.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-solid",mdxType:"Link"},"solid")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The solidRect of this ",(0,r.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"uint16_t"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-width",mdxType:"Link"},"width")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The width of the ",(0,r.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",m({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-customsubformat",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"customsubformat"}),"customSubformat"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t customSubformat ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Custom format specifier (or L8 palette length) "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-extra",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"extra"}),"extra"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t extra ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Extra data field, dependent on format. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-format",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"format"}),"format"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t format ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Determine the format of the data. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-height",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"height"}),"height"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t height ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The height of the ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-inuse",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"inuse"}),"inuse"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t inuse ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"Zero if not in use. "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-solid",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"solid"}),"solid"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," solid ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The solidRect of this ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))),(0,r.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_dynamic_bitmap_data#variable-width",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"width"}),"width"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint16_t width ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The width of the ",(0,r.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". "))))}g.isMDXComponent=!0}}]);