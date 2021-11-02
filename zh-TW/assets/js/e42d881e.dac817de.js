(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7949],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(o,".").concat(c)]||m[c]||s[c]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return f}});var n=a(67294),r=a(73727),l=a(11368),i=a(35096),d=a(84487);const o=(0,n.createContext)({collectLink:()=>{}});var p=a(25026),u=a(67023),s=Object.defineProperty,m=Object.defineProperties,c=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,N=(t,e,a)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,b=(t,e)=>{for(var a in e||(e={}))g.call(e,a)&&N(t,a,e[a]);if(k)for(var a of k(e))h.call(e,a)&&N(t,a,e[a]);return t};var f=function(t){var e,a=t,{isNavLink:s,to:N,href:f,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:w=!0}=a,x=((t,e)=>{var a={};for(var n in t)g.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&k)for(var n of k(t))e.indexOf(n)<0&&h.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T,baseUrl:O}}=(0,l.Z)(),{withBaseUrl:P}=(0,p.C)(),Z=(0,n.useContext)(o),L=N||f,B=(0,i.Z)(L),j=null==L?void 0:L.replace("pathname://","");let S=void 0!==j?(D=j,w&&(t=>t.startsWith("/"))(D)?P(D):D):void 0;var D;S&&B&&(S=(0,u.applyTrailingSlash)(S,{trailingSlash:T,baseUrl:O}));const I=(0,n.useRef)(!1),A=s?r.OL:r.rU,C=d.Z.canUseIntersectionObserver,H=(0,n.useRef)();(0,n.useEffect)((()=>(!C&&B&&null!=S&&window.docusaurus.prefetch(S),()=>{C&&H.current&&H.current.disconnect()})),[H,S,C,B]);const U=null!==(e=null==S?void 0:S.startsWith("#"))&&void 0!==e&&e,E=!S||!B||U;return S&&B&&!U&&!v&&Z.collectLink(S),E?n.createElement("a",b(b({href:S},L&&!B&&{target:"_blank",rel:"noopener noreferrer"}),x)):n.createElement(A,b((W=b({},x),m(W,c({onMouseEnter:()=>{I.current||null==S||(window.docusaurus.preload(S),I.current=!0)},innerRef:t=>{var e,a;C&&t&&B&&(e=t,a=()=>{null!=S&&window.docusaurus.prefetch(S)},H.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(H.current.unobserve(e),H.current.disconnect(),a())}))})),H.current.observe(e))},to:S||""}))),s&&{isActive:y,activeClassName:_}));var W}},35096:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return l},Z:function(){return i}});var n=a(11368),r=a(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:a,baseUrl:n}=e;if(t.startsWith("#"))return t;if(void 0===a)return t;const[r]=t.split(/[#?]/),l="/"===r||r===n?r:(i=r,a?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},82559:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return k},contentTitle:function(){return g},metadata:function(){return h},toc:function(){return N},default:function(){return f}});var n=a(3905),r=a(31217),l=a(43861),i=Object.defineProperty,d=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&m(t,a,e[a]);if(p)for(var a of p(e))s.call(e,a)&&m(t,a,e[a]);return t};const k={title:"TiledImageButtonStyle"},g=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_tiled_image_button_style",id:"api/classes/classtouchgfx_1_1_tiled_image_button_style",isDocsHomePage:!1,title:"TiledImageButtonStyle",description:"A tiled image button style.",source:"@site/docs/api/classes/classtouchgfx_1_1_tiled_image_button_style.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_tiled_image_button_style",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_tiled_image_button_style",tags:[],version:"current",frontMatter:{title:"TiledImageButtonStyle"},sidebar:"docs",previous:{title:"TiledImage",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_tiled_image"},next:{title:"ToggleButton",permalink:"/4.18/zh-TW/docs/api/classes/classtouchgfx_1_1_toggle_button"}},N=[{value:"Public Functions",id:"public-functions",children:[],level:2},{value:"Protected Functions",id:"protected-functions",children:[],level:2},{value:"Protected Attributes",id:"protected-attributes",children:[],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"setHeight",id:"setheight",children:[],level:3},{value:"setTileBitmaps",id:"settilebitmaps",children:[],level:3},{value:"setTileOffset",id:"settileoffset",children:[],level:3},{value:"setWidth",id:"setwidth",children:[],level:3},{value:"TiledImageButtonStyle",id:"tiledimagebuttonstyle",children:[],level:3}],level:2},{value:"Protected Functions Documentation",id:"protected-functions-documentation",children:[{value:"handleAlphaUpdated",id:"handlealphaupdated",children:[],level:3},{value:"handlePressedUpdated",id:"handlepressedupdated",children:[],level:3}],level:2},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",children:[{value:"downTile",id:"downtile",children:[],level:3},{value:"tiledImage",id:"tiledimage",children:[],level:3},{value:"upTile",id:"uptile",children:[],level:3}],level:2}],b={toc:N};function f(t){var e,a=t,{components:i}=a,m=((t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&s.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=c(c({},b),m),d(e,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," A tiled image button style.\nAn tiled image button style. This class is supposed to be used with one of the ButtonTrigger classes to create a functional button. This class will show one of two tiled images depending on the state of the button (pressed or released)."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_tiled_image_button_style"}),"TiledImageButtonStyle")," does not set the size of the enclosing container (normally ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button_container"}),"AbstractButtonContainer"),") to the size of the pressed ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap"),". This can be overridden by calling setWidth/setHeight after setting the bitmaps."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T")," Generic type parameter. Typically a ",(0,n.kt)("a",c({parentName:"li"},{href:"classtouchgfx_1_1_abstract_button_container"}),"AbstractButtonContainer")," subclass.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button_container"}),"AbstractButtonContainer")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),": T"),(0,n.kt)("h2",c({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-setheight",mdxType:"Link"},"setHeight")),"(int16_t height)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Sets height.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-settilebitmaps",mdxType:"Link"},"setTileBitmaps")),"(const ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," & bmpReleased, const ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," & bmpPressed)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Sets tile bitmaps.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-settileoffset",mdxType:"Link"},"setTileOffset")),"(int16_t x, int16_t y)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Sets an offset into the bitmap where the tile drawing should start.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-setwidth",mdxType:"Link"},"setWidth")),"(int16_t width)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Sets width.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-tiledimagebuttonstyle",mdxType:"Link"},"TiledImageButtonStyle")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"protected-functions"}),"Protected Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-handlealphaupdated",mdxType:"Link"},"handleAlphaUpdated")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Handles what should happen when the alpha is updated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-handlepressedupdated",mdxType:"Link"},"handlePressedUpdated")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Handles what should happen when the pressed state is updated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"protected-attributes"}),"Protected Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#variable-downtile",mdxType:"Link"},"downTile")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The image to display when button is pressed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_tiled_image"}),"TiledImage")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#variable-tiledimage",mdxType:"Link"},"tiledImage")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The tiled image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#variable-uptile",mdxType:"Link"},"upTile")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The image to display when button is released.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_tiled_image_button_style#function-setheight",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"setheight"}),"setHeight"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-setheight",mdxType:"Link"},"setHeight")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"int16_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"height"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets height. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"height"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The height."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_tiled_image_button_style#function-settilebitmaps",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"settilebitmaps"}),"setTileBitmaps"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-settilebitmaps",mdxType:"Link"},"setTileBitmaps")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," &"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bmpReleased ,"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," &"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bmpPressed"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets tile bitmaps. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bmpReleased"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The bitmap released.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"bmpPressed"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The bitmap pressed."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_tiled_image_button_style#function-settileoffset",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"settileoffset"}),"setTileOffset"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-settileoffset",mdxType:"Link"},"setTileOffset")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"int16_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"int16_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets an offset into the bitmap where the tile drawing should start. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The x coordinate offset.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The y coordinate offset."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_tiled_image#function-setoffset"}),"TiledImage::setOffset"))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_tiled_image_button_style#function-setwidth",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"setwidth"}),"setWidth"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-setwidth",mdxType:"Link"},"setWidth")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"int16_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"width"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets width. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"width"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The width."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_tiled_image_button_style#function-tiledimagebuttonstyle",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"tiledimagebuttonstyle"}),"TiledImageButtonStyle"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-tiledimagebuttonstyle",mdxType:"Link"},"TiledImageButtonStyle")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),(0,n.kt)("h2",c({},{id:"protected-functions-documentation"}),"Protected Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_tiled_image_button_style#function-handlealphaupdated",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"handlealphaupdated"}),"handleAlphaUpdated"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-handlealphaupdated",mdxType:"Link"},"handleAlphaUpdated")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Handles what should happen when the alpha is updated. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_tiled_image_button_style#function-handlepressedupdated",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"handlepressedupdated"}),"handlePressedUpdated"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_tiled_image_button_style#function-handlepressedupdated",mdxType:"Link"},"handlePressedUpdated")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Handles what should happen when the pressed state is updated. "))),(0,n.kt)("h2",c({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_tiled_image_button_style#variable-downtile",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"downtile"}),"downTile"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," downTile ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The image to display when button is pressed. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_tiled_image_button_style#variable-tiledimage",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"tiledimage"}),"tiledImage"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_tiled_image"}),"TiledImage")," tiledImage ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The tiled image. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_tiled_image_button_style#variable-uptile",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"uptile"}),"upTile"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," upTile ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The image to display when button is released. "))))}f.isMDXComponent=!0}}]);