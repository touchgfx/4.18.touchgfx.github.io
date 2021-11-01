(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6079],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(67294),i=n(73727),a=n(11368),o=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&b(e,n,t[n]);return e};var k=function(e){var t,n=e,{isNavLink:d,to:b,href:k,activeClassName:y,isActive:w,"data-noBrokenLinkCheck":C,autoAddBaseUrl:M=!0}=n,O=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:S,baseUrl:T}}=(0,a.Z)(),{withBaseUrl:N}=(0,u.C)(),x=(0,r.useContext)(c),E=b||k,A=(0,o.Z)(E),j=null==E?void 0:E.replace("pathname://","");let P=void 0!==j?(R=j,M&&(e=>e.startsWith("/"))(R)?N(R):R):void 0;var R;P&&A&&(P=(0,s.applyTrailingSlash)(P,{trailingSlash:S,baseUrl:T}));const D=(0,r.useRef)(!1),F=d?i.OL:i.rU,U=l.Z.canUseIntersectionObserver;let Z;(0,r.useEffect)((()=>(!U&&A&&null!=P&&window.docusaurus.prefetch(P),()=>{U&&Z&&Z.disconnect()})),[P,U,A]);const H=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,L=!P||!A||H;return P&&A&&!H&&!C&&x.collectLink(P),L?r.createElement("a",v(v({href:P},E&&!A&&{target:"_blank",rel:"noopener noreferrer"}),O)):r.createElement(F,v((_=v({},O),p(_,h({onMouseEnter:()=>{D.current||null==P||(window.docusaurus.preload(P),D.current=!0)},innerRef:e=>{var t,n;U&&e&&A&&(t=e,n=()=>{null!=P&&window.docusaurus.prefetch(P)},Z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),n())}))})),Z.observe(t))},to:P||""}))),d&&{isActive:w,activeClassName:y}));var _}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),a="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(i,a)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},90979:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return v},default:function(){return y}});var r=n(3905),i=n(44035),a=n(29415),o=n(31217),l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&h(e,n,t[n]);return e};const f={id:"02-cpu-running",title:"2. CPU\u8fd0\u884c",sidebar_label:"2. CPU\u8fd0\u884c"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/02-cpu-running",id:"development/board-bring-up/how-to/02-cpu-running",isDocsHomePage:!1,title:"2. CPU\u8fd0\u884c",description:"\u52a8\u673a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/02-cpu-running.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/02-cpu-running",permalink:"/4.18/zh-CN/docs/development/board-bring-up/how-to/02-cpu-running",version:"current",sidebarPosition:2,frontMatter:{id:"02-cpu-running",title:"2. CPU\u8fd0\u884c",sidebar_label:"2. CPU\u8fd0\u884c"},sidebar:"docs",previous:{title:"1. \u521b\u5efa\u9879\u76ee",permalink:"/4.18/zh-CN/docs/development/board-bring-up/how-to/01-create-project"},next:{title:"3. Display with framebuffer in internal RAM",permalink:"/4.18/zh-CN/docs/development/board-bring-up/how-to/03-display-internal"}},v=[{value:"\u52a8\u673a",id:"motivation",children:[]},{value:"\u76ee\u6807",id:"goal",children:[{value:"\u9a8c\u8bc1",id:"verification",children:[]}]},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",children:[]},{value:"\u6267\u884c",id:"do",children:[{value:"\u7cfb\u7edf\u65f6\u949f",id:"system-clock",children:[]},{value:"\u95ea\u5b58\u4e0eRAM\u5927\u5c0f\u548c\u901f\u5ea6",id:"flash-and-ram-size-and-speed",children:[]},{value:"\u94fe\u63a5\u5668\u811a\u672c",id:"linker-script",children:[]},{value:"F7\u548cH7\u4e0a\u7684\u7f13\u5b58",id:"cache-on-f7-and-h7",children:[]}]},{value:"Further Readings",id:"further-readings",children:[]}],k={toc:v};function y(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),h),c(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"motivation"}),"\u52a8\u673a"),(0,r.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u8981\u786e\u4fddMCU\u5185\u6838\u3001\u5185\u90e8RAM\u548c\u95ea\u5b58\u4ee5\u6240\u9700\u7684\u65f6\u949f\u901f\u5ea6\u8fd0\u884c\u3002"),(0,r.kt)("p",null,"TouchGFX\u53ef\u5728\u4efb\u4f55MCU\u901f\u5ea6\u4e0b\u8fd0\u884c\uff0c\u4f46\u9519\u8bef\u7684\u65f6\u949f\u914d\u7f6e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4f4e\u4e8e\u5fc5\u8981\u7684\u6027\u80fd\u3002 \u968f\u540e\uff0c\u57fa\u4e8e\u60a8\u7684\u5f00\u53d1\u677f\uff0c\u9700\u8981\u914d\u7f6e\u7279\u5b9a\u65f6\u5e8f\u53c2\u6570\uff0c\u5982\u89e6\u6478\u63a7\u5236\u5668\u7684I2C\u65f6\u949f\u3002 \u82e5\u4e0d\u80fd\u786e\u4fddMCU\u4ee5\u6b63\u786e\u7684\u901f\u5ea6\u8fd0\u884c\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e9b\u914d\u7f6e\u65e0\u6cd5\u751f\u6548\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8eSTM32\u5fae\u63a7\u5236\u5668\uff0c\u60a8\u9700\u8981\u8bbe\u7f6e\u7cfb\u7edf\u65f6\u949f\u3002 \u7136\u540e\u5bf9\u8be5\u65f6\u949f\u8fdb\u884c\u5206\u9891\uff0c\u4ee5\u751f\u6210FCLK\u5185\u6838\u65f6\u949f\u548c\u5404\u79cd\u5916\u8bbe\u65f6\u949f\uff0c\u5982APB1\u5916\u8bbe\u65f6\u949f\u3002"),(0,r.kt)("h2",m({},{id:"goal"}),"\u76ee\u6807"),(0,r.kt)("p",null,"\u672c\u8282\u7684\u76ee\u6807\u4e3a\u4fee\u6539\u9879\u76ee\uff0c\u4ee5\u83b7\u5f97\u6b63\u786e\u7684\u65f6\u949f\u914d\u7f6e\u3002 \u60a8\u8fd8\u5e94\u9a8c\u8bc1\u5185\u90e8RAM\u548c\u95ea\u5b58\u662f\u5426\u4ee5\u9884\u671f\u901f\u5ea6\u8fd0\u884c\u3002"),(0,r.kt)("h3",m({},{id:"verification"}),"\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u8282\u7684\u9a8c\u8bc1\u70b9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"SystemCoreClock\u7684\u53d8\u91cf\u503c\u6b63\u786e"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5fae\u63a7\u5236\u5668\u88ab\u914d\u7f6e\u4e3a\u6309\u6240\u9700\u9891\u7387\u8fd0\u884c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5185\u90e8RAM\u53ef\u8bfb"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5fae\u63a7\u5236\u5668\u5177\u6709\u9884\u671f\u7684\u5185\u90e8RAM\u5bb9\u91cf\uff0c\u8be5\u533a\u53ef\u8bfb\uff0c\u5e76\u53ef\u4ee5\u6d4b\u91cf\u901f\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u53ef\u8bfb\u7684\u5185\u90e8\u95ea\u5b58"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5fae\u63a7\u5236\u5668\u5177\u6709\u9884\u671f\u7684\u5185\u90e8\u95ea\u5b58\u5bb9\u91cf\uff0c\u8be5\u533a\u53ef\u8bfb\uff0c\u5e76\u53ef\u4ee5\u6d4b\u91cf\u901f\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u7981\u7528Cache\u7f13\u5b58"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5728\u7981\u7528Cache\u7f13\u5b58\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c,\u53ef\u4f7f\u7cfb\u7edf\u66f4\u7b80\u5355\u4e14\u6613\u4e8e\u7406\u89e3\u3002")))),(0,r.kt)("h2",m({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9aa4\u7684\u5148\u51b3\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u5173\u786c\u4ef6\u4e0a\u7684\u65f6\u949f\u6e90\u7684\u4fe1\u606f\u3002 \u901a\u5e38\u4f7f\u7528\u6676\u632f\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u89e3\u51b3\u65b9\u6848\u3002")),(0,r.kt)("h2",m({},{id:"do"}),"\u6267\u884c"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5c06\u9010\u6b65\u8c03\u6574\u9879\u76ee\u65f6\u949f\u914d\u7f6e\uff0c\u4ee5\u83b7\u53d6\u6240\u9700\u7684MCU\u9891\u7387\u3002 \u7136\u540e\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u6d4b\u91cf\u5185\u90e8\u95ea\u5b58\u7684\u8bfb\u53d6\u901f\u5ea6\u3002"),(0,r.kt)("h3",m({},{id:"system-clock"}),"\u7cfb\u7edf\u65f6\u949f"),(0,r.kt)("p",null,'In STM32CubeMX click on the "Clock Configuration" tab. \u8fd9\u5c06\u4e3a\u60a8\u63d0\u4f9b\u7279\u5b9aMCU\u7684\u65f6\u949f\u6570\u6982\u8ff0\uff1a'),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u65f6\u949f\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u9009\u62e9HSI\u4f5c\u4e3a\u65f6\u949f\u6e90\u3002 \u8bb8\u591a\u9879\u76ee\u4f7f\u7528\u5916\u90e8\u6676\u632fHSE\uff0c\u540c\u65f6\u9009\u62e9\u5408\u9002\u7684\u5206\u9891(/M) \u548c\u500d\u9891(/N) \u53c2\u6570\u3002 \u672c\u6307\u5357\u4e0d\u505a\u6709\u5173\u65f6\u949f\u914d\u7f6e\u7684\u4ecb\u7ecd\u3002 After you have changed the clock configuration you must regenerate the project in STM32CubeMX (click Generate Code in upper right corner)."),(0,r.kt)("p",null,"\u5185\u6838\u65f6\u949f(HCLK) \u53ef\u5728\u8fd0\u884c\u65f6\u901a\u8fc7\u751f\u6210\u7684\u4ee3\u7801\u8fdb\u884c\u8ba1\u7b97\uff0c\u5e76\u4fdd\u5b58\u5728\u53d8\u91cf\u4e2d\u3002 \u5e94\u7528\u4ee3\u7801\u53ef\u4f7f\u7528\u6b64\u53d8\u91cf\u5728\u65f6\u949f\u5468\u671f\u548c\u79d2\u5355\u4f4d\u4e4b\u95f4\u8fdb\u884c\u6b63\u786e\u8f6c\u6362\uff0c\u5982\u542f\u52a8\u5b9a\u65f6\u5668\u3002 \u8981\u91cd\u65b0\u8ba1\u7b97\u65f6\u949f\u53c2\u6570\uff0c\u60a8\u987b\u8c03\u7528",(0,r.kt)("em",{parentName:"p"},"SystemCoreClockUpdate()"),"\u51fd\u6570\u3002 \u5728main.c(\u7528\u6237\u4ee3\u7801\u6bb5) \u4e2d\u63d2\u5165\u4e00\u4e2a\u8c03\u7528\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-02.png",noShadow:!1,width:"600",mdxType:"Figure"},"SystemCoreClockUpdate"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u6b64\u51fd\u6570\u7684\u672b\u5c3e\u8bbe\u7f6e\u65ad\u70b9\uff0c\u5219\u53ef\u4ee5\u770b\u5230\u57fa\u4e8e\u914d\u7f6e\u7684\u5185\u6838\u65f6\u949f:"),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-03.png",noShadow:!1,width:"600",mdxType:"Figure"},"SystemCoreClock"),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u6d4b\u8bd5\u91cd\u70b9\u4e3a\u7cfb\u7edf\u5b9a\u65f6\u5668\u3002 \u8be5\u5b9a\u65f6\u5668\u6309HCLK\u65f6\u949f\u8fd0\u884c\uff0c\u8be5\u65f6\u949f\u7ecf\u8fc7\u5206\u9891\uff0c\u4ee5\u6bcf\u96941 ms\u4ea7\u751f\u4e00\u6b21\u4e2d\u65ad\u3002 This timer is used by the STM32Cube Firmware to implement millisecond delays."),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u901a\u8fc7\u5728main\u4e2d\u63d2\u5165\u8bf8\u59825\u79d2\u7684\u5ef6\u8fdf\u6765\u5bf9\u6b64\u8fdb\u884c\u6d4b\u8bd5\u3002 \u7528\u79d2\u8868\u6216\u7c7b\u4f3c\u7684\u65b9\u6cd5\u6765\u9a8c\u8bc1\u8fd9\u4e00\u70b9:"),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-04.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u6d4b\u91cf\u5ef6\u8fdf"),(0,r.kt)("h3",m({},{id:"flash-and-ram-size-and-speed"}),"\u95ea\u5b58\u4e0eRAM\u5927\u5c0f\u548c\u901f\u5ea6"),(0,r.kt)("p",null,"\u4f7f\u7528\u7cfb\u7edf\u5b9a\u65f6\u5668\u53ef\u8f7b\u677e\u68c0\u67e5\u5b58\u50a8\u5668\u7684\u8bfb\u53d6\u901f\u5ea6\u3002 \u7cfb\u7edf\u5b9a\u65f6\u5668\u4e2d\u65ad\u6bcf\u6beb\u79d2\u5bf9\u8ba1\u6570\u53d8\u91cf\u52a0\u4e00\u3002 \u901a\u8fc7\u5728\u4e00\u6bb5\u4ee3\u7801\u4e4b\u524d\u548c\u4e4b\u540e\u8bfb\u53d6\u6b64\u53d8\u91cf\uff0c\u6211\u4eec\u53ef\u4ee5\u6d4b\u91cf\u4ee3\u7801\u7684\u8fd0\u884c\u65f6\u95f4(\u5206\u8fa8\u7387\u4e3a1 ms) \u3002 \u6b64\u65b9\u6848\u53ef\u7528\u4e8e\u6d4b\u91cf\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u8bb8\u591a\u4e0d\u540c\u4f4d\u7f6e\u7684\u65f6\u95f4\u5468\u671f\u3002 \u8be5\u6d4b\u91cf\u4e0d\u662f\u5f88\u7cbe\u786e\uff0c\u4f46\u53ef\u4ee5\u5728\u6ca1\u6709\u793a\u6ce2\u5668\u7b49\u5916\u90e8\u8bbe\u5907\u7684\u60c5\u51b5\u4e0b\u5b8c\u6210\u3002"),(0,r.kt)("p",null,"\u4e3a\u6b64\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u4e24\u4e2a\u6613\u5931\u6027\u53d8\u91cf\u6765\u4fdd\u5b58\u7ed3\u679c\u3002 \u5982\u679c\u6211\u4eec\u4e0d\u5728\u6b64\u5904\u4fdd\u5b58\u7ed3\u679c\uff0c\u5219\u7f16\u8bd1\u5668\u5728\u67d0\u4e9b\u4f18\u5316\u60c5\u51b5\u4e0b\u4f1a\u5220\u9664\u6d4b\u91cf\u4ee3\u7801\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-05.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u5373\u7528\u4e8e\u4fdd\u5b58\u6d4b\u91cf\u7ed3\u679c\u7684\u6613\u5931\u6027\u5168\u5c40\u53d8\u91cf"),(0,r.kt)("p",null,"\u8fd9\u91cc\u63d0\u4f9b\u4e86\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u8bfb\u53d6\u4e86\u4ece0x08000000\u52300x08020000\uff08128 Kb\uff09\u7684\u95ea\u5b58\uff0c\u5e76\u5bf9\u4ee3\u7801\u8fdb\u884c\u8ba1\u65f6\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-06.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u5bf9\u8bfb\u53d6\u5faa\u73af\u8fdb\u884c\u8ba1\u65f6"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u50cf\u8fd9\u6837\u7684\u4ee3\u7801\u6765\u9a8c\u8bc1\u4e0d\u540c\u5b58\u50a8\u5668\u7684\u901f\u5ea6\u3002 Once you have created a setup in STM32CubeMX you can measure the read speed and make a note of the result. \u968f\u540e\u53ef\u4ee5\u91cd\u590d\u6d4b\u91cf\u5e76\u9a8c\u8bc1\u3002  \u5982\u679c\u8981\u6d4b\u91cf\u5b58\u50a8\u5668\u5e26\u5bbd(\u5373\u4ee5kb\u4e3a\u5355\u4f4d\u7684\u8bfb\u53d6\u901f\u5ea6) \uff0c\u60a8\u53ef\u4ee5\u5c06\u6570\u636e\u91cf\u4e0e\u6d4b\u91cf\u65f6\u95f4\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,r.kt)("p",null,"\u572816 MHz\u7684STM32F429\u4e0a\uff0c\u5982\u679c\u4ee3\u7801\u7684\u8fd0\u884c\u65f6\u95f4\u4e3a12 ms\uff0c\u5219\u5185\u90e8\u95ea\u5b58\u7684\u8bfb\u53d6\u901f\u5ea6(\u4f7f\u7528\u6b64\u65b9\u6cd5) \u4e3a128kb/0.012s = 10,666 kb/s\u3002"),(0,r.kt)("p",null,"\u53ef\u8f7b\u677e\u66f4\u6539\u4e0a\u9762\u7684\u6d4b\u8bd5\u4ee3\u7801\u6bb5\uff0c\u4ee5\u9a8c\u8bc1\u6240\u6709\u5185\u90e8\u95ea\u5b58\u662f\u5426\u4f7f\u80fd\u5e76\u4e14\u53ef\u8bfb\u3002 \u53ea\u9700\u66f4\u6539\u8d77\u59cb\u548c\u7ed3\u675f\u5730\u5740\u3002"),(0,r.kt)("p",null,"\u8be5\u4ee3\u7801\u8fd8\u53ef\u4ee5\u68c0\u67e5\u5185\u90e8RAM\u3002 \u5728F429\uff0cRAM\u4ece\u5730\u57400x20000000\u5f00\u59cb\u3002 \u5185\u6838\u8026\u5408\u5b58\u50a8\u533a\u4ece0x10000000\u5f00\u59cb\u3002 \u68c0\u67e5\u7279\u5b9aMCU\u7684\u6570\u636e\u624b\u518c\uff0c\u4ee5\u83b7\u53d6\u76f8\u5173\u5b58\u50a8\u5668\u5730\u5740\u3002"),(0,r.kt)("p",null,"\u60a8\u5e94\u8be5\u5bf9\u4e0d\u540c\u7684\u5b58\u50a8\u5668\u8fdb\u884c\u4e00\u4e9b\u6d4b\u91cf\uff0c\u5e76\u8bb0\u4e0b\u7ed3\u679c\u3002 \u5bf9\u4e8eRAM\uff0c\u8bf7\u6d4b\u8bd5\u8bfb\u53d6\u548c\u5199\u5165\u901f\u5ea6\u3002"),(0,r.kt)("h3",m({},{id:"linker-script"}),"\u94fe\u63a5\u5668\u811a\u672c"),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u5173\u6ce8\u70b9\u4e3a\u94fe\u63a5\u5668\u811a\u672c\u3002 \u8be5\u914d\u7f6e\u6587\u4ef6\u5c06RAM\u548c\u95ea\u5b58\u5728\u7cfb\u7edf\u4e2d\u7684\u5730\u5740\u544a\u77e5\u94fe\u63a5\u5668\u3002 \u94fe\u63a5\u5668\u811a\u672c\u7531CubeMX\u4e0e\u9879\u76ee\u4e00\u8d77\u751f\u6210\uff0c\u4f46\u5bf9\u5176\u8fdb\u884c\u7814\u7a76\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u597d\u5904\u3002 \u968f\u540e\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u60a8\u5fc5\u987b\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\uff0c\u4ee5\u9002\u5e94\u9879\u76ee\u9700\u8981\u3002"),(0,r.kt)("h3",m({},{id:"cache-on-f7-and-h7"}),"F7\u548cH7\u4e0a\u7684\u7f13\u5b58"),(0,r.kt)("p",null,"\u57fa\u4e8eARM Cortex-M7\u7684STM32F7\u548cSTM32H7\u5fae\u63a7\u5236\u5668\u5305\u62ec\u6570\u636e\u548c\u6307\u4ee4\u7f13\u5b58\u3002 \u5728\u5e73\u53f0\u7a33\u5b9a\u4e4b\u524d\uff0c\u5efa\u8bae\u81f3\u5c11\u7981\u7528\u6570\u636e\u7f13\u5b58\u3010D-Cache\u3011\u3002 \u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u7f13\u5b58\u53ef\u663e\u8457\u63d0\u9ad8\u6027\u80fd\uff0c\u4f46\u4e5f\u4f1a\u4f7f\u6d4b\u8bd5\u53d8\u5f97\u590d\u6742\u3002"),(0,r.kt)("p",null,"\u5728\u62e5\u6709\u7a33\u5b9a\u7684\u5e73\u53f0\u540e\uff0c\u53ef\u542f\u7528\u6570\u636e\u7f13\u5b58\u3002 \u6b64\u65f6\uff0c\u7531\u4e8e\u5e73\u53f0\u5728\u5176\u4ed6\u65b9\u9762\u6b63\u5e38\uff0c\u56e0\u6b64\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u9501\u5b9a\u95ee\u9898\u6e90\u81ea\u6570\u636e\u7f13\u5b58\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u7531\u4e8eMCU\u5185\u6838\u8bfb\u53d6\u548c\u5199\u5165\u7f13\u5b58\uff0c\u800c\u8bf8\u5982DMA2\u548cLTDC\u4e4b\u7c7b\u7684\u5916\u8bbe\u5219\u76f4\u63a5\u4ece\u5b58\u50a8\u5668\u8bfb\u53d6(\u800c\u4e0d\u662f\u8bfb\u53d6Cache\u7f13\u5b58) \uff0c\u8fd9\u4f7f\u6570\u636e\u7f13\u5b58\u53d8\u5f97\u590d\u6742\u3002 \u56e0\u6b64\uff0c\u60a8\u53ef\u80fd\u4f1a\u9047\u5230\u5c06\u6570\u636e\u867d\u5199\u5165\u5e27\u7f13\u51b2\uff0c\u4f46\u5728\u663e\u793a\u5668\u4e0a\u770b\u4e0d\u5230\u67d0\u4e9b\u6570\u636e\u7684\u60c5\u51b5\u3002 \u56e0\u4e3a\u8fd9\u4e9b\u6570\u636e\u8fd8\u5728\u9ad8\u901f\u7f13\u5b58\uff0c\u6240\u4ee5LTDC\u5728RAM\u4e2d\u627e\u4e0d\u5230\u65b0\u6570\u636e\uff0c \u89e3\u51b3\u65b9\u6848\u5c31\u662f\u5728\u67d0\u4e00\u65f6\u523b\u5237\u65b0\u9879\u76ee\u4e2d\u7684\u7f13\u5b58\uff0c\u4f46\u6211\u4eec\u5efa\u8bae\u7a0d\u540e\u518d\u505a\u5904\u7406\u3002"),(0,r.kt)("p",null,"Caching can be disabled/enabled in STM32CubeMX in the System Core section."),(0,r.kt)("h4",m({},{id:"touchgfx-internal-dcache-state-machine"}),"TouchGFX internal DCache State Machine"),(0,r.kt)("p",null,"TouchGFX engine keeps track of the current and last rendering operation, there are two states ",(0,r.kt)("inlineCode",{parentName:"p"},"HARDWARE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SOFTWARE"),". The initial state is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"HARDWARE")," as the mijority of draw operations are done by hardware. When a state switch occurs the state machine will call the appropriate virtual function to handle cache invalidation. When the state transit from ",(0,r.kt)("inlineCode",{parentName:"p"},"HARDWARE")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"SOFTWARE")," it will call the virtual method ",(0,r.kt)("inlineCode",{parentName:"p"},"void touchgfx::HAL::InvalidateCache()")," and when the state transitions from ",(0,r.kt)("inlineCode",{parentName:"p"},"SOFTWARE")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"HARDWARE")," it will call the virtual method ",(0,r.kt)("inlineCode",{parentName:"p"},"void touchgfx::HAL::FlushCache()"),". The functionality of these two functions is left for the user to implement in the derived HAL class."),(0,r.kt)(i.Z,{imageSource:"/img/development/board-bring-up/cpu-running/cm7-cache-invalidation-statemachine.svg",noShadow:!1,mdxType:"Figure"},"TouchGFX engine internal DCache State Machine"),(0,r.kt)("p",null,"If using TouchGFX Generator the implementation of these derived methods will be created in the TouchGFXGeneratedHAL class with function calls to DCache invalidation and no further action is needed."),(0,r.kt)("h2",m({},{id:"further-readings"}),"Further Readings"),(0,r.kt)("p",null,"The documents linked here contains more information about STM32CubeMX and the STM32 caches:"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Section on Clock configuration in the ",(0,r.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",mdxType:"Link"},"STM32CubeMX User Manual")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",mdxType:"Link"},"STM32F7\u548cSTM32H7\u4e0a\u76841\u7ea7\u7f13\u5b58")))))}y.isMDXComponent=!0}}]);