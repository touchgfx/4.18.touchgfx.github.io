(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2011],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),k=p(n),g=r,m=k["".concat(o,".").concat(g)]||k[g]||c[g]||l;return n?a.createElement(m,i(i({ref:e},u),{},{components:n})):a.createElement(m,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var a=n(67294),r=n(73727),l=n(11368),i=n(35096),d=n(84487);const o=(0,a.createContext)({collectLink:()=>{}});var p=n(25026),u=n(67023),c=Object.defineProperty,k=Object.defineProperties,g=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,N=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&N(t,n,e[n]);if(m)for(var n of m(e))h.call(e,n)&&N(t,n,e[n]);return t};var v=function(t){var e,n=t,{isNavLink:c,to:N,href:v,activeClassName:y,isActive:_,"data-noBrokenLinkCheck":b,autoAddBaseUrl:x=!0}=n,w=((t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&m)for(var a of m(t))e.indexOf(a)<0&&h.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T,baseUrl:E}}=(0,l.Z)(),{withBaseUrl:O}=(0,p.C)(),D=(0,a.useContext)(o),L=N||v,Z=(0,i.Z)(L),P=null==L?void 0:L.replace("pathname://","");let j=void 0!==P?(C=P,x&&(t=>t.startsWith("/"))(C)?O(C):C):void 0;var C;j&&Z&&(j=(0,u.applyTrailingSlash)(j,{trailingSlash:T,baseUrl:E}));const G=(0,a.useRef)(!1),X=c?r.OL:r.rU,R=d.Z.canUseIntersectionObserver,A=(0,a.useRef)();(0,a.useEffect)((()=>(!R&&Z&&null!=j&&window.docusaurus.prefetch(j),()=>{R&&A.current&&A.current.disconnect()})),[A,j,R,Z]);const Y=null!==(e=null==j?void 0:j.startsWith("#"))&&void 0!==e&&e,S=!j||!Z||Y;return j&&Z&&!Y&&!b&&D.collectLink(j),S?a.createElement("a",f(f({href:j},L&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(X,f((H=f({},w),k(H,g({onMouseEnter:()=>{G.current||null==j||(window.docusaurus.preload(j),G.current=!0)},innerRef:t=>{var e,n;R&&t&&Z&&(e=t,n=()=>{null!=j&&window.docusaurus.prefetch(j)},A.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(A.current.unobserve(e),A.current.disconnect(),n())}))})),A.current.observe(e))},to:j||""}))),c&&{isActive:_,activeClassName:y}));var H}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(11368),r=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),l="/"===r||r===a?r:(i=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},9048:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return s},metadata:function(){return h},toc:function(){return N},default:function(){return v}});var a=n(3905),r=n(31217),l=n(43861),i=Object.defineProperty,d=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&k(t,n,e[n]);if(p)for(var n of p(e))c.call(e,n)&&k(t,n,e[n]);return t};const m={title:"DragEvent"},s=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_drag_event",id:"api/classes/classtouchgfx_1_1_drag_event",isDocsHomePage:!1,title:"DragEvent",description:"A drag event.",source:"@site/docs/api/classes/classtouchgfx_1_1_drag_event.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_drag_event",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_drag_event",tags:[],version:"current",frontMatter:{title:"DragEvent"},sidebar:"docs",previous:{title:"DMA_Queue",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_d_m_a___queue"},next:{title:"Draggable",permalink:"/4.18/zh-CN/docs/api/classes/classtouchgfx_1_1_draggable"}},N=[{value:"Public Types",id:"public-types",children:[],level:2},{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Types inherited from <Link to="classtouchgfx_1_1_event">Event</Link>',id:"public-types-inherited-from-event",children:[],level:3},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_event">Event</Link>',id:"public-functions-inherited-from-event",children:[],level:3}],level:2},{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"DragEventType",id:"drageventtype",children:[],level:3}],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"DragEvent",id:"dragevent",children:[],level:3},{value:"getDeltaX",id:"getdeltax",children:[],level:3},{value:"getDeltaY",id:"getdeltay",children:[],level:3},{value:"getEventType",id:"geteventtype",children:[],level:3},{value:"getNewX",id:"getnewx",children:[],level:3},{value:"getNewY",id:"getnewy",children:[],level:3},{value:"getOldX",id:"getoldx",children:[],level:3},{value:"getOldY",id:"getoldy",children:[],level:3},{value:"getType",id:"gettype",children:[],level:3}],level:2}],f={toc:N};function v(t){var e,n=t,{components:i}=n,k=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&c.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=g(g({},f),k),d(e,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," A drag event.\nThe only drag event currently supported is DRAGGED, which will be issued every time the input system detects a drag."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_event"}),"Event")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("h2",g({},{id:"public-types"}),"Public Types"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"enum"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#enum-drageventtype",mdxType:"Link"},"DragEventType"))," { DRAGGED }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Values that represent drag event types.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",g({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:"right"})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-dragevent",mdxType:"Link"},"DragEvent")),"(",(0,a.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event#enum-drageventtype"}),"DragEventType")," type, int16_t fromX, int16_t fromY, int16_t toX, int16_t toY)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getdeltax",mdxType:"Link"},"getDeltaX")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Gets the distance in x coordinates (how long was the drag).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getdeltay",mdxType:"Link"},"getDeltaY")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Gets the distance in y coordinates (how long was the drag).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"virtual","\xa0",(0,a.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_event#enum-eventtype"}),"Event::EventType")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-geteventtype",mdxType:"Link"},"getEventType")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Gets event type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getnewx",mdxType:"Link"},"getNewX")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Gets the new x coordinate (dragged to).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getnewy",mdxType:"Link"},"getNewY")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Gets the new x coordinate (dragged to).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getoldx",mdxType:"Link"},"getOldX")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Gets the x coordinate where the drag operation was started (dragged from).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getoldy",mdxType:"Link"},"getOldY")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Gets the y coordinate where the drag operation was started (dragged from).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),(0,a.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event#enum-drageventtype"}),"DragEventType")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-gettype",mdxType:"Link"},"getType")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Gets the type of this drag event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",g({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,a.kt)("h3",g({},{id:"public-types-inherited-from-event"}),"Public Types inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:"right"})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"enum"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#enum-eventtype",mdxType:"Link"},"EventType"))," { EVENT_CLICK, EVENT_DRAG, EVENT_GESTURE }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"The event types.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",g({},{id:"public-functions-inherited-from-event"}),"Public Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:"right"})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-~event",mdxType:"Link"},"~Event")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_event"}),"Event")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",g({},{id:"public-types-documentation"}),"Public Types Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_drag_event#enum-drageventtype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"drageventtype"}),"DragEventType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header",markdown:"1"},(0,a.kt)("p",null,"enum ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#enum-drageventtype",mdxType:"Link"},"DragEventType"))),(0,a.kt)("div",{class:"api-container-content api-container-content-enum",markdown:"1"},(0,a.kt)("p",null,"Values that represent drag event types. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_drag_event#enumvalue-dragged",mdxType:"DoxybookHeaderLink"})," DRAGGED"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"An enum constant representing the dragged option.")))))),(0,a.kt)("h2",g({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_drag_event#function-dragevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"dragevent"}),"DragEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-dragevent",mdxType:"Link"},"DragEvent")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event#enum-drageventtype"}),"DragEventType")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"type ,"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"fromX ,"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"fromY ,"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"toX ,"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"toY"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," class. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"The type of the drag event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"fromX"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"The x coordinate of the drag start position (dragged from)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"fromY"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"The y coordinate of the drag start position (dragged from)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"toX"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"The x coordinate of the new position (dragged to)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"toY"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"The y coordinate of the new position (dragged to)"))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_drag_event#function-getdeltax",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"getdeltax"}),"getDeltaX"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getdeltax",mdxType:"Link"},"getDeltaX")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the distance in x coordinates (how long was the drag). "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The distance of this drag event. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_drag_event#function-getdeltay",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"getdeltay"}),"getDeltaY"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getdeltay",mdxType:"Link"},"getDeltaY")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the distance in y coordinates (how long was the drag). "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The distance of this drag event. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_drag_event#function-geteventtype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"geteventtype"}),"getEventType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"virtual","\xa0","Event::EventType","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-geteventtype",mdxType:"Link"},"getEventType")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets event type. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The type of this event. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-geteventtype",mdxType:"Link"},"touchgfx::Event::getEventType")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_drag_event#function-getnewx",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"getnewx"}),"getNewX"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getnewx",mdxType:"Link"},"getNewX")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the new x coordinate (dragged to). "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The new x coordinate (dragged to). ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_drag_event#function-getnewy",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"getnewy"}),"getNewY"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getnewy",mdxType:"Link"},"getNewY")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the new x coordinate (dragged to). "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The new y coordinate (dragged to). ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_drag_event#function-getoldx",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"getoldx"}),"getOldX"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getoldx",mdxType:"Link"},"getOldX")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the x coordinate where the drag operation was started (dragged from). "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The x coordinate where the drag operation was started (dragged from). ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_drag_event#function-getoldy",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"getoldy"}),"getOldY"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-getoldy",mdxType:"Link"},"getOldY")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the y coordinate where the drag operation was started (dragged from). "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The y coordinate where the drag operation was started (dragged from). ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_drag_event#function-gettype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"gettype"}),"getType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"DragEventType","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_drag_event#function-gettype",mdxType:"Link"},"getType")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the type of this drag event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The type of this drag event. ")))))}v.isMDXComponent=!0}}]);