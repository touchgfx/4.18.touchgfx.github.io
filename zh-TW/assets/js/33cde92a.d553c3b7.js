(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2183],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(f,i(i({ref:e},u),{},{components:a})):n.createElement(f,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return _}});var n=a(67294),r=a(73727),l=a(11368),i=a(35096),s=a(84487);const o=(0,n.createContext)({collectLink:()=>{}});var c=a(25026),u=a(67023),d=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,g=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))b.call(e,a)&&g(t,a,e[a]);if(f)for(var a of f(e))k.call(e,a)&&g(t,a,e[a]);return t};var _=function(t){var e,a=t,{isNavLink:d,to:g,href:_,activeClassName:w,isActive:N,"data-noBrokenLinkCheck":y,autoAddBaseUrl:v=!0}=a,x=((t,e)=>{var a={};for(var n in t)b.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&f)for(var n of f(t))e.indexOf(n)<0&&k.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:D}}=(0,l.Z)(),{withBaseUrl:P}=(0,c.C)(),L=(0,n.useContext)(o),j=g||_,I=(0,i.Z)(j),T=null==j?void 0:j.replace("pathname://","");let S=void 0!==T?(Z=T,v&&(t=>t.startsWith("/"))(Z)?P(Z):Z):void 0;var Z;S&&I&&(S=(0,u.applyTrailingSlash)(S,{trailingSlash:O,baseUrl:D}));const E=(0,n.useRef)(!1),C=d?r.OL:r.rU,W=s.Z.canUseIntersectionObserver;let U;(0,n.useEffect)((()=>(!W&&I&&null!=S&&window.docusaurus.prefetch(S),()=>{W&&U&&U.disconnect()})),[S,W,I]);const A=null!==(e=null==S?void 0:S.startsWith("#"))&&void 0!==e&&e,M=!S||!I||A;return S&&I&&!A&&!y&&L.collectLink(S),M?n.createElement("a",h(h({href:S},j&&!I&&{target:"_blank",rel:"noopener noreferrer"}),x)):n.createElement(C,h((B=h({},x),p(B,m({onMouseEnter:()=>{E.current||null==S||(window.docusaurus.preload(S),E.current=!0)},innerRef:t=>{var e,a;W&&t&&I&&(e=t,a=()=>{null!=S&&window.docusaurus.prefetch(S)},U=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.unobserve(e),U.disconnect(),a())}))})),U.observe(e))},to:S||""}))),d&&{isActive:N,activeClassName:w}));var B}},35096:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return l},Z:function(){return i}});var n=a(11368),r=a(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[r]=t.split(/[#?]/),l="/"===r||r===n?r:(i=r,a?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},6330:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return f},contentTitle:function(){return b},metadata:function(){return k},toc:function(){return g},default:function(){return _}});var n=a(3905),r=a(31217),l=a(43861),i=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&p(t,a,e[a]);if(c)for(var a of c(e))d.call(e,a)&&p(t,a,e[a]);return t};const f={title:"DrawableListItemsInterface"},b=void 0,k={unversionedId:"api/classes/classtouchgfx_1_1_drawable_list_items_interface",id:"api/classes/classtouchgfx_1_1_drawable_list_items_interface",isDocsHomePage:!1,title:"DrawableListItemsInterface",description:"A drawable list items interface.",source:"@site/docs/api/classes/classtouchgfx_1_1_drawable_list_items_interface.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_drawable_list_items_interface",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_drawable_list_items_interface",version:"current",frontMatter:{title:"DrawableListItemsInterface"},sidebar:"docs",previous:{title:"DrawableListItems",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_drawable_list_items"},next:{title:"DrawingSurface",permalink:"/4.18/zh-TW/docs/api/classes/structtouchgfx_1_1_drawing_surface"}},g=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"getDrawable",id:"getdrawable",children:[]},{value:"getNumberOfDrawables",id:"getnumberofdrawables",children:[]},{value:"~DrawableListItemsInterface",id:"drawablelistitemsinterface",children:[]}]}],h={toc:g};function _(t){var e,a=t,{components:i}=a,p=((t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&c)for(var n of c(t))e.indexOf(n)<0&&d.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=m(m({},h),p),s(e,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," A drawable list items interface.\nUsed to pass the allocated array of drawable elements to ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_scroll_list#function-setdrawables"}),"ScrollList::setDrawables()"),", ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_scroll_wheel#function-setdrawables"}),"ScrollWheel::setDrawables()")," or ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_scroll_wheel_with_selection_style#function-setdrawables"}),"ScrollWheelWithSelectionStyle::setDrawables()"),". Provides easy access to each element in the array as well as the size of the array."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_scroll_list#function-setdrawables"}),"ScrollList::setDrawables"),", ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_scroll_wheel#function-setdrawables"}),"ScrollWheel::setDrawables"),", ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_scroll_wheel_with_selection_style#function-setdrawables"}),"ScrollWheelWithSelectionStyle::setDrawables")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_drawable_list_items",mdxType:"Link"},"DrawableListItems","<"," TYPE, SIZE ",">")),(0,n.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," *"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_drawable_list_items_interface#function-getdrawable",mdxType:"Link"},"getDrawable")),"(int16_t index) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Gets a drawable at a given index.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","int16_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_drawable_list_items_interface#function-getnumberofdrawables",mdxType:"Link"},"getNumberOfDrawables")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Gets number of drawables.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_drawable_list_items_interface#function-~drawablelistitemsinterface",mdxType:"Link"},"~DrawableListItemsInterface")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_drawable_list_items_interface"}),"DrawableListItemsInterface")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_drawable_list_items_interface#function-getdrawable",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"getdrawable"}),"getDrawable"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","Drawable *","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_drawable_list_items_interface#function-getdrawable",mdxType:"Link"},"getDrawable")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"int16_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"index"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets a drawable at a given index. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"index"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Zero-based index of the drawable."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"Null if it fails, else the drawable. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_drawable_list_items#function-getdrawable",mdxType:"Link"},"touchgfx::DrawableListItems::getDrawable")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_drawable_list_items_interface#function-getnumberofdrawables",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"getnumberofdrawables"}),"getNumberOfDrawables"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","int16_t","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_drawable_list_items_interface#function-getnumberofdrawables",mdxType:"Link"},"getNumberOfDrawables")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets number of drawables. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The number of drawables. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_drawable_list_items#function-getnumberofdrawables",mdxType:"Link"},"touchgfx::DrawableListItems::getNumberOfDrawables")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_drawable_list_items_interface#function-~drawablelistitemsinterface",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"drawablelistitemsinterface"}),"~DrawableListItemsInterface"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_drawable_list_items_interface#function-~drawablelistitemsinterface",mdxType:"Link"},"~DrawableListItemsInterface")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Finalizes an instance of the ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_drawable_list_items_interface"}),"DrawableListItemsInterface")," class. "))))}_.isMDXComponent=!0}}]);