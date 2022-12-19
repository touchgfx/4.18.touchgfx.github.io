"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3716],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=a(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,u[1]=c;for(var a=2;a<i;a++)u[a]=n[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},37793:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class u extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=u},67239:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return b}});var r=n(3905),o=n(37793),i=n(22425),u=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(a)for(var n of a(t))p.call(t,n)&&d(e,n,t[n]);return e};const f={id:"prerequisites",title:"\u524d\u63d0\u6761\u4ef6"},m=void 0,g={unversionedId:"introduction/prerequisites",id:"introduction/prerequisites",title:"\u524d\u63d0\u6761\u4ef6",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/introduction/prerequisites.mdx",sourceDirName:"introduction",slug:"/introduction/prerequisites",permalink:"/4.18/ja/docs/introduction/prerequisites",draft:!1,tags:[],version:"current",frontMatter:{id:"prerequisites",title:"\u524d\u63d0\u6761\u4ef6"},sidebar:"docs",previous:{title:"TouchGFX\u3068\u306f",permalink:"/4.18/ja/docs/introduction/what-is-touchgfx"},next:{title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/4.18/ja/docs/introduction/installation"}},v={},b=[{value:"Windows\u4e0a\u3067\u306eTouchGFX\u306e\u4f7f\u7528",id:"windows\u4e0a\u3067\u306etouchgfx\u306e\u4f7f\u7528",level:2},{value:"Linux\u4e0a\u3067\u306eTouchGFX\u306e\u4f7f\u7528",id:"linux\u4e0a\u3067\u306etouchgfx\u306e\u4f7f\u7528",level:2},{value:"Ubuntu 20.04\u3067\u306eTouchGFX\u306e\u4f7f\u7528",id:"ubuntu-2004\u3067\u306etouchgfx\u306e\u4f7f\u7528",level:3}],y={toc:b};function k(e){var t,n=e,{components:u}=n,d=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),d),c(t,l({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u306f\u4e3b\u306b\u3001Windows 10\u3067\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u958b\u767a\u3055\u308c\u3066\u3044\u307e\u3059\u3002 TouchGFX Designer\u306fWindows\u4e0a\u3067\u3057\u304b\u52d5\u4f5c\u3057\u307e\u305b\u3093\u304c\u3001\u57fa\u76e4\u3068\u306a\u308b\u30c4\u30fc\u30eb\u306fLinux\u4e0a\u3067\u3082\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",h({},{id:"windows\u4e0a\u3067\u306etouchgfx\u306e\u4f7f\u7528"}),"Windows\u4e0a\u3067\u306eTouchGFX\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"\u30d0\u30fc\u30b8\u30e7\u30f34.18\u4ee5\u964d\u3001TouchGFX\u306fWindows 10\u4e0a\u3067\u306e\u307f\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"TouchGFX\u306b\u306f\u3001\u958b\u767a\u306b\u5fc5\u8981\u306a\u3059\u3079\u3066\u306e\u57fa\u672c\u30c4\u30fc\u30eb\u304c\u5099\u308f\u3063\u3066\u3044\u307e\u3059\u3002 TouchGFX\u306b\u306fg++\u304c\u30d0\u30f3\u30c9\u30eb\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001C++\u30b3\u30f3\u30d1\u30a4\u30e9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"TouchGFX\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806\u3068\u30b3\u30fc\u30c9Flash\u7528\u306e\u8ffd\u52a0\u30c4\u30fc\u30eb\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",h({parentName:"p"},{href:"installation"}),"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306b\u95a2\u3059\u308b\u8a18\u4e8b"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(o.Z,{mdxType:"Tip"},"Windows 7\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30f34.16\u3092\u5f15\u304d\u7d9a\u304d\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",h({},{id:"linux\u4e0a\u3067\u306etouchgfx\u306e\u4f7f\u7528"}),"Linux\u4e0a\u3067\u306eTouchGFX\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"TouchGFX\u306fLinux\u4e0a\u3067\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002TouchGFX Designer\u306fLinux\u4e0a\u3067\u306f\u30cd\u30a4\u30c6\u30a3\u30d6\u3067\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u304c\u3001TouchGFX Designer\u3067\u751f\u6210\u3055\u308c\u305f\u30b3\u30fc\u30c9\u306fLinux\u3068Windows\u306e\u4e21\u65b9\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u306b\u5bfe\u3057\u3066\u63a8\u5968\u3055\u308c\u308b\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306f\u3001Windows\u3092\u5b9f\u884c\u3059\u308b\u4eee\u60f3\u30de\u30b7\u30f3\u3067TouchGFX Designer\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u958b\u767a\u8005\u306f\u5fc5\u8981\u306a\u3068\u304d\u306bDesigner\u3092\u4f7f\u7528\u3057\u3001\u305d\u308c\u4ee5\u5916\u3067\u306f\u901a\u5e38\u306eLinux\u74b0\u5883\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"Linux\u3067TouchGFX\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u30c4\u30fc\u30eb\u3068\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u8ffd\u52a0\u3067\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002 \u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Ubuntu\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u793a\u3057\u307e\u3059\u3002 \u3053\u3046\u3057\u305f\u8981\u4ef6\u306f\u3001\u4ed6\u306eLinux\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u3067\u3082\u985e\u4f3c\u3057\u305f\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",h({},{id:"ubuntu-2004\u3067\u306etouchgfx\u306e\u4f7f\u7528"}),"Ubuntu 20.04\u3067\u306eTouchGFX\u306e\u4f7f\u7528"),(0,r.kt)("p",null,"\u6700\u65b0\u306eUbuntu 20.04 LTS\u3067TouchGFX\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305a\u3001ruby\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\u30b3\u30de\u30f3\u30c9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo apt install ruby\n")),(0,r.kt)("p",null,"\u3053\u308c\u306b\u3088\u308aruby\u30d0\u30fc\u30b8\u30e7\u30f32.7\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002 Windows\u7528\u306eTouchGFX\u306b\u306f\u30d0\u30fc\u30b8\u30e7\u30f33.0\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u73fe\u6642\u70b9\u3067\u3053\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306fUbuntu\u30ea\u30dd\u30b8\u30c8\u30ea\u5185\u3067\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002 \u901a\u5e38\u306e\u4f7f\u7528\u3067\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30f32.7\u3067\u5341\u5206\u306b\u6a5f\u80fd\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,'\u6b21\u306b\u3001"roo" gem\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo gem install roo\n")),(0,r.kt)("p",null,"make\u304a\u3088\u3073g++\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001C++\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo  apt install make g++\n")),(0,r.kt)("p",null,"\u6700\u5f8c\u306e\u30d1\u30fc\u30c4\u306f\u3001SDL2\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u30d8\u30c3\u30c0\uff65\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"sudo apt install libsdl2-dev libsdl2-image-dev\n")),(0,r.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u306eg++\u30d0\u30fc\u30b8\u30e7\u30f3\u306f9.3.0\u3067\u3059\u3002 \u3053\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u4f7f\u7528\u3059\u308b\u8b66\u544a\u30ec\u30d9\u30eb\u306f\u3001TouchGFX\u306b\u542b\u307e\u308c\u3066\u3044\u308bWindows\u7528\u306eg++\u3068\u7570\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306eg++\u30d5\u30e9\u30b0\u3068\u30ea\u30f3\u30ab\uff65\u30d5\u30e9\u30b0\u306b\u30012\u3064\u306e\u5909\u66f4\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"config/gcc/app.mk"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{15-16}","{15-16}":!0}),"# Copyright (c) 2018(-2021) STMicroelectronics.\n# All rights reserved.\n#\n# This file is part of the TouchGFX 4.18.1 distribution.\n#\n# This software is licensed under terms that can be found in the LICENSE file in\n# the root directory of this software component.\n# If no LICENSE file comes with this software, it is provided AS-IS.\n#\n###############################################################################/\n# Relative location of the TouchGFX framework from root of application\ntouchgfx_path := ../../../touchgfx\n\n# Optional additional compiler flags\nuser_cflags := -DUSE_BPP=16 -Wformat-truncation=0\nlinker_options := -no-pie\n")),(0,r.kt)("p",null,"TouchGFX\u30d5\u30a1\u30a4\u30eb\u304cWindows\u306e\u30e9\u30a4\u30f3\u7d42\u4e86\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u305f\u3081\u3001Linux ruby\u304c\u8b66\u544a\u3092\u767a\u51fa\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"ruby: warning: shebang line ending with \\r may cause problems\n")),(0,r.kt)("p",null,"\u3053\u306e\u8b66\u544a\u306f\u30012\u3064\u306e\u30d5\u30a1\u30a4\u30eb\u3092Unix\u306e\u30e9\u30a4\u30f3\u7d42\u4e86\u306b\u5909\u66f4\u3059\u308b\uff08\u307e\u305f\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"#!"),"\u3067\u59cb\u307e\u308b\u6700\u521d\u306e\u884c\u5168\u4f53\u3092\u524a\u9664\u3059\u308b\uff09\u3053\u3068\u3067\u524a\u9664\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{}),"dos2unix touchgfx/framework/tools/textconvert/main.rb\ndos2unix touchgfx/framework/tools/videoconvert/videoconvert.rb\n")))}k.isMDXComponent=!0}}]);