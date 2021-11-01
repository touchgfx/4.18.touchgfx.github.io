(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3757],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),c=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=c(n),k=r,m=p["".concat(d,".").concat(k)]||p[k]||s[k]||i;return n?a.createElement(m,l(l({ref:e},u),{},{components:n})):a.createElement(m,l({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return N}});var a=n(67294),r=n(73727),i=n(11368),l=n(35096),o=n(84487);const d=(0,a.createContext)({collectLink:()=>{}});var c=n(25026),u=n(67023),s=Object.defineProperty,p=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))g.call(e,n)&&h(t,n,e[n]);if(m)for(var n of m(e))_.call(e,n)&&h(t,n,e[n]);return t};var N=function(t){var e,n=t,{isNavLink:s,to:h,href:N,activeClassName:b,isActive:v,"data-noBrokenLinkCheck":x,autoAddBaseUrl:y=!0}=n,w=((t,e)=>{var n={};for(var a in t)g.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&m)for(var a of m(t))e.indexOf(a)<0&&_.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T,baseUrl:O}}=(0,i.Z)(),{withBaseUrl:D}=(0,c.C)(),L=(0,a.useContext)(d),P=h||N,j=(0,l.Z)(P),Z=null==P?void 0:P.replace("pathname://","");let A=void 0!==Z?(E=Z,y&&(t=>t.startsWith("/"))(E)?D(E):E):void 0;var E;A&&j&&(A=(0,u.applyTrailingSlash)(A,{trailingSlash:T,baseUrl:O}));const S=(0,a.useRef)(!1),C=s?r.OL:r.rU,W=o.Z.canUseIntersectionObserver;let H;(0,a.useEffect)((()=>(!W&&j&&null!=A&&window.docusaurus.prefetch(A),()=>{W&&H&&H.disconnect()})),[A,W,j]);const R=null!==(e=null==A?void 0:A.startsWith("#"))&&void 0!==e&&e,I=!A||!j||R;return A&&j&&!R&&!x&&L.collectLink(A),I?a.createElement("a",f(f({href:A},P&&!j&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(C,f((V=f({},w),p(V,k({onMouseEnter:()=>{S.current||null==A||(window.docusaurus.preload(A),S.current=!0)},innerRef:t=>{var e,n;W&&t&&j&&(e=t,n=()=>{null!=A&&window.docusaurus.prefetch(A)},H=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(H.unobserve(e),H.disconnect(),n())}))})),H.observe(e))},to:A||""}))),s&&{isActive:v,activeClassName:b}));var V}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return i},Z:function(){return l}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+l:l}(e,t,n,a)}}function l(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),i="/"===r||r===a?r:(l=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(r,i)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},13883:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return _},toc:function(){return h},default:function(){return N}});var a=n(3905),r=n(31217),i=n(43861),l=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&p(t,n,e[n]);if(c)for(var n of c(e))s.call(e,n)&&p(t,n,e[n]);return t};const m={title:"StringVisuals"},g=void 0,_={unversionedId:"api/classes/structtouchgfx_1_1_l_c_d_1_1_string_visuals",id:"api/classes/structtouchgfx_1_1_l_c_d_1_1_string_visuals",isDocsHomePage:!1,title:"StringVisuals",description:"The visual elements when writing a string.",source:"@site/docs/api/classes/structtouchgfx_1_1_l_c_d_1_1_string_visuals.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_l_c_d_1_1_string_visuals",permalink:"/4.18/docs/api/classes/structtouchgfx_1_1_l_c_d_1_1_string_visuals",version:"current",frontMatter:{title:"StringVisuals"},sidebar:"docs",previous:{title:"SnapshotWidget",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_snapshot_widget"},next:{title:"SwipeContainer",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_swipe_container"}},h=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"StringVisuals",id:"stringvisuals",children:[]},{value:"StringVisuals",id:"stringvisuals-1",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"alignment",id:"alignment",children:[]},{value:"alpha",id:"alpha",children:[]},{value:"color",id:"color",children:[]},{value:"font",id:"font",children:[]},{value:"indentation",id:"indentation",children:[]},{value:"linespace",id:"linespace",children:[]},{value:"rotation",id:"rotation",children:[]},{value:"textDirection",id:"textdirection",children:[]},{value:"wideTextAction",id:"widetextaction",children:[]}]}],f={toc:h};function N(t){var e,n=t,{components:l}=n,p=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&c)for(var a of c(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=k(k({},f),p),o(e,d({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The visual elements when writing a string. "),(0,a.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#function-stringvisuals",mdxType:"Link"},"StringVisuals")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#function-stringvisuals",mdxType:"Link"},"StringVisuals")),"(const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_font"}),"Font")," * font, ",(0,a.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")," color, uint8_t alpha, ",(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-alignment"}),"Alignment")," alignment, int16_t linespace, ",(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#enum-textrotation"}),"TextRotation")," rotation, ",(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-textdirection"}),"TextDirection")," textDirection, uint8_t indentation, ",(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#enum-widetextaction"}),"WideTextAction")," wideTextAction =",(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#enumvalue-wide_text_none"}),"WIDE_TEXT_NONE"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Construct a StringVisual object for rendering text.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-alignment"}),"Alignment")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-alignment",mdxType:"Link"},"alignment")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The alignment to use. Default is LEFT.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-alpha",mdxType:"Link"},"alpha")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"8-bit alpha value. Default is 255 (solid).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-color",mdxType:"Link"},"color")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"RGB color value. Default is 0 (black).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_font"}),"Font")," *"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-font",mdxType:"Link"},"font")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The font to use.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-indentation",mdxType:"Link"},"indentation")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Indentation of text inside rectangle. Text will start this far from the left/right edge.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-linespace",mdxType:"Link"},"linespace")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Line space in pixels for multiline strings. Default is 0.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#enum-textrotation"}),"TextRotation")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-rotation",mdxType:"Link"},"rotation")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Orientation (rotation) of the text. Default is TEXT_ROTATE_0.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-textdirection"}),"TextDirection")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-textdirection",mdxType:"Link"},"textDirection")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The direction to use. Default is LTR.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#enum-widetextaction"}),"WideTextAction")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-widetextaction",mdxType:"Link"},"wideTextAction")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"What to do with wide text lines.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#function-stringvisuals",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"stringvisuals"}),"StringVisuals"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#function-stringvisuals",mdxType:"Link"},"StringVisuals")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD")," class. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#function-stringvisuals",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"stringvisuals-1"}),"StringVisuals"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#function-stringvisuals",mdxType:"Link"},"StringVisuals")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_font"}),"Font")," *"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"font ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"color ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"uint8_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"alpha ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-alignment"}),"Alignment")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"alignment ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"linespace ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#enum-textrotation"}),"TextRotation")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"rotation ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-textdirection"}),"TextDirection")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"textDirection ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"uint8_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"indentation ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#enum-widetextaction"}),"WideTextAction")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"wideTextAction  =WIDE_TEXT_NONE"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Construct a StringVisual object for rendering text. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"font"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_font"}),"Font")," with which to draw the text.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"color"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The color with which to draw the text.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"alpha"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Alpha blending. Default value is 255 (solid)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"alignment"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"How to align the text.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"linespace"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_line"}),"Line")," space in pixels between each line, in case the text contains newline characters.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"rotation"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"How to rotate the text.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"textDirection"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The text direction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"indentation"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The indentation of the text from the left and right of the text area rectangle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"wideTextAction"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"(Optional) What to do with lines longer than the width of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_text_area"}),"TextArea"),"."))))))),(0,a.kt)("h2",k({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-alignment",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"alignment"}),"alignment"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"../namespacetouchgfx#typedef-alignment"}),"Alignment")," alignment ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The alignment to use. Default is LEFT. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-alpha",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"alpha"}),"alpha"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t alpha ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"8-bit alpha value. Default is 255 (solid). "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-color",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"color"}),"color"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"structtouchgfx_1_1colortype"}),"colortype")," color ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"RGB color value. Default is 0 (black). "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-font",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"font"}),"font"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_font"}),"Font")," * font ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The font to use. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-indentation",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"indentation"}),"indentation"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t indentation ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Indentation of text inside rectangle. Text will start this far from the left/right edge. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-linespace",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"linespace"}),"linespace"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"int16_t linespace ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Line space in pixels for multiline strings. Default is 0. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-rotation",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"rotation"}),"rotation"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"../namespacetouchgfx#enum-textrotation"}),"TextRotation")," rotation ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Orientation (rotation) of the text. Default is TEXT_ROTATE_0. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-textdirection",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"textdirection"}),"textDirection"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"../namespacetouchgfx#typedef-textdirection"}),"TextDirection")," textDirection ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The direction to use. Default is LTR. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_l_c_d_1_1_string_visuals#variable-widetextaction",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"widetextaction"}),"wideTextAction"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"../namespacetouchgfx#enum-widetextaction"}),"WideTextAction")," wideTextAction ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"What to do with wide text lines. "))))}N.isMDXComponent=!0}}]);