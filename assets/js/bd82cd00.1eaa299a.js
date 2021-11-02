(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5223],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(67294),a=n(73727),o=n(11368),i=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),u=n(67023),p=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&b(e,n,t[n]);return e};var y=function(e){var t,n=e,{isNavLink:p,to:b,href:y,activeClassName:k,isActive:w,"data-noBrokenLinkCheck":x,autoAddBaseUrl:G=!0}=n,N=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T,baseUrl:O}}=(0,o.Z)(),{withBaseUrl:C}=(0,s.C)(),B=(0,r.useContext)(c),F=b||y,E=(0,i.Z)(F),j=null==F?void 0:F.replace("pathname://","");let R=void 0!==j?(A=j,G&&(e=>e.startsWith("/"))(A)?C(A):A):void 0;var A;R&&E&&(R=(0,u.applyTrailingSlash)(R,{trailingSlash:T,baseUrl:O}));const P=(0,r.useRef)(!1),D=p?a.OL:a.rU,S=l.Z.canUseIntersectionObserver,X=(0,r.useRef)();(0,r.useEffect)((()=>(!S&&E&&null!=R&&window.docusaurus.prefetch(R),()=>{S&&X.current&&X.current.disconnect()})),[X,R,S,E]);const M=null!==(t=null==R?void 0:R.startsWith("#"))&&void 0!==t&&t,_=!R||!E||M;return R&&E&&!M&&!x&&B.collectLink(R),_?r.createElement("a",v(v({href:R},F&&!E&&{target:"_blank",rel:"noopener noreferrer"}),N)):r.createElement(D,v((L=v({},N),d(L,h({onMouseEnter:()=>{P.current||null==R||(window.docusaurus.preload(R),P.current=!0)},innerRef:e=>{var t,n;S&&e&&E&&(t=e,n=()=>{null!=R&&window.docusaurus.prefetch(R)},X.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(X.current.unobserve(t),X.current.disconnect(),n())}))})),X.current.observe(t))},to:R||""}))),p&&{isActive:w,activeClassName:k}));var L}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,o)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},26566:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return b},metadata:function(){return v},toc:function(){return y},default:function(){return w}});var r=n(3905),a=n(44035),o=n(22425),i=n(29415),l=n(31217),c=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))h.call(t,n)&&m(e,n,t[n]);return e};const g={id:"scenarios-change-pixelformat-bpp",title:"Changing the Pixel Format of an Application"},b=void 0,v={unversionedId:"development/scenarios/scenarios-change-pixelformat-bpp",id:"development/scenarios/scenarios-change-pixelformat-bpp",isDocsHomePage:!1,title:"Changing the Pixel Format of an Application",description:"This article shows how to change the pixel format of an application after a project has been created. Concretely, this article exemplifies modifying a 24-bit RGB888 application to be 16-bit RGB565 through the TouchGFX Generator and also shows the impact on the TouchGFX project configuration. Reasons to change the pixel format could be the following:",source:"@site/docs/development/scenarios/scenarios-change-pixelformat-bpp.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-change-pixelformat-bpp",permalink:"/4.18/docs/development/scenarios/scenarios-change-pixelformat-bpp",tags:[],version:"current",frontMatter:{id:"scenarios-change-pixelformat-bpp",title:"Changing the Pixel Format of an Application"},sidebar:"docs",previous:{title:"Using Non-Memory Mapped Flash for Font Data",permalink:"/4.18/docs/development/scenarios/fonts-in-unmapped-flash"},next:{title:"Creating an TouchGFX Board Setup",permalink:"/4.18/docs/development/scenarios/scenarios-create-at"}},y=[{value:"Board Bring Up",id:"board-bring-up",children:[],level:2},{value:"HAL Development",id:"hal-development",children:[],level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],k={toc:y};function w(e){var t,n=e,{components:c}=n,m=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},k),m),s(t,u({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This article shows how to change the pixel format of an application after a project has been created. Concretely, this article exemplifies modifying a 24-bit RGB888 application to be 16-bit RGB565 through the TouchGFX Generator and also shows the impact on the TouchGFX project configuration. Reasons to change the pixel format could be the following: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Modified display requirements"),(0,r.kt)("li",{parentName:"ol"},"Modified application requirements"),(0,r.kt)("li",{parentName:"ol"},"Mistake during initial project creation")),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"Please read the article on ",(0,r.kt)(l.Z,{to:"../../basic-concepts/color-formats",mdxType:"Link"},"Color Formats"),"."),(0,r.kt)("p",null,"Generally, the following changes could be required to change the pixel format of your application."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Board Bring Up:")," Change the pixel format of the LTDC."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"HAL Development:")," Modify TouchGFX Generator settings to reflect LTDC settings or location of framebuffer(s) in memory."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Designer"),": Ensure that the designer is using this new converted bit depth and correct format for image assets.")),(0,r.kt)("p",null,"Starting from the designer we can inspect the current configuration for ",(0,r.kt)("em",{parentName:"p"},"Display")," and ",(0,r.kt)("em",{parentName:"p"},"Image")," and return to these screens later to validate."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-4-17.png",width:"600",mdxType:"Figure"},"Image configuration RGB888"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-4-17.png",width:"600",mdxType:"Figure"},"Display configuration 24-bit"),(0,r.kt)("h2",f({},{id:"board-bring-up"}),"Board Bring Up"),(0,r.kt)("p",null,"If certain settings in the STM32CubeMX project can impact the desired pixel format of the application, as is the case for LTDC, developers are required to make appropriate changes here such that TouchGFX renders in the format expected by the LTDC.   "),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"Please read the article on ",(0,r.kt)(l.Z,{to:"../touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",mdxType:"Link"},"LTDC")," for details on valid pixel format settings for TouchGFX applications."),(0,r.kt)("h2",f({},{id:"hal-development"}),"HAL Development"),(0,r.kt)("p",null,"If the bit-depth of the applications changes along with the pixel format of the framebuffer (e.g. changing ARGB2222 to BRGA2222 you would still have an 8-bit application), developers ",(0,r.kt)("em",{parentName:"p"},"may")," be required to modify the memory locations of the framebuffers. In the case below:"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-chage-px-fmt.png",width:"400",mdxType:"Figure"},"Modify pixel format"),(0,r.kt)("p",null,"Generating code using this configuration will generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXConfiguration")," that uses the 16-bit TouchGFX ",(0,r.kt)("inlineCode",{parentName:"p"},"LCD")," class."),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"static LCD16bpp display;\n")),(0,r.kt)("p",null,"If the project is open in TouchGFX Designer, developers will be prompted to update to reflect the newly generated configuration changes. "),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-json",metastring:"{7-8}","{7-8}":!0}),'{\n  "image_configuration": {\n    "images": {},\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB565",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  },\n')),(0,r.kt)("p",null,"The table below lists the impact on opaque and non-opaque image formats given a pixel format:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Framebuffer pixel format"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Opaque format"),(0,r.kt)("th",f({parentName:"tr"},{align:null}),"Non-Opaque format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Gray2"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Gray2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Gray4"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Gray4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"ABGR2222"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"ABGR2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"ARGB2222"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"ARGB2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"BGRA2222"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"BGRA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"RGBA2222"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"RGBA2222")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"RGB565"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"ARGB8888")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"RGB888"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"ARGB8888")))),(0,r.kt)("h2",f({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)("p",null,"Once the TouchGFX project has been updated based on the new TouchGFX Generator settings defined in STM32CubeMX, developers will find that the TouchGFX Designer configuration has changed to match."),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-image-16bpp-4-17.png",width:"600",mdxType:"Figure"},"Image configuration RGB565"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/designer-config-display-16bpp-4-17.png",width:"600",mdxType:"Figure"},"Display configuration 16-bit"),(0,r.kt)("p",null,"After generating code from within TouchGFX Designer the code for image assets now reflect the updated pixel format:"),(0,r.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX\\generated\\images\\src\\my_image.png"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'LOCATION_PRAGMA("ExtFlashSection")\nKEEP extern const unsigned char my_image[] LOCATION_ATTRIBUTE("ExtFlashSection") = // 320x240 RGB565 pixels.\n')),(0,r.kt)("h2",f({},{id:"conclusion"}),"Conclusion"),(0,r.kt)("p",null,"Modifying the current pixel format of an application can be done by simply using TouchGFX Generator. For MCUs with an LTDC, the layer running TouchGFX must match the Framebuffer pixel format defined in TouchGFX Generator (Limited to RGB565 and RGB888 for LTDC) settings to ensure compliance with the format rendered by TouchGFX Core. "),(0,r.kt)("p",null,"Once code has been generated from STM32CubeMX, the TouchGFX project will be updated and upon subsequent code generation in TouchGFX Designer both image assets and framebuffer driver will have the specified formats."))}w.isMDXComponent=!0}}]);