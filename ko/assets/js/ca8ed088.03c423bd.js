"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8301],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=a},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},80284:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return v},default:function(){return k}});var r=n(3905),o=n(44035),i=n(93054),a=n(22425),l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&h(e,n,t[n]);return e};const f={id:"10-physical-buttons",title:"10. Physical Buttons",sidebar_label:"10. Physical Buttons"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/10-physical-buttons",id:"development/board-bring-up/how-to/10-physical-buttons",isDocsHomePage:!1,title:"10. Physical Buttons",description:"Motivation",source:"@site/docs/development/board-bring-up/how-to/10-physical-buttons.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/10-physical-buttons",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/10-physical-buttons",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"10-physical-buttons",title:"10. Physical Buttons",sidebar_label:"10. Physical Buttons"},sidebar:"docs",previous:{title:"9. Touch Controller",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/09-touch-controller"},next:{title:"11. Flash Loader",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/11-flash-loader"}},v=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Goal",id:"goal",children:[{value:"Verification",id:"verification",children:[],level:3}],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Do",id:"do",children:[{value:"Performance is as expected",id:"performance-is-as-expected",children:[],level:3}],level:2}],y={toc:v};function k(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),h),c(t,s({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"motivation"}),"Motivation"),(0,r.kt)("p",null,"Physical buttons can function as external events usable as triggers from the TouchGFX Designer during application development, or simply used as events in the application backend."),(0,r.kt)(i.Z,{mdxType:"Note"},"Skip this step if physical buttons are not relevant for your board bring up."),(0,r.kt)("h2",m({},{id:"goal"}),"Goal"),(0,r.kt)("p",null,"The goal of this section is to develop code that can be used in subsequent TouchGFX HAL- and/or application development."),(0,r.kt)("h3",m({},{id:"verification"}),"Verification"),(0,r.kt)("p",null,"Here are the verification points for this section:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Verification Point"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Rationale"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"MCU is configured"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"MCU GPIOs must be configured to read the state of connected physical buttons.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Connected GPIO can be read"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Once code has been developed to read the physical button state from a GPIO this can be used in sub-sequent TouchGFX HAL development.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Reading performs as expected"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Polling is a part of application render time. If polling takes too long this should be moved to a different thread or made interrupt based.")))),(0,r.kt)("h2",m({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Physical buttons must be connected to GPIOs on the MCU")),(0,r.kt)("h2",m({},{id:"do"}),"Do"),(0,r.kt)("p",null,"The following images show how the schematics might look for a physical button and how it is connected to the MCU"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-userbutton.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-mcu.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"In STM32CubeMX GPIO Port C Pin 13 (PC13) can be configured as an input and configured as a pull-down in the ",(0,r.kt)("strong",{parentName:"p"},"GPIO")," section of the ",(0,r.kt)("strong",{parentName:"p"},"System Core")," category."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-pc13.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-gpioconf.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"The code generated by STM32CubeMX will setup the appropriate GPIO port(s) which can now be read:"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"uint8_t key;\nif (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n{\n    key = 1;\n}\n")),(0,r.kt)("h3",m({},{id:"performance-is-as-expected"}),"Performance is as expected"),(0,r.kt)("p",null,"Polling the state of physical buttons should be possible within 1 ms if the code is executed in the same thread as the TouchGFX Application. If not fast enough, consider moving the code to a separate task, at a later stage or making it interrupt based."))}k.isMDXComponent=!0}}]);