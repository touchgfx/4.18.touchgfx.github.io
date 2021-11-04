"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2028],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},h),{},{components:n})):r.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=i},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},89997:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return f},metadata:function(){return v},toc:function(){return T},default:function(){return y}});var r=n(3905),a=n(44035),o=n(93054),i=n(70814),l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(h)for(var n of h(t))u.call(t,n)&&d(e,n,t[n]);return e};const g={id:"scenarios-ltdc-parallel-rgb",title:"LTDC/Parallel RGB"},f=void 0,v={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",id:"development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",isDocsHomePage:!1,title:"LTDC/Parallel RGB",description:"For MCUs with a TFT controller (e.g. STM32F429, STM32F746, STM32H7), the TouchGFX Generator can generate the part of the HAL that configures the LTDC to transfer pixels from the framebuffer memory to the display.",source:"@site/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",permalink:"/4.18/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",tags:[],version:"current",frontMatter:{id:"scenarios-ltdc-parallel-rgb",title:"LTDC/Parallel RGB"},sidebar:"docs",previous:{title:"Generator User Guide",permalink:"/4.18/ja/docs/development/touchgfx-hal-development/touchgfx-generator"},next:{title:"FMC and SPI Display Interface",permalink:"/4.18/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"}},T=[{value:"Display Interface",id:"display-interface",children:[],level:3},{value:"Reading settings from STM32CubeMX",id:"reading-settings-from-stm32cubemx",children:[],level:2},{value:"TouchGFX Driver / VSYNC Signal",id:"touchgfx-driver--vsync-signal",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],b={toc:T};function y(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),d),c(t,s({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"For MCUs with a TFT controller (e.g. STM32F429, STM32F746, STM32H7), the ",(0,r.kt)("em",{parentName:"p"},"TouchGFX Generator")," can generate the part of the HAL that configures the LTDC to transfer pixels from the framebuffer memory to the display.\nThe generated code both starts the correct framebuffer transfer and unblocks the TouchGFX Engine main loop by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()")," once a VSYNC interrupt is raised by the LTDC."),(0,r.kt)("h3",m({},{id:"display-interface"}),"Display Interface"),(0,r.kt)("p",null,'As opposed to a "Custom" display interface, where the developer must implement the whole driver by hand, for LTDC the TouchGFX Generator can generate all the code necessary for the TouchGFX HAL to support an LTDC configuration.'),(0,r.kt)("p",null,'For "Parallel RGB (LTDC)" to be a selectable option through the TouchGFX Generator the ',(0,r.kt)("em",{parentName:"p"},"LTDC")," must be enabled from the ",(0,r.kt)("em",{parentName:"p"},"Multimedia")," group in the STM32CubeMX category list."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-modes.png",mdxType:"Figure"}),(0,r.kt)("p",null,"Once LTDC is enabled, the ",(0,r.kt)("em",{parentName:"p"},"Parallel RGB (LTDC)")," option\xa0becomes available through the ",(0,r.kt)("em",{parentName:"p"},"Display")," section of the TouchGFX Generator."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/display-if-options.png",mdxType:"Figure"}),(0,r.kt)("p",null,"Even after LTDC is enabled through STM32CubeMX, some work is required in order to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure LTDC (GPIO and timings) to match connected display specifications"),(0,r.kt)("li",{parentName:"ol"},"Configure LTDC to match desired TouchGFX application specifications.")),(0,r.kt)("p",null,"The TouchGFX Generator can read various configurations from STM32CubeMX and provide a list of warnings, recommendations or errors that are called ",(0,r.kt)("em",{parentName:"p"},"Dependencies"),". The image below shows the list of dependencies present when initially enabling LTDC in CubeMX for any MCU (in this example we used an F429):"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/ltdc-dependencies.png",mdxType:"Figure"}),(0,r.kt)(o.Z,{mdxType:"Note"},"LTDC recommendations, warnings and errors will be visible in the TouchGFX Generator interface as soon as LTDC is enabled through STM32CubeMX."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Dependency"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Number of layers"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"TouchGFX is only capable of utilizing a single layer. While TouchGFX applications can work with two layers enabled, this is a warning to the user that the LTDC is potentially misconfigured. Change the number of layers in the LTDC block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Window position"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"By default, the Horizontal and Vertical window positions of the LTDC layer are 0. The window Horizontal and Vertical stop must be set equal to the displays dimensions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Alpha Constant is 0"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"By default, the alpha constant of LTDC layers is 0. This should be > 0 and preferably 255 unless there is an intent to have a global alpha at all times in an application.")))),(0,r.kt)("p",null,"Remember to actually select the Parallel RGB (LTDC) display interface\nafter enabling the LTDC peripheral in the Multimedia section."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dependencies.png",mdxType:"Figure"}),(0,r.kt)("p",null,"The following image shows the LTDC configuration that satisfies the conditions of the warnings, causing the Dependencies group to disappear from the TouchGFX Generator interface."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config.png",mdxType:"Figure"}),(0,r.kt)("h2",m({},{id:"reading-settings-from-stm32cubemx"}),"Reading settings from STM32CubeMX"),(0,r.kt)("p",null,"By selecting ",(0,r.kt)("em",{parentName:"p"},"Parallel RGB (LTDC)")," as the display interface through TouchGFX Generator, the ",(0,r.kt)("em",{parentName:"p"},"width")," and ",(0,r.kt)("em",{parentName:"p"},"height")," of the framebuffer is inherited from the LTDC configuration ",(0,r.kt)("em",{parentName:"p"},"horizontal start/stop")," and ",(0,r.kt)("em",{parentName:"p"},"vertical start/stop"),"."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-window-position.png",mdxType:"Figure"}),(0,r.kt)("p",null,"Defining the dimensions of Layer ",(0,r.kt)("em",{parentName:"p"},"0")," according to the display and application dimensions a new entry in the ",(0,r.kt)("em",{parentName:"p"},"Dependency")," window appears."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dependency-ltdc-image.png",mdxType:"Figure"}),(0,r.kt)("p",null,"Ensuring that Framebuffer ",(0,r.kt)("em",{parentName:"p"},"Image Width")," and ",(0,r.kt)("em",{parentName:"p"},"Image Height")," match the size of the window, which is usually desired, will satisfy the warning."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config-fixed.png",mdxType:"Figure"}),(0,r.kt)(i.Z,{mdxType:"Caution"},"TouchGFX Generator inherits the ",(0,r.kt)("b",null,"Width")," and ",(0,r.kt)("b",null,"Height")," values from the LTDC configuration, if LTDC is enabled. However, ",(0,r.kt)("b",null,"Width")," and ",(0,r.kt)("b",null,"Height")," can still be modified from the TouchGFX Generator interface. Changing these values can lead to a configuration mismatch if they do mot respect the Window LTDC Layer configuration."),(0,r.kt)("h2",m({},{id:"touchgfx-driver--vsync-signal"}),"TouchGFX Driver / VSYNC Signal"),(0,r.kt)("p",null,"Once ",(0,r.kt)("em",{parentName:"p"},"Parallel RGB (LTDC)")," is selected as Display Interface, developers gain access to the ",(0,r.kt)("em",{parentName:"p"},"LTDC")," Application Tick Driver or TouchGFX Driver."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/ltdc-application-tick-source.png",width:"500",mdxType:"Figure"}),(0,r.kt)("p",null,"The following code is the interrupt handler (STM32F7) for the LTDC interrupt generated according to LTDC configuration. The generated handler automatically unblocks the TouchGFX Engine main loop."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),'extern "C"\nirq void LTDC_IRQHandler(void)\n{\n    if (LTDC->ISR & 1)\n    {\n        LTDC->ICR = 1;\n        if (LTDC->LIPCR == (LTDC->AWCR & 0x7FF) - 1)\n        {\n            //entering active area\n            OSWrappers::signalVSync();\n        }\n    }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Note"},"For the LTDC driver to work, users must enable the LTDC global interrupt through the LTDC NVIC settings or through Global NVIC settings, and also enable generation of handler code."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/nvic-global-interrupt-enable.png",mdxType:"Figure"}),(0,r.kt)("h2",m({},{id:"conclusion"}),"Conclusion"),(0,r.kt)("p",null,"Enabling the ",(0,r.kt)("em",{parentName:"p"},"Parallel RGB (LTDC)")," display interface option through TouchGFX Generator allows all required HAL code to be generated."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets the width, height and pixel format of the TouchGFX application in accordance with the STM32CubeMX LTDC configuration. The LTDC layer ",(0,r.kt)("em",{parentName:"li"},"width")," and ",(0,r.kt)("em",{parentName:"li"},"height")," impact the size of the canvas in TouchGFX Designer and the LTDC Pixel Format impacts the required TouchGFX framebuffer driver and also the format for generated assets."),(0,r.kt)("li",{parentName:"ul"},"Allow the LTDC application tick source to be selected which generates a handler to drive the TouchGFX Engine Main loop. Usually, with LTDC Configurations developers would always use the provided Application Tick Driver.")))}y.isMDXComponent=!0}}]);