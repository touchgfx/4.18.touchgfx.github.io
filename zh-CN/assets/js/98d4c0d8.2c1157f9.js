"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2110],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},30007:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return b},toc:function(){return g},default:function(){return y}});var r=n(3905),a=n(44035),o=n(93054),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&p(e,n,t[n]);return e};const f={id:"07-flash-external-nonaddressable",title:"7. \u5757\u6a21\u5f0f\u4e0b\u7684\u5916\u90e8\u95ea\u5b58",sidebar_label:"7. \u5757\u6a21\u5f0f\u4e0b\u7684\u5916\u90e8\u95ea\u5b58"},m=void 0,b={unversionedId:"development/board-bring-up/how-to/07-flash-external-nonaddressable",id:"development/board-bring-up/how-to/07-flash-external-nonaddressable",isDocsHomePage:!1,title:"7. \u5757\u6a21\u5f0f\u4e0b\u7684\u5916\u90e8\u95ea\u5b58",description:"\u52a8\u673a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/07-flash-external-nonaddressable.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/07-flash-external-nonaddressable",permalink:"/4.18/zh-CN/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"07-flash-external-nonaddressable",title:"7. \u5757\u6a21\u5f0f\u4e0b\u7684\u5916\u90e8\u95ea\u5b58",sidebar_label:"7. \u5757\u6a21\u5f0f\u4e0b\u7684\u5916\u90e8\u95ea\u5b58"},sidebar:"docs",previous:{title:"6. \u5916\u90e8\u53ef\u5bfb\u5740\u95ea\u5b58",permalink:"/4.18/zh-CN/docs/development/board-bring-up/how-to/06-flash-external-addressable"},next:{title:"8. \u786c\u4ef6\u52a0\u901f\u5668",permalink:"/4.18/zh-CN/docs/development/board-bring-up/how-to/08-hardware-acceleration"}},g=[{value:"\u52a8\u673a",id:"motivation",children:[],level:2},{value:"\u76ee\u6807",id:"goal",children:[{value:"\u9a8c\u8bc1",id:"verification",children:[],level:3}],level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",children:[],level:2},{value:"\u6267\u884c",id:"do",children:[{value:"\u4ee3\u7801",id:"code",children:[],level:3}],level:2}],v={toc:g};function y(e){var t,n=e,{components:l}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},v),p),i(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"motivation"}),"\u52a8\u673a"),(0,r.kt)("p",null,"\u4f7f\u7528\u975e\u5b58\u50a8\u5668\u6620\u5c04\u95ea\u5b58\uff08\u5982NAND Flash\uff09\u65f6\uff0c\u5fc5\u987b\u5f00\u53d1\u76f8\u5173\u9a71\u52a8\u7a0b\u5e8f\uff0c\u4ee5\u4fbfTouchGFX\u4f7f\u7528\u5176\u4e2d\u5b58\u50a8\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u4f7f\u7528\u975e\u5b58\u50a8\u5668\u6620\u5c04\u95ea\u5b58\u6765\u50a8\u5b58",(0,r.kt)("a",h({parentName:"p"},{href:"../../scenarios/using-non-memory-mapped-flash"}),"\u955c\u50cf"),"\u90e8\u5206\uff0c\u9605\u8bfb\u6709\u5173\u8be5\u4e3b\u9898\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,r.kt)(o.Z,{mdxType:"Note"},"\u5982\u679c\u4f60\u7684\u5f00\u53d1\u677f\u4e0d\u5e26\u4e0d\u53ef\u5bfb\u5740\u5916\u90e8\u95ea\u5b58\uff0c\u8bf7\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002"),(0,r.kt)("h2",h({},{id:"goal"}),"\u76ee\u6807"),(0,r.kt)("p",null,"\u6b64\u6b65\u7684\u76ee\u6807\u662f\u521b\u5efa\u4e00\u4e2a\u9a71\u52a8\u7a0b\u5e8f\uff0c\u57fa\u4e8e\u5b83\u53ef\u4ece\u975e\u6620\u5c04\u95ea\u5b58\u4e2d\u7684\u67d0\u4e2a\u4f4d\u7f6e\u8bfb\u53d6\u591a\u4e2a\u5b57\u8282\uff0c\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u6570\u7ec4\u4e2d\u3002"),(0,r.kt)("h3",h({},{id:"verification"}),"\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u672c\u8282\u7684\u9a8c\u8bc1\u70b9\u5305\u62ec\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u786e\u4fdd\u95ea\u5b58\u5185\u5bb9"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u786e\u4fdd\u4ece\u95ea\u5b58\u8bfb\u53d6\u7684\u5185\u5bb9\u6b63\u786e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u6027\u80fd"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u786e\u4fdd\u8bfb\u53d6\u6027\u80fd\u7b26\u5408MCU\u914d\u7f6e\u3002")))),(0,r.kt)("h2",h({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u5173\u95ea\u5b58\u7684\u4fe1\u606f\uff0c\u901a\u5e38\u6765\u81ea\u6570\u636e\u624b\u518c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u5173MCU\u548c\u5916\u90e8\u95ea\u5b58\u4e4b\u95f4\u7684\u8fde\u63a5\u7684\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u95ea\u5b58\u901f\u5ea6\u3002")),(0,r.kt)("h2",h({},{id:"do"}),"\u6267\u884c"),(0,r.kt)("p",null,"\u901a\u5e38\uff0cNAND Flash\u901a\u8fc7MCU\u4e0a\u7684FMC\u8fdb\u884c\u914d\u7f6e\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/nonmappedflash/cubemx-nand-fmc.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\u8bf7\u8bb0\u4f4f\u914d\u7f6e\u4e0e\u95ea\u5b58\u8fde\u63a5\u7684GPIO\u3002"),(0,r.kt)("p",null,"A non-memory-mapped QSPI flash is configured in STM32CubeMX like a memory-mapped QSPI flash."),(0,r.kt)("h3",h({},{id:"code"}),"\u4ee3\u7801"),(0,r.kt)("p",null,"\u7f16\u5199\u4ee3\u7801\u4ece\u95ea\u5b58\u7684\u7279\u5b9a\u5730\u5740\u8bfb\u53d6\u591a\u4e2a\u5b57\u8282\u7684\u4ee3\u7801\u3002 \u4e0b\u9762\u63d0\u4f9b\u4e86\u4e00\u4e2a\u793a\u4f8b\u3002 \u6839\u636e\u95ea\u5b58\u82af\u7247\u7ec4\u7ec7\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void readNonaddressableFlash(uint32_t from, uint8_t *into, uint32_t n)\n{\n  ...\n}\n\nuint8_t bytes[1000];\n\n//read external Flash\nreadNonaddressableFlash(0xab001212, bytes, 1000);\n")),(0,r.kt)("p",null,"\u6b64\u4ee3\u7801\u5c06\u7528\u4e8e\u5f00\u53d1TouchGFX\u62bd\u8c61\u5c42\u3002"))}y.isMDXComponent=!0}}]);