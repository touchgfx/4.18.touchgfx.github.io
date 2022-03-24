"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3794],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},39130:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(67294),a=r(73727),l=r(11368),i=r(35096),o=r(84487);const u=(0,n.createContext)({collectLink:()=>{}});var p=r(25026),c=r(67023),s=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&k(e,r,t[r]);if(h)for(var r of h(t))f.call(t,r)&&k(e,r,t[r]);return e};var v=function(e){var t,r=e,{isNavLink:s,to:k,href:v,activeClassName:y,isActive:G,"data-noBrokenLinkCheck":N,autoAddBaseUrl:R=!0}=r,B=((e,t)=>{var r={};for(var n in e)g.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:w}}=(0,l.Z)(),{withBaseUrl:O}=(0,p.C)(),T=(0,n.useContext)(u),A=k||v,E=(0,i.Z)(A),j=null==A?void 0:A.replace("pathname://","");let P=void 0!==j?(S=j,R&&(e=>e.startsWith("/"))(S)?O(S):S):void 0;var S;P&&E&&(P=(0,c.applyTrailingSlash)(P,{trailingSlash:x,baseUrl:w}));const C=(0,n.useRef)(!1),F=s?a.OL:a.rU,_=o.Z.canUseIntersectionObserver,Z=(0,n.useRef)();(0,n.useEffect)((()=>(!_&&E&&null!=P&&window.docusaurus.prefetch(P),()=>{_&&Z.current&&Z.current.disconnect()})),[Z,P,_,E]);const L=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,X=!P||!E||L;return P&&E&&!L&&!N&&T.collectLink(P),X?n.createElement("a",b(b({href:P},A&&!E&&{target:"_blank",rel:"noopener noreferrer"}),B)):n.createElement(F,b((U=b({},B),d(U,m({onMouseEnter:()=>{C.current||null==P||(window.docusaurus.preload(P),C.current=!0)},innerRef:e=>{var t,r;_&&e&&E&&(t=e,r=()=>{null!=P&&window.docusaurus.prefetch(P)},Z.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.current.unobserve(t),Z.current.disconnect(),r())}))})),Z.current.observe(t))},to:P||""}))),s&&{isActive:G,activeClassName:y}));var U}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){r.d(t,{C:function(){return l},Z:function(){return i}});var n=r(11368),a=r(35096);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=l();return r(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),l="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,l)}},67023:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var l=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},78081:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return g},contentTitle:function(){return f},metadata:function(){return k},toc:function(){return b},default:function(){return y}});var n=r(3905),a=r(39130),l=r(29415),i=r(44035),o=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&m(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&m(e,r,t[r]);return e};const g={id:"color-formats",title:"\u8272\u5f69\u683c\u5f0f"},f=void 0,k={unversionedId:"basic-concepts/color-formats",id:"basic-concepts/color-formats",isDocsHomePage:!1,title:"\u8272\u5f69\u683c\u5f0f",description:"\u8272\u5f69\u662f\u986f\u793a\u5668\u7684\u50cf\u7d20\u5448\u73fe\u51fa\u7684\u6a23\u5b50\u3002 \u9019\u4e9b\u8272\u5f69\u4f86\u81ea\u5f71\u50cf\u7de9\u885d\u5340\u7684\u503c\u3002 \u50b3\u7d71\u4e0a\uff0c\u7e6a\u5716\u7cfb\u7d71\u4e2d\u80fd\u5920\u8868\u73fe\u3001\u4f7f\u7528\u548c\u986f\u793a\u7684\u8272\u5f69\u6578\u91cf\u662f\u6709\u9650\u7684\u3002 \u9019\u540c\u6a23\u9069\u7528\u65bcTouchGFX\u7684\u61c9\u7528\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/color-formats.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/color-formats",permalink:"/4.18/zh-TW/docs/basic-concepts/color-formats",tags:[],version:"current",frontMatter:{id:"color-formats",title:"\u8272\u5f69\u683c\u5f0f"},sidebar:"docs",previous:{title:"\u5d4c\u5165\u5f0f\u7e6a\u5716\u7cfb\u7d71",permalink:"/4.18/zh-TW/docs/basic-concepts/embedded-graphics"},next:{title:"\u5f71\u50cf\u7de9\u885d\u5340",permalink:"/4.18/zh-TW/docs/basic-concepts/framebuffer"}},b=[{value:"\u8272\u5f69",id:"color",children:[{value:"\u7070\u5ea6",id:"grayscale",children:[],level:3},{value:"\u4e0d\u900f\u660e\u5ea6",id:"opacity",children:[],level:3}],level:2},{value:"\u8272\u6df1",id:"color-depth",children:[],level:2},{value:"\u683c\u5f0f",id:"formats",children:[{value:"\u50cf\u7d20\u8272\u5f69\u683c\u5f0f",id:"pixel-color-formats",children:[{value:"RGB888",id:"rgb888",children:[],level:4},{value:"RGB565",id:"rgb565",children:[],level:4},{value:"RGBx2222, xRGB2222, BGRx2222, xBGR2222",id:"rgbx2222-xrgb2222-bgrx2222-xbgr2222",children:[],level:4},{value:"GRAY4, GRAY2, BW",id:"gray4-gray2-bw",children:[],level:4}],level:3},{value:"\u5f71\u50cf\u683c\u5f0f",id:"image-formats",children:[],level:3},{value:"\u6587\u5b57\u683c\u5f0f",id:"text-formats",children:[],level:3}],level:2},{value:"\u8996\u89ba\u54c1\u8cea",id:"visual-quality",children:[{value:"\u6296\u52d5",id:"dithering",children:[],level:3}],level:2},{value:"\u6027\u80fd",id:"performance",children:[{value:"Alpha \u6df7\u5408",id:"alpha-blending",children:[],level:3}],level:2},{value:"\u5176\u4ed6\u5716\u50cf\u683c\u5f0f",id:"other-image-formats",children:[],level:2}],v={toc:b};function y(e){var t,r=e,{components:o}=r,m=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},v),m),u(t,p({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u8272\u5f69\u662f\u986f\u793a\u5668\u7684\u50cf\u7d20\u5448\u73fe\u51fa\u7684\u6a23\u5b50\u3002 \u9019\u4e9b\u8272\u5f69\u4f86\u81ea",(0,n.kt)("a",h({parentName:"p"},{href:"framebuffer"}),"\u5f71\u50cf\u7de9\u885d\u5340"),"\u7684\u503c\u3002 \u50b3\u7d71\u4e0a\uff0c\u7e6a\u5716\u7cfb\u7d71\u4e2d\u80fd\u5920\u8868\u73fe\u3001\u4f7f\u7528\u548c\u986f\u793a\u7684\u8272\u5f69\u6578\u91cf\u662f\u6709\u9650\u7684\u3002 \u9019\u540c\u6a23\u9069\u7528\u65bcTouchGFX\u7684\u61c9\u7528\u3002"),(0,n.kt)("p",null,"\u50cf\u7d20\u8272\u5f69\u7684\u6578\u91cf\u6703\u5f71\u97ff\u5230\u61c9\u7528\u7684\u8a31\u591a\u65b9\u9762\u3002 \u5f9e\u986f\u793a\u5668\u4e0a\u6240\u770b\u5230\u7684\u5167\u5bb9\u7684\u8996\u89ba\u5916\u89c0\u5230\u5f71\u50cf\u7de9\u885d\u7522\u751f\u7684\u8a18\u61b6\u9ad4\u6d88\u8017\uff0c\u4ee5\u53ca\u6574\u9ad4\u6027\u80fd\u3002 \u672c\u7bc0\u5c07\u9032\u4e00\u6b65\u4ecb\u7d39TouchGFX\u4e2d\u7684\u8272\u5f69\u548c\u53ef\u7528\u7684\u8272\u5f69\u683c\u5f0f\uff0c\u4e26\u6307\u51fa\u5176\u512a\u7f3a\u9ede\u3002"),(0,n.kt)("h2",h({},{id:"color"}),"\u8272\u5f69"),(0,n.kt)("p",null,"TouchGFX\u4e2d\u7684\u8272\u5f69\u662f\u7d05\u3001\u7da0\u548c\u85cd\u5206\u91cf\u7684\u4e09\u5143\u7d44\uff0c\u5373RGB\u8272\u5f69\u3002 \u6bcf\u500b\u8272\u5f69\u5206\u91cf\u7684\u7bc4\u570d\u70ba0\u81f3255\u3002 0\u8868\u793a\u8a72\u5206\u91cf\u7121\u4f5c\u7528\uff0c255\u8868\u793a\u8a72\u5206\u91cf\u8655\u65bc\u6700\u5927\u503c\u3002"),(0,n.kt)("p",null,"\u5168\u9ed1\u8272\u8868\u793a\u70baRGB (0,0,0)\uff0c\u5168\u767d\u8272\u8868\u793a\u70ba (255,255,255)\u3002 \u4eae\u7da0\u8272\u70ba (0,255,0)\uff0c\u534a\u4eae\u7d05\u70ba (128,0,0)\uff0c\u6697\u7d2b\u8272\u70ba (64,0,64)\uff0c\u4ee5\u6b64\u985e\u63a8\u3002"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgb-colors.svg",noShadow:"true",height:"70",mdxType:"Figure"},"\u4e00\u4e9bRGB\u8272\u5f69"),(0,n.kt)("h3",h({},{id:"grayscale"}),"\u7070\u5ea6"),(0,n.kt)("p",null,"\u7070\u5ea6\u61c9\u7528\u7684\u6240\u6709\u8272\u5f69\u5747\u70ba\u7070\u8272\uff0c\u5305\u62ec\u5f9e\u9ed1\u8272\u5230\u767d\u8272\u4e4b\u9593\u7684\u6240\u6709\u7070\u8272\uff0c\u56e0\u6b64\u7528\u7070\u8272\u5f37\u5ea6\uff08\u800c\u4e0d\u662fRGB\u503c\uff09\u8868\u793a\u3002 \u53ef\u5c07\u7070\u5ea6\u8272\u5f69\u7406\u89e3\u70baR = G = B\u7684RGB\u8272\u5f69\u3002"),(0,n.kt)("h3",h({},{id:"opacity"}),"\u4e0d\u900f\u660e\u5ea6"),(0,n.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u6211\u5011\u6703\u8003\u616e\u70ba\u8272\u5f69\u589e\u52a0\u4e00\u500b\u63cf\u8ff0\u8272\u5f69\u900f\u660e\u5ea6\u7684\u5206\u91cf\u3002 \u8207\u8272\u5f69\u7684\u5176\u4ed6\u5206\u91cf\u4e00\u6a23\uff0c\u4e0d\u900f\u660e\u5ea6\u7684\u7bc4\u570d\u70ba0\u81f3255\u3002 \u6709\u4e0d\u900f\u660e\u5ea6\u7684\u8272\u5f69\u7a31\u70baRGBA\u8272\u5f69\u3002 A\u8868\u793aalpha\uff0c\u662f\u4e0d\u900f\u660e\u5ea6\u4f7f\u7528\u7684\u50b3\u7d71\u540d\u7a31\u3002"),(0,n.kt)("p",null,"\u5b8c\u5168\u4e0d\u900f\u660e\u7684\u9ed1\u8272\u8868\u793a\u70ba (0,0,0,255)\uff0c\u6709\u4e00\u4e9b\u900f\u660e\u7684\u7d05\u8272\u8868\u793a\u70ba (255,0,0,128)\uff0c\u8af8\u5982\u6b64\u985e\u3002"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgba-colors.svg",noShadow:"true",height:"70",mdxType:"Figure"},"\u767d\u8272\u548c\u7070\u8272\u4e4b\u4e0a\u7684\u4e00\u4e9bRGBA\u8272\u5f69"),(0,n.kt)("p",null,"\u7576\u8272\u5f69\u4e26\u975e\u5b8c\u5168\u4e0d\u900f\u660e\u6642\uff0c\u9700\u5c07\u5b83\u8207\u5df2\u5b58\u5728\u7684\u8272\u5f69\u9032\u884c\u6df7\u5408\u3002 \u9019\u7a2e\u8272\u5f69\u6df7\u5408\u7a31\u70baAlpha\u6df7\u5408\u3002"),(0,n.kt)("h2",h({},{id:"color-depth"}),"\u8272\u6df1"),(0,n.kt)("p",null,"\u8272\u6df1\u662f\u6307\u5f71\u50cf\u7de9\u885d\u5340\u4e2d\u7528\u65bc\u63cf\u8ff0\u6bcf\u7a2e\u8272\u5f69\u7684\u4f4d\u5143\u6578\u3002 \u6211\u5011\u5c07\u8a72\u503c\u8868\u793a\u70ba\u6bcf\u4e00\u50cf\u7d20\u4f4d\u5143\u6578\uff0c\u6216\u7c21\u7a31bpp\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u7684\u4f4d\u5143\u6578\u8d8a\u591a\uff0c\u53ef\u63cf\u8ff0\u7684\u8272\u5f69\u8d8a\u591a\u3002"),(0,n.kt)("p",null,"\u5e38\u7528\u7684\u8272\u6df1\u70ba24 bpp\u3002 \u7531\u65bc\u6bcf\u4e00\u4f4d\u5143\u90fd\u53ef\u4ee5\u662f\u6709\u6216\u7121\uff0c\u9019\u8868\u793a\u53ef\u4ee5\u5448\u73fe2",(0,n.kt)("sup",null,"24")," = 16777216\u7a2e\u4e0d\u540c\u8272\u5f69\u3002"),(0,n.kt)("p",null,"\u53e6\u4e00\u500b\u8f03\u5c11\u4f7f\u7528\u7684\u8272\u6df1\u662f1 bpp\u3002 \u6b64\u8272\u6df1\u9069\u7528\u4e8e\u9ed1\u767d\u61c9\u7528\uff0c\u53ea\u80fd\u5448\u73fe2",(0,n.kt)("sup",null,"1 "),"= 2\u7a2e\u4e0d\u540c\u8272\u5f69\u3002"),(0,n.kt)("p",null,"TouchGFX\u652f\u63f4\u4e0b\u5217\u8272\u6df1\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"32 bpp - 16777216\u7a2e\u8272\u5f69\u53ca\u76f8\u61c9\u7684\u4e0d\u900f\u660e\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"24 bpp - 16777216\u7a2e\u8272\u5f69"),(0,n.kt)("li",{parentName:"ul"},"16 bpp - 65536\u7a2e\u8272\u5f69"),(0,n.kt)("li",{parentName:"ul"},"6 bpp - 32\u7a2e\u8272\u5f69"),(0,n.kt)("li",{parentName:"ul"},"4 bpp - 16\u7a2e\u7070\u5ea6\u8272\u5f69"),(0,n.kt)("li",{parentName:"ul"},"2 bpp - 4\u7a2e\u7070\u5ea6\u8272\u5f69"),(0,n.kt)("li",{parentName:"ul"},"1 bpp - 2\u7a2e\u7070\u5ea6\u8272\u5f69")),(0,n.kt)("p",null,"\u95dc\u65bc\u8272\u5f69\u5206\u91cf\u7bc4\u570d\u7684\u4e00\u4e9b\u88dc\u5145\u3002 \u7576\u4f7f\u7528\u7684\u8272\u6df1\u5c0f\u65bc24 bpp\u6642\uff0c\u7d05\u3001\u7da0\u548c\u85cd\u5206\u91cf\u4e2d\u6bcf\u4e00\u500b\u7684\u7bc4\u570d\u4e26\u4e0d\u76f4\u63a5\u53d60\u81f3255\u3002 \u4ee516 bpp\u7684\u7d05\u8272\u5206\u91cf\u70ba\u4f8b\uff0c\u7bc4\u570d\u70ba0\u81f331\u3002 \u6211\u5011\u5c07\u503c31\u8996\u70ba16 bpp\u8272\u6df1\u6642\u80fd\u5920\u8868\u73fe\u7684\u6700\u7d05\u7684\u8272\u5f69\uff0c\u537324 bpp\u8272\u6df1\u6642\u7684\u503c255\u3002 \u4e00\u7a2e\u7406\u89e3\u65b9\u5f0f\u662f16 bpp\u8272\u6df1\u7684\u8272\u5f69\u53ea\u662f24 bpp\u8272\u6df1\u53ef\u8868\u73fe\u8272\u5f69\u7684\u4e00\u500b\u5b50\u96c6\u3002"),(0,n.kt)("h2",h({},{id:"formats"}),"\u683c\u5f0f"),(0,n.kt)("p",null,"\u5728\u78ba\u5b9a\u8868\u793a\u8272\u5f69\u6240\u9700\u7684\u4f4d\u5143\u6578\u5f8c\uff0c\u6211\u5011\u9032\u4e00\u6b65\u63a2\u8a0e\u4f4d\u5143\u7684\u5167\u5bb9\u3002 \u4e00\u500b\u8272\u5f69\u5305\u542b\u4e86\u3127\u4e9b\u63cf\u8ff0\u7d05\u3001\u7da0\u548c\u85cd\u5206\u91cf\u3002"),(0,n.kt)("h3",h({},{id:"pixel-color-formats"}),"\u50cf\u7d20\u8272\u5f69\u683c\u5f0f"),(0,n.kt)("p",null,"\u6839\u64da\u61c9\u7528\u7684\u8272\u6df1\uff0c\u53ef\u4f7f\u7528\u67d0\u4e9b\u7279\u5b9a\u7684\u8272\u5f69\u683c\u5f0f\u3002"),(0,n.kt)("h4",h({},{id:"rgb888"}),"RGB888"),(0,n.kt)("p",null,"\u5728TouchGFX\u4e2d\uff0c\u8272\u6df1\u70ba24 bpp\u7684\u8272\u5f69\u5176\u8272\u5f69\u683c\u5f0f\u70baRGB888\u3002 \u9019\u610f\u5473\u8457\u5c0d\u7d05\u3001\u7da0\u548c\u85cd\u5206\u91cf\u4e2d\u7684\u6bcf\u4e00\u500b\u5206\u91cf\u4f7f\u75288\u500b\u4f4d\u5143\u3002"),(0,n.kt)("p",null,"\u4ee5\u4eae\u7d2b\u8272RGB (255,0,255) \u70ba\u4f8b\uff0c\u901a\u904e\u5c07\u5206\u91cf\u7d44\u5408\u6210\u4e00\u500b\u8272\u5f69\u503c\u4f86\u8868\u793a\u9019\u7a2e\u8272\u5f69"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint32_t brightPurpleRGB888 = 255 << 16 | 0 << 8 | 255 << 0;\n")),(0,n.kt)("h4",h({},{id:"rgb565"}),"RGB565"),(0,n.kt)("p",null,"TouchGFX\u5c0d16 bpp\u8272\u5f69\u4f7f\u7528\u8272\u5f69\u683c\u5f0fRGB565\uff0c \u5373\u7d05\u3001\u7da0\u548c\u85cd\u8272\u5206\u5225\u70ba5\u4f4d\u30016\u4f4d\u548c5\u4f4d\u3002 \u7d05\u8272\u70ba5\u4f4d\uff0c\u5168\u4eae\u70ba31\uff0c\u4eae\u7d05\u8272\u7684\u7a0b\u5f0f\u78bc\u70ba"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint16_t brightPurpleRGB565 = 31 << 11 | 0 << 5 | 0 << 0;\n")),(0,n.kt)("h4",h({},{id:"rgbx2222-xrgb2222-bgrx2222-xbgr2222"}),"RGBx2222, xRGB2222, BGRx2222, xBGR2222"),(0,n.kt)("p",null,"\u5c0d\u65bc6 bpp\u8272\u5f69\uff0cTouchGFX\u652f\u63f44\u7a2e\u4e0d\u540c\u8272\u5f69\u683c\u5f0f\uff1aRGBx2222\u3001xRGB2222\u3001BGRx2222\u548cxBGR222\u3002 \u524d\u8ff0\u683c\u5f0f\u4e2d\u4e4b\u6240\u4ee5\u6709x\uff0c\u662f\u56e0\u70ba6\u4f4d\u5143\u8272\u5f69\u6309\u4f4d\u5143\u7d44\u7684\u5f62\u5f0f\u5b58\u5132\u3002 \u70ba\u4e86\u69cb\u6210\u4f4d\u5143\u7d44\uff0c\u75282\u500b\u4f4d\u5143\u586b\u5145\u8272\u5f69\u3002 \u540c\u6642\u63d0\u4f9bRGB\u548cBGR\u662f\u8003\u616e\u5230\u4e00\u4e9b\u986f\u793a\u5668\u7684\u9700\u6c42\uff0c\u5982\u6b64\u5247\u7121\u9700\u5728\u5411\u986f\u793a\u5668\u767c\u9001\u50cf\u7d20\u524d\u8f49\u63db\u50cf\u7d20\u3002 \u5728RGBx2222\u6a21\u5f0f\u4e0b\uff0c\u8868\u793a\u4eae\u9ec3\u8272\u7684\u7a0b\u5f0f\u78bc\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint8_t brightYellowRGBx2222 = 3 << 6 | 3 << 4 | 0 << 2;\n")),(0,n.kt)("h4",h({},{id:"gray4-gray2-bw"}),"GRAY4, GRAY2, BW"),(0,n.kt)("p",null,"\u5c0d\u65bc\u6bcf\u7a2e\u7070\u5ea6\u8272\u6df1\uff0cTouchGFX\u90fd\u652f\u63f4\u4e00\u7a2e\u5c0d\u61c9\u8272\u5f69\u683c\u5f0f\u3002 4 bpp\u7684\u8272\u5f69\u683c\u5f0f\u8868\u793a\u70baGRAY4\uff0c2 bpp\u70baGRAY2\uff0c1 bpp\u70baBW\uff08\u8868\u793a\u9ed1\u8272\u548c\u767d\u8272\uff09\u3002 \u5c0d\u65bc4 bpp\uff0c\u5168\u767d\u8272\u70ba"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint8_t whiteGRAY4 = 15;\n")),(0,n.kt)("p",null,"TouchGFX\u6709\u4e00\u9805\u8f14\u52a9\u5de5\u5177\uff0c\u53ef\u8fd4\u56de\u8272\u5f69\u5728\u7576\u524d\u8272\u5f69\u683c\u5f0f\u4e0b\u7684\u6b63\u78ba\u8868\u793a\u65b9\u6cd5\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/Color.hpp>\n...\naColor = Color::getColorFromRGB(255,0,128);\n")),(0,n.kt)("h3",h({},{id:"image-formats"}),"\u5f71\u50cf\u683c\u5f0f"),(0,n.kt)("p",null,"\u5f71\u50cf\u662f\u5927\u591a\u6578UI\u61c9\u7528\u7684\u91cd\u8981\u90e8\u5206\uff0c\u5f71\u50cf\u7531\u8272\u5f69\u586b\u5145\u800c\u6210\u3002 \u5728TouchGFX\u4e2d\uff0c\u5f71\u50cf\u5b58\u5132\u5728\u8a18\u61b6\u9ad4\u4e2d\uff0c\u7531\u7279\u5b9a\u683c\u5f0f\u7684\u8272\u5f69\u586b\u5145\u800c\u6210\u3002 \u5728\u8a31\u591a\u60c5\u6cc1\u4e0b\uff0c\u5f71\u50cf\u4f7f\u7528",(0,n.kt)("a",h({parentName:"p"},{href:"#pixel-color-formats"}),"\u652f\u63f4\u7684\u50cf\u7d20\u8272\u5f69\u683c\u5f0f"),"\u4e2d\u7684\u4e00\u7a2e\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u5f71\u50cf\u683c\u5f0f\u3002 \u5728\u7e6a\u88fd\u524d\uff0c\u7279\u5b9a\u5f71\u50cf\u8272\u5f69\u683c\u5f0f\u4e0b\u7684\u5f71\u50cf\u4e2d\u7684\u50cf\u7d20\u6703\u88ab\u8f49\u63db\u70ba\u5408\u9069\u7684\u50cf\u7d20\u683c\u5f0f"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"\u5f71\u50cf\u8272\u5f69\u683c\u5f0f"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"ARGB8888"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"32\u4f4d\uff0c\u6bcf\u500b\u5206\u91cf8\u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"8\u4f4d\u5143\u7d22\u5f15\u683c\u5f0f\uff0cARGB8888\u8abf\u8272\u677f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"RGB888"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"24\u4f4d\uff0c\u6bcf\u500b\u5206\u91cf8\u4f4d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB888"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"8\u4f4d\u5143\u7d22\u5f15\u683c\u5f0f\uff0cRGB888\u8abf\u8272\u677f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"RGB666"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"24\u4f4d\uff0c\u6bcf\u500b\u5206\u91cf6\u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"RGB565"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"16\u4f4d\uff0c\u7d05\u82725\u4f4d\u3001\u7da0\u82726\u4f4d\u548c\u85cd\u82725\u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB565"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"8\u4f4d\u5143\u7d22\u5f15\u683c\u5f0f\uff0cRGB565\u8abf\u8272\u677f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"ARGB2222"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u500b\u5206\u91cf2\u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"ABGR2222"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u500b\u5206\u91cf2\u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"RGBA2222"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u500b\u5206\u91cf2\u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"BGRA2222"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u6bcf\u500b\u5206\u91cf2\u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"GRAY4"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"4\u4f4d\u7070\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"GRAY2"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"2\u4f4d\u7070\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"BW"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"1\u4f4d\u7070\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"BW_RLE"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"1\u4f4d\u5143\u7070\u5ea6\u904b\u884c\u9577\u5ea6\u7de8\u78bc")))),(0,n.kt)("p",null,"\u9019\u4e9b\u5f71\u50cf\u683c\u5f0f\u4e2d\u7684\u4e00\u4e9b\u683c\u5f0f\uff08L8\uff09\u6309\u7167\u8272\u5f69\u67e5\u95b1\u8cc7\u6599\u8868\uff08\u7a31\u70baCLUT\uff09\u4f86\u5448\u73fe\u76f8\u95dc\u5f71\u50cf\u4e26\u7de8\u5165\u5230\u8a72\u8868\u4e2d\u3002 The maximum number of possible colors in such an L8 image is 2",(0,n.kt)("sup",null,"8")," = 256. The L8 formats take up less space than their non-L8 counterparts, as an example a 100x100 image with 200 different colors, takes up 100x100x32 bits = 40000 bytes when stored in the ARGB8888 format, and only 100x100x8 bits + 200x32 bits = 10800 bytes when stored in the L8_ARGB8888 format."),(0,n.kt)("p",null,"\u5716\u50cf\u683c\u5f0fBW_RLE\u6309\u9023\u7e8c\u7684\u9ed1\u8272\u548c\u767d\u8272\u5b58\u5132\u8272\u5f69\uff0c\u800c\u4e0d\u662f\u5b58\u5132\u55ae\u4e00\u50cf\u7d20\u8272\u5f69\u3002 \u5728\u8a31\u591a\u60c5\u6cc1\u4e0b\uff0c\u9019\u7a2e\u683c\u5f0f\u4e5f\u53ef\u4ee5\u66f4\u9ad8\u6548\u5730\u5229\u7528\u5b58\u5132\u7a7a\u9593\u3002"),(0,n.kt)("p",null,"\u5176\u9918\u683c\u5f0f\u8207\u4ee5\u4e0a\u50cf\u7d20\u8272\u5f69\u683c\u5f0f\u76f8\u540c\u3002"),(0,n.kt)("h3",h({},{id:"text-formats"}),"\u6587\u5b57\u683c\u5f0f"),(0,n.kt)("p",null,"\u6587\u5b57\uff0c\u66f4\u6e96\u78ba\u5730\u8aaa\u662f\u5b57\u5f62\uff0c\u4e5f\u4ee5\u7279\u5b9a\u8272\u5f69\u683c\u5f0f\u5b58\u5132\u5728\u8a18\u61b6\u9ad4\u4e2d\u3002 TouchGFX\u4e2d\u53ef\u4f9b\u4f7f\u7528\u7684\u6587\u5b57\u8272\u5f69\u683c\u5f0f\u70ba"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"\u6587\u5b57\u8272\u5f69\u683c\u5f0f"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"A8"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"8\u4f4d\uff0c\u50c5\u4e0d\u900f\u660e\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"A4"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"4\u4f4d\uff0c\u50c5\u4e0d\u900f\u660e\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"A2"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"2\u4f4d\uff0c\u50c5\u4e0d\u900f\u660e\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"A1"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"1\u4f4d\uff0c\u50c5\u4e0d\u900f\u660e\u5ea6")))),(0,n.kt)("p",null,"\u5b57\u5f62\u683c\u5f0f\u7336\u5982\u5c0f\u5e45\u5f71\u50cf\uff0c\u6bcf\u500b\u8272\u5f69\u689d\u76ee\u90fd\u5132\u5b58\u4e86\u6bcf\u500b\u50cf\u7d20\u7684\u4e0d\u900f\u660e\u5ea6\u3002 \u56e0\u6b64\uff0c\u65e5\u5f8c\u4e0d\u50c5\u80fd\u61c9\u7528\u5be6\u969b\u8272\u5f69\u4ee5\u53ca\u7d05\u3001\u7da0\u548c\u85cd\u5206\u91cf\uff0c\u9084\u80fd\u7e6a\u88fd\u5982\u5132\u5b58\u5b57\u5f62\u201cA\u201d\u7684\u85cd\u8272\u548c\u7d05\u8272\u7248\u672c\u3002"),(0,n.kt)("p",null,"\u6bcf\u500b\u5b57\u5f62\u4f7f\u7528\u7684\u4f4d\u5143\u6578\u8d8a\u591a\uff0c\u901a\u5e38\u5c31\u6703\u986f\u5f97\u8d8a\u5e73\u6ed1\u548c\u7f8e\u89c0\u3002"),(0,n.kt)("h2",h({},{id:"visual-quality"}),"\u8996\u89ba\u54c1\u8cea"),(0,n.kt)("p",null,"\u5c0d\u65bc\u5d4c\u5165\u5f0f\u5716\u5f62\uff0c\u6211\u5011\u5e0c\u671b\u7372\u5f97\u6700\u9ad8\u8996\u89ba\u54c1\u8cea\uff0c\u4f46\u540c\u6642\u4e5f\u9700\u8003\u616e\u8a18\u61b6\u9ad4\u7684\u6d88\u8017\u91cf\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\uff0c\u901a\u5e38\u8da8\u5411\u65bc\u4f7f\u7528RGB565\u8272\u5f69\u683c\u5f0f\uff0c\u800c\u4e0d\u662f\u8a18\u61b6\u9ad4\u6d88\u8017\u91cf\u66f4\u5927\u7684RGB888\u8272\u5f69\u683c\u5f0f\uff0c\u4e00\u822c\u800c\u8a00\uff0c\u61c9\u5728\u8003\u616e\u5b58\u5132\u9700\u6c42\u7684\u540c\u6642\u9078\u64c7\u8996\u89ba\u54c1\u8cea\u6700\u9ad8\u7684\u8272\u5f69\u683c\u5f0f\u3002"),(0,n.kt)("h3",h({},{id:"dithering"}),"\u6296\u52d5"),(0,n.kt)("p",null,"\u5728\u4e0d\u540c\u8272\u5f69\u683c\u5f0f\u4e0b\u5448\u73fe\u5716\u50cf\u6642\uff0cTouchGFX\u4f7f\u7528\u6296\u52d5\u6280\u8853\u4f86\u6539\u5584\u5716\u50cf\u7684\u8996\u89ba\u54c1\u8cea\u3002"),(0,n.kt)("p",null,"\u6296\u52d5\u662f\u4e00\u9805\u5ee3\u70ba\u4eba\u77e5\u7684\u6280\u8853\uff0c\u5b83\u8b93\u5716\u50cf\u7684\u8272\u5f69\u770b\u8d77\u4f86\u6bd4\u5be6\u969b\u8272\u5f69\u66f4\u8c50\u5bcc\u3002 \u9019\u662f\u901a\u904e\u589e\u52a0\u5716\u50cf\u8272\u5f69\u7684\u96dc\u8a0a\u4f86\u5be6\u73fe\u7684\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u5c07RGB888\u5716\u50cf\u8f49\u63db\u70baRGB565\u5716\u50cf\u6642\uff0c\u4e26\u4e0d\u8a66\u55ae\u7d14\u7684\u5c07\u5404\u500b\u5206\u91cf\u7684\u6578\u503c\u6e1b\u5c0f\uff0c\u800c\u662f\u5728\u8f49\u63db\u904e\u7a0b\u4e2d\u70ba\u6bcf\u500b\u8272\u5f69\u5206\u91cf\u6dfb\u52a0\u4e00\u4e9b\u96dc\u8a0a\uff0c\u5f9e\u800c\u4f7f\u8f49\u63db\u5f8c\u7684\u5716\u50cf\u770b\u8d77\u4f86\u8207\u539f\u59cbRGB888\u5716\u50cf\u76f8\u4f3c\u4f46\u66f4\u8c50\u5bcc\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\u7528\u5716\u50cf\u800c\u4e0d\u662f\u8a9e\u8a00\u4f86\u8868\u793a\uff0c\u6211\u5011\u6709\u4e00\u5f35\u539f\u59cbRGB888\u5716\u50cf\u548c\u8a31\u591a\u8f49\u63db\u5f8c\u7684\u5716\u50cf\u3002 \u8f49\u63db\u5f8c\u7684\u6709\u548c\u6c92\u6709\u6296\u52d5\u7684RGB565\u683c\u5f0f\u5716\u50cf\u3001xRGB2222\u683c\u5f0f\u5716\u50cf\u548cGRAY4\u683c\u5f0f\u5716\u50cf\u3002"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgb888.png",noShadow:"true",width:"480",mdxType:"Figure"},"\u539f\u59cbRGB888\u5716\u50cf"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgb565.png",noShadow:"true",width:"480",mdxType:"Figure"},"\u8f49\u63db\u5f8c\u7684\u6709\u548c\u6c92\u6709\u6296\u52d5\u7684RGB565\u5716\u50cf"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/xrgb2222.png",noShadow:"true",width:"480",mdxType:"Figure"},"\u8f49\u63db\u5f8c\u7684\u6709\u548c\u6c92\u6709\u6296\u52d5\u7684xRGB2222\u5716\u50cf"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/gray4.png",noShadow:"true",width:"480",mdxType:"Figure"},"\u8f49\u63db\u5f8c\u7684\u6709\u548c\u6c92\u6709\u6296\u52d5\u7684GRAY4\u5716\u50cf"),(0,n.kt)("p",null,"\u7531\u6b64\u53ef\u898b\uff0c\u6296\u52d5\u53ef\u986f\u8457\u6539\u5584\u5716\u50cf\u7684\u611f\u77e5\u54c1\u8cea\u3002 \u5728\u8fd1\u8ddd\u96e2\u89c0\u5bdf\u6709\u548c\u6c92\u6709\u6296\u52d5\u7684RGB565\u5716\u50cf\u6642\uff0c\u53ef\u4ee5\u770b\u5230\u6709\u6296\u52d5\u7684\u5716\u50cf\u8207\u539f\u5716\u50cf\u5e7e\u4e4e\u5b8c\u5168\u76f8\u4f3c\uff0c\u800c\u6c92\u6709\u6296\u52d5\u7684\u5716\u50cf\u7684\u4e00\u4e9b\u5340\u57df\u5247\u5b58\u5728\u660e\u986f\u7684\u8272\u5e36\u3002 \u9019\u986f\u793a\u5728\u8a31\u591a\u60c5\u6cc1\u4e0b\uff0c16\u4f4d\u5143\u8272\u5f69\u8db3\u4ee5\u7372\u5f97\u770b\u8d77\u4f86\u4e0d\u932f\u7684\u5716\u5f62\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u5716\u5f62\u8cc7\u7522\u6709\u5de8\u5927\u7684\u8272\u5ea6\u659c\u7387\uff0c\u5373\u4f7f\u5728\u4f7f\u7528\u4e86\u6296\u52d5\u7684\u5716\u50cf\u4e2d\uff0c\u4e5f\u6703\u770b\u5230\u4e00\u4e9b\u8272\u5e36\u3002 \u4e0b\u9762\u662f\u5169\u500b\u7bc4\u4f8b\u3002 \u5f9eRGB888 (64,190,222) \u5230\u9ed1\u8272\u7684\u5e36\u85cd\u8272\u7684\u6f38\u5c64\u53ca\u8f49\u63db\u5f8c\u7684\u6709\u548c\u6c92\u6709\u4f7f\u7528\u6296\u52d5\u7684RGB565\u5716\u50cf\u3002"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/bluish.png",noShadow:"true",width:"800",mdxType:"Figure"},"\u539f\u59cbRGB888\u548c\u8f49\u63db\u5f8c\u7684\u6709\u548c\u6c92\u6709\u4f7f\u7528\u6296\u52d5\u7684RGB565\u5716\u50cf"),(0,n.kt)("p",null,"\u53e6\u4e00\u5e45\u5f9e (255,0,0) \u5230\u9ed1\u8272\u7684\u7d05\u8272\u6f38\u5c64\u3002"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/red.png",noShadow:"true",width:"800",mdxType:"Figure"},"\u539f\u59cbRGB888\u548c\u8f49\u63db\u5f8c\u7684\u6709\u548c\u6c92\u6709\u4f7f\u7528\u6296\u52d5\u7684RGB565\u5716\u50cf"),(0,n.kt)("p",null,"\u8fd1\u8ddd\u96e2\u89c0\u5bdf\u53ef\u4ee5\u767c\u73fe\uff0c\u6709\u6296\u52d5\u548c\u7121\u6296\u52d5\u7684RGB565\u5716\u50cf\u4e2d\u5747\u5b58\u5728\u8272\u5e36\u3002 \u7d05\u8272\u5716\u50cf\u4e2d\u7684\u8272\u5e36\u6700\u70ba\u660e\u986f\u3002"),(0,n.kt)("p",null,"\u52d9\u5fc5\u5bc6\u5207\u6ce8\u610f\u6240\u5f97\u5716\u50cf\u548c\u8272\u5f69\u683c\u5f0f\uff0c\u5fc5\u8981\u6642\u4fee\u6539\u539f\u59cb\u5716\u50cf\u6216\u9078\u64c7\u5176\u4ed6\u8272\u5f69\u683c\u5f0f\u3002"),(0,n.kt)("h2",h({},{id:"performance"}),"\u6027\u80fd"),(0,n.kt)("p",null,"\u8a0e\u8ad6\u7684\u6240\u6709\u5716\u50cf\u683c\u5f0f\u5747\u91dd\u5c0d\u7e6a\u88fd\u7684\u201c\u5bb9\u6613\u6027\u201d\u9032\u884c\u4e86\u512a\u5316\u3002 \u9019\u610f\u5473\u8457\u53ef\u4ee5\u5c07\u5716\u50cf\u6216\u591a\u6216\u5c11\u5730\u8907\u88fd\u5230\u5f71\u50cf\u7de9\u885d\uff0c\u7121\u9700\u9032\u884c\u5927\u91cf\u8f49\u63db\u3002"),(0,n.kt)("p",null,"\u9019\u662f\u6709\u610f\u70ba\u4e4b\uff0c\u662fTouchGFX\u80fd\u5920\u5728\u5fae\u63a7\u5236\u5668\u4e0a\u7372\u5f97\u6d41\u66a2\u5716\u5f62\u7684\u539f\u56e0\u4e4b\u4e00\u3002"),(0,n.kt)("p",null,"\u5728\u7528TouchGFX\u8a2d\u8a08UI\u6642\u53ef\u4f7f\u7528.png\u5716\u50cf\uff0c\u5728\u7de8\u8b6f\u6642\uff0c\u6703\u5c07\u6bcf\u4e00\u5e45\u5716\u50cf\u8f49\u63db\u70ba\u4e0a\u8ff0\u9ad8\u6548\u7684\u5716\u50cf\u683c\u5f0f\u4e2d\u7684\u4e00\u7a2e\u3002"),(0,n.kt)("h3",h({},{id:"alpha-blending"}),"Alpha \u6df7\u5408"),(0,n.kt)("p",null,"\u5728\u57f7\u884c\u6642\u9593\uff0c\u5716\u50cf\u8cc7\u6599\u7684\u8907\u88fd\u662f\u901a\u904e\u5e38\u898fCPU\u8907\u88fd\u64cd\u4f5c\u6216\u4f7f\u7528MCU\u7279\u6027\u4f86\u5b8c\u6210\u7684\u3002 \u5982\u679c\u5716\u50cf\u5305\u542b\u4e0d\u5b8c\u5168\u900f\u660e\u6216\u4e0d\u900f\u660e\u7684\u50cf\u7d20\uff0c\u5247\u9700\u8981\u7528alpha\u6df7\u5408\u6280\u8853\u5c07\u50cf\u7d20\u6df7\u5408\u5230\u80cc\u666f\u4e0a\u3002 \u5728\u4e00\u4e9bSTM32 MCU\u4e2d\uff0c\u7531\u786c\u9ad4\u70ba\u9019\u7a2e\u6df7\u5408\u63d0\u4f9b\u652f\u63f4\u3002"),(0,n.kt)("h2",h({},{id:"other-image-formats"}),"\u5176\u4ed6\u5716\u50cf\u683c\u5f0f"),(0,n.kt)("p",null,"\u5982\u9700\u5728\u57f7\u884c\u6642\u9593\u652f\u63f4\u5176\u4ed6\u5716\u50cf\u683c\u5f0f\uff0c\u5982\u58d3\u7e2e\u5716\u50cf\u683c\u5f0f.jpg\u6216.png\uff0c\u53ef\u4ee5\u5229\u7528TouchGFX\u5c0d",(0,n.kt)("a",h({parentName:"p"},{href:"../development/ui-development/touchgfx-engine-features/dynamic-bitmaps"}),"\u52d5\u614b\u9ede\u9663\u5716"),"\u7684\u652f\u63f4\u3002"),(0,n.kt)(l.Z,{mdxType:"FurtherReading"},"\u95dc\u65bc",(0,n.kt)(a.Z,{to:"https://en.wikipedia.org/wiki/Color_depth",mdxType:"Link"},"\u8272\u6df1"),"\u7684Wikipedia\u6587\u7ae0\u3002"))}y.isMDXComponent=!0}}]);