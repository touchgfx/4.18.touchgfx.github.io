"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1317],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),d=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=d(a),g=r,h=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return a?n.createElement(h,l(l({ref:e},s),{},{components:a})):n.createElement(h,l({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},39130:function(t,e,a){a.d(e,{Z:function(){return v}});var n=a(67294),r=a(73727),i=a(11368),l=a(35096),o=a(84487);const c=(0,n.createContext)({collectLink:()=>{}});var d=a(25026),s=a(67023),u=Object.defineProperty,p=Object.defineProperties,g=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))_.call(e,a)&&m(t,a,e[a]);if(h)for(var a of h(e))f.call(e,a)&&m(t,a,e[a]);return t};var v=function(t){var e,a=t,{isNavLink:u,to:m,href:v,activeClassName:b,isActive:N,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var n in t)_.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&h)for(var n of h(t))e.indexOf(n)<0&&f.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:E}}=(0,i.Z)(),{withBaseUrl:j}=(0,d.C)(),P=(0,n.useContext)(c),D=m||v,T=(0,l.Z)(D),C=null==D?void 0:D.replace("pathname://","");let A=void 0!==C?(Z=C,x&&(t=>t.startsWith("/"))(Z)?j(Z):Z):void 0;var Z;A&&T&&(A=(0,s.applyTrailingSlash)(A,{trailingSlash:O,baseUrl:E}));const L=(0,n.useRef)(!1),S=u?r.OL:r.rU,U=o.Z.canUseIntersectionObserver,G=(0,n.useRef)();(0,n.useEffect)((()=>(!U&&T&&null!=A&&window.docusaurus.prefetch(A),()=>{U&&G.current&&G.current.disconnect()})),[G,A,U,T]);const M=null!==(e=null==A?void 0:A.startsWith("#"))&&void 0!==e&&e,I=!A||!T||M;return A&&T&&!M&&!y&&P.collectLink(A),I?n.createElement("a",k(k({href:A},D&&!T&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(S,k((B=k({},w),p(B,g({onMouseEnter:()=>{L.current||null==A||(window.docusaurus.preload(A),L.current=!0)},innerRef:t=>{var e,a;U&&t&&T&&(e=t,a=()=>{null!=A&&window.docusaurus.prefetch(A)},G.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(G.current.unobserve(e),G.current.disconnect(),a())}))})),G.current.observe(e))},to:A||""}))),u&&{isActive:N,activeClassName:b}));var B}},35096:function(t,e,a){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){a.d(e,{C:function(){return i},Z:function(){return l}});var n=a(11368),r=a(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const l=a.startsWith(e)?a:e+a.replace(/^\//,"");return i?t+l:l}(e,t,a,n)}}function l(t,e={}){const{withBaseUrl:a}=i();return a(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[r]=t.split(/[#?]/),i="/"===r||r===n?r:(l=r,a?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(r,i)}},67023:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var i=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},61722:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return h},contentTitle:function(){return _},metadata:function(){return f},toc:function(){return m},default:function(){return v}});var n=a(3905),r=a(39130),i=a(43861),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,g=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&p(t,a,e[a]);if(d)for(var a of d(e))u.call(e,a)&&p(t,a,e[a]);return t};const h={title:"GraphDragEvent"},_=void 0,f={unversionedId:"api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event",id:"api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event",isDocsHomePage:!1,title:"GraphDragEvent",description:"An object of this type is passed with each callback that is sent when the graph is dragged.",source:"@site/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event",permalink:"/4.18/ja/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event",tags:[],version:"current",frontMatter:{title:"GraphDragEvent"},sidebar:"docs",previous:{title:"GraphClickEvent",permalink:"/4.18/ja/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event"},next:{title:"GraphElementArea",permalink:"/4.18/ja/docs/api/classes/classtouchgfx_1_1_graph_element_area"}},m=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"GraphDragEvent",id:"graphdragevent",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"dragEvent",id:"dragevent",children:[],level:3},{value:"index",id:"index",children:[],level:3}],level:2}],k={toc:m};function v(t){var e,a=t,{components:l}=a,p=((t,e)=>{var a={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&d)for(var n of d(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=g(g({},k),p),o(e,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," An object of this type is passed with each callback that is sent when the graph is dragged.\nThe object contains the data index that was pressed and the details of the drag event, e.g. old and new screen coordinates. "),(0,n.kt)("h2",g({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#function-graphdragevent",mdxType:"Link"},"GraphDragEvent")),"(int16_t i, const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & event)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event"}),"GraphDragEvent")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",g({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," &"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#variable-dragevent",mdxType:"Link"},"dragEvent")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The DragEvent that caused the callback to be executed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"int16_t"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#variable-index",mdxType:"Link"},"index")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The index of the item where the drag has ended.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",g({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#function-graphdragevent",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"graphdragevent"}),"GraphDragEvent"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#function-graphdragevent",mdxType:"Link"},"GraphDragEvent")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"int16_t"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"i ,"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," &"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event"}),"GraphDragEvent")," class. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"i"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The index of the item where the drag has ended.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," that caused the callback to be executed."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_abstract_data_graph#function-setdragaction"}),"setDragAction"))))),(0,n.kt)("h2",g({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#variable-dragevent",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"dragevent"}),"dragEvent"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & dragEvent ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The DragEvent that caused the callback to be executed. "))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#variable-index",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"index"}),"index"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int16_t index ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The index of the item where the drag has ended. "))))}v.isMDXComponent=!0}}]);