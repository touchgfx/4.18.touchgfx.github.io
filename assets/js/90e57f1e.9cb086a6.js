(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4744],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70814:function(e,t,n){"use strict";var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}t.Z=a},22425:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){"use strict";var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},10093:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return k},toc:function(){return w},default:function(){return v}});var r=n(3905),o=n(70814),i=n(22425),a=n(44035),l=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&h(e,n,t[n]);return e};const f={id:"known-issues",title:"Known Issues"},g=void 0,k={unversionedId:"miscellaneous/known-issues",id:"miscellaneous/known-issues",isDocsHomePage:!1,title:"Known Issues",description:"This article lists the issues that are known to be present in all TouchGFX versions, along with potential workarounds. Also, if there are any specific upgrade steps you need to perform to upgrade TouchGFX to a certain version, these will be mentioned. Note that if your current version is several releases old, you need to perform the upgrade steps for all the releases up to the new one.",source:"@site/docs/miscellaneous/known-issues.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/known-issues",permalink:"/4.18/docs/miscellaneous/known-issues",tags:[],version:"current",frontMatter:{id:"known-issues",title:"Known Issues"},sidebar:"docs",previous:{title:"Getting Help",permalink:"/4.18/docs/miscellaneous/getting-help"},next:{title:"Changelog",permalink:"/4.18/docs/miscellaneous/changelog"}},w=[{value:"Issues with CubeMX 6.1.0 and CubeProgrammer 2.6",id:"issues-with-cubemx-610-and-cubeprogrammer-26",children:[],level:3},{value:"TouchGFX 4.18.0",id:"touchgfx-4180",children:[{value:"New .touchgfx format",id:"new-touchgfx-format",children:[{value:"Default values are not written to .touchgfx",id:"default-values-are-not-written-to-touchgfx",children:[],level:4},{value:"Removed TextEntries block",id:"removed-textentries-block",children:[],level:4}],level:3},{value:"LCD16bpp::fillRect and LCD16bpp::drawGlyph",id:"lcd16bppfillrect-and-lcd16bppdrawglyph",children:[],level:3},{value:"Makefile and xlsx",id:"makefile-and-xlsx",children:[],level:3},{value:"SDL2 linker error on Linux",id:"sdl2-linker-error-on-linux",children:[],level:3}],level:2},{value:"TouchGFX 4.17.0",id:"touchgfx-4170",children:[{value:"Painters no longer support setAlpha()",id:"painters-no-longer-support-setalpha",children:[],level:3},{value:"Using the HAL class",id:"using-the-hal-class",children:[],level:3},{value:"FMC Display Interface in TouchGFX Generator",id:"fmc-display-interface-in-touchgfx-generator",children:[],level:3},{value:"L8 images in 16- 24- or 32bpp configurations",id:"l8-images-in-16--24--or-32bpp-configurations",children:[],level:3}],level:2},{value:"TouchGFX 4.15.0",id:"touchgfx-4150",children:[{value:"MCU support",id:"mcu-support",children:[],level:3}],level:2},{value:"TouchGFX 4.14.0",id:"touchgfx-4140",children:[{value:"ARMCLANG Support",id:"armclang-support",children:[{value:"Workflow",id:"workflow",children:[],level:4}],level:3}],level:2},{value:"TouchGFX 4.13.0",id:"touchgfx-4130",children:[{value:"Bugs",id:"bugs",children:[{value:"Font Converter",id:"font-converter",children:[],level:4}],level:3},{value:"Additional Compiler Support",id:"additional-compiler-support",children:[],level:3},{value:"Backwards Compatibility",id:"backwards-compatibility",children:[{value:"Deprecated Features",id:"deprecated-features",children:[],level:4},{value:"TextureMapper is Disabled by Default",id:"texturemapper-is-disabled-by-default",children:[],level:4},{value:"HAL SDL1 incompatible",id:"hal-sdl1-incompatible",children:[],level:4}],level:3}],level:2},{value:"TouchGFX 4.12.3",id:"touchgfx-4123",children:[{value:"Backwards compatibility",id:"backwards-compatibility-1",children:[{value:"Screen transitions",id:"screen-transitions",children:[],level:4},{value:"Binary Fonts",id:"binary-fonts",children:[],level:4}],level:3}],level:2},{value:"TouchGFX 4.11.0",id:"touchgfx-4110",children:[{value:"Backwards compatibility",id:"backwards-compatibility-2",children:[],level:3}],level:2},{value:"TouchGFX 4.10.0",id:"touchgfx-4100",children:[{value:"Upgrading from 4.9.x",id:"upgrading-from-49x",children:[],level:3},{value:"Backwards compatibility",id:"backwards-compatibility-3",children:[],level:3},{value:"Project Updater Issue",id:"project-updater-issue",children:[],level:3},{value:"TextArea and ChromART (DMA2D)",id:"textarea-and-chromart-dma2d",children:[],level:3}],level:2},{value:"TouchGFX 4.9.0",id:"touchgfx-490",children:[{value:"Upgrading from 4.8.0",id:"upgrading-from-480",children:[],level:3},{value:"Method 1: retain original file structure",id:"method-1-retain-original-file-structure",children:[],level:3},{value:"Method 2: import into new template",id:"method-2-import-into-new-template",children:[],level:3},{value:"Method 3: Manual upgrade without Designer",id:"method-3-manual-upgrade-without-designer",children:[],level:3}],level:2}],b={toc:w};function v(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),h),s(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This article lists the issues that are known to be present in all TouchGFX versions, along with potential workarounds. Also, if there are any specific upgrade steps you need to perform to upgrade TouchGFX to a certain version, these will be mentioned. Note that if your current version is several releases old, you need to perform the upgrade steps for all the releases up to the new one."),(0,r.kt)("h3",m({},{id:"issues-with-cubemx-610-and-cubeprogrammer-26"}),"Issues with CubeMX 6.1.0 and CubeProgrammer 2.6"),(0,r.kt)("p",null,'As of version CubeMX 6.1.0 EWARM projects generated by CubeMX do not work with X-CUBE-TOUCHGFX because of a wrong setting for "C/C++ Compiler" / "Language" option which was changed from "Auto" to "C++" causing compilation errors. This issue will be fixed in CubeMX 6.1.1. In the mean time, changing the option back  to "Auto", manually, will solve compilation issues but will be reverted upon code generation from CubeMX.'),(0,r.kt)("p",null,"A bug in CubeProgrammer 2.6 related to how external loaders (",(0,r.kt)("inlineCode",{parentName:"p"},".stldr"),') are referenced breaks Makefiles for all existing Application Templates (AT) and also prevents the "Run Target" feature in TouchGFX Designer from functioning correctly. This issue also extends to user projects based on current versions of the ATs. Application templates will receive an update to compensate for this bug and will work for both CubeProgrammer 2.5 and 2.6. If you\'ve got a project based on an AT that does not work with CubeProgrammer 2.6, you can make the following modifications to add support. Users must execute ',(0,r.kt)("inlineCode",{parentName:"p"},"STM32CubeProgrammer_CLI.exe")," from within the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," folder when making a reference to an external loader. Generally, speaking:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd")," into the ",(0,r.kt)("inlineCode",{parentName:"li"},"bin")," folder of the STM32CubeProgrammer installation folder."),(0,r.kt)("li",{parentName:"ul"},"Execute the command to program the connected target with a ",(0,r.kt)("em",{parentName:"li"},"relative")," reference to the ",(0,r.kt)("inlineCode",{parentName:"li"},".stldr")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),'@cd "$(st_stm32cube_programmer_bin_path)" && ./$(stm_stm32cube_programmer_exe) -c port=SWD -d $(application_path)/$(binary_output_path)/target.hex -el $(stm32cubeLoader_relative_path) -hardRst\n')),(0,r.kt)("h2",m({},{id:"touchgfx-4180"}),"TouchGFX 4.18.0"),(0,r.kt)("h3",m({},{id:"new-touchgfx-format"}),"New .touchgfx format"),(0,r.kt)("p",null,"From TouchGFX 4.17.0 to TouchGFX 4.18.0 the content of the .touchfgx\nfile has been changed significantly in two major areas. This may\nresult in a vastly updated .touchfgx file, simply by opening and\nsaving a .touchgfx project file using the TouchGFX Designer. The main\nchanges are in the following areas:"),(0,r.kt)("h4",m({},{id:"default-values-are-not-written-to-touchgfx"}),"Default values are not written to .touchgfx"),(0,r.kt)("p",null,"Widget parameters that have a default value e.g. as a box offset of\nX=0, Y=0 or the color black (red=0, green=0, blue=0) were previously\nwritten to the .touchgfx file, but in TouchGFX version 4.18.0 these\nvalues are not written. This may result in slightly smaller .touchgfx\nfiles."),(0,r.kt)("h4",m({},{id:"removed-textentries-block"}),"Removed TextEntries block"),(0,r.kt)("p",null,"SingleUseId's have been renamed to contain random numbers and letters\ninstead of sequential numbers to ease merging of a project with\nseveral active developers, as new single use text id's do not get the\nsame id. Also, the \"TextEntries\" section in the .touchgfx has been\nremoved, which may result in a vastly reduced .touchgfx file size."),(0,r.kt)("h3",m({},{id:"lcd16bppfillrect-and-lcd16bppdrawglyph"}),"LCD16bpp::fillRect and LCD16bpp::drawGlyph"),(0,r.kt)("p",null,"The fillRect and drawGlyph functions in LCD16bpp now pass the full\n24bit color to the DMA, instead of the reduced 16bit (RGB565) color.\nThis may result in wrong colors on the hardware (not the simulator)\nand can be fixed by regenerating the DMA classes from CubeMX."),(0,r.kt)("h3",m({},{id:"makefile-and-xlsx"}),"Makefile and xlsx"),(0,r.kt)("p",null,'TouchGFX 4.18.0 uses a new .xml format for storing texts and\ntranslations instead of the old .xlsx format previously used. This\nmeans that all references of "texts.xlsx" in Makefiles and visual\nstudio projects should be changed to "texts.xml". The TextConvert tool\nwill recognise this, even if the old texts.xlsx file exist and the\ntexts.xml does not, and convert texts.xlsx to texts.xml for all future\nuses.'),(0,r.kt)("p",null,"To see a new, working Makefile, simply create a new (blank) project\nusing TouchGFX Designer and consult the generated Makefile located in\nfolder generated/simulator/gcc/Makefile."),(0,r.kt)("h3",m({},{id:"sdl2-linker-error-on-linux"}),"SDL2 linker error on Linux"),(0,r.kt)("p",null,"The SDL2 libraries used by the simulator are now only included for\nWindows users. Linux users must install the SDL2 libraries themselves.\nThis is a task that has to be carried out only once, and for ubuntu\nthe command is"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"sudo apt install libsdl2-dev libsdl2-image-dev\n")),(0,r.kt)("p",null,"to install libsdl2 and libsdl2-image including header files for\ndevelopment"),(0,r.kt)("h2",m({},{id:"touchgfx-4170"}),"TouchGFX 4.17.0"),(0,r.kt)("h3",m({},{id:"painters-no-longer-support-setalpha"}),"Painters no longer support setAlpha()"),(0,r.kt)("p",null,"For performance reasons, Painters used by the Canvas Widget Renderer (CWR) no longer support alpha. The effect can still be achieved by setting the alpha on the Canvas Widget that has the Painter. In general code can be changed from looking something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));\npainter.setAlpha(128);\ncircle.setPainter(painter);\n")),(0,r.kt)("p",null,"to something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));\ncircle.setPainter(painter);\ncircle.setAlpha(128);\n")),(0,r.kt)("p",null,"If alpha was previously applied to both the Painter and the Canvas Widget, these two alpha values can be multiplied and then divided by 255, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));\npainter.setAlpha(painterAlpha);\ncircle.setPainter(painter);\ncircle.setAlpha(circleAlpha);\n")),(0,r.kt)("p",null," becomes"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"painter.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00));\ncircle.setPainter(painter);\ncircle.setAlpha((painterAlpha * circleAlpha) / 255);\n")),(0,r.kt)("p",null,"or use LCD::div255() instead of dividing with 255."),(0,r.kt)("h3",m({},{id:"using-the-hal-class"}),"Using the HAL class"),(0,r.kt)("p",null,"Prior to version 4.17.0, the header file touchgfx/hal/HAL.hpp would be included by several files in the TouchGFX framework that did not use HAL at all. These unnecessary references have been cleaned up, and this may result in user code that will not compile because HAL is not known to the compiler. To fix this, simply include the HAL header file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/hal/HAL.hpp>\n")),(0,r.kt)("p",null,"Alternatively, the Screen class has two new functions getScreenWidth() and getScreenHeight() to give the screen size. This the recommended way to get the size of the screen and can be called directly from any subclass of Screen, such as e.g. Screen1View.cpp."),(0,r.kt)("h3",m({},{id:"fmc-display-interface-in-touchgfx-generator"}),"FMC Display Interface in TouchGFX Generator"),(0,r.kt)("p",null,"When using the new FMC Display Interface in TouchGFX Generator the ",(0,r.kt)("em",{parentName:"p"},"memory offset")," for FMC banks will not be correct (zero) when generating with CubeMX 6.2.1. This will be corrected in CubeMX 6.3.0 and upon release the minimum required version for X-CUBE-TouchGFX will be bumped to 6.3.0 rather than the current 6.2.1. Until then, users can enter the correct FMC BANK Memory addresses inside ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL.cpp")," (will be overwritten upon re-generation). E.g."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#define FMC_BANK1_REG ((uint16_t *) 0x60000000)\n#define FMC_BANK1_MEM ((uint16_t *) 0x60000002)\n")),(0,r.kt)("p",null,"Users may also redefine them in ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL.cpp")," entirely. "),(0,r.kt)("h3",m({},{id:"l8-images-in-16--24--or-32bpp-configurations"}),"L8 images in 16- 24- or 32bpp configurations"),(0,r.kt)("p",null,"A call to ",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::taskYield()")," was mistakenly introduced to STM32DMA classes when loading CLUT for L8 images. To fix this, users can do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to your ",(0,r.kt)("inlineCode",{parentName:"li"},"Users/<user name>/STM32Cube/Repository/Packs/STMicroelectronics/X-CUBE-TOUCHGFX/4.17.0/CubeMX/templates/Target")," folder."),(0,r.kt)("li",{parentName:"ol"},"Open the appropriate ",(0,r.kt)("inlineCode",{parentName:"li"},"dma_Xbpp_implementation_tmp.ftl")," file based on your bit depth"),(0,r.kt)("li",{parentName:"ol"},"Delete or comment the call to ",(0,r.kt)("inlineCode",{parentName:"li"},"OSWrappers::taskYield()")," call in the ",(0,r.kt)("inlineCode",{parentName:"li"},"while ((READ_REG(DMA2D->FGPFCCR) & DMA2D_FGPFCCR_START) != 0U)")," loop, and regenerate code from STM32CubeMX to generate code using this modified template. ")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"while ((READ_REG(DMA2D->FGPFCCR) & DMA2D_FGPFCCR_START) != 0U)\n{\n    // OSWrappers::taskYield();\n}\n")),(0,r.kt)("h2",m({},{id:"touchgfx-4150"}),"TouchGFX 4.15.0"),(0,r.kt)("h3",m({},{id:"mcu-support"}),"MCU support"),(0,r.kt)("p",null,'While Cortex-M33 is fully supported by TouchGFX, "Software Packs" (TouchGFX Generator, among others) cannot be enabled in the current verison of CubeMX (v6.0.1) for multi-context MCUs until support is added in CubeMX. Disabling "Trust Zone" for Cortex-M33 based MCUs, thus limiting the MCU to a single context, will allow you to enable TouchGFX Generator. TrustZone should be enabled manually in User Code sections.'),(0,r.kt)("h2",m({},{id:"touchgfx-4140"}),"TouchGFX 4.14.0"),(0,r.kt)("h3",m({},{id:"armclang-support"}),"ARMCLANG Support"),(0,r.kt)("p",null,"While TouchGFX now provides an ARMCLANG (ARM compiler v6.x) library for ",(0,r.kt)("em",{parentName:"p"},"Cortex-M0"),", ",(0,r.kt)("em",{parentName:"p"},"Cortex-M4f"),", ",(0,r.kt)("em",{parentName:"p"},"Cortex-M7")," and ",(0,r.kt)("em",{parentName:"p"},"Cortex-M33"),", CubeMX is not able to generate projects that enable the ARMCLANG compiler (ARM Compiler v6.x). This requires users who wish to use the compiler in their projects to select the compiler manually from the project options in Keil uVision."),(0,r.kt)("p",null,"If configuring the FreeRTOS middleware from within CubeMX, any generated project using ARMCC (ARM compiler  v5.x) will have FreeRTOS ",(0,r.kt)("em",{parentName:"p"},"portable"),' files that are not compatible with ARMCLANG; And these have to be replaced manually. Whenever "Generate code" is run from within CubeMX any manual changes will be overwritten and it would be wise to keep the project under version control (git, etc.) to undo these particular changes.'),(0,r.kt)("p",null,"In summary. Since CubeMX can only generate ARM Compiler v5.x compiler projects, users have to modify the following every time code is generated from CubeMX unless they keep their project under version control."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select ARM Compiler v6.x in project options."),(0,r.kt)("li",{parentName:"ol"},"Link with the ARMCLANG library instead of the ARMCC library (configured by CubeMX)."),(0,r.kt)("li",{parentName:"ol"},"If configuring FreeRTOS from within CubeMX, then the FreeRTOS portable files should be taken from the  ",(0,r.kt)("inlineCode",{parentName:"li"},"portable/GCC")," folder rather than ",(0,r.kt)("inlineCode",{parentName:"li"},"portable/RVDS")," (default for ARM Compiler v5.x) in order to be compatible with ARM Compiler v6.x.")),(0,r.kt)("h4",m({},{id:"workflow"}),"Workflow"),(0,r.kt)("p",null,"The following workflow describes how to use v6.x ARM Compiler from Keil uVision with CubeMX generated projects and a TouchGFX ARMCLANG library."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select ARMCLANG (v. 6.x) in Keil uVision.")),(0,r.kt)(a.Z,{imageSource:"/img/miscellaneous/known-issues/armclang-support.png",noShadow:!0,width:"650",mdxType:"Figure"},"ARMCLANG Support"),(0,r.kt)("ol",m({},{start:2}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you're configuring FreeRTOS from CubeMX, CubeMX will generate the wrong portable files and configure your project to use those. You have to manually replace these with the ones (from ",(0,r.kt)("a",m({parentName:"p"},{href:"https://github.com/FreeRTOS/FreeRTOS-Kernel/tree/6199b72fbf57a7c5b3d7b195a3bd1446779314cd/portable/GCC"}),"https://github.com/FreeRTOS/FreeRTOS-Kernel/tree/6199b72fbf57a7c5b3d7b195a3bd1446779314cd/portable/GCC")," (",(0,r.kt)("inlineCode",{parentName:"p"},"port.c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"portmacro.h"),") or download a FreeRTOS release and find the files in there."),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"port.c"),":"),(0,r.kt)(a.Z,{imageSource:"/img/miscellaneous/known-issues/keil-port-c.png",noShadow:!0,width:"250",mdxType:"Figure"},"port.c"),(0,r.kt)("p",{parentName:"li"},"Change your include path settings to include ",(0,r.kt)("inlineCode",{parentName:"p"},"portmacro.h")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"portable/GCC")," folder (in this case for Cortex-M7):"),(0,r.kt)(a.Z,{imageSource:"/img/miscellaneous/known-issues/keil-port-include.png",noShadow:!0,width:"600",mdxType:"Figure"},"Portable include path")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'TouchGFX designer Post-Generate step during "Generate Code" will automatically insert the correct library based on the compiler version you\'ve chosen.'))),(0,r.kt)("h2",m({},{id:"touchgfx-4130"}),"TouchGFX 4.13.0"),(0,r.kt)("h3",m({},{id:"bugs"}),"Bugs"),(0,r.kt)("h4",m({},{id:"font-converter"}),"Font Converter"),(0,r.kt)("p",null,"The FontConverter tool would generate glyph pixel data for unicodes that were a part of a rule in the font, regardless of that glyph being used in an actual text in the application. This led to several megabytes, potentially, of additional glyph pixel data. New FontConverter tools (windows and linux) that no longer generate pixel data for glyphs that aren't in use by the application can be found here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/fontconvert_fix.zip"}),"fontconvert_fix.zip"))),(0,r.kt)("p",null,"Extracting this file at the root of your 4.13.0 installation will update the fontconverter binaries inside"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx\\framework\\tools")),(0,r.kt)("h3",m({},{id:"additional-compiler-support"}),"Additional Compiler Support"),(0,r.kt)("p",null,"A library built with ARMCLANG compiler (v6.12) can be found here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/touchgfx_core_clang.zip"}),"touchgfx_core_clang.zip"))),(0,r.kt)("p",null,"Extracting this file at the root of your 4.13.0 installation will place the library ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_core_clang.lib")," inside."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx\\lib\\core\\cortex_m7\\Keil")),(0,r.kt)("h3",m({},{id:"backwards-compatibility"}),"Backwards Compatibility"),(0,r.kt)("h4",m({},{id:"deprecated-features"}),"Deprecated Features"),(0,r.kt)("p",null,"The following deprecated features have been removed. If you have referenced them in your code, you may need to rewrite parts of your application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Definition of deprecated ",(0,r.kt)("inlineCode",{parentName:"li"},"TRANSPARENT_COL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Drawable::getType()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HAL::blitSetTransparencyKey()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HAL::registerTextCache()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HAL::cacheTextString()"))),(0,r.kt)("h4",m({},{id:"texturemapper-is-disabled-by-default"}),"TextureMapper is Disabled by Default"),(0,r.kt)("p",null,"The TextureMapper is disabled by default to reduce the code space used by TouchGFX. TouchGFX designer will insert code to enable texture mapper in all new project."),(0,r.kt)("p",null,"If you are migrating an old project to TouchGFX 4.13 and you are updating to TouchGFX 4.13 this is handled by TouchGFX Designer."),(0,r.kt)("p",null,"If you are updating manually then you need to insert code to enable the TextureMapper. Otherwise any TextureMapper will not draw on the screen."),(0,r.kt)("p",null,"Read more here:\xa0",(0,r.kt)("a",m({parentName:"p"},{href:"../development/ui-development/designer-user-guide/config-view#framework-features"}),"Configuring TouchGFX Features"),"."),(0,r.kt)("h4",m({},{id:"hal-sdl1-incompatible"}),"HAL SDL1 incompatible"),(0,r.kt)("p",null,"Two functions were moved from the TouchGFX library code to the ",(0,r.kt)("inlineCode",{parentName:"p"},"HALSDL2.cpp"),". This makes no difference for applications that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"HALSDL2.cpp")," as HAL for the Windows simulator."),(0,r.kt)("p",null,"If you have a old application (before TouchGFX 4.8.0) your simulator is maybe using HALSDL (not 2). This simulator HAL is not included in TouchGFX anymore. The HALSDL is missing the two functions that were previously included in the TouchGFX library. You need to add them manually to ",(0,r.kt)("inlineCode",{parentName:"p"},"HALSDL.cpp"),":"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"HALSDL.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'void simulator_enable_stdio();\nvoid simulator_enable_stdio()\n{\n    HWND consoleHwnd = GetConsoleWindow(); // Get handle of console window\n    if (!consoleHwnd)                      // No console window yet?\n    {\n        HWND activeHwnd = GetActiveWindow(); // Remember which window is active\n\n        AllocConsole();                   // Allocate a new console\n        consoleHwnd = GetConsoleWindow(); // Get handle of console window\n\n        FILE* dummy;\n        freopen_s(&dummy, "CONIN$", "r", stdin); // Redirect stdin/stdout/stderr to the new console\n        freopen_s(&dummy, "CONOUT$", "w", stdout);\n        freopen_s(&dummy, "CONOUT$", "w", stderr);\n\n        SwitchToThisWindow(activeHwnd, true); // Switch back to the originally active window\n    }\n    if (consoleHwnd)\n    {\n        ShowWindow(consoleHwnd, SW_SHOW); // Show/hide it!\n    }\n}\nvoid simulator_printf(const char* format, va_list pArg);\nvoid simulator_printf(const char* format, va_list pArg)\n{\n    // Create a console window, if window is visible.\n    simulator_enable_stdio();\n    if (GetConsoleWindow()) // Only print if we have a console window\n    {\n        vprintf(format, pArg);\n    }\n}\n')),(0,r.kt)("h2",m({},{id:"touchgfx-4123"}),"TouchGFX 4.12.3"),(0,r.kt)("h3",m({},{id:"backwards-compatibility-1"}),"Backwards compatibility"),(0,r.kt)("h4",m({},{id:"screen-transitions"}),"Screen transitions"),(0,r.kt)("p",null,"Earlier versions are redrawing the entire screen after a screen transition is completed.\xa0This additional redraw caused performance issues on some slow platforms. If you require this redraw for some reason, you need to invalidate the relevant part of the screen, e.g. by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"container.invalidate()")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen::afterTransition()")," virtual of the Screen transitioned to."),(0,r.kt)("h4",m({},{id:"binary-fonts"}),"Binary Fonts"),(0,r.kt)("p",null,"The format of the binary fonts has changed because kerning data is now also included in the binary fonts. Binary font files needs to be regenerated, old files will not work correctly. Depending on how your Makefiles are setup, this is normally done by regenerating all assets (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"make -f simulator/gcc/Makefile clean assets"),")."),(0,r.kt)("h2",m({},{id:"touchgfx-4110"}),"TouchGFX 4.11.0"),(0,r.kt)("h3",m({},{id:"backwards-compatibility-2"}),"Backwards compatibility"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/framework/include/touchgfx/lcd/LCD.hpp")," we have removed an include of the file ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/HAL.hpp")," that was inserted by mistake in an earlier version. This may give you a compile error in a file where you have included ",(0,r.kt)("inlineCode",{parentName:"p"},"LCD.hpp")," and also make use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"HAL.hpp")," content. The solution is to also include\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx/framework/include/touchgfx/hal/HAL.hpp")," in your file."),(0,r.kt)("h2",m({},{id:"touchgfx-4100"}),"TouchGFX 4.10.0"),(0,r.kt)("h3",m({},{id:"upgrading-from-49x"}),"Upgrading from 4.9.x"),(0,r.kt)("p",null,"From version 4.10.0 TouchGFX runs exclusively on STM32 MCUs."),(0,r.kt)("p",null,"You need to do the following if updating an old project."),(0,r.kt)("p",null,"Add the highlighted code below at application startup to inform TouchGFX that you are running on STM32 hardware. A suitable location is the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"hw_init()")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"BoardConfiguration.cpp")),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void hw_init() {\n    ...\n    //Enable CRC engine for STM32 Lock check\n    __HAL_RCC_CRC_CLK_ENABLE();\n}\n")),(0,r.kt)("h3",m({},{id:"backwards-compatibility-3"}),"Backwards compatibility"),(0,r.kt)("p",null,"Unused file ",(0,r.kt)("inlineCode",{parentName:"p"},"\\touchgfx\\framework\\include\\touchgfx\\canvas_widget_renderer\\RGBA8.hpp")," removed."),(0,r.kt)("h3",m({},{id:"project-updater-issue"}),"Project Updater Issue"),(0,r.kt)("p",null,"IAR and Keil project updaters invoked from TouchGFX Designer do not respect custom file level optimization set in the respective IDE."),(0,r.kt)("h3",m({},{id:"textarea-and-chromart-dma2d"}),"TextArea and ChromART (DMA2D)"),(0,r.kt)("p",null,"Rendering of TextAreas with ChromART (when TextArea is the top most element / last to be drawn) cause a premature unlocking of the framebuffer and subsequently a premature completion/transfer of the current frame to the display. Once ",(0,r.kt)("inlineCode",{parentName:"p"},"endFrame()")," is called by TouchGFX all drawing operations, including DMA operations, should already be completed. Due to a breach of contract by TextArea in how to appropriately protect the framebuffer, DMA operations are allowed to continue even after returning from ",(0,r.kt)("inlineCode",{parentName:"p"},"endFrame()"),"."),(0,r.kt)("p",null,"The contract for a widget is to either:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Lock the framebuffer (returns a pointer to framebuffer)."),(0,r.kt)("li",{parentName:"ol"},"Draw something in the framebuffer.\xa0"),(0,r.kt)("li",{parentName:"ol"},"Unlock the framebuffer.")),(0,r.kt)("p",null,"Or to use DMA operations, in which case syncronization of the framebuffer is handled automatically."),(0,r.kt)("p",null,"TextArea, in 4.10.0, mixes the two procedures which can cause glitches if it is the top most element (last to be drawn) of the current screen. The bug can be fixed by manually guarding ",(0,r.kt)("inlineCode",{parentName:"p"},"endFrame()")," with the following override of ",(0,r.kt)("inlineCode",{parentName:"p"},"endFrame()")," (based on F4 HAL). It ensures that ",(0,r.kt)("inlineCode",{parentName:"p"},"endFrame()")," does not return if ChromART operations are still being processed.\xa0\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void STM32F4HAL::endFrame()\n{\n    if (dma.isDMARunning())\n    {\n        OSWrappers::tryTakeFrameBufferSemaphore();\n    }\n    HAL::endFrame();\n}\n")),(0,r.kt)("h2",m({},{id:"touchgfx-490"}),"TouchGFX 4.9.0"),(0,r.kt)("h3",m({},{id:"upgrading-from-480"}),"Upgrading from 4.8.0"),(0,r.kt)("p",null,"With the introduction of Application Templates, which essentially separates board support packages from the core framework, we have removed a lot of low-level drivers and other files from the ",(0,r.kt)("em",{parentName:"p"},"touchgfx")," folder in 4.9.0. These files are now provided by application templates instead. However, this means that you cannot upgrade to 4.9.0 by just replacing the touchgfx folder, since that would likely lead to some BSP files missing. Instead, the TouchGFX Designer is able to perform the upgrade automatically. The upgrade can be done in two different ways, and you will need to decide which one is most suitable for you."),(0,r.kt)(o.Z,{mdxType:"Caution"},"Please make sure you have a backup of your project before upgrading"),(0,r.kt)("h3",m({},{id:"method-1-retain-original-file-structure"}),"Method 1: retain original file structure"),(0,r.kt)("p",null,"This method is done by simply opening your project in the new 4.9.0 Designer. TouchGFX Designer will prompt you whether you want to upgrade, and by clicking OK, TouchGFX Designer will apply the necessary changes. TouchGFX Designer will perform the following operations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Unpack the new reduced touchgfx folder into your application, and modify your TouchGFX path to match this"),(0,r.kt)("li",{parentName:"ol"},"Download and unpack all the files we have removed from the touchgfx folder, so that your project still compiles")),(0,r.kt)("p",null,"This approach will leave pretty much everything as they used to be, so if the old file structure suits your project, this is the easiest choice. The main drawback is that you will not have the benefit of the image converter speedup (by working on image folders instead of individual files). But you can modify your makefile manually to use this approach though."),(0,r.kt)("h3",m({},{id:"method-2-import-into-new-template"}),"Method 2: import into new template"),(0,r.kt)("p",null,'Using this method you can transition your project into the new template-based file organisation. To achieve this, you must first let the Designer upgrade your project using Method 1 above. Then, create a new project using the appropriate application template (simulator, or one matching your eval board). With this new project opened in the Designer, go to the top menu and click "Edit -> Import GUI". In the dialog box point out the .touchgfx file of your project. The Designer will then automatically import all the UI files, including assets, into the newly created project. If you have added additional code outside of the gui folder, you would need to manually copy those files over to the new project.'),(0,r.kt)("h3",m({},{id:"method-3-manual-upgrade-without-designer"}),"Method 3: Manual upgrade without Designer"),(0,r.kt)("p",null,"If you are not using the Designer, you can perform the upgrade by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Replacing the touchgfx folder used by your project with the one from the 4.9.0 installation."),(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("a",m({parentName:"li"},{href:"http://ftp.draupnergraphics.com/TouchGFX/Evaluation/4.9.0/Qll3iKK54AnJer7XRNm2/fw_delta_4.8.0_4.9.0.zip"}),"this zip")," and unpack it into the touchgfx folder, restoring the removed files.")))}v.isMDXComponent=!0}}]);