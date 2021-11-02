(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4772],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),p=i,f=h["".concat(s,".").concat(p)]||h[p]||d[p]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=a},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(67294),i=n(73727),o=n(11368),a=n(35096),c=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),l=n(67023),d=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&w(e,n,t[n]);if(f)for(var n of f(t))m.call(t,n)&&w(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:d,to:w,href:b,activeClassName:y,isActive:k,"data-noBrokenLinkCheck":O,autoAddBaseUrl:x=!0}=n,T=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:C,baseUrl:E}}=(0,o.Z)(),{withBaseUrl:j}=(0,u.C)(),P=(0,r.useContext)(s),F=w||b,S=(0,a.Z)(F),Z=null==F?void 0:F.replace("pathname://","");let _=void 0!==Z?(U=Z,x&&(e=>e.startsWith("/"))(U)?j(U):U):void 0;var U;_&&S&&(_=(0,l.applyTrailingSlash)(_,{trailingSlash:C,baseUrl:E}));const D=(0,r.useRef)(!1),X=d?i.OL:i.rU,W=c.Z.canUseIntersectionObserver,B=(0,r.useRef)();(0,r.useEffect)((()=>(!W&&S&&null!=_&&window.docusaurus.prefetch(_),()=>{W&&B.current&&B.current.disconnect()})),[B,_,W,S]);const I=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,N=!_||!S||I;return _&&S&&!I&&!O&&P.collectLink(_),N?r.createElement("a",v(v({href:_},F&&!S&&{target:"_blank",rel:"noopener noreferrer"}),T)):r.createElement(X,v((G=v({},T),h(G,p({onMouseEnter:()=>{D.current||null==_||(window.docusaurus.preload(_),D.current=!0)},innerRef:e=>{var t,n;W&&e&&S&&(t=e,n=()=>{null!=_&&window.docusaurus.prefetch(_)},B.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.current.unobserve(t),B.current.disconnect(),n())}))})),B.current.observe(t))},to:_||""}))),d&&{isActive:k,activeClassName:y}));var G}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(11368),i=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(i,o)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},10883:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return m},metadata:function(){return w},toc:function(){return v},default:function(){return y}});var r=n(3905),i=n(44035),o=n(29415),a=n(31217),c=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))h.call(t,n)&&p(e,n,t[n]);return e};const g={id:"widgets-and-containers",title:"Widgets and Containers"},m=void 0,w={unversionedId:"development/ui-development/working-with-touchgfx/widgets-and-containers",id:"development/ui-development/working-with-touchgfx/widgets-and-containers",isDocsHomePage:!1,title:"Widgets and Containers",description:"This section of the documentation will go over two of the most fundamental concepts of building a TouchGFX application: widgets and containers. These are two of the building blocks you will be using throughout the development of your UI. Both include premade components supplied with TouchGFX, while also being open-ended enough to support the creation of custom implementations.",source:"@site/docs/development/ui-development/working-with-touchgfx/widgets-and-containers.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/widgets-and-containers",permalink:"/4.18/docs/development/ui-development/working-with-touchgfx/widgets-and-containers",tags:[],version:"current",frontMatter:{id:"widgets-and-containers",title:"Widgets and Containers"},sidebar:"docs",previous:{title:"Using IDEs with TouchGFX",permalink:"/4.18/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx"},next:{title:"Simulator",permalink:"/4.18/docs/development/ui-development/working-with-touchgfx/simulator"}},v=[{value:"Widgets",id:"widgets",children:[],level:2},{value:"Containers",id:"containers",children:[],level:2}],b={toc:v};function y(e){var t,n=e,{components:c}=n,p=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},b),p),s(t,u({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This section of the documentation will go over two of the most fundamental concepts of building a TouchGFX application: widgets and containers. These are two of the building blocks you will be using throughout the development of your UI. Both include premade components supplied with TouchGFX, while also being open-ended enough to support the creation of custom implementations."),(0,r.kt)("h2",f({},{id:"widgets"}),"Widgets"),(0,r.kt)("p",null,"TouchGFX and the TouchGFX Designer tool supplies numerous standard widgets which users can freely use to build their UI, such as ",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"Text Area"),", ",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button")," and ",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"Texture Mapper"),". But on a fundamental level, a widget in TouchGFX is simply an abstract definition of something that can be drawn on the screen and can be interacted with."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/button/widget-appearance.png",mdxType:"Figure"},"A Button widget with an Image widget as background"),(0,r.kt)("p",null,"Using TouchGFX Designer, users can add any widgets they want to their screens and customize them how they want with the supplied properties specific to each widget. Widgets can also be grouped by using the different types of containers that TouchGFX also supplies."),(0,r.kt)("p",null,"You can also add widgets in user code if you want by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"add(widget_instance_name);")," function or adding it to a container by using the containers add function e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"myContainer.add(widget_instance_name);"),". The order in which you add the widgets will determine the z-order. The widget added last will appear front-most on the screen."),(0,r.kt)("p",null,"The coordinates of a widget are always relative to its parent node which is either the root container (the screen) or a container."),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"You can create your own widgets to meet any specific need you might have. Read more on this in the ",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-widgets",mdxType:"Link"},"Custom Widgets section"),"."),(0,r.kt)("h2",f({},{id:"containers"}),"Containers"),(0,r.kt)("p",null,"A container is a component in TouchGFX that can contain child nodes, such as widgets and other containers."),(0,r.kt)("p",null,"In TouchGFX Designer, containers are found under the Containers category in the Widgets tab and adding widgets to a containers is done by dragging widgets into the container in the tree view."),(0,r.kt)("p",null,"The z-order of children is determined by the order in which children are added to the container - the child added last will appear front-most on the screen."),(0,r.kt)("p",null,"Since the position of widgets in TouchGFX is defined relative to their parents, changing the position of a parent container will also move the children accordingly."),(0,r.kt)("p",null,"Containers act as viewports, meaning that only the parts of the children that intersect with the geometry of the container will be visible."),(0,r.kt)("p",null,"In the animation below, you can see how the viewport aspect of containers work. First we see the outline of the container of which the button is a child:"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.gif",mdxType:"Figure"},"A Container acting as a viewport"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"You can create your own container to meet any specific need you might have. Read more on this in the ",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-containers",mdxType:"Link"},"Custom Containers section"),"."))}y.isMDXComponent=!0}}]);