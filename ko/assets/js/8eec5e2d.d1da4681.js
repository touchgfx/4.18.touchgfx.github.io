(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1792],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44035:function(e,t,r){"use strict";var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:l,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){"use strict";var n=r(67294),a=r(88678);const l=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=i},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return l},Z:function(){return i}});var n=r(11368),a=r(35096);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=l();return r(e,t)}},28844:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return h},contentTitle:function(){return f},metadata:function(){return k},toc:function(){return M},default:function(){return v}});var n=r(3905),a=r(44035),l=r(93054),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))m.call(t,r)&&p(e,r,t[r]);return e};const h={id:"hardware-selection-external-memories",title:"\uc678\ubd80 \uba54\ubaa8\ub9ac"},f=void 0,k={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-external-memories",id:"development/hardware-selection/hardware-components/hardware-selection-external-memories",isDocsHomePage:!1,title:"\uc678\ubd80 \uba54\ubaa8\ub9ac",description:"\uc774 \ucc55\ud130\uc5d0\uc11c\ub294 \ub0b4\uc7a5\ud615 GUI\ub97c \uc704\ud55c \uc678\ubd80 \uba54\ubaa8\ub9ac\ub97c \uc120\ud0dd\ud560 \ub54c \ub3c4\uc6c0\uc774 \ub420\ub9cc\ud55c \ub0b4\uc6a9\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc0b4\ud3b4\ubd05\ub2c8\ub2e4. \uc774 \ucc55\ud130\ub97c \uc77d\uae30 \uc804\uc5d0 \uc0ac\uc804 \uace0\ub824 \uc0ac\ud56d \ubc0f MCU\ub97c \uc77d\uc5b4\ubcf4\uba74 \uc801\ud569\ud55c \uc678\ubd80 \uba54\ubaa8\ub9ac\ub97c \uc120\ud0dd\ud560 \ub54c \uc911\uc694\ud558\uac8c \uace0\ub824\ud574\uc57c \ud560 \uc694\uc778\uc744 \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-external-memories.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-external-memories",permalink:"/4.18/ko/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories",version:"current",frontMatter:{id:"hardware-selection-external-memories",title:"\uc678\ubd80 \uba54\ubaa8\ub9ac"},sidebar:"docs",previous:{title:"\ub514\uc2a4\ud50c\ub808\uc774",permalink:"/4.18/ko/docs/development/hardware-selection/hardware-components/hardware-selection-display"},next:{title:"\uac1c\ubc1c \uc18c\uac1c",permalink:"/4.18/ko/docs/development/board-bring-up/board-introduction"}},M=[{value:"\ube44\ud718\ubc1c\uc131 \uba54\ubaa8\ub9ac",id:"non-volatile-memories",children:[{value:"NOR \ud50c\ub798\uc2dc",id:"nor-flash",children:[]},{value:"NAND \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac",id:"nand-flash-memories",children:[]},{value:"eMMC \uba54\ubaa8\ub9ac",id:"emmc-memories",children:[]}]},{value:"\ud718\ubc1c\uc131 \uba54\ubaa8\ub9ac",id:"volatile-memories",children:[{value:"SRAM",id:"sram",children:[]},{value:"SDRAM",id:"sdram",children:[]},{value:"PSRAM",id:"psram",children:[]},{value:"\ucd94\uac00 \uba54\ubaa8\ub9ac",id:"additional-memories",children:[]},{value:"\uc678\ubd80 RAM \ubc00\ub3c4 \uc120\ud0dd",id:"selection-of-external-ram-density",children:[]}]}],g={toc:M};function v(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),p),o(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\uc774 \ucc55\ud130\uc5d0\uc11c\ub294 \ub0b4\uc7a5\ud615 GUI\ub97c \uc704\ud55c \uc678\ubd80 \uba54\ubaa8\ub9ac\ub97c \uc120\ud0dd\ud560 \ub54c \ub3c4\uc6c0\uc774 \ub420\ub9cc\ud55c \ub0b4\uc6a9\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc0b4\ud3b4\ubd05\ub2c8\ub2e4. \uc774 \ucc55\ud130\ub97c \uc77d\uae30 \uc804\uc5d0 ",(0,n.kt)("a",d({parentName:"p"},{href:"../preliminary-considerations"}),"\uc0ac\uc804 \uace0\ub824 \uc0ac\ud56d")," \ubc0f ",(0,n.kt)("a",d({parentName:"p"},{href:"hardware-selection-mcu"}),"MCU"),"\ub97c \uc77d\uc5b4\ubcf4\uba74 \uc801\ud569\ud55c \uc678\ubd80 \uba54\ubaa8\ub9ac\ub97c \uc120\ud0dd\ud560 \ub54c \uc911\uc694\ud558\uac8c \uace0\ub824\ud574\uc57c \ud560 \uc694\uc778\uc744 \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"TouchGFX GUI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud560 \ub54c\ub294 \ud504\ub808\uc784 \ubc84\ud37c(\ub4e4), \ube44\ud2b8\ub9f5, \uae00\uaf34, \ubc88\uc5ed \ub4f1\uc744 \uc800\uc7a5\ud558\uae30 \uc704\ud55c \uc678\ubd80 \uba54\ubaa8\ub9ac\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX GUI\ub97c \uc2e4\ud589\ud558\ub294 \ub370 \uc678\ubd80 \uba54\ubaa8\ub9ac\uac00 \ubc18\ub4dc\uc2dc \ud544\uc694\ud55c \uac83\uc740 \uc544\ub2c8\uc9c0\ub9cc, \ud504\ub808\uc784 \ubc84\ud37c(\ub4e4)\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub0b4\ubd80 RAM(MCU \ub0b4)\uc774\ub098 \uc678\ubd80 RAM\uc774 \ud544\uc694\ud558\uace0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub0b4/\uc678\ubd80 \ud50c\ub798\uc2dc\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc544\ub798 \uac1c\uc694\uc5d0\ub294 STM32 MCU\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc678\ubd80 \uba54\ubaa8\ub9ac\uac00 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4. \uc608\uc2dc\ub85c \ub098\uc640 \uc788\ub294 \uba54\ubaa8\ub9ac \uc911 \uc77c\ubd80\ub294 \uc9c1\ub82c \ubc0f \ubcd1\ub82c \uc778\ud130\ud398\uc774\uc2a4\uc5d0\uc11c \ubaa8\ub450 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/memory-overview.png",noShadow:!0,mdxType:"Figure"},"\uba54\ubaa8\ub9ac \uac1c\uc694"),(0,n.kt)("p",null,"STM32 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\ub9c8\ub2e4 \uc678\ubd80 \uba54\ubaa8\ub9ac \uc778\ud130\ud398\uc774\uc2a4\uac00 \ub2e4\ub974\ubbc0\ub85c \uc11c\ub85c \ub2e4\ub978 \uc678\ubd80 \uba54\ubaa8\ub9ac\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h2",d({},{id:"non-volatile-memories"}),"\ube44\ud718\ubc1c\uc131 \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,"GUI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ube44\ud718\ubc1c\uc131 \uc2a4\ud1a0\ub9ac\uc9c0(\ud50c\ub798\uc2dc)\ub294 \uc8fc\ub85c \ube44\ud2b8\ub9f5, \uae00\uaf34, \ubc88\uc5ed \ubc0f TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uc640 \uac19\uc740 \uadf8\ub798\ud53d \ub370\uc774\ud130 \uc790\uc0b0\uc758 \uc77c\ubd80 \ub610\ub294 \uc804\uccb4\ub97c \uc800\uc7a5\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ube44\ud718\ubc1c\uc131 \uba54\ubaa8\ub9ac\ub294 STM32 \uc81c\ud488\uc5d0\uc11c \uc9c0\uc6d0\ub418\uba70, \ubcd1\ub82c/\uc9c1\ub82c \uba54\ubaa8\ub9ac\uc640 \uc11c\ub85c \ub2e4\ub978 \uad6c\uc131\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc591\ud55c \uc720\ud615\uc758 MCU \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/non-volatile-memory-overview.png",noShadow:!0,mdxType:"Figure"},"\ube44\ud718\ubc1c\uc131 \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,"\ube44\ud718\ubc1c\uc131 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc120\ud0dd\ud560 \ub54c\ub294 \ub2e4\uc74c\uc744 \uace0\ub824\ud569\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ubc00\ub3c4(\uc6a9\ub7c9)"),(0,n.kt)("li",{parentName:"ul"},"\uc131\ub2a5"),(0,n.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4 \uc720\ud615(\ubcd1\ub82c/\uc9c1\ub82c)"),(0,n.kt)("li",{parentName:"ul"},"BOM(Bill of Material)")),(0,n.kt)("h3",d({},{id:"nor-flash"}),"NOR \ud50c\ub798\uc2dc"),(0,n.kt)("p",null,"NOR \ud50c\ub798\uc2dc\ub294 \uba54\ubaa8\ub9ac\uc758 \uc5b4\ub5a4 \uc601\uc5ed\uc774\ub4e0 \ub79c\ub364 \uc561\uc138\uc2a4\uac00 \uac00\ub2a5\ud55c \ube44\ud718\ubc1c\uc131 \uba54\ubaa8\ub9ac\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"NOR \ud50c\ub798\uc2dc\uc758 \ubc94\uc704\ub294 \ubcf4\ud1b5 ",(0,n.kt)("strong",{parentName:"p"},"128 Mbits")," ~ ",(0,n.kt)("strong",{parentName:"p"},"2 Gbits"),"\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, \ud574\uc0c1\ub3c4\uac00 480x320\uc774\uace0 \uc0c9\uc2ec\ub3c4\uac00 16 bpp\uc778 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uacbd\uc6b0 \ud480 \uc2a4\ud06c\ub9b0 \ubc30\uacbd \uc774\ubbf8\uc9c0\ub97c \ud45c\uc2dc\ud558\ub824\uba74 \ucd5c\ub300 300 Kbytes\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c \ubc84\ud2bc, \uc2ac\ub77c\uc774\ub354, \uc544\uc774\ucf58, \uc0ac\uc6a9 \uae00\uaf34, \uc5b8\uc5b4 \uc218 \ub4f1\uc5d0 \ud544\uc694\ud55c \ucd94\uac00 \ube44\ud2b8\ub9f5\uc740 \uace0\ub824\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. 256 Mbits(32MB) NOR \ud50c\ub798\uc2dc\ub294 \uace0\uc720\ud55c \ud480 \uc2a4\ud06c\ub9b0 \uc774\ubbf8\uc9c0\ub97c \ucd5c\ub300 100\uac1c\uae4c\uc9c0 \uc800\uc7a5\ud560 \uc218 \uc788\uc73c\uba70, \ud544\uc694\ud55c \uadf8\ub798\ud53d \uc790\uc0b0\uc758 \ub098\uba38\uc9c0\ub97c \ucd94\uac00\ud558\uba74 \uc800\uc7a5 \uac1c\uc218\uac00 \uc801\uc5b4\uc9d1\ub2c8\ub2e4."),(0,n.kt)("p",null,"NOR \ud50c\ub798\uc2dc\ub294 \uc678\ubd80 \ud50c\ub798\uc2dc\uac00 \uc77d\uae30 \uc791\uc5c5\uc744 \uc704\ud574 \ub0b4\ubd80 \uba54\ubaa8\ub9ac\ucc98\ub7fc \ubcf4\uc5ec\uc9c0\ub294 ",(0,n.kt)("strong",{parentName:"p"},"\uba54\ubaa8\ub9ac \ub9e4\ud551")," \ubaa8\ub4dc\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubaa8\ub4dc\uc5d0\uc11c\ub294 CPU\uac00 \uc815\uc9c0\ub41c \uc800\uc804\ub825 \ubaa8\ub4dc\uc5d0\uc11c\ub3c4 \uc2dc\uc2a4\ud15c \ub9c8\uc2a4\ud130(\uc608: DMA, LTDC, DMA2D, GFXMMU \ub610\ub294 SDMMC)\uac00 \uba54\ubaa8\ub9ac\uc5d0 \uc790\uccb4\uc801\uc73c\ub85c \uc561\uc138\uc2a4\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ubaa8\ubc14\uc77c \ubc0f \uc6e8\uc5b4\ub7ec\ube14 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uac00\uc7a5 \uc801\ud569\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"NOR \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\uc5d0\ub294 \ub2e4\uc591\ud55c \uc778\ud130\ud398\uc774\uc2a4 \uc635\uc158\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ubcd1\ub82c NOR \ud50c\ub798\uc2dc(x8 \ub610\ub294 x16 \uc778\ud130\ud398\uc774\uc2a4 \ud3ec\ud568)"),(0,n.kt)("li",{parentName:"ul"},"Serial NOR \ud50c\ub798\uc2dc(\uc9c1\ub82c \uba54\ubaa8\ub9ac \ubc0f \ud558\uc774\ud37c\ubc84\uc2a4 \ud50c\ub798\uc2dc\ub97c \uc704\ud55c \uc2f1\uae00, \ub4c0\uc5bc, \ucffc\ub4dc \ubc0f \uc625\ud0c0 \ub370\uc774\ud130 \ub77c\uc778)")),(0,n.kt)("h4",d({},{id:"serial-nor-flash-memories"}),"\uc9c1\ub82c NOR \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,"\uc9c1\ub82c NOR \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\ub294 \uadf8\ub798\ud53d \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc800\uc7a5\uacf5\uac04\uc73c\ub85c \ub110\ub9ac \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc774\ub7ec\ud55c \uc720\ud615\uc758 \uba54\ubaa8\ub9ac\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub192\uc740 \uc8fc\ud30c\uc218"),(0,n.kt)("li",{parentName:"ul"},"PCB(Printed Circuit Board) \uba74\uc801 \ub2e8\uc21c\ud654 \ubc0f \ucd95\uc18c"),(0,n.kt)("li",{parentName:"ul"},"\uc8fc\uc18c \uc9c0\uc815 \uac00\ub2a5 \uc601\uc5ed\uc774 \ucd5c\ub300 ",(0,n.kt)("strong",{parentName:"li"},"256 MB"),"\uc778 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4")," ~ ",(0,n.kt)("strong",{parentName:"li"},"12"),"\uac1c\uc758 \ud540\uc774 \ud544\uc694\ud568")),(0,n.kt)("h5",d({},{id:"nor-single-dual-quad-octo-flash-memories"}),"NOR \uc2f1\uae00, \ub4c0\uc5bc, \ucffc\ub4dc \ubc0f \uc625\ud0c0 \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,"NOR \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\ub294 \ub2e4\uc591\ud55c \ub370\uc774\ud130 \ub77c\uc778 \uad6c\uc131\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc2f1\uae00"),(0,n.kt)("li",{parentName:"ul"},"\ub4c0\uc5bc"),(0,n.kt)("li",{parentName:"ul"},"\ucffc\ub4dc"),(0,n.kt)("li",{parentName:"ul"},"\uc625\ud0c0")),(0,n.kt)("p",null,"\ub370\uc774\ud130 \ub77c\uc778\uc774 \ub354 \ub9ce\uc740 \uc9c1\ub82c NOR \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\ub85c \uc804\ud658\ud558\uba74 \uba54\ubaa8\ub9ac \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc131\ub2a5\uacfc \ub300\uc5ed\ud3ed\uc744 \uac1c\uc120\ud560 \uc218 \uc788\uc9c0\ub9cc, STM32 \uc81c\ud488\uc744 \uc5f0\uacb0\ud558\ub294 \ub370 \ud544\uc694\ud55c \ud540\uc758 \uac1c\uc218\uac00 \ub354 \ub9ce\uc544\uc9c0\uac8c \ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc544\ub798\uc5d0\ub294 \ub370\uc774\ud130 \ub77c\uc778\uc758 \uac1c\uc218\uc5d0 \ub530\ub978 SPI \uba54\ubaa8\ub9ac\uc5d0 \ub300\ud55c \uac1c\uc694\uac00 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/serial-modes.png",noShadow:!0,mdxType:"Figure"},"\uc9c1\ub82c \uc778\ud130\ud398\uc774\uc2a4 \uac1c\uc694"),(0,n.kt)("h4",d({},{id:"parallel-nor-flash-memories"}),"\ubcd1\ub82c NOR \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,"\ubcd1\ub82c NOR \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\ub294 \uc131\ub2a5\uacfc \uad6c\uc131 \uce21\uba74\uc5d0\uc11c \uc9c1\ub82c \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\uc640 \ub3d9\uc77c\ud55c \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ubcd1\ub82c NOR \ud50c\ub798\uc2dc\ub294 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\ub85c \uad6c\uc131\ud560 \uc218 \uc788\uc73c\uba70 \uadf8\uac83\uc740 \ub9c8\uce58 \ub0b4\ubd80 \uba54\ubaa8\ub9ac\ucc98\ub7fc \uc561\uc138\uc2a4\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ubcd1\ub82c NOR \ud50c\ub798\uc2dc\uc640 \uc9c1\ub82c NOR \ud50c\ub798\uc2dc\ub294 \ud540\uc758 \uac1c\uc218\uc640 PBC\uc758 \ubcf5\uc7a1\uc131\uc5d0\uc11c \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"NOR \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\uc5d0\ub294 \ud560\ub2f9\uc5d0 \ucd5c\ub300 24\uac1c, \ub370\uc774\ud130\uc5d0 \ucd5c\ub300 16\uac1c\ub85c, \ucd1d ",(0,n.kt)("strong",{parentName:"p"},"47\uac1c\uc758 \ud540"),"\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,n.kt)("h3",d({},{id:"nand-flash-memories"}),"NAND \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,"NAND \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\ub294 \ub300\ub7c9\uc758 \uadf8\ub798\ud53d \uc790\uc0b0\uacfc ",(0,n.kt)("strong",{parentName:"p"},"\ub354 \ube60\ub978 \uc4f0\uae30 \ubc0f \uc9c0\uc6b0\uae30 \uc791\uc5c5"),"\uc744 \uc694\ud558\ub294 \uadf8\ub798\ud53d \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4. NAND \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\ub294 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\ub85c \uad6c\uc131\uc774 \ubd88\uac00\ub2a5\ud558\ubbc0\ub85c ",(0,n.kt)("strong",{parentName:"p"},"\ucf54\ub4dc \uc2e4\ud589 \uc2dc\uc5d0\ub294 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4"),"."),(0,n.kt)("p",null,"NAND \ud50c\ub798\uc2dc\uc758 \ubc94\uc704\ub294 ",(0,n.kt)("strong",{parentName:"p"},"1 Gbit")," ~ ",(0,n.kt)("strong",{parentName:"p"},"512 Gbits"),"\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"NAND \ud50c\ub798\uc2dc\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub294 RAM\uc5d0\uc11c \uce90\uc2dc\ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \uc885\uc885 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud574\uc57c \ud604\uc7ac \uc0ac\uc6a9\ub418\ub294 \uadf8\ub798\ud53d \uc790\uc0b0\uc744 RAM\uc73c\ub85c \uc62e\uae30\uace0 \uc774\ub97c \uce90\uc2dc\uc5d0\uc11c \ub04c\uc5b4\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/nand-flash.png",noShadow:!0,width:"500",mdxType:"Figure"},"NAND \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac"),(0,n.kt)("h3",d({},{id:"emmc-memories"}),"eMMC \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,"MMC \ud611\ud68c \uaddc\uaca9\uc778 eMMC(Embedded Multi Media Card)\ub294 \ub9c8\uc2a4\ud130 \ud1b5\ud569 \ucee8\ud2b8\ub864\ub7ec\uc640 \ub354\ubd88\uc5b4 NAND \ud50c\ub798\uc2dc\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. eMMC\uc758 \ud655\uc2e4\ud55c \uc774\uc810 \uc911 \ud558\ub098\ub294 \uc81c\uc870\uc5c5\uccb4\uac00 \uc81c\ud488 \uac1c\ubc1c\uc758 \ub2e4\ub978 \ubd80\ubd84\uc5d0 \ub354 \ub9ce\uc740 \uc2dc\uac04\uc744 \ud560\uc560\ud558\uc5ec \uc2dc\uc7a5 \ucd9c\uc2dc \uae30\uac04\uc744 \ub2e8\ucd95\ud560 \uc218 \uc788\ub3c4\ub85d \ud328\ud0a4\uc9c0\uc5d0\uc11c \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\uc5d0 \ub300\ud55c \ud45c\uc900 \uc778\ud130\ud398\uc774\uc2a4\uc640 \uad00\ub9ac \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ub294 \ucee8\ud2b8\ub864\ub7ec\uc758 \ud1b5\ud569\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"eMMC flash \ud50c\ub798\uc2dc\uc758 \ubc94\uc704\ub294 ",(0,n.kt)("strong",{parentName:"p"},"2 Gbits")," ~ ",(0,n.kt)("strong",{parentName:"p"},"128 Gbits"),"\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"eMMC\ub294 NAND\uc640 NOR\uc5d0 \ube44\ud574 \ub79c\ub364 \uc77d\uae30 \uc131\ub2a5\uc774 \ube44\uad50\uc801 \ub0ae\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774 \ub79c\ub364 \uc77d\uae30\uc758 \uc18d\ub3c4 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uce90\uc2dc\ub97c \ucd94\uac00\ud574\uc57c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"eMMC \ud50c\ub798\uc2dc \uba54\ubaa8\ub9ac\uc5d0\ub294 \ub370\uc774\ud130\uc5d0 8\uac1c, \uc81c\uc5b4\uc5d0 2\uac1c\ub85c, \ucd1d \ucd5c\ub300 ",(0,n.kt)("strong",{parentName:"p"},"10\uac1c\uc758 \ud540"),"\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/emmc-flash.png",noShadow:!0,width:"500",mdxType:"Figure"},"eMMC \uba54\ubaa8\ub9ac"),(0,n.kt)("h2",d({},{id:"volatile-memories"}),"\ud718\ubc1c\uc131 \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,'\uc678\ubd80 \ud718\ubc1c\uc131 \uba54\ubaa8\ub9ac\ub294 \ub0b4\ubd80 MCU RAM\uc774 \ubd80\uc871\ud55c \uacbd\uc6b0\uc5d0 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc800\uc7a5\ud558\ub294 \ub370 \uc8fc\ub85c \uc0ac\uc6a9\ub418\uba70, \uacbd\uc6b0\uc5d0 \ub530\ub77c \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\uc5d0\uc11c \uc790\uc0b0\uc744 \uce90\uc2f1\ud558\ub294 \ub370\uc5d0\ub3c4 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 GUI\ub97c \uc2e4\ud589\ud558\ub294 \ub0b4\uc7a5\ud615 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uacf5\ud1b5\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 SRAM, SDRAM \ubc0f PSRAM\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub2e4\ub978 \ubcc0\ud615 \ubc84\uc804\ub3c4 \ucd9c\uc2dc\ub418\uc5b4 \uc788\uc73c\uba70, \uba54\ubaa8\ub9ac \uc81c\uc870\uc0ac\ub4e4\uc740 "\ud558\uc774\ud37c RAM", "IoT RAM", "\uc625\ud0c0 RAM"\uc6a9 \uba54\ubaa8\ub9ac\uc5d0 \ub300\ud574 \uc11c\ub85c \ub2e4\ub978 \uba85\uba85 \uccb4\uacc4\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc9c0\uc6d0\ud558\ub294 STM32 MCU\ub97c \ucc3e\uc744 \uc218 \uc788\ub2e4\ub294 \uac83\uc774 \uacf5\ud1b5\uc810\uc785\ub2c8\ub2e4.'),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/volatile-memory-overview.png",noShadow:!0,mdxType:"Figure"},"\ud718\ubc1c\uc131 \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,"\uc801\ud569\ud55c \uc678\ubd80 RAM\uc744 \uc120\ud0dd\ud558\ub824\uba74 \ub2e4\uc74c \uc0ac\ud56d\uc744 \uc5fc\ub450\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ubc00\ub3c4(\uc6a9\ub7c9)"),(0,n.kt)("li",{parentName:"ul"},"\uc131\ub2a5"),(0,n.kt)("li",{parentName:"ul"},"\uc804\ub825 \uc18c\ubaa8"),(0,n.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4/\ud540 \uc218"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../../../basic-concepts/framebuffer#amount-of-framebuffers"}),"\ud504\ub808\uc784 \ubc84\ud37c \uc804\ub7b5"))),(0,n.kt)("h3",d({},{id:"sram"}),"SRAM"),(0,n.kt)("p",null,"SRAM\uc740 \uc804\uc6d0\uc774 \uacf5\uae09\ub418\ub294 \ub3d9\uc548 \ube44\ud2b8 \ub370\uc774\ud130\ub97c \uc720\uc9c0\ud558\ub294 \uc815\uc801 \ub79c\ub364 \uc561\uc138\uc2a4 \uba54\ubaa8\ub9ac\uc785\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c SRAM\uc740 \uc561\uc138\uc2a4 \uc18d\ub3c4\uac00 \ub354 \ube60\ub974\uc9c0\ub9cc DRAM\ubcf4\ub2e4 \uac00\uaca9\uc774 \ub354 \ube44\uc2f8\uba70 \ubc00\ub3c4\ub3c4 \uc791\uc2b5\ub2c8\ub2e4. SRAM\uc740 \uc77c\ubc18\uc801\uc73c\ub85c DRAM\uc5d0 \ube44\ud574 \ub354 \ube68\ub9ac \uc561\uc138\uc2a4\uac00 \uac00\ub2a5\ud558\ubbc0\ub85c \uc560\ub2c8\uba54\uc774\uc158\uacfc \ud06c\uae30 \uc870\uc815, \ud68c\uc804 \ub4f1\uc774 \ub354 \ub9ce\uc774 \ud544\uc694\ud55c GUI\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4. SRAM\uc740 \ub3d9\uae30 \ubaa8\ub4dc\uc640 \ube44\ub3d9\uae30 \ubaa8\ub4dc\uac00 \ubaa8\ub450 \uc9c0\uc6d0\ub418\uba70, \ub3d9\uae30 \ubaa8\ub4dc\ub294 \ub354 \ub192\uc740 \ub300\uc5ed\ud3ed\uc744 \uc81c\uacf5\ud558\uc9c0\ub9cc \uc778\ud130\ud398\uc774\uc2a4\uac00 \ub354 \ubcf5\uc7a1\ud569\ub2c8\ub2e4."),(0,n.kt)(l.Z,{mdxType:"Note"},"SRAM\uc740 \ub370\uc774\ud130\uc758 \uc800\uc7a5 \ubc0f \ud638\ucd9c\uc774 \uac00\ub2a5\ud55c nvSRAM\uc774\ub77c\uace0 \ud558\ub294 \ube44\ud718\ubc1c\uc131 \ub79c\ub364 \uc561\uc138\uc2a4 \uba54\ubaa8\ub9ac\ub85c\ub3c4 \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,n.kt)("h3",d({},{id:"sdram"}),"SDRAM"),(0,n.kt)("p",null,"SDRAM\uc740 \ub3d9\uc801 \ub79c\ub364 \uc561\uc138\uc2a4 \uba54\ubaa8\ub9ac\ub85c\uc11c, \uac01 \ub370\uc774\ud130 \ube44\ud2b8\ub97c \ucee4\ud328\uc2dc\ud130\uc5d0 \uc800\uc7a5\ud558\ubbc0\ub85c \ub3d9\uc77c\ud55c \uc591\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \ub54c SRAM\ubcf4\ub2e4 \ubb3c\ub9ac\uc801 \uacf5\uac04\uc744 \uc801\uac8c \ucc28\uc9c0\ud569\ub2c8\ub2e4. \ub610\ud55c \ub370\uc774\ud130\ub97c \uc720\uc9c0\ud558\uae30 \uc704\ud574 \uacc4\uc18d \uc0c8\ub85c \uace0\uce68\uc744 \ud574\uc57c \ud558\ubbc0\ub85c SRAM\uc5d0 \ube44\ud574 \uc804\ub825 \uc18c\ubaa8\ub7c9\uc774 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"SDRAM \ubc00\ub3c4\uc758 \ubc94\uc704\ub294 \ubcf4\ud1b5 16 Mbit ~ 512 Mbit\uc774\uba70, 100 ~ 200 MHz\uc758 \uc8fc\ud30c\uc218\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 8\ube44\ud2b8, 16\ube44\ud2b8 \ubc0f 32\ube44\ud2b8 \uc778\ud130\ud398\uc774\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ub4c0\uc5bc \ud504\ub808\uc784 \ubc84\ud37c \uc804\ub7b5\uc5d0\uc11c\ub294 \ucd5c\ub300 18 Mbits\uc758 RAM\uc774 \ud544\uc694\ud558\ubbc0\ub85c, 24 bpp 800*480 \ud574\uc0c1\ub3c4\ub85c \ub450 \uac1c\uc758 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc800\uc7a5\ud558\ub824\uba74 32 Mbits SDRAM\uc774 \uac00\uc7a5 \uc801\ud569\ud569\ub2c8\ub2e4."),(0,n.kt)("h3",d({},{id:"psram"}),"PSRAM"),(0,n.kt)("p",null,"PSRAM\uc740 SRAM \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud0d1\uc7ac\ud55c DRAM(\uc81c\uc5b4 \ub85c\uc9c1)\uc758 \ub0b4\ubd80 \uad6c\uc870\ub97c \uac00\uc9c4 \uc720\uc0ac \uc815\uc801 \ub79c\ub364 \uc561\uc138\uc2a4 \uba54\ubaa8\ub9ac\ub85c, \ubc00\ub3c4\ub294 \ubcf4\ud1b5 8 ~ 256 Mbits\uc785\ub2c8\ub2e4. PSRAM\uc740 \uae30\uc874\uc758 SDRAM\uc774\ub098 SRAM\uc5d0 \ube44\ud574 \uc18d\ub3c4\uac00 \ube60\ub974\uace0 \uc804\ub825 \uc18c\ubaa8\uac00 \uc801\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h3",d({},{id:"additional-memories"}),"\ucd94\uac00 \uba54\ubaa8\ub9ac"),(0,n.kt)("p",null,"\uc0c8\ub85c \ub098\uc628 \uc625\ud0c0 RAM \ubc0f \ud558\uc774\ud37c RAM \uba54\ubaa8\ub9ac\ub294 \uc2f1\uae00 \ubc0f \ub4c0\uc5bc \ub370\uc774\ud130 \uc18d\ub3c4 \ubaa8\ub4dc\uc5d0\uc11c \uc9c1\ub82c 8\ube44\ud2b8 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub192\uc740 \ucc98\ub9ac \uc18d\ub3c4\uc640 \uc6b0\uc218\ud55c \ud1b5\ud569 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,n.kt)("h3",d({},{id:"selection-of-external-ram-density"}),"\uc678\ubd80 RAM \ubc00\ub3c4 \uc120\ud0dd"),(0,n.kt)("p",null,"\ud504\ub808\uc784 \ubc84\ud37c(\ub4e4)\ub97c \uc678\ubd80 RAM\uc5d0 \ubc30\uce58\ud558\ub824\ub294 \uacbd\uc6b0 \uc544\ub798 \ud45c\uc5d0\uc11c \ud604\uc7ac \ucd9c\uc2dc\ub418\uc5b4 \uc788\ub294 \ub2e4\uc591\ud55c RAM \ubc00\ub3c4 \uc815\ubcf4\ub97c \uc0b4\ud3b4\ubcf4\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc774 \uc678\uc5d0 \ud53d\uc140\ub2f9 1, 2, 4, 8, 16 \ubc0f 24\ube44\ud2b8(2\ub85c \ub098\ub204\uba74 \uc2f1\uae00 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0 \ud544\uc694\ud55c \ubc00\ub3c4\uac00 \uc0b0\ucd9c\ub428)\ub85c \uc774\uc911 \ud504\ub808\uc784 \ubc84\ud37c \uc124\uc815\uc744 \uc2e4\ud589\ud558\ub294 \ub370 \ud544\uc694\ud55c RAM\uc5d0 \uad00\ud55c \uc815\ubcf4\ub3c4 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uacbd\uc6b0\uc5d0 \ub530\ub77c \uc2f1\uae00 \ud504\ub808\uc784 \ubc84\ud37c \uc124\uc815\uc73c\ub85c \ucda9\ubd84\ud560 \ub54c\ub3c4 \uc788\uace0, STM32 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec \uc911\uc5d0\uc11c\ub294 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ubc30\uce58\ud560 \uc218 \uc788\uc744 \ub9cc\ud07c \ub0b4\ubd80 RAM\uc774 \ucda9\ubd84\ud55c \uac83\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/sdram-octospi-densities.png",noShadow:!0,mdxType:"Figure"},"SDRAM \ubc0f OctoSPI \ubc00\ub3c4"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/external-memories/required-ram-for-double-framebuffer-setup.png",noShadow:!0,mdxType:"Figure"},"\uc774\uc911 \ud504\ub808\uc784 \ubc84\ud37c \uc124\uc815\uc5d0 \ud544\uc694\ud55c RAM"))}v.isMDXComponent=!0}}]);