"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1218],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70814:function(e,t,n){var o=n(67294),a=n(88678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:r},this.props.children)}}t.Z=i},22425:function(e,t,n){var o=n(67294);class a extends o.Component{render(){return o.createElement("div",{class:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var o=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,i=(0,a.Z)(e.imageSource);return t?o.createElement("div",{class:"figure noshadow"},o.createElement("a",{href:i,target:"_blank"},o.createElement("img",{width:n,height:r,src:i})),o.createElement("p",null,e.children)):o.createElement("div",{class:"figure"},o.createElement("a",{href:i,target:"_blank"},o.createElement("img",{width:n,height:r,src:i})),o.createElement("p",null,e.children))}},88678:function(e,t,n){var o=n(67294);class a extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{class:e},o.createElement("div",{class:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var o=n(67294),a=n(88678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=i},37793:function(e,t,n){var o=n(67294),a=n(88678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends o.Component{render(){return o.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:r},this.props.children)}}t.Z=i},35096:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return i}});var o=n(11368),a=n(35096);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+i:i}(t,e,n,o)}}function i(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},31619:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return _},contentTitle:function(){return b},metadata:function(){return v},toc:function(){return k},default:function(){return w}});var o=n(3905),a=n(44035),r=n(93054),i=n(37793),s=n(22425),c=n(70814),d=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&g(e,n,t[n]);return e};const _={id:"scenarios-video-decoding",title:"Video Decoding"},b=void 0,v={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-video-decoding",id:"development/touchgfx-hal-development/scenarios/scenarios-video-decoding",isDocsHomePage:!1,title:"Video Decoding",description:"This section shows how to configure the TouchGFX Generator to generate a TouchGFX HAL that has video decoding capabilities.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-video-decoding.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",permalink:"/4.18/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",tags:[],version:"current",frontMatter:{id:"scenarios-video-decoding",title:"Video Decoding"},sidebar:"docs",previous:{title:"Framebuffer Strategies",permalink:"/4.18/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"},next:{title:"UI Development Introduction",permalink:"/4.18/ko/docs/development/ui-development/ui-development-introduction"}},k=[{value:"Software Decoding",id:"software-decoding",children:[{value:"RTOS Support",id:"rtos-support",children:[],level:3},{value:"Video Data",id:"video-data",children:[],level:3}],level:2},{value:"Hardware Decoding",id:"hardware-decoding",children:[{value:"RTOS Support",id:"rtos-support-1",children:[],level:3},{value:"STM32F769-DISCO",id:"stm32f769-disco",children:[],level:3},{value:"STM32H750-DK",id:"stm32h750-dk",children:[],level:3}],level:2},{value:"<code>FileReader</code> interface",id:"filereader-interface",children:[],level:2},{value:"Migrating TBS to support video decoding",id:"migrating-tbs-to-support-video-decoding",children:[{value:"Generel changes",id:"generel-changes",children:[],level:3},{value:"Software changes",id:"software-changes",children:[],level:3},{value:"Hardware changes",id:"hardware-changes",children:[],level:3}],level:2}],T={toc:k};function w(e){var t,n=e,{components:d}=n,g=((e,t)=>{var n={};for(var o in e)h.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&u)for(var o of u(e))t.indexOf(o)<0&&m.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=f(f({},T),g),l(t,p({components:d,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"This section shows how to configure the ",(0,o.kt)("a",f({parentName:"p"},{href:"../touchgfx-generator#video-decoding"}),"TouchGFX Generator")," to generate a TouchGFX HAL that has video decoding capabilities."),(0,o.kt)("p",null,"The following scenario details how to enable TouchGFX HAL to support video decoding through either software (LibJPEG) or hardware (JPEG). It covers both STM32F7 and STM32H7 because the STM32CubeMX configuration to support Hardware (JPEG) decoding is slightly different from the STM32F7."),(0,o.kt)("p",null,"Generally, the LibJPEG and JPEG configurations can be found in STM32CubeMX in the Middleware and Multimedia catagories:"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/cubemx-jpeg-configuration.png",mdxType:"Figure"},"Single framebuffer, by address"),(0,o.kt)("p",null,"Before reading this scenario, please read the documentation on using ",(0,o.kt)("a",f({parentName:"p"},{href:"../../ui-development/touchgfx-engine-features/video"}),"MJPEG Video")," in TouchGFX and the documentation on the ",(0,o.kt)("a",f({parentName:"p"},{href:"../../ui-development/ui-components/miscellaneous/video"}),"Video widget")," itself."),(0,o.kt)("p",null,"Be sure to read all sections in this article before proceeding."),(0,o.kt)(i.Z,{mdxType:"Tip"},"The latest version of the STM32H750-DK, STM32F769-DISCO and STM32F746G-DISCO TouchGFX Board Setups (TBS) support both Software and JPEG hardware decoding through their STM32CubeMX configurations."),(0,o.kt)("h2",f({},{id:"software-decoding"}),"Software Decoding"),(0,o.kt)("p",null,"The software decoding solution requires that the LibJPEG middleware is enabled from STM32CubeMX, as specified in ",(0,o.kt)("a",f({parentName:"p"},{href:"../touchgfx-generator#video-decoding"}),"TouchGFX Generator User Guide"),". Software decoding setup is identical for all LibJPEG capable MCUs (e.g. STM32F4, STM32F7, STM32H7)."),(0,o.kt)("p",null,"The TouchGFX Software Decoder expects the data decoded by LibJPEG to have BGR pixel ordering. If this setting is left as RGB, R and B color components will be swapped in your application. Furthermore, the size of each pixel should be 3 bytes (4 bytes means the video is encoded in an XRGB format)."),(0,o.kt)(c.Z,{mdxType:"Caution"},"The RGB_ORDERING setting must be configured as BGR, and the pixel size must be 3 (24-bit)."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/libjpeg-configuration.png",width:"700",mdxType:"Figure"},"LibJPEG Configuration"),(0,o.kt)("p",null,"Once LibJPEG is enabled from STM32CubeMX, Software Decoding can now be enabled from TouchGFX Generator, as described in the ",(0,o.kt)("a",f({parentName:"p"},{href:"../touchgfx-generator#video-decoding"}),"TouchGFX Generator User Guide"),"."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/generator-video-decoding-software.png",mdxType:"Figure"},"TouchGFX Generator: Video Decoding"),(0,o.kt)("h3",f({},{id:"rtos-support"}),"RTOS Support"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",f({parentName:"p"},{href:"../touchgfx-generator#video-decoding"}),"TouchGFX Generator User Guide")," mentions that ",(0,o.kt)("em",{parentName:"p"},"Single-")," and ",(0,o.kt)("em",{parentName:"p"},"Double buffer")," decoding strategies require a CMSIS compliant RTOS, such as FreeRTOS. TouchGFX Generator generates an entry point function ",(0,o.kt)("inlineCode",{parentName:"p"},"videoTaskFunc")," that must be associated with a Video decoding task. STM32CubeMX can generate this configuration by defining the task and entry point function in the ",(0,o.kt)("em",{parentName:"p"},"Tasks and queues")," tab of the FreeRTOS Middleware configuration."),(0,o.kt)("p",null,"The video task stack size (defined in words for CMSIS V2) and RTOS heap size are two important factors, the latter because LibJPEG, for software decoding, uses dynamic memory allocation. The FreeRTOS Heap should be large enough for your general application + ",(0,o.kt)("inlineCode",{parentName:"p"},"0xA000"),"."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/freertos-video-task.png",mdxType:"Figure"},"FreeRTOS Task Configuration"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/freertos-video-decoding-heap-size.png",mdxType:"Figure"},"FreeRTOS Heap Size Configuration"),(0,o.kt)("p",null,"Based on the above configuration, STM32CubeMX generates the following code:"),(0,o.kt)(s.Z,{mdxType:"CodeHeader"},"main.c"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'/* Definitions for VideoTask */\nosThreadId_t VideoTaskHandle;\nconst osThreadAttr_t VideoTask_attributes = {\n  .name = "VideoTask",\n  .stack_size = 1000 * 4,\n  .priority = (osPriority_t) osPriorityLow,\n};\n\nvoid main()\n{\n    ...\n    /* creation of VideoTask */\n    VideoTaskHandle = osThreadNew(videoTaskFunc, NULL, &VideoTask_attributes);\n    ...\n}\n')),(0,o.kt)(s.Z,{mdxType:"CodeHeader"},"FreeRTOSConfig.h"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#define configTOTAL_HEAP_SIZE                    ((size_t)75000)\n")),(0,o.kt)("p",null,"This concludes the TouchGFX HAL configuration for Software Decoding. After Generating code from STM32CubeMX the application will be able to decode videos using LibJPEG when using the ",(0,o.kt)("a",f({parentName:"p"},{href:"../../ui-development/ui-components/miscellaneous/video"}),"Video widget")," from the designer."),(0,o.kt)("h3",f({},{id:"video-data"}),"Video Data"),(0,o.kt)(c.Z,{mdxType:"Caution"},"The current decoding solution using STM32CubeMX, TouchGFX Generator and the Video widget from TouchGFX Designer will currently only work for ST boards because the video data is linked into the application at a specific address in memory mapped flash that is already known."),(0,o.kt)("p",null,"The below snippet from an EWARM project shows the extra options that are created by TouchGFX Designer and how it places the data in ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtFlashSection")," which is defined inside the linker script for all TouchGFX Board Packages. This will not work for non-memory-mapped flash or projects that don't define this section."),(0,o.kt)(s.Z,{mdxType:"CodeHeader"},"ewarm_project.ewp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"        <option>\n          <name>IlinkExtraOptions</name>\n          <state>--image_input $PROJ_DIR$\\..\\TouchGFX\\generated\\videos\\bin\\washerdryer.bin,video_washerdryer_bin_start,ExtFlashSection,4</state>\n          <state>--keep video_washerdryer_bin_start</state>\n        </option>\n")),(0,o.kt)("p",null,"For projects with video data in non-memory mapped memory, please read the section ",(0,o.kt)("inlineCode",{parentName:"p"},"FileReader")," in this article."),(0,o.kt)("h2",f({},{id:"hardware-decoding"}),"Hardware Decoding"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",f({parentName:"p"},{href:"../touchgfx-generator#video-decoding"}),"TouchGFX Generator User Guide")," mentions that the JPEG IP must be enabled in STM32CubeMX to enable Hardware decoding. Software- and Hardware decoding share several traits and the differences will be outlined in this section."),(0,o.kt)("h3",f({},{id:"rtos-support-1"}),"RTOS Support"),(0,o.kt)("p",null,"FreeRTOS stack size can be substantially lower than for Software decoding because there is no software stack which dynamically allocates memory. Keep the size close to what it would be to accommodate the other tasks in the project."),(0,o.kt)("h3",f({},{id:"stm32f769-disco"}),"STM32F769-DISCO"),(0,o.kt)("p",null,"The JPEG configuration for JPEG capable STM32F7 series, e.g. STM32F769, differs slightly from the STM32H7 line. The ",(0,o.kt)("inlineCode",{parentName:"p"},"RGB_FORMAT")," must respect the format of the TouchGFX Framebuffer, ",(0,o.kt)("inlineCode",{parentName:"p"},"JPEG_RGB565")," in the example below."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/jpeg-hw-configuration.png",mdxType:"Figure"},"JPEG Parameter Settings"),(0,o.kt)("p",null,"Use DMA to transfer data to (memory-to-peripheral) and from (peripheral-to-memory) the JPEG peripheral through the ",(0,o.kt)("em",{parentName:"p"},"DMA Settings"),". ",(0,o.kt)("em",{parentName:"p"},"Adding")," a DMA request for ",(0,o.kt)("inlineCode",{parentName:"p"},"IN")," and one for ",(0,o.kt)("inlineCode",{parentName:"p"},"OUT")," will set up the direction parameters automatically."),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/jpeg-hw-dma-configuration1.png",mdxType:"Figure"},"JPEG DMA Settings"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/jpeg-hw-dma-configuration2.png",mdxType:"Figure"},"JPEG DMA Settings"),(0,o.kt)("p",null,"This concludes the TouchGFX HAL configuration for Hardware Decoding on the JPEG capable STM32F7s (e.g. STM32F769). After Generating code from STM32CubeMX the application will be able to decode videos using the JPEG peripheral when using the Video widget from the designer."),(0,o.kt)(c.Z,{mdxType:"Caution"},"The RGB_FORMAT of the JPEG peripheral configuration must respect the format of the TouchGFX Framebuffer"),(0,o.kt)("h3",f({},{id:"stm32h750-dk"}),"STM32H750-DK"),(0,o.kt)("p",null,"The only thing that seperates Hardware decoding (JPEG capable) on e.g. an STM32H750 from an STM32F769 is the way DMA transfers are configured in STM32CubeMX. Not only is the UI different, but the DMA concepts are as well."),(0,o.kt)("p",null,"For the STM32H750, the JPEG peripheral can only be configured to use the MDMA peripheral rather than the regular DMA peripherals. Add an MDMA configuration for both input- and output FIFO Threshold signals as shown in the images below."),(0,o.kt)(r.Z,{mdxType:"Note"},"MDMA is a much higher performance DMA engine compared to DMA1/DMA2"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/mdma-input-fifo-threshold.png",mdxType:"Figure"},"JPEG DMA Settings"),(0,o.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/mdma-output-fifo-threshold.png",mdxType:"Figure"},"JPEG DMA Settings"),(0,o.kt)(c.Z,{mdxType:"Caution"},"For H7, *User Code* must be added to correctly configure the DMA requests for data in/out."),(0,o.kt)("p",null,"When generating code for e.g. an STM32H750 through STM32CubeMX, unfortunately, the code to configure the MDMA (defined above) to the MDMA handlers is missing and developers must add the highlighted user code, manually."),(0,o.kt)(s.Z,{mdxType:"CodeHeader"},"Core\\Src\\stm32h7xx_hal_msp.c"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{6-7}","{6-7}":!0}),"void HAL_JPEG_MspInit(JPEG_HandleTypeDef* hjpeg)\n{\n  if(hjpeg->Instance==JPEG)\n  {\n  /* USER CODE BEGIN JPEG_MspInit 0 */\n     hmdma_jpeg_infifo_th.Init.Request = MDMA_REQUEST_JPEG_INFIFO_TH;\n     hmdma_jpeg_outfifo_th.Init.Request = MDMA_REQUEST_JPEG_OUTFIFO_TH;\n  /* USER CODE END JPEG_MspInit 0 */\n   ...\n\n")),(0,o.kt)("h2",f({},{id:"filereader-interface"}),(0,o.kt)("inlineCode",{parentName:"h2"},"FileReader")," interface"),(0,o.kt)("p",null,"When storing MJPEG videos on non-memory-mapped memories developers can specify an implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx::VideoDataReader")," that the TouchGFX Video Controllers can use to hand data for decoding to the configured decoder (Software/Hardware). The below is a simple example of such an interface that copies video data from one buffer to another."),(0,o.kt)(s.Z,{mdxType:"CodeHeader"},"VideoView.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"class MyReader : public touchgfx::VideoDataReader\n{\npublic:\n    MyReader() : position(0) { }\n    virtual uint32_t getDataLength() { return video_len; }\n    virtual void seek(uint32_t pos) { position = pos; }\n    virtual bool readData(void* dst, uint32_t bytes)\n    {\n        memcpy(dst, &video_data[position], bytes);\n        position += bytes;\n        return true;\n    }\n    private:\n        uint32_t position;\n} myReader;\n")),(0,o.kt)("p",null,"Instead of pointing a ",(0,o.kt)("inlineCode",{parentName:"p"},"Video")," widget to the start of the video in mapped memory, developers can configure the widget to use the data reader instead:"),(0,o.kt)(s.Z,{mdxType:"CodeHeader"},"VideoView.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"video.setVideoData(myReader);\n")),(0,o.kt)("h2",f({},{id:"migrating-tbs-to-support-video-decoding"}),"Migrating TBS to support video decoding"),(0,o.kt)("p",null,"If you want to migrate a project created from a TBS of one of the boards supporting video decoding before it were available and you want to be able to use 'Run Target' in TouchGFX Desginer with that project, some manual changes to the GCC Makefile are required. A run-down of the required changes and why they are needed will be listed in the following sections. The changes are an extension to the already existing GCC Makefile from the older TBS."),(0,o.kt)("p",null,"Other than updating the Makefile you will also have to setup video decoding in STM32CubeMX as described in the above scenarios."),(0,o.kt)("h3",f({},{id:"generel-changes"}),"Generel changes"),(0,o.kt)("p",null,"Define the LIBJPEG path in your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make"}),"# LibJPEG path\nlibjpeg_path := $(cubemx_middlewares_path)/Third_Party/LibJPEG\n")),(0,o.kt)("p",null,"The video assets input path must then be defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{3}","{3}":!0}),"asset_texts_input  := TouchGFX/assets/texts\n\nasset_videos_input := TouchGFX/assets/videos\n")),(0,o.kt)("p",null,"The video assets output path must also be defined bellow the other assets output paths:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{4}","{4}":!0}),"asset_images_output := $(asset_root_path)/images\nasset_fonts_output := $(asset_root_path)/fonts\nasset_texts_output := $(asset_root_path)/texts\nasset_videos_output := $(asset_root_path)/videos\n")),(0,o.kt)("p",null,"Add the video output assets to the components list:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{6}","{6}":!0}),"all_components := $(components) \\\n    $(asset_fonts_output) \\\n    $(asset_images_output) \\\n    $(asset_texts_output)\n    $(asset_texts_output) \\\n    $(asset_videos_output)\n")),(0,o.kt)("p",null,"Video object files must be defined. The video object files are seperated from the already existing object:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{4}","{4}":!0}),"c_source_files := $(call find, $(source_paths),*.c) $(os_source_files) $(board_c_files)\nsource_files += $(board_cpp_files)\n\nvideo_object_files := $(call find, $(asset_videos_output),*.o)\n")),(0,o.kt)("p",null,"A path to the video converter script must be defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{3}","{3}":!0}),"textconvert_script_path := $(touchgfx_path)/framework/tools/textconvert\ntextconvert_executable := $(call find, $(textconvert_script_path), *.rb)\nvideoconvert_script_path := $(touchgfx_path)/framework/tools/videoconvert\n")),(0,o.kt)("p",null,"An optional Echo can be added to see all video objects files. The video object files must be added to the linking stage. This line has the $(video_object_files) added together with the other object files:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{2,6}","{2,6}":!0}),"$(binary_output_path)/$(target_executable): $(object_files) $(object_asm_files)\n    @echo Video Objects: $(video_object_files)\n    @echo Linking $(@)\n    @mkdir -p $(@D)\n    @mkdir -p $(object_output_path)\n    @$(file >$(build_root_path)/objects.tmp) $(foreach F,$(object_files) $(video_object_files),$(file >>$(build_root_path)/objects.tmp,$F))\n")),(0,o.kt)("p",null,"Add the video rule to the existing ",(0,o.kt)("em",{parentName:"p"},"assets")," and .PHONY:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{1,3}","{1,3}":!0}),"_assets_: BitmapDatabase TextKeysAndLanguages Videos\n\n.PHONY: BitmapDatabase TextKeysAndLanguages Videos\n")),(0,o.kt)("p",null,"The video rule is added with the video conversion added:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make"}),"Videos:\n    @ruby $(videoconvert_script_path)/videoconvert.rb $(asset_videos_input) $(asset_videos_output)\n")),(0,o.kt)("p",null,"Lastly update the clean rule to also remove video related output."),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{8}","{8}":!0}),"_clean_:\n    @echo Cleaning: $(board_name)\n    @rm -rf $(build_root_path)\n    # Do not remove gui_generated\n    @rm -rf $(asset_images_output)\n    @rm -rf $(asset_fonts_output)\n    @rm -rf $(asset_texts_output)\n    @rm -rf $(asset_videos_output)  \n    # Create directory to avoid error if it does not exist\n    @mkdir -p $(asset_root_path)\n    # Remove assets folder if it is empty (i.e. no gui_generated folder)\n    @rmdir --ignore-fail-on-non-empty $(asset_root_path)\n    # Clean bootloader project\n    @$(MAKE) -r -f ExtMem_Boot/gcc/Makefile -s $(MFLAGS) clean\n")),(0,o.kt)("h3",f({},{id:"software-changes"}),"Software changes"),(0,o.kt)("p",null,"Add all the LIBJPEG paths to the include paths:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{9-11}","{9-11}":!0}),"include_paths := $(library_includes) \\\n    $(foreach comp, $(all_components), $(comp)/include) \\\n    $(foreach comp, $(cubemx_components), $(comp)/Inc) \\\n    $(foreach comp, $(touchgfx_generator_components), $(comp)/generated) \\\n    $(framework_includes) \\\n    $(cubemx_middlewares_path) \\\n    $(touchgfx_middlewares_path) \\\n    $(touchgfx_generator_components) \\\n    LIBJPEG/Target \\\n    $(libjpeg_path)/include \\\n    LIBJPEG/App\n")),(0,o.kt)("p",null,"LIBJPEG source paths must be defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{4-5}","{4-5}":!0}),"c_source_files := $(call find, $(source_paths),*.c) $(os_source_files) $(board_c_files)\nsource_files += $(board_cpp_files)\n\nlibjpeg_source_path = Middlewares/Third_Party/LibJPEG/source\n")),(0,o.kt)("p",null,"Next all the LIBJPEG source files must be added to board_c_files:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{10-37}","{10-37}":!0}),"board_c_files := \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_bus.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_qspi.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_sdram.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_ts.c \\\n    $(Drivers_path)/BSP/Components/ft5336/ft5336.c \\\n    $(Drivers_path)/BSP/Components/ft5336/ft5336_reg.c \\\n    $(Drivers_path)/BSP/Components/mt25tl01g/mt25tl01g.c \\\n    $(Drivers_path)/BSP/Components/mt48lc4m32b2/mt48lc4m32b2.c \\\n    $(libjpeg_source_path)/jaricom.c \\\n    $(libjpeg_source_path)/jcomapi.c \\\n    $(libjpeg_source_path)/jdapimin.c \\\n    $(libjpeg_source_path)/jdapistd.c \\\n    $(libjpeg_source_path)/jdarith.c \\\n    $(libjpeg_source_path)/jdatasrc.c \\\n    $(libjpeg_source_path)/jdcoefct.c \\\n    $(libjpeg_source_path)/jdcolor.c \\\n    $(libjpeg_source_path)/jddctmgr.c \\\n    $(libjpeg_source_path)/jdhuff.c \\\n    $(libjpeg_source_path)/jdinput.c \\\n    $(libjpeg_source_path)/jdmainct.c \\\n    $(libjpeg_source_path)/jdmarker.c \\\n    $(libjpeg_source_path)/jdmaster.c \\\n    $(libjpeg_source_path)/jdmerge.c \\\n    $(libjpeg_source_path)/jdpostct.c \\\n    $(libjpeg_source_path)/jdsample.c \\\n    $(libjpeg_source_path)/jdtrans.c \\\n    $(libjpeg_source_path)/jerror.c \\\n    $(libjpeg_source_path)/jidctflt.c \\\n    $(libjpeg_source_path)/jidctfst.c \\\n    $(libjpeg_source_path)/jidctint.c \\\n    $(libjpeg_source_path)/jmemmgr.c \\\n    $(libjpeg_source_path)/jmemnobs.c \\\n    $(libjpeg_source_path)/jquant1.c \\\n    $(libjpeg_source_path)/jquant2.c \\\n    $(libjpeg_source_path)/jutils.c \\\n    LIBJPEG/App/libjpeg.c\n")),(0,o.kt)("p",null,"The LIBJPEG source files are then added to the existing object files the same way it is done with the rest of the middleware source files:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{6}","{6}":!0}),"# Start converting paths\nobject_files := $(object_files:$(touchgfx_path)/%.cpp=$(object_output_path)/touchgfx/%.o)\nobject_files := $(object_files:%.cpp=$(object_output_path)/%.o)\nobject_files := $(object_files:$(touchgfx_middlewares_path)/%.c=$(object_output_path)/$(touchgfx_middlewares_path)/%.o)\nobject_files := $(object_files:$(cubemx_middlewares_path)/%.c=$(object_output_path)/$(cubemx_middlewares_path)/%.o)\nobject_files := $(object_files:$(libjpeg_source_path)/%.c=$(object_output_path)/$(libjpeg_source_path)/%.o)\nobject_files := $(object_files:$(Drivers_path)/%.c=$(object_output_path)/Drivers/%.o)\nobject_files := $(object_files:%.c=$(object_output_path)/%.o)\n")),(0,o.kt)("h3",f({},{id:"hardware-changes"}),"Hardware changes"),(0,o.kt)("p",null,"Add all the JPEG paths to the include paths:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{9}","{9}":!0}),"include_paths := $(library_includes) \\\n    $(foreach comp, $(all_components), $(comp)/include) \\\n    $(foreach comp, $(cubemx_components), $(comp)/Inc) \\\n    $(foreach comp, $(touchgfx_generator_components), $(comp)/generated) \\\n    $(framework_includes) \\\n    $(cubemx_middlewares_path) \\\n    $(touchgfx_middlewares_path) \\\n    $(touchgfx_generator_components) \\\n    Utilities/JPEG\n")),(0,o.kt)("p",null,"Next all the JPEG source files must be added to board_c_files:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-make",metastring:"{10}","{10}":!0}),"board_c_files := \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_bus.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_qspi.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_sdram.c \\\n    $(Drivers_path)/BSP/STM32H750B-DK/stm32h750b_discovery_ts.c \\\n    $(Drivers_path)/BSP/Components/ft5336/ft5336.c \\\n    $(Drivers_path)/BSP/Components/ft5336/ft5336_reg.c \\\n    $(Drivers_path)/BSP/Components/mt25tl01g/mt25tl01g.c \\\n    $(Drivers_path)/BSP/Components/mt48lc4m32b2/mt48lc4m32b2.c \\\n    Utilities/JPEG/jpeg_utils.c\n")))}w.isMDXComponent=!0}}]);