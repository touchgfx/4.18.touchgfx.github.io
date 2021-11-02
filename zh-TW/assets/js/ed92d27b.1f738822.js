(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8246],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=a(r),f=o,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var a=2;a<i;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29415:function(e,t,r){"use strict";var n=r(67294),o=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class c extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=c},88678:function(e,t,r){"use strict";var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},65407:function(e,t,r){"use strict";var n=r(67294),o=r(25026);t.Z=function(e){var t,r;const i=(0,o.Z)(e.url),c=null!=(t=e.width)?t:"100%",l=null!=(r=e.height)?r:"100%";return n.createElement("div",{class:"loop-video"},n.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:c,height:l},n.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),n.createElement("p",null,e.children))}},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(67294),o=r(73727),i=r(11368),c=r(35096),l=r(84487);const u=(0,n.createContext)({collectLink:()=>{}});var a=r(25026),s=r(67023),p=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&g(e,r,t[r]);if(h)for(var r of h(t))v.call(t,r)&&g(e,r,t[r]);return e};var y=function(e){var t,r=e,{isNavLink:p,to:g,href:y,activeClassName:w,isActive:O,"data-noBrokenLinkCheck":k,autoAddBaseUrl:x=!0}=r,T=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&v.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:j,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:E}=(0,a.C)(),C=(0,n.useContext)(u),F=g||y,X=(0,c.Z)(F),D=null==F?void 0:F.replace("pathname://","");let G=void 0!==D?(Z=D,x&&(e=>e.startsWith("/"))(Z)?E(Z):Z):void 0;var Z;G&&X&&(G=(0,s.applyTrailingSlash)(G,{trailingSlash:j,baseUrl:P}));const S=(0,n.useRef)(!1),L=p?o.OL:o.rU,M=l.Z.canUseIntersectionObserver,N=(0,n.useRef)();(0,n.useEffect)((()=>(!M&&X&&null!=G&&window.docusaurus.prefetch(G),()=>{M&&N.current&&N.current.disconnect()})),[N,G,M,X]);const U=null!==(t=null==G?void 0:G.startsWith("#"))&&void 0!==t&&t,_=!G||!X||U;return G&&X&&!U&&!k&&C.collectLink(G),_?n.createElement("a",b(b({href:G},F&&!X&&{target:"_blank",rel:"noopener noreferrer"}),T)):n.createElement(L,b((W=b({},T),d(W,f({onMouseEnter:()=>{S.current||null==G||(window.docusaurus.preload(G),S.current=!0)},innerRef:e=>{var t,r;M&&e&&X&&(t=e,r=()=>{null!=G&&window.docusaurus.prefetch(G)},N.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.current.unobserve(t),N.current.disconnect(),r())}))})),N.current.observe(t))},to:G||""}))),p&&{isActive:O,activeClassName:w}));var W}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return c}});var n=r(11368),o=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[o]=e.split(/[#?]/),i="/"===o||o===n?o:(c=o,r?function(e){return e.endsWith("/")?e:`${e}/`}(c):function(e){return e.endsWith("/")?e.slice(0,-1):e}(c));var c;return e.replace(o,i)}},67023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},51900:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return v},metadata:function(){return g},toc:function(){return b},default:function(){return w}});var n=r(3905),o=r(29415),i=r(31217),c=r(65407),l=Object.defineProperty,u=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&f(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&f(e,r,t[r]);return e};const m={id:"examples",title:"\u7bc4\u4f8b\u548c\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a"},v=void 0,g={unversionedId:"development/ui-development/working-with-touchgfx/examples",id:"development/ui-development/working-with-touchgfx/examples",isDocsHomePage:!1,title:"\u7bc4\u4f8b\u548c\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a",description:"\u70ba\u4e86\u6709\u52a9\u65bc\u9032\u4e00\u6b65\u63a2\u7d22TouchGFX\u7684\u53ef\u80fd\u6027\u548c\u7279\u6027\uff0c\u7528\u6236\u53ef\u4ee5\u4f7f\u7528\u591a\u500b\u9810\u5148\u88fd\u4f5c\u7684\u7bc4\u4f8b\u548c\u6f14\u793a\u3002 \u53ef\u4ee5\u901a\u904eTouchGFX Designer\u7684Lobby\u5b58\u53d6\u9019\u4e9b\u7bc4\u4f8b\u548c\u6f14\u793a\uff08\u5747\u5305\u62ec\u514d\u8cbb\u4f7f\u7528\u7684\u5716\u50cf\u548c\u4ee3\u78bc\u7b49\uff09\uff0c\u9019\u610f\u5473\u8457\u53ef\u4ee5\u5c07\u5b83\u5011\u4f5c\u70ba\u57fa\u790e\uff0c\u4ee5\u69cb\u5efa\u81ea\u5df1\u7368\u6709\u7684\u61c9\u7528\u7a0b\u5f0f\u3002 \u5c07\u7bc4\u4f8b\u548c\u6f14\u793a\u8207TouchGFX\u958b\u767c\u7248\u8a2d\u7f6e\u7d50\u5408\u53ef\u4ee5\u5275\u5efaTouchGFX\u61c9\u7528\u7a0b\u5f0f\u3002 \u5982\u679c\u60a8\u4e0d\u592a\u719f\u6089TouchGFX\uff0c\u53ef\u4ee5\u4ee5\u6b64\u70ba\u826f\u597d\u7684\u8d77\u9ede\uff0c\u6df1\u5165\u77ad\u89e3TouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u5de5\u4f5c\u539f\u7406\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/examples.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/examples",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/examples",tags:[],version:"current",frontMatter:{id:"examples",title:"\u7bc4\u4f8b\u548c\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a"},sidebar:"docs",previous:{title:"\u9664\u932f",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/debugging"},next:{title:"\u9375\u76e4\u5feb\u901f\u9375",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}},b=[{value:"\u7bc4\u4f8b\u548c\u6f14\u793a",id:"ui-templates",children:[],level:2},{value:"\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a",id:"online-applications",children:[],level:2}],y={toc:b};function w(e){var t,r=e,{components:l}=r,f=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},y),f),u(t,a({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u70ba\u4e86\u6709\u52a9\u65bc\u9032\u4e00\u6b65\u63a2\u7d22TouchGFX\u7684\u53ef\u80fd\u6027\u548c\u7279\u6027\uff0c\u7528\u6236\u53ef\u4ee5\u4f7f\u7528\u591a\u500b\u9810\u5148\u88fd\u4f5c\u7684\u7bc4\u4f8b\u548c\u6f14\u793a\u3002 \u53ef\u4ee5\u901a\u904eTouchGFX Designer\u7684",(0,n.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"Lobby"),"\u5b58\u53d6\u9019\u4e9b\u7bc4\u4f8b\u548c\u6f14\u793a\uff08\u5747\u5305\u62ec\u514d\u8cbb\u4f7f\u7528\u7684\u5716\u50cf\u548c\u4ee3\u78bc\u7b49\uff09\uff0c\u9019\u610f\u5473\u8457\u53ef\u4ee5\u5c07\u5b83\u5011\u4f5c\u70ba\u57fa\u790e\uff0c\u4ee5\u69cb\u5efa\u81ea\u5df1\u7368\u6709\u7684\u61c9\u7528\u7a0b\u5f0f\u3002 \u5c07\u7bc4\u4f8b\u548c\u6f14\u793a\u8207",(0,n.kt)("a",h({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"TouchGFX\u958b\u767c\u7248\u8a2d\u7f6e"),"\u7d50\u5408\u53ef\u4ee5\u5275\u5efaTouchGFX\u61c9\u7528\u7a0b\u5f0f\u3002 \u5982\u679c\u60a8\u4e0d\u592a\u719f\u6089TouchGFX\uff0c\u53ef\u4ee5\u4ee5\u6b64\u70ba\u826f\u597d\u7684\u8d77\u9ede\uff0c\u6df1\u5165\u77ad\u89e3TouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u5de5\u4f5c\u539f\u7406\u3002"),(0,n.kt)("p",null,"\u4e00\u4e9b\u7bc4\u4f8b\u548c\u6f14\u793a\u53ea\u805a\u7126\u5728\u55ae\u4e00\u7279\u6027\uff0c\u800c\u53e6\u4e00\u4e9b\u5247\u5be6\u73feTouchGFX\u4e2d\u7684\u5e7e\u500b\u4e0d\u540c\u529f\u80fd\u3002 \u6f14\u793a\u5206\u70ba\u5169\u500b\u4e0d\u540c\u985e\u578b\uff1a",(0,n.kt)("a",h({parentName:"p"},{href:"#ui-templates"}),"Demos")," and ",(0,n.kt)("a",h({parentName:"p"},{href:"#online-applications"}),"Board Specific Demos"),"\u3002"),(0,n.kt)("h2",h({},{id:"ui-templates"}),"\u7bc4\u4f8b\u548c\u6f14\u793a"),(0,n.kt)("p",null,"\u7bc4\u4f8b\u901a\u5e38\u662f\u66f4\u5c0f\u3001\u66f4\u7368\u7acb\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u4e3b\u8981\u95dc\u6ce8\u7279\u5b9a\u7279\u6027\uff0c\u6bd4\u5982\u4e0d\u540c\u7684\u5c0f\u90e8\u4ef6\u3002 \u7bc4\u4f8b\u53ef\u4ee5\u5728\u4efb\u4f55STM32\u8a55\u4f30\u5957\u4ef6\u548cPC\u6a21\u64ec\u5668\u4e0a\u904b\u884c\uff0c\u4f46\u70ba\u4e86\u7372\u5f97\u6700\u4f73\u9ad4\u9a57\uff0c\u5efa\u8b70\u5728\u7bc4\u4f8b\u7684\u89e3\u6790\u5ea6\u8207\u60a8\u7684\u958b\u767c\u677f\u89e3\u6790\u5ea6\u5339\u914d\u7684\u60c5\u6cc1\u4e0b\u5275\u5efa\u5c08\u6848\u3002 \u6709\u4e9b\u7bc4\u4f8b\u5728\u69cb\u5efa\u6642\u4e5f\u8003\u616e\u5230\u4e86\u7279\u5b9a\u7684\u8272\u6df1\uff0c\u9019\u610f\u5473\u8457\u5b83\u5011\u5728\u8f03\u4f4e\u7684\u8272\u6df1\u986f\u793a\u61c9\u7528\u4e2d\u7684\u986f\u793a\u6548\u679c\u53ef\u80fd\u4e0d\u6703\u5f88\u597d\u3002"),(0,n.kt)("p",null,"\u6f14\u793a\u5305\u62ec\u5e7e\u500bTouchGFX\u5718\u968a\u88fd\u4f5c\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u5b83\u5011\u5c55\u793a\u4e86\u63a1\u7528\u66f4\u9ad8\u54c1\u8ceaUI\u8a2d\u8a08\u7684\u66f4\u591a\u7279\u6027\u3002 \u9019\u4e9b\u80fd\u5920\u8b93\u60a8\u958b\u59cb\u611f\u53d7TouchGFX\u7684\u80fd\u529b\u3002"),(0,n.kt)("p",null,"\u8981\u4f7f\u7528\u7bc4\u4f8b\u6216\u6f14\u793a\u5275\u5efa\u61c9\u7528\u7a0b\u5f0f\uff0c\u9996\u5148\u9ede\u64calobby\u5de6\u4e0a\u65b9\u7684\u201c\u7bc4\u4f8b\u201d\u6216\u201c\u6f14\u793a\u201d\uff0c\u4ee5\u67e5\u770b\u53ef\u7528\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u7136\u5f8c\u9ede\u64ca\u60a8\u9700\u8981\u7684\u61c9\u7528\u7a0b\u5f0f\u3002 \u6216\u8005\uff0c\u53ef\u4ee5\u5728\u4e0b\u62c9\u5f0f\u529f\u80fd\u8868\u4e2d\u9078\u64c7\u53e6\u5916\u7684\u89e3\u6790\u5ea6\u548c\u8272\u6df1\u3002 \u5982\u679c\u60f3\u5728\u4e00\u500b\u652f\u63f4\u7684\u786c\u9ad4\u4e0a\u904b\u884c\uff0c\u9ede\u64ca\u8996\u7a97\u9802\u90e8\u7684\u201c\u9078\u64c7\u786c\u9ad4\u201d\uff0c\u9078\u64c7\u60f3\u8981\u7684\u958b\u767c\u677f\uff0c\u7136\u5f8c\u6309\u201c\u9078\u64c7\u201d\u3002 \u6700\u5f8c\uff0c\u6309\u201c\u5275\u5efa\u201d\u901a\u904e\u9078\u5b9a\u7684TouchGFX\u958b\u767c\u7248\u8a2d\u7f6e\u548c\u7bc4\u4f8b\u6216\u6f14\u793a\u5275\u5efa\u61c9\u7528\u7a0b\u5f0f\u3002 \u6309\u201c\u904b\u884c\u6a21\u64ec\u5668\u201d\u6216\u201c\u904b\u884c\u76ee\u6a19\u201d\u67e5\u770b\u904b\u884c\u7684\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,n.kt)("p",null,"\u9019\u4e9b\u6b65\u9a5f\u7684\u52d5\u756b\u6f14\u793a\u5982\u4e0b\uff1a"),(0,n.kt)(c.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"\u4f7f\u7528\u7bc4\u4f8b\u5275\u5efa\u5c08\u6848"),(0,n.kt)("h2",h({},{id:"online-applications"}),"\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a"),(0,n.kt)("p",null,"\u7279\u5b9a\u65bc\u677f\u4ef6\u7684\u6f14\u793a\u662f\u91dd\u5c0d\u7279\u5b9a\u786c\u9ad4\u89e3\u6c7a\u65b9\u6848\u7684\u958b\u7bb1\u5373\u7528\u578b\u61c9\u7528\u7a0b\u5f0f\uff0c\u56e0\u6b64\u4e0d\u53ef\u80fd\u5728\u4efb\u4f55\u5176\u4ed6STM32\u8a55\u4f30\u5957\u4ef6\uff08\u9664\u4e86PC\u6a21\u64ec\u5668\uff09\u4e0a\u904b\u884c\u3002 \u9019\u4e9b\u61c9\u7528\u7a0b\u5f0f\u901a\u5e38\u8981\u5927\u5f97\u591a\uff0c\u4e26\u4e14\u63a2\u7d22TouchGFX\u6846\u67b6\u7684\u591a\u500b\u4e0d\u540c\u7279\u6027\uff0c\u9084\u53ef\u4ee5\u5305\u542b\u8207\u786c\u9ad4\u7684\u96c6\u6210\u7bc4\u4f8b\u3002"),(0,n.kt)("p",null,"\u5982\u8981\u4f7f\u7528\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a\u5275\u5efa\u61c9\u7528\u7a0b\u5f0f\uff0c\u9996\u5148\u9ede\u64calobby\u5de6\u4e0a\u89d2\u7684\u2018\u6f14\u793a\u2019\u9078\u9805\u5361\u9032\u884c\u5b58\u53d6\u3002 \u9ede\u64ca\u8996\u7a97\u9802\u90e8\u7684\u201c\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a\u201d\u6a19\u7c64\uff0c\u4ee5\u986f\u793a\u53ef\u7528\u7684\u61c9\u7528\u7a0b\u5f0f\u3002 \u9ede\u64ca\u60f3\u8981\u7684\u61c9\u7528\u7a0b\u5f0f\u4e26\u6309\u201c\u5275\u5efa\u201d\u3002 \u6309\u201c\u904b\u884c\u6a21\u64ec\u5668\u201d\u6216\u201c\u904b\u884c\u76ee\u6a19\u201d\u67e5\u770b\u904b\u884c\u7684\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,n.kt)("p",null,"\u9019\u4e9b\u6b65\u9a5f\u7684\u52d5\u756b\u6f14\u793a\u5982\u4e0b\uff1a"),(0,n.kt)(c.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"\u4f7f\u7528\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a\u5275\u5efa\u5c08\u6848"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"To read more about how to create applications using Examples or Demos, see the ",(0,n.kt)(i.Z,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"Lobby section"),"."))}w.isMDXComponent=!0}}]);