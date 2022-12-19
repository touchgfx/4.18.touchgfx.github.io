"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2337],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(n),g=o,m=p["".concat(u,".").concat(g)]||p[g]||h[g]||c;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=g;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const c=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:c},this.props.children)}}t.Z=i},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,c=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:c,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:c,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},82985:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=o},66147:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return T},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(44035),c=n(70814),i=n(82985),a=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&g(e,n,t[n]);if(s)for(var n of s(t))h.call(t,n)&&g(e,n,t[n]);return e};const f={id:"updating-to-a-new-touchgfx-version",title:"\u65b0\u3057\u3044TouchGFX\u30d0\u30fc\u30b8\u30e7\u30f3\u3078\u306e\u66f4\u65b0"},d=void 0,v={unversionedId:"miscellaneous/updating-to-a-new-touchgfx-version",id:"miscellaneous/updating-to-a-new-touchgfx-version",title:"\u65b0\u3057\u3044TouchGFX\u30d0\u30fc\u30b8\u30e7\u30f3\u3078\u306e\u66f4\u65b0",description:"TouchGFX Designer\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3068\u3001\u305d\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3057\u305fTouchGFX\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u540c\u3058\u30d0\u30fc\u30b8\u30e7\u30f3\u306e.touchgfx\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3055\u3089\u306b\u958b\u767a\u3059\u308b\u305f\u3081\u306b\u3001\u305d\u306e\u7279\u5b9a\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306eTouchGFX\u3057\u304b\u4f7f\u7528\u3067\u304d\u306a\u3044\u3068\u3044\u3046\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/miscellaneous/updating-to-a-new-touchgfx-version.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/updating-to-a-new-touchgfx-version",permalink:"/4.18/ja/docs/miscellaneous/updating-to-a-new-touchgfx-version",draft:!1,tags:[],version:"current",frontMatter:{id:"updating-to-a-new-touchgfx-version",title:"\u65b0\u3057\u3044TouchGFX\u30d0\u30fc\u30b8\u30e7\u30f3\u3078\u306e\u66f4\u65b0"},sidebar:"docs",previous:{title:"STM32CubeMX\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3078\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u8ffd\u52a0",permalink:"/4.18/ja/docs/development/scenarios/adding-files-to-stm32cubemx-projet"},next:{title:"\u30d8\u30eb\u30d7\u60c5\u5831",permalink:"/4.18/ja/docs/miscellaneous/getting-help"}},b={},y=[{value:"TouchGFX Generator\u306e\u66f4\u65b0",id:"update-touchgfx-generator",level:2}],x={toc:y};function T(e){var t,n=e,{components:a}=n,g=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},x),g),u(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX Designer\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3068\u3001\u305d\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3057\u305fTouchGFX\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u540c\u3058\u30d0\u30fc\u30b8\u30e7\u30f3\u306e.touchgfx\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3055\u3089\u306b\u958b\u767a\u3059\u308b\u305f\u3081\u306b\u3001\u305d\u306e\u7279\u5b9a\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306eTouchGFX\u3057\u304b\u4f7f\u7528\u3067\u304d\u306a\u3044\u3068\u3044\u3046\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"TouchGFX\u306f\u5f8c\u65b9\u4e92\u63db\u6027\u3092\u6301\u3064\u8a2d\u8a08\u306b\u306a\u3063\u3066\u304a\u308a\u3001\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u975e\u5e38\u306b\u7c21\u5358\u306a\u624b\u9806\u306b\u3088\u308a\u53e4\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306eTouchGFX\u3067\u3001\u52d5\u4f5c\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5358\u7d14\u306b\u65b0\u3057\u304f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u306eTouchGFX Designer\u3092\u958b\u304d\u3001\u6700\u8fd1\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u307e\u305f\u306fOpen\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u4ecb\u3057\u3066\u3001\u53e4\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u3044\u3066\u307f\u307e\u3059\u3002 \u6b21\u306e\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/updating-to-a-new-touchgfx-version/update-popup-4-17.webp",mdxType:"Figure"},"\u66f4\u65b0\u306e\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7"),(0,r.kt)(c.Z,{mdxType:"Caution"},"\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u306b\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30bf\u306e\u5b9f\u884c\u524d\u306b\u306f\u3001\u5fc5\u305a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"'Yes'\u3092\u62bc\u3059\u3068\u3001\u30a2\u30c3\u30d7\u30c7\u30fc\u30bf\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002 \u5b8c\u4e86\u5f8c\u3001TouchGFX Designer\u3067\u901a\u5e38\u3069\u304a\u308a\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u958b\u304d\u3001\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3054\u304f\u7a00\u306b\u3001\u65b0\u3057\u3044TouchGFX\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5b8c\u5168\u66f4\u65b0\u3059\u308b\u305f\u3081\u3001\u4f55\u3089\u304b\u306e\u624b\u52d5\u306e\u5909\u66f4\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u884c\u3046\u5fc5\u8981\u304c\u751f\u3058\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u66f4\u65b0\u3059\u308b\u4e0a\u3067\u3055\u3089\u306b\u554f\u984c\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306b\u306f\u3001",(0,r.kt)("a",m({parentName:"p"},{href:"known-issues"}),"\u300c\u65e2\u77e5\u306e\u554f\u984c\u300d\u30bb\u30af\u30b7\u30e7\u30f3"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",m({},{id:"update-touchgfx-generator"}),"TouchGFX Generator\u306e\u66f4\u65b0"),(0,r.kt)("p",null,"\u300c",(0,r.kt)("a",m({parentName:"p"},{href:"../introduction/installation#installing-touchgfx-generator-in-stm32cubemx"}),"STM32CubeMX\u3067\u306eTouchGFX Generator\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),"\u300d\u306e\u8a18\u8ff0\u306b\u5f93\u3063\u3066\u3001STM32CubeMX 6.2.1\u4ee5\u964d\u306bX-Cube-TouchGFX-4.17.0\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u5f8c\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304d\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Software Packs")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Select Components"),"\u306e\u9806\u306b\u79fb\u52d5\u3057\u307e\u3059\uff08\u307e\u305f\u306f ",(0,r.kt)(i.Z,{mdxType:"Shortcut"},"Alt + U"),"\u3092\u62bc\u3057\u307e\u3059\uff09\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx.webp",mdxType:"Figure"},"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30fb\u30d1\u30c3\u30af\u30fb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30fb\u30bb\u30ec\u30af\u30bf"),(0,r.kt)("p",null,"details and warnings\u30da\u30a4\u30f3\u3067\u3001\u79fb\u884c\u5148\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3057\u3066try\u3092\u62bc\u3057\u307e\u3059\u3002 STM32CubeMX\u304c\u72b6\u6cc1\u3092\u793a\u3057\u306a\u304c\u3089\u79fb\u884c\u3092\u884c\u3044\u3001\u7d50\u679c\u304c\u793a\u3055\u308c\u307e\u3059\u3002\u4e00\u90e8\u306eRefParameter\u306f\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u79fb\u884c\u3067\u304d\u306a\u3044\u306e\u3067\u3001null\u5024\u3068\u3057\u3066\u8868\u793a\u3055\u308c\u307e\u3059\u3002 Accept\u3092\u9078\u629e\u3057\u3066\u79fb\u884c\u3092\u4fdd\u5b58\u3057\u3001\u3055\u3089\u306bOK\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001Software Pack Component Selector\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u9589\u3058\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx-migrate-to.webp",mdxType:"Figure"},"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30fb\u30d1\u30c3\u30af\u30fb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30fb\u30bb\u30ec\u30af\u30bf\uff1a TouchGFX Generator\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u79fb\u884c"),(0,r.kt)("p",null,"\u3053\u308c\u3067TouchGFX Generator\u304c\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u79fb\u884c\u3055\u308c\u3001\u5909\u66f4\u5185\u5bb9\u304c.ioc\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f\u3002 STM32CubeMX\u3067\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b\u524d\u306b\u3001TouchGFX Generator\u306e\u8a2d\u5b9a\u3092\u691c\u8a3c\u3057\u3066\u304f\u3060\u3055\u3044\u3002 STM32CubeMX\u3067\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u305f\u5f8c\u3001TouchGFX Designer\u3092\u958b\u304d\u3001UI\u3092\u691c\u8a3c\u3057\u305f\u5f8c\u3067\u3001TouchGFX Designer\u304b\u3089\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)(c.Z,{mdxType:"Caution"},(0,r.kt)("li",null,"\u3053\u306e\u79fb\u884c\u3067\u306f\u30012\u30b9\u30c6\u30c3\u30d7\u306e\u30d7\u30ed\u30bb\u30b9\u306b\u3088\u3063\u3066TouchGFX\u3092\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u66f4\u65b0\u3057\u307e\u3059\u3002 STM32CubeMX\u3068TouchGFX Designer\u306e\u4e21\u65b9\u304b\u3089\u306e\u30b3\u30fc\u30c9\u751f\u6210\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,r.kt)("li",null,"TouchGFX Generator\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u305fC++\u30b3\u30fc\u30c9\u304c\u3001STM32CubeMX\u306eGenerate Code\u30dc\u30bf\u30f3\u304c\u62bc\u3055\u308c\u305f\u5f8c\u3001\u6700\u521d\u306b\u30c7\u30a3\u30b9\u30af\u306b\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002")))}T.isMDXComponent=!0}}]);