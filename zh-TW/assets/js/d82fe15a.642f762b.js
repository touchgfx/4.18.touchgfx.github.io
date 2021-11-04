"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2493],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},25878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return h},toc:function(){return v},default:function(){return g}});var r=n(3905),o=n(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&p(e,n,t[n]);return e};const m={id:"model-view-presenter-design-pattern",title:"Model-View-Presenter Design Pattern"},f=void 0,h={unversionedId:"development/ui-development/software-architecture/model-view-presenter-design-pattern",id:"development/ui-development/software-architecture/model-view-presenter-design-pattern",isDocsHomePage:!1,title:"Model-View-Presenter Design Pattern",description:"TouchGFX user interfaces follow an architectural pattern known as Model-View-Presenter (MVP) which is a derivation of the Model-View-Controller (MVC) pattern. Both of them are widely used for building user interface applications.",source:"@site/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/model-view-presenter-design-pattern",permalink:"/4.18/zh-TW/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern",tags:[],version:"current",frontMatter:{id:"model-view-presenter-design-pattern",title:"Model-View-Presenter Design Pattern"},sidebar:"docs",previous:{title:"UI Development Introduction",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-development-introduction"},next:{title:"The Screen Concept",permalink:"/4.18/zh-TW/docs/development/ui-development/software-architecture/screen-definition-and-mvp"}},v=[],w={toc:v};function g(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},w),p),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX user interfaces follow an architectural pattern known as Model-View-Presenter (MVP) which is a derivation of the Model-View-Controller (MVC) pattern. Both of them are widely used for building user interface applications."),(0,r.kt)("p",null,"The main benifits of the MVP pattern are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Separation of Concerns"),": Dividing your code into separate parts, each having their own responsibility. This makes the code simpler, more reusable and easier to maintain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unit Testing"),": Since the logic (the presenter) of the UI is separated from the visual layer (the view) it is much easier to test these parts in isolation.")),(0,r.kt)("p",null,"In MVP the three classes are defined as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"model")," is an interface defining the data to be displayed or otherwise acted upon in the user interface."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"view")," is a passive interface that displays data (from the model) and routes user commands (events) to the presenter to act upon that data."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"presenter")," acts upon the model and the view. It retrieves data from repositories (the model), and formats it for display in the view.")),(0,r.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp.png",noShadow:!0,mdxType:"Figure"},"Model-View-Presenter Design Pattern"),(0,r.kt)("p",null,"In TouchGFX the communication with the non-UI part of the application, here called the backend system, is done from the Model class. The backend system is a software component that both receives events from the UI and feeds events into the UI, such as new measurements from sensors. The backend system can run as a separate task on the same MCU, on a separate processor, a cloud module or something else. From the perspective of TouchGFX, this does not really matter, as long as it is a component that it is able to communicate with."),(0,r.kt)("p",null,"The specific communication protocol used is not managed by TouchGFX. It simply supplies a function that is called once each tick of TouchGFX, in which the needed communication can be handled. Read more on this subject in ",(0,r.kt)("a",d({parentName:"p"},{href:"../touchgfx-engine-features/backend-communication"}),"Backend Communication"),"."),(0,r.kt)(o.Z,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp-2.png",noShadow:!0,mdxType:"Figure"},"Model-View-Presenter and external communication"),(0,r.kt)("p",null,"For more concrete details on how MVP is implemented and used in TouchGFX UI development see the ",(0,r.kt)("a",d({parentName:"p"},{href:"code-structure"}),"Code Structure")," section."))}g.isMDXComponent=!0}}]);