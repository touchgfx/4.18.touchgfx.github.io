"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6651],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(t),f=r,h=g["".concat(s,".").concat(f)]||g[f]||p[f]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},44035:function(e,n,t){var a=t(67294),r=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return n?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:t,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:t,height:i,src:o})),a.createElement("p",null,e.children))}},35096:function(e,n,t){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,{b:function(){return a},Z:function(){return r}})},25026:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return o}});var a=t(11368),r=t(35096);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=(0,a.Z)();return{withBaseUrl:(t,a)=>function(e,n,t,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(a)return n+t;const o=t.startsWith(n)?t:n+t.replace(/^\//,"");return i?e+o:o}(n,e,t,a)}}function o(e,n={}){const{withBaseUrl:t}=i();return t(e,n)}},96593:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return f},contentTitle:function(){return h},metadata:function(){return d},toc:function(){return m},default:function(){return b}});var a=t(3905),r=t(44035),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(s)for(var t of s(n))u.call(n,t)&&p(e,t,n[t]);return e};const f={id:"using-binary-translations",title:"Binary Translations"},h=void 0,d={unversionedId:"development/ui-development/touchgfx-engine-features/using-binary-translations",id:"development/ui-development/touchgfx-engine-features/using-binary-translations",isDocsHomePage:!1,title:"Binary Translations",description:"This section describes how to use binary translations in",source:"@site/docs/development/ui-development/touchgfx-engine-features/using-binary-translations.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/using-binary-translations",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-translations",tags:[],version:"current",frontMatter:{id:"using-binary-translations",title:"Binary Translations"},sidebar:"docs",previous:{title:"Font Caching",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/font-cache"},next:{title:"Backend Communication",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/backend-communication"}},m=[{value:"Translations",id:"translations",children:[],level:3},{value:"Configuring the Text converter",id:"configuring-the-text-converter",children:[],level:3},{value:"Installing a binary translation",id:"installing-a-binary-translation",children:[],level:3}],y={toc:m};function b(e){var n,t=e,{components:i}=t,p=((e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&s)for(var a of s(e))n.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=g(g({},y),p),o(n,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This section describes how to use binary translations in\nTouchGFX. Normally text translations are compiled into the\napplication. This principle is efficient and easy to use.",(0,a.kt)("br",{parentName:"p"}),"\n","Binary translations keep the text translation out of the\napplication. The binary translations are generated in separate binary\nfiles which can be programmed to flash or for example stored on an\nsdcard.  This gives more flexibility to application developers when\nhandling a large number of translations."),(0,a.kt)("h3",g({},{id:"translations"}),"Translations"),(0,a.kt)("p",null,"The Text class in TouchGFX contains a pointer array with a pointer to a\ntranslation table for each language in the application. A translation\ntable is in principle a collection of all strings used in that\nlanguage:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",noShadow:"true",width:"420",mdxType:"Figure"},"Mapping texts to specific languages"),(0,a.kt)("p",null,"This table allows TouchGFX to find a given text in the selected language."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-translations/binary-translation.png",noShadow:"true",width:"600",mdxType:"Figure"},"Mapping to a binary translation"),(0,a.kt)("p",null,"When using binary translations at runtime you change the mapping from\nthe compiled-in translation to a binary translation. The binary\ntranslations must be available in addressable memory (flash or\nRAM). It can for example be loaded from a disk or written to the flash during\nproduction."),(0,a.kt)("h3",g({},{id:"configuring-the-text-converter"}),"Configuring the Text converter"),(0,a.kt)("p",null,'The TouchGFX text converter can be configured to generate binary\ntranslations. This is easily done in the TouchGFX Designer 4.13. Go to\nthe Config tab, select "Text Configuration", and click "Binary\ntranslation files"'),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-translations/designer-text-config-4.17.png",noShadow:"true",width:"900",mdxType:"Figure"},"Enabling binary translation"),(0,a.kt)("p",null,"When you generate the code the next time, the binary translations will\nbe in the generated/texts/binary folder."),(0,a.kt)("p",null,"The translations compiled into the application are empty when binary\ntranslations are generated. Therefore no texts are shown unless you\nload binary translations."),(0,a.kt)("h3",g({},{id:"installing-a-binary-translation"}),"Installing a binary translation"),(0,a.kt)("p",null,"When the application has the binary translation in memory, it can\ninstall it in TouchGFX. Now TouchGFX will use that\ntranslation. Depending on the application this can be done in\ndifferent places or time (The\n",(0,a.kt)("em",{parentName:"p"},"FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)"),"\nconstructor in ",(0,a.kt)("em",{parentName:"p"},"gui/src/common/FrontApplication.cpp")," can e.g. be used)."),(0,a.kt)("p",null,'Here is an example where we read a translation for English from a\nfilesystem and install it as language "GB".'),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{11-11,15-15,19-19}","{11-11,15-15,19-19}":!0}),'//read the translation into this global array\nuint8_t translation[10000];\n...\n\n//read the translation from a file, or change array to a pointer that points\n//to the translation data in internal or addressable external flash\nFILE* file = fopen("generated/texts/binary/LanguageGb.bin", "rb");\nif (file)\n{\n    //read data from file\n    fread(translation, 1, 10000, file);\n    fclose(file);\n\n    //replace empty translation with the binary data\n    Texts::setTranslation(GB, translation);\n\n    //always change language to get TouchGFX changed from the\n    //empty translation compiled in to the binary translation\n    Texts::setLanguage(GB);\n}\n')),(0,a.kt)("p",null,"Note, it is necessary to change language after installing a\ntranslation. Otherwise TouchGFX will still use the previous\ntranslation. Read about changing language\n",(0,a.kt)("a",g({parentName:"p"},{href:"texts-and-fonts#switching-language"}),"here"),"."),(0,a.kt)("p",null,"It is also necessary to force a redraw of the current screen, or\nchange screen, to see the new texts (if you are loading translations\nfor the language that is used on the display). TouchGFX does not\nredraw anything automatically."),(0,a.kt)("p",null,"The current screen can be redrawn by invalidating the root container:"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"invalidate();\n")),(0,a.kt)("p",null,'This will force a redraw. In some cases it is better to change the screen\nto get everything set up again from scratch (e.g. to recalculate\nTextArea sizes). You can change the screen by creating an interaction\nin TouchGFX Designer with the "Change Screen" action. See this ',(0,a.kt)("a",g({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"article"),"."))}b.isMDXComponent=!0}}]);