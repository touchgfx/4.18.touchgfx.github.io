(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3803],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var a=n(67294),r=n(73727),i=n(11368),l=n(35096),o=n(84487);const p=(0,a.createContext)({collectLink:()=>{}});var c=n(25026),d=n(67023),s=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))g.call(e,n)&&h(t,n,e[n]);if(k)for(var n of k(e))N.call(e,n)&&h(t,n,e[n]);return t};var b=function(t){var e,n=t,{isNavLink:s,to:h,href:b,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=n,T=((t,e)=>{var n={};for(var a in t)g.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&k)for(var a of k(t))e.indexOf(a)<0&&N.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:w}}=(0,i.Z)(),{withBaseUrl:L}=(0,c.C)(),O=(0,a.useContext)(p),Z=h||b,E=(0,l.Z)(Z),j=null==Z?void 0:Z.replace("pathname://","");let A=void 0!==j?(D=j,x&&(t=>t.startsWith("/"))(D)?L(D):D):void 0;var D;A&&E&&(A=(0,d.applyTrailingSlash)(A,{trailingSlash:P,baseUrl:w}));const z=(0,a.useRef)(!1),S=s?r.OL:r.rU,C=o.Z.canUseIntersectionObserver;let F;(0,a.useEffect)((()=>(!C&&E&&null!=A&&window.docusaurus.prefetch(A),()=>{C&&F&&F.disconnect()})),[A,C,E]);const M=null!==(e=null==A?void 0:A.startsWith("#"))&&void 0!==e&&e,R=!A||!E||M;return A&&E&&!M&&!v&&O.collectLink(A),R?a.createElement("a",f(f({href:A},Z&&!E&&{target:"_blank",rel:"noopener noreferrer"}),T)):a.createElement(S,f((U=f({},T),u(U,m({onMouseEnter:()=>{z.current||null==A||(window.docusaurus.preload(A),z.current=!0)},innerRef:t=>{var e,n;C&&t&&E&&(e=t,n=()=>{null!=A&&window.docusaurus.prefetch(A)},F=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(F.unobserve(e),F.disconnect(),n())}))})),F.observe(e))},to:A||""}))),s&&{isActive:y,activeClassName:_}));var U}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return i},Z:function(){return l}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+l:l}(e,t,n,a)}}function l(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),i="/"===r||r===a?r:(l=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(r,i)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},83981:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return k},contentTitle:function(){return g},metadata:function(){return N},toc:function(){return h},default:function(){return b}});var a=n(3905),r=n(31217),i=n(43861),l=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&u(t,n,e[n]);if(c)for(var n of c(e))s.call(e,n)&&u(t,n,e[n]);return t};const k={title:"Partition"},g=void 0,N={unversionedId:"api/classes/classtouchgfx_1_1_partition",id:"api/classes/classtouchgfx_1_1_partition",isDocsHomePage:!1,title:"Partition",description:"This type provides a concrete Partition of memory-slots capable of holding any of the specified list of types.",source:"@site/docs/api/classes/classtouchgfx_1_1_partition.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_partition",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_partition",version:"current",frontMatter:{title:"Partition"},sidebar:"docs",previous:{title:"PartialFrameBufferManager",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_partial_frame_buffer_manager"},next:{title:"PixelDataWidget",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_pixel_data_widget"}},h=[{value:"Public Types",id:"public-types",children:[]},{value:"Public Functions",id:"public-functions",children:[]},{value:"Protected Functions",id:"protected-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_abstract_partition">AbstractPartition</Link>',id:"public-functions-inherited-from-abstractpartition",children:[]},{value:'Protected Functions inherited from <Link to="classtouchgfx_1_1_abstract_partition">AbstractPartition</Link>',id:"protected-functions-inherited-from-abstractpartition",children:[]}]},{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"@0",id:"0",children:[]},{value:"SupportedTypesList",id:"supportedtypeslist",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"capacity",id:"capacity",children:[]},{value:"element_size",id:"element_size",children:[]}]},{value:"Protected Functions Documentation",id:"protected-functions-documentation",children:[{value:"element",id:"element",children:[]},{value:"element",id:"element-1",children:[]}]}],f={toc:h};function b(t){var e,n=t,{components:l}=n,u=((t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&c)for(var a of c(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=m(m({},f),u),o(e,p({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," This type provides a concrete Partition of memory-slots capable of holding any of the specified list of types.\nThe ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_partition"}),"Partition")," is not aware of the types stored in the ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_partition"}),"Partition")," memory, hence it provides no mechanism for deleting C++ objects when the ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_partition"}),"Partition")," is ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_abstract_partition#function-clear"}),"clear()"),"'ed."),(0,a.kt)("p",null,"This class implements ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ListOfTypes")," Type of the list of types. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NUMBER_OF_ELEMENTS")," Type of the number of elements.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition",mdxType:"Link"},"AbstractPartition")),(0,a.kt)("h2",m({},{id:"public-types"}),"Public Types"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"enum"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#enum-@0",mdxType:"Link"},"@0"))," { INTS_PR_ELEMENT = (sizeof(typename meta::select_type_maxsize","<","SupportedTypesList",">","::type) + sizeof(int) - 1) / sizeof(int), SIZE_OF_ELEMENT = INTS_PR_ELEMENT * sizeof(int) }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),'Compile-time generated constants specifying the "element" or "slot" size used by this partition.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"typedef ListOfTypes"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#typedef-supportedtypeslist",mdxType:"Link"},"SupportedTypesList")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Provides a generic public type containing the list of supported types.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#function-capacity",mdxType:"Link"},"capacity")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets the capacity, i.e.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint32_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#function-element_size",mdxType:"Link"},"element_size")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Access to concrete element-size.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"protected-functions"}),"Protected Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void *"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#function-element",mdxType:"Link"},"element")),"(uint16_t index)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Access to stored element.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","const void *"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#function-element",mdxType:"Link"},"element")),"(uint16_t index) const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Access to stored element, const version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,a.kt)("h3",m({},{id:"public-functions-inherited-from-abstractpartition"}),"Public Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition",mdxType:"Link"},"AbstractPartition")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"void *"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-allocate",mdxType:"Link"},"allocate")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets the address of the next available storage slot.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void *"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-allocate",mdxType:"Link"},"allocate")),"(uint16_t size)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets the address of the next available storage slot.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"void *"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-allocateat",mdxType:"Link"},"allocateAt")),"(uint16_t index)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets the address of the specified storage slot.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void *"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-allocateat",mdxType:"Link"},"allocateAt")),"(uint16_t index, uint16_t size)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets the address of the specified index.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"T &"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-at",mdxType:"Link"},"at")),"(const uint16_t index)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets the object at the specified index.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"const T &"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-at",mdxType:"Link"},"at")),"(const uint16_t index) const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"const version of ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition#function-at"}),"at()"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-clear",mdxType:"Link"},"clear")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Prepares the Partition for new allocations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-dec",mdxType:"Link"},"dec")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Decreases number of allocations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),(0,a.kt)("a",m({parentName:"td"},{href:"structtouchgfx_1_1_pair"}),"Pair"),"<"," T *, uint16_t ",">"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-find",mdxType:"Link"},"find")),"(const void * pT)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Determines if the specified object could have been previously allocated in the partition.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-getallocationcount",mdxType:"Link"},"getAllocationCount")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets allocation count.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-indexof",mdxType:"Link"},"indexOf")),"(const void * address)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Determines index of previously allocated location.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-~abstractpartition",mdxType:"Link"},"~AbstractPartition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",m({},{id:"protected-functions-inherited-from-abstractpartition"}),"Protected Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition",mdxType:"Link"},"AbstractPartition")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-abstractpartition",mdxType:"Link"},"AbstractPartition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_abstract_partition"}),"AbstractPartition")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"public-types-documentation"}),"Public Types Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_partition#enum-@0",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"0"}),"@0"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header",markdown:"1"},(0,a.kt)("p",null,"enum ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#enum-@0",mdxType:"Link"},"@0"))),(0,a.kt)("div",{class:"api-container-content api-container-content-enum",markdown:"1"},(0,a.kt)("p",null,'Compile-time generated constants specifying the "element" or "slot" size used by this partition. '),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_partition#enumvalue-ints_pr_element",mdxType:"DoxybookHeaderLink"})," INTS_PR_ELEMENT"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_partition#enumvalue-size_of_element",mdxType:"DoxybookHeaderLink"})," SIZE_OF_ELEMENT"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))))))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_partition#typedef-supportedtypeslist",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"supportedtypeslist"}),"SupportedTypesList"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header",markdown:"1"},(0,a.kt)("p",null," typedef ListOfTypes ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#typedef-supportedtypeslist",mdxType:"Link"},"SupportedTypesList")," ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Provides a generic public type containing the list of supported types. "))),(0,a.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_partition#function-capacity",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"capacity"}),"capacity"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","uint16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#function-capacity",mdxType:"Link"},"capacity")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the capacity, i.e. "),(0,a.kt)("p",null,"the maximum allocation count."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The maximum allocation count. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-capacity",mdxType:"Link"},"touchgfx::AbstractPartition::capacity")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_partition#function-element_size",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"element_size"}),"element_size"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","uint32_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#function-element_size",mdxType:"Link"},"element_size")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Access to concrete element-size. "),(0,a.kt)("p",null,"Used internally."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"An uint32_t. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-element_size",mdxType:"Link"},"touchgfx::AbstractPartition::element_size")))),(0,a.kt)("h2",m({},{id:"protected-functions-documentation"}),"Protected Functions Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_partition#function-element",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"element"}),"element"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","void *","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#function-element",mdxType:"Link"},"element")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uint16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"index"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Access to stored element. "),(0,a.kt)("p",null,"Used internally."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"index"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Zero-based index of the."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"null if it fails, else a void*. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-element",mdxType:"Link"},"touchgfx::AbstractPartition::element")))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_partition#function-element",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"element-1"}),"element"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","const void *","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_partition#function-element",mdxType:"Link"},"element")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uint16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"index"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Access to stored element, const version. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"index"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Zero-based index of the."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"null if it fails, else a void*. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_partition#function-element",mdxType:"Link"},"touchgfx::AbstractPartition::element")))))}b.isMDXComponent=!0}}]);