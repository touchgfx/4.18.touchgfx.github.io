(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1251],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){"use strict";var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},2083:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){"use strict";var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(67294),r=n(73727),i=n(11368),o=n(35096),l=n(84487);const c=(0,a.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),d=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(g)for(var n of g(t))k.call(t,n)&&f(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:d,to:f,href:b,activeClassName:N,isActive:w,"data-noBrokenLinkCheck":y,autoAddBaseUrl:C=!0}=n,O=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&g)for(var a of g(e))t.indexOf(a)<0&&k.call(e,a)&&(n[a]=e[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:_,baseUrl:T}}=(0,i.Z)(),{withBaseUrl:S}=(0,u.C)(),x=(0,a.useContext)(c),E=f||b,H=(0,o.Z)(E),P=null==E?void 0:E.replace("pathname://","");let D=void 0!==P?(A=P,C&&(e=>e.startsWith("/"))(A)?S(A):A):void 0;var A;D&&H&&(D=(0,s.applyTrailingSlash)(D,{trailingSlash:_,baseUrl:T}));const M=(0,a.useRef)(!1),j=d?r.OL:r.rU,B=l.Z.canUseIntersectionObserver;let Z;(0,a.useEffect)((()=>(!B&&H&&null!=D&&window.docusaurus.prefetch(D),()=>{B&&Z&&Z.disconnect()})),[D,B,H]);const I=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,V=!D||!H||I;return D&&H&&!I&&!y&&x.collectLink(D),V?a.createElement("a",v(v({href:D},E&&!H&&{target:"_blank",rel:"noopener noreferrer"}),O)):a.createElement(j,v((L=v({},O),p(L,m({onMouseEnter:()=>{M.current||null==D||(window.docusaurus.preload(D),M.current=!0)},innerRef:e=>{var t,n;B&&e&&H&&(t=e,n=()=>{null!=D&&window.docusaurus.prefetch(D)},Z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),n())}))})),Z.observe(t))},to:D||""}))),d&&{isActive:w,activeClassName:N}));var L}},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:a}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[r]=e.split(/[#?]/),i="/"===r||r===a?r:(o=r,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(r,i)}},67023:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},43812:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return N},toc:function(){return w},default:function(){return C}});var a=n(3905),r=n(44035),i=n(29415),o=n(37793),l=n(2083),c=n(31217),u=n(22425),s=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&k(e,n,t[n]);return e};const v={id:"analog-clock",title:"\u985e\u6bd4\u6642\u9418"},b=void 0,N={unversionedId:"development/ui-development/ui-components/miscellaneous/analog-clock",id:"development/ui-development/ui-components/miscellaneous/analog-clock",isDocsHomePage:!1,title:"\u985e\u6bd4\u6642\u9418",description:"\u985e\u6bd4\u6642\u9418(Analog Clock)\u662f\u4e00\u500b\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u986f\u793a\u4e00\u500b\u5178\u578b\u7684\u6307\u6a19\u5f0f\u96fb\u5b50\u9336\uff0c\u800c\u4e0d\u662f\u901a\u904e\u6587\u5b57\u986f\u793a\u6642\u9593\u7684\u6578\u4f4d\u6642\u9418\u3002 \u8a72\u6642\u9418\u4f7f\u7528\u80cc\u666f\u5716\u50cf\u4f5c\u70ba\u9418\u9762\u3002 \u6642\u91dd\u3001\u5206\u91dd\u548c\u79d2\u91dd\u90fd\u4f7f\u7528\u4e00\u5e45\u5716\u50cf\uff0c\u4e26\u570d\u7e5e\u4e00\u500b\u53ef\u914d\u7f6e\u7684\u4e2d\u5fc3\u65cb\u8f49\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/analog-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/analog-clock",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/miscellaneous/analog-clock",version:"current",frontMatter:{id:"analog-clock",title:"\u985e\u6bd4\u6642\u9418"},sidebar:"docs",previous:{title:"\u6587\u5b57\u5340\u57df",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/miscellaneous/text-area"},next:{title:"\u6578\u4f4d\u6642\u9418",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/miscellaneous/digital-clock"}},w=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",children:[]},{value:"\u5c6c\u6027",id:"properties",children:[{value:"Time",id:"time",children:[]},{value:"Clock Hands",id:"clock-hands",children:[]},{value:"\u52d5\u756b",id:"animation",children:[]}]},{value:"\u4ea4\u4e92",id:"interactions",children:[{value:"\u52d5\u4f5c",id:"actions",children:[]},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",children:[]}]},{value:"\u6027\u80fd",id:"performance",children:[]},{value:"\u7bc4\u4f8b",id:"examples",children:[{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",children:[]},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",children:[]},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",children:[]}]},{value:"API\u53c3\u8003",id:"api-reference",children:[]}],y={toc:w};function C(e){var t,n=e,{components:s}=n,k=((e,t)=>{var n={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},y),k),d(t,p({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u985e\u6bd4\u6642\u9418(Analog Clock)\u662f\u4e00\u500b\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u986f\u793a\u4e00\u500b\u5178\u578b\u7684\u6307\u6a19\u5f0f\u96fb\u5b50\u9336\uff0c\u800c\u4e0d\u662f\u901a\u904e\u6587\u5b57\u986f\u793a\u6642\u9593\u7684",(0,a.kt)("a",f({parentName:"p"},{href:"digital-clock"}),"\u6578\u4f4d\u6642\u9418"),"\u3002 \u8a72\u6642\u9418\u4f7f\u7528\u80cc\u666f\u5716\u50cf\u4f5c\u70ba\u9418\u9762\u3002 \u6642\u91dd\u3001\u5206\u91dd\u548c\u79d2\u91dd\u90fd\u4f7f\u7528\u4e00\u5e45\u5716\u50cf\uff0c\u4e26\u570d\u7e5e\u4e00\u500b\u53ef\u914d\u7f6e\u7684\u4e2d\u5fc3\u65cb\u8f49\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-appearance.gif",mdxType:"Figure"},"\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u985e\u6bd4\u6642\u9418\uff08\u52a0\u901f\u93e1\u982d\uff09"),(0,a.kt)("h2",f({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,a.kt)("p",null,"\u985e\u6bd4\u6642\u9418\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Miscellaneous\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u985e\u6bd4\u6642\u9418"),(0,a.kt)("h2",f({},{id:"properties"}),"\u5c6c\u6027"),(0,a.kt)("p",null,"TouchGFX Designer\u4e2d\u985e\u6bd4\u6642\u9418\u7684\u5c6c\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,a.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," and ",(0,a.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"The size of a Analog Clock is taken from the size of the associated image and cannot be altered except by changing the image."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,a.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"These styles contain images that are free to use"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Image")," specifies the image to be used as background.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Rotation Center X")," and ",(0,a.kt)("em",{parentName:"td"},"Rotation Center Y")," specifies the point at which the clock hands should rotate")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Time")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Use Am/Pm")," specifies if time should be in 12h or 24h format.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Initial Time")," specifies the initial time the clock shows.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Clock Hands")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Clock Hands")," specifies which clock hands ",(0,a.kt)("em",{parentName:"td"},"(Second, Minute and Hour Hand)")," the Analog Clock should show and the order of the hands.",(0,a.kt)("br",null),"Each clock hand can set a ",(0,a.kt)("em",{parentName:"td"},"Hand Image")," and their rotation point by setting ",(0,a.kt)("em",{parentName:"td"},"Rotation Position X")," and ",(0,a.kt)("em",{parentName:"td"},"Rotation Position Y"),".",(0,a.kt)("br",null),(0,a.kt)("br",null),"The Minute and Hour Hand have the option to use sweeping hand motion by setting ",(0,a.kt)("em",{parentName:"td"},"Sweeping Movement"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animations")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Animate Clock Hand Movement")," specifies if animation of the clock hands are enabled.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Duration")," specifies how long the amination is.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Easing")," and ",(0,a.kt)("em",{parentName:"td"},"Easing Option")," specify the easing equation used.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," values.")))),(0,a.kt)("h3",f({},{id:"time"}),"Time"),(0,a.kt)("p",null,"\u201cTime\u201d\u5c6c\u6027\u7d44\u5141\u8a31\u4f7f\u7528\u8005\u8a2d\u7f6e\u6642\u9418\u5c0f\u90e8\u4ef6\u7684\u521d\u59cb\u6642\u9593\uff0c\u4ee5\u53ca\u662f\u5426\u4f7f\u7528Am/Pm\u6a19\u6e96\u3002"),(0,a.kt)("p",null,"\u9078\u64c7Am/Pm\u9084\u6703\u5c0e\u81f4\u7a0b\u5f0f\u78bc\u751f\u6210\u7684\u7d30\u5fae\u8b8a\u5316\u3002 \u800c\u4e0d\u662f\u5728\u985e\u6bd4\u6642\u9418\u4e2d\u4f7f\u7528\u4e0b\u9762\u7684\u51fd\u6578\u521d\u59cb\u5316\u6642\u9593\uff1a",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,a.kt)("p",null,"\u5982\u679c\u63a1\u752812\u5c0f\u6642\u6a19\u8a18\u6cd5\uff0c\u5c07\u4f7f\u7528\u4ee5\u4e0b\u51fd\u6578\uff1a",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("p",null,"\u5982\u8981\u66f4\u65b0\u6642\u9418\u986f\u793a\u7684\u6642\u9593\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u51fd\u6578\u4e4b\u4e00\u3002",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("h3",f({},{id:"clock-hands"}),"Clock Hands"),(0,a.kt)("p",null,"\u5728\u201c\u6642\u9418\u6307\u91dd\u201d\u5c6c\u6027\u7d44\u4e2d\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u5b9a\u7fa9\u8981\u4f7f\u7528\u7684\u6307\u91dd\u53ca\u5404\u81ea\u7684Z\u8ef8\u9806\u5e8f\u3002 \u9996\u5148\u5b9a\u7fa9\u7684\u6307\u91dd\u5c07\u5448\u73fe\u5728\u5176\u4ed6\u6307\u91dd\u4e4b\u4e0a\u3002"),(0,a.kt)("h4",f({},{id:"hour-minute-and-second-hands"}),"\u6642\u91dd\u3001\u5206\u91dd\u548c\u79d2\u91dd"),(0,a.kt)("p",null,"\u6bcf\u500b\u6307\u6a19\u90fd\u9700\u8981\u4e00\u5e45\u5716\u50cf\u548c\u4e00\u500b\u65cb\u8f49\u4f4d\u7f6e\u3002 \u65cb\u8f49\u4f4d\u7f6e\u6c7a\u5b9a\u5df2\u5b9a\u7fa9\u7684\u6307\u6a19\u5716\u50cf\u61c9\u8a72\u570d\u7e5e\u8457\u9032\u884c\u81ea\u8eab\u65cb\u8f49\u7684\u9ede\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-hands-props-v4.17.png",mdxType:"Figure"},"\u6642\u9418\u6307\u6a19\u5c6c\u6027"),(0,a.kt)("p",null,"The hour and minute hands have the ability to use ",(0,a.kt)("em",{parentName:"p"},"Sweeping Movement"),". \u555f\u7528\u6b64\u9078\u9805\u5f8c\uff0c\u6307\u6a19\u5c07\u4e0d\u518d\u5f9e\u4e00\u500b\u4f4d\u7f6e\u77ac\u9593\u8df3\u5230\u53e6\u4e00\u500b\u4f4d\u7f6e\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-no-sweeping-movement.gif",mdxType:"Figure"},"\u6383\u63cf\u5f0f\u52d5\u4f5c\u5df2\u505c\u7528"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-with-sweeping-movement.gif",mdxType:"Figure"},"\u6383\u63cf\u5f0f\u52d5\u4f5c\u5df2\u555f\u7528"),(0,a.kt)("h3",f({},{id:"animation"}),"\u52d5\u756b"),(0,a.kt)("p",null,"\u52d5\u756b\u90e8\u5206\u5141\u8a31\u4f7f\u7528\u8005\u5b9a\u7fa9\u66f4\u9032\u968e\u7684\u6307\u91dd\u904b\u52d5\u3002 However, if the hour and minute hand have ",(0,a.kt)("em",{parentName:"p"},"Sweeping Movement")," enabled, they will not animate."),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u52d5\u756b\u6301\u7e8c\u6642\u9593\u8a2d\u7f6e\u70ba\u201c30\u201d\uff0c\u7de9\u52d5\u8a2d\u7f6e\u70ba\u201cBounce\u201d\uff0c\u4e26\u5c07\u201cOut\u201d\u4f5c\u70ba\u5176\u7de9\u52d5\u9078\u9805\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-animation.gif",mdxType:"Figure"},"\u6642\u9418\u52d5\u756b\u7bc4\u4f8b"),(0,a.kt)("h2",f({},{id:"interactions"}),"\u4ea4\u4e92"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u985e\u6bd4\u6642\u9418\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,a.kt)("h3",f({},{id:"actions"}),"\u52d5\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,a.kt)("h3",f({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,a.kt)("p",null,"\u985e\u6bd4\u6642\u9418\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,a.kt)("h2",f({},{id:"performance"}),"\u6027\u80fd"),(0,a.kt)("p",null,"\u985e\u6bd4\u6642\u9418\u5305\u62ec\u4e00\u5e45",(0,a.kt)("a",f({parentName:"p"},{href:"../images/image"}),"\u5716\u50cf"),"\u548c\u4e09\u500b",(0,a.kt)("a",f({parentName:"p"},{href:"../images/texture-mapper"}),"\u7d0b\u7406\u6620\u5c04\u5668"),"\uff0c\u90fd\u662fMCU\u8cc7\u6e90\u5bc6\u96c6\u578b\u7d44\u4ef6\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u90e8\u5206\u5e73\u81fa\u4e0a\uff0c\u6703\u5c07\u985e\u6bd4\u6642\u9418\u8996\u70ba\u8981\u6c42\u9ad8\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,a.kt)("p",null,"\u95dc\u65bc\u6587\u5b57\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,a.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,a.kt)("h2",f({},{id:"examples"}),"\u7bc4\u4f8b"),(0,a.kt)("h3",f({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u6309\u9215\u3002"),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    analogClock.setXY(124, 15);\n    analogClock.setBackground(BITMAP_BLUE_CLOCKS_BACKGROUNDS_CLOCK_STANDARD_BACKGROUND_ID, 116, 116);\n    analogClock.setupMinuteHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_MINUTE_HAND_ID, 7, 67);\n    analogClock.setMinuteHandSecondCorrection(false);\n    analogClock.setupHourHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_HOUR_HAND_ID, 7, 52);\n    analogClock.setHourHandMinuteCorrection(false);\n    analogClock.setupSecondHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_SECOND_HAND_ID, 3, 66);\n    analogClock.initializeTime24Hour(10, 10, 0);\n\n    add(analogClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(o.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528AnalogClock\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,a.kt)(l.Z,{mdxType:"InlineCode"},"analogClock.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,a.kt)("h3",f({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u8a2d\u7f6e\u6642\u9418\u52d5\u4f5c\uff1a"),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int analogHours;\n    int analogMinutes;\n    int analogSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    analogHours = analogClock.getCurrentHour();\n    analogMinutes = analogClock.getCurrentMinute();\n    analogSeconds = analogClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++analogSeconds >= 60)\n        {\n            analogSeconds = 0;\n            if (++analogMinutes >= 60)\n            {\n                analogMinutes = 0;\n                if (++analogHours >= 24)\n                {\n                    analogHours = 0;\n                }\n            }\n        }\n\n        // Update the clocks\n        analogClock.setTime24Hour(analogHours, analogMinutes, analogSeconds);\n    }\n}\n")),(0,a.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u985e\u6bd4\u6642\u9418\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0b\u7bc4\u4f8b\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6642\u9418\u7bc4\u4f8b"),(0,a.kt)("h2",f({},{id:"api-reference"}),"API\u53c3\u8003"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_analog_clock",mdxType:"Link"},"AnalogClock\u985e\u7684API\u53c3\u8003"))))}C.isMDXComponent=!0}}]);