"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6698],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,d=p["".concat(a,".").concat(h)]||p[h]||f[h]||i;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,c=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:i,src:c})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:c,target:"_blank"},n.createElement("img",{width:r,height:i,src:c})),n.createElement("p",null,e.children))}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return c}});var n=r(11368),o=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},78367:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return h},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return g},default:function(){return y}});var n=r(3905),o=r(44035),i=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&f(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&f(e,r,t[r]);return e};const h={id:"what-is-touchgfx",title:"What is TouchGFX?"},d=void 0,m={unversionedId:"introduction/what-is-touchgfx",id:"introduction/what-is-touchgfx",isDocsHomePage:!1,title:"What is TouchGFX?",description:"TouchGFX\ub294 X-Cube \ud328\ud0a4\uc9c0\uc778 X-Cube-TouchGFX \ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/what-is-touchgfx.mdx",sourceDirName:"introduction",slug:"/introduction/what-is-touchgfx",permalink:"/4.18/ko/docs/introduction/what-is-touchgfx",tags:[],version:"current",frontMatter:{id:"what-is-touchgfx",title:"What is TouchGFX?"},sidebar:"docs",previous:{title:"Welcome",permalink:"/4.18/ko/docs/introduction/welcome"},next:{title:"Prerequisites",permalink:"/4.18/ko/docs/introduction/prerequisites"}},g=[],b={toc:g};function y(e){var t,r=e,{components:i}=r,f=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),f),c(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX\ub294 X-Cube \ud328\ud0a4\uc9c0\uc778 X-Cube-TouchGFX \ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc774 \ud328\ud0a4\uc9c0\ub9cc \uc788\uc73c\uba74 STM32 \uae30\ubc18 \ud558\ub4dc\uc6e8\uc5b4\uc6a9 GUI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc644\ubcbd\ud788 \uad6c\ud604\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \uae30\ub2a5\uc744 \ud655\ubcf4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX\ub294 2\uac1c\uc758 \ub3c4\uad6c\uc640 1\uac1c\uc758 \ud504\ub808\uc784\uc6cc\ud06c, \uc774\ub807\uac8c \ucd1d 3\uac1c\uc758 \uc8fc\uc694 \ubd80\ubd84\uc73c\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Designer:")," \xa0\uc190\uc27d\uac8c TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ube44\uc8fc\uc5bc\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub294 TouchGFX\uc758 GUI \ube4c\ub354\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Generator:")," A STM32CubeMX plugin where the user can configure and generate a custom TouchGFX Abstraction Layer (AL) for their STM32-based hardware."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Engine:")," UI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ub3d9\ud558\ub294 TouchGFX C++ \ud504\ub808\uc784\uc6cc\ud06c\ub85c, \ud654\uba74 \uc5c5\ub370\uc774\ud2b8, \uc0ac\uc6a9\uc790 \uc774\ubca4\ud2b8 \ubc0f \ud0c0\uc774\ubc0d\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4. \ucca8\ub2e8 TouchGFX \uae30\uc220\uc740 STM32 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\uc5d0 \ucd5c\uc801\ud654\ub418\uc5b4 CPU \ubd80\ud558 \ubc0f \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc744 \ucd5c\uc18c\ud654\ud558\uba74\uc11c \uc131\ub2a5\uc744 \uadf9\ub300\ud654\ud569\ub2c8\ub2e4.")),(0,n.kt)(o.Z,{imageSource:"/img/introduction/what-is-touchgfx/touchgfx-components.png",noShadow:!0,mdxType:"Figure"}))}y.isMDXComponent=!0}}]);