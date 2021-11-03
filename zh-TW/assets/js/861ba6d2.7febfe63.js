"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[974],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),h=s(n),u=r,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||i;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70814:function(e,t,n){var o=n(67294),r=n(88678);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class a extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}t.Z=a},22425:function(e,t,n){var o=n(67294);class r extends o.Component{render(){return o.createElement("div",{class:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var o=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,r.Z)(e.imageSource);return t?o.createElement("div",{class:"figure noshadow"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:i,src:a})),o.createElement("p",null,e.children)):o.createElement("div",{class:"figure"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:i,src:a})),o.createElement("p",null,e.children))}},88678:function(e,t,n){var o=n(67294);class r extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{class:e},o.createElement("div",{class:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},93054:function(e,t,n){var o=n(67294),r=n(88678);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=a},37793:function(e,t,n){var o=n(67294),r=n(88678);const i=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends o.Component{render(){return o.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=a},35096:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var o=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,o)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},54976:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return w},metadata:function(){return b},toc:function(){return k},default:function(){return y}});var o=n(3905),r=n(44035),i=n(93054),a=n(37793),d=n(22425),c=n(70814),s=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&g(e,n,t[n]);if(h)for(var n of h(t))m.call(t,n)&&g(e,n,t[n]);return e};const v={id:"scenarios-video-decoding",title:"Video Decoding"},w=void 0,b={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-video-decoding",id:"development/touchgfx-hal-development/scenarios/scenarios-video-decoding",isDocsHomePage:!1,title:"Video Decoding",description:"This section shows how to configure the TouchGFX Generator to generate a TouchGFX HAL that has video decoding capabilities.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-video-decoding.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",permalink:"/4.18/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding",tags:[],version:"current",frontMatter:{id:"scenarios-video-decoding",title:"Video Decoding"},sidebar:"docs",previous:{title:"\u5f71\u50cf\u7de9\u885d\u5340\u7b56\u7565",permalink:"/4.18/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"},next:{title:"UI\u958b\u767c\u7c21\u4ecb",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-development-introduction"}},k=[{value:"Software Decoding",id:"software-decoding",children:[{value:"RTOS Support",id:"rtos-support",children:[],level:3},{value:"Video Data",id:"video-data",children:[],level:3}],level:2},{value:"Hardware Decoding",id:"hardware-decoding",children:[{value:"RTOS Support",id:"rtos-support-1",children:[],level:3},{value:"F769-DISCO",id:"f769-disco",children:[],level:3},{value:"H750-DISCO",id:"h750-disco",children:[],level:3}],level:2},{value:"<code>FileReader</code> interface",id:"filereader-interface",children:[],level:2}],T={toc:k};function y(e){var t,n=e,{components:s}=n,g=((e,t)=>{var n={};for(var o in e)u.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&h)for(var o of h(e))t.indexOf(o)<0&&m.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=f(f({},T),g),l(t,p({components:s,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"This section shows how to configure the ",(0,o.kt)("a",f({parentName:"p"},{href:"../touchgfx-generator#video-decoding"}),"TouchGFX Generator")," to generate a TouchGFX HAL that has video decoding capabilities."),(0,o.kt)("p",null,"The following scenario details how to enable TouchGFX HAL to support video decoding through either software (LibJPEG) or hardware (JPEG). It covers both F7 and H7 because the CubeMX configuration to support Hardware (JPEG) decoding is slightly different from the F7."),(0,o.kt)("p",null,"Generally, the LibJPEG and JPEG configurations can be found in CubeMX in the Middleware and Multimedia catagories:"),(0,o.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/cubemx-jpeg-configuration.png",mdxType:"Figure"},"Single framebuffer, by address"),(0,o.kt)("p",null,"Before reading this scenario, please read the documentation on using ",(0,o.kt)("a",f({parentName:"p"},{href:"../../ui-development/touchgfx-engine-features/video"}),"MJPEG Video")," in TouchGFX and the documentation on the ",(0,o.kt)("a",f({parentName:"p"},{href:"../../ui-development/ui-components/miscellaneous/video"}),"Video widget")," itself."),(0,o.kt)("p",null,"Be sure to read all sections in this article before proceeding."),(0,o.kt)(a.Z,{mdxType:"Tip"},"The latest version of the H750-DK, F769-DISCO and F746G-DISCO TouchGFX Board Setups (TBS) support both Software and JPEG hardware decoding through their CubeMX configurations."),(0,o.kt)("h2",f({},{id:"software-decoding"}),"Software Decoding"),(0,o.kt)("p",null,"The software decoding solution requires that the LibJPEG middleware is enabled from CubeMX, as specified in ",(0,o.kt)("a",f({parentName:"p"},{href:"../touchgfx-generator#video-decoding"}),"TouchGFX Generator User Guide"),". Software decoding setup is identical for all LibJPEG capable MCUs (e.g. STM32F4, STM32F7, STM32H7)."),(0,o.kt)("p",null,"The TouchGFX Software Decoder expects the data decoded by LibJPEG to have BGR pixel ordering. If this setting is left as RGB, R and B color components will be swapped in your application. Furthermore, the size of each pixel should be 3 bytes (4 bytes means the video is encoded in an XRGB format)."),(0,o.kt)(c.Z,{mdxType:"Caution"},"The RGB_ORDERING setting must be configured as BGR, and the pixel size must be 3 (24-bit)."),(0,o.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/libjpeg-configuration.png",width:"700",mdxType:"Figure"},"LibJPEG Configuration"),(0,o.kt)("p",null,"Once LibJPEG is enabled from CubeMX, Software Decoding can now be enabled from TouchGFX Generator, as described in the ",(0,o.kt)("a",f({parentName:"p"},{href:"../touchgfx-generator#video-decoding"}),"TouchGFX Generator User Guide"),"."),(0,o.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/generator-video-decoding-software.png",mdxType:"Figure"},"TouchGFX Generator: Video Decoding"),(0,o.kt)("h3",f({},{id:"rtos-support"}),"RTOS Support"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",f({parentName:"p"},{href:"../touchgfx-generator#video-decoding"}),"TouchGFX Generator User Guide")," mentions that ",(0,o.kt)("em",{parentName:"p"},"Single-")," and ",(0,o.kt)("em",{parentName:"p"},"Double buffer")," decoding strategies require a CMSIS compliant RTOS, such as FreeRTOS. TouchGFX Generator generates an entry point function ",(0,o.kt)("inlineCode",{parentName:"p"},"videoTaskFunc")," that must be associated with a Video decoding task. CubeMX can generate this configuration by defining the task and entry point function in the ",(0,o.kt)("em",{parentName:"p"},"Tasks and queues")," tab of the FreeRTOS Middleware configuration."),(0,o.kt)("p",null,"The video task stack size (defined in words for CMSIS V2) and RTOS heap size are two important factors, the latter because LibJPEG, for software decoding, uses dynamic memory allocation. The FreeRTOS Heap should be large enough for your general application + ",(0,o.kt)("inlineCode",{parentName:"p"},"0xA000"),"."),(0,o.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/freertos-video-task.png",mdxType:"Figure"},"FreeRTOS Task Configuration"),(0,o.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/freertos-video-decoding-heap-size.png",mdxType:"Figure"},"FreeRTOS Heap Size Configuration"),(0,o.kt)("p",null,"Based on the above configuration, CubeMX generates the following code:"),(0,o.kt)(d.Z,{mdxType:"CodeHeader"},"main.c"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'/* Definitions for VideoTask */\nosThreadId_t VideoTaskHandle;\nconst osThreadAttr_t VideoTask_attributes = {\n  .name = "VideoTask",\n  .stack_size = 1000 * 4,\n  .priority = (osPriority_t) osPriorityLow,\n};\n\nvoid main()\n{\n    ...\n    /* creation of VideoTask */\n    VideoTaskHandle = osThreadNew(videoTaskFunc, NULL, &VideoTask_attributes);\n    ...\n}\n')),(0,o.kt)(d.Z,{mdxType:"CodeHeader"},"FreeRTOSConfig.h"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#define configTOTAL_HEAP_SIZE                    ((size_t)75000)\n")),(0,o.kt)("p",null,"This concludes the TouchGFX HAL configuration for Software Decoding. After Generating code from CubeMX the application will be able to decode videos using LibJPEG when using the ",(0,o.kt)("a",f({parentName:"p"},{href:"../../ui-development/ui-components/miscellaneous/video"}),"Video widget")," from the designer."),(0,o.kt)("h3",f({},{id:"video-data"}),"Video Data"),(0,o.kt)(c.Z,{mdxType:"Caution"},"The current decoding solution using CubeMX, TouchGFX Generator and the Video widget from TouchGFX Designer will currently only work for ST boards because the video data is linked into the application at a specific address in memory mapped flash that is already known."),(0,o.kt)("p",null,"The below snippet from an EWARM project shows the extra options that are created by TouchGFX Designer and how it places the data in ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtFlashSection")," which is defined inside the linker script for all TouchGFX Board Packages. This will not work for non-memory-mapped flash or projects that don't define this section."),(0,o.kt)(d.Z,{mdxType:"CodeHeader"},"ewarm_project.ewp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"        <option>\n          <name>IlinkExtraOptions</name>\n          <state>--image_input $PROJ_DIR$\\..\\TouchGFX\\generated\\videos\\bin\\washerdryer.bin,video_washerdryer_bin_start,ExtFlashSection,4</state>\n          <state>--keep video_washerdryer_bin_start</state>\n        </option>\n")),(0,o.kt)("p",null,"For projects with video data in non-memory mapped memory, please read the section ",(0,o.kt)("inlineCode",{parentName:"p"},"FileReader")," in this article."),(0,o.kt)("h2",f({},{id:"hardware-decoding"}),"Hardware Decoding"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",f({parentName:"p"},{href:"../touchgfx-generator#video-decoding"}),"TouchGFX Generator User Guide")," mentions that the JPEG IP must be enabled in CubeMX to enable Hardware decoding. Software- and Hardware decoding share several traits and the differences will be outlined in this section."),(0,o.kt)("h3",f({},{id:"rtos-support-1"}),"RTOS Support"),(0,o.kt)("p",null,"FreeRTOS stack size can be substantially lower than for Software decoding because there is no software stack which dynamically allocates memory. Keep the size close to what it would be to accommodate the other tasks in the project."),(0,o.kt)("h3",f({},{id:"f769-disco"}),"F769-DISCO"),(0,o.kt)("p",null,"The JPEG configuration for JPEG capable F7 series, e.g. F769, differs slightly from the H7 line. The ",(0,o.kt)("inlineCode",{parentName:"p"},"RGB_FORMAT")," must respect the format of the TouchGFX Framebuffer, ",(0,o.kt)("inlineCode",{parentName:"p"},"JPEG_RGB565")," in the example below."),(0,o.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/jpeg-hw-configuration.png",mdxType:"Figure"},"JPEG Parameter Settings"),(0,o.kt)("p",null,"Use DMA to transfer data to (memory-to-peripheral) and from (peripheral-to-memory) the JPEG peripheral through the ",(0,o.kt)("em",{parentName:"p"},"DMA Settings"),". ",(0,o.kt)("em",{parentName:"p"},"Adding")," a DMA request for ",(0,o.kt)("inlineCode",{parentName:"p"},"IN")," and one for ",(0,o.kt)("inlineCode",{parentName:"p"},"OUT")," will set up the direction parameters automatically."),(0,o.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/jpeg-hw-dma-configuration1.png",mdxType:"Figure"},"JPEG DMA Settings"),(0,o.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/jpeg-hw-dma-configuration2.png",mdxType:"Figure"},"JPEG DMA Settings"),(0,o.kt)("p",null,"This concludes the TouchGFX HAL configuration for Hardware Decoding on the JPEG capable F7s (e.g. F769). After Generating code from CubeMX the application will be able to decode videos using the JPEG peripheral when using the Video widget from the designer."),(0,o.kt)(c.Z,{mdxType:"Caution"},"The RGB_FORMAT of the JPEG peripheral configuration must respect the format of the TouchGFX Framebuffer"),(0,o.kt)("h3",f({},{id:"h750-disco"}),"H750-DISCO"),(0,o.kt)("p",null,"The only thing that seperates Hardware decoding (JPEG capable) on e.g. an H750 from an F769 is the way DMA transfers are configured in CubeMX. Not only is the UI different, but the DMA concepts are as well."),(0,o.kt)("p",null,"For the H750, the JPEG peripheral can only be configured to use the MDMA peripheral rather than the regular DMA peripherals. Add an MDMA configuration for both input- and output FIFO Threshold signals as shown in the images below."),(0,o.kt)(i.Z,{mdxType:"Note"},"MDMA is a much higher performance DMA engine compared to DMA1/DMA2"),(0,o.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/mdma-input-fifo-threshold.png",mdxType:"Figure"},"JPEG DMA Settings"),(0,o.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/mdma-output-fifo-threshold.png",mdxType:"Figure"},"JPEG DMA Settings"),(0,o.kt)(c.Z,{mdxType:"Caution"},"For H7, *User Code* must be added to correctly configure the DMA requests for data in/out."),(0,o.kt)("p",null,"When generating code for e.g. an H750 through CubeMX, unfortunately, the code to configure the MDMA  (defined above) to the MDMA handlers is missing and developers must add the highlighted user code, manually."),(0,o.kt)(d.Z,{mdxType:"CodeHeader"},"Core\\Src\\stm32h7xx_hal_msp.c"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{6-7}","{6-7}":!0}),"void HAL_JPEG_MspInit(JPEG_HandleTypeDef* hjpeg)\n{\n  if(hjpeg->Instance==JPEG)\n  {\n  /* USER CODE BEGIN JPEG_MspInit 0 */\n     hmdma_jpeg_infifo_th.Init.Request = MDMA_REQUEST_JPEG_INFIFO_TH;\n     hmdma_jpeg_outfifo_th.Init.Request = MDMA_REQUEST_JPEG_OUTFIFO_TH;\n  /* USER CODE END JPEG_MspInit 0 */\n   ...\n\n")),(0,o.kt)("h2",f({},{id:"filereader-interface"}),(0,o.kt)("inlineCode",{parentName:"h2"},"FileReader")," interface"),(0,o.kt)("p",null,"When storing MJPEG videos on non-memory-mapped memories developers can specify an implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx::VideoDataReader")," that the TouchGFX Video Controllers can use to hand data for decoding to the configured decoder (Software/Hardware). The below is a simple example of such an interface that copies video data from one buffer to another."),(0,o.kt)(d.Z,{mdxType:"CodeHeader"},"VideoView.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"class MyReader : public touchgfx::VideoDataReader\n{\npublic:\n    MyReader() : position(0) { }\n    virtual uint32_t getDataLength() { return video_len; }\n    virtual void seek(uint32_t pos) { position = pos; }\n    virtual bool readData(void* dst, uint32_t bytes)\n    {\n        memcpy(dst, &video_data[position], bytes);\n        position += bytes;\n        return true;\n    }\n    private:\n        uint32_t position;\n} myReader;\n")),(0,o.kt)("p",null,"Instead of pointing a ",(0,o.kt)("inlineCode",{parentName:"p"},"Video")," widget to the start of the video in mapped memory, developers can configure the widget to use the data reader instead:"),(0,o.kt)(d.Z,{mdxType:"CodeHeader"},"VideoView.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"video.setVideoData(myReader);\n")))}y.isMDXComponent=!0}}]);