(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8637],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=a},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(67294),i=n(73727),o=n(11368),a=n(35096),c=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var l=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))g.call(t,n)&&v(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:p,to:v,href:b,activeClassName:y,isActive:k,"data-noBrokenLinkCheck":O,autoAddBaseUrl:x=!0}=n,T=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:E,baseUrl:j}}=(0,o.Z)(),{withBaseUrl:P}=(0,l.C)(),C=(0,r.useContext)(u),Z=v||b,F=(0,a.Z)(Z),_=null==Z?void 0:Z.replace("pathname://","");let S=void 0!==_?(D=_,x&&(e=>e.startsWith("/"))(D)?P(D):D):void 0;var D;S&&F&&(S=(0,s.applyTrailingSlash)(S,{trailingSlash:E,baseUrl:j}));const X=(0,r.useRef)(!1),U=p?i.OL:i.rU,N=c.Z.canUseIntersectionObserver;let G;(0,r.useEffect)((()=>(!N&&F&&null!=S&&window.docusaurus.prefetch(S),()=>{N&&G&&G.disconnect()})),[S,N,F]);const M=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,W=!S||!F||M;return S&&F&&!M&&!O&&C.collectLink(S),W?r.createElement("a",w(w({href:S},Z&&!F&&{target:"_blank",rel:"noopener noreferrer"}),T)):r.createElement(U,w((I=w({},T),d(I,f({onMouseEnter:()=>{X.current||null==S||(window.docusaurus.preload(S),X.current=!0)},innerRef:e=>{var t,n;N&&e&&F&&(t=e,n=()=>{null!=S&&window.docusaurus.prefetch(S)},G=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(G.unobserve(t),G.disconnect(),n())}))})),G.observe(t))},to:S||""}))),p&&{isActive:k,activeClassName:y}));var I}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(11368),i=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(i,o)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},51906:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return v},toc:function(){return w},default:function(){return y}});var r=n(3905),i=n(44035),o=n(29415),a=n(31217),c=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&f(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&f(e,n,t[n]);return e};const m={id:"widgets-and-containers",title:"\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668"},g=void 0,v={unversionedId:"development/ui-development/working-with-touchgfx/widgets-and-containers",id:"development/ui-development/working-with-touchgfx/widgets-and-containers",isDocsHomePage:!1,title:"\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668",description:"\u672c\u7bc0\u5c07\u4ecb\u7d39\u69cb\u5efaTouchGFX\u61c9\u7528\u7a0b\u5f0f\u6642\u7684\u5169\u500b\u6700\u57fa\u672c\u6982\u5ff5\uff1a\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668\u3002 \u9019\u662f\u60a8\u5c07\u5728\u6574\u500bUI\u958b\u767c\u904e\u7a0b\u4e2d\u4f7f\u7528\u7684\u5169\u500b\u69cb\u5efa\u55ae\u5143\u3002 \u5169\u8005\u90fd\u5305\u542bTouchGFX\u63d0\u4f9b\u7684\u9810\u88fd\u5143\u4ef6\uff0c\u540c\u6642\u4e5f\u8db3\u5920\u958b\u653e\uff0c\u53ef\u652f\u63f4\u5275\u5efa\u81ea\u8a02\u5be6\u73fe\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/widgets-and-containers.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/widgets-and-containers",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/widgets-and-containers",version:"current",frontMatter:{id:"widgets-and-containers",title:"\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668"},sidebar:"docs",previous:{title:"\u5c07IDE\u8207TouchGFX\u7d44\u5408\u4f7f\u7528",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx"},next:{title:"\u6a21\u64ec\u5668",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/simulator"}},w=[{value:"\u5c0f\u90e8\u4ef6",id:"widgets",children:[]},{value:"\u5bb9\u5668",id:"containers",children:[]}],b={toc:w};function y(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},b),f),u(t,l({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u7bc0\u5c07\u4ecb\u7d39\u69cb\u5efaTouchGFX\u61c9\u7528\u7a0b\u5f0f\u6642\u7684\u5169\u500b\u6700\u57fa\u672c\u6982\u5ff5\uff1a\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668\u3002 \u9019\u662f\u60a8\u5c07\u5728\u6574\u500bUI\u958b\u767c\u904e\u7a0b\u4e2d\u4f7f\u7528\u7684\u5169\u500b\u69cb\u5efa\u55ae\u5143\u3002 \u5169\u8005\u90fd\u5305\u542bTouchGFX\u63d0\u4f9b\u7684\u9810\u88fd\u5143\u4ef6\uff0c\u540c\u6642\u4e5f\u8db3\u5920\u958b\u653e\uff0c\u53ef\u652f\u63f4\u5275\u5efa\u81ea\u8a02\u5be6\u73fe\u3002"),(0,r.kt)("h2",h({},{id:"widgets"}),"\u5c0f\u90e8\u4ef6"),(0,r.kt)("p",null,"TouchGFX\u548cTouchGFX Designer\u5de5\u5177\u63d0\u4f9b\u4e86\u8a31\u591a\u6a19\u6e96\u5c0f\u90e8\u4ef6\uff0c\u7528\u6236\u53ef\u4ee5\u81ea\u7531\u5730\u4f7f\u7528\u9019\u4e9b\u5c0f\u90e8\u4ef6\u4f86\u69cb\u5efa\u81ea\u5df1\u7684UI\uff0c\u4f8b\u5982",(0,r.kt)("a",h({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"Text Area"),", ",(0,r.kt)("a",h({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button")," and ",(0,r.kt)("a",h({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"Texture Mapper"),". \u4f46\u5728\u57fa\u672c\u5c64\u9762\u4e0a\uff0cTouchGFX\u4e2d\u7684\u5c0f\u90e8\u4ef6\u53ea\u662f\u4e00\u500b\u62bd\u8c61\u7684\u5b9a\u7fa9\uff0c\u53ef\u4ee5\u5728\u87a2\u5e55\u4e0a\u7e6a\u88fd\uff0c\u4e5f\u53ef\u4ee5\u8207\u4e4b\u4ea4\u4e92\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/button/widget-appearance.png",mdxType:"Figure"},"\u4e00\u500b\u4ee5\u5716\u50cf\u5c0f\u90e8\u4ef6\u4f5c\u70ba\u80cc\u666f\u7684\u6309\u9215\u5c0f\u90e8\u4ef6"),(0,r.kt)("p",null,"\u6709\u4e86TouchGFX Designer\uff0c\u7528\u6236\u53ef\u4ee5\u5c07\u4efb\u4f55\u60f3\u8981\u7684\u5c0f\u90e8\u4ef6\u6dfb\u52a0\u5230\u87a2\u5e55\u4e0a\uff0c\u4e26\u4f7f\u7528\u6240\u63d0\u4f9b\u7684\u7279\u5b9a\u65bc\u6bcf\u500b\u5c0f\u90e8\u4ef6\u7684\u5c6c\u6027\u9032\u884c\u5b9a\u5236\u3002 \u9084\u53ef\u4ee5\u901a\u904e\u4f7f\u7528TouchGFX\u63d0\u4f9b\u7684\u4e0d\u540c\u985e\u578b\u7684\u5bb9\u5668\u5c0d\u5c0f\u90e8\u4ef6\u9032\u884c\u5206\u7d44\u3002"),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u6dfb\u52a0\u5c0f\u90e8\u4ef6\uff0c\u65b9\u6cd5\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"add(widget_instance_name);"),"\u51fd\u6578\uff0c\u6216\u5c07\u5c0f\u90e8\u4ef6\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d\uff0c\u65b9\u6cd5\u662f\u4f7f\u7528\u5bb9\u5668\u6dfb\u52a0\u51fd\u6578\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"myContainer.add(widget_instance_name);"),"\u3002 \u6dfb\u52a0\u5c0f\u90e8\u4ef6\u7684\u9806\u5e8f\u5c07\u6c7a\u5b9aZ\u8ef8\u4e0a\u7684\u9806\u5e8f\u3002 \u6700\u5f8c\u6dfb\u52a0\u7684\u5c0f\u90e8\u4ef6\u5c07\u51fa\u73fe\u5728\u87a2\u5e55\u7684\u6700\u524d\u9762\u3002"),(0,r.kt)("p",null,"\u5c0f\u90e8\u4ef6\u7684\u5ea7\u6a19\u7e3d\u662f\u76f8\u5c0d\u4e8e\u5176\u7236\u7bc0\u9ede\uff0c\u5373\u6839\u5bb9\u5668\uff08\u87a2\u5e55\uff09\u6216\u5bb9\u5668\u3002"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u60a8\u53ef\u4ee5\u5275\u5efa\u81ea\u5df1\u7684\u5c0f\u90e8\u4ef6\uff0c\u4ee5\u6eff\u8db3\u81ea\u5df1\u53ef\u80fd\u6709\u7684\u4efb\u4f55\u7279\u5b9a\u9700\u6c42\u3002 \u5982\u9700\u8a73\u7d30\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-widgets",mdxType:"Link"},"\u81ea\u8a02\u5c0f\u90e8\u4ef6"),"\u4e00\u7bc0\u3002"),(0,r.kt)("h2",h({},{id:"containers"}),"\u5bb9\u5668"),(0,r.kt)("p",null,"\u5bb9\u5668\u662fTouchGFX\u4e2d\u7684\u4e00\u7a2e\u5143\u4ef6\uff0c\u53ef\u4ee5\u5305\u542b\u5b50\u7bc0\u9ede\uff08\u6bd4\u5982\u5c0f\u90e8\u4ef6\u548c\u5176\u4ed6\u5bb9\u5668\uff09\u3002"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u4ee5\u5728Widgets\uff08\u5c0f\u90e8\u4ef6\uff09\u9078\u9805\u5361\u4e2d\u7684containers\uff08\u5bb9\u5668\uff09\u985e\u5225\u4e0b\u627e\u5230\u5bb9\u5668\uff0c\u5411\u5bb9\u5668\u4e2d\u6dfb\u52a0\u5c0f\u90e8\u4ef6\u7684\u65b9\u6cd5\u5c07\u5c0f\u90e8\u4ef6\u62d6\u653e\u5230\u6a39\u72c0\u6aa2\u8996\u4e2d\u7684\u5bb9\u5668\u4e2d\u3002"),(0,r.kt)("p",null,"\u5b50\u5bb9\u5668\u5728Z\u8ef8\u4e0a\u7684\u9806\u5e8f\u7531\u5411\u5bb9\u5668\u4e2d\u6dfb\u52a0\u5b50\u5bb9\u5668\u6642\u7684\u9806\u5e8f\u6c7a\u5b9a - \u6700\u5f8c\u6dfb\u52a0\u7684\u5b50\u5bb9\u5668\u5c07\u986f\u793a\u5728\u87a2\u5e55\u7684\u6700\u524d\u9762\u3002"),(0,r.kt)("p",null,"\u7531\u65bcTouchGFX\u4e2d\u5c0f\u90e8\u4ef6\u7684\u4f4d\u7f6e\u662f\u76f8\u5c0d\u4e8e\u5176\u7236\u5bb9\u5668\u800c\u78ba\u5b9a\u7684\uff0c\u56e0\u6b64\u6539\u8b8a\u7236\u5bb9\u5668\u7684\u4f4d\u7f6e\u4e5f\u6703\u76f8\u61c9\u5730\u79fb\u52d5\u5b50\u5bb9\u5668\u3002"),(0,r.kt)("p",null,"\u5bb9\u5668\u5145\u7576\u8996\u7a97\uff0c\u9019\u610f\u5473\u8457\u53ea\u6709\u8207\u5bb9\u5668\u5e7e\u4f55\u5716\u5f62\u76f8\u4ea4\u7684\u5b50\u5bb9\u5668\u90e8\u5206\u624d\u53ef\u898b\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u52d5\u756b\u4e2d\uff0c\u60a8\u5c07\u770b\u5230\u5bb9\u5668\u7684\u8996\u7a97\u90e8\u5206\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002 \u9996\u5148\uff0c\u6211\u5011\u770b\u5230\u9019\u500b\u6309\u9215\u7684\u7236\u5bb9\u5668\u7684\u8f2a\u5ed3\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.gif",mdxType:"Figure"},"\u5145\u7576\u8996\u7a97\u7684\u5bb9\u5668"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u60a8\u53ef\u4ee5\u5275\u5efa\u81ea\u5df1\u7684\u5bb9\u5668\uff0c\u4ee5\u6eff\u8db3\u81ea\u5df1\u53ef\u80fd\u6709\u7684\u4efb\u4f55\u7279\u5b9a\u9700\u6c42\u3002 \u5982\u9700\u8a73\u7d30\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-containers",mdxType:"Link"},"\u81ea\u8a02\u5bb9\u5668"),"\u4e00\u7bc0\u3002"))}y.isMDXComponent=!0}}]);