(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6439],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,l(l({ref:e},s),{},{components:n})):r.createElement(h,l({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return N}});var r=n(67294),a=n(73727),o=n(11368),l=n(35096),i=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,g=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||(e={}))f.call(e,n)&&g(t,n,e[n]);if(h)for(var n of h(e))k.call(e,n)&&g(t,n,e[n]);return t};var N=function(t){var e,n=t,{isNavLink:p,to:g,href:N,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=n,w=((t,e)=>{var n={};for(var r in t)f.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&h)for(var r of h(t))e.indexOf(r)<0&&k.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:T}}=(0,o.Z)(),{withBaseUrl:P}=(0,u.C)(),j=(0,r.useContext)(c),C=g||N,L=(0,l.Z)(C),E=null==C?void 0:C.replace("pathname://","");let Z=void 0!==E?(D=E,x&&(t=>t.startsWith("/"))(D)?P(D):D):void 0;var D;Z&&L&&(Z=(0,s.applyTrailingSlash)(Z,{trailingSlash:O,baseUrl:T}));const S=(0,r.useRef)(!1),U=p?a.OL:a.rU,A=i.Z.canUseIntersectionObserver;let M;(0,r.useEffect)((()=>(!A&&L&&null!=Z&&window.docusaurus.prefetch(Z),()=>{A&&M&&M.disconnect()})),[Z,A,L]);const I=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,W=!Z||!L||I;return Z&&L&&!I&&!v&&j.collectLink(Z),W?r.createElement("a",b(b({href:Z},C&&!L&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(U,b((B=b({},w),d(B,m({onMouseEnter:()=>{S.current||null==Z||(window.docusaurus.preload(Z),S.current=!0)},innerRef:t=>{var e,n;A&&t&&L&&(e=t,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},M=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.unobserve(e),M.disconnect(),n())}))})),M.observe(e))},to:Z||""}))),p&&{isActive:y,activeClassName:_}));var B}},35096:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return o},Z:function(){return l}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return o?t+l:l}(e,t,n,r)}}function l(t,e={}){const{withBaseUrl:n}=o();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[a]=t.split(/[#?]/),o="/"===a||a===r?a:(l=a,n?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(a,o)}},67023:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},21149:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return h},contentTitle:function(){return f},metadata:function(){return k},toc:function(){return g},default:function(){return N}});var r=n(3905),a=n(31217),o=n(43861),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&d(t,n,e[n]);if(u)for(var n of u(e))p.call(e,n)&&d(t,n,e[n]);return t};const h={title:"NoTouchController"},f=void 0,k={unversionedId:"api/classes/classtouchgfx_1_1_no_touch_controller",id:"api/classes/classtouchgfx_1_1_no_touch_controller",isDocsHomePage:!1,title:"NoTouchController",description:"Empty TouchController implementation which does nothing.",source:"@site/docs/api/classes/classtouchgfx_1_1_no_touch_controller.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_no_touch_controller",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_no_touch_controller",version:"current",frontMatter:{title:"NoTouchController"},sidebar:"docs",previous:{title:"NoDMA",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_no_d_m_a"},next:{title:"NoTransition",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_no_transition"}},g=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_touch_controller">TouchController</Link>',id:"public-functions-inherited-from-touchcontroller",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"init",id:"init",children:[]},{value:"sampleTouch",id:"sampletouch",children:[]}]}],b={toc:g};function N(t){var e,n=t,{components:l}=n,d=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=m(m({},b),d),i(e,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null," Empty TouchController implementation which does nothing.\nUse this if your display does not have touch input capabilities. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller",mdxType:"Link"},"TouchController")),(0,r.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"right"})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_no_touch_controller#function-init",mdxType:"Link"},"init")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Initializes touch controller.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_no_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),"(int32_t & x, int32_t & y)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Checks whether the touch screen is being touched, and if so, what coordinates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",m({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,r.kt)("h3",m({},{id:"public-functions-inherited-from-touchcontroller"}),"Public Functions inherited from ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller",mdxType:"Link"},"TouchController")),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"right"})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"Link"},"~TouchController")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,r.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_touch_controller"}),"TouchController")," class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"right"})),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(o.Z,{url:"classtouchgfx_1_1_no_touch_controller#function-init",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"init"}),"init"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_no_touch_controller#function-init",mdxType:"Link"},"init")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Initializes touch controller. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"Link"},"touchgfx::TouchController::init")))),(0,r.kt)(o.Z,{url:"classtouchgfx_1_1_no_touch_controller#function-sampletouch",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",m({},{id:"sampletouch"}),"sampleTouch"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_no_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"int32_t &"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"x ,"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"int32_t &"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})),(0,r.kt)("td",m({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Checks whether the touch screen is being touched, and if so, what coordinates. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The x position of the touch.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The y position of the touch."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"True if a touch has been detected, otherwise false. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::TouchController::sampleTouch")))))}N.isMDXComponent=!0}}]);