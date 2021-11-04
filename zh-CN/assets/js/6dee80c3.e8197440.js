"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[218],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29415:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},65407:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){var t,n;const a=(0,o.Z)(e.url),i=null!=(t=e.width)?t:"100%",l=null!=(n=e.height)?n:"100%";return r.createElement("div",{class:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:i,height:l},r.createElement("source",{src:a,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},39130:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(67294),o=n(73727),a=n(11368),i=n(35096),l=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),u=n(67023),p=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&v(e,n,t[n]);return e};var w=function(e){var t,n=e,{isNavLink:p,to:v,href:w,activeClassName:y,isActive:x,"data-noBrokenLinkCheck":k,autoAddBaseUrl:O=!0}=n,E=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T,baseUrl:D}}=(0,a.Z)(),{withBaseUrl:j}=(0,c.C)(),S=(0,r.useContext)(s),P=v||w,C=(0,i.Z)(P),B=null==P?void 0:P.replace("pathname://","");let F=void 0!==B?(X=B,O&&(e=>e.startsWith("/"))(X)?j(X):X):void 0;var X;F&&C&&(F=(0,u.applyTrailingSlash)(F,{trailingSlash:T,baseUrl:D}));const G=(0,r.useRef)(!1),Z=p?o.OL:o.rU,N=l.Z.canUseIntersectionObserver,L=(0,r.useRef)();(0,r.useEffect)((()=>(!N&&C&&null!=F&&window.docusaurus.prefetch(F),()=>{N&&L.current&&L.current.disconnect()})),[L,F,N,C]);const M=null!==(t=null==F?void 0:F.startsWith("#"))&&void 0!==t&&t,U=!F||!C||M;return F&&C&&!M&&!k&&S.collectLink(F),U?r.createElement("a",b(b({href:F},P&&!C&&{target:"_blank",rel:"noopener noreferrer"}),E)):r.createElement(Z,b((_=b({},E),d(_,h({onMouseEnter:()=>{G.current||null==F||(window.docusaurus.preload(F),G.current=!0)},innerRef:e=>{var t,n;N&&e&&C&&(t=e,n=()=>{null!=F&&window.docusaurus.prefetch(F)},L.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.current.unobserve(t),L.current.disconnect(),n())}))})),L.current.observe(t))},to:F||""}))),p&&{isActive:x,activeClassName:y}));var _}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(11368),o=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[o]=e.split(/[#?]/),a="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(o,a)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return v},toc:function(){return b},default:function(){return y}});var r=n(3905),o=n(29415),a=n(39130),i=n(65407),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&h(e,n,t[n]);return e};const m={id:"examples",title:"Examples and Board Specific Demos"},g=void 0,v={unversionedId:"development/ui-development/working-with-touchgfx/examples",id:"development/ui-development/working-with-touchgfx/examples",isDocsHomePage:!1,title:"Examples and Board Specific Demos",description:"To help further explore the possibilities and features of TouchGFX, multiple premade Examples and Demos are made available to the user. These Examples and Demos can be accessed through the Lobby of TouchGFX Designer and all include free-to-use images, code, etc., which means that they can even be used as a base to build your own unique application from. Examples and Demos are combined with TouchGFX Board Setup to create TouchGFX applications. If you are new to TouchGFX, this can be a great starting source of inspiration and knowledge about how TouchGFX applications function.",source:"@site/docs/development/ui-development/working-with-touchgfx/examples.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/examples",permalink:"/4.18/zh-CN/docs/development/ui-development/working-with-touchgfx/examples",tags:[],version:"current",frontMatter:{id:"examples",title:"Examples and Board Specific Demos"},sidebar:"docs",previous:{title:"Debugging",permalink:"/4.18/zh-CN/docs/development/ui-development/working-with-touchgfx/debugging"},next:{title:"Keyboard Shortcuts",permalink:"/4.18/zh-CN/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}},b=[{value:"Examples and Demos",id:"ui-templates",children:[],level:2},{value:"Board Specific Demos",id:"online-applications",children:[],level:2}],w={toc:b};function y(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},w),h),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"To help further explore the possibilities and features of TouchGFX, multiple premade Examples and Demos are made available to the user. These Examples and Demos can be accessed through the ",(0,r.kt)("a",f({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"Lobby")," of TouchGFX Designer and all include free-to-use images, code, etc., which means that they can even be used as a base to build your own unique application from. Examples and Demos are combined with ",(0,r.kt)("a",f({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"TouchGFX Board Setup")," to create TouchGFX applications. If you are new to TouchGFX, this can be a great starting source of inspiration and knowledge about how TouchGFX applications function."),(0,r.kt)("p",null,"Some Examples and Demos focus on single features while others implement several different functionalities found in TouchGFX. Demos are divided into two different types: ",(0,r.kt)("a",f({parentName:"p"},{href:"#ui-templates"}),"Demos")," and ",(0,r.kt)("a",f({parentName:"p"},{href:"#online-applications"}),"Board Specific Demos"),"."),(0,r.kt)("h2",f({},{id:"ui-templates"}),"Examples and Demos"),(0,r.kt)("p",null,"Examples are generally smaller, more self-contained applications that mostly focus on specific features such as different widgets. Examples can run on any STM32 evaluation kit and the PC simulator, but for the best experience it is encouraged to create projects where the resolution of the Example fits the resolution of your board. Some Examples are also built with specific color depths in mind, which means they might not display as well on lower color depth displays."),(0,r.kt)("p",null,"The Demos include several applications made by the TouchGFX team which showcase more features with higher quality UI design. These can be a great place to start to get a feeling for what TouchGFX is capable of."),(0,r.kt)("p",null,'To create an application using an Example or Demo, start by clicking the "Examples" or "Demos" in the top left of the lobby to see the available applications and click on whichever application you want. Optionally, select another resolution and color depth in the drop downs. If you wish to run on a supported hardware click on the "Select Hardware" in the top of the window, choose whichever board you wish and press "Select". Finally, press \'Create\' to create an application from the selected TouchGFX Board Setup and Example or Demo. Press either \'Run Simulator\' or \'Run Target\' to see the application running.'),(0,r.kt)("p",null,"An animation of these steps can be seen below:"),(0,r.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"Creating a project using an Example"),(0,r.kt)("h2",f({},{id:"online-applications"}),"Board Specific Demos"),(0,r.kt)("p",null,"Board Specific Demos are out-of-the-box applications for specific hardware solutions and it is therefore not possible to run these on any other STM32 evaluation kit than the one it was created for (aside from the PC simulator). These applications are generally a lot larger and explore multiple different features of the TouchGFX framework and can also include sample integration with the hardware."),(0,r.kt)("p",null,"To create an application using a Board Specific Demo, first access these by clicking the 'Demos' tab in the top left of the lobby. Click the \"Board Specific Demo\" label in the top of the window to show what applications are available. Click the application you want and finish by pressing 'Create'. Either press 'Run Simulator' or 'Run Target' to see the application running."),(0,r.kt)("p",null,"An animation of these steps can be seen below:"),(0,r.kt)(i.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"Creating a project using a Board Specific Demo"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"To read more about how to create applications using Examples or Demos, see the ",(0,r.kt)(a.Z,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"Lobby section"),"."))}y.isMDXComponent=!0}}]);