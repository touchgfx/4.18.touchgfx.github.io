"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8542],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=l,s=c["".concat(o,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(s,i(i({ref:t},d),{},{components:n})):r.createElement(s,i({ref:t},d))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=l},44035:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,l.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=l},93054:function(e,t,n){var r=n(67294),l=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=i},4420:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return v}});var r=n(3905),l=n(44035),a=n(93054),i=n(22425),p=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&k(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&k(e,n,t[n]);return e};const g={id:"03-display-internal",title:"3. \u986f\u793a\u5167\u90e8\u8a18\u61b6\u9ad4\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340",sidebar_label:"3. \u986f\u793a\u5167\u90e8\u8a18\u61b6\u9ad4\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340"},b=void 0,f={unversionedId:"development/board-bring-up/how-to/03-display-internal",id:"development/board-bring-up/how-to/03-display-internal",title:"3. \u986f\u793a\u5167\u90e8\u8a18\u61b6\u9ad4\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340",description:"\u52d5\u6a5f",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/03-display-internal.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/03-display-internal",permalink:"/4.18/zh-TW/docs/development/board-bring-up/how-to/03-display-internal",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"03-display-internal",title:"3. \u986f\u793a\u5167\u90e8\u8a18\u61b6\u9ad4\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340",sidebar_label:"3. \u986f\u793a\u5167\u90e8\u8a18\u61b6\u9ad4\u4e2d\u7684\u5f71\u50cf\u7de9\u885d\u5340"},sidebar:"docs",previous:{title:"2. CPU\u7684\u57f7\u884c",permalink:"/4.18/zh-TW/docs/development/board-bring-up/how-to/02-cpu-running"},next:{title:"4. \u5916\u90e8RAM",permalink:"/4.18/zh-TW/docs/development/board-bring-up/how-to/04-enable-external-ram"}},h={},v=[{value:"\u52d5\u6a5f",id:"motivation",level:2},{value:"\u76ee\u6a19",id:"goal",level:2},{value:"\u9a57\u8b49",id:"verification",level:3},{value:"\u5148\u6c7a\u689d\u4ef6",id:"prerequisites",level:2},{value:"\u57f7\u884c",id:"do",level:2},{value:"\u4e26\u884cRGB\u986f\u793a\u5668",id:"parallel-rgb-displays",level:3},{value:"\u986f\u793a\u76f8\u95dcGPIO",id:"display-gpio",level:4},{value:"LTDC\u8a2d\u5b9a",id:"ltdc-configuration",level:4},{value:"\u6642\u9418\u8a2d\u5b9a",id:"clock-configuration",level:4},{value:"\u8a2d\u5b9a\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u5740",id:"setting-the-framebuffer-address",level:4},{value:"\u6aa2\u67e5\u66f4\u65b0\u983b\u7387",id:"check-the-framerate",level:4},{value:"SPI\u986f\u793a\u5668",id:"spi-display",level:3},{value:"SPI \u8a2d\u5b9a",id:"spi-configuration",level:4},{value:"\u6aa2\u67e5\u986f\u793a\u5668\u984f\u8272",id:"checking-the-display-colors",level:2}],y={toc:v};function N(e){var t,n=e,{components:p}=n,k=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},y),k),o(t,u({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("h2",s({},{id:"motivation"}),"\u52d5\u6a5f"),(0,r.kt)("p",null,"\u5728\u9019\u4e00\u6b65\u4e2d\uff0c\u901a\u904e\u5c07\u50cf\u7d20\u6578\u64da\u5f9e\u5167\u90e8RAM\u50b3\u8f38\u5230\u986f\u793a\u5668\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230\u986f\u793a\u5668\u4e0a\u6703\u986f\u793a\u5167\u5bb9\u3002 \u6b64\u6b65\u9a5f\u53ef\u78ba\u4fdd\u6211\u5011\u80fd\u5c07\u6578\u64da\u50b3\u8f38\u5230\u986f\u793a\u5668\uff0c\u4e26\u4e14\u53ef\u4ee5\u4e0d\u65b7\u66f4\u65b0\u986f\u793a\u5668\u5167\u5bb9\u3002"),(0,r.kt)("p",null,"\u9664\u4e86\u5c07\u5f71\u50cf\u8cc7\u6599\u50b3\u8f38\u5230\u986f\u793a\u5668\u4ee5\u5916\uff0c\u6211\u5011\u9084\u5fc5\u9808\u78ba\u4fdd\u53ef\u9023\u7e8c\u5c07\u65b0\u6578\u64da\u767c\u9001\u5230\u986f\u793a\u5668\uff0c\u4e14\u4e0d\u6703\u5728\u986f\u793a\u5668\u4e0a\u51fa\u73fe\u932f\u8aa4\u3002 \u6211\u5011\u4e5f\u5c07\u6e2c\u91cf\u50b3\u9001\u901f\u7387\uff0c\u56e0\u70ba\u9019\u6703\u5f71\u97ff\u986f\u793a\u5668\u7684\u66f4\u65b0\u7387\u3002"),(0,r.kt)("p",null,"\u6b63\u5982\u6211\u5011\u5f9e\u4e0a\u4e00\u7bc0\u4e2d\u5b78\u5230\u7684\u90a3\u6a23\uff0c\u6211\u5011\u5c07\u5728\u5167\u90e8RAM\u4e2d\u653e\u7f6e\u4e00\u500b\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u800c\u8a72RAM\u53ef\u8b80\u5beb\u3002 \u6211\u5011\u5c07\u91cd\u8907\u66f4\u65b0\u8a72\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u4e26\u5c07\u5176\u50b3\u8f38\u5230\u986f\u793a\u5668\u3002"),(0,r.kt)("p",null,"\u56de\u9867\u4e00\u4e0b\uff0c\u901a\u904e\u4ee5\u4e0b\u516c\u5f0f\u4f86\u8a08\u7b97",(0,r.kt)("a",s({parentName:"p"},{href:"../../../basic-concepts/framebuffer"}),"\u5f71\u50cf\u7de9\u885d\u5340"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u5bec x \u9ad8 x bpp")),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u89e3\u6790\u5ea6\u70ba480 x 272\u768416\u4f4d\u5143\u666e\u901a\u986f\u793a\u5668\u5c07\u4f54\u7528480x272x16/8\u4f4d\u5143\u7d44 \u5373261120\u4f4d\u5143\u7d44\u3002"),(0,r.kt)("p",null,"\u5373\u4f7f\u986f\u793a\u5668\u5c3a\u5bf8\u904e\u5927\u5c0e\u81f4\u6240\u9700\u7684\u5f71\u50cf\u7de9\u885d\u5340\u7121\u6cd5\u5b58\u5132\u5728\u5167\u90e8RAM\u4e2d\uff0c\u4e5f\u4e0d\u61c9\u8df3\u904e\u6b64\u6b65\u9a5f\u3002 \u800c\u61c9\u5c07\u986f\u793a\u63a7\u5236\u5668\u914d\u7f6e\u70ba\u50c5\u66f4\u65b0\u986f\u793a\u5668\u7684\u4e00\u90e8\u5206\u3002 \u9019\u6a23\u4e00\u4f86\uff0c\u6211\u5011\u53ef\u4ee5\u8abf\u6574\u5f71\u50cf\u7de9\u885d\u5340\u6240\u9700\u7684RAM\uff0c\u4e26\u914d\u7f6e\u5408\u9069\u7684\u5167\u90e8RAM\u5927\u5c0f\u3002"),(0,r.kt)("p",null,"\u986f\u793a\u4ecb\u9762\u7684\u985e\u578b\u5c0d\u50b3\u8f38\u5f71\u50cf\u7de9\u885d\u5340\u6240\u9700\u7684\u8a2d\u7f6e\u548c\u7a0b\u5f0f\u78bc\u6709\u5f88\u5927\u5f71\u97ff\u3002 \u5728\u672c\u7bc0\u4e2d\uff0c\u6211\u5011\u5c07\u9996\u5148\u8a0e\u8ad6\u9023\u63a5\u81f3LTDC\u7684\u986f\u793a\u5668\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u5982SPI\u986f\u793a\u5668\u4e4b\u985e\u7684\u986f\u793a\u5668\uff0c\u7a0b\u5f0f\u78bc\u6703\u6709\u5f88\u5927\u5340\u5225\uff0c\u4f46\u4efb\u52d9\u548c\u76ee\u6a19\u7686\u76f8\u540c\u3002"),(0,r.kt)("h2",s({},{id:"goal"}),"\u76ee\u6a19"),(0,r.kt)("p",null,"\u672c\u7bc0\u7684\u76ee\u6a19\u662f\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5167\u5bb9\u50b3\u8f38\u5230\u986f\u793a\u5668\u3002 \u60a8\u4e5f\u61c9\u9a57\u8b49\u5f71\u50cf\u7de9\u885d\u5340\u7684\u5167\u5bb9\u662f\u5426\u53ef\u4ee5\u4fee\u6539\u4ee5\u53ca\u5f71\u50cf\u7de9\u885d\u5340\u662f\u5426\u53ef\u4ee5\u9023\u7e8c\u91cd\u65b0\u767c\u9001\u3002"),(0,r.kt)("h3",s({},{id:"verification"}),"\u9a57\u8b49"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u7bc0\u7684\u9a57\u8b49\u9ede\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u9a57\u8b49\u9ede"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u986f\u793a\u5f71\u50cf\u7de9\u885d\u5340"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u986f\u793a\u63a7\u5236\u5668\u6216SPI\u5df2\u8a2d\u5b9a\u4e26\u57f7\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u986f\u793a\u5df2\u66f4\u65b0\u7684\u5f71\u50cf\u7de9\u885d\u5340"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u6211\u5011\u77e5\u9053\u5982\u4f55\u91cd\u8907\u50b3\u9001\u5f71\u50cf\u7de9\u885d\u5340")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u984f\u8272\u6b63\u78ba"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LTDC\u76f8\u95dc\u7684GPIO\u8a2d\u5b9a\u6b63\u78ba\u6216\u986f\u793a\u5668\u7684\u8cc7\u6599\u683c\u5f0f\u8207\u6211\u5011\u7684\u5f71\u50cf\u7de9\u885d\u5340\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u66f4\u65b0\u983b\u7387\u6b63\u78ba"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u8a2d\u5b9a\u66f4\u65b0\u983b\u7387\u8207\u524d\u5f8c\u5eca\u7b49\u986f\u793a\u53c3\u6578\uff0c\u4ee5\u53d6\u5f97\u6240\u9700\u66f4\u65b0\u983b\u7387")))),(0,r.kt)("h2",s({},{id:"prerequisites"}),"\u5148\u6c7a\u689d\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9a5f\u7684\u5148\u6c7a\u689d\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u95dc\u986f\u793a\u5668\u7684\u8cc7\u8a0a\uff0c\u901a\u5e38\u70ba\u8cc7\u6599\u624b\u518a"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u95dcMCU\u548c\u986f\u793a\u5668\u4e4b\u9593\u7684\u9023\u63a5\u7684\u8cc7\u8a0a\u3002")),(0,r.kt)("h2",s({},{id:"do"}),"\u57f7\u884c"),(0,r.kt)("p",null,"\u6839\u64da\u986f\u793a\u5668\u985e\u578b\uff0c\u6240\u9700\u8a2d\u7f6e\u6703\u6709\u6240\u4e0d\u540c\u3002 \u4f46\u5c0d\u65bc\u6240\u6709\u985e\u578b\u7684\u986f\u793a\u5668\uff0c\u6211\u5011\u90fd\u9700\u8981\u5167\u90e8RAM\u4e2d\u6709\u4e00\u500b\u5f71\u50cf\u7de9\u885d\u5340\u3002 \u4e00\u7a2e\u7c21\u55ae\u7684\u914d\u7f6e\u8a18\u61b6\u9ad4\u7684\u65b9\u6cd5\u662f\u53ea\u9700\u5ba3\u544a\u4e00\u500b\u5927\u5c0f\u5408\u9069\u7684\u5168\u57df\u9663\u5217\uff1a"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"uint16_t framebuffer[480*272];  //16 bpp framebuffer\n")),(0,r.kt)("p",null,"\u5982\u679c\u5167\u90e8RAM\u4e0d\u8db3\u4ee5\u5bb9\u7d0d\u8a72\u9663\u5217\uff0c\u8acb\u5ba3\u544a\u4e00\u500b\u5c0d\u61c9\u65bc\u8f03\u5c0f\u89e3\u6790\u5ea6\u7684\u9663\u5217\uff0c\u6bd4\u65b9480x200\u3002"),(0,r.kt)("p",null,"\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u50b3\u8f38\u5230\u986f\u793a\u5668\u7684\u65b9\u6cd5\u53d6\u6c7a\u65bc\u986f\u793a\u5668\u985e\u578b\u3002 \u6211\u5011\u73fe\u5728\u4f86\u77ad\u89e3\u4e00\u4e0b\u9019\u9ede\u3002"),(0,r.kt)("h3",s({},{id:"parallel-rgb-displays"}),"\u4e26\u884cRGB\u986f\u793a\u5668"),(0,r.kt)("p",null,"\u6211\u5011\u9996\u5148\u5c07\u8a0e\u8ad6\u9023\u63a5\u81f3MCU LTDC\u63a7\u5236\u5668\u7684\u4e26\u884cRGB\u986f\u793a\u5668\u3002"),(0,r.kt)("p",null,"\u6b64\u8996\u7a97\u7684\u8a2d\u5b9a\u4efb\u52d9\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u8207\u986f\u793a\u5668\u6709\u95dc\u7684GPIO\u9023\u7dda"),(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u5b9aLTDC\u63a7\u5236\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u5b9aLTDC\u50cf\u7d20\u6642\u8108"),(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u7f6e\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u5740"),(0,r.kt)("li",{parentName:"ul"},"\u6aa2\u67e5\u66f4\u65b0\u983b\u7387")),(0,r.kt)("p",null,"\u4f5c\u70ba\u7bc4\u4f8b\uff0c\u6211\u5011\u5c07\u4f7f\u7528STM32F746Discovery evaluation\u5957\u4ef6\u3002 \u6b64\u677f\u5e36\u6709480*272\u986f\u793a\u5668\u3002"),(0,r.kt)("h4",s({},{id:"display-gpio"}),"\u986f\u793a\u76f8\u95dcGPIO"),(0,r.kt)("p",null,"\u8a72\u986f\u793a\u5668\u4ee524 BPP\u6a21\u5f0f\u57f7\u884c\uff0c\u6240\u4ee5\u6211\u5011\u70baLTDC\u548c\u986f\u793a\u5668\u4e4b\u9593\u7684\u9023\u7dda\u8a2d\u5b9a24\u500bGPIO\u3002 \u9019\u5728Multimedia -> LTDC-> GPIO\u8a2d\u5b9a\u4e0b\u7684STM32CubeMX\u4e2d\u6700\u5bb9\u6613\u5be6\u73fe\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-01.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u8a2d\u5b9a\u986f\u793a\u76f8\u95dc\u7684GPIO"),(0,r.kt)("p",null,"\u9664\u4e86\u7528\u65bc\u50cf\u7d20\u50b3\u8f38\u768424\u500bGPIO\uff08\u5982LTDC_B0\uff09\u4ee5\u5916\uff0c\u6211\u5011\u9084\u8a2d\u5b9a\u4e864\u500b\u986f\u793a\u63a7\u5236\u8a0a\u865f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u4fe1\u865f"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LTDC_CLK"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u50cf\u7d20\u6642\u8108 \u7576\u5c0d24\u500b\u7dda\u4e2d\u7684\u50cf\u7d20\u9032\u884c\u53d6\u6a23\u6642\uff0c\u5411\u986f\u793a\u5668\u767c\u51fa\u4fe1\u865f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LTDC_DE"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u8cc7\u6599\u555f\u52d5\u3002 \u50cf\u7d20\u65bc\u555f\u52d5\u6642\u50b3\u8f38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LTDC_HSYNC"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u6c34\u5e73\u540c\u6b65\u3002 \u5141\u8a31\u986f\u793a\u5668\u627e\u5230\u50cf\u7d20\u884c\u7684\u8d77\u9ede")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"LTDC_VSYNC"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5782\u76f4\u540c\u6b65\u3002 \u5141\u8a31\u986f\u793a\u5668\u627e\u5230\u5e40\u7684\u8d77\u59cb\u9ede")))),(0,r.kt)("p",null,"\u6aa2\u67e5\u60a8\u7684\u786c\u9ad4\u8a2d\u8a08\u4e26\u9032\u884c\u76f8\u61c9\u7684\u914d\u7f6e\u3002"),(0,r.kt)("h4",s({},{id:"ltdc-configuration"}),"LTDC\u8a2d\u5b9a"),(0,r.kt)("p",null,"LTDC\u8a2d\u5b9a\u4f4d\u65bc \u591a\u5a92\u9ad4 -> LTDC -> \u53c3\u6578\u8a2d\u5b9a \u4e0b\u7684STM32CubeMX\u4e2d\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-02.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u8a2d\u5b9aLTDC\u53c3\u6578"),(0,r.kt)("p",null,"\u986f\u793a\u5668\u7684\u6709\u6548\u5bec\u5ea6\u548c\u9ad8\u5ea6\u8207\u89e3\u6790\u5ea6\u5c0d\u61c9\u3002 \u6709\u95dc\u540c\u6b65\u8108\u885d\u5bec\u5ea6\u548c\u524d\u5f8c\u5eca\uff0c\u8acb\u6aa2\u67e5\u986f\u793a\u8cc7\u6599\u624b\u518a\u3002 \u540c\u6642\u9700\u6ce8\u610f\u8a0a\u865f\u6975\u6027\u3002 \u7070\u8272\u7684\u503c\u6839\u64da\u5176\u4ed6\u503c\u8a08\u7b97\u800c\u4f86\u3002 \u9019\u4e9b\u503c\u88ab\u5beb\u5165LTDC\u66ab\u5b58\u5668\uff08\u4e5f\u53ef\u5728\u7a0b\u5f0f\u78bc\u4e2d\u627e\u5230\uff09\u3002"),(0,r.kt)("p",null,"\u73fe\u5728\u8acb\u5230 \u591a\u5a92\u9ad4-> LTDC -> \u5c64\u8a2d\u5b9a \u7684LTDC\u5c64\u8a2d\u5b9a\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-03.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u8a2d\u5b9aLTDC\u5c64\u53c3\u6578"),(0,r.kt)("p",null,"\u5c0d\u65bc\u8a72\u6e2c\u8a66\u4ee5\u53ca\u5728TouchGFX\u4e2d\uff0c\u6211\u5011\u901a\u5e38\u50c5\u4f7f\u7528\u4e00\u5c64\u3002 \u7b2c0\u5c64\u7684\u89e3\u6790\u5ea6\u61c9\u8207\u5f71\u50cf\u7de9\u885d\u5340\u5927\u5c0f\u5339\u914d\u3002 \u4e4b\u5f8c\u6703\u8a2d\u7f6e\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u5740\uff0c\u5728\u9019\u88e1\u66ab\u6642\u5148\u8df3\u904e\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5ba3\u544a\u4e86\u5c0f\u65bc\u986f\u793a\u5668\u89e3\u6790\u5ea6\u7684\u5f71\u50cf\u7de9\u885d\u5340\u9663\u5217\uff0c\u5247\u8abf\u6574\u5716\u5c64\u5927\u5c0f\uff0c\u4ee5\u4fbf\u8207\u5f71\u50cf\u7de9\u885d\u5340\u5c3a\u5bf8\u5339\u914d\u3002 LTDC\u5c07\u50b3\u8f38\u5728\u5f71\u50cf\u7de9\u885d\u5340\u4e2d\u6c92\u6709\u7684\u986f\u793a\u5668\u50cf\u7d20\u80cc\u666f\u984f\u8272\u3002 \u5efa\u8b70\u5c07\u80cc\u666f\u984f\u8272\u8a2d\u5b9a\u70ba\u8f03\u986f\u773c\u7684\u984f\u8272\uff0c\u5982\u7d05\u8272\uff08\u85cd\u8272\uff1a0x00\uff0c\u7da0\u8272\uff1a0x00\uff0c\u7d05\u8272\uff1a0xFF\uff09\u3002"),(0,r.kt)("h4",s({},{id:"clock-configuration"}),"\u6642\u9418\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u6642\u9418\u8a2d\u5b9a\u4e5f\u5f88\u91cd\u8981\u3002 \u5fc5\u9808\u555f\u52d5\u6240\u6709GPIO\u548cLTDC\u7684\u6642\u9418\u3002 \u50cf\u7d20\u6642\u8108\u5fc5\u9808\u5728\u986f\u793a\u5668\u53ef\u63a5\u53d7\u7684\u7bc4\u570d\u5167\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-04.webp",noShadow:!1,width:"600",mdxType:"Figure"},"\u6642\u9418\u914d\u7f6e"),(0,r.kt)("p",null,"LTDC\u53d6\u6c7a\u65bc3\u500b\u6642\u9418\uff1aHCLK\uff0cPCLK2\u8207LCD_CLK\u3002"),(0,r.kt)("h4",s({},{id:"setting-the-framebuffer-address"}),"\u8a2d\u5b9a\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u5740"),(0,r.kt)("p",null,"\u5728STM32CubeMX\u4e2d\uff0c\u6211\u5011\u5c07\u7b2c0\u5c64\u7684\u5f71\u50cf\u7de9\u885d\u5340\u4f4d\u5740\u8a2d\u5b9a\u70ba0xC0000000\u3002 \u6211\u5011\u9700\u8981\u5c07\u5176\u66f4\u6539\u70ba\u5167\u90e8RAM\u4e2d\u7684\u9663\u5217\u4f4d\u5740\u3002 \u5728\u9019\u4f7f\u7528STM32Cube\u97cc\u9ad4HAL\u51fd\u6578\u53ef\u4ee5\u8f15\u9b06\u5be6\u73fe\uff1a"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"  /* USER CODE BEGIN 2 */\n  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);\n  /* USER CODE END 2 */\n")),(0,r.kt)("p",null,"HAL\u51fd\u6578\u4e2d\u7684\u5c64\u6578\u7de8\u865f\u70ba1\u30012\uff0c\u800cSTM32CubeMX\u4e2d\u7684\u5c64\u6578\u7de8\u865f\u70ba0\u30011\u3002 \u53e6\u5916\uff0cLTDC\u5b8c\u5168\u7531STM32CubeMX\u7522\u751f\u7a0b\u5f0f\u78bc\u4e2d\u7684 ",(0,r.kt)("em",{parentName:"p"},"MX_LTDC_Init(void)")," \u51fd\u6578\u4f86\u8a2d\u5b9a\u3002"),(0,r.kt)("p",null,"LTDC\u63a7\u5236\u5668\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u91cd\u8907\u767c\u9001\u81f3\u986f\u793a\u5668\u3002 \u986f\u793a\u7684\u5716\u50cf\u53d6\u6c7a\u65bc\u5f71\u50cf\u7de9\u885d\u5340\u4e2d\u7684\u503c\u3002 \u5617\u8a66\u5f71\u50cf\u7de9\u885d\u5340\u7684\u4e0d\u540c\u503c\u6216\u6a21\u5f0f\u3002 \u4f8b\u5982\uff0c\u4f7f\u7528memset\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u6e05\u9664\u70ba0xFF\uff0c\u4ee5\u986f\u793a\u5168\u767d\u7684\u87a2\u5e55\u3002"),(0,r.kt)(a.Z,{mdxType:"Note"},"\u5728\u67d0\u4e9b\u986f\u793a\u5668\u4e0a\uff0c\u5fc5\u9808\u958b\u555f\u80cc\u5149\u624d\u80fd\u4f7f\u5716\u5f62\u5e40\u53ef\u898b\u3002"),(0,r.kt)("h4",s({},{id:"check-the-framerate"}),"\u6aa2\u67e5\u66f4\u65b0\u983b\u7387"),(0,r.kt)("p",null,"LTDC\u63a7\u5236\u5668\u70ba\u6bcf\u500b\u5e40\u89f8\u767c\u4e00\u500b\u4e2d\u65b7\u3002 \u6b64\u4e2d\u65b7\u88ab\u7528\u4f86\u9a45\u52d5\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,r.kt)("p",null,"\u60a8\u61c9\u4f7f\u7528\u9664\u932f\u5668\u4f86\u6aa2\u67e5\u8a72\u4e2d\u65b7\u662f\u5426\u88ab\u89f8\u767c\u3002"),(0,r.kt)("p",null,"\u9019\u4e9b\u4e2d\u65b7\u9593\u7684\u6642\u9593\u662f\u6240\u6709\u5716\u5143\u50b3\u8f38\u548c\u524d\u5f8c\u5eca\u7684\u8017\u6642\u7e3d\u548c\u3002 \u60a8\u53ef\u4ee5\u901a\u904e\u8abf\u7bc0\u524d\u5f8c\u5eca\u4f86\u8abf\u7bc0\u66f4\u65b0\u983b\u7387\u3002 \u524d\u5f8c\u5eca\u53c3\u6578\u662fLTDC\u914d\u7f6e\u7684\u4e00\u90e8\u5206\u3002 \u901a\u5e38\u901a\u904e\u589e\u5f37\u524d\u5eca\u4f86\u964d\u4f4e\u66f4\u65b0\u983b\u7387\u3002"),(0,r.kt)("p",null,"\u6e2c\u91cf\u66f4\u65b0\u983b\u7387\u7684\u7c21\u55ae\u65b9\u6cd5\u70ba\u4f7f\u7528\u4e2d\u65b7\u8655\u7406\u7a0b\u5f0f\u4e2d\u7684HAL_GetTick\uff08\uff09\uff1a"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"stm32f7xx_it.c"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp",metastring:"{6-8}","{6-8}":!0}),"volatile int last = 0;\nvolatile int diff = 0;\nvoid LTDC_IRQHandler(void)\n{\n  /* USER CODE BEGIN LTDC_IRQn 0 */\n  int now = HAL_GetTick();\n  diff = last - now;\n  last = now;\n  /* USER CODE END LTDC_IRQn 0 */\n  HAL_LTDC_IRQHandler(&hltdc);\n  ...\n")),(0,r.kt)("p",null,"\u8acb\u8a18\u4f4f\uff0c\u5728\u6bcf\u79d260\u5e40\u7684\u60c5\u6cc1\u4e0b\uff0c\u5404\u500b\u5e40\u4e4b\u9593\u61c9\u8a72\u67091000 ms / 60 = 16 ms\u3002"),(0,r.kt)("h3",s({},{id:"spi-display"}),"SPI\u986f\u793a\u5668"),(0,r.kt)("p",null,"\u73fe\u5728\u6211\u5011\u5c07\u8a0e\u8ad6\u8207SPI\u532f\u6d41\u9023\u63a5\u7684\u986f\u793a\u5668\u3002"),(0,r.kt)("p",null,"\u6b64\u8996\u7a97\u7684\u8a2d\u5b9a\u4efb\u52d9\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u5b9aSPI\u5916\u8a2d\u8207GPIO"),(0,r.kt)("li",{parentName:"ul"},"\u6aa2\u67e5\u6642\u9418"),(0,r.kt)("li",{parentName:"ul"},"\u7de8\u5beb\u6216\u627e\u5230\u5fc5\u8981\u7684\u9a45\u52d5\u7a0b\u5f0f\u7a0b\u5f0f\u78bc")),(0,r.kt)("h4",s({},{id:"spi-configuration"}),"SPI \u8a2d\u5b9a"),(0,r.kt)("p",null,"\u5728STM32CubeMX\u4e2d\u555f\u52d5\u4e26\u555f\u52d5SPI\u3002 \u9019\u4e9b\u5f71\u50cf\u4f86\u81eaSTM32G081\u5c08\u6848\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-05.webp",noShadow:!1,width:"600",mdxType:"Figure"},"SPI \u8a2d\u5b9a"),(0,r.kt)("p",null,"\u6aa2\u67e5\u4f7f\u7528\u7684SPI\u683c\u5f0f\u7684\u986f\u793a\u5668\u8cc7\u6599\u624b\u518a\uff08\u8cc7\u6599\u5927\u5c0f\u548c\u4f4d\u9806\u5e8f\uff09\u3002 \u8acb\u8a18\u4f4f\uff0c16\u4f4d\u5143\u5b57\u4ee5\u5c0f\u7aef\u4f4d\u5143\u7d44\u5e8f\u5b58\u5132\u5728\u5f71\u50cf\u7de9\u885d\u5340\u4e2d\u3002 \u6aa2\u67e5\u662f\u5426\u53ef\u4ee5\u5c07\u986f\u793a\u5668\u914d\u7f6e\u70ba\u6b64\u683c\u5f0f\u3002 \u5982\u679c\u4e0d\u53ef\u4ee5\uff0c\u5247\u5fc5\u9808\u5728\u50b3\u8f38\u671f\u9593\u9032\u884c\u6578\u64da\u8f49\u63db\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u53e6\u8acb\u6ce8\u610f\u6642\u9418\u6975\u6027\u548c\u6642\u9418\u76f8\u4f4d\u3002 \u9019\u4e9b\u53c3\u6578\u5df2\u5728\u986f\u793a\u5668\u6578\u64da\u624b\u518a\u4e2d\u6307\u5b9a\u3002"),(0,r.kt)("p",null,"SPI\u6642\u9418\uff08\u6ce2\u7279\u7387\uff09\u7531FCLK\u7684\u9664\u983b\u5668\u63a7\u5236\u3002 \u6700\u5c0f\u9664\u983b\u5668\u70ba2\u3002 \u5982\u679cMCU\u6b63\u5728\u57f7\u884c \uff08\u598264MHz\uff09\uff0c\u5247\u6700\u5927SPI\u6ce2\u7279\u7387\u70ba32 MBit/s\u3002"),(0,r.kt)("p",null,"\u5728GPIO\u9078\u9805\u4e0a\uff0c\u60a8\u53ef\u4ee5\u6aa2\u67e5SPI\u5916\u8a2d\u7684GPIO\u8a2d\u5b9a\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-06.webp",noShadow:!1,width:"600",mdxType:"Figure"},"SPI GPIO\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u5728\u53f3\u65b9\u7684\u5f15\u8173\u6392\u5217\u6aa2\u8996\u4e2d\u9078\u64c7GPIO\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-07.webp",noShadow:!1,width:"600",mdxType:"Figure"},"SPI GPIO\u9078\u64c7"),(0,r.kt)("p",null,"\u73fe\u5728\u5269\u4e0b\u7684\u4efb\u52d9\u70ba\u914d\u7f6e\u986f\u793a\u5668\u4e26\u5728SPI\u901a\u9053\u4e0a\u50b3\u8f38\u5f71\u50cf\u7de9\u885d\u5340\u3002 STM32CubeMX\u7121\u6cd5\u70ba\u60a8\u751f\u6210\u6b64\u7a0b\u5f0f\u78bc\uff0c\u56e0\u70ba\u5b83\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u6c7a\u65bc\u986f\u793a\u5668\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5c0d\u65bc\u8a31\u591a\u986f\u793a\u5668\uff0c\u5fc5\u9808\u767c\u9001\u4e00\u7cfb\u5217\u6307\u4ee4\uff0c\u4e26\u9075\u5faa\u7279\u5b9a\u7684\u4e0a\u96fb\u6642\u5e8f\u3002 \u4e4b\u5f8c\uff0c\u901a\u5e38\u9700\u8981\u8a2d\u7f6e\u984f\u8272\u6a21\u5f0f\uff0c\u7136\u5f8c\u5c07\u986f\u793a\u5668\u6253\u958b\u3002 \u6240\u6709\u9019\u4e9b\u9808\u5728\u4f9b\u61c9\u5546\u6240\u63d0\u4f9b\u7684\u6578\u64da\u624b\u518a\u6216\u7bc4\u4f8b\u4e2d\u6307\u5b9a\u3002"),(0,r.kt)("p",null,"STM32Cube\u97cc\u9ad4\u4e2d\u5305\u542b SPI\u901a\u8a0a\u7684\u7bc4\u4f8b\u3002 STM32Cube HAL\u5305\u542b\u5404\u7a2e\u8f14\u52a9\u529f\u80fd\u3002 \u50b3\u9001\u8cc7\u6599\u7684\u57fa\u672c\u51fd\u6578\uff1a"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"stm32g0xx_hal_spi.h"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"HAL_StatusTypeDef HAL_SPI_Transmit(SPI_HandleTypeDef *hspi, uint8_t *pData, uint16_t Size, uint32_t Timeout);\n")),(0,r.kt)("p",null,"\u6211\u5011\u5efa\u8b70\u4f7f\u7528\u9019\u4e9b\u51fd\u6578\uff0c\u76f4\u5230\u80fd\u7a69\u5b9a\u9032\u884c\u901a\u8a0a\u3002 \u7136\u5f8c\uff0c\u53ef\u901a\u904e\u7de8\u5beb\u5c08\u7528\u51fd\u6578\u4f86\u63d0\u9ad8\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u5728\u7de8\u5bebSPI\u986f\u793a\u9a45\u52d5\u7a0b\u5f0f\u7684\u904e\u7a0b\u4e2d\uff0c\u4f7f\u7528SPI\u793a\u6ce2\u5668\u6216SPI USB\u8a18\u9304\u5668\u6703\u975e\u5e38\u6709\u7528\u3002"),(0,r.kt)(a.Z,{mdxType:"Note"},"SPI\u5f9e\u4f4e\u983b\u555f\u52d5\uff0c\u4ee5\u907f\u514d\u96dc\u8a0a\u554f\u984c\u3002"),(0,r.kt)("h2",s({},{id:"checking-the-display-colors"}),"\u6aa2\u67e5\u986f\u793a\u5668\u984f\u8272"),(0,r.kt)("p",null,"\u6b64\u6642\uff0c\u60a8\u53ef\u4ee5\u5c07\u5f71\u50cf\u7de9\u885d\u5340\u5167\u5bb9\u50b3\u8f38\u5230\u986f\u793a\u5668\uff0c\u5efa\u8b70\u60a8\u5fb9\u5e95\u6aa2\u67e5\u986f\u793a\u5668\u7684\u984f\u8272\u3002"),(0,r.kt)("p",null,"\u8a72\u60f3\u6cd5\u5c31\u662f\u5c07\u984f\u8272\u5beb\u5165\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u4e26\u901a\u904e\u8996\u89ba\u4f86\u6aa2\u67e5\u986f\u793a\u5668\u3002 \u4ee5\u4e0b\u70ba\u4e00\u4e9b\u7bc4\u4f8b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u6e2c\u8a66"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u7d05\u8272"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5728\u5f71\u50cf\u7de9\u885d\u5340\u4e2d\u8a2d\u7f6e\u7d05\u8272\u3002 \u986f\u793a\u5668\u4e5f\u5fc5\u9808\u70ba\u7d05\u8272\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u7da0\u8272"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5728\u5f71\u50cf\u7de9\u885d\u5340\u4e2d\u8a2d\u7f6e\u7da0\u8272\u3002 \u986f\u793a\u5668\u4e5f\u5fc5\u9808\u70ba\u7da0\u8272\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u85cd\u8272"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5728\u5f71\u50cf\u7de9\u885d\u5340\u4e2d\u8a2d\u7f6e\u85cd\u8272\u3002 \u986f\u793a\u5668\u4e5f\u5fc5\u9808\u70ba\u85cd\u8272\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u6df1\u8272"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5982\u679c\u8a2d\u7f6e\u70ba\u6df1\u8272\uff08\u59820x8000\uff09\uff0850%\u7d05\u8272\uff09\uff0c\u5247\u5fc5\u9808\u5728\u986f\u793a\u5668\u4e0a\u986f\u793a\u9ed1\u8272\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u66f4\u6539\u984f\u8272"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u6bcf\u79d2\u66f4\u6539\u4e00\u6b21\u5f71\u50cf\u7de9\u885d\u5340\uff0c\u7136\u5f8c\u67e5\u770b\u986f\u793a\u5668\u662f\u5426\u66f4\u65b0\u3002")))),(0,r.kt)("p",null,"\u8981\u5c07\u984f\u8272\u653e\u5165RGB565\u7684\u5f71\u50cf\u7de9\u885d\u5340\u4e2d\uff0c\u53ef\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6848\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"uint8_t r    = 0xff, g = 0x00, b = 0x00;             // Solid red\nuint16_t col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565\n// put colors into the framebuffer\nfor(int i = 0; i < W*H; i++) {\n  framebuffer[i] = col;\n}\n")),(0,r.kt)("p",null,"\u5c0d\u65bc24BPP\u986f\u793a\u5668\uff0c\u6700\u597d\u4f7f\u7528\u4f4d\u5143\u7d44\u6307\u6a19\u4f86\u8868\u793a\u7a0b\u5f0f\u78bc\uff08\u984f\u8272\u4ee5BGR\u9806\u5e8f\u5132\u5b58\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"uint8_t* framebuffer[480*272*3];  //24 bit framebuffer\n...\nuint8_t *fb = framebuffer;\nwhile(fb < (uint8_t*)(framebuffer + (480*272*3))) {\n  *fb++ = 0x00; // Write blue color and increment pointer by one byte\n  *fb++ = 0x00; // Write green color\n  *fb++ = 0xFF; // Write red color\n}\n")),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/red-display-test.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u986f\u793a\u5f69\u8272\u756b\u9762\u7684\u5f71\u50cf\u7de9\u885d\u5340"))}N.isMDXComponent=!0}}]);