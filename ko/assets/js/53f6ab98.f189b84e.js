(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1090],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return b}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,k=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.createElement(k,c(c({ref:t},s),{},{components:r})):a.createElement(k,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<i;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43861:function(e,t,r){"use strict";var a=r(67294);class n extends a.Component{render(){const e=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:e})}}t.Z=n},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var a=r(67294),n=r(73727),i=r(11368),c=r(35096),l=r(84487);const o=(0,a.createContext)({collectLink:()=>{}});var u=r(25026),s=r(67023),d=Object.defineProperty,p=Object.defineProperties,b=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&m(e,r,t[r]);if(k)for(var r of k(t))h.call(t,r)&&m(e,r,t[r]);return e};var g=function(e){var t,r=e,{isNavLink:d,to:m,href:g,activeClassName:v,isActive:y,"data-noBrokenLinkCheck":O,autoAddBaseUrl:w=!0}=r,x=((e,t)=>{var r={};for(var a in e)f.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&k)for(var a of k(e))t.indexOf(a)<0&&h.call(e,a)&&(r[a]=e[a]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:N,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:j}=(0,u.C)(),C=(0,a.useContext)(o),T=m||g,A=(0,c.Z)(T),E=null==T?void 0:T.replace("pathname://","");let D=void 0!==E?(Z=E,w&&(e=>e.startsWith("/"))(Z)?j(Z):Z):void 0;var Z;D&&A&&(D=(0,s.applyTrailingSlash)(D,{trailingSlash:N,baseUrl:P}));const B=(0,a.useRef)(!1),L=d?n.OL:n.rU,I=l.Z.canUseIntersectionObserver,S=(0,a.useRef)();(0,a.useEffect)((()=>(!I&&A&&null!=D&&window.docusaurus.prefetch(D),()=>{I&&S.current&&S.current.disconnect()})),[S,D,I,A]);const M=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,U=!D||!A||M;return D&&A&&!M&&!O&&C.collectLink(D),U?a.createElement("a",_(_({href:D},T&&!A&&{target:"_blank",rel:"noopener noreferrer"}),x)):a.createElement(L,_((R=_({},x),p(R,b({onMouseEnter:()=>{B.current||null==D||(window.docusaurus.preload(D),B.current=!0)},innerRef:e=>{var t,r;I&&e&&A&&(t=e,r=()=>{null!=D&&window.docusaurus.prefetch(D)},S.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.current.unobserve(t),S.current.disconnect(),r())}))})),S.current.observe(t))},to:D||""}))),d&&{isActive:y,activeClassName:v}));var R}},35096:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,{b:function(){return a},Z:function(){return n}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return c}});var a=r(11368),n=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(r,a)=>function(e,t,r,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,n.b)(r))return r;if(a)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+c:c}(t,e,r,a)}}function c(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:a}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[n]=e.split(/[#?]/),i="/"===n||n===a?n:(c=n,r?function(e){return e.endsWith("/")?e:`${e}/`}(c):function(e){return e.endsWith("/")?e.slice(0,-1):e}(c));var c;return e.replace(n,i)}},67023:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var n=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(n).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},91769:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return k},contentTitle:function(){return f},metadata:function(){return h},toc:function(){return m},default:function(){return g}});var a=r(3905),n=r(31217),i=r(43861),c=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&p(e,r,t[r]);return e};const k={title:"CallbackArea"},f=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",id:"api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",isDocsHomePage:!1,title:"CallbackArea",description:"Mapping from rectangle to a callback method to execute.",source:"@site/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",permalink:"/4.18/ko/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",tags:[],version:"current",frontMatter:{title:"CallbackArea"},sidebar:"docs",previous:{title:"Callback<dest_type,void,void,void>",permalink:"/4.18/ko/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01void_00_01void_00_01void_01_4"},next:{title:"Canvas",permalink:"/4.18/ko/docs/api/classes/classtouchgfx_1_1_canvas"}},m=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"callback",id:"callback",children:[],level:3},{value:"highlightBitmapId",id:"highlightbitmapid",children:[],level:3},{value:"keyArea",id:"keyarea",children:[],level:3}],level:2}],_={toc:m};function g(e){var t,r=e,{components:c}=r,p=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=b(b({},_),p),l(t,o({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Mapping from rectangle to a callback method to execute. "),(0,a.kt)("h2",b({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:"right"})),(0,a.kt)("th",b({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"}),(0,a.kt)("a",b({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," *"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-callback",mdxType:"Link"},"callback")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"})),(0,a.kt)("td",b({parentName:"tr"},{align:null}),'The callback to execute, when the area is "pressed". The callback should be a Callback',"<","YourClass",">"," member in the class using the keyboard.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"})),(0,a.kt)("td",b({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"}),(0,a.kt)("a",b({parentName:"td"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")),(0,a.kt)("td",b({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-highlightbitmapid",mdxType:"Link"},"highlightBitmapId")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"})),(0,a.kt)("td",b({parentName:"tr"},{align:null}),'A bitmap to show when the area is "pressed".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"})),(0,a.kt)("td",b({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"}),(0,a.kt)("a",b({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,a.kt)("td",b({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-keyarea",mdxType:"Link"},"keyArea")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"})),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"The area occupied by a key.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:"right"})),(0,a.kt)("td",b({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",b({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-callback",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",b({},{id:"callback"}),"callback"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",b({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," * callback ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,'The callback to execute, when the area is "pressed". The callback should be a Callback',"<","YourClass",">"," member in the class using the keyboard. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-highlightbitmapid",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",b({},{id:"highlightbitmapid"}),"highlightBitmapId"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",b({parentName:"p"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")," highlightBitmapId ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,'A bitmap to show when the area is "pressed". '))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-keyarea",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",b({},{id:"keyarea"}),"keyArea"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",b({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," keyArea ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The area occupied by a key. "))))}g.isMDXComponent=!0}}]);