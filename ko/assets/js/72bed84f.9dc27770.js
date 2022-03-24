"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3654],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},98638:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return g},default:function(){return b}});var r=n(3905),o=n(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&s(e,n,t[n]);return e};const f={id:"ui-development-introduction",title:"UI \uac1c\ubc1c \uc18c\uac1c"},m=void 0,v={unversionedId:"development/ui-development/ui-development-introduction",id:"development/ui-development/ui-development-introduction",isDocsHomePage:!1,title:"UI \uac1c\ubc1c \uc18c\uac1c",description:"\uae30\ub2a5\uc131 UI \uac1c\ubc1c\uc740 \uc131\uacf5\uc801\uc778 \uc784\ubca0\ub514\ub4dc \uadf8\ub798\ud53d \uc81c\ud488\uc744 \ub9cc\ub4dc\ub294 \ub370 \ub9e4\uc6b0 \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud558\ubbc0\ub85c, TouchGFX\ub294 \ube60\ub978 \uc131\ub2a5\uacfc \ub354\ubd88\uc5b4 \uc6d0\ud65c\ud55c \uac1c\ubc1c \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\ub294 \ub370 \ubaa9\ud45c\ub97c \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-development-introduction.mdx",sourceDirName:"development/ui-development",slug:"/development/ui-development/ui-development-introduction",permalink:"/4.18/ko/docs/development/ui-development/ui-development-introduction",tags:[],version:"current",frontMatter:{id:"ui-development-introduction",title:"UI \uac1c\ubc1c \uc18c\uac1c"},sidebar:"docs",previous:{title:"Video Decoding",permalink:"/4.18/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"},next:{title:"\ubaa8\ub378-\ubdf0-\ud504\ub9ac\uc820\ud130 \uc124\uacc4 \ud328\ud134",permalink:"/4.18/ko/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"}},g=[],h={toc:g};function b(e){var t,n=e,{components:i}=n,s=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},h),s),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-development-introduction/activities-selected-003.png",noShadow:!0,width:"600",mdxType:"Figure"}),(0,r.kt)("p",null,"\uae30\ub2a5\uc131 UI \uac1c\ubc1c\uc740 \uc131\uacf5\uc801\uc778 \uc784\ubca0\ub514\ub4dc \uadf8\ub798\ud53d \uc81c\ud488\uc744 \ub9cc\ub4dc\ub294 \ub370 \ub9e4\uc6b0 \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud558\ubbc0\ub85c, TouchGFX\ub294 \ube60\ub978 \uc131\ub2a5\uacfc \ub354\ubd88\uc5b4 \uc6d0\ud65c\ud55c \uac1c\ubc1c \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\ub294 \ub370 \ubaa9\ud45c\ub97c \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"UI \uac1c\ubc1c \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c \ubc29\uc2dd\uc5d0 \ub300\ud574 \uc18d\uc18d\ub4e4\uc774 \uc0b4\ud3b4\ubd05\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"software-architecture/model-view-presenter-design-pattern"}),(0,r.kt)("strong",{parentName:"a"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc544\ud0a4\ud14d\ucc98"))," - TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc804\ubc18\uc801\uc778 \uc544\ud0a4\ud14d\ucc98\uc640 \uc124\uacc4\ub97c \ube44\ub86f\ud574 TouchGFX Designer\uc758 \uc0dd\uc131 \ucf54\ub4dc\uc640 \uc0ac\uc6a9\uc790 \ucf54\ub4dc \uac04 \uad00\uacc4\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"working-with-touchgfx/using-ides-with-touchgfx"}),(0,r.kt)("strong",{parentName:"a"},"TouchGFX \uc791\uc5c5"))," - TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uac1c\ubc1c \uc6cc\ud06c\ud50c\ub85c\uc5d0 \ub300\ud55c \uc815\ubcf4, \uadf8\ub9ac\uace0 PC \uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c\ubd80\ud130 \uadf8 \ubc16\uc5d0 \ub2e4\uc591\ud558\uac8c \uc9c0\uc6d0\ub418\ub294 IDE\uc5d0 \uc774\ub974\uae30\uae4c\uc9c0 \uac1c\ubc1c \ud504\ub85c\uc138\uc2a4\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uac16\uac00\uc9c0 \ub3c4\uad6c\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"designer-user-guide/startup-window"}),(0,r.kt)("strong",{parentName:"a"},"\uc124\uacc4\uc790 \uc0ac\uc6a9\uc790 \uac00\uc774\ub4dc"))," - TouchGFX Designer\uc758 \uac16\uac00\uc9c0 \uad6c\uc131\uc694\uc18c\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uacfc \uad00\ub828\ud558\uc5ec \ud3ed\ub113\uc740 \uc9c0\uce68\uacfc \ud301, \uadf8\ub9ac\uace0 \uc720\uc6a9\ud55c \uae30\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"touchgfx-engine-features/custom-triggers-and-actions"}),(0,r.kt)("strong",{parentName:"a"},"TouchGFX \uc5d4\uc9c4 \uae30\ub2a5"))," - \ube44\ud2b8\ub9f5 \uce90\uc2f1, \ubd80\ubd84 \ud504\ub808\uc784\ubc84\ud37c, \ub2e4\uc218\uc758 \uc5b8\uc5b4 \uc9c0\uc6d0 \ub4f1 TouchGFX \uc5d4\uc9c4\uc758 \uac16\uac00\uc9c0 \uae30\ub2a5\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"ui-components/buttons/button"}),(0,r.kt)("strong",{parentName:"a"},"UI \uad6c\uc131\uc694\uc18c"))," - \uc704\uc82f\uc5d0\uc11c\ubd80\ud130 \ucee8\ud14c\uc774\ub108\uc5d0 \uc774\ub974\uae30\uae4c\uc9c0 TouchGFX\uc5d0\uc11c \ucc3e\uc544\ubcfc \uc218 \uc788\ub294 \ubaa8\ub4e0 UI \uad6c\uc131\uc694\uc18c\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"scenarios/achieving-better-performance-with-cacheable-container"}),(0,r.kt)("strong",{parentName:"a"},"\uc2dc\ub098\ub9ac\uc624"))," - \uac1c\ubc1c\uc790\uc5d0\uac8c \uc77c\uc5b4\ub0a0 \uc218 \uc788\ub294 \uc5ec\ub7ec \uac00\uc9c0 \uc2dc\ub098\ub9ac\uc624\uc640 \ud574\uacb0 \ubc29\uc548\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.")))}b.isMDXComponent=!0}}]);