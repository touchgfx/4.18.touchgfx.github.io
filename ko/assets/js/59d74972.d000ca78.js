"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8279],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,g=m["".concat(i,".").concat(h)]||m[h]||d[h]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=h;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},40908:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return s}});var r=n(3905),a=n(44035),l=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&m(e,n,t[n]);return e};const h={id:"touchgfx-al-development-introduction",title:"TouchGFX AL Development Introduction"},g=void 0,f={unversionedId:"development/touchgfx-hal-development/touchgfx-al-development-introduction",id:"development/touchgfx-hal-development/touchgfx-al-development-introduction",title:"TouchGFX AL Development Introduction",description:"\ud504\ub85c\uc81d\ud2b8 \ud65c\ub3d9",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/touchgfx-al-development-introduction.mdx",sourceDirName:"development/touchgfx-hal-development",slug:"/development/touchgfx-hal-development/touchgfx-al-development-introduction",permalink:"/4.18/ko/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-al-development-introduction",title:"TouchGFX AL Development Introduction"},sidebar:"docs",previous:{title:"11. Flash Loader",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/11-flash-loader"},next:{title:"Abstraction Layer Architecture",permalink:"/4.18/ko/docs/development/touchgfx-hal-development/touchgfx-architecture"}},k={},s=[{value:"AL(Abstraction Layer) \uc758 \ucc45\uc784",id:"responsibilities-of-the-abstraction-layer",level:2},{value:"\uc124\uc815 \uc608: LTDC\uac00 \uc7a5\ucc29\ub41c MCU\ub97c \uac16\ucd98 2\uac1c\uc758 \ud504\ub808\uc784 \ubc84\ud37c",id:"example-setup-two-framebuffers---mcu-with-ltdc",level:2}],b={toc:s};function v(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),m),o(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/activities-selected-002.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \ud65c\ub3d9"),(0,r.kt)("p",null,"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 TouchGFX Abstraction Layer(AL, \ucd94\uc0c1\ud654 \uacc4\uce35) \ub294 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5 \ub2e8\uacc4\uc5d0\uc11c \uac1c\ubc1c\ub41c \ubcf4\ub4dc \ucd08\uae30\ud654 \ucf54\ub4dc\uc640 TouchGFX Engine \uc0ac\uc774\uc5d0 \uc704\uce58\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\uc131 \uc694\uc18c\uc785\ub2c8\ub2e4. \uc8fc\uc694 \uc784\ubb34\ub294 TouchGFX Engine\uc744 \uae30\ubc18 \ud558\ub4dc\uc6e8\uc5b4\uc640 \uc6b4\uc601 \uccb4\uc81c\uc5d0 \uc5f0\uacb0\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 TouchGFX Engine\uc5d0\uc11c \ud1b5\ud569\ub41c \ubc29\uc2dd\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \uae30\ubc18 \ud558\ub4dc\uc6e8\uc5b4\uc640 OS\uc758 \uc138\ubd80 \uc0ac\ud56d\uc744 \ucd94\uc0c1\ud654\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"AL\uc740 HAL(Hardware Abstraction Layer) \uacfc OSAL(Operating System Abstraction Layer) \uc774\ub77c\ub294 \ub450 \uac00\uc9c0 \ubd80\ubd84\uc73c\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/components-selected-002.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \uad6c\uc131 \uc694\uc18c"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 AL\uc758 \uc6d0\uce59 \ubc0f \ucc45\uc784, \uadf8\ub9ac\uace0 \uc774\uac83\uc774 TouchGFX Engine\uacfc \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ubc29\uc2dd\uc744 \uc804\ubc18\uc801\uc73c\ub85c \uc18c\uac1c\ud569\ub2c8\ub2e4. \ud2b9\uc815 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc774\uac83\uc774 \uc2e4\ud604\ub418\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ub2e4\uc74c \uc139\uc158\uc5d0 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"touchgfx-architecture"}),"AL(Abstraction Layer, \ucd94\uc0c1\ud654 \uacc4\uce35) "),"\uc544\ud0a4\ud14d\ucc98\uc5d0\uc11c\ub294 AL \uc544\ud0a4\ud14d\ucc98\ub97c \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uace0, TouchGFX Engine\uacfc AL \uc0ac\uc774\uc5d0 \ud6c4\ud06c\ub77c\uace0 \ubd88\ub9ac\ub294 \uac01\uac01\uc758 \uc0c1\ud638 \uc791\uc6a9 \uc9c0\uc810\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"touchgfx-generator"}),"\uc77c\ubc18 \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc\uc5d0\uc11c\ub294 "),"TouchGFX Generator\ub97c \uc0ac\uc6a9\ud574 AL \uad6c\ud604\uc744 \uc704\ud55c \uae30\ucd08 \uc0ac\ud56d\uacfc \ubcf4\ub2e4 \ubcf5\uc7a1\ud55c \ubb38\uc81c\uc5d0 \ub300\ud55c \uc138\ubd80 \uc0ac\ud56d\uc744 \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"scenarios/scenarios-ltdc-parallel-rgb"}),"\uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c\ub294"),"\ud2b9\uc815 \ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815\uc5d0 \ub300\ud55c AL\uc744 \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \uad00\ud55c \uad6c\uccb4\uc801\uc778 \uc608\ub97c \uc81c\uc2dc\ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",d({},{id:"responsibilities-of-the-abstraction-layer"}),"AL(Abstraction Layer) \uc758 \ucc45\uc784"),(0,r.kt)("p",null,'"\uae30\ubcf8 \uac1c\ub150" \uc7a5\uc758 ',(0,r.kt)("a",d({parentName:"p"},{href:"../../basic-concepts/rendering"}),"\uba54\uc778 \ub8e8\ud504")," \uc139\uc158\uc5d0 \uc124\uba85\ub418\uc5b4 \uc788\ub4ef\uc774, TouchGFX Engine\uc5d0\ub294 \uc138 \uac00\uc9c0 \uae30\ubcf8 \ub2e8\uacc4\ub97c \uc218\ud589\ud558\ub294 \uba54\uc778 \ub8e8\ud504\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc785\ub825(\ud130\uce58 \uc88c\ud45c, \ubc84\ud2bc) \uc218\uc9d1"),(0,r.kt)("li",{parentName:"ol"},"\uc7a5\uba74 \ubaa8\ub378 \uc5c5\ub370\uc774\ud2b8"),(0,r.kt)("li",{parentName:"ol"},"\ud504\ub808\uc784 \ubc84\ud37c\ub85c \uc7a5\uba74 \ubaa8\ub378 \ub80c\ub354\ub9c1")),(0,r.kt)("p",null,"\uc5ec\uae30 \ub098\uc628 \uc138 \uac00\uc9c0 \ub2e8\uacc4\ub294 TouchGFX Engine\uc758 \uc8fc\ub41c \ucc45\uc784\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud604\uc7ac \uc0c1\ud0dc\ub97c \ubc18\uc601\ud558\ub3c4\ub85d \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ud504\ub808\uc784 \ubc84\ud37c \ub370\uc774\ud130\ub97c \uc2e4\uc81c \uc804\uc1a1\ud558\ub294 \uac83\uc744 \ube44\ub86f\ud574 \uc678\ubd80 \uc785\ub825\uc744 \uc218\uc9d1\ud558\ub294 \uc791\uc5c5\uc744 TouchGFX Engine\uc774 \uc9c1\uc811 \ucc98\ub9ac\ud558\ub294 \ub300\uc2e0\uc5d0 TouchGFX AL\uc5d0 \uc704\uc784\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uba54\uc778 \ub8e8\ud504\ub294 \uc2dc\uac04 \uacbd\uacfc\uc5d0 \ub530\ub77c \ud504\ub808\uc784 \ubc84\ud37c(\ub4e4) \ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ubaa8\ub4e0 \ud504\ub808\uc784\uc744 \uc62c\ubc14\ub974\uac8c \uc804\uc1a1\ud558\uc5ec \ud45c\uc2dc\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc774\ub7ec\ud55c \ud504\ub85c\uc138\uc2a4\uac00 \uc2e4\uc81c \uc5c5\ub370\uc774\ud2b8 \uc8fc\uae30\uc640 \ub514\uc2a4\ud50c\ub808\uc774\uc758 \uc900\ube44 \uc0c1\ud0dc\uc5d0 \ub9de\uac8c \ub3d9\uae30\ud654\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ub3d9\uae30\ud654\uac00 \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\uc73c\uba74 \uba54\uc778 \ub8e8\ud504\uac00 \uacc4\uc18d\ud574\uc11c \uc5c5\ub370\uc774\ud2b8\ub418\uba74\uc11c \uc804\uc1a1 \uc804\uc5d0 \ud504\ub808\uc784 \ubc84\ud37c(\ub4e4) \uac00 \ub36e\uc5b4 \uc4f0\uae30\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub3d9\uae30\ud654\ub294 TouchGFX AL\uc758 \ucc45\uc784\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c TouchGFX AL\uc740 \ud504\ub808\uc784 \ubc84\ud37c \uba54\ubaa8\ub9ac \uc601\uc5ed\uacfc \uc774\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4\ub97c \uc81c\uc5b4\ud558\ub294 \ucc45\uc784\ub3c4 \ub9e1\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud504\ub808\uc784 \ubc84\ud37c\uc758 \ubaa8\ub4e0 \uc561\uc138\uc2a4\ub294 TouchGFX AL\uc744 \ud1b5\ud574 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uc790\uba74 TouchGFX AL\uc758 \ucc45\uc784\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\ucc45\uc784"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\uc124\uba85"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX Engine \uba54\uc778 \ub8e8\ud504\ub97c \ub514\uc2a4\ud50c\ub808\uc774 \uc804\uc1a1\uacfc \ub3d9\uae30\ud654"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\uac00\uc6a9 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \ucc28\uae30 \ud504\ub808\uc784\uc774 \uacc4\uc0b0 \ubc0f \ub80c\ub354\ub9c1\ub420 \ub54c TouchGFX Engine\uc758 \uba54\uc778 \ub8e8\ud504\ub294 \uc911\ub2e8\ub418\uc5b4\uc57c\ud569\ub2c8\ub2e4. \uadf8\ub798\uc57c\ub9cc \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1\ub418\uae30 \uc804\uc5d0 \uc0c8\ub86d\uac8c \uc5b4\uc148\ube14\ub9c1\ub41c \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ub36e\uc5b4 \uc4f0\ub294 \uc77c\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\ud130\uce58 \ubc0f \ubb3c\ub9ac\uc801 \ubc84\ud2bc \uc774\ubca4\ud2b8 \ubcf4\uace0"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\ud130\uce58 \uc774\ubca4\ud2b8\uc758 \ubc1c\uc0dd \uc5ec\ubd80\uc640 \uc774\uc5d0 \ud574\ub2f9\ud558\ub294 \uc88c\ud45c\ub97c \uc0d8\ud50c\ub9c1\ud569\ub2c8\ub2e4. \ubb3c\ub9ac\uc801 \ubc84\ud2bc \ub610\ub294 \uc720\uc0ac \ubc84\ud2bc\uc758 \ud65c\uc131\ud654 \uc5ec\ubd80\ub97c \uc0d8\ud50c\ub9c1\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\ubca4\ud2b8\ub97c TouchGFX Engine\uc5d0 \ubcf4\uace0\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),"\ub2e4\ub978 \uc678\ubd80 \uc774\ubca4\ud2b8\ub294 \ub2e4\ub978 \uba54\ucee4\ub2c8\uc998\uc744 \ud1b5\ud574 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc804\ub2ec\ub41c\ub2e4\ub294 \uc0ac\uc2e4\uc5d0 \uc720\uc758\ud558\uc2ed\uc2dc\uc624. \uc774\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740\xa0",(0,r.kt)("a",d({parentName:"td"},{href:"../ui-development/touchgfx-engine-features/backend-communication"}),"\ubc31\uc5d4\ub4dc \ud1b5\uc2e0"),"\uad00\ub828 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud558\uc2ed\uc2dc\uc624.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\ud504\ub808\uc784 \ubc84\ud37c \uc561\uc138\uc2a4 \ub3d9\uae30\ud654"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\ud504\ub808\uc784 \ubc84\ud37c \uba54\ubaa8\ub9ac\ub294 TouchGFX AL\uc758 \ucc45\uc784\uc785\ub2c8\ub2e4. \uba54\uc778 \ub8e8\ud504 \uc2a4\ub808\ub4dc\ub098 DMA\ucc98\ub7fc \ub2e4\ub978 \uad00\ub828 \ub3d9\uc791\ub4e4\uc774 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c TouchGFX AL\uc740 \uc774\ub7ec\ud55c \uba54\ubaa8\ub9ac\ub97c \ubcf4\ud638\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\ucc28\uae30 \uac00\uc6a9 \ud504\ub808\uc784 \ubc84\ud37c \uc601\uc5ed \ubcf4\uace0"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX AL\uc740 \ud604\uc7ac \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \ub2e4\uc74c\uc5d0 \uc5c5\ub370\uc774\ud2b8\uac00 \uac00\ub2a5\ud55c \ubd80\ubd84\uc744 \ub2f5\ud574\uc904 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ud45c\uc900\uc778 2\uac1c \ud504\ub808\uc784 \ubc84\ud37c \uc124\uc815\uc5d0\uc11c\ub294 \ud56d\uc0c1 \uc804\uccb4 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\ub370, \ud558\ub098\uc758 \uc804\uccb4 \ud504\ub808\uc784 \ubc84\ud37c\ub294 \ub80c\ub354\ub9c1\uc744 \uc804\ub2f4\ud558\ub3c4\ub85d \ud558\uace0, \ub2e4\ub978 \ud558\ub098\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub300\ud55c \uc804\uc1a1\uc744 \uc804\ub2f4\ud558\ub3c4\ub85d \ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub2e8\uc77c \ub610\ub294 \ubd80\ubd84 \ud504\ub808\uc784 \ubc84\ud37c \uc124\uc815\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uc791\uc5c5\uc774 \ub354 \ubcf5\uc7a1\ud574\uc9d1\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\ub80c\ub354\ub9c1 \uc791\uc5c5 \uc218\ud589"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX Engine \uba54\uc778 \ub8e8\ud504\ub294 \uc7a5\uba74 \ubaa8\ub378\uc744 \ub80c\ub354\ub9c1\ud558\uba74\uc11c TouchGFX AL\uc5d0\uac8c \ud574\ub2f9\ud558\ub294 \ubd80\ubd84\uc744 \ub80c\ub354\ub9c1\ud558\ub3c4\ub85d \uc694\uccad\ud569\ub2c8\ub2e4. \ud2b9\uc815 TouchGFX AL \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \uae30\ubc18 \ud558\ub4dc\uc6e8\uc5b4\ub97c \uc0ac\uc6a9\ud574 \uadf8\ub798\ud53d \uae30\ubcf8 \uc694\uc18c\ub4e4\uc744 \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4. \ud55c \uc608\ub85c Chrom-ART \uadf8\ub798\ud53d \uac00\uc18d\uae30\uac00 \uc7a5\ucc29\ub41c MCU\uc5d0\uc11c \ube44\ud2b8\ub9f5\uc744 \ub80c\ub354\ub9c1\ud558\ub294 \uacbd\uc6b0\ub97c \ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX\uc5d0\ub294 \ubaa8\ub4e0 \uac00\uc6a9 \ud50c\ub7ab\ud3fc\uc5d0 \ucd5c\uc801\ud654\ub41c \ub80c\ub354\ub9c1 \ubc29\ubc95\uc774 \ub0b4\uc7a5\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc6a9\uc790 \uc9c0\uc815\uc744 \ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub300\ud55c \ud504\ub808\uc784 \ubc84\ud37c \uc804\uc1a1 \ucc98\ub9ac"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX Engine\uc740 TouchGFX AL\uc5d0 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \uc804\uc1a1\uc774 \ud544\uc694\ud55c \ubd80\ubd84\uc744 \uc54c\ub9bd\ub2c8\ub2e4. \uadf8\ub7ec\uba74 TouchGFX AL\uc740 \uc774\ub7ec\ud55c \uc804\uc1a1\uc744 \uac1c\uc2dc\ud558\uc5ec \uacb0\uad6d\uc5d0\ub294 \ubb3c\ub9ac\uc801 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ud53d\uc140\uc774 \uc704\uce58\ud558\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"TouchGFX AL\uc740 \uc790\uccb4 \uc2a4\ub808\ub4dc \ub610\ub294 \uc774\uc640 \uc720\uc0ac\ud55c \uac83\uc744 \uac16\ucd94\uc9c0 \uc54a\uc740 \uc218\ub3d9\uc801\uc778 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubaa8\ub4c8\uc774\ubbc0\ub85c TouchGFX Engine \uba54\uc778 \ub8e8\ud504\uc5d0\uc11c \ud638\ucd9c\ub41c \ud2b9\uc815 \ud6c4\ud06c(\ud568\uc218) \ub610\ub294 \uc778\ud130\ub7fd\ud2b8\ub97c \ud1b5\ud574 \ub3d9\uc791\uc744 \uc218\ud589\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud6c4\ud06c \ubc0f \uc778\ud130\ub7fd\ud2b8 \uc138\ud2b8\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-hooks-00.webp",noShadow:!0,mdxType:"Figure"},"\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud6c4\ud06c \ubc0f \uc778\ud130\ub7fd\ud2b8"),(0,r.kt)("p",null,"\uae30\ubc18 \ud558\ub4dc\uc6e8\uc5b4\uc640 OS\uc5d0\uc11c TouchGFX AL\uc758 \ucc45\uc784\uc774 \uc218\ud589\ub418\ub3c4\ub85d \uc774\ub7ec\ud55c \ud6c4\ud06c\ub97c \uad6c\ud604\ud558\ub294 \uac83\uc740 TouchGFX AL \uac1c\ubc1c\uc790\uc758 \ubaab\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ucc45\uc784\uc744 \uc9c0\uc6d0\ud558\uae30 \uc704\ud574 \ub2e4\ub978 \ubc29\ubc95\uc774 \ud544\uc694\ud55c \uacbd\uc6b0, TouchGFX AL \uac1c\ubc1c\uc790\ub294 \ud2b9\uc815 \uc9c0\uc810\uc744 \ud65c\uc131\ud654\ud558\ub3c4\ub85d \uc778\ud130\ub7fd\ud2b8\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. LTDC \uc218\uc9c1 \ub3d9\uae30\ud654 \uc778\ud130\ub7fd\ud2b8\uc640 \ud558\ub4dc\uc6e8\uc5b4 \ud0c0\uc774\uba38\uac00 \ubc14\ub85c \uc774\ub7ec\ud55c \uc608\uc785\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"I1: Display ready "),"\uc778\ud130\ub7fd\ud2b8\ub294 \uc218\uc9c1 \ub3d9\uae30\ud654 \uc778\ud130\ub7fd\ud2b8\uc758 \uc608\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc778\ud130\ub7fd\ud2b8\uc758 \uc124\uc815\uc740 Al \uac1c\ubc1c\uc758 \uc77c\ud658\uc73c\ub85c \uc5ec\uaca8\uc9c4\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",d({},{id:"example-setup-two-framebuffers---mcu-with-ltdc"}),"\uc124\uc815 \uc608: LTDC\uac00 \uc7a5\ucc29\ub41c MCU\ub97c \uac16\ucd98 2\uac1c\uc758 \ud504\ub808\uc784 \ubc84\ud37c"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc778 \ubc29\ubc95\uc740 LTDC\ub97c \uc7a5\ucc29\ud55c MCU\ub97c \uac16\ucd98 2\uac1c\uc758 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc124\uc815\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc124\uc815\uc5d0\uc11c \uac01 \ud6c4\ud06c\uc5d0 \ub300\ud55c TouchGFX AL\uc758 \ub3d9\uc791\uc740 \ud754\ud788 \ub2e4\uc74c\uacfc \uac19\uc774 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\uac00 \uc0c8\ub85c\uc6b4 \ud504\ub808\uc784\uc744 \uc218\uc2e0\ud560 \uc900\ube44\uac00 \ub420 \ub54c\ub9c8\ub2e4 I1\uc774 \uc2e4\ud589\ub420 \uc218 \uc788\ub3c4\ub85d TouchGFX AL\uc774 LTDC VSYNC \uc778\ud130\ub7fd\ud2b8\uc5d0 \ubc18\uc751\ud558\uac8c \uc124\uc815\ud569\ub2c8\ub2e4. \uc774 \ubc29\ubc95\uc740 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uba54\uc778 \ub8e8\ud504\ub97c \ub3d9\uae30\ud654\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\ud6c4\ud06c \ubc0f \uc778\ud130\ub7fd\ud2b8"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\uc870\uce58"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"I1: \ub514\uc2a4\ud50c\ub808\uc774 \ub808\ub514"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\uc774 \uc791\uc5c5\uc744 \ud2b8\ub9ac\uac70\ud558\ub3c4\ub85d LTDC VSYNC \uc778\ud130\ub7fd\ud2b8\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),"\uba54\uc778 \ub8e8\ud504\uc758 \uc7a0\uae08\uc744 \ud574\uc81c\ud558\uace0 \uc774\uc804 \ud504\ub808\uc784\uc5d0\uc11c \uc900\ube44\ub41c \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc804\uc1a1\uc744 \uac1c\uc2dc\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"H1: \ud130\uce58 \ubc0f \ubb3c\ub9ac\uc801 \ubc84\ud2bc \uc774\ubca4\ud2b8\ub97c \ubcf4\uace0\ud569\ub2c8\ub2e4."),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\ud130\uce58 \uc774\ubca4\ud2b8 \ub610\ub294 \ubb3c\ub9ac\uc801 \ubc84\ud2bc \ud074\ub9ad \uc2dc \uc815\ubcf4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"H2: \ucc28\uae30 \uac00\uc6a9 \ud504\ub808\uc784 \ubc84\ud37c \uc601\uc5ed\uc744 \uac00\uc838\uc635\ub2c8\ub2e4."),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\uc774\uc911 \ubc84\ud37c \uc124\uc815\uc744 \uc0ac\uc6a9\ud558\uba74 \ud604\uc7ac \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1\ub418\uace0 \uc788\uc9c0 \uc54a\uc740 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc804\uccb4 \uc601\uc5ed\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"H3: \ub80c\ub354\ub9c1 \uc791\uc5c5 \uc218\ud589"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"MCU\uc758 \uae30\ub2a5\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \ub80c\ub354\ub9c1 \uc791\uc5c5\uacfc \ub098\uba38\uc9c0 \ubd80\ubd84\uc5d0 \ub300\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud3f4\ubc31(fallback) \uc744 \uc218\ud589\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"H4: \uc804\uccb4 \uc601\uc5ed \ub80c\ub354\ub9c1"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\uc218\ud589\ud560 \uc870\uce58\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"H5: \ub80c\ub354\ub9c1 \uc644\ub8cc"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\uba54\uc778 \ub8e8\ud504\ub97c \ucc28\ub2e8\ud569\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\uc774 \uc124\uc815\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uc2e4\ud589 \ud750\ub984\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-actions-00.webp",noShadow:!0,mdxType:"Figure"},"LTDC\uac00 \uc7a5\ucc29\ub41c MCU\ub97c \uac16\ucd98 2\uac1c\uc758 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc124\uc815 \uc791\uc5c5 \uc2e4\ud589 \ud750\ub984\ub3c4"),(0,r.kt)("p",null,"\uc774 \ud750\ub984\ub3c4\ub294 \uc774\ub7ec\ud55c \uc124\uc815\uc5d0 \ub300\ud55c TouchGFX AL\uc758 \uc804\ubc18\uc801\uc778 \uc124\uacc4\ub97c \uc124\uba85\ud569\ub2c8\ub2e4. \uc544\ub798 \uc139\uc158\uc5d0\ub294 Al\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc774 \uc790\uc138\ud788 \uc18c\uac1c\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."))}v.isMDXComponent=!0}}]);