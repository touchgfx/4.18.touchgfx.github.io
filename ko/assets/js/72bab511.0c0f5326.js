(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5966],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},82985:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(67294),i=n(73727),a=n(11368),o=n(35096),l=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),p=n(67023),c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(g)for(var n of g(t))h.call(t,n)&&k(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:c,to:k,href:b,activeClassName:w,isActive:y,"data-noBrokenLinkCheck":N,autoAddBaseUrl:x=!0}=n,O=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:S,baseUrl:T}}=(0,a.Z)(),{withBaseUrl:C}=(0,s.C)(),j=(0,r.useContext)(u),E=k||b,F=(0,o.Z)(E),D=null==E?void 0:E.replace("pathname://","");let P=void 0!==D?(B=D,x&&(e=>e.startsWith("/"))(B)?C(B):B):void 0;var B;P&&F&&(P=(0,p.applyTrailingSlash)(P,{trailingSlash:S,baseUrl:T}));const Z=(0,r.useRef)(!1),M=c?i.OL:i.rU,G=l.Z.canUseIntersectionObserver,A=(0,r.useRef)();(0,r.useEffect)((()=>(!G&&F&&null!=P&&window.docusaurus.prefetch(P),()=>{G&&A.current&&A.current.disconnect()})),[A,P,G,F]);const I=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,_=!P||!F||I;return P&&F&&!I&&!N&&j.collectLink(P),_?r.createElement("a",v(v({href:P},E&&!F&&{target:"_blank",rel:"noopener noreferrer"}),O)):r.createElement(M,v((R=v({},O),d(R,m({onMouseEnter:()=>{Z.current||null==P||(window.docusaurus.preload(P),Z.current=!0)},innerRef:e=>{var t,n;G&&e&&F&&(t=e,n=()=>{null!=P&&window.docusaurus.prefetch(P)},A.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.current.unobserve(t),A.current.disconnect(),n())}))})),A.current.observe(t))},to:P||""}))),c&&{isActive:y,activeClassName:w}));var R}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),a="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(i,a)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},44601:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return k},metadata:function(){return v},toc:function(){return b},default:function(){return y}});var r=n(3905),i=n(44035),a=n(82985),o=n(29415),l=n(31217),u=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&g(e,n,t[n]);if(c)for(var n of c(t))m.call(t,n)&&g(e,n,t[n]);return e};const h={id:"config-view",title:"\uad6c\uc131 \ubdf0"},k=void 0,v={unversionedId:"development/ui-development/designer-user-guide/config-view",id:"development/ui-development/designer-user-guide/config-view",isDocsHomePage:!1,title:"\uad6c\uc131 \ubdf0",description:"\uad6c\uc131 \ubdf0\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\ub294 \uc5ec\ub7ec \uac00\uc9c0 \uc124\uc815\ub4e4\uc744 \ub2e4\uc74c\uacfc \uac19\uc740 \uc139\uc158\uc5d0\uc11c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. General, Display, Default Image Configuration, Text Configuration, Simulator, Build and Framework Features.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/config-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/config-view",permalink:"/4.18/ko/docs/development/ui-development/designer-user-guide/config-view",tags:[],version:"current",frontMatter:{id:"config-view",title:"\uad6c\uc131 \ubdf0"},sidebar:"docs",previous:{title:"\ud14d\uc2a4\ud2b8 \ubdf0",permalink:"/4.18/ko/docs/development/ui-development/designer-user-guide/texts-view"},next:{title:"\uc0c1\ud638\uc791\uc6a9",permalink:"/4.18/ko/docs/development/ui-development/designer-user-guide/interactions-view"}},b=[{value:"General",id:"general",children:[],level:2},{value:"Display",id:"display",children:[],level:2},{value:"Default Image Configuration",id:"default-image-configuration",children:[],level:2},{value:"Text Configuration",id:"text-configuration",children:[],level:2},{value:"Simulator",id:"simulator",children:[],level:2},{value:"Build",id:"build",children:[],level:2},{value:"Framework Features",id:"framework-features",children:[],level:2}],w={toc:b};function y(e){var t,n=e,{components:u}=n,g=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},w),g),s(t,p({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\uad6c\uc131 \ubdf0\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\ub294 \uc5ec\ub7ec \uac00\uc9c0 \uc124\uc815\ub4e4\uc744 \ub2e4\uc74c\uacfc \uac19\uc740 \uc139\uc158\uc5d0\uc11c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("a",f({parentName:"p"},{href:"#general"}),"General"),", ",(0,r.kt)("a",f({parentName:"p"},{href:"#display"}),"Display"),", ",(0,r.kt)("a",f({parentName:"p"},{href:"#default-image-configuration"}),"Default Image Configuration"),", ",(0,r.kt)("a",f({parentName:"p"},{href:"#text-configuration"}),"Text Configuration"),", ",(0,r.kt)("a",f({parentName:"p"},{href:"#simulator"}),"Simulator"),", ",(0,r.kt)("a",f({parentName:"p"},{href:"#simulator"}),"Build")," and ",(0,r.kt)("a",f({parentName:"p"},{href:"#framework-features"}),"Framework Features"),"."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.png",mdxType:"Figure"},"\uad6c\uc131 \ubdf0\uc758 General \uc124\uc815"),(0,r.kt)("h2",f({},{id:"general"}),"General"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general-4.17.png",mdxType:"Figure"},"\uad6c\uc131 \ubdf0\uc758 General \uc124\uc815"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Name"),(0,r.kt)("br",null)," Application Name\uc740 \uc77d\uae30 \uc804\uc6a9 \ud544\ub4dc\ub85c\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ucc98\uc74c \uc0dd\uc131\ud560 \ub54c \uc120\ud0dd\ud55c \uc774\ub984\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TouchGFX Board Setup"),(0,r.kt)("br",null)," \uc774 \ud544\ub4dc\uc5d0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc0dd\uc131\ub41c TouchGFX Board Setup\uc774 \ud45c\uc2dc\ub418\uba70, \uc774 \uc815\ubcf4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 'N/A'\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",(0,r.kt)("br",null)," \uc774 \uc815\ubcf4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 TouchGFX Board Setup\uc758 \uc774\ub984\uc774 \ubc84\uc804\uacfc \ud568\uaed8 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Selected Language"),(0,r.kt)("br",null)," \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\ub294 ",(0,r.kt)("a",f({parentName:"p"},{href:"texts-view"}),"\ud14d\uc2a4\ud2b8")," \ubdf0\uc5d0\uc11c \uad6c\uc131\ud55c \uc5b8\uc5b4\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc73c\uba70, \uc5ec\uae30\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 \uc2e4\ud589 \uc2dc \ud45c\uc2dc\ud560 \uc5b8\uc5b4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Skin"),(0,r.kt)("br",null)," \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c\ub294 \uc2a4\ud0c0\uc77c \uc124\uc815\uc744 \uc9c0\uc6d0\ud558\ub294 \uc704\uc82f\uc5d0 \uc0ac\uc6a9\ud560 \ub450 \uac00\uc9c0 \uae30\ubcf8 \uc81c\uacf5 \uc2a4\ud0c0\uc77c \uc911\uc5d0\uc11c \ud558\ub098\ub97c \uc124\uc815\ud558\uba70, \uc635\uc158\uc73c\ub85c\ub294 'Blue'\uc640 'Dark\u2019\uac00 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"If a widget has been configured with a style from the 'Blue' skin, and the skin is changed to 'Dark', the widget will automatically switch to a corresponding style in the 'Dark' skin.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Startup Screen"),(0,r.kt)("br",null)," \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucd94\uac00\ub41c \ubaa8\ub4e0 \uc2a4\ud06c\ub9b0\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc73c\uba70, \ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791 \uc2dc \ud45c\uc2dc\ud560 \uc2a4\ud06c\ub9b0\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",f({},{id:"display"}),"Display"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \ub514\uc2a4\ud50c\ub808\uc774 \uc124\uc815\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.png",mdxType:"Figure"},"\uad6c\uc131 \ubdf0\uc758 Display \uc124\uc815"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dimensions"),(0,r.kt)("br",null)," The size of the display can be set through the ",(0,r.kt)("em",{parentName:"p"},"W(width)")," and ",(0,r.kt)("em",{parentName:"p"},"H(height)")," properties. \ub2e8, TouchGFX Board Setup\uc5d0\uc11c \uc774\ubbf8 \ud06c\uae30\ub97c \uad6c\uc131\ud55c \uacbd\uc6b0\uc5d0\ub294 \ud06c\uae30 \uad6c\uc131\uc774 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display Orientation"),(0,r.kt)("br",null)," \ub514\uc2a4\ud50c\ub808\uc774 \ubc29\ud5a5\uc744 \ub098\ud0c0\ub0b4\uba70, \uac00\ub85c \ubc29\ud5a5\uacfc \uc138\ub85c \ubc29\ud5a5 \uc0ac\uc774\uc5d0\uc11c \uc804\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774 \ubc29\ud5a5\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uc774\ubbf8\uc9c0\ub97c cpp \ud30c\uc77c\ub85c \ubcc0\ud658\ud558\ub294 \ubc29\uc2dd\uc5d0\ub3c4 \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Color Depth"),(0,r.kt)("br",null)," \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc0c9 \uc2ec\ub3c4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc0c9 \uc2ec\ub3c4\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c \uc0ac\uc6a9\ud55c TouchGFX Board Setup\uc5d0 \ub530\ub77c \uacb0\uc815\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",f({},{id:"default-image-configuration"}),"Default Image Configuration"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc774\ubbf8\uc9c0\uc5d0 \uc0ac\uc6a9\ud560 \uae30\ubcf8 \uad6c\uc131\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \uc124\uc815\ud558\ub294 \uad6c\uc131\uc740 ",(0,r.kt)("a",f({parentName:"p"},{href:"images-view"}),"\uc774\ubbf8\uc9c0")," \ubdf0\uc5d0\uc11c \ub36e\uc5b4\uc4f0\uc5ec\uc9c4 \uacbd\uc6b0\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 \ud504\ub85c\uc81d\ud2b8 \uc774\ubbf8\uc9c0\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration-4.17.png",mdxType:"Figure"},"\uad6c\uc131 \ubdf0\uc758 Default Image Configuration \uc124\uc815"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Opaque Image Format"),(0,r.kt)("br",null)," \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c\ub294 \ubd88\ud22c\uba85\ud55c \ud53d\uc140 \ub370\uc774\ud130\ub9cc \uc788\ub294 \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud560 \ub54c \ub530\ub77c\uc57c \ud560 \ud615\uc2dd\uc744 \uc124\uc815\ud569\ub2c8\ub2e4. \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc120\ud0dd\ud55c \uc0c9 \uc2ec\ub3c4\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Non Opaque Image Format"),(0,r.kt)("br",null)," \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c\ub294 \ud22c\uba85\ud55c \ud53d\uc140 \ub370\uc774\ud130\uac00 \uc788\ub294 \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131 \ud560 \ub54c \ub530\ub77c\uc57c \ud560 \ud615\uc2dd\uc744 \uc124\uc815\ud569\ub2c8\ub2e4. \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc120\ud0dd\ud55c \uc0c9 \uc2ec\ub3c4\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Section"),(0,r.kt)("br",null)," \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c\ub294 \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\uc5d0 \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\uac00 \uc800\uc7a5\ub418\ub294 \uc704\uce58\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc139\uc158\uc740 \ud504\ub85c\uc81d\ud2b8\uac00 \uc0dd\uc131\ub41c TouchGFX Board Setup\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extra Section"),(0,r.kt)("br",null)," L8 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\ub97c \uc774\uc6a9\ud574 \uc0c9\uc0c1\ud45c\ub97c \ub2e4\ub978 \uc139\uc158\uc5d0 \uc800\uc7a5\ud558\ub3c4\ub85d \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc139\uc158\uc740 \ud504\ub85c\uc81d\ud2b8\uac00 \uc0dd\uc131\ub41c TouchGFX Board Setup\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dither Algorithm"),(0,r.kt)("br",null)," \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c\ub294 \uc774\ubbf8\uc9c0\uc5d0 \uc0ac\uc6a9\ud560 \ub514\ub354\ub9c1 \uc54c\uace0\ub9ac\uc998\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No dither: ",(0,r.kt)("em",{parentName:"li"},"no dithering is applied to the image. \uc774 \uac12\uc740 \uc544\ubb34\uac83\ub3c4 \ubcc0\uacbd\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc131\ub2a5\uc744 \uac00\uc7a5 \ub192\uc77c \uc218 \uc788\ub294 \uc124\uc815\uc785\ub2c8\ub2e4. However, depending on the image, the quality of the image may also degrade visually at lower color depths.")),(0,r.kt)("li",{parentName:"ul"},"Floyd-Steinberg: ",(0,r.kt)("em",{parentName:"li"},"diffuses the error to neighboring pixels, resulting in fine-grained dithering but sacrificing sharpness.")),(0,r.kt)("li",{parentName:"ul"},"Jarvis, Judice and Ninke: ",(0,r.kt)("em",{parentName:"li"},"diffuses the error to pixels one step further away compared to Floyd-Steinberg, resulting in coarser dithering but a sharper image. The slowest of the 3 error-diffusion dithering algorithms.")),(0,r.kt)("li",{parentName:"ul"},"Stucki: ",(0,r.kt)("em",{parentName:"li"},"based on minimized average error dithering but faster and cleaner."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alpha Dither"),(0,r.kt)("br",null)," \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c\ub294 \uc54c\ud30c \ucc44\ub110\uc744 \ud1b5\ud55c \ub514\ub354 \uc54c\uace0\ub9ac\uc998\uc758 \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Layout Rotaion"),(0,r.kt)("br",null)," \uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c\ub294 \uc774\ubbf8\uc9c0 \ub370\uc774\ud130 \uc0dd\uc131 \uc2dc \ud68c\uc804\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \uc2a4\ud06c\ub9b0 \ubc29\ud5a5\uc774 \ubc14\ub00c\uc5c8\uc744 \uacbd\uc6b0 \uc774 \uba54\ub274\ub97c \uc0ac\uc6a9\ud574 \uc774\ubbf8\uc9c0\ub97c \uc0c8\ub85c\uc6b4 \ubc29\ud5a5\uc73c\ub85c \uc62c\ubc14\ub974\uac8c \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",f({},{id:"text-configuration"}),"Text Configuration"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8 \uc694\uac74\uc5d0 \ub9de\uac8c \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud558\uc5ec \ud14d\uc2a4\ud2b8 \ub80c\ub354\ub9c1 \ubc0f \uc800\uc7a5 \uc635\uc158\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.png",mdxType:"Figure"},"\uad6c\uc131 \ubdf0\uc758 Text Configuration \uc124\uc815"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remap texts"),(0,r.kt)("br",null)," \uc774 \uc635\uc158\uc5d0\uc11c\ub294 \ub3d9\uc77c\ud55c \ubc88\uc5ed\uc758 \ub9ac\ub9e4\ud551 \uc5ec\ubd80\ub97c \uc815\uc758\ud569\ub2c8\ub2e4. Remapping texts will combine identical translations and suffixes across all languages, typographies and alignments, resulting in a reduced footprint.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"This option is mutually exclusive with the option 'Binary translation files'")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A4"),(0,r.kt)("br",null)," This option defines whether or not the horizontal pixel data of glyphs byte are aligned into an A4 format.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"This only affects typographies that are configured as 4bpp")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Binary translation files"),(0,r.kt)("br",null)," This option defines whether or not the translations in a project should be moved into binary files that can be loaded at runtime.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"This option is mutually exclusive with the option 'Remap texts'")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Binary font files"),(0,r.kt)("br",null)," \uc774 \uc635\uc158\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8 \uae00\uaf34 \ud30c\uc77c\uc744 \ub7f0\ud0c0\uc784 \uc2dc \ub85c\ub4dc\ud560 \uc218 \uc788\ub294 \uc774\uc9c4 \ud30c\uc77c\ub85c \ubcc0\ud658\ud560 \uac83\uc778\uc9c0\uc758 \uc5ec\ubd80\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mapped storage format"),(0,r.kt)("br",null)," \uc774 \uc635\uc158\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8 \uae00\uaf34 \ud30c\uc77c\uc744 \ub9e4\ud551\ub41c \uc800\uc7a5 \ud615\uc2dd\uc73c\ub85c \ucd9c\ub825\ud560 \uac83\uc778\uc9c0\uc758 \uc5ec\ubd80\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unmapped storage format"),(0,r.kt)("br",null)," \uc774 \uc635\uc158\uc5d0\uc11c\ub294 \ud504\ub85c\uc81d\ud2b8 \uae00\uaf34 \ud30c\uc77c\uc744 \ub9e4\ud551\ub418\uc9c0 \uc54a\uc740 \uc800\uc7a5 \ud615\uc2dd\uc73c\ub85c \ucd9c\ub825\ud560 \uac83\uc778\uc9c0\uc758 \uc5ec\ubd80\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},(0,r.kt)(l.Z,{to:"../touchgfx-engine-features/texts-and-fonts",mdxType:"Link"},"\ud14d\uc2a4\ud2b8 \ubc0f \uae00\uaf34")),(0,r.kt)("h2",f({},{id:"simulator"}),"Simulator"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 Simulator \uc2e4\ud589 \uc2dc \uc2a4\ud0a8\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2a4\ud0a8\uc740 \uac00\ub85c \ubc29\ud5a5 \ud504\ub85c\uc81d\ud2b8\uc640 \uc138\ub85c \ubc29\ud5a5 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ubaa8\ub450 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. The ",(0,r.kt)("em",{parentName:"p"},"X")," and ",(0,r.kt)("em",{parentName:"p"},"Y")," properties determine the position of the simulator on the skin."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.png",mdxType:"Figure"},"\uad6c\uc131 \ubdf0\uc758 Simulator \uc124\uc815"),(0,r.kt)("p",null,"Below is a demonstration of a simulator running with a skin.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"When a simulator runs with a skin, the standard window controls are hidden. To close the simulator press")," ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Esc\ub97c \ub204\ub974\uc2ed\uc2dc\uc624.")),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.gif",mdxType:"Figure"},"\uc2a4\ud0a8\uc744 \ucd94\uac00\ud558\uc5ec \uc2e4\ud589 \uc911\uc778 Simulator"),(0,r.kt)("h2",f({},{id:"build"}),"Build"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 ",(0,r.kt)("a",f({parentName:"p"},{href:"main-window#run-simulator"}),"'Run Simulator'"),", ",(0,r.kt)("a",f({parentName:"p"},{href:"main-window#run-target"}),"'Run Target'"),", ",(0,r.kt)("a",f({parentName:"p"},{href:"main-window#generate-code"}),"'Generate Code'"),"\ub97c \ud074\ub9ad\ud588\uc744 \ub54c \uc2e4\ud589\ub418\ub294 \uba85\ub839\uc744 \ub36e\uc5b4\uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uba85\ub839\uc744 \ub36e\uc5b4\uc4f0\ub824\uba74 \ud14d\uc2a4\ud2b8 \uc0c1\uc790\uc5d0 \uc544\ubb34 \uba85\ub839\uc5b4\ub098 \uc785\ub825\ud558\uba74 \ub429\ub2c8\ub2e4. \uba85\ub839\uc744 \ub36e\uc5b4\uc4f4 \uacbd\uc6b0, \uba85\ub839\uc5b4 \uc774\ub984 \uc606\uc758 \u2018Reset\u2019 \ub77c\ubca8\uc744 \ud074\ub9ad\ud558\uba74 \uba85\ub839\uc774 \ub9ac\uc14b\ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.png",mdxType:"Figure"},"\uad6c\uc131 \ubdf0\uc758 Build \uc124\uc815"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Generate Assets Command"),(0,r.kt)("br",null)),(0,r.kt)("p",null,"\uc774 \uba85\ub839\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ud14d\uc2a4\ud2b8 \ubc0f \uc774\ubbf8\uc9c0 \uc790\uc0b0\uc744 \uc0dd\uc131\ud560 \ub54c \uc124\uc815\ub418\uba70, TouchGFX Designer\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0dd\uc131\ud55c \ud6c4\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Post Generate Command"),(0,r.kt)("br",null)," \uc774 \uba85\ub839\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ub2e4\uc591\ud55c \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. The built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx update_project")," commandline tool supports updating the following project files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visual Studio(.vcxproj)"),(0,r.kt)("li",{parentName:"ul"},"Keil(.uvprojx)"),(0,r.kt)("li",{parentName:"ul"},"IAR(.ewp, .ipcf)"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeIDE(.project, .cproject)"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX(.ioc)")),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc \ucf54\ub4dc \uc0dd\uc131 \ud6c4\uc5d0 \uc2e4\ud589\ud574\uc57c \ud558\ub294 \uba85\ub839\uc740 \ubaa8\ub450 \uc5ec\uae30\uc5d0\uc11c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compile Simulator Command"),(0,r.kt)("br",null)," \uc774 \uba85\ub839\uc740 Simulator\uc5d0 \ub9de\ucdb0 \ud504\ub85c\uc81d\ud2b8 \ucef4\ud30c\uc77c\uc744 \uc2e4\ud589\ud558\uba70, \uc77c\ubc18\uc801\uc73c\ub85c TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub41c Makefile\uc744 \uc2e4\ud589\ud558\uc5ec \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run Simulator Command"),(0,r.kt)("br",null)," \uc774 \uba85\ub839\uc740 simulator.exe \ud30c\uc77c\uc744 \uc2e4\ud589\ud558\uc5ec Simulator\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Post Generate Target Command"),(0,r.kt)("br",null)," \uc774 \uba85\ub839\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ub2e4\uc591\ud55c \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\uc9c0\ub9cc \uc8fc\ub85c STM32CubeMX(.ioc) \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc \ucf54\ub4dc \uc0dd\uc131 \ud6c4\uc5d0 \uc2e4\ud589\ud574\uc57c \ud558\ub294 \uba85\ub839\uc740 \ubaa8\ub450 \uc5ec\uae30\uc5d0\uc11c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compile Target Command"),(0,r.kt)("br",null)," \uc774 \uba85\ub839\uc740 \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\uc5d0 \ub300\ud55c \ud504\ub85c\uc81d\ud2b8 \ucef4\ud30c\uc77c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flash Target Command"),(0,r.kt)("br",null)," \uc774 \uba85\ub839\uc740 \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\uc5d0 \ub300\ud55c \ud504\ub85c\uc81d\ud2b8 \ud50c\ub798\uc2f1\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",f({},{id:"framework-features"}),"Framework Features"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \ud2b9\ud788 Texture Mapper \uc704\uc82f\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc744 \ud3ec\ud568\ud574 \ud504\ub808\uc784\uc6cc\ud06c \uae30\ub2a5\uc744 \ud65c\uc131\ud654\ud558\uac70\ub098 \ube44\ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uae30\ub2a5\uc740 \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\uac00 \ucc28\uc9c0\ud558\ub294 \ucf54\ub4dc \ud06c\uae30\ub97c \ucd5c\uc801\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c \ud45c\uc2dc\ub418\ub294 \uc635\uc158\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc120\ud0dd\ud55c \uc0c9 \uc2ec\ub3c4\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \uc544\ub798 \uc774\ubbf8\uc9c0\ub294 24\ube44\ud2b8 \uc0c9 \uc2ec\ub3c4 Texure Mapper\uc5d0 \ub300\ud55c \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc785\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.png",mdxType:"Figure"},"\uad6c\uc131 \ubdf0\uc5d0\uc11c 24bpp\uc77c \ub54c Framework Features \uc124\uc815"))}y.isMDXComponent=!0}}]);