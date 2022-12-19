"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8394],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),s=i,h=d["".concat(u,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},91501:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return C},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return T}});var r=n(3905),i=n(39130),o=n(93054),l=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&m(e,n,t[n]);return e};const h={id:"compiling-and-flashing",title:"\ucef4\ud30c\uc77c \ubc0f \ud50c\ub798\uc2f1"},k=void 0,g={unversionedId:"development/ui-development/working-with-touchgfx/compiling-and-flashing",id:"development/ui-development/working-with-touchgfx/compiling-and-flashing",title:"\ucef4\ud30c\uc77c \ubc0f \ud50c\ub798\uc2f1",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uc5d0\uc11c\ubd80\ud130 \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589\uae4c\uc9c0, \ud2b9\uc815 \uc124\uc815\uc5d0 \ub530\ub978 \ucef4\ud30c\uc77c \ubc0f \ud50c\ub798\uc2f1 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/compiling-and-flashing.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/compiling-and-flashing",permalink:"/4.18/ko/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing",draft:!1,tags:[],version:"current",frontMatter:{id:"compiling-and-flashing",title:"\ucef4\ud30c\uc77c \ubc0f \ud50c\ub798\uc2f1"},sidebar:"docs",previous:{title:"\uc2dc\ubbac\ub808\uc774\ud130",permalink:"/4.18/ko/docs/development/ui-development/working-with-touchgfx/simulator"},next:{title:"\ub514\ubc84\uae45",permalink:"/4.18/ko/docs/development/ui-development/working-with-touchgfx/debugging"}},f={},T=[{value:"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucef4\ud30c\uc77c",id:"compiling-touchgfx-applications",level:2},{value:"PC \uc2dc\ubbac\ub808\uc774\ud130 \ucef4\ud30c\uc77c",id:"compiling-for-pc-simulator",level:3},{value:"GCC",id:"gcc",level:4},{value:"Visual Studio",id:"visual-studio",level:4},{value:"\ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4 \ucef4\ud30c\uc77c",id:"compiling-for-target-hardware",level:3},{value:"STM32 \ud3c9\uac00 \ud0a4\ud2b8 \ud50c\ub798\uc2f1",id:"flashing-stm32-evaluation-kits",level:2},{value:"GCC \ubc0f TouchGFX Designer",id:"gcc--touchgfx-designer",level:3},{value:"STM32CubeIDE",id:"stm32cubeide",level:3},{value:"IAR",id:"iar",level:3},{value:"Keil",id:"keil",level:3},{value:"\ucee4\uc2a4\ud140 \ud558\ub4dc\uc6e8\uc5b4 \ud50c\ub798\uc2f1",id:"flashing-custom-hardware",level:2}],v={toc:T};function C(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),m),a(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uc5d0\uc11c\ubd80\ud130 \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589\uae4c\uc9c0, \ud2b9\uc815 \uc124\uc815\uc5d0 \ub530\ub978 \ucef4\ud30c\uc77c \ubc0f \ud50c\ub798\uc2f1 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",s({},{id:"compiling-touchgfx-applications"}),"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucef4\ud30c\uc77c"),(0,r.kt)("p",null,"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ucef4\ud30c\uc77c\ud560 \ub54c\ub294 PC \uc2dc\ubbac\ub808\uc774\ud130 \ucef4\ud30c\uc77c\uacfc \ud0c0\uac9f \ud558\ub4dc\uc6e8\uc5b4 \ucef4\ud30c\uc77c\uc758 \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",s({},{id:"compiling-for-pc-simulator"}),"PC \uc2dc\ubbac\ub808\uc774\ud130 \ucef4\ud30c\uc77c"),(0,r.kt)("p",null,"PC \uc2dc\ubbac\ub808\uc774\ud130 \ud504\ub85c\uc81d\ud2b8\ub97c \ucef4\ud30c\uc77c\ud558\ub294 \ub370\ub294 GCC\uc640 Visual Studio\uc758 \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("br",null)," \ub450 \uc635\uc158 \ubaa8\ub450 TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\uae30 \ub54c\ubb38\uc5d0 \uc5b8\uc81c\ub4e0\uc9c0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",s({},{id:"gcc"}),"GCC"),(0,r.kt)("p",null,"Makefile\uc758 \uc704\uce58\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"<touchgfx_application_root_folder>/simulator/gcc/Makefile")),(0,r.kt)("p",null,"TouchGFX\ub294 GCC \ucef4\ud30c\uc77c\ub7ec\uc640 GNU Make\uac00 \uc0ac\uc804 \uc124\uce58\ub41c MinGW \ud658\uacbd\uc744 \uc81c\uacf5\ud558\ubbc0\ub85c PC \uc2dc\ubbac\ub808\uc774\ud130 \uc6a9\ub3c4\ub85c \uc0dd\uc131\ub41c Makefile\uc744 \uc27d\uac8c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX \ud658\uacbd\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"C:/TouchGFX/4.18.0/env/MinGW/msys/1.0/msys.bat"),'\uc5d0\uc11c, \ud639\uc740 Windows \uc2dc\uc791 \uba54\ub274\uc5d0 \ucd94\uac00\ub418\ub294 \ubc14\ub85c \uac00\uae30\uc778 "TouchGFX x.y.z \ud658\uacbd"\uc5d0\uc11c \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c x, y, z\ub294 \ubc84\uc804 \ubc88\ud638\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4.'),(0,r.kt)("p",null,"TouchGFX \ud658\uacbd\uc744 \uc2e4\ud589\ud558\uc5ec TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub8e8\ud2b8 \ud3f4\ub354\ub85c \uc774\ub3d9\ud55c \ud6c4 \uc544\ub798\uc640 \uac19\uc774 \uac04\ub2e8\ud55c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uba74 simulator.exe \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"make -f simulator/gcc/Makefile\n")),(0,r.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c TouchGFX \ud658\uacbd\uc5d0\uc11c \ub2e4\uc74c \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uba74 \uc2dc\ubbac\ub808\uc774\ud130 \uc2e4\ud589 \ud30c\uc77c\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"./build/bin/simulator.exe\n")),(0,r.kt)("p",null,"PC \uc2dc\ubbac\ub808\uc774\ud130\ub294 TouchGFX Designer\uc5d0\uc11c\ub3c4 ",(0,r.kt)(i.Z,{to:"../designer-user-guide/main-window#run-simulator",mdxType:"Link"},"Run Simulator")," \uba85\ub839\uc744 \uc0ac\uc6a9\ud574 \ucef4\ud30c\uc77c\ud558\uc5ec \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",s({},{id:"visual-studio"}),"Visual Studio"),(0,r.kt)("p",null,"Visual Studio\ub97c \uc0ac\uc6a9\ud574 PC \uc2dc\ubbac\ub808\uc774\ud130\ub97c \ucef4\ud30c\uc77c\ud558\ub824\uba74 Visual Studio\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"p"},"<touchgfx_application_root_folder>/simulator/msvs/Application.sln")," \uc704\uce58\uc5d0 \uc0dd\uc131\ub41c \uc194\ub8e8\uc158 \ud30c\uc77c\uc744 \uc5f4\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"PC \uc2dc\ubbac\ub808\uc774\ud130\ub294 ",(0,r.kt)("a",s({parentName:"p"},{href:"debugging"}),"\ucf54\ub4dc \ub514\ubc84\uae45"),"\uc744 \ud65c\uc131\ud654\ud558\uc5ec Visual Studio\uc5d0\uc11c \ubc14\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"Note"},"GCC \ub610\ub294 Visual Studio\ub97c \uc0ac\uc6a9\ud574 \ucef4\ud30c\uc77c\ud558\ub824\uba74 \uba3c\uc800 TouchGFX Designer\uc5d0\uc11c ",(0,r.kt)(i.Z,{to:"../designer-user-guide/main-window#generate-code",mdxType:"Link"},"Generate")," \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",s({},{id:"compiling-for-target-hardware"}),"\ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4 \ucef4\ud30c\uc77c"),(0,r.kt)("p",null,"STM32 \ud3c9\uac00 \ud0a4\ud2b8 \ud504\ub85c\uc81d\ud2b8 \ucef4\ud30c\uc77c\uc740 ",(0,r.kt)("a",s({parentName:"p"},{href:"../../../introduction/getting-started#application-template--ui-template"}),"TouchGFX Board Setup")," \uae30\ubc18 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc77c \ub54c \ub9e4\uc6b0 \uac04\ub2e8\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\uac01 TouchGFX Board Setup\uc5d0\ub294 GCC, STM32CubeIDE, IAR \ubc0f Keil\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GCC: ",(0,r.kt)("inlineCode",{parentName:"li"},"<project_root_folder>/gcc/MakeFile")),(0,r.kt)("li",{parentName:"ul"},"STM32CubeIDE: ",(0,r.kt)("inlineCode",{parentName:"li"},"<project_root_folder>/STM32CubeIDE/.cproject")),(0,r.kt)("li",{parentName:"ul"},"IAR: ",(0,r.kt)("inlineCode",{parentName:"li"},"<project_root_folder>/EWARM/Project.eww")),(0,r.kt)("li",{parentName:"ul"},"Keil: ",(0,r.kt)("inlineCode",{parentName:"li"},"<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>.uvprojx"))),(0,r.kt)("p",null,"\ud65c\uc131 \ub3c4\uad6c \uccb4\uc778\uc740 STM32CubeMX\uc5d0\uc11c \uc124\uc815\ub418\uba70, \uae30\ubcf8\uc801\uc73c\ub85c STM32CubeIDE\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"p"},"\ub2e8, \uc77c\ubd80 \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc740 \ud55c \ubc88\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc0dd\uc131\ub418\ub294 \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc740 STM32CubeMX\uc5d0\uc11c \uc120\ud0dd\ub41c \ub3c4\uad6c \uccb4\uc778\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4.")),(0,r.kt)("p",null,"TouchGFX\ub294 GNU Embedded Toolchain for Arm\uacfc GNU Make\uac00 \uc0ac\uc804 \uc124\uce58\ub41c MinGW \ud658\uacbd\uc744 \uc81c\uacf5\ud558\ubbc0\ub85c \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4 \uc6a9\ub3c4\ub85c \ud3ec\ud568\ub418\ub294 Makefile\uc744 \uc27d\uac8c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX \ud658\uacbd\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"C:/TouchGFX/4.18.0/env/MinGW/msys/1.0/msys.bat"),'\uc5d0\uc11c, \ud639\uc740 Windows \uc2dc\uc791 \uba54\ub274\uc5d0 \ucd94\uac00\ub418\ub294 \ubc14\ub85c \uac00\uae30\uc778 "TouchGFX x.y.z \ud658\uacbd"\uc5d0\uc11c \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,r.kt)("p",null,"TouchGFX \ud658\uacbd\uc744 \uc2e4\ud589\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8 \ub8e8\ud2b8 \ud3f4\ub354\ub85c \uc774\ub3d9\ud55c \ud6c4 \uc544\ub798\uc640 \uac19\uc774 \uac04\ub2e8\ud55c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uba74 \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4 \ud504\ub85c\uc81d\ud2b8\uac00 \ucef4\ud30c\uc77c\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"make -f gcc/Makefile\n")),(0,r.kt)(o.Z,{mdxType:"Note"},"GCC, STM32CubeIDE, IAR \ub610\ub294 Keil\ub97c \uc0ac\uc6a9\ud574 \ucef4\ud30c\uc77c\ud558\ub824\uba74 \uba3c\uc800 TouchGFX Designer\uc5d0\uc11c ",(0,r.kt)(i.Z,{to:"../designer-user-guide/main-window#generate-code",mdxType:"Link"},"Generate")," \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",s({},{id:"flashing-stm32-evaluation-kits"}),"STM32 \ud3c9\uac00 \ud0a4\ud2b8 \ud50c\ub798\uc2f1"),(0,r.kt)("p",null,"STM32 \ud3c9\uac00 \ud0a4\ud2b8 \ud504\ub85c\uc81d\ud2b8 \ud50c\ub798\uc2f1\uc740 \uc0ac\uc804 \uc81c\uc791\ub41c ",(0,r.kt)("a",s({parentName:"p"},{href:"../../../introduction/getting-started#application-template--ui-template"}),"TouchGFX Board Setup")," \uae30\ubc18 \ud504\ub85c\uc81d\ud2b8\uc77c \ub54c \ub9e4\uc6b0 \uac04\ub2e8\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\uac01 \ud504\ub85c\uc81d\ud2b8\ub9c8\ub2e4 \ube4c\ub4dc\ub418\uba74 ",(0,r.kt)("a",s({parentName:"p"},{href:"https://www.st.com/en/development-tools/stsw-link004.html"}),"ST Link Utility")," \ub610\ub294 ",(0,r.kt)("a",s({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer"),"\ub97c \uc0ac\uc6a9\ud574 \ud50c\ub798\uc2f1\ud560 \uc218 \uc788\ub294 \ubc14\uc774\ub108\ub9ac\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub530\ub77c\uc11c \ud50c\ub798\uc2f1\uc744 \uc9c4\ud589\ud558\ub824\uba74 \uc774 \ub450 \uac00\uc9c0 \ub3c4\uad6c\ub97c \uba3c\uc800 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub450 \ub3c4\uad6c\ub294 \uae30\ubcf8 \uc704\uce58\uc5d0 \uc124\uce58\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ST Link Utility\uc758 \uae30\ubcf8 \uc124\uce58 \uc704\uce58: ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"li"},"C:/Program Files (x86)/STMicroelectronics/STM32 ST-LINK Utility/ST-LINK Utility")),(0,r.kt)("li",{parentName:"ul"},"STM32CubeProgrammer\uc758 \uae30\ubcf8 \uc124\uce58 \uc704\uce58: ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"li"},"C:/Program Files/STMicroelectronics/STM32Cube/STM32CubeProgrammer"))),(0,r.kt)(o.Z,{mdxType:"Note"},"TouchGFX Board Setup\uc740 IAR, Keil, STM32CubeIDE \ub610\ub294 \uae30\ud0c0 IDE\uc5d0\uc11c \ubc14\ub85c \ud50c\ub798\uc2f1\ud560 \uc218 \uc788\ub294 \ud50c\ub798\uc2dc \ub85c\ub354\ub97c \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",s({},{id:"gcc--touchgfx-designer"}),"GCC \ubc0f TouchGFX Designer"),(0,r.kt)("p",null,"TouchGFX Board Setup\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Makefile\uc740",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/gcc/MakeFile")," \uc5d0 \uc704\uce58\ud558\uba70, \uc5ec\uae30\uc5d0\ub294 \uc544\ub798\uc640 \uac19\uc774 ST Link Utility \ub610\ub294 STM32CubeProgrammer(AT\uc5d0 \ub530\ub77c \ub2e4\ub984)\ub97c \uc0ac\uc6a9\ud574 STM32 \ud3c9\uac00 \ud0a4\ud2b8\ub97c \ud50c\ub798\uc2f1\ud558\ub294 flash \uba85\ub839\uc774 \ub0b4\uc7a5\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ubb3c\ub860 \ub370\uc2a4\ud06c\ud1b1 \ubc84\uc804 \ud50c\ub798\uc2dc \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud574 .hex \ud30c\uc77c\ub85c \ubcf4\ub4dc\ub97c \ud50c\ub798\uc2f1\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"make -f gcc/Makefile flash\n")),(0,r.kt)("p",null,".hex \ud30c\uc77c\uc758 \uc704\uce58\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/TouchGFX/build/bin/target.hex")),(0,r.kt)("p",null,"\ub0b4\ubd80 \ud50c\ub798\uc2dc\uc5d0\ub9cc \ub370\uc774\ud130\ub97c \uc791\uc131\ud558\uace0 \uc678\ubd80 \ud50c\ub798\uc2dc\ub97c \uac74\ub108\ub6f0\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud2b9\ud788 \uc774\ubbf8\uc9c0\uac00 \ub9ce\uc744 \ub54c \uc774\ub7ec\ud55c \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uba74 \ud50c\ub798\uc2dc \uc2dc\uac04\uc744 \ud06c\uac8c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc \ub9c8\uc9c0\ub9c9\uc5d0 \uc678\ubd80 \ud50c\ub798\uc2dc\uc5d0 \uc791\uc131\ud55c \uc774\ud6c4\ub85c \uc678\ubd80 \ud50c\ub798\uc2dc\uc758 \ub0b4\uc6a9\uc774 \ubc14\ub00c\uc9c0 \uc54a\uc558\ub294\uc9c0 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4. \ub9cc\uc57d \ubc14\ub00c\uc5c8\ub294\ub370\ub3c4 \ub2e4\uc2dc \ud50c\ub798\uc2f1\ud558\uc9c0 \uc54a\uc73c\uba74 \uc774\uc0c1\ud55c \ub3d9\uc791\uc774 \uc77c\uc5b4\ub098\uac8c \ub429\ub2c8\ub2e4. \uc774\ub54c\ub294 \ub0b4\ubd80 \ud50c\ub798\uc2dc\uc640 \uc678\ubd80 \ud50c\ub798\uc2dc\ub97c \ubaa8\ub450 \ud50c\ub798\uc2f1\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"make -f gcc/Makefile intflash\n")),(0,r.kt)("p",null,".hex \ud30c\uc77c\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/TouchGFX/build/bin/intflash.hex"),"\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX Board Setup\uc740 TouchGFX Designer\uc5d0\uc11c ",(0,r.kt)("a",s({parentName:"p"},{href:"../designer-user-guide/main-window#run-target"}),"Run Target \uba85\ub839"),"\uc744 \ud1b5\ud574 \ud504\ub85c\uc81d\ud2b8\ub97c \ud50c\ub798\uc2f1\ud560 \uc218 \uc788\ub294 \uad6c\uc131\ub3c4 \uc81c\uacf5\ud569\ub2c8\ub2e4. TouchGFX Designer\uc5d0\uc11c \ud50c\ub798\uc2f1\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc774 \uba85\ub839\uc740 TouchGFX Designer\uc758 ",(0,r.kt)("a",s({parentName:"p"},{href:"../designer-user-guide/config-view"}),"Config View"),"\uc5d0 \uc788\ub294 ",(0,r.kt)("a",s({parentName:"p"},{href:"../designer-user-guide/config-view#build"}),"Build Section"),"\uc5d0\uc11c \ud655\uc778 \ubc0f \uc7ac\uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",s({},{id:"stm32cubeide"}),"STM32CubeIDE"),(0,r.kt)("p",null,"TouchGFX Board Setup\uc740 STM32CubeProgrammer\ub97c \ud1b5\ud574 STM32CubeIDE\uc5d0\uc11c \ucd9c\ub825\ub418\ub294 .elf \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud574 \ucef4\ud30c\uc77c\ub41c \ud504\ub85c\uc81d\ud2b8\uc758 \ud50c\ub798\uc2f1\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,".elf \ud30c\uc77c\uc758 \uc704\uce58\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/STM32CubeIDE/Debug/<STM32_evaluation_kit_name>.elf")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\uc608\ub97c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. C:/TouchGFXProjects/MyApplication/STM32CubeIDE/Debug/STM32F746G_DISCO.elf")),(0,r.kt)("h3",s({},{id:"iar"}),"IAR"),(0,r.kt)("p",null,"TouchGFX Board Setup\uc740 STM32CubeProgrammer\ub97c \ud1b5\ud574 IAR\uc5d0\uc11c \ucd9c\ub825\ub418\ub294 .hex \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud574 \ucef4\ud30c\uc77c\ub41c \ud504\ub85c\uc81d\ud2b8\uc758 \ud50c\ub798\uc2f1\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,".hex \ud30c\uc77c\uc758 \uc704\uce58\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/EWARM/<STM32_evaluation_kit_name>/Exe/<STM32_evaluation_kit_name>.hex")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\uc608\ub97c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. C:/TouchGFXProjects/MyApplication/EWARM/STM32F469I-DISCO/STM32F469I-DISCO.hex")),(0,r.kt)("h3",s({},{id:"keil"}),"Keil"),(0,r.kt)("p",null,"TouchGFX Board Setup\uc740 STM32CubeProgrammer\ub97c \ud1b5\ud574 Keil\uc5d0\uc11c \ucd9c\ub825\ub418\ub294 .hex \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud574 \ucef4\ud30c\uc77c\ub41c \ud504\ub85c\uc81d\ud2b8\uc758 \ud50c\ub798\uc2f1\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,".hex \ud30c\uc77c\uc758 \uc704\uce58\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>/<STM32_evaluation_kit_name>.hex")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\uc608\ub97c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. C:/TouchGFXProjects/MyApplication/MDK-ARM/STM32F469I-DISCO/STM32F469I-DISCO.hex")),(0,r.kt)("h2",s({},{id:"flashing-custom-hardware"}),"\ucee4\uc2a4\ud140 \ud558\ub4dc\uc6e8\uc5b4 \ud50c\ub798\uc2f1"),(0,r.kt)("p",null,"\uadf8 \ubc16\uc5d0 \ud50c\ub798\uc2f1\ud574\uc57c \ud558\ub294 \ub300\uc0c1\uc774 STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc640 \uac19\uc774 \uc0ac\uc804 \uc815\uc758\ub41c \ud558\ub4dc\uc6e8\uc5b4 \uad6c\uc131\uc774 \uc544\ub2cc \ucee4\uc2a4\ud140 \ud558\ub4dc\uc6e8\uc5b4\ub77c\uace0 \ud574\ub3c4 STM32CubeProgrammer\ub97c \uacc4\uc18d \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. STM32CubeProgrammer\ub294 \ud2b9\uc815 \uc678\ubd80 \uba54\ubaa8\ub9ac\uc5d0 \ud544\uc694\ud55c \ud50c\ub798\uc2dc \ub85c\ub529 \uba54\ucee4\ub2c8\uc998\uc744 \ud56d\uc0c1 \uc81c\uacf5\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ucee4\uc2a4\ud140 \ud50c\ub798\uc2dc \ub85c\ub354\ub294 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",s({parentName:"p"},{href:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf"}),"\uc678\ubd80 \uba54\ubaa8\ub9ac\uc5d0 \ud544\uc694\ud55c \ucee4\uc2a4\ud140 \ub85c\ub354 \uac1c\ubc1c \uc0ac\uc6a9\uc790 \ub9e4\ub274\uc5bc"),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}C.isMDXComponent=!0}}]);