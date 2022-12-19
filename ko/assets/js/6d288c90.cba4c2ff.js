"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[395],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),s=l,h=d["".concat(u,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,l.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),l=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=l},56569:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return v}});var r=n(3905),l=n(44035),i=n(29415),o=n(39130),a=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&s(e,n,t[n]);return e};const g={id:"02-cpu-running",title:"2. CPU Running",sidebar_label:"2. CPU Running"},k=void 0,f={unversionedId:"development/board-bring-up/how-to/02-cpu-running",id:"development/board-bring-up/how-to/02-cpu-running",title:"2. CPU Running",description:"\uac1c\uc694",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/02-cpu-running.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/02-cpu-running",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/02-cpu-running",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"02-cpu-running",title:"2. CPU Running",sidebar_label:"2. CPU Running"},sidebar:"docs",previous:{title:"1. Create Project",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/01-create-project"},next:{title:"3. \ub0b4\ubd80 RAM\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uac00\uc9c0\ub294\ub514\uc2a4\ud50c\ub808\uc774",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/03-display-internal"}},b={},v=[{value:"\uac1c\uc694",id:"motivation",level:2},{value:"\ubaa9\ud45c",id:"goal",level:2},{value:"\ud655\uc778",id:"verification",level:3},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",level:2},{value:"\uc2e4\ud589",id:"do",level:2},{value:"\uc2dc\uc2a4\ud15c \ud074\ub85d",id:"system-clock",level:3},{value:"\ud50c\ub798\uc2dc\uc640 RAM\uc758 \ud06c\uae30 \ubc0f \uc18d\ub3c4",id:"flash-and-ram-size-and-speed",level:3},{value:"\ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8",id:"linker-script",level:3},{value:"F7 \ubc0f H7\uc758 \uce90\uc2dc",id:"cache-on-f7-and-h7",level:3},{value:"TouchGFX\uc758 \ub0b4\ubd80 DCache \uc0c1\ud0dc \uba38\uc2e0",id:"touchgfx-internal-dcache-state-machine",level:4},{value:"\ucd94\uac00 \uc790\ub8cc",id:"further-readings",level:2}],y={toc:v};function w(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),s),u(t,c({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"motivation"}),"\uac1c\uc694"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 MCU \ucf54\uc5b4, \ub0b4\ubd80 RAM \ubc0f \ud50c\ub798\uc2dc\uac00 \uc6d0\ud558\ub294 \ud074\ub85d \uc18d\ub3c4\ub85c \uc2e4\ud589\uc774 \ub418\ub294\uc9c0 \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX\ub294 \uc5b4\ub5a4 MCU \uc18d\ub3c4\uc5d0\uc11c\ub4e0 \uc2e4\ud589\uc774 \uac00\ub2a5\ud558\uc9c0\ub9cc, \ud074\ub85d \uad6c\uc131\uc774 \uc798\ubabb\ub418\uba74 \uc131\ub2a5\uc774 \ud544\uc694\ud55c \uc218\uc900\ubcf4\ub2e4 \ub0ae\uc544\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucd94\ud6c4 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \ub2e8\uacc4\uc5d0\uc11c \ud2b9\uc815 \ud0c0\uc774\ubc0d \ud30c\ub77c\ubbf8\ud130(\uc608: \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\ub97c \uc704\ud55c I2C \ud074\ub85d)\ub97c \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 MCU\uac00 \uc62c\ubc14\ub978 \uc18d\ub3c4\ub85c \uc2e4\ud589\ub418\ub294\uc9c0 \ud655\uc778\ud558\uc9c0 \uc54a\uace0\uc11c\ub294 \ubd88\uac00\ub2a5\ud55c \uc791\uc5c5\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"STM32 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\uc5d0 \ub300\ud55c \uc2dc\uc2a4\ud15c \ud074\ub85d\uc744 \uc124\uc815\ud569\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \uc774 \ud074\ub85d\uc774 \ubd84\ud560\ub418\uc5b4 FCLK \ucf54\uc5b4 \ud074\ub85d\uacfc \ub2e4\uc591\ud55c \uc8fc\ubcc0 \uc7a5\uce58 \ud074\ub85d(\uc608: APB1 \uc8fc\ubcc0 \uc7a5\uce58 \ud074\ub85d) \uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",h({},{id:"goal"}),"\ubaa9\ud45c"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc758 \ubaa9\ud45c\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc218\uc815\ud558\uc5ec \uc62c\ubc14\ub978 \ud074\ub85d \uad6c\uc131\uc744 \uc5bb\ub294 \uac83\uc785\ub2c8\ub2e4. \ub610\ud55c \ub0b4\ubd80 RAM\uacfc \ud50c\ub798\uc2dc\uac00 \uc608\uc0c1 \uc18d\ub3c4\ub85c \uc2e4\ud589 \uc911\uc778\uc9c0\ub3c4 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",h({},{id:"verification"}),"\ud655\uc778"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\ud655\uc778\uadfc\uac70"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"SystemCoreClock \ubcc0\uc218\uc758 \uac12\uc774 \uc62c\ubc14\ub978\uc9c0 \uc5ec\ubd80"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\uac00 \uc6d0\ud558\ub294 \uc8fc\ud30c\uc218\uc5d0\uc11c \uc2e4\ud589\ub418\ub3c4\ub85d \uad6c\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\ub0b4\ubd80 RAM\uc774 \uc77d\uae30 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\uac00 \uc608\uc0c1 \uc6a9\ub7c9\uc758 \ub0b4\ubd80 RAM\uc744 \uac00\uc9c0\uace0 \uc788\uc73c\uba70, \uc77d\uae30\uac00 \uac00\ub2a5\ud558\uace0, \uc18d\ub3c4\uac00 \uce21\uc815\ub429\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\ub0b4\ubd80 \ud50c\ub798\uc2dc\uac00 \uc77d\uae30 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\uac00 \uc608\uc0c1 \uc6a9\ub7c9\uc758 \ub0b4\ubd80 \ud50c\ub798\uc2dc\ub97c \uac00\uc9c0\uace0 \uc788\uc73c\uba70, \uc77d\uae30\uac00 \uac00\ub2a5\ud558\uace0, \uc18d\ub3c4\uac00 \uce21\uc815\ub429\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uce90\uc2dc \ube44\ud65c\uc131\ud654 \uc5ec\ubd80"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uce90\uc2dc\uac00 \ube44\ud65c\uc131\ud654\ub41c \uc0c1\ud0dc\uc5d0\uc11c \uc2dc\uc2a4\ud15c\uc744 \uc2e4\ud589\ud558\uba74 \uc2dc\uc2a4\ud15c\uc774 \ub35c \ubcf5\uc7a1\ud558\uace0 \uc774\ud574\ud558\uae30\uac00 \ub354 \uc27d\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h2",h({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uc81c \uc870\uac74\uc785\ub2c8\ub2e4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud558\ub4dc\uc6e8\uc5b4 \uc0c1\uc758 \ud074\ub85d \uc18c\uc2a4\uc5d0 \ub300\ud55c \uc815\ubcf4. \ubcf4\ud1b5\uc740 \ud06c\ub9ac\uc2a4\ud0c8\uc744 \uc0ac\uc6a9\ud558\uc9c0\ub9cc \ub2e4\ub978 \uc194\ub8e8\uc158\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",h({},{id:"do"}),"\uc2e4\ud589"),(0,r.kt)("p",null,"\uc9c0\uae08\ubd80\ud130\ub294 \ud544\uc694\ud55c MCU \uc8fc\ud30c\uc218\ub97c \uc5bb\uae30 \uc704\ud574 \ud504\ub85c\uc81d\ud2b8\uc758 \ud074\ub85d \uad6c\uc131\uc744 \uc870\uc815\ud558\ub294 \ub2e8\uacc4\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c, \ub0b4\ubd80 \ud50c\ub798\uc2dc\uc758 \uc77d\uae30 \uc18d\ub3c4\ub97c \uce21\uc815\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",h({},{id:"system-clock"}),"\uc2dc\uc2a4\ud15c \ud074\ub85d"),(0,r.kt)("p",null,'STM32CubeMX\uc5d0\uc11c "Clock Configuration" \ud0ed\uc744 \ud074\ub9ad\ud558\uba74 \ud2b9\uc815 MCU\uc5d0 \ub300\ud55c \ud074\ub85d \ud2b8\ub9ac\uc758 \uac1c\uc694\uac00 \ub098\ud0c0\ub0a9\ub2c8\ub2e4.'),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-01.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\ud074\ub85d \uad6c\uc131"),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 \ud074\ub85d \uc18c\uc2a4\ub85c HSI\ub97c \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4. \ub9ce\uc740 \ud504\ub85c\uc81d\ud2b8\ub4e4\uc774 \uc678\ubd80 \ud06c\ub9ac\uc2a4\ud0c8\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uace0, \uc801\uc815 \ubd84\ubc30\uae30(/M) \uc640 \uc99d\ubc30\uae30(/N) \uac00 \ud3ec\ud568\ub41c HSE\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4. \ud074\ub85d \uad6c\uc131\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85\uc740 \uc774 \uac00\uc774\ub4dc\uc5d0\uc11c \ub2e4\ub8e8\uc9c0 \uc54a\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4. \ud074\ub85d \uad6c\uc131\uc744 \ubcc0\uacbd\ud55c \ud6c4\uc5d0\ub294 STM32CubeMX\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \ub2e4\uc2dc \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4(\uc624\ub978\ucabd \uc0c1\ub2e8 \ubaa8\uc11c\ub9ac\uc758 'Generate Code' \ud074\ub9ad)."),(0,r.kt)("p",null,"\uc0dd\uc131\ub41c \ucf54\ub4dc\ub97c \ud1b5\ud574 \ucf54\uc5b4 \ud074\ub85d(HCLK) \uc744 \ub7f0\ud0c0\uc784 \uc2dc \uacc4\uc0b0\ud574\uc11c \ubcc0\uc218\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubcc0\uc218\ub294 \ud074\ub85d \uc0ac\uc774\ud074\uacfc \ucd08(\uc608: \uc2dc\uc791 \ud0c0\uc774\uba38) \uac04\uc758 \uc62c\ubc14\ub978 \uc804\ud658\uc744 \uc704\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ubcc0\uc218\ub97c \ub2e4\uc2dc \uacc4\uc0b0\ud558\ub824\uba74 SystemCoreClockUpdate()\xa0\ud568\uc218\ub97c \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \ucf54\ub4dc \uc139\uc158\uc5d0\uc11c main.c\uc5d0 \ud638\ucd9c\uc744 \uc0bd\uc785\ud569\ub2c8\ub2e4."),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-02.webp",noShadow:!1,width:"600",mdxType:"Figure"},"SystemCoreClockUpdate"),(0,r.kt)("p",null,"\ud568\uc218 \ub9c8\uc9c0\ub9c9\uc5d0 \uc911\ub2e8\uc810\uc744 \uc124\uc815\ud55c \uacbd\uc6b0\uc5d0\ub294 \uad6c\uc131\uc5d0 \ub530\ub77c \ucf54\uc5b4 \ud074\ub85d\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-03.webp",noShadow:!1,width:"600",mdxType:"Figure"},"SystemCoreClock"),(0,r.kt)("p",null,"\ud14c\uc2a4\ud2b8\uc5d0 \uc788\uc5b4 \ub610 \ub2e4\ub978 \uc911\uc694 \ud3ec\uc778\ud2b8\ub294 \ubc14\ub85c System Timer\uc785\ub2c8\ub2e4. \uc774 \ud0c0\uc774\uba38\ub294 \ubd84\ud560\ub41c HCLK\uc5d0\uc11c \uc2e4\ud589\ub418\uc5b4 1ms\ub9c8\ub2e4 \uc778\ud130\ub7fd\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub610\ud55c STM32Cube \ud38c\uc6e8\uc5b4\uc5d0\uc11c ms \ub2e8\uc704\uc758 delay\ub97c \uad6c\ud604\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 \uba54\uc778 \ub8e8\ud504\uc5d0 5\ucd08\uc758 delay\ub97c \uc0bd\uc785\ud574\uc11c \uc774 \ud0c0\uc774\uba38\ub97c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2a4\ud1b1\uc6cc\uce58\ub098 \uc720\uc0ac\ud55c \uc218\ub2e8\uc744 \uc774\uc6a9\ud574 \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-04.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\uc9c0\uc5f0 \uc2dc\uac04 \uce21\uc815"),(0,r.kt)("h3",h({},{id:"flash-and-ram-size-and-speed"}),"\ud50c\ub798\uc2dc\uc640 RAM\uc758 \ud06c\uae30 \ubc0f \uc18d\ub3c4"),(0,r.kt)("p",null,"System Timer\ub97c \uc0ac\uc6a9\ud558\uba74 \uba54\ubaa8\ub9ac\uc758 \uc77d\uae30 \uc18d\ub3c4\ub97c \uc190\uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. System Timer \uc778\ud130\ub7fd\ud2b8\ub294 \ubc00\ub9ac\ucd08\ub9c8\ub2e4 \ubcc0\uc218\ub97c \uc99d\uac00\uc2dc\ud0b5\ub2c8\ub2e4. \ucf54\ub4dc \uc870\uac01 \uc804\ud6c4\uc5d0 \uc774 \ubcc0\uc218\ub97c \uc77d\uc5b4\uc11c \ucf54\ub4dc\uc758 \uc2e4\ud589 \uc2dc\uac04\uc744 \uce21\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(1ms\uc758 \ud574\uc0c1\ub3c4\ub85c). \uc774\ub7ec\ud55c \ubc29\ubc95\uc744 \uc774\uc6a9\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc5ec\ub7ec \ub2e4\ub978 \uc704\uce58\uc5d0\uc11c\ub3c4 \uc2dc\uac04\uc744 \uce21\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc624\uc2e4\ub85c\uc2a4\ucf54\ud504 \uac19\uc740 \uc678\ubd80 \uc7a5\uce58\uac00 \uc5c6\ub2e4\uba74 \uc544\uc8fc \uc815\ud655\ud558\uc9c0\ub294 \uc54a\ub354\ub77c\ub3c4 \uc5b4\ub290 \uc815\ub3c4 \uc815\ud655\uc131\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub97c \uc704\ud574\uc11c\ub294 \uba3c\uc800 \uacb0\uacfc\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud55c 2\uac1c\uc758 \ud718\ubc1c\uc131 \ubcc0\uc218\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \uacb0\uacfc\ub97c \uc800\uc7a5\ud558\uc9c0 \uc54a\uc73c\uba74 \ucef4\ud30c\uc77c\ub7ec \ucd5c\uc801\ud654 \uacfc\uc815\uc5d0\uc11c \uce21\uc815 \uc911\uc778 \ucf54\ub4dc\uac00 \uc81c\uac70\ub418\ub294 \uacbd\uc6b0\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-05.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\uce21\uc815 \uacb0\uacfc\ub97c \uc720\uc9c0\ud558\ub294 \uae00\ub85c\ubc8c \ud718\ubc1c\uc131 \ubcc0\uc218"),(0,r.kt)("p",null,"\uc544\ub798\uc5d0\ub294 0x08000000 ~ 0x08020000(128Kb) \uae4c\uc9c0 \ud50c\ub798\uc2dc\ub97c \uc77d\uace0 \ucf54\ub4dc\uc758 \uc2e4\ud589 \uc2dc\uac04\uc744 \uce21\uc815\ud558\ub294 \uc608\uac00 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/cpu-running/img-06.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\uc77d\uae30 \ub8e8\ud504 \uc2dc\uac04 \uce21\uc815"),(0,r.kt)("p",null,"\uc774\uc640 \uac19\uc740 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc11c\ub85c \ub2e4\ub978 \uba54\ubaa8\ub9ac\uc758 \uc18d\ub3c4\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. STM32CubeMX\uc5d0 \uc124\uc815\uc774 \uc0dd\uc131\ub418\uba74 \uc77d\uae30 \uc18d\ub3c4\ub97c \uce21\uc815\ud558\uace0 \uacb0\uacfc\ub97c \uba54\ubaa8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ud6c4\uc5d0 \uce21\uc815\uc744 \ubc18\ubcf5\ud574\uc11c \uc218\ud589\ud558\uace0 \uacb0\uacfc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  \uba54\ubaa8\ub9ac\uc758 \ub300\uc5ed\ud3ed(kb/s \ub2e8\uc704\uc758 \uc77d\uae30 \uc18d\ub3c4)\uc744 \uce21\uc815\ud558\ub824\ub294 \uacbd\uc6b0\uc5d0\ub294 \uce21\uc815\ub41c \uc2dc\uac04\uacfc \ub370\uc774\ud130\uc758 \uc591\uc744 \ube44\uad50\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"STM32F429 16MHz \uc5d0\uc11c \ucf54\ub4dc\ub294 12ms\ub9c8\ub2e4 \uc2e4\ud589\ub418\uc5b4 128kb/0.012s(10,666 kb/s) \uc758 \ub0b4\ubd80 \ud50c\ub798\uc2dc(\uc774 \uba54\uc11c\ub4dc \uc0ac\uc6a9) \uc77d\uae30 \uc18d\ub3c4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc704\uc640 \ub3d9\uc77c\ud55c \ub8e8\ud504\ub97c \uc190\uc27d\uac8c \ubcc0\uacbd\ud574\uc11c \ubaa8\ub4e0 \ub0b4\ubd80 \ud50c\ub798\uc2dc\uc758 \ud65c\uc131\ud654 \ubc0f \uc77d\uae30 \uac00\ub2a5 \uc5ec\ubd80\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2dc\uc791 \uc8fc\uc18c\uc640 \ub05d \uc8fc\uc18c\ub9cc \ubc14\uafb8\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c \ucf54\ub4dc\ub294 \ub0b4\ubd80 RAM\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. F429\uc758 RAM\uc740 \uc8fc\uc18c 0x20000000\uc5d0\uc11c \uc2dc\uc791\ud569\ub2c8\ub2e4. \ucf54\uc5b4 \ucee4\ud50c\ub4dc \uba54\ubaa8\ub9ac(CCM, Core Coupled Memory) \uc740 0x10000000\uc5d0\uc11c \uc2dc\uc791\ud569\ub2c8\ub2e4. \ud574\ub2f9 \uba54\ubaa8\ub9ac \uc8fc\uc18c\uc758 MCU\ub294 \ub370\uc774\ud130 \uc2dc\ud2b8\uc5d0\uc11c \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("p",null,"\uc11c\ub85c \ub2e4\ub978 \uba54\ubaa8\ub9ac\ub97c \uba87 \ucc28\ub840 \uce21\uc815\ud558\uace0 \uadf8 \uacb0\uacfc\ub97c \uba54\ubaa8\ud574\ub46c\uc57c \ud569\ub2c8\ub2e4. RAM\uc5d0\uc11c\ub294 \uc77d\uae30 \uc18d\ub3c4\uc640 \uc4f0\uae30 \uc18d\ub3c4\ub97c \ubaa8\ub450 \ud14c\uc2a4\ud2b8\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h3",h({},{id:"linker-script"}),"\ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8"),(0,r.kt)("p",null,"\ub610 \ud558\ub098 \uc0b4\ud3b4\ubd10\uc57c \ud560 \uac83\uc774 \ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8\uc785\ub2c8\ub2e4. \uc774 \uad6c\uc131 \ud30c\uc77c\uc740 \ub9c1\ucee4\uc5d0\uac8c \uc2dc\uc2a4\ud15c\uc758 RAM \ubc0f \ud50c\ub798\uc2dc \uc8fc\uc18c\ub97c \uc54c\ub824\uc90d\ub2c8\ub2e4. \ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8\ub294 \ud504\ub85c\uc81d\ud2b8\uc640 \ud568\uaed8 CubeMX\uc5d0\uc11c \uc0dd\uc131\uc774 \ub418\uc9c0\ub9cc, \uac80\ud1a0 \ud574\ubcf4\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0\uc5d0\ub294 \ucd94\ud6c4\uc5d0 \ud504\ub85c\uc81d\ud2b8\uc758 \uc694\uad6c\uc5d0 \ub9de\uac8c \uc774\ub97c \uc218\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",h({},{id:"cache-on-f7-and-h7"}),"F7 \ubc0f H7\uc758 \uce90\uc2dc"),(0,r.kt)("p",null,"ARM Cortex-M7 \uae30\ubc18\uc758 STM32F7 \ubc0f STM32H7 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\uc5d0\ub294 \ub370\uc774\ud130\uc640 \uba85\ub839\uc5b4 \uce90\uc2dc\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc548\uc815\uc801\uc778 \ud50c\ub7ab\ud3fc\uc774 \ud655\ubcf4\ub420 \ub54c\uae4c\uc9c0 \ucd5c\uc18c\ud55c \ub370\uc774\ud130 \uce90\uc2dc\ub77c\ub3c4 \ube44\ud65c\uc131\ud654\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ub370\uc774\ud130 \uce90\uc2dc\ub294 \ub9ce\uc740 \uacbd\uc6b0\uc5d0 \uc131\ub2a5\uc744 \ub300\ud3ed \uac15\ud654\ud558\uc9c0\ub9cc, \ud14c\uc2a4\ud2b8 \uacfc\uc815\uc5d0\uc11c \ubcf5\uc7a1\uc131\uc744 \ucd08\ub798\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc548\uc815\uc801\uc778 \ud50c\ub7ab\ud3fc\uc774 \ud655\ubcf4\ub418\uba74 \ub370\uc774\ud130 \uce90\uc2dc\ub97c \ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud50c\ub7ab\ud3fc\uc740 \ud574\ub2f9 \ubb38\uc81c\uac00 \ub370\uc774\ud130 \uce90\uc2dc \uad00\ub9ac\uc5d0\uc11c \ube44\ub86f\ub41c \uac83\uc778\uc9c0 \uc190\uc27d\uac8c \uc2dd\ubcc4\ud560 \uc218 \uc788\ub294\ub370, \uc774\ub294 \uce90\uc2dc \ubb38\uc81c\uac00 \uc544\ub2c8\uba74 \ud50c\ub7ab\ud3fc\uc774 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub370\uc774\ud130 \uce90\uc2dc\uc758 \ubcf5\uc7a1\uc131\uc740 MCU \ucf54\uc5b4\uac00 \uce90\uc2dc\uc5d0 \ub300\ud574 \uc77d\uae30\uc640 \uc4f0\uae30\ub97c \uc218\ud589\ud55c\ub2e4\ub294 \uc0ac\uc2e4\uc5d0\uc11c \ube44\ub86f\ub41c \uac83\uc785\ub2c8\ub2e4. \ubc18\uba74\uc5d0 DMA2\ub098 LTDC \uac19\uc740 \uc8fc\ubcc0 \uc7a5\uce58\ub4e4\uc740 \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc9c1\uc811(\uce90\uc2dc\uc5d0\uc11c\uac00 \uc544\ub2c8\ub77c) \uc77d\uae30\ub97c \uc218\ud589\ud569\ub2c8\ub2e4.  \uc774\ub7ec\ud55c \uc774\uc720\ub85c \uc608\ub97c \ub4e4\uc5b4 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud574\ub3c4 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc77c\ubd80 \ub370\uc774\ud130\uac00 \ud45c\uc2dc\ub418\uc9c0 \uc54a\ub294 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc65c\ub0d0\ud558\uba74 \ub370\uc774\ud130\uac00 \uce90\uc2dc\uc5d0\ub9cc \uae30\ub85d\uc774 \ub41c\ub2e4\ub294 \uc810\uc5d0\uc11c LTDC\uac00 RAM\uc5d0\uc11c \uc0c8 \ub370\uc774\ud130\ub97c \ucc3e\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc758 \ud2b9\uc815 \uc2dc\uc810\uc5d0\uc11c \uce90\uc2dc\ub97c \uc815\ub9ac(flushing) \ud558\ub294 \uac83\ub3c4 \ud574\uacb0\ucc45\uc774\uc9c0\ub9cc, \ub098\uc911\uc5d0 \uc774 \ubb38\uc81c\ub97c \ucc98\ub9ac\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"System Core \uc139\uc158\uc758 STM32CubeMX\uc5d0\uc11c \uce90\uc2dc\ub97c \ube44\ud65c\uc131\ud654/\ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",h({},{id:"touchgfx-internal-dcache-state-machine"}),"TouchGFX\uc758 \ub0b4\ubd80 DCache \uc0c1\ud0dc \uba38\uc2e0"),(0,r.kt)("p",null,"TouchGFX Engine\uc740 \ud604\uc7ac \ubc0f \ub9c8\uc9c0\ub9c9 \ub80c\ub354\ub9c1 \uc791\uc5c5\uc744 \ucd94\uc801\ud558\ub294\ub370, \uc0c1\ud0dc\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"HARDWARE"),"\uc640",(0,r.kt)("inlineCode",{parentName:"p"},"\xa0SOFTWARE")," \ub450 \uac00\uc9c0\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uae30 \uc791\uc5c5\uc758 \ub300\ub2e4\uc218\uac00 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc218\ud589\ub418\ubbc0\ub85c \ucd08\uae30 \uc0c1\ud0dc\ub294\xa0HARDWARE\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc0c1\ud0dc \uc804\ud658\uc774 \ubc1c\uc0dd\ud558\uba74 \uc0c1\ud0dc \uba38\uc2e0\uc740 \ud574\ub2f9\ud558\ub294 \uac00\uc0c1 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uce90\uc2dc \ubb34\ud6a8\ud654\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4. \uc0c1\ud0dc\uac00\xa0HARDWARE\uc5d0\uc11c SOFTWARE\ub85c \ubc14\ub00c\uba74 \uac00\uc0c1 \uba54\uc18c\ub4dc\xa0void touchgfx::HAL::InvalidateCache()\ub97c \ud638\ucd9c\ud558\uace0, SOFTWARE\uc5d0\uc11c HARDWARE\ub85c \ubc14\ub00c\uba74 \uac00\uc0c1 \uba54\uc11c\ub4dc\xa0void touchgfx::HAL::FlushCache()\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \ud30c\uc0dd\ub41c HAL \ud074\ub798\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uad6c\ud604\ud560 \uc218 \uc788\ub3c4\ub85d \uc774\ub7ec\ud55c \ub450 \ud568\uc218\uc758 \uae30\ub2a5\uc774 \ub0a8\uc544 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/cpu-running/cm7-cache-invalidation-statemachine.svg",noShadow:!1,mdxType:"Figure"},"TouchGFX Engine\uc758 \ub0b4\ubd80 DCache \uc0c1\ud0dc \uba38\uc2e0"),(0,r.kt)("p",null,"TouchGFX Generator\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uacbd\uc6b0, \uc774\ub807\uac8c \ud30c\uc0dd\ub41c \uba54\uc18c\ub4dc\ub294 DCache \ubb34\ud6a8\ud654\ub97c \uc704\ud55c \ud568\uc218 \ud638\ucd9c\uc744 \ud1b5\ud574 TouchGFXGeneratedHAL \ud074\ub798\uc2a4\uc5d0 \uad6c\ud604\uc774 \ub418\uae30 \ub54c\ubb38\uc5d0 \ucd94\uac00 \uc791\uc5c5\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",h({},{id:"further-readings"}),"\ucd94\uac00 \uc790\ub8cc"),(0,r.kt)("p",null,"\uc5ec\uae30\uc5d0 \ub9c1\ud06c\ub41c \ubb38\uc11c\ub4e4\uc5d0\ub294 STM32CubeMX \ubc0f STM32 \uce90\uc2dc\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/user_manual/10/c5/1a/43/3a/70/43/7d/DM00104712.pdf/files/DM00104712.pdf/jcr:content/translations/en.DM00104712.pdf",mdxType:"Link"},"STM32CubeMX \uc0ac\uc6a9\uc790 \ub9e4\ub274\uc5bc\uc758 \ud074\ub85d \uad6c\uc131\uc5d0 \ub300\ud55c \uc139\uc158")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",mdxType:"Link"},"STM32F7 \ubc0f STM32H7\uc758 Level 1 \uce90\uc2dc")))))}w.isMDXComponent=!0}}]);