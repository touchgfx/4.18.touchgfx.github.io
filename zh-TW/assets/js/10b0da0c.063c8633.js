"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4139],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,s=m["".concat(i,".").concat(h)]||m[h]||d[h]||a;return n?r.createElement(s,l(l({ref:t},u),{},{components:n})):r.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:a},this.props.children)}}t.Z=l},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=l},34871:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return g},metadata:function(){return T},toc:function(){return k}});var r=n(3905),o=n(44035),a=n(93054),l=n(70814),c=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&h(e,n,t[n]);return e};const g={id:"scenarios-ltdc-parallel-rgb",title:"LTDC/\u4e26\u5217RGB"},f=void 0,T={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",id:"development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",title:"LTDC/\u4e26\u5217RGB",description:"\u5c0d\u65bc\u5e36\u6709TFT\u63a7\u5236\u5668\u7684MCU\uff08\u5982STM32F429\uff0cSTM32F746\uff0cSTM32H7\uff09\uff0cTouchGFX Generator\u53ef\u7522\u751f\u90e8\u5206HAL\u7a0b\u5f0f\u78bc\u4f86\u8a2d\u5b9aLTDC\u5c07\u5f71\u50cf\u7531\u5f71\u50cf\u7de9\u885d\u5340\u50b3\u8f38\u5230\u986f\u793a\u5668\u3002 \u4e00\u65e6LTDC\u7522\u751fVSYNC\u4e2d\u65b7\uff0c\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u5c07\u555f\u52d5\u6b63\u78ba\u5f71\u50cf\u7de9\u885d\u5340\u7684\u50b3\u8f38\uff0c\u540c\u6642\u85c9\u7531\u547c\u53ebOSWrappers::signalVSync()\u4f86\u89e3\u9664\uff08unblock\uff09TouchGFX\u5f15\u64ce\u4e3b\u8ff4\u5708\uff08main loop\uff09\u7684\u963b\u585e\u72c0\u614b\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",permalink:"/4.18/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-ltdc-parallel-rgb",title:"LTDC/\u4e26\u5217RGB"},sidebar:"docs",previous:{title:"Generator\u4f7f\u7528\u8005\u6307\u5357",permalink:"/4.18/zh-TW/docs/development/touchgfx-hal-development/touchgfx-generator"},next:{title:"FMC\u8207SPI\u986f\u793a\u4ecb\u9762",permalink:"/4.18/zh-TW/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"}},v={},k=[{value:"\u986f\u793a\u4ecb\u9762",id:"display-interface",level:3},{value:"\u5f9eSTM32CubeMX\u8b80\u53d6\u8a2d\u5b9a",id:"reading-settings-from-stm32cubemx",level:2},{value:"TouchGFX\u9a45\u52d5\u7a0b\u5f0f/VSYNC\u4fe1\u865f",id:"touchgfx-driver--vsync-signal",level:2},{value:"\u7d50\u8ad6",id:"conclusion",level:2}],C={toc:k};function b(e){var t,n=e,{components:c}=n,h=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},C),h),i(t,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5c0d\u65bc\u5e36\u6709TFT\u63a7\u5236\u5668\u7684MCU\uff08\u5982STM32F429\uff0cSTM32F746\uff0cSTM32H7\uff09\uff0c",(0,r.kt)("em",{parentName:"p"},"TouchGFX Generator"),"\u53ef\u7522\u751f\u90e8\u5206HAL\u7a0b\u5f0f\u78bc\u4f86\u8a2d\u5b9aLTDC\u5c07\u5f71\u50cf\u7531\u5f71\u50cf\u7de9\u885d\u5340\u50b3\u8f38\u5230\u986f\u793a\u5668\u3002 \u4e00\u65e6LTDC\u7522\u751fVSYNC\u4e2d\u65b7\uff0c\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u5c07\u555f\u52d5\u6b63\u78ba\u5f71\u50cf\u7de9\u885d\u5340\u7684\u50b3\u8f38\uff0c\u540c\u6642\u85c9\u7531\u547c\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),"\u4f86\u89e3\u9664\uff08unblock\uff09TouchGFX\u5f15\u64ce\u4e3b\u8ff4\u5708\uff08main loop\uff09\u7684\u963b\u585e\u72c0\u614b\u3002"),(0,r.kt)("h3",s({},{id:"display-interface"}),"\u986f\u793a\u4ecb\u9762"),(0,r.kt)("p",null,"\u8207\u958b\u767c\u4eba\u54e1\u5fc5\u9808\u81ea\u884c\u5be6\u4f5c\u6574\u500b\u9a45\u52d5\u7a0b\u5f0f\u7684\u300c\u5ba2\u88fd\u5316\u300d\u986f\u793a\u4ecb\u9762\u76f8\u53cd\uff0c\u5c0dLTDC\u4f86\u8aaaTouchGFX Generator\u53ef\u7522\u751f\u652f\u63f4LTDC\u8a2d\u5b9a\u6240\u9700\u7684\u6240\u6709TouchGFX HAL\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("p",null,"\u5728STM32CubeMX\u7684\u5206\u985e\uff08Categories\uff09\u6e05\u55ae\u7684\u300c",(0,r.kt)("em",{parentName:"p"},"Multimedia"),"\u300d\u8a2d\u5b9a\u7fa4\u7d44\u7576\u4e2d\u5fc5\u9808\u9ede\u9078\u555f\u7528",(0,r.kt)("em",{parentName:"p"},"LTDC"),"\u4e4b\u5f8c\u624d\u80fd\u5728TouchGFX Generator\u7576\u4e2d\u770b\u5230\u300cParallel RGB (LTDC)\u300d\u5448\u73fe\u53ef\u9078\u53d6\u72c0\u614b\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-modes.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u4e00\u65e6\u555f\u7528LTDC\u4e4b\u5f8c\uff0c\u5728TouchGFX Generator\u7684\u300c",(0,r.kt)("em",{parentName:"p"},"Display"),"\u300d\u5c55\u958b\u9805\u9078\u7576\u4e2d\u5373\u53ef\u770b\u5230",(0,r.kt)("em",{parentName:"p"},"\u4e26\u5217RGB \uff08LTDC\uff09"),"\u7684\u9078\u9805\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/display-if-options.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u5728\u900f\u904eSTM32CubeMX\u555f\u7528\u4e86LTDC\u4e4b\u5f8c\u9084\u9700\u8981\u5b8c\u6210\u4ee5\u4e0b\u7684\u5de5\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8a2d\u5b9aLTDC\uff08GPIO\u8207\u76f8\u95dc\u6642\u9593\u53c3\u6578\uff09\u4ee5\u7b26\u5408\u9023\u63a5\u7684\u986f\u793a\u5668\u898f\u683c"),(0,r.kt)("li",{parentName:"ol"},"\u8a2d\u5b9aLTDC\u4ee5\u7b26\u5408\u6240\u9700\u7684TouchGFX\u61c9\u7528\u7a0b\u5f0f\u9700\u6c42\u3002")),(0,r.kt)("p",null,"TouchGFX Generator\u53ef\u7531STM32CubeMX\u7576\u4e2d\u8b80\u53d6\u5404\u9805\u914d\u7f6e\uff0c\u4e26\u63d0\u4f9b\u5305\u542b\u4e86\u8b66\u793a\u3001\u5efa\u8b70\u6216",(0,r.kt)("em",{parentName:"p"},"\u76f8\u4f9d\u95dc\u4fc2"),"\u7684\u6e05\u55ae\u3002 \u4e0b\u5716\u986f\u793a\u4e86\u6700\u521d\u5728CubeMX\u4e2d\u70ba\u4efb\u4f55MCU\u555f\u7528LTDC\u6642\u5b58\u5728\u7684\u76f8\u4f9d\u95dc\u4fc2\u6e05\u55ae\uff08\u5728\u672c\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u4f7f\u7528F429\uff09\uff1a"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/ltdc-dependencies.webp",mdxType:"Figure"}),(0,r.kt)(a.Z,{mdxType:"Note"},"\u5728STM32CubeMX\u555f\u7528\u4e86LTDC\u4e4b\u5f8c\u4fbf\u53ef\u5728TouchGFX Generator\u7684\u4ecb\u9762\u4e2d\u770b\u5230LTDC\u76f8\u95dc\u7684\u5efa\u8b70\u3001\u8b66\u793a\u548c\u932f\u8aa4\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u76f8\u4f9d\u95dc\u4fc2"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5c64\u6578"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"TouchGFX\u53ea\u80fd\u5229\u7528\u55ae\u4e00\u5f71\u50cf\u5c64\u3002 \u5118\u7ba1TouchGFX\u61c9\u7528\u7a0b\u5f0f\u53ef\u5728\u555f\u7528\u5169\u500b\u5f71\u50cf\u5c64\u7684\u60c5\u6cc1\u4e0b\u904b\u4f5c\uff0c\u9019\u500b\u8b66\u793a\u662f\u63d0\u9192\u4f7f\u7528\u8005\u9700\u8981\u6ce8\u610fLTDC\u7684\u914d\u7f6e\u53ef\u80fd\u6709\u8aa4\u3002 \u8b8a\u66f4LTDC\u8a2d\u5b9a\u9078\u9805\u7576\u4e2d\u7684\u5f71\u50cf\u5c64\u6578\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u8996\u7a97\u4f4d\u7f6e"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0cLTDC\u5c64\u7684\u6c34\u5e73\u548c\u5782\u76f4\u8996\u7a97\u4f4d\u7f6e\u70ba0\u3002 \u8996\u7a97\u7684\u6c34\u5e73\u548c\u5782\u76f4\u505c\u6b62\u5fc5\u9808\u8a2d\u7f6e\u70ba\u8a9e\u986f\u793a\u76f8\u7b49\u5c3a\u5bf8\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Alpha\u5e38\u6578\u70ba0"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LTDC\u5f71\u50cf\u5c64\u7684Alpha\u5e38\u6578\u9810\u8a2d\u70ba0\u3002 \u6b64\u8a2d\u5b9a\u9700\u5927\u65bc0\uff0c\u6700\u597d\u662f255\uff0c\u9664\u975e\u5728\u61c9\u7528\u7576\u4e2d\u9700\u5177\u6709\u4e00\u500b\u6c38\u4e45\u53ef\u5f97\u7684\u5168\u57dfAlpha\u8a2d\u5b9a\u3002")))),(0,r.kt)("p",null,"\u5728\u300cMultimedia\u300d\u8a2d\u5b9a\u7fa4\u7d44\u7576\u4e2d\u555f\u7528\u4e86LTDC\u9031\u908a\u4e4b\u5f8c\uff0c\u9084\u9700\u8981\u9078\u53d6\u4e26\u5217RGB \uff08LTDC\uff09\u986f\u793a\u4ecb\u9762\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dependencies.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u4e0b\u5716\u53ef\u770b\u5230\u5728\u6eff\u8db3\u8b66\u793a\u8b66\u606f\u7684LTDC\u8a2d\u5b9a\u4e4b\u5f8c\uff0c\u76f8\u4f9d\u95dc\u4fc2\u7fa4\u7d44\u4fbf\u5f9eTouchGFX Generator\u4ecb\u9762\u4e2d\u6d88\u5931\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config.webp",mdxType:"Figure"}),(0,r.kt)("h2",s({},{id:"reading-settings-from-stm32cubemx"}),"\u5f9eSTM32CubeMX\u8b80\u53d6\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u5728TouchGFX Generator\u7576\u4e2d\u9078\u53d6",(0,r.kt)("em",{parentName:"p"},"\u300cParallel RGB (LTDC)\u300d"),"\u4f5c\u70ba\u986f\u793a\u4ecb\u9762\u4e4b\u5f8c\uff0c\u5f71\u50cf\u7de9\u885d\u5340\u7684",(0,r.kt)("em",{parentName:"p"},"\u5bec\u5ea6"),"\u548c",(0,r.kt)("em",{parentName:"p"},"\u9ad8\u5ea6"),"\u4fbf\u7e7c\u627f\u81eaLTDC\u8a2d\u5b9a\u7576\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"\u6c34\u5e73\u8d77\u9ede/\u7d42\u9ede"),"\u548c",(0,r.kt)("em",{parentName:"p"},"\u5782\u76f4\u8d77\u9ede/\u7d42\u9ede"),"\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-window-position.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u6839\u64da\u986f\u793a\u548c\u61c9\u7528\u7a0b\u5f0f\u5c3a\u5bf8\u5b9a\u7fa9\u7b2c",(0,r.kt)("em",{parentName:"p"},"0"),"\u5c64\u7684\u5c3a\u5bf8\u5f8c\uff0c",(0,r.kt)("em",{parentName:"p"},"\u76f8\u4f9d\u95dc\u4fc2"),"\u8996\u7a97\u4e2d\u5c07\u986f\u793a\u4e00\u500b\u65b0\u5c08\u6848\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/dependency-ltdc-image.webp",mdxType:"Figure"}),(0,r.kt)("p",null,"\u901a\u5e38\u9700\u8981\u78ba\u4fdd\u5f71\u50cf\u7de9\u885d\u5340\u7684",(0,r.kt)("em",{parentName:"p"},"\u5716\u7247\u5bec\u5ea6"),"\u548c",(0,r.kt)("em",{parentName:"p"},"\u5716\u7247\u9ad8\u5ea6"),"\u7b26\u5408\u8996\u7a97\u5c3a\u5bf8\uff0c\u4ee5\u6eff\u8db3\u8b66\u793a\u8981\u6c42\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/ltdc-config-fixed.webp",mdxType:"Figure"}),(0,r.kt)(l.Z,{mdxType:"Caution"},"\u82e5\u555f\u7528LTDC\uff0cTouchGFX Generator\u5c07\u7e7c\u627fLTDC\u6240\u914d\u7f6e\u7684",(0,r.kt)("b",null,"\u5bec\u5ea6"),"\u548c",(0,r.kt)("b",null,"\u9ad8\u5ea6"),"\u503c\u3002 \u4f46\u6211\u5011\u4ecd\u53ef\u4ee5\u5f9eTouchGFX Generator\u4ecb\u9762\u4f86\u4fee\u6539",(0,r.kt)("b",null,"\u5bec\u5ea6"),"\u548c",(0,r.kt)("b",null,"\u9ad8\u5ea6"),"\u3002 \u5982\u679c\u4fee\u6539\u7684\u503c\u6c92\u6709\u9075\u5faa\u8996\u7a97LTDC\u5f71\u50cf\u5c64\uff08Window LTDC Layer\uff09\u7684\u914d\u7f6e\u6703\u5c0e\u81f4\u914d\u7f6e\u7684\u4e0d\u5339\u914d\u3002"),(0,r.kt)("h2",s({},{id:"touchgfx-driver--vsync-signal"}),"TouchGFX\u9a45\u52d5\u7a0b\u5f0f/VSYNC\u4fe1\u865f"),(0,r.kt)("p",null,"\u4e00\u65e6",(0,r.kt)("em",{parentName:"p"},"\u4e26\u5217RGB \uff08LTDC\uff09"),"\u88ab\u9078\u53d6\u70ba\u986f\u793a\u4ecb\u9762\uff0c\u958b\u767c\u4eba\u54e1\u5c31\u53ef\u4ee5\u9078\u53d6",(0,r.kt)("em",{parentName:"p"},"LTDC"),"\u4f5c\u70ba\u61c9\u7528\u6642\u6a19\u9a45\u52d5\u7a0b\u5f0f\uff08Application Tick Driver\uff09\u6216TouchGFX\u9a45\u52d5\u7a0b\u5f0f\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/ltdc-application-tick-source.webp",width:"500",mdxType:"Figure"}),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u662f\u6839\u64daLTDC\u7684\u914d\u7f6e\u800c\u7522\u751f\u7684LTDC\u4e2d\u65b7\u8655\u7406\u7a0b\u5f0f\uff08STM32F7\uff09\u3002 \u7522\u751f\u7684\u4e2d\u65b7\u8655\u7406\u51fd\u5f0f\u6703\u81ea\u52d5\u89e3\u9664TouchGFX\u5f15\u64ce\u7684\u4e3b\u8ff4\u5708\uff08main loop\uff09\u7684\u963b\u585e\u72c0\u614b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),'extern "C"\nirq void LTDC_IRQHandler(void)\n{\n    if (LTDC->ISR & 1)\n    {\n        LTDC->ICR = 1;\n        if (LTDC->LIPCR == (LTDC->AWCR & 0x7FF) - 1)\n        {\n            //entering active area\n            OSWrappers::signalVSync();\n        }\n    }\n}\n')),(0,r.kt)(a.Z,{mdxType:"Note"},"\u70ba\u4f7fLTDC\u9a45\u52d5\u7a0b\u5f0f\u80fd\u5920\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f7f\u7528\u8005\u5fc5\u9808\u900f\u904eLTDC NVIC\u7684\u8a2d\u5b9a\u6216\u900f\u904eGlobal NVIC\u7684\u8a2d\u5b9a\u4f86\u555f\u7528LTDC\u5168\u57df\u4e2d\u65b7\uff08global interrupt\uff09\uff0c\u540c\u6642\u958b\u555f\u4e2d\u65b7\u8655\u7406\u7a0b\u5f0f\u78bc\u7684\u7522\u751f\u3002"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/nvic-global-interrupt-enable.webp",mdxType:"Figure"}),(0,r.kt)("h2",s({},{id:"conclusion"}),"\u7d50\u8ad6"),(0,r.kt)("p",null,"\u7531TouchGFX Generator\u555f\u7528",(0,r.kt)("em",{parentName:"p"},"\u4e26\u5217RGB \uff08LTDC\uff09"),"\u986f\u793a\u4ecb\u9762\u53ef\u7522\u751f\u6240\u9700\u7684\u6240\u6709HAL\u7a0b\u5f0f\u78bc\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6839\u64daSTM32CubeMX LTDC\u7684\u914d\u7f6e\u4f86\u8a2d\u5b9aTouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u5bec\u5ea6\u3001\u9ad8\u5ea6\u548c\u50cf\u7d20\u683c\u5f0f\u3002 LTDC\u5f71\u50cf\u5c64\u7684",(0,r.kt)("em",{parentName:"li"},"\u5bec\u5ea6"),"\u548c",(0,r.kt)("em",{parentName:"li"},"\u9ad8\u5ea6"),"\u6703\u5f71\u97ffTouchGFX Designer\u4e2d\u7684\u756b\u5e03\u5927\u5c0f\uff0cLTDC\u50cf\u7d20\u683c\u5f0f\u6703\u5f71\u97ff\u6240\u9700\u7684TouchGFX\u5f71\u50cf\u7de9\u885d\u5340\u7684\u9a45\u52d5\u7a0b\u5f0f\u4ee5\u53ca\u6240\u751f\u6210\u5716\u8cc7\uff08asset\uff09\u7684\u683c\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u85c9\u7531\u9078\u53d6LTDC\u4f5c\u70ba\u61c9\u7528\u6642\u6a19\uff08application tick\uff09\u7684\u4f86\u6e90\u4ee5\u7522\u751f\u4e2d\u65b7\u8655\u7406\u7a0b\u5f0f\u78bc\u4f86\u9a45\u52d5TouchGFX\u5f15\u64ce\u7684\u4e3b\u8ff4\u5708\uff08main loop\uff09\u3002 \u901a\u5e38\u85c9\u7531LTDC\u7684\u914d\u7f6e\u958b\u767c\u4eba\u54e1\u5373\u53ef\u4e00\u76f4\u4f7f\u7528LTDC\u914d\u7f6e\u63d0\u4f9b\u7684\u61c9\u7528\u6642\u6a19\u9a45\u52d5\u7a0b\u5f0f\uff08Application Tick Driver\uff09\u3002")))}b.isMDXComponent=!0}}]);