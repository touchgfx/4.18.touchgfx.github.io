"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1319],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},39130:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),a=n(73727),i=n(11368),l=n(35096),o=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),d=n(67023),u=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&k(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&k(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:u,to:k,href:b,activeClassName:x,isActive:w,"data-noBrokenLinkCheck":y,autoAddBaseUrl:N=!0}=n,T=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:A,baseUrl:E}}=(0,i.Z)(),{withBaseUrl:O}=(0,s.C)(),C=(0,r.useContext)(c),S=k||b,P=(0,l.Z)(S),D=null==S?void 0:S.replace("pathname://","");let Z=void 0!==D?(j=D,N&&(e=>e.startsWith("/"))(j)?O(j):j):void 0;var j;Z&&P&&(Z=(0,d.applyTrailingSlash)(Z,{trailingSlash:A,baseUrl:E}));const _=(0,r.useRef)(!1),F=u?a.OL:a.rU,I=o.Z.canUseIntersectionObserver,U=(0,r.useRef)();(0,r.useEffect)((()=>(!I&&P&&null!=Z&&window.docusaurus.prefetch(Z),()=>{I&&U.current&&U.current.disconnect()})),[U,Z,I,P]);const X=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,R=!Z||!P||X;return Z&&P&&!X&&!y&&C.collectLink(Z),R?r.createElement("a",v(v({href:Z},S&&!P&&{target:"_blank",rel:"noopener noreferrer"}),T)):r.createElement(F,v((M=v({},T),p(M,m({onMouseEnter:()=>{_.current||null==Z||(window.docusaurus.preload(Z),_.current=!0)},innerRef:e=>{var t,n;I&&e&&P&&(t=e,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},U.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.current.unobserve(t),U.current.disconnect(),n())}))})),U.current.observe(t))},to:Z||""}))),u&&{isActive:w,activeClassName:x}));var M}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),i="/"===a||a===r?a:(l=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(a,i)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},26453:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return x},toc:function(){return w},default:function(){return N}});var r=n(3905),a=n(44035),i=n(29415),l=n(37793),o=n(31217),c=n(39130),s=n(22425),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&f(e,n,t[n]);return e};const v={id:"text-area",title:"Text Area"},b=void 0,x={unversionedId:"development/ui-development/ui-components/miscellaneous/text-area",id:"development/ui-development/ui-components/miscellaneous/text-area",isDocsHomePage:!1,title:"Text Area",description:"A Text Area displays text on the screen. The text of a Text Area can be entirely configured in size, color, custom fonts, dynamic texts etc. For more information on how to handle texts in TouchGFX Designer, read the Texts and Fonts article.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/text-area.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/text-area",permalink:"/4.18/zh-CN/docs/development/ui-development/ui-components/miscellaneous/text-area",tags:[],version:"current",frontMatter:{id:"text-area",title:"Text Area"},sidebar:"docs",previous:{title:"Slider",permalink:"/4.18/zh-CN/docs/development/ui-development/ui-components/miscellaneous/slider"},next:{title:"Analog Clock",permalink:"/4.18/zh-CN/docs/development/ui-development/ui-components/miscellaneous/analog-clock"}},w=[{value:"Widget Group",id:"widget-group",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[],level:3},{value:"Triggers",id:"triggers",children:[],level:3}],level:2},{value:"Performance",id:"performance",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[],level:3},{value:"User Code",id:"user-code",children:[],level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[],level:2}],y={toc:w};function N(e){var t,n=e,{components:d}=n,f=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},y),f),u(t,p({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A Text Area displays text on the screen. The text of a Text Area can be entirely configured in size, color, custom fonts, dynamic texts etc. For more information on how to handle texts in TouchGFX Designer, read the ",(0,r.kt)("a",k({parentName:"p"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"Texts and Fonts")," article."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-area/widget-appearance.gif",mdxType:"Figure"},"Text Area running in the simulator"),(0,r.kt)("h2",k({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Text Area can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-area/widget-group-v4.17.png",mdxType:"Figure"},"Text Area in TouchGFX Designer"),(0,r.kt)("h2",k({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Text Area in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,r.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," and ",(0,r.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Auto-size")," specifies whether the size of the widget will be automatically set according to the text input.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Single Use")," and ",(0,r.kt)("em",{parentName:"td"},"Ressource")," specify the type of text: unique or from a known ressource.",(0,r.kt)("br",null),(0,r.kt)("br",null),"When Single Use is selected:",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Text")," specifies the content of the text to be displayed.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Typography")," specifies the format of the text.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alignment")," specifies the horizontal alignment of the text.",(0,r.kt)("br",null),(0,r.kt)("br",null),"When Ressource is selected:",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Ressource ID")," specifies the Ressource to retrieve the text from.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Up to two wildcards can be created for dynamic text input, which are indicated as '","<","tag",">","'  where 'tag' can be any string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Color")," specifies the color of the displayed text.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Line Spacing")," specifies the space between lines.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Text Rotation")," sets the rotation in degrees for the text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)("em",{parentName:"td"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)("em",{parentName:"td"},"X")," and ",(0,r.kt)("em",{parentName:"td"},"Y")," values.")))),(0,r.kt)("h2",k({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the Text Area are described in the following sections."),(0,r.kt)("h3",k({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Widget specific action")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set text")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Set the text of the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Resize the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set wildcard")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Set the wildcard of the widget. A wildcard has to be already added to the Text Area for this action to work.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",k({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"The Text Area does not emit any triggers."),(0,r.kt)("h2",k({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Text Area is dependent on text drawing. Text drawing is very similar to general image drawing (though due to the nature of text characters, a significant amount of alpha blending takes place). Therefore, the Text Area is considered a fast performing widget on most platforms."),(0,r.kt)("p",null,"For more details on text drawing performance, read the ",(0,r.kt)("a",k({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",k({},{id:"examples"}),"Examples"),(0,r.kt)("h3",k({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Text Area."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"touchgfx::TextAreaWithOneWildcard textArea;\n\n/*\n * Wildcard Buffers\n */\nstatic const uint16_t TEXTAREA_SIZE = 20;\ntouchgfx::Unicode::UnicodeChar textAreaBuffer[TEXTAREA_SIZE];\n")),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'textArea.setPosition(40, 111, 400, 50);\ntextArea.setColor(touchgfx::Color::getColorFromRGB(60, 180, 230));\ntextArea.setLinespacing(0);\nUnicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());\ntextArea.setWildcard(textAreaBuffer);\ntextArea.setTypedText(touchgfx::TypedText(T_SINGLEUSEID1));\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the TextA rea class in user code. Remember to force a redraw by calling ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"textArea.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",k({},{id:"user-code"}),"User Code"),(0,r.kt)("p",null,"The following example illustrates how to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleTickEvent()")," function to change the text at runtime using a wildcard. Running this code creates the application shown at the ",(0,r.kt)("a",k({parentName:"p"},{href:"text-area"}),"beginning of this section"),"."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void handleTickEvent();\nprotected:\n    uint8_t counter;\n    bool flag;\n};\n")),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'Screen1View::Screen1View():\n    counter(0),\n    flag(true)\n{}\n\nvoid Screen1View::handleTickEvent()\n{\n    counter++;\n    if(counter%120 == 0) // every 2s\n    {\n        if(flag)\n        {\n            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_STMICROID).getText());\n            flag = false;\n        }\n        else\n        {\n            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());\n            flag = true;\n        }\n        textArea.invalidate();\n        counter = 0;\n    }\n}\n')),(0,r.kt)("h3",k({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Text Area, try creating a new application within TouchGFX Designer with one of the following Examples:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/text-example-v4.17.png",mdxType:"Figure"},"Text Example in TouchGFX Designer"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/arabic-text-example-v4.17.png",mdxType:"Figure"},"Arabic Text Example in TouchGFX Designer"),(0,r.kt)("h2",k({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_text_area",mdxType:"Link"},"API reference for the TextArea class"))))}N.isMDXComponent=!0}}]);