"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7630],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:o,src:l})),a.createElement("p",null,e.children))}},35096:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var a=n(11368),r=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},49079:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return y},default:function(){return g}});var a=n(3905),r=n(44035),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&p(e,n,t[n]);return e};const h={id:"memory-usage",title:"Memory Usage"},m=void 0,f={unversionedId:"basic-concepts/memory-usage",id:"basic-concepts/memory-usage",isDocsHomePage:!1,title:"Memory Usage",description:"Introduction",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/basic-concepts/memory-usage.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/memory-usage",permalink:"/4.18/zh-TW/docs/basic-concepts/memory-usage",tags:[],version:"current",frontMatter:{id:"memory-usage",title:"Memory Usage"},sidebar:"docs",previous:{title:"Operating Systems",permalink:"/4.18/zh-TW/docs/basic-concepts/operating-system"},next:{title:"\u958b\u767c\u7c21\u4ecb",permalink:"/4.18/zh-TW/docs/development/development-introduction"}},y=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Static Memory Allocation",id:"static-memory-allocation",children:[{value:"Screens and Widgets",id:"screens-and-widgets",children:[],level:3},{value:"Application code",id:"application-code",children:[],level:3},{value:"Assets",id:"assets",children:[],level:3}],level:2},{value:"Checking memory usage",id:"checking-memory-usage",children:[{value:"Internal RAM",id:"internal-ram",children:[],level:3},{value:"Internal Flash",id:"internal-flash",children:[],level:3},{value:"External Flash",id:"external-flash",children:[],level:3},{value:"Summary",id:"summary",children:[],level:3}],level:2},{value:"Demo 1",id:"demo-1",children:[{value:"Summary",id:"summary-1",children:[],level:3}],level:2}],b={toc:y};function g(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},b),p),l(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h2",d({},{id:"introduction"}),"Introduction"),(0,a.kt)("p",null,"In this section we will discuss the memory usage of a TouchGFX application. A typical TouchGFX application uses 4 types of memory, but this will depend on the hardware used:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Memory Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Usage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Internal RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Internal RAM is used for configuration data like coordinates and colors of all the Widgets. A few objects for the current screen is allocated here.",(0,a.kt)("br",null),"The operating system memory including the runtime stack of the UI task is also in internal RAM. All data for other software components like filesystems and display drivers is also placed in internal RAM.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Internal Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Internal flash is used for program code for the application, the TouchGFX library, and other libraries used.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"External RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"External RAM is typically used for framebuffers and maybe a bitmap cache.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"External Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"External flash is used to store images, fonts and texts.")))),(0,a.kt)("h2",d({},{id:"static-memory-allocation"}),"Static Memory Allocation"),(0,a.kt)("p",null,"TouchGFX only uses static memory allocation. This means that all memory is preallocated. No memory is allocated by TouchGFX at runtime. This ensures that you will never run out of memory, if the application could fit into memory at start."),(0,a.kt)("h3",d({},{id:"screens-and-widgets"}),"Screens and Widgets"),(0,a.kt)("p",null,"In TouchGFX the user interface is created by developing a number of C++ classes. The classes are created by TouchGFX Designer when you design the screens. For each screen designed in TouchGFX Designer you automatically get a number of classes (the ",(0,a.kt)("a",d({parentName:"p"},{href:"../development/ui-development/software-architecture/model-view-presenter-design-pattern"}),"MVP")," architecture).",(0,a.kt)("br",{parentName:"p"}),"\n","When you show a screen on the display objects of the classes is automatically allocated by TouchGFX in internal RAM."),(0,a.kt)("p",null,"When you change from one screen to another screen, the objects allocated for the previous screen are not used anymore, only the objects for the new screen. Therefore the new objects are allocated in the place in internal RAM where old objects were allocated (the old objects are overwritten). The internal RAM only holds objects for one screen at one point in time."),(0,a.kt)("p",null,"Based on the classes defined it is possible for the C++ compiler to calculate the size of the largest screen classes, and reserve memory for those classes."),(0,a.kt)("p",null,"The memory usage in internal RAM thus does not depend on the number of screens in the application, but on the size of the largest screen."),(0,a.kt)("p",null,"The memory set aside for these objects is called the FrontendHeap."),(0,a.kt)("p",null,"TouchGFX"),(0,a.kt)("h3",d({},{id:"application-code"}),"Application code"),(0,a.kt)("p",null,"The application code is normally placed in the internal flash. The application code consists of the program code you write, the code generated by TouchGFX Designer, code from the TouchGFX library and other libraries you use."),(0,a.kt)("p",null,"The amount of application code will of course increase when you write more code and add more screens to your application. The amount of code taken from libraries increases the first time you use a feature. For example, the first time you add a Button to a screen, the Button code from the TouchGFX library is included in your application which therefore grows. The second time you add a Button to the same or another screen, no additional code is taken from the TouchGFX library, and the application only grows by the amount of code you write or TouchGFX Designer generates."),(0,a.kt)("h3",d({},{id:"assets"}),"Assets"),(0,a.kt)("p",null,"Assets like images, texts, and fonts are converted to c++ files and linked into your application. The data for the assets are normally put in the external flash, but can also be put in internal flash. This is controlled by the linker script."),(0,a.kt)("p",null,"When you add an image, the application size will grow proportionally to the size of the image."),(0,a.kt)("p",null,"When you add texts the application will grow two bytes for each character in the text. If you use the same string of character twice it is only included once."),(0,a.kt)("p",null,"Only the characters used by the application are taken from the font files. This means that if you only use the upper case letters A-Z in your application, the lower case letters a-z in the font are not included in your application. If you later add texts that use these letters, the font data in your application will grow in size."),(0,a.kt)("p",null,"The size of the characters in flash depends on the selected font size. In you increase the font size, the application size will increase."),(0,a.kt)("h2",d({},{id:"checking-memory-usage"}),"Checking memory usage"),(0,a.kt)("p",null,"Memory usage of a specific application can be found by examining the map file generated by the linker."),(0,a.kt)("p",null,"Here we examine a map file generated by the IAR Embedded Workbench. Other compilers produce similar map files."),(0,a.kt)("p",null,"We start by creating an empty project in TouchGFX Designer for the STM32F746Discovery evaluation kit:"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/create-project-4.17.png",noShadow:"true",mdxType:"Figure"},"STM32F746 project with a Box and a Button"),(0,a.kt)("p",null,"After opening the project in IAR, we check in the properties that IAR generates a .MAP file:"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/enable-map-file.png",noShadow:"true",mdxType:"Figure"},"Generate a linker map file"),(0,a.kt)("p",null,"After compilation in IAR we can check the linker map file, STM32F746G_DISCO.map, found in the ",(0,a.kt)("em",{parentName:"p"},"EWARM/STM32F746G_DISCO/List")," folder."),(0,a.kt)("p",null,"The IAR linker map files contain a nice summary. Look for ",(0,a.kt)("em",{parentName:"p"},"MODULE SUMMARY"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"*******************************************************************************\n*** MODULE SUMMARY\n***\n\n    Module                                   ro code  ro data  rw data\n    ------                                   -------  -------  -------\ncommand line/config:\n    ------------------------------------------------------------------\n    Total:\n\nC:\\TouchGFXProjectsDocumentation\\STM32F746MemoryUsage\\EWARM\\STM32F746G_DISCO\\Obj: [1]\n    ApplicationFontProvider.o                              20\n    BitmapDatabase.o                              12       40\n    Blue_Buttons_Round_Edge_small.o                    40'800\n    Blue_Buttons_Round_Edge_small_pressed.o            40'800\n    Font_verdana_10_4bpp_0.o                               24\n    Font_verdana_20_4bpp_0.o                               72\n    Font_verdana_40_4bpp_0.o                              280\n    FrontendApplication.o                         46       60\n    FrontendApplicationBase.o                    706      816\n    GeneratedFont.o                               84       84\n    Kerning_verdana_10_4bpp.o                               4\n    Kerning_verdana_20_4bpp.o                               4\n    Kerning_verdana_40_4bpp.o                               4\n    Model.o                                       10\n    OSWrappers.o                                 156        1        9\n    STM32DMA.o                                   898      176\n    STM32TouchController.o                       162       24        4\n...\n    heap_4.o                                     444            32'792\n...\ntouchgfx_core.a: [7]\n    AbstractButton.o                             136\n    AbstractPartition.o                            8\n    Application.o                              2'218      290       28\n    Bitmap.o                                   1'064      604       36\n    Box.o                                        108      104\n    Button.o                                     276      308\n    ConstFont.o                                   62\n    Container.o                                  510      396\n    DMA.o                                        558      252\n    DisplayTransformation.o                      192\n    Drawable.o                                   418\n    FontManager.o                                 12                 4\n    Gestures.o                                   364       60\n    HAL.o                                      1'758      544       18\n    LCD24bpp.o                                 2'732    1'604       80\n    Screen.o                                   1'924      124\n    TouchCalibration.o                           252                76\n    TypedText.o                                                     14\n    ------------------------------------------------------------------\n    Total:                                    12'728    4'286      256\n\n    Gaps                                                    4        3\n    Linker created                                         36    2'560\n----------------------------------------------------------------------\n    Grand Total:                              38'676   88'973   42'731\n")),(0,a.kt)("p",null,"This table has three columns of numbers. ",(0,a.kt)("em",{parentName:"p"},"ro code")," and ",(0,a.kt)("em",{parentName:"p"},"ro data")," is read-only and is placed in flash. ",(0,a.kt)("em",{parentName:"p"},"rw data")," is non-const read-write variables and which are placed in RAM."),(0,a.kt)("p",null,"The rows in the table are divided into 7 blocks. The first block is all the .cpp files in the project. The next six blocks are the libraries used in the project (.a files). The last one is the TouchGFX library."),(0,a.kt)("p",null,'We can see that the TouchGFX library (the "touchgfx_core.a: ',"[7]",'" section) adds 12.728 bytes of code to the application (and 4.286 bytes of constant data).'),(0,a.kt)("h3",d({},{id:"internal-ram"}),"Internal RAM"),(0,a.kt)("p",null,"To find the total internal RAM usage we look in the ",(0,a.kt)("em",{parentName:"p"},"Grand Total")," row in the bottom of the Module Summary table. The third column is the internal RAM. This means that the project uses 42.731 bytes of internal RAM. Looking at the total for the TouchGFX library we see that 256 bytes are used by the TouchGFX library ","[7]",". 32.792 bytes are used by heap_4.o. This is the dynamic memory heap reserved for FREERTOS. 32Kb is the default value, but the heap size can be configured in STM32CubeMX. A typical TouchGFX program uses a few Kb from this heap, mainly to allocate a stack for the user interface task."),(0,a.kt)("p",null,"By searching for the FrontendHeap, we can find the size of the screen objects:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"FrontendHeap::getInstance()::instance\n                        0x2000'95d0   0x240  Data  Gb  TouchGFXConfiguration.o [1]\n")),(0,a.kt)("p",null,"The objects required for the user interface occupies 0x240 bytes = 576 bytes."),(0,a.kt)("h3",d({},{id:"internal-flash"}),"Internal Flash"),(0,a.kt)("p",null,"We see from the ",(0,a.kt)("em",{parentName:"p"},"Grand Total")," row that this application uses 38.676 bytes code + 88.973 bytes data. Only some of this is the internal flash. At least the two images for the Button is in external flash."),(0,a.kt)("p",null,"To find out how much code and data that is going into the internal flash we start by checking the ",(0,a.kt)("em",{parentName:"p"},"PLACEMENT SUMMARY")," (a few details removed):"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'*******************************************************************************\n*** PLACEMENT SUMMARY\n***\n\n"A0":  place at address 0x800\'0000 { ro section .intvec };\n"P1":  place in [from 0x800\'0000 to 0x80f\'ffff] { ro };\n"P2":  place in [from 0x2000\'0000 to 0x2004\'ffff] { rw };\n"P3":  place in [from 0x9000\'0000 to 0x90ff\'ffff] {\n          section ExtFlashSection, section FontFlashSection,\n          section TextFlashSection };\n')),(0,a.kt)("p",null,'The internal flash is starting at address 0x08000000. It is covered by the two regions "A0" and "P1".'),(0,a.kt)("p",null,"Looking a bit further in the map file we can see what is placed in these regions:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,15-15}","{5-5,15-15}":!0}),"  Section                Kind         Address      Size  Object\n  -------                ----         -------      ----  ------\n\"A0\":                                             0x1c8\n  .intvec                ro code   0x800'0000     0x1c8  startup_stm32f746xx.o [1]\n                                 - 0x800'01c8     0x1c8\n\n\"P1\":                                             0xb05d\n  .text                   ro code   0x800'01c8     0x9b8  main.o [1]\n  .text                   ro code   0x800'0b80      0x14  memset.o [5]\n...\n  .text                   ro code   0x800'b17a       0x2  AbstractButton.o [7]\n  .rodata                 const     0x800'b17c       0x1  unwind_debug.o [6]\n  .rodata                 const     0x800'b17d       0x0  zero_init3.o [5]\n  .rodata                 const     0x800'b17d       0x0  lz77_init_single.o [5]\n  Initializer bytes       const     0x800'b17d      0xa8  <for P2-1>\n                                  - 0x800'b225    0xb05d\n")),(0,a.kt)("p",null,'This means that 0x1c8 bytes = 456 bytes are used by "A0", and 0xb05d bytes = 45.149 bytes by "P1". The total usage of the internal flash is thus 45.605 bytes.'),(0,a.kt)("h3",d({},{id:"external-flash"}),"External Flash"),(0,a.kt)("p",null,'The external flash is the "P3" region (starting at address 0x90000000). Here is the content of that region:'),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{14-14}","{14-14}":!0}),"\"P3\":                                          0x1'4076\n  ExtFlashSection        const    0x9000'0000    0x9f60  Blue_Buttons_Round_Edge_small.o [1]\n  ExtFlashSection        const    0x9000'9f60    0x9f60  Blue_Buttons_Round_Edge_small_pressed.o [1]\n  FontFlashSection       const    0x9001'3ec0     0x118  Font_verdana_40_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'3fd8      0x48  Font_verdana_20_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'4020      0x18  Font_verdana_10_4bpp_0.o [1]\n  FontFlashSection       const    0x9001'4038      0x10  Table_verdana_10_4bpp.o [1]\n  FontFlashSection       const    0x9001'4048      0x10  Table_verdana_20_4bpp.o [1]\n  FontFlashSection       const    0x9001'4058      0x10  Table_verdana_40_4bpp.o [1]\n  FontFlashSection       const    0x9001'4068       0x4  Kerning_verdana_10_4bpp.o [1]\n  FontFlashSection       const    0x9001'406c       0x4  Kerning_verdana_20_4bpp.o [1]\n  FontFlashSection       const    0x9001'4070       0x4  Kerning_verdana_40_4bpp.o [1]\n  TextFlashSection       const    0x9001'4074       0x2  Texts.o [1]\n                                - 0x9001'4076  0x1'4076\n")),(0,a.kt)("p",null,"We see that the total usage of the external flash is 0x14076 bytes = 82.038 bytes. The majority of that is used by the two images for the Button (two times 0x9f60 bytes = 40.800 bytes). The rest of the data is for 3 fonts. They don't use much space in this example as they only contain the '?' character, because we do not use any texts in this example."),(0,a.kt)("h3",d({},{id:"summary"}),"Summary"),(0,a.kt)("p",null,"The only thing placed in external RAM is the framebuffers. These cannot be found in the linker script as they are not defined as variables in the application. The resolution is 480x272 pixels in 24 bit. We have two framebuffers to the total usage is 480 ","*"," 272 ","*"," 3 * 2 = 786.360 bytes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Memory Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Usage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Internal RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"42.731 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX Screen objects"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"576 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Internal Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"45605 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX Framework"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"12.728 bytes code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"External RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"786.360 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"External Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"82.028 bytes")))),(0,a.kt)("h2",d({},{id:"demo-1"}),"Demo 1"),(0,a.kt)("p",null,"To give another example here are the numbers for the TouchGFX Demo1 which can be found in TouchGFX Designer. It contains 5 screens and more than 100 images:"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/memory-usage/demo1.png",noShadow:"true",mdxType:"Figure"},"STM32F746 Demo 1"),(0,a.kt)("h3",d({},{id:"summary-1"}),"Summary"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Memory Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Usage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Internal RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"51.387 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX Screen objects"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"10.772 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Internal Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"187.768 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"TouchGFX Framework Code"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"85.174 bytes code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"External RAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"786.360 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"External Flash"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"5.281.812 bytes")))))}g.isMDXComponent=!0}}]);