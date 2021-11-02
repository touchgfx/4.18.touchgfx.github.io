(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7022],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(u,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return N}});var r=n(67294),a=n(73727),l=n(11368),o=n(35096),i=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))f.call(e,n)&&b(t,n,e[n]);if(m)for(var n of m(e))g.call(e,n)&&b(t,n,e[n]);return t};var N=function(t){var e,n=t,{isNavLink:p,to:b,href:N,activeClassName:v,isActive:y,"data-noBrokenLinkCheck":_,autoAddBaseUrl:x=!0}=n,w=((t,e)=>{var n={};for(var r in t)f.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&g.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:j}}=(0,l.Z)(),{withBaseUrl:P}=(0,c.C)(),C=(0,r.useContext)(u),T=b||N,Z=(0,o.Z)(T),L=null==T?void 0:T.replace("pathname://","");let B=void 0!==L?(D=L,x&&(t=>t.startsWith("/"))(D)?P(D):D):void 0;var D;B&&Z&&(B=(0,s.applyTrailingSlash)(B,{trailingSlash:O,baseUrl:j}));const E=(0,r.useRef)(!1),S=p?a.OL:a.rU,U=i.Z.canUseIntersectionObserver,I=(0,r.useRef)();(0,r.useEffect)((()=>(!U&&Z&&null!=B&&window.docusaurus.prefetch(B),()=>{U&&I.current&&I.current.disconnect()})),[I,B,U,Z]);const M=null!==(e=null==B?void 0:B.startsWith("#"))&&void 0!==e&&e,A=!B||!Z||M;return B&&Z&&!M&&!_&&C.collectLink(B),A?r.createElement("a",h(h({href:B},T&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(S,h((R=h({},w),d(R,k({onMouseEnter:()=>{E.current||null==B||(window.docusaurus.preload(B),E.current=!0)},innerRef:t=>{var e,n;U&&t&&Z&&(e=t,n=()=>{null!=B&&window.docusaurus.prefetch(B)},I.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(I.current.unobserve(e),I.current.disconnect(),n())}))})),I.current.observe(e))},to:B||""}))),p&&{isActive:y,activeClassName:v}));var R}},35096:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return o}});var r=n(11368),a=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const o=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+o:o}(e,t,n,r)}}function o(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[a]=t.split(/[#?]/),l="/"===a||a===r?a:(o=a,n?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(a,l)}},67023:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},9717:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return b},default:function(){return N}});var r=n(3905),a=n(31217),l=n(43861),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&d(t,n,e[n]);if(c)for(var n of c(e))p.call(e,n)&&d(t,n,e[n]);return t};const m={title:"ButtonController"},f=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_button_controller",id:"api/classes/classtouchgfx_1_1_button_controller",isDocsHomePage:!1,title:"ButtonController",description:"Interface for sampling external key events.",source:"@site/docs/api/classes/classtouchgfx_1_1_button_controller.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_button_controller",permalink:"/4.18/ja/docs/api/classes/classtouchgfx_1_1_button_controller",tags:[],version:"current",frontMatter:{title:"ButtonController"},sidebar:"docs",previous:{title:"Button",permalink:"/4.18/ja/docs/api/classes/classtouchgfx_1_1_button"},next:{title:"Buttons",permalink:"/4.18/ja/docs/api/classes/classtouchgfx_1_1_buttons"}},b=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"init",id:"init",children:[],level:3},{value:"reset",id:"reset",children:[],level:3},{value:"sample",id:"sample",children:[],level:3},{value:"~ButtonController",id:"buttoncontroller",children:[],level:3}],level:2}],h={toc:b};function N(t){var e,n=t,{components:o}=n,d=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&c)for(var r of c(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=k(k({},h),d),i(e,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Interface for sampling external key events. "),(0,r.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:"right"})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_button_controller#function-init",mdxType:"Link"},"init")),"() =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Initializes button controller.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_button_controller#function-reset",mdxType:"Link"},"reset")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Resets button controller.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_button_controller#function-sample",mdxType:"Link"},"sample")),"(uint8_t & key) =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Sample external key events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_button_controller#function-~buttoncontroller",mdxType:"Link"},"~ButtonController")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_button_controller"}),"ButtonController")," class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_button_controller#function-init",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"init"}),"init"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_button_controller#function-init",mdxType:"Link"},"init")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"=0"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Initializes button controller. "))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_button_controller#function-reset",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"reset"}),"reset"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_button_controller#function-reset",mdxType:"Link"},"reset")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Resets button controller. "),(0,r.kt)("p",null,"Does nothing in the default implementation. "))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_button_controller#function-sample",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"sample"}),"sample"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_button_controller#function-sample",mdxType:"Link"},"sample")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"uint8_t &"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"key"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Sample external key events. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"key"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Output parameter that will be set to the key value if a keypress was detected."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,'True if a keypress was detected and the "key" parameter is set to a value. ')))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_button_controller#function-~buttoncontroller",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"buttoncontroller"}),"~ButtonController"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_button_controller#function-~buttoncontroller",mdxType:"Link"},"~ButtonController")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Finalizes an instance of the ",(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_button_controller"}),"ButtonController")," class. "))))}N.isMDXComponent=!0}}]);