"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8246],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),h=o,m=s["".concat(a,".").concat(h)]||s[h]||d[h]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=h;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29415:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},65407:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){var t,n;const i=(0,o.Z)(e.url),l=null!=(t=e.width)?t:"100%",c=null!=(n=e.height)?n:"100%";return r.createElement("div",{class:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:l,height:c},r.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},51900:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return k},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return w}});var r=n(3905),o=n(29415),i=n(39130),l=n(65407),c=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&h(e,n,t[n]);return e};const f={id:"examples",title:"\u7bc4\u4f8b\u548c\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a"},v=void 0,g={unversionedId:"development/ui-development/working-with-touchgfx/examples",id:"development/ui-development/working-with-touchgfx/examples",title:"\u7bc4\u4f8b\u548c\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a",description:"\u70ba\u4e86\u6709\u52a9\u65bc\u9032\u4e00\u6b65\u63a2\u7d22TouchGFX\u7684\u53ef\u80fd\u6027\u548c\u7279\u6027\uff0c\u7528\u6236\u53ef\u4ee5\u4f7f\u7528\u591a\u500b\u9810\u5148\u88fd\u4f5c\u7684\u7bc4\u4f8b\u548c\u6f14\u793a\u3002 \u53ef\u4ee5\u901a\u904eTouchGFX Designer\u7684Lobby\u5b58\u53d6\u9019\u4e9b\u7bc4\u4f8b\u548c\u6f14\u793a\uff08\u5747\u5305\u62ec\u514d\u8cbb\u4f7f\u7528\u7684\u5716\u50cf\u548c\u7a0b\u5f0f\u78bc\u7b49\uff09\uff0c\u9019\u610f\u5473\u8457\u53ef\u4ee5\u5c07\u5b83\u5011\u4f5c\u70ba\u57fa\u790e\uff0c\u4ee5\u69cb\u5efa\u81ea\u5df1\u7368\u6709\u7684\u61c9\u7528\u7a0b\u5f0f\u3002 \u5c07\u7bc4\u4f8b\u548c\u6f14\u793a\u8207TouchGFX\u958b\u767c\u7248\u8a2d\u7f6e\u7d50\u5408\u53ef\u4ee5\u5275\u5efaTouchGFX\u61c9\u7528\u7a0b\u5f0f\u3002 \u5982\u679c\u60a8\u4e0d\u592a\u719f\u6089TouchGFX\uff0c\u53ef\u4ee5\u4ee5\u6b64\u70ba\u826f\u597d\u7684\u8d77\u9ede\uff0c\u6df1\u5165\u77ad\u89e3TouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u5de5\u4f5c\u539f\u7406\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/examples.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/examples",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/examples",draft:!1,tags:[],version:"current",frontMatter:{id:"examples",title:"\u7bc4\u4f8b\u548c\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a"},sidebar:"docs",previous:{title:"\u9664\u932f",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/debugging"},next:{title:"\u9375\u76e4\u5feb\u901f\u9375",permalink:"/4.18/zh-TW/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}},y={},w=[{value:"\u7bc4\u4f8b\u548c\u6f14\u793a",id:"ui-templates",level:2},{value:"\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a",id:"online-applications",level:2}],b={toc:w};function k(e){var t,n=e,{components:c}=n,h=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),h),a(t,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u70ba\u4e86\u6709\u52a9\u65bc\u9032\u4e00\u6b65\u63a2\u7d22TouchGFX\u7684\u53ef\u80fd\u6027\u548c\u7279\u6027\uff0c\u7528\u6236\u53ef\u4ee5\u4f7f\u7528\u591a\u500b\u9810\u5148\u88fd\u4f5c\u7684\u7bc4\u4f8b\u548c\u6f14\u793a\u3002 \u53ef\u4ee5\u901a\u904eTouchGFX Designer\u7684",(0,r.kt)("a",m({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"Lobby"),"\u5b58\u53d6\u9019\u4e9b\u7bc4\u4f8b\u548c\u6f14\u793a\uff08\u5747\u5305\u62ec\u514d\u8cbb\u4f7f\u7528\u7684\u5716\u50cf\u548c\u7a0b\u5f0f\u78bc\u7b49\uff09\uff0c\u9019\u610f\u5473\u8457\u53ef\u4ee5\u5c07\u5b83\u5011\u4f5c\u70ba\u57fa\u790e\uff0c\u4ee5\u69cb\u5efa\u81ea\u5df1\u7368\u6709\u7684\u61c9\u7528\u7a0b\u5f0f\u3002 \u5c07\u7bc4\u4f8b\u548c\u6f14\u793a\u8207",(0,r.kt)("a",m({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"TouchGFX\u958b\u767c\u7248\u8a2d\u7f6e"),"\u7d50\u5408\u53ef\u4ee5\u5275\u5efaTouchGFX\u61c9\u7528\u7a0b\u5f0f\u3002 \u5982\u679c\u60a8\u4e0d\u592a\u719f\u6089TouchGFX\uff0c\u53ef\u4ee5\u4ee5\u6b64\u70ba\u826f\u597d\u7684\u8d77\u9ede\uff0c\u6df1\u5165\u77ad\u89e3TouchGFX\u61c9\u7528\u7a0b\u5f0f\u7684\u5de5\u4f5c\u539f\u7406\u3002"),(0,r.kt)("p",null,"\u4e00\u4e9b\u7bc4\u4f8b\u548c\u6f14\u793a\u53ea\u805a\u7126\u5728\u55ae\u4e00\u7279\u6027\uff0c\u800c\u53e6\u4e00\u4e9b\u5247\u5be6\u73feTouchGFX\u4e2d\u7684\u5e7e\u500b\u4e0d\u540c\u529f\u80fd\u3002 \u6f14\u793a\u5206\u70ba\u5169\u500b\u4e0d\u540c\u985e\u578b\uff1a",(0,r.kt)("a",m({parentName:"p"},{href:"#ui-templates"}),"Demos")," and ",(0,r.kt)("a",m({parentName:"p"},{href:"#online-applications"}),"Board Specific Demos"),"\u3002"),(0,r.kt)("h2",m({},{id:"ui-templates"}),"\u7bc4\u4f8b\u548c\u6f14\u793a"),(0,r.kt)("p",null,"\u7bc4\u4f8b\u901a\u5e38\u662f\u66f4\u5c0f\u3001\u66f4\u7368\u7acb\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u4e3b\u8981\u95dc\u6ce8\u7279\u5b9a\u7279\u6027\uff0c\u6bd4\u5982\u4e0d\u540c\u7684\u5c0f\u90e8\u4ef6\u3002 \u7bc4\u4f8b\u53ef\u4ee5\u5728\u4efb\u4f55STM32\u8a55\u4f30\u5957\u4ef6\u548cPC\u6a21\u64ec\u5668\u4e0a\u904b\u884c\uff0c\u4f46\u70ba\u4e86\u7372\u5f97\u6700\u4f73\u9ad4\u9a57\uff0c\u5efa\u8b70\u5728\u7bc4\u4f8b\u7684\u89e3\u6790\u5ea6\u8207\u60a8\u7684\u958b\u767c\u677f\u89e3\u6790\u5ea6\u5339\u914d\u7684\u60c5\u6cc1\u4e0b\u5275\u5efa\u5c08\u6848\u3002 \u6709\u4e9b\u7bc4\u4f8b\u5728\u69cb\u5efa\u6642\u4e5f\u8003\u616e\u5230\u4e86\u7279\u5b9a\u7684\u8272\u6df1\uff0c\u9019\u610f\u5473\u8457\u5b83\u5011\u5728\u8f03\u4f4e\u7684\u8272\u6df1\u986f\u793a\u61c9\u7528\u4e2d\u7684\u986f\u793a\u6548\u679c\u53ef\u80fd\u4e0d\u6703\u5f88\u597d\u3002"),(0,r.kt)("p",null,"\u6f14\u793a\u5305\u62ec\u5e7e\u500bTouchGFX\u5718\u968a\u88fd\u4f5c\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u5b83\u5011\u5c55\u793a\u4e86\u63a1\u7528\u66f4\u9ad8\u54c1\u8ceaUI\u8a2d\u8a08\u7684\u66f4\u591a\u7279\u6027\u3002 \u9019\u4e9b\u80fd\u5920\u8b93\u60a8\u958b\u59cb\u611f\u53d7TouchGFX\u7684\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u7bc4\u4f8b\u6216\u6f14\u793a\u5275\u5efa\u61c9\u7528\u7a0b\u5f0f\uff0c\u9996\u5148\u9ede\u64calobby\u5de6\u4e0a\u65b9\u7684\u201c\u7bc4\u4f8b\u201d\u6216\u201c\u6f14\u793a\u201d\uff0c\u4ee5\u67e5\u770b\u53ef\u7528\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u7136\u5f8c\u9ede\u64ca\u60a8\u9700\u8981\u7684\u61c9\u7528\u7a0b\u5f0f\u3002 \u6216\u8005\uff0c\u53ef\u4ee5\u5728\u4e0b\u62c9\u5f0f\u529f\u80fd\u8868\u4e2d\u9078\u64c7\u53e6\u5916\u7684\u89e3\u6790\u5ea6\u548c\u8272\u6df1\u3002 \u5982\u679c\u60f3\u5728\u4e00\u500b\u652f\u63f4\u7684\u786c\u9ad4\u4e0a\u904b\u884c\uff0c\u9ede\u64ca\u8996\u7a97\u9802\u90e8\u7684\u201c\u9078\u64c7\u786c\u9ad4\u201d\uff0c\u9078\u64c7\u60f3\u8981\u7684\u958b\u767c\u677f\uff0c\u7136\u5f8c\u6309\u201c\u9078\u64c7\u201d\u3002 \u6700\u5f8c\uff0c\u6309\u201c\u5275\u5efa\u201d\u901a\u904e\u9078\u5b9a\u7684TouchGFX\u958b\u767c\u7248\u8a2d\u7f6e\u548c\u7bc4\u4f8b\u6216\u6f14\u793a\u5275\u5efa\u61c9\u7528\u7a0b\u5f0f\u3002 \u6309\u201c\u904b\u884c\u6a21\u64ec\u5668\u201d\u6216\u201c\u904b\u884c\u76ee\u6a19\u201d\u67e5\u770b\u904b\u884c\u7684\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,r.kt)("p",null,"\u9019\u4e9b\u6b65\u9a5f\u7684\u52d5\u756b\u6f14\u793a\u5982\u4e0b\uff1a"),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"\u4f7f\u7528\u7bc4\u4f8b\u5275\u5efa\u5c08\u6848"),(0,r.kt)("h2",m({},{id:"online-applications"}),"\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a"),(0,r.kt)("p",null,"\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a\u662f\u91dd\u5c0d\u7279\u5b9a\u786c\u9ad4\u89e3\u6c7a\u65b9\u6848\u7684\u958b\u7bb1\u5373\u7528\u578b\u61c9\u7528\u7a0b\u5f0f\uff0c\u56e0\u6b64\u4e0d\u53ef\u80fd\u5728\u4efb\u4f55\u5176\u4ed6STM32\u8a55\u4f30\u5957\u4ef6\uff08\u9664\u4e86PC\u6a21\u64ec\u5668\uff09\u4e0a\u904b\u884c\u3002 \u9019\u4e9b\u61c9\u7528\u7a0b\u5f0f\u901a\u5e38\u8981\u5927\u5f97\u591a\uff0c\u4e26\u4e14\u63a2\u7d22TouchGFX\u6846\u67b6\u7684\u591a\u500b\u4e0d\u540c\u7279\u6027\uff0c\u9084\u53ef\u4ee5\u5305\u542b\u8207\u786c\u9ad4\u7684\u96c6\u6210\u7bc4\u4f8b\u3002"),(0,r.kt)("p",null,"\u5982\u8981\u4f7f\u7528\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a\u5275\u5efa\u61c9\u7528\u7a0b\u5f0f\uff0c\u9996\u5148\u9ede\u64calobby\u5de6\u4e0a\u89d2\u7684\u2018\u6f14\u793a\u2019\u9078\u9805\u5361\u9032\u884c\u5b58\u53d6\u3002 \u9ede\u64ca\u8996\u7a97\u9802\u90e8\u7684\u201c\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a\u201d\u6a19\u7c64\uff0c\u4ee5\u986f\u793a\u53ef\u7528\u7684\u61c9\u7528\u7a0b\u5f0f\u3002 \u9ede\u64ca\u60f3\u8981\u7684\u61c9\u7528\u7a0b\u5f0f\u4e26\u6309\u201c\u5275\u5efa\u201d\u3002 \u6309\u201c\u904b\u884c\u6a21\u64ec\u5668\u201d\u6216\u201c\u904b\u884c\u76ee\u6a19\u201d\u67e5\u770b\u904b\u884c\u7684\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,r.kt)("p",null,"\u9019\u4e9b\u6b65\u9a5f\u7684\u52d5\u756b\u6f14\u793a\u5982\u4e0b\uff1a"),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"\u4f7f\u7528\u7279\u5b9a\u65bc\u958b\u767c\u677f\u7684\u6f14\u793a\u5275\u5efa\u5c08\u6848"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u5982\u9700\u8a73\u7d30\u77ad\u89e3\u5982\u4f55\u901a\u904e\u7bc4\u4f8b\u6216\u6f14\u793a\u5275\u5efa\u61c9\u7528\u7a0b\u5f0f\uff0c\u8acb\u53c3\u95b1",(0,r.kt)(i.Z,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"Lobby\u90e8\u5206\u3002")))}k.isMDXComponent=!0}}]);