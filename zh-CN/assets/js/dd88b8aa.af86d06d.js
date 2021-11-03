"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[770],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},39130:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),a=n(73727),i=n(11368),l=n(35096),o=n(84487);const d=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),c=n(67023),p=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(g)for(var n of g(t))f.call(t,n)&&k(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:p,to:k,href:b,activeClassName:w,isActive:N,"data-noBrokenLinkCheck":y,autoAddBaseUrl:O=!0}=n,T=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:I,baseUrl:E}}=(0,i.Z)(),{withBaseUrl:x}=(0,s.C)(),P=(0,r.useContext)(d),C=k||b,j=(0,l.Z)(C),S=null==C?void 0:C.replace("pathname://","");let D=void 0!==S?(_=S,O&&(e=>e.startsWith("/"))(_)?x(_):_):void 0;var _;D&&j&&(D=(0,c.applyTrailingSlash)(D,{trailingSlash:I,baseUrl:E}));const Z=(0,r.useRef)(!1),A=p?a.OL:a.rU,B=o.Z.canUseIntersectionObserver,M=(0,r.useRef)();(0,r.useEffect)((()=>(!B&&j&&null!=D&&window.docusaurus.prefetch(D),()=>{B&&M.current&&M.current.disconnect()})),[M,D,B,j]);const U=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,V=!D||!j||U;return D&&j&&!U&&!y&&P.collectLink(D),V?r.createElement("a",v(v({href:D},C&&!j&&{target:"_blank",rel:"noopener noreferrer"}),T)):r.createElement(A,v((z=v({},T),m(z,u({onMouseEnter:()=>{Z.current||null==D||(window.docusaurus.preload(D),Z.current=!0)},innerRef:e=>{var t,n;B&&e&&j&&(t=e,n=()=>{null!=D&&window.docusaurus.prefetch(D)},M.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),n())}))})),M.current.observe(t))},to:D||""}))),p&&{isActive:N,activeClassName:w}));var z}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),i="/"===a||a===r?a:(l=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(a,i)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},34352:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return w},toc:function(){return N},default:function(){return O}});var r=n(3905),a=n(44035),i=n(29415),l=n(31217),o=n(37793),d=n(39130),s=n(22425),c=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))h.call(t,n)&&f(e,n,t[n]);return e};const v={id:"tiled-image",title:"Tiled Image"},b=void 0,w={unversionedId:"development/ui-development/ui-components/images/tiled-image",id:"development/ui-development/ui-components/images/tiled-image",isDocsHomePage:!1,title:"Tiled Image",description:"Description",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/images/tiled-image.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/tiled-image",permalink:"/4.18/zh-CN/docs/development/ui-development/ui-components/images/tiled-image",tags:[],version:"current",frontMatter:{id:"tiled-image",title:"Tiled Image"},sidebar:"docs",previous:{title:"Scalable Image",permalink:"/4.18/zh-CN/docs/development/ui-development/ui-components/images/scalable-image"},next:{title:"Animated Image",permalink:"/4.18/zh-CN/docs/development/ui-development/ui-components/images/animated-image"}},N=[{value:"Description",id:"description",children:[],level:2},{value:"Widget Group",id:"widget-group",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Interactions",id:"interactions",children:[{value:"\u52a8\u4f5c",id:"actions",children:[],level:3},{value:"Triggers",id:"triggers",children:[],level:3}],level:2},{value:"Performance",id:"performance",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[],level:3},{value:"User Code",id:"user-code",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[],level:2}],y={toc:N};function O(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},y),f),p(t,m({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("h2",k({},{id:"description"}),"Description"),(0,r.kt)("p",null,"A Tiled Image is a simple widget capable of showing a tiled bitmap. This means that when Tiled Image is larger than the provided bitmap, the bitmap is repeated horizontally and vertically. The bitmap can be alpha-blended with the background and have areas of transparency."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/tiled-image/widget-appearance.png",mdxType:"Figure"},"Tiled Image running in the simulator"),(0,r.kt)("h2",k({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Tiled Image can be found in the Images widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/tiled-image/widget-group-v4.17.png",mdxType:"Figure"},"Tiled Image in TouchGFX Designer"),(0,r.kt)("h2",k({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Tiled Image in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Style")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"These styles contain images that are free to use"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Image")," Specifies the image that should be used within the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"An image with a repeating pattern is recommended."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Offset")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the offset of the image where the tile drawing should start.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget. ",(0,r.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)("em",{parentName:"td"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.",(0,r.kt)("br",null),(0,r.kt)("br",null))))),(0,r.kt)("h2",k({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the Tiled Image are described in the following sections."),(0,r.kt)("h3",k({},{id:"actions"}),"\u52a8\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Widget specific action")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Resize the width and height of a widget.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",k({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"A Tiled Image does not emit any triggers."),(0,r.kt)("h2",k({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Tiled Image is dependent on image drawing, and is considered a fast performing widget on most platforms.",(0,r.kt)("br",null)," A Tiled Image redraws the same image multiple times to cover the area of the widget. Therefore, small source images result in a greater number of image draws."),(0,r.kt)("p",null,"For more details on image drawing performance, read the ",(0,r.kt)("a",k({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",k({},{id:"examples"}),"Examples"),(0,r.kt)("h3",k({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Tiled Image."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n\n    tiledImage.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_TEXTURES_IRONGRIP_ID));\n    tiledImage.setPosition(35, 36, 50, 50);\n    tiledImage.setOffset(0, 0);\n\n    add(tiledImage);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the TiledImage class in user code. Remember to force a redraw by calling ",(0,r.kt)(l.Z,{mdxType:"InlineCode"},"tiledImage.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",k({},{id:"user-code"}),"User Code"),(0,r.kt)("p",null,"The following code example shows how to animate movement into a Tiled Image by continuously adjusting the offset in the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),":"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{20-23}","{20-23}":!0}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    int x = tiledImage.getXOffset();\n    int y = tiledImage.getYOffset();\n    tiledImage.setOffset(x + 1, y + 1);\n    tiledImage.invalidate();\n}\n")),(0,r.kt)("h2",k({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_tiled_image",mdxType:"Link"},"API reference for the TiledImage class"))))}O.isMDXComponent=!0}}]);