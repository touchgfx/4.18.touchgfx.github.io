"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[852],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=o,f=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class o extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,r){var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,r){var n=r(67294),o=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=i},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return i}});var n=r(11368),o=r(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},45349:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return v},default:function(){return k}});var n=r(3905),o=r(44035),a=r(93054),i=r(22425),l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&p(e,r,t[r]);return e};const m={id:"09-touch-controller",title:"9. Touch Controller",sidebar_label:"9. Touch Controller"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/09-touch-controller",id:"development/board-bring-up/how-to/09-touch-controller",isDocsHomePage:!1,title:"9. Touch Controller",description:"Motivation",source:"@site/docs/development/board-bring-up/how-to/09-touch-controller.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/09-touch-controller",permalink:"/4.18/docs/development/board-bring-up/how-to/09-touch-controller",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"09-touch-controller",title:"9. Touch Controller",sidebar_label:"9. Touch Controller"},sidebar:"docs",previous:{title:"8. Hardware acceleration",permalink:"/4.18/docs/development/board-bring-up/how-to/08-hardware-acceleration"},next:{title:"10. Physical Buttons",permalink:"/4.18/docs/development/board-bring-up/how-to/10-physical-buttons"}},v=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Goal",id:"goal",children:[{value:"Verification",id:"verification",children:[],level:3}],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Do",id:"do",children:[{value:"Performance is as expected",id:"performance-is-as-expected",children:[],level:3}],level:2}],y={toc:v};function k(e){var t,r=e,{components:l}=r,p=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},y),p),c(t,u({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h2",f({},{id:"motivation"}),"Motivation"),(0,n.kt)("p",null,"Touch coordinates must be readable from a touch controller for the user to be able to interact with the application. The code developed in this step will be used later to develop the TouchGFX abstraction layer at a later stage."),(0,n.kt)(a.Z,{mdxType:"Note"},"Skip this step if a touch controller is not relevant for your board bring up."),(0,n.kt)("h2",f({},{id:"goal"}),"Goal"),(0,n.kt)("p",null,"The goal of this step is to ensure that touch coordinates can be read from the touch controller on your display."),(0,n.kt)("h3",f({},{id:"verification"}),"Verification"),(0,n.kt)("p",null,"Here are the verification points for this section:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Verification Point"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Rationale"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Touch controller and MCU are configured"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"MCU must be configured to read from the touch controller over e.g. I2C.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Touch controller registers can be read"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The TouchGFX abstraction layer can use this code to get the touch coordinates from the controller.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Reading performs as expected"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Polling is a part of application render time. If polling takes too long touch polling should be moved to a different thread or made interrupt based.")))),(0,n.kt)("h2",f({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Display with touch controller"),(0,n.kt)("li",{parentName:"ul"},"Drivers to read from touch controller")),(0,n.kt)("h2",f({},{id:"do"}),"Do"),(0,n.kt)("p",null,"This step consists of two elements: Configure the MCU to communicate with the touch controller, and write driver code to talk to the touch controller."),(0,n.kt)("p",null,"Most touch controllers are connected to a I2C bus. The I2C communication is configured in STM32CubeMX under Connectivity -> I2C1:"),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/touch/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"Configuring I2C"),(0,n.kt)("p",null,"Many STM32 MCUs have more than one I2C controller, so select the one connected to your touch controller. Remember to configure the relevant GPIOs also."),(0,n.kt)("p",null,'If you do not have driver code for your touch controller you need to\nwrite it from scratch. The STM32Cube Firmware for your MCU contains\nexamples for I2C communication. These can be a start. Check the\ndatasheet for the touch controller what registers to read to get the\ntouch coordinates. The first thing to check is the I2C address of the\ntouch controller and then read a "device id" registers for testing.'),(0,n.kt)("p",null,"When you have the basic I2C running you need to develop a driver\nfunction that we will need when integrating with TouchGFX later. The\nfunction should return true if there is a touch, false if not, and\nalso provide the coordinates."),(0,n.kt)("p",null,"The code example below shows how this code might look, driver code\nbeing abstracted by the function ",(0,n.kt)("inlineCode",{parentName:"p"},"myTouchController_GetState"),":"),(0,n.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"    uint16_t x;\n    uint16_t y;\n\n    TouchControllerState state;\n    if (myTouchController_GetState(&state))\n    {\n        x = state.touchY;\n        y = state.touchX;\n        //break point here\n    }\n")),(0,n.kt)("p",null,"Check with your debugger that the correct x and y values are received\nfrom the touch controller."),(0,n.kt)("p",null,"Some touch controllers are able to report multiple touch points. This\nis not supported by TouchGFX and can be ignored. Most often you just\nselect the first touch point."),(0,n.kt)("p",null,'In the "TouchGFX AL Development" article ',(0,n.kt)("a",f({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-architecture"}),"Abstraction Layer")," it is explained how to send these\nvalues to TouchGFX."),(0,n.kt)("h3",f({},{id:"performance-is-as-expected"}),"Performance is as expected"),(0,n.kt)("p",null,"Sampling touch should be possible within 1 ms if the code is executed\nin the same thread as the TouchGFX Application. If not fast enough,\nconsider moving the code to a separate task, at a later stage."))}k.isMDXComponent=!0}}]);