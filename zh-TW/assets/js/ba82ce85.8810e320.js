(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8901],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},2083:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(67294),a=n(73727),i=n(11368),l=n(35096),o=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),u=n(67023),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&k(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&k(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:p,to:k,href:v,activeClassName:N,isActive:y,"data-noBrokenLinkCheck":w,autoAddBaseUrl:O=!0}=n,E=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:B}}=(0,i.Z)(),{withBaseUrl:T}=(0,c.C)(),P=(0,r.useContext)(s),S=k||v,j=(0,l.Z)(S),C=null==S?void 0:S.replace("pathname://","");let _=void 0!==C?(D=C,O&&(e=>e.startsWith("/"))(D)?T(D):D):void 0;var D;_&&j&&(_=(0,u.applyTrailingSlash)(_,{trailingSlash:x,baseUrl:B}));const A=(0,r.useRef)(!1),Z=p?a.OL:a.rU,M=o.Z.canUseIntersectionObserver,I=(0,r.useRef)();(0,r.useEffect)((()=>(!M&&j&&null!=_&&window.docusaurus.prefetch(_),()=>{M&&I.current&&I.current.disconnect()})),[I,_,M,j]);const L=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,U=!_||!j||L;return _&&j&&!L&&!w&&P.collectLink(_),U?r.createElement("a",b(b({href:_},S&&!j&&{target:"_blank",rel:"noopener noreferrer"}),E)):r.createElement(Z,b((R=b({},E),d(R,m({onMouseEnter:()=>{A.current||null==_||(window.docusaurus.preload(_),A.current=!0)},innerRef:e=>{var t,n;M&&e&&j&&(t=e,n=()=>{null!=_&&window.docusaurus.prefetch(_)},I.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.current.unobserve(t),I.current.disconnect(),n())}))})),I.current.observe(t))},to:_||""}))),p&&{isActive:y,activeClassName:N}));var R}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),i="/"===a||a===r?a:(l=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(a,i)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},66606:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return v},metadata:function(){return N},toc:function(){return y},default:function(){return O}});var r=n(3905),a=n(44035),i=n(29415),l=n(37793),o=n(2083),s=n(31217),c=n(22425),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&f(e,n,t[n]);return e};const b={id:"repeat-button",title:"\u91cd\u8907\u6309\u9215"},v=void 0,N={unversionedId:"development/ui-development/ui-components/buttons/repeat-button",id:"development/ui-development/ui-components/buttons/repeat-button",isDocsHomePage:!1,title:"\u91cd\u8907\u6309\u9215",description:"TouchGFX\u4e2d\u7684\u91cd\u8907\u6309\u9215(Repeat Button)\u662f\u4e00\u7a2e\u611f\u61c9\u89f8\u63a7\u4e8b\u4ef6\u7684\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u5728\u6309\u9215\u88ab\u6309\u4e0b\u6642\u767c\u9001callback\u3002 \u6309\u9215\u7acb\u5373\u555f\u52d5\u5176\u6309\u4e0b\u64cd\u4f5c\uff0c\u7136\u5f8c\u5728\u7d66\u5b9a\u5ef6\u9072\u5f8c\u555f\u52d5\uff0c\u7136\u5f8c\u5728\u67d0\u500b\u6642\u9593\u9593\u9694\u5f8c\u91cd\u8907\u555f\u52d5\u3002 \u6bcf\u7a2e\u72c0\u614b\uff08\u6309\u4e0b\u548c\u91cb\u653e\uff09\u90fd\u6709\u76f8\u5c0d\u7684\u5716\u50cf\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/buttons/repeat-button.mdx",sourceDirName:"development/ui-development/ui-components/buttons",slug:"/development/ui-development/ui-components/buttons/repeat-button",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/buttons/repeat-button",tags:[],version:"current",frontMatter:{id:"repeat-button",title:"\u91cd\u8907\u6309\u9215"},sidebar:"docs",previous:{title:"\u9078\u9805\u6309\u9215",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/buttons/radio-button"},next:{title:"\u9748\u6d3b\u6309\u9215",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/buttons/flex-button"}},y=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",children:[],level:2},{value:"\u5c6c\u6027",id:"properties",children:[],level:2},{value:"\u4ea4\u4e92",id:"interactions",children:[{value:"\u64cd\u4f5c",id:"actions",children:[],level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",children:[],level:3}],level:2},{value:"\u6027\u80fd",id:"performance",children:[],level:2},{value:"\u7bc4\u4f8b",id:"examples",children:[{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",children:[],level:3}],level:2},{value:"API\u53c3\u8003",id:"api-reference",children:[],level:2}],w={toc:y};function O(e){var t,n=e,{components:u}=n,f=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},w),f),p(t,d({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\u4e2d\u7684\u91cd\u8907\u6309\u9215(Repeat Button)\u662f\u4e00\u7a2e\u611f\u61c9\u89f8\u63a7\u4e8b\u4ef6\u7684\u5c0f\u90e8\u4ef6\uff0c\u80fd\u5920\u5728\u6309\u9215\u88ab\u6309\u4e0b\u6642\u767c\u9001callback\u3002 \u6309\u9215\u7acb\u5373\u555f\u52d5\u5176\u6309\u4e0b\u64cd\u4f5c\uff0c\u7136\u5f8c\u5728\u7d66\u5b9a\u5ef6\u9072\u5f8c\u555f\u52d5\uff0c\u7136\u5f8c\u5728\u67d0\u500b\u6642\u9593\u9593\u9694\u5f8c\u91cd\u8907\u555f\u52d5\u3002 \u6bcf\u7a2e\u72c0\u614b\uff08\u6309\u4e0b\u548c\u91cb\u653e\uff09\u90fd\u6709\u76f8\u5c0d\u7684\u5716\u50cf\u3002"),(0,r.kt)("p",null,"\u91cd\u8907\u6309\u9215\u53ef\u901a\u904e",(0,r.kt)("a",k({parentName:"p"},{href:"flex-button"}),"\u9748\u6d3b\u6309\u9215"),"\u9032\u884c\u8907\u88fd\u3002 \u9748\u6d3b\u6309\u9215\u662f\u4e00\u7a2e\u53ef\u914d\u7f6e\u6027\u66f4\u9ad8\u7684\u6309\u9215\uff0c\u70ba\u4e86\u7372\u5f97\u9748\u6d3b\u6027\u800c\u9700\u8981\u591a\u4f54\u7528\u4e00\u4e9bRAM\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/repeat-button/widget-appearance.png",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u91cd\u8907\u6309\u9215"),(0,r.kt)("h2",k({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,r.kt)("p",null,"\u91cd\u8907\u6309\u9215\u53ef\u4ee5\u5728TouchGFX Designer\u4e2d\u7684\u201cButtons\u201d\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u627e\u5230\u3002"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/repeat-button/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u91cd\u8907\u6309\u9215"),(0,r.kt)("h2",k({},{id:"properties"}),"\u5c6c\u6027"),(0,r.kt)("p",null,"TouchGFX Designer\u4e2d\u91cd\u8907\u6309\u9215\u7684\u5c6c\u6027\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The size of a Repeat Button is determined by the size of the selected images."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Style")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"These styles contain images that are free to use"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Released Image")," and ",(0,r.kt)("em",{parentName:"td"},"Pressed Image")," specify the images assigned to the Pressed and Release states from the Designer skin library or the Project folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Settings")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Delay")," specifies the time (ms) to wait when the button is pressed before starting the loop of triggers.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Interval")," specifies the time (ms) in between every trigger. ",(0,r.kt)("em",{parentName:"td"},"Designer accepts inputs of milliseconds and converts them into ticks."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixin")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)("em",{parentName:"td"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",k({},{id:"interactions"}),"\u4ea4\u4e92"),(0,r.kt)("p",null,"\u4e0b\u9762\u5e7e\u7bc0\u5c07\u63cf\u8ff0\u91cd\u8907\u6309\u9215\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,r.kt)("h3",k({},{id:"actions"}),"\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,r.kt)("h3",k({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u89f8\u767c\u689d\u4ef6")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Button is clicked")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u6309\u9215\u88ab\u9ede\u64ca\u3002")))),(0,r.kt)("h2",k({},{id:"performance"}),"\u6027\u80fd"),(0,r.kt)("p",null,"\u91cd\u8907\u6309\u9215\u5305\u542b\u5169\u5e45\u5716\u50cf\u4e26\u4f9d\u9760\u5716\u50cf\u7e6a\u88fd\u3002 \u56e0\u6b64\uff0c\u5728\u5927\u591a\u6578\u5e73\u81fa\u4e0a\uff0c\u91cd\u8907\u6309\u9215\u90fd\u88ab\u8996\u70ba\u5feb\u901f\u57f7\u884c\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u95dc\u65bc\u5716\u50cf\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,r.kt)("a",k({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,r.kt)("h2",k({},{id:"examples"}),"\u7bc4\u4f8b"),(0,r.kt)("h3",k({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,r.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u91cd\u8907\u6309\u9215\u3002"),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    buttonCallback(this, &Screen1ViewBase::buttonCallbackHandler)\n{\n    repeatButtonName.setXY(155, 106);\n    repeatButtonName.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n    repeatButtonName.setDelay(12);                      // Set at 200 (ms) in Designer\n    repeatButtonName.setInterval(20);                   // Set at 333 (ms) in Designer\n    repeatButtonName.setAction(buttonCallback);\n\n    add(repeatButtonName);\n}\n\nvoid Screen1ViewBase::buttonCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &repeatButtonName)\n    {\n        //InteractionName\n        //When repeatButtonName clicked calls the new virtual function "functionName()" set by the user\n        functionName();\n    }\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528FlexButton\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u4fee\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8a18\u5f97\u547c\u53eb ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"repeatButtonName.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,r.kt)("h2",k({},{id:"api-reference"}),"API\u53c3\u8003"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_repeat_button",mdxType:"Link"},"RepeatButton\u985e\u7684API\u53c3\u8003"))))}O.isMDXComponent=!0}}]);