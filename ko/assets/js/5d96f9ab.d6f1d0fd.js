"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[622],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29415:function(e,t,r){var n=r(67294),o=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},88678:function(e,t,r){var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},65407:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){var t,r;const i=(0,o.Z)(e.url),a=null!=(t=e.width)?t:"100%",l=null!=(r=e.height)?r:"100%";return n.createElement("div",{class:"loop-video"},n.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:a,height:l},n.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),n.createElement("p",null,e.children))}},39130:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(67294),o=r(73727),i=r(11368),a=r(35096),l=r(84487);const c=(0,n.createContext)({collectLink:()=>{}});var u=r(25026),p=r(67023),s=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&g(e,r,t[r]);if(m)for(var r of m(t))v.call(t,r)&&g(e,r,t[r]);return e};var y=function(e){var t,r=e,{isNavLink:s,to:g,href:y,activeClassName:w,isActive:x,"data-noBrokenLinkCheck":k,autoAddBaseUrl:O=!0}=r,E=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&v.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:D,baseUrl:T}}=(0,i.Z)(),{withBaseUrl:j}=(0,u.C)(),P=(0,n.useContext)(c),S=g||y,C=(0,a.Z)(S),B=null==S?void 0:S.replace("pathname://","");let F=void 0!==B?(X=B,O&&(e=>e.startsWith("/"))(X)?j(X):X):void 0;var X;F&&C&&(F=(0,p.applyTrailingSlash)(F,{trailingSlash:D,baseUrl:T}));const G=(0,n.useRef)(!1),Z=s?o.OL:o.rU,L=l.Z.canUseIntersectionObserver,M=(0,n.useRef)();(0,n.useEffect)((()=>(!L&&C&&null!=F&&window.docusaurus.prefetch(F),()=>{L&&M.current&&M.current.disconnect()})),[M,F,L,C]);const N=null!==(t=null==F?void 0:F.startsWith("#"))&&void 0!==t&&t,U=!F||!C||N;return F&&C&&!N&&!k&&P.collectLink(F),U?n.createElement("a",b(b({href:F},S&&!C&&{target:"_blank",rel:"noopener noreferrer"}),E)):n.createElement(Z,b((_=b({},E),d(_,f({onMouseEnter:()=>{G.current||null==F||(window.docusaurus.preload(F),G.current=!0)},innerRef:e=>{var t,r;L&&e&&C&&(t=e,r=()=>{null!=F&&window.docusaurus.prefetch(F)},M.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),r())}))})),M.current.observe(t))},to:F||""}))),s&&{isActive:x,activeClassName:w}));var _}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(11368),o=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[o]=e.split(/[#?]/),i="/"===o||o===n?o:(a=o,r?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(o,i)}},67023:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},24150:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return h},contentTitle:function(){return v},metadata:function(){return g},toc:function(){return b},default:function(){return w}});var n=r(3905),o=r(29415),i=r(39130),a=r(65407),l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))d.call(t,r)&&f(e,r,t[r]);return e};const h={id:"examples",title:"Example \ubc0f Board Specific Demo"},v=void 0,g={unversionedId:"development/ui-development/working-with-touchgfx/examples",id:"development/ui-development/working-with-touchgfx/examples",isDocsHomePage:!1,title:"Example \ubc0f Board Specific Demo",description:"TouchGFX\ub294 \uc5ec\ub7ec \uac00\uc9c0 \uac00\ub2a5\uc131\uacfc \uae30\ub2a5\uc744 \ub354 \uc0b4\ud3b4\ubcfc \uc218 \uc788\ub3c4\ub85d \ub2e4\uc218\uc758 Example\uacfc Demo\ub97c \uc0ac\uc804 \uc81c\uc791\ud558\uc5ec \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc81c\uacf5\ud569\ub2c8\ub2e4. TouchGFX Designer\uc758 Lobby\ub97c \ud1b5\ud574 \uc774\ub7ec\ud55c Example\uacfc Demo\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\uc73c\uba70, \uc5ec\uae30\uc5d0\ub294 \ubb34\ub8cc \uc774\ubbf8\uc9c0, \ucf54\ub4dc \ub4f1\uc774 \ud3ec\ud568\ub418\uc5b4 \uc790\uccb4\uc801\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud560 \ub54c \uae30\ucd08 \uc790\ub8cc\ub85c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Example\uacfc Demo\uc5d0\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 TouchGFX Board Setup\uc774 \ud568\uaed8 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c TouchGFX\ub97c \ucc98\uc74c \uc0ac\uc6a9\ud558\ub294 \ucd08\ubcf4\uc790\ub77c\uba74 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uae30\ub2a5\uc5d0 \ub300\ud55c \uc544\uc774\ub514\uc5b4\uc640 \uc815\ubcf4\ub97c \uc5bb\uc744 \uc218 \uc788\ub294 \ucd9c\ubc1c\uc810\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/examples.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/examples",permalink:"/4.18/ko/docs/development/ui-development/working-with-touchgfx/examples",tags:[],version:"current",frontMatter:{id:"examples",title:"Example \ubc0f Board Specific Demo"},sidebar:"docs",previous:{title:"\ub514\ubc84\uae45",permalink:"/4.18/ko/docs/development/ui-development/working-with-touchgfx/debugging"},next:{title:"\ud0a4\ubcf4\ub4dc \ub2e8\ucd95\ud0a4",permalink:"/4.18/ko/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}},b=[{value:"Example\uacfc Demo",id:"ui-templates",children:[],level:2},{value:"Board Specific Demo",id:"online-applications",children:[],level:2}],y={toc:b};function w(e){var t,r=e,{components:l}=r,f=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),f),c(t,u({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX\ub294 \uc5ec\ub7ec \uac00\uc9c0 \uac00\ub2a5\uc131\uacfc \uae30\ub2a5\uc744 \ub354 \uc0b4\ud3b4\ubcfc \uc218 \uc788\ub3c4\ub85d \ub2e4\uc218\uc758 Example\uacfc Demo\ub97c \uc0ac\uc804 \uc81c\uc791\ud558\uc5ec \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc81c\uacf5\ud569\ub2c8\ub2e4. TouchGFX Designer\uc758 ",(0,n.kt)("a",m({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"Lobby"),"\ub97c \ud1b5\ud574 \uc774\ub7ec\ud55c Example\uacfc Demo\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\uc73c\uba70, \uc5ec\uae30\uc5d0\ub294 \ubb34\ub8cc \uc774\ubbf8\uc9c0, \ucf54\ub4dc \ub4f1\uc774 \ud3ec\ud568\ub418\uc5b4 \uc790\uccb4\uc801\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud560 \ub54c \uae30\ucd08 \uc790\ub8cc\ub85c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Example\uacfc Demo\uc5d0\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 ",(0,n.kt)("a",m({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"TouchGFX Board Setup"),"\uc774 \ud568\uaed8 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c TouchGFX\ub97c \ucc98\uc74c \uc0ac\uc6a9\ud558\ub294 \ucd08\ubcf4\uc790\ub77c\uba74 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uae30\ub2a5\uc5d0 \ub300\ud55c \uc544\uc774\ub514\uc5b4\uc640 \uc815\ubcf4\ub97c \uc5bb\uc744 \uc218 \uc788\ub294 \ucd9c\ubc1c\uc810\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"Example\uacfc Demo \uc911\uc5d0\ub294 \ub2e8\uc77c \uae30\ub2a5\uc5d0 \ucd08\uc810\uc744 \ub454 \uac83\uc774 \uc788\ub294 \ubc18\uba74 TouchGFX\uc5d0\uc11c \uc5ec\ub7ec \uac00\uc9c0 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \uad6c\ud604\ud558\ub294 \uac83\ub4e4\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. Demo\ub294 ",(0,n.kt)("a",m({parentName:"p"},{href:"#ui-templates"}),"Demo"),"\uc640 ",(0,n.kt)("a",m({parentName:"p"},{href:"#online-applications"}),"Board Specific Demo"),"\ub85c \uad6c\ubd84\ub429\ub2c8\ub2e4."),(0,n.kt)("h2",m({},{id:"ui-templates"}),"Example\uacfc Demo"),(0,n.kt)("p",null,"Example\uc774\ub780 \uc77c\ubc18\uc801\uc73c\ub85c \uc6a9\ub7c9\uc774 \uc791\uc740 \uc790\ub9bd\ud615 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9d0\ud558\uba70, \uc8fc\ub85c \uac01\uc885 \uc704\uc82f \ub4f1 \ud2b9\uc815 \uae30\ub2a5\uc5d0 \uc911\uc810\uc744 \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4. Example\uc740 \ubaa8\ub4e0 STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc640 PC \uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589\ub418\uc9c0\ub9cc \ucd5c\uc0c1\uc758 \uacbd\ud5d8\uc744 \uc6d0\ud55c\ub2e4\uba74 Example\uc758 \ud574\uc0c1\ub3c4\uac00 \ubcf4\ub4dc\uc758 \ud574\uc0c1\ub3c4\uc5d0 \ub9de\ub294 \uacbd\uc6b0\uc5d0 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc77c\ubd80 Example\uc740 \ud2b9\uc815 \uc0c9 \uc2ec\ub3c4\ub97c \uc5fc\ub450\uc5d0 \ub450\uace0 \ube4c\ub4dc\ub418\uc5b4 \uc0c9 \uc2ec\ub3c4\uac00 \ub0ae\uc740 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c\ub294 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"Demo\uc5d0\ub294 TouchGFX \ud300\uc5d0\uc11c \ud488\uc9c8 \ub192\uc740 UI \uc124\uacc4\uc640 \ud568\uaed8 \ub354\uc6b1 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \uc120\ubcf4\uc77c \ubaa9\uc801\uc73c\ub85c \uc0dd\uc131\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucc98\uc74c\uc5d0 TouchGFX\uc758 \uae30\ub2a5\uc744 \uc54c\uc544\ubcf4\ub294 \ub370 \ud6a8\uacfc\uc801\uc778 \ucd9c\ubc1c\uc810\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,'Example\uc774\ub098 Demo\ub97c \uc0ac\uc6a9\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\ub824\uba74 \uba3c\uc800 \ub85c\ube44\uc5d0\uc11c \uc67c\ucabd \uc0c1\ub2e8\uc5d0 \uc788\ub294 "Examples" \ub610\ub294 "Demos"\ub97c \ud074\ub9ad\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud55c \ud6c4 \uc6d0\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. \uc635\uc158\uc73c\ub85c \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c \ub2e4\ub978 \ud574\uc0c1\ub3c4\uc640 \uc0c9 \uc2ec\ub3c4\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c0\uc6d0\ub418\ub294 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc2e4\ud589\ud558\ub824\uba74 \ucc3d \uc0c1\ub2e8\uc5d0 \uc788\ub294 "Select Hardware"\ub97c \ud074\ub9ad\ud558\uace0 \uc6d0\ud558\ub294 \ubcf4\ub4dc\ub97c \uc120\ud0dd\ud55c \ub2e4\uc74c "Select"\ub97c \ub204\ub985\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c \'Create\'\ub97c \ud074\ub9ad\ud558\uba74 \uc120\ud0dd\ud55c TouchGFX Board Setup \ubc0f Example \ub610\ub294 Demo\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774\uc81c \'Run Simulator\' \ub610\ub294 \'Run Target\'\uc744 \ud074\ub9ad\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub418\ub294 \ubaa8\uc2b5\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,n.kt)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud55c \uc0dd\uc131 \ub2e8\uacc4\ub97c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud558\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"Example\uc744 \uc0ac\uc6a9\ud574 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30"),(0,n.kt)("h2",m({},{id:"online-applications"}),"Board Specific Demo"),(0,n.kt)("p",null,"Board Specific Demo\ub294 \ud2b9\uc815 \ud558\ub4dc\uc6e8\uc5b4 \uc194\ub8e8\uc158\uc5d0 \ub9de\ucdb0 \ud2b9\ubcc4\ud558\uac8c \uc0dd\uc131\ub41c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ubbc0\ub85c \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\uac00 \uc544\ub2cc STM32 \ud3c9\uac00 \ud0a4\ud2b8(PC \uc2dc\ubbac\ub808\uc774\ud130 \uc81c\uc678)\uc5d0\uc11c\ub294 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \uc6a9\ub7c9\uc774 \ud6e8\uc52c \ucee4\uc11c TouchGFX \ud504\ub808\uc784\uc6cc\ud06c\uc758 \uac01\uc885 \uae30\ub2a5\uc744 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc744 \ubfd0\ub9cc \uc544\ub2c8\ub77c \ud558\ub4dc\uc6e8\uc5b4 \ud1b5\ud569\uc774 \uc0d8\ud50c\ub85c \ud3ec\ud568\ub418\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"Board Specific Demo\ub97c \uc0ac\uc6a9\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\ub824\uba74 \uba3c\uc800 \ub85c\ube44\uc5d0\uc11c \uc67c\ucabd \uc0c1\ub2e8\uc5d0 \uc788\ub294 'Demos' \ud0ed\uc744 \ud074\ub9ad\ud558\uc5ec \uc561\uc138\uc2a4\ud569\ub2c8\ub2e4. \ucc3d \uc0c1\ub2e8\uc5d0 \uc788\ub294 \"Board Specific Demo\" \ub77c\ubca8\uc744 \ud074\ub9ad\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud655\uc778\ud569\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc6d0\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc 'Create'\ub97c \ucc28\ub840\ub85c \ud074\ub9ad\ud558\uc5ec \uc644\ub8cc\ud569\ub2c8\ub2e4. \uc774\uc81c 'Run Simulator' \ub610\ub294 'Run Target'\uc744 \ud074\ub9ad\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub418\ub294 \ubaa8\uc2b5\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud55c \uc0dd\uc131 \ub2e8\uacc4\ub97c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud558\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"Board Specific Demo\ub97c \uc0ac\uc6a9\ud574 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"Example\uc774\ub098 Demo\ub97c \ud1b5\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0dd\uc131 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74 ",(0,n.kt)(i.Z,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"Lobby \uc139\uc158"),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}w.isMDXComponent=!0}}]);