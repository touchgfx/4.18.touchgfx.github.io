(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3488],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){"use strict";var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},2083:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){"use strict";var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(67294),r=n(73727),i=n(11368),l=n(35096),o=n(84487);const u=(0,a.createContext)({collectLink:()=>{}});var s=n(25026),d=n(67023),p=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(g)for(var n of g(t))k.call(t,n)&&f(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:p,to:f,href:v,activeClassName:b,isActive:y,"data-noBrokenLinkCheck":w,autoAddBaseUrl:E=!0}=n,O=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&g)for(var a of g(e))t.indexOf(a)<0&&k.call(e,a)&&(n[a]=e[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:A}}=(0,i.Z)(),{withBaseUrl:T}=(0,s.C)(),_=(0,a.useContext)(u),C=f||v,P=(0,l.Z)(C),I=null==C?void 0:C.replace("pathname://","");let M=void 0!==I?(S=I,E&&(e=>e.startsWith("/"))(S)?T(S):S):void 0;var S;M&&P&&(M=(0,d.applyTrailingSlash)(M,{trailingSlash:x,baseUrl:A}));const j=(0,a.useRef)(!1),B=p?r.OL:r.rU,L=o.Z.canUseIntersectionObserver;let D;(0,a.useEffect)((()=>(!L&&P&&null!=M&&window.docusaurus.prefetch(M),()=>{L&&D&&D.disconnect()})),[M,L,P]);const G=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,U=!M||!P||G;return M&&P&&!G&&!w&&_.collectLink(M),U?a.createElement("a",N(N({href:M},C&&!P&&{target:"_blank",rel:"noopener noreferrer"}),O)):a.createElement(B,N((Z=N({},O),c(Z,m({onMouseEnter:()=>{j.current||null==M||(window.docusaurus.preload(M),j.current=!0)},innerRef:e=>{var t,n;L&&e&&P&&(t=e,n=()=>{null!=M&&window.docusaurus.prefetch(M)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:M||""}))),p&&{isActive:y,activeClassName:b}));var Z}},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:a}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[r]=e.split(/[#?]/),i="/"===r||r===a?r:(l=r,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(r,i)}},67023:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},4251:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return N},contentTitle:function(){return v},metadata:function(){return b},toc:function(){return y},default:function(){return E}});var a=n(3905),r=n(44035),i=n(29415),l=n(37793),o=n(2083),u=n(31217),s=n(22425),d=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&k(e,n,t[n]);return e};const N={id:"gauge",title:"\u5100\u9336"},v=void 0,b={unversionedId:"development/ui-development/ui-components/miscellaneous/gauge",id:"development/ui-development/ui-components/miscellaneous/gauge",isDocsHomePage:!1,title:"\u5100\u9336",description:"\u5100\u9336(Gauge )\u662f\u4e00\u7a2e\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u7e6a\u88fd\u6307\u6a19\u548c\u5f27\u5f62\uff0c\u7528\u65bc\u6307\u793a\u6307\u5b9a\u7bc4\u570d\u5167\u7684\u7d66\u5b9a\u503c\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/gauge.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/gauge",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/miscellaneous/gauge",version:"current",frontMatter:{id:"gauge",title:"\u5100\u9336"},sidebar:"docs",previous:{title:"\u52d5\u614b\u5716\u5f62",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/miscellaneous/dynamic-graph"},next:{title:"Video",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/miscellaneous/video"}},y=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",children:[]},{value:"\u5c6c\u6027",id:"properties",children:[]},{value:"\u4ea4\u4e92",id:"interactions",children:[{value:"\u64cd\u4f5c",id:"actions",children:[]},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",children:[]}]},{value:"\u6027\u80fd",id:"performance",children:[]},{value:"\u7bc4\u4f8b",id:"examples",children:[{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",children:[]},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",children:[]},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",children:[]}]},{value:"API\u53c3\u8003",id:"api-reference",children:[]}],w={toc:y};function E(e){var t,n=e,{components:d}=n,k=((e,t)=>{var n={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},w),k),p(t,c({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u5100\u9336(Gauge )\u662f\u4e00\u7a2e\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u7e6a\u88fd\u6307\u6a19\u548c\u5f27\u5f62\uff0c\u7528\u65bc\u6307\u793a\u6307\u5b9a\u7bc4\u570d\u5167\u7684\u7d66\u5b9a\u503c\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u5100\u9336"),(0,a.kt)("h2",f({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,a.kt)("p",null,"\u5100\u9336\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Miscellaneous\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5100\u9336"),(0,a.kt)("h2",f({},{id:"properties"}),"\u5c6c\u6027"),(0,a.kt)("p",null,"TouchGFX Designer\u4e2d\u5100\u9336\u7684\u5c6c\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,a.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," and ",(0,a.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,a.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"These styles contain images that are free to use"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Background")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Background Image")," specifies the image to be used as background.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Background offset")," specifies the x- and y-axis offset of the selected background image.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u5100\u9336")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Rotation Center")," specifies the x- and y-axis point in the widget at which the needle and arc should rotate.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Start and End Angle")," specify the start and end angle of the needle and arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Value Range")," specifies the minimum and maximum integer values of the indicator.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Initial Value")," specifies the initial value of the gauge.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animation")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Animate Movement")," specifies if animation of the needle and arc are enabled.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Easing")," and ",(0,a.kt)("em",{parentName:"td"},"Easing Option")," specify the easing equation used.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Needle")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Needle Image")," specifies the image to be used as background.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Needle Rotation Center")," specifies the position in the needle image around which it will rotate.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Moving Rendering Algorithm")," specifies the algorithm used to draw the needle image while moving to new value.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Steady Rendering Algorithm")," specifies the algorithm used to draw the needle image while stationary.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Arc")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Use Arc")," specifies whether or not to use an arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Image/Color")," specifies either a color or an image to use as fill for the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Set Arc position"),"  specifies whether or not to override the default arc size and position.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"By default arc is placed in 0, 0 and has the same size as the gauge itself. \u7576\u60a8\u60f3\u4f7f\u7528\u5716\u50cf\u4f5c\u70ba\u5f27\u7dda\u7e6a\u88fd\u5668\uff0c\u4f46\u662f\u5f27\u7dda\uff08\u5716\u50cf\uff09\u7684\u5c3a\u5bf8\u5c0f\u65bc\u5100\u9336\u7684\u5c3a\u5bf8\u6642\uff0c\u8986\u84cb\u9ed8\u8a8d\u8a2d\u7f6e\u662f\u6709\u7528\u7684\u3002 \u56e0\u6b64\uff0c\u53ef\u4ee5\u5c07\u5716\u50cf\u4fee\u526a\u70ba\u6240\u9700\u7684\u5c3a\u5bf8\u4e26\u5c07\u5f27\u7dda\u7f6e\u65bc\u7279\u5b9a\u7684\u4f4d\u7f6e\uff0c\u800c\u4e0d\u662f\u63a1\u7528\u4e00\u5e45\u5927\u578b\u5716\u50cf\uff08\u5c3a\u5bf8\u8207\u5100\u9336\u76f8\u540c\uff0c\u5e36\u8a31\u591a\u900f\u660e\u7684\u7dda\u689d\uff09\u3002 The arc will still follow the same rotation center."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Arc Position X and Y")," specifies the x- and y-axis position of the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Arc Width and Height")," specifies the size of the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Radius")," specifies the radius of the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Line Width")," specifies the line width of the arc. ",(0,a.kt)("em",{parentName:"td"},"If the value is 0, the arc is as large as the radius."),(0,a.kt)("br",null),(0,a.kt)("br",null)," ",(0,a.kt)("em",{parentName:"td"},"Cap Style")," specifies line ending style of the arc. ",(0,a.kt)("em",{parentName:"td"},"If the line width is set to 0, the capstyle selected will have no effect."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Arc on top of Needle")," specifies whether or not the arc is on top of the needle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget. ",(0,a.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,a.kt)("em",{parentName:"td"},"Alpha")," value.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," values.")))),(0,a.kt)("p",null,"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u5f27\u7dda\u7684\u4f4d\u7f6e\u70ba\uff080,0\uff09\uff0c\u4e26\u4e14\u8207\u5100\u9336\u672c\u8eab\u7684\u5927\u5c0f\u76f8\u540c\u3002 \u7576\u60a8\u60f3\u4f7f\u7528\u5716\u50cf\u4f5c\u70ba\u5f27\u7dda\u7e6a\u88fd\u5668\uff0c\u4f46\u662f\u5f27\u7dda\uff08\u5716\u50cf\uff09\u7684\u5c3a\u5bf8\u5c0f\u65bc\u5100\u9336\u7684\u5c3a\u5bf8\u6642\uff0c\u8986\u84cb\u9ed8\u8a8d\u8a2d\u7f6e\u662f\u6709\u7528\u7684\u3002 \u56e0\u6b64\uff0c\u53ef\u4ee5\u5c07\u5716\u50cf\u4fee\u526a\u70ba\u6240\u9700\u7684\u5c3a\u5bf8\u4e26\u5c07\u5f27\u7dda\u7f6e\u65bc\u7279\u5b9a\u7684\u4f4d\u7f6e\uff0c\u800c\u4e0d\u662f\u63a1\u7528\u4e00\u5e45\u5927\u578b\u5716\u50cf\uff08\u5c3a\u5bf8\u8207\u5100\u9336\u76f8\u540c\uff0c\u5e36\u8a31\u591a\u900f\u660e\u7684\u7dda\u689d\uff09\u3002 \u5f27\u7dda\u5c07\u6cbf\u7528\u76f8\u540c\u7684\u65cb\u8f49\u4e2d\u5fc3\u3002"),(0,a.kt)("h2",f({},{id:"interactions"}),"\u4ea4\u4e92"),(0,a.kt)("p",null,"TouchGFX Designer\u4e2d\u7684\u5100\u9336\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,a.kt)("h3",f({},{id:"actions"}),"\u64cd\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c0f\u90e8\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Set value")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\u8a2d\u5b9a\u5100\u9336\u7684\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Update value")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\u7528\u6301\u7e8c\u6642\u9593\u66f4\u65b0\u5100\u9336\u7684\u503c\u3002")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,a.kt)("h3",f({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u89f8\u767c\u689d\u4ef6")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge value set")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\u5728\u66f4\u65b0\u52d5\u756b\u671f\u9593\uff0c\u5c07\u70ba\u5373\u6642\u66f4\u65b0\u548c\u4e2d\u9593\u6b65\u9a5f\u800c\u89f8\u767c\u3002 \u53ea\u6709\u5728\u65b0\u503c\u8207\u7576\u524d\u503c\u4e0d\u540c\u6642\u624d\u89f8\u767c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge value updated")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\u5c07\u5728\u66f4\u65b0\u52d5\u756b\u5b8c\u6210\u6642\u89f8\u767c\u3002 \u5982\u679c\u66f4\u65b0\u7684\u6301\u7e8c\u6642\u9593\u70ba0\uff0c\u66f4\u65b0\u5c07\u7acb\u5373\u767c\u751f\uff0c\u4f46\u4ecd\u7136\u6703\u89f8\u767c\u6b64\u4e8b\u4ef6\u3002")))),(0,a.kt)("h2",f({},{id:"performance"}),"\u6027\u80fd"),(0,a.kt)("p",null,"\u5100\u9336\u5305\u62ec",(0,a.kt)("a",f({parentName:"p"},{href:"../images/image"}),"\u5716\u50cf"),"\u3001",(0,a.kt)("a",f({parentName:"p"},{href:"../shapes/circle"}),"\u5713"),"\u3001\u4ee5\u53ca",(0,a.kt)("a",f({parentName:"p"},{href:"../images/texture-mapper"}),"\u7d0b\u7406\u6620\u5c04\u5668"),"\u3002"),(0,a.kt)("p",null,"\u5713\u548c\u7d0b\u7406\u6620\u5c04\u5668\u5143\u4ef6\u662fMCU\u8cc7\u6e90\u5bc6\u96c6\u578b\u5143\u4ef6\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u81fa\u4e0a\uff0c\u6703\u5c07\u5100\u9336\u8996\u70ba\u8981\u6c42\u9ad8\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,a.kt)("p",null,"\u95dc\u65bc\u6587\u5b57\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,a.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,a.kt)("h2",f({},{id:"examples"}),"\u7bc4\u4f8b"),(0,a.kt)("h3",f({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u5728\u751f\u6210\u7684\u8996\u5716\u57fa\u985e\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bDesigner\u662f\u5982\u4f55\u5275\u5efa\u5100\u9336\u7684\u3002"),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"MainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    gauge.setBackground(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_BACKGROUND_STYLE_01_ID));\n    gauge.setPosition(115, 11, 251, 251);\n    gauge.setCenter(125, 125);\n    gauge.setStartEndAngle(-85, 85);\n    gauge.setRange(0, 100);\n    gauge.setValue(0);\n    gauge.setEasingEquation(touchgfx::EasingEquations::elasticEaseOut);\n    gauge.setNeedle(BITMAP_BLUE_NEEDLES_ORIGINAL_GAUGE_NEEDLE_STYLE_01_ID, 11, 55);\n    gauge.setMovingNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setSteadyNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setArcVisible();\n    gaugePainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_FILL_STYLE_01_ID));\n    gauge.getArc().setPainter(gaugePainter);\n    gauge.getArc().setRadius(94);\n    gauge.getArc().setLineWidth(14);\n    gauge.getArc().setCapPrecision(180);\n    gauge.setArcPosition(28, 30, 196, 88);\n\n    add(gauge);\n}\n')),(0,a.kt)(l.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528Gauge\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,a.kt)(o.Z,{mdxType:"InlineCode"},"gauge.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,a.kt)("h3",f({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u5982\u8981\u8a2d\u7f6e\u5100\u9336\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setValue(int value)"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setValue(int value)"),"\u5c07\u7acb\u5373\u79fb\u52d5\u6307\u6a19\u548c\u5f27\u5230\u65b0\u503c\uff0c\u4f46\u6c92\u6709\u52d5\u756b\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)"),"\u6307\u91dd\u548c\u5f27\u5728\u5b9a\u7fa9\u7684\u6301\u7e8c\u6642\u9593\u5167\u4ee5\u52d5\u756b\u65b9\u5f0f\u6ef4\u7b54\u3001\u6ef4\u7b54\u5730\u79fb\u52d5\u5230\u65b0\u503c\u3002 \u5982\u679c\u6301\u7e8c\u6642\u9593\u70ba0\uff0c\u66f4\u65b0\u5c07\u7acb\u5373\u9032\u884c\u3002 \u6240\u7528\u7684\u52d5\u756b\u5c07\u662f\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setEasingEquation(EasingEquation easingEquation)"),"\u5728\u5100\u9336\u4e0a\u5b9a\u7fa9\u7684"),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"MainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/MainView.hpp>\n\nMainView::MainView()\n{\n    tickCounter = 0;\n}\n\nvoid MainView::handleTickEvent()\n{\n    tickCounter++;\n\n    // Change value every 120 tick.\n    if (tickCounter % 120 == 0)\n    {\n      // Insert data point\n      gauge.updateValue(/* new integer value */, 30); // animates needle and arc to new value with a duration of 30 ticks\n    }\n}\n")),(0,a.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u5100\u9336\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u7bc4\u672c\u4e4b\u4e00\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/gauge-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5100\u9336UI\u7bc4\u672c"),(0,a.kt)("h2",f({},{id:"api-reference"}),"API\u53c3\u8003"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(u.Z,{to:"../../../../api/classes/classtouchgfx_1_1_gauge",mdxType:"Link"},"\u5100\u9336\u985e\u7684API\u53c3\u8003"))))}E.isMDXComponent=!0}}]);