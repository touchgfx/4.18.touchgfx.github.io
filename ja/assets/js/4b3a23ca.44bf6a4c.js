"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5445],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),h=a,s=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(s,l(l({ref:t},p),{},{components:r})):n.createElement(s,l({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children))}},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},37793:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},36134:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var n=r(3905),a=r(44035),o=r(93054),l=r(37793),i=r(22425),c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&s(e,r,t[r]);if(u)for(var r of u(t))h.call(t,r)&&s(e,r,t[r]);return e};const f={id:"08-hardware-acceleration",title:"8. \u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf",sidebar_label:"8. \u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf"},b=void 0,v={unversionedId:"development/board-bring-up/how-to/08-hardware-acceleration",id:"development/board-bring-up/how-to/08-hardware-acceleration",title:"8. \u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf",description:"\u52d5\u6a5f",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/08-hardware-acceleration.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/08-hardware-acceleration",permalink:"/4.18/ja/docs/development/board-bring-up/how-to/08-hardware-acceleration",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"08-hardware-acceleration",title:"8. \u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf",sidebar_label:"8. \u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf"},sidebar:"docs",previous:{title:"7. \u5916\u90e8Flash\uff08\u975e\u30e1\u30e2\u30ea\uff65\u30de\u30c3\u30d7\u30c9\uff65\u30e2\u30fc\u30c9\uff09",permalink:"/4.18/ja/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"},next:{title:"9. \u30bf\u30c3\u30c1\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9",permalink:"/4.18/ja/docs/development/board-bring-up/how-to/09-touch-controller"}},k={},y=[{value:"\u52d5\u6a5f",id:"motivation",level:2},{value:"\u76ee\u6a19",id:"goal",level:2},{value:"\u691c\u8a3c",id:"verification",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"prerequisites",level:2},{value:"\u4f5c\u696d\u5185\u5bb9",id:"do",level:2},{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea\u3078\u306e\u66f8\u8fbc\u307f",id:"write-to-framebuffer-memory",level:3},{value:"\u671f\u5f85\u901a\u308a\u306e\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068",id:"performance-is-as-expected",level:3}],C={toc:y};function w(e){var t,r=e,{components:c}=r,s=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&h.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=g(g({},C),s),d(t,p({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("h2",g({},{id:"motivation"}),"\u52d5\u6a5f"),(0,n.kt)("p",null,"Chrom-ART(DMA2D) \u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf\u306f\u3001\u753b\u50cf\u30c7\u30fc\u30bf\u306e\u5404\u90e8\u5206\u3092\u30e1\u30e2\u30ea\u304b\u3089\u8ee2\u9001\u3057\u3001\u3053\u308c\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u4e0a\u306b\u63cf\u753b\u307e\u305f\u306f\u69cb\u6210\u3067\u304d\u307e\u3059\u3002 Chrom-ART\u306f\u5185\u90e8\u307e\u305f\u306f\u5916\u90e8\u306e\u30e1\u30e2\u30ea\u304b\u3089\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u51fa\u305b\u307e\u3059\u3002 \u540c\u69d8\u306b\u3001\u5185\u90e8\u307e\u305f\u306f\u5916\u90e8\u306e\u30e1\u30e2\u30ea\u3078\u306e\u66f8\u8fbc\u307f\u3082\u884c\u3044\u307e\u3059\u3002 \u3053\u308c\u306f\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u51e6\u7406\u306b\u5229\u7528\u3067\u304d\u3001\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u6027\u80fd\u3092\u5927\u5e45\u306b\u5411\u4e0a\u3055\u305b\u308b\u3068\u540c\u6642\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u308b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u4f7f\u7528\u3092\u5927\u5e45\u306b\u7e2e\u5c0f\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"STM32\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u591a\u304f\u304cChrom-ART\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30bf\u3092\u642d\u8f09\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u3059\u3079\u3066\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u30c7\u30fc\u30bf\u30b7\u30fc\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002 DMA2D\u306f\u3001Chrom-ART\u306e\u30b3\u30fc\u30c9\u540d\u3067\u3001\u30b3\u30fc\u30c9\u3084\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u4f7f\u308f\u308c\u307e\u3059\u3002"),(0,n.kt)(o.Z,{mdxType:"Note"},"\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u306bChrom-ART\u306b\u3088\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30a2\u30af\u30bb\u30e9\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u95a2\u4fc2\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",g({},{id:"goal"}),"\u76ee\u6a19"),(0,n.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u76ee\u6a19\u306f\u3001Chrom-ART\u3092\u6709\u52b9\u5316\u3057\u3001\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u30c7\u30fc\u30bf\u306e\u8aad\u51fa\u3057 / \u66f8\u8fbc\u307f\u3092\u884c\u3046\u3053\u3068\u3067\u3059\u3002 \u76ee\u6a19\u306f\u3001Chrom-ART\u30c1\u30c3\u30d7\u306e\u6a5f\u80fd\u306e\u691c\u8a3c\u3067\u306f",(0,n.kt)("strong",{parentName:"p"},"\u306a\u304f"),"\u3001Chrom-ART\u306e\u89b3\u70b9\u304b\u3089\u30e1\u30e2\u30ea\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u6a5f\u80fd\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,n.kt)("h3",g({},{id:"verification"}),"\u691c\u8a3c"),(0,n.kt)("p",null,"\u6b21\u306e\u8868\u306b\u3001\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8\u3092\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null}),"\u691c\u8a3c\u30dd\u30a4\u30f3\u30c8"),(0,n.kt)("th",g({parentName:"tr"},{align:null}),"\u691c\u8a3c\u5185\u5bb9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u3092\u4f7f\u7528\u3057\u3066\u76ee\u7684\u3068\u3059\u308b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u63cf\u753b\u3067\u304d\u308b\u3053\u3068\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u304c\u30e1\u30e2\u30ea\u3092\u8aad\u307f\u51fa\u305b\u308b"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u3092\u4f7f\u7528\u3057\u3066\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u63cf\u753b\u3067\u304d\u308b\u3053\u3068(M2M)\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u304c\u30e1\u30e2\u30ea\u306b\u66f8\u304d\u8fbc\u3081\u308b"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u3092\u4f7f\u7528\u3057\u3066\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u63cf\u753b\u3067\u304d\u308b\u3053\u3068(M2M\u3068R2M)\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u306e\u6027\u80fd"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Chrom-ART\u304c\u76ee\u7684\u3068\u3059\u308b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u6027\u80fd\u3092\u9054\u6210\u3059\u308b\u3053\u3068\u3002")))),(0,n.kt)("h2",g({},{id:"prerequisites"}),"\u524d\u63d0\u6761\u4ef6"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306b\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u306e\u524d\u63d0\u6761\u4ef6\u3092\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chrom-ART\u3092\u642d\u8f09\u3057\u305f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9")),(0,n.kt)("h2",g({},{id:"do"}),"\u4f5c\u696d\u5185\u5bb9"),(0,n.kt)("p",null,"Chrom-ART\u306f\u3001STM32CubeMX\u306e\uff3bMultimedia\uff3d>\uff3bDMA2D\uff3d\u30ab\u30c6\u30b4\u30ea\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002 DMA2D\u3092\u6709\u52b9\u5316\u3057\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u5fdc\u3058\u3066\uff3bTransfer Mode\uff3d\uff3bColor Mode\uff3d\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u4e0b\u56f3\u3067\u306f\u3001DMA2D\u304c\u6709\u52b9\u5316\u3055\u308c\u3001\uff3bTransfer Mode\uff3d\u3068\u3057\u3066\uff3bMemory to Memory\uff3d\u3001\uff3bColor Mode\uff3d\u3068\u3057\u3066\uff3bRGB565\uff3d\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30ab\u30e9\u30fc\uff65\u30e2\u30fc\u30c9\u306f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u5bfe\u5fdc\u3057\u305f\u3082\u306e\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-dma2d.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Chrom-ART\u306e\u8a2d\u5b9a"),(0,n.kt)("p",null,"TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30a2\u30af\u30bb\u30b9\u306e\u540c\u671f\u306b\u3001DMA2D\u30b0\u30ed\u30fc\u30d0\u30eb\u5272\u8fbc\u307f\u304c\u91cd\u8981\u306a\u5f79\u5272\u3092\u679c\u305f\u3057\u307e\u3059\u3002 \u4e0b\u56f3\u306e\u3088\u3046\u306b\u3001STM32CubeMX\u306eNVIC\u8a2d\u5b9a\u3067\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5272\u8fbc\u307f\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u308b\u3053\u3068(\uff3bNVIC\uff3d\u30bf\u30d6)\u3001\u5272\u8fbc\u307f\u30cf\u30f3\u30c9\u30e9\u306e\u30b3\u30fc\u30c9\u751f\u6210\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u308b\u3053\u3068(\uff3bCode Generation\uff3d\u30bf\u30d6) \u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002 \u3053\u306e\u6bb5\u968e\u3067\u306f\u3001\u512a\u5148\u5ea6\u306f\u91cd\u8981\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Chrom-ART\u5272\u8fbc\u307f\u306e\u6709\u52b9\u5316"),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d-codegen.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Chrom-ART\u5272\u8fbc\u307f\u30cf\u30f3\u30c9\u30e9\u306e\u30b3\u30fc\u30c9\u751f\u6210\u306e\u6709\u52b9\u5316"),(0,n.kt)("h3",g({},{id:"write-to-framebuffer-memory"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea\u3078\u306e\u66f8\u8fbc\u307f"),(0,n.kt)("p",null,"\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30e1\u30e2\u30ea\u5185(\u30ec\u30b8\u30b9\u30bf\u304b\u3089\u30e1\u30e2\u30ea) \u306e\u77e9\u5f62\u3092\u7279\u5b9a\u306e\u8272\u3067\u5857\u308a\u3064\u3076\u3059\u30b3\u30fc\u30c9\u306e\u6982\u8981\u3092\u793a\u3057\u307e\u3059\u3002 \u4f7f\u7528\u3059\u308b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u5177\u4f53\u7684\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306fSTM32Cube\u30d5\u30a1\u30fc\u30e0\u30a6\u30a7\u30a2\uff65\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),'#include "stm32f7xx_hal.h"\n#include "stm32f7xx_hal_dma2d.h"\n...\n\nuint32_t color = 0xF800; //Red in RGB565\n\nhdma2d.Init.Mode = DMA2D_R2M;\nhdma2d.Init.ColorMode = DMA2D_RGB565;\n\nMODIFY_REG(hdma2d.Instance->CR, DMA2D_CR_MODE, DMA2D_R2M);\nMODIFY_REG(hdma2d.Instance->OPFCCR, DMA2D_OPFCCR_CM, DMA2D_RGB565);\nMODIFY_REG(hdma2d.Instance->OOR, DMA2D_OOR_LO, displayWidth - rectangleWidth);\n\nhdma2d.LayerCfg[1].InputColorMode = CM_RGB565;\nhdma2d.LayerCfg[1].InputOffset = 0;\n\nHAL_DMA2D_ConfigLayer(&hdma2d, 1);\n\nHAL_DMA2D_Start_IT(&hdma2d, color, (unsigned int)dstPtr, rectangleWidth, rectangleHeight);\n\n')),(0,n.kt)("p",null,"STM32CubeMX\u3067\u8ee2\u9001\u5b8c\u4e86\u306e\u8a2d\u5b9a\u304c\u6b63\u3057\u304f\u884c\u308f\u308c\u3066\u3044\u308c\u3070\u3001\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u51e6\u7406\u306b\u30ab\u30b9\u30bf\u30e0\uff65\u30cf\u30f3\u30c9\u30e9\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"    hdma2d.XferCpltCallback = DMA2D_XferCpltCallback;\n")),(0,n.kt)("p",null,"\u3055\u3089\u306b\u3001\u6b21\u306e\u3088\u3046\u306b\u30cf\u30f3\u30c9\u30e9\u3092\u5b9a\u7fa9\u3057\u3066\u3001\u8ee2\u9001\u5b8c\u4e86\u5272\u8fbc\u307f\u306e\u8a2d\u5b9a\u3092\u691c\u8a3c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),'extern "C" {\n    static void DMA2D_XferCpltCallback(DMA2D_HandleTypeDef* handle)\n    {\n        //Ensure that you this callback is called\n    }\n}\n')),(0,n.kt)("p",null,"\u30e1\u30e2\u30ea\u304b\u3089\u30e1\u30e2\u30ea\u306e\u8ee2\u9001\u306f\u3001\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092\u542b\u3080\u30e1\u30e2\u30ea\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u30c6\u30b9\u30c8\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"HAL_DMA2D_Start_IT(&hdma2d,\n    (unsigned int)srcPtr,\n    (unsigned int)dstPtr,\n    displayWidth - nrOfPixels);\n\n")),(0,n.kt)("h3",g({},{id:"performance-is-as-expected"}),"\u671f\u5f85\u901a\u308a\u306e\u6027\u80fd\u304c\u5f97\u3089\u308c\u308b\u3053\u3068"),(0,n.kt)("p",null,"Chrom-ART\u306e\u6027\u80fd\u3092\u3001\u524d\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u5b9f\u65bd\u3057\u305f\u30e1\u30e2\u30ea\u306e\u8aad\u51fa\u3057 / \u66f8\u8fbc\u307f\u6027\u80fd\u7d50\u679c\u3068\u6bd4\u8f03\u3057\u307e\u3059\u3002 Chrom-ART\u3092\u4f7f\u7528\u3057\u305f\u30b3\u30fc\u30c9\u306e\u65b9\u304c\u3001\u524d\u306e\u30b9\u30c6\u30c3\u30d7\u306eCPU\u306b\u3088\u308b\u8aad\u51fa\u3057 / \u66f8\u8fbc\u307f\u52d5\u4f5c\u3088\u308a\u3082\u9ad8\u6027\u80fd\u3067\u3042\u308b\u3053\u3068\u304c\u4e88\u60f3\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)(l.Z,{mdxType:"Tip"},"\u30d6\u30ec\u30fc\u30af\u30dd\u30a4\u30f3\u30c8\u9593\u306e\u30af\u30ed\u30c3\u30af\uff65\u30b5\u30a4\u30af\u30eb\u6570\u306f\u3001sysTick\u3092\u30df\u30ea\u79d2\u5358\u4f4d\u3067\u30ab\u30a6\u30f3\u30c8\u3059\u308b\u3088\u308a\u3082\u3001\u30af\u30ed\u30c3\u30af\uff65\u30b5\u30a4\u30af\u30eb\uff65\u30ec\u30b8\u30b9\u30bfCCSTEP\u306e\u5024\u3092\u4f7f\u7528\u3057\u305f\u65b9\u304c\u3001\u3088\u308a\u9ad8\u7cbe\u5ea6\u306b\u6e2c\u5b9a\u3067\u304d\u307e\u3059\u3002"))}w.isMDXComponent=!0}}]);