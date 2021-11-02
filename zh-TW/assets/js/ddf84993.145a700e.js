(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2904],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return t?i.createElement(h,o(o({ref:n},u),{},{components:t})):i.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},22425:function(e,n,t){"use strict";var i=t(67294);class a extends i.Component{render(){return i.createElement("div",{class:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}n.Z=a},44035:function(e,n,t){"use strict";var i=t(67294),a=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,r=e.height,o=(0,a.Z)(e.imageSource);return n?i.createElement("div",{class:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:t,height:r,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{class:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:t,height:r,src:o})),i.createElement("p",null,e.children))}},29415:function(e,n,t){"use strict";var i=t(67294),a=t(88678);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}n.Z=o},88678:function(e,n,t){"use strict";var i=t(67294);class a extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{class:e},i.createElement("div",{class:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{class:"highlight-content"},this.props.children))}}n.Z=a},93054:function(e,n,t){"use strict";var i=t(67294),a=t(88678);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}n.Z=o},31217:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(67294),a=t(73727),r=t(11368),o=t(35096),l=t(84487);const c=(0,i.createContext)({collectLink:()=>{}});var s=t(25026),u=t(67023),d=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,x=(e,n)=>{for(var t in n||(n={}))k.call(n,t)&&f(e,t,n[t]);if(h)for(var t of h(n))g.call(n,t)&&f(e,t,n[t]);return e};var v=function(e){var n,t=e,{isNavLink:d,to:f,href:v,activeClassName:b,isActive:w,"data-noBrokenLinkCheck":y,autoAddBaseUrl:A=!0}=t,E=((e,n)=>{var t={};for(var i in e)k.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&h)for(var i of h(e))n.indexOf(i)<0&&g.call(e,i)&&(t[i]=e[i]);return t})(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:M,baseUrl:C}}=(0,r.Z)(),{withBaseUrl:N}=(0,s.C)(),S=(0,i.useContext)(c),T=f||v,F=(0,o.Z)(T),O=null==T?void 0:T.replace("pathname://","");let B=void 0!==O?(Z=O,A&&(e=>e.startsWith("/"))(Z)?N(Z):Z):void 0;var Z;B&&F&&(B=(0,u.applyTrailingSlash)(B,{trailingSlash:M,baseUrl:C}));const P=(0,i.useRef)(!1),D=d?a.OL:a.rU,V=l.Z.canUseIntersectionObserver,_=(0,i.useRef)();(0,i.useEffect)((()=>(!V&&F&&null!=B&&window.docusaurus.prefetch(B),()=>{V&&_.current&&_.current.disconnect()})),[_,B,V,F]);const j=null!==(n=null==B?void 0:B.startsWith("#"))&&void 0!==n&&n,L=!B||!F||j;return B&&F&&!j&&!y&&S.collectLink(B),L?i.createElement("a",x(x({href:B},T&&!F&&{target:"_blank",rel:"noopener noreferrer"}),E)):i.createElement(D,x((H=x({},E),p(H,m({onMouseEnter:()=>{P.current||null==B||(window.docusaurus.preload(B),P.current=!0)},innerRef:e=>{var n,t;V&&e&&F&&(n=e,t=()=>{null!=B&&window.docusaurus.prefetch(B)},_.current=new window.IntersectionObserver((e=>{e.forEach((e=>{n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.current.unobserve(n),_.current.disconnect(),t())}))})),_.current.observe(n))},to:B||""}))),d&&{isActive:w,activeClassName:b}));var H}},35096:function(e,n,t){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}t.d(n,{b:function(){return i},Z:function(){return a}})},25026:function(e,n,t){"use strict";t.d(n,{C:function(){return r},Z:function(){return o}});var i=t(11368),a=t(35096);function r(){const{siteConfig:{baseUrl:e="/",url:n}={}}=(0,i.Z)();return{withBaseUrl:(t,i)=>function(e,n,t,{forcePrependBaseUrl:i=!1,absolute:r=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(i)return n+t;const o=t.startsWith(n)?t:n+t.replace(/^\//,"");return r?e+o:o}(n,e,t,i)}}function o(e,n={}){const{withBaseUrl:t}=r();return t(e,n)}},67271:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){const{trailingSlash:t,baseUrl:i}=n;if(e.startsWith("#"))return e;if(void 0===t)return e;const[a]=e.split(/[#?]/),r="/"===a||a===i?a:(o=a,t?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,r)}},67023:function(e,n,t){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var a=t(67271);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return i(a).default}});var r=t(11080);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return i(r).default}})},11080:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},8631:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return f},contentTitle:function(){return x},metadata:function(){return v},toc:function(){return b},default:function(){return y}});var i=t(3905),a=t(31217),r=t(44035),o=t(29415),l=t(22425),c=t(93054),s=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&k(e,t,n[t]);if(p)for(var t of p(n))h.call(n,t)&&k(e,t,n[t]);return e};const f={id:"mixins",title:"Mixins"},x=void 0,v={unversionedId:"development/ui-development/touchgfx-engine-features/mixins",id:"development/ui-development/touchgfx-engine-features/mixins",isDocsHomePage:!1,title:"Mixins",description:"Mixin\u985e\u64f4\u5c55\u5c0f\u90e8\u4ef6\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u4f7f\u4e4b\u80fd\u5920\u5c07\u79fb\u52d5\u52d5\u756b\u6216\u6539\u8b8aalpha\u503c\u3002 \u5728Move Animator\u548cFade Animator Mixin\u7684\u57fa\u790e\u4e0a\uff0cTouchGFX Designer\u4ea4\u4e92\u80fd\u5920\u751f\u6210\u79fb\u52d5\u52d5\u756b\u6216alpha\u503c\u8b8a\u5316\u88fd\u4f5c\u6210\u7684\u7a0b\u5f0f\u78bc\u3002 \u9019\u4e9bMixin\u53ef\u901a\u904eTouchGFX Designer\u6216\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u624b\u52d5\u6dfb\u52a0\u5230\u5c0f\u90e8\u4ef6\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/mixins.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/mixins",permalink:"/4.18/zh-TW/docs/development/ui-development/touchgfx-engine-features/mixins",tags:[],version:"current",frontMatter:{id:"mixins",title:"Mixins"},sidebar:"docs",previous:{title:"\u5f8c\u7aef\u901a\u4fe1",permalink:"/4.18/zh-TW/docs/development/ui-development/touchgfx-engine-features/backend-communication"},next:{title:"\u6587\u5b57\u548c\u5b57\u9ad4",permalink:"/4.18/zh-TW/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"}},b=[{value:"Move Animator",id:"move-animator",children:[{value:"\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528Move Animator",id:"using-move-animator-in-user-code",children:[],level:3},{value:"\u7528\u6236\u4ee3\u78bc\u4e2d\u7684callback\u5be6\u73fe",id:"callback-implementation-in-user-code",children:[],level:3},{value:"API\u53c3\u8003",id:"api-reference",children:[],level:3}],level:2},{value:"Fade Animator",id:"fade-animator",children:[{value:"\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528Fade Animator",id:"using-fade-animator-in-user-code",children:[],level:3},{value:"\u7528\u6236\u4ee3\u78bc\u4e2d\u7684callback\u5be6\u73fe",id:"callback-implementation-in-user-code-1",children:[],level:3},{value:"API\u53c3\u8003",id:"api-reference-1",children:[],level:3}],level:2},{value:"ClickListener",id:"clicklistener",children:[{value:"\u7528\u6236\u4ee3\u78bc\u4e2d\u7684callback\u5be6\u73fe",id:"callback-implementation-in-user-code-2",children:[],level:3},{value:"API\u53c3\u8003",id:"api-reference-2",children:[],level:3}],level:2},{value:"Draggable",id:"draggable",children:[{value:"API\u53c3\u8003",id:"api-reference-3",children:[],level:3}],level:2}],w={toc:b};function y(e){var n,t=e,{components:s}=t,k=((e,n)=>{var t={};for(var i in e)m.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&p)for(var i of p(e))n.indexOf(i)<0&&h.call(e,i)&&(t[i]=e[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(n=g(g({},w),k),u(n,d({components:s,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Mixin\u985e\u64f4\u5c55\u5c0f\u90e8\u4ef6\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u4f7f\u4e4b\u80fd\u5920\u5c07\u79fb\u52d5\u52d5\u756b\u6216\u6539\u8b8aalpha\u503c\u3002 \u5728Move Animator\u548cFade Animator Mixin\u7684\u57fa\u790e\u4e0a\uff0cTouchGFX Designer\u4ea4\u4e92\u80fd\u5920\u751f\u6210\u79fb\u52d5\u52d5\u756b\u6216alpha\u503c\u8b8a\u5316\u88fd\u4f5c\u6210\u7684\u7a0b\u5f0f\u78bc\u3002 \u9019\u4e9bMixin\u53ef\u901a\u904eTouchGFX Designer\u6216\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u624b\u52d5\u6dfb\u52a0\u5230\u5c0f\u90e8\u4ef6\u3002"),(0,i.kt)("h2",g({},{id:"move-animator"}),"Move Animator"),(0,i.kt)("p",null,"Move Animator Mixin\u4f7f\u5c0f\u90e8\u4ef6\u80fd\u5920\u5c07\u5f9e\u7576\u524d\u4f4d\u7f6e\u5230\u6307\u5b9a\u7d50\u675f\u4f4d\u7f6e\u7684\u79fb\u52d5\u88fd\u4f5c\u6210\u52d5\u756b\u3002 \u901a\u904e\u63d0\u4f9bEasingEquation\uff0c\u53ef\u4ee5\u5c0d\u6cbfX\u548cY\u65b9\u5411\u7684\u79fb\u52d5\u9032\u884c\u63cf\u8ff0\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u901a\u904e\u5728\u201cMixin\u201d\u5340\u6bb5\u4e2d\u7d66\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5c6c\u6027\u4e2d\u555f\u7528Mixin\u4f86\u61c9\u7528\u5b83\uff0c\u5982\u4e0b\u5716\u6240\u793a\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5275\u5efa\u4e86\u79fb\u52d5\u5c0f\u90e8\u4ef6\u7684",(0,i.kt)("a",g({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"\u4ea4\u4e92"),"\uff0cMove Animator Mixin\u6703\u88ab\u81ea\u52d5\u61c9\u7528\u65bc\u5c0f\u90e8\u4ef6\u3002"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-move-animator-enabled-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u555f\u7528\u4e86Move Animator Mixin"),(0,i.kt)("p",null,"\u555f\u7528Move Animator Mixin\u6703\u66f4\u6539\u751f\u6210\u7684\u5c0f\u90e8\u4ef6\u7684\u5ba3\u544a\u7c3d\u540d\uff08\u5982\u4e0b\u6587\u6240\u793a\uff09\uff0c\u5176\u4e2d\u7684",(0,i.kt)("a",g({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\u555f\u7528\u4e86Move Animator Mixin\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"touchgfx::MoveAnimator< touchgfx::Box > box;\n")),(0,i.kt)("h3",g({},{id:"using-move-animator-in-user-code"}),"\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528Move Animator"),(0,i.kt)("p",null,"\u7576\u6709Move Animator Mixin\u61c9\u7528\u4e8e\u5c0f\u90e8\u4ef6\u6642\uff0c\u5c0f\u90e8\u4ef6\u80fd\u5920\u5c07\u5176\u5f9e\u4e00\u500b\u4f4d\u7f6e\u5230\u53e6\u4e00\u500b\u4f4d\u7f6e\u7684\u79fb\u52d5\u88fd\u4f5c\u6210\u52d5\u756b\u3002 \u5728\u672c\u7bc0\u4e2d\uff0c\u5c07\u63d0\u4f9b\u5982\u4f55\u4f7f\u7528\u6b64\u65b0\u529f\u80fd\u7684\u6f14\u793a\u3002"),(0,i.kt)("p",null,"After enabling the Move Animator mixin in TouchGFX Designer on a Box widget, the method ",(0,i.kt)("inlineCode",{parentName:"p"},"startMoveAnimation")," becomes available for use. \u6b64\u65b9\u6cd5\u6309\u4ee5\u4e0b\u9806\u5e8f\u63a1\u7528\u4e865\u500b\u53c3\u6578\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"endX\uff1a\u76f8\u5c0d\u4e8e\u5176\u7236\u5143\u4ef6\u7684X\u4f4d\u7f6e\uff0c\u5c0f\u90e8\u4ef6\u61c9\u79fb\u52d5\u5230\u6b64\u4f4d\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ul"},"endY\uff1a\u76f8\u5c0d\u4e8e\u5176\u7236\u5143\u4ef6\u7684Y\u4f4d\u7f6e\uff0c\u5c0f\u90e8\u4ef6\u61c9\u79fb\u52d5\u5230\u6b64\u4f4d\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ul"},"duration\uff1aX\u548cY\u8ef8\u65b9\u5411\u7684\u79fb\u52d5\u61c9\u8017\u8cbb\u7684\u6642\u9593\uff0c\u4ee5tick\u70ba\u55ae\u4f4d\u3002"),(0,i.kt)("li",{parentName:"ul"},"xProgressionEquation\uff1a\u61c9\u7576\u5c0dX\u8ef8\u65b9\u5411\u7684\u79fb\u52d5\u4f7f\u7528\u7684EasingEquation\u3002"),(0,i.kt)("li",{parentName:"ul"},"yProgressionEquation\uff1a\u61c9\u7576\u5c0dY\u8ef8\u65b9\u5411\u7684\u79fb\u52d5\u4f7f\u7528\u7684EasingEquation\u3002")),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u79fb\u52d5\u5230\u5ea7\u6a19X\u7684\u7bc4\u4f8b\uff1a0, X\uff1a\u57280\u523040 tick\u7684\u6642\u9593\u6bb5\u5167\uff0c\u5728X\u548cY\u8ef8\u65b9\u5411\u4f7f\u7528\u7dda\u6027EasingEquation\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"    box.startMoveAnimation(0, 0, 40, EasingEquations::linearEaseNone, EasingEquations::linearEaseNone);\n")),(0,i.kt)(o.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../api/classes/classtouchgfx_1_1_easing_equations",mdxType:"Link"},"\u53ef\u7528EasingEquation\u7684API\u53c3\u8003")),(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"https://easings.net/",mdxType:"Link"},"EasingEquation\u7684\u5716\u5f62\u6f14\u793a"))),(0,i.kt)("h3",g({},{id:"callback-implementation-in-user-code"}),"\u7528\u6236\u4ee3\u78bc\u4e2d\u7684callback\u5be6\u73fe"),(0,i.kt)("p",null,"\u7576Move Animator Mixin\u5b8c\u6210\u52d5\u756b\u6642\uff0c\u767c\u9001callback\u3002 \u5728\u672c\u7bc0\u4e2d\uff0c\u5c07\u6f14\u793a\u5982\u4f55\u5be6\u73fe\u6b64callback\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u5c0dBox\u5c0f\u90e8\u4ef6\u555f\u7528Move Animator Mixin\u5f8c\uff0c\u4e0b\u4e00\u6b65\u662f\u70bacallback\u548c\u51fd\u6578\u6dfb\u52a0\u5ba3\u544a\uff0c\u4ee5\u4fbf\u8655\u7406\u7e7c\u627f\u81ea\u57fa\u985e\uff08Box\u5c0f\u90e8\u4ef6\u7684\u4f4d\u7f6e\u6240\u5728\uff09\u7684Screen header\u985e\u6a94\u4e2d\u7684\u4e8b\u4ef6\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for move animation ended on a Box\n    void boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<Box>& comp);\n\nprotected:\n    // Declaring callback type of MoveAnimator<Box>\n    Callback <Screen1View, const touchgfx::MoveAnimator<Box>&> boxMoveAnimationEndedCallback;\n};\n")),(0,i.kt)("p",null,"\u7136\u5f8c\uff0c\u5c0d\u65bc\u8996\u5716\u7269\u4ef6\uff0c\u9700\u8981\u627e\u5230\u4e8b\u4ef6\u8655\u7406\u7684callback\u5ba3\u544a\u548c\u51fd\u6578\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n  // In constructor for callback, bind to this view object and bind which function to handle the event.\n  boxMoveAnimationEndedCallback(this, &Screen1View::boxMoveAnimationEndedHandler) { }\n")),(0,i.kt)("p",null,"Next step is to tell the Box widget which callback to use when its move animation has ended, this is done in ",(0,i.kt)("inlineCode",{parentName:"p"},"setupScreen()")," to ensure that the callback is set every time the screen is entered."),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n  // Add the callback to box\n  box.setMoveAnimationEndedAction(boxMoveAnimationEndedCallback);\n}\n")),(0,i.kt)("p",null,"Last step is to implement the function, ",(0,i.kt)("inlineCode",{parentName:"p"},"boxMoveAnimationEndedHandler"),", that handles the callback. \u6700\u597d\u78ba\u8a8d\u79fb\u52d5\u52d5\u756b\u5df2\u7d50\u675f\u7684Box\u78ba\u5be6\u662f\u8a72\u201c\u65b9\u584a\u201d"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<touchgfx::Box>& b)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when move animation on 'box' has ended here.\n    }\n}\n")),(0,i.kt)("h3",g({},{id:"api-reference"}),"API\u53c3\u8003"),(0,i.kt)(o.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../api/classes/classtouchgfx_1_1_move_animator",mdxType:"Link"},"MoveAnimator\u985e\u7684API\u53c3\u8003"))),(0,i.kt)("h2",g({},{id:"fade-animator"}),"Fade Animator"),(0,i.kt)("p",null,"Fade Animator Mixin\u4f7f\u5c0f\u90e8\u4ef6\u80fd\u5920\u5c07\u5176\u5f9e\u7576\u524dalpha\u503c\u81f3\u6307\u5b9a\u7d50\u675falpha\u503c\u7684\u6f38\u96b1\u904e\u7a0b\u88fd\u4f5c\u6210\u52d5\u756b\u3002 \u901a\u904e\u63d0\u4f9bEasingEquation\uff0c\u53ef\u4ee5\u63cf\u8ff0\u6f38\u96b1\u901f\u7387\u3002"),(0,i.kt)(c.Z,{mdxType:"Note"},"\u53ea\u6709\u5be6\u73fealpha\u503c\u7684\u5c0f\u90e8\u4ef6\u624d\u652f\u6301Fade Animator Mixin\u3002 \u9019\u610f\u5473\u8457\u6240\u6709\u53ef\u80fd\u5305\u542b\u5176\u4ed6\u5c0f\u90e8\u4ef6\u7684\u5c0f\u90e8\u4ef6\uff08\u5982",(0,i.kt)(a.Z,{to:"../ui-components/containers/container",mdxType:"Link"},"\u5bb9\u5668"),"\uff09\u90fd\u4e0d\u652f\u63f4Fade Animator Mixin\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u901a\u904e\u5728\u201cMixin\u201d\u5340\u6bb5\u4e2d\u7d66\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5c6c\u6027\u4e2d\u555f\u7528Mixin\u4f86\u61c9\u7528\u5b83\uff0c\u5982\u4e0b\u5716\u6240\u793a\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6dfb\u52a0\u4e86\u5728\u5927\u65bc\u96f6\u7684\u6642\u9593\u6bb5\u5167\u6f38\u96b1\u5c0f\u90e8\u4ef6\u7684",(0,i.kt)("a",g({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"\u4ea4\u4e92"),"\uff0cFade Animator Mixin\u6703\u88ab\u81ea\u52d5\u61c9\u7528\u65bc\u5c0f\u90e8\u4ef6\u3002"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-fade-animator-enabled-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u555f\u7528\u4e86Fade Animator Mixin"),(0,i.kt)("p",null,"\u555f\u7528Fade Animator Mixin\u6703\u66f4\u6539\u751f\u6210\u7684\u5c0f\u90e8\u4ef6\u7684\u5ba3\u544a\u7c3d\u540d\uff08\u5982\u4e0b\u6587\u6240\u793a\uff09\uff0c\u5176\u4e2d\u7684",(0,i.kt)("a",g({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\u555f\u7528\u4e86Fade Animator Mixin\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"touchgfx::FadeAnimator< touchgfx::Box > box;\n")),(0,i.kt)("h3",g({},{id:"using-fade-animator-in-user-code"}),"\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528Fade Animator"),(0,i.kt)("p",null,"\u7576\u6709Fade Animator Mixin\u61c9\u7528\u4e8e\u5c0f\u90e8\u4ef6\u6642\uff0c\u5c0f\u90e8\u4ef6\u80fd\u5920\u5c07\u5176alpha\u503c\u5f9e\u4e00\u500b\u8a2d\u5b9a\u503c\u5230\u53e6\u4e00\u500b\u8a2d\u5b9a\u503c\u7684\u8b8a\u5316\u904e\u7a0b\u88fd\u4f5c\u6210\u52d5\u756b\u3002 \u5728\u672c\u7bc0\u4e2d\uff0c\u5c07\u63d0\u4f9b\u5982\u4f55\u4f7f\u7528\u6b64\u65b0\u529f\u80fd\u7684\u6f14\u793a\u3002"),(0,i.kt)("p",null,"After enabling the Fade Animator mixin in TouchGFX Designer on a Box widget, the method ",(0,i.kt)("inlineCode",{parentName:"p"},"startFadeAnimation")," becomes available for use. \u6b64\u65b9\u6cd5\u6309\u4ee5\u4e0b\u9806\u5e8f\u63a1\u7528\u4e863\u500b\u53c3\u6578\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"endAlpha\uff1a\u52d5\u756b\u5b8c\u6210\u6642\u5c0f\u90e8\u4ef6\u61c9\u7576\u5177\u6709\u7684alpha\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},"duration\uff1a\u52d5\u756b\u9054\u5230\u65b0\u7684alpha\u503c\u8a2d\u7f6e\u61c9\u8017\u8cbb\u7684\u6642\u9593\uff0c\u4ee5tick\u70ba\u55ae\u4f4d\u3002"),(0,i.kt)("li",{parentName:"ul"},"alphaProgressionEquation\uff1a\u61c9\u7576\u5c0dalpha\u503c\u8b8a\u5316\u901f\u7387\u4f7f\u7528\u7684EasingEquation\u3002")),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u500b\u4f7f\u7528\u7dda\u6027EasingEquation\u6642\uff0calpha\u503c\u572840 tick\u7684\u6642\u9593\u5167\u8b8a\u70ba0\u7684\u7bc4\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"    box.startFadeAnimation(0, 0, 40, EasingEquations::linearEaseNone);\n")),(0,i.kt)(o.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../api/classes/classtouchgfx_1_1_easing_equations",mdxType:"Link"},"\u53ef\u7528EasingEquation\u7684API\u53c3\u8003")),(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"https://easings.net/",mdxType:"Link"},"EasingEquation\u7684\u5716\u5f62\u6f14\u793a"))),(0,i.kt)("h3",g({},{id:"callback-implementation-in-user-code-1"}),"\u7528\u6236\u4ee3\u78bc\u4e2d\u7684callback\u5be6\u73fe"),(0,i.kt)("p",null,"\u7576Fade Animator Mixin\u5b8c\u6210\u52d5\u756b\u6642\uff0c\u767c\u9001callback\u3002 \u5728\u672c\u7bc0\u4e2d\uff0c\u5c07\u6f14\u793a\u5982\u4f55\u5be6\u73fe\u6b64callback\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u5c0dBox\u5c0f\u90e8\u4ef6\u555f\u7528Fade Animator Mixin\u5f8c\uff0c\u4e0b\u4e00\u6b65\u662f\u70bacallback\u548c\u51fd\u6578\u6dfb\u52a0\u5ba3\u544a\uff0c\u4ee5\u4fbf\u8655\u7406\u7e7c\u627f\u81ea\u57fa\u985e\uff08Box\u5c0f\u90e8\u4ef6\u7684\u4f4d\u7f6e\u6240\u5728\uff09\u7684Screen header\u985e\u6a94\u4e2d\u7684\u4e8b\u4ef6\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for fade animation ended on a Box\n    void boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<Box>& comp);\n\nprotected:\n    // Declaring callback type of FadeAnimator<Box>\n    Callback <Screen1View, const touchgfx::FadeAnimator<Box>&> boxFadeAnimationEndedCallback;\n};\n")),(0,i.kt)("p",null,"\u7136\u5f8c\uff0c\u5c0d\u65bc\u8996\u5716\u7269\u4ef6\uff0c\u9700\u8981\u627e\u5230\u4e8b\u4ef6\u8655\u7406\u7684callback\u5ba3\u544a\u548c\u51fd\u6578\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n  // In constructor for callback, bind to this view object and bind which function to handle the event.\n  boxFadeAnimationEndedCallback(this, &Screen1View::boxFadeAnimationEndedHandler) { }\n")),(0,i.kt)("p",null,"Next step is to tell the Box widget which callback to use when its move animation has ended, this is done in ",(0,i.kt)("inlineCode",{parentName:"p"},"setupScreen()")," to ensure that the callback is set every time the screen is entered."),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n  // Add the callback to box\n  box.setFadeAnimationEndedAction(boxFadeAnimationEndedCallback);\n}\n")),(0,i.kt)("p",null,"Last step is to implement the function, ",(0,i.kt)("inlineCode",{parentName:"p"},"boxFadeAnimationEndedHandler"),", that handles the callback. \u6700\u597d\u78ba\u8a8d\u6f38\u96b1\u52d5\u756b\u5df2\u7d50\u675f\u7684Box\u78ba\u5be6\u662f\u8a72\u201c\u65b9\u584a\u201d"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<touchgfx::Box>& b)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when fade animation on 'box' has ended here.\n    }\n}\n")),(0,i.kt)("h3",g({},{id:"api-reference-1"}),"API\u53c3\u8003"),(0,i.kt)(o.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../api/classes/classtouchgfx_1_1_fade_animator",mdxType:"Link"},"FadeAnimator\u985e\u7684API\u53c3\u8003"))),(0,i.kt)("h2",g({},{id:"clicklistener"}),"ClickListener"),(0,i.kt)("p",null,"Click Listener Mixin\u7528callback\u64f4\u5c55\u5c0f\u90e8\u4ef6\uff0c\u4f7f\u5c0f\u90e8\u4ef6\u80fd\u5920\u56de\u61c9\u89f8\u63a7\u8f38\u5165\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u901a\u904e\u5728\u201cMixin\u201d\u5340\u6bb5\u4e2d\u7d66\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5c6c\u6027\u4e2d\u555f\u7528Mixin\u4f86\u61c9\u7528\u5b83\uff0c\u5982\u4e0b\u5716\u6240\u793a\u3002"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-click-listener-enabled-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u555f\u7528\u4e86Click Listener Mixin"),(0,i.kt)("p",null,"\u555f\u7528Click Listener Mixin\u6703\u66f4\u6539\u751f\u6210\u7684\u5c0f\u90e8\u4ef6\u7684\u5ba3\u544a\u7c3d\u540d\uff08\u5982\u4e0b\u6587\u6240\u793a\uff09\uff0c\u5176\u4e2d\u7684",(0,i.kt)("a",g({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\u555f\u7528\u4e86Click Listener Mixin\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"touchgfx::ClickListener< touchgfx::Box > box;\n")),(0,i.kt)("h3",g({},{id:"callback-implementation-in-user-code-2"}),"\u7528\u6236\u4ee3\u78bc\u4e2d\u7684callback\u5be6\u73fe"),(0,i.kt)("p",null,"Click Listener Mixin\u63a5\u6536\u89f8\u63a7\u4e8b\u4ef6\uff0c\u767c\u9001callback\u3002 \u5728\u672c\u7bc0\u4e2d\uff0c\u5c07\u6f14\u793a\u5982\u4f55\u5be6\u73fe\u6b64callback\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\u5c0dBox\u5c0f\u90e8\u4ef6\u555f\u7528Click Listener Mixin\u5f8c\uff0c\u4e0b\u4e00\u6b65\u662f\u70bacallback\u548c\u51fd\u6578\u6dfb\u52a0\u5ba3\u544a\uff0c\u4ee5\u4fbf\u8655\u7406\u7e7c\u627f\u81ea\u57fa\u985e\uff08Box\u5c0f\u90e8\u4ef6\u7684\u4f4d\u7f6e\u6240\u5728\uff09\u7684Screen header\u985e\u6a94\u4e2d\u7684\u4e8b\u4ef6\u3002"),(0,i.kt)("p",null,"callback\u61c9\u5ba3\u544a\u4e09\u9ede\uff1a\u8981\u7d81\u5b9a\u7684class\u985e\u578b\uff0ccallback\u6e90\u81ea\u54ea\u500b\u5c0f\u90e8\u4ef6\uff0c\u4ee5\u53ca\u767c\u751f\u7684\u4e8b\u4ef6\u7684\u985e\u578b\u3002 In this example it is ",(0,i.kt)("inlineCode",{parentName:"p"},"Screen1View"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"const Box&")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"const ClickEvent&")),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for Box\n    void boxClickHandler(const Box& b, const ClickEvent& e);\n\nprotected:\n    // Declaring callback type of box and clickEvent\n    Callback<Screen1View, const Box&, const ClickEvent&> boxClickedCallback;\n};\n")),(0,i.kt)("p",null,"\u7136\u5f8c\uff0c\u5c0d\u65bc\u8996\u5716\u7269\u4ef6\uff0c\u9700\u8981\u627e\u5230\u4e8b\u4ef6\u8655\u7406\u7684callback\u5ba3\u544a\u548c\u51fd\u6578\u3002"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n    // In constructor for callback, bind to this view object and bind which function to handle the event.\n    boxClickedCallback(this, &Screen1View::boxClickHandler) { }\n")),(0,i.kt)("p",null,"Next step is to tell the Box widget which callback to use when it is touched, this is done in ",(0,i.kt)("inlineCode",{parentName:"p"},"setupScreen()")," to ensure that the callback is set every time the screen is entered."),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n    // Add the callback to box\n    box.setClickAction(boxClickedCallback);\n}\n")),(0,i.kt)("p",null,"Last step is to implement the function, ",(0,i.kt)("inlineCode",{parentName:"p"},"boxClickHandler"),", that handles the callback. \u6700\u597d\u78ba\u8a8d\u767c\u8d77callback\u7684Box\u78ba\u5be6\u662f\u8a72\u201c\u65b9\u584a\u201d"),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxClickHandler(const Box& b, const ClickEvent& evt)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when 'box' is touched/clicked here.\n    }\n}\n")),(0,i.kt)("h3",g({},{id:"api-reference-2"}),"API\u53c3\u8003"),(0,i.kt)(o.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../api/classes/classtouchgfx_1_1_click_listener",mdxType:"Link"},"ClickListener\u985e\u7684API\u53c3\u8003"))),(0,i.kt)("h2",g({},{id:"draggable"}),"Draggable"),(0,i.kt)("p",null,"Draggable mixin\u4f7f\u5c0f\u90e8\u4ef6\u80fd\u5920\u901a\u904e\u89f8\u63a7\u8f38\u5165\u88ab\u56db\u8655\u62d6\u62fd\u3002"),(0,i.kt)("p",null,"\u5728TouchGFX Designer\u4e2d\uff0c\u53ef\u901a\u904e\u5728\u201cMixin\u201d\u5340\u6bb5\u4e2d\u7d66\u5b9a\u5c0f\u90e8\u4ef6\u7684\u5c6c\u6027\u4e2d\u555f\u7528Mixin\u4f86\u61c9\u7528\u5b83\uff0c\u5982\u4e0b\u5716\u6240\u793a\u3002"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-draggable-enabled-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u555f\u7528\u4e86Draggable Mixin"),(0,i.kt)("p",null,"\u555f\u7528Draggable Mixin\u6703\u66f4\u6539\u751f\u6210\u7684\u5c0f\u90e8\u4ef6\u7684\u5ba3\u544a\u7c3d\u540d\uff08\u5982\u4e0b\u6587\u6240\u793a\uff09\uff0c\u5176\u4e2d\u7684",(0,i.kt)("a",g({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\u555f\u7528\u4e86Click Listener Mixin\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Draggable< touchgfx::Box > box;\n")),(0,i.kt)("h3",g({},{id:"api-reference-3"}),"API\u53c3\u8003"),(0,i.kt)(o.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../api/classes/classtouchgfx_1_1_draggable",mdxType:"Link"},"API reference for the Draggable class"))))}y.isMDXComponent=!0}}]);