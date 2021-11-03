"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7549],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return s}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),u=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=u(a),s=n,y=p["".concat(c,".").concat(s)]||p[s]||k[s]||o;return a?r.createElement(y,i(i({ref:e},d),{},{components:a})):r.createElement(y,i({ref:e},d))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43861:function(t,e,a){var r=a(67294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},39130:function(t,e,a){a.d(e,{Z:function(){return _}});var r=a(67294),n=a(73727),o=a(11368),i=a(35096),l=a(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=a(25026),d=a(67023),k=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(t,e,a)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&b(t,a,e[a]);if(y)for(var a of y(e))f.call(e,a)&&b(t,a,e[a]);return t};var _=function(t){var e,a=t,{isNavLink:k,to:b,href:_,activeClassName:g,isActive:v,"data-noBrokenLinkCheck":N,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var r in t)m.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&y)for(var r of y(t))e.indexOf(r)<0&&f.call(t,r)&&(a[r]=t[r]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:T}}=(0,o.Z)(),{withBaseUrl:A}=(0,u.C)(),P=(0,r.useContext)(c),C=b||_,j=(0,i.Z)(C),L=null==C?void 0:C.replace("pathname://","");let Z=void 0!==L?(D=L,x&&(t=>t.startsWith("/"))(D)?A(D):D):void 0;var D;Z&&j&&(Z=(0,d.applyTrailingSlash)(Z,{trailingSlash:O,baseUrl:T}));const F=(0,r.useRef)(!1),E=k?n.OL:n.rU,S=l.Z.canUseIntersectionObserver,H=(0,r.useRef)();(0,r.useEffect)((()=>(!S&&j&&null!=Z&&window.docusaurus.prefetch(Z),()=>{S&&H.current&&H.current.disconnect()})),[H,Z,S,j]);const U=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,I=!Z||!j||U;return Z&&j&&!U&&!N&&P.collectLink(Z),I?r.createElement("a",h(h({href:Z},C&&!j&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(E,h((M=h({},w),p(M,s({onMouseEnter:()=>{F.current||null==Z||(window.docusaurus.preload(Z),F.current=!0)},innerRef:t=>{var e,a;S&&t&&j&&(e=t,a=()=>{null!=Z&&window.docusaurus.prefetch(Z)},H.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(H.current.unobserve(e),H.current.disconnect(),a())}))})),H.current.observe(e))},to:Z||""}))),k&&{isActive:v,activeClassName:g}));var M}},35096:function(t,e,a){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},25026:function(t,e,a){a.d(e,{C:function(){return o},Z:function(){return i}});var r=a(11368),n=a(35096);function o(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(a,r)=>function(t,e,a,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(r)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return o?t+i:i}(e,t,a,r)}}function i(t,e={}){const{withBaseUrl:a}=o();return a(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[n]=t.split(/[#?]/),o="/"===n||n===r?n:(i=n,a?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(n,o)}},67023:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var n=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(n).default}});var o=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},40020:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return y},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return b},default:function(){return _}});var r=a(3905),n=a(39130),o=a(43861),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&p(t,a,e[a]);if(u)for(var a of u(e))k.call(e,a)&&p(t,a,e[a]);return t};const y={title:"Layout"},m=void 0,f={unversionedId:"api/classes/structtouchgfx_1_1_keyboard_1_1_layout",id:"api/classes/structtouchgfx_1_1_keyboard_1_1_layout",isDocsHomePage:!1,title:"Layout",description:"Definition of the keyboard layout.",source:"@site/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_layout.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_keyboard_1_1_layout",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_layout",tags:[],version:"current",frontMatter:{title:"Layout"},sidebar:"docs",previous:{title:"KeyMappingList",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list"},next:{title:"LCD",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_l_c_d"}},b=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"bitmap",id:"bitmap",children:[],level:3},{value:"callbackAreaArray",id:"callbackareaarray",children:[],level:3},{value:"keyArray",id:"keyarray",children:[],level:3},{value:"keyFont",id:"keyfont",children:[],level:3},{value:"keyFontColor",id:"keyfontcolor",children:[],level:3},{value:"numberOfCallbackAreas",id:"numberofcallbackareas",children:[],level:3},{value:"numberOfKeys",id:"numberofkeys",children:[],level:3},{value:"textAreaFont",id:"textareafont",children:[],level:3},{value:"textAreaFontColor",id:"textareafontcolor",children:[],level:3},{value:"textAreaPosition",id:"textareaposition",children:[],level:3}],level:2}],h={toc:b};function _(t){var e,a=t,{components:i}=a,p=((t,e)=>{var a={};for(var r in t)d.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&k.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=s(s({},h),p),l(e,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null," Definition of the keyboard layout.\nThe keyboard can handle changing layouts, so different keyboard modes can be implemented by changing layouts and key mappings. "),(0,r.kt)("h2",s({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-bitmap",mdxType:"Link"},"bitmap")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The bitmap used for the keyboard layout.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1_keyboard_1_1_callback_area"}),"CallbackArea")," *"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-callbackareaarray",mdxType:"Link"},"callbackAreaArray")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The array of areas and corresponding callbacks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"const ",(0,r.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1_keyboard_1_1_key"}),"Key")," *"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyarray",mdxType:"Link"},"keyArray")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The keys on the keyboard layout.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyfont",mdxType:"Link"},"keyFont")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The font used for the keys.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyfontcolor",mdxType:"Link"},"keyFontColor")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The color used for the keys.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-numberofcallbackareas",mdxType:"Link"},"numberOfCallbackAreas")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The number of areas and corresponding callbacks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-numberofkeys",mdxType:"Link"},"numberOfKeys")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The number of keys on this keyboard layout.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_typed_text"}),"TypedText")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareafont",mdxType:"Link"},"textAreaFont")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The font used for typing text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareafontcolor",mdxType:"Link"},"textAreaFontColor")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The color used for the typing text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareaposition",mdxType:"Link"},"textAreaPosition")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The area where text is written.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-bitmap",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"bitmap"}),"bitmap"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")," bitmap ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The bitmap used for the keyboard layout. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-callbackareaarray",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"callbackareaarray"}),"callbackAreaArray"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"structtouchgfx_1_1_keyboard_1_1_callback_area"}),"CallbackArea")," * callbackAreaArray ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The array of areas and corresponding callbacks. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyarray",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"keyarray"}),"keyArray"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const ",(0,r.kt)("a",s({parentName:"p"},{href:"structtouchgfx_1_1_keyboard_1_1_key"}),"Key")," * keyArray ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The keys on the keyboard layout. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyfont",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"keyfont"}),"keyFont"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")," keyFont ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The font used for the keys. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyfontcolor",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"keyfontcolor"}),"keyFontColor"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"structtouchgfx_1_1colortype"}),"colortype")," keyFontColor ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The color used for the keys. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-numberofcallbackareas",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"numberofcallbackareas"}),"numberOfCallbackAreas"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t numberOfCallbackAreas ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of areas and corresponding callbacks. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-numberofkeys",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"numberofkeys"}),"numberOfKeys"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t numberOfKeys ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of keys on this keyboard layout. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareafont",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"textareafont"}),"textAreaFont"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_typed_text"}),"TypedText")," textAreaFont ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The font used for typing text. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareafontcolor",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"textareafontcolor"}),"textAreaFontColor"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"structtouchgfx_1_1colortype"}),"colortype")," textAreaFontColor ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The color used for the typing text. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareaposition",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"textareaposition"}),"textAreaPosition"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," textAreaPosition ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The area where text is written. "))))}_.isMDXComponent=!0}}]);