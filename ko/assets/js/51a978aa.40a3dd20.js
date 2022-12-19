"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4201],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||r;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var o=n(67294);class a extends o.Component{render(){return o.createElement("div",{class:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var o=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,l=(0,a.Z)(e.imageSource);return t?o.createElement("div",{class:"figure noshadow"},o.createElement("a",{href:l,target:"_blank"},o.createElement("img",{width:n,height:r,src:l})),o.createElement("p",null,e.children)):o.createElement("div",{class:"figure"},o.createElement("a",{href:l,target:"_blank"},o.createElement("img",{width:n,height:r,src:l})),o.createElement("p",null,e.children))}},80435:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return x},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return k}});var o=n(3905),a=n(44035),r=n(22425),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&d(e,n,t[n]);return e};const f={id:"using-non-memory-mapped-flash",title:"\uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ubbf8\uc9c0 \uc800\uc7a5"},h=void 0,b={unversionedId:"development/scenarios/using-non-memory-mapped-flash",id:"development/scenarios/using-non-memory-mapped-flash",title:"\uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ubbf8\uc9c0 \uc800\uc7a5",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \ubc14\uc774\ub108\ub9ac \ud30c\uc77c\uc5d0 \ubaa8\ub4e0 \uc774\ubbf8\uc9c0\ub97c \uc5f0\uacb0\ud558\ub294 \ubc29\ubc95\uacfc \ub7f0\ud0c0\uc784\uc5d0\uc11c \ube44\ud2b8\ub9f5 \uce90\uc2dc\uc640 \ud568\uaed8 \ud574\ub2f9 \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubd05\ub2c8\ub2e4. TouchGFX\ub294 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub41c \ube44\ud2b8\ub9f5\uc5d0 \ub300\ud574 \uadf8\ub9ac\uae30 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uc9c0\ub9cc, RAM\uc5d0 \ube44\ud2b8\ub9f5\uc744 \uce90\uc2f1\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ube44\ud2b8\ub9f5\uc744 \uc0ac\uc6a9 \uac00\ub2a5\ud558\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/using-non-memory-mapped-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-non-memory-mapped-flash",permalink:"/4.18/ko/docs/development/scenarios/using-non-memory-mapped-flash",draft:!1,tags:[],version:"current",frontMatter:{id:"using-non-memory-mapped-flash",title:"\uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ubbf8\uc9c0 \uc800\uc7a5"},sidebar:"docs",previous:{title:"\ubd80\ubd84 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ud1b5\ud55c \uba54\ubaa8\ub9ac \uc0ac\uc6a9 \uc808\uac10",permalink:"/4.18/ko/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"},next:{title:"\uc774\ubbf8\uc9c0\uc640 \uae00\uaf34\uc5d0\uc11c \uc9c1\ub82c \ud50c\ub798\uc2dc \uc0ac\uc6a9",permalink:"/4.18/ko/docs/development/scenarios/using-serial-flash"}},g={},k=[{value:"\ud50c\ub798\uc2dc\uc5d0\uc11c \uce90\uc2dc\ub85c \ube44\ud2b8\ub9f5 \ub370\uc774\ud130 \ubcf5\uc0ac",id:"copying-bitmap-data-from-flash-to-cache",level:3},{value:"BitmapDatabase \ud14c\uc774\ube14",id:"the-bitmapdatabase-table",level:2},{value:"\ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8 \uc218\uc815",id:"linker-script-modifications",level:2},{value:"BlockCopy \ud568\uc218 \uc218\uc815",id:"modifying-the-blockcopy-function",level:2},{value:"RAM\uc5d0 \uc774\ubbf8\uc9c0 \ub9c1\ud06c",id:"linking-images-to-ram",level:2}],y={toc:k};function x(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var o in e)u.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&p)for(var o of p(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=m(m({},y),d),i(t,c({components:l,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \ubc14\uc774\ub108\ub9ac \ud30c\uc77c\uc5d0 \ubaa8\ub4e0 \uc774\ubbf8\uc9c0\ub97c \uc5f0\uacb0\ud558\ub294 \ubc29\ubc95\uacfc \ub7f0\ud0c0\uc784\uc5d0\uc11c \ube44\ud2b8\ub9f5 \uce90\uc2dc\uc640 \ud568\uaed8 \ud574\ub2f9 \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubd05\ub2c8\ub2e4. TouchGFX\ub294 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub41c \ube44\ud2b8\ub9f5\uc5d0 \ub300\ud574 \uadf8\ub9ac\uae30 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uc9c0\ub9cc, RAM\uc5d0 \ube44\ud2b8\ub9f5\uc744 \uce90\uc2f1\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ube44\ud2b8\ub9f5\uc744 \uc0ac\uc6a9 \uac00\ub2a5\ud558\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ube44\ud2b8\ub9f5 \uce90\uc2dc\uc5d0 \ub300\ud55c \uc77c\ubc18\uc801\uc778 \uc124\uba85\uc740 ",(0,o.kt)("a",m({parentName:"p"},{href:"../ui-development/touchgfx-engine-features/caching-bitmaps"}),"\ube44\ud2b8\ub9f5 \uce90\uc2f1"),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,o.kt)("p",null,"\uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 \ube44\ud2b8\ub9f5 \uce90\uc2dc\ub97c \uc124\uc815\ud588\uace0 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\uc5d0 \ube44\ud2b8\ub9f5\uc744 \uc800\uc7a5\ud55c\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4. USB \uc2a4\ud1a0\ub9ac\uc9c0, NAND \ud50c\ub798\uc2dc \ub4f1\uc774 \uc5ec\uae30\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ubbf8\uc9c0\ub97c \ud2b9\uc815 \uc8fc\uc18c\uc5d0 \uc5f0\uacb0\ud558\uace0, \uc774\ubbf8\uc9c0\ub97c \ud30c\uc77c\ub85c \ubcf5\uc0ac\ud558\uba70, TouchGFX\uac00 \ud30c\uc77c\uc744 \uce90\uc2dc\ub85c \ubcf5\uc0ac\ud558\ub3c4\ub85d \ub3d5\ub294 \uac83\uc774 \ubaa9\uc801\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",m({},{id:"copying-bitmap-data-from-flash-to-cache"}),"\ud50c\ub798\uc2dc\uc5d0\uc11c \uce90\uc2dc\ub85c \ube44\ud2b8\ub9f5 \ub370\uc774\ud130 \ubcf5\uc0ac"),(0,o.kt)("p",null,"\ube44\ud2b8\ub9f5\uc744 \uce90\uc2f1\ud560 \ub54c TouchGFX\ub294 \uc6d0\ub798 \uc704\uce58\uc5d0\uc11c \ube44\ud2b8\ub9f5 \uce90\uc2dc\ub85c \ud53d\uc140\uc744 \ubcf5\uc0ac\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub7ec\ud55c \ubcf5\uc0ac \uc791\uc5c5\uc740 HAL \ud074\ub798\uc2a4\uc5d0\uc11c \uc774 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uc5ec \uc218\ud589\ub429\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"HAL.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n")),(0,o.kt)("p",null,"\ube44\ud2b8\ub9f5\uc774 \uc8fc\uc18c \uc9c0\uc815\uc774 \uac00\ub2a5\ud55c \uc77c\ubc18 \ud50c\ub798\uc2dc(\uc608: \ub0b4\ubd80 \ud50c\ub798\uc2dc \ub610\ub294 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uc758 \uc678\ubd80 \ud50c\ub798\uc2dc)\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 TouchGFX \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \uc81c\uacf5\ub418\ub294 \uc77c\ubc18\uc801\uc778 blockCopy \ud568\uc218\ub85c\ub3c4 \ucda9\ubd84\ud558\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uc870\uce58\ub97c \ucde8\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubc18\uba74\uc5d0 \ube44\ud2b8\ub9f5\uc774 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uacfc \uac19\uc774 \uc8fc\uc18c \uc9c0\uc815\uc774 \ubd88\uac00\ub2a5\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc800\uc7a5\ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc77c\ubc18\uc801\uc778 \uad6c\ud604\uc73c\ub85c\ub294 \ubd88\ucda9\ubd84\ud558\ubbc0\ub85c \ud2b9\uc815 \ud50c\ub798\uc2dc \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0\uc11c \uc77d\uae30\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc5c5\ub370\uc774\ud2b8\ub41c \ubc84\uc804\uc744 \uc81c\uacf5\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud558\uc9c0\ub9cc \uc6b0\uc120\uc740 \ube44\ud2b8\ub9f5\uc774 \uace0\uc815 \uc8fc\uc18c\uc5d0 \ub9c1\ud06c\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("h2",m({},{id:"the-bitmapdatabase-table"}),"BitmapDatabase \ud14c\uc774\ube14"),(0,o.kt)("p",null,"TouchGFX\uc758 \ubaa8\ub4e0 \ube44\ud2b8\ub9f5\uc740 generated/images/src \ud3f4\ub354\uc758 .cpp \ud30c\uc77c\uc5d0 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc5ec\uae30\uc11c \ube44\ud2b8\ub9f5\uc740 \ubc14\uc774\ud2b8 \ubc30\uc5f4\ub4e4\uc758 \ud615\ud0dc\ub85c \ud45c\ud604\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \ubc30\uc5f4\ub4e4\uc740 C++ \ucef4\ud30c\uc77c\ub7ec\uc5d0 \uc758\ud574 \ub2e4\ub978 \uc18c\uc2a4 \ucf54\ub4dc \ud30c\uc77c\ub85c \ucef4\ud30c\uc77c\ub41c \ub2e4\uc74c, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub9c1\ud06c\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c\uc740 \ud68c\uc804\ud558\ub294 \ub85c\uace0\ub97c \ubcf4\uc5ec\uc8fc\ub294 \ubc84\ud2bc\uacfc \ud14d\uc2a4\ucc98 \ub9e4\ud37c\uac00 \ud3ec\ud568\ub41c \uac04\ub2e8\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc2a4\ud06c\ub9b0\uc0f7\uc785\ub2c8\ub2e4."),(0,o.kt)(a.Z,{imageSource:"/img/development/ui-development/scenarios/using-non-memory-mapped-flash/screen-shot.webp",mdxType:"Figure"},"\ubc84\ud2bc\uacfc \ud14d\uc2a4\ucc98 \ub9e4\ud37c"),(0,o.kt)("p",null,"\uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 Button_Pressed, Button_Released, Logo\uc758 \uc138 \uac00\uc9c0 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub7ec\ud55c \uc138 \uac1c\uc758 \ube44\ud2b8\ub9f5\uc740 .cpp \ud30c\uc77c\ub85c \ubcc0\ud658\ub418\uace0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc77c\ubd80\ub85c\uc11c \ub9c1\ud06c\ub429\ub2c8\ub2e4. \uc774\ubbf8\uc9c0\ub294 bitmap_database\ub77c\ub294 \ud14c\uc774\ube14\uc5d0\uc11c \ucc38\uc870\ub429\ub2c8\ub2e4. \uc774 \ud14c\uc774\ube14\uc740 BitmapDatabase.cpp \ud30c\uc77c\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uc704\uc758 \uc608\uc81c\uc5d0\uc11c \uac00\uc838\uc628 \ud14c\uc774\ube14\uc785\ub2c8\ub2e4(\uc77c\ubd80 \uc138\ubd80 \uc815\ubcf4\ub294 \uc81c\uac70)."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"BitmapDatabase.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"extern const unsigned char _blue_buttons_round_edge_small[];\nextern const unsigned char _blue_buttons_round_edge_small_pressed[];\nextern const unsigned char _blue_logo_touchgfx_logo[];\n\nconst touchgfx::Bitmap::BitmapData bitmap_database[] =\n{\n    { _blue_buttons_round_edge_small, ... },\n    { _blue_buttons_round_edge_small_pressed, ... },\n    { _blue_logo_touchgfx_logo, ... }\n};\n\n")),(0,o.kt)("p",null,"\uba3c\uc800 \uc120\uc5b8\ub41c \ubc30\uc5f4\ub4e4\uc740 \uac1c\ubcc4 \ube44\ud2b8\ub9f5\uc758 \ud53d\uc140\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubc30\uc5f4\ub4e4\uc740 \ub2e4\ub978 .cpp \ud30c\uc77c\uc5d0 \uc815\uc758\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. bitmap_database \ubc30\uc5f4\uc5d0\ub294 \uc774 \ubc30\uc5f4\ub4e4\uc758 \uc8fc\uc18c\uac00 \ubcf4\uad00\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX\ub294 \uc774 \ubc30\uc5f4\uc744 \uc0ac\uc6a9\ud558\uc5ec \ube44\ud2b8\ub9f5\uc758 \ud53d\uc140\uc758 \uc8fc\uc18c\ub97c \ucc3e\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud504\ub85c\uadf8\ub798\uba38\uac00 \ube44\ud2b8\ub9f5 \uce90\uc2f1\uc744 \uc694\uccad\ud558\uba74 TouchGFX\ub294 \ud50c\ub798\uc2dc(bitmap_database \ubc30\uc5f4)\uc5d0\uc11c \ube44\ud2b8\ub9f5\uc758 \uc8fc\uc18c\ub97c \ucc3e\uc544\uc11c \uc5ec\uae30\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ubcf5\uc0ac\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",m({},{id:"linker-script-modifications"}),"\ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8 \uc218\uc815"),(0,o.kt)("p",null,"\ub9c1\ucee4\ub294 \ube44\ud2b8\ub9f5\uc758 \uc8fc\uc18c\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4. \uc774\ub294 \ube44\ud2b8\ub9f5\uc774 \uc800\uc7a5\ub41c \uc139\uc158\uc744 \ud1a0\ub300\ub85c \ud569\ub2c8\ub2e4. TouchGFX\uc758 \ubaa8\ub4e0 \ube44\ud2b8\ub9f5\uc740 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,o.kt)("strong",{parentName:"p"},"ExtFlashSection"),"\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud45c\uc900 \ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8(\uc5ec\uae30\uc11c\ub294 GCC\uc6a9)\ub294 \ub2e4\ub978 \uc77d\uae30 \uc804\uc6a9 \ub370\uc774\ud130\uc640 \ud568\uaed8 \uc774 \uc139\uc158\uc744 \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 \uc8fc\uc18c ",(0,o.kt)("strong",{parentName:"p"},"0x24000000"),"\uc758 ExtFlashSection\uc5d0 \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\ub418\uace0 \uc788\uc9c0 \uc54a\uc740(\ucf54\ub4dc \ub610\ub294 \ub370\uc774\ud130 \uc8fc\uc18c \uacf5\uac04\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc740) \uc8fc\uc18c\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uba3c\uc800, \uc77c\ubc18\uc801\uc778 \ub0b4\ubd80 FLASH \ubc0f RAM \uc601\uc5ed\uc5d0 \ub354\ud574 \uc0c8 \uba54\ubaa8\ub9ac \uc601\uc5ed(\uc8fc\uc18c 0x24000000\uc758 USB \ud50c\ub798\uc2dc)\uc744 \uc815\uc758\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K\n  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K\n  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M\n}\n")),(0,o.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c, USB \uc601\uc5ed\uc5d0 ExtFlashSection\uc744 \uc800\uc7a5\ud558\ub3c4\ub85d \ub9c1\ucee4\uc5d0 \uc9c0\uc2dc\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"ExtFlashSection :\n{\n   *(ExtFlashSection ExtFlashSection.*)\n} >USB\n")),(0,o.kt)("p",null,"\ub9c1\ud06c \uc774\ud6c4\uc5d0 \ub9f5 \ud30c\uc77c(application.map)\uc744 \uac80\uc0ac\ud558\uc5ec \ube44\ud2b8\ub9f5\uc758 \uc8fc\uc18c\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \ubd80\ubd84\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"application.map"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"ExtFlashSection\n                0x24000000    0x23ec0\n *(ExtFlashSection ExtFlashSection.*)\n ExtFlashSection\n                0x24000000    0x10000 TouchGFX/build/.../Blue_Logo_touchgfx_logo.o\n                0x24000000                _blue_logo_touchgfx_logo\n ExtFlashSection\n                0x24010000     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small.o\n                0x24010000                _blue_buttons_round_edge_small\n ExtFlashSection\n                0x24019f60     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small_pressed.o\n                0x24019f60                _blue_buttons_round_edge_small_pressed\n")),(0,o.kt)("p",null,"\uc5ec\uae30\ub97c \ubcf4\uba74 \uc774\ubbf8\uc9c0\uc758 \uc804\uccb4 \ud06c\uae30\uac00 0x23ec0 = 147.136 \ubc14\uc774\ud2b8\uc784\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ube44\ud2b8\ub9f5\uc744 \ubcf4\uc720\ud558\uace0 \uc788\ub294 \uc138 \uac1c\uc758 \ubc30\uc5f4\uc774 \uc8fc\uc18c 0x24000000\ubd80\ud130 \uc21c\ucc28\uc801\uc73c\ub85c \uc704\uce58\ud574 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ube44\ud2b8\ub9f5 \ub370\uc774\ud130\ub97c SD \uce74\ub4dc\ub85c \uc62e\uae34\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uac04\ub2e8\ud55c objcopy \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec .elf \ud30c\uc77c\uc5d0\uc11c \ube44\ud2b8\ub9f5\uc5d0 \ub300\ud55c \uc774\uc9c4 \ub370\uc774\ud130\ub97c \ucd94\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf\n$ ls -l images.bin\n-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin\n")),(0,o.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \uc774\ubbf8\uc9c0 \ubc14\uc774\ud2b8 \ubc30\uc5f4\ub9cc \ud3ec\ud568\ud558\ub294 \ud30c\uc77c(images.bin)\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc740 SD \uce74\ub4dc\uc778 USB \ud50c\ub798\uc2dc\uc5d0 \ubcf5\uc0ac\ud558\uac70\ub098, \ud50c\ub798\uc2dc \uce69\uc5d0 \ud504\ub85c\uadf8\ub798\ubc0d\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\uc81c\ub294 TouchGFX\uac00 \uc8fc\uc18c\uac00 0x24000000\ubcf4\ub2e4 \uc704\uc778 \ub370\uc774\ud130\ub97c \uc694\uccad\ud560 \ub54c SD \uce74\ub4dc\uc758 images.bin \ud30c\uc77c\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",m({},{id:"modifying-the-blockcopy-function"}),"BlockCopy \ud568\uc218 \uc218\uc815"),(0,o.kt)("p",null,"\ube44\ud2b8\ub9f5\uc744 RAM\uc5d0 \uce90\uc2f1\ud558\uba74 TouchGFX\uac00 HAL::BlockCopy\ub97c \ud638\ucd9c\ud558\uc5ec \ub370\uc774\ud130\ub97c \uac00\uc838\uc628\ub2e4\ub294 \uc810\uc744 \uae30\uc5b5\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub97c SD \uce74\ub4dc\uc758 \ub370\uc774\ud130\uc5d0 \ub9c1\ud06c\uc2dc\ud0a4\uae30 \uc704\ud574 \ud2b9\uc815 HAL \ud074\ub798\uc2a4\uc5d0\uc11c \uc0c8\ub85c\uc6b4 BlockCopy\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \uc774 \ud074\ub798\uc2a4\ub97c TouchGFXHAL(TouchGFX Generator\uc5d0\uc11c \uc0dd\uc131)\uc774\ub77c\uace0 \uce6d\ud569\ub2c8\ub2e4."),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"TouchGFXHal.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"class TouchGFXHAL : public TouchGFXGeneratedHAL\n{\npublic:\n    ...\n    virtual bool blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n}\n")),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"TouchGFXHal.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"// This function is called whenever a bitmap is cached. Must copy a number of bytes from the (non-memory-mapped) source\n// to the cache.\nbool TouchGFXHAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes)\n{\n  // If requested data is located within the memory block we have assigned for ExtFlashSection,\n  // provide an implementation for data copying.\n  if (src >= 0x24000000 && src < 0x24100000)\n  {\n    void* dataOffset = src - 0x24000000;\n    // In this example we assume graphics is placed in SD card, and that we have an appropriate function\n    // for copying data from there.\n    sdcard_read(dest, dataOffset, numBytes);\n    return true;\n  }\n  else\n  {\n    // For all other addresses, just use the default implementation.\n    // This is important, as blockCopy is also used for other things in the core framework.\n    return HAL::blockCopy(dest, src, numBytes);\n  }\n}\n")),(0,o.kt)("p",null,"\uc774\uc81c SD \uce74\ub4dc\uc5d0\uc11c \ube44\ud2b8\ub9f5 \uce90\uc2f1\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"TouchGFX\uac00 \uce90\uc2f1\ub418\uc9c0 \uc54a\uc740 \ube44\ud2b8\ub9f5\uc5d0 \ub300\ud55c \uadf8\ub9ac\uae30\ub97c \uc2dc\ub3c4\ud558\ub294 \uacbd\uc6b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"bitmap_database")," \ud14c\uc774\ube14\uc5d0 \uc788\ub294 \uc8fc\uc18c\uc5d0\uc11c \ud53d\uc140\uc744 \uc77d\uc5b4\uc62c \uac83\uc785\ub2c8\ub2e4. \uc774 \uc8fc\uc18c\ub294 0x24000000 - 0x24100000 \ubc94\uc704 \ub0b4\uc5d0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc77d\uae30 \uc791\uc5c5\uc5d0\uc11c \uc608\uc678\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",m({},{id:"linking-images-to-ram"}),"RAM\uc5d0 \uc774\ubbf8\uc9c0 \ub9c1\ud06c"),(0,o.kt)("p",null,"\uac00\uc6a9 RAM\uc758 \uc6a9\ub7c9\uc774 \ubaa8\ub4e0 \uc774\ubbf8\uc9c0\ub97c \uc800\uc7a5\ud560 \ub9cc\ud07c \ucda9\ubd84\ud788 \ud070 \uacbd\uc6b0(\uc704\uc758 \uc608\uc81c\uc758 \uacbd\uc6b0 147,136\ubc14\uc774\ud2b8 \uc774\uc0c1), \uc774\ubbf8\uc9c0\ub97c \ubcf5\uc0ac\ud558\uae30 \uc704\ud574 \ube44\ud2b8\ub9f5 \uce90\uc2dc\ub97c \uc0ac\uc6a9\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc804\ub7b5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc774\ubbf8\uc9c0\uc5d0 \ub300\ud55c \uace0\uc815 \uc8fc\uc18c \ubc0f RAM \ubc94\uc704 \uc120\ud0dd"),(0,o.kt)("li",{parentName:"ul"},"\ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8\uc758 RAM \uc601\uc5ed\uc5d0\uc11c \ud574\ub2f9 \ubc94\uc704\ub97c \uc81c\uac70"),(0,o.kt)("li",{parentName:"ul"},"\uc120\ud0dd\ud55c \uc8fc\uc18c\uc640 \ud06c\uae30\ub85c \uc0c8\ub85c\uc6b4 IMAGES \uc601\uc5ed \uc0dd\uc131"),(0,o.kt)("li",{parentName:"ul"},"IMAGES \uc601\uc5ed\uc5d0 ExtFlashSection\uc744 \ubc30\uce58"),(0,o.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9c1\ud06c\ud558\uace0 .map \ud30c\uc77c\uc744 \ud655\uc778"),(0,o.kt)("li",{parentName:"ul"},"application.elf\uc5d0\uc11c images.bin \ud30c\uc77c \uc0dd\uc131"),(0,o.kt)("li",{parentName:"ul"},"TouchGFX\uac00 \uc2dc\uc791\ub418\uae30 \uc804\uc5d0 \uc804\uccb4 images.bin \ud30c\uc77c\uc744 SD \uce74\ub4dc\uc5d0\uc11c RAM\uc758 \uc120\ud0dd \uc8fc\uc18c\ub85c \ubcf5\uc0ac")),(0,o.kt)("p",null,"\uc774 \uc194\ub8e8\uc158\uc740 \uac04\ub2e8\ud558\uc9c0\ub9cc \ub2e4\uc74c\uacfc \uac19\uc774 \uba87 \uac00\uc9c0 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uac00\uc6a9 RAM\uc758 \uc6a9\ub7c9\uc774 \ubaa8\ub4e0 \uc774\ubbf8\uc9c0\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\uc744 \ub9cc\ud07c \ucee4\uc57c \ud568"),(0,o.kt)("li",{parentName:"ul"},"SD \uce74\ub4dc\uc5d0\uc11c \ubcf5\uc0ac\uac00 \uc774\ub904\uc9c0\uae30 \ub54c\ubb38\uc5d0 \uc2dc\uc791 \uc2dc\uac04\uc774 \ub354 \uae38\uc5b4\uc9d0(\uba54\uac00 \ubc14\uc774\ud2b8\uc778 \uacbd\uc6b0 \uba87 \ucd08\uac00 \uc18c\uc694\ub428)")))}x.isMDXComponent=!0}}]);