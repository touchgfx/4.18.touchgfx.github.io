"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3388],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=a},37882:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return C},default:function(){return M},frontMatter:function(){return D},metadata:function(){return S},toc:function(){return y}});var r=n(3905),o=n(44035),i=n(93054),a=n(37793),s=n(22425),c=n(29415),l=n(39130),p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))f.call(t,n)&&g(e,n,t[n]);return e};const D={id:"adding-files-to-stm32cubemx-projet",title:"STM32CubeMX \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud30c\uc77c \ucd94\uac00"},C=void 0,S={unversionedId:"development/scenarios/adding-files-to-stm32cubemx-projet",id:"development/scenarios/adding-files-to-stm32cubemx-projet",title:"STM32CubeMX \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud30c\uc77c \ucd94\uac00",description:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\uc744 \uc704\ud55c \ucd94\uac00 \uc124\uc815",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/adding-files-to-stm32cubemx-projet.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/adding-files-to-stm32cubemx-projet",permalink:"/4.18/ko/docs/development/scenarios/adding-files-to-stm32cubemx-projet",draft:!1,tags:[],version:"current",frontMatter:{id:"adding-files-to-stm32cubemx-projet",title:"STM32CubeMX \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud30c\uc77c \ucd94\uac00"},sidebar:"docs",previous:{title:"TouchGFX Board Setup \uae30\ubc18\uc5d0\uc11c RTOS \uc5c6\uc774 \uc2e4\ud589\ud558\uae30",permalink:"/4.18/ko/docs/development/scenarios/running-without-rtos"},next:{title:"\uc0c8\ub85c\uc6b4 TouchGFX \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\uae30",permalink:"/4.18/ko/docs/miscellaneous/updating-to-a-new-touchgfx-version"}},k={},y=[{value:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\uc744 \uc704\ud55c \ucd94\uac00 \uc124\uc815",id:"additional-settings-for-project-generation",level:2},{value:"\uc5d4\ud2b8\ub9ac \ubc0f \uad6c\ubb38",id:"possible-entries-and-syntax",level:3},{value:"\uc608\uc81c",id:"examples",level:3},{value:"\uc0dd\uc131\ub41c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5",id:"impact-on-generated-project",level:3}],E={toc:y};function M(e){var t,n=e,{components:p}=n,g=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},E),g),m(t,d({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("h2",v({},{id:"additional-settings-for-project-generation"}),"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\uc744 \uc704\ud55c \ucd94\uac00 \uc124\uc815"),(0,r.kt)("p",null,"STM32CubeMX\ub97c \uc0ac\uc6a9\ud558\uba74 \uc0ac\uc6a9\uc790\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},".extSettings")," \ud30c\uc77c\uc744 \ud1b5\ud574 \ucd94\uac00 \ud504\ub85c\uc81d\ud2b8 \uc124\uc815\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc124\uc815\uc740 CubeMX \ucf54\ub4dc \uc0dd\uc131 \uc2dc \uc9c0\uc815\ub41c \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ub429\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},".extSettings")," \ud30c\uc77c\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},".ioc")," \ud30c\uc77c\uacfc \ub3d9\uc77c\ud55c \uc218\uc900\uc5d0\uc11c \ub3d9\uc77c\ud55c \ud504\ub85c\uc81d\ud2b8 \ud3f4\ub354\uc5d0 \ubc30\uce58\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",v({},{id:"possible-entries-and-syntax"}),"\uc5d4\ud2b8\ub9ac \ubc0f \uad6c\ubb38"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ProjectFiles")," ",(0,r.kt)("em",{parentName:"p"},"ProjectFiles")," \uc139\uc158\uc758 \ud544\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucd94\uac00\ub85c \ud3ec\ud568\uc2dc\ud0ac \ub514\ub809\ud1a0\ub9ac\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",v({parentName:"pre"},{}),"HeaderPath = <include directory 1 path>;< include directory 2 path >\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Groups")," ",(0,r.kt)("em",{parentName:"p"},"Groups")," \uc139\uc158\uc758 \ud544\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc0c8 \ud30c\uc77c \uadf8\ub8f9\uc744 \uc0dd\uc131\ud558\uac70\ub098 \uadf8\ub8f9\uc5d0 \ud30c\uc77c\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",v({parentName:"pre"},{}),"<Group name> = <file pathname1>;< file pathname2>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Others")," ",(0,r.kt)("em",{parentName:"p"},"Others")," \uc139\uc158\uc758 \ud544\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec HAL \ubaa8\ub4c8\uc744 \ud65c\uc131\ud654\ud558\uac70\ub098 \uc0ac\uc804 \ud504\ub85c\uc138\uc11c \uc815\uc758\ubb38\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",v({parentName:"pre"},{}),"Define = <define1_name>;<define2_name>\n")))),(0,r.kt)("h3",v({},{id:"examples"}),"\uc608\uc81c"),(0,r.kt)("p",null,"\ub2e4\uc74c \uc608\uc81c\uc5d0\uc11c\ub294 STM32H735G-DK \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c \ucd94\uac00 \uc124\uc815\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},".extSettings file for STM32H735G-DK"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-json",metastring:"{2,4-6,8-9}","{2,4-6,8-9}":!0}),"[ProjectFiles]\nHeaderPath=../Drivers/BSP/Components/Common;../Drivers/BSP/STM32H735G-DK\n[Groups]\nDrivers/BSP/STM32H735G-DK=../Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ospi.c;../Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ts.c;../Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_bus.c\nDrivers/BSP/Components=../Drivers/BSP/Components/s70kl1281/s70kl1281.c;../Drivers/BSP/Components/mx25lm51245g/mx25lm51245g.c;../Drivers/BSP/Components/ft5336/ft5336.c;../Drivers/BSP/Components/ft5336/ft5336_reg.c\nApplication/User/TouchGFX/target=../TouchGFX/target/CortexMMCUInstrumentation.cpp\n[Others]\nDefine=USE_STM32H735G_DK\nHALModule=I2C\n")),(0,r.kt)("p",null,"\ub2e4\uc74c \uc608\uc81c\uc5d0\uc11c\ub294 STM32H747I-DK \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c \ucd94\uac00 \uc124\uc815\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{mdxType:"Tip"},"\uba40\ud2f0 \ucf54\uc5b4 \uad6c\uc131\uc758 \uacbd\uc6b0, \ud30c\uc77c\uc774\ub098 \uc124\uc815\uc744 \ucd94\uac00\ud560 \ucf54\uc5b4\ub97c \uc0ac\uc6a9\uc790\uac00 \ubc18\ub4dc\uc2dc \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},".extSettings file for STM32H747I-DISCO"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-json",metastring:"{2,4-6,8-9}","{2,4-6,8-9}":!0}),"[CortexM7:ProjectFiles]\nHeaderPath=../Drivers/BSP/Components/Common;../Drivers/BSP/STM32H747I-Discovery\n[CortexM7:Groups]\nApplication/User/CM7/TouchGFX/target=../CM7/TouchGFX/target/STM32H7Instrumentation.cpp\nDrivers/BSP/Components=../Drivers/BSP/Components/otm8009a/otm8009a.c;../Drivers/BSP/Components/otm8009a/otm8009a_reg.c;../Drivers/BSP/Components/ft6x06/ft6x06.c;../Drivers/BSP/Components/ft6x06/ft6x06_reg.c;../Drivers/BSP/Components/mt25tl01g/mt25tl01g.c;../Drivers/BSP/Components/is42s32800j/is42s32800j.c\nDrivers/BSP/STM32H747I-Discovery=../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_bus.c;../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_qspi.c;../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_sdram.c;../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_ts.c;\n[CortexM7:Others]\nDefine=USE_STM32H747I_DISCO\nHALModule=I2C\n")),(0,r.kt)("h3",v({},{id:"impact-on-generated-project"}),"\uc0dd\uc131\ub41c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5"),(0,r.kt)("p",null,"CubeMX\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c, \uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},".extSettings")," \ud30c\uc77c\uc774 \uc788\uc73c\uba74 \ub2e4\uc74c\uc5d0 \ub300\ud55c \uc5c5\ub370\uc774\ud2b8\uac00 \ud2b8\ub9ac\uac70\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"STM32CubeIDE \ud3f4\ub354\uc758 IDE \ud504\ub85c\uc81d\ud2b8 ",(0,r.kt)("inlineCode",{parentName:"li"},".project")," \ud30c\uc77c")),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Update of the project `.project` file (STM32CubeIDE IDE)"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-xml",metastring:"{2,7,12,17,22,27,32,38}","{2,7,12,17,22,27,32,38}":!0}),"        <link>\n            <name>Drivers/BSP/Components/ft5336.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/ft5336/ft5336.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/Components/ft5336_reg.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/ft5336/ft5336_reg.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/Components/mx25lm51245g.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/mx25lm51245g/mx25lm51245g.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/Components/s70kl1281.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/s70kl1281/s70kl1281.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_bus.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_bus.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ospi.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ospi.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ts.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ts.c</locationURI>\n        </link>\n    ...\n        <link>\n            <name>Application/User/TouchGFX/target/CortexMMCUInstrumentation.cpp</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/TouchGFX/target/CortexMMCUInstrumentation.cpp</locationURI>\n        </link>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".extsettings")," \ud30c\uc77c\uc5d0 I2C \ubaa8\ub4c8\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud504\ub85c\uc81d\ud2b8 ",(0,r.kt)("inlineCode",{parentName:"li"},"Inc"),"(include) \ud3f4\ub354\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"stm32h7xx_hal_conf.h")," \ud30c\uc77c\uc774 \uc5c5\ub370\uc774\ud2b8\ub429\ub2c8\ub2e4.")),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Update of stm32h7xx_hal_conf.h file to enable selected HAL modules (I2C)"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-c",metastring:"{10}","{10}":!0}),"/* #define HAL_PSSI_MODULE_ENABLED */\n/* #define HAL_DTS_MODULE_ENABLED */\n#define HAL_GPIO_MODULE_ENABLED\n#define HAL_DMA_MODULE_ENABLED\n#define HAL_MDMA_MODULE_ENABLED\n#define HAL_RCC_MODULE_ENABLED\n#define HAL_FLASH_MODULE_ENABLED\n#define HAL_EXTI_MODULE_ENABLED\n#define HAL_PWR_MODULE_ENABLED\n#define HAL_I2C_MODULE_ENABLED\n#define HAL_CORTEX_MODULE_ENABLED\n/* #define HAL_HSEM_MODULE_ENABLED */\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"STM32CubeIDE")," \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4 \ub0b4 \ud504\ub85c\uc81d\ud2b8 \ubcf4\uae30\ub294 \uc544\ub798 \uadf8\ub9bc\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/adding-files-to-stm32cubemx-projet-bsp.webp",width:"400px",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \uadf8\ub8f9\uc5d0 \ucd94\uac00\ub41c \uc0c8\ub85c\uc6b4 BSP \ub4dc\ub77c\uc774\ubc84 \uadf8\ub8f9 \ubc0f \ud30c\uc77c"))),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/adding-files-to-stm32cubemx-projet-instrumentation.webp",width:"399px",mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \uadf8\ub8f9\uc5d0 \ucd94\uac00\ub41c \uc0c8\ub85c\uc6b4 MCU Instrumentation \uadf8\ub8f9 \ubc0f \ud30c\uc77c"),(0,r.kt)(i.Z,{mdxType:"Note"},".extSettings \ud30c\uc77c\uc5d0\uc11c \ucc38\uc870\ud558\ub294 \ud30c\uc77c\ub4e4\uc740 \uc0ac\uc6a9\uc790\uac00 STM32CubeMX \ud504\ub85c\uc81d\ud2b8 \ud3f4\ub354\uc5d0 \uc218\ub3d9\uc73c\ub85c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4.",(0,r.kt)("p",null,"\uc704\uc758 STM32H735G-DK \uc608\uc81c\uc758 \uacbd\uc6b0, CortexMMCUInstrumentation.cpp \ud30c\uc77c\uc774 \ud45c\uc2dc\ub41c \uc704\uce58 /TouchGFX/target/CortexMMCUInstrumentation.cpp \uc548\uc5d0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)(c.Z,{mdxType:"FurtherReading"},"UM1718\uc758 \uc139\uc158 6.4 ",(0,r.kt)(l.Z,{to:"https://www.st.com/resource/en/user_manual/dm00104712-stm32cubemx-for-stm32-configuration-and-initialization-c-code-generation-stmicroelectronics.pdf",mdxType:"Link"},"STM32 \uad6c\uc131 \ubc0f \ucd08\uae30\ud654 C \ucf54\ub4dc \uc0dd\uc131\uc744 \uc704\ud55c STM32CubeMX"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}M.isMDXComponent=!0}}]);