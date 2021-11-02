(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6384],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return d},kt:function(){return p}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=a.createContext({}),c=function(t){var n=a.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=c(t.components);return a.createElement(u.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=c(e),p=r,k=s["".concat(u,".").concat(p)]||s[p]||m[p]||l;return e?a.createElement(k,i(i({ref:n},d),{},{components:e})):a.createElement(k,i({ref:n},d))}));function p(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=s;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=e[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}s.displayName="MDXCreateElement"},43861:function(t,n,e){"use strict";var a=e(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}n.Z=r},31217:function(t,n,e){"use strict";e.d(n,{Z:function(){return f}});var a=e(67294),r=e(73727),l=e(11368),i=e(35096),o=e(84487);const u=(0,a.createContext)({collectLink:()=>{}});var c=e(25026),d=e(67023),m=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,h=(t,n,e)=>n in t?m(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,_=(t,n)=>{for(var e in n||(n={}))g.call(n,e)&&h(t,e,n[e]);if(k)for(var e of k(n))N.call(n,e)&&h(t,e,n[e]);return t};var f=function(t){var n,e=t,{isNavLink:m,to:h,href:f,activeClassName:b,isActive:v,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=e,w=((t,n)=>{var e={};for(var a in t)g.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&k)for(var a of k(t))n.indexOf(a)<0&&N.call(t,a)&&(e[a]=t[a]);return e})(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:C,baseUrl:O}}=(0,l.Z)(),{withBaseUrl:P}=(0,c.C)(),U=(0,a.useContext)(u),T=h||f,Z=(0,i.Z)(T),L=null==T?void 0:T.replace("pathname://","");let M=void 0!==L?(j=L,x&&(t=>t.startsWith("/"))(j)?P(j):j):void 0;var j;M&&Z&&(M=(0,d.applyTrailingSlash)(M,{trailingSlash:C,baseUrl:O}));const I=(0,a.useRef)(!1),D=m?r.OL:r.rU,E=o.Z.canUseIntersectionObserver,S=(0,a.useRef)();(0,a.useEffect)((()=>(!E&&Z&&null!=M&&window.docusaurus.prefetch(M),()=>{E&&S.current&&S.current.disconnect()})),[S,M,E,Z]);const A=null!==(n=null==M?void 0:M.startsWith("#"))&&void 0!==n&&n,H=!M||!Z||A;return M&&Z&&!A&&!y&&U.collectLink(M),H?a.createElement("a",_(_({href:M},T&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(D,_((z=_({},w),s(z,p({onMouseEnter:()=>{I.current||null==M||(window.docusaurus.preload(M),I.current=!0)},innerRef:t=>{var n,e;E&&t&&Z&&(n=t,e=()=>{null!=M&&window.docusaurus.prefetch(M)},S.current=new window.IntersectionObserver((t=>{t.forEach((t=>{n===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(S.current.unobserve(n),S.current.disconnect(),e())}))})),S.current.observe(n))},to:M||""}))),m&&{isActive:v,activeClassName:b}));var z}},35096:function(t,n,e){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}e.d(n,{b:function(){return a},Z:function(){return r}})},25026:function(t,n,e){"use strict";e.d(n,{C:function(){return l},Z:function(){return i}});var a=e(11368),r=e(35096);function l(){const{siteConfig:{baseUrl:t="/",url:n}={}}=(0,a.Z)();return{withBaseUrl:(e,a)=>function(t,n,e,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!e)return e;if(e.startsWith("#"))return e;if((0,r.b)(e))return e;if(a)return n+e;const i=e.startsWith(n)?e:n+e.replace(/^\//,"");return l?t+i:i}(n,t,e,a)}}function i(t,n={}){const{withBaseUrl:e}=l();return e(t,n)}},67271:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,n){const{trailingSlash:e,baseUrl:a}=n;if(t.startsWith("#"))return t;if(void 0===e)return t;const[r]=t.split(/[#?]/),l="/"===r||r===a?r:(i=r,e?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,n,e){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var r=e(67271);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=e(11080);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return Array.from(new Set(t))}},97477:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return k},contentTitle:function(){return g},metadata:function(){return N},toc:function(){return h},default:function(){return f}});var a=e(3905),r=e(31217),l=e(43861),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(t,n,e)=>n in t?i(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,p=(t,n)=>{for(var e in n||(n={}))d.call(n,e)&&s(t,e,n[e]);if(c)for(var e of c(n))m.call(n,e)&&s(t,e,n[e]);return t};const k={title:"MCUInstrumentation"},g=void 0,N={unversionedId:"api/classes/classtouchgfx_1_1_m_c_u_instrumentation",id:"api/classes/classtouchgfx_1_1_m_c_u_instrumentation",isDocsHomePage:!1,title:"MCUInstrumentation",description:"Interface for instrumenting processors to measure MCU load via measured CPU cycles.",source:"@site/docs/api/classes/classtouchgfx_1_1_m_c_u_instrumentation.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_m_c_u_instrumentation",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_m_c_u_instrumentation",tags:[],version:"current",frontMatter:{title:"MCUInstrumentation"},sidebar:"docs",previous:{title:"Matrix4x4",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_matrix4x4"},next:{title:"ModalWindow",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_modal_window"}},h=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Protected Attributes",id:"protected-attributes",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"getCCConsumed",id:"getccconsumed",children:[],level:3},{value:"getCPUCycles",id:"getcpucycles",children:[],level:3},{value:"getElapsedUS",id:"getelapsedus",children:[],level:3},{value:"init",id:"init",children:[],level:3},{value:"MCUInstrumentation",id:"mcuinstrumentation",children:[],level:3},{value:"setCCConsumed",id:"setccconsumed",children:[],level:3},{value:"setMCUActive",id:"setmcuactive",children:[],level:3},{value:"~MCUInstrumentation",id:"mcuinstrumentation-1",children:[],level:3}],level:2},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",children:[{value:"cc_consumed",id:"cc_consumed",children:[],level:3},{value:"cc_in",id:"cc_in",children:[],level:3}],level:2}],_={toc:h};function f(t){var n,e=t,{components:i}=e,s=((t,n)=>{var e={};for(var a in t)d.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&c)for(var a of c(t))n.indexOf(a)<0&&m.call(t,a)&&(e[a]=t[a]);return e})(e,["components"]);return(0,a.kt)("wrapper",(n=p(p({},_),s),o(n,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Interface for instrumenting processors to measure MCU load via measured CPU cycles. "),(0,a.kt)("h2",p({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:"right"})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint32_t"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getccconsumed",mdxType:"Link"},"getCCConsumed")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gets number of consumed clock cycles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","unsigned int"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getcpucycles",mdxType:"Link"},"getCPUCycles")),"(void ) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gets CPU cycles from register.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","unsigned int"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getelapsedus",mdxType:"Link"},"getElapsedUS")),"(unsigned int start, unsigned int now, unsigned int clockfrequency) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Gets elapsed microseconds based on clock frequency.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-init",mdxType:"Link"},"init")),"() =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Initialize.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-mcuinstrumentation",mdxType:"Link"},"MCUInstrumentation")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_m_c_u_instrumentation"}),"MCUInstrumentation")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-setccconsumed",mdxType:"Link"},"setCCConsumed")),"(uint32_t val)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Sets number of consumed clock cycles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-setmcuactive",mdxType:"Link"},"setMCUActive")),"(bool active)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Sets MCU activity high.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-~mcuinstrumentation",mdxType:"Link"},"~MCUInstrumentation")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_m_c_u_instrumentation"}),"MCUInstrumentation")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",p({},{id:"protected-attributes"}),"Protected Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:"right"})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"uint32_t"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#variable-cc_consumed",mdxType:"Link"},"cc_consumed")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Amount of consumed CPU cycles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"uint32_t"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#variable-cc_in",mdxType:"Link"},"cc_in")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Current CPU cycles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",p({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-getccconsumed",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"getccconsumed"}),"getCCConsumed"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","uint32_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getccconsumed",mdxType:"Link"},"getCCConsumed")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets number of consumed clock cycles. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"clock cycles. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-getcpucycles",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"getcpucycles"}),"getCPUCycles"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","unsigned int","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getcpucycles",mdxType:"Link"},"getCPUCycles")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"void"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets CPU cycles from register. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"CPU cycles. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-getelapsedus",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"getelapsedus"}),"getElapsedUS"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","unsigned int","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-getelapsedus",mdxType:"Link"},"getElapsedUS")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"unsigned int"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"start ,"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"unsigned int"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"now ,"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"unsigned int"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"clockfrequency"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"=0"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets elapsed microseconds based on clock frequency. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"start"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Start time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"now"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Current time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"clockfrequency"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Clock frequency of the system expressed in MHz."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"Elapsed microseconds start and now. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-init",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"init"}),"init"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-init",mdxType:"Link"},"init")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"=0"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initialize. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-mcuinstrumentation",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"mcuinstrumentation"}),"MCUInstrumentation"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-mcuinstrumentation",mdxType:"Link"},"MCUInstrumentation")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",p({parentName:"p"},{href:"classtouchgfx_1_1_m_c_u_instrumentation"}),"MCUInstrumentation")," class. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-setccconsumed",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"setccconsumed"}),"setCCConsumed"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-setccconsumed",mdxType:"Link"},"setCCConsumed")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"uint32_t"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"val"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets number of consumed clock cycles. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"val"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"number of clock cycles."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-setmcuactive",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"setmcuactive"}),"setMCUActive"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-setmcuactive",mdxType:"Link"},"setMCUActive")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"active"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets MCU activity high. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"active"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"if True, inactive otherwise."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#function-~mcuinstrumentation",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"mcuinstrumentation-1"}),"~MCUInstrumentation"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_c_u_instrumentation#function-~mcuinstrumentation",mdxType:"Link"},"~MCUInstrumentation")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the ",(0,a.kt)("a",p({parentName:"p"},{href:"classtouchgfx_1_1_m_c_u_instrumentation"}),"MCUInstrumentation")," class. "))),(0,a.kt)("h2",p({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#variable-cc_consumed",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"cc_consumed"}),"cc_consumed"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint32_t cc_consumed ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Amount of consumed CPU cycles. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_m_c_u_instrumentation#variable-cc_in",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"cc_in"}),"cc_in"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint32_t cc_in ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Current CPU cycles. "))))}f.isMDXComponent=!0}}]);