(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3686],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){"use strict";var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){"use strict";var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=a},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},47427:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return v},default:function(){return k}});var r=n(3905),o=n(44035),i=n(93054),a=n(22425),c=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&m(e,n,t[n]);return e};const f={id:"10-physical-buttons",title:"10. \u7269\u7406\u30dc\u30bf\u30f3",sidebar_label:"10. \u7269\u7406\u30dc\u30bf\u30f3"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/10-physical-buttons",id:"development/board-bring-up/how-to/10-physical-buttons",isDocsHomePage:!1,title:"10. \u7269\u7406\u30dc\u30bf\u30f3",description:"\u52d5\u6a5f",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/10-physical-buttons.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/10-physical-buttons",permalink:"/4.18/ja/docs/development/board-bring-up/how-to/10-physical-buttons",version:"current",sidebarPosition:10,frontMatter:{id:"10-physical-buttons",title:"10. \u7269\u7406\u30dc\u30bf\u30f3",sidebar_label:"10. \u7269\u7406\u30dc\u30bf\u30f3"},sidebar:"docs",previous:{title:"9. \u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9",permalink:"/4.18/ja/docs/development/board-bring-up/how-to/09-touch-controller"},next:{title:"11. Flash\u30ed\u30fc\u30c0",permalink:"/4.18/ja/docs/development/board-bring-up/how-to/11-flash-loader"}},v=[{value:"\u52d5\u6a5f",id:"motivation",children:[]},{value:"\u76ee\u6a19",id:"goal",children:[{value:"\u691c\u8a3c",id:"verification",children:[]}]},{value:"\u524d\u63d0\u6761\u4ef6",id:"prerequisites",children:[]},{value:"\u4f5c\u696d\u5185\u5bb9",id:"do",children:[{value:"\u671f\u5f85\u901a\u308a\u306e\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068",id:"performance-is-as-expected",children:[]}]}],y={toc:v};function k(e){var t,n=e,{components:c}=n,m=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),m),l(t,u({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"motivation"}),"\u52d5\u6a5f"),(0,r.kt)("p",null,"\u7269\u7406\u30dc\u30bf\u30f3\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u4e2d\u306bTouchGFX Designer\u304b\u3089\u306e\u30c8\u30ea\u30ac\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u5916\u90e8\u30a4\u30d9\u30f3\u30c8\u3068\u3057\u3066\u6a5f\u80fd\u3057\u305f\u308a\u3001\u5358\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u30a4\u30d9\u30f3\u30c8\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"Note"},"\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u306b\u7269\u7406\u30dc\u30bf\u30f3\u304c\u95a2\u4fc2\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",h({},{id:"goal"}),"\u76ee\u6a19"),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u76ee\u6a19\u306f\u3001\u5f8c\u7d9a\u306eTouchGFX HAL\u3084\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u3067\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30fc\u30c9\u3092\u958b\u767a\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("h3",h({},{id:"verification"}),"\u691c\u8a3c"),(0,r.kt)("p",null,"\u6b21\u306e\u8868\u306b\u3001\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u691c\u8a3c\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u63a5\u7d9a\u3055\u308c\u305f\u7269\u7406\u30dc\u30bf\u30f3\u306e\u72b6\u614b\u3092\u8aad\u307f\u51fa\u305b\u308b\u3088\u3046\u306b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306eGPIO\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u63a5\u7d9a\u3055\u308c\u305fGPIO\u3092\u8aad\u307f\u51fa\u305b\u308b"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"GPIO\u304b\u3089\u7269\u7406\u30dc\u30bf\u30f3\u306e\u72b6\u614b\u3092\u8aad\u307f\u51fa\u3059\u30b3\u30fc\u30c9\u304c\u958b\u767a\u3055\u308c\u308b\u3068\u3001\u305d\u308c\u3092\u5f8c\u7d9a\u306eTouchGFX HAL\u306e\u958b\u767a\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u671f\u5f85\u3055\u308c\u308b\u8aad\u51fa\u3057\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u30dd\u30fc\u30ea\u30f3\u30b0\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u9593\u306b\u542b\u307e\u308c\u307e\u3059\u3002 \u30dd\u30fc\u30ea\u30f3\u30b0\u306b\u9577\u6642\u9593\u3092\u8981\u3059\u308b\u5834\u5408\u306f\u3001\u5225\u306e\u30b9\u30ec\u30c3\u30c9\u306b\u79fb\u52d5\u3059\u308b\u304b\u3001\u5272\u8fbc\u307f\u306b\u57fa\u3065\u304f\u52d5\u4f5c\u306b\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")))),(0,r.kt)("h2",h({},{id:"prerequisites"}),"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7269\u7406\u30dc\u30bf\u30f3\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306eGPIO\u306b\u63a5\u7d9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059")),(0,r.kt)("h2",h({},{id:"do"}),"\u4f5c\u696d\u5185\u5bb9"),(0,r.kt)("p",null,"\u4e0b\u56f3\u306f\u3001\u7269\u7406\u30dc\u30bf\u30f3\u306e\u56de\u8def\u56f3\u304a\u3088\u3073\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3068\u306e\u63a5\u7d9a\u306e\u56de\u8def\u56f3\u3067\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-userbutton.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-mcu.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"In STM32CubeMX GPIO Port C Pin 13 (PC13) can be configured as an input and configured as a pull-down in the ",(0,r.kt)("strong",{parentName:"p"},"GPIO")," section of the ",(0,r.kt)("strong",{parentName:"p"},"System Core")," category."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-pc13.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-gpioconf.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"The code generated by STM32CubeMX will setup the appropriate GPIO port(s) which can now be read:"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint8_t key;\nif (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n{\n    key = 1;\n}\n")),(0,r.kt)("h3",h({},{id:"performance-is-as-expected"}),"\u671f\u5f85\u901a\u308a\u306e\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068"),(0,r.kt)("p",null,"TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u540c\u3058\u30b9\u30ec\u30c3\u30c9\u3067\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u30011ms\u4ee5\u5185\u306b\u7269\u7406\u30dc\u30bf\u30f3\u306e\u72b6\u614b\u3092\u30dd\u30fc\u30ea\u30f3\u30b0\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u901f\u5ea6\u304c\u4e0d\u8db3\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u5f8c\u306e\u6bb5\u968e\u3067\u3001\u30b3\u30fc\u30c9\u3092\u72ec\u7acb\u3057\u305f\u30bf\u30b9\u30af\u306b\u79fb\u52d5\u3059\u308b\u304b\u3001\u5272\u8fbc\u307f\u306b\u57fa\u3065\u304f\u52d5\u4f5c\u306b\u5909\u66f4\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}k.isMDXComponent=!0}}]);