"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3925],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children))}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(11368),o=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},84137:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return w},default:function(){return y}});var n=r(3905),o=r(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&d(e,r,t[r]);return e};const f={id:"hardware-selection-introduction",title:"Hardware Selection Introduction"},m=void 0,h={unversionedId:"development/hardware-selection/hardware-selection-introduction",id:"development/hardware-selection/hardware-selection-introduction",isDocsHomePage:!1,title:"Hardware Selection Introduction",description:"Project activity",source:"@site/docs/development/hardware-selection/hardware-selection-introduction.mdx",sourceDirName:"development/hardware-selection",slug:"/development/hardware-selection/hardware-selection-introduction",permalink:"/4.18/zh-TW/docs/development/hardware-selection/hardware-selection-introduction",tags:[],version:"current",frontMatter:{id:"hardware-selection-introduction",title:"Hardware Selection Introduction"},sidebar:"docs",previous:{title:"Development Introduction",permalink:"/4.18/zh-TW/docs/development/development-introduction"},next:{title:"Preliminary Considerations",permalink:"/4.18/zh-TW/docs/development/hardware-selection/preliminary-considerations"}},w=[],v={toc:w};function y(e){var t,r=e,{components:i}=r,d=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},v),d),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/activities-selected-000.png",noShadow:!0,width:"600",mdxType:"Figure"},"Project activity"),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/components-selected-000.png",noShadow:!0,width:"600",mdxType:"Figure"},"Project component"),(0,n.kt)("p",null,"There are many parameters to consider and evaluate when choosing the hardware platform for running a graphical user interface. This article attempts to address considerations about the MCU, display, external memories, UI performance, etc."),(0,n.kt)("p",null,"It is recommended to read the section on preliminary considerations before hardware components, as there are several parameters and decisions which will impact the choice of hardware."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"preliminary-considerations"}),"Preliminary Considerations")," - contains several pointers to considerations you should take into account before moving on finding the right hardware."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"hardware-components/hardware-selection-mcu"}),"Hardware Components")," - contains information on the different components that makes up a hardware solution and what impact they have on a TouchGFX application.")))}y.isMDXComponent=!0}}]);