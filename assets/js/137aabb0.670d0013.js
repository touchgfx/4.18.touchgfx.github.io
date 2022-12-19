"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8572],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},83079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return g}});var r=n(3905),o=n(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&s(e,n,t[n]);return e};const m={id:"ui-development-introduction",title:"UI Development Introduction"},f=void 0,h={unversionedId:"development/ui-development/ui-development-introduction",id:"development/ui-development/ui-development-introduction",title:"UI Development Introduction",description:"",source:"@site/docs/development/ui-development/ui-development-introduction.mdx",sourceDirName:"development/ui-development",slug:"/development/ui-development/ui-development-introduction",permalink:"/4.18/docs/development/ui-development/ui-development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"ui-development-introduction",title:"UI Development Introduction"},sidebar:"docs",previous:{title:"Video Decoding",permalink:"/4.18/docs/development/touchgfx-hal-development/scenarios/scenarios-video-decoding"},next:{title:"Model-View-Presenter Design Pattern",permalink:"/4.18/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"}},v={},g=[],b={toc:g};function w(e){var t,n=e,{components:i}=n,s=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),s),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-development-introduction/activities-selected-003.webp",noShadow:!0,width:"600",mdxType:"Figure"}),(0,r.kt)("p",null,"Developing a functional UI is an integral part to having a successful embedded graphics product and as such, TouchGFX aims to not only provide fast performance but also a smooth development experience."),(0,r.kt)("p",null,"The UI Development chapter focuses on the ins and outs of how a TouchGFX application is developed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"software-architecture/model-view-presenter-design-pattern"}),(0,r.kt)("strong",{parentName:"a"},"Software Architecture"))," - describes the overall architecture and design of a TouchGFX application and the relationship between generated code from TouchGFX Designer and user code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"working-with-touchgfx/using-ides-with-touchgfx"}),(0,r.kt)("strong",{parentName:"a"},"Working with TouchGFX"))," - contains information on the workflow of developing a TouchGFX application and the different tools used in the process - from the PC simulator to the numerous supported IDEs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"designer-user-guide/startup-window"}),(0,r.kt)("strong",{parentName:"a"},"Designer User Guide"))," - contains an extensive guide and tips and tricks on how to use the different components of TouchGFX Designer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"touchgfx-engine-features/custom-triggers-and-actions"}),(0,r.kt)("strong",{parentName:"a"},"TouchGFX Engine Features"))," - contains information on the different TouchGFX Engine features such as bitmap caching, partial framebuffer, multi language support etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"ui-components/buttons/button"}),(0,r.kt)("strong",{parentName:"a"},"UI Components"))," - contains information on every UI component found in TouchGFX - from widgets to containers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"scenarios/achieving-better-performance-with-cacheable-container"}),(0,r.kt)("strong",{parentName:"a"},"Scenarios"))," - contains different scenarios that developers might run into and how to solve them.")))}w.isMDXComponent=!0}}]);