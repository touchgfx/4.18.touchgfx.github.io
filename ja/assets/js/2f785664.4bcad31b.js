"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8675],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=l,d=s["".concat(o,".").concat(m)]||s[m]||h[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:l,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),l=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,l.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),l=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=i},88678:function(e,t,r){var n=r(67294);class l extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=l},81609:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return y}});var n=r(3905),l=r(39130),a=r(29415),i=r(44035),c=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&m(e,r,t[r]);return e};const f={id:"engine-architecture",title:"\u30a8\u30f3\u30b8\u30f3\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"},k=void 0,g={unversionedId:"basic-concepts/engine-architecture",id:"basic-concepts/engine-architecture",title:"\u30a8\u30f3\u30b8\u30f3\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",description:"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3068\u306f\u3001\u8a70\u307e\u308b\u3068\u3053\u308d\u7269\u7406\u7684\u306a\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u4e0a\u306b\u4f55\u304b\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002 \u91cd\u8981\u306a\u306e\u306f\u9ad8\u901f\u3067\u3042\u308b\u3053\u3068\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/engine-architecture.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/engine-architecture",permalink:"/4.18/ja/docs/basic-concepts/engine-architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"engine-architecture",title:"\u30a8\u30f3\u30b8\u30f3\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"}},v={},y=[{value:"4\u3064\u306e\u4e3b\u8981\u90e8\u5206",id:"the-four-parts",level:2},{value:"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9",id:"mcu",level:3},{value:"RAM",id:"ram",level:3},{value:"Flash",id:"flash",level:3},{value:"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",id:"display",level:3},{value:"\u6027\u80fd",id:"performance",level:2},{value:"\u5168\u822c\u7684\u306a\u6226\u7565",id:"general-strategy",level:3},{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u56fa\u6709\u306e\u6226\u7565",id:"setup-specific-strategy",level:3}],b={toc:y};function w(e){var t,r=e,{components:c}=r,m=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&h.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),m),o(t,u({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3068\u306f\u3001\u8a70\u307e\u308b\u3068\u3053\u308d\u7269\u7406\u7684\u306a\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u4e0a\u306b\u4f55\u304b\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002 \u91cd\u8981\u306a\u306e\u306f\u9ad8\u901f\u3067\u3042\u308b\u3053\u3068\u3067\u3059\u3002")),(0,n.kt)("p",null,"\u7d44\u8fbc\u307f\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3068\u3044\u3046\u7528\u8a9e\u306f\u591a\u304f\u306e\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u307e\u305a\u3001\u7d44\u8fbc\u307f\u3068\u3044\u3046\u7528\u8a9e\u306f\u3001\u4eba\u306b\u3088\u3063\u3066\u3055\u307e\u3056\u307e\u306a\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u4e00\u90e8\u306e\u4eba\u306b\u3068\u3063\u3066\u3001\u7d44\u8fbc\u307f\u30b7\u30b9\u30c6\u30e0\u306f\u975e\u5e38\u306b\u4fe1\u983c\u3067\u304d\u308b\u65e7\u578b\u306e8\u30d3\u30c3\u30c8\uff65\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u304c\u306a\u304f\u3001\u4e8b\u5b9f\u4e0aRAM\u3001ROM\u3001\u307e\u305f\u306fGPIO\u3082\u642d\u8f09\u3057\u3066\u3044\u306a\u3044\u3082\u306e\u3067\u3059\u3002 \u4ed6\u306e\u4eba\u306b\u3068\u3063\u3066\u306f\u3001\u3059\u3079\u3066\u3092\u30ae\u30ac\u30d0\u30a4\u30c8\u3067\u642d\u8f09\u3059\u308b\u6700\u65b0\u306e\u30b9\u30de\u30fc\u30c8\uff65\u30d5\u30a9\u30f3\u3092\u610f\u5473\u3059\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"2\u3064\u76ee\u306b\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u3068\u3044\u3046\u7528\u8a9e\u306f\u3055\u307e\u3056\u307e\u306b\u89e3\u91c8\u3067\u304d\u307e\u3059\u3002 \u4e00\u90e8\u306e\u4eba\u306b\u3068\u3063\u3066\u306f\u3001\u304a\u6c17\u306b\u5165\u308a\u306e\u30da\u30a4\u30f3\u30c6\u30a3\u30f3\u30b0\uff65\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u81ea\u5206\u72ec\u81ea\u306e\u30d4\u30af\u30bb\u30eb\u3092\u63cf\u753b\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u3053\u308c\u3082\u5225\u306e\u4eba\u306b\u3068\u3063\u3066\u306f\u3001\u81ea\u5206\u306e\u30b2\u30fc\u30e0\u6a5f\u3067\u5b9f\u884c\u3055\u308c\u308b3D\u63cf\u753b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"TouchGFX\u306b\u304a\u3044\u3066\u3001\u7d44\u8fbc\u307f\u30b7\u30b9\u30c6\u30e0\u306fSTM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u30d9\u30fc\u30b9\u306b\u3057\u305f\u30b7\u30b9\u30c6\u30e0\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u3055\u3089\u306b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306f\u3001\u6bce\u79d260\u30d5\u30ec\u30fc\u30e0\u3067\u5b9f\u884c\u3055\u308c\u308b\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",d({},{id:"the-four-parts"}),"4\u3064\u306e\u4e3b\u8981\u90e8\u5206"),(0,n.kt)("p",null,"\u3053\u3046\u3057\u305f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\uff65\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e4\u3064\u306e\u4e3b\u8981\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u76f4\u63a5\u7684\u306b\u95a2\u4e0e\u3059\u308b\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002 \u3082\u3061\u308d\u3093\u7d44\u8fbc\u307f\u30b7\u30b9\u30c6\u30e0\u306b\u306f\u3001\u3082\u3063\u3068\u591a\u304f\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5b58\u5728\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u8868\u793a\u3068\u306e\u95a2\u4fc2\u6027\u306f\u4f4e\u3044\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/four-parts.svg",noShadow:"true",width:480,mdxType:"Figure"},"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3001RAM\u3001Flash\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"),(0,n.kt)("p",null,"\u624b\u77ed\u306b\u8a00\u3048\u3070\u3001TouchGFX\u306f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u4f7f\u7528\u3057\u3066\u3001Flash\u30e1\u30e2\u30ea\u306b\u3042\u308b\u30d1\u30fc\u30c4\u3092\u7d44\u307f\u7acb\u3066\u308b\u3053\u3068\u3067\u3001RAM\u5185\u306b\u753b\u50cf\u3092\u4f5c\u6210\u304a\u3088\u3073\u66f4\u65b0\u3057\u307e\u3059\u3002 \u7d44\u307f\u7acb\u3066\u3089\u308c\u305f\u753b\u50cf\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u8ee2\u9001\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30bb\u30b9\u304c\u3001\u53ef\u80fd\u304b\u3064\u5fc5\u8981\u306a\u3060\u3051\u7e70\u308a\u8fd4\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("h3",d({},{id:"mcu"}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9"),(0,n.kt)("p",null,"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306f\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u306e\u56f0\u96e3\u306a\u90e8\u5206\u3092\u3059\u3079\u3066\u62c5\u3044\u307e\u3059\u3002 Flash\u5185\u306e\u753b\u50cf\u3092\u8aad\u307f\u53d6\u308a\u3001RAM\u306b\u66f8\u304d\u8fbc\u307f\u307e\u3059\u3002 \u534a\u900f\u660e\u306e\u8d64\u8272\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u753b\u50cf\u306b\u30de\u30fc\u30b8\u3059\u308b\u3068\u304d\u306b\u7d50\u679c\u306e\u8272\u3092\u8a08\u7b97\u3057\u3001\u3053\u308c\u3089\u3092RAM\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002 \u5186\u306e\u3059\u3079\u3066\u306e\u30d4\u30af\u30bb\u30eb\u3092\u63cf\u753b\u3057\u3066RAM\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002 \u4ee5\u4e0b\u540c\u69d8\u3067\u3059\u3002"),(0,n.kt)("p",null,"STM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u306f\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306e\u5b9f\u73fe\u306b\u5f79\u7acb\u3064\u56fa\u6709\u306e\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002 \u3055\u307e\u3056\u307e\u306a\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)("a",d({parentName:"p"},{href:"../development/hardware-selection/hardware-components/hardware-selection-mcu"}),"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h3",d({},{id:"ram"}),"RAM"),(0,n.kt)("p",null,"RAM\u306b\u306f\u8a08\u7b97\u5f8c\u306e\u753b\u50cf\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002 \u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306fRAM\u306b\u5bfe\u3057\u3066\u8aad\u53d6\u308a / \u66f8\u8fbc\u307f\u3092\u884c\u3044\u307e\u3059\u3002 \u3055\u3089\u306b\u3001\u7d50\u679c\u306e\u753b\u50cf\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3059\u308b\u3068\u304d\u306b\u3001\u518d\u5ea6\u8aad\u307f\u53d6\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u591a\u304f\u306e\u5834\u5408\u3001RAM\u306f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u5185\u90e8\u306b\u3042\u308a\u307e\u3059\u3002 \u7d50\u679c\u306e\u753b\u50cf\u3092\u5185\u90e8RAM\u306b\u4fdd\u6301\u3059\u308b\u3053\u3068\u304c\u96e3\u3057\u3044\u5834\u5408\u306b\u306f\u3001\u5916\u90e8RAM\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",d({},{id:"flash"}),"Flash"),(0,n.kt)("p",null,"Flash\u306b\u306f\u3059\u3079\u3066\u306e\u9759\u7684\u30c7\u30fc\u30bf\u304c\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002 \u753b\u50cf\u3001\u30d5\u30a9\u30f3\u30c8\u3001\u304a\u3088\u3073\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002 Flash\u306f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u3088\u3063\u3066\u8aad\u307f\u53d6\u3089\u308c\u3001\u305d\u306e\u5185\u5bb9\u304cRAM\u306b\u66f8\u304d\u8fbc\u307e\u308c\u305f\u308a\u7d50\u5408\u3055\u308c\u305f\u308a\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u5916\u90e8Flash\u304c\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a2\u30bb\u30c3\u30c8\u3092\u4fdd\u6301\u3067\u304d\u308b\u307b\u3069\u306e\u5bb9\u91cf\u3092\u3001\u5185\u90e8Flash\u304c\u5099\u3048\u3066\u3044\u308b\u3053\u3068\u306f\u307b\u3068\u3093\u3069\u306a\u3044\u304b\u3089\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u7406\u8ad6\u4e0a\u3001Flash\u306f\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\u306a\u306e\u3067\u3001\u30d4\u30af\u30bb\u30eb\u3092Flash\u304b\u3089\u76f4\u63a5\u8aad\u307f\u53d6\u308a\u3001RAM\u306b\u66f8\u304d\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306b\u306f\u3001Flash\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092RAM\u306b\u30d0\u30c3\u30d5\u30a1\u30ea\u30f3\u30b0\u3057\u3001\u305d\u3053\u304b\u3089\u8aad\u307f\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h3",d({},{id:"display"}),"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"),(0,n.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306f\u3001\u753b\u50cf\u304c\u4eba\u306e\u76ee\u306e\u524d\u306b\u5b9f\u969b\u306b\u8868\u793a\u3055\u308c\u308b\u5834\u6240\u3067\u3059\u3002"),(0,n.kt)("p",null,"RAM\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u8a08\u7b97\u3055\u308c\u305f\u753b\u50cf\uff08\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff09\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u3088\u308a\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u4e00\u5b9a\u9593\u9694\u3067\u8ee2\u9001\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("h2",d({},{id:"performance"}),"\u6027\u80fd"),(0,n.kt)("p",null,"\u3053\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u3001\u6700\u7d42\u7684\u306b\u306f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u4e0a\u3067\u30b9\u30e0\u30fc\u30ba\u306a\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u73fe\u3059\u308b\u306b\u306f\u3001\u7d44\u8fbc\u307f\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306e\u5b9f\u884c\u6642\u306b\u3044\u304f\u3064\u304b\u6ce8\u610f\u3059\u3079\u304d\u70b9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",d({},{id:"general-strategy"}),"\u5168\u822c\u7684\u306a\u6226\u7565"),(0,n.kt)("p",null,"\u5e38\u306b\u8003\u616e\u3059\u3079\u304d\u3044\u304f\u3064\u304b\u306e\u4e00\u822c\u7684\u306a\u6ce8\u610f\u70b9\u3092\u6b21\u306b\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5909\u66f4\u306e\u306a\u3044\u5bfe\u8c61\u306e\u63cf\u753b\u306b\u6642\u9593\u3092\u304b\u3051\u306a\u3044\u3053\u3068"),(0,n.kt)("li",{parentName:"ul"},"Flash\u304b\u3089RAM\u3078\u306e\u8ee2\u9001\u91cf\u3092\u3067\u304d\u308b\u9650\u308a\u5c11\u306a\u304f\u3059\u308b\u3053\u3068"),(0,n.kt)("li",{parentName:"ul"},"RAM\u304b\u3089\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u306e\u8ee2\u9001\u91cf\u3092\u3067\u304d\u308b\u9650\u308a\u5c11\u306a\u304f\u3059\u308b\u3053\u3068"),(0,n.kt)("li",{parentName:"ul"},"\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u306e\u54c1\u8cea\u3068\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u901f\u5ea6\u306e\u9069\u5207\u306a\u30d0\u30e9\u30f3\u30b9\u3092\u898b\u3064\u3051\u308b\u3053\u3068"),(0,n.kt)("li",{parentName:"ul"},"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u6a5f\u80fd\u3092\u6d3b\u7528\u3059\u308b\u3053\u3068")),(0,n.kt)("p",null,"TouchGFX\u30a8\u30f3\u30b8\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u3053\u3046\u3057\u305f\u70b9\u306b\u3059\u3079\u3066\u5bfe\u51e6\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u305d\u308c\u3067\u3082\u958b\u767a\u8005\u306f\u6ce8\u610f\u3092\u6255\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",d({},{id:"setup-specific-strategy"}),"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u56fa\u6709\u306e\u6226\u7565"),(0,n.kt)("p",null,"\u81a8\u5927\u306a\u6570\u306e\u7d44\u8fbc\u307f\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u304c\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u306f\u3001\u5b9f\u73fe\u53ef\u80fd\u306a\u5185\u5bb9\u304c\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u3088\u3063\u3066\u5927\u304d\u304f\u7570\u306a\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u53ef\u80fd\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306e\u5927\u307e\u304b\u306a\u6982\u8981\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"STM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u30af\u30ed\u30c3\u30af\uff65\u30ec\u30fc\u30c8: 50 MHz\uff5e500 MHz"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u306a\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u95a2\u9023IP\u306e\u7bc4\u56f2: Chrom-ART\u3001Chrom-GRC\u3001JPEG\u30b3\u30fc\u30c7\u30c3\u30af\u306a\u3069"))),(0,n.kt)("li",{parentName:"ul"},"RAM",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5185\u90e8: 0\uff5e1 MB"),(0,n.kt)("li",{parentName:"ul"},"\u5916\u90e8: 0\uff5e100 MB"))),(0,n.kt)("li",{parentName:"ul"},"Flash",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5185\u90e8: 0\uff5e1 MB"),(0,n.kt)("li",{parentName:"ul"},"\u5916\u90e8: 0\uff5e1 GB"))),(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1\uff5e24\u30d3\u30c3\u30c8\uff65\u30ab\u30e9\u30fc"),(0,n.kt)("li",{parentName:"ul"},"100x100\uff5e1000x1000\u30d4\u30af\u30bb\u30eb")))),(0,n.kt)("p",null,"1\u3064\u306e\u53ef\u80fd\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u4e0a\u3067\u5b9f\u73fe\u53ef\u80fd\u306aUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u3001\u5225\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u4e0a\u3067\u5b9f\u73fe\u53ef\u80fd\u306a\u3082\u306e\u3068\u307e\u3063\u305f\u304f\u7570\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u306e\u306f\u660e\u3089\u304b\u3067\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u76ee\u7684\u306eUI\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u969b\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u5272\u308a\u5f53\u3066\u308b\u969b\u306b\u306f\u3001\u7d30\u5fc3\u306e\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,n.kt)("p",null,"TouchGFX\u306f\u3053\u308c\u3089\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u5411\u3051\u306b\u57fa\u790e\u304b\u3089\u5b8c\u5168\u306b\u8a2d\u8a08\u3055\u308c\u3066\u304a\u308a\u3001STM32\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u6a5f\u80fd\u3092\u6700\u5927\u9650\u306b\u5f15\u304d\u51fa\u3057\u3001\u5fc5\u8981\u306aRAM\u3068Flash\u306e\u91cf\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u308b\u3053\u3068\u306b\u91cd\u70b9\u3092\u7f6e\u3044\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)(l.Z,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32-bit Arm Cortex MCUs"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("li",null,"\u9078\u629e\u53ef\u80fd\u306a\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("li",null,"\u9078\u629e\u53ef\u80fd\u306a\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("li",null,"\u9078\u629e\u53ef\u80fd\u306a\u30e1\u30e2\u30ea\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)(l.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"\u5916\u90e8\u30e1\u30e2\u30ea"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}w.isMDXComponent=!0}}]);