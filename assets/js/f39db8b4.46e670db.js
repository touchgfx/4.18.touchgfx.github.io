(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3140],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22425:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){"use strict";var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){"use strict";var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},37793:function(e,t,r){"use strict";var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return o},Z:function(){return i}});var n=r(11368),a=r(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},6911:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return g},contentTitle:function(){return b},metadata:function(){return y},toc:function(){return v},default:function(){return k}});var n=r(3905),a=r(44035),o=r(93054),i=r(37793),l=r(22425),c=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&m(e,r,t[r]);return e};const g={id:"08-hardware-acceleration",title:"8. Hardware acceleration",sidebar_label:"8. Hardware acceleration"},b=void 0,y={unversionedId:"development/board-bring-up/how-to/08-hardware-acceleration",id:"development/board-bring-up/how-to/08-hardware-acceleration",isDocsHomePage:!1,title:"8. Hardware acceleration",description:"Motivation",source:"@site/docs/development/board-bring-up/how-to/08-hardware-acceleration.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/08-hardware-acceleration",permalink:"/4.18/docs/development/board-bring-up/how-to/08-hardware-acceleration",version:"current",sidebarPosition:8,frontMatter:{id:"08-hardware-acceleration",title:"8. Hardware acceleration",sidebar_label:"8. Hardware acceleration"},sidebar:"docs",previous:{title:"7. External flash in block mode",permalink:"/4.18/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"},next:{title:"9. Touch Controller",permalink:"/4.18/docs/development/board-bring-up/how-to/09-touch-controller"}},v=[{value:"Motivation",id:"motivation",children:[]},{value:"Goal",id:"goal",children:[{value:"Verification",id:"verification",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Do",id:"do",children:[{value:"Write to Framebuffer Memory",id:"write-to-framebuffer-memory",children:[]},{value:"Performance is as expected",id:"performance-is-as-expected",children:[]}]}],w={toc:v};function k(e){var t,r=e,{components:c}=r,m=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&h.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},w),m),d(t,s({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("h2",f({},{id:"motivation"}),"Motivation"),(0,n.kt)("p",null,"The Chrom-ART (DMA2D) graphics accelerator is capable of transferring parts of image data from memory and drawing it into or composing it onto the framebuffer.\nChrom-ART can read data from internal or external memory. Similarly it writes to internal or external memory.\nThis can be utilized when doing graphics, and has the possibility of drastically improving the graphical performance and at the same time significantly lowering the MCU usage of your application."),(0,n.kt)("p",null,"Many STM32 controllers contain the Chrom-ART accelerator, but not all. Check your datasheet. DMA2D is the code name for Chrom-ART and is used in the code and documentation."),(0,n.kt)(o.Z,{mdxType:"Note"},"Skip this step if hardware acceleration using Chrom-ART is not relevant for your board bring up."),(0,n.kt)("h2",f({},{id:"goal"}),"Goal"),(0,n.kt)("p",null,"The goal of this step is to enable Chrom-ART and read and write data using it. The goal is ",(0,n.kt)("strong",{parentName:"p"},"not")," to examine the functionality of the Chrom-ART chip, but to verify that memory interfaces are functional from a Chrom-ART perspective."),(0,n.kt)("h3",f({},{id:"verification"}),"Verification"),(0,n.kt)("p",null,"Here are the verification points for this section:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Verification Point"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Rationale"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART is configured"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART can be used for drawing the desired graphics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART can read memory"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART can be used for drawing graphics (M2M)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART can write memory"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART can be used for drawing graphics (M2M and R2M)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART performance"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART yields the desired performance for graphics")))),(0,n.kt)("h2",f({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("p",null,"The following are the prerequisites for this step:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MCU with Chrom-ART.")),(0,n.kt)("h2",f({},{id:"do"}),"Do"),(0,n.kt)("p",null,"The Chrom-ART is configured in STM32CubeMX under the ",(0,n.kt)("em",{parentName:"p"},"Multimedia -> DMA2D")," category.\nActivate DMA2D and configure ",(0,n.kt)("em",{parentName:"p"},"Transfer mode")," and ",(0,n.kt)("em",{parentName:"p"},"Color mode")," according to your display."),(0,n.kt)("p",null,"In the figure below DMA2D is activated and configured for Memory to Memory transfer mode and RGB565 Color Mode. Select the color mode that matches your display."),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-dma2d.png",noShadow:!0,width:"600",mdxType:"Figure"},"Configuring Chrom-ART"),(0,n.kt)("p",null,"The DMA2D global interrupt is important for the syncronization of framebuffer access in a TouchGFX application. Ensure that the global interupt is enabled (NVIC tab) and that code generation for interrupt handlers is enabled (Code Generation tab) in the STM32CubeMX NVIC settings as shown below. The priority is not important at this stage."),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d.png",noShadow:!0,width:"600",mdxType:"Figure"},"Enabling the Chrom-ART interrupt"),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d-codegen.png",noShadow:!0,width:"600",mdxType:"Figure"},"Enabling the Chrom-ART interrupt handler code generation"),(0,n.kt)("h3",f({},{id:"write-to-framebuffer-memory"}),"Write to Framebuffer Memory"),(0,n.kt)("p",null,"Here is an overview of code that fills a specific color in a rectangle in target memory (register to memory). Check STM32Cube Firmware packs for a concrete project for your MCU."),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include "stm32f7xx_hal.h"\n#include "stm32f7xx_hal_dma2d.h"\n...\n\nuint32_t color = 0xF800; //Red in RGB565\n\nhdma2d.Init.Mode = DMA2D_R2M;\nhdma2d.Init.ColorMode = DMA2D_RGB565;\n\nMODIFY_REG(hdma2d.Instance->CR, DMA2D_CR_MODE, DMA2D_R2M);\nMODIFY_REG(hdma2d.Instance->OPFCCR, DMA2D_OPFCCR_CM, DMA2D_RGB565);\nMODIFY_REG(hdma2d.Instance->OOR, DMA2D_OOR_LO, displayWidth - rectangleWidth);\n\nhdma2d.LayerCfg[1].InputColorMode = CM_RGB565;\nhdma2d.LayerCfg[1].InputOffset = 0;\n\nHAL_DMA2D_ConfigLayer(&hdma2d, 1);\n\nHAL_DMA2D_Start_IT(&hdma2d, color, (unsigned int)dstPtr, rectangleWidth, rectangleHeight);\n\n')),(0,n.kt)("p",null,"If the Transfer Completed setup is configured correctly in STM32CubeMX, a custom handler can be assigned to handle this event:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"    hdma2d.XferCpltCallback = DMA2D_XferCpltCallback;\n")),(0,n.kt)("p",null,"And the handler can be defined as follows to verify the Transfer Completed interrupt configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'extern "C" {\n    static void DMA2D_XferCpltCallback(DMA2D_HandleTypeDef* handle)\n    {\n        //Ensure that you this callback is called\n    }\n}\n')),(0,n.kt)("p",null,"Memory-to-Memory can be tested by supplying a pointer to memory with pixel data."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"HAL_DMA2D_Start_IT(&hdma2d,\n    (unsigned int)srcPtr,\n    (unsigned int)dstPtr,\n    displayWidth - nrOfPixels);\n\n")),(0,n.kt)("h3",f({},{id:"performance-is-as-expected"}),"Performance is as expected"),(0,n.kt)("p",null,"Compare the performance of the Chrom-ART with the performance results from previous steps of reading and writing memory. It is expected that the code utilizing Chrom-ART will be more performant than the previous CPU read/write operations."),(0,n.kt)(i.Z,{mdxType:"Tip"},"Use the value of the `CCSTEP` clock cycle register to get a more precise measurement of clock cycles spent between breakpoints than the millisecond counting sysTick."))}k.isMDXComponent=!0}}]);