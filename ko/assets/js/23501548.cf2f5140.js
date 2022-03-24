"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6547],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=l},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},82985:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},39130:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(67294),i=n(73727),o=n(11368),l=n(35096),a=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),u=n(67023),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&v(e,n,t[n]);return e};var T=function(e){var t,n=e,{isNavLink:p,to:v,href:T,activeClassName:b,isActive:y,"data-noBrokenLinkCheck":w,autoAddBaseUrl:C=!0}=n,S=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:x}}=(0,o.Z)(),{withBaseUrl:M}=(0,s.C)(),X=(0,r.useContext)(c),E=v||T,F=(0,l.Z)(E),G=null==E?void 0:E.replace("pathname://","");let P=void 0!==G?(U=G,C&&(e=>e.startsWith("/"))(U)?M(U):U):void 0;var U;P&&F&&(P=(0,u.applyTrailingSlash)(P,{trailingSlash:O,baseUrl:x}));const Z=(0,r.useRef)(!1),N=p?i.OL:i.rU,j=a.Z.canUseIntersectionObserver,I=(0,r.useRef)();(0,r.useEffect)((()=>(!j&&F&&null!=P&&window.docusaurus.prefetch(P),()=>{j&&I.current&&I.current.disconnect()})),[I,P,j,F]);const D=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,L=!P||!F||D;return P&&F&&!D&&!w&&X.collectLink(P),L?r.createElement("a",k(k({href:P},E&&!F&&{target:"_blank",rel:"noopener noreferrer"}),S)):r.createElement(N,k((B=k({},S),d(B,m({onMouseEnter:()=>{Z.current||null==P||(window.docusaurus.preload(P),Z.current=!0)},innerRef:e=>{var t,n;j&&e&&F&&(t=e,n=()=>{null!=P&&window.docusaurus.prefetch(P)},I.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(t),I.current.disconnect(),n())}))})),I.current.observe(t))},to:P||""}))),p&&{isActive:y,activeClassName:b}));var B}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(11368),i=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),o="/"===i||i===r?i:(l=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(i,o)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},60727:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return k},contentTitle:function(){return T},metadata:function(){return b},toc:function(){return y},default:function(){return C}});var r=n(3905),i=n(44035),o=n(82985),l=n(39130),a=n(37793),c=n(70814),s=n(31217),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&f(e,n,t[n]);return e};const k={id:"installation",title:"Installation"},T=void 0,b={unversionedId:"introduction/installation",id:"introduction/installation",isDocsHomePage:!1,title:"Installation",description:"TouchGFX\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uad6c\uc131 \uc694\uc18c\ub97c \ud3ec\ud568\ud558\ub294 X-CUBE-TOUCHGFX zip \ud30c\uc77c\uc758 \ud615\ud0dc\ub85c \ubc30\ud3ec\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/installation.mdx",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/4.18/ko/docs/introduction/installation",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Prerequisites",permalink:"/4.18/ko/docs/introduction/prerequisites"},next:{title:"Getting Started",permalink:"/4.18/ko/docs/introduction/getting-started"}},y=[{value:"STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0\uc11c\uc758 \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",id:"prototyping-on-stm32-evaluation-kits",children:[{value:"TouchGFX Designer \uc124\uce58",id:"installing-touchgfx-designer",children:[],level:3},{value:"STM32CubeProgrammer \uc124\uce58",id:"installing-stm32cubeprogrammer",children:[],level:3},{value:"STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0 \uc124\uce58",id:"installing-stm32-st-link-utility",children:[],level:3}],level:2},{value:"\uc790\uccb4 \uc81c\uc791 \uc81c\ud488 \uac1c\ubc1c",id:"custom-product-development",children:[{value:"Installing TouchGFX Generator in STM32CubeMX",id:"installing-touchgfx-generator-in-stm32cubemx",children:[],level:3}],level:2}],w={toc:y};function C(e){var t,n=e,{components:u}=n,f=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},w),f),p(t,d({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uad6c\uc131 \uc694\uc18c\ub97c \ud3ec\ud568\ud558\ub294 X-CUBE-TOUCHGFX zip \ud30c\uc77c\uc758 \ud615\ud0dc\ub85c \ubc30\ud3ec\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Designer")," \xa0- Windows \uae30\ubc18\uc758 GUI \ube4c\ub354\ub97c \ud1b5\ud574 UI \ube4c\ub4dc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Generator")," - Create a custom TouchGFX HAL through STM32CubeMX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Engine"),"\xa0- UI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ub3d9\ud558\ub294 TouchGFX C++ \ud504\ub808\uc784\uc6cc\ud06c")),(0,r.kt)("h2",v({},{id:"prototyping-on-stm32-evaluation-kits"}),"STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0\uc11c\uc758 \ud504\ub85c\ud1a0\ud0c0\uc774\ud551"),(0,r.kt)("p",null,"If your intention is to simply try TouchGFX Designer and perhaps do some prototyping on STM32 Evaluation kits, refer to the section ",(0,r.kt)("a",v({parentName:"p"},{href:"#installing-touchgfx-designer"}),"Installing TouchGFX Designer"),".\xa0"),(0,r.kt)("h3",v({},{id:"installing-touchgfx-designer"}),"TouchGFX Designer \uc124\uce58"),(0,r.kt)(l.Z,{to:"https://www.st.com/en/embedded-software/x-cube-touchgfx.html",target:"_blank",mdxType:"Link"},"ST.com \uacf5\uc2dd \uc6f9\uc0ac\uc774\ud2b8"),"\uc5d0\uc11c \ud558\ub4dc \ub4dc\ub77c\uc774\ube0c\ub85c X-CUBE-TOUCHGFX\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud55c \ub2e4\uc74c \uc555\ucd95\uc744 \ud574\uc81c\ud558\uc2ed\uc2dc\uc624.",(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/get-software.png",mdxType:"Figure"},"St.com\uc5d0\uc11c X-CUBE-TOUCHGFX \ub2e4\uc6b4\ub85c\ub4dc"),(0,r.kt)("p",null,"Inside the extracted folder, you will find the TouchGFX .msi installer in the following path:"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{}),"Utilities\\PC_Software\\TouchGFXDesigner\n")),(0,r.kt)("p",null,"Double-clicking the .msi file will bring up the installer. \uc9c0\uce68\uc5d0 \ub530\ub77c \uc124\uce58 \ud504\ub85c\uc138\uc2a4\ub97c \uc644\ub8cc\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/designer-installation.png",mdxType:"Figure"},"TouchGFX Designer \uc124\uce58"),(0,r.kt)(a.Z,{mdxType:"Tip"},"TouchGFX Designer \ub0b4\uc5d0\uc11c \uc9c1\uc811 \ubcf4\ub4dc\ub97c \ud50c\ub798\uc2f1\ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ub3c4\uad6c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0")))),(0,r.kt)("h3",v({},{id:"installing-stm32cubeprogrammer"}),"STM32CubeProgrammer \uc124\uce58"),(0,r.kt)("p",null,"After downloading STM32CubeProgrammer from ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer download location"),", uncompress the downloaded ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," file and launch the ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," installer file. \uc9c0\uce68\uc5d0 \ub530\ub77c \uc124\uce58 \ud504\ub85c\uc138\uc2a4\ub97c \uc644\ub8cc\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/cube-programmer-installer.png",mdxType:"Figure"},"TouchGFX Designer \uc124\uce58"),(0,r.kt)(c.Z,{mdxType:"Caution"},"TouchGFX Designer\uc640 Makefiles\uc5d0\uc11c \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\ub97c \ud50c\ub798\uc2f1\ud558\uae30 \uc704\ud574 STM32CubeProgrammer\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ubc18\ub4dc\uc2dc \uae30\ubcf8 \uc124\uce58 \uc704\uce58\uc5d0 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4.\xa0 ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer")),(0,r.kt)("h3",v({},{id:"installing-stm32-st-link-utility"}),"STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0 \uc124\uce58"),(0,r.kt)("p",null,"After downloading STM32 ST-LINK Utility from ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.st.com/en/development-tools/stsw-link004.html"}),"STM32 ST-LINK utility location"),", simply open the downloaded ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," file and follow the instructions to complete the installation process."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/st-link-utility-installer.png",mdxType:"Figure"},"STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0 \uc124\uce58"),(0,r.kt)(c.Z,{mdxType:"Caution"},"TouchGFX Designer\uc640 Makefiles\uc5d0\uc11c \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\ub97c \ud50c\ub798\uc2f1\ud558\uae30 \uc704\ud574 STM32 ST-LINK \uc720\ud2f8\ub9ac\ud2f0\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ubc18\ub4dc\uc2dc \uae30\ubcf8 \uc124\uce58 \uc704\uce58\uc5d0 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"C:\\Program Files (x86)\\STMicroelectronics\\STM32 ST-LINK Utility")),(0,r.kt)("h2",v({},{id:"custom-product-development"}),"\uc790\uccb4 \uc81c\uc791 \uc81c\ud488 \uac1c\ubc1c"),(0,r.kt)("p",null,"If your intention is to run TouchGFX applications on either ST display kits or your own custom STM32 based platform, refer to the section ",(0,r.kt)("a",v({parentName:"p"},{href:"#installing-touchgfx-generator-in-stm32cubemx"}),"Installing TouchGFX Generator in STM32CubeMX"),"."),(0,r.kt)("h3",v({},{id:"installing-touchgfx-generator-in-stm32cubemx"}),"Installing TouchGFX Generator in STM32CubeMX"),(0,r.kt)("p",null,"To install X-CUBE-TOUCHGFX through ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubemx.html"}),"STM32CubeMX"),', start by selecting "Manage Embedded Software Packages" under "Help" (or press ',(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Alt + U"),")."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/manage-packages.png",mdxType:"Figure"},"Help -> Manage embedded software packages"),(0,r.kt)("p",null,"\uac00\uc6a9 \ud328\ud0a4\uc9c0\uc758 \ucd5c\uc2e0 \ubaa9\ub85d\uc744 \ubcf4\ub824\uba74 'Refresh'\ub97c \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/refresh.png",mdxType:"Figure"},"Refresh\ub97c \ud1b5\ud574 \uac00\uc6a9 \ud328\ud0a4\uc9c0 \uc5c5\ub370\uc774\ud2b8"),(0,r.kt)("p",null,'"STMicroelectronics" \ud0ed\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. \ud654\uba74\uc744 \uc2a4\ud06c\ub864\ud558\uc5ec \'X-CUBE-TOUCHGFX\'\ub97c \ucc3e\uc740 \ub2e4\uc74c \ub178\ub4dc\ub97c \ud655\uc7a5\ud569\ub2c8\ub2e4. "TouchGFX Generator"\uc758 \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud558\uace0 "Install Now"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4. \uc774\uc81c \ud328\ud0a4\uc9c0\uac00 \ub2e4\uc6b4\ub85c\ub4dc\ub418\uace0 \ub77c\uc774\uc120\uc2a4 \uacc4\uc57d\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/install-now.png",mdxType:"Figure"},"TouchGFX Generator \ud328\ud0a4\uc9c0 \ucc3e\uae30"),(0,r.kt)("p",null,'Read and accept the license agreement and click "Finish" to install TouchGFX Generator inside STM32CubeMX.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/license-agreement.png",mdxType:"Figure"},"\ub77c\uc774\uc120\uc2a4 \uacc4\uc57d \uc218\ub77d"),(0,r.kt)("p",null,"The X-CUBE-TOUCHGFX distribution is now unpacked to the following path:\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{}),"C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0\n")),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/package-location.png",mdxType:"Figure"},"X-CUBE-TOUCHGFX \ud328\ud0a4\uc9c0\uc758 \uc704\uce58"))}C.isMDXComponent=!0}}]);