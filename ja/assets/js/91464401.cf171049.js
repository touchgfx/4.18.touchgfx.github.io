"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[506],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,g=p["".concat(u,".").concat(h)]||p[h]||m[h]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},39487:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.width,n=e.height,o=e.points||[],l=(0,i.Z)(e.imageSource);return r.createElement("div",{style:{position:"relative"}},r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:t,height:n,src:l})),o.map((function(e,t){return r.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},r.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},r.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),r.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),r.createElement("p",null,e.children)))}},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},82985:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},52177:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return T},default:function(){return w},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return b}});var r=n(3905),i=n(44035),o=n(39487),l=n(82985),a=n(93054),u=n(39130),c=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&d(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&d(e,n,t[n]);return e};const k={id:"tutorial-01",title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb1: \u30b5\u30f3\u30d7\u30eb\u3092\u8a66\u3059"},T=void 0,v={unversionedId:"tutorials/tutorial-01",id:"tutorials/tutorial-01",title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb1: \u30b5\u30f3\u30d7\u30eb\u3092\u8a66\u3059",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001TouchGFX\u306e\u57fa\u672c\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002 TouchGFX\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3084\u3001\u63d0\u4f9b\u3055\u308c\u305f\u30b5\u30f3\u30d7\u30eb\u3092TouchGFX\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u304a\u3088\u3073STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3067\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u898b\u3066\u3044\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/tutorial-01.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-01",permalink:"/4.18/ja/docs/tutorials/tutorial-01",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-01",title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb1: \u30b5\u30f3\u30d7\u30eb\u3092\u8a66\u3059"},sidebar:"docs",previous:{title:"Cookie\u30dd\u30ea\u30b7\u30fc",permalink:"/4.18/ja/docs/miscellaneous/cookie-policy"},next:{title:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb2: \u30e6\u30fc\u30b6\u72ec\u81ea\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210",permalink:"/4.18/ja/docs/tutorials/tutorial-02"}},y={},b=[{value:"\u306f\u3058\u3081\u306b",id:"getting-started",level:2},{value:"TouchGFX\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u30b5\u30f3\u30d7\u30eb\u3092\u5b9f\u884c",id:"running-an-example-using-touchgfx-simulator",level:2},{value:"\u30c6\u30fc\u30de\u306e\u9078\u629e",id:"\u30c6\u30fc\u30de\u306e\u9078\u629e",level:3},{value:"UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9078\u629e",id:"selecting-a-ui-template",level:3},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"creating-a-project",level:3},{value:"TouchGFX\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u5b9f\u884c",id:"running-touchgfx-simulator",level:3},{value:"STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3067\u30b5\u30f3\u30d7\u30eb\u3092\u5b9f\u884c",id:"running-an-example-on-an-stm32-evaluation-kit",level:2}],x={toc:b};function w(e){var t,n=e,{components:c}=n,d=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},x),d),s(t,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001TouchGFX\u306e\u57fa\u672c\u306b\u3064\u3044\u3066\u5b66\u3073\u307e\u3059\u3002 TouchGFX\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3084\u3001\u63d0\u4f9b\u3055\u308c\u305f\u30b5\u30f3\u30d7\u30eb\u3092TouchGFX\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u304a\u3088\u3073STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3067\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u898b\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",f({},{id:"getting-started"}),"\u306f\u3058\u3081\u306b"),(0,r.kt)("p",null,"\u306f\u3058\u3081\u306b\u3001TouchGFX Designer\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002 TouchGFX\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"../introduction/installation"}),"\u3053\u3061\u3089"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",f({},{id:"running-an-example-using-touchgfx-simulator"}),"TouchGFX\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u30b5\u30f3\u30d7\u30eb\u3092\u5b9f\u884c"),(0,r.kt)("p",null,"TouchGFX\u306b\u306f\u3001TouchGFX Designer\u3067\u4f7f\u7528\u3067\u304d\u308bUI\u30b5\u30f3\u30d7\u30eb\u304c\u3001\u591a\u6570\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30b5\u30f3\u30d7\u30eb\u306fTouchGFX\u306e\u5177\u4f53\u7684\u306a\u30c8\u30d4\u30c3\u30af\u306b\u3064\u3044\u3066\u5b66\u3076\u305f\u3081\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\u3059\u3079\u3066\u3001TouchGFX\u306e1\u3064\u306e\u7279\u5b9a\u306e\u30c8\u30d4\u30c3\u30af\u307e\u305f\u306f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u7126\u70b9\u3092\u7d5e\u3063\u3066\u3044\u308b\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)("h3",f({},{id:"\u30c6\u30fc\u30de\u306e\u9078\u629e"}),"\u30c6\u30fc\u30de\u306e\u9078\u629e"),(0,r.kt)("p",null,"TouchGFX Designer\u306b\u306f\u3001Light\uff08\u660e\uff09\u3068Dark\uff08\u6697\uff09\u3068\u3044\u30462\u3064\u306e\u30ab\u30e9\u30fc\uff65\u30b9\u30ad\u30fc\u30e0\u304c\u3042\u308a\u307e\u3059\u3002 TouchGFX Designer\u3092\u4f7f\u3044\u59cb\u3081\u308b\u3068\u3001\u307e\u305a\u30b9\u30ad\u30fc\u30e0\u3092\u9078\u629e\u3059\u308b\u3088\u3046\u306b\u6c42\u3081\u3089\u308c\u307e\u3059\u3002 \u3053\u308c\u306f\u5f8c\u3067\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(o.Z,{points:[[270,172]],imageSource:"/img/tutorials/tutorial-01/select-theme.webp",mdxType:"FigureWithPoints"},"\u30c6\u30fc\u30de\u3092\u9078\u629e\u3059\u308b"),(0,r.kt)("p",null,'\u30c6\u30fc\u30de\u3092\u9078\u629e\u3057\u3066\u3001"OK"\uff081\uff09\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 \u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Light\uff08\u660e\uff09\u30b9\u30ad\u30fc\u30e0\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002'),(0,r.kt)("h3",f({},{id:"selecting-a-ui-template"}),"UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9078\u629e"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u30b5\u30f3\u30d7\u30eb\u3092\u3001\u30e6\u30fc\u30b6\u72ec\u81ea\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6700\u521d\u306e\u4e00\u6b69\u3068\u3057\u3066\u30b5\u30f3\u30d7\u30eb\u3092\u4f7f\u7528\u3057\u305f\u308a\u3001\u53c2\u7167\u4f8b\u3068\u3057\u3066\u4f7f\u7528\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u306f\u3001TouchGFX\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u306ePC\u4e0a\u3067\u5b9f\u884c\u3001STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3067\u5b9f\u884c\u3001\u3042\u308b\u3044\u306f\u30ab\u30b9\u30bf\u30e0\u306eSTM32\u30d9\u30fc\u30b9\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4e0a\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\u30b5\u30f3\u30d7\u30eb\u304b\u3089\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u5de6\u4e0a\u9685\u306e"Examples"\u30a2\u30a4\u30b3\u30f3\uff081\uff09\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002')),(0,r.kt)(o.Z,{points:[[10,30]],imageSource:"/img/tutorials/tutorial-01/select-examples.webp",mdxType:"FigureWithPoints"},"\u30b5\u30f3\u30d7\u30eb\u3092\u958b\u304f"),(0,r.kt)("p",null,"TouchGFX Designer\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u3001\u4f7f\u7528\u53ef\u80fd\u306aUI\u30b5\u30f3\u30d7\u30eb\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{points:[[110,50]],imageSource:"/img/tutorials/tutorial-01/all-examples.webp",mdxType:"FigureWithPoints"},"\u30b5\u30f3\u30d7\u30eb\u3092\u9078\u629e"),(0,r.kt)("p",null,'"Animated Image Example"\uff081\uff09\u3092\u9078\u629e\u3057\u307e\u3059\u3002'),(0,r.kt)(o.Z,{points:[[420,200]],imageSource:"/img/tutorials/tutorial-01/animated-image-selected.webp",mdxType:"FigureWithPoints"},"Animated Image Example\u3092\u9078\u629e"),(0,r.kt)("h3",f({},{id:"creating-a-project"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,r.kt)("p",null,'TouchGFX Designer\u3067\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002 \u3053\u3053\u3067\u306f\u3001"MyAnimatedImageExample"\u3068\u3044\u3046\u540d\u524d\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u63d0\u4f9b\u3055\u308c\u3001\u53f3\u5074\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u30d5\u30a9\u30eb\u30c0\u3092\u3001\u9078\u629e\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\uff081\uff09\u3002'),(0,r.kt)("p",null,'"Create"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 TouchGFX Designer\u304c\u3001\u30b5\u30f3\u30d7\u30eb\u3092\u30d9\u30fc\u30b9\u306b\u3057\u305f\u5b8c\u5168\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30bb\u30b9\u306b\u304b\u304b\u308b\u6642\u9593\u306f\u3001\u30e6\u30fc\u30b6\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u901f\u5ea6\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002'),(0,r.kt)("h3",f({},{id:"running-touchgfx-simulator"}),"TouchGFX\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u5b9f\u884c"),(0,r.kt)("p",null,'TouchGFX Designer\u306b\u3001\u7d50\u5408\u6e08\u307f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 Windows\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u53f3\u4e0b\u306b\u3042\u308b"Run Simulator"\u30dc\u30bf\u30f3\uff081\uff09\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u3001\u30ad\u30fc\u30dc\u30fc\u30c9\u306e ',(0,r.kt)(l.Z,{mdxType:"Shortcut"},"F5")," \u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{points:[[463,245]],imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-4-17.webp",mdxType:"FigureWithPoints"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u6e96\u5099\u5b8c\u4e86"),(0,r.kt)("p",null,'TouchGFX\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u304c\u3001\u901a\u5e38\u306eWindows\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u30bf\u30a4\u30c8\u30eb\u30d0\u30fc\u306b\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u540d\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002 "Start"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b5\u30f3\u30d7\u30eb\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002'),(0,r.kt)(i.Z,{width:"50%",imageSource:"/img/tutorials/tutorial-01/the-touchgfx-simulator-4-17.webp",mdxType:"Figure"},"TouchGFX\u30b7\u30df\u30e5\u30ec\u30fc\u30bf"),(0,r.kt)("p",null,"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u5148\u306b\u9032\u3081\u308b\u524d\u306b\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3055\u3089\u306b\u3044\u304f\u3064\u304b\u306e\u30b5\u30f3\u30d7\u30eb\u3092\u8a66\u3057\u3066\u307f\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 File->New\u306e\u9806\u306b\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u524d\u3068\u540c\u3058\u3088\u3046\u306b\u65b0\u3057\u3044UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,r.kt)("h2",f({},{id:"running-an-example-on-an-stm32-evaluation-kit"}),"STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3067\u30b5\u30f3\u30d7\u30eb\u3092\u5b9f\u884c"),(0,r.kt)("p",null,"\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001STM32F746-Disco\u30dc\u30fc\u30c9\u7528\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u59cb\u3059\u308b\u65b9\u6cd5\u3068\u3001\u305d\u306e\u30dc\u30fc\u30c9\u4e0a\u3067TouchGFX\u306e\u3044\u305a\u308c\u304b\u306e\u30b5\u30f3\u30d7\u30eb\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u5b66\u7fd2\u3057\u307e\u3059\u3002 STM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u98db\u3070\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u5225\u306eSMT32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30dc\u30fc\u30c9\u306e\u30ea\u30b9\u30c8\u3092\u898b\u3066\u3001\u305d\u306e\u30dc\u30fc\u30c9\u304c\u30ea\u30b9\u30c8\u306b\u3042\u308b\u304b\u3069\u3046\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,'TouchGFX Designer\u306b\u306f\u3001\u5e83\u7bc4\u56f2\u306eSTM32\u8a55\u4fa1\u30ad\u30c3\u30c8\u3068\u5408\u81f4\u3059\u308b\u65e2\u6210\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30ea\u30b9\u30c8\u304c\u4ed8\u5c5e\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u3046\u3057\u305f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30d9\u30fc\u30b9\u306b\u3057\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u5de6\u4e0a\u9685\u306b\u3042\u308b"Examples"\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001TouchGFX Designer\u3067\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3068\u3053\u308d\u304b\u3089\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002'),(0,r.kt)(o.Z,{points:[[10,30]],imageSource:"/img/tutorials/tutorial-01/select-examples.webp",mdxType:"FigureWithPoints"},"\u30b5\u30f3\u30d7\u30eb\u304b\u3089\u958b\u59cb"),(0,r.kt)("p",null,'"Animated Image Example"\u3092\u9078\u629e\u3057\u307e\u3059\uff08\u307e\u3060\u9078\u629e\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\uff09\u3002 "Select Hardware"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u4f7f\u7528\u3059\u308b\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067"Simulator"\u306f\u3001Windows\u4e0a\u3067\u3057\u304b\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3002'),(0,r.kt)(o.Z,{points:[[70,10]],imageSource:"/img/tutorials/tutorial-01/animated-image-selected.webp",mdxType:"FigureWithPoints"},"Animated Image Example\u3092\u9078\u629e"),(0,r.kt)("p",null,"TouchGFX Designer\u306b\u4f7f\u7528\u53ef\u80fd\u306a\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u69cb\u6210\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(o.Z,{points:[[176,140],[440,215]],imageSource:"/img/tutorials/tutorial-01/select-hardware.webp",mdxType:"FigureWithPoints"},"Animated Image Example\u3092\u9078\u629e"),(0,r.kt)("p",null,'\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001STM32F746-Disco\u30dc\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u306e\u3067\u3001"STM32F746G Discovery Kit"\uff081\uff09\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u6b21\u306b"Select"\uff082\uff09\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002'),(0,r.kt)("p",null,'\u3053\u308c\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002 \u304a\u597d\u304d\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u540d\u306b\u5909\u66f4\u3067\u304d\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u3001"MyAnimatedImageExample746"\u306b\u5909\u66f4\u3057\u307e\u3057\u305f\u3002 "Create"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u7d9a\u884c\u3057\u307e\u3059\u3002'),(0,r.kt)(o.Z,{points:[[460,240]],imageSource:"/img/tutorials/tutorial-01/create-the-final-project-4-17.webp",mdxType:"FigureWithPoints"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210"),(0,r.kt)("p",null,'\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5916\u89b3\u306f\u3001\u524d\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u898b\u305f\u3082\u306e\u3068\u4f3c\u3066\u3044\u307e\u3059\u3002 \u552f\u4e00\u306e\u76f8\u9055\u70b9\u306f\u3001"Run Simulator"\u30dc\u30bf\u30f3\uff082\uff09\u306e\u6a2a\u306b"Run Target"\u30dc\u30bf\u30f3\uff081\uff09\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3067\u3059\u3002 \u3053\u306e\u30dc\u30bf\u30f3\uff08\u307e\u305f\u306f\u30ad\u30fc\u30dc\u30fc\u30c9\u306e ',(0,r.kt)(l.Z,{mdxType:"Shortcut"},"F6"),' \u30ad\u30fc\uff09\u3092\u62bc\u3059\u3068\u3001TouchGFX Designer\u304cGNU ARM C++\u30b3\u30f3\u30d1\u30a4\u30e9\u3092\u4f7f\u7528\u3057\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u30d5\u30e9\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30bb\u30b9\u306f\u3001\u304a\u4f7f\u3044\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306e\u901f\u5ea6\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8907\u96d1\u3055\u306b\u3088\u3063\u3066\u3001\u6570\u5206\u7a0b\u5ea6\u304b\u304b\u308a\u307e\u3059\u3002 \u9032\u6357\u72b6\u6cc1\u306f\u3001TouchGFX Designer\u4e0b\u90e8\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\uff65\u30d0\u30fc\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002 "Detailed Log"\u30dc\u30bf\u30f3\uff083\uff09\uff08\u307e\u305f\u306f\u30ad\u30fc\u30dc\u30fc\u30c9\u306e ',(0,r.kt)(l.Z,{mdxType:"Shortcut"},"Alt + L")," \u30ad\u30fc\uff09\u3092\u62bc\u3059\u3068\u3001\u30d3\u30eb\u30c9\u304a\u3088\u3073\u30d5\u30e9\u30c3\u30b7\u30e5\uff65\u30b9\u30c6\u30c3\u30d7\u306e\u8a73\u7d30\u3092\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(o.Z,{points:[[480,250],[465,250],[100,250],[0,240]],imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-2-4-17.webp",mdxType:"FigureWithPoints"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u6e96\u5099\u5b8c\u4e86"),(0,r.kt)("p",null,'\u30d5\u30e9\u30c3\u30b7\u30e5\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001TouchGFX Designer\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\uff65\u30d0\u30fc\u306b"Flashing Done"\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u30dc\u30fc\u30c9\u4e0a\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u7a3c\u50cd\u3057\u3066\u3044\u308b\u306e\u3092\u78ba\u8a8d\u3067\u304d\u308b\u306f\u305a\u3067\u3059\u3002'),(0,r.kt)(a.Z,{mdxType:"Note"},"\u30bf\u30fc\u30b2\u30c3\u30c8\u3092\u30d5\u30e9\u30c3\u30b7\u30e5\u3059\u308b\u306b\u306f\u3001STM32CubeProgrammer / ST-Link\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(u.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,r.kt)("li",null,(0,r.kt)(u.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3")))),(0,r.kt)("p",null,'\u53f3\u4e0b\u306e"Files"\u30dc\u30bf\u30f3\uff084\uff09\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u3063\u3066\u30d6\u30e9\u30a6\u30b6\u304c\u958b\u304d\u3001\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u914d\u7f6e\u5148\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 ',(0,r.kt)("inlineCode",{parentName:"p"},"build\\bin"),"\u306b\u79fb\u52d5\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/tutorials/tutorial-01/the-projects-binary-files.webp",mdxType:"Figure"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a1\u30a4\u30eb"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"target.hex"),"\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u304a\u4f7f\u3044\u306e\u30dc\u30fc\u30c9\u306eSTM32\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002 \u3053\u308c\u306f\u3001TouchGFX Designer\u304c\u30e6\u30fc\u30b6\u306e\u30dc\u30fc\u30c9\u7528\u306b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002"),(0,r.kt)("p",null,"STM32CubeProgrammer\u307e\u305f\u306fST-Link\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u3001\u30dc\u30fc\u30c9\u3092\u624b\u52d5\u3067\u30d5\u30e9\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",f({parentName:"p"},{href:"../development/ui-development/working-with-touchgfx/compiling-and-flashing"}),"\u300c\u30b3\u30f3\u30d1\u30a4\u30eb\u3068\u30d5\u30e9\u30c3\u30b7\u30e5\u300d\u30da\u30fc\u30b8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}w.isMDXComponent=!0}}]);