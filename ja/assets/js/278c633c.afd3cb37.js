"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4377],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,r){var n=r(67294),a=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},39130:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),s=r(84487);const l=(0,n.createContext)({collectLink:()=>{}});var c=r(25026),p=r(67023),d=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&k(e,r,t[r]);if(g)for(var r of g(t))f.call(t,r)&&k(e,r,t[r]);return e};var b=function(e){var t,r=e,{isNavLink:d,to:k,href:b,activeClassName:N,isActive:w,"data-noBrokenLinkCheck":x,autoAddBaseUrl:y=!0}=r,T=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&g)for(var n of g(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:O}}=(0,i.Z)(),{withBaseUrl:E}=(0,c.C)(),C=(0,n.useContext)(l),S=k||b,j=(0,o.Z)(S),I=null==S?void 0:S.replace("pathname://","");let _=void 0!==I?(A=I,y&&(e=>e.startsWith("/"))(A)?E(A):A):void 0;var A;_&&j&&(_=(0,p.applyTrailingSlash)(_,{trailingSlash:P,baseUrl:O}));const D=(0,n.useRef)(!1),M=d?a.OL:a.rU,Z=s.Z.canUseIntersectionObserver,V=(0,n.useRef)();(0,n.useEffect)((()=>(!Z&&j&&null!=_&&window.docusaurus.prefetch(_),()=>{Z&&V.current&&V.current.disconnect()})),[V,_,Z,j]);const F=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,R=!_||!j||F;return _&&j&&!F&&!x&&C.collectLink(_),R?n.createElement("a",v(v({href:_},S&&!j&&{target:"_blank",rel:"noopener noreferrer"}),T)):n.createElement(M,v((U=v({},T),u(U,m({onMouseEnter:()=>{D.current||null==_||(window.docusaurus.preload(_),D.current=!0)},innerRef:e=>{var t,r;Z&&e&&j&&(t=e,r=()=>{null!=_&&window.docusaurus.prefetch(_)},V.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(V.current.unobserve(t),V.current.disconnect(),r())}))})),V.current.observe(t))},to:_||""}))),d&&{isActive:w,activeClassName:N}));var U}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),i="/"===a||a===n?a:(o=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,i)}},67023:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},41219:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return N},toc:function(){return w},default:function(){return y}});var n=r(3905),a=r(44035),i=r(29415),o=r(37793),s=r(31217),l=r(39130),c=r(22425),p=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&f(e,r,t[r]);if(m)for(var r of m(t))h.call(t,r)&&f(e,r,t[r]);return e};const v={id:"text-progress",title:"Text Progress"},b=void 0,N={unversionedId:"development/ui-development/ui-components/progress-indicators/text-progress",id:"development/ui-development/ui-components/progress-indicators/text-progress",isDocsHomePage:!1,title:"Text Progress",description:"A Text Progress will display progress as a number with a given number of decimals. It shows the current progress by using a TextArea as the progress indicator on top of a background Image. The Color, the Alpha and the Text of the TextArea can be configured. It is possible to create a custom background image and change the different parameters of the progress indicator such as the position and the size to fit the custom background image.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/text-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/text-progress",permalink:"/4.18/ja/docs/development/ui-development/ui-components/progress-indicators/text-progress",tags:[],version:"current",frontMatter:{id:"text-progress",title:"Text Progress"},sidebar:"docs",previous:{title:"Image Progress",permalink:"/4.18/ja/docs/development/ui-development/ui-components/progress-indicators/image-progress"},next:{title:"Line Progress",permalink:"/4.18/ja/docs/development/ui-development/ui-components/progress-indicators/line-progress"}},w=[{value:"Widget Group",id:"widget-group",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[],level:3},{value:"Triggers",id:"triggers",children:[],level:3}],level:2},{value:"Performance",id:"performance",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[],level:3},{value:"User Code",id:"user-code",children:[],level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[],level:2}],x={toc:w};function y(e){var t,r=e,{components:p}=r,f=((e,t)=>{var r={};for(var n in e)g.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&h.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=k(k({},x),f),d(t,u({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A Text Progress will display progress as a number with a given number of decimals. It shows the current progress by using a ",(0,n.kt)("a",k({parentName:"p"},{href:"../miscellaneous/text-area"}),"TextArea")," as the progress indicator on top of a background ",(0,n.kt)("a",k({parentName:"p"},{href:"../images/image"}),"Image"),". The ",(0,n.kt)("em",{parentName:"p"},"Color"),", the ",(0,n.kt)("em",{parentName:"p"},"Alpha")," and the ",(0,n.kt)("em",{parentName:"p"},"Text")," of the TextArea can be configured. It is possible to create a custom background image and change the different parameters of the progress indicator such as the position and the size to fit the custom background image."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-progress/widget-appearance.gif",mdxType:"Figure"},"Text Progress running in the simulator"),(0,n.kt)("h2",k({},{id:"widget-group"}),"Widget Group"),(0,n.kt)("p",null,"The Text Progress can be found in the Progress Indicators widget group."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-progress/widget-group-v4.17.png",mdxType:"Figure"},"Text Progress in TouchGFX Designer"),(0,n.kt)("h2",k({},{id:"properties"}),"Properties"),(0,n.kt)("p",null,"The properties for a Text Progress in TouchGFX Designer."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Group")),(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,n.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X")," and ",(0,n.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"W")," and ",(0,n.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"The size of a Text Progress is determined by the size of the selected background image."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,n.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Style")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"These styles contain images that are free to use"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Background")," specifies the background image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Text"),' specifies the text displayed. The text field is automatically set to use a wildcard "',"<","\\",">",' %" which means that the wildcard created will be filled with a number that fits the progress configuration. This wildcard is mandatory for the Text Progress to work correctly but any other text can be set before and/or after the wildcard. For more details on text configuration, refer to the ',(0,n.kt)("a",k({parentName:"td"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"Texts and Fonts")," section.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Text Position & Size")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"X")," and ",(0,n.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the progress text relative to its Text Progress parent.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"W")," and ",(0,n.kt)("em",{parentName:"td"},"H")," specify the width and height of the progress text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Values")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Range Min")," and ",(0,n.kt)("em",{parentName:"td"},"Range Max")," specify the minimum and maximum integer values of the indicator.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Initial")," specifies the initial value of the progress indicator.",(0,n.kt)("em",{parentName:"td"},"Steps Total")," specifies at what granularity the progress indicator reports new values. For instance, if the progress needs to be reported as 0%, 10%, 20%, ..., 100%, the total value should be set to 10.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Steps Min")," specifies the minimum steps the progress indicator shows.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Number of Decimals")," specifies the precision required to show progress. The possible values are 0, 1 or 2.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Color")," specifies the color of the displayed text.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget. ",(0,n.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,n.kt)("em",{parentName:"td"},"Alpha")," value.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,n.kt)("em",{parentName:"td"},"X")," and ",(0,n.kt)("em",{parentName:"td"},"Y")," values.")))),(0,n.kt)("h2",k({},{id:"interactions"}),"Interactions"),(0,n.kt)("p",null,"The actions and triggers supported by the Text Progress are described in the following sections."),(0,n.kt)("h3",k({},{id:"actions"}),"Actions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Widget specific actions")),(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Set value")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Set the value of the progress indicator.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,n.kt)("th",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,n.kt)("h3",k({},{id:"triggers"}),"Triggers"),(0,n.kt)("p",null,"The Text Progress widget does not emit any triggers."),(0,n.kt)("h2",k({},{id:"performance"}),"Performance"),(0,n.kt)("p",null,"A Text Progress consists of a TextArea and a background Image. Text drawing is very similar to general image drawing (though due to the nature of text characters, a significant amount of alpha blending takes place). Therefore, the Text Progress is considered a fast widget on most platforms."),(0,n.kt)("p",null,"For more details on text drawing performance, read the ",(0,n.kt)("a",k({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,n.kt)("h2",k({},{id:"examples"}),"Examples"),(0,n.kt)("h3",k({},{id:"generated-code"}),"Generated Code"),(0,n.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Text Progress."),(0,n.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"textProgress.setXY(198, 119);\ntextProgress.setProgressIndicatorPosition(0, 0, 84, 34);\ntextProgress.setRange(0, 100);\ntextProgress.setColor(touchgfx::Color::getColorFromRGB(0, 0, 0));\ntextProgress.setNumberOfDecimals(0);\ntextProgress.setTypedText(touchgfx::TypedText(T_SINGLEUSEID1));\ntextProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_TEXT_PROGRESS_BG_SQUARE_ID));\ntextProgress.setValue(50);\n")),(0,n.kt)("h3",k({},{id:"user-code"}),"User Code"),(0,n.kt)("p",null,"The following example illustrates how to implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"handleTickEvent()")," function to simulate progress. Running this code creates the application shown at the ",(0,n.kt)("a",k({parentName:"p"},{href:"text-progress"}),"beginning of this article"),"."),(0,n.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n    uint8_t counter;\n};\n")),(0,n.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    counter++;\n    if(counter%15 == 0) // Every 0.25 seconds\n    {\n        int currentValue = textProgress.getValue();\n        int16_t max;\n        int16_t min;\n        textProgress.getRange(min, max);\n\n        if (currentValue == min)\n        {\n            increase = true;\n        }\n        else if (currentValue == max)\n        {\n            increase = false;\n        }\n\n        int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n        counter = 0;\n        textProgress.setValue(nextValue);\n    }\n}\n")),(0,n.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the TextProgress class in user code. Remember to force a redraw by calling ",(0,n.kt)(s.Z,{mdxType:"InlineCode"},"textProgress1.invalidate()")," if you change the appearance of the widget."),(0,n.kt)("h3",k({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,n.kt)("p",null,"To further explore the Text Progress, try creating a new application within TouchGFX Designer with the following UI template:"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.png",mdxType:"Figure"},"Progress Indicator Example UI template in TouchGFX Designer"),(0,n.kt)("h2",k({},{id:"api-reference"}),"API Reference"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(l.Z,{to:"../../../../api/classes/classtouchgfx_1_1_text_progress",mdxType:"Link"},"API reference for the TextProgress class"))))}y.isMDXComponent=!0}}]);