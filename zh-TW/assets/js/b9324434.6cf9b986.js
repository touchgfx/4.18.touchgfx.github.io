"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1497],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(m,i(i({ref:e},s),{},{components:n})):r.createElement(m,i({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43861:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},39130:function(t,e,n){n.d(e,{Z:function(){return y}});var r=n(67294),a=n(73727),l=n(11368),i=n(35096),o=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))f.call(e,n)&&g(t,n,e[n]);if(m)for(var n of m(e))v.call(e,n)&&g(t,n,e[n]);return t};var y=function(t){var e,n=t,{isNavLink:p,to:g,href:y,activeClassName:b,isActive:_,"data-noBrokenLinkCheck":N,autoAddBaseUrl:x=!0}=n,E=((t,e)=>{var n={};for(var r in t)f.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&v.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T,baseUrl:O}}=(0,l.Z)(),{withBaseUrl:w}=(0,u.C)(),P=(0,r.useContext)(c),j=g||y,L=(0,i.Z)(j),Z=null==j?void 0:j.replace("pathname://","");let D=void 0!==Z?(C=Z,x&&(t=>t.startsWith("/"))(C)?w(C):C):void 0;var C;D&&L&&(D=(0,s.applyTrailingSlash)(D,{trailingSlash:T,baseUrl:O}));const S=(0,r.useRef)(!1),A=p?a.OL:a.rU,U=o.Z.canUseIntersectionObserver,R=(0,r.useRef)();(0,r.useEffect)((()=>(!U&&L&&null!=D&&window.docusaurus.prefetch(D),()=>{U&&R.current&&R.current.disconnect()})),[R,D,U,L]);const I=null!==(e=null==D?void 0:D.startsWith("#"))&&void 0!==e&&e,M=!D||!L||I;return D&&L&&!I&&!N&&P.collectLink(D),M?r.createElement("a",h(h({href:D},j&&!L&&{target:"_blank",rel:"noopener noreferrer"}),E)):r.createElement(A,h((W=h({},E),d(W,k({onMouseEnter:()=>{S.current||null==D||(window.docusaurus.preload(D),S.current=!0)},innerRef:t=>{var e,n;U&&t&&L&&(e=t,n=()=>{null!=D&&window.docusaurus.prefetch(D)},R.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(R.current.unobserve(e),R.current.disconnect(),n())}))})),R.current.observe(e))},to:D||""}))),p&&{isActive:_,activeClassName:b}));var W}},35096:function(t,e,n){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){n.d(e,{C:function(){return l},Z:function(){return i}});var r=n(11368),a=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,r)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:r}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[a]=t.split(/[#?]/),l="/"===a||a===r?a:(i=a,n?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(a,l)}},67023:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(l).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},85897:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return v},toc:function(){return g},default:function(){return y}});var r=n(3905),a=n(39130),l=n(43861),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&d(t,n,e[n]);if(u)for(var n of u(e))p.call(e,n)&&d(t,n,e[n]);return t};const m={title:"Event"},f=void 0,v={unversionedId:"api/classes/classtouchgfx_1_1_event",id:"api/classes/classtouchgfx_1_1_event",isDocsHomePage:!1,title:"Event",description:"Simple base class for events.",source:"@site/docs/api/classes/classtouchgfx_1_1_event.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_event",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_event",tags:[],version:"current",frontMatter:{title:"Event"},sidebar:"docs",previous:{title:"Edge",permalink:"/4.18/zh-TW/docs/api/classes/structtouchgfx_1_1_edge"},next:{title:"FadeAnimator",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_fade_animator"}},g=[{value:"Public Types",id:"public-types",children:[],level:2},{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"EventType",id:"eventtype",children:[],level:3}],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"getEventType",id:"geteventtype",children:[],level:3},{value:"~Event",id:"event",children:[],level:3}],level:2}],h={toc:g};function y(t){var e,n=t,{components:i}=n,d=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=k(k({},h),d),o(e,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Simple base class for events. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_click_event",mdxType:"Link"},"ClickEvent"),",  ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_drag_event",mdxType:"Link"},"DragEvent"),",  ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_gesture_event",mdxType:"Link"},"GestureEvent")),(0,r.kt)("h2",k({},{id:"public-types"}),"Public Types"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"enum"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_event#enum-eventtype",mdxType:"Link"},"EventType"))," { EVENT_CLICK, EVENT_DRAG, EVENT_GESTURE }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"The event types.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:"right"})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0",(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_event#enum-eventtype"}),"EventType")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_event#function-geteventtype",mdxType:"Link"},"getEventType")),"() =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Gets event type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_event#function-~event",mdxType:"Link"},"~Event")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_event"}),"Event")," class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",k({},{id:"public-types-documentation"}),"Public Types Documentation"),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_event#enum-eventtype",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"eventtype"}),"EventType"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header",markdown:"1"},(0,r.kt)("p",null,"enum ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_event#enum-eventtype",mdxType:"Link"},"EventType"))),(0,r.kt)("div",{class:"api-container-content api-container-content-enum",markdown:"1"},(0,r.kt)("p",null,"The event types. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_event#enumvalue-event_click",mdxType:"DoxybookHeaderLink"})," EVENT_CLICK"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"A click.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_event#enumvalue-event_drag",mdxType:"DoxybookHeaderLink"})," EVENT_DRAG"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"A drag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_event#enumvalue-event_gesture",mdxType:"DoxybookHeaderLink"})," EVENT_GESTURE"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"A gesture.")))))),(0,r.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_event#function-geteventtype",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"geteventtype"}),"getEventType"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","EventType","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_event#function-geteventtype",mdxType:"Link"},"getEventType")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"=0"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Gets event type. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The type of this event. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_click_event#function-geteventtype",mdxType:"Link"},"touchgfx::ClickEvent::getEventType"),", ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_drag_event#function-geteventtype",mdxType:"Link"},"touchgfx::DragEvent::getEventType"),", ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_gesture_event#function-geteventtype",mdxType:"Link"},"touchgfx::GestureEvent::getEventType")))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_event#function-~event",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"event"}),"~Event"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_event#function-~event",mdxType:"Link"},"~Event")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Finalizes an instance of the ",(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_event"}),"Event")," class. "))))}y.isMDXComponent=!0}}]);