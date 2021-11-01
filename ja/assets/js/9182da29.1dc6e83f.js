(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8728],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(n),f=o,d=h["".concat(l,".").concat(f)]||h[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){"use strict";var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=i},37793:function(e,t,n){"use strict";var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=i},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(11368),o=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},52853:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return v},toc:function(){return k},default:function(){return C}});var r=n(3905),o=n(44035),a=n(93054),i=n(37793),c=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))h.call(t,n)&&f(e,n,t[n]);return e};const m={id:"scenarios-fmc",title:"FMC & SPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9"},g=void 0,v={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-fmc",id:"development/touchgfx-hal-development/scenarios/scenarios-fmc",isDocsHomePage:!1,title:"FMC & SPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9",description:"The following scenario shows, generally, the steps involved in transferring pixels to an LCD connected to either an FMC or through SPI; Two methods that share some elements. \u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8aac\u660e\u3059\u308b\u30b7\u30ca\u30ea\u30aa\u306f\u3001\u4f8b\u3068\u3057\u3066ST7789H2 LCD\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-fmc.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-fmc",permalink:"/4.18/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc",version:"current",frontMatter:{id:"scenarios-fmc",title:"FMC & SPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9"},sidebar:"docs",previous:{title:"LTDC / \u30d1\u30e9\u30ec\u30ebRGB",permalink:"/4.18/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb"},next:{title:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a",permalink:"/4.18/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"}},k=[{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001",id:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001",children:[{value:"FMC",id:"fmc",children:[]}]},{value:"HAL::flushFrameBuffer()\u304b\u3089\u623b\u308b",id:"returning-from-halflushframebuffer",children:[]},{value:"TouchGFX\u30c9\u30e9\u30a4\u30d0 / \u30c6\u30a3\u30a2\u30ea\u30f3\u30b0\u52b9\u679c\u4fe1\u53f7",id:"touchgfx-driver--tearing-effect-signal",children:[]},{value:"\u7d50\u8ad6",id:"conclusion",children:[]}],y=(T="Caution",function(e){return console.warn("Component "+T+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",d({},e))});var T;const b={toc:k};function C(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),f),l(t,s({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The following scenario shows, generally, the steps involved in transferring pixels to an LCD connected to either an FMC or through SPI; Two methods that share some elements. \u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8aac\u660e\u3059\u308b\u30b7\u30ca\u30ea\u30aa\u306f\u3001\u4f8b\u3068\u3057\u3066ST7789H2 LCD\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Once FMC or SPI is configured according to board specifications in STM32CubeMX TouchGFX Generator can be used to generate a TouchGFX HAL allowing developers to write code that transfers updated part of the application framebuffer to a connected display."),(0,r.kt)("p",null,"\u4e0b\u56f3\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066",(0,r.kt)("em",{parentName:"p"},"Custom")," \u304c\u9078\u629e\u3055\u308c\u305f\u3001TouchGFX Generator\u306e\u8a2d\u5b9a\u3067\u3059\u3002 This instructs the TouchGFX Generator that the developer would like to configure and transfer pixels from the framebuffer memory to the display ",(0,r.kt)("strong",{parentName:"p"},"manually")," and generates the handles to accomplish this."),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/custom-interface.png",noShadow:!1,mdxType:"Figure"},"TouchGFX Generator\u306e\u8a2d\u5b9a"),(0,r.kt)(i.Z,{mdxType:"Tip"},"For displays connected through SPI, custom display interface must be selected"),(0,r.kt)("p",null,"Generally, for displays with embedded GRAM, the code written by the user in the generated TouchGFX HAL should perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u518d\u63cf\u753b\u3055\u308c\u308b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u9818\u57df\u306b\u57fa\u3065\u3044\u3066\u3001\u3053\u306e\u9818\u57df\u306b\u5bfe\u5fdc\u3059\u308bGRAM\u5185\u306e\u5834\u6240\u306b\u3001\u300c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30ab\u30fc\u30bd\u30eb\u300d\u304a\u3088\u3073\u300c\u30a2\u30af\u30c6\u30a3\u30d6\uff65\u30a6\u30a3\u30f3\u30c9\u30a6\u300d\u3092\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9001\u3089\u308c\u3066\u304f\u308b\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092GRAM\u306b\u66f8\u304d\u8fbc\u3080\u6e96\u5099\u3092\u6574\u3048\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002")),(0,r.kt)("h2",d({},{id:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001"),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u9818\u57df\u304c\u66f4\u65b0\u3055\u308c\u308b\u3068\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect r)"),"\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 This function can be overridden when developers must implement code to transfer pixels to a display manually, as in the case of SPI and FMC. As we'll see, functions to transfer pixels via the FMC Banks are generated by TouchGFX Generator."),(0,r.kt)(a.Z,{mdxType:"Note"},"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u793a\u3057\u305fST7789H2\u7528\u306e\u30c9\u30e9\u30a4\u30d0\uff65\u30b3\u30fc\u30c9\u306f\u3001\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u30d5\u30a7\u30fc\u30ba\u3067\u958b\u767a\u3055\u308c\u305f\u3082\u306e\u3067\u3042\u308a\u3001\u6a5f\u80fd\u3059\u308c\u3070\u3001\u591a\u304b\u308c\u5c11\u306a\u304b\u308cTouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308bHAL\u30af\u30e9\u30b9\u306b\u30b3\u30d4\u30fc\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("p",null,"\u30c9\u30e9\u30a4\u30d0\u306f\u3001\u30d4\u30af\u30bb\u30eb\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3057\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u30e1\u30e2\u30ea\u66f8\u8fbc\u307f\u4f4d\u7f6e\u3092\u5236\u5fa1\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 Check the datasheet for your display for further details.")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)\n{\n    /* Set Cursor */\n    ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);\n\n    /* Prepare to write to LCD RAM */\n    __ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);\n\n    /* Send Pixels - User defined function */\n    this->copyFrameBufferBlockToLCD(rect);\n}\n")),(0,r.kt)("p",null,"The following function ",(0,r.kt)("inlineCode",{parentName:"p"},"ST7789H2_SetDisplayWindow")," sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),' coordinates for the virtual "cursor" in GRAM by writing to specific registers, which is usual for displays using GRAM.'),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-c"}),'extern "C"\nvoid ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)\n{\n    uint8_t   parameter[4];\n\n    /* CASET: Column Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Xpos;\n    parameter[2] = 0x00;\n    parameter[3] = Xpos + Width - 1;\n    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);\n\n    /* RASET: Row Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Ypos;\n    parameter[2] = 0x00;\n    parameter[3] = Ypos + Height - 1;\n    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);\n}\n')),(0,r.kt)("p",null,"The following function ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::copyFrameBufferBlockToLCD")," is, in this example, a user defined function that sends one line of the updated area (",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),") at a time, ensuring to progress the framebuffer pointer accordingly."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect& rect)\n{\n    __IO uint16_t* ptr;\n    uint32_t height;\n\n    // This can be accelerated using regular DMA hardware\n    for (height = 0; height < rect.height ; height++)\n    {\n        ptr = getClientFrameBuffer() + rect.x + (height + rect.y) * HAL::DISPLAY_WIDTH;\n        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ptr")," \u3092\u624b\u52d5\u3067\u9032\u3081\u308b\u306e\u3067\u306f\u306a\u304f\u3001TouchGFX Generator\u304c\u751f\u6210\u3059\u308b\u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"advanceFrameBufferToRect"),"\u304c\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),"\u306e\u4f4d\u7f6e\u306b\u5f93\u3063\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"ptr")," \u3092\u9032\u3081\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"inline uint8_t* TouchGFXGeneratedHAL::advanceFrameBufferToRect(uint8_t* fbPtr, const touchgfx::Rect& rect) const\n{\n    //       Advance vertically                   Advance horizontally\n    fbPtr += rect.y * lcd().framebufferStride() + rect.x * 2;\n    return fbPtr;\n}\n")),(0,r.kt)("h3",d({},{id:"fmc"}),"FMC"),(0,r.kt)("p",null,"TouchGFX Generator also supports FMC display interface, if at least one FMC Bank is configured correctly. In this case, the code generated by TouchGFX Generator is similar to that of ",(0,r.kt)("em",{parentName:"p"},"Custom")," display interface, except that the function ",(0,r.kt)("inlineCode",{parentName:"p"},"LCD_IO_WriteMultipleData")," is generated to interact with the FMC bank connected to the display. Revisiting the code presented earlier for the function ",(0,r.kt)("inlineCode",{parentName:"p"},"copyFrameBufferBlockToLCD")," you'll see that it uses the generated function."),(0,r.kt)(i.Z,{mdxType:"Tip"},"For both SPI and FMC display interfaces, developers will modify the flushFrameBuffer() function to 1) Set cursor 2) Prepare to write to GRAM 3) transfer the pixels either through a custom SPI display driver or through the generated FMC Bank functions. "),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-c"}),"    __weak void LCD_IO_WriteMultipleData(uint16_t* pData, uint32_t Size)\n    {\n        uint32_t  i;\n\n        for (i = 0; i < Size; i++)\n        {\n            FMC_BANK1_WriteData(pData[i]);\n        }\n    }\n")),(0,r.kt)("p",null,"The following figure shows a valid 16-bit (required) configuration of FMC bank 2 (either can be used)."),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration.png",width:"600",noShadow:!1,mdxType:"Figure"},"FMC Bank Configuration"),(0,r.kt)("p",null,"Once a valid configuration has been met, this bank can be selected in TouchGFX Generator. Verify the start Start address of the FMC Bank Register for your MCU."),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-interface-selection.png",width:"500",noShadow:!1,mdxType:"Figure"},"FMC Interface Selection"),(0,r.kt)("p",null,"TouchGFX Generator validates the configuration of the FMC Banks and reports any issues it may find."),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration-8bit.png",noShadow:!1,mdxType:"Figure"},"FMC Configuration Error"),(0,r.kt)("h2",d({},{id:"returning-from-halflushframebuffer"}),"HAL::flushFrameBuffer()\u304b\u3089\u623b\u308b"),(0,r.kt)("p",null,"\u3053\u306e\u95a2\u6570\u304b\u3089\u623b\u308b\u3068\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306f\u30d5\u30ec\u30fc\u30e0\u306e\u6b8b\u308a\u306e\u90e8\u5206\u306e\u63cf\u753b\u3092\u7d9a\u3051\u307e\u3059\u3002 \u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u306e\u30d4\u30af\u30bb\u30eb\u306e\u8ee2\u9001\u306bDMA\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u958b\u767a\u8005\u306f ",(0,r.kt)("em",{parentName:"p"},"DMA\u5b8c\u4e86")," \u5272\u8fbc\u307f\u4fe1\u53f7\u306b\u3088\u308b\u30bb\u30de\u30d5\u30a9\u3092\u5f85\u6a5f\u3059\u308b\u306a\u3069\u3057\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)")," \u3059\u3050\u306b\u623b\u3089\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u64ec\u4f3c\u30b3\u30fc\u30c9\u306f\u3001DMA\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer()")," \u306e\u69cb\u6210\u4f8b\u3092\u793a\u3057\u305f\u3082\u306e\u3067\u3059\u3002 \u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001FreeRTOS\u306e\u30bb\u30de\u30d5\u30a9",(0,r.kt)("inlineCode",{parentName:"p"},"screen_frame_buffer_sem"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    uint16_t* fb = HAL::lockFrameBuffer();\n\n    //Prepare display: Set cursor, write to display gram as described previously in this scenario\n\n    //Try to take a display semaphore - Always free at this point\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Set up DMA\n    screenDMAEnable();\n\n    // Wait for the DMA transfer to complete\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Unlock framebuffer and give semaphore back\n    HAL::unlockFrameBuffer();\n    xSemaphoreGive(screen_frame_buffer_sem);\n}\n")),(0,r.kt)(y,{mdxType:"Caution"},"The FMC code generated by TouchGFX Generator does not use DMA."),(0,r.kt)("h2",d({},{id:"touchgfx-driver--tearing-effect-signal"}),"TouchGFX\u30c9\u30e9\u30a4\u30d0 / \u30c6\u30a3\u30a2\u30ea\u30f3\u30b0\u52b9\u679c\u4fe1\u53f7"),(0,r.kt)("p",null,"\u4e0a\u8a18TouchGFX Generator\u306e\u8a2d\u5b9a\u3067\u306f\u3001\uff3bApplication Tick Source\uff3d\u3082\uff3bCustom\uff3d\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u3001TFT\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u5185\u8535\u3057\u3066\u3044\u306a\u3044\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3067\u306f\u4e00\u822c\u7684\u306a\u8a2d\u5b9a\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u300c\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\uff65\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8ff0\u3079\u305f\u3088\u3046\u306b\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306f\u3001\u901a\u5e38\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u304b\u3089\u4fe1\u53f7\u304c\u9001\u3089\u308c\u305f\u6642\u70b9\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),"\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u30d6\u30ed\u30c3\u30af\u89e3\u9664\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b7\u30ea\u30a2\u30eb\u307e\u305f\u306f8080\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5099\u3048\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u5834\u5408\u3001\u901a\u5e38\u306f\u5185\u8535\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u30c6\u30a3\u30a2\u30ea\u30f3\u30b0\u52b9\u679c(TE) \u306e\u4fe1\u53f7\u3092\u5468\u671f\u7684\u306b\u751f\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u4fe1\u53f7\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306eGPIO\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002 \u305d\u306e\u5834\u5408\u3001\u901a\u5e38\u306f\u3001GPIO\u306b\u4fe1\u53f7\u304c\u9001\u3089\u308c\u308b\u3068\u5272\u8fbc\u307f\u304c\u767a\u751f\u3059\u308b\u3088\u3046\u306b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u300c\u30c6\u30a3\u30a2\u30ea\u30f3\u30b0\u52b9\u679c\u300d\u5272\u8fbc\u307f\u306b\u3088\u308a\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306e\u30d6\u30ed\u30c3\u30af\u304c\u89e3\u9664\u3055\u308c\u3001\u6b21\u306e\u30d5\u30ec\u30fc\u30e0\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002 Remember to configure the GPIO to input and enable the external interrupt for the pin in STM32CubeMX."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'extern "C"\nvoid TE_Handler(void)\n{\n    ...\n    /* Unblock TouchGFX Engine Main Loop to render next frame */\n    OSWrappers::signalVSync();\n    ...\n}\n\n')),(0,r.kt)("h2",d({},{id:"conclusion"}),"\u7d50\u8ad6"),(0,r.kt)("p",null,"TouchGFX Generator\u3067",(0,r.kt)("em",{parentName:"p"},"Custom"),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304b\u3089\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30d4\u30af\u30bb\u30eb\u3092\u8ee2\u9001\u3059\u308b\u30b3\u30fc\u30c9\u3092\u3001\u958b\u767a\u8005\u304c\u624b\u52d5\u3067\u4f5c\u6210\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX Generator\u306f\u3001\u95a2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::flushFrameBuffer(Rect& rect)"),"\u3092\u751f\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u95a2\u6570\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u9818\u57df\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u5b8c\u4e86\u3059\u308b\u3068TouchGFX\u306b\u3088\u3063\u3066\u81ea\u52d5\u7684\u306b\u547c\u3073\u51fa\u3055\u308c\u3001\u958b\u767a\u8005\u306f\u3001\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3001\u5f71\u97ff\u3092\u53d7\u3051\u308b\u30d4\u30af\u30bb\u30eb\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3001SPI\u3001FMC\u306a\u3069\u306b\u8ee2\u9001\u3067\u304d\u307e\u3059\u3002 Regardless, the following steps must be completed in both cases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u518d\u63cf\u753b\u3055\u308c\u308b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u9818\u57df\u306b\u57fa\u3065\u3044\u3066\u3001\u3053\u306e\u9818\u57df\u306b\u5bfe\u5fdc\u3059\u308bGRAM\u5185\u306e\u5834\u6240\u306b\u3001\u300c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30ab\u30fc\u30bd\u30eb\u300d\u304a\u3088\u3073\u300c\u30a2\u30af\u30c6\u30a3\u30d6\uff65\u30a6\u30a3\u30f3\u30c9\u30a6\u300d\u3092\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9001\u3089\u308c\u3066\u304f\u308b\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092GRAM\u306b\u66f8\u304d\u8fbc\u3080\u6e96\u5099\u3092\u6574\u3048\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002 For FMC display interface, this function is generated for you and can be used inside ",(0,r.kt)("inlineCode",{parentName:"li"},"flushFrameBuffer(Rect& rect)")," (See earlier in this article).")),(0,r.kt)("p",null,"Selecting the ",(0,r.kt)("em",{parentName:"p"},"custom")," or ",(0,r.kt)("em",{parentName:"p"},"FMC")," display interface also requires developers to implement a custom TouchGFX Application Tick driver that signals ",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()")," to unblock the TouchGFX Engine Main loop. \u901a\u5e38\u3001TFT\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u642d\u8f09\u3057\u3066\u3044\u306a\u3044\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3068\u3068\u3082\u306b\u4f7f\u7528\u3055\u308c\u308b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u63a5\u7d9a\u3055\u308c\u308b",(0,r.kt)("em",{parentName:"p"},"\u30c6\u30a3\u30a2\u30ea\u30f3\u30b0\u52b9\u679c"),"\u4fe1\u53f7\u3092\u51fa\u529b\u3067\u304d\u307e\u3059\u3002"))}C.isMDXComponent=!0}}]);