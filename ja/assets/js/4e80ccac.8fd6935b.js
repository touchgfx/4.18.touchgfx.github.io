"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7166],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,g=m["".concat(o,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,p=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:p,target:"_blank"},r.createElement("img",{width:n,height:l,src:p})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:p,target:"_blank"},r.createElement("img",{width:n,height:l,src:p})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class p extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=p},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class p extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)}}t.Z=p},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class p extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=p},43328:function(e,t,n){n.r(t),n.d(t,{assets:function(){return M},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return b},metadata:function(){return N},toc:function(){return T}});var r=n(3905),a=n(44035),l=n(29415),p=n(93054),i=n(37793),o=n(39130),u=n(31217),c=n(22425),m=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&x(e,n,t[n]);if(g)for(var n of g(t))h.call(t,n)&&x(e,n,t[n]);return e};const b={id:"texture-mapper",title:"Texture Mapper\uff08\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\uff09"},f=void 0,N={unversionedId:"development/ui-development/ui-components/images/texture-mapper",id:"development/ui-development/ui-components/images/texture-mapper",title:"Texture Mapper\uff08\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\uff09",description:"Texture Mapper\u306f\u3001\u5909\u63db\u753b\u50cf\u306e\u63cf\u753b\u6a5f\u80fd\u3092\u6301\u3064\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3001\u8abf\u6574\u53ef\u80fd\u306a\u539f\u70b9\u3092\u4e2d\u5fc3\u3068\u3057\u3066\u81ea\u7531\u306b\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3057\u305f\u308a\u56de\u8ee2\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u4eee\u60f3\u30ab\u30e1\u30e9\u3092\u9069\u7528\u3059\u308b\u3053\u3068\u3067\u9060\u8fd1\u611f\u3082\u5b9f\u73fe\u3055\u308c\u3001\u9060\u8fd1\u611f\u306e\u7a0b\u5ea6\u3082\u8abf\u6574\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/texture-mapper.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/texture-mapper",permalink:"/4.18/ja/docs/development/ui-development/ui-components/images/texture-mapper",draft:!1,tags:[],version:"current",frontMatter:{id:"texture-mapper",title:"Texture Mapper\uff08\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\uff09"},sidebar:"docs",previous:{title:"Animated Image\uff08\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u753b\u50cf\uff09",permalink:"/4.18/ja/docs/development/ui-development/ui-components/images/animated-image"},next:{title:"Container\uff08\u30b3\u30f3\u30c6\u30ca\uff09",permalink:"/4.18/ja/docs/development/ui-development/ui-components/containers/container"}},M={},T=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"\u30aa\u30ea\u30b4\u3068\u30ab\u30e1\u30e9",id:"origo--camera",level:3},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"user-code",level:3},{value:"TouchGFX Designer\u306e\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u7167",id:"api-reference",level:2}],y={toc:T};function w(e){var t,n=e,{components:m}=n,x=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},y),x),d(t,s({components:m,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Texture Mapper\u306f\u3001\u5909\u63db\u753b\u50cf\u306e\u63cf\u753b\u6a5f\u80fd\u3092\u6301\u3064\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3001\u8abf\u6574\u53ef\u80fd\u306a\u539f\u70b9\u3092\u4e2d\u5fc3\u3068\u3057\u3066\u81ea\u7531\u306b\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3057\u305f\u308a\u56de\u8ee2\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u4eee\u60f3\u30ab\u30e1\u30e9\u3092\u9069\u7528\u3059\u308b\u3053\u3068\u3067\u9060\u8fd1\u611f\u3082\u5b9f\u73fe\u3055\u308c\u3001\u9060\u8fd1\u611f\u306e\u7a0b\u5ea6\u3082\u8abf\u6574\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(p.Z,{mdxType:"Note"},(0,r.kt)("li",null,"\u3053\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8ca0\u8377\u306b\u5927\u304d\u304f\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,r.kt)("li",null,"\u3053\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f1 bpp\uff08\u30d4\u30af\u30bb\u30eb\u3042\u305f\u308a\u30d3\u30c3\u30c8\u6570\uff09\u306e\u8272\u6df1\u5ea6\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u305b\u3093\u3002")),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-appearance.webp",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bTexture Mapper"),(0,r.kt)("h2",v({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,r.kt)("p",null,"Texture Mapper\u306f\u3001TouchGFX Designer\u306eImages\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eTexture Mapper"),(0,r.kt)("h2",v({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("p",null,"TouchGFX Designer\u306eTexture Mapper\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u540d\u524d\u3002 Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u3092\u57fa\u6e96\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Animation Texture Mapper\u306f\u3001Texture Mapper\u3092Animation Texture Mapper\uff08\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\uff09\u3068\u3057\u3066\u751f\u6210\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Style")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Style\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e8b\u524d\u5b9a\u7fa9\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u9078\u629e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u4e8b\u524d\u5b9a\u7fa9\u3055\u308c\u305f\u5024\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002",(0,r.kt)("br",null),"\u3053\u308c\u3089\u306e\u30b9\u30bf\u30a4\u30eb\u306b\u306f\u3001\u81ea\u7531\u306b\u4f7f\u7528\u3067\u304d\u308b\u753b\u50cf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Image\u306f\u3001\u5909\u63db\u3059\u308b\u753b\u50cf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Lock Image to Center\u306f\u3001\u753b\u50cf\u306e\u4f4d\u7f6e\u3092\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e2d\u592e\u306b\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u5b9f\u884c\u6642\u306bTexture Mapper\u306e\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u4e2d\u592e\u306b\u7f6e\u304b\u308c\u305f\u753b\u50cf\u306e\u4f4d\u7f6e\u306f\u4fdd\u6301\u3055\u308c\u307e\u305b\u3093\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"X\u304a\u3088\u3073Y\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u5185\u3067\u306e\u5909\u63db\u3055\u308c\u308b\u753b\u50cf\u306e\u5de6\u4e0a\u9685\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Angle & Scale")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"X Angle\u3001Y  Angle\u3001\u304a\u3088\u3073Z Angle\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u5185\u3067\u306e\u753b\u50cf\u306e\u56de\u8ee2\u5909\u63db\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u89d2\u5ea6\u306f\u30e9\u30b8\u30a2\u30f3\u5358\u4f4d\u3067\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Scale\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u5185\u306e\u753b\u50cf\u306e\u30b9\u30b1\u30fc\u30eb\u5909\u63db\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Origo")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Lock Origo to Center\u306f\u3001\u753b\u50cf\u3092\u56de\u8ee2\u3059\u308b\u4e2d\u5fc3\u30dd\u30a4\u30f3\u30c8\u3092\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e2d\u592e\u306b\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u5b9f\u884c\u6642\u306bTexture Mapper\u306e\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u4e2d\u592e\u306b\u7f6e\u304b\u308c\u305f\u30aa\u30ea\u30b4\u4f4d\u7f6e\u306f\u4fdd\u6301\u3055\u308c\u307e\u305b\u3093\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"X Origo\u3001Y Origo\u3001\u304a\u3088\u3073Z Origo\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u5185\u306e\u753b\u50cf\u3092\u56de\u8ee2\u304a\u3088\u3073\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u30dd\u30a4\u30f3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",v({parentName:"td"},{href:"#origo--camera"}),"\u300c\u30aa\u30ea\u30b4\u3068\u30ab\u30e1\u30e9\u300d\u30bb\u30af\u30b7\u30e7\u30f3"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Camera")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Camera Distance\u306f\u3001\u4eee\u60f3\u30ab\u30e1\u30e9\u306e\u8ddd\u96e2\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null)," \u3053\u308c\u306b\u3088\u308a\u3001\u753b\u50cf\u56de\u8ee2\u6642\u306e\u9060\u8fd1\u611f\u306e\u7a0b\u5ea6\u304c\u5909\u66f4\u3055\u308c\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Rendering Algorithm\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u5185\u306e\u753b\u50cf\u306e\u63cf\u753b\u306b\u4f7f\u7528\u3059\u308b\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001Nearest-neighbour\u3068Bilinear Interpolation\u3067\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"Alpha\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u900f\u660e\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u306e\u7bc4\u56f2\u306f\u30010\uff5e255\u3067\u3059\u3002 0\u306f\u5b8c\u5168\u306b\u900f\u660e\u3067\u3001255\u306f\u5857\u308a\u3064\u3076\u3055\u308c\u305f\u72b6\u614b\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"FadeAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cAlpha\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,r.kt)("h3",v({},{id:"origo--camera"}),"\u30aa\u30ea\u30b4\u3068\u30ab\u30e1\u30e9"),(0,r.kt)("p",null,"Origo\uff08\u30aa\u30ea\u30b4\uff09\u306f\u3001\u9078\u629e\u3057\u305f\u753b\u50cf\u306e\u5909\u63db\u304c\u5b9f\u884c\u3055\u308c\u308b\u4f4d\u7f6e\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002 \u5ea7\u6a19\u30d7\u30ed\u30d1\u30c6\u30a3\u306eX Origo\u3068Y Origo\u306f\u3001Texture Mapper\u306e\u5e45\u3068\u9ad8\u3055\u306b\u95a2\u4fc2\u3057\u3066\u304a\u308a\u3001\u9078\u629e\u3057\u305f\u753b\u50cf\u306e\u5e45\u3068\u9ad8\u3055\u3068\u306f\u95a2\u4fc2\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u5ea7\u6a19\u30d7\u30ed\u30d1\u30c6\u30a3\u306eZ Origo\u306f\u3001Camera Distance\u306b\u95a2\u4fc2\u3057\u307e\u3059\u3002 \u3082\u3057\u3001Camera Distance\u30921000\u306b\u8a2d\u5b9a\u3057\u3001\u305d\u306e\u72ec\u81ea\u306e\u8ef8\u3092\u4e2d\u5fc3\u306b\u753b\u50cf\u3092\u56de\u8ee2\u3055\u305b\u308b\u5834\u5408\u3001Z Origo\u30821000\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"Texture Mapper\u306e\u4e2d\u592e\u306b\u5909\u63db\u4f4d\u7f6e\u3092\u30ed\u30c3\u30af\u3059\u308b\u306b\u306f\u3001Lock Origo to Center\u3068\u3044\u3046\u30e9\u30d9\u30eb\u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u30aa\u30f3\u306b\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308aX Origo\u3068Y Origo\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304cTexture Mapper\u306e\u4e2d\u592e\u306b\u30ed\u30c3\u30af\u3055\u308c\u3001Z Origo\u304cCamera Distance\u306e\u5024\u306b\u30ed\u30c3\u30af\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"Camera Distance\u306b\u3088\u308a\u3001\u753b\u50cf\u56de\u8ee2\u6642\u306b\u8868\u793a\u3055\u308c\u308b\u9060\u8fd1\u611f\u306e\u7a0b\u5ea6\u304c\u5909\u66f4\u3055\u308c\u307e\u3059\u3002 Camera Distance\u304c\u8fd1\u3044\u307b\u3069FOV\uff08\u8996\u91ce\uff09\u304c\u5927\u304d\u304f\u306a\u308a\u3001\u8a8d\u8b58\u3055\u308c\u308b\u9060\u8fd1\u611f\u306e\u7a0b\u5ea6\u3082\u5897\u3048\u307e\u3059\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/coordinate-setup.webp",noShadow:!0,mdxType:"Figure"},"Texture Mapper\u3067\u30aa\u30ea\u30b4\u3068\u30ab\u30e1\u30e9\u306e\u8ddd\u96e2\u306b\u4f7f\u7528\u3055\u308c\u308b\u5ea7\u6a19\u7cfb"),(0,r.kt)("h2",v({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Texture Mapper\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)(p.Z,{mdxType:"Note"},"\u56de\u8ee2\u307e\u305f\u306f\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u304cTexture Mapper\u306b\u9069\u7528\u3055\u308c\u3001\u30bc\u30ed\u3088\u308a\u5927\u304d\u3044\u671f\u9593\u307e\u305f\u306f\u9045\u5ef6\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u306f\u3001Animation Texture Mapper\u3068\u3057\u3066\u751f\u6210\u3055\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",v({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u56fa\u6709\u306e\u30a2\u30af\u30b7\u30e7\u30f3")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Rotate Texture Mapper")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"X\u8ef8\u3001Y\u8ef8\u3001Z\u8ef8\u306eOrigo\u3092\u4e2d\u5fc3\u306b\u3001\u73fe\u5728\u306e\u5411\u304d\u307e\u305f\u306f\u7279\u5b9a\u306e\u89d2\u5ea6\u3092\u57fa\u6e96\u306bTexture Mapper\u3092\u56de\u8ee2\u3055\u305b\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Scale Texture Mapper")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u73fe\u5728\u306e\u30b5\u30a4\u30ba\u307e\u305f\u306f\u7279\u5b9a\u306e\u30b5\u30a4\u30ba\u3092\u57fa\u6e96\u306b\u3001Texture Mapper\u3092\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,r.kt)("h3",v({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,r.kt)("p",null,"Texture Mapper\u306f\u30c8\u30ea\u30ac\u3092\u767a\u884c\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",v({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,r.kt)("p",null,"Texture Mapper\u306f\u3001\u753b\u50cf\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3068\u56de\u8ee2\u306b\u95a2\u3057\u3066\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u5927\u304d\u304f\u4f9d\u5b58\u3057\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u3001Texture Mapper\u306f\u3001\u307b\u3068\u3093\u3069\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u8981\u6c42\u306e\u53b3\u3057\u3044\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3042\u308b\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",v({},{id:"examples"}),"\u4f8b"),(0,r.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"View\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bTexture Mapper\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    interaction1Counter(0)\n{\n    textureMapper.setXY(150, 46);\n    textureMapper.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));\n    textureMapper.setWidth(180);\n    textureMapper.setHeight(180);\n    textureMapper.setBitmapPosition(26.000f, 26.000f);\n    textureMapper.setScale(1.000f);\n    textureMapper.setCameraDistance(1000.000f);\n    textureMapper.setOrigo(90.000f, 90.000f, 1000.000f);\n    textureMapper.setCamera(90.000f, 90.000f);\n    textureMapper.updateAngles(-0.500f, -0.500f, -0.500f);\n    textureMapper.setRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n\n    add(textureMapper);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001TextureMapper\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,r.kt)(u.Z,{mdxType:"InlineCode"},"textureMapper.invalidate()")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",v({},{id:"user-code"}),"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,r.kt)("p",null,"Texture Mapper\u3092Animation Texture Mapper\uff08\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d7\uff09\u3068\u3057\u3066\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u3001\u6b21\u306e2\u3064\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTextureMapperAnimationStepAction"),"\u306f\u3001\u73fe\u5728\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c1\u30b9\u30c6\u30c3\u30d7\u5b9f\u884c\u3055\u308c\u308b\u305f\u3073\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTextureMapperAnimationEndedAction"),"\u306f\u3001\u3059\u3079\u3066\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u304c\u7d42\u4e86\u3057\u305f\u6642\u70b9\u3067\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e2\u7d44\u306e\u30b3\u30fc\u30c9\u306f\u3001\u4e0a\u306e2\u3064\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class Screen1View\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprivate:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperStepActionCallback;\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperAnimationEndedCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n    void textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n};\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View() :\n  textureMapperStepActionCallback(this, &Screen1View::textureMapperStepActionCallbackHandler),\n  textureMapperAnimationEndedCallback(this, &Screen1View::textureMapperAnimationEndedCallbackHandler)\n{\n  textureMapper.setTextureMapperAnimationStepAction(textureMapperStepActionCallback);\n  textureMapper.setTextureMapperAnimationEndedAction(textureMapperAnimationEndedCallback);\n  add(textureMapper);\n}\n\nvoid Screen1View::textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper steps\n    }\n}\n\nvoid Screen1View::textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper ends\n    }\n}\n")),(0,r.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u306e\u4f8b"),(0,r.kt)("p",null,"Texture Mapper\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306eUI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/texture-mapper-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eTexture Mapper Example UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/animation-texture-mapper-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eAnimation Texture Mapper Example UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API\u53c2\u7167"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"../../../../api/classes/classtouchgfx_1_1_texture_mapper",mdxType:"Link"},"TextureMapper\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167")),(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"../../../../api/classes/classtouchgfx_1_1_animation_texture_mapper",mdxType:"Link"},"AnimationTextureMapper\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167"))))}w.isMDXComponent=!0}}]);