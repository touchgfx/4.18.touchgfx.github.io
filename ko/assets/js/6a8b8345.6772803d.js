(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1184],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44035:function(e,t,r){"use strict";var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return a},Z:function(){return i}});var n=r(11368),o=r(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},47331:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return g},default:function(){return v}});var n=r(3905),o=r(44035),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const d={id:"scenarios-spi",title:"SPI"},h=void 0,m={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-spi",id:"development/touchgfx-hal-development/scenarios/scenarios-spi",isDocsHomePage:!1,title:"SPI",description:'The following scenario shows, generally, the steps involved in creating a TouchGFX driver when selecting "Custom" display interface in the TouchGFX generator using SPI. The steps involved are identical to that of other display interfaces where the MCU lacks an embedded display controller.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-spi.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-spi",permalink:"/4.18/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-spi",tags:[],version:"current",frontMatter:{id:"scenarios-spi",title:"SPI"}},g=[{value:"Transfering the framebuffer",id:"transfering-the-framebuffer",children:[],level:2},{value:"Returning from flushFrameBuffer",id:"returning-from-flushframebuffer",children:[],level:2}],y={toc:g};function v(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},y),p),i(t,c({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,'The following scenario shows, generally, the steps involved in creating a TouchGFX driver when selecting "Custom" display interface in the TouchGFX generator using SPI. The steps involved are identical to that of other display interfaces where the MCU lacks an embedded display controller.'),(0,n.kt)("p",null,'Once the SPI peripheral is configured in STM32CubeMX the TouchGFX Generator can be used to generate a HAL, using a "custom" display interface, that allows developers to transfer the updated parts of the framebuffer to a connected display using a proprietary driver that developers write themselves. Figure X shows a TouchGFX Generator configuration in which selecting Custom display interface will allow the generated code to support the transfer of the updated parts of the framebuffer to the display.'),(0,n.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/custom-interface.png",noShadow:!0,mdxType:"Figure"},"Project activity"),(0,n.kt)("p",null,"Generally, for displays with embedded GRAM such as 8080 or SPI displays, the driver is structured as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Based on area of the framebuffer to be redrawn, move the "display cursor" to a place in GRAM that matches this.'),(0,n.kt)("li",{parentName:"ol"},"Prepare to write incoming pixel data to GRAM."),(0,n.kt)("li",{parentName:"ol"},"Send pixel data.")),(0,n.kt)("h2",f({},{id:"transfering-the-framebuffer"}),"Transfering the framebuffer"),(0,n.kt)("p",null,"When an area of the framebuffer has been updated, the TouchGFX Engine will call ",(0,n.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer"),"."),(0,n.kt)("p",null,"React to signal (S?) from TouchGFX Engine."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)\n{\n    /* Set Cursor */\n    __ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);\n\n    /* Prepare to write to LCD RAM */\n    ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);\n\n    /* Send Pixels */\n    this->copyFrameBufferBlockToLCD(rect);\n}\n")),(0,n.kt)("p",null,"The following function ",(0,n.kt)("inlineCode",{parentName:"p"},"__ST7789H2_SetDisplayWindow")," sets the ",(0,n.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"y"),' coordinates for the virtual "cursor" in GRAM by writing to specific registers, which is usual for displays using GRAM.'),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-c"}),'extern "C"\nvoid __ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)\n{\n    uint8_t   parameter[4];\n\n    /* CASET: Column Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Xpos;\n    parameter[2] = 0x00;\n    parameter[3] = Xpos + Width - 1;\n    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);\n\n    /* RASET: Row Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Ypos;\n    parameter[2] = 0x00;\n    parameter[3] = Ypos + Height - 1;\n    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);\n}\n')),(0,n.kt)("p",null,"The following function ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::copyFrameBufferBlockToLCD")," is a private function that sends one line of the updated area (",(0,n.kt)("inlineCode",{parentName:"p"},"Rect"),") at a time, ensuring to progress the framebuffer pointer accordingly."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect rect)\n{\n    __IO uint16_t* ptr;\n    uint32_t height;\n\n    // Use default implementation (CPU copy!).\n    // This can be accelerated using regular DMA hardware\n    for (height = 0; height < rect.height ; height++)\n    {\n        ptr = getClientFrameBuffer() + rect.x + (height + rect.y)  * BSP_LCD_GetXSize();\n        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);\n    }\n}\n")),(0,n.kt)("h2",f({},{id:"returning-from-flushframebuffer"}),"Returning from flushFrameBuffer"),(0,n.kt)("p",null,"Once the function returns, TouchGFX Engine returns to its. If developers desire to use DMA to perform these transfers, then they must ensure that ",(0,n.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)")," does not return by waiting on a semaphore that is signaled by a DMA Completed interrupt."))}v.isMDXComponent=!0}}]);