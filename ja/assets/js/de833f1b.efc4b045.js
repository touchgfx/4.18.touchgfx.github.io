"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8261],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=i,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),i=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),i=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,r){var n=r(67294);class i extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},39130:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(67294),i=r(73727),a=r(11368),o=r(35096),l=r(84487);const c=(0,n.createContext)({collectLink:()=>{}});var s=r(25026),u=r(67023),d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&g(e,r,t[r]);if(f)for(var r of f(t))v.call(t,r)&&g(e,r,t[r]);return e};var y=function(e){var t,r=e,{isNavLink:d,to:g,href:y,activeClassName:k,isActive:w,"data-noBrokenLinkCheck":O,autoAddBaseUrl:x=!0}=r,j=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))t.indexOf(n)<0&&v.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:M,baseUrl:T}}=(0,a.Z)(),{withBaseUrl:R}=(0,s.C)(),E=(0,n.useContext)(c),P=g||y,A=(0,o.Z)(P),Z=null==P?void 0:P.replace("pathname://","");let F=void 0!==Z?(C=Z,x&&(e=>e.startsWith("/"))(C)?R(C):C):void 0;var C;F&&A&&(F=(0,u.applyTrailingSlash)(F,{trailingSlash:M,baseUrl:T}));const S=(0,n.useRef)(!1),L=d?i.OL:i.rU,_=l.Z.canUseIntersectionObserver,D=(0,n.useRef)();(0,n.useEffect)((()=>(!_&&A&&null!=F&&window.docusaurus.prefetch(F),()=>{_&&D.current&&D.current.disconnect()})),[D,F,_,A]);const U=null!==(t=null==F?void 0:F.startsWith("#"))&&void 0!==t&&t,N=!F||!A||U;return F&&A&&!U&&!O&&E.collectLink(F),N?n.createElement("a",b(b({href:F},P&&!A&&{target:"_blank",rel:"noopener noreferrer"}),j)):n.createElement(L,b((B=b({},j),p(B,h({onMouseEnter:()=>{S.current||null==F||(window.docusaurus.preload(F),S.current=!0)},innerRef:e=>{var t,r;_&&e&&A&&(t=e,r=()=>{null!=F&&window.docusaurus.prefetch(F)},D.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.current.unobserve(t),D.current.disconnect(),r())}))})),D.current.observe(t))},to:F||""}))),d&&{isActive:w,activeClassName:k}));var B}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},25026:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return o}});var n=r(11368),i=r(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[i]=e.split(/[#?]/),a="/"===i||i===n?i:(o=i,r?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(i,a)}},67023:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},94001:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return v},metadata:function(){return g},toc:function(){return b},default:function(){return k}});var n=r(3905),i=r(39130),a=r(29415),o=r(44035),l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&h(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&h(e,r,t[r]);return e};const m={id:"embedded-graphics",title:"\u7d44\u8fbc\u307f\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9"},v=void 0,g={unversionedId:"basic-concepts/embedded-graphics",id:"basic-concepts/embedded-graphics",isDocsHomePage:!1,title:"\u7d44\u8fbc\u307f\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9",description:"\u7d44\u8fbc\u307f\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3068\u3044\u3046\u7528\u8a9e\u306f\u591a\u304f\u306e\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/embedded-graphics.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/embedded-graphics",permalink:"/4.18/ja/docs/basic-concepts/embedded-graphics",tags:[],version:"current",frontMatter:{id:"embedded-graphics",title:"\u7d44\u8fbc\u307f\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u65b9\u6cd5",permalink:"/4.18/ja/docs/introduction/getting-started"},next:{title:"\u30ab\u30e9\u30fc\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",permalink:"/4.18/ja/docs/basic-concepts/color-formats"}},b=[{value:"4\u3064\u306e\u4e3b\u8981\u90e8\u5206",id:"the-four-main-parts",children:[{value:"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9",id:"mcu",children:[],level:3},{value:"RAM",id:"ram",children:[],level:3},{value:"Flash",id:"flash",children:[],level:3},{value:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",id:"display",children:[],level:3}],level:2}],y={toc:b};function k(e){var t,r=e,{components:l}=r,h=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},y),h),c(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u7d44\u8fbc\u307f\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3068\u3044\u3046\u7528\u8a9e\u306f\u591a\u304f\u306e\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u307e\u305a\u3001\u7d44\u8fbc\u307f\u3068\u3044\u3046\u7528\u8a9e\u306f\u3001\u4eba\u306b\u3088\u3063\u3066\u3055\u307e\u3056\u307e\u306a\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u4e00\u90e8\u306e\u4eba\u306b\u3068\u3063\u3066\u3001\u7d44\u8fbc\u307f\u30b7\u30b9\u30c6\u30e0\u306f\u975e\u5e38\u306b\u4fe1\u983c\u3067\u304d\u308b\u65e7\u578b\u306e8\u30d3\u30c3\u30c8\uff65\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u304c\u306a\u304f\u3001\u4e8b\u5b9f\u4e0aRAM\u3001ROM\u3001\u307e\u305f\u306fGPIO\u3082\u642d\u8f09\u3057\u3066\u3044\u306a\u3044\u3082\u306e\u3067\u3059\u3002 \u4ed6\u306e\u4eba\u306b\u3068\u3063\u3066\u306f\u3001\u3059\u3079\u3066\u3092\u30ae\u30ac\u30d0\u30a4\u30c8\u3067\u642d\u8f09\u3059\u308b\u6700\u65b0\u306e\u30b9\u30de\u30fc\u30c8\uff65\u30d5\u30a9\u30f3\u3092\u610f\u5473\u3059\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"2\u3064\u76ee\u306b\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3068\u3044\u3046\u7528\u8a9e\u306f\u3055\u307e\u3056\u307e\u306b\u89e3\u91c8\u3067\u304d\u307e\u3059\u3002 \u4e00\u90e8\u306e\u4eba\u306b\u3068\u3063\u3066\u306f\u3001\u304a\u6c17\u306b\u5165\u308a\u306e\u30da\u30a4\u30f3\u30c6\u30a3\u30f3\u30b0\uff65\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u81ea\u5206\u72ec\u81ea\u306e\u30d4\u30af\u30bb\u30eb\u3092\u63cf\u753b\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u3053\u308c\u3082\u5225\u306e\u4eba\u306b\u3068\u3063\u3066\u306f\u3001\u81ea\u5206\u306e\u30b2\u30fc\u30e0\u6a5f\u3067\u5b9f\u884c\u3055\u308c\u308b3D\u63cf\u753b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"TouchGFX\u306b\u304a\u3044\u3066\u3001\u7d44\u8fbc\u307f\u30b7\u30b9\u30c6\u30e0\u306fSTM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u30d9\u30fc\u30b9\u306b\u3057\u305f\u30b7\u30b9\u30c6\u30e0\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u3055\u3089\u306b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306f\u3001\u6bce\u79d260\u30d5\u30ec\u30fc\u30e0\u3067\u5b9f\u884c\u3055\u308c\u308b\u3001\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",f({},{id:"the-four-main-parts"}),"4\u3064\u306e\u4e3b\u8981\u90e8\u5206"),(0,n.kt)("p",null,"\u3053\u306e\u3088\u3046\u306a\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u3001\u76f4\u63a5\u95a2\u4fc2\u3059\u308b4\u3064\u306e\u4e3b\u8981\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u691c\u8a0e\u3057\u307e\u3059\u3002 \u5f53\u7136\u3001\u7d44\u307f\u8fbc\u307f\u30b7\u30b9\u30c6\u30e0\u306b\u306f\u3055\u3089\u306b\u591a\u304f\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5b58\u5728\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u308c\u3089\u306f\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306e\u8868\u793a\u3068\u306f\u3042\u307e\u308a\u95a2\u4fc2\u304c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/embedded-graphics-primer/4-main-parts.png",noShadow:"true",mdxType:"Figure"},"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3001RAM\u3001Flash\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"),(0,n.kt)("p",null,"\u624b\u77ed\u306b\u8a00\u3048\u3070\u3001TouchGFX\u306f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u4f7f\u7528\u3057\u3066\u3001Flash\u30e1\u30e2\u30ea\u306b\u3042\u308b\u30d1\u30fc\u30c4\u3092\u7d44\u307f\u7acb\u3066\u308b\u3053\u3068\u3067\u3001RAM\u5185\u306b\u753b\u50cf\u3092\u4f5c\u6210\u304a\u3088\u3073\u66f4\u65b0\u3057\u307e\u3059\u3002 \u4f5c\u6210\u3055\u308c\u305f\u753b\u50cf\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u8ee2\u9001\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30bb\u30b9\u304c\u3001\u53ef\u80fd\u304b\u3064\u5fc5\u8981\u306a\u3060\u3051\u7e70\u308a\u8fd4\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("h3",f({},{id:"mcu"}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9"),(0,n.kt)("p",null,"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306f\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u306e\u56f0\u96e3\u306a\u90e8\u5206\u3092\u3059\u3079\u3066\u62c5\u3044\u307e\u3059\u3002 Flash\u5185\u306e\u753b\u50cf\u3092\u8aad\u307f\u53d6\u308a\u3001RAM\u306b\u66f8\u304d\u8fbc\u307f\u307e\u3059\u3002 \u534a\u900f\u660e\u306e\u8d64\u8272\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u753b\u50cf\u306b\u30de\u30fc\u30b8\u3059\u308b\u3068\u304d\u306b\u7d50\u679c\u306e\u8272\u3092\u8a08\u7b97\u3057\u3001\u3053\u308c\u3089\u3092RAM\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002 \u5186\u306e\u3059\u3079\u3066\u306e\u30d4\u30af\u30bb\u30eb\u3092\u63cf\u753b\u3057\u3066RAM\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002 \u753b\u50cf\u3092RAM\u304b\u3089\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3057\u307e\u3059\u3002"),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/mcu-internal.svg",noShadow:"true",width:240,mdxType:"Figure"},"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306fCPU\u3001\u5185\u90e8Flash\u3001\u5185\u90e8RAM\u306a\u3069\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"STM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u306f\u3001LTDC\u3001Chrom-ART\u3001Chrom-GRC\u306a\u3069\u306e\u56fa\u6709\u306e\u6a5f\u80fd\u304c\u3042\u308a\u3001\u3053\u308c\u3089\u306f\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306e\u5b9f\u73fe\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"\u9069\u5207\u306a\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u9078\u629e\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c9"),"\u3068\u3001",(0,n.kt)(i.Z,{to:"../development/board-bring-up/how-to/02-cpu-running",mdxType:"Link"},"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052\u306e\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8a2d\u5b9a\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c9"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h3",f({},{id:"ram"}),"RAM"),(0,n.kt)("p",null,"RAM\u306b\u306f\u8a08\u7b97\u5f8c\u306e\u7d50\u679c\u306e\u753b\u50cf\uff08",(0,n.kt)("a",f({parentName:"p"},{href:"framebuffer"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1"),"\uff09\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002 \u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306e\u66f4\u65b0\u6642\u306b\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306fRAM\u306b\u5bfe\u3057\u3066\u8aad\u53d6\u308a / \u66f8\u8fbc\u307f\u3092\u884c\u3044\u307e\u3059\u3002 \u3055\u3089\u306b\u3001\u7d50\u679c\u306e\u753b\u50cf\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3059\u308b\u3068\u304d\u306b\u3001\u518d\u5ea6\u8aad\u307f\u53d6\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u591a\u304f\u306e\u5834\u5408\u3001\u7d50\u679c\u306e\u753b\u50cf\u306f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u5185\u90e8\u306eRAM\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002 \u7d50\u679c\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u5185\u90e8RAM\u306b\u542b\u3081\u308b\u3053\u3068\u304c\u4e0d\u53ef\u80fd\u306a\u5834\u5408\u306f\u3001\u5916\u90e8RAM\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"\u9069\u5207\u306aRAM\u306e\u9078\u629e\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c9"),"\u3068\u3001",(0,n.kt)(i.Z,{to:"../development/board-bring-up/how-to/04-enable-external-ram",mdxType:"Link"},"\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u306eRAM\u306e\u8a2d\u5b9a\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c9"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h3",f({},{id:"flash"}),"Flash"),(0,n.kt)("p",null,"Flash\u306b\u306f\u3059\u3079\u3066\u306e\u9759\u7684\u30c7\u30fc\u30bf\u304c\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002 \u753b\u50cf\u3001\u30d5\u30a9\u30f3\u30c8\u3001\u304a\u3088\u3073\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002 Flash\u306f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u3088\u3063\u3066\u8aad\u307f\u53d6\u3089\u308c\u3001\u305d\u306e\u5185\u5bb9\u304cRAM\u306b\u66f8\u304d\u8fbc\u307e\u308c\u305f\u308a\u7d50\u5408\u3055\u308c\u305f\u308a\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u5916\u90e8Flash\u304c\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a2\u30bb\u30c3\u30c8\u3092\u4fdd\u6301\u3067\u304d\u308b\u307b\u3069\u306e\u5bb9\u91cf\u3092\u3001\u5185\u90e8Flash\u304c\u5099\u3048\u3066\u3044\u308b\u3053\u3068\u306f\u307b\u3068\u3093\u3069\u306a\u3044\u304b\u3089\u3067\u3059\u3002 \u305f\u3060\u3057\u3001\u975e\u5e38\u306b\u30b7\u30f3\u30d7\u30eb\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3042\u308c\u3070\u3001\u5185\u90e8Flash\u3067\u5341\u5206\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u7406\u8ad6\u4e0a\u3001Flash\u306f\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\u306a\u306e\u3067\u3001\u30d4\u30af\u30bb\u30eb\u3092Flash\u304b\u3089\u76f4\u63a5\u8aad\u307f\u53d6\u308a\u3001RAM\u306b\u66f8\u304d\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u4e00\u65b9\u3001Flash\u304c\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\u3067\u306a\u3044\u5834\u5408\u306b\u306f\u3001Flash\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092RAM\u306b\u8ee2\u9001\u3057\u3001\u305d\u3053\u304b\u3089\u8aad\u307f\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"\u9069\u5207\u306aFlash\u306e\u9078\u629e\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c9"),"\u3068\u3001",(0,n.kt)(i.Z,{to:"../development/board-bring-up/how-to/06-flash-external-addressable",mdxType:"Link"},"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052\u306eFlash\u306e\u8a2d\u5b9a\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c9"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h3",f({},{id:"display"}),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"),(0,n.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306f\u3001\u753b\u50cf\u304c\u4eba\u306e\u76ee\u306e\u524d\u306b\u5b9f\u969b\u306b\u8868\u793a\u3055\u308c\u308b\u5834\u6240\u3067\u3059\u3002"),(0,n.kt)("p",null,"RAM\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u8a08\u7b97\u3055\u308c\u305f\u753b\u50cf\uff08\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff09\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u3088\u308a\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u4e00\u5b9a\u9593\u9694\u3067\u8ee2\u9001\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\u9069\u5207\u306a\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u9078\u629e\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c9"),"\u3068\u3001",(0,n.kt)(i.Z,{to:"../development/board-bring-up/how-to/03-display-internal",mdxType:"Link"},"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u8a2d\u5b9a\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c9"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u9078\u629e\u53ef\u80fd\u306a\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-selection-introduction",mdxType:"Link"},"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u9078\u629e"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("li",null,"\u30dc\u30fc\u30c9\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)(i.Z,{to:"../development/board-bring-up/board-introduction",mdxType:"Link"},"\u30dc\u30fc\u30c9\u7acb\u3061\u4e0a\u3052"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}k.isMDXComponent=!0}}]);