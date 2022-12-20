"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3549],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children))}},30673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return F},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return v}});var a=n(3905),r=n(44035),o=n(22425),i=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(d)for(var n of d(t))s.call(t,n)&&u(e,n,t[n]);return e};const f={id:"using-serial-flash",title:"\u4f7f\u7528\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u5b58\u5132\u5716\u50cf\u548c\u5b57\u9ad4"},h=void 0,k={unversionedId:"development/scenarios/using-serial-flash",id:"development/scenarios/using-serial-flash",title:"\u4f7f\u7528\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u5b58\u5132\u5716\u50cf\u548c\u5b57\u9ad4",description:"\u672c\u7bc0\u5c07\u8a0e\u8ad6\u5982\u4f55\u4f7f\u7528\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\uff08\u6216\u5176\u4ed6\u672a\u6620\u5c04\u8a18\u61b6\u9ad4\uff09\u4f86\u5b58\u5132\u5716\u50cf\u548c\u5b57\u9ad4\u3002 \u9019\u88e1\u4ecb\u7d39\u7684\u6280\u8853\u5728STM32G0\u548c\u5176\u4ed6\u914d\u5099\u6975\u5c0fRAM\u7684\u8a2d\u5099\u4e0a\u7279\u5225\u6709\u7528\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/using-serial-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-serial-flash",permalink:"/4.18/zh-TW/docs/development/scenarios/using-serial-flash",draft:!1,tags:[],version:"current",frontMatter:{id:"using-serial-flash",title:"\u4f7f\u7528\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u5b58\u5132\u5716\u50cf\u548c\u5b57\u9ad4"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u5b58\u5132\u5f71\u50cf",permalink:"/4.18/zh-TW/docs/development/scenarios/using-non-memory-mapped-flash"},next:{title:"\u5c0d\u5b57\u9ad4\u8cc7\u6599\u4f7f\u7528\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4",permalink:"/4.18/zh-TW/docs/development/scenarios/fonts-in-unmapped-flash"}},g={},v=[{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"\u5be6\u73fe",id:"implementation",level:2},{value:"\u5716\u50cf",id:"images",level:2},{value:"\u5b57\u9ad4\u8cc7\u6599",id:"font-data",level:2}],b={toc:v};function F(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},b),u),l(t,p({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u672c\u7bc0\u5c07\u8a0e\u8ad6\u5982\u4f55\u4f7f\u7528\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\uff08\u6216\u5176\u4ed6\u672a\u6620\u5c04\u8a18\u61b6\u9ad4\uff09\u4f86\u5b58\u5132\u5716\u50cf\u548c\u5b57\u9ad4\u3002 \u9019\u88e1\u4ecb\u7d39\u7684\u6280\u8853\u5728STM32G0\u548c\u5176\u4ed6\u914d\u5099\u6975\u5c0fRAM\u7684\u8a2d\u5099\u4e0a\u7279\u5225\u6709\u7528\u3002"),(0,a.kt)("p",null,"\u53c3\u898b",(0,a.kt)("a",m({parentName:"p"},{href:"lowering-memory-usage-with-partial-framebuffer"}),"\u901a\u904e\u90e8\u5206\u5f71\u50cf\u7de9\u885d\u964d\u4f4e\u8a18\u61b6\u9ad4\u4f7f\u7528\u7387"),"\u4e00\u6587\u4e2d\u95dc\u65bc\u90e8\u5206\u5f71\u50cf\u7de9\u885d\uff08\u901a\u5e38\u8207\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u4e00\u8d77\u4f7f\u7528\uff09\u7684\u4ecb\u7d39\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u53e6\u8acb\u53c3\u898b",(0,a.kt)("a",m({parentName:"p"},{href:"using-non-memory-mapped-flash"}),"\u4f7f\u7528\u975e\u8a18\u61b6\u9ad4\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u5b58\u5132\u5716\u50cf"),"\u4e00\u6587\u4e2d\u95dc\u65bc\u5c07\u672a\u6620\u5c04\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u9ede\u9663\u5716\u7de9\u5b58\u5230RAM\u7684\u4ecb\u7d39\u3002"),(0,a.kt)("h2",m({},{id:"configuration"}),"\u914d\u7f6e"),(0,a.kt)("p",null,"\u70ba\u4e86\u8b93TouchGFX\u61c9\u7528\u4f7f\u7528\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u60a8\u5fc5\u9808\u66f4\u6539TouchGFX Generator\u7684\u914d\u7f6e\uff0c\u555f\u7528\u201cAdditional Features\u201d\u4e2d\u7684\u201cExternal Data Reader\u201d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.webp",width:"520",noShadow:!0,mdxType:"Figure"},"\u5176\u5b83\u529f\u80fd\uff1a\u6578\u64da\u8b80\u53d6\u5668"),(0,a.kt)("p",null,"\u555f\u7528\u6b64\u529f\u80fd\u5f8c\uff0cTouchGFX Generator\u66f4\u6539\u914d\u7f6e\uff0c\u4ee5\u4fbf\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," LCD\u985e\u3002 \u5b83\u9084\u751f\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::FlashDataReader"),"\u7684\u5b50\u985e\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,8-9}","{2-2,8-9}":!0}),"static TouchGFXDataReader dataReader;\nstatic LCD16bppSerialFlash display(dataReader);\nstatic ApplicationFontProvider fontProvider;\n...\nvoid touchgfx_init()\n{\n    ...\n    hal.setDataReader(&dataReader);\n    fontProvider.setFlashReader(&dataReader);\n    ...\n}\n")),(0,a.kt)("p",null,"\u6b64\u7a0b\u5f0f\u78bc\u5275\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u985e\u7684\u5be6\u4f8b\uff0c\u4e26\u5c07\u8a72\u5be6\u4f8b\u50b3\u905e\u7d66\u986f\u793a\u5668\u7269\u4ef6\u3001HAL\u7269\u4ef6\u548cApplicationFontProvider\u7269\u4ef6\u3002 \u9019\u4e09\u500b\u7269\u4ef6\u5c07\u4f7f\u7528dataReader\u7269\u4ef6\u8a2a\u554f\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u7684\u8cc7\u6599\u3002 \u9019\u4e9b\u8cc7\u6599\u53ef\u4ee5\u662f\u5716\u50cf\u548c\u5b57\u9ad4\u8cc7\u6599\u3002"),(0,a.kt)("p",null,"\u7cfb\u7d71\u7a0b\u5f0f\u5e2b\u5fc5\u9808\u5b8c\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u985e\u7684\u5be6\u73fe\uff0c\u624d\u80fd\u771f\u6b63\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u8b80\u53d6\u8cc7\u6599\u3002"),(0,a.kt)("h2",m({},{id:"implementation"}),"\u5be6\u73fe"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TouchGFXDataReader"),"\u985e\u5be6\u73fe",(0,a.kt)("a",m({parentName:"p"},{href:"../../api/classes/classtouchgfx_1_1_flash_data_reader/#public-functions"}),(0,a.kt)("em",{parentName:"a"},"touchgfx::FlashDataReader")),"\u4ecb\u9762\u3002 \u8a72\u4ecb\u9762\u6709\u4e0b\u52174\u7a2e\u65b9\u6cd5\uff0c\u9700\u8981\u5728\u7279\u5b9a\u786c\u9ad4\u4e0a\u5be6\u73fe\u3002"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"include/touchgfx/hal/FlashDataReader.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"    bool addressIsAddressable(const void* address)\n    void copyData(const void* src, void* dst, uint32_t bytes)\n    void startFlashLineRead(const void* src, uint32_t bytes)\n    const uint8_t* waitFlashReadComplete()\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\u985e\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"addressIsAddressable"),"\u6cd5\u4f86\u6c7a\u5b9a\u67d0\u4e9b\u8cc7\u6599\u662f\u5426\u53ef\u4ee5\u76f4\u63a5\u8b80\u53d6\uff08\u5373\u4f4d\u65bc\u5167\u90e8RAM\u6216\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\uff09\u6216\u662f\u5426\u61c9\u901a\u904edataReader\u7269\u4ef6\u8b80\u53d6\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"copyData"),"*\u6cd5\u7528\u65bc\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u540c\u6b65\u8907\u88fd\u8cc7\u6599\u5230RAM\u3002 \u7576\u4e0d\u5c0d\u8cc7\u6599\u9032\u884c\u9032\u4e00\u6b65\u8655\u7406\u6642\uff0c\u5e38\u4f7f\u7528\u6b64\u51fd\u6578\u3002 \u5982 \u5c07\u7acb\u9ad4\u5f71\u50cf\u8907\u88fd\u5230\u5f71\u50cf\u7de9\u885d\u6642\u3002"),(0,a.kt)("p",null,"\u7576\u9700\u8981\u5f9e\u5feb\u9583\u8a18\u61b6\u9ad4\u7372\u53d6\u591a\u884c\u8cc7\u6599\u6642\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"startFlashLineRead"),"\u6cd5\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"startFlashLineRead"),"\u6cd5\u958b\u59cb\u8cc7\u6599\u8b80\u53d6\u3002 \u6b64\u65b9\u6cd5\u53ef\u4ee5\u958b\u59cb\u975e\u540c\u6b65\u8b80\u53d6\uff0c\u4e26\u4e14\u61c9\u5728\u958b\u59cb\u8b80\u53d6\u5f8c\u7acb\u5373\u8fd4\u56de\u3002 ",(0,a.kt)("em",{parentName:"p"},"waitFlashReadComplete"),"\u6cd5\u61c9\u7b49\u5f85\u8b80\u53d6\u5b8c\u6210\uff0c\u4e26\u8fd4\u56de\u6307\u5411\u4fdd\u5b58\u8cc7\u6599\u7684\u7de9\u885d\u5340\u7684\u6307\u6a19\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\u53ef\u4ee5\u5728\u8655\u7406\u4e4b\u524d\u8b80\u53d6\u7684\u8cc7\u6599\u6642\u767c\u8d77\u4e00\u6b21\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\uff08\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff09\u3002 \u9019\u610f\u5473\u8457dataReader\u4e2d\u9700\u8981\u81f3\u5c11\u5169\u500b\u7de9\u885d\u5340\u4f86\u5be6\u73fe\u3002"),(0,a.kt)("p",null,"TouchGFX Generator\u751f\u6210\u5206\u5225\u5c6c\u65bc\u5169\u500b\u985e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"FlashDataReader"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u662f\u4e8c\u8005\u7684\u5b50\u985e\uff0c\u5305\u542b\u9ed8\u8a8d\u5be6\u73fe\u3002 \u5982\u679c\u8a72\u57f7\u884c\u4e0d\u5408\u9069\uff0c\u61c9\u7528\u7a0b\u5f0f\u5e2b\u53ef\u4ee5\u66f4\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\u985e\u4e2d\u865b\u64ec\u51fd\u6578\u7684\u52d5\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u5be6\u73fe\u547c\u53ebC\u51fd\u6578\u4f86\u5b8c\u6210\u5de5\u4f5c\u3002 \u9019\u4e9b\u61c9\u7528\u7531\u7cfb\u7d71\u7a0b\u5f0f\u5e2b\u5be6\u73fe\u3002"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'extern "C" __weak void DataReader_WaitForReceiveDone();\nextern "C" __weak void DataReader_ReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\nextern "C" __weak void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\n\nvoid TouchGFXGeneratedDataReader::startFlashLineRead(const void* src, uint32_t bytes)\n{\n    /* Start transfer using DMA */\n    DataReader_StartDMAReadData((uint32_t)src, (readToBuffer1 ? buffer1 : buffer2), bytes);\n}\n')),(0,a.kt)("p",null,"\u5be6\u73fe\u4f4d\u65bc",(0,a.kt)("inlineCode",{parentName:"p"},"MB1642BDataReader.c"),"\u6587\u4ef6\u4e2d\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Core/Src/MB1642BDataReader.c"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    readDataDMA(address24, buffer, length);\n}\n\nvoid readDataDMA(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    // Pull Flash CS pin low\n    isReceivingData = 1;\n    FLASH_CS_GPIO_Port->BRR = FLASH_CS_Pin;\n\n    *((__IO uint8_t*)&hspi2.Instance->DR) = CMD_READ;\n\n    ...\n}\n")),(0,a.kt)("p",null,"\u6b64\u5be6\u73fe\u7279\u5b9a\u65bc\u5feb\u9583\u8a18\u61b6\u9ad4\u4f7f\u7528\u7684\u5354\u8b70\u4ee5\u53caSPI\u548cCS\u4f7f\u7528\u7684GPIO\u3002 \u5fc5\u9808\u5be6\u73fe",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\u985e\u7684\u5168\u90e8\u4e09\u500bC\u51fd\u6578\u624d\u80fd\u767c\u63ee\u4f5c\u7528\u3002"),(0,a.kt)("h2",m({},{id:"images"}),"\u5716\u50cf"),(0,a.kt)("p",null,"\u5982\u7c21\u4ecb\u4e2d\u6240\u8ff0\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\u985e\u53ef\u901a\u904edataReader\u7269\u4ef6\u8b80\u53d6\u5716\u50cf\u50cf\u7d20\u3002 \u70ba\u6b64\uff0c\u5fc5\u9808\u66f4\u6539\u9023\u7d50\u5668\u8173\u672c\uff0c\u4ee5\u4fbf\u5c07\u5716\u50cf\u7684\u5730\u5740\u653e\u5728\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7bc4\u570d\u4e4b\u5916\u3002"),(0,a.kt)("p",null,"\u5728STM32G071\u4e0a\uff0c\u6211\u5011\u9078\u64c7\u4e86\u4f4d\u57400x90000000\u4f5c\u70ba\u4e32\u5217\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u8d77\u59cb\u4f4d\u5740\uff1a"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"gcc/STM32G071RBTX_FLASH.ld"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n\n/* Sections */\nSECTIONS\n{\n  ...\n\n  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n}\n")),(0,a.kt)("p",null,"\u9019\u6703\u5c07",(0,a.kt)("inlineCode",{parentName:"p"},"ExtFlashSection"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"FontFlashSection"),"\u653e\u51650x90000000\u5730\u5740\u7bc4\u570d\u3002"),(0,a.kt)("p",null,"\u5269\u9918\u7684\u4efb\u52d9\u662f\u7528Flasher\u5de5\u5177\u5c07\u8cc7\u6599\u5beb\u5165\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,a.kt)("p",null,"\u95dc\u65bcSTM32CubeProgrammer\u7684\u5beb\u5165\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u5668\u7684\u7c21\u8981\u8aaa\u660e\uff0c\u53ef\u4ee5\u5728\u4ee5\u4e0b\u6587\u6a94\u7684\u7b2c2.3.3\u7bc0\u4e2d\u627e\u5230\uff1a",(0,a.kt)("a",m({parentName:"p"},{href:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf#page=25"}),"UM2237 STMCubeProgrammer\u7528\u6236\u624b\u518a")),(0,a.kt)("h2",m({},{id:"font-data"}),"\u5b57\u9ad4\u8cc7\u6599"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u9023\u7d50\u5668\u8173\u672c\u5c07\u5b57\u9ad4\u50cf\u7d20\u8cc7\u6599\u548c\u5b57\u9ad4\u5b57\u5143\u7684\u4e2d\u7e7c\u8cc7\u6599\uff08\u5bec\u548c\u9ad8\uff09\u653e\u5165\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff08\u5169\u985e\u8cc7\u6599\u90fd\u5728FontFlashSection\u4e2d\uff09\u3002 \u5728\u87a2\u5e55\u4e0a\u7e6a\u88fd\u5b57\u5143\u6642\uff0c\u4e5f\u901a\u904edataReader\u7269\u4ef6\u8b80\u53d6\u6b64\u8cc7\u6599"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u672a\u4f7f\u7528\u201c\u672a\u6620\u5c04\u5b58\u5132\u683c\u5f0f\u201d\uff0c\u5247\u5fc5\u9808\u66f4\u6539\u9023\u7d50\u5668\u8173\u672c\u548c\u6a94\u6848",(0,a.kt)("inlineCode",{parentName:"p"},"include/touchgfx/hal/Config.hpp"),"\uff0c\u4ee5\u4fbf\u5c07\u5b57\u9ad4\u5b57\u5143\u4e2d\u7e7c\u8cc7\u6599\u79fb\u52d5\u5230\u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,a.kt)("p",null,"\u53c3\u898b",(0,a.kt)("a",m({parentName:"p"},{href:"fonts-in-unmapped-flash"}),"\u672a\u6620\u5c04\u5b58\u5132\u4e2d\u7684\u5b57\u9ad4"),"\u4e00\u6587\u7372\u53d6\u95dc\u65bc\u5b57\u9ad4\u683c\u5f0f\u7684\u66f4\u591a\u8cc7\u8a0a\u3002"))}F.isMDXComponent=!0}}]);