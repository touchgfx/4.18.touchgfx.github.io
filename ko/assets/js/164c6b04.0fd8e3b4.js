(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4863],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},70814:function(e,t,r){"use strict";var n=r(67294),o=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class a extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}t.Z=a},22425:function(e,t,r){"use strict";var n=r(67294);class o extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,r){"use strict";var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children))}},29415:function(e,t,r){"use strict";var n=r(67294),o=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},88678:function(e,t,r){"use strict";var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(67294),o=r(73727),i=r(11368),a=r(35096),l=r(84487);const c=(0,n.createContext)({collectLink:()=>{}});var u=r(25026),s=r(67023),d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&g(e,r,t[r]);if(m)for(var r of m(t))b.call(t,r)&&g(e,r,t[r]);return e};var k=function(e){var t,r=e,{isNavLink:d,to:g,href:k,activeClassName:w,isActive:y,"data-noBrokenLinkCheck":C,autoAddBaseUrl:M=!0}=r,S=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:E,baseUrl:T}}=(0,i.Z)(),{withBaseUrl:O}=(0,u.C)(),j=(0,n.useContext)(c),x=g||k,P=(0,a.Z)(x),I=null==x?void 0:x.replace("pathname://","");let D=void 0!==I?(N=I,M&&(e=>e.startsWith("/"))(N)?O(N):N):void 0;var N;D&&P&&(D=(0,s.applyTrailingSlash)(D,{trailingSlash:E,baseUrl:T}));const U=(0,n.useRef)(!1),Z=d?o.OL:o.rU,A=l.Z.canUseIntersectionObserver,X=(0,n.useRef)();(0,n.useEffect)((()=>(!A&&P&&null!=D&&window.docusaurus.prefetch(D),()=>{A&&X.current&&X.current.disconnect()})),[X,D,A,P]);const R=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,L=!D||!P||R;return D&&P&&!R&&!C&&j.collectLink(D),L?n.createElement("a",v(v({href:D},x&&!P&&{target:"_blank",rel:"noopener noreferrer"}),S)):n.createElement(Z,v((F=v({},S),p(F,h({onMouseEnter:()=>{U.current||null==D||(window.docusaurus.preload(D),U.current=!0)},innerRef:e=>{var t,r;A&&e&&P&&(t=e,r=()=>{null!=D&&window.docusaurus.prefetch(D)},X.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(X.current.unobserve(t),X.current.disconnect(),r())}))})),X.current.observe(t))},to:D||""}))),d&&{isActive:y,activeClassName:w}));var F}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(11368),o=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[o]=e.split(/[#?]/),i="/"===o||o===n?o:(a=o,r?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(o,i)}},67023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},98042:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return g},contentTitle:function(){return v},metadata:function(){return k},toc:function(){return w},default:function(){return C}});var n=r(3905),o=r(44035),i=r(29415),a=r(31217),l=r(22425),c=r(70814),u=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&f(e,r,t[r]);return e};const g={id:"01-create-project",title:"1. Create Project",sidebar_label:"1. Create Project"},v=void 0,k={unversionedId:"development/board-bring-up/how-to/01-create-project",id:"development/board-bring-up/how-to/01-create-project",isDocsHomePage:!1,title:"1. Create Project",description:"\uac1c\uc694",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/01-create-project.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/01-create-project",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/01-create-project",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-create-project",title:"1. Create Project",sidebar_label:"1. Create Project"},sidebar:"docs",previous:{title:"\uac1c\ubc1c \uc18c\uac1c",permalink:"/4.18/ko/docs/development/board-bring-up/board-introduction"},next:{title:"2. CPU Running",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/02-cpu-running"}},w=[{value:"\uac1c\uc694",id:"motivation",children:[],level:2},{value:"\ubaa9\ud45c",id:"goal",children:[{value:"\ud655\uc778",id:"verification",children:[],level:3}],level:2},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",children:[],level:2},{value:"\uc2e4\ud589",id:"do",children:[{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc \uc120\ud0dd",id:"user-code-sections",children:[],level:3}],level:2},{value:"\ucd94\uac00 \uc790\ub8cc",id:"further-reading",children:[],level:2}],y={toc:w};function C(e){var t,r=e,{components:u}=r,f=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=b(b({},y),f),s(t,d({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("h2",b({},{id:"motivation"}),"\uac1c\uc694"),(0,n.kt)("p",null,"In this section we will use STM32CubeMX to generate a working project for a specific MCU. \uc774 \ud504\ub85c\uc81d\ud2b8\ub294 \uc774 \uc785\ubb38 \uac00\uc774\ub4dc\uc5d0 \ub098\uc640 \uc788\ub294 \ub098\uba38\uc9c0 \ub2e8\uacc4\ub4e4\uc758 \ud1a0\ub300\uac00 \ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"We will refine the project using STM32CubeMX in coming steps and write and integrate code to make all required peripherals work."),(0,n.kt)("p",null,"\uc774 \ud504\ub85c\uc81d\ud2b8\ub294 \uc7a5\uae30\uac04 \uc9c0\uc18d \ubc0f \uc720\uc9c0\ub420 \uac83\uc785\ub2c8\ub2e4. \uc774\uc804 \ub2e8\uacc4\ub85c \ub3cc\uc544\uac00\uc11c \ub2e4\uc2dc \uc2e4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \uc11c\ub85c \ub2e4\ub978 \ubc84\uc804\uc758 \uac00\uc6a9\uc131\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud55c \uc804\ub7b5\uc744 \uc774 \ub2e8\uacc4\uc5d0\uc11c \uacb0\uc815\ud574\uc57c\ud569\ub2c8\ub2e4.  \uc0c8 \ud558\ub4dc\uc6e8\uc5b4 \uc0ac\uc6a9\uc774\ub098 \ud558\ub4dc\uc6e8\uc5b4 \uc7ac\uc810\uac80 \uc911 \ud55c \uac00\uc9c0 \ubc29\ubc95\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc18c\uaddc\ubaa8 \ud14c\uc2a4\ud2b8 \ud504\ub85c\uadf8\ub7a8\uc774 \ub2e4\uc218 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0\uc5d0\ub294 \uc774 \ud504\ub85c\uc81d\ud2b8\uac00 \uc88b\uc740 \uc2dc\uc791\uc810\uc774 \ub418\uc5b4 \uc904 \uac83\uc785\ub2c8\ub2e4."),(0,n.kt)("h2",b({},{id:"goal"}),"\ubaa9\ud45c"),(0,n.kt)("p",null,"The goal is to create a project in STM32CubeMX that can be flashed to your board and executed. \ub514\ubc84\uac70 \uae30\ub2a5\uc744 \uac16\ucd98 IDE(\uc608: STM32CubeIDE \ub610\ub294 IAR Embedded Workbench)\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 MCU\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \ub514\ubc84\uae45 \ubc0f \uc2a4\ud15d \ub514\ubc84\uae45\uc744 \ud560 \uc218 \uc788\ub294\uc9c0\ub3c4 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ub514\ubc84\uac70\uac00 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 \uac01\uc885 \uc704\uce58\uc5d0\uc11c \ub514\ubc84\uae45 \uba85\ub839\ubb38\uc744 \ucd9c\ub825\ud560 \ubc29\ubc95\uc744 \ucc3e\uc544\uc57c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74  \uc2dc\ub9ac\uc5bc \ud3ec\ud2b8\ub97c \ud1b5\ud574 \ucd9c\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h3",b({},{id:"verification"}),"\ud655\uc778"),(0,n.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Rationale"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"\ud504\ub85c\uc81d\ud2b8\uac00 IDE\uc5d0\uc11c \uc5f4\ub9bc"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"The project was generated correctly by STM32CubeMX and can be used as starting point for further board bring up development.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"\ud504\ub85c\uc81d\ud2b8 \ucef4\ud30c\uc77c"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"\ud504\ub85c\uc81d\ud2b8\ub294 \ub4dc\ub77c\uc774\ubc84\uc5d0\uc11c \uc62c\ubc14\ub974\uac8c \uc124\uc815\uc774 \ub418\uc5c8\uc73c\uba70 \uacbd\ub85c\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ucf54\ub4dc\ub97c \ucd94\uac00\ub85c \uc791\uc131\ud558\uace0 \ud504\ub85c\uc81d\ud2b8\ub97c \ubc18\ubcf5\uc801\uc73c\ub85c \uc7ac\ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"\uc911\ub2e8\uc810\uc5d0 \ub3c4\ub2ec\ud588\ub294\uc9c0 \uc5ec\ubd80"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"\ud504\ub85c\uc81d\ud2b8\ub294 \ub514\ubc84\uae45\uc774 \uac00\ub2a5\ud558\uba70, \uc911\ub2e8\uc810\uc5d0\uc11c \uba48\ucd94\uac8c \ub429\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8 \uc0c1\ud0dc\ub97c \uac80\ud1a0\ud558\uc5ec \uc624\ub958\ub97c \uc870\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,n.kt)("h2",b({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,n.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uc81c \uc870\uac74\uc785\ub2c8\ub2e4:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"STM32 \uae30\ubc18 \ubcf4\ub4dc"),(0,n.kt)("li",{parentName:"ul"},"\ud504\ub85c\uadf8\ub798\ubc0d/\ub514\ubc84\uae45 \uc778\ud130\ud398\uc774\uc2a4(ST-LINK, JLINK \ub4f1)"),(0,n.kt)("li",{parentName:"ul"},"STM32CubeMX installed"),(0,n.kt)("li",{parentName:"ul"},"IDE \uc124\uce58(STM32CubeIDE, IAR Embedded Workbench, Keil uVision \ub4f1)")),(0,n.kt)("h2",b({},{id:"do"}),"\uc2e4\ud589"),(0,n.kt)("p",null,"We will now go through the steps of creating a new project in STM32CubeMX. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 STM32F429 MCU\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ubb3c\ub860 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c MCU\ub97c \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,'In STM32CubeMX click "ACCESS TO MCU SELECTOR" in the "Start My Project from MCU":'),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\uc0c8 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"),(0,n.kt)("p",null,"STM32 \ud3c9\uac00 \ud0a4\ud2b8(\uc608: STM32F429 Discovey \ubcf4\ub4dc)\ub97c \uae30\ubc18\uc73c\ub85c \uc0c8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud558\ub4dc\uc6e8\uc5b4\uac00 \ud3c9\uac00 \ud0a4\ud2b8 \uc911 \ud558\ub098\ub97c \uae30\ubc18\uc73c\ub85c \uc124\uacc4\ub41c \uacbd\uc6b0\uc5d0\ub294 \uc774\uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c \ud574\ub2f9 MCU\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 STM32F429ZIT6U\ub97c \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4."),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx02.png",noShadow:!1,width:"600",mdxType:"Figure"},"MCU \uc120\ud0dd"),(0,n.kt)("p",null,'"Project Manager" \ud0ed\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc774\ub984\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. \ubb3c\ub860 \uc0c8 \ud504\ub85c\uc81d\ud2b8\uc758 \uc704\uce58\ub3c4 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "Application Structure"\ub85c \uac00\uc11c "Advanced"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 "Toolchain / IDE"\ub85c \uac00\uc11c IDE\ub97c \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 IAR\uc744 \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4:'),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx03.png",noShadow:!1,width:"600",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \uc774\ub984 \ubc0f IDE \uc124\uc815"),(0,n.kt)("p",null,'\uc624\ub978\ucabd \uc0c1\ub2e8 \ubaa8\uc11c\ub9ac\uc758 "Generate Code" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. If this is your first project for the selected MCU family (F4/F7/H7) STM32CubeMX automatically proposes to download the relevant STM32Cube Firmware package. \ucd94\ud6c4 \uc0ac\uc6a9\uc744 \uc704\ud574 \ucd5c\uc2e0 \ubc84\uc804\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\ub3c4\ub85d \uc774\ub97c \uc218\ub77d\ud558\uc2ed\uc2dc\uc624.'),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx04.png",noShadow:!1,width:"600",mdxType:"Figure"},"STM32CubeMX can download STM32Cube Firmware"),(0,n.kt)("p",null,'"Open Project"\ub97c \ud074\ub9ad\ud558\uc5ec IDE\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc5fd\ub2c8\ub2e4:'),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx05.png",noShadow:!1,width:"600",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ub428"),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx06.png",noShadow:!1,width:"600",mdxType:"Figure"},"IAR Embedded Workbench\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 \uc5f4\uae30"),(0,n.kt)("p",null,"The project generated by STM32CubeMX contains startup code specific to the MCU, interrupt table, system initialisation code, and HAL drivers for all the peripherals in the MCU."),(0,n.kt)("p",null,"\uc774\uc81c IDE\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \ucef4\ud30c\uc77c \ubc0f \ub514\ubc84\uae45\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. IAR\uc5d0\uc11c Project->Make\ub97c \ud074\ub9ad\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\ub97c \ucef4\ud30c\uc77c\ud558\uace0, Project->Download and Debug\ub97c \ud074\ub9ad\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\ub97c \ub514\ubc84\uae45\ud569\ub2c8\ub2e4."),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx07.png",noShadow:!1,width:"600",mdxType:"Figure"},"IAR Embedded Workbench\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8 \ub514\ubc84\uae45"),(0,n.kt)("p",null,"IAR \ud504\ub85c\uc81d\ud2b8\ub294 STLink \ub514\ubc84\uac70\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc124\uc815\ub429\ub2c8\ub2e4. \ub2e4\ub978 \uac83\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 IDE\uc758 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud55c Debugger \uc18d\uc131\uc744 \ubcc0\uacbd\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/create/cubemx08.png",noShadow:!1,width:"600",mdxType:"Figure"},"\uba54\uc778 \ub8e8\ud504\uac00 \uc5f0\uc18d\uc801\uc73c\ub85c \uc2e4\ud589 \uc911"),(0,n.kt)("p",null,"While \uba54\uc778 \ub8e8\ud504\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc6b4\uc601 \uccb4\uc81c \uc5c6\uc774 \uc2e4\ud589 \uc911\uc778 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc911\uc694\ud569\ub2c8\ub2e4. \uc911\ub2e8\uc810\uc744 \uc124\uc815\ud558\uc5ec \ub3c4\ub2ec \uc5ec\ubd80\ub97c \ud655\uc778\ud558\uace0 \ub8e8\ud504\uc5d0 \ucf54\ub4dc\ub97c \uc77c\ubd80 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"IDE\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc0b4\ud3b4\ubcf4\uba74\uc11c \uad6c\uc870\ub97c \uc775\ud788\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 SystemInit\uc5d0\uc11c \uba54\uc778 \ub8e8\ud504\uae4c\uc9c0 \uc0b4\ud3b4\ubcf4\uc2ed\uc2dc\uc624."),(0,n.kt)("h3",b({},{id:"user-code-sections"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc \uc120\ud0dd"),(0,n.kt)("p",null,'At this step it is important to understand the concept of "User Code sections" used by STM32CubeMX before you start editing your project. All of the source files in the Core/Src folder in your project are generated by STM32CubeMX. When you later change the project configuration in STM32CubeMX, e.g. to enable a UART, some of these files will be regenerated. \uc774\ub4e4 \uc911 \uc77c\ubd80 \ud30c\uc77c\uc5d0\ub294 \uc0bd\uc785\ub41c \ucf54\ub4dc\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Your code will be lost when STM32CubeMX regenerates the project unless you follow one single rule:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc \uc139\uc158\uc5d0\uc11c\ub9cc \ucf54\ub4dc \uc791\uc131"))),(0,n.kt)("p",null,"Any code that you write outside of a User Code section will be deleted by STM32CubeMX."),(0,n.kt)("p",null,"\ud55c \uc608\ub85c Core/Src/main.c\uc758 \uccab \ud589\uc744 \uba87 \uc904 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{3-5}","{3-5}":!0}),"int main(void)\n{\n  /* USER CODE BEGIN 1 */\n\n  /* USER CODE END 1 */\n\n\n  /* MCU Configuration--------------------------------------------------------*/\n\n  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */\n  HAL_Init();\n  ...\n}\n")),(0,n.kt)("p",null,"\uba54\uc778 \ud568\uc218\uac00 \uc2dc\uc791\ub420 \ub54c \uc5ec\uae30\uc5d0 \ucf54\ub4dc\ub97c \uc0bd\uc785\ud558\ub824\ub294 \uacbd\uc6b0\uc5d0\ub294 USER CODE BEGIN 1\uacfc USER CODE END 1 \uc0ac\uc774\uc5d0 \ubc30\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. If you put code outside this block it will be deleted by STM32CubeMX."),(0,n.kt)(c.Z,{mdxType:"Caution"},"'\uc0ac\uc6a9\uc790 \ucf54\ub4dc' \uc139\uc158 \ubc16\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc791\uc131\ud574\uc11c\ub294 \uc548 \ub429\ub2c8\ub2e4. Such code will be removed when STM32CubeMX generates code."),(0,n.kt)("h2",b({},{id:"further-reading"}),"\ucd94\uac00 \uc790\ub8cc"),(0,n.kt)("p",null,"\uc5ec\uae30\uc5d0 \ub9c1\ud06c\ub41c \ubb38\uc11c\ub4e4\uc5d0\ub294 CubeMX\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4:"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)(a.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",mdxType:"Link"},"STM32CubeMX \uc0ac\uc6a9\uc790 \ub9e4\ub274\uc5bc")),(0,n.kt)("li",null,(0,n.kt)(a.Z,{to:"https://www.st.com/en/development-tools/stm32cubeide.html#resource",mdxType:"Link"},"STM32CubeIDE \uad00\ub828 \uc790\ub8cc")),(0,n.kt)("li",null,(0,n.kt)(a.Z,{to:"https://www.youtube.com/playlist?list=PLnMKNibPkDnGtuIl5v0CvC81Am7SKpj02",mdxType:"Link"},"STM32CubeMX\uc640 STM32Cube\uc5d0 \uad00\ud55c \ub300\uaddc\ubaa8 \uacf5\uac1c \uc628\ub77c\uc778 \uac15\uc88c")))))}C.isMDXComponent=!0}}]);