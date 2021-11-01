(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3847],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},_=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),_=u(n),s=r,k=_["".concat(c,".").concat(s)]||_[s]||d[s]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=_;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return N}});var a=n(67294),r=n(73727),l=n(11368),i=n(35096),o=n(84487);const c=(0,a.createContext)({collectLink:()=>{}});var u=n(25026),p=n(67023),d=Object.defineProperty,_=Object.defineProperties,s=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&h(t,n,e[n]);if(k)for(var n of k(e))f.call(e,n)&&h(t,n,e[n]);return t};var N=function(t){var e,n=t,{isNavLink:d,to:h,href:N,activeClassName:b,isActive:v,"data-noBrokenLinkCheck":y,autoAddBaseUrl:w=!0}=n,x=((t,e)=>{var n={};for(var a in t)m.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&k)for(var a of k(t))e.indexOf(a)<0&&f.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:q,baseUrl:O}}=(0,l.Z)(),{withBaseUrl:Q}=(0,u.C)(),P=(0,a.useContext)(c),j=h||N,T=(0,i.Z)(j),C=null==j?void 0:j.replace("pathname://","");let Z=void 0!==C?(L=C,w&&(t=>t.startsWith("/"))(L)?Q(L):L):void 0;var L;Z&&T&&(Z=(0,p.applyTrailingSlash)(Z,{trailingSlash:q,baseUrl:O}));const D=(0,a.useRef)(!1),E=d?r.OL:r.rU,S=o.Z.canUseIntersectionObserver;let U;(0,a.useEffect)((()=>(!S&&T&&null!=Z&&window.docusaurus.prefetch(Z),()=>{S&&U&&U.disconnect()})),[Z,S,T]);const A=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,M=!Z||!T||A;return Z&&T&&!A&&!y&&P.collectLink(Z),M?a.createElement("a",g(g({href:Z},j&&!T&&{target:"_blank",rel:"noopener noreferrer"}),x)):a.createElement(E,g((B=g({},x),_(B,s({onMouseEnter:()=>{D.current||null==Z||(window.docusaurus.preload(Z),D.current=!0)},innerRef:t=>{var e,n;S&&t&&T&&(e=t,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},U=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.unobserve(e),U.disconnect(),n())}))})),U.observe(e))},to:Z||""}))),d&&{isActive:v,activeClassName:b}));var B}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(11368),r=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),l="/"===r||r===a?r:(i=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},35964:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return k},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return h},default:function(){return N}});var a=n(3905),r=n(31217),l=n(43861),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,_=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&_(t,n,e[n]);if(u)for(var n of u(e))d.call(e,n)&&_(t,n,e[n]);return t};const k={title:"Q15"},m=void 0,f={unversionedId:"api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15",id:"api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15",isDocsHomePage:!1,title:"Q15",description:'Defines a "floating point number" with 15 bits reserved for the fractional part of the decimal number.',source:"@site/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q15",version:"current",frontMatter:{title:"Q15"},sidebar:"docs",previous:{title:"Q10",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q10"},next:{title:"Q5",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_c_w_r_util_1_1_q5"}},h=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"operator int",id:"operator-int",children:[]},{value:"operator+",id:"operator",children:[]},{value:"operator-",id:"operator-",children:[]},{value:"operator/",id:"operator-1",children:[]},{value:"Q15",id:"q15",children:[]}]}],g={toc:h};function N(t){var e,n=t,{components:i}=n,_=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=s(s({},g),_),o(e,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,' Defines a "floating point number" with 15 bits reserved for the fractional part of the decimal number.\n',(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," is only used for sine/cosine and for intermediate calculations when multiplying."),(0,a.kt)("p",null,"Q5*Q5=",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10"),", Q10/Q5=",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5"),", ..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5"),", ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")),(0,a.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"right"})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator int",mdxType:"Link"},"operator int")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Gets the ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," as an integer without conversion.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator+",mdxType:"Link"},"operator+")),"(const ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," & q15) const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Addition operator.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator-",mdxType:"Link"},"operator-")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Negation operator.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator/",mdxType:"Link"},"operator/")),"(const ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," & q5) const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Calculate ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," / Q5 as a ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-q15",mdxType:"Link"},"Q15")),"(int i)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Constructor from integer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator int",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"operator-int"}),"operator int"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator int",mdxType:"Link"},"operator int")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," as an integer without conversion. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The unconverted ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," value. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator+",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"operator"}),"operator+"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Q15","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator+",mdxType:"Link"},"operator+")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," &"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"q15"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Addition operator. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"q15"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," to add to this."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The result of the operation. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator-",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"operator-"}),"operator-"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Q15","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator-",mdxType:"Link"},"operator-")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Negation operator. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The negative value of this. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator/",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"operator-1"}),"operator/"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Q10","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-operator/",mdxType:"Link"},"operator/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," &"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"q5"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Calculate ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," / Q5 as a ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q10"}),"Q10"),". "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"q5"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"Q5")," to divide this by."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The result of the operation. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-q15",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"q15"}),"Q15"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"explicit","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_c_w_r_util_1_1_q15#function-q15",mdxType:"Link"},"Q15")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"int"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"i"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Constructor from integer. "),(0,a.kt)("p",null,"No conversion is done - the integer is assumed to already be in ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," format."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"i"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"int pre-formattet in ",(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q15"}),"Q15")," format."))))))))}N.isMDXComponent=!0}}]);