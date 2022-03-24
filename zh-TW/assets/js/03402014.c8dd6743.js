"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7016],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,h=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,u(u({ref:t},s),{},{components:n})):r.createElement(h,u({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39130:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),o=n(73727),i=n(11368),u=n(35096),l=n(84487);const a=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),s=n(67023),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))k.call(t,n)&&v(e,n,t[n]);return e};var g=function(e){var t,n=e,{isNavLink:d,to:v,href:g,activeClassName:y,isActive:T,"data-noBrokenLinkCheck":x,autoAddBaseUrl:O=!0}=n,w=((e,t)=>{var n={};for(var r in e)b.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:X}}=(0,i.Z)(),{withBaseUrl:G}=(0,c.C)(),F=(0,r.useContext)(a),U=v||g,j=(0,u.Z)(U),E=null==U?void 0:U.replace("pathname://","");let _=void 0!==E?(I=E,O&&(e=>e.startsWith("/"))(I)?G(I):I):void 0;var I;_&&j&&(_=(0,s.applyTrailingSlash)(_,{trailingSlash:P,baseUrl:X}));const L=(0,r.useRef)(!1),Z=d?o.OL:o.rU,C=l.Z.canUseIntersectionObserver,D=(0,r.useRef)();(0,r.useEffect)((()=>(!C&&j&&null!=_&&window.docusaurus.prefetch(_),()=>{C&&D.current&&D.current.disconnect()})),[D,_,C,j]);const S=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,M=!_||!j||S;return _&&j&&!S&&!x&&F.collectLink(_),M?r.createElement("a",m(m({href:_},U&&!j&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(Z,m((B=m({},w),p(B,f({onMouseEnter:()=>{L.current||null==_||(window.docusaurus.preload(_),L.current=!0)},innerRef:e=>{var t,n;C&&e&&j&&(t=e,n=()=>{null!=_&&window.docusaurus.prefetch(_)},D.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.current.unobserve(t),D.current.disconnect(),n())}))})),D.current.observe(t))},to:_||""}))),d&&{isActive:T,activeClassName:y}));var B}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return u}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const u=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+u:u}(t,e,n,r)}}function u(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[o]=e.split(/[#?]/),i="/"===o||o===r?o:(u=o,n?function(e){return e.endsWith("/")?e:`${e}/`}(u):function(e){return e.endsWith("/")?e.slice(0,-1):e}(u));var u;return e.replace(o,i)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},23891:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return v},default:function(){return T},frontMatter:function(){return k},metadata:function(){return m},toc:function(){return g}});var r=n(3905),o=n(67294);class i extends o.Component{render(){return o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",{align:"left"},"Description"),o.createElement("td",null,this.props.description)),o.createElement("tr",null,o.createElement("td",{align:"left"},"Target Audience"),o.createElement("td",null,this.props.level)),o.createElement("tr",null,o.createElement("td",{align:"left"},"Duration"),o.createElement("td",null,this.props.duration)),o.createElement("tr",null,o.createElement("td",{align:"left"},"Links"),o.createElement("td",null,this.props.links))))}}var u=i,l=n(39130),a=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))f.call(t,n)&&h(e,n,t[n]);return e};const k={id:"presentations",title:"\u6587\u7a3f"},v=void 0,m={unversionedId:"resources/presentations",id:"resources/presentations",isDocsHomePage:!1,title:"\u6587\u7a3f",description:"\u5728\u672c\u7bc0\u4e2d\uff0c\u60a8\u5c07\u627e\u5230\u5404\u7a2e\u7528\u65bc\u6f14\u793a\u3001\u7814\u8a0e\u6703\u3001\u7db2\u8def\u7814\u8a0e\u6703\u548c\u8b1b\u7fd2\u7684TouchGFX\u6587\u7a3f\u3002 \u6f14\u793a\u6587\u7a3f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u6216\u8005\u4f5c\u70ba\u60a8\u81ea\u5df1\u7684TouchGFX\u6f14\u793a\u6587\u7a3f\u7684\u9748\u611f\uff0c\u6216\u8005\u7c21\u55ae\u5730\u4f5c\u70ba\u7d66\u5b9a\u4e3b\u984c\u7684\u8cc7\u8a0a\u4f86\u6e90\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/resources/presentations.mdx",sourceDirName:"resources",slug:"/resources/presentations",permalink:"/4.18/zh-TW/docs/resources/presentations",tags:[],version:"current",frontMatter:{id:"presentations",title:"\u6587\u7a3f"},sidebar:"docs",previous:{title:"Globals",permalink:"/4.18/zh-TW/docs/api/namespacetouchgfx"}},g=[{value:"TouchGFX\u6f14\u793a\u6587\u7a3f",id:"touchgfx-presentations",children:[{value:"TouchGFX \u4ecb\u7d39{#touchgfx-\u4ecb\u7d39}",id:"touchgfx-\u4ecb\u7d39touchgfx-\u4ecb\u7d39",children:[],level:3},{value:"TouchGFX \u6280\u8853\u6027\u4ecb\u7d39 {#touchgfx-\u6280\u8853\u6027-\u4ecb\u7d39}",id:"touchgfx-\u6280\u8853\u6027\u4ecb\u7d39-touchgfx-\u6280\u8853\u6027-\u4ecb\u7d39",children:[],level:3},{value:"\u5d4c\u5165\u5f0f\u5716\u5f62 - \u57fa\u672c\u6982\u5ff5  {#\u5d4c\u5165\u5f0f\u5716\u5f62---\u57fa\u672c\u6982\u5ff5}",id:"\u5d4c\u5165\u5f0f\u5716\u5f62---\u57fa\u672c\u6982\u5ff5--\u5d4c\u5165\u5f0f\u5716\u5f62---\u57fa\u672c\u6982\u5ff5",children:[],level:3},{value:"\u958b\u767c\u677f\u958b\u767c\u4ecb\u7d39 {#\u958b\u767c\u677f\u958b\u767c---\u4ecb\u7d39}",id:"\u958b\u767c\u677f\u958b\u767c\u4ecb\u7d39-\u958b\u767c\u677f\u958b\u767c---\u4ecb\u7d39",children:[],level:3},{value:"\u62bd\u8c61\u5c64\u958b\u767c\u4ecb\u7d39 {#\u62bd\u8c61\u5c64\u958b\u767c---\u4ecb\u7d39}",id:"\u62bd\u8c61\u5c64\u958b\u767c\u4ecb\u7d39-\u62bd\u8c61\u5c64\u958b\u767c---\u4ecb\u7d39",children:[],level:3},{value:"\u62bd\u8c61\u5c64 - \u9032\u968e\u8ab2\u984c {#\u62bd\u8c61\u5c64---\u9032\u968e\u8ab2\u984c}",id:"\u62bd\u8c61\u5c64---\u9032\u968e\u8ab2\u984c-\u62bd\u8c61\u5c64---\u9032\u968e\u8ab2\u984c",children:[],level:3},{value:"UI\u958b\u767c - \u57fa\u790e{#ui-\u958b\u767c ---\u57fa\u790e}",id:"ui\u958b\u767c---\u57fa\u790eui-\u958b\u767c----\u57fa\u790e",children:[],level:3},{value:"UI\u958b\u767c - \u4f7f\u7528\u6587\u5b57\u8207\u5b57\u9ad4 {#UI-\u958b\u767c---\u4f7f\u7528\u6587\u5b57\u8207\u5b57\u9ad4}",id:"ui\u958b\u767c---\u4f7f\u7528\u6587\u5b57\u8207\u5b57\u9ad4-ui-\u958b\u767c---\u4f7f\u7528\u6587\u5b57\u8207\u5b57\u9ad4",children:[],level:3},{value:"UI \u958b\u767c- \u5f8c\u7aef\u901a\u4fe1 {#UI-\u958b\u767c---\u5f8c\u7aef\u901a\u4fe1}",id:"ui-\u958b\u767c--\u5f8c\u7aef\u901a\u4fe1-ui-\u958b\u767c---\u5f8c\u7aef\u901a\u4fe1",children:[],level:3}],level:2},{value:"TouchGFX \u7814\u8a0e\u6703 {#TouchGFX \u7814\u8a0e\u6703}",id:"touchgfx-\u7814\u8a0e\u6703-touchgfx-\u7814\u8a0e\u6703",children:[{value:"UI \u958b\u767c - \u5165\u9580{#ui-\u958b\u767c---\u5165\u9580}",id:"ui-\u958b\u767c---\u5165\u9580ui-\u958b\u767c---\u5165\u9580",children:[],level:3},{value:"UI \u958b\u767c- \u57fa\u790e- \u958b\u59cb\u958b\u767c {#ui-\u958b\u767c---\u57fa\u790e---\u958b\u59cb\u958b\u767c}",id:"ui-\u958b\u767c--\u57fa\u790e--\u958b\u59cb\u958b\u767c-ui-\u958b\u767c---\u57fa\u790e---\u958b\u59cb\u958b\u767c",children:[],level:3},{value:"\u62bd\u8c61\u5c64\u958b\u767c - \u4ecb\u7d39 - \u958b\u59cb\u958b\u767c {#\u62bd\u8c61\u5c64\u958b\u767c---\u4ecb\u7d39 ---\u958b\u59cb\u958b\u767c}",id:"\u62bd\u8c61\u5c64\u958b\u767c---\u4ecb\u7d39---\u958b\u59cb\u958b\u767c-\u62bd\u8c61\u5c64\u958b\u767c---\u4ecb\u7d39----\u958b\u59cb\u958b\u767c",children:[],level:3}],level:2}],y={toc:g};function T(e){var t,n=e,{components:o}=n,i=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},y),i),c(t,s({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u672c\u7bc0\u4e2d\uff0c\u60a8\u5c07\u627e\u5230\u5404\u7a2e\u7528\u65bc\u6f14\u793a\u3001\u7814\u8a0e\u6703\u3001\u7db2\u8def\u7814\u8a0e\u6703\u548c\u8b1b\u7fd2\u7684TouchGFX\u6587\u7a3f\u3002 \u6f14\u793a\u6587\u7a3f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u6216\u8005\u4f5c\u70ba\u60a8\u81ea\u5df1\u7684TouchGFX\u6f14\u793a\u6587\u7a3f\u7684\u9748\u611f\uff0c\u6216\u8005\u7c21\u55ae\u5730\u4f5c\u70ba\u7d66\u5b9a\u4e3b\u984c\u7684\u8cc7\u8a0a\u4f86\u6e90\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c07\u4e00\u7d44\u6f14\u793a\u6587\u7a3f\u62fc\u5408\u8d77\u4f86\uff0c\u4ee5\u4fbf\u6eff\u8db3\u60a8\u7684TouchGFX\u6f14\u793a\u6216\u7814\u8a0e\u6703\u4e3b\u984c\u9700\u6c42\u3002 \u6240\u6709\u6f14\u793a\u6587\u7a3f\u90fd\u6709\u5c0d\u672c\u5b57\u6a94\u7db2\u7ad9\u4e0a\u76f8\u95dc\u6587\u7ae0\u548c\u7ae0\u7bc0\u7684\u5f15\u7528\u3002"),(0,r.kt)("p",null,"\u6f14\u793a\u6587\u7a3f\u6709\u5e7b\u71c8\u7247\u683c\u5f0f\u7684PDF\u7248\u672c\u548c\u201c\u5099\u8a3b\u6587\u7a3f\u201d\u7248\u672c\u53ef\u4f9b\u4e0b\u8f09\uff0c\u5176\u4e2d\u53ef\u4ee5\u627e\u5230\u6f14\u8b1b\u8005\u7684\u66f4\u591a\u6f14\u793a\u6587\u7a3f\u8cc7\u8a0a\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u4e26\u975e\u6240\u6709\u6f14\u793a\u6587\u7a3f\u90fd\u53ef\u4f9b\u4e0b\u8f09\uff0c\u4f46\u6703\u5728\u6e96\u5099\u597d\u5f8c\u7acb\u5373\u63d0\u4f9b\u3002"),(0,r.kt)("p",null,"\u672a\u4f86\u7684\u5927\u591a\u6578\u6f14\u793a\u6587\u7a3f\u90fd\u5c07\u96a8\u9644\u5f71\u7247\uff0c\u5176\u4e2d\u5c07\u5c55\u793a\u4f7f\u7528\u5e7b\u71c8\u7247\u7684\u4e3b\u984c\u6f14\u793a\u6587\u7a3f\u3002"),(0,r.kt)("h2",b({},{id:"touchgfx-presentations"}),"TouchGFX\u6f14\u793a\u6587\u7a3f"),(0,r.kt)("div",{class:"table-with-anchor-header presentation-table"},(0,r.kt)("h3",b({},{id:"touchgfx-\u4ecb\u7d39touchgfx-\u4ecb\u7d39"}),"TouchGFX \u4ecb\u7d39{#touchgfx-\u4ecb\u7d39}"),(0,r.kt)(u,{"\u63cf\u8ff0":"\u5c0d TouchGFX \u7684\u7c21\u77ed\u3001\u4e00\u822c\u548c\u975e\u6280\u8853\u6027\u4ecb\u7d39","\u76ee\u6a19\u89c0\u773e":"\u5165\u9580 - \u5168\u90e8","\u9577\u5ea6":"15 \u5206\u9418","\u9023\u7d50":"\u7121",mdxType:"PresentationTable"}),(0,r.kt)("h3",b({},{id:"touchgfx-\u6280\u8853\u6027\u4ecb\u7d39-touchgfx-\u6280\u8853\u6027-\u4ecb\u7d39"}),"TouchGFX \u6280\u8853\u6027\u4ecb\u7d39 {#touchgfx-\u6280\u8853\u6027-\u4ecb\u7d39}"),(0,r.kt)(u,{"\u63cf\u8ff0":"\u9032\u884c TouchGFX \u958b\u767c\u7684\u7c21\u77ed\u6280\u8853\u4ecb\u7d39\uff0c \u6db5\u84cb\u4e86\u6240\u6d89\u53ca\u7684\u5de5\u5177\u4e26\u63cf\u8ff0\u5de5\u4f5c\u7684\u6d41\u7a0b","\u76ee\u6a19\u89c0\u773e":"\u5165\u9580 - \u4efb\u4f55TouchGFX\u7684\u958b\u767c\u8005","\u9577\u5ea6":"14 \u5206\u9418","\u9023\u7d50":(0,r.kt)("div",null,(0,r.kt)(l.Z,{to:"/presentations/resources/touchgfx-technical-introduction/touchgfx-technical-introduction-presentation.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u7c21\u5831")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{to:"/presentations/resources/touchgfx-technical-introduction/touchgfx-technical-introduction-speakers-note.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u6587\u5b57\u7a3f")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{to:"https://www.youtube.com/watch?v=rYqeppW46iU",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"Youtube\u5f71\u7247"))),mdxType:"PresentationTable"}),(0,r.kt)("h3",b({},{id:"\u5d4c\u5165\u5f0f\u5716\u5f62---\u57fa\u672c\u6982\u5ff5--\u5d4c\u5165\u5f0f\u5716\u5f62---\u57fa\u672c\u6982\u5ff5"}),"\u5d4c\u5165\u5f0f\u5716\u5f62 - \u57fa\u672c\u6982\u5ff5  {#\u5d4c\u5165\u5f0f\u5716\u5f62---\u57fa\u672c\u6982\u5ff5}"),(0,r.kt)(u,{"\u63cf\u8ff0":"\u5d4c\u5165\u5f0f\u8a2d\u5099\u5716\u5f62\u7684\u6838\u5fc3\u6982\u5ff5\u6982\u8ff0\uff0c \u9032\u884c TouchGFX \u9805\u76ee\u958b\u767c\u7684\u826f\u597d\u80cc\u666f\u77e5\u8b58","\u76ee\u6a19\u89c0\u773e":"\u5165\u9580 - TouchGFX\u61c9\u7528\u7a0b\u5f0f\u958b\u767c\u8005","\u9577\u5ea6":"55 \u5206\u9418","\u9023\u7d50":(0,r.kt)("div",null,(0,r.kt)(l.Z,{to:"/presentations/resources/embedded-graphics-basic-concepts/embedded-graphics-basic-concepts-presentation.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u7c21\u5831")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{to:"/presentations/resources/embedded-graphics-basic-concepts/embedded-graphics-basic-concepts-speakernotes.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u6587\u5b57\u7a3f")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{to:"https://www.youtube.com/watch?v=rBaV4hk4-M4",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"Youtube\u5f71\u7247"))),mdxType:"PresentationTable"}),(0,r.kt)("h3",b({},{id:"\u958b\u767c\u677f\u958b\u767c\u4ecb\u7d39-\u958b\u767c\u677f\u958b\u767c---\u4ecb\u7d39"}),"\u958b\u767c\u677f\u958b\u767c\u4ecb\u7d39 {#\u958b\u767c\u677f\u958b\u767c---\u4ecb\u7d39}"),(0,r.kt)(u,{"\u63cf\u8ff0":"\u6db5\u84cb\u5728\u70ba TouchGFX \u5c08\u6848\u9032\u884c\u958b\u767c\u677f\u958b\u767c\u6642\u9700\u8981\u89e3\u6c7a\u7684\u6838\u5fc3\u4e3b\u984c","\u76ee\u6a19\u89c0\u773e":"\u5165\u9580 - \u786c\u9ad4\u96c6\u6210\u8005","\u9577\u5ea6":"55 \u5206\u9418","\u9023\u7d50":(0,r.kt)("div",null,(0,r.kt)(l.Z,{to:"/presentations/resources/board-bring-up-introduction/board-bring-up-introduction-presentation.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u7c21\u5831")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{to:"/presentations/resources/board-bring-up-introduction/board-bring-up-introduction-speakernotes.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u6587\u5b57\u7a3f")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{to:"https://youtu.be/KVRtVtVUZoc",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"Youtube\u5f71\u7247"))),mdxType:"PresentationTable"}),(0,r.kt)("h3",b({},{id:"\u62bd\u8c61\u5c64\u958b\u767c\u4ecb\u7d39-\u62bd\u8c61\u5c64\u958b\u767c---\u4ecb\u7d39"}),"\u62bd\u8c61\u5c64\u958b\u767c\u4ecb\u7d39 {#\u62bd\u8c61\u5c64\u958b\u767c---\u4ecb\u7d39}"),(0,r.kt)(u,{"\u63cf\u8ff0":"\u4ecb\u7d39TouchGFX\u62bd\u8c61\u5c64\u7684\u958b\u767c\u7a0b\u5e8f\uff0c \u63cf\u8ff0\u62bd\u8c61\u5c64\u7684\u4e3b\u8981\u8077\u8cac\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 TouchGFX \u751f\u6210\u5668 ","\u7269\u6a19\u89c0\u773e":"\u5165\u9580 - TouchGFX\u62bd\u8c61\u5c64\u958b\u767c\u8005","\u9577\u5ea6":"12 \u5206\u9418","\u9023\u7d50":(0,r.kt)("div",null,(0,r.kt)(l.Z,{to:"/presentations/resources/abstraction-layer-development-introduction/abstraction-layer-development-introduction-presentation.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u7c21\u5831")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{to:"/presentations/resources/abstraction-layer-development-introduction/abstraction-layer-development-introduction-speakernotes.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u6587\u5b57\u7a3f")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{to:"https://youtu.be/zs7YCP8oqXo",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"Youtube\u5f71\u7247"))),mdxType:"PresentationTable"}),(0,r.kt)("h3",b({},{id:"\u62bd\u8c61\u5c64---\u9032\u968e\u8ab2\u984c-\u62bd\u8c61\u5c64---\u9032\u968e\u8ab2\u984c"}),"\u62bd\u8c61\u5c64 - \u9032\u968e\u8ab2\u984c {#\u62bd\u8c61\u5c64---\u9032\u968e\u8ab2\u984c}"),(0,r.kt)(u,{"\u63cf\u8ff0":"\u6df1\u5165TouchGFX\u62bd\u8c61\u5c64\u7684\u9032\u968e\u8ab2\u984c\uff0c \u8a0e\u8ad6 TouchGFX \u62bd\u8c61\u5c64\uff08\u7531 TouchGFX Generator \u751f\u6210\uff09\u548c CubeMX MCU \u914d\u7f6e\u5408\u4f75\u3001\u5982\u4f55\u6dfb\u52a0\u60a8\u81ea\u5df1\u7684 BSP \u4ee5\u53ca\u5982\u4f55\u624b\u52d5\u914d\u7f6e TouchGFX \u4ee5\u652f\u63f4\u5728 CubeMX \u4e2d\u7121\u6cd5\u914d\u7f6e\u7684\u5834\u666f","\u76ee\u6a19\u89c0\u773e":"\u4e2d\u968e - TouchGFX \u62bd\u8c61\u5c64\u958b\u767c\u8005","\u9577\u5ea6":"60 \u5206\u9418","\u9023\u7d50":"\u7121",mdxType:"PresentationTable"}),(0,r.kt)("h3",b({},{id:"ui\u958b\u767c---\u57fa\u790eui-\u958b\u767c----\u57fa\u790e"}),"UI\u958b\u767c - \u57fa\u790e{#ui-\u958b\u767c ---\u57fa\u790e}"),(0,r.kt)(u,{"\u63cf\u8ff0":"UI \u958b\u767c\u7684\u95dc\u9375 TouchGFX \u4e3b\u984c\u7c21\u4ecb\uff0c \u6db5\u84cb\u7684\u4e3b\u984c\u5305\u62ec UI \u61c9\u7528\u7a0b\u5f0f\u67b6\u69cb\u3001\u5982\u4f55\u5728\u958b\u767c\u904e\u7a0b\u4e2d\u4f7f\u7528 TouchGFX Designer\u3001\u4f7f\u7528 PC \u6a21\u64ec\u5668\u4ee5\u53ca\u7de8\u5beb\u6b63\u78ba\u6709\u6548\u7684\u7528\u6236\u7a0b\u5f0f\u78bc","\u76ee\u6a19\u89c0\u773e":"\u4e2d\u968e - TouchGFX\u61c9\u7528\u958b\u767c\u8005","\u9577\u5ea6":"60 \u5206\u9418","\u9023\u7d50":(0,r.kt)("div",null,(0,r.kt)(l.Z,{to:"/presentations/resources/ui-development-fundamentals/ui-development-fundamentals-presentation.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u7c21\u5831")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{to:"/presentations/resources/ui-development-fundamentals/ui-development-fundamentals-speakernotes.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u6587\u5b57\u7a3f")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{to:"https://www.youtube.com/watch?v=rKAIu2zSHU0",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"Youtube\u5f71\u7247"))),mdxType:"PresentationTable"}),(0,r.kt)("h3",b({},{id:"ui\u958b\u767c---\u4f7f\u7528\u6587\u5b57\u8207\u5b57\u9ad4-ui-\u958b\u767c---\u4f7f\u7528\u6587\u5b57\u8207\u5b57\u9ad4"}),"UI\u958b\u767c - \u4f7f\u7528\u6587\u5b57\u8207\u5b57\u9ad4 {#UI-\u958b\u767c---\u4f7f\u7528\u6587\u5b57\u8207\u5b57\u9ad4}"),(0,r.kt)(u,{"\u63cf\u8ff0":"\u986f\u793a\u958b\u767c\u4eba\u54e1\u5728 TouchGFX \u61c9\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u6587\u5b57\u548c\u5b57\u9ad4\u6642\u6703\u9047\u5230\u7684\u6240\u6709\u7d30\u7bc0 ","\u76ee\u6a19\u89c0\u773e":"\u4e2d\u968e- TouchGFX\u61c9\u7528\u958b\u767c\u8005","\u9577\u5ea6":"60 \u5206\u9418","\u9023\u7d50":"\u7121",mdxType:"PresentationTable"}),(0,r.kt)("h3",b({},{id:"ui-\u958b\u767c--\u5f8c\u7aef\u901a\u4fe1-ui-\u958b\u767c---\u5f8c\u7aef\u901a\u4fe1"}),"UI \u958b\u767c- \u5f8c\u7aef\u901a\u4fe1 {#UI-\u958b\u767c---\u5f8c\u7aef\u901a\u4fe1}"),(0,r.kt)(u,{"\u63cf\u8ff0":"\u89e3\u91cb\u8207\u7cfb\u7d71\u4e2d\u7684\u975eGUI\u90e8\u5206\u9032\u884c\u901a\u4fe1\u7684\u5efa\u8b70\u65b9\u6cd5\u4e26\u986f\u793a\u7bc4\u4f8b ","\u76ee\u6a19\u89c0\u773e":"\u4e2d\u968e - TouchGFX\u61c9\u7528\u958b\u767c\u8005","\u9577\u5ea6":"60 \u5206\u9418","\u9023\u7d50":"\u7121",mdxType:"PresentationTable"})),(0,r.kt)("h2",b({},{id:"touchgfx-\u7814\u8a0e\u6703-touchgfx-\u7814\u8a0e\u6703"}),"TouchGFX \u7814\u8a0e\u6703 {#TouchGFX \u7814\u8a0e\u6703}"),(0,r.kt)("div",{class:"table-with-anchor-header presentation-table"},(0,r.kt)("h3",b({},{id:"ui-\u958b\u767c---\u5165\u9580ui-\u958b\u767c---\u5165\u9580"}),"UI \u958b\u767c - \u5165\u9580{#ui-\u958b\u767c---\u5165\u9580}"),(0,r.kt)(u,{"\u63cf\u8ff0":"\u4ecb\u7d39TouchGFX \u61c9\u7528\u958b\u767c\uff0c \u5b89\u88dd\u5de5\u5177\uff0c\u5275\u5efa\u548c\u4fee\u6539\u60a8\u7684\u7b2c\u4e00\u500b\u61c9\u7528","\u65e5\u6a19\u89c0\u773e":"\u5165\u9580 - TouchGFX\u61c9\u7528\u958b\u767c\u8005","\u9577\u5ea6":"60 - 90 \u5206\u9418","\u9023\u7d50":(0,r.kt)("div",null,(0,r.kt)(l.Z,{to:"/presentations/resources/touchgfx-workshop-ui-development-getting-started.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u7c21\u5831")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{to:"/presentations/resources/touchgfx-workshop-ui-development-getting-started-speakers-note.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u6587\u5b57\u7a3f"))),mdxType:"PresentationTable"}),(0,r.kt)("h3",b({},{id:"ui-\u958b\u767c--\u57fa\u790e--\u958b\u59cb\u958b\u767c-ui-\u958b\u767c---\u57fa\u790e---\u958b\u59cb\u958b\u767c"}),"UI \u958b\u767c- \u57fa\u790e- \u958b\u59cb\u958b\u767c {#ui-\u958b\u767c---\u57fa\u790e---\u958b\u59cb\u958b\u767c}"),(0,r.kt)(u,{"\u63cf\u8ff0":"\u6db5\u84cb UI \u958b\u767c\u57fa\u790e\u77e5\u8b58\uff0c\u4f8b\u5982\u5c0d\u7528\u6236\u8f38\u5165\u505a\u51fa\u53cd\u61c9\u3001\u66f4\u6539\u87a2\u5e55\u3001\u4fdd\u7559\u548c\u6062\u5fa9\u6578\u64da\u3001\u88fd\u4f5c\u52d5\u756b\u4ee5\u53ca\u9ad8\u6548\u958b\u767c\u7684\u6280\u5de7\u548c\u7ac5\u9580 ","\u76ee\u6a19\u89c0\u773e":"\u4e2d\u968e - TouchGFX\u61c9\u7528\u958b\u767c\u8005","\u9577\u5ea6":"2 \u5c0f\u6642","\u9023\u7d50":"\u7121",mdxType:"PresentationTable"}),(0,r.kt)("h3",b({},{id:"\u62bd\u8c61\u5c64\u958b\u767c---\u4ecb\u7d39---\u958b\u59cb\u958b\u767c-\u62bd\u8c61\u5c64\u958b\u767c---\u4ecb\u7d39----\u958b\u59cb\u958b\u767c"}),"\u62bd\u8c61\u5c64\u958b\u767c - \u4ecb\u7d39 - \u958b\u59cb\u958b\u767c {#\u62bd\u8c61\u5c64\u958b\u767c---\u4ecb\u7d39 ---\u958b\u59cb\u958b\u767c}"),(0,r.kt)(u,{"\u63cf\u8ff0":"\u4ecb\u7d39\u4f7f\u7528TouchGFX \u751f\u6210\u5668\u548c STM32CubeIDE \u958b\u767cSTM32H7B3I-DK\u958b\u767c\u677f\u7684\u62bd\u8c61\u5c64","\u76ee\u6a19\u89c0\u773e":"\u5165\u9580 - TouchGFX\u62bd\u8c61\u5c64\u958b\u767c","\u9577\u5ea6":"90 \u5206\u9418","\u9023\u7d50":(0,r.kt)(l.Z,{to:"/presentations/resources/touchgfx-workshop-al-development-hands-on.pdf",target:"_blank",mdxType:"Link"},(0,r.kt)("b",null,"\u7c21\u5831")),mdxType:"PresentationTable"})))}T.isMDXComponent=!0}}]);