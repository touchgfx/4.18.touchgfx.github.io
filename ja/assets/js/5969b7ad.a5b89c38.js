(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8525],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){"use strict";var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},2083:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){"use strict";var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(67294),r=n(73727),i=n(11368),l=n(35096),o=n(84487);const s=(0,a.createContext)({collectLink:()=>{}});var u=n(25026),d=n(67023),c=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(g)for(var n of g(t))f.call(t,n)&&k(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:c,to:k,href:b,activeClassName:N,isActive:w,"data-noBrokenLinkCheck":y,autoAddBaseUrl:E=!0}=n,x=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&g)for(var a of g(e))t.indexOf(a)<0&&f.call(e,a)&&(n[a]=e[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:T}}=(0,i.Z)(),{withBaseUrl:A}=(0,u.C)(),C=(0,a.useContext)(s),G=k||b,P=(0,l.Z)(G),_=null==G?void 0:G.replace("pathname://","");let I=void 0!==_?(M=_,E&&(e=>e.startsWith("/"))(M)?A(M):M):void 0;var M;I&&P&&(I=(0,d.applyTrailingSlash)(I,{trailingSlash:O,baseUrl:T}));const S=(0,a.useRef)(!1),j=c?r.OL:r.rU,D=o.Z.canUseIntersectionObserver;let B;(0,a.useEffect)((()=>(!D&&P&&null!=I&&window.docusaurus.prefetch(I),()=>{D&&B&&B.disconnect()})),[I,D,P]);const L=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,U=!I||!P||L;return I&&P&&!L&&!y&&C.collectLink(I),U?a.createElement("a",v(v({href:I},G&&!P&&{target:"_blank",rel:"noopener noreferrer"}),x)):a.createElement(j,v((R=v({},x),p(R,m({onMouseEnter:()=>{S.current||null==I||(window.docusaurus.preload(I),S.current=!0)},innerRef:e=>{var t,n;D&&e&&P&&(t=e,n=()=>{null!=I&&window.docusaurus.prefetch(I)},B=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))})),B.observe(t))},to:I||""}))),c&&{isActive:w,activeClassName:N}));var R}},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:a}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[r]=e.split(/[#?]/),i="/"===r||r===a?r:(l=r,n?function(e){return e.endsWith("/")?e:`${e}/`}(l):function(e){return e.endsWith("/")?e.slice(0,-1):e}(l));var l;return e.replace(r,i)}},67023:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},66453:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return N},toc:function(){return w},default:function(){return E}});var a=n(3905),r=n(44035),i=n(29415),l=n(37793),o=n(2083),s=n(31217),u=n(22425),d=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&f(e,n,t[n]);return e};const v={id:"gauge",title:"Gauge"},b=void 0,N={unversionedId:"development/ui-development/ui-components/miscellaneous/gauge",id:"development/ui-development/ui-components/miscellaneous/gauge",isDocsHomePage:!1,title:"Gauge",description:"A Gauge is a widget capable of drawing a needle and arc indicating a given value within a specified range.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/gauge.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/gauge",permalink:"/4.18/ja/docs/development/ui-development/ui-components/miscellaneous/gauge",version:"current",frontMatter:{id:"gauge",title:"Gauge"},sidebar:"docs",previous:{title:"Dynamic Graph",permalink:"/4.18/ja/docs/development/ui-development/ui-components/miscellaneous/dynamic-graph"},next:{title:"Video",permalink:"/4.18/ja/docs/development/ui-development/ui-components/miscellaneous/video"}},w=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],y={toc:w};function E(e){var t,n=e,{components:d}=n,f=((e,t)=>{var n={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},y),f),c(t,p({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A Gauge is a widget capable of drawing a needle and arc indicating a given value within a specified range."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-appearance.gif",mdxType:"Figure"},"Gauge running in the simulator"),(0,a.kt)("h2",k({},{id:"widget-group"}),"Widget Group"),(0,a.kt)("p",null,"The gauge can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-group-v4.17.png",mdxType:"Figure"},"Gauge in TouchGFX Designer"),(0,a.kt)("h2",k({},{id:"properties"}),"Properties"),(0,a.kt)("p",null,"The properties for a Gauge in TouchGFX Designer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Group")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,a.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," and ",(0,a.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget. ",(0,a.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"These styles contain images that are free to use"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Background")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Background Image")," specifies the image to be used as background.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Background offset")," specifies the x- and y-axis offset of the selected background image.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Rotation Center")," specifies the x- and y-axis point in the widget at which the needle and arc should rotate.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Start and End Angle")," specify the start and end angle of the needle and arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Value Range")," specifies the minimum and maximum integer values of the indicator.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Initial Value")," specifies the initial value of the gauge.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animation")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Animate Movement")," specifies if animation of the needle and arc are enabled.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Easing")," and ",(0,a.kt)("em",{parentName:"td"},"Easing Option")," specify the easing equation used.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Needle")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Needle Image")," specifies the image to be used as background.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Needle Rotation Center")," specifies the position in the needle image around which it will rotate.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Moving Rendering Algorithm")," specifies the algorithm used to draw the needle image while moving to new value.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Steady Rendering Algorithm")," specifies the algorithm used to draw the needle image while stationary.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Arc")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Use Arc")," specifies whether or not to use an arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Image/Color")," specifies either a color or an image to use as fill for the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Set Arc position"),"  specifies whether or not to override the default arc size and position.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"By default arc is placed in 0, 0 and has the same size as the gauge itself. Overriding the default setting is useful when you want to use an image as painter for the arc, but the arc, and thus the image, is smaller than the size of the gauge. So instead of having a large image of the size of the gauge with a lot of transparent lines, the the image can be cut to the wanted size and place the arc at a specific position. The arc will still follow the same rotation center."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Arc Position X and Y")," specifies the x- and y-axis position of the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Arc Width and Height")," specifies the size of the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Radius")," specifies the radius of the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Line Width")," specifies the line width of the arc. ",(0,a.kt)("em",{parentName:"td"},"If the value is 0, the arc is as large as the radius."),(0,a.kt)("br",null),(0,a.kt)("br",null)," ",(0,a.kt)("em",{parentName:"td"},"Cap Style")," specifies line ending style of the arc. ",(0,a.kt)("em",{parentName:"td"},"If the line width is set to 0, the capstyle selected will have no effect."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Arc on top of Needle")," specifies whether or not the arc is on top of the needle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Alpha")," specifies the transparency of the widget. ",(0,a.kt)("em",{parentName:"td"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,a.kt)("em",{parentName:"td"},"Alpha")," value.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," values.")))),(0,a.kt)("p",null,"By default arc is placed in 0, 0 and has the same size as the gauge itself. Overriding the default setting is useful when you want to use an image as painter for the arc, but the arc, and thus the image, is smaller than the size of the gauge. So instead of having a large image of the size of the gauge with a lot of transparent lines, the the image can be cut to the wanted size and place the arc at a specific position. The arc will still follow the same rotation center."),(0,a.kt)("h2",k({},{id:"interactions"}),"Interactions"),(0,a.kt)("p",null,"The actions and triggers supported by a Gauge in TouchGFX Designer."),(0,a.kt)("h3",k({},{id:"actions"}),"Actions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Widget specific actions")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Set value")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Set the value of the Gauge.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Update value")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Update the value of the Gauge with a duration.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,a.kt)("h3",k({},{id:"triggers"}),"Triggers"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Trigger")),(0,a.kt)("th",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge value set")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Will be triggered for both instant updates and intermediate steps during an update animation. Will only trigger when the new value differs from the current one.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge value updated")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Will be triggered when an update animation is completed. If duration of the update is 0 the update will happen instantly but will still trigger this event.")))),(0,a.kt)("h2",k({},{id:"performance"}),"Performance"),(0,a.kt)("p",null,"A Gauge consists of an ",(0,a.kt)("a",k({parentName:"p"},{href:"../images/image"}),"Image"),", ",(0,a.kt)("a",k({parentName:"p"},{href:"../shapes/circle"}),"Circle")," and a ",(0,a.kt)("a",k({parentName:"p"},{href:"../images/texture-mapper"}),"Texture Mapper"),"."),(0,a.kt)("p",null,"The Circle and Texture Mapper components are MCU resource intensive components. Therefore, the Gauge is considered a demanding widget on most platforms."),(0,a.kt)("p",null,"For more details on drawing performance, read the ",(0,a.kt)("a",k({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,a.kt)("h2",k({},{id:"examples"}),"Examples"),(0,a.kt)("h3",k({},{id:"generated-code"}),"Generated Code"),(0,a.kt)("p",null,"In the generated code for the View base class we can see how the Designer sets up a Gauge."),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"MainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    gauge.setBackground(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_BACKGROUND_STYLE_01_ID));\n    gauge.setPosition(115, 11, 251, 251);\n    gauge.setCenter(125, 125);\n    gauge.setStartEndAngle(-85, 85);\n    gauge.setRange(0, 100);\n    gauge.setValue(0);\n    gauge.setEasingEquation(touchgfx::EasingEquations::elasticEaseOut);\n    gauge.setNeedle(BITMAP_BLUE_NEEDLES_ORIGINAL_GAUGE_NEEDLE_STYLE_01_ID, 11, 55);\n    gauge.setMovingNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setSteadyNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setArcVisible();\n    gaugePainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_FILL_STYLE_01_ID));\n    gauge.getArc().setPainter(gaugePainter);\n    gauge.getArc().setRadius(94);\n    gauge.getArc().setLineWidth(14);\n    gauge.getArc().setCapPrecision(180);\n    gauge.setArcPosition(28, 30, 196, 88);\n\n    add(gauge);\n}\n')),(0,a.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the Gauge class in user code. Remember to force a redraw by calling ",(0,a.kt)(o.Z,{mdxType:"InlineCode"},"gauge.invalidate()")," if you change the appearance of the widget."),(0,a.kt)("h3",k({},{id:"user-code"}),"User Code"),(0,a.kt)("p",null,"To set the value of the Gauge, ",(0,a.kt)("inlineCode",{parentName:"p"},"setValue(int value)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)")," can be used."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setValue(int value)")," will immediately move the needle and arc to the new value with no animation."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)")," animates needle and arc to new value over the defined duration in ticks. If duration is equal to 0, the update will be done immediately. The animation used will be the one defined on the gauge using ",(0,a.kt)("inlineCode",{parentName:"p"},"setEasingEquation(EasingEquation easingEquation)")),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"MainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/MainView.hpp>\n\nMainView::MainView()\n{\n    tickCounter = 0;\n}\n\nvoid MainView::handleTickEvent()\n{\n    tickCounter++;\n\n    // Change value every 120 tick.\n    if (tickCounter % 120 == 0)\n    {\n      // Insert data point\n      gauge.updateValue(/* new integer value */, 30); // animates needle and arc to new value with a duration of 30 ticks\n    }\n}\n")),(0,a.kt)("h3",k({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,a.kt)("p",null,"To further explore the Gauge, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/gauge-example-v4.17.png",mdxType:"Figure"},"Gauge Example UI template in TouchGFX Designer"),(0,a.kt)("h2",k({},{id:"api-reference"}),"API Reference"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_gauge",mdxType:"Link"},"API reference for the Gauge class"))))}E.isMDXComponent=!0}}]);