(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7701],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return k},kt:function(){return s}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},k=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),c=p(a),s=r,m=c["".concat(d,".").concat(s)]||c[s]||u[s]||i;return a?n.createElement(m,l(l({ref:e},k),{},{components:a})):n.createElement(m,l({ref:e},k))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return b}});var n=a(67294),r=a(73727),i=a(11368),l=a(35096),o=a(84487);const d=(0,n.createContext)({collectLink:()=>{}});var p=a(25026),k=a(67023),u=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,N=(t,e,a)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,v=(t,e)=>{for(var a in e||(e={}))g.call(e,a)&&N(t,a,e[a]);if(m)for(var a of m(e))h.call(e,a)&&N(t,a,e[a]);return t};var b=function(t){var e,a=t,{isNavLink:u,to:N,href:b,activeClassName:f,isActive:y,"data-noBrokenLinkCheck":_,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var n in t)g.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&h.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T,baseUrl:O}}=(0,i.Z)(),{withBaseUrl:Z}=(0,p.C)(),z=(0,n.useContext)(d),L=N||b,E=(0,l.Z)(L),P=null==L?void 0:L.replace("pathname://","");let S=void 0!==P?(D=P,x&&(t=>t.startsWith("/"))(D)?Z(D):D):void 0;var D;S&&E&&(S=(0,k.applyTrailingSlash)(S,{trailingSlash:T,baseUrl:O}));const j=(0,n.useRef)(!1),C=u?r.OL:r.rU,U=o.Z.canUseIntersectionObserver;let I;(0,n.useEffect)((()=>(!U&&E&&null!=S&&window.docusaurus.prefetch(S),()=>{U&&I&&I.disconnect()})),[S,U,E]);const H=null!==(e=null==S?void 0:S.startsWith("#"))&&void 0!==e&&e,A=!S||!E||H;return S&&E&&!H&&!_&&z.collectLink(S),A?n.createElement("a",v(v({href:S},L&&!E&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(C,v((F=v({},w),c(F,s({onMouseEnter:()=>{j.current||null==S||(window.docusaurus.preload(S),j.current=!0)},innerRef:t=>{var e,a;U&&t&&E&&(e=t,a=()=>{null!=S&&window.docusaurus.prefetch(S)},I=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(I.unobserve(e),I.disconnect(),a())}))})),I.observe(e))},to:S||""}))),u&&{isActive:y,activeClassName:f}));var F}},35096:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return i},Z:function(){return l}});var n=a(11368),r=a(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const l=a.startsWith(e)?a:e+a.replace(/^\//,"");return i?t+l:l}(e,t,a,n)}}function l(t,e={}){const{withBaseUrl:a}=i();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[r]=t.split(/[#?]/),i="/"===r||r===n?r:(l=r,a?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(r,i)}},67023:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var i=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},11092:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return h},toc:function(){return N},default:function(){return b}});var n=a(3905),r=a(31217),i=a(43861),l=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&c(t,a,e[a]);if(p)for(var a of p(e))u.call(e,a)&&c(t,a,e[a]);return t};const m={title:"Edge"},g=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1_edge",id:"api/classes/structtouchgfx_1_1_edge",isDocsHomePage:!1,title:"Edge",description:"An edge contains information about one edge, between two points, of a triangle, as well as information about how to interpolate values when moving in the vertical direction.",source:"@site/docs/api/classes/structtouchgfx_1_1_edge.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_edge",permalink:"/4.18/docs/api/classes/structtouchgfx_1_1_edge",version:"current",frontMatter:{title:"Edge"},sidebar:"docs",previous:{title:"EasingEquations",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_easing_equations"},next:{title:"Event",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_event"}},N=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"Edge",id:"edge",children:[]},{value:"step",id:"step",children:[]},{value:"step",id:"step-1",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"denominator",id:"denominator",children:[]},{value:"errorTerm",id:"errorterm",children:[]},{value:"height",id:"height",children:[]},{value:"numerator",id:"numerator",children:[]},{value:"oneOverZ",id:"oneoverz",children:[]},{value:"oneOverZStep",id:"oneoverzstep",children:[]},{value:"oneOverZStepExtra",id:"oneoverzstepextra",children:[]},{value:"UOverZ",id:"uoverz",children:[]},{value:"UOverZStep",id:"uoverzstep",children:[]},{value:"UOverZStepExtra",id:"uoverzstepextra",children:[]},{value:"VOverZ",id:"voverz",children:[]},{value:"VOverZStep",id:"voverzstep",children:[]},{value:"VOverZStepExtra",id:"voverzstepextra",children:[]},{value:"X",id:"x",children:[]},{value:"XStep",id:"xstep",children:[]},{value:"Y",id:"y",children:[]}]}],v={toc:N};function b(t){var e,a=t,{components:l}=a,c=((t,e)=>{var a={};for(var n in t)k.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=s(s({},v),c),o(e,d({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"An edge contains information about one edge, between two points, of a triangle, as well as information about how to interpolate values when moving in the vertical direction. "),(0,n.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"right"})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#function-edge",mdxType:"Link"},"Edge")),"(const ",(0,n.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1_gradients"}),"Gradients")," & gradients, const ",(0,n.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1_point3_d"}),"Point3D")," * vertices, int top, int bottom)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Initializes a new instance of the TextureMapTypes class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION int"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#function-step",mdxType:"Link"},"step")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Perform a step along the edge.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION int"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#function-step",mdxType:"Link"},"step")),"(int steps)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Performs a number of steps along the edge.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",s({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"right"})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"int32_t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-denominator",mdxType:"Link"},"denominator")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The denominator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"int32_t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-errorterm",mdxType:"Link"},"errorTerm")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The error term.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"int"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-height",mdxType:"Link"},"height")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The height.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"int32_t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-numerator",mdxType:"Link"},"numerator")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The numerator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-oneoverz",mdxType:"Link"},"oneOverZ")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The one over z coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-oneoverzstep",mdxType:"Link"},"oneOverZStep")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The one over z coordinate step.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-oneoverzstepextra",mdxType:"Link"},"oneOverZStepExtra")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The one over z coordinate step extra.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-uoverz",mdxType:"Link"},"UOverZ")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The over z coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-uoverzstep",mdxType:"Link"},"UOverZStep")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The over z coordinate step.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-uoverzstepextra",mdxType:"Link"},"UOverZStepExtra")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The over z coordinate step extra.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-voverz",mdxType:"Link"},"VOverZ")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The over z coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-voverzstep",mdxType:"Link"},"VOverZStep")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The over z coordinate step.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-voverzstepextra",mdxType:"Link"},"VOverZStepExtra")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The over z coordinate step extra.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"int32_t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-x",mdxType:"Link"},"X")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The X coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"int32_t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-xstep",mdxType:"Link"},"XStep")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Amount to increment x.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"int"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#variable-y",mdxType:"Link"},"Y")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The Y coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#function-edge",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"edge"}),"Edge"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#function-edge",mdxType:"Link"},"Edge")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1_gradients"}),"Gradients")," &"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"gradients ,"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1_point3_d"}),"Point3D")," *"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"vertices ,"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"int"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"top ,"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"int"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"bottom"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the TextureMapTypes class. "),(0,n.kt)("p",null,"Construct the edge between two vertices and uses the gradients for calculating the interpolation values."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"gradients"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The gradients for the triangle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"vertices"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The vertices for the triangle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"top"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The index in the vertices array of the top vertex of this edge.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"bottom"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The index in the vertices array of the bottom vertex of this edge."))))))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#function-step",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"step"}),"step"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION int","\xa0",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#function-step",mdxType:"Link"},"step")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Perform a step along the edge. "),(0,n.kt)("p",null,"Increase the Y and decrease the height."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The remaining height. ")))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#function-step",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"step-1"}),"step"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION int","\xa0",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_edge#function-step",mdxType:"Link"},"step")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"int"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"steps"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Performs a number of steps along the edge. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"steps"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The number of steps the perform."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The remaining height. ")))),(0,n.kt)("h2",s({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-denominator",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"denominator"}),"denominator"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int32_t denominator ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The denominator. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-errorterm",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"errorterm"}),"errorTerm"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int32_t errorTerm ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The error term. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-height",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"height"}),"height"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int height ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The height. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-numerator",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"numerator"}),"numerator"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int32_t numerator ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The numerator. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-oneoverz",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"oneoverz"}),"oneOverZ"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float oneOverZ ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The one over z coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-oneoverzstep",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"oneoverzstep"}),"oneOverZStep"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float oneOverZStep ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The one over z coordinate step. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-oneoverzstepextra",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"oneoverzstepextra"}),"oneOverZStepExtra"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float oneOverZStepExtra ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The one over z coordinate step extra. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-uoverz",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"uoverz"}),"UOverZ"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float UOverZ ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The over z coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-uoverzstep",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"uoverzstep"}),"UOverZStep"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float UOverZStep ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The over z coordinate step. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-uoverzstepextra",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"uoverzstepextra"}),"UOverZStepExtra"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float UOverZStepExtra ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The over z coordinate step extra. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-voverz",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"voverz"}),"VOverZ"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float VOverZ ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The over z coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-voverzstep",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"voverzstep"}),"VOverZStep"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float VOverZStep ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The over z coordinate step. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-voverzstepextra",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"voverzstepextra"}),"VOverZStepExtra"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"float VOverZStepExtra ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The over z coordinate step extra. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-x",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"x"}),"X"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int32_t X ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The X coordinate. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-xstep",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"xstep"}),"XStep"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int32_t XStep ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Amount to increment x. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_edge#variable-y",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"y"}),"Y"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int Y ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The Y coordinate. "))))}b.isMDXComponent=!0}}]);