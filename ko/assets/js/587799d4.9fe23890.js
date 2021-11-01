(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6432],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},2083:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(67294),a=n(73727),o=n(11368),i=n(35096),l=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),c=n(67023),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&g(e,n,t[n]);return e};var T=function(e){var t,n=e,{isNavLink:p,to:g,href:T,activeClassName:y,isActive:b,"data-noBrokenLinkCheck":x,autoAddBaseUrl:I=!0}=n,w=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:M,baseUrl:C}}=(0,o.Z)(),{withBaseUrl:O}=(0,u.C)(),U=(0,r.useContext)(s),S=g||T,P=(0,i.Z)(S),D=null==S?void 0:S.replace("pathname://","");let E=void 0!==D?(G=D,I&&(e=>e.startsWith("/"))(G)?O(G):G):void 0;var G;E&&P&&(E=(0,c.applyTrailingSlash)(E,{trailingSlash:M,baseUrl:C}));const Z=(0,r.useRef)(!1),N=p?a.OL:a.rU,j=l.Z.canUseIntersectionObserver;let B;(0,r.useEffect)((()=>(!j&&P&&null!=E&&window.docusaurus.prefetch(E),()=>{j&&B&&B.disconnect()})),[E,j,P]);const L=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,F=!E||!P||L;return E&&P&&!L&&!x&&U.collectLink(E),F?r.createElement("a",v(v({href:E},S&&!P&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(N,v((_=v({},w),d(_,m({onMouseEnter:()=>{Z.current||null==E||(window.docusaurus.preload(E),Z.current=!0)},innerRef:e=>{var t,n;j&&e&&P&&(t=e,n=()=>{null!=E&&window.docusaurus.prefetch(E)},B=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))})),B.observe(t))},to:E||""}))),p&&{isActive:b,activeClassName:y}));var _}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,o)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},83248:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return T},metadata:function(){return b},toc:function(){return x}});var r=n(3905),a=n(31217),o=n(29415),i=n(67294);class l extends i.Component{render(){return i.createElement("i",null,this.props.children)}}var s=l,u=n(2083),c=n(22425),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&g(e,n,t[n]);return e};const T={id:"backend-communication",title:"\ubc31\uc5d4\ub4dc \ud1b5\uc2e0"},y=void 0,b={unversionedId:"development/ui-development/touchgfx-engine-features/backend-communication",id:"development/ui-development/touchgfx-engine-features/backend-communication",isDocsHomePage:!1,title:"\ubc31\uc5d4\ub4dc \ud1b5\uc2e0",description:"\ub300\ubd80\ubd84\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c UI\ub294 UI \uc678\uc5d0 \ub2e4\ub978 \uc2dc\uc2a4\ud15c\uacfc \uc5b4\ub5a4 \uc2dd\uc73c\ub85c\ub4e0 \uc5f0\uacb0\ub418\uc5b4 \ub370\uc774\ud130\ub97c \uc8fc\uace0\ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 \ud558\ub4dc\uc6e8\uc5b4 \uc8fc\ubcc0 \uc7a5\uce58(\uc13c\uc11c \ub370\uc774\ud130, A/D \ubcc0\ud658, \uc9c1\ub82c \ud1b5\uc2e0 \ub4f1)\uc640 \uc5f0\uacb0\ub420 \uc218\ub3c4 \uc788\uace0, \ub2e4\ub978 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubaa8\ub4c8\uacfc \uc5f0\uacb0\ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/backend-communication.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/backend-communication",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/backend-communication",version:"current",frontMatter:{id:"backend-communication",title:"\ubc31\uc5d4\ub4dc \ud1b5\uc2e0"},sidebar:"docs",previous:{title:"Binary Translations",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"},next:{title:"Mixins",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/mixins"}},x=[{value:"Model \ud074\ub798\uc2a4",id:"the-model-class",children:[]},{value:"\uc2dc\uc2a4\ud15c \uc5f0\uacb0",id:"system-interfacing",children:[{value:"GUI Task\uc5d0\uc11c \uc0d8\ud50c\ub9c1\ud558\uae30",id:"sampling-from-gui-task",children:[]},{value:"Secondary Task\uc5d0\uc11c \uc0d8\ud50c\ub9c1\ud558\uae30",id:"sampling-from-secondary-task",children:[]}]},{value:"\ub370\uc774\ud130\ub97c UI\ub85c \uc804\ub2ec\ud558\uae30",id:"propagating-data-to-ui",children:[]},{value:"\ub370\uc774\ud130\ub97c UI\uc5d0\uc11c \uc8fc\ubcc0 \uc2dc\uc2a4\ud15c\uc73c\ub85c \uc804\uc1a1\ud558\uae30",id:"transmitting-data-from-ui-to-surrounding-system",children:[]},{value:"\uc608\uc81c",id:"examples",children:[{value:"GUI Task\uc5d0\uc11c",id:"from-gui-task",children:[]},{value:"\uae30\ud0c0 Task\uc5d0\uc11c",id:"from-other-task",children:[]},{value:"\ub2e4\uc911 Task\uc5d0\uc11c",id:"from-multiple-tasks",children:[]},{value:"Task \ubc0f \uc678\ubd80 \uc778\ud130\ub7fd\ud2b8 \ub77c\uc778\uc5d0\uc11c",id:"from-task-and-external-interrupt-line",children:[]}]}],I={toc:x};function w(e){var t,n=e,{components:i}=n,l=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},I),l),d(t,m({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c UI\ub294 UI \uc678\uc5d0 \ub2e4\ub978 \uc2dc\uc2a4\ud15c\uacfc \uc5b4\ub5a4 \uc2dd\uc73c\ub85c\ub4e0 \uc5f0\uacb0\ub418\uc5b4 \ub370\uc774\ud130\ub97c \uc8fc\uace0\ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 \ud558\ub4dc\uc6e8\uc5b4 \uc8fc\ubcc0 \uc7a5\uce58(\uc13c\uc11c \ub370\uc774\ud130, A/D \ubcc0\ud658, \uc9c1\ub82c \ud1b5\uc2e0 \ub4f1)\uc640 \uc5f0\uacb0\ub420 \uc218\ub3c4 \uc788\uace0, \ub2e4\ub978 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubaa8\ub4c8\uacfc \uc5f0\uacb0\ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uc5f0\uacb0\uc744 \uad6c\ud604\ud558\ub294\ub370 \uc788\uc5b4 \uad8c\uc7a5\ud558\ub294 \uc194\ub8e8\uc158\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uccab \ubc88\uc9f8 \ubc29\ubc95\uc740 \uc8fc\ub85c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551\uc5d0 \uc0ac\uc6a9\ub418\ub294 ",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-gui-task"}),'"\ube60\ub974\uace0 \uac04\ud3b8\ud55c(quick-and-dirty)"')," \ubc29\uc2dd\uc778 \ubc18\uba74, ",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-secondary-task"}),"\ub450 \ubc88\uc9f8 \ubc29\ubc95"),"\uc740 UI\ub97c \uc2e4\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ub2e4\ub978 \uad6c\uc131 \uc694\uc18c\ub4e4\uacfc \uc544\ud0a4\ud14d\ucc98\uc801\uc73c\ub85c \uc62c\ubc14\ub974\uac8c \uc5f0\uacb0\ud558\ub294 \uacac\uace0\ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc139\uc158 \ub9c8\uc9c0\ub9c9\uc5d0\ub294 \ub450 \uac00\uc9c0 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\ub294 \uc608\uc2dc\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",v({},{id:"the-model-class"}),"Model \ud074\ub798\uc2a4"),(0,r.kt)("p",null,"\ubaa8\ub4e0 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\ub294 \ud558\ub098\uc758 Model \ud074\ub798\uc2a4\uac00 \uc788\uc2b5\ub2c8\ub2e4. Model \ud074\ub798\uc2a4\ub294 UI \uc0c1\ud0dc \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\ub294 \uac83 \uc678\uc5d0\ub3c4 \uc8fc\ubcc0 \uc2dc\uc2a4\ud15c\uacfc \uc5f0\uacb0\ub418\ub294 \uc778\ud130\ud398\uc774\uc2a4 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc591\uce21 \ud558\ub4dc\uc6e8\uc5b4 \uc8fc\ubcc0 \uc7a5\uce58 \ubaa8\ub450\ub97c \ucc38\uc870\ud558\uae30\ub3c4 \ud558\uc9c0\ub9cc \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ub2e4\ub978 OS task\uc640 \ud1b5\uc2e0\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uac01\uac01 View \ud074\ub798\uc2a4\uc5d0\uc11c \ub2e4\ub978 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubaa8\ub4c8\uc774\ub098 \ud558\ub4dc\uc6e8\uc5b4\uc5d0 \uc561\uc138\uc2a4\ud558\ub3c4\ub85d \uc124\uacc4\ud558\ub294 \uac83\uc740 \ubc14\ub78c\uc9c1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"Model\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)(a.Z,{to:"../software-architecture/model-view-presenter-design-pattern",mdxType:"Link"},"MVP \ud328\ud134\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624.")),(0,r.kt)("p",null,"Model \ud074\ub798\uc2a4\ub294 \uc774\ub7ec\ud55c \uc778\ud130\ud398\uc774\uc2a4 \ucf54\ub4dc\ub97c \uc0bd\uc785\ud558\ub294 \ub370 \uc801\ud569\ud55c\ub370, \uadf8 \uc774\uc720\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Model \ud074\ub798\uc2a4\uc5d0\ub294 \uac01 \ud504\ub808\uc784\ub9c8\ub2e4 \uc790\ub3d9\uc73c\ub85c \ud638\ucd9c\ub418\ub294 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"tick()")," \ud568\uc218\uac00 \uc788\uc5b4\uc11c \ub2e4\ub978 \ud558\uc704 \ubaa8\ub4c8\uc5d0\uc11c \uc218\uc2e0\ub418\ub294 \uc774\ubca4\ud2b8\ub97c \ucc3e\uc544 \uc5ec\uae30\uc5d0 \ubc18\uc751\ud558\ub3c4\ub85d \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"Model \ud074\ub798\uc2a4\uc5d0\ub294 UI\uc5d0 \uc218\uc2e0\ub41c \uc774\ubca4\ud2b8\ub97c \uc54c\ub9b4 \uc218 \uc788\ub3c4\ub85d \ud604\uc7ac \ud65c\uc131\ud654\ub41c Presenter\ub97c \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\uac00 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h2",v({},{id:"system-interfacing"}),"\uc2dc\uc2a4\ud15c \uc5f0\uacb0"),(0,r.kt)("p",null,"\uc8fc\ubcc0 \uc2dc\uc2a4\ud15c\uacfc \uc5f0\uacb0\ud558\ub294 \ubc29\ubc95\uc740 GUI Task\uc5d0\uc11c \uc9c1\uc811 \uc0d8\ud50c\ub9c1\ud558\ub294 \uac83\uacfc Secondary Task\uc5d0\uc11c \uc0d8\ud50c\ub9c1\ud558\ub294 \uac83, \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",v({},{id:"sampling-from-gui-task"}),"GUI Task\uc5d0\uc11c \uc0d8\ud50c\ub9c1\ud558\uae30"),(0,r.kt)("p",null,"\uc8fc\ubcc0 \uc2dc\uc2a4\ud15c\uc744 \uc5f0\uacb0\ud560 \ub54c \uac00\uc7a5 \uc88b\uc740 \ubc29\ubc95\uc740 \uc0d8\ud50c\ub9c1 \ube48\ub3c4\uc640 \uc0d8\ud50c\ub9c1 \uc18c\uc694 \uc2dc\uac04, \uadf8\ub9ac\uace0 \uc18c\uc694 \uc2dc\uac04\uc758 \uc911\uc694\ub3c4\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc138 \uac00\uc9c0\uc640 \uad00\ub828\ud558\uc5ec \uc694\uac74\uc774 \uc5c4\uaca9\ud558\uc9c0 \uc54a\ub2e4\uba74 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")," \ud568\uc218\uc5d0\uc11c \uc9c1\uc811 \uc8fc\ubcc0 \uc2dc\uc2a4\ud15c\uc744 \uc0d8\ud50c\ub9c1\ud558\ub294 \uac83\uc774 \uac00\uc7a5 \uac04\ub2e8\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc0d8\ud50c\ub9c1 \ubc1c\uc0dd \ube48\ub3c4\uac00 \ud504\ub808\uc784 \uc18d\ub3c4(\uc77c\ubc18\uc801\uc73c\ub85c \uc57d 60Hz)\ubcf4\ub2e4 \ub0ae\uc744 \uacbd\uc6b0\uc5d0\ub294 \uce74\uc6b4\ud130\ub9cc \ucd94\uac00\ud558\uc5ec N\ubc88\uc9f8 \uc2e4\ud589 \uc774\ubca4\ud2b8\uc5d0\uc11c\ub9cc \uc0d8\ud50c\ub9c1\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\uc5d0\uc11c\ub294 \uc0d8\ud50c\ub9c1 \uc5f0\uc0b0\uc774 \ub2e4\uc18c \ube68\ub77c\uc57c \ud569\ub2c8\ub2e4(\uc77c\ubc18\uc801\uc73c\ub85c 1ms \uc774\ud558). \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ud504\ub808\uc784 \uc18d\ub3c4\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uac8c \ub418\ub294\ub370, \uc774\ub294 \uc0d8\ud50c\ub9c1\uc774 GUI task\uc758 context\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc838 \ud504\ub808\uc784 \uadf8\ub9ac\uae30 \uc791\uc5c5\uc744 \uc9c0\uc5f0\uc2dc\ud0a4\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",v({},{id:"sampling-from-secondary-task"}),"Secondary Task\uc5d0\uc11c \uc0d8\ud50c\ub9c1\ud558\uae30"),(0,r.kt)("p",null,"GUI task\uc758 context\uc5d0\uc11c \uc8fc\ubcc0 \uc2dc\uc2a4\ud15c\uacfc \uc9c1\uc811 \uc0c1\ud638\uc791\uc6a9\ud558\ub294 \ucf54\ub4dc\ub97c \uc0bd\uc785\ud558\ub294 \uac83\uc774 \ubc14\ub78c\uc9c1\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0\uc5d0\ub294 \uc0d8\ud50c\ub9c1\uc744 \ub2f4\ub2f9\ud558\ub294 OS task\ub97c \uc0c8\ub85c \uc0dd\uc131\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub807\uac8c \uc0dd\uc131\ub41c task\ub294 \ud2b9\uc815 \uc2dc\ub098\ub9ac\uc624\uc5d0 \ub530\ub77c \ud544\uc694\ud55c \uc2dc\uac04 \uac04\uaca9\uc73c\ub85c \uc815\ud655\ud558\uac8c \uc2e4\ud589\ub418\ub3c4\ub85d \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc694\uac74\uc5d0 \ub530\ub77c \uc0c8\ub85c\uc6b4 task\uc758 \uc6b0\uc120\uc21c\uc704\ub97c GUI task\ubcf4\ub2e4 \ub0ae\uac8c \ub610\ub294 \ub192\uac8c \ud560\ub2f9\ud560 \uc218\ub3c4 \ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6b0\uc120\uc21c\uc704\uac00 \ub354 \ub192\uc73c\uba74 GUI task\uc758 \uc720\ud615\uc5d0 \uc0c1\uad00\uc5c6\uc774 \uc9c0\uc815\ud55c \uc2dc\uac04\uc5d0 \uc815\ud655\ud558\uac8c \uc2e4\ud589\ub429\ub2c8\ub2e4. \ub2e8, CPU\ub97c \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c\ub294 UI\uc758 \ud504\ub808\uc784 \uc18d\ub3c4\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce60 \uc218 \uc788\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubc18\ub300\ub85c \uc0d8\ud50c\ub9c1\uc5d0\uc11c \uc2dc\uac04\uc774 \uc911\uc694\ud55c \uc694\uc18c\uac00 \uc544\ub2c8\ub77c\uba74 GUI task\ubcf4\ub2e4 \uc6b0\uc120\uc21c\uc704\ub97c \ub0ae\uac8c \ud560\ub2f9\ud558\uba74 \ub429\ub2c8\ub2e4. \uadf8\ub7ec\uba74 UI \ud504\ub808\uc784 \uc18d\ub3c4\uac00 \uc8fc\ubcc0 \uc2dc\uc2a4\ud15c\uc758 \uc0d8\ud50c\ub9c1\uc5d0 \uc758\ud574 \uc601\ud5a5\uc744 \ubc1b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. GUI task\ub294 \ub80c\ub354\ub9c1 \ub3d9\uc548 \ub300\uae30 \uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4(DMA \uae30\ubc18 \ud53d\uc140 \uc804\uc1a1\uc774 \ub05d\ub0a0 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9ac\ub294 \uacbd\uc6b0 \ub4f1). \ub530\ub77c\uc11c \uc6b0\uc120\uc21c\uc704\uac00 \ub0ae\uc740 task\ub3c4 \uc7a6\uc740 \uc2e4\ud589\uc774 \uac00\ub2a5\ud558\ubbc0\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub2e4\uc218\uc77c \ub54c\ub3c4 \uc801\ud569\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"secondary task \uc811\uadfc \ubc29\uc2dd\uc744 \ub530\ub978\ub2e4\uba74 RTOS\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 task \uac04 \uba54\uc2dc\uc9d5 \uc2dc\uc2a4\ud15c\uc744 \uc774\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ubaa8\ub450\ub294 \uc544\ub2c8\uc9c0\ub9cc \ub300\ubd80\ubd84 RTOS\ub294 queue/mail \uba54\ucee4\ub2c8\uc998\uc744 \uc9c0\uc6d0\ud558\uc5ec task \uac04 \ub370\uc774\ud130(\uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790 \uc815\uc758 C \uad6c\uc870\uccb4, \ubc14\uc774\ud2b8 \ubc30\uc5f4 \ub610\ub294 \ub2e8\uc21c \uc815\uc218) \uc804\uc1a1\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\ub97c GUI task\ub85c \uc804\uc1a1\ud558\ub824\uba74 \ud574\ub2f9 UI task\uc5d0 \ub300\ud55c mailbox \ub610\ub294 message queue\ub97c \uc124\uc815\ud55c \ud6c4 \uc774 \uba54\uc2dc\uc9c0 \uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud574 \ub370\uc774\ud130\ub97c GUI task\ub85c \ubcf4\ub0b4\uba74 \ub429\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud574 GUI task\uc758 mailbox\ub97c \ud3f4\ub9c1\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\uac00 \uc804\uc1a1\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc77c\uc758 \uacbd\uc6b0\uc5d0\ub294 \ub370\uc774\ud130\ub97c \uc77d\uc5b4\uc640\uc11c \uadf8\uc5d0 \ub530\ub77c UI\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",v({},{id:"propagating-data-to-ui"}),"\ub370\uc774\ud130\ub97c UI\ub85c \uc804\ub2ec\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-gui-task"}),"GUI Task\uc5d0\uc11c \uc0d8\ud50c\ub9c1\ud558\uae30")," \ub610\ub294 ",(0,r.kt)("a",v({parentName:"p"},{href:"#sampling-from-secondary-task"}),"Secondary Task\uc5d0\uc11c \uc0d8\ud50c\ub9c1\ud558\uae30")," \uc911\uc5d0\uc11c \ubb34\uc5c7\uc744 \uc0ac\uc6a9\ud558\ub4e0 \uc0c1\uad00\uc5c6\uc774 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")," \ud568\uc218\ub294 GUI Task\uc5d0\uc11c UI\uc5d0 \ud45c\uc2dc\ub418\ub294 \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \uc8fc\ubcc0 \uc2dc\uc2a4\ud15c\uc5d0 \ub300\ud55c \uc778\ud130\ud398\uc774\uc2a4 \uc5ed\ud560\uc744 \ud558\ub294 \uac83 \uc678\uc5d0\ub3c4, \uc55e\uc11c Model \ud074\ub798\uc2a4\uac00 \uc0c1\ud0dc \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud55c\ub2e4\uace0 \uc5b8\uae09\ud55c \uac83\uc744 \uace0\ub824\ud574\ubcf4\uba74 \uc5c5\ub370\uc774\ud2b8\uac00 \ud544\uc694\ud55c \uc0c1\ud0dc \ubcc0\uc218\uac00 \uc874\uc7ac\ud560 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac04\ub2e8\ud55c \uc608\ub85c, \uc628\ub3c4 \uc13c\uc11c\ub97c \uc2dc\uc2a4\ud15c\uc5d0 \uc5f0\uacb0\ud558\uc5ec \ud604\uc7ac \uc628\ub3c4\ub97c UI\uc5d0 \ud45c\uc2dc\ud558\ub824\uace0 \ud569\ub2c8\ub2e4. \uc900\ube44 \uacfc\uc815\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud560 \uc218 \uc788\ub3c4\ub85d Model \ud074\ub798\uc2a4\ub97c \ubcf4\uac15\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class Model\n{\npublic:\n  // Function that allow your Presenters to read current temperature.\n  int getCurrentTemperature() const { return currentTemperature; }\n\n  // Called automatically by framework every tick.\n  void tick();\n  ...\nprivate:\n  // Variable storing last received temperature;\n  int currentTemperature;\n  ...\n};\n")),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Presenters")," \uac00 model\uc5d0\uac8c \ud604\uc7ac \uc628\ub3c4\ub97c \ubb3c\uc5b4\ubcfc \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc628\ub3c4\ub97c \ud45c\uc2dc\ud558\ub294 \uc2a4\ud06c\ub9b0\uc73c\ub85c \uc804\ud658\ud560 \ub54c \uc628\ub3c4 \uac12\uc744 UI(View)\uc5d0 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc81c \uc0c8\ub85c\uc6b4 \uc628\ub3c4 \uc815\ubcf4\uac00 \uc218\uc2e0\ub420 \ub54c UI\ub97c \ub2e4\uc2dc \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774\ub54c\ub294 Model\uc5d0 \ud604\uc7ac \ud65c\uc131\ud654\ub41c Presenter\ub97c \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\uac00 \uc788\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4. \uc774 \ud3ec\uc778\ud130\ub294 \uc778\ud130\ud398\uc774\uc2a4(",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"ModelListener"),") \uc720\ud615\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub530\ub77c \uc801\ud569\ud55c \uc774\ubca4\ud2b8\ub97c \ubc18\uc601\ud558\ub3c4\ub85d \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"ModelListener.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class ModelListener\n{\npublic:\n  // Call this function to notify that temperature has changed.\n  // Per default, use an empty implementation so that only those\n  // Presenters interested in this specific event need to\n  // override this function.\n  virtual void notifyTemperatureChanged(int newTemperature) {}\n};\n")),(0,r.kt)("p",null,'\uc774\ub85c\uc368 \uc778\ud130\ud398\uc774\uc2a4 \uc5f0\uacb0\uc744 \ub9c8\ucce4\uc73c\ubbc0\ub85c \uc774\uc81c \uc218\uc2e0\ub418\ub294 "',(0,r.kt)(s,{mdxType:"InlineNote"},"new temperature"),'" \uc774\ubca4\ud2b8\uc778 ',(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Model::tick")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Model.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'void Model::tick()\n{\n  // Pseudo-code for sampling data\n  if (OS_Poll(GuiTaskMBox))\n  {\n    // Here we assume that you have defined a "Message" struct containing type and data,\n    // along with some event definitions.\n    struct Message msg = OS_Read(GuiTaskMBox);\n    if (msg.eventType == EVT_TEMP_CHANGED)\n    {\n       // We received information that temperature has changed.\n       // First, update Model state variable\n       currentTemperature = msg.data;\n\n      // Second, notify the currently active Presenter that temperature has changed.\n      // The modelListener pointer points to the currently active Presenter.\n      if (modelListener != 0)\n      {\n        modelListener->notifyTemperatureChanged(currentTemperature);\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"\uc704\uc758 \uc811\uadfc \ubc29\uc2dd\uc740 \ub2e4\uc74c \ub450 \uac00\uc9c0\ub97c \ubcf4\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc704\uc5d0\uc11c ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"currentTemperature")," \ubcc0\uc218\uac00 \ud56d\uc0c1 \ucd5c\uc2e0 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud558\uae30 \ub54c\ubb38\uc5d0 \ud504\ub9ac\uc820\ud130\uac00 \uc5b8\uc81c\ub4e0\uc9c0 \ud604\uc7ac \uc628\ub3c4\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc704\uc5d0\uc11c ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"Presenter\uac00")," \uc628\ub3c4 \ubcc0\ud654\ub97c \uc989\uc2dc \uc218\uc2e0\ud558\uc5ec \uc801\uc808\ud55c \uc870\uce58\ub97c \ucde8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"MVP \ud328\ud134\uc758 \ud55c \uac00\uc9c0 \uc774\uc810\uc740 \ud604\uc7ac \ud65c\uc131\ud654\ub41c \uc2a4\ud06c\ub9b0\uc5d0 \ub530\ub77c \uc54c\ub9bc\uc744 \ub530\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4\ub294 \uc0ac\uc2e4\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud604\uc7ac \uc628\ub3c4\uc640 \uc544\ubb34 \uad00\ub828\uc774 \uc5c6\ub294 \uc124\uc815 \uba54\ub274 ",(0,r.kt)(s,{mdxType:"InlineNote"},"(MainMenuPresenter/MainMenuView \ud65c\uc131\ud654 \ub4f1)\ub97c")," \ud45c\uc2dc\ud558\ub294 \ub3c4\uc911 \uc628\ub3c4 \ubcc0\ud654 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud588\ub2e4\uace0 \uac00\uc815\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged")," \ud568\uc218\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ube48 \uad6c\ud604\uccb4\ub97c \uac16\uae30 \ub54c\ubb38\uc5d0 \uc774 \uc54c\ub9bc\uc740 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"MainMenuPresenter\uc5d0 \uc758\ud574 \ub2e8\uc21c\ud788 \ubb34\uc2dc\ub429\ub2c8\ub2e4"),". \ubc18\uba74\uc5d0 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"TemperatureControlPresenter\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4\uba74")," \uc774 Presenter\uc5d0\uc11c  ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged"),"  \ud568\uc218\ub97c \uc7ac\uc815\uc758\ud558\uace0 \ud574\ub2f9 View\uc5d0\uac8c \uc5c5\ub370\uc774\ud2b8\ub41c \uc628\ub3c4\ub97c \ud45c\uc2dc\ud558\ub77c\uace0 \uc54c\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"TemperatureControlPresenter.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class TemperatureControlPresenter : public ModelListener\n{\npublic:\n  // override the empty function.\n  virtual void notifyTemperatureChanged(int newTemperature) {\n    view.setTemp(newTemperature);\n  }\n};\n")),(0,r.kt)("p",null,"\ubb3c\ub860 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"TemperatureControlView")," View \ud074\ub798\uc2a4\ub294 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"setTemp")," \uba54\uc18c\ub4dc\ub97c \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h2",v({},{id:"transmitting-data-from-ui-to-surrounding-system"}),"\ub370\uc774\ud130\ub97c UI\uc5d0\uc11c \uc8fc\ubcc0 \uc2dc\uc2a4\ud15c\uc73c\ub85c \uc804\uc1a1\ud558\uae30"),(0,r.kt)("p",null,"\ub370\uc774\ud130/\uc774\ubca4\ud2b8\ub97c UI\uc5d0\uc11c \uc8fc\ubcc0 \uc2dc\uc2a4\ud15c\uc73c\ub85c \ubcf4\ub0b4\ub294 \uc5ed\ubc29\ud5a5 \uc804\uc1a1\uc740 Model\uc744 \ud1b5\ud574 \ub9e4\uc6b0 \uc720\uc0ac\ud55c \ubc29\uc2dd\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. \uc704\uc758 \uc608\uc5d0 \uc774\uc5b4\uc11c \uc0c8\ub85c\uc6b4 \ubaa9\ud45c \uc628\ub3c4\ub97c \uad6c\uc131\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \ucd94\uac00\ud574\uc57c \ud55c\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 Model\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"void setNewTargetTemperature(int newTargetTemp)\n{\n  // Pseudo-code for sending an event to a task responsible for controlling temperature.\n  struct Message msg;\n  msg.eventType = EVT_SET_TARGET_TEMP;\n  msg.data = newTargetTemp;\n  OS_Send(SystemTaskMBox, &msg);\n}\n")),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 UI\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ubaa9\ud45c \uc628\ub3c4\ub97c \uc124\uc815\ud558\uba74 View\uac00 Model \uac1d\uccb4\ub97c \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\uac00 \uc800\uc7a5\ub41c Presenter\uc5d0\uac8c \uc774\ub97c \uc54c\ub9ac\uace0, \uc774\uc5d0 \ub530\ub77c ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"setNewTargetTemperature")," \ud568\uc218\uc5d0\uc11c \uc9c1\uc811 \uc8fc\ubcc0 \uc2dc\uc2a4\ud15c\uc744 \uc0d8\ud50c\ub9c1\ud558\ub294 \uac83\uc774 \uac00\uc7a5 \uac04\ub2e8\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",v({},{id:"examples"}),"\uc608\uc81c"),(0,r.kt)("p",null,"The following examples are Board Specific Demos (BSD), however much of the code demonstrated can be reused for other demo boards and custom hardware. For these examples we create the Tasks and Queues in STM32CubeMX. We then populate the generated Tasks and implements example user code in ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"main_user.c"),". The examples use STM32CubeMX BSP librarie to control the LEDs, user buttons and other peripherals on the STM32 evaliation kits."),(0,r.kt)("h3",v({},{id:"from-gui-task"}),"GUI Task\uc5d0\uc11c"),(0,r.kt)("p",null,"An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F46G Discovery kit Control LED from GUI."),(0,r.kt)("p",null,"The application demonstrates how to sample a button and control a LED. Model \ud074\ub798\uc2a4\ub294 \ubc84\ud2bc\uc744 \uc0d8\ud50c\ub9c1\ud55c \ud6c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0c1\ud0dc\uc5d0 \ub9de\uac8c LED\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",v({},{id:"from-other-task"}),"\uae30\ud0c0 Task\uc5d0\uc11c"),(0,r.kt)("p",null,"An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32H7B3I Evaluation Board Analog Sampler Task."),(0,r.kt)("p",null,"The application demonstrates how to sample an analog input in separate thread. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 MVP \uc544\ud0a4\ud14d\ucc98\ub97c \uc0ac\uc6a9\ud574 \uc544\ub0a0\ub85c\uadf8 \uac12\uc744 View\uc5d0 \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F46G Discovery kit Intertask Communication."),(0,r.kt)("p",null,"The application demonstrates intertask communication and propagation to and from the UI. \uc774 \uc608\uc81c\ub97c \ucc38\uc870\ud558\uc5ec \uc790\uccb4 \ud658\uacbd\uc744 \uc124\uc815\ud574\ubcf4\uc2ed\uc2dc\uc624. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 C \ucf54\ub4dc\ub85c \uad6c\ud604\ub41c \ubc31\uc5d4\ub4dc \uc2dc\uc2a4\ud15c\uacfc C++ TouchGFX GUI \uc0ac\uc774\uc5d0\uc11c \ud1b5\uc2e0\ud569\ub2c8\ub2e4. \ub610\ud55c FreeRTOS \uc678\uc5d0 STM32F746G-DISCO \ubcf4\ub4dc\uc5d0\uc11c\ub3c4 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("h3",v({},{id:"from-multiple-tasks"}),"\ub2e4\uc911 Task\uc5d0\uc11c"),(0,r.kt)("p",null,"An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F769I Discovery Multitast Communication Demo."),(0,r.kt)("p",null,"The application samples the state of the button, passes a message through the GUI message queue if the button is pressed down. \ub530\ub77c\uc11c \ubc84\ud2bc\uc744 \ub204\ub974\uace0 \uc788\uc73c\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 3\uac1c\uc758 FreeRTOS task\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. 1\uac1c\ub294 GUI \uc6a9\uc774\uace0, 1\uac1c\ub294 \uac01 \uc8fc\ubcc0 \uc7a5\uce58(LED \ubc0f USER \ubc84\ud2bc) \uc6a9\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",v({},{id:"from-task-and-external-interrupt-line"}),"Task \ubc0f \uc678\ubd80 \uc778\ud130\ub7fd\ud2b8 \ub77c\uc778\uc5d0\uc11c"),(0,r.kt)("p",null,"An example application, a BSD, can be found in the latest version of TouchGFX Designer under Demos -> Board Specific Demo -> STM32F769I Discovery External Interrup Line Demo."),(0,r.kt)("p",null,"The application was designed for the STM32F769I-DISCO board and interacts with an LED and the USER BUTTON to show how to integrate both C code and hardware peripherals into your TouchGFX application."),(0,r.kt)("p",null,"\uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ubc84\ud2bc\uc744 EXTI \ubaa8\ub4dc(\uc678\ubd80 \uc778\ud130\ub7fd\ud2b8 \ub77c\uc778 0)\ub85c \uad6c\uc131\ud569\ub2c8\ub2e4. \uc778\ud130\ub7fd\ud2b8\ub97c \uc18c\uac70\ud55c \ud6c4 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc778\ud130\ub7fd\ud2b8\uac00 \uc218\uc2e0\ub429\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 GPIO \ubaa8\ub4dc\uc640 \uac19\uc740 \ub3d9\uc791\uc740 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc778\ud130\ub7fd\ud2b8\uac00 \uc218\uc2e0\ub420 \ub54c\ub9c8\ub2e4 GUI message queue\ub97c \ud1b5\ud574\uc11c\ub9cc \uba54\uc2dc\uc9c0\uac00 \uc804\uc1a1\ub418\ubbc0\ub85c \uc560\ub2c8\uba54\uc774\uc158\uc774 \ud55c \ub2e8\uacc4\uc529 \ucc28\ub840\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 2\uac1c\uc758 FreeRTOS task\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. 1\uac1c\ub294 GUI \uc6a9\uc774\uace0, \ub098\uba38\uc9c0 1\uac1c\ub294 LED \uc6a9\uc785\ub2c8\ub2e4. \uc774\ub54c ",(0,r.kt)("a",v({parentName:"p"},{href:"#from-multiple-tasks"}),"\ub2e4\uc911 task \ub370\ubaa8"),"\uc758 \ubc84\ud2bc \uc791\uc5c5\uc740 \uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc720\ud6a8\ud55c \uc0c1\ud0dc\ub85c \ub0a8\uc544, \uc8fc\ubcc0 \uc7a5\uce58 \uc0c1\ud638\uc791\uc6a9 \ucf54\ub4dc\uac00 \uc778\ud130\ub7fd\ud2b8 \ud578\ub4e4\ub7ec\uc5d0 \uc0bd\uc785\ub418\uc5c8\ub2e4\ub294 \uac83\uc744 \uc608\uc2dc\ud569\ub2c8\ub2e4."))}w.isMDXComponent=!0}}]);