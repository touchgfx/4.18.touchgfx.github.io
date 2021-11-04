"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4233],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=i,g=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},82985:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},39130:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(67294),i=n(73727),a=n(11368),o=n(35096),l=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),p=n(67023),d=Object.defineProperty,c=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&k(e,n,t[n]);if(g)for(var n of g(t))f.call(t,n)&&k(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:d,to:k,href:v,activeClassName:b,isActive:y,"data-noBrokenLinkCheck":T,autoAddBaseUrl:x=!0}=n,N=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:j,baseUrl:C}}=(0,a.Z)(),{withBaseUrl:O}=(0,u.C)(),S=(0,r.useContext)(s),E=k||v,F=(0,o.Z)(E),D=null==E?void 0:E.replace("pathname://","");let P=void 0!==D?(I=D,x&&(e=>e.startsWith("/"))(I)?O(I):I):void 0;var I;P&&F&&(P=(0,p.applyTrailingSlash)(P,{trailingSlash:j,baseUrl:C}));const B=(0,r.useRef)(!1),Z=d?i.OL:i.rU,M=l.Z.canUseIntersectionObserver,G=(0,r.useRef)();(0,r.useEffect)((()=>(!M&&F&&null!=P&&window.docusaurus.prefetch(P),()=>{M&&G.current&&G.current.disconnect()})),[G,P,M,F]);const A=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,V=!P||!F||A;return P&&F&&!A&&!T&&S.collectLink(P),V?r.createElement("a",w(w({href:P},E&&!F&&{target:"_blank",rel:"noopener noreferrer"}),N)):r.createElement(Z,w((_=w({},N),c(_,h({onMouseEnter:()=>{B.current||null==P||(window.docusaurus.preload(P),B.current=!0)},innerRef:e=>{var t,n;M&&e&&F&&(t=e,n=()=>{null!=P&&window.docusaurus.prefetch(P)},G.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(G.current.unobserve(t),G.current.disconnect(),n())}))})),G.current.observe(t))},to:P||""}))),d&&{isActive:y,activeClassName:b}));var _}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),a="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(i,a)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},26382:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return k},metadata:function(){return w},toc:function(){return v},default:function(){return y}});var r=n(3905),i=n(44035),a=n(82985),o=n(29415),l=n(39130),s=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&g(e,n,t[n]);if(d)for(var n of d(t))h.call(t,n)&&g(e,n,t[n]);return e};const f={id:"config-view",title:"Config View"},k=void 0,w={unversionedId:"development/ui-development/designer-user-guide/config-view",id:"development/ui-development/designer-user-guide/config-view",isDocsHomePage:!1,title:"Config View",description:"In the Config View various settings affecting the project can be configured in the following sections: General, Display, Default Image Configuration, Text Configuration, Simulator, Build and Framework Features.",source:"@site/docs/development/ui-development/designer-user-guide/config-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/config-view",permalink:"/4.18/ko/docs/development/ui-development/designer-user-guide/config-view",tags:[],version:"current",frontMatter:{id:"config-view",title:"Config View"},sidebar:"docs",previous:{title:"Texts View",permalink:"/4.18/ko/docs/development/ui-development/designer-user-guide/texts-view"},next:{title:"Interactions",permalink:"/4.18/ko/docs/development/ui-development/designer-user-guide/interactions-view"}},v=[{value:"General",id:"general",children:[],level:2},{value:"Display",id:"display",children:[],level:2},{value:"Default Image Configuration",id:"default-image-configuration",children:[],level:2},{value:"Text Configuration",id:"text-configuration",children:[],level:2},{value:"Simulator",id:"simulator",children:[],level:2},{value:"Build",id:"build",children:[],level:2},{value:"Framework Features",id:"framework-features",children:[],level:2}],b={toc:v};function y(e){var t,n=e,{components:s}=n,g=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),g),u(t,p({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"In the Config View various settings affecting the project can be configured in the following sections: ",(0,r.kt)("a",m({parentName:"p"},{href:"#general"}),"General"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"#display"}),"Display"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"#default-image-configuration"}),"Default Image Configuration"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"#text-configuration"}),"Text Configuration"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"#simulator"}),"Simulator"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"#simulator"}),"Build")," and ",(0,r.kt)("a",m({parentName:"p"},{href:"#framework-features"}),"Framework Features"),"."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.png",mdxType:"Figure"},"General settings in Config View"),(0,r.kt)("h2",m({},{id:"general"}),"General"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general-4.17.png",mdxType:"Figure"},"General settings in Config View"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Name"),(0,r.kt)("br",null),"\nApplication name is a readonly field, displaying the name that was chosen for the application when it was created."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TouchGFX Board Setup"),(0,r.kt)("br",null),"\nThis field shows the TouchGFX Board Setup the application was created with, if this information is not available 'N/A' will be displayed.",(0,r.kt)("br",null),"\nIf this information is available, the name of the TouchGFX Board Setup will be displayed along with the version."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Selected Language"),(0,r.kt)("br",null),"\nThis dropdown contains the languages configured in the ",(0,r.kt)("a",m({parentName:"p"},{href:"texts-view"}),"Texts")," View, and selects which language should be displayed at startup of the project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Skin"),(0,r.kt)("br",null),"\nThis dropdown sets which of the two built-in styles to use for widgets that support setting a style, options are 'Blue' or 'Dark'. ",(0,r.kt)("em",{parentName:"p"},"If a widget has been configured with a style from the 'Blue' skin, and the skin is changed to 'Dark', the widget will automatically switch to a corresponding style in the 'Dark' skin.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Startup Screen"),(0,r.kt)("br",null),"\nThis dropdown contains all the screens that have been added to the project, and selects which screen to display at startup of the project."),(0,r.kt)("h2",m({},{id:"display"}),"Display"),(0,r.kt)("p",null,"In this section the settings for the Display can be configured."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.png",mdxType:"Figure"},"Display settings in Config View"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dimensions"),(0,r.kt)("br",null),"\nThe size of the display can be set through the ",(0,r.kt)("em",{parentName:"p"},"W(width)")," and ",(0,r.kt)("em",{parentName:"p"},"H(height)")," properties. However if the size has been configured by the TouchGFX Board Setup, configuration of the size will be disabled."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display Orientation"),(0,r.kt)("br",null),"\nThe orientation of the display can be toggled between Landscape and Portrait orientations. This will also affect how images used in a project are converted to cpp files."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Color Depth"),(0,r.kt)("br",null),"\nThis dropdown contains the color depths that are available to a project. These are determined by the TouchGFX Board Setup used to create a project."),(0,r.kt)("h2",m({},{id:"default-image-configuration"}),"Default Image Configuration"),(0,r.kt)("p",null,"In this section the default configuration used for images in a project can be set. These settings will affect all images in the project, unless they are overwriten in the ",(0,r.kt)("a",m({parentName:"p"},{href:"images-view"}),"Images")," View"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration-4.17.png",mdxType:"Figure"},"Default Image Configuration settings in Config View"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Opaque Image Format"),(0,r.kt)("br",null),"\nThis dropdown sets which format images that have only opaque pixel data should be generated with. The available image formats in this dropdown depend on the selected color depth of the project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Non Opaque Image Format"),(0,r.kt)("br",null),"\nThis dropdown sets which format images that have non-opaque pixel data should be generated with. The available image formats in this dropdown depend on the selected color depth of the project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Section"),(0,r.kt)("br",null),"\nThis dropdown sets the location where image data should be stored on the target hardware. The available sections in this dropdown depend on the TouchGFX Board Setup that the project was created with."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extra Section"),(0,r.kt)("br",null),"\nWhen using L8 image formats you can choose to store the color table in a different section using this dropdown. The available sections in this dropdown depend on the TouchGFX Board Setup that the project was created with."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dither Algorithm"),(0,r.kt)("br",null),"\nThis dropdown sets the dithering algorithm used for images."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No dither: ",(0,r.kt)("em",{parentName:"li"},"no dithering is applied to the image. This is the setting with the highest performance since no alteration is made. However, depending on the image, the quality of the image may also degrade visually at lower color depths.")),(0,r.kt)("li",{parentName:"ul"},"Floyd-Steinberg: ",(0,r.kt)("em",{parentName:"li"},"diffuses the error to neighboring pixels, resulting in fine-grained dithering but sacrificing sharpness.")),(0,r.kt)("li",{parentName:"ul"},"Jarvis, Judice and Ninke: ",(0,r.kt)("em",{parentName:"li"},"diffuses the error to pixels one step further away compared to Floyd-Steinberg, resulting in coarser dithering but a sharper image. The slowest of the 3 error-diffusion dithering algorithms.")),(0,r.kt)("li",{parentName:"ul"},"Stucki: ",(0,r.kt)("em",{parentName:"li"},"based on minimized average error dithering but faster and cleaner."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alpha Dither"),(0,r.kt)("br",null),"\nThis dropdown sets whether or not to use the dither algorithm through the alpha channel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Layout Rotaion"),(0,r.kt)("br",null),"\nThis dropdown specifies the rotation of the image data when generated. If the screen orientation is changed, use this to correctly render images in the new orientation."),(0,r.kt)("h2",m({},{id:"text-configuration"}),"Text Configuration"),(0,r.kt)("p",null,"In this section options for text rendering and storage can be configured by checking the boxes that fit your project's needs."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.png",mdxType:"Figure"},"Text Configuration settings in Config View"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remap texts"),(0,r.kt)("br",null),"\nThis option defines whether or not translations that are identical should be remapped.\nRemapping texts will combine identical translations and suffixes across all languages, typographies and alignments, resulting in a reduced footprint.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"This option is mutually exclusive with the option 'Binary translation files'")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A4"),(0,r.kt)("br",null),"\nThis option defines whether or not the horizontal pixel data of glyphs byte are aligned into an A4 format.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"This only affects typographies that are configured as 4bpp")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Binary translation files"),(0,r.kt)("br",null),"\nThis option defines whether or not the translations in a project should be moved into binary files that can be loaded at runtime.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"This option is mutually exclusive with the option 'Remap texts'")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Binary font files"),(0,r.kt)("br",null),"\nThis option defines whether or not the font files in a project should be moved into binary files that can be loaded at runtime."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mapped storage format"),(0,r.kt)("br",null),"\nThis option defines if the font files in a project should be output in mapped storage format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unmapped storage format"),(0,r.kt)("br",null),"\nThis option defines if the font files in a project should be output in unmapped storage format."),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},(0,r.kt)(l.Z,{to:"../touchgfx-engine-features/texts-and-fonts",mdxType:"Link"},"Text and Fonts")),(0,r.kt)("h2",m({},{id:"simulator"}),"Simulator"),(0,r.kt)("p",null,"In this section, a skin can be added to the Simulator when running it. A skin can be added for both Landscape and Portrait orientated projects.\nThe ",(0,r.kt)("em",{parentName:"p"},"X")," and ",(0,r.kt)("em",{parentName:"p"},"Y")," properties determine the position of the simulator on the skin."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.png",mdxType:"Figure"},"Simulator settings in Config View"),(0,r.kt)("p",null,"Below is a demonstration of a simulator running with a skin.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"When a simulator runs with a skin, the standard window controls are hidden. To close the simulator press")," ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Esc")),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.gif",mdxType:"Figure"},"Simulator running with a skin"),(0,r.kt)("h2",m({},{id:"build"}),"Build"),(0,r.kt)("p",null,"In this section the commands that are executed when pressing ",(0,r.kt)("a",m({parentName:"p"},{href:"main-window#run-simulator"}),"'Run Simulator'"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"main-window#run-target"}),"'Run Target'")," and ",(0,r.kt)("a",m({parentName:"p"},{href:"main-window#generate-code"}),"'Generate Code'"),", can be overwritten."),(0,r.kt)("p",null,"To overwrite a command, simply write any command in the text boxes. To reset a command, if it has been overwritten, press the 'Reset' label next to the name of the Command."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.png",mdxType:"Figure"},"Build settings in Config View"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Generate Assets Command"),(0,r.kt)("br",null)),(0,r.kt)("p",null,"This command is usually set up to generate text and image assets, and is executed after the TouchGFX Designer has generated the code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Post Generate Command"),(0,r.kt)("br",null),"\nThis command is usually used to update various project files. The built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx update_project")," commandline tool supports updating the following project files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visual Studio (.vcxproj)"),(0,r.kt)("li",{parentName:"ul"},"Keil (.uvprojx)"),(0,r.kt)("li",{parentName:"ul"},"IAR (.ewp & .ipcf)"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeIDE (.project & .cproject)"),(0,r.kt)("li",{parentName:"ul"},"STM32CubeMX (.ioc)")),(0,r.kt)("p",null,"However, any command that needs to be executed after code generation can be written here."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compile Simulator Command"),(0,r.kt)("br",null),"\nThis command executes the compilation of a project for the simulator, usually by executing the Makefile generated by the TouchGFX Designer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run Simulator Command"),(0,r.kt)("br",null),"\nThis command executes the startup of the simulator.exe."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Post Generate Target Command"),(0,r.kt)("br",null),"\nThis command is usually used to update various project files, mostly STM32CubeMX (.ioc) project files."),(0,r.kt)("p",null,"However, any command that needs to be executed after code generation can be written here."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compile Target Command"),(0,r.kt)("br",null),"\nThis command executes the compilation of a project for the target hardware."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flash Target Command"),(0,r.kt)("br",null),"\nThis command executes the flashing of a project to the target hardware."),(0,r.kt)("h2",m({},{id:"framework-features"}),"Framework Features"),(0,r.kt)("p",null,"In this section features in the framework, specifically which image formats the Texture Mapper widget supports, can be enabled/disabled. This can be used for optimizing the code size a project takes up on the target hardware."),(0,r.kt)("p",null,"The available options displayed in this section depend upon which color depth has been chosen for the project. In the image below the image formats for a 24 bit color depth Texture Mapper is shown."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.png",mdxType:"Figure"},"Framework Features settings for 24bpp in Config View"))}y.isMDXComponent=!0}}]);