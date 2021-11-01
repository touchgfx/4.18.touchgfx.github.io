(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9478],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=a(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var a=2;a<o;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,c=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:o,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:o,src:c})),r.createElement("p",null,e.children))}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return c}});var r=n(11368),i=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},76892:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return h},default:function(){return g}});var r=n(3905),i=n(44035),o=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&p(e,n,t[n]);return e};const f={id:"screen-definition-and-mvp",title:"\uc2a4\ud06c\ub9b0 \uac1c\ub150"},m=void 0,v={unversionedId:"development/ui-development/software-architecture/screen-definition-and-mvp",id:"development/ui-development/software-architecture/screen-definition-and-mvp",isDocsHomePage:!1,title:"\uc2a4\ud06c\ub9b0 \uac1c\ub150",description:'In TouchGFX applications, you can have any number of "Screens" (see example below with two screens). TouchGFX\uc5d0\uc11c \uc2a4\ud06c\ub9b0\uc774\ub780 UI \uc694\uc18c(\uc704\uc82f)\uc640 \uc5ec\uae30\uc5d0 \uc5f0\uacb0\ub41c \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc758 \ub17c\ub9ac\uc801\uc778 \uadf8\ub8f9\uc744 \ub9d0\ud569\ub2c8\ub2e4. \uc2a4\ud06c\ub9b0\uc740 \ub450 \uac1c\uc758 \ud074\ub798\uc2a4 \uad6c\uc131\ub418\ub294\ub370, \ud558\ub098\ub294 \uc774 \uc2a4\ud06c\ub9b0\uc5d0 \ud45c\uc2dc\ub418\ub294 \ubaa8\ub4e0 \uc704\uc82f\uc774 \ud3ec\ud568\ub41c View \ud074\ub798\uc2a4\uc774\uace0, \ub098\uba38\uc9c0 \ud558\ub098\ub294 \uc774 \uc2a4\ud06c\ub9b0\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc774 \ud3ec\ud568\ub41c Presenter \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/screen-definition-and-mvp.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/screen-definition-and-mvp",permalink:"/4.18/ko/docs/development/ui-development/software-architecture/screen-definition-and-mvp",version:"current",frontMatter:{id:"screen-definition-and-mvp",title:"\uc2a4\ud06c\ub9b0 \uac1c\ub150"},sidebar:"docs",previous:{title:"\ubaa8\ub378-\ubdf0-\ud504\ub9ac\uc820\ud130 \uc124\uacc4 \ud328\ud134",permalink:"/4.18/ko/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"},next:{title:"\ucf54\ub4dc \uad6c\uc870",permalink:"/4.18/ko/docs/development/ui-development/software-architecture/code-structure"}},h=[{value:"\uc2a4\ud06c\ub9b0 \uc815\uc758",id:"defining-screens",children:[]},{value:"\ud604\uc7ac \ud65c\uc131\ud654\ub41c \uc2a4\ud06c\ub9b0",id:"currently-active-screen",children:[]},{value:"TouchGFX\uc758 Model-View-Presenter",id:"model-view-presenter-in-touchgfx",children:[{value:"Model",id:"model",children:[]},{value:"View",id:"view",children:[]},{value:"Presenter",id:"presenter",children:[]}]}],w={toc:h};function g(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)a.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},w),p),c(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,'In TouchGFX applications, you can have any number of "Screens" (see example below with two screens). TouchGFX\uc5d0\uc11c \uc2a4\ud06c\ub9b0\uc774\ub780 UI \uc694\uc18c(\uc704\uc82f)\uc640 \uc5ec\uae30\uc5d0 \uc5f0\uacb0\ub41c \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc758 \ub17c\ub9ac\uc801\uc778 \uadf8\ub8f9\uc744 \ub9d0\ud569\ub2c8\ub2e4. \uc2a4\ud06c\ub9b0\uc740 \ub450 \uac1c\uc758 \ud074\ub798\uc2a4 \uad6c\uc131\ub418\ub294\ub370, \ud558\ub098\ub294 \uc774 \uc2a4\ud06c\ub9b0\uc5d0 \ud45c\uc2dc\ub418\ub294 \ubaa8\ub4e0 \uc704\uc82f\uc774 \ud3ec\ud568\ub41c View \ud074\ub798\uc2a4\uc774\uace0, \ub098\uba38\uc9c0 \ud558\ub098\ub294 \uc774 \uc2a4\ud06c\ub9b0\uc5d0 \uc0ac\uc6a9\ub418\ub294 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc774 \ud3ec\ud568\ub41c Presenter \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4.'),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/screen-definition-and-mvp/main-screen.png",mdxType:"Figure"},"Main view (screen 1)"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/software-architecture/screen-definition-and-mvp/settings-screen.png",mdxType:"Figure"},"Settings view (screen 2)"),(0,r.kt)("p",null,"\ub2e8\uc77c \uc2a4\ud06c\ub9b0(\ud558\ub098\uc758 View\uc640 \ud558\ub098\uc758 Presenter\ub85c \uad6c\uc131)\uc758  context \ub0b4\uc5d0\uc11c \uc804\uccb4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\ub3c4\ub85d \uc120\ud0dd\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc UI\uc5d0\uc11c \uad00\ub828\uc774 \uc5c6\ub294 \uc694\uc18c\ub97c \uc5ec\ub7ec \uc2a4\ud06c\ub9b0\uc73c\ub85c \ubd84\ud560\ud558\ub294 \uac83\uc774 \uc88b\uc740\ub370, \uadf8 \uc774\uc720\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"TouchGFX\uc5d0\ub294 RAM\uc744 \uac00\uc7a5 \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \uc2a4\ud06c\ub9b0\uc5d0 \ud544\uc694\ud55c RAM\uc744 \uc790\ub3d9\uc73c\ub85c \ud560\ub2f9\ud558\ub294 \uba54\ubaa8\ub9ac \ud560\ub2f9 \uae30\ubc95\uc774 \uc801\uc6a9\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \ud544\uc694\ud55c \uc6a9\ub7c9\ub9cc \ud560\ub2f9\ub418\uace0, \uc774\ud6c4\uc5d0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubaa8\ub4e0 \uc2a4\ud06c\ub9b0\uc5d0 \uac78\uccd0 RAM \ube14\ub85d\uc774 \uc7ac\uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc2a4\ud06c\ub9b0\uc774 \uc5ec\ub7ec \uac1c\uc774\uba74 UI \ucf54\ub4dc\ub97c \ud6e8\uc52c \uc27d\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h3",d({},{id:"defining-screens"}),"\uc2a4\ud06c\ub9b0 \uc815\uc758"),(0,r.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc5ec\ub7ec \uc2a4\ud06c\ub9b0\uc73c\ub85c \ubd84\ud560\ud558\ub294 \ub370 \uc815\ud574\uc9c4 \uaddc\uce59\uc740 \uc5c6\uc9c0\ub9cc \ud2b9\uc815 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\uc131\ud560 \uc2a4\ud06c\ub9b0\uc744 \uacb0\uc815\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 \uac00\uc774\ub4dc\ub77c\uc778\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc2dc\uac01\uc801\uc73c\ub85c\ub098 \uae30\ub2a5\uc801\uc73c\ub85c \uad00\ub828 \uc5c6\ub294 UI \uc601\uc5ed\uc740 \ub2e4\ub978 \uc2a4\ud06c\ub9b0\uc5d0 \ud3ec\ud568\uc2dc\ucf1c \uad6c\ubd84\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc628\ub3c4\ub97c \ud310\ub3c5\ud558\ub294 \uba54\uc778 \ub514\uc2a4\ud50c\ub808\uc774\uc640 \uad6c\uc131 \uba54\ub274, \ub450 \uac00\uc9c0\ub85c \ub9e4\uc6b0 \ub2e8\uc21c\ud55c \uc628\ub3c4 \uc870\uc808 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\uace0\uc790 \ud560 \uacbd\uc6b0\uc5d0\ub294 \uc628\ub3c4 \ud310\ub3c5\uc744 \uc704\ud55c \u201c\uba54\uc778 \uc2a4\ud06c\ub9b0\u201d\uacfc \uad6c\uc131 \uba54\ub274 \ud45c\uc2dc\ub97c \uc704\ud55c \u201c\uc124\uc815 \uc2a4\ud06c\ub9b0\u201d\uc744 \uc0dd\uc131\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uba54\uc778 \uc2a4\ud06c\ub9b0\uc758 View\uc5d0\ub294 \ubc30\uacbd \uc774\ubbf8\uc9c0\ub85c \uc0ac\uc6a9\ud560 \uc704\uc82f, \uc628\ub3c4\ub97c \ub098\ud0c0\ub0b4\ub294 \ud14d\uc2a4\ud2b8 \uc601\uc5ed, \uadf8\ub9ac\uace0 \uad6c\uc131 \uba54\ub274\ub85c \uc804\ud658\ud560 \uc218 \uc788\ub294 \ubc84\ud2bc\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4. \ubc18\uba74 \uad6c\uc131 View\ub294 \uad6c\uc131 \uc635\uc158 \ubaa9\ub85d\uc744 \ube44\ub86f\ud574 \uc5ec\ub7ec \uac00\uc9c0 \ubc30\uacbd \uc774\ubbf8\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 \uc704\uc82f\uc774 \ud3ec\ud568\ub420 \uac00\ub2a5\uc131\uc774 \ub192\uc2b5\ub2c8\ub2e4. \uad6c\uc131 \uba54\ub274\uc5d0\uc11c \uc5ec\ub7ec \uac00\uc9c0 \uc720\ud615\uc758 \uc124\uc815(\ub0a0\uc9dc, \ud0a4\ubcf4\ub4dc\uac00 \ud3ec\ud568\ub41c \uc774\ub984, \uc628\ub3c4, \ub2e8\uc704 \ub4f1)\uc744 \ud3b8\uc9d1\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uba74 \uc2a4\ud06c\ub9b0\uc774 \ub108\ubb34 \ubcf5\uc7a1\ud574\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uacbd\uc6b0\uc5d0\ub294 \uad6c\uc131 \uba54\ub274\ub97c \uc2a4\ud06c\ub9b0 2\uac1c\ub85c \ubd84\ud560\ud558\uc5ec \ud558\ub098\ub294 \uc804\uccb4 \uba54\ub274 \uc635\uc158 \ud2b8\ub9ac\ub97c \ub098\ud0c0\ub0b4\ub294 \uc2a4\ud06c\ub9b0\uc73c\ub85c, \ub098\uba38\uc9c0 \ud558\ub098\ub294 \ud2b9\uc815 \uac12\uc744 \ud3b8\uc9d1\ud558\ub294 \uc2a4\ud06c\ub9b0\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc720\ub9ac\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\ubc95\uc740 \ud504\ub85c\uc81d\ud2b8\uac00 \uc9c4\ud589\ub418\uba74\uc11c \uc790\uc5f0\uc2a4\ub7fd\uac8c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"currently-active-screen"}),"\ud604\uc7ac \ud65c\uc131\ud654\ub41c \uc2a4\ud06c\ub9b0"),(0,r.kt)("p",null,"TouchGFX\uc5d0\uc11c \uc2a4\ud06c\ub9b0\uc5d0 \uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9\ud558\ub294 \ubc29\uc2dd(\uc0ac\uc6a9\ub7c9\uc774 \uac00\uc7a5 \ub9ce\uc740 View\uc640 Presenter\uc5d0\ub9cc \ud560\ub2f9) \ub54c\ubb38\uc5d0 \ud55c \ubc88\uc5d0 \ud65c\uc131\ud654\ud560 \uc218 \uc788\ub294 View\uc640 Presenter\ub294 1\uac1c\ub85c \uc81c\ud55c\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc628\ub3c4 \uc870\uc808 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc628\ub3c4 \uc218\uce58\uac00 \ud45c\uc2dc\ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 \uad6c\uc131 \uba54\ub274 \uc2a4\ud06c\ub9b0\uc774 \uc5b4\ub514\uc5d0\uc11c\ub3c4 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc73c\uba70 \uba54\ubaa8\ub9ac\uac00 \ud560\ub2f9\ub418\uc9c0\ub3c4 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\u201c\ubc31\uc5d4\ub4dc\u201d(\uc2e4\uc81c\ub85c \uc628\ub3c4 \uc870\uc808\uc744 \ub2f4\ub2f9\ud558\ub294 UI\uac00 \uc544\ub2cc \ucf54\ub4dc)\uc5d0\uc11c, \ud639\uc740 \ud558\ub4dc\uc6e8\uc5b4 \uc8fc\ubcc0 \uc7a5\uce58\uc5d0\uc11c \uc774\ubca4\ud2b8\uac00 \uc218\uc2e0\ub420 \uacbd\uc6b0, \ud604\uc7ac \ud65c\uc131\ud654\ub41c \uc2a4\ud06c\ub9b0\uc73c\ub85c \uc218\uc2e0\ub41c \uc774\ubca4\ud2b8\ub97c \uc704\uc784\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ubca4\ud2b8 \uc911\uc5d0\ub294 \ud2b9\uc815 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2a4\ud06c\ub9b0\uc5d0 \ud55c\ud574 \uc720\ud6a8\ud55c \uc774\ubca4\ud2b8\uac00 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc774\ub807\uac8c \ud558\uba74 \uad00\uc2ec \uc601\uc5ed\uc744 \uc720\uc6a9\ud558\uac8c \ubd84\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud604\uc7ac \uc628\ub3c4\uc758 \ubcc0\ud654\ub97c \uc54c\ub9ac\ub294 \uc774\ubca4\ud2b8\uac00 \uc218\uc2e0\ub418\uba74 \uba54\uc778 \uc2a4\ud06c\ub9b0\uc5d0\uc11c\ub9cc \ud574\ub2f9 \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ubc18\uba74(\ud604\uc7ac \uc628\ub3c4\ub97c \ub098\ud0c0\ub0b4\ub294 \ud14d\uc2a4\ud2b8 \uc601\uc5ed \uc5c5\ub370\uc774\ud2b8), \uad6c\uc131 \uc2a4\ud06c\ub9b0\uc5d0\uc11c\ub294 \ud604\uc7ac \uc628\ub3c4\ub97c \ud45c\uc2dc\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc774\ub97c \uad00\ub828 \uc5c6\ub294 \uc774\ubca4\ud2b8\ub85c \ub2e8\uc21c\ud788 \ubb34\uc2dc\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("h2",d({},{id:"model-view-presenter-in-touchgfx"}),"TouchGFX\uc758 Model-View-Presenter"),(0,r.kt)("p",null,"TouchGFX\ub294 ",(0,r.kt)("a",d({parentName:"p"},{href:"model-view-presenter-design-pattern"}),"Model-View-Presenter \uc124\uacc4 \ud328\ud134"),"\uc5d0 \uae30\uc220\ub41c Model-View-Presenter(MVP) \uc124\uacc4 \ud328\ud134\uc744 \ub530\ub985\ub2c8\ub2e4. TouchGFX \uc2a4\ud06c\ub9b0 \uac1c\ub150\uc740 TouchGFX\uc758 View \ubc0f Presenter \ud074\ub798\uc2a4\uc5d0\uc11c \uc0c1\uc18d\ud558\ub294 \ud074\ub798\uc2a4\ub97c \ud1b5\ud574 \uc804\uccb4\uc801\uc778 Model-View-Presenter \uc544\ud0a4\ud14d\ucc98\uc640 \uc5f0\uacb0\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c TouchGFX Designer\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc0c8 \uc2a4\ud06c\ub9b0\uc744 \ucd94\uac00\ud558\uba74 \ud2b9\uc815 View \ud074\ub798\uc2a4\uc640 Presenter \ud074\ub798\uc2a4\uac00 \uc0c8\ub86d\uac8c \uc0dd\uc131\ub418\uc5b4 \ud574\ub2f9 \uc2a4\ud06c\ub9b0\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c MVP \ud074\ub798\uc2a4\uc758 \ub0b4\uc6a9\uacfc \ucc45\uc784\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"model"}),"Model"),(0,r.kt)("p",null,"Model \ud074\ub798\uc2a4\ub294 \ud56d\uc0c1 \ud65c\uc131\ud654 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud558\ub294 \ud558\ub098\ubc16\uc5d0 \uc5c6\ub294 \ud074\ub798\uc2a4\ub85c, \uc5ec\uae30\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ub450 \uac00\uc9c0 \ubaa9\uc801\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"UI \uc0c1\ud0dc \uc815\ubcf4\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4. \uc2a4\ud06c\ub9b0\uc774 \uc804\ud658\ub418\uba74 View\uc640 Presenter\uac00 \ud560\ub2f9 \ud574\uc81c\ub418\ubbc0\ub85c \uc2a4\ud06c\ub9b0 \uc804\ud658 \uc2dc \uc720\uc9c0\ud574\uc57c \ud560 \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\uc9c0 \ubabb\ud558\uac8c \ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c Model\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc815\ubcf4\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ubc31\uc5d4\ub4dc \uc2dc\uc2a4\ud15c\uc744 \ud5a5\ud55c \uc778\ud130\ud398\uc774\uc2a4 \uc5ed\ud560\uc744 \ud558\uc5ec \ud604\uc7ac \ud65c\uc131\ud654\ub41c \uc2a4\ud06c\ub9b0\uacfc \uc774\ubca4\ud2b8\ub97c \uc8fc\uace0\ubc1b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"Model \ud074\ub798\uc2a4\ub294 \ud604\uc7ac \ud65c\uc131\ud654\ub41c Presenter\uc5d0 \ub300\ud55c \ud3ec\uc778\ud130\ub97c \uac16\ub3c4\ub85d \uc790\ub3d9\uc73c\ub85c \uc124\uc815\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c Model\uc5d0 \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc0dd\uae30\uba74 \ud604\uc7ac \ud65c\uc131\ud654\ub41c Presenter\uc5d0 \ubcc0\uacbd \uc0ac\uc2e4\uc774 \ud1b5\uc9c0\ub429\ub2c8\ub2e4. \uc774\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 ModelListener \uc778\ud130\ud398\uc774\uc2a4\uc5d0\uc11c \uba54\uc18c\ub4dc\ub97c \ud1b5\ud574 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"Designer\uc5d0\uc11c \uc0c8\ub86d\uac8c \uc0dd\uc131\ub418\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\ub294 UI\uc5d0\uc11c \uc5b8\uc81c\ub4e0\uc9c0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d Model \ud074\ub798\uc2a4\uac00 \uc790\ub3d9\uc73c\ub85c \ud560\ub2f9\ub429\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"view"}),"View"),(0,r.kt)("p",null,"View \ud074\ub798\uc2a4(\ub354 \uc815\ud655\ud558\uac8c\ub294 TouchGFX View \ud074\ub798\uc2a4\uc5d0\uc11c \ud30c\uc0dd\ub418\ub294 \ud074\ub798\uc2a4)\ub294 \uc774 view\uc5d0\uc11c \uba64\ubc84 \uac1d\uccb4\ub85c \ud45c\uc2dc\ub418\ub294 \uc704\uc82f\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. It also contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"setupScreen")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDownScreen")," function, which gets automatically called when this screen is entered/exited. Typically you would configure your widgets in the ",(0,r.kt)("inlineCode",{parentName:"p"},"setupScreen")," function."),(0,r.kt)("p",null,"\ub610\ud55c View\uc5d0\ub294 \uc5f0\uad00\ub41c Presenter\uc5d0 \ub300\ud55c \ud3ec\uc778\ud130\ub3c4 \ud3ec\ud568\ub429\ub2c8\ub2e4. \uc774 \ud3ec\uc778\ud130\ub294 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \uc124\uc815\ub429\ub2c8\ub2e4. \uc774 \ud3ec\uc778\ud130\ub97c \uc0ac\uc6a9\ud558\uba74 \ubc84\ud2bc \ud074\ub9ad\uacfc \uac19\uc740 UI \uc774\ubca4\ud2b8\ub97c Presenter\uc5d0 \uc54c\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"presenter"}),"Presenter"),(0,r.kt)("p",null,"Presenter \ud074\ub798\uc2a4(\ub9c8\ucc2c\uac00\uc9c0\ub85c TouchGFX Presenter\ud074\ub798\uc2a4\uc5d0\uc11c \ud30c\uc0dd\ub41c \ud074\ub798\uc2a4)\ub294 \ud604\uc7ac \ud65c\uc131\ud654\ub41c \uc2a4\ud06c\ub9b0\uc758 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \ub2f4\ub2f9\ud569\ub2c8\ub2e4. Model\uc5d0\uc11c \u201c\ubc31\uc5d4\ub4dc\u201d \uc774\ubca4\ud2b8\ub97c, \uadf8\ub9ac\uace0 View\uc5d0\uc11c UI \uc774\ubca4\ud2b8\ub97c \uc218\uc2e0\ud558\uc5ec \uc2e4\ud589\ud560 \uc561\uc158\uc744 \uacb0\uc815\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Model\uc5d0\uc11c \uc54c\ub9bc \uc774\ubca4\ud2b8\uac00 \uc218\uc2e0\ub418\uba74 Presenter\uac00 View\uc5d0\uac8c \uc54c\ub9bc \ud31d\uc5c5 \ub300\ud654\uc0c1\uc790\ub97c \ud45c\uc2dc\ud558\ub3c4\ub85d \uc9c0\uc2dc\ud558\ub294 \uc561\uc158\uc744 \uacb0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}g.isMDXComponent=!0}}]);