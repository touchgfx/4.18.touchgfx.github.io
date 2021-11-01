(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7258],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return d},kt:function(){return _}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),u=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(a),_=r,k=p["".concat(c,".").concat(_)]||p[_]||s[_]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function _(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return g}});var n=a(67294),r=a(73727),l=a(11368),i=a(35096),o=a(84487);const c=(0,n.createContext)({collectLink:()=>{}});var u=a(25026),d=a(67023),s=Object.defineProperty,p=Object.defineProperties,_=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(t,e,a)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&b(t,a,e[a]);if(k)for(var a of k(e))f.call(e,a)&&b(t,a,e[a]);return t};var g=function(t){var e,a=t,{isNavLink:s,to:b,href:g,activeClassName:N,isActive:v,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&k)for(var n of k(t))e.indexOf(n)<0&&f.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:T}}=(0,l.Z)(),{withBaseUrl:j}=(0,u.C)(),C=(0,n.useContext)(c),P=b||g,L=(0,i.Z)(P),Z=null==P?void 0:P.replace("pathname://","");let D=void 0!==Z?(E=Z,x&&(t=>t.startsWith("/"))(E)?j(E):E):void 0;var E;D&&L&&(D=(0,d.applyTrailingSlash)(D,{trailingSlash:O,baseUrl:T}));const S=(0,n.useRef)(!1),A=s?r.OL:r.rU,I=o.Z.canUseIntersectionObserver;let U;(0,n.useEffect)((()=>(!I&&L&&null!=D&&window.docusaurus.prefetch(D),()=>{I&&U&&U.disconnect()})),[D,I,L]);const M=null!==(e=null==D?void 0:D.startsWith("#"))&&void 0!==e&&e,B=!D||!L||M;return D&&L&&!M&&!y&&C.collectLink(D),B?n.createElement("a",h(h({href:D},P&&!L&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(A,h((F=h({},w),p(F,_({onMouseEnter:()=>{S.current||null==D||(window.docusaurus.preload(D),S.current=!0)},innerRef:t=>{var e,a;I&&t&&L&&(e=t,a=()=>{null!=D&&window.docusaurus.prefetch(D)},U=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.unobserve(e),U.disconnect(),a())}))})),U.observe(e))},to:D||""}))),s&&{isActive:v,activeClassName:N}));var F}},35096:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return l},Z:function(){return i}});var n=a(11368),r=a(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[r]=t.split(/[#?]/),l="/"===r||r===n?r:(i=r,a?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},3141:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return k},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return b},default:function(){return g}});var n=a(3905),r=a(31217),l=a(43861),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,_=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&p(t,a,e[a]);if(u)for(var a of u(e))s.call(e,a)&&p(t,a,e[a]);return t};const k={title:"Callback<dest_type,T1,void,void>"},m=void 0,f={unversionedId:"api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4",id:"api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4",isDocsHomePage:!1,title:"Callback<dest_type,T1,void,void>",description:"A Callback is basically a wrapper of a pointer-to-member-function.",source:"@site/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4",permalink:"/4.18/ja/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4",version:"current",frontMatter:{title:"Callback<dest_type,T1,void,void>"},sidebar:"docs",previous:{title:"Callback<dest_type,T1,T2,void>",permalink:"/4.18/ja/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01_t2_00_01void_01_4"},next:{title:"Callback<dest_type,void,void,void>",permalink:"/4.18/ja/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01void_00_01void_00_01void_01_4"}},b=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_generic_callback">GenericCallback&lt; T1 &gt;</Link>',id:"public-functions-inherited-from-genericcallback-t1-",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"Callback",id:"callback",children:[]},{value:"Callback",id:"callback-1",children:[]},{value:"execute",id:"execute",children:[]},{value:"isValid",id:"isvalid",children:[]}]}],h={toc:b};function g(t){var e,a=t,{components:i}=a,p=((t,e)=>{var a={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&s.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=_(_({},h),p),o(e,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," A ",(0,n.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," is basically a wrapper of a pointer-to-member-function.\nIt is used for registering callbacks between widgets. For instance, a ",(0,n.kt)("a",_({parentName:"p"},{href:"classtouchgfx_1_1_button"}),"Button")," can be configured to call a member function when it is clicked."),(0,n.kt)("p",null,"The class is templated in order to provide the class type of the object in which the member function resides, and the argument types of the function to call."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," class exists in four versions, for supporting member functions with 0, 1, 2 or 3 arguments. The compiler will infer which type to use automatically."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dest_type")," The type of the class in which the member function resides. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T1")," The type of the first argument in the member function, or void if none.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": The member function to call must return void. The function can have zero, one, two or three arguments of any type. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback",mdxType:"Link"},"GenericCallback","<"," T1 ",">")),(0,n.kt)("h2",_({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",_({parentName:"tr"},{align:"right"})),(0,n.kt)("th",_({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"Link"},"Callback")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",_({parentName:"td"},{href:"structtouchgfx_1_1_callback"}),"Callback")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"Link"},"Callback")),"(dest_type ",(0,n.kt)("em",{parentName:"td"}," pobject, void(dest_type::"),")(T1) pmemfun_1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"Initializes a ",(0,n.kt)("a",_({parentName:"td"},{href:"structtouchgfx_1_1_callback"}),"Callback")," with an object and a pointer to the member function in that object to call.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",_({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-execute",mdxType:"Link"},"execute")),"(T1 t1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"Calls the member function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",_({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-isvalid",mdxType:"Link"},"isValid")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"Query if this object is valid.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",_({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,n.kt)("h3",_({},{id:"public-functions-inherited-from-genericcallback-t1-"}),"Public Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback",mdxType:"Link"},"GenericCallback","<"," T1 ",">")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",_({parentName:"tr"},{align:"right"})),(0,n.kt)("th",_({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",_({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",_({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:"right"})),(0,n.kt)("td",_({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",_({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",_({},{id:"callback"}),"Callback"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"Link"},"Callback")),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",_({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," class. "))),(0,n.kt)(l.Z,{url:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",_({},{id:"callback-1"}),"Callback"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"Link"},"Callback")),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"dest_type *"),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"pobject ,"),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"void(dest_type::*)(T1)"),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"pmemfun_1"),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a ",(0,n.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," with an object and a pointer to the member function in that object to call. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:null}),"pobject"),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"Pointer to the object on which the function should be called.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:null}),"pmemfun_1"),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"Address of member function. This is the version where function takes one argument."))))))),(0,n.kt)(l.Z,{url:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-execute",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",_({},{id:"execute"}),"execute"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-execute",mdxType:"Link"},"execute")),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"T1"),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"t1"),(0,n.kt)("td",_({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",_({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Calls the member function. "),(0,n.kt)("p",null,"Do not call execute unless ",(0,n.kt)("a",_({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback#function-isvalid"}),"isValid()")," returns true (ie. a pointer to the object and the function has been set)."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:null}),"t1"),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"This value will be passed as the first argument in the function call."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-isvalid"}),"isValid"))))),(0,n.kt)(l.Z,{url:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-isvalid",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",_({},{id:"isvalid"}),"isValid"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})),(0,n.kt)("th",_({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",_({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-isvalid",mdxType:"Link"},"isValid")),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null})),(0,n.kt)("td",_({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",_({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Query if this object is valid. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true if valid, false if not. ")))))}g.isMDXComponent=!0}}]);