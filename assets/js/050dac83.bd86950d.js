(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3689],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),c=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=c(n),k=r,m=p["".concat(d,".").concat(k)]||p[k]||s[k]||l;return n?a.createElement(m,i(i({ref:e},u),{},{components:n})):a.createElement(m,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var a=n(67294),r=n(73727),l=n(11368),i=n(35096),o=n(84487);const d=(0,a.createContext)({collectLink:()=>{}});var c=n(25026),u=n(67023),s=Object.defineProperty,p=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,N=(t,e)=>{for(var n in e||(e={}))h.call(e,n)&&v(t,n,e[n]);if(m)for(var n of m(e))g.call(e,n)&&v(t,n,e[n]);return t};var f=function(t){var e,n=t,{isNavLink:s,to:v,href:f,activeClassName:_,isActive:b,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=n,w=((t,e)=>{var n={};for(var a in t)h.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&m)for(var a of m(t))e.indexOf(a)<0&&g.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T,baseUrl:E}}=(0,l.Z)(),{withBaseUrl:O}=(0,c.C)(),L=(0,a.useContext)(d),P=v||f,Z=(0,i.Z)(P),j=null==P?void 0:P.replace("pathname://","");let D=void 0!==j?(C=j,x&&(t=>t.startsWith("/"))(C)?O(C):C):void 0;var C;D&&Z&&(D=(0,u.applyTrailingSlash)(D,{trailingSlash:T,baseUrl:E}));const U=(0,a.useRef)(!1),S=s?r.OL:r.rU,A=o.Z.canUseIntersectionObserver;let I;(0,a.useEffect)((()=>(!A&&Z&&null!=D&&window.docusaurus.prefetch(D),()=>{A&&I&&I.disconnect()})),[D,A,Z]);const M=null!==(e=null==D?void 0:D.startsWith("#"))&&void 0!==e&&e,H=!D||!Z||M;return D&&Z&&!M&&!y&&L.collectLink(D),H?a.createElement("a",N(N({href:D},P&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(S,N((R=N({},w),p(R,k({onMouseEnter:()=>{U.current||null==D||(window.docusaurus.preload(D),U.current=!0)},innerRef:t=>{var e,n;A&&t&&Z&&(e=t,n=()=>{null!=D&&window.docusaurus.prefetch(D)},I=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(I.unobserve(e),I.disconnect(),n())}))})),I.observe(e))},to:D||""}))),s&&{isActive:b,activeClassName:_}));var R}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(11368),r=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),l="/"===r||r===a?r:(i=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},87403:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return g},toc:function(){return v},default:function(){return f}});var a=n(3905),r=n(31217),l=n(43861),i=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&p(t,n,e[n]);if(c)for(var n of c(e))s.call(e,n)&&p(t,n,e[n]);return t};const m={title:"UIEventListener"},h=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_u_i_event_listener",id:"api/classes/classtouchgfx_1_1_u_i_event_listener",isDocsHomePage:!1,title:"UIEventListener",description:"This class declares a handler interface for user interface events, i.e.",source:"@site/docs/api/classes/classtouchgfx_1_1_u_i_event_listener.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_u_i_event_listener",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_u_i_event_listener",version:"current",frontMatter:{title:"UIEventListener"},sidebar:"docs",previous:{title:"TypedTextData",permalink:"/4.18/docs/api/classes/structtouchgfx_1_1_typed_text_1_1_typed_text_data"},next:{title:"Unicode",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_unicode"}},v=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"handleClickEvent",id:"handleclickevent",children:[]},{value:"handleDragEvent",id:"handledragevent",children:[]},{value:"handleGestureEvent",id:"handlegestureevent",children:[]},{value:"handleKeyEvent",id:"handlekeyevent",children:[]},{value:"handlePendingScreenTransition",id:"handlependingscreentransition",children:[]},{value:"handleTickEvent",id:"handletickevent",children:[]},{value:"~UIEventListener",id:"uieventlistener",children:[]}]}],N={toc:v};function f(t){var e,n=t,{components:i}=n,p=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&c)for(var a of c(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=k(k({},N),p),o(e,d({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," This class declares a handler interface for user interface events, i.e.\nevents generated by the users interaction with the device. With the exception of the system timer tick, all other system events, which are not related to the user interface device peripherals (display, keys etc.) are not part of this interface. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application",mdxType:"Link"},"Application")),(0,a.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),"(const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & event)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"This handler is invoked when a mouse click or display touch event has been detected by the system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handledragevent",mdxType:"Link"},"handleDragEvent")),"(const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & event)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"This handler is invoked when a drag event has been detected by the system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlegestureevent",mdxType:"Link"},"handleGestureEvent")),"(const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_gesture_event"}),"GestureEvent")," & event)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"This handler is invoked when a gesture event has been detected by the system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlekeyevent",mdxType:"Link"},"handleKeyEvent")),"(uint8_t c)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"This handler is invoked when a key (or button) event has been detected by the system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlependingscreentransition",mdxType:"Link"},"handlePendingScreenTransition")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"This handler is invoked when a change screen event is pending.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handletickevent",mdxType:"Link"},"handleTickEvent")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"This handler is invoked when a system tick event has been generated.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-~uieventlistener",mdxType:"Link"},"~UIEventListener")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_u_i_event_listener"}),"UIEventListener")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handleclickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"handleclickevent"}),"handleClickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," &"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a mouse click or display touch event has been detected by the system. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The event data."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handleclickevent",mdxType:"Link"},"touchgfx::Application::handleClickEvent")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handledragevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"handledragevent"}),"handleDragEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handledragevent",mdxType:"Link"},"handleDragEvent")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," &"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a drag event has been detected by the system. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The event data."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handledragevent",mdxType:"Link"},"touchgfx::Application::handleDragEvent")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handlegestureevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"handlegestureevent"}),"handleGestureEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlegestureevent",mdxType:"Link"},"handleGestureEvent")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_gesture_event"}),"GestureEvent")," &"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a gesture event has been detected by the system. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The event data."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handlegestureevent",mdxType:"Link"},"touchgfx::Application::handleGestureEvent")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handlekeyevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"handlekeyevent"}),"handleKeyEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlekeyevent",mdxType:"Link"},"handleKeyEvent")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"uint8_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"c"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a key (or button) event has been detected by the system. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"c"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The key or button pressed."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handlekeyevent",mdxType:"Link"},"touchgfx::Application::handleKeyEvent")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handlependingscreentransition",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"handlependingscreentransition"}),"handlePendingScreenTransition"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handlependingscreentransition",mdxType:"Link"},"handlePendingScreenTransition")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a change screen event is pending. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_m_v_p_application#function-handlependingscreentransition",mdxType:"Link"},"touchgfx::MVPApplication::handlePendingScreenTransition"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handlependingscreentransition",mdxType:"Link"},"touchgfx::Application::handlePendingScreenTransition")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-handletickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"handletickevent"}),"handleTickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-handletickevent",mdxType:"Link"},"handleTickEvent")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"This handler is invoked when a system tick event has been generated. "),(0,a.kt)("p",null,"The system tick period is configured in the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_h_a_l"}),"HAL"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_application#function-handletickevent",mdxType:"Link"},"touchgfx::Application::handleTickEvent")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_u_i_event_listener#function-~uieventlistener",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"uieventlistener"}),"~UIEventListener"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_u_i_event_listener#function-~uieventlistener",mdxType:"Link"},"~UIEventListener")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_u_i_event_listener"}),"UIEventListener")," class. "))))}f.isMDXComponent=!0}}]);