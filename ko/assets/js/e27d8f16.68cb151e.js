"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9258],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),h=o,m=s["".concat(c,".").concat(h)]||s[h]||d[h]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:l,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:l,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){var r=n(67294),o=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=a},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){n.d(t,{C:function(){return l},Z:function(){return a}});var r=n(11368),o=n(35096);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=l();return n(e,t)}},37841:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return v},toc:function(){return b},default:function(){return k}});var r=n(3905),o=n(44035),l=n(93054),a=n(22425),i=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&h(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&h(e,n,t[n]);return e};const f={id:"09-touch-controller",title:"9. Touch Controller",sidebar_label:"9. Touch Controller"},g=void 0,v={unversionedId:"development/board-bring-up/how-to/09-touch-controller",id:"development/board-bring-up/how-to/09-touch-controller",isDocsHomePage:!1,title:"9. Touch Controller",description:"\uac1c\uc694",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/09-touch-controller.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/09-touch-controller",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/09-touch-controller",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"09-touch-controller",title:"9. Touch Controller",sidebar_label:"9. Touch Controller"},sidebar:"docs",previous:{title:"8. Hardware acceleration",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/08-hardware-acceleration"},next:{title:"10. Physical Buttons",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/10-physical-buttons"}},b=[{value:"\uac1c\uc694",id:"motivation",children:[],level:2},{value:"\ubaa9\ud45c",id:"goal",children:[{value:"\ud655\uc778",id:"verification",children:[],level:3}],level:2},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",children:[],level:2},{value:"\uc2e4\ud589",id:"do",children:[{value:"\uc608\uc0c1\ub300\ub85c \uc131\ub2a5\uc774 \ubc1c\ud718\ub418\ub294\uc9c0 \uc5ec\ubd80",id:"performance-is-as-expected",children:[],level:3}],level:2}],y={toc:b};function k(e){var t,n=e,{components:i}=n,h=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),h),c(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"motivation"}),"\uac1c\uc694"),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uc0c1\ud638 \uc791\uc6a9\uc744 \ud560 \uc218 \uc788\uc73c\ub824\uba74 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c \ud130\uce58 \uc88c\ud45c\ub97c \uc77d\uc5b4\uc62c \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774 \ub2e8\uacc4\uc5d0\uc11c \uac1c\ubc1c\ub41c \ucf54\ub4dc\ub294 \uc774\ud6c4 \ub2e8\uacc4\uc5d0\uc11c TouchGFX \ucd94\uc0c1\ud654 \uacc4\uce35(Al) \uc744 \uac1c\ubc1c\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"Note"},"\ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uac00 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uacfc \uad00\ub828\uc774 \uc5c6\ub2e4\uba74 \uc774 \ub2e8\uacc4\ub97c \uac74\ub108\ub6f0\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",m({},{id:"goal"}),"\ubaa9\ud45c"),(0,r.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\uc758 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c \ud130\uce58 \uc88c\ud45c\ub97c \uc77d\uc5b4\uc62c \uc218 \uc788\uac8c \ud558\ub294 \uac83\uc774 \uc774 \ub2e8\uacc4\uc758 \ubaa9\ud45c\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"verification"}),"\ud655\uc778"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\ud655\uc778\uadfc\uac70"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\ud130\uce58 \ucee8\ud2b8\ub864\ub7ec \ubc0f MCU\uc758 \uad6c\uc131 \uc5ec\ubd80"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"MCU\ub294 I2C \uac19\uc740 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c \uc77d\uc5b4\uc62c \uc218 \uc788\ub3c4\ub85d \uad6c\uc131\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\ud130\uce58 \ucee8\ud2b8\ub864\ub7ec \ub808\uc9c0\uc2a4\ud130\uc758 \ud310\ub3c5 \uac00\ub2a5 \uc5ec\ubd80"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"TouchGFX \ucd94\uc0c1\ud654 \uacc4\uce35(Al) \uc740 \uc774 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud574 \ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c \ud130\uce58 \uc88c\ud45c\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc77d\uae30 \uc791\uc5c5\uc774 \uc608\uc0c1\ub300\ub85c \uc218\ud589\ub418\ub294\uc9c0 \uc5ec\ubd80"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc5d0 \ud3f4\ub9c1 \uc2dc\uac04\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ud3f4\ub9c1\uc5d0 \ub108\ubb34 \ub9ce\uc740 \uc2dc\uac04\uc774 \uc18c\uc694\ub418\ub294 \uacbd\uc6b0 \ud130\uce58 \ud3f4\ub9c1\uc744 \ub2e4\ub978 \uc2a4\ub808\ub4dc\ub85c \uc62e\uae30\uac70\ub098 \uc778\ud130\ub7fd\ud2b8 \uae30\ubc18\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",m({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uac00 \uc7a5\ucc29\ub41c \ub514\uc2a4\ud50c\ub808\uc774"),(0,r.kt)("li",{parentName:"ul"},"\ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c \uc77d\uc5b4\uc624\uae30 \uc704\ud55c \ub4dc\ub77c\uc774\ubc84")),(0,r.kt)("h2",m({},{id:"do"}),"\uc2e4\ud589"),(0,r.kt)("p",null,"\uc774 \ub2e8\uacc4\ub294 \ub450 \uac00\uc9c0 \uc694\uc18c\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\ub294\ub370, \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc640 \ud1b5\uc2e0\ud558\ub3c4\ub85d MCU\ub97c \uad6c\uc131\ud558\ub294 \ubd80\ubd84\uacfc \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc640 \ub370\uc774\ud130\ub97c \uc8fc\uace0 \ubc1b\ub3c4\ub85d \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \ubd80\ubd84\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\ub294 I2C \ubc84\uc2a4\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. The I2C communication is configured in STM32CubeMX under Connectivity -> I2C1:"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/touch/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"I2C \uad6c\uc131"),(0,r.kt)("p",null,"\ub300\ub2e4\uc218\uc758 STM32 MCU\ub4e4\uc774 I2C \ucee8\ud2b8\ub864\ub7ec\ub97c 1\uac1c \uc774\uc0c1 \uac00\uc9c0\uace0 \uc788\uc73c\ubbc0\ub85c \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc5d0 \uc5f0\uacb0\ub41c \uac83\uc744 \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624. \ud574\ub2f9 GPIO\ub3c4 \ubc18\ub4dc\uc2dc \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\ub97c \uc704\ud55c \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc\uac00 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 \ucc98\uc74c\ubd80\ud130 \uc0c8\ub85c \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. The STM32Cube Firmware for your MCU contains examples for I2C communication. \uc774\uac83\uc774 \uc2dc\uc791\uc810\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud130\uce58 \uc88c\ud45c\ub97c \uc5bb\uae30 \uc704\ud574 \uc77d\uc5b4\uc640\uc57c \ud560 \ub808\uc9c0\uc2a4\ud130\uc758 \uc815\ubcf4\ub294 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc758 \ub370\uc774\ud130 \uc2dc\ud2b8\uc5d0\uc11c \ud655\uc778\ud558\uc2ed\uc2dc\uc624. \uac00\uc7a5 \uba3c\uc800 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc758 I2C \uc8fc\uc18c\ub97c \ud655\uc778\ud55c \ub2e4\uc74c, \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 'device id' \ub808\uc9c0\uc2a4\ud130\ub97c \uc77d\uc5b4\uc635\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uae30\ubcf8 I2C\ub97c \uc2e4\ud589\ud558\uace0 \uc788\ub2e4\uba74 \ucd94\ud6c4\uc5d0 TouchGFX\uc5d0 \ud1b5\ud569\ud560 \ub54c \ud544\uc694\ud55c \ub4dc\ub77c\uc774\ubc84 \ud568\uc218\ub97c \uac1c\ubc1c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 \ud130\uce58\uac00 \uc788\uc73c\uba74 true\ub97c, \uc5c6\uc73c\uba74 false\ub97c \ubc18\ud658\ud558\uba70 \uc88c\ud45c\ub97c \uc81c\uacf5\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798\uc758 \ucf54\ub4dc \uc608\uc2dc\uc5d0\ub294 myTouchController_GetState \ud568\uc218\ub97c \ud1b5\ud574 \ucd94\uc0c1\ud654\ub418\uace0 \uc788\ub294 \ub4dc\ub77c\uc774\ubc84 \ucf54\ub4dc\uc758 \uc815\ubcf4\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"    uint16_t x;\n    uint16_t y;\n\n    TouchControllerState state;\n    if (myTouchController_GetState(&state))\n    {\n        x = state.touchY;\n        y = state.touchX;\n        //break point here\n    }\n")),(0,r.kt)("p",null,"\ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c \uc62c\ubc14\ub978 x, y \uac12\uc774 \uc218\uc2e0\ub418\uc5c8\ub294\uc9c0 \ub514\ubc84\uac70\ub97c \ud1b5\ud574 \ud655\uc778\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("p",null,"\uba87\uba87 \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\ub294 \uc5ec\ub7ec \uac1c\uc758 \ud130\uce58 \ud3ec\uc778\ud2b8\ub97c \ubcf4\uace0\ud560 \uc218 \uc788\ub294\ub370, TouchGFX\uc5d0\uc11c\ub294 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uae30\ub2a5\uc774\ubbc0\ub85c \ubb34\uc2dc\ud558\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0\ub294 \uccab \ubc88\uc9f8 \ud130\uce58 \ud3ec\uc778\ud2b8\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,'"TouchGFX AL \uac1c\ubc1c" \ubb38\uc11c\uc758',(0,r.kt)("a",m({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-architecture"}),"AL(Abstraction Layer)"),"\uc5d0\ub294 \uc774\ub7ec\ud55c \uac12\ub4e4\uc744 TouchGFX\uc5d0 \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc774 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",m({},{id:"performance-is-as-expected"}),"\uc608\uc0c1\ub300\ub85c \uc131\ub2a5\uc774 \ubc1c\ud718\ub418\ub294\uc9c0 \uc5ec\ubd80"),(0,r.kt)("p",null,"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ub3d9\uc77c\ud55c \uc2a4\ub808\ub4dc\uc5d0\uc11c \ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\ub294 \uacbd\uc6b0, 1ms \ub0b4\uc5d0 \ud130\uce58\ub97c \uc0d8\ud50c\ub9c1\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc18d\ub3c4\uac00 \ub9cc\uc871\uc2a4\ub7fd\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 \uc774\ud6c4 \ub2e8\uacc4\uc5d0\uc11c \ucf54\ub4dc\ub97c \ubcc4\ub3c4\uc758 \uc791\uc5c5\uc73c\ub85c \uc62e\uae30\ub294 \ubc29\uc548\uc744 \uace0\ub824\ud574\ubcf4\uc2ed\uc2dc\uc624."))}k.isMDXComponent=!0}}]);