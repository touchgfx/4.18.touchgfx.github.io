(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5987],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},66338:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return f},metadata:function(){return m},toc:function(){return g},default:function(){return k}});var r=n(3905),o=n(44035),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&p(e,n,t[n]);return e};const h={id:"running-without-rtos",title:"Running without an RTOS on a TouchGFX Board Setup"},f=void 0,m={unversionedId:"development/scenarios/running-without-rtos",id:"development/scenarios/running-without-rtos",isDocsHomePage:!1,title:"Running without an RTOS on a TouchGFX Board Setup",description:"In this section we will discuss how to run a TouchGFX project without an operating system based on a TouchGFX Board Setup for one of the ST development kits available in TouchGFX Designer. This article is not aimed for custom projects started from STM32CubeMX or STM32CubeIDE.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/running-without-rtos.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/running-without-rtos",permalink:"/4.18/ko/docs/development/scenarios/running-without-rtos",version:"current",frontMatter:{id:"running-without-rtos",title:"Running without an RTOS on a TouchGFX Board Setup"},sidebar:"docs",previous:{title:"External Events as Triggers",permalink:"/4.18/ko/docs/development/scenarios/example-gpio"},next:{title:"Adding files to STM32CubeMX project",permalink:"/4.18/ko/docs/development/scenarios/adding-files-to-stm32cubemx-projet"}},g=[{value:"Starting a project from a TouchGFX Board Setup",id:"starting-a-project-from-a-touchgfx-board-setup",children:[{value:"Turning on the backlight",id:"turning-on-the-backlight",children:[]},{value:"Cleaning the code",id:"cleaning-the-code",children:[]}]}],b={toc:g};function k(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),p),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"In this section we will discuss how to run a TouchGFX project without an operating system based on a TouchGFX Board Setup for one of the ST development kits available in TouchGFX Designer. This article is not aimed for custom projects started from STM32CubeMX or STM32CubeIDE."),(0,r.kt)("h2",d({},{id:"starting-a-project-from-a-touchgfx-board-setup"}),"Starting a project from a TouchGFX Board Setup"),(0,r.kt)("p",null,"On most of the TouchGFX Board Setups available in TouchGFX Designer the OS FreeRTOS is enabled by default. To run without an operating system a few steps must be followed. Here we will use the TouchGFX Board Setup for the STM32H7B3-DK board as an example."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a project from TouchGFX Designer with the TouchGFX Board Setup for the STM32H7B3-DK board and generate code.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the provided ",(0,r.kt)("inlineCode",{parentName:"p"},".ioc")," file with STM32CubeMX.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the STM32CubeMX interface, navigate to the ",(0,r.kt)("em",{parentName:"p"},"Middleware")," -> ",(0,r.kt)("em",{parentName:"p"},"FreeRTOS")," settings and disable FreeRTOS"))),(0,r.kt)(o.Z,{imageSource:"/img/development/scenarios/running-without-rtos/disable-freertos-stm32cubemx-417.png",mdxType:"Figure"},"FreeRTOS settings in STM32CubeMX for the STM32H7B3-DK"),(0,r.kt)("h3",d({},{id:"turning-on-the-backlight"}),"Turning on the backlight"),(0,r.kt)("p",null,"The backlight on the displays are initially turned OFF in most of the TouchGFX Board Setups. This was done to prevent having a glitched display when booting up the board at the first tick. The backlight is then turned ON when the first framebuffer is ready in the ",(0,r.kt)("inlineCode",{parentName:"p"},"taskEntry()")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL.cpp")," ( under the ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target")," folder). When running without an OS the ",(0,r.kt)("inlineCode",{parentName:"p"},"taskEntry()")," function is never called, meaning that the display will never be turned ON while the framebuffers are still properly updated. The solution is to turn ON the backlight at startup by setting the LTDC_HSYNC and VSYNC pins to ",(0,r.kt)("em",{parentName:"p"},"HIGH"),"."),(0,r.kt)("ol",d({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"Navigate to the GPIO settings in the ",(0,r.kt)("em",{parentName:"li"},"System Core")," -> ",(0,r.kt)("em",{parentName:"li"},"GPIO")," section. Look for the PINs linked to the backlight of the display and set the GPIO output level to ",(0,r.kt)("em",{parentName:"li"},"HIGH"),". For the STM32H7B3-DK board the pins are ",(0,r.kt)("em",{parentName:"li"},"PA1")," (User label: LCD_BL_CTRL) and ",(0,r.kt)("em",{parentName:"li"},"PA2")," (User label: LCD_ON/OFF).")),(0,r.kt)(o.Z,{imageSource:"/img/development/scenarios/running-without-rtos/set-pins-high-417.png",mdxType:"Figure"},"Turning the backligh ON for the STM32H7B3-DK"),(0,r.kt)("ol",d({},{start:5}),(0,r.kt)("li",{parentName:"ol"},"Generate code from STM32CubeMX, and then generate code from TouchGFX Designer.")),(0,r.kt)("h3",d({},{id:"cleaning-the-code"}),"Cleaning the code"),(0,r.kt)("p",null,'STM32CubeMX and the TouchGFX Generator cannot remove potential calls of the RTOS functions if they are under "USER CODE" sections. It is then necessary to manually clean the code. For the STM32H7B3-DK TBS only the Touch Controller needs to be modified.'),(0,r.kt)("ol",d({},{start:6}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"STM32TouchController.cpp")," file found under the ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target")," folder of the project. Manually remove ",(0,r.kt)("inlineCode",{parentName:"p"},"#include <cmsis_os.h>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"configASSERT(0)")," inside the if-statement.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"Freertos.c")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Core/src")," folder."))),(0,r.kt)("p",null,"To flash your project on your board from TouchGFX Designer you will need to cleanthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile")," (found under the ",(0,r.kt)("inlineCode",{parentName:"p"},"gcc")," folder) by deleting or commenting OS related dependencies and paths. It is also needed to clean all OS related dependencies and paths in the different projects for the toolchain/IDE used."),(0,r.kt)("p",null,"You are now able to run your project without an OS on a project started from a TouchGFX Board Setup."))}k.isMDXComponent=!0}}]);