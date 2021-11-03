"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2835],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},39130:function(t,e,n){n.d(e,{Z:function(){return N}});var a=n(67294),r=n(73727),i=n(11368),l=n(35096),o=n(84487);const c=(0,a.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))f.call(e,n)&&b(t,n,e[n]);if(k)for(var n of k(e))h.call(e,n)&&b(t,n,e[n]);return t};var N=function(t){var e,n=t,{isNavLink:p,to:b,href:N,activeClassName:v,isActive:_,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=n,O=((t,e)=>{var n={};for(var a in t)f.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&k)for(var a of k(t))e.indexOf(a)<0&&h.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:T}=(0,u.C)(),C=(0,a.useContext)(c),j=b||N,E=(0,l.Z)(j),Z=null==j?void 0:j.replace("pathname://","");let D=void 0!==Z?(L=Z,x&&(t=>t.startsWith("/"))(L)?T(L):L):void 0;var L;D&&E&&(D=(0,s.applyTrailingSlash)(D,{trailingSlash:w,baseUrl:P}));const M=(0,a.useRef)(!1),S=p?r.OL:r.rU,U=o.Z.canUseIntersectionObserver,I=(0,a.useRef)();(0,a.useEffect)((()=>(!U&&E&&null!=D&&window.docusaurus.prefetch(D),()=>{U&&I.current&&I.current.disconnect()})),[I,D,U,E]);const W=null!==(e=null==D?void 0:D.startsWith("#"))&&void 0!==e&&e,B=!D||!E||W;return D&&E&&!W&&!y&&C.collectLink(D),B?a.createElement("a",g(g({href:D},j&&!E&&{target:"_blank",rel:"noopener noreferrer"}),O)):a.createElement(S,g((A=g({},O),d(A,m({onMouseEnter:()=>{M.current||null==D||(window.docusaurus.preload(D),M.current=!0)},innerRef:t=>{var e,n;U&&t&&E&&(e=t,n=()=>{null!=D&&window.docusaurus.prefetch(D)},I.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(I.current.unobserve(e),I.current.disconnect(),n())}))})),I.current.observe(e))},to:D||""}))),p&&{isActive:_,activeClassName:v}));var A}},35096:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){n.d(e,{C:function(){return i},Z:function(){return l}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+l:l}(e,t,n,a)}}function l(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),i="/"===r||r===a?r:(l=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(r,i)}},67023:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},25913:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return k},contentTitle:function(){return f},metadata:function(){return h},toc:function(){return b},default:function(){return N}});var a=n(3905),r=n(39130),i=n(43861),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&d(t,n,e[n]);if(u)for(var n of u(e))p.call(e,n)&&d(t,n,e[n]);return t};const k={title:"TouchCalibration"},f=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_touch_calibration",id:"api/classes/classtouchgfx_1_1_touch_calibration",isDocsHomePage:!1,title:"TouchCalibration",description:"Calibrates a touch coordinate.",source:"@site/docs/api/classes/classtouchgfx_1_1_touch_calibration.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_touch_calibration",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_touch_calibration",tags:[],version:"current",frontMatter:{title:"TouchCalibration"},sidebar:"docs",previous:{title:"TouchButtonTrigger",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_touch_button_trigger"},next:{title:"TouchController",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_touch_controller"}},b=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"TouchCalibration",id:"touchcalibration",children:[],level:3},{value:"setCalibrationMatrix",id:"setcalibrationmatrix",children:[],level:3},{value:"translatePoint",id:"translatepoint",children:[],level:3}],level:2}],g={toc:b};function N(t){var e,n=t,{components:l}=n,d=((t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=m(m({},g),d),o(e,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," Calibrates a touch coordinate.\nClass TouchCalibraiton is responsible for translating coordinates (",(0,a.kt)("a",m({parentName:"p"},{href:"structtouchgfx_1_1_point"}),"Point"),") based on matrix of calibration values. "),(0,a.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-touchcalibration",mdxType:"Link"},"TouchCalibration")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-setcalibrationmatrix",mdxType:"Link"},"setCalibrationMatrix")),"(const ",(0,a.kt)("a",m({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," ",(0,a.kt)("em",{parentName:"td"}," ref, const ",(0,a.kt)("a",m({parentName:"em"},{href:"structtouchgfx_1_1_point"}),"Point")," ")," scr)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Initializes the calibration matrix based on reference and measured values.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-translatepoint",mdxType:"Link"},"translatePoint")),"(",(0,a.kt)("a",m({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," & p)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Translates the specified point using the matrix.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_touch_calibration#function-touchcalibration",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"touchcalibration"}),"TouchCalibration"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-touchcalibration",mdxType:"Link"},"TouchCalibration")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_touch_calibration#function-setcalibrationmatrix",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"setcalibrationmatrix"}),"setCalibrationMatrix"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-setcalibrationmatrix",mdxType:"Link"},"setCalibrationMatrix")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",m({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," *"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ref ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",m({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," *"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"scr"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes the calibration matrix based on reference and measured values. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ref"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Pointer to array of three reference points.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"scr"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Pointer to array of three measured points."))))))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_touch_calibration#function-translatepoint",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"translatepoint"}),"translatePoint"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_calibration#function-translatepoint",mdxType:"Link"},"translatePoint")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"structtouchgfx_1_1_point"}),"Point")," &"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"p"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Translates the specified point using the matrix. "),(0,a.kt)("p",null,"If matrix has not been initialized, p is not modified."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"p"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The point to translate."))))))))}N.isMDXComponent=!0}}]);