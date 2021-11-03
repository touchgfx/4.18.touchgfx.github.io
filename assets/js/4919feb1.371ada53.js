"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1360],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),c=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(a),k=r,m=s["".concat(d,".").concat(k)]||s[k]||u[k]||i;return a?n.createElement(m,l(l({ref:e},p),{},{components:a})):n.createElement(m,l({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},39130:function(t,e,a){a.d(e,{Z:function(){return N}});var n=a(67294),r=a(73727),i=a(11368),l=a(35096),o=a(84487);const d=(0,n.createContext)({collectLink:()=>{}});var c=a(25026),p=a(67023),u=Object.defineProperty,s=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=(t,e,a)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))g.call(e,a)&&h(t,a,e[a]);if(m)for(var a of m(e))b.call(e,a)&&h(t,a,e[a]);return t};var N=function(t){var e,a=t,{isNavLink:u,to:h,href:N,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var n in t)g.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&b.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:O}}=(0,i.Z)(),{withBaseUrl:T}=(0,c.C)(),A=(0,n.useContext)(d),L=h||N,Z=(0,l.Z)(L),j=null==L?void 0:L.replace("pathname://","");let B=void 0!==j?(C=j,x&&(t=>t.startsWith("/"))(C)?T(C):C):void 0;var C;B&&Z&&(B=(0,p.applyTrailingSlash)(B,{trailingSlash:P,baseUrl:O}));const W=(0,n.useRef)(!1),D=u?r.OL:r.rU,I=o.Z.canUseIntersectionObserver,E=(0,n.useRef)();(0,n.useEffect)((()=>(!I&&Z&&null!=B&&window.docusaurus.prefetch(B),()=>{I&&E.current&&E.current.disconnect()})),[E,B,I,Z]);const R=null!==(e=null==B?void 0:B.startsWith("#"))&&void 0!==e&&e,F=!B||!Z||R;return B&&Z&&!R&&!v&&A.collectLink(B),F?n.createElement("a",f(f({href:B},L&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(D,f((S=f({},w),s(S,k({onMouseEnter:()=>{W.current||null==B||(window.docusaurus.preload(B),W.current=!0)},innerRef:t=>{var e,a;I&&t&&Z&&(e=t,a=()=>{null!=B&&window.docusaurus.prefetch(B)},E.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(E.current.unobserve(e),E.current.disconnect(),a())}))})),E.current.observe(e))},to:B||""}))),u&&{isActive:y,activeClassName:_}));var S}},35096:function(t,e,a){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){a.d(e,{C:function(){return i},Z:function(){return l}});var n=a(11368),r=a(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const l=a.startsWith(e)?a:e+a.replace(/^\//,"");return i?t+l:l}(e,t,a,n)}}function l(t,e={}){const{withBaseUrl:a}=i();return a(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[r]=t.split(/[#?]/),i="/"===r||r===n?r:(l=r,a?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(r,i)}},67023:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var i=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},39185:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return h},default:function(){return N}});var n=a(3905),r=a(39130),i=a(43861),l=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&s(t,a,e[a]);if(c)for(var a of c(e))u.call(e,a)&&s(t,a,e[a]);return t};const m={title:"AbstractPainterBW"},g=void 0,b={unversionedId:"api/classes/classtouchgfx_1_1_abstract_painter_b_w",id:"api/classes/classtouchgfx_1_1_abstract_painter_b_w",isDocsHomePage:!1,title:"AbstractPainterBW",description:"The AbstractPainterBW class is an abstract class for creating a painter to draw on a BW display using CanvasWidgetRenderer.",source:"@site/docs/api/classes/classtouchgfx_1_1_abstract_painter_b_w.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_abstract_painter_b_w",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_abstract_painter_b_w",tags:[],version:"current",frontMatter:{title:"AbstractPainterBW"},sidebar:"docs",previous:{title:"AbstractPainterBGRA2222",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_abstract_painter_b_g_r_a2222"},next:{title:"AbstractPainterGRAY2",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_abstract_painter_g_r_a_y2"}},h=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Protected Functions",id:"protected-functions",children:[],level:2},{value:"Protected Attributes",id:"protected-attributes",children:[],level:2},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_abstract_painter">AbstractPainter</Link>',id:"public-functions-inherited-from-abstractpainter",children:[],level:3},{value:'Protected Functions inherited from <Link to="classtouchgfx_1_1_abstract_painter">AbstractPainter</Link>',id:"protected-functions-inherited-from-abstractpainter",children:[],level:3},{value:'Protected Attributes inherited from <Link to="classtouchgfx_1_1_abstract_painter">AbstractPainter</Link>',id:"protected-attributes-inherited-from-abstractpainter",children:[],level:3}],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"AbstractPainterBW",id:"abstractpainterbw",children:[],level:3},{value:"render",id:"render",children:[],level:3}],level:2},{value:"Protected Functions Documentation",id:"protected-functions-documentation",children:[{value:"renderInit",id:"renderinit",children:[],level:3},{value:"renderNext",id:"rendernext",children:[],level:3}],level:2},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",children:[{value:"currentX",id:"currentx",children:[],level:3},{value:"currentY",id:"currenty",children:[],level:3}],level:2}],f={toc:h};function N(t){var e,a=t,{components:l}=a,s=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&c)for(var n of c(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},f),s),o(e,d({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," The AbstractPainterBW class is an abstract class for creating a painter to draw on a BW display using CanvasWidgetRenderer.\nPixels are either set or removed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_abstract_painter"}),"AbstractPainter")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter",mdxType:"Link"},"AbstractPainter")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_b_w",mdxType:"Link"},"PainterBW"),",  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_b_w_bitmap",mdxType:"Link"},"PainterBWBitmap")),(0,n.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_b_w#function-abstractpainterbw",mdxType:"Link"},"AbstractPainterBW")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_b_w#function-render",mdxType:"Link"},"render")),"(uint8_t ",(0,n.kt)("em",{parentName:"td"}," ptr, int x, int xAdjust, int y, unsigned count, const uint8_t ")," covers)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Paint a designated part of the RenderingBuffer with respect to the amount of coverage of each pixel given by the parameter covers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"protected-functions"}),"Protected Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_b_w#function-renderinit",mdxType:"Link"},"renderInit")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Initialize rendering of a single scan line of pixels for the render.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_b_w#function-rendernext",mdxType:"Link"},"renderNext")),"(uint8_t & color)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Get the color of the next pixel in the scan line to blend into the framebuffer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"protected-attributes"}),"Protected Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"int"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_b_w#variable-currentx",mdxType:"Link"},"currentX")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Current x coordinate relative to the widget.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"int"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_b_w#variable-currenty",mdxType:"Link"},"currentY")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Current y coordinate relative to the widget.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,n.kt)("h3",k({},{id:"public-functions-inherited-from-abstractpainter"}),"Public Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter",mdxType:"Link"},"AbstractPainter")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter#function-abstractpainter",mdxType:"Link"},"AbstractPainter")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_abstract_painter"}),"AbstractPainter")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter#function-~abstractpainter",mdxType:"Link"},"~AbstractPainter")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_abstract_painter"}),"AbstractPainter")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",k({},{id:"protected-functions-inherited-from-abstractpainter"}),"Protected Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter",mdxType:"Link"},"AbstractPainter")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter#function-setareaoffset",mdxType:"Link"},"setAreaOffset")),"(uint16_t offsetX, uint16_t offsetY)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Sets the offset of the area being drawn.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter#function-setwidgetalpha",mdxType:"Link"},"setWidgetAlpha")),"(const uint8_t alpha)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Sets the widget alpha to allow an entire canvas widget to easily be faded without changing the painter of the widget.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter#function-compatibleframebuffer",mdxType:"Link"},"compatibleFramebuffer")),"(",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_bitmap#enum-bitmapformat"}),"Bitmap::BitmapFormat")," format)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Helper function to check if the provided bitmap format matches the current framebuffer format.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",k({},{id:"protected-attributes-inherited-from-abstractpainter"}),"Protected Attributes inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter",mdxType:"Link"},"AbstractPainter")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"int16_t"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter#variable-areaoffsetx",mdxType:"Link"},"areaOffsetX")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The offset x coordinate of the area being drawn.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"int16_t"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter#variable-areaoffsety",mdxType:"Link"},"areaOffsetY")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The offset y coordinate of the area being drawn.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter#variable-widgetalpha",mdxType:"Link"},"widgetAlpha")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The alpha of the widget using the painter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_painter_b_w#function-abstractpainterbw",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"abstractpainterbw"}),"AbstractPainterBW"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_b_w#function-abstractpainterbw",mdxType:"Link"},"AbstractPainterBW")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_painter_b_w#function-render",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"render"}),"render"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_b_w#function-render",mdxType:"Link"},"render")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"uint8_t *"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"ptr ,"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"xAdjust ,"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"y ,"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"unsigned"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"count ,"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const uint8_t *"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"covers"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Paint a designated part of the RenderingBuffer with respect to the amount of coverage of each pixel given by the parameter covers. "),(0,n.kt)("p",null,"The cover is the alpha for each pixel, which is what makes it possible to have smooth anti-aliased edges on the shapes drawn with ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget_renderer"}),"CanvasWidgetRenderer"),"."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"ptr"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Pointer to the row in the RenderingBuffer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The x coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"xAdjust"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The minor adjustment of x (used when a pixel is smaller than a byte to specify that the ",(0,n.kt)("em",{parentName:"td"},"ptr"),' should have been advanced "xAdjust" pixels futher into the byte).')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The y coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"count"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Number of pixels to fill.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"covers"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The coverage in of each pixel."))))),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"The implementation of ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_abstract_painter_b_w#function-render"}),"render()")," in the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_abstract_painter"}),"AbstractPainter")," classes is a generic (i.e. slow) implementation that should be completely implemented in subclasses of ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_abstract_painter"}),"AbstractPainter")," for better performance. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter#function-render",mdxType:"Link"},"touchgfx::AbstractPainter::render")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_b_w#function-render",mdxType:"Link"},"touchgfx::PainterBW::render"),", ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_b_w_bitmap#function-render",mdxType:"Link"},"touchgfx::PainterBWBitmap::render")))),(0,n.kt)("h2",k({},{id:"protected-functions-documentation"}),"Protected Functions Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_painter_b_w#function-renderinit",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"renderinit"}),"renderInit"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_b_w#function-renderinit",mdxType:"Link"},"renderInit")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initialize rendering of a single scan line of pixels for the render. "),(0,n.kt)("p",null,"If renderInit returns false, the scanline will not be rendered."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true if it succeeds, false if it fails. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_b_w_bitmap#function-renderinit",mdxType:"Link"},"touchgfx::PainterBWBitmap::renderInit")))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_painter_b_w#function-rendernext",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"rendernext"}),"renderNext"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_painter_b_w#function-rendernext",mdxType:"Link"},"renderNext")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"uint8_t &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Get the color of the next pixel in the scan line to blend into the framebuffer. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The color (0 or 1)."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true if the pixel should be painted, false otherwise. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_painter_b_w#function-rendernext",mdxType:"Link"},"touchgfx::PainterBW::renderNext")))),(0,n.kt)("h2",k({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_painter_b_w#variable-currentx",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"currentx"}),"currentX"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int currentX ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Current x coordinate relative to the widget. "))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_painter_b_w#variable-currenty",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"currenty"}),"currentY"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int currentY ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Current y coordinate relative to the widget. "))))}N.isMDXComponent=!0}}]);