"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3044],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},65407:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){var t,n;const a=(0,i.Z)(e.url),o=null!=(t=e.width)?t:"100%",l=null!=(n=e.height)?n:"100%";return r.createElement("div",{class:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:o,height:l},r.createElement("source",{src:a,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},82985:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},39130:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(67294),i=n(73727),a=n(11368),o=n(35096),l=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),d=n(67023),u=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(g)for(var n of g(t))v.call(t,n)&&f(e,n,t[n]);return e};var k=function(e){var t,n=e,{isNavLink:u,to:f,href:k,activeClassName:b,isActive:y,"data-noBrokenLinkCheck":C,autoAddBaseUrl:T=!0}=n,N=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&v.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:S,baseUrl:x}}=(0,a.Z)(),{withBaseUrl:Z}=(0,c.C)(),O=(0,r.useContext)(s),P=f||k,E=(0,o.Z)(P),L=null==P?void 0:P.replace("pathname://","");let j=void 0!==L?(R=L,T&&(e=>e.startsWith("/"))(R)?Z(R):R):void 0;var R;j&&E&&(j=(0,d.applyTrailingSlash)(j,{trailingSlash:S,baseUrl:x}));const M=(0,r.useRef)(!1),W=u?i.OL:i.rU,B=l.Z.canUseIntersectionObserver,D=(0,r.useRef)();(0,r.useEffect)((()=>(!B&&E&&null!=j&&window.docusaurus.prefetch(j),()=>{B&&D.current&&D.current.disconnect()})),[D,j,B,E]);const z=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,A=!j||!E||z;return j&&E&&!z&&!C&&O.collectLink(j),A?r.createElement("a",w(w({href:j},P&&!E&&{target:"_blank",rel:"noopener noreferrer"}),N)):r.createElement(W,w((I=w({},N),p(I,h({onMouseEnter:()=>{M.current||null==j||(window.docusaurus.preload(j),M.current=!0)},innerRef:e=>{var t,n;B&&e&&E&&(t=e,n=()=>{null!=j&&window.docusaurus.prefetch(j)},D.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.current.unobserve(t),D.current.disconnect(),n())}))})),D.current.observe(t))},to:j||""}))),u&&{isActive:y,activeClassName:b}));var I}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),a="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(i,a)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},2339:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return w},metadata:function(){return k},toc:function(){return b},default:function(){return C}});var r=n(3905),i=n(39130),a=n(44035),o=n(29415),l=n(82985),s=n(65407),c=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))g.call(t,n)&&m(e,n,t[n]);return e};const f={id:"canvas-view",title:"Canvas View"},w=void 0,k={unversionedId:"development/ui-development/designer-user-guide/canvas-view",id:"development/ui-development/designer-user-guide/canvas-view",isDocsHomePage:!1,title:"Canvas View",description:"The Canvas is the view used for building the graphical parts of an application by providing a visual representation of the interface as it will look while running. The dynamic aspects, like animations and interactions between parts of the system, are described here.",source:"@site/docs/development/ui-development/designer-user-guide/canvas-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/canvas-view",permalink:"/4.18/zh-TW/docs/development/ui-development/designer-user-guide/canvas-view",tags:[],version:"current",frontMatter:{id:"canvas-view",title:"Canvas View"},sidebar:"docs",previous:{title:"Main Window",permalink:"/4.18/zh-TW/docs/development/ui-development/designer-user-guide/main-window"},next:{title:"Images View",permalink:"/4.18/zh-TW/docs/development/ui-development/designer-user-guide/images-view"}},b=[{value:"Left Side Bar",id:"left-side-bar",children:[{value:"Screens &amp; Custom Containers",id:"screens--custom-containers",children:[],level:3}],level:2},{value:"Canvas",id:"canvas",children:[{value:"Widget Menu",id:"widget-menu",children:[],level:3},{value:"Widget Selection",id:"widget-selection",children:[],level:3},{value:"Widget Positioning",id:"widget-positioning",children:[],level:3},{value:"Widget Order Controls",id:"widget-order-controls",children:[],level:3},{value:"Content Clipping Control",id:"content-clipping-control",children:[],level:3},{value:"History Controls",id:"history-controls",children:[],level:3},{value:"Zoom Controls",id:"zoom-controls",children:[],level:3}],level:2},{value:"Right Side Bar",id:"right-side-bar",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Interactions",id:"interactions",children:[],level:3}],level:2}],y={toc:b};function C(e){var t,n=e,{components:c}=n,m=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},y),m),d(t,u({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The Canvas is the view used for building the graphical parts of an application by providing a visual representation of the interface as it will look while running. The dynamic aspects, like animations and interactions between parts of the system, are described here."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-4.17.png",mdxType:"Figure"},"The Canvas View of TouchGFX Designer"),(0,r.kt)("h2",v({},{id:"left-side-bar"}),"Left Side Bar"),(0,r.kt)("p",null,"The side bar to the left contains a tab control, with navigation between and ",(0,r.kt)("a",v({parentName:"p"},{href:"#screens--custom-containers"}),"Screens & Custom Containers"),"."),(0,r.kt)("h3",v({},{id:"screens--custom-containers"}),"Screens & Custom Containers"),(0,r.kt)("p",null,"Both the Screens tab and Custom Containers tab contain a tree giving an overview of the widgets in each screen/custom container, every widget in the tree, that can contain other widgets can be collapsed by pressing the chevron next to the widgets name."),(0,r.kt)("p",null,"The order of the screens, custom containers, and widgets within can be changed by dragging them below or above other screens, custom containers and widgets, the order can also be changed with the ",(0,r.kt)("a",v({parentName:"p"},{href:"#widget-order-controls"}),"widget order controls"),". Changing the order of widgets will determine which widgets is rendered on top of other widgets."),(0,r.kt)("p",null,"Widgets that are container types, can have children added to them by dragging widget on top of them in the tree view. widgets can also be dragged from one screen to another."),(0,r.kt)("p",null,"Select multiple widgets by pressing and holding CTRL while clicking widgets."),(0,r.kt)("p",null,'Screens/Custom Containers can be added to the project by pressing the "+" button.\nThe Custom Containers can be added to screens and other custom containers from the ',(0,r.kt)("a",v({parentName:"p"},{href:"#widget-menu"}),"Widget Menu"),", they can be found in their own category named 'Custom Containers'."),(0,r.kt)("p",null,"Screens, Custom Containers and Widgets also have a right-click menu where you can: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null})),(0,r.kt)("th",v({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Rename"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"F2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Delete Widget"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"DEL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Copy"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + C"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Paste"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + V"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Move Up"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + F"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Move Down"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Edit Source Files*"),(0,r.kt)("td",v({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,"*","Only available for Screens and Custom Containers"),(0,r.kt)(s.Z,{width:"40%",height:"40%",url:"/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-tree.mp4",mdxType:"LoopVideo"},"The Screens tree in the left side bar"),(0,r.kt)("h2",v({},{id:"canvas"}),"Canvas"),(0,r.kt)("p",null,"The top of the view contains the ",(0,r.kt)("a",v({parentName:"p"},{href:"#widget-menu"}),"Widget Menu"),", which contains all available widgets. "),(0,r.kt)("p",null,"The center of the view contains the canvas, which displays the view of the screen or custom container that is currently selected."),(0,r.kt)("p",null,"The bottom of the view contains various controls: ",(0,r.kt)("a",v({parentName:"p"},{href:"#zoom-controls"}),"Zoom Controls")," and ",(0,r.kt)("a",v({parentName:"p"},{href:"#content-clipping-control"}),"Content Clipping Control"),". "),(0,r.kt)(s.Z,{url:"/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view.mp4",mdxType:"LoopVideo"},"The Canvas in the Canvas View"),(0,r.kt)("h3",v({},{id:"widget-menu"}),"Widget Menu"),(0,r.kt)("p",null,"Clicking the All widget group tab in the Widget Menu or its shortcut ",(0,r.kt)(l.Z,{mdxType:"Shortcut"},"A")," opens up a list which contains all available widgets grouped into categories. Clicking a specific widget group tab opens up a list of available widgets within that specific category."),(0,r.kt)("p",null,"Clicking a widget, will add it to the canvas of the Screen or Custom Container that is currently selected and visible."),(0,r.kt)("p",null,'The All widget group also contains a search field which, powered by fuzzy search, helps find the widget which suits the search input best. The best result is highlighted. Due to fuzzy search, it is for example possible to input "bwl" and get "Button With Label" due to abbreviations being a factor. After inputting something into the search field, hitting ',(0,r.kt)(l.Z,{mdxType:"Shortcut"},"Enter")," will insert the highlighted widget on canvas and close the Widget Menu."),(0,r.kt)(s.Z,{url:"/videos/development/ui-development/designer-user-guide/canvas-view/widget-menu.mp4",mdxType:"LoopVideo"},"The Widget Menu in the Canvas view"),(0,r.kt)("h3",v({},{id:"widget-selection"}),"Widget Selection"),(0,r.kt)("p",null,"As shown in the animation above, it is possible to select a widget by simply clicking it on the canvas. Multi-selection is also possible by clicking multiple widgets while holding down ",(0,r.kt)(l.Z,{mdxType:"Shortcut"},"Ctrl")," on the keyboard."),(0,r.kt)("h3",v({},{id:"widget-positioning"}),"Widget Positioning"),(0,r.kt)("p",null,"As shown in the animation above, it is possible to move and resize widgets by dragging their thumbs."),(0,r.kt)("p",null,"It is also possible to move selected widgets by 1 pixel using the arrow keys. Holding down ",(0,r.kt)(l.Z,{mdxType:"Shortcut"},"Ctrl")," while using the arrows keys will move selected widgets by 10 pixels."),(0,r.kt)("h3",v({},{id:"widget-order-controls"}),"Widget Order Controls"),(0,r.kt)("p",null,"The z-order of widgets can be manipulated by the Bring Forward and Send Backwards shortcuts, this also changes their order in the Screens or Custom Container tree."),(0,r.kt)("p",null,"Bring Forward is triggered by pressing ",(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + F"),"."),(0,r.kt)("p",null,"Send Backward is triggerd by pressing ",(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + B"),"."),(0,r.kt)("h3",v({},{id:"content-clipping-control"}),"Content Clipping Control"),(0,r.kt)("p",null,"In the canvas, widgets outside the borders of the Screen, Custom Container and children of container type widgets are clipped. The content clipping control toggles between clipping the widgets fully or showing them partially anyway."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/content-clipping-toggle-button-4.17.png",mdxType:"Figure"},"Show/Hide Clipped Content control in the Canvas View"),(0,r.kt)("p",null,"In the image below a Box is placed halfway outside the borders of a screen, when the content clipping control is set to show clipped widgets, the Box will not be shown fully but instead have the part that is outside desaturated."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/clipped-content-4.17.png",mdxType:"Figure"},"Box widget appearance difference when showing and hiding clipped content"),(0,r.kt)("h3",v({},{id:"history-controls"}),"History Controls"),(0,r.kt)("p",null,"The history of changes performed on the canvas can be undone and redone through the ",(0,r.kt)("a",v({parentName:"p"},{href:"file-menu#edit"}),"Edit")," in the ",(0,r.kt)("a",v({parentName:"p"},{href:"file-menu"}),"File Menu"),".",(0,r.kt)("br",null),"Each screen and custom container maintains its own history, therefore to undo or redo a change performed on a certain screen, that specific screen has to be visible on the canvas."),(0,r.kt)("p",null,"The History controls can also be triggered by pressing ",(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + Z")," and ",(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + Y"),"."),(0,r.kt)("h3",v({},{id:"zoom-controls"}),"Zoom Controls"),(0,r.kt)("p",null,"The zoom level of the canvas can be controlled with the zoom control in the bottom of the canvas. "),(0,r.kt)("p",null,"To center the canvas and return to 100% zoom scale press the Reset Canvas button."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/zoom-controls-4.17.png",mdxType:"Figure"},"Zoom controls in the Canvas View"),(0,r.kt)("p",null,"Zooming can also be achieved by using the following shortcuts:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null})),(0,r.kt)("th",v({parentName:"tr"},{align:null})),(0,r.kt)("th",v({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Zoom 25%"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + 1")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Zoom 50%"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + 2")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Zoom 75%"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + 3")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Zoom 100%"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + 4")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Zoom In"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + Mouse wheel up")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + '+'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Zoom Out"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + Mouse wheel down")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + '-'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Reset Zoom"),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + 0")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 0"))))),(0,r.kt)("h2",v({},{id:"right-side-bar"}),"Right Side Bar"),(0,r.kt)("p",null,"The side bar to the right contains a tab control, with navigation to the ",(0,r.kt)("a",v({parentName:"p"},{href:"#properties"}),"Properties")," of the widget currently selected, and the ",(0,r.kt)("a",v({parentName:"p"},{href:"#interactions"}),"Interactions")," of the Screen or Custom Container that is currently viewed on the canvas."),(0,r.kt)("h3",v({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The Properties tab will show the properties of the Widget/Screen/Custom Container that is currently selected. The name of the selected component is displayed at the top of the properties list. To the left side of the name there is a icon, hovering this icon will display a descriptive text and clicking the icon will link to the documentation of the component."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/properties-tab-4.17.png",mdxType:"Figure"},"Properties of Box"),(0,r.kt)("h3",v({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The Interactions tab will show the interactions of the Screen or Custom Container that is currently displayed on the canvas."),(0,r.kt)("p",null,'Interactions can be added by pressing the "+" button.'),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/interactions-tab-4.17.png",mdxType:"Figure"},"Add Interactions"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(i.Z,{to:"interactions-view",mdxType:"Link"},"Interactions"))))}C.isMDXComponent=!0}}]);