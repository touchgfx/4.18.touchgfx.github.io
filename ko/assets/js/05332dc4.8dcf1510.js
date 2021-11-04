"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8239],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},39130:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),a=n(73727),i=n(11368),l=n(35096),o=n(84487);const d=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),c=n(67023),u=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&f(e,n,t[n]);if(h)for(var n of h(t))k.call(t,n)&&f(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:u,to:f,href:b,activeClassName:N,isActive:w,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=n,C=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:S,baseUrl:O}}=(0,i.Z)(),{withBaseUrl:T}=(0,s.C)(),E=(0,r.useContext)(d),V=f||b,I=(0,l.Z)(V),P=null==V?void 0:V.replace("pathname://","");let _=void 0!==P?(D=P,x&&(e=>e.startsWith("/"))(D)?T(D):D):void 0;var D;_&&I&&(_=(0,c.applyTrailingSlash)(_,{trailingSlash:S,baseUrl:O}));const B=(0,r.useRef)(!1),M=u?a.OL:a.rU,j=o.Z.canUseIntersectionObserver,Z=(0,r.useRef)();(0,r.useEffect)((()=>(!j&&I&&null!=_&&window.docusaurus.prefetch(_),()=>{j&&Z.current&&Z.current.disconnect()})),[Z,_,j,I]);const A=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,H=!_||!I||A;return _&&I&&!A&&!y&&E.collectLink(_),H?r.createElement("a",v(v({href:_},V&&!I&&{target:"_blank",rel:"noopener noreferrer"}),C)):r.createElement(M,v((L=v({},C),p(L,m({onMouseEnter:()=>{B.current||null==_||(window.docusaurus.preload(_),B.current=!0)},innerRef:e=>{var t,n;j&&e&&I&&(t=e,n=()=>{null!=_&&window.docusaurus.prefetch(_)},Z.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.current.unobserve(t),Z.current.disconnect(),n())}))})),Z.current.observe(t))},to:_||""}))),u&&{isActive:w,activeClassName:N}));var L}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),i="/"===a||a===r?a:(l=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(a,i)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},62609:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return N},toc:function(){return w},default:function(){return x}});var r=n(3905),a=n(44035),i=n(29415),l=n(37793),o=n(31217),d=n(39130),s=n(22425),c=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&k(e,n,t[n]);return e};const v={id:"slider",title:"Slider"},b=void 0,N={unversionedId:"development/ui-development/ui-components/miscellaneous/slider",id:"development/ui-development/ui-components/miscellaneous/slider",isDocsHomePage:!1,title:"Slider",description:"A Slider uses three images to display a slider either in a vertical or horizontal orientation. The indicator image of a Slider can be dragged to modify an internal integer value that is broadcasted through callbacks. The value broadcasted operates on an integer value range e.g. 0 to 100.",source:"@site/docs/development/ui-development/ui-components/miscellaneous/slider.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/slider",permalink:"/4.18/ko/docs/development/ui-development/ui-components/miscellaneous/slider",tags:[],version:"current",frontMatter:{id:"slider",title:"Slider"},sidebar:"docs",previous:{title:"Shape",permalink:"/4.18/ko/docs/development/ui-development/ui-components/shapes/shape"},next:{title:"Text Area",permalink:"/4.18/ko/docs/development/ui-development/ui-components/miscellaneous/text-area"}},w=[{value:"Widget Group",id:"widget-group",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[],level:3},{value:"Triggers",id:"triggers",children:[],level:3}],level:2},{value:"Performance",id:"performance",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[],level:3},{value:"User Code",id:"user-code",children:[],level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[],level:2}],y={toc:w};function x(e){var t,n=e,{components:c}=n,k=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},y),k),u(t,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A Slider uses three images to display a slider either in a vertical or horizontal orientation. The indicator image of a Slider can be dragged to modify an internal integer value that is broadcasted through callbacks. The value broadcasted operates on an integer value range ",(0,r.kt)("em",{parentName:"p"},"e.g. 0 to 100"),"."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/slider/widget-appearance.gif",mdxType:"Figure"},"Slider running in the simulator"),(0,r.kt)("h2",f({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Slider can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/slider/widget-group-v4.17.png",mdxType:"Figure"},"Slider in TouchGFX Designer"),(0,r.kt)("h2",f({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Slider in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Type")," specifies whether the Slider should be vertically or horizontally oriented.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The size of a Slider is taken from the size of the associated images and cannot be altered except by changing the images."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Style")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"These styles contain images that are free to use"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Background Image")," specifies the background image that the indicator slides across.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Background Filled Image")," specifies the image filling the area on top of the background image behind the indicator.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Indicator Image")," specifies the image that can be dragged to change the value of the slider.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The background image and background filled image must both be the same size."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Positions")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Background Position X")," and ",(0,r.kt)("em",{parentName:"td"},"Background Position Y")," specify the top left corner position of the ",(0,r.kt)("em",{parentName:"td"},"Background Image")," and ",(0,r.kt)("em",{parentName:"td"},"Background Filled Image"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Indicator Position Min")," and ",(0,r.kt)("em",{parentName:"td"},"Indicator Position Max")," specify the minimum and maximum positions of the ",(0,r.kt)("em",{parentName:"td"},"Indicator Image"),".",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"For a horizontal slider these two values are in the x-axis and for a vertical slider they are in the y-axis"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Indicator Position Y")," specifies the indicator image's position in the y-axis.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"If the slider is vertically oriented this value instead adjusts in the x-axis."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Values")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Min")," and ",(0,r.kt)("em",{parentName:"td"},"Max")," specifies the internal integer range that is broadcast from the Slider using callbacks.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Start")," specifies the initial internal value in the Slider. ",(0,r.kt)("em",{parentName:"td"},"This also changes the initial position of the indicator."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",f({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the Slider are described in the following sections."),(0,r.kt)("h3",f({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",f({},{id:"triggers"}),"Triggers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Trigger")),(0,r.kt)("th",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Slider adjustment initiated")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"A Slider has been clicked or dragged.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Slider adjustment confirmed")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"A Slider indicator is no longer being dragged.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Slider value changed")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"A Sliders value has changed.")))),(0,r.kt)("h2",f({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Slider consists of three images. Therefore, a Slider is dependent on image drawing and is considered a fast performing widget on most platforms."),(0,r.kt)("p",null,"For more details on image drawing performance, read the ",(0,r.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",f({},{id:"examples"}),"Examples"),(0,r.kt)("h3",f({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Slider."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase()\n{\n    slider.setXY(71, 173);\n    slider.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_SLIDER2_ROUND_BACK_ID), touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_SLIDER2_ROUND_FILL_ID), touchgfx::Bitmap(BITMAP_BLUE_SLIDER_HORIZONTAL_MEDIUM_INDICATORS_SLIDER2_ROUND_NOB_ID));\n    slider.setupHorizontalSlider(2, 6, 0, 0, 284);\n    slider.setValueRange(0, 100);\n    slider.setValue(0);\n\n    add(slider);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the Slider class in user code. Remember to force a redraw by calling ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"slider.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",f({},{id:"user-code"}),"User Code"),(0,r.kt)("p",null,"The following code example shows how to set up the three callbacks of a Slider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(o.Z,{mdxType:"InlineCode"},"setStartValueCallback")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(o.Z,{mdxType:"InlineCode"},"setNewValueCallback")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(o.Z,{mdxType:"InlineCode"},"setStopValueCallback"))),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueStartedChangeCallback;\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueChangedCallback;\n    touchgfx::Callback<mainView, const touchgfx::Slider&, int> sliderValueConfirmedCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void sliderValueStartedChangeCallbackHandler(const touchgfx::Slider& src, int value);\n    void sliderValueChangedCallbackHandler(const touchgfx::Slider& src, int value);\n    void sliderValueConfirmedCallbackHandler(const touchgfx::Slider& src, int value);\n};\n\n#endif // MAINVIEW_HPP\n")),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView():\n    sliderValueStartedChangeCallback(this, &mainView::sliderValueStartedChangeCallbackHandler),\n    sliderValueChangedCallback(this, &mainView::sliderValueChangedCallbackHandler),\n    sliderValueConfirmedCallback(this, &mainView::sliderValueConfirmedCallbackHandler)\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    slider.setStartValueCallback(sliderValueStartedChangeCallback);\n    slider.setNewValueCallback(sliderValueChangedCallback);\n    slider.setStopValueCallback(sliderValueConfirmedCallback);\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::sliderValueStartedChangeCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the slider starts changing value.\n    }\n}\n\nvoid mainView::sliderValueChangedCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the value of the slider changes.\n    }\n}\n\nvoid mainView::sliderValueConfirmedCallbackHandler(const touchgfx::Slider& src, int value)\n{\n    if (&src == &slider)\n    {\n        //execute code whenever the slider stops the changing value.\n    }\n}\n")),(0,r.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Slider, try creating a new application within TouchGFX Designer with one of the following Examples:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/slider-example-v4.17.png",mdxType:"Figure"},"Slider Example in TouchGFX Designer"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/pool-demo-v4.17.png",mdxType:"Figure"},"Pool Demo in TouchGFX Designer"),(0,r.kt)("h2",f({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_slider",mdxType:"Link"},"API reference for the Slider class"))))}x.isMDXComponent=!0}}]);