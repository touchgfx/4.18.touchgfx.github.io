"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3213],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:i,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:i,src:l})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,r){var n=r(67294),a=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},39130:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(67294),a=r(73727),i=r(11368),l=r(35096),o=r(84487);const s=(0,n.createContext)({collectLink:()=>{}});var c=r(25026),p=r(67023),d=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&k(e,r,t[r]);if(g)for(var r of g(t))f.call(t,r)&&k(e,r,t[r]);return e};var b=function(e){var t,r=e,{isNavLink:d,to:k,href:b,activeClassName:N,isActive:y,"data-noBrokenLinkCheck":w,autoAddBaseUrl:x=!0}=r,T=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&g)for(var n of g(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:E}=(0,c.C)(),S=(0,n.useContext)(s),C=k||b,j=(0,l.Z)(C),_=null==C?void 0:C.replace("pathname://","");let D=void 0!==_?(Z=_,x&&(e=>e.startsWith("/"))(Z)?E(Z):Z):void 0;var Z;D&&j&&(D=(0,p.applyTrailingSlash)(D,{trailingSlash:O,baseUrl:P}));const I=(0,n.useRef)(!1),A=d?a.OL:a.rU,M=o.Z.canUseIntersectionObserver,V=(0,n.useRef)();(0,n.useEffect)((()=>(!M&&j&&null!=D&&window.docusaurus.prefetch(D),()=>{M&&V.current&&V.current.disconnect()})),[V,D,M,j]);const B=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,U=!D||!j||B;return D&&j&&!B&&!w&&S.collectLink(D),U?n.createElement("a",v(v({href:D},C&&!j&&{target:"_blank",rel:"noopener noreferrer"}),T)):n.createElement(A,v((F=v({},T),u(F,m({onMouseEnter:()=>{I.current||null==D||(window.docusaurus.preload(D),I.current=!0)},innerRef:e=>{var t,r;M&&e&&j&&(t=e,r=()=>{null!=D&&window.docusaurus.prefetch(D)},V.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(V.current.unobserve(t),V.current.disconnect(),r())}))})),V.current.observe(t))},to:D||""}))),d&&{isActive:y,activeClassName:N}));var F}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return l}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const l=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+l:l}(t,e,r,n)}}function l(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),i="/"===a||a===n?a:(l=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(a,i)}},67023:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},59792:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return N},toc:function(){return y},default:function(){return x}});var n=r(3905),a=r(44035),i=r(29415),l=r(37793),o=r(31217),s=r(39130),c=r(22425),p=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&f(e,r,t[r]);if(m)for(var r of m(t))h.call(t,r)&&f(e,r,t[r]);return e};const v={id:"text-progress",title:"\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668"},b=void 0,N={unversionedId:"development/ui-development/ui-components/progress-indicators/text-progress",id:"development/ui-development/ui-components/progress-indicators/text-progress",isDocsHomePage:!1,title:"\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668",description:"\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668(Text Progress)\u5c07\u4ee5\u5341\u9032\u4f4d\u7684\u6578\u5b57\u986f\u793a\u9032\u5ea6\u3002 \u5b83\u986f\u793a\u7576\u524d\u9032\u5ea6\uff0c\u65b9\u6cd5\u662f\u5c07\u4e00\u500b\u6587\u5b57\u5340\u57df\u7f6e\u65bc\u80cc\u666f\u5716\u50cf\u4e0a\u65b9\u4f5c\u70ba\u9032\u5ea6\u6307\u793a\u5668\u3002 The Color, the Alpha and the Text of the TextArea can be configured. \u53ef\u4ee5\u5275\u5efa\u81ea\u8a02\u7684\u80cc\u666f\u5716\u50cf\uff0c\u4e26\u66f4\u6539\u9032\u5ea6\u6307\u793a\u5668\u7684\u4e0d\u540c\u53c3\u6578\uff08\u6bd4\u5982\u4f4d\u7f6e\u548c\u5927\u5c0f\uff09\uff0c\u4ee5\u9069\u61c9\u81ea\u8a02\u7684\u80cc\u666f\u5716\u50cf\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/text-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/text-progress",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/progress-indicators/text-progress",tags:[],version:"current",frontMatter:{id:"text-progress",title:"\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668"},sidebar:"docs",previous:{title:"\u5716\u50cf\u9032\u5ea6\u689d",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/progress-indicators/image-progress"},next:{title:"\u7dda\u578b\u9032\u5ea6\u689d",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/progress-indicators/line-progress"}},y=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",children:[],level:2},{value:"\u5c6c\u6027",id:"properties",children:[],level:2},{value:"\u4ea4\u4e92",id:"interactions",children:[{value:"\u64cd\u4f5c",id:"actions",children:[],level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",children:[],level:3}],level:2},{value:"\u6027\u80fd",id:"performance",children:[],level:2},{value:"\u7bc4\u4f8b",id:"examples",children:[{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",children:[],level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",children:[],level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API\u53c3\u8003",id:"api-reference",children:[],level:2}],w={toc:y};function x(e){var t,r=e,{components:p}=r,f=((e,t)=>{var r={};for(var n in e)g.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&h.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=k(k({},w),f),d(t,u({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668(Text Progress)\u5c07\u4ee5\u5341\u9032\u4f4d\u7684\u6578\u5b57\u986f\u793a\u9032\u5ea6\u3002 \u5b83\u986f\u793a\u7576\u524d\u9032\u5ea6\uff0c\u65b9\u6cd5\u662f\u5c07\u4e00\u500b",(0,n.kt)("a",k({parentName:"p"},{href:"../miscellaneous/text-area"}),"\u6587\u5b57\u5340\u57df"),"\u7f6e\u65bc\u80cc\u666f",(0,n.kt)("a",k({parentName:"p"},{href:"../images/image"}),"\u5716\u50cf"),"\u4e0a\u65b9\u4f5c\u70ba\u9032\u5ea6\u6307\u793a\u5668\u3002 The ",(0,n.kt)("em",{parentName:"p"},"Color"),", the ",(0,n.kt)("em",{parentName:"p"},"Alpha")," and the ",(0,n.kt)("em",{parentName:"p"},"Text")," of the TextArea can be configured. \u53ef\u4ee5\u5275\u5efa\u81ea\u8a02\u7684\u80cc\u666f\u5716\u50cf\uff0c\u4e26\u66f4\u6539\u9032\u5ea6\u6307\u793a\u5668\u7684\u4e0d\u540c\u53c3\u6578\uff08\u6bd4\u5982\u4f4d\u7f6e\u548c\u5927\u5c0f\uff09\uff0c\u4ee5\u9069\u61c9\u81ea\u8a02\u7684\u80cc\u666f\u5716\u50cf\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-progress/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668"),(0,n.kt)("h2",k({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,n.kt)("p",null,"\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668\u4f4d\u65bcProgress Indicators\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-progress/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668"),(0,n.kt)("h2",k({},{id:"properties"}),"\u5c6c\u6027"),(0,n.kt)("p",null,"TouchGFX Designer\u4e2d\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668\u7684\u5c6c\u6027\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,n.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X")," and ",(0,n.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"W")," and ",(0,n.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"The size of a Text Progress is determined by the size of the selected background image."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,n.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Style")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"These styles contain images that are free to use"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Background")," specifies the background image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"\u6587\u5b57")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Text"),' specifies the text displayed. The text field is automatically set to use a wildcard "',"<","\\",">",' %" which means that the wildcard created will be filled with a number that fits the progress configuration. \u8a72\u842c\u7528\u5b57\u5143\u662f\u57fa\u65bc\u6587\u5b57\u7684\u9032\u5ea6\u6307\u793a\u5668\u6b63\u5e38\u5de5\u4f5c\u7684\u5fc5\u8981\u689d\u4ef6\uff0c\u4f46\u53ef\u4ee5\u5728\u842c\u7528\u5b57\u5143\u4e4b\u524d\u548c/\u6216\u4e4b\u5f8c\u8a2d\u7f6e\u4efb\u4f55\u5176\u4ed6\u6587\u5b57\u3002 \u5982\u9700\u8a73\u7d30\u77ad\u89e3\u95dc\u65bc\u6587\u5b57\u914d\u7f6e\u7684\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1',(0,n.kt)("a",k({parentName:"td"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"\u6587\u5b57\u8207\u5b57\u9ad4"),"\u4e00\u7bc0\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Text Position & Size")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X")," and ",(0,n.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the progress text relative to its Text Progress parent.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"W")," and ",(0,n.kt)("em",{parentName:"td"},"H")," specify the width and height of the progress text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Values")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Range Min")," and ",(0,n.kt)("em",{parentName:"td"},"Range Max")," specify the minimum and maximum integer values of the indicator.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Initial")," specifies the initial value of the progress indicator.",(0,n.kt)("em",{parentName:"td"},"Steps Total")," specifies at what granularity the progress indicator reports new values. For instance, if the progress needs to be reported as 0%, 10%, 20%, ..., 100%, the total value should be set to 10.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Steps Min")," specifies the minimum steps the progress indicator shows.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Number of Decimals")," specifies the precision required to show progress. \u53ef\u80fd\u7684\u503c\u70ba0\u30011\u62162\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Color")," specifies the color of the displayed text.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget. ",(0,n.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixin")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,n.kt)("em",{parentName:"td"},"Alpha")," value.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,n.kt)("em",{parentName:"td"},"X")," and ",(0,n.kt)("em",{parentName:"td"},"Y")," values.")))),(0,n.kt)("h2",k({},{id:"interactions"}),"\u4ea4\u4e92"),(0,n.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,n.kt)("h3",k({},{id:"actions"}),"\u64cd\u4f5c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u5c0f\u90e8\u4ef6\u7279\u6709\u7684\u64cd\u4f5c")),(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Set value")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u8a2d\u7f6e\u9032\u5ea6\u6307\u793a\u5668\u7684\u503c\u3002")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,n.kt)("h3",k({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,n.kt)("p",null,"\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668\u5c0f\u90e8\u4ef6\u4e0d\u6703\u7522\u751f\u4efb\u4f55\u89f8\u767c\u689d\u4ef6\u3002"),(0,n.kt)("h2",k({},{id:"performance"}),"\u6027\u80fd"),(0,n.kt)("p",null,"\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668\u5305\u542b\u4e00\u500b\u6587\u5b57\u5340\u57df\u548c\u4e00\u5e45\u80cc\u666f\u5716\u50cf\u3002 \u6587\u5b57\u7e6a\u88fd\u975e\u5e38\u985e\u4f3c\u4e8e\u666e\u901a\u7684\u5716\u50cf\u7e6a\u88fd\uff08\u5118\u7ba1\u7531\u65bc\u6587\u5b57\u5b57\u5143\u7684\u6027\u8cea\uff0c\u6703\u767c\u751f\u5927\u91cf\u7684alpha\u6df7\u5408\uff09\u3002 \u56e0\u6b64\uff0c\u5927\u90e8\u5206\u5e73\u81fa\u6703\u5c07\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668\u8996\u70ba\u975e\u5e38\u5feb\u901f\u7684\u5c0f\u90e8\u4ef6\u3002"),(0,n.kt)("p",null,"\u95dc\u65bc\u6587\u5b57\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,n.kt)("a",k({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u90e8\u5206\u3002"),(0,n.kt)("h2",k({},{id:"examples"}),"\u7bc4\u4f8b"),(0,n.kt)("h3",k({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,n.kt)("p",null,"\u5728\u751f\u6210\u7684\u8996\u5716\u57fa\u985e\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u67e5\u770bTouchGFX Designer\u662f\u5982\u4f55\u5275\u5efa\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668\u7684\u3002"),(0,n.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"textProgress.setXY(198, 119);\ntextProgress.setProgressIndicatorPosition(0, 0, 84, 34);\ntextProgress.setRange(0, 100);\ntextProgress.setColor(touchgfx::Color::getColorFromRGB(0, 0, 0));\ntextProgress.setNumberOfDecimals(0);\ntextProgress.setTypedText(touchgfx::TypedText(T_SINGLEUSEID1));\ntextProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_TEXT_PROGRESS_BG_SQUARE_ID));\ntextProgress.setValue(50);\n")),(0,n.kt)("h3",k({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,n.kt)("p",null,"\u4e0b\u9762\u7684\u7bc4\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5be6\u73fe",(0,n.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),"\u51fd\u6578\u4ee5\u985e\u6bd4\u9032\u5ea6\u3002 \u904b\u884c\u9019\u6bb5\u7a0b\u5f0f\u78bc\u5c07\u5275\u5efa",(0,n.kt)("a",k({parentName:"p"},{href:"text-progress"}),"\u672c\u6587\u958b\u982d\u6240\u793a\u7684\u61c9\u7528"),"\u3002"),(0,n.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n    uint8_t counter;\n};\n")),(0,n.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    counter++;\n    if(counter%15 == 0) // Every 0.25 seconds\n    {\n        int currentValue = textProgress.getValue();\n        int16_t max;\n        int16_t min;\n        textProgress.getRange(min, max);\n\n        if (currentValue == min)\n        {\n            increase = true;\n        }\n        else if (currentValue == max)\n        {\n            increase = false;\n        }\n\n        int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n        counter = 0;\n        textProgress.setValue(nextValue);\n    }\n}\n")),(0,n.kt)(l.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528TextProgress\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u4e86\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,n.kt)(o.Z,{mdxType:"InlineCode"},"textProgress1.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,n.kt)("h3",k({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,n.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u6587\u5b57\u9032\u5ea6\u6307\u793a\u5668\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4ee5\u4e0bUI\u7bc4\u672c\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u9032\u5ea6\u6307\u793a\u5668UI\u7bc4\u672c"),(0,n.kt)("h2",k({},{id:"api-reference"}),"API\u53c3\u8003"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_text_progress",mdxType:"Link"},"TextProgress\u985e\u7684API\u53c3\u8003"))))}x.isMDXComponent=!0}}]);