(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6205],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70814:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class a extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},2083:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},82985:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},37793:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=a},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(67294),i=n(73727),o=n(11368),a=n(35096),l=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),u=n(67023),d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&v(e,n,t[n]);return e};var k=function(e){var t,n=e,{isNavLink:d,to:v,href:k,activeClassName:w,isActive:y,"data-noBrokenLinkCheck":T,autoAddBaseUrl:C=!0}=n,S=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:x}}=(0,o.Z)(),{withBaseUrl:M}=(0,c.C)(),X=(0,r.useContext)(s),E=v||k,F=(0,a.Z)(E),P=null==E?void 0:E.replace("pathname://","");let G=void 0!==P?(U=P,C&&(e=>e.startsWith("/"))(U)?M(U):U):void 0;var U;G&&F&&(G=(0,u.applyTrailingSlash)(G,{trailingSlash:O,baseUrl:x}));const I=(0,r.useRef)(!1),N=d?i.OL:i.rU,Z=l.Z.canUseIntersectionObserver;let j;(0,r.useEffect)((()=>(!Z&&F&&null!=G&&window.docusaurus.prefetch(G),()=>{Z&&j&&j.disconnect()})),[G,Z,F]);const D=null!==(t=null==G?void 0:G.startsWith("#"))&&void 0!==t&&t,L=!G||!F||D;return G&&F&&!D&&!T&&X.collectLink(G),L?r.createElement("a",b(b({href:G},E&&!F&&{target:"_blank",rel:"noopener noreferrer"}),S)):r.createElement(N,b((B=b({},S),p(B,h({onMouseEnter:()=>{I.current||null==G||(window.docusaurus.preload(G),I.current=!0)},innerRef:e=>{var t,n;Z&&e&&F&&(t=e,n=()=>{null!=G&&window.docusaurus.prefetch(G)},j=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))})),j.observe(t))},to:G||""}))),d&&{isActive:y,activeClassName:w}));var B}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(11368),i=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(i,o)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},60601:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return k},metadata:function(){return w},toc:function(){return y},default:function(){return C}});var r=n(3905),i=n(44035),o=n(82985),a=n(31217),l=n(37793),s=n(70814),c=n(2083),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(h)for(var n of h(t))g.call(t,n)&&f(e,n,t[n]);return e};const b={id:"installation",title:"Installation"},k=void 0,w={unversionedId:"introduction/installation",id:"introduction/installation",isDocsHomePage:!1,title:"Installation",description:"TouchGFX is distributed as an X-CUBE-TOUCHGFX zip file which has the following components inside:",source:"@site/docs/introduction/installation.mdx",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/4.18/docs/introduction/installation",version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"What is TouchGFX?",permalink:"/4.18/docs/introduction/what-is-touchgfx"},next:{title:"Getting Started",permalink:"/4.18/docs/introduction/getting-started"}},y=[{value:"Prototyping on STM32 Evaluation kits",id:"prototyping-on-stm32-evaluation-kits",children:[{value:"Installing TouchGFX Designer",id:"installing-touchgfx-designer",children:[]},{value:"Installing STM32CubeProgrammer",id:"installing-stm32cubeprogrammer",children:[]},{value:"Installing STM32 ST-LINK Utility",id:"installing-stm32-st-link-utility",children:[]}]},{value:"Custom Product Development",id:"custom-product-development",children:[{value:"Installing TouchGFX Generator in STM32CubeMX",id:"installing-touchgfx-generator-in-stm32cubemx",children:[]}]}],T={toc:y};function C(e){var t,n=e,{components:u}=n,f=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},T),f),d(t,p({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX is distributed as an X-CUBE-TOUCHGFX zip file which has the following components inside:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Designer")," - Build a UI through a Windows-based GUI Builder"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Generator")," - Create a custom TouchGFX HAL through STM32CubeMX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Engine")," - The TouchGFX C++ framework that drives the UI application")),(0,r.kt)("h2",v({},{id:"prototyping-on-stm32-evaluation-kits"}),"Prototyping on STM32 Evaluation kits"),(0,r.kt)("p",null,"If your intention is to simply try TouchGFX Designer and perhaps do some prototyping on STM32 Evaluation kits, refer to the section ",(0,r.kt)("a",v({parentName:"p"},{href:"#installing-touchgfx-designer"}),"Installing TouchGFX Designer"),".\xa0"),(0,r.kt)("h3",v({},{id:"installing-touchgfx-designer"}),"Installing TouchGFX Designer"),(0,r.kt)("p",null,"Download X-CUBE-TOUCHGFX from the ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.st.com/en/embedded-software/x-cube-touchgfx.html"}),"ST.com official website")," to anywhere on your hard drive and extract it."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/get-software.png",mdxType:"Figure"},"Downloading X-CUBE-TOUCHGFX from st.com"),(0,r.kt)("p",null,"Inside the extracted folder, you will find the TouchGFX .msi installer in the following path:"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{}),"Utilities\\PC_Software\\TouchGFXDesigner\n")),(0,r.kt)("p",null,"Double-clicking the .msi file will bring up the installer. Follow the instructions to complete the installation process."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/designer-installation.png",mdxType:"Figure"},"Installing TouchGFX Designer"),(0,r.kt)(l.Z,{mdxType:"Tip"},"You need the following tools to be able to flash your board directly from within TouchGFX Designer:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(a.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,r.kt)("li",null,(0,r.kt)(a.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK Utility")))),(0,r.kt)("h3",v({},{id:"installing-stm32cubeprogrammer"}),"Installing STM32CubeProgrammer"),(0,r.kt)("p",null,"After downloading STM32CubeProgrammer from ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer download location"),", uncompress the downloaded ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," file and launch the ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," installer file. Then Follow the instructions to complete the installation process."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/cube-programmer-installer.png",mdxType:"Figure"},"Installing TouchGFX Designer"),(0,r.kt)(s.Z,{mdxType:"Caution"},"In order for the TouchGFX Designer and Makefiles to be able to use STM32CubeProgrammer for flashing target hardware it must be installed at the default install location: ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer")),(0,r.kt)("h3",v({},{id:"installing-stm32-st-link-utility"}),"Installing STM32 ST-LINK Utility"),(0,r.kt)("p",null,"After downloading STM32 ST-LINK Utility from ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.st.com/en/development-tools/stsw-link004.html"}),"STM32 ST-LINK utility location"),", simply open the downloaded ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," file and follow the instructions to complete the installation process."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/st-link-utility-installer.png",mdxType:"Figure"},"Installing STM32 ST-LINK Utility"),(0,r.kt)(s.Z,{mdxType:"Caution"},"In order for the TouchGFX Designer and Makefiles to be able to use STM32 ST-LINK Utility for flashing target hardware it must be installed at the default install location: ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"C:\\Program Files (x86)\\STMicroelectronics\\STM32 ST-LINK Utility")),(0,r.kt)("h2",v({},{id:"custom-product-development"}),"Custom Product Development"),(0,r.kt)("p",null,"If your intention is to run TouchGFX applications on either ST display kits or your own custom STM32 based platform, refer to the section ",(0,r.kt)("a",v({parentName:"p"},{href:"#installing-touchgfx-generator-in-stm32cubemx"}),"Installing TouchGFX Generator in STM32CubeMX"),"."),(0,r.kt)("h3",v({},{id:"installing-touchgfx-generator-in-stm32cubemx"}),"Installing TouchGFX Generator in STM32CubeMX"),(0,r.kt)("p",null,"To install X-CUBE-TOUCHGFX through ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubemx.html"}),"STM32CubeMX"),', start by selecting "Manage Embedded Software Packages" under "Help" (or press ',(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Alt + U"),")."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/manage-packages.png",mdxType:"Figure"},"Help -> Manage embedded software packages"),(0,r.kt)("p",null,'Click "Refresh" to get an updated list of available packages.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/refresh.png",mdxType:"Figure"},"Refresh to update available packages"),(0,r.kt)("p",null,'Go to the "STMicroelectronics" tab. Scroll until you find "X-CUBE-TOUCHGFX" and expand the node. Check the checkbox for "TouchGFX Generator" and click "Install Now". This will download the package and bring up the license agreement.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/install-now.png",mdxType:"Figure"},"Finding the TouchGFX Generator package"),(0,r.kt)("p",null,'Read and accept the license agreement and click "Finish" to install TouchGFX Generator inside STM32CubeMX.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/license-agreement.png",mdxType:"Figure"},"Accepting the license agreement"),(0,r.kt)("p",null,"The X-CUBE-TOUCHGFX distribution is now unpacked to the following path:\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{}),"C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0\n")),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/package-location.png",mdxType:"Figure"},"Location of the X-CUBE-TOUCHGFX package"))}C.isMDXComponent=!0}}]);