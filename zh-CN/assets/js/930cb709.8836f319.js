(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2574],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(r),u=a,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},44035:function(e,t,r){"use strict";var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},29415:function(e,t,r){"use strict";var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){"use strict";var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(67294),a=r(73727),o=r(11368),i=r(35096),l=r(84487);const s=(0,n.createContext)({collectLink:()=>{}});var c=r(25026),d=r(67023),p=Object.defineProperty,h=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&k(e,r,t[r]);if(m)for(var r of m(t))g.call(t,r)&&k(e,r,t[r]);return e};var b=function(e){var t,r=e,{isNavLink:p,to:k,href:b,activeClassName:w,isActive:v,"data-noBrokenLinkCheck":M,autoAddBaseUrl:T=!0}=r,C=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&g.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:N}}=(0,o.Z)(),{withBaseUrl:S}=(0,c.C)(),A=(0,n.useContext)(s),P=k||b,R=(0,i.Z)(P),F=null==P?void 0:P.replace("pathname://","");let O=void 0!==F?(D=F,T&&(e=>e.startsWith("/"))(D)?S(D):D):void 0;var D;O&&R&&(O=(0,d.applyTrailingSlash)(O,{trailingSlash:x,baseUrl:N}));const E=(0,n.useRef)(!1),U=p?a.OL:a.rU,I=l.Z.canUseIntersectionObserver,j=(0,n.useRef)();(0,n.useEffect)((()=>(!I&&R&&null!=O&&window.docusaurus.prefetch(O),()=>{I&&j.current&&j.current.disconnect()})),[j,O,I,R]);const G=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,Z=!O||!R||G;return O&&R&&!G&&!M&&A.collectLink(O),Z?n.createElement("a",y(y({href:O},P&&!R&&{target:"_blank",rel:"noopener noreferrer"}),C)):n.createElement(U,y((L=y({},C),h(L,u({onMouseEnter:()=>{E.current||null==O||(window.docusaurus.preload(O),E.current=!0)},innerRef:e=>{var t,r;I&&e&&R&&(t=e,r=()=>{null!=O&&window.docusaurus.prefetch(O)},j.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.current.unobserve(t),j.current.disconnect(),r())}))})),j.current.observe(t))},to:O||""}))),p&&{isActive:v,activeClassName:w}));var L}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return o},Z:function(){return i}});var n=r(11368),a=r(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),o="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,o)}},67023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var o=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},78472:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return g},contentTitle:function(){return k},metadata:function(){return y},toc:function(){return b},default:function(){return v}});var n=r(3905),a=r(44035),o=r(29415),i=r(31217),l=r(93054),s=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&m(e,r,t[r]);return e};const g={id:"hardware-selection-mcu",title:"MCU"},k=void 0,y={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-mcu",id:"development/hardware-selection/hardware-components/hardware-selection-mcu",isDocsHomePage:!1,title:"MCU",description:"The microcontroller unit (MCU) is at the core of any embedded solution and there are a wide variety of options in both costs and features.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-mcu.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-mcu",permalink:"/4.18/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-mcu",tags:[],version:"current",frontMatter:{id:"hardware-selection-mcu",title:"MCU"},sidebar:"docs",previous:{title:"\u521d\u6b65\u8003\u8651",permalink:"/4.18/zh-CN/docs/development/hardware-selection/preliminary-considerations"},next:{title:"Display",permalink:"/4.18/zh-CN/docs/development/hardware-selection/hardware-components/hardware-selection-display"}},b=[{value:"Frequency",id:"frequency",children:[{value:"Graphic Subsystem Frequency",id:"graphic-subsystem-frequency",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Embedded Hardware Acceleration Features",id:"embedded-hardware-acceleration-features",children:[{value:"Chrom-ART",id:"chrom-art",children:[],level:3},{value:"JPEG Hardware Codec",id:"jpeg-hardware-codec",children:[],level:3},{value:"Chrom-GRC",id:"chrom-grc",children:[],level:3}],level:2},{value:"Internal Flash",id:"internal-flash",children:[],level:2},{value:"Internal RAM",id:"internal-ram",children:[],level:2},{value:"LCD Controller",id:"lcd-controller",children:[],level:2},{value:"Packages &amp; I/O",id:"packages--io",children:[],level:2},{value:"Memory Interfacing",id:"memory-interfacing",children:[{value:"Flexible Memory Controller &amp; Flexible Static Memory Controller (FMC/FSMC)",id:"flexible-memory-controller--flexible-static-memory-controller-fmcfsmc",children:[],level:3},{value:"Serial Memory Interface",id:"serial-memory-interface",children:[],level:3},{value:"STM32 Value Line products",id:"stm32-value-line-products",children:[],level:3}],level:2},{value:"Cortex\xae-M Cores",id:"cortex-m-cores",children:[{value:"Cortex\xae-M0+",id:"cortex-m0",children:[],level:3},{value:"Cortex\xae-M4",id:"cortex-m4",children:[],level:3},{value:"Cortex\xae-M7",id:"cortex-m7",children:[],level:3},{value:"Feature overview",id:"feature-overview",children:[],level:3},{value:"Level 1 cache:",id:"level-1-cache",children:[],level:3},{value:"Dual core",id:"dual-core",children:[],level:3}],level:2},{value:"Bus architecture",id:"bus-architecture",children:[],level:2},{value:"Price",id:"price",children:[],level:2}],w={toc:b};function v(e){var t,r=e,{components:s}=r,m=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},w),m),c(t,d({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The microcontroller unit (MCU) is at the core of any embedded solution and there are a wide variety of options in both costs and features."),(0,n.kt)("p",null,"When selecting an MCU for graphics, one should consider the supported display interfaces, the MCU package, size and the achievable graphics performance which depends on two main points:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Image composition")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The availability of graphics accelerators integrated in the MCU."),(0,n.kt)("li",{parentName:"ul"},"The availability of cache memory in the system.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Memory access and bandwidth")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The clock frequency and the subsystem bus frequency."),(0,n.kt)("li",{parentName:"ul"},"The access to the internal flash and RAM memories.")),(0,n.kt)("p",null,"It is also important to consider the other aspects of the application (motor control, wireless, etc.), which are running in addition to the graphics. These can influence the choice of MCU."),(0,n.kt)("p",null,"This page will go through the different MCU options and which parameters should be considered when deciding on the STM32 MCU you should select for your GUI driven application."),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/mcu/mcu-portfolio-graphics.png",noShadow:!0,width:"600",mdxType:"Figure"},"STM32 MCU"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"For a more complete overview of all product lines, peripherals, prices etc., ",(0,n.kt)(i.Z,{to:"https://www.st.com/en/development-tools/st-mcu-finder.html",mdxType:"Link"},"the ST MCU Finder is available here"),".")),(0,n.kt)("h2",f({},{id:"frequency"}),"Frequency"),(0,n.kt)("p",null,"The core frequency has a major impact on the performance of a graphical application in terms of screen refresh, fluidity of screens and animations."),(0,n.kt)("p",null,"It impacts the amount of data that can be transferred from an internal or external memory to the display framebuffer and also the calculations and animations possible."),(0,n.kt)("p",null,"The higher the frequency, the more data it is possible to transfer within a given timeframe and the more complex animations can be made."),(0,n.kt)("p",null,"The core frequencies of the STM32 products is up to ",(0,n.kt)("strong",{parentName:"p"},"480MHz"),"."),(0,n.kt)(l.Z,{mdxType:"Note"},"The higher the frequency, the greater the power consumption."),(0,n.kt)("h3",f({},{id:"graphic-subsystem-frequency"}),"Graphic Subsystem Frequency"),(0,n.kt)("p",null,"It is important to differentiate the core CPU frequency from the graphic subsystem frequency. The graphic subsystem frequency includes the frequency of the internal busses, the frequency of the graphics accelerator as well as the access speed of the internal and external memories."),(0,n.kt)("p",null,"The graphic subsystem frequency also has a major impact on the overall graphic performance."),(0,n.kt)("h3",f({},{id:"example"}),"Example"),(0,n.kt)("p",null,"An example of assessing the theoretical core and subsystem performance when running from internal RAM on an STM32H7 can be seen next:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The CPU core is running at ",(0,n.kt)("strong",{parentName:"li"},"480MHz"),"."),(0,n.kt)("li",{parentName:"ul"},"The 64-bit AXI bus frequency at ",(0,n.kt)("strong",{parentName:"li"},"240MHz"),"."),(0,n.kt)("li",{parentName:"ul"},"The LCD-TFT display controller (LTDC) uses the 64-bit AXI bus, and does 8 transfers in 10 cycles."),(0,n.kt)("li",{parentName:"ul"},"The internal RAM poses no significant latency, i.e. 0 wait states.")),(0,n.kt)("p",null,"The bandwidth of the internal RAM when accessed by the LTDC peripheral is then:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bandwidth = 240 MHz x 8/10 x 8 bytes = ",(0,n.kt)("strong",{parentName:"li"},"1.536Mbytes/s"),".")),(0,n.kt)("p",null,"With such bandwidth, the internal RAM can ensure 1000 frames per second (fps) for 800x480 resolution at 32bpp color depth. Typically one would limit the transfer to the display (by adjusting pixel clock, porches, ...) to 60 frames per second, so the bandwidth of the LTDC and internal RAM is not a bottleneck."),(0,n.kt)("h2",f({},{id:"embedded-hardware-acceleration-features"}),"Embedded Hardware Acceleration Features"),(0,n.kt)("p",null,"Different STM32 MCUs have different built-in hardware acceleration features that help in achieving high performing graphics applications."),(0,n.kt)("h3",f({},{id:"chrom-art"}),"Chrom-ART"),(0,n.kt)("p",null,"Chrom-ART is an advanced DMA that aids in doing graphical operations. It is also known as DMA2D."),(0,n.kt)("p",null,"The Chrom-ART accelerator, integrated in many STM32 platforms, is able to manipulate and transfer images without CPU load. It has the capability to accelerate the majority of the graphic operations, such as color filling, image copying, blending, and pixel format conversions."),(0,n.kt)("p",null,"The Chrom-ART accelerator is able to perform blending of two layers and convert the initial pixel formats to the desired output pixel format and transfer the result to the memory destination in only one operation."),(0,n.kt)("p",null,"The Chrom-ART accelerator also supports color formats with color look up tables (CLUT). This can help with saving memory."),(0,n.kt)("p",null,"Example of an application running on the ",(0,n.kt)("strong",{parentName:"p"},"STM32F496-EVAL")," board where the CPU load is decreased from ",(0,n.kt)("strong",{parentName:"p"},"82%")," to ",(0,n.kt)("strong",{parentName:"p"},"4%")," when the Chrom-ART is enabled:"),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/mcu/birdeatcoin.gif",mdxType:"Figure"},"Bird-Eat-Coin Chrom-ART example"),(0,n.kt)("p",null,"In addition, the capability to convert from ",(0,n.kt)("strong",{parentName:"p"},"YCbCr")," format to ",(0,n.kt)("strong",{parentName:"p"},"RGB")," format is added with STM32H7 products to the Chrom-ART peripheral. This feature, combined with the JPEG hardware codec can offload the CPU when encoding and decoding JPEG images."),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/mcu/chrom-art-acceleration.png",noShadow:!0,width:"500",mdxType:"Figure"},"YCbCr to RGB Hardware performance"),(0,n.kt)("p",null,"The Chrom-ART accelerator, with the features listed above, offers a huge advantage for graphical applications. If available in the chosen MCU, TouchGFX handles all Chrom-ART features and redirects all possible drawing operations to the Chrom-ART peripheral instead of the CPU."),(0,n.kt)("p",null,"The Chrom-ART peripheral is available with high performance STM32 families."),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"Refer to AN4943 application note for more information:, ",(0,n.kt)(i.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/17/82/73/f8/b8/8a/47/c7/DM00338361/files/DM00338361.pdf/jcr:content/translations/en.DM00338361.pdf",mdxType:"Link"},"Chrom-ART Hardware acceleration"),".")),(0,n.kt)("h3",f({},{id:"jpeg-hardware-codec"}),"JPEG Hardware Codec"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"STM32H7")," and ",(0,n.kt)("strong",{parentName:"p"},"STM32F7")," families provide a hardware JPEG codec to encode and decode images and videos."),(0,n.kt)("p",null,"This feature is important if the UI application needs to play a video file or display JPEG images."),(0,n.kt)("p",null,"JPEG images generally take up less memory. The JPEG hardware codec ensures that the images can be decoded at runtime without CPU overload."),(0,n.kt)("p",null,"Some TouchGFX demos utilizes the JPEG hardware codec, offloading the CPU while playing an MJPEG video."),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/mcu/jpeg-codec-acceleration.png",noShadow:!0,width:"500",mdxType:"Figure"},"Hardware JPEG codec performance"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"Refer to AN4996 application note for more information: ",(0,n.kt)(i.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/a5/9d/22/46/61/6d/4a/ab/DM00356635/files/DM00356635.pdf/jcr:content/translations/en.DM00356635.pdf",mdxType:"Link"},"Hardware JPEG codec"),".")),(0,n.kt)("h3",f({},{id:"chrom-grc"}),"Chrom-GRC"),(0,n.kt)("p",null,"The STM32 Chrom-GRC\u2122 (GFXMMU) is a peripheral in some STM32 microcontrollers that aims to efficiently support the emerging trend towards non-rectangular displays."),(0,n.kt)("p",null,"The Chrom-GRC\u2122 peripheral enables applications to reduce the amount of RAM needed for storing the framebuffer when addressing non-rectangular displays."),(0,n.kt)("p",null,"In the case of a round display, the peripheral reduces the memory requirements by ",(0,n.kt)("strong",{parentName:"p"},"20%"),"."),(0,n.kt)("p",null,"The Chrom-GRC\u2122 peripheral is not mandatory when controlling non-square screens, but it is recommended."),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/mcu/stm-32-chrom-grc.png",noShadow:!0,width:"600",mdxType:"Figure"},"Memory optimization with Chrom-GRC peripheral"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"Refer to AN5051 application note for more information: ",(0,n.kt)(i.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/74/21/86/42/af/d5/4f/58/DM00407777/files/DM00407777.pdf/jcr:content/translations/en.DM00407777.pdf",mdxType:"Link"},"Graphic memory optimization"),".")),(0,n.kt)("h2",f({},{id:"internal-flash"}),"Internal Flash"),(0,n.kt)("p",null,"A graphical user interface application using bitmap resources needs non-volatile memory to store the data. The execution from and access to internal flash is in some cases up to two times faster than external flash."),(0,n.kt)("p",null,"As the internal flash is limited in size, in many cases it is often used for storing the TouchGFX framework, screen definitions and UI logic while the bitmap data is stored in external flash."),(0,n.kt)("p",null,"The portfolio of STM32 products used for graphic applications is between ",(0,n.kt)("strong",{parentName:"p"},"a few Kbytes")," and ",(0,n.kt)("strong",{parentName:"p"},"a few Mega bytes")," of internal flash memory."),(0,n.kt)("p",null,"External memory may be required when the amount of bitmap data does not fit within internal flash."),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"Refer to ",(0,n.kt)(i.Z,{to:"hardware-selection-external-memories",mdxType:"Link"},"External Memories")," for more details."),(0,n.kt)("p",null,"TouchGFX flash memory requirement:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Framework:                       ",(0,n.kt)("strong",{parentName:"li"},"60kbytes")," to ",(0,n.kt)("strong",{parentName:"li"},"100kbytes"),"."),(0,n.kt)("li",{parentName:"ul"},"Screen definition and GUI logic: ",(0,n.kt)("strong",{parentName:"li"},"1")," to ",(0,n.kt)("strong",{parentName:"li"},"100Kbytes"),".")),(0,n.kt)("p",null,"These numbers depend on the framework features used and the size and complexity of the application."),(0,n.kt)("h2",f({},{id:"internal-ram"}),"Internal RAM"),(0,n.kt)("p",null,"Internal RAM can be used for storing the framebuffer(s), when the size of these fit within the available memory. Alternatively one might add external memory to the setup."),(0,n.kt)("p",null,"Calculating the size of a framebuffer depends on the width, height and color depth. For example, a display with HVGA resolution (480x320) and 16 bit colors, the memory needed for one framebuffer is:"),(0,n.kt)("p",null,"Size of 1 framebuffer = ",(0,n.kt)("strong",{parentName:"p"},"480 x 320 x 2")," =  ",(0,n.kt)("strong",{parentName:"p"},"307.200 bytes")),(0,n.kt)("p",null,"The STM32 products used for graphic applications ranges from ",(0,n.kt)("strong",{parentName:"p"},"a few Kbytes")," and ",(0,n.kt)("strong",{parentName:"p"},"a few Mega Bytes")," of internal RAM."),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"Refer to the ",(0,n.kt)(i.Z,{to:"hardware-selection-external-memories",mdxType:"Link"},"External Memories")," section for more details on framebuffers in external memory."),(0,n.kt)("p",null,"TouchGFX RAM requirement:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Framework:          ",(0,n.kt)("strong",{parentName:"li"},"10Kbytes")," to ",(0,n.kt)("strong",{parentName:"li"},"30Kbytes")),(0,n.kt)("li",{parentName:"ul"},"Widgets:            ",(0,n.kt)("strong",{parentName:"li"},"1Kbytes")," to ",(0,n.kt)("strong",{parentName:"li"},"15Kbytes"))),(0,n.kt)("p",null,"Memory requirements may vary from application to application."),(0,n.kt)("h2",f({},{id:"lcd-controller"}),"LCD Controller"),(0,n.kt)("p",null,"The choice of the MCU also depends on the display interface that will be used and the resolution. The 800x480 resolution for example can only be achieved with an efficient interface in terms of data transfer speed. RGB-TFT and MPI-DSI interfaces are often used for higher resolutions, as the bandwidth is in many cases higher than SPI or parallel 8080/6800. Small resolution displays often embed controller and GRAM and so can be connected through simple SPI or 8080/6800 interfaces."),(0,n.kt)("p",null,"High resolution displays (WQVGA and above) often don\u2019t embed controller and GRAM, therefore the controller needs to be at the microcontroller side. On STM32 MCUs embedding RGB-TFT and MIPI DSI interfaces the controller is present."),(0,n.kt)(a.Z,{imageSource:"/img/development/hardware-selection/mcu/display-interfaces.png",noShadow:!0,width:"600",mdxType:"Figure"},"The picture shows 4 examples of different display interfaces with/without GRAM and display controller."),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"Refer to the ",(0,n.kt)(i.Z,{to:"hardware-selection-display",mdxType:"Link"},"Display")," section for more information."),(0,n.kt)("h2",f({},{id:"packages--io"}),"Packages & I/O"),(0,n.kt)("p",null,"The number of I/Os needed is dependent on the chosen display and external memories. Running a parallel display with parallel RAM/flash can require a high number of I/Os resulting in a larger package."),(0,n.kt)("h2",f({},{id:"memory-interfacing"}),"Memory Interfacing"),(0,n.kt)("p",null,"When internal flash and RAM in the microcontroller is not sufficient, choosing the right MCU with the most suitable external memory interface becomes important. The STM32 products provide different memory controller peripherals to interface with the NOR, NAND, SRAM, SDRAM, LPSDR SDRAM, and PSRAM memories."),(0,n.kt)("h3",f({},{id:"flexible-memory-controller--flexible-static-memory-controller-fmcfsmc"}),"Flexible Memory Controller & Flexible Static Memory Controller (FMC/FSMC)"),(0,n.kt)("p",null,"In addition to the support of the static RAM, the FMC adds dynamic RAM support (SDRAM) to the FSMC. The flexible memory controller (FMC) with its high external access speed and 8, 16 and especially 32 bit data bus, allows for higher throughout from and to external RAM and hence better support of higher resolution. The FMC has an independent chip select for each memory bank. The FMC can control an external flash memory for the data and an external RAM memory for the framebuffer and heap extension for the graphical stack."),(0,n.kt)("h3",f({},{id:"serial-memory-interface"}),"Serial Memory Interface"),(0,n.kt)("p",null,"Depending on the STM32 product, the serial memory interface is embedded and allows interfacing with single, double, quad, octo, and hyperBus flash memories alongside QSPI, PSRAM, OPI PSRAM, and Hyper RAM memories. The serial high speed memory interface can control up to ",(0,n.kt)("strong",{parentName:"p"},"256 Mbytes")," when in memory mapped mode and ",(0,n.kt)("strong",{parentName:"p"},"4Gbytes")," in indirect mode."),(0,n.kt)("p",null,"Compared to parallel interfaces, the serial memory interface permits the connection of a lower cost external flash memory to small packages and reduces the number of used pins."),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"Refer to AN4760 application note for more information: ",(0,n.kt)(i.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/b0/7e/46/a8/5e/c1/48/01/DM00227538/files/DM00227538.pdf/jcr:content/translations/en.DM00227538.pdf",mdxType:"Link"},"Quad-SPI interface on STM32 microcontrollers"),"."),(0,n.kt)("h3",f({},{id:"stm32-value-line-products"}),"STM32 Value Line products"),(0,n.kt)("p",null,"For price optimization, STM32H7 and STM32F7 platforms offer value line products with limited amount of internal flash. With these products, the graphic resources will be stored in the external flash."),(0,n.kt)("h2",f({},{id:"cortex-m-cores"}),"Cortex\xae-M Cores"),(0,n.kt)("p",null,"STM32 MCUs comes in different ARC Cortex\xae-M architectures. Below are the most used cores for running graphics on STM32."),(0,n.kt)("h3",f({},{id:"cortex-m0"}),"Cortex\xae-M0+"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Cortex\xae-M0+")," is characterized by its simple architecture and low price. It is recommended for smaller static graphic applications, running at lower resolutions."),(0,n.kt)("h3",f({},{id:"cortex-m4"}),"Cortex\xae-M4"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Cortex\xae-M4")," contains more functionalities than the ",(0,n.kt)("strong",{parentName:"p"},"M0+")," and accelerates calculations. It includes a DSP instruction set and a single precision FPU unit. These instructions offload the CPU and increases the speed of calculations."),(0,n.kt)("h3",f({},{id:"cortex-m7"}),"Cortex\xae-M7"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Cortex\xae-M7")," contains a more complex architecture but also a DSP instruction set, and comes with a more efficient FPU unit with double precision and a level1 cache memory with up to ",(0,n.kt)("strong",{parentName:"p"},"16KB")," for data and instructions. The cache memory gives the possibility of having data and instructions close to the calculation unit in order to optimize the fetch time."),(0,n.kt)("h3",f({},{id:"feature-overview"}),"Feature overview"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Feature"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Cortex-M0+"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Cortex-M4"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Cortex-M7"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"DMIPS/MHz range"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"0.95-1.36"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"1.25-1.95"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"2.14-3.23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Core Mark\xae/MHz"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"2.46"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"3.42"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"5.01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Digital Signal Processing (DSP) extension"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Floating Point Hardware"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Yes (SP)"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Yes (SP + DP)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Built-in-caches"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Yes (option 4-64KB), I-Cachen D-Cache")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Bus Protocol"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"AHB Lite,Fast I/O"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"AHB Lite, APB"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"AXI4, AHB Lite, APB, TCM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Dual Core Lock-Step Support"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Yes")))),(0,n.kt)("h3",f({},{id:"level-1-cache"}),"Level 1 cache:"),(0,n.kt)("p",null,"The STM32H7 and STM32F7 families include up to ",(0,n.kt)("strong",{parentName:"p"},"16 Kbytes")," of L1-Cache both for instructions and data. An L1-Cache stores a set of data or instructions near the CPU, so the CPU does not have to keep fetching the same data that is repeatedly used."),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"Refer to AN4839 application note for more information: ",(0,n.kt)(i.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/08/dd/25/9c/4d/83/43/12/DM00272913/files/DM00272913.pdf/jcr:content/translations/en.DM00272913.pdf",mdxType:"Link"},"Level 1 Cache"),"."),(0,n.kt)("h3",f({},{id:"dual-core"}),"Dual core"),(0,n.kt)("p",null,"The STM32H7 series includes the dual-core line:"),(0,n.kt)("p",null,"Arm\xae Cortex\xae-M7 and Cortex\xae-M4 cores can respectively run up to 480 MHz and 240 MHz enabling more processing and application partitioning. Dual-core STM32H7 product lines are available with an embedded SMPS for improved dynamic power efficiency."),(0,n.kt)("p",null,"The second Cortex\xae-M4 can offload heavy calculations to open up the M7 core for the drawing/graphic operations."),(0,n.kt)(l.Z,{mdxType:"Note"},"For dual core MCUs TouchGFX Generator must be anabled for a specific context. Only a single concurrent context is supported. See the ",(0,n.kt)(i.Z,{to:"../../touchgfx-hal-development/touchgfx-generator",mdxType:"Link"},"TouchGFX Generator User Guide")," for more information."),(0,n.kt)("h2",f({},{id:"bus-architecture"}),"Bus architecture"),(0,n.kt)("p",null,"The majority of STM32 microcontrollers provide a ",(0,n.kt)("strong",{parentName:"p"},"32-bits multi-AHB")," bus matrix interconnecting all the masters (CPU, DMAs, etc.) and the slaves (flash memory, RAM, FSMC, AHB and APB peripherals). This ensures seamless and efficient operations even when several high-speed peripherals work simultaneously."),(0,n.kt)("p",null,"In addition to multi-AHB interconnect, some STM32 (Cortex\xae-M7) products embed ",(0,n.kt)("strong",{parentName:"p"},"64-bit")," AXI to expand bandwidth. This yields the best compromise between performance and power consumption."),(0,n.kt)("h2",f({},{id:"price"}),"Price"),(0,n.kt)("p",null,"The size of the internal flash, internal RAM, and number of pins available in the package influence the price of the MCU. Considering the requirements of the interface, resolution, performance, etc., the user can ultimately find suitable MCUs and estimate price."),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"See ",(0,n.kt)(i.Z,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32-bit Arm Cortex MCUs")," for available STM32 microcontrollers.")))}v.isMDXComponent=!0}}]);