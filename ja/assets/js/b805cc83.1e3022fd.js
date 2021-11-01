(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7084],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(67294),i=n(73727),a=n(11368),o=n(35096),l=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&b(e,n,t[n]);return e};var k=function(e){var t,n=e,{isNavLink:p,to:b,href:k,activeClassName:y,isActive:w,"data-noBrokenLinkCheck":C,autoAddBaseUrl:O=!0}=n,M=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:S,baseUrl:T}}=(0,a.Z)(),{withBaseUrl:j}=(0,c.C)(),x=(0,r.useContext)(u),E=b||k,A=(0,o.Z)(E),F=null==E?void 0:E.replace("pathname://","");let P=void 0!==F?(N=F,O&&(e=>e.startsWith("/"))(N)?j(N):N):void 0;var N;P&&A&&(P=(0,s.applyTrailingSlash)(P,{trailingSlash:S,baseUrl:T}));const D=(0,r.useRef)(!1),R=p?i.OL:i.rU,Z=l.Z.canUseIntersectionObserver;let H;(0,r.useEffect)((()=>(!Z&&A&&null!=P&&window.docusaurus.prefetch(P),()=>{Z&&H&&H.disconnect()})),[P,Z,A]);const L=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,U=!P||!A||L;return P&&A&&!L&&!C&&x.collectLink(P),U?r.createElement("a",v(v({href:P},E&&!A&&{target:"_blank",rel:"noopener noreferrer"}),M)):r.createElement(R,v((_=v({},M),d(_,h({onMouseEnter:()=>{D.current||null==P||(window.docusaurus.preload(P),D.current=!0)},innerRef:e=>{var t,n;Z&&e&&A&&(t=e,n=()=>{null!=P&&window.docusaurus.prefetch(P)},H=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(H.unobserve(t),H.disconnect(),n())}))})),H.observe(t))},to:P||""}))),p&&{isActive:w,activeClassName:y}));var _}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),a="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(i,a)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},89214:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return v},default:function(){return y}});var r=n(3905),i=n(44035),a=n(29415),o=n(31217),l=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&h(e,n,t[n]);return e};const f={id:"02-cpu-running",title:"2. CPU\u52d5\u4f5c",sidebar_label:"2. CPU\u52d5\u4f5c"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/02-cpu-running",id:"development/board-bring-up/how-to/02-cpu-running",isDocsHomePage:!1,title:"2. CPU\u52d5\u4f5c",description:"\u52d5\u6a5f",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/02-cpu-running.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/02-cpu-running",permalink:"/4.18/ja/docs/development/board-bring-up/how-to/02-cpu-running",version:"current",sidebarPosition:2,frontMatter:{id:"02-cpu-running",title:"2. CPU\u52d5\u4f5c",sidebar_label:"2. CPU\u52d5\u4f5c"},sidebar:"docs",previous:{title:"1. \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",permalink:"/4.18/ja/docs/development/board-bring-up/how-to/01-create-project"},next:{title:"3. Display with framebuffer in internal RAM",permalink:"/4.18/ja/docs/development/board-bring-up/how-to/03-display-internal"}},v=[{value:"\u52d5\u6a5f",id:"motivation",children:[]},{value:"\u76ee\u6a19",id:"goal",children:[{value:"\u691c\u8a3c",id:"verification",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"\u4f5c\u696d\u5185\u5bb9",id:"do",children:[{value:"\u30b7\u30b9\u30c6\u30e0\uff65\u30af\u30ed\u30c3\u30af",id:"system-clock",children:[]},{value:"Flash\u3068RAM\u306e\u30b5\u30a4\u30ba\u304a\u3088\u3073\u901f\u5ea6",id:"flash-and-ram-size-and-speed",children:[]},{value:"\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8",id:"linker-script",children:[]},{value:"F7\u304a\u3088\u3073H7\u306e\u30ad\u30e3\u30c3\u30b7\u30e5",id:"cache-on-f7-and-h7",children:[]}]},{value:"\u53c2\u8003\u8cc7\u6599",id:"further-readings",children:[]}],k={toc:v};function y(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),h),u(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"motivation"}),"\u52d5\u6a5f"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\uff65\u30b3\u30a2\u3001\u5185\u8535RAM\u3001Flash\u304c\u76ee\u7684\u3068\u3059\u308b\u30af\u30ed\u30c3\u30af\u901f\u5ea6\u3067\u52d5\u4f5c\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX\u306f\u3001\u3069\u306e\u3088\u3046\u306a\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u901f\u5ea6\u3067\u3082\u52d5\u4f5c\u53ef\u80fd\u3067\u3059\u304c\u3001\u30af\u30ed\u30c3\u30af\u8a2d\u5b9a\u3092\u8aa4\u308b\u3068\u3001\u5fc5\u8981\u306a\u6027\u80fd\u3092\u6e80\u305f\u305b\u306a\u3044\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u5f8c\u306e\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u3067\u306f\u3001\u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306eI2C\u30af\u30ed\u30c3\u30af\u306a\u3069\u3001\u7279\u5b9a\u306e\u30bf\u30a4\u30df\u30f3\u30b0\uff65\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u305d\u306e\u3088\u3046\u306a\u8a2d\u5b9a\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u6b63\u3057\u3044\u901f\u5ea6\u3067\u52d5\u4f5c\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u306a\u3044\u9650\u308a\u3001\u884c\u3048\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"STM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3067\u306f\u30b7\u30b9\u30c6\u30e0\uff65\u30af\u30ed\u30c3\u30af\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u30af\u30ed\u30c3\u30af\u306f\u5206\u5468\u3055\u308c\u3066\u3001FCLK\u30b3\u30a2\uff65\u30af\u30ed\u30c3\u30af\u3084\u3001APB1\u306a\u3069\u306e\u5404\u7a2e\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\uff65\u30af\u30ed\u30c3\u30af\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",m({},{id:"goal"}),"\u76ee\u6a19"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u76ee\u6a19\u306f\u3001\u30af\u30ed\u30c3\u30af\u304c\u9069\u5207\u306b\u8a2d\u5b9a\u3055\u308c\u308b\u3088\u3046\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u3055\u3089\u306b\u3001\u5185\u8535RAM\u304a\u3088\u3073Flash\u304c\u671f\u5f85\u901a\u308a\u306e\u901f\u5ea6\u3067\u52d5\u4f5c\u3057\u3066\u3044\u308b\u3053\u3068\u3082\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"verification"}),"\u691c\u8a3c"),(0,r.kt)("p",null,"\u6b21\u306e\u8868\u306b\u3001\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u691c\u8a3c\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"SystemCoreClock\u5909\u6570\u306e\u5024\u304c\u6b63\u3057\u3044"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u3001\u76ee\u7684\u306e\u5468\u6ce2\u6570\u3067\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5185\u8535RAM\u3092\u8aad\u307f\u51fa\u305b\u308b"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u671f\u5f85\u3055\u308c\u308b\u5bb9\u91cf\u306e\u5185\u8535RAM\u3092\u5099\u3048\u3001\u3053\u308c\u304c\u8aad\u51fa\u3057\u53ef\u80fd\u3067\u3001\u305d\u306e\u901f\u5ea6\u3092\u6e2c\u5b9a\u3067\u304d\u308b\u3053\u3068\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5185\u8535Flash\u3092\u8aad\u307f\u51fa\u305b\u308b"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u671f\u5f85\u3055\u308c\u308b\u5bb9\u91cf\u306e\u5185\u8535Flash\u3092\u5099\u3048\u3001\u3053\u308c\u304c\u8aad\u51fa\u3057\u53ef\u80fd\u3067\u3001\u305d\u306e\u901f\u5ea6\u3092\u6e2c\u5b9a\u3067\u304d\u308b\u3053\u3068\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u7121\u52b9\u5316\u3055\u308c\u3066\u3044\u308b"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u7121\u52b9\u306b\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u30b7\u30b9\u30c6\u30e0\u306e\u8907\u96d1\u3055\u304c\u6291\u3048\u3089\u308c\u3001\u52d5\u4f5c\u304c\u308f\u304b\u308a\u3084\u3059\u304f\u306a\u308b\u3053\u3068\u3002")))),(0,r.kt)("h2",m({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306b\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u524d\u63d0\u6761\u4ef6\u3092\u793a\u3057\u307e\u3059\u3002\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u30af\u30ed\u30c3\u30af\uff65\u30bd\u30fc\u30b9\u306b\u95a2\u3059\u308b\u60c5\u5831\u3002 \u30af\u30ea\u30b9\u30bf\u30eb\u3092\u4f7f\u7528\u3059\u308b\u306e\u304c\u4e00\u822c\u7684\u3067\u3059\u304c\u3001\u305d\u306e\u4ed6\u306e\u65b9\u6cd5\u3082\u53ef\u80fd\u3067\u3059\u3002")),(0,r.kt)("h2",m({},{id:"do"}),"\u4f5c\u696d\u5185\u5bb9"),(0,r.kt)("p",null,"\u3053\u3053\u304b\u3089\u306f\u3001\u5fc5\u8981\u306a\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u5468\u6ce2\u6570\u3092\u5f97\u308b\u305f\u3081\u306b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30af\u30ed\u30c3\u30af\u8a2d\u5b9a\u3092\u8abf\u6574\u3059\u308b\u30b9\u30c6\u30c3\u30d7\u3092\u9032\u3081\u3066\u3044\u304d\u307e\u3059\u3002 \u305d\u306e\u5f8c\u3001\u5185\u8535Flash\u306e\u8aad\u51fa\u3057\u901f\u5ea6\u306e\u6e2c\u5b9a\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"system-clock"}),"\u30b7\u30b9\u30c6\u30e0\uff65\u30af\u30ed\u30c3\u30af"),(0,r.kt)("p",null,'In STM32CubeMX click on the "Clock Configuration" tab. \u4f7f\u7528\u3059\u308b\u7279\u5b9a\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u30af\u30ed\u30c3\u30af\uff65\u30c4\u30ea\u30fc\u306e\u6982\u8981\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002'),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u30af\u30ed\u30c3\u30af\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001\u30af\u30ed\u30c3\u30af\uff65\u30bd\u30fc\u30b9\u3068\u3057\u3066HSI\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u591a\u304f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u5916\u90e8\u30af\u30ea\u30b9\u30bf\u30eb\u3092\u4f7f\u7528\u3057\u307e\u3059\u304c\u3001\u305d\u306e\u5834\u5408\u306fHSE\u3092\u9069\u5207\u306a\u5206\u5468\u56de\u8def(/M) \u3084\u9013\u500d\u56de\u8def(/N) \u3068\u3068\u3082\u306b\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30af\u30ed\u30c3\u30af\u8a2d\u5b9a\u306b\u95a2\u3059\u308b\u30a2\u30c9\u30d0\u30a4\u30b9\u306f\u3001\u672c\u30ac\u30a4\u30c9\u306e\u5bfe\u8c61\u5916\u3067\u3059\u3002 After you have changed the clock configuration you must regenerate the project in STM32CubeMX (click Generate Code in upper right corner)."),(0,r.kt)("p",null,"\u30b3\u30a2\uff65\u30af\u30ed\u30c3\u30af(HCLK) \u306f\u3001\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306b\u3088\u308a\u3001\u5b9f\u884c\u6642\u306b\u8a08\u7b97\u3055\u308c\u3001\u5909\u6570\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u5909\u6570\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3059\u308c\u3070\u3001\u30af\u30ed\u30c3\u30af\uff65\u30b5\u30a4\u30af\u30eb\u6570\u3068\u79d2\u6570\u3084\u8d77\u52d5\u30bf\u30a4\u30de\u306a\u3069\u306e\u9593\u306e\u6b63\u78ba\u306a\u5909\u63db\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002 \u5909\u6570\u3092\u518d\u8a08\u7b97\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("em",{parentName:"p"},"SystemCoreClockUpdate()"),"\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 Call\u6587\u306f\u3001main.c(\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\uff65\u30bb\u30af\u30b7\u30e7\u30f3)\u306b\u633f\u5165\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-02.png",noShadow:!1,width:"600",mdxType:"Figure"},"SystemCoreClockUpdate"),(0,r.kt)("p",null,"\u305d\u306e\u95a2\u6570\u306e\u6700\u5f8c\u306b\u30d6\u30ec\u30fc\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u8a2d\u5b9a\u3057\u3066\u304a\u3051\u3070\u3001\u30b3\u30a2\uff65\u30af\u30ed\u30c3\u30af\u3092\u78ba\u8a8d(\u8a2d\u5b9a\u306b\u5fdc\u3058\u3066) \u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-03.png",noShadow:!1,width:"600",mdxType:"Figure"},"SystemCoreClock"),(0,r.kt)("p",null,"\u3082\u3046\u4e00\u3064\u306e\u91cd\u8981\u306a\u30c6\u30b9\u30c8\uff65\u30dd\u30a4\u30f3\u30c8\u306f\u30b7\u30b9\u30c6\u30e0\uff65\u30bf\u30a4\u30de\u3067\u3059\u3002 \u3053\u306e\u30bf\u30a4\u30de\u306f\u3001HCLK\u3067\u52d5\u4f5c\u3057\u30011ms\u3054\u3068\u306b\u5272\u8fbc\u307f\u3092\u767a\u751f\u3059\u308b\u3088\u3046\u306b\u5206\u5468\u3055\u308c\u3066\u3044\u307e\u3059\u3002 This timer is used by the STM32Cube Firmware to implement millisecond delays."),(0,r.kt)("p",null,"\u30bf\u30a4\u30de\u306e\u52d5\u4f5c\u306f\u3001main\u306b\u305f\u3068\u3048\u30705\u79d2\u306e\u9045\u5ef6\u3092\u633f\u5165\u3059\u308b\u3053\u3068\u3067\u30c6\u30b9\u30c8\u3067\u304d\u307e\u3059\u3002 \u9045\u5ef6\u6642\u9593\u306f\u30b9\u30c8\u30c3\u30d7\uff65\u30a6\u30a9\u30c3\u30c1\u306a\u3069\u3067\u691c\u8a3c\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-04.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u9045\u5ef6\u306e\u6e2c\u5b9a"),(0,r.kt)("h3",m({},{id:"flash-and-ram-size-and-speed"}),"Flash\u3068RAM\u306e\u30b5\u30a4\u30ba\u304a\u3088\u3073\u901f\u5ea6"),(0,r.kt)("p",null,"\u30b7\u30b9\u30c6\u30e0\uff65\u30bf\u30a4\u30de\u3092\u4f7f\u7528\u3059\u308c\u3070\u3001\u30e1\u30e2\u30ea\u306e\u8aad\u51fa\u3057\u901f\u5ea6\u306e\u78ba\u8a8d\u306f\u7c21\u5358\u3067\u3059\u3002 \u30b7\u30b9\u30c6\u30e0\uff65\u30bf\u30a4\u30de\u306e\u5272\u8fbc\u307f\u306b\u3088\u308a\u30011\u30df\u30ea\u79d2\u3054\u3068\u306b\u5909\u6570\u304c\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002 \u30b3\u30fc\u30c9\u306e\u524d\u5f8c\u3067\u3053\u306e\u5909\u6570\u3092\u8aad\u307f\u51fa\u3059\u3053\u3068\u3067\u3001\u30b3\u30fc\u30c9\u306e\u5b9f\u884c\u6642\u9593\u3092(1ms\u5358\u4f4d\u3067) \u6e2c\u5b9a\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u65b9\u6cd5\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5404\u6240\u3067\u6642\u9593\u3092\u6e2c\u5b9a\u3067\u304d\u307e\u3059\u3002 \u7cbe\u5ea6\u306f\u3001\u305d\u308c\u307b\u3069\u9ad8\u304f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u30aa\u30b7\u30ed\u30b9\u30b3\u30fc\u30d7\u306a\u3069\u306e\u5916\u90e8\u30c7\u30d0\u30a4\u30b9\u306a\u3057\u3067\u6e2c\u5b9a\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u305f\u3081\u306b\u306f\u3001\u307e\u305a\u7d50\u679c\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306e2\u3064\u306evolatile\u5909\u6570\u304c\u5fc5\u8981\u3067\u3059\u3002 \u3053\u3053\u3067\u7d50\u679c\u3092\u4fdd\u5b58\u3057\u306a\u3044\u3068\u3001\u6700\u9069\u5316\u30b3\u30f3\u30d1\u30a4\u30e9\u3067\u6e2c\u5b9a\u7528\u306e\u30b3\u30fc\u30c9\u304c\u524a\u9664\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-05.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u6e2c\u5b9a\u7d50\u679c\u3092\u4fdd\u6301\u3059\u308b\u30b0\u30ed\u30fc\u30d0\u30eb\u306avolatile\u5909\u6570"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306b\u3001Flash\u306e0x08000000\u304b\u30890x08020000\u307e\u3067(128Kb) \u3092\u8aad\u307f\u51fa\u3057\u3001\u305d\u306e\u30b3\u30fc\u30c9\u306e\u6642\u9593\u3092\u6e2c\u5b9a\u3059\u308b\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-06.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u8aad\u51fa\u3057\u30eb\u30fc\u30d7\u306e\u6642\u9593\u6e2c\u5b9a"),(0,r.kt)("p",null,"\u3053\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u306f\u3001\u5404\u7a2e\u30e1\u30e2\u30ea\u306e\u901f\u5ea6\u306e\u691c\u8a3c\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 Once you have created a setup in STM32CubeMX you can measure the read speed and make a note of the result. \u3053\u306e\u6e2c\u5b9a\u306f\u3001\u5f8c\u3067\u7e70\u308a\u8fd4\u3057\u691c\u8a3c\u3067\u304d\u307e\u3059\u3002  \u30e1\u30e2\u30ea\u30d0\u30f3\u30c9\u5e45(kb/s\u5358\u4f4d\u3067\u306e\u8aad\u51fa\u3057\u901f\u5ea6) \u3092\u6e2c\u5b9a\u3059\u308b\u5834\u5408\u306f\u3001\u30c7\u30fc\u30bf\u91cf\u3068\u6e2c\u5b9a\u3055\u308c\u305f\u6642\u9593\u3092\u6bd4\u8f03\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"16MHz\u306eSTM32F429\u3067\u306f\u3001\u30b3\u30fc\u30c9\u306f12ms\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001(\u3053\u306e\u65b9\u6cd5\u306b\u3088\u308b) \u5185\u8535Flash\u306e\u8aad\u51fa\u3057\u901f\u5ea6\u306f\u3001128kb / 0.012s = 10,666kb/s\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u30eb\u30fc\u30d7\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3067\u3001\u5185\u8535Flash\u306e\u5168\u9818\u57df\u304c\u6709\u52b9\u5316\u3055\u308c\u8aad\u51fa\u3057\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u3092\u7c21\u5358\u306b\u691c\u8a3c\u3067\u304d\u307e\u3059\u3002 \u5909\u66f4\u3059\u308b\u306e\u306f\u3001\u958b\u59cb\u30a2\u30c9\u30ec\u30b9\u3068\u7d42\u4e86\u30a2\u30c9\u30ec\u30b9\u3060\u3051\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u5185\u8535RAM\u3082\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002 F429\u306e\u5834\u5408\u3001RAM\u306f\u30a2\u30c9\u30ec\u30b90x20000000\u304b\u3089\u59cb\u307e\u308a\u307e\u3059\u3002 \u30b3\u30a2\u76f4\u7d50\u30e1\u30e2\u30ea\u306f0x10000000\u3067\u3059\u3002 \u4f7f\u7528\u3059\u308b\u7279\u5b9a\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u30c7\u30fc\u30bf\u30b7\u30fc\u30c8\u3067\u3001\u3053\u308c\u3089\u306b\u8a72\u5f53\u3059\u308b\u30e1\u30e2\u30ea\uff65\u30a2\u30c9\u30ec\u30b9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3055\u307e\u3056\u307e\u306a\u30e1\u30e2\u30ea\u306b\u3064\u3044\u3066\u3001\u4f55\u5ea6\u304b\u6e2c\u5b9a\u3092\u884c\u3044\u3001\u7d50\u679c\u3092\u8a18\u9332\u3057\u3066\u304f\u3060\u3055\u3044\u3002 RAM\u306b\u3064\u3044\u3066\u306f\u8aad\u51fa\u3057\u3068\u66f8\u8fbc\u307f\u306e\u4e21\u65b9\u306e\u901f\u5ea6\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",m({},{id:"linker-script"}),"\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8"),(0,r.kt)("p",null,"\u3082\u3046\u4e00\u3064\u306e\u6ce8\u76ee\u3059\u3079\u304d\u3082\u306e\u3068\u3057\u3066\u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u4e0a\u306eRAM\u3068Flash\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u30ea\u30f3\u30ab\u306b\u4f1d\u3048\u307e\u3059\u3002 \u30ea\u30f3\u30ab\uff65\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u3068\u3082\u306bCubeMX\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u307e\u3059\u304c\u3001\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3066\u304a\u304f\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002 \u591a\u304f\u306e\u5834\u5408\u3001\u4eca\u5f8c\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u751f\u3058\u307e\u3059"),(0,r.kt)("h3",m({},{id:"cache-on-f7-and-h7"}),"F7\u304a\u3088\u3073H7\u306e\u30ad\u30e3\u30c3\u30b7\u30e5"),(0,r.kt)("p",null,"Arm Cortex-M7\u30d9\u30fc\u30b9\u306eSTM32F7\u3068STM32H7\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u306f\u3001\u30c7\u30fc\u30bf\u304a\u3088\u3073\u547d\u4ee4\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u5b89\u5b9a\u3057\u305f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u5f97\u3089\u308c\u308b\u307e\u3067\u3001\u5c11\u306a\u304f\u3068\u3082\u30c7\u30fc\u30bf\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u7121\u52b9\u5316\u3057\u3066\u304a\u304f\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002 \u30c7\u30fc\u30bf\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u591a\u304f\u306e\u5834\u5408\u3001\u6027\u80fd\u3092\u5927\u5e45\u306b\u5411\u4e0a\u3055\u305b\u307e\u3059\u304c\u3001\u30c6\u30b9\u30c8\u3092\u8907\u96d1\u306b\u3059\u308b\u8981\u56e0\u306b\u3082\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u5b89\u5b9a\u3057\u305f\u3089\u3001\u30c7\u30fc\u30bf\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u6709\u52b9\u5316\u3057\u3066\u69cb\u3044\u307e\u305b\u3093\u3002 \u305d\u306e\u6bb5\u968e\u306b\u306a\u308c\u3070\u3001\u554f\u984c\u306e\u539f\u56e0\u304c\u30c7\u30fc\u30bf\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u7ba1\u7406\u3067\u3042\u308b\u3053\u3068\u3092\u5bb9\u6613\u306b\u7279\u5b9a\u3067\u304d\u307e\u3059\u3002\u305d\u3046\u3067\u306a\u3051\u308c\u3070\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306f\u6b63\u5e38\u306b\u6a5f\u80fd\u3059\u308b\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30c7\u30fc\u30bf\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u8907\u96d1\u3055\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\uff65\u30b3\u30a2\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5bfe\u3057\u3066\u8aad\u307f\u66f8\u304d\u3092\u884c\u3046\u306e\u306b\u5bfe\u3057\u3001DMA2\u3084LTDC\u306a\u3069\u306e\u30da\u30ea\u30d5\u30a7\u30e9\u30eb\u306f(\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u306f\u306a\u304f) \u30e1\u30e2\u30ea\u304b\u3089\u76f4\u63a5\u8aad\u307f\u51fa\u3059\u3053\u3068\u306b\u8d77\u56e0\u3057\u307e\u3059\u3002 \u305d\u306e\u305f\u3081\u3001\u305f\u3068\u3048\u3070\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3093\u3067\u3082\u3001\u305d\u306e\u30c7\u30fc\u30bf\u306e\u4e00\u90e8\u306f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8868\u793a\u3055\u308c\u306a\u3044\u3088\u3046\u306a\u72b6\u6cc1\u304c\u767a\u751f\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u305d\u306e\u6642\u70b9\u3067\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u304c\u307e\u3060\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3057\u304b\u66f8\u304d\u8fbc\u307e\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001LTDC\u304cRAM\u304b\u3089\u305d\u306e\u30c7\u30fc\u30bf\u3092\u898b\u3064\u3051\u3089\u308c\u306a\u304b\u3063\u305f\u305f\u3081\u3067\u3059\u3002 \u89e3\u6c7a\u7b56\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u7279\u5b9a\u306e\u6642\u70b9\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30d5\u30e9\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u3059\u304c\u3001\u305d\u306e\u3088\u3046\u306a\u51e6\u7406\u306f\u3082\u3063\u3068\u5f8c\u3067\u884c\u3046\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Caching can be disabled/enabled in STM32CubeMX in the System Core section."),(0,r.kt)("h4",m({},{id:"touchgfx-internal-dcache-state-machine"}),"TouchGFX\u5185\u90e8\u306eDCache\u30b9\u30c6\u30fc\u30c8\uff65\u30de\u30b7\u30f3"),(0,r.kt)("p",null,"TouchGFX\u30a8\u30f3\u30b8\u30f3\u306f\u3001\u73fe\u5728\u304a\u3088\u3073\u76f4\u8fd1\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u52d5\u4f5c\u3092\u8a18\u9332\u3057\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"HARDWARE"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"SOFTWARE"),"\u306e2\u3064\u306e\u72b6\u614b\u304c\u3042\u308a\u307e\u3059\u3002 \u63cf\u753b\u52d5\u4f5c\u306e\u5927\u90e8\u5206\u304c\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306b\u3088\u3063\u3066\u5b9f\u884c\u3055\u308c\u308b\u305f\u3081\u3001\u521d\u671f\u72b6\u614b\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"HARDWARE")," \u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002 \u72b6\u614b\u9077\u79fb\u304c\u767a\u751f\u3059\u308b\u3068\u3001\u30b9\u30c6\u30fc\u30c8\uff65\u30de\u30b7\u30f3\u304c\u9069\u5207\u306a\u4eee\u60f3\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u7121\u52b9\u5316\u3092\u51e6\u7406\u3057\u307e\u3059\u3002 \u72b6\u614b\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"HARDWARE"),"\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"SOFTWARE"),"\u306b\u9077\u79fb\u3059\u308b\u5834\u5408\u306f\u3001\u4eee\u60f3\u30e1\u30bd\u30c3\u30c9 ",(0,r.kt)("inlineCode",{parentName:"p"},"void touchgfx::HAL::InvalidateCache()"),"\u3092\u547c\u3073\u51fa\u3057\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"SOFTWARE"),"\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"HARDWARE"),"\u3078\u306e\u9077\u79fb\u306e\u5834\u5408\u306f\u4eee\u60f3\u30e1\u30bd\u30c3\u30c9",(0,r.kt)("inlineCode",{parentName:"p"},"void touchgfx::HAL::FlushCache()"),"\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 \u3053\u308c\u30892\u3064\u306e\u95a2\u6570\u306e\u6a5f\u80fd\u306e\u6d3e\u751fHAL\u30af\u30e9\u30b9\u3078\u306e\u5b9f\u88c5\u306f\u30e6\u30fc\u30b6\u306b\u59d4\u306d\u3089\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/cm7-cache-invalidation-statemachine.svg",noShadow:!1,mdxType:"Figure"},"TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u5185\u8535DCache\u306e\u30b9\u30c6\u30fc\u30c8\uff65\u30de\u30b7\u30f3"),(0,r.kt)("p",null,"TouchGFX Generator\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u3053\u308c\u3089\u306e\u6d3e\u751f\u30e1\u30bd\u30c3\u30c9\u304cDCache\u7121\u52b9\u5316\u306e\u95a2\u6570\u547c\u3073\u51fa\u3057\u3068\u3068\u3082\u306bTouchGFXGeneratedHAL\u30af\u30e9\u30b9\u5185\u306b\u5b9f\u88c5\u3055\u308c\u308b\u305f\u3081\u3001\u7279\u6bb5\u306e\u4f5c\u696d\u306f\u4e0d\u8981\u3067\u3059\u3002"),(0,r.kt)("h2",m({},{id:"further-readings"}),"\u53c2\u8003\u8cc7\u6599"),(0,r.kt)("p",null,"The documents linked here contains more information about STM32CubeMX and the STM32 caches:"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"STM32CubeMX\u30e6\u30fc\u30b6\uff65\u30de\u30cb\u30e5\u30a2\u30eb",(0,r.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",mdxType:"Link"},"\u306e\u30af\u30ed\u30c3\u30af\u8a2d\u5b9a\u306b\u95a2\u3059\u308b\u30bb\u30af\u30b7\u30e7\u30f3")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",mdxType:"Link"},"STM32F7\u304a\u3088\u3073STM32H7\u306eL1\u30ad\u30e3\u30c3\u30b7\u30e5")))))}y.isMDXComponent=!0}}]);