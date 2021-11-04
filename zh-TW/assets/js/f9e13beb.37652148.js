"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7252],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var o=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,r.Z)(e.imageSource);return t?o.createElement("div",{class:"figure noshadow"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:i,src:a})),o.createElement("p",null,e.children)):o.createElement("div",{class:"figure"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:i,src:a})),o.createElement("p",null,e.children))}},35096:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var o=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,o)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},64206:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return g},default:function(){return y}});var o=n(3905),r=n(44035),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&p(e,n,t[n]);return e};const f={id:"welcome",title:"TouchGFX Documentation",sidebar_label:"Welcome",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications."},m=void 0,h={unversionedId:"introduction/welcome",id:"introduction/welcome",isDocsHomePage:!1,title:"TouchGFX Documentation",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications.",source:"@site/docs/introduction/welcome.mdx",sourceDirName:"introduction",slug:"/introduction/welcome",permalink:"/4.18/zh-TW/docs/introduction/welcome",tags:[],version:"current",frontMatter:{id:"welcome",title:"TouchGFX Documentation",sidebar_label:"Welcome",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications."},sidebar:"docs",next:{title:"What is TouchGFX?",permalink:"/4.18/zh-TW/docs/introduction/what-is-touchgfx"}},g=[{value:"About this documentation",id:"about-this-documentation",children:[{value:"Target User",id:"target-user",children:[],level:3}],level:2}],b={toc:g};function y(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&u)for(var o of u(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=d(d({},b),p),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"Welcome to the official documentation of TouchGFX!"),(0,o.kt)(r.Z,{imageSource:"/img/introduction/welcome/frontpage-4.17.png",noShadow:"true",mdxType:"Figure"}),(0,o.kt)("p",null,"If you are new to this documentation and/or TouchGFX, we recommend that you read on to get an overview of what this documentation has to offer.\nThe table of contents in the sidebar should let you easily access the documentation for your topic of interest.\nYou can also use the search function in the top right corner."),(0,o.kt)("h2",d({},{id:"about-this-documentation"}),"About this documentation"),(0,o.kt)("p",null,"The main documentation for the site is organized into the following sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"what-is-touchgfx"}),(0,o.kt)("strong",{parentName:"a"},"Introduction"))," - read surface-level information on TouchGFX and installation guide."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),(0,o.kt)("strong",{parentName:"a"},"Basic Concepts"))," - introduction to key graphics concepts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"../development/development-introduction"}),(0,o.kt)("strong",{parentName:"a"},"Development"))," - how to develop a TouchGFX application including, structure, workflow and tools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"../tutorials/tutorial-01"}),(0,o.kt)("strong",{parentName:"a"},"Tutorials"))," - a collection of TouchGFX tutorials.")),(0,o.kt)("h3",d({},{id:"target-user"}),"Target User"),(0,o.kt)("p",null,"The TouchGFX documentation is targeting software developers with a basic skill-set within C++ and embedded GUI development on STM32. Newcomers to Embedded GUI Development are supported in the section Basic Concepts, while step by step guides and tutorials support everyone towards a smooth learning in TouchGFX development as well."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"We would really like to improve this documentation in any way possible."),"\n",(0,o.kt)("em",{parentName:"p"},"If you don\u2019t understand something, or cannot find what you are looking for in the docs, help us make the documentation better by letting us know in the ",(0,o.kt)("a",d({parentName:"em"},{href:"https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx"}),"forum"),"!")))}y.isMDXComponent=!0}}]);