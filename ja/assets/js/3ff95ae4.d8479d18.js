"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4286],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=l},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},82985:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},35620:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return x},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return y}});var r=n(3905),i=n(44035),o=n(82985),l=n(39130),a=n(37793),c=n(70814),u=n(31217),s=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&f(e,n,t[n]);if(d)for(var n of d(t))h.call(t,n)&&f(e,n,t[n]);return e};const k={id:"installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},b=void 0,v={unversionedId:"introduction/installation",id:"introduction/installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"TouchGFX\u306fX-CUBE-TOUCHGFX zip\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u914d\u5e03\u3055\u308c\u3001\u4ee5\u4e0b\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u542b\u307f\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/introduction/installation.mdx",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/4.18/ja/docs/introduction/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},sidebar:"docs",previous:{title:"\u524d\u63d0\u6761\u4ef6",permalink:"/4.18/ja/docs/introduction/prerequisites"},next:{title:"\u4f7f\u7528\u65b9\u6cd5",permalink:"/4.18/ja/docs/introduction/getting-started"}},w={},y=[{value:"STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3067\u306e\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u4f5c\u6210",id:"prototyping-on-stm32-evaluation-kits",level:2},{value:"TouchGFX Designer\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"installing-touchgfx-designer",level:3},{value:"STM32CubeProgrammer\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"installing-stm32cubeprogrammer",level:3},{value:"STM32 ST-LINK\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"installing-stm32-st-link-utility",level:3},{value:"\u30ab\u30b9\u30bf\u30e0\u88fd\u54c1\u958b\u767a",id:"custom-product-development",level:2},{value:"CubeMX\u3067\u306eTouchGFX Generator\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"installing-touchgfx-generator-in-stm32cubemx",level:3}],C={toc:y};function x(e){var t,n=e,{components:s}=n,f=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=T(T({},C),f),p(t,m({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u306fX-CUBE-TOUCHGFX zip\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u914d\u5e03\u3055\u308c\u3001\u4ee5\u4e0b\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u542b\u307f\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Designer"),"\uff1aWindows\u30d9\u30fc\u30b9\u306eGUI\u30d3\u30eb\u30c0\u3092\u901a\u3057\u3066UI\u3092\u69cb\u7bc9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Generator")," \uff1aUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u52d5\u4f5c\u3055\u305b\u308bTouchGFX C++\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX \u30a8\u30f3\u30b8\u30f3"),"\uff1aUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u52d5\u4f5c\u3055\u305b\u308bTouchGFX C++\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af")),(0,r.kt)("h2",T({},{id:"prototyping-on-stm32-evaluation-kits"}),"STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3067\u306e\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u4f5c\u6210"),(0,r.kt)("p",null,"TouchGFX Designer\u3092\u4f7f\u7528\u3057\u3066\u3001STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3067\u4f55\u3089\u304b\u306e\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u3092\u4f5c\u6210\u3057\u3066\u307f\u305f\u3044\u3068\u3092\u304a\u8003\u3048\u306e\u5834\u5408\u306f\u3001\u300c",(0,r.kt)("a",T({parentName:"p"},{href:"#installing-touchgfx-designer"}),"TouchGFX Designer\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002\xa0"),(0,r.kt)("h3",T({},{id:"installing-touchgfx-designer"}),"TouchGFX Designer\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)(l.Z,{to:"https://www.st.com/en/embedded-software/x-cube-touchgfx.html",target:"_blank",mdxType:"Link"},"\u516c\u5f0fWeb\u30b5\u30a4\u30c8\u306est.com"),"\u304b\u3089\u3001X-CUBE-TOUCHGFX\u3092\u304a\u4f7f\u3044\u306e\u30cf\u30fc\u30c9\uff65\u30c9\u30e9\u30a4\u30d6\u4e0a\u306e\u4efb\u610f\u306e\u5834\u6240\u306b\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001\u62bd\u51fa\u3057\u307e\u3059\u3002",(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/get-software.webp",mdxType:"Figure"},"st.com\u304b\u3089X-CUBE-TOUCHGFX\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,r.kt)("p",null,"\u62bd\u51fa\u3057\u305f\u30d5\u30a9\u30eb\u30c0\u5185\u306e\u6b21\u306e\u30d1\u30b9\u306bTouchGFX .msi\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",T({parentName:"pre"},{}),"Utilities\\PC_Software\\TouchGFXDesigner\n")),(0,r.kt)("p",null,".msi\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002 \u6307\u793a\u306b\u5f93\u3063\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff65\u30d7\u30ed\u30bb\u30b9\u3092\u5b8c\u4e86\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/designer-installation.webp",mdxType:"Figure"},"TouchGFX Designer\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)(a.Z,{mdxType:"Tip"},"TouchGFX Designer\u304b\u3089\u30dc\u30fc\u30c9\u306b\u76f4\u63a5Flash\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u30c4\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3")))),(0,r.kt)("h3",T({},{id:"installing-stm32cubeprogrammer"}),"STM32CubeProgrammer\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,(0,r.kt)("a",T({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),"STM32CubeProgrammer\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),"\u304b\u3089STM32CubeProgrammer\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u5f8c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),"\u30d5\u30a1\u30a4\u30eb\u3092\u89e3\u51cd\u3057\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".exe"),"\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\uff65\u30d5\u30a1\u30a4\u30eb\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002 \u305d\u306e\u5f8c\u3001\u6307\u793a\u306b\u5f93\u3063\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff65\u30d7\u30ed\u30bb\u30b9\u3092\u5b8c\u4e86\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/cube-programmer-installer.webp",mdxType:"Figure"},"TouchGFX Designer\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)(c.Z,{mdxType:"Caution"},"\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306bFlash\u3059\u308b\u305f\u3081\u306b\u3001TouchGFX Designer\u3068Makefile\u3067STM32CubeProgrammer\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u306b\u306f\u3001\u3053\u308c\u3092\u6b21\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5834\u6240\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer")),(0,r.kt)("h3",T({},{id:"installing-stm32-st-link-utility"}),"STM32 ST-LINK\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,(0,r.kt)("a",T({parentName:"p"},{href:"https://www.st.com/en/development-tools/stsw-link004.html"}),"STM32 ST-LINK\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3"),"\u304b\u3089STM32 ST-LINK\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u5f8c\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f",(0,r.kt)("inlineCode",{parentName:"p"},".exe"),"\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u3001\u6307\u793a\u306b\u5f93\u3063\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\uff65\u30d7\u30ed\u30bb\u30b9\u3092\u5b8c\u4e86\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/st-link-utility-installer.webp",mdxType:"Figure"},"STM32 ST-LINK\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)(c.Z,{mdxType:"Caution"},"\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306bFlash\u3059\u308b\u305f\u3081\u306b\u3001TouchGFX Designer\u3068Makefile\u3067STM32 ST-LINK\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u306b\u306f\u3001\u3053\u308c\u3092\u6b21\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5834\u6240\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"C:\\Program Files (x86)\\STMicroelectronics\\STM32 ST-LINK Utility")),(0,r.kt)("h2",T({},{id:"custom-product-development"}),"\u30ab\u30b9\u30bf\u30e0\u88fd\u54c1\u958b\u767a"),(0,r.kt)("p",null,"ST\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30ad\u30c3\u30c8\u307e\u305f\u306f\u72ec\u81ea\u30ab\u30b9\u30bf\u30e0\u306eSTM32\u30d9\u30fc\u30b9\uff65\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u3044\u305a\u308c\u304b\u3067TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u306f\u3001\u300c",(0,r.kt)("a",T({parentName:"p"},{href:"#installing-touchgfx-generator-in-stm32cubemx"}),"CubeMX\u3067\u306eTouchGFX Generator\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",T({},{id:"installing-touchgfx-generator-in-stm32cubemx"}),"CubeMX\u3067\u306eTouchGFX Generator\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,(0,r.kt)("a",T({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubemx.html"}),"CubeMX"),"\u3092\u4ecb\u3057\u3066X-CUBE-TOUCHGFX\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001\u307e\u305a\u3001\uff3bHelp\uff3d\u306e\u4e0b\u306e\uff3bManage Embedded Software Packages\uff3d\u3092\u9078\u629e\u3057\u307e\u3059\uff08\u307e\u305f\u306fAlt + U\u3092\u62bc\u3057\u307e\u3059\uff09\u3002 ",(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Alt + U"),")."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/manage-packages.webp",mdxType:"Figure"},"\uff3bHelp\uff3d -> \uff3bManage embedded software packages\uff3d"),(0,r.kt)("p",null,"\uff3bRefresh\uff3d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u4f7f\u7528\u53ef\u80fd\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u6700\u65b0\u306e\u30ea\u30b9\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/refresh.webp",mdxType:"Figure"},"\uff3bRefresh\uff3d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4f7f\u7528\u53ef\u80fd\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u66f4\u65b0"),(0,r.kt)("p",null,"\uff3bSTMicroelectronics\uff3d\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002 \u30b9\u30af\u30ed\u30fc\u30eb\u3057\u3066\uff3bX-CUBE-TOUCHGFX\uff3d\u3092\u898b\u3064\u3051\u3001\u3053\u306e\u30ce\u30fc\u30c9\u3092\u5c55\u958b\u3057\u307e\u3059\u3002 [TouchGFX Generator\uff3d\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u3001\uff3bInstall Now\uff3d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 \u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u5951\u7d04\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/install-now.webp",mdxType:"Figure"},"TouchGFX Generator\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u898b\u3064\u3051\u308b"),(0,r.kt)("p",null,"\u30e9\u30a4\u30bb\u30f3\u30b9\u5951\u7d04\u3092\u8aad\u3093\u3067\u540c\u610f\u3057\u3001\uff3bFinish\uff3d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001CubeMX\u5185\u306bTouchGFX Generator\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/license-agreement.webp",mdxType:"Figure"},"\u30e9\u30a4\u30bb\u30f3\u30b9\u5951\u7d04\u306b\u540c\u610f"),(0,r.kt)("p",null,"X-CUBE-TOUCHGFX\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u304c\u6b21\u306e\u30d1\u30b9\u306b\u5c55\u958b\u3055\u308c\u307e\u3059\u3002:\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",T({parentName:"pre"},{}),"C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0\n")),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/package-location.webp",mdxType:"Figure"},"X-CUBE-TOUCHGFX\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5834\u6240"))}x.isMDXComponent=!0}}]);