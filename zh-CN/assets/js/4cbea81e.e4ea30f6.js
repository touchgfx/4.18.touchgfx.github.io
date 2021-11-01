(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8183],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,b=g["".concat(l,".").concat(d)]||g[d]||s[d]||a;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=o},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},1836:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return f},default:function(){return y}});var r=n(3905),i=n(44035),a=n(93054),o=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&g(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&g(e,n,t[n]);return e};const b={id:"debugging",title:"Debugging"},h=void 0,m={unversionedId:"development/ui-development/working-with-touchgfx/debugging",id:"development/ui-development/working-with-touchgfx/debugging",isDocsHomePage:!1,title:"Debugging",description:"As a TouchGFX application is a set of C++ files generated by TouchGFX Designer, TouchGFX Generator and written by the developer, it can be debugged as any other C++ application.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/debugging.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/debugging",permalink:"/4.18/zh-CN/docs/development/ui-development/working-with-touchgfx/debugging",version:"current",frontMatter:{id:"debugging",title:"Debugging"},sidebar:"docs",previous:{title:"Compiling & Flashing",permalink:"/4.18/zh-CN/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"},next:{title:"Examples and Board Specific Demos",permalink:"/4.18/zh-CN/docs/development/ui-development/working-with-touchgfx/examples"}},f=[{value:"Target Debugging",id:"target-debugging",children:[]},{value:"Simulator Debugging",id:"simulator-debugging",children:[]},{value:"Using the DebugPrinter",id:"using-the-debugprinter",children:[{value:"DebugPrinter Classes",id:"debugprinter-classes",children:[]}]}],k={toc:f};function y(e){var t,n=e,{components:o}=n,g=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},k),g),u(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"As a TouchGFX application is a set of C++ files generated by TouchGFX Designer, TouchGFX Generator and written by the developer, it can be debugged as any other C++ application."),(0,r.kt)("h2",d({},{id:"target-debugging"}),"Target Debugging"),(0,r.kt)("p",null,"If you are using an IDE like IAR Workbench, Keil uVision or STM32CubeIDE, debugging on target is straight forward using the available mechanisms of that IDE. TouchGFX projects generated by TouchGFX Generator or directly from a TouchGFX Board Setup is ready for debugging using the selected tool chain."),(0,r.kt)("p",null,"Board bring up code and TouchGFX AL is executed only on your target board and needs to be debugged there. The UI part of your application can be debugged either on target or using the simulator. On target you will typically debug things like performance issues, such as animation speed, update frequency and responsiveness. Other UI specific issues can be debugged on target but is often faster to debug using the simulator."),(0,r.kt)("h2",d({},{id:"simulator-debugging"}),"Simulator Debugging"),(0,r.kt)("p",null,"Debugging UI related issues such as animation movements, transitions, element updates, program logic and so on, is in most cases much more efficient to test and debug using the simulator instead of flashing your board each time."),(0,r.kt)("p",null,"TouchGFX applications comes with support for Visual Studio and supplies and maintains a project file for it. Using Visual Studio you are able to run the simulator in debug mode, utilizing all the debug features of the IDE."),(0,r.kt)("p",null,"You are not restricted to Visual Studio if you want to debug using the simulator. The application can be compiled with GCC and if you are using a different IDE this can most likely be set up to debug a GCC compiled project. However, you need to configure your IDE to do this on your own."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/debugging/visual-studio.png",width:"640",mdxType:"Figure"},"Debugging in Visual Studio"),(0,r.kt)("h2",d({},{id:"using-the-debugprinter"}),"Using the DebugPrinter"),(0,r.kt)("p",null,"The DebugPrinter class is an easy way to print debug messages on the display without adding a TextArea or other widgets to the screens. For example, this can be used to show events from a backend or measurements like FPS or rendering time."),(0,r.kt)("p",null,"Before you can use the DebugPrinter you need to allocate an instance and pass it to the Application class. This can be done e.g. in the constructor of FrontendApplication:"),(0,r.kt)("p",null,"The debug printer needs to be compatible with the framebuffer format. Here we add a 16bpp debug printer in ",(0,r.kt)("inlineCode",{parentName:"p"},"gui/src/common/FrontendApplication.cpp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/FrontendApplication.hpp>\n\n#include <platform/driver/lcd/LCD16bpp.hpp>\nLCD16DebugPrinter lcd16bppDebugPrinter;\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n  : FrontendApplicationBase(m, heap)\n{\n  lcd16bppDebugPrinter.setPosition(0, 0, 240, 40);\n  lcd16bppDebugPrinter.setScale(2);\n  lcd16bppDebugPrinter.setColor(0x00); //black\n  Application::setDebugPrinter(&lcd16bppDebugPrinter);\n}\n")),(0,r.kt)("p",null,"Here we have configured the DebugPrinter to write in the upper 240 x 40 pixels.",(0,r.kt)("br",{parentName:"p"}),"\n","In your application you can now print a string using:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'char debugStringBuffer[30];\nvoid updateDebugString()\n{\n  static int count = 0;\n  count++;\n  snprintf(debugStringBuffer, sizeof(debugStringBuffer), "tick: %d", count);\n  Application::getDebugPrinter()->setString(debugStringBuffer);\n  Application::invalidateDebugRegion();\n}\n')),(0,r.kt)(a.Z,{mdxType:"Note"},"Characters from ascii 32 (space) to ascii 126 ('~') are available."),(0,r.kt)("h3",d({},{id:"debugprinter-classes"}),"DebugPrinter Classes"),(0,r.kt)("p",null,"The DebugPrinter instance must be compatible to the LCD class used. This table lists the DebugPrinter class names:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"LCD class"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"DebugPrinter class"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD1bpp"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD1DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD2bpp"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD2DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD4bpp"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD4DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD8bpp_ARGB2222"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD8ARGB2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD8bpp_ABGR2222"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD8ABGR2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD8bpp_RGBA2222"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD8RGBA2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD8bpp_BGRA2222"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD8BGRA2222DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD16bpp"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD16DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD16bppSerialFlash"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD16DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD24bpp"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD24DebugPrinter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD32bpp"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LCD32DebugPrinter")))),(0,r.kt)("p",null,"Use the DebugPrinter class that matches the LCD class you are using."))}y.isMDXComponent=!0}}]);