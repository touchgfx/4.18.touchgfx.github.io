(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5057],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},2083:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},37793:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=o},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(67294),i=n(73727),a=n(11368),o=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),u=n(67023),d=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))g.call(t,n)&&v(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:d,to:v,href:b,activeClassName:y,isActive:w,"data-noBrokenLinkCheck":N,autoAddBaseUrl:O=!0}=n,x=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:E,baseUrl:T}}=(0,a.Z)(),{withBaseUrl:C}=(0,s.C)(),j=(0,r.useContext)(c),P=v||b,L=(0,o.Z)(P),D=null==P?void 0:P.replace("pathname://","");let Z=void 0!==D?(S=D,O&&(e=>e.startsWith("/"))(S)?C(S):S):void 0;var S;Z&&L&&(Z=(0,u.applyTrailingSlash)(Z,{trailingSlash:E,baseUrl:T}));const _=(0,r.useRef)(!1),M=d?i.OL:i.rU,F=l.Z.canUseIntersectionObserver,X=(0,r.useRef)();(0,r.useEffect)((()=>(!F&&L&&null!=Z&&window.docusaurus.prefetch(Z),()=>{F&&X.current&&X.current.disconnect()})),[X,Z,F,L]);const U=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,B=!Z||!L||U;return Z&&L&&!U&&!N&&j.collectLink(Z),B?r.createElement("a",k(k({href:Z},P&&!L&&{target:"_blank",rel:"noopener noreferrer"}),x)):r.createElement(M,k((I=k({},x),p(I,m({onMouseEnter:()=>{_.current||null==Z||(window.docusaurus.preload(Z),_.current=!0)},innerRef:e=>{var t,n;F&&e&&L&&(t=e,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},X.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(X.current.unobserve(t),X.current.disconnect(),n())}))})),X.current.observe(t))},to:Z||""}))),d&&{isActive:w,activeClassName:y}));var I}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),a="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(i,a)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1084:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return k},contentTitle:function(){return b},metadata:function(){return y},toc:function(){return w},default:function(){return O}});var r=n(3905),i=n(44035),a=n(29415),o=n(37793),l=n(2083),c=n(31217),s=n(22425),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&g(e,n,t[n]);return e};const k={id:"list-layout",title:"\u5217\u8868\u4f48\u5c40"},b=void 0,y={unversionedId:"development/ui-development/ui-components/containers/list-layout",id:"development/ui-development/ui-components/containers/list-layout",isDocsHomePage:!1,title:"\u5217\u8868\u4f48\u5c40",description:"\u5217\u8868\u4f48\u5c40(List Layout)\u5c0f\u90e8\u4ef6\u5c6c\u65bc\u5bb9\u5668\uff0c\u6703\u81ea\u52d5\u6309\u7d66\u5b9a\u65b9\u5411\u5c07\u5176\u5b50\u90e8\u4ef6\u6392\u5217\u5728\u5217\u8868\u4e2d\u3002 \u5f9e\u5217\u8868\u4f48\u5c40\u6dfb\u52a0\u6216\u79fb\u9664\u5c0f\u90e8\u4ef6\u6703\u91cd\u65b0\u6392\u5217\u5b50\u90e8\u4ef6\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/list-layout.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/list-layout",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/containers/list-layout",tags:[],version:"current",frontMatter:{id:"list-layout",title:"\u5217\u8868\u4f48\u5c40"},sidebar:"docs",previous:{title:"\u6ed1\u52d5\u5bb9\u5668",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/containers/swipe-container"},next:{title:"\u5f37\u5236\u56de\u61c9\u8996\u7a97",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/containers/modal-window"}},w=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",children:[],level:2},{value:"\u5c6c\u6027",id:"properties",children:[],level:2},{value:"\u4ea4\u4e92",id:"interactions",children:[{value:"\u64cd\u4f5c",id:"actions",children:[],level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",children:[],level:3}],level:2},{value:"\u6027\u80fd",id:"performance",children:[],level:2},{value:"\u7bc4\u4f8b",id:"examples",children:[{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",children:[],level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API\u53c3\u8003",id:"api-reference",children:[],level:2}],N={toc:w};function O(e){var t,n=e,{components:u}=n,g=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},N),g),d(t,p({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5217\u8868\u4f48\u5c40(List Layout)\u5c0f\u90e8\u4ef6\u5c6c\u65bc",(0,r.kt)("a",v({parentName:"p"},{href:"container"}),"\u5bb9\u5668"),"\uff0c\u6703\u81ea\u52d5\u6309\u7d66\u5b9a\u65b9\u5411\u5c07\u5176\u5b50\u90e8\u4ef6\u6392\u5217\u5728\u5217\u8868\u4e2d\u3002 \u5f9e\u5217\u8868\u4f48\u5c40\u6dfb\u52a0\u6216\u79fb\u9664\u5c0f\u90e8\u4ef6\u6703\u91cd\u65b0\u6392\u5217\u5b50\u90e8\u4ef6\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/widget-appearance.png",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u5217\u8868\u4f48\u5c40"),(0,r.kt)("h2",v({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u5217\u8868\u4f48\u5c40\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Containers\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/list-layout/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u5217\u8868\u4f48\u5c40"),(0,r.kt)("h2",v({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u5217\u8868\u4f48\u5c40\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget. The size of the List Layout amounts to the total size of its children.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Direction")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Direction")," specifies the direction of the layout arrangement. \u5728\u5411\u53f3\u6392\u5217\u7684\u6c34\u5e73\u4f48\u5c40\u8207\u5411\u4e0b\u6392\u5217\u7684\u5782\u76f4\u4f48\u5c40\u4e4b\u9593\u9032\u884c\u9078\u64c7\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",v({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u7684\u5217\u8868\u4f48\u5c40\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",v({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",v({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("p",null,"\u5217\u8868\u4f48\u5c40\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h2",v({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u5217\u8868\u4f48\u5c40\u81ea\u8eab\u5c0d\u6027\u80fd\u6c92\u6709\u986f\u8457\u5f71\u97ff\uff0c\u5e7e\u4e4e\u5b8c\u5168\u4f9d\u8cf4\u65bc\u5176\u5b50\u90e8\u4ef6\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u81fa\u4e0a\uff0c\u6703\u5c07\u5217\u8868\u8996\u70ba\u975e\u5e38\u5feb\u901f\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u95dc\u65bc\u7e6a\u5716\u6027\u80fd\u7684\u5e38\u898f\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u5e38\u898fUI\u5143\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,r.kt)("h2",v({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u6309\u9215\u3002"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    listLayout1.setDirection(touchgfx::SOUTH);\n    listLayout1.setXY(90, 111);\n\n    box1.setWidth(50);\n    box1.setHeight(50);\n    box1.setColor(touchgfx::Color::getColorFromRGB(255, 255, 255));\n    listLayout1.add(box1);\n\n    add(listLayout1);\n}\n")),(0,r.kt)(o.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528ListLayout\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u4fee\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8a18\u5f97\u547c\u53eb ",(0,r.kt)(l.Z,{mdxType:"InlineCode"},"listLayout1.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,r.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u5217\u8868\u4f48\u5c40\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u7bc4\u672c\u4e4b\u4e00\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-templates/list-layout-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6e05\u55ae\u4f48\u5c40UI\u7bc4\u672c"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_list_layout",mdxType:"Link"},"ListLayout\u985e\u7684API\u53c3\u8003"))))}O.isMDXComponent=!0}}]);