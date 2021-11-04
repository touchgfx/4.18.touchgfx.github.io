"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6722],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,g=p["".concat(m,".").concat(u)]||p[u]||s[u]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},39130:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(67294),r=n(73727),i=n(11368),l=n(35096),o=n(84487);const m=(0,a.createContext)({collectLink:()=>{}});var d=n(25026),c=n(67023),s=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(g)for(var n of g(t))f.call(t,n)&&k(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:s,to:k,href:b,activeClassName:w,isActive:N,"data-noBrokenLinkCheck":y,autoAddBaseUrl:I=!0}=n,O=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&g)for(var a of g(e))t.indexOf(a)<0&&f.call(e,a)&&(n[a]=e[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x,baseUrl:T}}=(0,i.Z)(),{withBaseUrl:A}=(0,d.C)(),E=(0,a.useContext)(m),_=k||b,P=(0,l.Z)(_),C=null==_?void 0:_.replace("pathname://","");let D=void 0!==C?(j=C,I&&(e=>e.startsWith("/"))(j)?A(j):j):void 0;var j;D&&P&&(D=(0,c.applyTrailingSlash)(D,{trailingSlash:x,baseUrl:T}));const B=(0,a.useRef)(!1),S=s?r.OL:r.rU,V=o.Z.canUseIntersectionObserver,Z=(0,a.useRef)();(0,a.useEffect)((()=>(!V&&P&&null!=D&&window.docusaurus.prefetch(D),()=>{V&&Z.current&&Z.current.disconnect()})),[Z,D,V,P]);const M=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,U=!D||!P||M;return D&&P&&!M&&!y&&E.collectLink(D),U?a.createElement("a",v(v({href:D},_&&!P&&{target:"_blank",rel:"noopener noreferrer"}),O)):a.createElement(S,v((F=v({},O),p(F,u({onMouseEnter:()=>{B.current||null==D||(window.docusaurus.preload(D),B.current=!0)},innerRef:e=>{var t,n;V&&e&&P&&(t=e,n=()=>{null!=D&&window.docusaurus.prefetch(D)},Z.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.current.unobserve(t),Z.current.disconnect(),n())}))})),Z.current.observe(t))},to:D||""}))),s&&{isActive:N,activeClassName:w}));var F}},35096:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:a}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[r]=e.split(/[#?]/),i="/"===r||r===a?r:(l=r,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(r,i)}},67023:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},63893:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return w},toc:function(){return N},default:function(){return I}});var a=n(3905),r=n(44035),i=n(29415),l=n(31217),o=n(37793),m=n(39130),d=n(22425),c=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))h.call(t,n)&&f(e,n,t[n]);return e};const v={id:"animated-image",title:"\u52d5\u756b\u5716\u50cf"},b=void 0,w={unversionedId:"development/ui-development/ui-components/images/animated-image",id:"development/ui-development/ui-components/images/animated-image",isDocsHomePage:!1,title:"\u52d5\u756b\u5716\u50cf",description:"\u52d5\u756b\u5716\u50cf(Animated Image)\u80fd\u5920\u4f7f\u7528\u4e00\u7cfb\u5217\u5171\u7528\u7684\u5716\u50cf\u5f9e\u982d\u81f3\u5c3e\u904b\u884c\u52d5\u756b\u3002 \u52d5\u756b\u5716\u50cf\u80fd\u5920\u5728\u505c\u6b62\u6216\u66ab\u505c\u4e4b\u524d\u904b\u884c\u4e00\u6b21\u52d5\u756b\u6216\u8ff4\u5708\u904b\u884c\u52d5\u756b\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/animated-image.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/animated-image",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/images/animated-image",tags:[],version:"current",frontMatter:{id:"animated-image",title:"\u52d5\u756b\u5716\u50cf"},sidebar:"docs",previous:{title:"Tiled Image",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/images/tiled-image"},next:{title:"\u7d0b\u7406\u6620\u5c04\u5668",permalink:"/4.18/zh-TW/docs/development/ui-development/ui-components/images/texture-mapper"}},N=[{value:"\u5c0f\u90e8\u4ef6\u7d44",id:"widget-group",children:[],level:2},{value:"\u5c6c\u6027",id:"properties",children:[],level:2},{value:"\u4ea4\u4e92",id:"interactions",children:[{value:"\u64cd\u4f5c",id:"actions",children:[],level:3},{value:"\u89f8\u767c\u689d\u4ef6",id:"triggers",children:[],level:3}],level:2},{value:"\u6027\u80fd",id:"performance",children:[],level:2},{value:"\u7bc4\u4f8b",id:"examples",children:[{value:"\u751f\u6210\u7a0b\u5f0f\u78bc",id:"generated-code",children:[],level:3},{value:"\u7528\u6236\u7a0b\u5f0f\u78bc",id:"user-code",children:[],level:3},{value:"TouchGFX Designer\u7bc4\u4f8b",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API\u53c3\u8003",id:"api-reference",children:[],level:2}],y={toc:N};function I(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},y),f),s(t,p({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u52d5\u756b\u5716\u50cf(Animated Image)\u80fd\u5920\u4f7f\u7528\u4e00\u7cfb\u5217\u5171\u7528\u7684\u5716\u50cf\u5f9e\u982d\u81f3\u5c3e\u904b\u884c\u52d5\u756b\u3002 \u52d5\u756b\u5716\u50cf\u80fd\u5920\u5728\u505c\u6b62\u6216\u66ab\u505c\u4e4b\u524d\u904b\u884c\u4e00\u6b21\u52d5\u756b\u6216\u8ff4\u5708\u904b\u884c\u52d5\u756b\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/animated-image/widget-appearance.gif",mdxType:"Figure"},"\u5728\u6a21\u64ec\u5668\u4e2d\u904b\u884c\u7684\u52d5\u756b\u5716\u50cf"),(0,a.kt)("h2",k({},{id:"widget-group"}),"\u5c0f\u90e8\u4ef6\u7d44"),(0,a.kt)("p",null,"\u52d5\u756b\u5716\u50cf\u4f4d\u65bcTouchGFX Designer\u4e2d\u7684Images\u5c0f\u90e8\u4ef6\u7d44\u4e2d\u3002"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/animated-image/widget-group-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u52d5\u756b\u5716\u50cf"),(0,a.kt)("h2",k({},{id:"properties"}),"\u5c6c\u6027"),(0,a.kt)("p",null,"TouchGFX Designer\u4e2d\u52d5\u756b\u5716\u50cf\u7684\u5c6c\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u7d44")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u5c6c\u6027\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,a.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," and ",(0,a.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"The size of a Animated Image is taken from the size of the associated images and cannot be altered except by changing the images.")," ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,a.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Image")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"First Image")," and ",(0,a.kt)("em",{parentName:"td"},"Last Image")," specify the first and last images in the range of images used for the animation.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"The images used must have an identifier e.g. img_01.png, img_02.png, img_03.png, img_04.png, img_05.png, img_06.png, img_07.png, etc."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animation")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Start on load")," specifies if the animation should start as soon as the screen is loaded.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Reverse Animation")," specifies if the images used for the animation should be run in reverse order.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Loop Animation")," specifies if the animation should run continuously.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Update Interval")," specifies the the amount of time that will pass between each image in the animation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget. ",(0,a.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixin")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,a.kt)("em",{parentName:"td"},"Alpha")," value.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," values.")))),(0,a.kt)("h2",k({},{id:"interactions"}),"\u4ea4\u4e92"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u90e8\u5206\u4ecb\u7d39\u4e86\u52d5\u756b\u5716\u50cf\u652f\u63f4\u7684\u64cd\u4f5c\u548c\u89f8\u767c\u689d\u4ef6\u3002"),(0,a.kt)("h3",k({},{id:"actions"}),"\u64cd\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u5c0f\u90e8\u4ef6\u64cd\u4f5c")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u5c07\u5c0f\u90e8\u4ef6\u79fb\u52d5\u5230\u65b0\u4f4d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u96a8\u6642\u9593\u7684\u63a8\u79fb\u6539\u8b8a\u5c0f\u90e8\u4ef6\u7684Alpha\u503c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u96b1\u85cf\u5c0f\u90e8\u4ef6\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70bafalse\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u4f7f\u96b1\u85cf\u7684\u5c0f\u90e8\u4ef6\u53ef\u898b\uff08\u5c07\u53ef\u898b\u6027\u8a2d\u7f6e\u70batrue\uff09\u3002")))),(0,a.kt)("h3",k({},{id:"triggers"}),"\u89f8\u767c\u689d\u4ef6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u89f8\u767c\u689d\u4ef6")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animation is done")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u52d5\u756b\u5716\u50cf\u5df2\u5b8c\u6210\u5176\u52d5\u756b\u3002")))),(0,a.kt)("h2",k({},{id:"performance"}),"\u6027\u80fd"),(0,a.kt)("p",null,"An Animated Image is dependent on image drawing, and is considered a fast performing widget on most platforms.",(0,a.kt)("br",null)," An Animated Image draws images according to the ",(0,a.kt)("em",{parentName:"p"},"Update Interval"),". Therefore, a lower ",(0,a.kt)("em",{parentName:"p"},"Update Interval")," results in more image draws."),(0,a.kt)("p",null,"\u95dc\u65bc\u5716\u50cf\u7e6a\u88fd\u6027\u80fd\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u95b1\u8b80",(0,a.kt)("a",k({parentName:"p"},{href:"../general-ui-component-performance"}),"\u901a\u7528UI\u5143\u4ef6\u6027\u80fd"),"\u4e00\u7bc0\u3002"),(0,a.kt)("h2",k({},{id:"examples"}),"\u7bc4\u4f8b"),(0,a.kt)("h3",k({},{id:"generated-code"}),"\u751f\u6210\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u5728\u70baView\u57fa\u985e\u751f\u6210\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230TouchGFX Designer\u5982\u4f55\u8a2d\u7f6e\u6309\u9215\u3002"),(0,a.kt)(d.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n\n    image.setXY(0, 0);\n    image.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_BACKGROUNDS_MAIN_BG_TEXTURE_480X272PX_ID));\n\n    animatedImage.setXY(0, -104);\n    animatedImage.setBitmaps(BITMAP_BUTTERFLY_01_ID, BITMAP_BUTTERFLY_72_ID);\n    animatedImage.setUpdateTicksInterval(2);\n    animatedImage.startAnimation(false, true, true);\n\n    add(image);\n    add(animatedImage);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(o.Z,{mdxType:"Tip"},"\u60a8\u53ef\u4ee5\u5728\u7528\u6236\u7a0b\u5f0f\u78bc\u4e2d\u4f7f\u7528Animated Image\u985e\u4e2d\u7684\u9019\u4e9b\u51fd\u6578\u548c\u5176\u4ed6\u53ef\u7528\u51fd\u6578\u3002 \u5982\u679c\u66f4\u6539\u5c0f\u90e8\u4ef6\u7684\u5916\u89c0\uff0c\u8acb\u5fc5\u9808\u547c\u53eb ",(0,a.kt)(l.Z,{mdxType:"InlineCode"},"animatedImage.invalidate()")," \u4ee5\u5f37\u5236\u91cd\u7e6a\u3002"),(0,a.kt)("h3",k({},{id:"user-code"}),"\u7528\u6236\u7a0b\u5f0f\u78bc"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\u4ecb\u7d39\u4e86\u52d5\u756b\u5b8c\u6210\u5f8c\u5982\u4f55\u8a2d\u7f6e\u52d5\u756b\u5716\u50cf\u7684callback\u51fd\u6578\uff1a"),(0,a.kt)(d.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<mainView, const touchgfx::AnimatedImage&> animatedImageAnimationDoneCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void animatedImageAnimationDoneCallbackHandler(const touchgfx::AnimatedImage& src);\n};\n\n#endif // MAINVIEW_HPP\n")),(0,a.kt)(d.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView():\n    animatedImageAnimationDoneCallback(this, &mainView::animatedImageAnimationDoneCallbackHandler)\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    animatedImage.setDoneAction(animatedImageAnimationDoneCallback);\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::animatedImageAnimationDoneCallbackHandler(const touchgfx::AnimatedImage& src)\n{\n    if (&src == &animatedImage)\n    {\n        //execute code whenever the animation of animatedImage stops\n    }\n}\n")),(0,a.kt)("h3",k({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u5982\u9700\u9032\u4e00\u6b65\u77ad\u89e3\u52d5\u756b\u5716\u50cf\uff0c\u8acb\u5617\u8a66\u5728TouchGFX Designer\u4e2d\u4f7f\u7528\u4e0b\u5217UI\u7bc4\u672c\u4e4b\u4e00\u5275\u5efa\u65b0\u61c9\u7528\uff1a"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/animated-image-example-v4.17.png",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u52d5\u756b\u5716\u50cfUI\u7bc4\u672c"),(0,a.kt)("h2",k({},{id:"api-reference"}),"API\u53c3\u8003"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(m.Z,{to:"../../../../api/classes/classtouchgfx_1_1_animated_image",mdxType:"Link"},"AnimatedImage\u985e\u7684API\u53c3\u8003"))))}I.isMDXComponent=!0}}]);