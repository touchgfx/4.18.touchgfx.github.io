"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8637],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),h=o,m=s["".concat(l,".").concat(h)]||s[h]||d[h]||i;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[s]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,c=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:c,target:"_blank"},r.createElement("img",{width:n,height:i,src:c})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class c extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=c},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},26685:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(44035),i=n(29415),c=n(39130),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&h(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&h(e,n,t[n]);return e};const g={id:"widgets-and-containers",title:"\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668"},f=void 0,v={unversionedId:"development/ui-development/working-with-touchgfx/widgets-and-containers",id:"development/ui-development/working-with-touchgfx/widgets-and-containers",title:"\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668",description:"\u672c\u7bc0\u5c07\u4ecb\u7d39\u69cb\u5efaTouchGFX\u61c9\u7528\u7a0b\u5f0f\u6642\u7684\u5169\u500b\u6700\u57fa\u672c\u6982\u5ff5\uff1a\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668\u3002 \u9019\u662f\u60a8\u5c07\u5728\u6574\u500bUI\u958b\u767c\u904e\u7a0b\u4e2d\u4f7f\u7528\u7684\u5169\u500b\u69cb\u5efa\u55ae\u5143\u3002 \u5169\u8005\u90fd\u5305\u542bTouchGFX\u63d0\u4f9b\u7684\u9810\u88fd\u5143\u4ef6\uff0c\u540c\u6642\u4e5f\u8db3\u5920\u958b\u653e\uff0c\u53ef\u652f\u63f4\u5275\u5efa\u81ea\u8a02\u5be6\u73fe\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/widgets-and-containers.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/widgets-and-containers",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/widgets-and-containers",draft:!1,tags:[],version:"current",frontMatter:{id:"widgets-and-containers",title:"\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668"},sidebar:"docs",previous:{title:"\u5c07IDE\u8207TouchGFX\u7d44\u5408\u4f7f\u7528",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx"},next:{title:"\u6a21\u64ec\u5668",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/simulator"}},w={},y=[{value:"\u5c0f\u90e8\u4ef6",id:"widgets",level:2},{value:"\u5bb9\u5668",id:"containers",level:2}],k={toc:y};function b(e){var t,n=e,{components:a}=n,h=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),h),l(t,u({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u672c\u7bc0\u5c07\u4ecb\u7d39\u69cb\u5efaTouchGFX\u61c9\u7528\u7a0b\u5f0f\u6642\u7684\u5169\u500b\u6700\u57fa\u672c\u6982\u5ff5\uff1a\u5c0f\u90e8\u4ef6\u548c\u5bb9\u5668\u3002 \u9019\u662f\u60a8\u5c07\u5728\u6574\u500bUI\u958b\u767c\u904e\u7a0b\u4e2d\u4f7f\u7528\u7684\u5169\u500b\u69cb\u5efa\u55ae\u5143\u3002 \u5169\u8005\u90fd\u5305\u542bTouchGFX\u63d0\u4f9b\u7684\u9810\u88fd\u5143\u4ef6\uff0c\u540c\u6642\u4e5f\u8db3\u5920\u958b\u653e\uff0c\u53ef\u652f\u63f4\u5275\u5efa\u81ea\u8a02\u5be6\u73fe\u3002"),(0,r.kt)("h2",m({},{id:"widgets"}),"\u5c0f\u90e8\u4ef6"),(0,r.kt)("p",null,"TouchGFX\u548cTouchGFX Designer\u5de5\u5177\u63d0\u4f9b\u4e86\u8a31\u591a\u6a19\u6e96\u5c0f\u90e8\u4ef6\uff0c\u7528\u6236\u53ef\u4ee5\u81ea\u7531\u5730\u4f7f\u7528\u9019\u4e9b\u5c0f\u90e8\u4ef6\u4f86\u69cb\u5efa\u81ea\u5df1\u7684UI\uff0c\u4f8b\u5982",(0,r.kt)("a",m({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"Text Area"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button")," and ",(0,r.kt)("a",m({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"Texture Mapper"),". \u4f46\u5728\u57fa\u672c\u5c64\u9762\u4e0a\uff0cTouchGFX\u4e2d\u7684\u5c0f\u90e8\u4ef6\u53ea\u662f\u4e00\u500b\u62bd\u8c61\u7684\u5b9a\u7fa9\uff0c\u53ef\u4ee5\u5728\u87a2\u5e55\u4e0a\u7e6a\u88fd\uff0c\u4e5f\u53ef\u4ee5\u8207\u4e4b\u4ea4\u4e92\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/button/widget-appearance.webp",mdxType:"Figure"},"\u4e00\u500b\u4ee5\u5716\u50cf\u5c0f\u90e8\u4ef6\u4f5c\u70ba\u80cc\u666f\u7684\u6309\u9215\u5c0f\u90e8\u4ef6"),(0,r.kt)("p",null,"\u6709\u4e86TouchGFX Designer\uff0c\u7528\u6236\u53ef\u4ee5\u5c07\u4efb\u4f55\u60f3\u8981\u7684\u5c0f\u90e8\u4ef6\u6dfb\u52a0\u5230\u87a2\u5e55\u4e0a\uff0c\u4e26\u4f7f\u7528\u6240\u63d0\u4f9b\u7684\u7279\u5b9a\u65bc\u6bcf\u500b\u5c0f\u90e8\u4ef6\u7684\u5c6c\u6027\u9032\u884c\u5b9a\u5236\u3002 \u9084\u53ef\u4ee5\u901a\u904e\u4f7f\u7528TouchGFX\u63d0\u4f9b\u7684\u4e0d\u540c\u985e\u578b\u7684\u5bb9\u5668\u5c0d\u5c0f\u90e8\u4ef6\u9032\u884c\u5206\u7d44\u3002"),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u6dfb\u52a0\u5c0f\u90e8\u4ef6\uff0c\u65b9\u6cd5\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"add(widget_instance_name);"),"\u51fd\u6578\uff0c\u6216\u5c07\u5c0f\u90e8\u4ef6\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d\uff0c\u65b9\u6cd5\u662f\u4f7f\u7528\u5bb9\u5668\u6dfb\u52a0\u51fd\u6578\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"myContainer.add(widget_instance_name);"),"\u3002 \u6dfb\u52a0\u5c0f\u90e8\u4ef6\u7684\u9806\u5e8f\u5c07\u6c7a\u5b9aZ\u8ef8\u4e0a\u7684\u9806\u5e8f\u3002 \u6700\u5f8c\u6dfb\u52a0\u7684\u5c0f\u90e8\u4ef6\u5c07\u51fa\u73fe\u5728\u87a2\u5e55\u7684\u6700\u524d\u9762\u3002"),(0,r.kt)("p",null,"\u5c0f\u90e8\u4ef6\u7684\u5ea7\u6a19\u7e3d\u662f\u76f8\u5c0d\u4e8e\u5176\u7236\u7bc0\u9ede\uff0c\u5373\u6839\u5bb9\u5668\uff08\u87a2\u5e55\uff09\u6216\u5bb9\u5668\u3002"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u60a8\u53ef\u4ee5\u5275\u5efa\u81ea\u5df1\u7684\u5c0f\u90e8\u4ef6\uff0c\u4ee5\u6eff\u8db3\u81ea\u5df1\u53ef\u80fd\u6709\u7684\u4efb\u4f55\u7279\u5b9a\u9700\u6c42\u3002 \u5982\u9700\u8a73\u7d30\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1",(0,r.kt)(c.Z,{to:"../touchgfx-engine-features/custom-widgets",mdxType:"Link"},"\u81ea\u8a02\u5c0f\u90e8\u4ef6"),"\u4e00\u7bc0\u3002"),(0,r.kt)("h2",m({},{id:"containers"}),"\u5bb9\u5668"),(0,r.kt)("p",null,"\u5bb9\u5668\u662fTouchGFX\u4e2d\u7684\u4e00\u7a2e\u5143\u4ef6\uff0c\u53ef\u4ee5\u5305\u542b\u5b50\u7bc0\u9ede\uff08\u6bd4\u5982\u5c0f\u90e8\u4ef6\u548c\u5176\u4ed6\u5bb9\u5668\uff09\u3002"),(0,r.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u4ee5\u5728Widgets\uff08\u5c0f\u90e8\u4ef6\uff09\u9078\u9805\u5361\u4e2d\u7684containers\uff08\u5bb9\u5668\uff09\u985e\u5225\u4e0b\u627e\u5230\u5bb9\u5668\uff0c\u5411\u5bb9\u5668\u4e2d\u6dfb\u52a0\u5c0f\u90e8\u4ef6\u7684\u65b9\u6cd5\u5c07\u5c0f\u90e8\u4ef6\u62d6\u653e\u5230\u6a39\u72c0\u6aa2\u8996\u4e2d\u7684\u5bb9\u5668\u4e2d\u3002"),(0,r.kt)("p",null,"\u5b50\u5bb9\u5668\u5728Z\u8ef8\u4e0a\u7684\u9806\u5e8f\u7531\u5411\u5bb9\u5668\u4e2d\u6dfb\u52a0\u5b50\u5bb9\u5668\u6642\u7684\u9806\u5e8f\u6c7a\u5b9a - \u6700\u5f8c\u6dfb\u52a0\u7684\u5b50\u5bb9\u5668\u5c07\u986f\u793a\u5728\u87a2\u5e55\u7684\u6700\u524d\u9762\u3002"),(0,r.kt)("p",null,"\u7531\u65bcTouchGFX\u4e2d\u5c0f\u90e8\u4ef6\u7684\u4f4d\u7f6e\u662f\u76f8\u5c0d\u4e8e\u5176\u7236\u5bb9\u5668\u800c\u78ba\u5b9a\u7684\uff0c\u56e0\u6b64\u6539\u8b8a\u7236\u5bb9\u5668\u7684\u4f4d\u7f6e\u4e5f\u6703\u76f8\u61c9\u5730\u79fb\u52d5\u5b50\u5bb9\u5668\u3002"),(0,r.kt)("p",null,"\u5bb9\u5668\u5145\u7576\u8996\u7a97\uff0c\u9019\u610f\u5473\u8457\u53ea\u6709\u8207\u5bb9\u5668\u5e7e\u4f55\u5716\u5f62\u76f8\u4ea4\u7684\u5b50\u5bb9\u5668\u90e8\u5206\u624d\u53ef\u898b\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u52d5\u756b\u4e2d\uff0c\u60a8\u5c07\u770b\u5230\u5bb9\u5668\u7684\u8996\u7a97\u90e8\u5206\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002 \u9996\u5148\uff0c\u6211\u5011\u770b\u5230\u9019\u500b\u6309\u9215\u7684\u7236\u5bb9\u5668\u7684\u8f2a\u5ed3\uff1a"),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.webp",mdxType:"Figure"},"\u5145\u7576\u8996\u7a97\u7684\u5bb9\u5668"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"\u60a8\u53ef\u4ee5\u5275\u5efa\u81ea\u5df1\u7684\u5bb9\u5668\uff0c\u4ee5\u6eff\u8db3\u81ea\u5df1\u53ef\u80fd\u6709\u7684\u4efb\u4f55\u7279\u5b9a\u9700\u6c42\u3002 \u5982\u9700\u8a73\u7d30\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1",(0,r.kt)(c.Z,{to:"../touchgfx-engine-features/custom-containers",mdxType:"Link"},"\u81ea\u8a02\u5bb9\u5668"),"\u4e00\u7bc0\u3002"))}b.isMDXComponent=!0}}]);