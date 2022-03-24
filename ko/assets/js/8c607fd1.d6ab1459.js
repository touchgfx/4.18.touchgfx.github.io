"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4035],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),d=o,g=s["".concat(u,".").concat(d)]||s[d]||f[d]||i;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},22425:function(e,n,t){var r=t(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}n.Z=o},44035:function(e,n,t){var r=t(67294),o=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return n?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:t,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:t,height:i,src:a})),r.createElement("p",null,e.children))}},35096:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},25026:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return a}});var r=t(11368),o=t(35096);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=(0,r.Z)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(r)return n+t;const a=t.startsWith(n)?t:n+t.replace(/^\//,"");return i?e+a:a}(n,e,t,r)}}function a(e,n={}){const{withBaseUrl:t}=i();return t(e,n)}},61396:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return g},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return y},default:function(){return v}});var r=t(3905),o=t(44035),i=t(22425),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&s(e,t,n[t]);if(c)for(var t of c(n))f.call(n,t)&&s(e,t,n[t]);return e};const g={id:"using-binary-fonts",title:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8"},m=void 0,h={unversionedId:"development/ui-development/touchgfx-engine-features/using-binary-fonts",id:"development/ui-development/touchgfx-engine-features/using-binary-fonts",isDocsHomePage:!1,title:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX\uc5d0\uc11c \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \uc139\uc158\uc5d0\uc11c\ub294 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9 \uc2dc \uc774\ud574\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 TouchGFX\uc758 \ud3f0\ud2b8 \ubc0f \ud14d\uc2a4\ud2b8 \uc2dc\uc2a4\ud15c\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubd05\ub2c8\ub2e4. \ub450 \ubc88\uc9f8 \uc139\uc158\uc5d0\uc11c\ub294 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\uc758 \uc0ac\uc6a9\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-fonts.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/using-binary-fonts",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",tags:[],version:"current",frontMatter:{id:"using-binary-fonts",title:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8"},sidebar:"docs",previous:{title:"\ub3d9\uc801 \ube44\ud2b8\ub9f5",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"},next:{title:"\ud3f0\ud2b8 \uce90\uc2f1",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/font-cache"}},y=[{value:"\ud3f0\ud2b8 \ubc0f \ud14d\uc2a4\ud2b8 \uc2dc\uc2a4\ud15c \ud074\ub798\uc2a4",id:"the-font-and-text-system-classes",children:[],level:2},{value:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc0ac\uc6a9",id:"using-binary-fonts",children:[{value:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \ud3f0\ud2b8 \ubcc0\ud658 \ub3c4\uad6c \uad6c\uc131\ud558\uae30",id:"configuring-the-font-converter-to-generate-binary-fonts",children:[],level:3},{value:"\uc218\ub3d9 \uad6c\uc131",id:"manual-configuration",children:[],level:3},{value:"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc124\uce58",id:"installing-the-binary-font",children:[],level:3},{value:"\ud3f0\ud2b8 \ub9ac\uc14b\ud558\uae30",id:"resetting-a-font",children:[],level:3}],level:2}],b={toc:y};function v(e){var n,t=e,{components:a}=t,s=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&f.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=d(d({},b),s),l(n,u({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX\uc5d0\uc11c \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \uc139\uc158\uc5d0\uc11c\ub294 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9 \uc2dc \uc774\ud574\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 TouchGFX\uc758 \ud3f0\ud2b8 \ubc0f \ud14d\uc2a4\ud2b8 \uc2dc\uc2a4\ud15c\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubd05\ub2c8\ub2e4. \ub450 \ubc88\uc9f8 \uc139\uc158\uc5d0\uc11c\ub294 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\uc758 \uc0ac\uc6a9\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub294 \ud3f0\ud2b8 \uc815\ubcf4\ub97c \ucef4\ud30c\uc77c\ud558\uc5ec \uc560\ud50c\ub9ac\ucf00\uc774\uc158(",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/src"),"\uc758 .cpp \ud30c\uc77c)\uc5d0 \uc5f0\uacb0\ud558\ub294 \uae30\uc874 \ubc29\uc2dd\uc744 \ub300\uccb4\ud560 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\uc758 \uac00\uc7a5 \ud070 \uc774\uc810\uc740 \uc6a9\ub7c9\uc774 \ub354 \uc791\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\uc9c4 \ud30c\uc77c\uc744 \uac00\uc838\uc640\uc11c \uc0ac\uc6a9\ud558\ub294 \uc7a5\uce58\uc5d0 \ub2e4\uc591\ud55c \ud3f0\ud2b8 \uc138\ud2b8\ub97c \uc720\uc5f0\ud558\uac8c \uc81c\uacf5\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc911\uad6d\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc7a5\uce58\uc5d0\ub294 \uc911\uad6d\uc5b4 \ud3f0\ud2b8\ub85c, \uadf8\ub9ac\uace0 \uc77c\ubcf8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc7a5\uce58\uc5d0\ub294 \uc77c\ubcf8\uc5b4 \ud3f0\ud2b8\ub85c \ucc44\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8, \uc804\uccb4 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c RAM(\ub610\ub294 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ud50c\ub798\uc2dc)\uc5d0 \ub85c\ub4dc\ud574\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \ud3f0\ud2b8 \uc6a9\ub7c9\uc774 \ud06c\uba74 \ubb38\uc81c\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \ud3f0\ud2b8\ub97c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc5f0\uacb0\ud588\uc744 \ub54c\uc758 \uac00\uc7a5 \ud070 \uc774\uc810\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ud14d\uc2a4\ud2b8\uc640 \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c\uac00 \uc5c5\ub370\uc774\ud2b8\ub418\uc5c8\uc744 \ub54c \ud56d\uc0c1 \uc790\ub3d9\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ucd94\uac00\ub41c\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc0ac\uc6a9\ubc95\uc774 \ub9e4\uc6b0 \uc27d\uace0 \uc548\uc804\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud3f0\ud2b8\ub85c \uc778\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud06c\uae30\uac00 \ucee4\uc9c8 \uc218 \uc788\ub2e4\ub294 \uac83\uc774 \ub2e8\uc810\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",d({},{id:"the-font-and-text-system-classes"}),"\ud3f0\ud2b8 \ubc0f \ud14d\uc2a4\ud2b8 \uc2dc\uc2a4\ud15c \ud074\ub798\uc2a4"),(0,r.kt)("p",null,"TouchGFX\ub294 \uae30\ubcf8 \uad6c\uc131\uc77c \ub54c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ubaa8\ub4e0 \ud14d\uc2a4\ud2b8\uc640 \ud3f0\ud2b8\uc5d0 .cpp \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \ud30c\uc77c\ub4e4\uc740 \ucef4\ud30c\uc77c\ub41c \ud6c4, \uc0dd\uc131\ub41c UI \ubc0f \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\uc640 \ud568\uaed8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc5f0\uacb0\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 TextArea\uac00 \ud3ec\ud568\ub41c UI\uc5d0 \ud14d\uc2a4\ud2b8\ub97c \ud45c\uc2dc\ud560 \uacbd\uc6b0 TextId\ub97c \uc0ac\uc6a9\ud574 \ud574\ub2f9 \ud14d\uc2a4\ud2b8\ub97c \ucc38\uc870\ud569\ub2c8\ub2e4. \uc774 TextId\ub294 \uc704\uc82f\uc774 \ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc2e4\uc81c \ubb38\uc790\ub97c \ucc3e\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \uc704\uc82f\uc774 ",(0,r.kt)("em",{parentName:"p"},"touchgfx::Texts")," \ud074\ub798\uc2a4 ",(0,r.kt)("inlineCode",{parentName:"p"},"framework/include/touchgfx/Texts.hpp"),"\ub97c \ud1b5\ud574 \ud14d\uc2a4\ud2b8\uc5d0 \uc561\uc138\uc2a4\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud14d\uc2a4\ud2b8 \ud074\ub798\uc2a4\uc5d0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uac01 \uc5b8\uc5b4\uc758 \ubc88\uc5ed \ud14c\uc774\ube14\uc744 \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\uac00 \ubc30\uc5f4\ub41c \ud3ec\uc778\ud130 \ubc30\uc5f4\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ubc88\uc5ed \ud14c\uc774\ube14\uc774\ub780 \uc6d0\uce59\uc801\uc73c\ub85c \ud574\ub2f9 \uc5b8\uc5b4\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ubaa8\ub4e0 \ubb38\uc790\uc5f4\uc744 \ubaa8\uc544 \ub193\uc740 \uac83\uc744 \ub9d0\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",noShadow:"true",width:"420",mdxType:"Figure"},"\ud14d\uc2a4\ud2b8\ub97c \ud2b9\uc815 \uc5b8\uc5b4\ub85c \ub9e4\ud551\ud558\uae30"),(0,r.kt)("p",null,"TouchGFX\ub294 \uc774 \ud14c\uc774\ube14\uc744 \ud1b5\ud574 \uc120\ud0dd\ud55c \uc5b8\uc5b4\uc5d0\uc11c \uc9c0\uc815\ub41c \ud14d\uc2a4\ud2b8\ub97c \ucc3e\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c \ud14d\uc2a4\ud2b8\ub97c \ubcc0\uacbd\ud558\uac70\ub098 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \ub54c\ub9c8\ub2e4 \ud14c\uc774\ube14\uc774 \ub2e4\uc2dc \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc2a4\ud06c\ub9b0\uc5d0\uc11c \uadf8\ub9ac\uae30 \uc791\uc5c5\uc744 \ud558\ub824\uba74 \uba3c\uc800 \ud14d\uc2a4\ud2b8\uc5d0 \uc5b4\ub5a4 \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294\uc9c0 \uc54c\uc544\uc57c \ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud14d\uc2a4\ud2b8\uc640 \ud3f0\ud2b8 \uac04 \ub9e4\ud551\uc740 TypedTextDatabase \ud074\ub798\uc2a4(",(0,r.kt)("inlineCode",{parentName:"p"},"generated/texts/include/texts/TypedTextDatabase.hpp"),")\uc5d0\uc11c \uc81c\uc5b4\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX Designer\uc758 Texts \ud0ed\uc5d0\uc11c \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c, \uc791\uc131 \ubc29\ud5a5(Left-to-right \ub610\ub294 Right-to-left), \uac01 \ud14d\uc2a4\ud2b8 \uc815\ub82c(Left, Right, Center)\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c\uc640 \uc21c\uc11c \ubc0f \uc815\ub82c\uc740 \uac01 \ud14d\uc2a4\ud2b8 \ubc88\uc5ed\ub9c8\ub2e4 \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \uc124\uc815\ud55c \uc815\ubcf4\ub294 \uac01 \uc5b8\uc5b4\ubcc4 \ud14c\uc774\ube14\uc5d0 \ucef4\ud30c\uc77c\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c TouchGFX\uc5d0\uc11c \ud2b9\uc815 \ud14d\uc2a4\ud2b8\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ud3f0\ud2b8\uc640 \uc815\ub82c \ubc29\uc2dd \ubc0f \uc791\uc131 \ubc29\uc2dd\uc744 \uc27d\uac8c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.png",noShadow:"true",width:"600",mdxType:"Figure"},"\uc5b8\uc5b4\ubcc4 \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c \uc815\ubcf4"),(0,r.kt)("p",null,"\uc704 \uadf8\ub9bc\uc5d0\uc11c TypedTextData \ud14c\uc774\ube14\uc5d0\ub294 \uc138 \uac1c\uc758 \ubc30\uc5f4\uc744 \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\uac00 \uc788\ub294\ub370, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uac01 \uc5b8\uc5b4\ub9c8\ub2e4 \ud558\ub098\uc529 \ucd1d \uc138 \uac1c\uc785\ub2c8\ub2e4. \uac01 \ubc30\uc5f4\uc5d0\ub294 \uc2dc\uc2a4\ud15c \ud14d\uc2a4\ud2b8\ub9c8\ub2e4 \ud558\ub098\uc529 \uc138 \uac00\uc9c0 \uc694\uc18c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \uc694\uc18c\ub294 \ud3f0\ud2b8\uc640 \uc77d\ub294 \uc21c\uc11c \ubc0f \uc815\ub82c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc704 \uc608\uc5d0\uc11c\ub294 \uc138 \uac00\uc9c0 \uc5b8\uc5b4\uc758 \ud14d\uc2a4\ud2b8\uac00 \ubaa8\ub450 \ub3d9\uc77c\ud55c \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc5d0\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ud3f0\ud2b8\uac00  2\uac1c\uc774\uae30 \ub54c\ubb38\uc5d0 \ud3f0\ud2b8 \ud14c\uc774\ube14\uc5d0\ub3c4 2\uac1c\uc758 \ud3ec\uc778\ud130\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX\uac00 \uc2a4\ud06c\ub9b0\uc5d0 \ud14d\uc2a4\ud2b8\ub97c \uadf8\ub9ac\uae30 \uc704\ud574\uc11c\ub294 \uba3c\uc800 TypedTextData\uc5d0\uc11c \uc9c0\uc815\ub41c \ud14d\uc2a4\ud2b8\ub97c \ucc3e\uc2b5\ub2c8\ub2e4. \uc774 \ub370\uc774\ud130\uc5d0\ub294 Excel \uc2dc\ud2b8\uc5d0 \uc9c0\uc815\ub41c \ud14d\uc2a4\ud2b8\uc758 \ud3f0\ud2b8 \uc778\ub371\uc2a4, \ubb38\uc790 \ubc29\ud5a5(LTR/RTL), \uadf8\ub9ac\uace0 \uac00\ub85c \uc815\ub82c(Left, Right, Center)\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX\ub294 TypedTextData(F1 \ub610\ub294 F2)\uc758 \ud3f0\ud2b8 \uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud574 \uc62c\ubc14\ub978 \ud14d\uc2a4\ud2b8 \ud3f0\ud2b8\ub97c \ucc3e\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud3f0\ud2b8\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \ucef4\ud30c\uc77c\ub418\uba74 \uc774 \ubaa8\ub4e0 \uacfc\uc815\uc774 \uc790\ub3d9\uc73c\ub85c \uc77c\uc5b4\ub0a9\ub2c8\ub2e4."),(0,r.kt)("h2",d({},{id:"using-binary-fonts"}),"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc0ac\uc6a9"),(0,r.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ud3f0\ud2b8\uc640 \ubb38\uc790\uac00 \ub9ce\uace0 \ub2e4\uc591\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud06c\uae30\uac00 \uc5c4\uccad\ub098\uac8c \ucee4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX\ub294 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \uc904\uc774\uae30 \uc704\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc5f0\uacb0\ub418\uc9c0 \uc54a\uc9c0\ub9cc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ubcc4\ub3c4\ub85c \ud30c\uc77c\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud30c\uc77c\ub4e4\uc774 \ub7f0\ud0c0\uc784\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ub85c\ub4dc\ub418\uc5b4 TouchGFX\uc5d0 \uc81c\uacf5\ub429\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc608\ub97c \ub4e4\uc5b4 SD \uce74\ub4dc \uac19\uc740 \uc678\uc7a5 \uc800\uc7a5 \uc7a5\uce58\uc5d0\uc11c \ud3f0\ud2b8\ub97c \ub85c\ub4dc\ud558\uac70\ub098, \uc778\ud130\ub137\uc5d0\uc11c \ud3f0\ud2b8\ub97c  \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud3f0\ud2b8\ub97c \ub85c\ub4dc\ud558\uba74 TouchGFX\uc5d0\uac8c \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \ud3f0\ud2b8 \uc2dc\uc2a4\ud15c\uc5d0 \uc124\uce58\ud560\uc9c0 \uc5ec\ubd80\ub97c \ubb3c\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.png",noShadow:"true",width:"600",mdxType:"Figure"},"\ud3f0\ud2b8 \ud14c\uc774\ube14\uc5d0 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc124\uce58\ud558\uae30"),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc81c\uacf5\ub418\ub294 Font2\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ub85c\ub4dc\ud55c Binaryfont\ub85c \ubc14\ub00c\uc5c8\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc5f0\uacb0\ub41c Font2\ub294 \uc774\uc81c TouchGFX\uc5d0\uc11c \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"configuring-the-font-converter-to-generate-binary-fonts"}),"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \ud3f0\ud2b8 \ubcc0\ud658 \ub3c4\uad6c \uad6c\uc131\ud558\uae30"),(0,r.kt)("p",null,'\ud3f0\ud2b8 \ubcc0\ud658 \ub3c4\uad6c\ub294 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \uad6c\uc131\ud574\uc57c \ud558\ub294\ub370, This is easily done in TouchGFX Designer. \ub2e4\uc74c\uacfc \uac19\uc774 Config \ud0ed\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec "Text Configuration"\uc744 \uc120\ud0dd\ud55c \ub2e4\uc74c "Binary font files"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4.'),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2-4.17.png",mdxType:"Figure"},"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc120\ud0dd\ud558\uae30"),(0,r.kt)("p",null,"\ucf54\ub4dc\ub97c \ub2e4\uc2dc \uc0dd\uc131\ud558\uba74 TouchGFX\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin/")," \ud3f4\ub354\uc5d0 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0dd\uc131\ud558\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/src/"),"\uc5d0 \uc800\uc7a5\ub41c \uc77c\ubc18 \ud30c\uc77c\uc5d0\uc11c \ud3f0\ud2b8\ub97c \uc18c\uac70\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"manual-configuration"}),"\uc218\ub3d9 \uad6c\uc131"),(0,r.kt)("p",null,"TouchGFX Designer\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uc5d0\ub3c4 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,r.kt)("em",{parentName:"p"},"application.config"),' \ud30c\uc77c\uc758 text_configuration \uad6c\uac04\uc5d0 \uc788\ub294 "binary_fonts"\ub97c \u201cyes\u201d\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4.'),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"application.config"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),'  "text_configuration": {\n    "remap": "yes",\n    "a4": "yes",\n    "binary_translations": "no",\n    "binary_fonts": "yes",\n    "framebuffer_bpp": "16"\n  }\n')),(0,r.kt)("p",null,"\uc774\uc81c \ub2e4\uc74c \ubc88\uc5d0 \uc790\uc0b0\uc744 \uc0dd\uc131\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin")," \ud3f4\ub354\uc5d0 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"installing-the-binary-font"}),"\ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8 \uc124\uce58"),(0,r.kt)("p",null,"TouchGFX\uc5d0\uc11c \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \uba3c\uc800 \ud30c\uc77c\uc774\ub098 \uae30\ud0c0 \uc800\uc7a5 \uc7a5\uce58\uc5d0\uc11c \ubcf5\uc0ac\ud574\uc57c \ud569\ub2c8\ub2e4. \ud3f0\ud2b8\ub294 RAM\uc774\ub098 QSPI \ud50c\ub798\uc2dc(\ud3ec\uc778\ud130\ub97c \ud1b5\ud574 \uc561\uc138\uc2a4 \uac00\ub2a5) \uac19\uc774 \uc8fc\uc18c \uc9c0\uc815\uc774 \uac00\ub2a5\ud55c \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uba54\ubaa8\ub9ac\uc5d0 \ub85c\ub4dc\ud558\uba74 \uba54\ubaa8\ub9ac\uc5d0\uc11c \ud3f0\ud2b8\ub97c TouchGFX\uc5d0 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ud6c4\ubd80\ud130\ub294 TouchGFX\uac00 \ucef4\ud30c\uc77c\ub41c \ud3f0\ud2b8\uac00 \uc544\ub2cc \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4. \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub294 \ud14d\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uae30 \uc804\uc5d0 \uc124\uce58\ud574\uc57c \ud558\uc9c0\ub9cc \ubd80\ud305\ud558\uc790\ub9c8\uc790 \uc124\uce58\ud560 \ud544\uc694\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"FrontApplication.cpp"),"\uc5d0\uc11c ",(0,r.kt)("em",{parentName:"p"},"FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)")," \uc0dd\uc131\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud3f0\ud2b8\ub97c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubb34\uc5c7\uc774\ub4e0 \uadf8\ub9ac\uae30 \uc791\uc5c5\uc744 \ud558\uae30 \uc804\uc5d0 \uc774 \uc0dd\uc131\uc790\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,19-19,22-22}","{5-5,19-19,22-22}":!0}),'//read the file into this array in internal RAM\nuint8_t fontdata[10000];\n\n//binary font object using the data\nBinaryFont bf;\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    //read the binary font from a file\n    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");\n    if (font)\n    {\n        //read data from the file\n        fread(fontdata, 1, 10000, font);\n        fclose(font);\n\n        //initialize BinaryFont object in bf using placement new\n        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);\n\n        //replace application font \'DEFAULT\' with the binary font\n        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp\n    }\n}\n')),(0,r.kt)("p",null,"\ud30c\uc77c\uc744 \uc5f4\uace0 \ub370\uc774\ud130\ub97c \uc77d\ub294 \ucf54\ub4dc\ub294 \uc0ac\uc6a9\ud558\ub294 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uacfc \uc6b4\uc601 \uccb4\uc81c\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uba3c\uc800 \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud3f0\ud2b8 \ub370\uc774\ud130\ub97c \ub9cc\ub4e4\uace0 \ub098\uc11c \ud3ec\uc778\ud130\uac00 \ud574\ub2f9 \ub370\uc774\ud130\ub97c \uac00\ub9ac\ud0a4\ub3c4\ub85d BinaryFont \uac1d\uccb4\ub97c \ucd08\uae30\ud654\ud55c \ub2e4\uc74c \ub9c8\uc9c0\ub9c9\uc73c\ub85c BinaryFont \uac1d\uccb4\ub97c TouchGFX\ub85c \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7ec\uba74 ",(0,r.kt)("em",{parentName:"p"},"setFont"),"\ub97c \ud638\ucd9c\ud55c \ud6c4 TouchGFX\ub294 \uc2a4\ud06c\ub9b0\uc5d0 \ud14d\uc2a4\ud2b8\ub97c \uadf8\ub9ac\uae30 \uc704\ud574 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"resetting-a-font"}),"\ud3f0\ud2b8 \ub9ac\uc14b\ud558\uae30"),(0,r.kt)("p",null,"\uac04\ud639 \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub2e4\uac00 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \ucef4\ud30c\uc77c\ub41c \uc6d0\ubcf8 \ud3f0\ud2b8\ub85c \ub3cc\uc544\uac00\uc57c \ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\ub294\ub370, \uc608\ub97c \ub4e4\uba74 \uc5b8\uc5b4\ub97c \ubcc0\uacbd\ud558\uba74\uc11c \uae30\ubcf8 \ud3f0\ud2b8\ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \ub54c\uac00 \uadf8\ub807\uc2b5\ub2c8\ub2e4. \uc774\ub54c\ub294 TypedTextDatabase\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"resetFont()")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ud3f0\ud2b8 \ud3ec\uc778\ud130\uac00 \uae30\ubcf8\uc801\uc73c\ub85c \uc81c\uacf5\ub418\ub294 \ud3f0\ud2b8\ub97c \uac00\ub9ac\ud0a4\ub3c4\ub85d \ub9ac\uc14b\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"//reset to original font\nTypedTextDatabase::resetFont(DEFAULT);\n")),(0,r.kt)("p",null,"\uc704 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc0c8 \ud3f0\ud2b8\ub97c \ud560\ub2f9\ud558\uac70\ub098, \uadf8 \ubc16\uc5d0 \ub2e4\ub978 \ubaa9\uc801\uc73c\ub85c \ubc14\uc774\ub108\ub9ac \ud3f0\ud2b8\uc5d0\uc11c \ucc28\uc9c0\ud558\uace0 \uc788\ub294 \uba54\ubaa8\ub9ac\ub97c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."))}v.isMDXComponent=!0}}]);