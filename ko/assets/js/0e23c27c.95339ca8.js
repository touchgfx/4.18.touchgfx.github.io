"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2573],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=u(n),g=r,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||l;return n?a.createElement(f,i(i({ref:e},s),{},{components:n})):a.createElement(f,i({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},39130:function(t,e,n){n.d(e,{Z:function(){return v}});var a=n(67294),r=n(73727),l=n(11368),i=n(35096),o=n(84487);const c=(0,a.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),d=Object.defineProperty,p=Object.defineProperties,g=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&k(t,n,e[n]);if(f)for(var n of f(e))h.call(e,n)&&k(t,n,e[n]);return t};var v=function(t){var e,n=t,{isNavLink:d,to:k,href:v,activeClassName:N,isActive:y,"data-noBrokenLinkCheck":_,autoAddBaseUrl:x=!0}=n,O=((t,e)=>{var n={};for(var a in t)m.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&f)for(var a of f(t))e.indexOf(a)<0&&h.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w,baseUrl:j}}=(0,l.Z)(),{withBaseUrl:D}=(0,u.C)(),P=(0,a.useContext)(c),E=k||v,T=(0,i.Z)(E),C=null==E?void 0:E.replace("pathname://","");let Z=void 0!==C?(L=C,x&&(t=>t.startsWith("/"))(L)?D(L):L):void 0;var L;Z&&T&&(Z=(0,s.applyTrailingSlash)(Z,{trailingSlash:w,baseUrl:j}));const S=(0,a.useRef)(!1),M=d?r.OL:r.rU,U=o.Z.canUseIntersectionObserver,I=(0,a.useRef)();(0,a.useEffect)((()=>(!U&&T&&null!=Z&&window.docusaurus.prefetch(Z),()=>{U&&I.current&&I.current.disconnect()})),[I,Z,U,T]);const A=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,B=!Z||!T||A;return Z&&T&&!A&&!_&&P.collectLink(Z),B?a.createElement("a",b(b({href:Z},E&&!T&&{target:"_blank",rel:"noopener noreferrer"}),O)):a.createElement(M,b((W=b({},O),p(W,g({onMouseEnter:()=>{S.current||null==Z||(window.docusaurus.preload(Z),S.current=!0)},innerRef:t=>{var e,n;U&&t&&T&&(e=t,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},I.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(I.current.unobserve(e),I.current.disconnect(),n())}))})),I.current.observe(e))},to:Z||""}))),d&&{isActive:y,activeClassName:N}));var W}},35096:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(11368),r=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),l="/"===r||r===a?r:(i=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},62116:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return k},default:function(){return v}});var a=n(3905),r=n(39130),l=n(43861),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&p(t,n,e[n]);if(u)for(var n of u(e))d.call(e,n)&&p(t,n,e[n]);return t};const f={title:"Draggable"},m=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_draggable",id:"api/classes/classtouchgfx_1_1_draggable",isDocsHomePage:!1,title:"Draggable",description:"Mix-in class that extends a class to become Draggable, which means that the object on screen can be freely moved around using the touch screen.",source:"@site/docs/api/classes/classtouchgfx_1_1_draggable.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_draggable",permalink:"/4.18/ko/docs/api/classes/classtouchgfx_1_1_draggable",tags:[],version:"current",frontMatter:{title:"Draggable"},sidebar:"docs",previous:{title:"DragEvent",permalink:"/4.18/ko/docs/api/classes/classtouchgfx_1_1_drag_event"},next:{title:"Drawable",permalink:"/4.18/ko/docs/api/classes/classtouchgfx_1_1_drawable"}},k=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"Draggable",id:"draggable",children:[],level:3},{value:"handleDragEvent",id:"handledragevent",children:[],level:3}],level:2}],b={toc:k};function v(t){var e,n=t,{components:i}=n,p=((t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=g(g({},b),p),o(e,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," Mix-in class that extends a class to become Draggable, which means that the object on screen can be freely moved around using the touch screen. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"T")," specifies the type to extend with the ",(0,a.kt)("a",g({parentName:"li"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," behavior. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),": T"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_snapper",mdxType:"Link"},"Snapper","<"," T ",">")),(0,a.kt)("h2",g({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:"right"})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-draggable",mdxType:"Link"},"Draggable")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-handledragevent",mdxType:"Link"},"handleDragEvent")),"(const ",(0,a.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & event)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Called when dragging the ",(0,a.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",g({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_draggable#function-draggable",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"draggable"}),"Draggable"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-draggable",mdxType:"Link"},"Draggable")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," class. "),(0,a.kt)("p",null,"Make the object touchable. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_draggable#function-handledragevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"handledragevent"}),"handleDragEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-handledragevent",mdxType:"Link"},"handleDragEvent")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," &"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Called when dragging the ",(0,a.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," object. "),(0,a.kt)("p",null,"The object is moved according to the drag event."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"The drag event."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-handledragevent",mdxType:"Link"},"touchgfx::Snapper::handleDragEvent")))))}v.isMDXComponent=!0}}]);