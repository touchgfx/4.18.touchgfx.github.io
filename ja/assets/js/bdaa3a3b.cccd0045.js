"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6046],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,g=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22425:function(e,n,t){var r=t(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}n.Z=o},44035:function(e,n,t){var r=t(67294),o=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return n?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:t,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:t,height:i,src:a})),r.createElement("p",null,e.children))}},35096:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},25026:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return a}});var r=t(11368),o=t(35096);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=(0,r.Z)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(r)return n+t;const a=t.startsWith(n)?t:n+t.replace(/^\//,"");return i?e+a:a}(n,e,t,r)}}function a(e,n={}){const{withBaseUrl:t}=i();return t(e,n)}},15461:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return g},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return y},default:function(){return v}});var r=t(3905),o=t(44035),i=t(22425),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&f(e,t,n[t]);if(c)for(var t of c(n))s.call(n,t)&&f(e,t,n[t]);return e};const g={id:"using-binary-fonts",title:"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8"},m=void 0,h={unversionedId:"development/ui-development/touchgfx-engine-features/using-binary-fonts",id:"development/ui-development/touchgfx-engine-features/using-binary-fonts",isDocsHomePage:!1,title:"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX\u3067\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u6700\u521d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX\u306e\u30d5\u30a9\u30f3\u30c8\u3068\u30c6\u30ad\u30b9\u30c8\u306e\u30b7\u30b9\u30c6\u30e0\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306a\u60c5\u5831\u3092\u3044\u304f\u3064\u304b\u53d6\u308a\u4e0a\u3052\u307e\u3059\u3002\u3053\u308c\u306f\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u64cd\u4f5c\u3059\u308b\u969b\u306e\u7406\u89e3\u306b\u5f79\u7acb\u3064\u3082\u306e\u3067\u3059\u3002 2\u756a\u76ee\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/using-binary-fonts.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/using-binary-fonts",permalink:"/4.18/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",tags:[],version:"current",frontMatter:{id:"using-binary-fonts",title:"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8"},sidebar:"docs",previous:{title:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7",permalink:"/4.18/ja/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"},next:{title:"\u30d5\u30a9\u30f3\u30c8\uff65\u30ad\u30e3\u30c3\u30b7\u30e5",permalink:"/4.18/ja/docs/development/ui-development/touchgfx-engine-features/font-cache"}},y=[{value:"\u30d5\u30a9\u30f3\u30c8\u304a\u3088\u3073\u30c6\u30ad\u30b9\u30c8\u306e\u30b7\u30b9\u30c6\u30e0\uff65\u30af\u30e9\u30b9",id:"the-font-and-text-system-classes",children:[],level:2},{value:"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528",id:"using-binary-fonts",children:[{value:"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u751f\u6210\u306e\u305f\u3081\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30b3\u30f3\u30d0\u30fc\u30bf\u306e\u8a2d\u5b9a",id:"configuring-the-font-converter-to-generate-binary-fonts",children:[],level:3},{value:"\u624b\u52d5\u306b\u3088\u308b\u8a2d\u5b9a",id:"manual-configuration",children:[],level:3},{value:"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"installing-the-binary-font",children:[],level:3},{value:"\u30d5\u30a9\u30f3\u30c8\u306e\u30ea\u30bb\u30c3\u30c8",id:"resetting-a-font",children:[],level:3}],level:2}],b={toc:y};function v(e){var n,t=e,{components:a}=t,f=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=d(d({},b),f),l(n,u({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX\u3067\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u6700\u521d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX\u306e\u30d5\u30a9\u30f3\u30c8\u3068\u30c6\u30ad\u30b9\u30c8\u306e\u30b7\u30b9\u30c6\u30e0\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306a\u60c5\u5831\u3092\u3044\u304f\u3064\u304b\u53d6\u308a\u4e0a\u3052\u307e\u3059\u3002\u3053\u308c\u306f\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u64cd\u4f5c\u3059\u308b\u969b\u306e\u7406\u89e3\u306b\u5f79\u7acb\u3064\u3082\u306e\u3067\u3059\u3002 2\u756a\u76ee\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30d5\u30a9\u30f3\u30c8\u60c5\u5831\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u304a\u3088\u3073\u30ea\u30f3\u30af\u3059\u308b\u5f93\u6765\u306e\u65b9\u6cd5\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/src"),"\u306e.cpp\u30d5\u30a1\u30a4\u30eb\uff09\u306b\u4ee3\u308f\u308b\u3082\u306e\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306e\u4e3b\u306a\u5229\u70b9\u306f\u3001\u3088\u308a\u5c0f\u3055\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30d0\u30a4\u30ca\u30ea\u304c\u5f97\u3089\u308c\u3001\u30e6\u30fc\u30b6\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u7570\u306a\u308b\u30d5\u30a9\u30f3\u30c8\uff65\u30bb\u30c3\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u306e\u67d4\u8edf\u6027\u304c\u5f97\u3089\u308c\u308b\u3053\u3068\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u4e2d\u56fd\u5411\u3051\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u306f\u4e2d\u56fd\u8a9e\u30d5\u30a9\u30f3\u30c8\u3001\u65e5\u672c\u5411\u3051\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u306f\u65e5\u672c\u8a9e\u30d5\u30a9\u30f3\u30c8\u3092\u30d1\u30c3\u30af\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306e\u6b20\u70b9\u306f\u3001\u30d0\u30a4\u30ca\u30ea\u5168\u4f53\u3092RAM\uff08\u307e\u305f\u306f\u30e1\u30e2\u30ea\u30de\u30c3\u30d7\u3055\u308c\u305fFlash\uff09\u306b\u8aad\u307f\u8fbc\u3080\u5fc5\u8981\u304c\u3042\u308a\u3001\u30d5\u30a9\u30f3\u30c8\u306e\u5bb9\u91cf\u304c\u5927\u304d\u3044\u5834\u5408\u306b\u554f\u984c\u304c\u8d77\u3053\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30d5\u30a9\u30f3\u30c8\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ea\u30f3\u30af\u3055\u305b\u308b\u901a\u5e38\u306e\u65b9\u6cd5\u306e\u4e3b\u306a\u5229\u70b9\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u305d\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4f7f\u7528\u3059\u308b\u6700\u65b0\u306e\u30c6\u30ad\u30b9\u30c8\u3068\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u304c\u5e38\u306b\u81ea\u52d5\u7684\u306b\u542b\u307e\u308c\u308b\u3053\u3068\u3067\u3059\u3002 \u3053\u308c\u306f\u975e\u5e38\u306b\u7c21\u5358\u304b\u3064\u5b89\u5168\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u6b20\u70b9\u306f\u3001\u30d5\u30a9\u30f3\u30c8\u306b\u3088\u3063\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u80a5\u5927\u5316\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("h2",d({},{id:"the-font-and-text-system-classes"}),"\u30d5\u30a9\u30f3\u30c8\u304a\u3088\u3073\u30c6\u30ad\u30b9\u30c8\u306e\u30b7\u30b9\u30c6\u30e0\uff65\u30af\u30e9\u30b9"),(0,r.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u3067\u306f\u3001TouchGFX\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u4f7f\u7528\u3055\u308c\u308b\u3059\u3079\u3066\u306e\u30c6\u30ad\u30b9\u30c8\u304a\u3088\u3073\u30d5\u30a9\u30f3\u30c8\u7528\u306e.cpp\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u3001\u751f\u6210\u3055\u308c\u305fUI\u304a\u3088\u3073\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30b3\u30fc\u30c9\u3068\u5171\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ea\u30f3\u30af\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"UI\u4e0a\u306b\u30c6\u30ad\u30b9\u30c8\u3092\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30a8\u30ea\u30a2\u306a\u3069\u3092\u4f7f\u7528\u3057\u3066\uff09\u8868\u793a\u3059\u308b\u5834\u5408\u306f\u3001TextId\u3067\u30c6\u30ad\u30b9\u30c8\u3092\u53c2\u7167\u3057\u307e\u3059\u3002 \u3053\u306eTextId\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u5185\u3067\u5b9f\u969b\u306e\u6587\u5b57\u3092\u898b\u3064\u3051\u308b\u305f\u3081\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306ftouchgfx::Texts\u30af\u30e9\u30b9\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"framework/include/touchgfx/Texts.hpp"),"\u3092\u901a\u3058\u3066\u30c6\u30ad\u30b9\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Text\u30af\u30e9\u30b9\u306b\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u5404\u8a00\u8a9e\u306e\u7ffb\u8a33\u30c6\u30fc\u30d6\u30eb\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u3092\u5099\u3048\u305f\u3001\u30dd\u30a4\u30f3\u30bf\u914d\u5217\u304c\u542b\u307e\u308c\u307e\u3059\u3002 \u539f\u5247\u3068\u3057\u3066\u3001\u7ffb\u8a33\u30c6\u30fc\u30d6\u30eb\u3068\u306f\u305d\u306e\u8a00\u8a9e\u3067\u4f7f\u7528\u3055\u308c\u308b\u3059\u3079\u3066\u306e\u6587\u5b57\u5217\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3067\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",noShadow:"true",width:"420",mdxType:"Figure"},"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u7279\u5b9a\u8a00\u8a9e\u3078\u306e\u30de\u30c3\u30d4\u30f3\u30b0"),(0,r.kt)("p",null,"\u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u3088\u308a\u3001TouchGFX\u306f\u9078\u629e\u3057\u305f\u8a00\u8a9e\u5185\u3067\u7279\u5b9a\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u691c\u7d22\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u304cTouchGFX Designer\u3067\u30c6\u30ad\u30b9\u30c8\u3092\u5909\u66f4\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u751f\u6210\u3059\u308b\u305f\u3073\u306b\u3001\u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306f\u518d\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306b\u63cf\u753b\u3059\u308b\u524d\u306b\u3001\u30c6\u30ad\u30b9\u30c8\u306b\u5bfe\u3057\u3066\u4f7f\u7528\u3059\u308b\u30d5\u30a9\u30f3\u30c8\u3092\u628a\u63e1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\u3068\u30d5\u30a9\u30f3\u30c8\u9593\u306e\u3053\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u306f\u3001TypedTextDatabase\u30af\u30e9\u30b9\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"generated/texts/include/texts/TypedTextDatabase.hpp"),"\uff09\u306b\u3088\u3063\u3066\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX Designer\u306etexts\u30bf\u30d6\u3067\u306f\u3001\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3001\u66f8\u5b57\u9806\u5e8f\uff08\u201d\u5de6\u304b\u3089\u53f3\u201d\uff08LTR\uff09\u307e\u305f\u306f\u201d\u53f3\u304b\u3089\u5de6\u201d\uff08RTL\uff09\uff09\u3001\u5404\u30c6\u30ad\u30b9\u30c8\u306e\u30a2\u30e9\u30a4\u30f3\u30e1\u30f3\u30c8\uff08\u5de6\u3001\u53f3\u3001\u4e2d\u592e\uff09\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002 \u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3001\u9806\u5e8f\u3001\u30a2\u30e9\u30a4\u30f3\u30e1\u30f3\u30c8\u306f\u30c6\u30ad\u30b9\u30c8\u306e\u7ffb\u8a33\u8a00\u8a9e\u3054\u3068\u306b\u7570\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u60c5\u5831\u306f\u5404\u8a00\u8a9e\u56fa\u6709\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308aTouchGFX\u306f\u3001\u7279\u5b9a\u306e\u30c6\u30ad\u30b9\u30c8\u306b\u5bfe\u3057\u3066\u4f7f\u7528\u3059\u308b\u30d5\u30a9\u30f3\u30c8\u3001\u30a2\u30e9\u30a4\u30f3\u30e1\u30f3\u30c8\u65b9\u6cd5\u3001\u66f8\u5b57\u65b9\u6cd5\u3092\u5bb9\u6613\u306b\u898b\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.png",noShadow:"true",width:"600",mdxType:"Figure"},"\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u60c5\u5831\u306f\u8a00\u8a9e\u306b\u56fa\u6709"),(0,r.kt)("p",null,"\u4e0a\u306e\u56f3\u3067\u306f\u3001TypedTextData\u30c6\u30fc\u30d6\u30eb\u306b3\u3064\u306e\u914d\u5217\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u8a00\u8a9e\u3054\u3068\u306b1\u3064\u305a\u3064\u3067\u3059\u3002 \u5404\u914d\u5217\u306b3\u3064\u306e\u8981\u7d20\u304c\u3042\u308a\u3001\u3053\u308c\u306f\u30b7\u30b9\u30c6\u30e0\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u3054\u3068\u306b1\u3064\u305a\u3064\u3067\u3059\u3002 \u5404\u8981\u7d20\u306f\u30d5\u30a9\u30f3\u30c8\u3001\u8aad\u53d6\u308a\u9806\u5e8f\u3001\u30a2\u30e9\u30a4\u30f3\u30e1\u30f3\u30c8\u3092\u8a18\u8ff0\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u4f8b\u3067\u306f\u30013\u3064\u306e\u8a00\u8a9e\u3067\u30c6\u30ad\u30b9\u30c8\u304c\u540c\u3058\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002 Fonts\u30c6\u30fc\u30d6\u30eb\u306b\u306f2\u3064\u306e\u30dd\u30a4\u30f3\u30bf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u306f2\u3064\u306e\u30d5\u30a9\u30f3\u30c8\u304c\u3042\u308b\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306b\u30c6\u30ad\u30b9\u30c8\u3092\u63cf\u753b\u3057\u3088\u3046\u3068\u3059\u308b\u969b\u306b\u3001\u305d\u306e\u7279\u5b9a\u306e\u30c6\u30ad\u30b9\u30c8\u306eTypedTextData\u3092\u30eb\u30c3\u30af\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002 \u3053\u306e\u30c7\u30fc\u30bf\u306b\u306f\u3001Excel\u30b7\u30fc\u30c8\u306b\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u30d5\u30a9\u30f3\u30c8\uff65\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3001\u6587\u5b57\u306e\u9806\u5e8f\uff08LTR / RTL\uff09\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u6c34\u5e73\u65b9\u5411\u306e\u30a2\u30e9\u30a4\u30f3\u30e1\u30f3\u30c8\uff08\u5de6\u3001\u53f3\u3001\u4e2d\u592e\uff09\u304c\u542b\u307e\u308c\u307e\u3059\u3002 TouchGFX\u306fTypedTextData\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\uff08F1\u307e\u305f\u306fF2\uff09\u3092\u4f7f\u7528\u3057\u3066\u3001\u30c6\u30ad\u30b9\u30c8\u306b\u5bfe\u3059\u308b\u6b63\u3057\u3044\u30d5\u30a9\u30f3\u30c8\u3092\u898b\u3064\u3051\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u306f\u3059\u3079\u3066\u3001\u30d5\u30a9\u30f3\u30c8\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u308b\u3068\u304d\u306b\u81ea\u52d5\u7684\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h2",d({},{id:"using-binary-fonts"}),"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u591a\u6570\u306e\u6587\u5b57\u3092\u591a\u304f\u306e\u7570\u306a\u308b\u30d5\u30a9\u30f3\u30c8\u3067\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u305d\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b5\u30a4\u30ba\u306f\u5927\u5e45\u306b\u5897\u5927\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u554f\u984c\u3092\u7de9\u548c\u3059\u308b\u305f\u3081\u3001TouchGFX\u3067\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30d5\u30a9\u30f3\u30c8\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ea\u30f3\u30af\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u306f\u5207\u308a\u96e2\u3055\u308c\u3066\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u5b9f\u884c\u6642\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u8aad\u307f\u8fbc\u307e\u308c\u3001TouchGFX\u306b\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002 \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001SD\u30ab\u30fc\u30c9\u306a\u3069\u306e\u5916\u90e8\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30d5\u30a9\u30f3\u30c8\u3092\u8aad\u307f\u8fbc\u3093\u3060\u308a\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u304b\u3089\u30d5\u30a9\u30f3\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30d5\u30a9\u30f3\u30c8\u3092\u8aad\u307f\u8fbc\u3093\u3060\u3089\u3001\u30d5\u30a9\u30f3\u30c8\uff65\u30b7\u30b9\u30c6\u30e0\u306b\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3088\u3046TouchGFX\u306b\u8981\u6c42\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.png",noShadow:"true",width:"600",mdxType:"Figure"},"\u30d5\u30a9\u30f3\u30c8\uff65\u30c6\u30fc\u30d6\u30eb\u306b\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u7d44\u8fbc\u307f\u306eFont2\u304c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u8aad\u307f\u8fbc\u307e\u308c\u305fBinaryfont\u306b\u7f6e\u304d\u63db\u3048\u3089\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u4ee5\u964d\u3001TouchGFX\u3067\u306fFont2\u3078\u306e\u30ea\u30f3\u30af\u304c\u4f7f\u7528\u3055\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",d({},{id:"configuring-the-font-converter-to-generate-binary-fonts"}),"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u751f\u6210\u306e\u305f\u3081\u306e\u30d5\u30a9\u30f3\u30c8\uff65\u30b3\u30f3\u30d0\u30fc\u30bf\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,'\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306b\u30d5\u30a9\u30f3\u30c8\uff65\u30b3\u30f3\u30d0\u30fc\u30bf\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 This is easily done in TouchGFX Designer. Config\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3066\u3001"Text Configuration"\u3092\u9078\u629e\u3057\u3001"Binary font files"\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002'),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2-4.17.png",mdxType:"Figure"},"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u9078\u629e"),(0,r.kt)("p",null,"\u30b3\u30fc\u30c9\u3092\u518d\u751f\u6210\u3059\u308b\u3068\u3001TouchGFX\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin/"),"\u30d5\u30a9\u30eb\u30c0\u5185\u306b\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u751f\u6210\u3057\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/src/"),"\u306e\u901a\u5e38\u306e\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u7a7a\u306e\u30d5\u30a9\u30f3\u30c8\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",d({},{id:"manual-configuration"}),"\u624b\u52d5\u306b\u3088\u308b\u8a2d\u5b9a"),(0,r.kt)("p",null,'TouchGFX Designer\u3092\u4f7f\u7528\u3057\u306a\u304f\u3066\u3082\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306eapplication.config\u30d5\u30a1\u30a4\u30eb\u306b\u3042\u308btext_configuration\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3001"binary_fonts"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092"yes"\u306b\u5909\u66f4\u3057\u307e\u3059\u3002'),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"application.config"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),'  "text_configuration": {\n    "remap": "yes",\n    "a4": "yes",\n    "binary_translations": "no",\n    "binary_fonts": "yes",\n    "framebuffer_bpp": "16"\n  }\n')),(0,r.kt)("p",null,"\u6b21\u56de\u30a2\u30bb\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u3068\u304d\u306b\u306f\u3001\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin"),"\u30d5\u30a9\u30eb\u30c0\u306b\u5b58\u5728\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",d({},{id:"installing-the-binary-font"}),"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,"TouchGFX\u3067\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u306b\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u307e\u305f\u306f\u4ed6\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u305d\u308c\u3092\u30b3\u30d4\u30fc\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3055\u3089\u306b\u3001\u3053\u306e\u30d5\u30a9\u30f3\u30c8\u3092RAM\u307e\u305f\u306f\uff08\u30dd\u30a4\u30f3\u30bf\u7d4c\u7531\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\uff09QSPI Flash\u306a\u3069\u306e\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a\u53ef\u80fd\u306a\u30e1\u30e2\u30ea\u3067\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u30e1\u30e2\u30ea\u306b\u8aad\u307f\u8fbc\u3093\u3060\u3089\u3001TouchGFX\u306b\u305d\u306e\u30d5\u30a9\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3067TouchGFX\u3067\u306f\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305f\u30d5\u30a9\u30f3\u30c8\u3067\u306f\u306a\u304f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u30d5\u30a9\u30f3\u30c8\u304c\u4f7f\u7528\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u524d\u306b\u30d0\u30a4\u30ca\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u8d77\u52d5\u76f4\u5f8c\u306b\u3053\u308c\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u30d5\u30a9\u30f3\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"FrontApplication.cpp"),"\u306b\u3042\u308b",(0,r.kt)("em",{parentName:"p"},"FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)"),"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306f\u3001\u4f55\u304b\u63cf\u753b\u3092\u884c\u3046\u524d\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306b\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,19-19,22-22}","{5-5,19-19,22-22}":!0}),'//read the file into this array in internal RAM\nuint8_t fontdata[10000];\n\n//binary font object using the data\nBinaryFont bf;\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    //read the binary font from a file\n    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");\n    if (font)\n    {\n        //read data from the file\n        fread(fontdata, 1, 10000, font);\n        fclose(font);\n\n        //initialize BinaryFont object in bf using placement new\n        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);\n\n        //replace application font \'DEFAULT\' with the binary font\n        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp\n    }\n}\n')),(0,r.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u3001\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u308b\u305f\u3081\u306e\u6b63\u78ba\u306a\u30b3\u30fc\u30c9\u306f\u3001\u30e6\u30fc\u30b6\u306e\u30d5\u30a1\u30a4\u30eb\uff65\u30b7\u30b9\u30c6\u30e0\u3084\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\uff65\u30b7\u30b9\u30c6\u30e0\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002 \u57fa\u672c\u7684\u306a\u624b\u9806\u306f\u3001\u30e1\u30e2\u30ea\u5185\u3067\u30d5\u30a9\u30f3\u30c8\uff65\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u53ef\u80fd\u306b\u3057\u3066\u3001\u305d\u306e\u30c7\u30fc\u30bf\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u3092\u4f7f\u7528\u3057\u3066BinaryFont\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u521d\u671f\u5316\u3057\u3001\u6700\u5f8c\u306bBinaryFont\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092TouchGFX\u306b\u6e21\u3059\u3068\u3044\u3046\u6d41\u308c\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"setFont"),"\u306e\u547c\u3073\u51fa\u3057\u306e\u5f8c\u3001TouchGFX\u306f\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306b\u30c6\u30ad\u30b9\u30c8\u3092\u63cf\u753b\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",d({},{id:"resetting-a-font"}),"\u30d5\u30a9\u30f3\u30c8\u306e\u30ea\u30bb\u30c3\u30c8"),(0,r.kt)("p",null,"\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u306e\u4f7f\u7528\u5f8c\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305f\u5143\u306e\u30d5\u30a9\u30f3\u30c8\u306b\u623b\u3059\u5fc5\u8981\u304c\u751f\u3058\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u8a00\u8a9e\u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u306b\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\uff65\u30d5\u30a9\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306a\u3069\u3067\u3059\u3002 TypedTextDatabase\u306b\u3042\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"resetFont()"),"\u95a2\u6570\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30d5\u30a9\u30f3\u30c8\u306e\u30dd\u30a4\u30f3\u30bf\u304c\u7d44\u8fbc\u307f\u30d5\u30a9\u30f3\u30c8\u306b\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"//reset to original font\nTypedTextDatabase::resetFont(DEFAULT);\n")),(0,r.kt)("p",null,"\u3053\u306e\u547c\u3073\u51fa\u3057\u306e\u5f8c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30d0\u30a4\u30ca\u30ea\uff65\u30d5\u30a9\u30f3\u30c8\u306b\u3088\u3063\u3066\u5360\u6709\u3055\u308c\u3066\u3044\u305f\u30e1\u30e2\u30ea\u3092\u518d\u5229\u7528\u3057\u3066\u3001\u65b0\u3057\u3044\u30d5\u30a9\u30f3\u30c8\u307e\u305f\u306f\u5225\u306e\u76ee\u7684\u7528\u306b\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))}v.isMDXComponent=!0}}]);