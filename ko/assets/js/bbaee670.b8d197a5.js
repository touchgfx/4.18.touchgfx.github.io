"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6996],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),s=l,f=d["".concat(a,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=s;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[d]="string"==typeof e?e:l,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,l.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},65407:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){var t,n;const o=(0,l.Z)(e.url),i=null!=(t=e.width)?t:"100%",u=null!=(n=e.height)?n:"100%";return r.createElement("div",{class:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:i,height:u},r.createElement("source",{src:o,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},82985:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=l},52016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return x},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return y}});var r=n(3905),l=n(44035),o=n(82985),i=n(65407),u=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&s(e,n,t[n]);return e};const k={id:"simulator",title:"\uc2dc\ubbac\ub808\uc774\ud130"},h=void 0,g={unversionedId:"development/ui-development/working-with-touchgfx/simulator",id:"development/ui-development/working-with-touchgfx/simulator",title:"\uc2dc\ubbac\ub808\uc774\ud130",description:"TouchGFX UI\ub97c \ube4c\ub4dc\ud558\ub824\uba74 \ubcf4\ud1b5 UI \uc0ac\uc591\uc5d0 \ub9de\uac8c \uc138\ubd80\uc801\uc778 \uadf8\ub798\ud53d\uc744 \uc870\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/simulator.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/simulator",permalink:"/4.18/ko/docs/development/ui-development/working-with-touchgfx/simulator",draft:!1,tags:[],version:"current",frontMatter:{id:"simulator",title:"\uc2dc\ubbac\ub808\uc774\ud130"},sidebar:"docs",previous:{title:"\uc704\uc82f \ubc0f \ucee8\ud14c\uc774\ub108",permalink:"/4.18/ko/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"},next:{title:"\ucef4\ud30c\uc77c \ubc0f \ud50c\ub798\uc2f1",permalink:"/4.18/ko/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"}},v={},y=[{value:"\uc2e4\ud589 \ubc29\ubc95",id:"how-to-run",level:2},{value:"TouchGFX Designer \uc0ac\uc6a9 \uc2dc",id:"using-touchgfx-designer",level:3},{value:"TouchGFX \ud658\uacbd \uc0ac\uc6a9 \uc2dc",id:"using-touchgfx-environment",level:3},{value:"\uc2dc\ubbac\ub808\uc774\ud130 \uae30\ub2a5",id:"simulator-features",level:2},{value:"\uc2dc\ubbac\ub808\uc774\ud130 \uc804\uc6a9 \uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"simulator-only-user-code",level:2},{value:"\ud504\ub808\uc784\ubc84\ud37c \uc7a0\uae08 \ubc0f \uc7a0\uae08 \ud574\uc81c",id:"\ud504\ub808\uc784\ubc84\ud37c-\uc7a0\uae08-\ubc0f-\uc7a0\uae08-\ud574\uc81c",level:2},{value:"\ud504\ub808\uc784\ubc84\ud37c \uc7a0\uae08",id:"\ud504\ub808\uc784\ubc84\ud37c-\uc7a0\uae08",level:3},{value:"\ud504\ub808\uc784\ubc84\ud37c \uc7a0\uae08 \ud574\uc81c",id:"\ud504\ub808\uc784\ubc84\ud37c-\uc7a0\uae08-\ud574\uc81c",level:3},{value:"\ud504\ub808\uc784\ubc84\ud37c\uc758 \uc7a0\uae08 \ud574\uc81c\ub97c \uc78a\uc740 \uacbd\uc6b0",id:"\ud504\ub808\uc784\ubc84\ud37c\uc758-\uc7a0\uae08-\ud574\uc81c\ub97c-\uc78a\uc740-\uacbd\uc6b0",level:3},{value:"\ud06c\uae30\uac00 \ub514\uc2a4\ud50c\ub808\uc774\uc640 \ub2e4\ub978 \ud558\ub4dc\uc6e8\uc5b4 \ud504\ub808\uc784 \ubc84\ud37c \uc2dc\ubbac\ub808\uc774\uc158\ud558\uae30",id:"\ud06c\uae30\uac00-\ub514\uc2a4\ud50c\ub808\uc774\uc640-\ub2e4\ub978-\ud558\ub4dc\uc6e8\uc5b4-\ud504\ub808\uc784-\ubc84\ud37c-\uc2dc\ubbac\ub808\uc774\uc158\ud558\uae30",level:3}],w={toc:y};function x(e){var t,n=e,{components:u}=n,s=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},w),s),a(t,c({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX UI\ub97c \ube4c\ub4dc\ud558\ub824\uba74 \ubcf4\ud1b5 UI \uc0ac\uc591\uc5d0 \ub9de\uac8c \uc138\ubd80\uc801\uc778 \uadf8\ub798\ud53d\uc744 \uc870\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub54c \uac1c\ubc1c \ud504\ub85c\uc138\uc2a4\ub97c \ube60\ub974\uac8c \uc9c4\ud589\ud558\ub824\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud14c\uc2a4\ud2b8 \ubc0f \ub514\ubc84\uae45 \uc18c\uc694 \uc2dc\uac04\uc744 \ub2e8\ucd95\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ubcf4\ub4dc \ud50c\ub798\uc2f1\uc740 \ubcf4\ud1b5 \uc2dc\uac04\uc774 \ub9ce\uc774 \uac78\ub9ac\uae30 \ub54c\ubb38\uc5d0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc57d\uac04 \ubcc0\uacbd\ud560 \ub54c\ub9c8\ub2e4 \uc77c\uc77c\uc774 \ud50c\ub798\uc2f1\uc744 \ud55c\ub2e4\uba74 \uac1c\ubc1c\uc774 \uc9c0\uc5f0\ub429\ub2c8\ub2e4. TouchGFX PC \uc2dc\ubbac\ub808\uc774\ud130\ub294 \uac1c\ubc1c \ub3c4\uad6c\uc5d0 \ucd94\uac00\ud558\uc5ec \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \ub370 \ub9e4\uc6b0 \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc81c PC\uc5d0 \ub9de\uac8c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ucef4\ud30c\uc77c\ud558\uae30\ub9cc \ud558\uba74 PC\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2e4\ud589\ud558\ub294 \ucf54\ub4dc\ub294 \ubcf4\ub4dc \ube0c\ub9c1 \uc5c5(Board Bring Up) \ucf54\ub4dc\uc640 \ucd94\uc0c1\ud654 \uacc4\uce35\uc774 \uc544\ub2cc PC\uc5d0 \ub9de\uac8c \uc791\uc131\ub41c\ub2e4\ub294 \uc810\ub9cc \uc81c\uc678\ud558\uba74 \ud0c0\uac9f \ud558\ub4dc\uc6e8\uc5b4\uc758 \ucf54\ub4dc\uc640 \uc815\ud655\ud788 \uc77c\uce58\ud569\ub2c8\ub2e4. \uc774 \ub9d0\uc740 \uc704\uc82f \ubc30\uce58, \uc778\ud130\ub799\uc158, \uc560\ub2c8\uba54\uc774\uc158, \uc0c1\ud0dc \uae30\uacc4 \uac19\uc740 \uac83\ub4e4\uc744 \ub9c8\uce58 \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \ud14c\uc2a4\ud2b8\ud558\ub294 \uac83\ucc98\ub7fc \uc815\ubc00\ud558\uac8c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc2ec\uc9c0\uc5b4 Visual Studio\uc640 \uac19\uc740 IDE\ub97c \uc0ac\uc6a9\ud574 \ucf54\ub4dc\ub97c ",(0,r.kt)("a",f({parentName:"p"},{href:"debugging"}),"\ub514\ubc84\uae45"),"\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ubb3c\ub860 \uc774\ub54c\ub294 \uc131\ub2a5 \ubd84\uc11d\uc774\ub098 \uc2e4\uc81c \ubc31\uc5d4\ub4dc \uc2dc\uc2a4\ud15c \uc0c1\ud638\uc791\uc6a9\uacfc \uac19\uc740 \uc791\uc5c5\uc740 \uc0ac\uc6a9\ud558\ub294 \ubcf4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/simulator/simulator-example.mp4",mdxType:"LoopVideo"},"\uc2dc\ubbac\ub808\uc774\ud130 \uc608"),(0,r.kt)("h2",f({},{id:"how-to-run"}),"\uc2e4\ud589 \ubc29\ubc95"),(0,r.kt)("h3",f({},{id:"using-touchgfx-designer"}),"TouchGFX Designer \uc0ac\uc6a9 \uc2dc"),(0,r.kt)("p",null,'TouchGFX Designer\uc5d0\uc11c \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc2e4\ud589\ud558\ub824\uba74 \uc624\ub978\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\uc5d0 \uc788\ub294 "Run Simulator" \ubc84\ud2bc\uc744 \ub204\ub974\uac70\ub098 \ud0a4\ubcf4\ub4dc\uc5d0\uc11c ',(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F5")," \ud0a4\ub97c \ub204\ub974\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc5d0\uc11c \uc2dc\ubbac\ub808\uc774\ud130 \uc2e4\ud589\ud558\uae30"),(0,r.kt)("h3",f({},{id:"using-touchgfx-environment"}),"TouchGFX \ud658\uacbd \uc0ac\uc6a9 \uc2dc"),(0,r.kt)("p",null,"TouchGFX \ud658\uacbd\uc5d0\uc11c \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"TouchGFX \ud658\uacbd\uc744 \uc5fd\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc788\ub294 \uc704\uce58\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\uc2dc\ubbac\ub808\uc774\ud130 \uc804\uc6a9 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \uc608\ub97c \ub4e4\uc5b4 ",(0,r.kt)("inlineCode",{parentName:"li"},"C:/TouchGFXProjects/MyApplication_1"),"\uc5d0 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ud0c0\uac9f \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \uc608\ub97c \ub4e4\uc5b4 ",(0,r.kt)("inlineCode",{parentName:"li"},"C:/TouchGFXProjects/MyApplication_1/TouchGFX/"),"\uc5d0 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"make -f simulator/gcc/Makefile -j6")," \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec \uc2dc\ubbac\ub808\uc774\ud130\ub97c \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"./build/bin/simulator.exe")," \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ubcc0\uacbd\ud560 \ub54c\ub9c8\ub2e4 3~4\ub2e8\uacc4\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",f({},{id:"simulator-features"}),"\uc2dc\ubbac\ub808\uc774\ud130 \uae30\ub2a5"),(0,r.kt)("p",null,"TouchGFX \uc2dc\ubbac\ub808\uc774\ud130\uc5d0\ub294 \ub9c8\uc6b0\uc2a4 \uc785\ub825\uc744 \ucea1\ucc98\ud558\ub294 \uac83 \uc678\uc5d0\ub3c4 \uc544\ub798\uc640 \uac19\uc774 \uc5ec\ub7ec \uac00\uc9c0 \uc720\uc6a9\ud55c \uae30\ub2a5\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",{"spaces-before":"0"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\ub2e8\ucd95\ud0a4"),(0,r.kt)("th",null,"\uae30\ub2a5")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F1")),(0,r.kt)("td",null,"\ud3ec\uc778\ud130 \uc88c\ud45c \ud45c\uc2dc\uc640 \ud574\ub2f9 \uc88c\ud45c(16\uc9c4\uc218) \ud53d\uc140\uc758 RGB \uc0c9\uc0c1 \ud45c\uc2dc\ub97c \ud65c\uc131\ud654/\ube44\ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F2")),(0,r.kt)("td",null,"\ubb34\ud6a8\ud654 \uc601\uc5ed\uc758 \uac15\uc870 \ud45c\uc2dc\ub97c \ud65c\uc131\ud654/\ube44\ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F3")),(0,r.kt)("td",null,"\uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc0dd\uc131\ud55c \ud6c4 ",(0,r.kt)("code",null,"screenshots")," \ud3f4\ub354\uc5d0 \ud574\ub2f9 \uc774\ubbf8\uc9c0\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"CTRL + F3")),(0,r.kt)("td",null,"\ub2e4\uc74c \ud504\ub808\uc784 50\uac1c\uc758 \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc0dd\uc131\ud55c \ud6c4 ",(0,r.kt)("code",null,"screenshots")," \ud3f4\ub354\uc5d0 \ud574\ub2f9 \uc774\ubbf8\uc9c0\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"SHIFT + F3")),(0,r.kt)("td",null,"\uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc0dd\uc131\ud55c \ud6c4 \ud074\ub9bd\ubcf4\ub4dc\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F4")),(0,r.kt)("td",null,"\uc2dc\ubbac\ub808\uc774\ud130 \uc2a4\ud0a8\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc2dc\ubbac\ub808\uc774\ud130 \uc2a4\ud0a8\uc744 \ud65c\uc131\ud654/\ube44\ud65c\uc131\ud654\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),"\uc2dc\ubbac\ub808\uc774\ud130 \uc2a4\ud0a8\uc744 \uc0ac\uc6a9\ud558\uc9c0 ",(0,r.kt)("i",null,"\uc54a\ub294")," \uacbd\uc6b0\uc5d0\ub294 \ucc3d \uacbd\uacc4\ub97c \ud65c\uc131\ud654/\ube44\ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F9")),(0,r.kt)("td",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \uc2e4\ud589 \uc774\ubca4\ud2b8(tick)\ub97c \uc804\uc1a1\ud558\uc9c0 \ubabb\ud558\ub3c4\ub85d \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc77c\uc2dc \uc911\uc9c0\ud569\ub2c8\ub2e4. \ub2e4\uc2dc F9\ub97c \ub204\ub974\uba74 \uc815\uc0c1\uc801\uc778 \uc2e4\ud589\uc744 \uc7ac\uac1c\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"F10")),(0,r.kt)("td",null,'F9\ub97c \ub20c\ub7ec \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc77c\uc2dc \uc911\uc9c0\ud588\uc744 \ub54c\ub3c4 F10\uc744 \ub204\ub974\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \ub2e8\uc77c \uc2e4\ud589 \uc774\ubca4\ud2b8(tick)\ub97c \uc804\uc1a1\ud558\uc5ec \uc560\ud50c\ub9ac\ucf00\uc774\uc158 "\uc2f1\uae00 \uc2a4\ud15d"\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.')),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)(o.Z,{mdxType:"Shortcut"},"ESC")),(0,r.kt)("td",null,"\uc2dc\ubbac\ub808\uc774\ud130\ub97c \ub2eb\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("h2",f({},{id:"simulator-only-user-code"}),"\uc2dc\ubbac\ub808\uc774\ud130 \uc804\uc6a9 \uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,r.kt)("p",null,"TouchGFX \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud560 \ub54c\ub9cc \uc2e4\ud589\ub418\uc5b4\uc57c \ud558\ub294 \ucf54\ub4dc\uac00 \uc788\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 C++ \ucf54\ub4dc\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"#ifdef SIMULATOR"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#ifdef SIMULATOR\n  // Your simulator specific user code here\n#endif\n")),(0,r.kt)("p",null,"\ub514\ubc84\uadf8 \ud14d\uc2a4\ud2b8\ub97c \ucf58\uc194\ub85c \ucd9c\ub825\ud558\ub824\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_printf")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 printf\uc640 \uc720\uc0ac\ud55c \ud568\uc218\ub85c\uc11c \uc2dc\ubbac\ub808\uc774\ud130 \ucf54\ub4dc\ub97c \ube4c\ub4dc\ud560 \ub54c\ub9cc \ud3ec\ud568\ub418\uae30 \ub54c\ubb38\uc5d0 \ud0c0\uac9f \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc2e4\ud589\ud560 \uacbd\uc6b0\uc5d0\ub294 \uac04\uc12d\uc744 \uc77c\uc73c\ud0a4\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774 \uacbd\uc6b0\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"#ifdef SIMULATOR"),"\ub97c \uc0ac\uc6a9\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'int i = 0;\ntouchgfx_printf("Application is running through simulator! \\n");\ntouchgfx_printf("Print our value for integer i = %i \\n", i);\n')),(0,r.kt)("h2",f({},{id:"\ud504\ub808\uc784\ubc84\ud37c-\uc7a0\uae08-\ubc0f-\uc7a0\uae08-\ud574\uc81c"}),"\ud504\ub808\uc784\ubc84\ud37c \uc7a0\uae08 \ubc0f \uc7a0\uae08 \ud574\uc81c"),(0,r.kt)("p",null,"\ucf54\ub4dc\ub97c \uc791\uc131\ud574\uc11c \ud504\ub808\uc784\ubc84\ud37c\ub97c \uc9c1\uc811 \uc870\uc791\ud558\ub824\uba74 \ud53d\uc140 \ub370\uc774\ud130\ub97c \ud504\ub808\uc784\ubc84\ud37c \uba54\ubaa8\ub9ac\uc5d0 \uc791\uc131\ud558\uae30 \uc804\uc5d0 \uba3c\uc800 \ud504\ub808\uc784\ubc84\ud37c\ub97c \uc7a0\uac00\uc57c \ud569\ub2c8\ub2e4. \ud504\ub808\uc784\ubc84\ud37c \uc7a0\uae08\uc740 \ud504\ub808\uc784\ubc84\ud37c\uc5d0 \uc791\uc131\ud55c \ud6c4 \ud504\ub808\uc784\ubc84\ud37c\ub97c \uc7a0\uae08 \ud574\uc81c\ud558\ub294 \uac83 \ub9cc\ud07c\uc774\ub098 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",f({},{id:"\ud504\ub808\uc784\ubc84\ud37c-\uc7a0\uae08"}),"\ud504\ub808\uc784\ubc84\ud37c \uc7a0\uae08"),(0,r.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\ub97c \uc7a0\uae00 \ub54c \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc \uc2a4\ub2c8\ud3ab\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"uint16_t* RESTRICT buf = HAL::getInstance()->lockFrameBuffer();\n")),(0,r.kt)("p",null,"\uc55e\uc11c \uc788\uc5c8\ub358 \uc774\uc720\ub4e4 \ub54c\ubb38\uc5d0 \ud504\ub808\uc784\ubc84\ud37c\ub97c \uac00\ub9ac\ud0a4\ub294 16\ube44\ud2b8 \ud3ec\uc778\ud130 \uac12\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4. \ud504\ub808\uc784\ubc84\ud37c\uc5d0 \ub354\uc6b1 \uc27d\uac8c \uc561\uc138\uc2a4\ud560 \uc218 \uc788\ub3c4\ub85d \ud3ec\uc778\ud130\ub97c \ud574\ub2f9\ud558\ub294 \ud3ec\uc778\ud130 \uc720\ud615\uc73c\ub85c \uce90\uc2a4\ud305\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",f({},{id:"\ud504\ub808\uc784\ubc84\ud37c-\uc7a0\uae08-\ud574\uc81c"}),"\ud504\ub808\uc784\ubc84\ud37c \uc7a0\uae08 \ud574\uc81c"),(0,r.kt)("p",null,"\uc0ac\uc6a9\ud55c \ud6c4 \ud504\ub808\uc784\ubc84\ud37c\ub97c \uc7a0\uae08 \ud574\uc81c\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"HAL::getInstance()->unlockFrameBuffer();\n")),(0,r.kt)("h3",f({},{id:"\ud504\ub808\uc784\ubc84\ud37c\uc758-\uc7a0\uae08-\ud574\uc81c\ub97c-\uc78a\uc740-\uacbd\uc6b0"}),"\ud504\ub808\uc784\ubc84\ud37c\uc758 \uc7a0\uae08 \ud574\uc81c\ub97c \uc78a\uc740 \uacbd\uc6b0"),(0,r.kt)("p",null,"\ud504\ub808\uc784\ubc84\ud37c\uc758 \uc7a0\uae08 \ud574\uc81c\ub97c \uc78a\uc73c\uba74 \ud558\ub4dc\uc6e8\uc5b4\uac00 \ud504\ub808\uc784\ubc84\ud37c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc744 \ub54c\uae4c\uc9c0 \uc791\ub3d9\uc744 \uba48\ucd94\uace0 \uacc4\uc18d\ud574\uc11c \ub300\uae30\ud569\ub2c8\ub2e4. \uc774\ub54c\ub294 TouchGFX \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c \ud504\ub808\uc784\ubc84\ud37c\uac00 \uc7a0\uaca8 \uc788\uc744 \ub54c\ub3c4 \ud504\ub808\uc784\ubc84\ud37c\ub97c \uc7a0\uadf8\ub3c4\ub85d \uc694\uccad\ud558\ub294 \uac00\uc815 \uc124\uc815\ubb38(assert)\uc744 \uac00\uc838\uc624\uba74 \uc774\ub7ec\ud55c \uc0c1\ud669\uc744 \uac10\uc9c0\ud558\ub294 \ub370 \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4. Microsoft Visual Studio\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc624\ub958 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/windows-unlock-framebuffer.webp",mdxType:"Figure"},"\ud504\ub808\uc784\ubc84\ud37c\ub97c \uc7a0\uae08 \ud574\uc81c\ud558\uc9c0 \uc54a\uc558\uc744 \ub54c \ud45c\uc2dc\ub418\ub294 Windows \ub300\ud654 \uc0c1\uc790"),(0,r.kt)("p",null,"\ucf58\uc194 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc624\ub958 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/console-unlock-framebuffer.webp",mdxType:"Figure"},"\ud504\ub808\uc784\ubc84\ud37c\ub97c \uc7a0\uae08 \ud574\uc81c\ud558\uc9c0 \uc54a\uc558\uc744 \ub54c \ucd9c\ub825\ub418\ub294 \ucf58\uc194 \uba54\uc2dc\uc9c0"),(0,r.kt)("h3",f({},{id:"\ud06c\uae30\uac00-\ub514\uc2a4\ud50c\ub808\uc774\uc640-\ub2e4\ub978-\ud558\ub4dc\uc6e8\uc5b4-\ud504\ub808\uc784-\ubc84\ud37c-\uc2dc\ubbac\ub808\uc774\uc158\ud558\uae30"}),"\ud06c\uae30\uac00 \ub514\uc2a4\ud50c\ub808\uc774\uc640 \ub2e4\ub978 \ud558\ub4dc\uc6e8\uc5b4 \ud504\ub808\uc784 \ubc84\ud37c \uc2dc\ubbac\ub808\uc774\uc158\ud558\uae30"),(0,r.kt)("p",null,"\uc77c\ubd80 \uc124\uc815\uc5d0\uc11c\ub294 \ub514\uc2a4\ud50c\ub808\uc774 \ud06c\uae30\uac00 \uc2e4\uc81c \ud558\ub4dc\uc6e8\uc5b4 \ud504\ub808\uc784 \ubc84\ud37c\ubcf4\ub2e4 \uc791\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubb38\uc81c\ub294 \uc2dc\ubbac\ub808\uc774\uc158\uc5d0\uc11c \ucc98\ub9ac\ud560 \uc218 \uc788\uc73c\uba70, touchgfx_generic_init()\ub97c \ud638\ucd9c\ud55c \ud6c4 simulator/main.cpp \ud30c\uc77c\uc5d0\uc11c \ubc14\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"touchgfx_generic_init()\ub85c \uc804\ub2ec\ub418\ub294 \uac00\ub85c\uc640 \uc138\ub85c\uac00 \ub514\uc2a4\ud50c\ub808\uc774\uc640 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \ud06c\uae30\ub97c \uc815\uc758\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud558\ub4dc\uc6e8\uc5b4 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \ud06c\uae30\uac00 \ub2e4\ub978 \uacbd\uc6b0\uc5d0\ub294 touchgfx_generic_init() \ud638\ucd9c \ud6c4 setFrameBufferSize()\ub97c \ud638\ucd9c\ud558\uc5ec \uc2e4\uc81c \ud504\ub808\uc784 \ubc84\ud37c\uc758 \ud06c\uae30\ub97c \uc9c0\uc815\ud558\uba74 \ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 SIM_WIDTH=800\uc774\uace0, SIM_HEIGHT==480\uc778 \uacbd\uc6b0\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"touchgfx::HAL& hal = touchgfx::touchgfx_generic_init<touchgfx::HALSDL2>(dma, lcd, tc, SIM_WIDTH, SIM_HEIGHT, 0, 0);\nhal.setFrameBufferSize(832, 480); // Hardware framebuffer is wider\n")))}x.isMDXComponent=!0}}]);