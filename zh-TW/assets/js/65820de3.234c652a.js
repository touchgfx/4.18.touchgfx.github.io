(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3725],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(67294),a=n(73727),o=n(11368),i=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&v(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:p,to:v,href:b,activeClassName:y,isActive:G,"data-noBrokenLinkCheck":N,autoAddBaseUrl:T=!0}=n,O=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w,baseUrl:x}}=(0,o.Z)(),{withBaseUrl:C}=(0,u.C)(),E=(0,r.useContext)(c),B=v||b,R=(0,i.Z)(B),F=null==B?void 0:B.replace("pathname://","");let j=void 0!==F?(A=F,T&&(e=>e.startsWith("/"))(A)?C(A):A):void 0;var A;j&&R&&(j=(0,s.applyTrailingSlash)(j,{trailingSlash:w,baseUrl:x}));const P=(0,r.useRef)(!1),S=p?a.OL:a.rU,X=l.Z.canUseIntersectionObserver,D=(0,r.useRef)();(0,r.useEffect)((()=>(!X&&R&&null!=j&&window.docusaurus.prefetch(j),()=>{X&&D.current&&D.current.disconnect()})),[D,j,X,R]);const _=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,Z=!j||!R||_;return j&&R&&!_&&!N&&E.collectLink(j),Z?r.createElement("a",k(k({href:j},B&&!R&&{target:"_blank",rel:"noopener noreferrer"}),O)):r.createElement(S,k((L=k({},O),d(L,m({onMouseEnter:()=>{P.current||null==j||(window.docusaurus.preload(j),P.current=!0)},innerRef:e=>{var t,n;X&&e&&R&&(t=e,n=()=>{null!=j&&window.docusaurus.prefetch(j)},D.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.current.unobserve(t),D.current.disconnect(),n())}))})),D.current.observe(t))},to:j||""}))),p&&{isActive:G,activeClassName:y}));var L}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,o)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},10623:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return v},metadata:function(){return k},toc:function(){return b},default:function(){return G}});var r=n(3905),a=n(44035),o=n(22425),i=n(29415),l=n(31217),c=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&h(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&h(e,n,t[n]);return e};const f={id:"scenarios-change-pixelformat-bpp",title:"\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f"},v=void 0,k={unversionedId:"development/scenarios/scenarios-change-pixelformat-bpp",id:"development/scenarios/scenarios-change-pixelformat-bpp",isDocsHomePage:!1,title:"\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f",description:"\u672c\u6587\u5c07\u4ecb\u7d39\u5728\u5275\u5efa\u5c08\u6848\u5f8c\uff0c\u5982\u4f55\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f\u3002 \u5177\u9ad4\u5730\u8aaa\uff0c\u672c\u6587\u5c07\u8209\u4f8b\u8aaa\u660e\u5982\u4f55\u901a\u904eTouchGFX Generator\u5c0724\u4f4dRGB888\u61c9\u7528\u4fee\u6539\u70ba16\u4f4dRGB565\uff0c\u9084\u5c07\u4ecb\u7d39\u5c0dTouchGFX\u5c08\u6848\u914d\u7f6e\u7684\u5f71\u97ff\u3002 \u66f4\u6539\u50cf\u7d20\u683c\u5f0f\u7684\u539f\u56e0\u53ef\u80fd\u662f\uff1a",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/scenarios-change-pixelformat-bpp.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-change-pixelformat-bpp",permalink:"/4.18/zh-TW/docs/development/scenarios/scenarios-change-pixelformat-bpp",tags:[],version:"current",frontMatter:{id:"scenarios-change-pixelformat-bpp",title:"\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f"},sidebar:"docs",previous:{title:"\u5c0d\u5b57\u9ad4\u8cc7\u6599\u4f7f\u7528\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4",permalink:"/4.18/zh-TW/docs/development/scenarios/fonts-in-unmapped-flash"},next:{title:"\u5275\u5efaTouchGFX\u958b\u767c\u677f\u914d\u7f6e",permalink:"/4.18/zh-TW/docs/development/scenarios/scenarios-create-at"}},b=[{value:"\u958b\u767c\u677f\u642d\u5efa",id:"board-bring-up",children:[],level:2},{value:"HAL\u958b\u767c",id:"hal-development",children:[],level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],y={toc:b};function G(e){var t,n=e,{components:c}=n,h=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},y),h),u(t,s({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u6587\u5c07\u4ecb\u7d39\u5728\u5275\u5efa\u5c08\u6848\u5f8c\uff0c\u5982\u4f55\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f\u3002 \u5177\u9ad4\u5730\u8aaa\uff0c\u672c\u6587\u5c07\u8209\u4f8b\u8aaa\u660e\u5982\u4f55\u901a\u904eTouchGFX Generator\u5c0724\u4f4dRGB888\u61c9\u7528\u4fee\u6539\u70ba16\u4f4dRGB565\uff0c\u9084\u5c07\u4ecb\u7d39\u5c0dTouchGFX\u5c08\u6848\u914d\u7f6e\u7684\u5f71\u97ff\u3002 \u66f4\u6539\u50cf\u7d20\u683c\u5f0f\u7684\u539f\u56e0\u53ef\u80fd\u662f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u986f\u793a\u5668\u9700\u6c42"),(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u61c9\u7528\u9700\u6c42"),(0,r.kt)("li",{parentName:"ol"},"\u5c08\u6848\u521d\u59cb\u5275\u5efa\u7684\u932f\u8aa4")),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u8acb\u95b1\u8b80\u95dc\u65bc",(0,r.kt)(l.Z,{to:"../../basic-concepts/color-formats",mdxType:"Link"},"\u984f\u8272\u683c\u5f0f"),"\u7684\u6587\u7ae0\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u800c\u8a00\uff0c\u70ba\u4e86\u66f4\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f\uff0c\u53ef\u80fd\u9700\u8981\u9032\u884c\u4e0b\u5217\u66f4\u6539\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u958b\u767c\u677f\u642d\u5efa\uff1a"),"\u66f4\u6539LTDC\u7684\u50cf\u7d20\u683c\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"HAL\u958b\u767c\uff1a")," \u4fee\u6539TouchGFX Generator\u8a2d\u7f6e\uff0c\u4ee5\u53cd\u6620LTDC\u8a2d\u7f6e\u6216\u5f71\u50cf\u7de9\u885d\u5728\u8a18\u61b6\u9ad4\u4e2d\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Designer"),"\uff1a\u78ba\u4fdd\u8a2d\u8a08\u8edf\u9ad4\u6b63\u5728\u5c0d\u5f71\u50cf\u4f7f\u7528\u65b0\u7684\u4f4d\u6df1\u548c\u6b63\u78ba\u7684\u5f71\u50cf\u8cc7\u6e90\u3002")),(0,r.kt)("p",null,"\u8a2d\u8a08\u4e4b\u521d\u53ef\u4ee5\u5148\u6aa2\u67e5",(0,r.kt)("em",{parentName:"p"},"\u986f\u793a\u5668")," \u548c",(0,r.kt)("em",{parentName:"p"},"\u5f71\u50cf"),"\u7684\u914d\u7f6e\uff0c\u7a0d\u5f8c\u518d\u8fd4\u56de\u87a2\u5e55\u9032\u884c\u78ba\u8a8d\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-4-17.png",width:"600",mdxType:"Figure"},"\u5f71\u50cf\u914d\u7f6eRGB888"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-4-17.png",width:"600",mdxType:"Figure"},"\u986f\u793a\u5668\u914d\u7f6e24\u4f4d\u5143"),(0,r.kt)("h2",g({},{id:"board-bring-up"}),"\u958b\u767c\u677f\u642d\u5efa"),(0,r.kt)("p",null,"\u5982\u679cSTM32CubeMX\u5c08\u6848\u4e2d\u7684\u7279\u5b9a\u8a2d\u7f6e\u53ef\u80fd\u5f71\u97ff\u61c9\u7528\u7a0b\u5f0f\u7684\u50cf\u7d20\u683c\u5f0f\uff0c\u5c31\u50cfLTDC\u4e00\u6a23\uff0c\u5247\u958b\u767c\u8005\u9700\u8981\u5728\u6b64\u9032\u884c\u9069\u7576\u66f4\u6539\uff0c\u4ee5\u4f7fTouchGFX\u4ee5LTDC\u671f\u671b\u7684\u683c\u5f0f\u9032\u884c\u6e32\u67d3\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u8acb\u95b1\u8b80\u95dc\u65bc",(0,r.kt)(l.Z,{to:"../touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",mdxType:"Link"},"LTDC"),"\u7684\u6587\u7ae0\u4ee5\u77ad\u89e3TouchGFX\u61c9\u7528\u6709\u6548\u50cf\u7d20\u683c\u5f0f\u8a2d\u7f6e\u7684\u8a73\u7d30\u8cc7\u8a0a\u3002"),(0,r.kt)("h2",g({},{id:"hal-development"}),"HAL\u958b\u767c"),(0,r.kt)("p",null,"\u5982\u679c\u61c9\u7528\u7684\u4f4d\u6df1\u96a8\u5f71\u50cf\u7de9\u885d\u7684\u50cf\u7d20\u683c\u5f0f\u800c\u8b8a\u5316\uff08\u4f8b\u5982\uff0c\u5c07ARGB2222\u66f4\u6539\u70baBRGA2222\u5f8c\u4ecd\u5c07\u5f97\u52308\u4f4d\u61c9\u7528\uff09\uff0c\u5247\u958b\u767c\u8005",(0,r.kt)("em",{parentName:"p"},"\u53ef\u80fd"),"\u9700\u8981\u4fee\u6539\u5f71\u50cf\u7de9\u885d\u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u3002 \u5728\u4ee5\u4e0b\u60c5\u6cc1\u4e0b\uff1a"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-chage-px-fmt.png",width:"400",mdxType:"Figure"},"\u4fee\u6539\u50cf\u7d20\u683c\u5f0f"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u914d\u7f6e\u751f\u6210\u4ee3\u78bc\u5c07\u751f\u6210\u4f7f\u752816\u4f4dTouchGFX ",(0,r.kt)("inlineCode",{parentName:"p"},"LCD")," \u985e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXConfiguration")," \u3002"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"static LCD16bpp display;\n")),(0,r.kt)("p",null,"\u5982\u679c\u5c08\u6848\u5df2\u5728TouchGFX Designer\u4e2d\u6253\u958b\uff0c\u5c07\u63d0\u793a\u958b\u767c\u8005\u66f4\u65b0\uff0c\u4ee5\u5957\u7528\u65b0\u751f\u6210\u7684\u914d\u7f6e\u66f4\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-json",metastring:"{7-8}","{7-8}":!0}),'{\n  "image_configuration": {\n    "images": {},\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB565",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  },\n')),(0,r.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86\u5728\u7d66\u5b9a\u7684\u50cf\u7d20\u683c\u5f0f\u4e0b\u5c0d\u4e0d\u900f\u660e\u548c\u900f\u660e\u5f71\u50cf\u683c\u5f0f\u7684\u5f71\u97ff\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u5f71\u50cf\u7de9\u885d\u5340\u50cf\u7d20\u683c\u5f0f"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u4e0d\u900f\u660e\u683c\u5f0f"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"\u900f\u660e\u683c\u5f0f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Gray2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Gray4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"ABGR2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"ARGB2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"BGRA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"RGBA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"ARGB8888")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"ARGB8888")))),(0,r.kt)("h2",g({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)("p",null,"\u5728\u57fa\u65bc\u65b0\u7684TouchGFX Generator\u8a2d\u7f6e\uff08\u5728STM32CubeMX\u4e2d\u5b9a\u7fa9\uff09\u66f4\u65b0\u4e86TouchGFX\u5c08\u6848\u5f8c\uff0c\u958b\u767c\u8005\u6703\u767c\u73feTouchGFX Designer\u7684\u914d\u7f6e\u5df2\u7d93\u66f4\u6539\uff0c\u4ee5\u4fbf\u8207\u4e4b\u5339\u914d\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-16bpp-4-17.png",width:"600",mdxType:"Figure"},"\u5f71\u50cf\u914d\u7f6eRGB565"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-16bpp-4-17.png",width:"600",mdxType:"Figure"},"\u986f\u793a\u5668\u914d\u7f6e16\u4f4d\u5143"),(0,r.kt)("p",null,"\u5728\u5f9eTouchGFX Designer\u5167\u90e8\u751f\u6210\u4ee3\u78bc\u5f8c\uff0c\u5f71\u50cf\u8cc7\u6e90\u7684\u4ee3\u78bc\u73fe\u5df2\u53cd\u6620\u4e86\u66f4\u65b0\u5f8c\u7684\u50cf\u7d20\u683c\u5f0f\uff1a"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX\\generated\\images\\src\\my_image.png"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),'LOCATION_PRAGMA("ExtFlashSection")\nKEEP extern const unsigned char my_image[] LOCATION_ATTRIBUTE("ExtFlashSection") = // 320x240 RGB565 pixels.\n')),(0,r.kt)("h2",g({},{id:"conclusion"}),"Conclusion"),(0,r.kt)("p",null,"\u53ea\u9700\u4f7f\u7528TouchGFX Generator\u5373\u53ef\u4fee\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u7576\u524d\u50cf\u7d20\u683c\u5f0f\u3002 \u5c0d\u65bc\u5177\u6709LTDC\u7684MCU\uff0c\u904b\u884c\u4e2d\u7684TouchGFX\u5fc5\u9808\u8207\u5728TouchGFX Generator\uff08\u5c31LTDC\u800c\u8a00\uff0c\u50c5\u9650\u65bcRGB565\u548cRGB888\uff09\u8a2d\u7f6e\u4e2d\u5b9a\u7fa9\u7684\u5f71\u50cf\u7de9\u885d\u50cf\u7d20\u683c\u5f0f\u76f8\u5339\u914d\uff0c\u4ee5\u78ba\u4fdd\u8207TouchGFX Core\u6e32\u67d3\u7684\u683c\u5f0f\u76f8\u4e00\u81f4\u3002"),(0,r.kt)("p",null,"\u5728\u5f9eSTM32CubeMX\u751f\u6210\u4ee3\u78bc\u5f8c\uff0c\u5c07\u66f4\u65b0TouchGFX\u9805\u76ee\uff0c\u5f8c\u7e8c\u5728TouchGFX Designer\u4e2d\u751f\u6210\u4ee3\u78bc\u5f8c\uff0c\u5716\u50cf\u8cc7\u7522\u548c\u5e40\u7de9\u885d\u9a45\u52d5\u7a0b\u5f0f\u90fd\u5c07\u5177\u6709\u6307\u5b9a\u683c\u5f0f\u3002"))}G.isMDXComponent=!0}}]);