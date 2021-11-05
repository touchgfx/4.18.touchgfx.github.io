"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6430],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=l},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},82985:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},39130:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(67294),i=n(73727),o=n(11368),l=n(35096),a=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&v(e,n,t[n]);return e};var k=function(e){var t,n=e,{isNavLink:p,to:v,href:k,activeClassName:y,isActive:b,"data-noBrokenLinkCheck":w,autoAddBaseUrl:C=!0}=n,S=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:x}}=(0,o.Z)(),{withBaseUrl:M}=(0,u.C)(),X=(0,r.useContext)(c),E=v||k,F=(0,l.Z)(E),G=null==E?void 0:E.replace("pathname://","");let U=void 0!==G?(P=G,C&&(e=>e.startsWith("/"))(P)?M(P):P):void 0;var P;U&&F&&(U=(0,s.applyTrailingSlash)(U,{trailingSlash:O,baseUrl:x}));const N=(0,r.useRef)(!1),Z=p?i.OL:i.rU,j=a.Z.canUseIntersectionObserver,I=(0,r.useRef)();(0,r.useEffect)((()=>(!j&&F&&null!=U&&window.docusaurus.prefetch(U),()=>{j&&I.current&&I.current.disconnect()})),[I,U,j,F]);const D=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,L=!U||!F||D;return U&&F&&!D&&!w&&X.collectLink(U),L?r.createElement("a",T(T({href:U},E&&!F&&{target:"_blank",rel:"noopener noreferrer"}),S)):r.createElement(Z,T((B=T({},S),d(B,m({onMouseEnter:()=>{N.current||null==U||(window.docusaurus.preload(U),N.current=!0)},innerRef:e=>{var t,n;j&&e&&F&&(t=e,n=()=>{null!=U&&window.docusaurus.prefetch(U)},I.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(t),I.current.disconnect(),n())}))})),I.current.observe(t))},to:U||""}))),p&&{isActive:b,activeClassName:y}));var B}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(11368),i=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),o="/"===i||i===r?i:(l=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(i,o)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},16386:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return T},contentTitle:function(){return k},metadata:function(){return y},toc:function(){return b},default:function(){return C}});var r=n(3905),i=n(44035),o=n(82985),l=n(39130),a=n(37793),c=n(70814),u=n(31217),s=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&f(e,n,t[n]);return e};const T={id:"installation",title:"\u5b89\u88dd"},k=void 0,y={unversionedId:"introduction/installation",id:"introduction/installation",isDocsHomePage:!1,title:"\u5b89\u88dd",description:"TouchGFX\u4ee5X-CUBE-TOUCHGFX\u58d3\u7e2e\u6a94\u6848\u7684\u5f62\u5f0f\u63d0\u4f9b\uff0c\u5176\u4e2d\u5305\u542b\u4ee5\u4e0b\u5143\u4ef6\uff1a",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/introduction/installation.mdx",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/4.18/zh-TW/docs/introduction/installation",tags:[],version:"current",frontMatter:{id:"installation",title:"\u5b89\u88dd"},sidebar:"docs",previous:{title:"\u4ec0\u9ebc\u662fTouchGFX\uff1f",permalink:"/4.18/zh-TW/docs/introduction/what-is-touchgfx"},next:{title:"\u5165\u9580",permalink:"/4.18/zh-TW/docs/introduction/getting-started"}},b=[{value:"\u5728STM32\u8a55\u4f30\u5957\u4ef6\u4e0a\u9032\u884c\u539f\u578b\u8a2d\u8a08",id:"prototyping-on-stm32-evaluation-kits",children:[{value:"\u5b89\u88ddTouchGFX Designer",id:"installing-touchgfx-designer",children:[],level:3},{value:"\u5b89\u88ddSTM32CubeProgrammer",id:"installing-stm32cubeprogrammer",children:[],level:3},{value:"\u5b89\u88ddSTM32ST-LINKUtility",id:"installing-stm32-st-link-utility",children:[],level:3}],level:2},{value:"\u5ba2\u88fd\u5316\u7522\u54c1\u958b\u767c",id:"custom-product-development",children:[{value:"Installing TouchGFX Generator in STM32CubeMX",id:"installing-touchgfx-generator-in-stm32cubemx",children:[],level:3}],level:2}],w={toc:b};function C(e){var t,n=e,{components:s}=n,f=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},w),f),p(t,d({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u4ee5X-CUBE-TOUCHGFX\u58d3\u7e2e\u6a94\u6848\u7684\u5f62\u5f0f\u63d0\u4f9b\uff0c\u5176\u4e2d\u5305\u542b\u4ee5\u4e0b\u5143\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Designer")," - \u57fa\u65bcWindows\u7684GUI\u5efa\u69cb\u5de5\u5177\u4f86\u5efa\u69cbUI"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Generator")," - Create a custom TouchGFX HAL through STM32CubeMX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Engine")," - \u9a45\u52d5UI\u61c9\u7528\u7a0b\u5f0f\u7684TouchGFXC++\u6846\u67b6")),(0,r.kt)("h2",v({},{id:"prototyping-on-stm32-evaluation-kits"}),"\u5728STM32\u8a55\u4f30\u5957\u4ef6\u4e0a\u9032\u884c\u539f\u578b\u8a2d\u8a08"),(0,r.kt)("p",null,"If your intention is to simply try TouchGFX Designer and perhaps do some prototyping on STM32 Evaluation kits, refer to the section ",(0,r.kt)("a",v({parentName:"p"},{href:"#installing-touchgfx-designer"}),"Installing TouchGFX Designer"),".\xa0"),(0,r.kt)("h3",v({},{id:"installing-touchgfx-designer"}),"\u5b89\u88ddTouchGFX Designer"),(0,r.kt)("p",null,"\u5f9e",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.st.com/en/embedded-software/x-cube-touchgfx.html"}),"ST.com\u5b98\u7db2"),"\u5c07X-CUBE-TOUCHGFX\u4e0b\u8f09\u5230\u786c\u789f\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\u4e26\u89e3\u58d3\u7e2e\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/get-software.png",mdxType:"Figure"},"\u5f9est.com\u4e0a\u4e0b\u8f09X-CUBE-TOUCHGFX"),(0,r.kt)("p",null,"\u5728\u89e3\u58d3\u7e2e\u7684\u8cc7\u6599\u593e\u5167\uff0c\u60a8\u53ef\u4ee5\u5728\u4ee5\u4e0b\u8def\u5f91\u4e2d\u627e\u5230TouchGFX.msi\u5b89\u88dd\u7a0b\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{}),"Utilities\\PC_Software\\TouchGFXDesigner\n")),(0,r.kt)("p",null,"\u6309\u5169\u4e0b.msi\u6a94\u6848\u53ef\u6253\u958b\u5b89\u88dd\u7a0b\u5f0f\u3002 \u6309\u7167\u8aaa\u660e\u5b8c\u6210\u5b89\u88dd\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/designer-installation.png",mdxType:"Figure"},"\u5b89\u88ddTouchGFX Designer"),(0,r.kt)(a.Z,{mdxType:"Tip"},"\u60a8\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u5de5\u5177\uff0c\u900f\u904eTouchGFXDesigner\u4f86\u71d2\u9304\u60a8\u7684\u677f\u5b50\uff1a",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32ST-LINKUtility")))),(0,r.kt)("h3",v({},{id:"installing-stm32cubeprogrammer"}),"\u5b89\u88ddSTM32CubeProgrammer"),(0,r.kt)("p",null,"After downloading STM32CubeProgrammer from ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer download location"),", uncompress the downloaded ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," file and launch the ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," installer file. \u7136\u5f8c\u6309\u7167\u8aaa\u660e\u5b8c\u6210\u5b89\u88dd\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/cube-programmer-installer.png",mdxType:"Figure"},"\u5b89\u88ddTouchGFX Designer"),(0,r.kt)(c.Z,{mdxType:"Caution"},"\u70ba\u4e86\u8b93TouchGFXDesigner\u8207Makefile\u4f7f\u7528STM32CubeProgrammer\u4f86\u71d2\u9304\u958b\u767c\u677f\uff0c\u5fc5\u9808\u5c07\u5176\u5b89\u88dd\u5728\u9810\u8a2d\u7684\u5b89\u88dd\u4f4d\u7f6e\uff1a ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"C:\\ProgramFiles\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer")),(0,r.kt)("h3",v({},{id:"installing-stm32-st-link-utility"}),"\u5b89\u88ddSTM32ST-LINKUtility"),(0,r.kt)("p",null,"After downloading STM32 ST-LINK Utility from ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.st.com/en/development-tools/stsw-link004.html"}),"STM32 ST-LINK utility location"),", simply open the downloaded ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," file and follow the instructions to complete the installation process."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/st-link-utility-installer.png",mdxType:"Figure"},"\u5b89\u88ddSTM32ST-LINKUtility"),(0,r.kt)(c.Z,{mdxType:"Caution"},"\u70ba\u4e86\u4f7fTouchGFXDesigner\u548cMakefile\u80fd\u5920\u4f7f\u7528STM32ST-LINKUtility\u4f86\u71d2\u9304\u76ee\u6a19\u786c\u9ad4\uff0c\u5fc5\u9808\u5c07\u5176\u5b89\u88dd\u5728\u9810\u8a2d\u5b89\u88dd\u4f4d\u7f6e\uff1a ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"C:\\Program Files (x86)\\STMicroelectronics\\STM32 ST-LINK Utility")),(0,r.kt)("h2",v({},{id:"custom-product-development"}),"\u5ba2\u88fd\u5316\u7522\u54c1\u958b\u767c"),(0,r.kt)("p",null,"If your intention is to run TouchGFX applications on either ST display kits or your own custom STM32 based platform, refer to the section ",(0,r.kt)("a",v({parentName:"p"},{href:"#installing-touchgfx-generator-in-stm32cubemx"}),"Installing TouchGFX Generator in STM32CubeMX"),"."),(0,r.kt)("h3",v({},{id:"installing-touchgfx-generator-in-stm32cubemx"}),"Installing TouchGFX Generator in STM32CubeMX"),(0,r.kt)("p",null,"To install X-CUBE-TOUCHGFX through ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubemx.html"}),"STM32CubeMX"),', start by selecting "Manage Embedded Software Packages" under "Help" (or press ',(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Alt + U"),")."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/manage-packages.png",mdxType:"Figure"},"\u8aaa\u660e->\u7ba1\u7406\u5d4c\u5165\u5f0f\u5957\u4ef6"),(0,r.kt)("p",null,"\u6309\u4e0b\u300c\u5237\u65b0\u300d\u4ee5\u7372\u53d6\u53ef\u66f4\u65b0\u7684\u5957\u4ef6\u6e05\u55ae\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/refresh.png",mdxType:"Figure"},"\u5237\u65b0\u4ee5\u66f4\u65b0\u53ef\u7528\u7684\u8edf\u9ad4\u5305"),(0,r.kt)("p",null,'\u8df3\u5230STMicroelectronics\u9078\u9805\u5361\u3002 \u627e\u5230X-CUBE-TOUCHGFX"\uff0c\u4e26\u5c55\u958b\u3002 \u9078\u53d6\u300cTouchGFXGenerator\u300d\uff0c\u7136\u5f8c\u9ede\u64ca\u300c\u7acb\u5373\u5b89\u88dd\u300d\u3002 \u5c07\u4e0b\u8f09\u8edf\u9ad4\u5305\u4e26\u986f\u793a\u6388\u6b0a\u5354\u8b70\u3002'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/install-now.png",mdxType:"Figure"},"\u627e\u5230TouchGFXGenerator\u5957\u4ef6"),(0,r.kt)("p",null,'Read and accept the license agreement and click "Finish" to install TouchGFX Generator inside STM32CubeMX.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/license-agreement.png",mdxType:"Figure"},"\u63a5\u53d7\u6388\u6b0a\u5354\u8b70"),(0,r.kt)("p",null,"The X-CUBE-TOUCHGFX distribution is now unpacked to the following path:\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{}),"C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0\n")),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/package-location.png",mdxType:"Figure"},"X-CUBE-TOUCHGFX\u5957\u4ef6\u7684\u4f4d\u7f6e"))}C.isMDXComponent=!0}}]);