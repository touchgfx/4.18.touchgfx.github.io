(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6989],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(u,".").concat(k)]||d[k]||c[k]||l;return n?a.createElement(m,i(i({ref:e},s),{},{components:n})):a.createElement(m,i({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var a=n(67294),r=n(73727),l=n(11368),i=n(35096),o=n(84487);const u=(0,a.createContext)({collectLink:()=>{}});var p=n(25026),s=n(67023),c=Object.defineProperty,d=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,N=(t,e)=>{for(var n in e||(e={}))g.call(e,n)&&v(t,n,e[n]);if(m)for(var n of m(e))h.call(e,n)&&v(t,n,e[n]);return t};var f=function(t){var e,n=t,{isNavLink:c,to:v,href:f,activeClassName:y,isActive:_,"data-noBrokenLinkCheck":b,autoAddBaseUrl:x=!0}=n,T=((t,e)=>{var n={};for(var a in t)g.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&m)for(var a of m(t))e.indexOf(a)<0&&h.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w,baseUrl:E}}=(0,l.Z)(),{withBaseUrl:O}=(0,p.C)(),P=(0,a.useContext)(u),L=v||f,Z=(0,i.Z)(L),j=null==L?void 0:L.replace("pathname://","");let G=void 0!==j?(C=j,x&&(t=>t.startsWith("/"))(C)?O(C):C):void 0;var C;G&&Z&&(G=(0,s.applyTrailingSlash)(G,{trailingSlash:w,baseUrl:E}));const D=(0,a.useRef)(!1),A=c?r.OL:r.rU,I=o.Z.canUseIntersectionObserver,S=(0,a.useRef)();(0,a.useEffect)((()=>(!I&&Z&&null!=G&&window.docusaurus.prefetch(G),()=>{I&&S.current&&S.current.disconnect()})),[S,G,I,Z]);const R=null!==(e=null==G?void 0:G.startsWith("#"))&&void 0!==e&&e,H=!G||!Z||R;return G&&Z&&!R&&!b&&P.collectLink(G),H?a.createElement("a",N(N({href:G},L&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),T)):a.createElement(A,N((U=N({},T),d(U,k({onMouseEnter:()=>{D.current||null==G||(window.docusaurus.preload(G),D.current=!0)},innerRef:t=>{var e,n;I&&t&&Z&&(e=t,n=()=>{null!=G&&window.docusaurus.prefetch(G)},S.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(S.current.unobserve(e),S.current.disconnect(),n())}))})),S.current.observe(e))},to:G||""}))),c&&{isActive:_,activeClassName:y}));var U}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(11368),r=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),l="/"===r||r===a?r:(i=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},235:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return h},toc:function(){return v},default:function(){return f}});var a=n(3905),r=n(31217),l=n(43861),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&d(t,n,e[n]);if(p)for(var n of p(e))c.call(e,n)&&d(t,n,e[n]);return t};const m={title:"GestureEvent"},g=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_gesture_event",id:"api/classes/classtouchgfx_1_1_gesture_event",isDocsHomePage:!1,title:"GestureEvent",description:"A gesture event.",source:"@site/docs/api/classes/classtouchgfx_1_1_gesture_event.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_gesture_event",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_gesture_event",tags:[],version:"current",frontMatter:{title:"GestureEvent"},sidebar:"docs",previous:{title:"GenericCallback<void>",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_generic_callback_3_01void_01_4"},next:{title:"Gestures",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_gestures"}},v=[{value:"Public Types",id:"public-types",children:[],level:2},{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Types inherited from <Link to="classtouchgfx_1_1_event">Event</Link>',id:"public-types-inherited-from-event",children:[],level:3},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_event">Event</Link>',id:"public-functions-inherited-from-event",children:[],level:3}],level:2},{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"GestureEventType",id:"gestureeventtype",children:[],level:3}],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"GestureEvent",id:"gestureevent",children:[],level:3},{value:"getEventType",id:"geteventtype",children:[],level:3},{value:"getType",id:"gettype",children:[],level:3},{value:"getVelocity",id:"getvelocity",children:[],level:3},{value:"getX",id:"getx",children:[],level:3},{value:"getY",id:"gety",children:[],level:3}],level:2}],N={toc:v};function f(t){var e,n=t,{components:i}=n,d=((t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&c.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=k(k({},N),d),o(e,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," A gesture event.\nThe only gesture events currently supported is ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_gesture_event#enumvalue-swipe_horizontal"}),"SWIPE_HORIZONTAL")," and ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_gesture_event#enumvalue-swipe_vertical"}),"SWIPE_VERTICAL"),", which will be issued every time the input system detects a swipe."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_event"}),"Event")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("h2",k({},{id:"public-types"}),"Public Types"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"enum"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype",mdxType:"Link"},"GestureEventType"))," { SWIPE_HORIZONTAL, SWIPE_VERTICAL }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Values that represent gesture types.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gestureevent",mdxType:"Link"},"GestureEvent")),"(",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype"}),"GestureEventType")," type, int16_t velocity, int16_t x, int16_t y)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Constructor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_event#enum-eventtype"}),"Event::EventType")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-geteventtype",mdxType:"Link"},"getEventType")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Gets event type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype"}),"GestureEventType")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gettype",mdxType:"Link"},"getType")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Gets the type of this gesture event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-getvelocity",mdxType:"Link"},"getVelocity")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Gets the velocity of this gesture event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-getx",mdxType:"Link"},"getX")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Gets the x coordinate of this gesture event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gety",mdxType:"Link"},"getY")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Gets the y coordinate of this gesture event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,a.kt)("h3",k({},{id:"public-types-inherited-from-event"}),"Public Types inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"enum"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#enum-eventtype",mdxType:"Link"},"EventType"))," { EVENT_CLICK, EVENT_DRAG, EVENT_GESTURE }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The event types.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",k({},{id:"public-functions-inherited-from-event"}),"Public Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-~event",mdxType:"Link"},"~Event")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_event"}),"Event")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-types-documentation"}),"Public Types Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"gestureeventtype"}),"GestureEventType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header",markdown:"1"},(0,a.kt)("p",null,"enum ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype",mdxType:"Link"},"GestureEventType"))),(0,a.kt)("div",{class:"api-container-content api-container-content-enum",markdown:"1"},(0,a.kt)("p",null,"Values that represent gesture types. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#enumvalue-swipe_horizontal",mdxType:"DoxybookHeaderLink"})," SWIPE_HORIZONTAL"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"An enum constant representing a horizontal swipe.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#enumvalue-swipe_vertical",mdxType:"DoxybookHeaderLink"})," SWIPE_VERTICAL"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"An enum constant representing a vertical swipe.")))))),(0,a.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-gestureevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"gestureevent"}),"GestureEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gestureevent",mdxType:"Link"},"GestureEvent")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_gesture_event#enum-gestureeventtype"}),"GestureEventType")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"type ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"velocity ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"x ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Constructor. "),(0,a.kt)("p",null,"Create a gesture event of the specified type with the specified coordinates."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The type of the gesture event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"velocity"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The velocity of this gesture (swipe)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"x"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The x coordinate of the gesture.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The y coordinate of the gesture."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-geteventtype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"geteventtype"}),"getEventType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","Event::EventType","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-geteventtype",mdxType:"Link"},"getEventType")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets event type. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The type of this event. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-geteventtype",mdxType:"Link"},"touchgfx::Event::getEventType")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-gettype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"gettype"}),"getType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"GestureEventType","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gettype",mdxType:"Link"},"getType")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the type of this gesture event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The type of this gesture event. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-getvelocity",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"getvelocity"}),"getVelocity"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-getvelocity",mdxType:"Link"},"getVelocity")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the velocity of this gesture event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The velocity of this gesture event. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-getx",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"getx"}),"getX"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-getx",mdxType:"Link"},"getX")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the x coordinate of this gesture event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The x coordinate of this gesture event. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_gesture_event#function-gety",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"gety"}),"getY"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_gesture_event#function-gety",mdxType:"Link"},"getY")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the y coordinate of this gesture event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The y coordinate of this gesture event. ")))))}f.isMDXComponent=!0}}]);