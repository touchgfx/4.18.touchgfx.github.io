(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4749],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=l(r),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,o(o({ref:e},u),{},{components:r})):n.createElement(h,o({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43861:function(t,e,r){"use strict";var n=r(67294);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,r){"use strict";r.d(e,{Z:function(){return k}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),c=r(84487);const s=(0,n.createContext)({collectLink:()=>{}});var l=r(25026),u=r(67023),p=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,_=(t,e,r)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,v=(t,e)=>{for(var r in e||(e={}))b.call(e,r)&&_(t,r,e[r]);if(h)for(var r of h(e))m.call(e,r)&&_(t,r,e[r]);return t};var k=function(t){var e,r=t,{isNavLink:p,to:_,href:k,activeClassName:g,isActive:y,"data-noBrokenLinkCheck":O,autoAddBaseUrl:x=!0}=r,w=((t,e)=>{var r={};for(var n in t)b.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&h)for(var n of h(t))e.indexOf(n)<0&&m.call(t,n)&&(r[n]=t[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:N,baseUrl:P}}=(0,i.Z)(),{withBaseUrl:j}=(0,l.C)(),T=(0,n.useContext)(s),S=_||k,C=(0,o.Z)(S),D=null==S?void 0:S.replace("pathname://","");let E=void 0!==D?(A=D,x&&(t=>t.startsWith("/"))(A)?j(A):A):void 0;var A;E&&C&&(E=(0,u.applyTrailingSlash)(E,{trailingSlash:N,baseUrl:P}));const U=(0,n.useRef)(!1),Z=p?a.OL:a.rU,L=c.Z.canUseIntersectionObserver,M=(0,n.useRef)();(0,n.useEffect)((()=>(!L&&C&&null!=E&&window.docusaurus.prefetch(E),()=>{L&&M.current&&M.current.disconnect()})),[M,E,L,C]);const B=null!==(e=null==E?void 0:E.startsWith("#"))&&void 0!==e&&e,I=!E||!C||B;return E&&C&&!B&&!O&&T.collectLink(E),I?n.createElement("a",v(v({href:E},S&&!C&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(Z,v((W=v({},w),d(W,f({onMouseEnter:()=>{U.current||null==E||(window.docusaurus.preload(E),U.current=!0)},innerRef:t=>{var e,r;L&&t&&C&&(e=t,r=()=>{null!=E&&window.docusaurus.prefetch(E)},M.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.current.unobserve(e),M.current.disconnect(),r())}))})),M.current.observe(e))},to:E||""}))),p&&{isActive:y,activeClassName:g}));var W}},35096:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},25026:function(t,e,r){"use strict";r.d(e,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(t,e,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return e+r;const o=r.startsWith(e)?r:e+r.replace(/^\//,"");return i?t+o:o}(e,t,r,n)}}function o(t,e={}){const{withBaseUrl:r}=i();return r(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:r,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===r)return t;const[a]=t.split(/[#?]/),i="/"===a||a===n?a:(o=a,r?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(a,i)}},67023:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},67224:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return h},contentTitle:function(){return b},metadata:function(){return m},toc:function(){return _},default:function(){return k}});var n=r(3905),a=r(31217),i=r(43861),o=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,f=(t,e)=>{for(var r in e||(e={}))u.call(e,r)&&d(t,r,e[r]);if(l)for(var r of l(e))p.call(e,r)&&d(t,r,e[r]);return t};const h={title:"ShapePoint"},b=void 0,m={unversionedId:"api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",id:"api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",isDocsHomePage:!1,title:"ShapePoint",description:"Defines an alias for a single point.",source:"@site/docs/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",permalink:"/4.18/zh-CN/docs/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point",tags:[],version:"current",frontMatter:{title:"ShapePoint"},sidebar:"docs",previous:{title:"Shape",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_shape"},next:{title:"SlideMenu",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_slide_menu"}},_=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"x",id:"x",children:[],level:3},{value:"y",id:"y",children:[],level:3}],level:2}],v={toc:_};function k(t){var e,r=t,{components:o}=r,d=((t,e)=>{var r={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&l)for(var n of l(t))e.indexOf(n)<0&&p.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=f(f({},v),d),c(e,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," Defines an alias for a single point.\nUsers of the ",(0,n.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_abstract_shape"}),"AbstractShape")," can chose to store the coordinates as int or float depending on the needs. This will help setting up the abstractShape very easily using setAbstractShape()."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T")," Generic type parameter, either int or float.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_abstract_shape#function-setshape"}),"setShape")),(0,n.kt)("h2",f({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"right"})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"T"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-x",mdxType:"Link"},"x")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The x coordinate of the points.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"T"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-y",mdxType:"Link"},"y")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The y coordinate of the points.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",f({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-x",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"x"}),"x"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"T x ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The x coordinate of the points. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_abstract_shape_1_1_shape_point#variable-y",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"y"}),"y"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"T y ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The y coordinate of the points. "))))}k.isMDXComponent=!0}}]);