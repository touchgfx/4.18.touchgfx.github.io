"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4897],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,d=c["".concat(u,".").concat(g)]||c[g]||m[g]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},18367:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return k},default:function(){return h}});var r=n(3905),i=n(44035),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&m(e,n,t[n]);return e};const g={id:"images-view",title:"\uc774\ubbf8\uc9c0 \ubdf0"},d=void 0,f={unversionedId:"development/ui-development/designer-user-guide/images-view",id:"development/ui-development/designer-user-guide/images-view",isDocsHomePage:!1,title:"\uc774\ubbf8\uc9c0 \ubdf0",description:"The Images View is used to manage the images used in a TouchGFX application (located under the assets\\images folder). \uc5ec\uae30\uc5d0\ub294 \ud2b8\ub9ac \ubdf0(\uc67c\ucabd)\uc640 \ud14c\uc774\ube14 \ubdf0(\uc624\ub978\ucabd)\ub77c\ub294 \ub450 \uac1c\uc758 \uc139\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/images-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/images-view",permalink:"/4.18/ko/docs/development/ui-development/designer-user-guide/images-view",tags:[],version:"current",frontMatter:{id:"images-view",title:"\uc774\ubbf8\uc9c0 \ubdf0"},sidebar:"docs",previous:{title:"\uce94\ubc84\uc2a4 \ubdf0",permalink:"/4.18/ko/docs/development/ui-development/designer-user-guide/canvas-view"},next:{title:"\ud14d\uc2a4\ud2b8 \ubdf0",permalink:"/4.18/ko/docs/development/ui-development/designer-user-guide/texts-view"}},k=[{value:"\ud2b8\ub9ac \ubdf0",id:"tree-view",children:[],level:2},{value:"\ud14c\uc774\ube14 \ubdf0",id:"table-view",children:[],level:2}],v={toc:k};function h(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},v),m),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The Images View is used to manage the images used in a TouchGFX application (located under the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets\\images")," folder). \uc5ec\uae30\uc5d0\ub294 ",(0,r.kt)("a",c({parentName:"p"},{href:"#tree-view"}),"\ud2b8\ub9ac \ubdf0"),"(\uc67c\ucabd)\uc640 ",(0,r.kt)("a",c({parentName:"p"},{href:"#table-view"}),"\ud14c\uc774\ube14 \ubdf0"),"(\uc624\ub978\ucabd)\ub77c\ub294 \ub450 \uac1c\uc758 \uc139\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ubbf8\uc9c0 \uae30\ubcf8 \uad6c\uc131 \uac12\uc740 ",(0,r.kt)("a",c({parentName:"p"},{href:"config-view"}),"Config View"),"\uc758 ",(0,r.kt)("a",c({parentName:"p"},{href:"config-view#default-image-configuration"}),"Default Image Configuration"),"\uc5d0\uc11c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-view-4.17.png",mdxType:"Figure"},"TouchGFX Designer\uc758 \uc774\ubbf8\uc9c0 \ubdf0"),(0,r.kt)("h2",c({},{id:"tree-view"}),"\ud2b8\ub9ac \ubdf0"),(0,r.kt)("p",null,"\ud2b8\ub9ac \ubdf0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc874\uc7ac\ud558\ub294 \uc774\ubbf8\uc9c0\uc640 \ud3f4\ub354\uc758 \uac1c\uc694\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ud2b8\ub9ac \ubdf0\uc758 \ub108\ube44\ub294 \ud544\uc694\uc5d0 \ub530\ub77c \uadf8\ub9ac\ub4dc \ubd84\ud560\uc790\ub97c \ub4dc\ub798\uadf8\ud558\uc5ec \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-tree-view-4.17.png",mdxType:"Figure"},"\uc774\ubbf8\uc9c0 \ubdf0\uc758 \ud2b8\ub9ac \ubdf0"),(0,r.kt)("p",null,"You can add images to the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets\\images"),' folder by clicking the "+" button on the top right of the Images View, or by dragging the images directly to the Tree View from the File Explorer. Images added to the ',(0,r.kt)("inlineCode",{parentName:"p"},"assets\\images")," folder will automatically show up in the Image Manager."),(0,r.kt)("p",null,"\ud3f4\ub354 \ub178\ub4dc\ub97c \ud074\ub9ad\ud558\uba74 \ud574\ub2f9 \ud3f4\ub354\uc5d0 \uc800\uc7a5\ub41c \uc774\ubbf8\uc9c0\uac00 \ud14c\uc774\ube14 \ubdf0\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4(\ub8e8\ud2b8 \ud3f4\ub354\uc778 \u201cimages\u201d\ub97c \ud074\ub9ad\ud558\uba74 \ud558\uc704 \ud3f4\ub354\uc5d0 \uc800\uc7a5\ub41c \uc774\ubbf8\uc9c0\ub97c \ud3ec\ud568\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc800\uc7a5\ub41c \uc774\ubbf8\uc9c0\uac00 \ubaa8\ub450 \ud45c\uc2dc\ub429\ub2c8\ub2e4)."),(0,r.kt)("p",null,"\uc774\ubbf8\uc9c0 \ub178\ub4dc\ub97c \ud074\ub9ad\ud558\uba74 \ub3d9\uc77c\ud55c \ud3f4\ub354\uc5d0 \uc800\uc7a5\ub41c \ub2e4\ub978 \uc774\ubbf8\uc9c0\ub3c4 \ud14c\uc774\ube14 \ubdf0\uc5d0 \ud45c\uc2dc\ub418\ubbc0\ub85c \uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud55c \ud6c4 \uc624\ub978\ucabd \uc18d\uc131 \ubdf0\uc5d0\uc11c \uad00\ub828 \uc18d\uc131\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud3f4\ub354 \uc606\uc758 V\uc790 \uae30\ud638\ub97c \ud074\ub9ad\ud558\uba74 \ud3f4\ub354\ub97c \uc811\uac70\ub098 \ud3bc\uce60 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud2b8\ub9ac \ubdf0 \uc624\ub978\ucabd\uc758 V\uc790 \uae30\ud638\ub97c \ud074\ub9ad\ud558\uba74 \ud2b8\ub9ac \ubdf0\ub97c \uc811\uac70\ub098 \ud3bc\uce60 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",c({},{id:"table-view"}),"\ud14c\uc774\ube14 \ubdf0"),(0,r.kt)("p",null,"\ud14c\uc774\ube14 \ubdf0\uc5d0\ub294 \ud604\uc7ac \uc120\ud0dd\ub41c \ud3f4\ub354\uc5d0 \uc800\uc7a5\ub41c \uc774\ubbf8\uc9c0\uc758 \ubaa9\ub85d\uc774 \ud45c\uc2dc\ub418\uba70, \uc774\ubbf8\uc9c0\uc758 \uc5ec\ub7ec \uc18d\uc131\uc5d0 \ud574\ub2f9\ud558\ub294 \uc5f4\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6d0\ud558\ub294 \uc774\ubbf8\uc9c0 \ud589\uc5d0\uc11c \uccab \ubc88\uc9f8 \uc5f4\uc5d0 \uc788\ub294 \uccb4\ud06c\ub9c8\ud06c\ub97c \uc120\ud0dd\ud558\uba74 \ud55c \uac1c \uc774\uc0c1\uc758 \uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc18d\uc131\uc744 \ubcc0\uacbd\ud558\uba74 \uc120\ud0dd\ub41c \ubaa8\ub4e0 \uc774\ubbf8\uc9c0\uc5d0 \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac01 \uc140\uc758 \uac12\uc774 \ud68c\uc0c9\uc73c\ub85c \ube44\ud65c\uc131\ud654\ub418\uc5b4 \uc788\uc73c\uba74 \uae30\ubcf8\uac12 \uc0ac\uc6a9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Image Format \uae30\ubcf8\uac12\uc744 ARGB8888\ub85c \ubcc0\uacbd\ud558\ub294 \uac83\ucc98\ub7fc \uc774\ubbf8\uc9c0 \uac12\uc744 \uba85\uc2dc\uc801\uc73c\ub85c \uc124\uc815\ud558\uba74 \uc140\uc774 \uc9c4\ud558\uac8c \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 ",(0,r.kt)("a",c({parentName:"p"},{href:"config-view"}),"Config View"),"\uc5d0\uc11c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-table-view-4.17.png",mdxType:"Figure"},"\uc774\ubbf8\uc9c0\uc758 \ud14c\uc774\ube14 \ubdf0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Image:"),(0,r.kt)("br",null)," \uc774\ubbf8\uc9c0 \ubbf8\ub9ac \ubcf4\uae30\uc785\ub2c8\ub2e4. \uc774\ubbf8\uc9c0 \ubbf8\ub9ac \ubcf4\uae30\uc5d0 \ub9c8\uc6b0\uc2a4 \ucee4\uc11c\ub97c \uac16\ub2e4 \ub300\uba74 \ud655\ub300\ub41c \ud06c\uae30\ub85c \ubbf8\ub9ac \ubcf4\uae30\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ubbf8\ub9ac \ubcf4\uae30\ub97c \ud074\ub9ad\ud558\uba74 .png \uc774\ubbf8\uc9c0\uc640 \uc5f0\uacb0\ub41c \uae30\ubcf8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158(\uc608: paint.net)\uc5d0\uc11c \uc774\ubbf8\uc9c0\uac00 \uc5f4\ub9bd\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name:"),(0,r.kt)("br",null)," \ud3f4\ub354\uc5d0 \uc800\uc7a5\ub41c \uc774\ubbf8\uc9c0\uc758 \uc774\ub984\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Uses:"),(0,r.kt)("br",null)," \uc774\ubbf8\uc9c0\uac00 \uc0ac\uc6a9\ub41c \ud69f\uc218\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Size:"),(0,r.kt)("br",null)," \uc774\ubbf8\uc9c0\uc758 \uac00\ub85c x \uc138\ub85c\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Image Format:"),(0,r.kt)("br",null)," \uc774\ubbf8\uc9c0\uc758 \ud615\uc2dd\uc785\ub2c8\ub2e4. \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc635\uc158\uc740 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \ud615\uc2dd\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dither Algorithm:"),(0,r.kt)("br",null)," \uc120\ud0dd\ud55c \uc774\ubbf8\uc9c0\uc5d0 \uc0ac\uc6a9\ud560 \ub514\ub354 \uc54c\uace0\ub9ac\uc998\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0 - No dither: ",(0,r.kt)("em",{parentName:"li"},"no dithering is applied to the image. \uc774 \uac12\uc740 \uc544\ubb34\uac83\ub3c4 \ubcc0\uacbd\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc131\ub2a5\uc744 \uac00\uc7a5 \ub192\uc77c \uc218 \uc788\ub294 \uc124\uc815\uc785\ub2c8\ub2e4. However, depending on the image, the quality of the image may also degrade visually at lower color depths.")),(0,r.kt)("li",{parentName:"ul"},"1 - Floyd-Steinberg: ",(0,r.kt)("em",{parentName:"li"},"diffuses the error to neighboring pixels, resulting in fine-grained dithering but sacrificing sharpness.")),(0,r.kt)("li",{parentName:"ul"},"2 - Jarvis, Judice and Ninke: ",(0,r.kt)("em",{parentName:"li"},"diffuses the error to pixels one step further away compared to Floyd-Steinberg, resulting in coarser dithering but a sharper image. The slowest of the 3 error-diffusion dithering algorithms.")),(0,r.kt)("li",{parentName:"ul"},"3 - Stucki: ",(0,r.kt)("em",{parentName:"li"},"based on minimized average error dithering but faster and cleaner."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alpha Dither:"),(0,r.kt)("br",null)," \uc54c\ud30c \ucc44\ub110\uc744 \ud1b5\ud55c \ub514\ub354 \uc54c\uace0\ub9ac\uc998\uc758 \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Layout Rotation:"),(0,r.kt)("br",null)," \ub514\ub354\uac00 \uc774\ubbf8\uc9c0\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4. \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc635\uc158\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc120\ud0dd\ud55c \uc0c9 \uc2ec\ub3c4\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Section:"),(0,r.kt)("br",null)," \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc774\ubbf8\uc9c0\uac00 \uc800\uc7a5\ub418\ub294 \uba54\ubaa8\ub9ac \uc704\uce58\uc785\ub2c8\ub2e4. \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc139\uc158\uc740 \ud504\ub85c\uc81d\ud2b8\uac00 \uc0dd\uc131\ub41c TouchGFX Board Setup\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extra Section:"),(0,r.kt)("br",null)," L8 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \uc0c9\uc0c1\ud45c\ub97c \ub2e4\ub978 \uba54\ubaa8\ub9ac \uc704\uce58\uc5d0 \uc800\uc7a5\ud558\ub3c4\ub85d \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc139\uc158\uc740 \ud504\ub85c\uc81d\ud2b8\uac00 \uc0dd\uc131\ub41c TouchGFX Board Setup\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-view-menu-4.17.png",mdxType:"Figure"},"\uc774\ubbf8\uc9c0\uc758 \ud14c\uc774\ube14 \ubdf0\uc5d0\uc11c \uccab \ubc88\uc9f8 \uc140\uc5d0 \uc788\ub294 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274"),(0,r.kt)("p",null,"\ud14c\uc774\ube14 \ubdf0\uc758 \uc67c\ucabd\uc5d0\uc11c \uccab \ubc88\uc9f8 \uc140\uc5d0 \uc788\ub294 \uccb4\ud06c\ub9c8\ud06c \ubc15\uc2a4\ub97c \uc120\ud0dd\ud558\uba74 \uc5ec\ub7ec \uac1c\uc758 \uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc140\uc5d0\ub294 \ub2e4\uc74c\uc758 4\uac00\uc9c0 \uc635\uc158\uc774 \ud3ec\ud568\ub41c \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Copy image id"),(0,r.kt)("br",null)," \ucf54\ub4dc\uc5d0\uc11c \ucc38\uc870\ud560 \uc218 \uc788\ub294 \uc774\ubbf8\uc9c0 ID\ub97c \ubcf5\uc0ac\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delete"),(0,r.kt)("br",null)," \uad00\ub828 \ud3f4\ub354\uc5d0 \uc800\uc7a5\ub41c \uc774\ubbf8\uc9c0\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Open"),(0,r.kt)("br",null)," .png \uc774\ubbf8\uc9c0\uc640 \uad00\ub828\ub41c \uae30\ubcf8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc774\ubbf8\uc9c0\ub97c \uc5fd\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Open folder"),(0,r.kt)("br",null)," \ud30c\uc77c \ud0d0\uc0c9\uae30\uc5d0\uc11c \uc774\ubbf8\uc9c0\uac00 \uc800\uc7a5\ub41c \ud3f4\ub354\ub97c \uc5fd\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc774 \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\ub294 \uc774\ubbf8\uc9c0\uc758 \ud574\ub2f9 \ub77c\uc778\uc744 \ub9c8\uc6b0\uc2a4 \uc624\ub978\ucabd \ubc84\ud2bc\uc73c\ub85c \ud074\ub9ad\ud574\uc11c \uc5f4 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."))}h.isMDXComponent=!0}}]);