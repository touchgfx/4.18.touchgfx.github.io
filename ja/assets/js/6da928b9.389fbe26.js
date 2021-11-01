(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[640],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(u,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88678:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){"use strict";var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=a},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(67294),o=n(73727),i=n(11368),a=n(35096),l=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),s=n(67023),p=Object.defineProperty,h=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&k(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:p,to:k,href:v,activeClassName:w,isActive:T,"data-noBrokenLinkCheck":y,autoAddBaseUrl:C=!0}=n,S=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:M,baseUrl:x}}=(0,i.Z)(),{withBaseUrl:j}=(0,c.C)(),O=(0,r.useContext)(u),G=k||v,N=(0,a.Z)(G),_=null==G?void 0:G.replace("pathname://","");let E=void 0!==_?(F=_,C&&(e=>e.startsWith("/"))(F)?j(F):F):void 0;var F;E&&N&&(E=(0,s.applyTrailingSlash)(E,{trailingSlash:M,baseUrl:x}));const P=(0,r.useRef)(!1),D=p?o.OL:o.rU,I=l.Z.canUseIntersectionObserver;let X;(0,r.useEffect)((()=>(!I&&N&&null!=E&&window.docusaurus.prefetch(E),()=>{I&&X&&X.disconnect()})),[E,I,N]);const A=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,B=!E||!N||A;return E&&N&&!A&&!y&&O.collectLink(E),B?r.createElement("a",b(b({href:E},G&&!N&&{target:"_blank",rel:"noopener noreferrer"}),S)):r.createElement(D,b((R=b({},S),h(R,d({onMouseEnter:()=>{P.current||null==E||(window.docusaurus.preload(E),P.current=!0)},innerRef:e=>{var t,n;I&&e&&N&&(t=e,n=()=>{null!=E&&window.docusaurus.prefetch(E)},X=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(X.unobserve(t),X.disconnect(),n())}))})),X.observe(t))},to:E||""}))),p&&{isActive:T,activeClassName:w}));var R}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[o]=e.split(/[#?]/),i="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(o,i)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},16958:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return k},default:function(){return v}});var r=n(3905),o=n(31217),i=n(93054),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&h(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&h(e,n,t[n]);return e};const m={id:"compiling-and-flashing",title:"Compiling & Flashing"},f=void 0,g={unversionedId:"development/ui-development/working-with-touchgfx/compiling-and-flashing",id:"development/ui-development/working-with-touchgfx/compiling-and-flashing",isDocsHomePage:!1,title:"Compiling & Flashing",description:"This section describes how to go from TouchGFX application code to executing program, that is how to compile and flash in a specific setup.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/compiling-and-flashing.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/compiling-and-flashing",permalink:"/4.18/ja/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing",version:"current",frontMatter:{id:"compiling-and-flashing",title:"Compiling & Flashing"},sidebar:"docs",previous:{title:"Simulator",permalink:"/4.18/ja/docs/development/ui-development/working-with-touchgfx/simulator"},next:{title:"Debugging",permalink:"/4.18/ja/docs/development/ui-development/working-with-touchgfx/debugging"}},k=[{value:"Compiling TouchGFX Applications",id:"compiling-touchgfx-applications",children:[{value:"Compiling for PC Simulator",id:"compiling-for-pc-simulator",children:[]},{value:"Compiling for Target Hardware",id:"compiling-for-target-hardware",children:[]}]},{value:"Flashing STM32 Evaluation Kits",id:"flashing-stm32-evaluation-kits",children:[{value:"GCC &amp; TouchGFX Designer",id:"gcc--touchgfx-designer",children:[]},{value:"STM32CubeIDE",id:"stm32cubeide",children:[]},{value:"IAR",id:"iar",children:[]},{value:"Keil",id:"keil",children:[]}]},{value:"Flashing Custom Hardware",id:"flashing-custom-hardware",children:[]}],b={toc:k};function v(e){var t,n=e,{components:a}=n,h=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),h),l(t,u({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This section describes how to go from TouchGFX application code to executing program, that is how to compile and flash in a specific setup."),(0,r.kt)("h2",d({},{id:"compiling-touchgfx-applications"}),"Compiling TouchGFX Applications"),(0,r.kt)("p",null,"When compiling a TouchGFX application, there are two options; compiling for the PC simulator or compiling for the target hardware."),(0,r.kt)("h3",d({},{id:"compiling-for-pc-simulator"}),"Compiling for PC Simulator"),(0,r.kt)("p",null,"There are two options for compiling projects for the PC Simulator; GCC and Visual Studio. ",(0,r.kt)("br",null)," Both of these options are always available, since they are generated by TouchGFX Designer."),(0,r.kt)("h4",d({},{id:"gcc"}),"GCC"),(0,r.kt)("p",null,"The makefile is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"<touchgfx_application_root_folder>/simulator/gcc/Makefile")),(0,r.kt)("p",null,"TouchGFX includes a MinGW environment, that comes preinstalled with a GCC compiler and GNU Make, making it easy to execute the generated Makefile for the PC simulator."),(0,r.kt)("p",null,"The TouchGFX Environment can be launched either from ",(0,r.kt)("inlineCode",{parentName:"p"},"C:/TouchGFX/4.18.0/env/MinGW/msys/1.0/msys.bat"),' or from the shortcut added to the Windows start menu, named "TouchGFX x.y.z Environment" where x, y and z describe the version number.'),(0,r.kt)("p",null,"After launching the TouchGFX Environment and navigating to the TouchGFX Application root folder, the simple command below can be executed to produce a simulator.exe file."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"make -f simulator/gcc/Makefile\n")),(0,r.kt)("p",null,"The simulator executable can then be launched from the TouchGFX Environment with the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"./build/bin/simulator.exe\n")),(0,r.kt)("p",null,"The PC Simulator can also be compiled and launched from TouchGFX Designer, by using the ",(0,r.kt)("a",d({parentName:"p"},{href:"../designer-user-guide/main-window#run-simulator"}),"Run Simulator")," command."),(0,r.kt)("h4",d({},{id:"visual-studio"}),"Visual Studio"),(0,r.kt)("p",null,"To compile the PC Simulator using Visual Studio, simply open the generated solution file located at ",(0,r.kt)("inlineCode",{parentName:"p"},"<touchgfx_application_root_folder>/simulator/msvs/Application.sln")," using Visual Studio."),(0,r.kt)("p",null,"The PC Simulator can be launched directly from Visual Studio, enabling ",(0,r.kt)("a",d({parentName:"p"},{href:"debugging"}),"code debugging"),"."),(0,r.kt)(i.Z,{mdxType:"Note"},"Before being able to compile with GCC or Visual Studio, Run the ",(0,r.kt)(o.Z,{to:"../designer-user-guide/main-window#generate-code",mdxType:"Link"},"Generate")," command from TouchGFX Designer."),(0,r.kt)("h3",d({},{id:"compiling-for-target-hardware"}),"Compiling for Target Hardware"),(0,r.kt)("p",null,"Compiling projects for STM32 Evaluation Kits is quite simple for ",(0,r.kt)("a",d({parentName:"p"},{href:"../../../introduction/getting-started#application-template--ui-template"}),"TouchGFX Board Setup")," based applications.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Each TouchGFX Board Setup contains project files for GCC, STM32CubeIDE, IAR and Keil:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GCC: ",(0,r.kt)("inlineCode",{parentName:"li"},"<project_root_folder>/gcc/MakeFile")),(0,r.kt)("li",{parentName:"ul"},"STM32CubeIDE: ",(0,r.kt)("inlineCode",{parentName:"li"},"<project_root_folder>/STM32CubeIDE/.cproject")),(0,r.kt)("li",{parentName:"ul"},"IAR: ",(0,r.kt)("inlineCode",{parentName:"li"},"<project_root_folder>/EWARM/Project.eww")),(0,r.kt)("li",{parentName:"ul"},"Keil: ",(0,r.kt)("inlineCode",{parentName:"li"},"<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>.uvprojx"))),(0,r.kt)("p",null,"The active tool chain is set from STM32CubeMX and is set to STM32CubeIDE by default. ",(0,r.kt)("em",{parentName:"p"},"Please note that all project files are not present at the same time. The generated project file depends on the selected tool chain in STM32CubeMX")),(0,r.kt)("p",null,"TouchGFX includes a MinGW environment, that comes preinstalled with the GNU Embedded Toolchain for Arm and GNU Make, making it easy to execute the included Makefile for the target hardware."),(0,r.kt)("p",null,"The TouchGFX Environment can be launched either from ",(0,r.kt)("inlineCode",{parentName:"p"},"C:/TouchGFX/4.18.0/env/MinGW/msys/1.0/msys.bat"),' or from the shortcut added to the Windows start menu "TouchGFX x.y.z Environment"'),(0,r.kt)("p",null,"After launching the TouchGFX Environment and navigating to the project root folder, the simple command below can be executed to compile the project for the target hardware."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"make -f gcc/Makefile\n")),(0,r.kt)(i.Z,{mdxType:"Note"},"Before being able to compile with GCC, STM32CubeIDE, IAR or Keil, run the ",(0,r.kt)(o.Z,{to:"../designer-user-guide/main-window#generate-code",mdxType:"Link"},"Generate")," command from TouchGFX Designer."),(0,r.kt)("h2",d({},{id:"flashing-stm32-evaluation-kits"}),"Flashing STM32 Evaluation Kits"),(0,r.kt)("p",null,"Flashing projects to STM32 Evaluation Kits is quite simple with projects based on a premade ",(0,r.kt)("a",d({parentName:"p"},{href:"../../../introduction/getting-started#application-template--ui-template"}),"TouchGFX Board Setup"),".",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Each project, when built, produces a binary that can be flashed by either ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.st.com/en/development-tools/stsw-link004.html"}),"ST Link Utility")," or ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer"),"."),(0,r.kt)("p",null,"Therefore these tools must be installed to proceed with flashing."),(0,r.kt)("p",null,"It is suggested to install these tools to their default location."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ST Link Utility default install location:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"li"},"C:/Program Files (x86)/STMicroelectronics/STM32 ST-LINK Utility/ST-LINK Utility")),(0,r.kt)("li",{parentName:"ul"},"STM32CubeProgrammer default install location:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"li"},"C:/Program Files/STMicroelectronics/STM32Cube/STM32CubeProgrammer"))),(0,r.kt)(i.Z,{mdxType:"Note"},"The TouchGFX Board Setups do not provide any flash loaders for flashing directly from within IAR, Keil, STM32CubeIDE or other IDEs."),(0,r.kt)("h3",d({},{id:"gcc--touchgfx-designer"}),"GCC & TouchGFX Designer"),(0,r.kt)("p",null,"The Makefile included with an TouchGFX Board Setup located at ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/gcc/MakeFile")," has a built-in flash command, as shown below, that uses either ST Link Utility or STM32CubeProgrammer (depending on the AT) to flash the STM32 Evaluation Kit. You can of course also use the desktop version of the flash tools to flash the boards with the generated .hex files."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"make -f gcc/Makefile flash\n")),(0,r.kt)("p",null,"The .hex file is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/TouchGFX/build/bin/target.hex")),(0,r.kt)("p",null,"It is also possible to only write to the internal flash and thus skipping the external part. This can reduce the flash time considerably if you have a large set of images. However, you need to be sure that the content for the external flash has not changed since you wrote the external flash last time. If it has, and you do not reflash it, you will see strange behaviour. In this case reflash both the internal and external flash."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"make -f gcc/Makefile intflash\n")),(0,r.kt)("p",null,"The .hex file is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/TouchGFX/build/bin/intflash.hex")),(0,r.kt)("p",null,"The TouchGFX Board Setup also provides the configuration for TouchGFX Designer to be able to flash projects via the ",(0,r.kt)("a",d({parentName:"p"},{href:"../designer-user-guide/main-window#run-target"}),"Run Target Command"),". The command used by TouchGFX Designer to flash can be seen and overridden in the ",(0,r.kt)("a",d({parentName:"p"},{href:"../designer-user-guide/config-view#build"}),"Build Section")," of the ",(0,r.kt)("a",d({parentName:"p"},{href:"../designer-user-guide/config-view"}),"Config View")," in TouchGFX Designer."),(0,r.kt)("h3",d({},{id:"stm32cubeide"}),"STM32CubeIDE"),(0,r.kt)("p",null,"TouchGFX Board Setups provide support for flashing project compiled with STM32CubeIDE, by using the .elf file output by STM32CubeIDE, with the STM32CubeProgrammer."),(0,r.kt)("p",null,"The .elf file is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/STM32CubeIDE/Debug/<STM32_evaluation_kit_name>.elf")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"e.g. C:/TouchGFXProjects/MyApplication/STM32CubeIDE/Debug/STM32F746G_DISCO.elf")),(0,r.kt)("h3",d({},{id:"iar"}),"IAR"),(0,r.kt)("p",null,"The TouchGFX Board Setups provide support for flashing project compiled with IAR, by using the .hex file output by IAR, with the STM32CubeProgrammer."),(0,r.kt)("p",null,"The .hex file is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/EWARM/<STM32_evaluation_kit_name>/Exe/<STM32_evaluation_kit_name>.hex")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"e.g. C:/TouchGFXProjects/MyApplication/EWARM/STM32F469I-DISCO/STM32F469I-DISCO.hex")),(0,r.kt)("h3",d({},{id:"keil"}),"Keil"),(0,r.kt)("p",null,"The TouchGFX Board Setups provide support for flashing project compiled with Keil, by using the .hex file output by Keil, with the STM32CubeProgrammer."),(0,r.kt)("p",null,"The .hex file is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>/<STM32_evaluation_kit_name>.hex")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"e.g. C:/TouchGFXProjects/MyApplication/MDK-ARM/STM32F469I-DISCO/STM32F469I-DISCO.hex")),(0,r.kt)("h2",d({},{id:"flashing-custom-hardware"}),"Flashing Custom Hardware"),(0,r.kt)("p",null,"If instead what needs to be flashed is custom hardware, and not a predefined hardware setup like an STM32 Evaluation Kit, you can still use STM32CubeProgrammer. STM32CubeProgrammer does not necessarily come with a flash loading mechanism for your specific external memory. It is however possible to create a custom flash loader. Read the ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf"}),"user manual on developing customized loaders for your external memory")," to find more info."))}v.isMDXComponent=!0}}]);