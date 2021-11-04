"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9647],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),p=i,g=h["".concat(d,".").concat(p)]||h[p]||u[p]||r;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70814:function(e,t,n){var o=n(67294),i=n(88678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class a extends o.Component{render(){return o.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:r},this.props.children)}}t.Z=a},22425:function(e,t,n){var o=n(67294);class i extends o.Component{render(){return o.createElement("div",{class:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var o=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,a=(0,i.Z)(e.imageSource);return t?o.createElement("div",{class:"figure noshadow"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:r,src:a})),o.createElement("p",null,e.children)):o.createElement("div",{class:"figure"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:r,src:a})),o.createElement("p",null,e.children))}},29415:function(e,t,n){var o=n(67294),i=n(88678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends o.Component{render(){return o.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}t.Z=a},88678:function(e,t,n){var o=n(67294);class i extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{class:e},o.createElement("div",{class:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){var o=n(67294);class i extends o.Component{render(){return o.createElement("code",null,this.props.children)}}t.Z=i},37793:function(e,t,n){var o=n(67294),i=n(88678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends o.Component{render(){return o.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:r},this.props.children)}}t.Z=a},39130:function(e,t,n){n.d(t,{Z:function(){return y}});var o=n(67294),i=n(73727),r=n(11368),a=n(35096),l=n(84487);const d=(0,o.createContext)({collectLink:()=>{}});var s=n(25026),c=n(67023),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&w(e,n,t[n]);if(g)for(var n of g(t))m.call(t,n)&&w(e,n,t[n]);return e};var y=function(e){var t,n=e,{isNavLink:u,to:w,href:y,activeClassName:b,isActive:k,"data-noBrokenLinkCheck":x,autoAddBaseUrl:T=!0}=n,C=((e,t)=>{var n={};for(var o in e)f.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&g)for(var o of g(e))t.indexOf(o)<0&&m.call(e,o)&&(n[o]=e[o]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:R}}=(0,r.Z)(),{withBaseUrl:E}=(0,s.C)(),S=(0,o.useContext)(d),N=w||y,W=(0,a.Z)(N),Z=null==N?void 0:N.replace("pathname://","");let j=void 0!==Z?(P=Z,T&&(e=>e.startsWith("/"))(P)?E(P):P):void 0;var P;j&&W&&(j=(0,c.applyTrailingSlash)(j,{trailingSlash:O,baseUrl:R}));const I=(0,o.useRef)(!1),Q=u?i.OL:i.rU,A=l.Z.canUseIntersectionObserver,_=(0,o.useRef)();(0,o.useEffect)((()=>(!A&&W&&null!=j&&window.docusaurus.prefetch(j),()=>{A&&_.current&&_.current.disconnect()})),[_,j,A,W]);const D=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,z=!j||!W||D;return j&&W&&!D&&!x&&S.collectLink(j),z?o.createElement("a",v(v({href:j},N&&!W&&{target:"_blank",rel:"noopener noreferrer"}),C)):o.createElement(Q,v((M=v({},C),h(M,p({onMouseEnter:()=>{I.current||null==j||(window.docusaurus.preload(j),I.current=!0)},innerRef:e=>{var t,n;A&&e&&W&&(t=e,n=()=>{null!=j&&window.docusaurus.prefetch(j)},_.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.current.unobserve(t),_.current.disconnect(),n())}))})),_.current.observe(t))},to:j||""}))),u&&{isActive:k,activeClassName:b}));var M}},35096:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return a}});var o=n(11368),i=n(35096);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+a:a}(t,e,n,o)}}function a(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:o}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),r="/"===i||i===o?i:(a=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(i,r)}},67023:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(i).default}});var r=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(r).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},93985:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return O},default:function(){return N},frontMatter:function(){return C},metadata:function(){return R},toc:function(){return E}});var o=n(3905),i=n(44035),r=n(70814),a=n(37793),l=n(67294),d=n(88678);const s=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class c extends l.Component{render(){return l.createElement(d.Z,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:s},this.props.children)}}var u=c,h=n(29415),p=n(31217),g=n(39130),f=n(22425),m=Object.defineProperty,w=Object.defineProperties,v=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&x(e,n,t[n]);if(y)for(var n of y(t))k.call(t,n)&&x(e,n,t[n]);return e};const C={id:"custom-widgets",title:"Custom Widgets"},O=void 0,R={unversionedId:"development/ui-development/touchgfx-engine-features/custom-widgets",id:"development/ui-development/touchgfx-engine-features/custom-widgets",isDocsHomePage:!1,title:"Custom Widgets",description:"When creating applications you may need widgets that are not part of the TouchGFX distribution.",source:"@site/docs/development/ui-development/touchgfx-engine-features/custom-widgets.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-widgets",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/custom-widgets",tags:[],version:"current",frontMatter:{id:"custom-widgets",title:"Custom Widgets"},sidebar:"docs",previous:{title:"Caching Bitmaps",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"},next:{title:"Canvas Widgets",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"}},E=[{value:"When to use the custom widget approach",id:"when-to-use-the-custom-widget-approach",children:[],level:2},{value:"In TouchGFX Designer",id:"in-touchgfx-designer",children:[],level:2},{value:"In code",id:"in-code",children:[{value:"Your own custom widget",id:"your-own-custom-widget",children:[],level:3},{value:"Partial drawing",id:"partial-drawing",children:[],level:3},{value:"Solid area",id:"solid-area",children:[],level:3},{value:"Example source code",id:"example-source-code",children:[],level:3}],level:2},{value:"Modifying standard widgets/containers",id:"modifying-standard-widgetscontainers",children:[],level:2}],S={toc:E};function N(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var o in e)b.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&y)for(var o of y(e))t.indexOf(o)<0&&k.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=T(T({},S),d),w(t,v({components:l,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"When creating applications you may need widgets that are not part of the TouchGFX distribution.\nTouchGFX\xa0have a few ways in which you can create your own graphical elements. The simplest way is to use\xa0the ",(0,o.kt)("a",T({parentName:"p"},{href:"custom-containers"}),"Custom Container approach"),", where you combine already existing widgets into your own. This article, however, deals with a more advanced approach where you can essentially create a widget that has full control of the framebuffer and thus is able to draw precisely what you want."),(0,o.kt)("h2",T({},{id:"when-to-use-the-custom-widget-approach"}),"When to use the custom widget approach"),(0,o.kt)("p",null,"Creating custom widgets is not the most typical way to create your own widget. The custom container approach is preferable if it suits your needs, but sometimes this approach is not enough. When you need full control of the framebuffer you need to\xa0use the custom widget approach."),(0,o.kt)("p",null,"A few examples of widgets that could and should be created using the custom widget approach are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A sepia filter"),(0,o.kt)("li",{parentName:"ul"},"A mandelbrot fractal widget"),(0,o.kt)("li",{parentName:"ul"},"A widget that shows data from a file, for example a gif animation.")),(0,o.kt)("h2",T({},{id:"in-touchgfx-designer"}),"In TouchGFX Designer"),(0,o.kt)("p",null,"TouchGFX Designer does not currently support the creation of custom widgets. As a result, you will need to write the code for the custom widget manually (refer to the remainder of this article on how to\xa0do this) and then insert the widget in the user code portion of your View."),(0,o.kt)("h2",T({},{id:"in-code"}),"In code"),(0,o.kt)("p",null,"You\xa0create your own custom widget by extending the ",(0,o.kt)("inlineCode",{parentName:"p"},"Widget")," class. Doing this requires\xa0a bit more effort on the user's side, but will also give full control of all pixels drawn by the widget.\nYour custom widget will not necessarily utilize any existing widgets but instead define how it should be drawn by specifying colors of pixels. The custom widget approach will in general also have a smaller memory footprint, which in some cases is of great importance."),(0,o.kt)("p",null,"One example of a custom widget is a QR code widget. This particular widget makes for a good example, so we will walk through how to create it in the following section. In this example, a QR code widget is an NxN\xa0matrix of black and white pixels. The size of the widget and the color of each pixel will be determined at run time and depend on the information in a QR\xa0code data object."),(0,o.kt)("p",null,"Here are two examples of how a QR\xa0code widget might look:"),(0,o.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-examples.png",noShadow:!0,mdxType:"Figure"},"QR code widget examples"),(0,o.kt)(r.Z,{mdxType:"Caution"},"It is possible to create the qr code widget with the custom container approach by having n*n black or white boxes as children of the container. However, this will take up a lot of memory, and will probably not be as efficient or flexible."),(0,o.kt)(a.Z,{mdxType:"Tip"},"The standard ",(0,o.kt)(p.Z,{mdxType:"InlineCode"},"touchgfx::Button")," (supplied with the framework) is created as a custom widget, not a custom container. This saves memory per button on your screen."),(0,o.kt)("h3",T({},{id:"your-own-custom-widget"}),"Your own custom widget"),(0,o.kt)("p",null,"In order to create your widget that extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"Widget")," class, you need to describe two things."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The way your widget is drawn"),(0,o.kt)("li",{parentName:"ul"},"The part of your widget that is solid")),(0,o.kt)("h3",T({},{id:"partial-drawing"}),"Partial drawing"),(0,o.kt)("p",null,"Any widget, and therefore also your custom widget, needs to support partial drawing. This means that your widget should be able to draw only a part of itself."),(0,o.kt)("p",null,"This is due to two points. It is often not necessary to redraw the entire screen but only parts of it. The algorithms of TouchGFX might split up the drawing of a screen into multiple partial drawings to minimize the global number of pixels drawn. This partial drawing of a screen, might then ask a widget to only draw itself partially."),(0,o.kt)("p",null,"As an example our QR code widget needs to be able to support drawing only the highlighted part of itself."),(0,o.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-partial-drawing.png",noShadow:!0,mdxType:"Figure"},"QR code widget partial drawing"),(0,o.kt)("p",null,"The way to do this in your code is by overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},"draw")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",T({parentName:"pre"},{className:"language-cpp"}),"virtual void draw(const touchgfx::Rect& invalidatedArea) const\n{\n    //run through the pixels of the invalidated area\n    //draw a black pixel if the qr data object has a value at this position\n    //draw a white pixel otherwise\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidatedArea")," is the part of the widget that needs to be updated. In our QR code example the invalidated area is the highlighted area. The area is expressed in coordinates relative to the top left corner of the widget."),(0,o.kt)(r.Z,{mdxType:"Caution"},"It is the responsibility of the widget to draw inside the invalidated area. If you draw outside the invalidated area you will not get overall correct behaviour of your screens."),(0,o.kt)(a.Z,{mdxType:"Tip"},"The ",(0,o.kt)(p.Z,{mdxType:"InlineCode"},"draw")," method is ",(0,o.kt)(p.Z,{mdxType:"InlineCode"},"const")," because the optimized drawing algorithm might split up the drawing of a widget into multiple calls to draw. The ",(0,o.kt)(p.Z,{mdxType:"InlineCode"},"const")," assures that the widget is not moved, updated etc. in between these multiple ",(0,o.kt)(p.Z,{mdxType:"InlineCode"},"draw")," executions."),(0,o.kt)("h3",T({},{id:"solid-area"}),"Solid area"),(0,o.kt)("p",null,"Furthermore, a widget needs to be able to report how large a portion of itself is solid. Solid means that you can not see the things that are behind it on the screen. For instance, a standard red box is completely solid, whereas an image with an alpha value of 50% is completely non solid; you can see everything behind it."),(0,o.kt)("p",null,"A solid widget will enable TouchGFX to speed up the drawing process. Since we do not have to draw the widgets below the solid widget, fewer pixels have to be drawn."),(0,o.kt)("p",null,"To report the solid area in your code, override the ",(0,o.kt)("inlineCode",{parentName:"p"},"getSolidRect")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",T({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const;\n")),(0,o.kt)("p",null,"Our QR code widget will be completely solid. You will not be able to see anything behind the black and white pixels. Therefore, we let the method return a rectangle the full size of the widget:"),(0,o.kt)("pre",null,(0,o.kt)("code",T({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n")),(0,o.kt)("h3",T({},{id:"example-source-code"}),"Example source code"),(0,o.kt)("p",null,"We end up with an application and a widget looking like this - depending on the data supplied:"),(0,o.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-screenshot.png",noShadow:!0,mdxType:"Figure"},"QR code widget screenshot"),(0,o.kt)("p",null,"The complete code of the widget is shown below:"),(0,o.kt)(f.Z,{mdxType:"CodeHeader"},"gui/include/gui/common/QRCodeWidget.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",T({parentName:"pre"},{className:"language-cpp"}),"\n#ifndef QR_CODE_WIDGET_HPP\n#define QR_CODE_WIDGET_HPP\n\n#include <touchgfx/widgets/Widget.hpp>\n\nclass QRCodeWidget : public touchgfx::Widget\n{\npublic:\n    QRCodeWidget();\n\n    virtual void draw(const touchgfx::Rect& invalidatedArea) const;\n    virtual touchgfx::Rect getSolidRect() const;\n\n    void setQRCodeData(QRCodeData* data);\n    void setScale(uint8_t s);\n\nprivate:\n    void updateSize();\n\n    QRCodeData* data;\n    uint8_t scale;\n};\n#endif\n")),(0,o.kt)("p",null,"In the header file, we define the widget as an extension of the ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx::Widget")," class. We override the ",(0,o.kt)("inlineCode",{parentName:"p"},"draw")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getSolidRect")," methods to define how our widget is drawn.\nWe declare methods for setting the data of the QR code and setting the scaling factor of the QR code."),(0,o.kt)(f.Z,{mdxType:"CodeHeader"},"gui/src/common/QRCodeWidget.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",T({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/QRCodeWidget.hpp>\n\nQRCodeWidget::QRCodeWidget() :\n    data(0),\n    scale(1)\n{\n}\n\nvoid QRCodeWidget::draw(const touchgfx::Rect& invalidatedArea) const\n{\n    if (!data)\n    {\n        return;\n    }\n\n    touchgfx::Rect absolute = getAbsoluteRect();\n\n    uint16_t* framebuffer = touchgfx::HAL::getInstance()->lockFrameBuffer();\n\n    for (int y = invalidatedArea.y; y < invalidatedArea.bottom(); y++)\n    {\n        for (int x = invalidatedArea.x; x < invalidatedArea.right(); x++)\n        {\n            framebuffer[absolute.x + x + (absolute.y + y) * touchgfx::HAL::DISPLAY_WIDTH] =\n              data->at(x / scale, y / scale) ? 0x0000 : 0xffff;\n        }\n    }\n\n    touchgfx::HAL::getInstance()->unlockFrameBuffer();\n}\n\ntouchgfx::Rect QRCodeWidget::getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n\nvoid QRCodeWidget::setQRCodeData(QRCodeData* qrCode)\n{\n    data = qrCode;\n    updateSize();\n}\n\nvoid QRCodeWidget::setScale(uint8_t s)\n{\n    scale = s;\n    updateSize();\n}\n\nvoid QRCodeWidget::updateSize()\n{\n    if (data)\n    {\n        setWidth(data->getSize() * scale);\n        setHeight(data->getSize() * scale);\n    }\n}\n")),(0,o.kt)("p",null,"The source file defines the ",(0,o.kt)("inlineCode",{parentName:"p"},"draw")," method. This method steps through each of the pixels in the invalidated area and determines the color of the framebuffer based on the contents of the data object and the scaling factor."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getSolidRect")," method reports the widget as completely solid."),(0,o.kt)(r.Z,{mdxType:"Caution"},"Note that we locked and unlocked the framebuffer as part of our ",(0,o.kt)(p.Z,{mdxType:"InlineCode"},"draw")," method. This is to make sure that the DMA is done drawing when we start drawing."),(0,o.kt)("p",null,"The code also uses a small class/interface to access the data of the QR code:"),(0,o.kt)("pre",null,(0,o.kt)("code",T({parentName:"pre"},{className:"language-cpp"}),"class QRCodeData\n{\npublic:\n    uint8_t getSize();\n    bool at(uint8_t x, uint8_t y);\n};\n")),(0,o.kt)(h.Z,{mdxType:"FurtherReading"},"Download and check out the ",(0,o.kt)(g.Z,{to:"/download/widgets/qr-code.zip",target:"_blank",mdxType:"Link"},"QRCode")," and ",(0,o.kt)(g.Z,{to:"/download/widgets/lens.zip",target:"_blank",mdxType:"Link"},"Lens")," widgets."),(0,o.kt)(u,{mdxType:"Try"},(0,o.kt)("li",null,"Modify the QR code widget such that white pixels are completely transparent."),(0,o.kt)("li",null,"Create a custom widget that displays a sepia filter, a mandelbrot fractal, a gif image or something else."),(0,o.kt)("li",null,"Consider which widgets are most easily done using custom containers and which widgets are most easily realized using the custom widget approach.")),(0,o.kt)("h2",T({},{id:"modifying-standard-widgetscontainers"}),"Modifying standard widgets/containers"),(0,o.kt)("p",null,"The source code for the standard widgets are included when installing TouchGFX. These can also be modified to fit with the needs of an application. The source code for the standard widgets and containers is located in the folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",T({parentName:"pre"},{}),"Middlewares\\ST\\touchgfx\\framework\\source\\touchgfx\\widgets\n")),(0,o.kt)("p",null,"In order to maintain backwards compatibility, the core library contains compiled versions of the standard widgets and containers. It is therefore not necessary to compile these files in your project."),(0,o.kt)(r.Z,{mdxType:"Caution"},"Modifying the standard widgets/containers directly is discouraged"),(0,o.kt)("p",null,"The source code is primarily intended as inspiration and a way to learn about the inner workings of TouchGFX widgets. If you want something to behave differently than the standard implementation, it is possible to achieve this by either subclassing or creating custom containers, which is also the\nrecommended approach."),(0,o.kt)("p",null,"The reason for this recommendation is two-fold:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, you will make it more difficult to upgrade to newer TouchGFX versions, since you must manually merge any changes you did."),(0,o.kt)("li",{parentName:"ul"},"Second, you risk breaking the standard widgets and containers that are dependent on specific behavior.")),(0,o.kt)("p",null,"Therefore, if it is necessary to modify a standard widget/container, we recommend you take a copy of it, rename it and use that instead of directly modifying the source code."),(0,o.kt)("p",null,"That being said, you are free to do whatever you judge is right. If you add the source code for a standard widget into your project, your linker will choose this version instead of the one in the core library. As a result, you have access to modification of the standard widgets by adding the source code to your compilation."))}N.isMDXComponent=!0}}]);