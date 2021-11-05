"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6207],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},39130:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(67294),a=r(73727),o=r(11368),i=r(35096),l=r(84487);const s=(0,n.createContext)({collectLink:()=>{}});var c=r(25026),p=r(67023),h=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&b(e,r,t[r]);if(m)for(var r of m(t))f.call(t,r)&&b(e,r,t[r]);return e};var y=function(e){var t,r=e,{isNavLink:h,to:b,href:y,activeClassName:v,isActive:w,"data-noBrokenLinkCheck":x,autoAddBaseUrl:G=!0}=r,N=((e,t)=>{var r={};for(var n in e)g.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:R,baseUrl:B}}=(0,o.Z)(),{withBaseUrl:T}=(0,c.C)(),O=(0,n.useContext)(s),A=b||y,C=(0,i.Z)(A),F=null==A?void 0:A.replace("pathname://","");let j=void 0!==F?(E=F,G&&(e=>e.startsWith("/"))(E)?T(E):E):void 0;var E;j&&C&&(j=(0,p.applyTrailingSlash)(j,{trailingSlash:R,baseUrl:B}));const P=(0,n.useRef)(!1),S=h?a.OL:a.rU,_=l.Z.canUseIntersectionObserver,Z=(0,n.useRef)();(0,n.useEffect)((()=>(!_&&C&&null!=j&&window.docusaurus.prefetch(j),()=>{_&&Z.current&&Z.current.disconnect()})),[Z,j,_,C]);const I=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,W=!j||!C||I;return j&&C&&!I&&!x&&O.collectLink(j),W?n.createElement("a",k(k({href:j},A&&!C&&{target:"_blank",rel:"noopener noreferrer"}),N)):n.createElement(S,k((X=k({},N),d(X,u({onMouseEnter:()=>{P.current||null==j||(window.docusaurus.preload(j),P.current=!0)},innerRef:e=>{var t,r;_&&e&&C&&(t=e,r=()=>{null!=j&&window.docusaurus.prefetch(j)},Z.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.current.unobserve(t),Z.current.disconnect(),r())}))})),Z.current.observe(t))},to:j||""}))),h&&{isActive:w,activeClassName:v}));var X}},35096:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){r.d(t,{C:function(){return o},Z:function(){return i}});var n=r(11368),a=r(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),o="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,o)}},67023:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var o=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(o).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},71954:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return g},contentTitle:function(){return f},metadata:function(){return b},toc:function(){return k},default:function(){return v}});var n=r(3905),a=r(39130),o=r(29415),i=r(44035),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))d.call(t,r)&&u(e,r,t[r]);return e};const g={id:"color-formats",title:"Color Formats"},f=void 0,b={unversionedId:"basic-concepts/color-formats",id:"basic-concepts/color-formats",isDocsHomePage:!1,title:"Color Formats",description:"Colors are what is seen on the pixels of the display. These colors come from values stored in a framebuffer. Traditionally in graphics systems, there is a limited amount of possible colors that can be represented, used and displayed. This applies also to TouchGFX and TouchGFX applications.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/basic-concepts/color-formats.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/color-formats",permalink:"/4.18/ja/docs/basic-concepts/color-formats",tags:[],version:"current",frontMatter:{id:"color-formats",title:"Color Formats"},sidebar:"docs",previous:{title:"Embedded Graphics",permalink:"/4.18/ja/docs/basic-concepts/embedded-graphics"},next:{title:"Framebuffer",permalink:"/4.18/ja/docs/basic-concepts/framebuffer"}},k=[{value:"Color",id:"color",children:[{value:"Grayscale",id:"grayscale",children:[],level:3},{value:"Opacity",id:"opacity",children:[],level:3}],level:2},{value:"Color depth",id:"color-depth",children:[],level:2},{value:"Formats",id:"formats",children:[{value:"Pixel color formats",id:"pixel-color-formats",children:[{value:"RGB888",id:"rgb888",children:[],level:4},{value:"RGB565",id:"rgb565",children:[],level:4},{value:"RGBx2222, xRGB2222, BGRx2222, xBGR2222",id:"rgbx2222-xrgb2222-bgrx2222-xbgr2222",children:[],level:4},{value:"GRAY4, GRAY2, BW",id:"gray4-gray2-bw",children:[],level:4}],level:3},{value:"Image formats",id:"image-formats",children:[],level:3},{value:"Text formats",id:"text-formats",children:[],level:3}],level:2},{value:"Visual quality",id:"visual-quality",children:[{value:"Dithering",id:"dithering",children:[],level:3}],level:2},{value:"Performance",id:"performance",children:[{value:"Alpha blending",id:"alpha-blending",children:[],level:3}],level:2},{value:"Other image formats",id:"other-image-formats",children:[],level:2}],y={toc:k};function v(e){var t,r=e,{components:l}=r,u=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),u),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Colors are what is seen on the pixels of the display. These colors come from values stored in a ",(0,n.kt)("a",m({parentName:"p"},{href:"framebuffer"}),"framebuffer"),". Traditionally in graphics systems, there is a limited amount of possible colors that can be represented, used and displayed. This applies also to TouchGFX and TouchGFX applications."),(0,n.kt)("p",null,"The number of possible pixel colors of an application has an impact on many parts of an application. From the visual appearance of what is seen on the display to the memory consumption imposed by the framebuffer and the overall performance. This section will explain colors in TouchGFX in more detail and describe the color formats available in TouchGFX and highlight pros and cons."),(0,n.kt)("h2",m({},{id:"color"}),"Color"),(0,n.kt)("p",null,"A color in TouchGFX is a triplet of red, green and blue components, known as an RGB color. Each component of the color ranges from 0 to 255. 0 means that the component is off, and 255 means that the component is at its maximum."),(0,n.kt)("p",null,"A completely black color is represented by the RGB color (0,0,0) and a completely white is (255,255,255). Bright green is (0,255,0), a semi bright red (128,0,0), a darkish purple (64,0,64) and so on."),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgb-colors.svg",noShadow:"true",height:"70",mdxType:"Figure"},"Some RGB colors"),(0,n.kt)("h3",m({},{id:"grayscale"}),"Grayscale"),(0,n.kt)("p",null,"For grayscale applications all colors are gray, ranging from black to white and therefore the representation is the gray intensity instead of the RGB value. One can think of grayscale colors as RGB colors where R = G = B."),(0,n.kt)("h3",m({},{id:"opacity"}),"Opacity"),(0,n.kt)("p",null,"In some circumstances we might consider colors to have a component describing the opacity of the color. The opacity ranges from 0 to 255, as the other components of the color. Colors with opacity are referred to as RGBA colors. The A stands for alpha, which is the classic name used for the opacity level."),(0,n.kt)("p",null,"A completely opaque black color here is (0,0,0,255), a somewhat transparent red is (255,0,0,128), and so on."),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgba-colors.svg",noShadow:"true",height:"70",mdxType:"Figure"},"Some RGBA colors atop white and grey"),(0,n.kt)("p",null,"When a color is not completely opaque it needs to be mixed together with the color already present. This mixing of colors is known as alpha blending."),(0,n.kt)("h2",m({},{id:"color-depth"}),"Color depth"),(0,n.kt)("p",null,"Color depth is the number of bits used to describe each color as stored in the framebuffer. We denote this number the bits per pixel, or in short bpp."),(0,n.kt)("p",null,"The more bits we use, the more colors we can describe."),(0,n.kt)("p",null,"A much used color depth is 24 bpp. As each bit can be either on or off, this implies that 2",(0,n.kt)("sup",null,"24")," = 16777216 different colors can be represented."),(0,n.kt)("p",null,"Another, a little less used, color depth is 1 bpp. This color depth applies to black and white applications, and implies that only 2",(0,n.kt)("sup",null,"1")," = 2 different colors can be represented."),(0,n.kt)("p",null,"TouchGFX has built-in support for the following color depths:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"32 bpp - 16777216 colors and corresponding opacity values"),(0,n.kt)("li",{parentName:"ul"},"24 bpp - 16777216 colors"),(0,n.kt)("li",{parentName:"ul"},"16 bpp - 65536 colors"),(0,n.kt)("li",{parentName:"ul"},"6 bpp - 64 colors"),(0,n.kt)("li",{parentName:"ul"},"4 bpp - 16 grayscale colors"),(0,n.kt)("li",{parentName:"ul"},"2 bpp - 4 grayscale colors"),(0,n.kt)("li",{parentName:"ul"},"1 bpp - 2 grayscale colors")),(0,n.kt)("p",null,"A note on color component ranges. When working with less than 24 bpp color depth, each of the red, green and blue components does not directly range from 0 to 255. Instead such a component, say red in 16 bpp, ranges 0 to 31. We will think of the value 31 as representing the most red we can represent in 16 bpp, i.e. 255 in 24 bpp. One way of thinking of this is that colors of 16 bpp depth can only represent a subset of the colors possible in 24 bpp."),(0,n.kt)("h2",m({},{id:"formats"}),"Formats"),(0,n.kt)("p",null,"Having determined the amount of bits needed to represent colors, we investigate the contents of the bits in more detail. A color will have some bits describing the red component, some the green and some the blue."),(0,n.kt)("h3",m({},{id:"pixel-color-formats"}),"Pixel color formats"),(0,n.kt)("p",null,"Dependent on the color depth of the application, some particular color formats will be available."),(0,n.kt)("h4",m({},{id:"rgb888"}),"RGB888"),(0,n.kt)("p",null,"In TouchGFX, a color of 24 bpp color depth will have the color format RGB888. This means that 8 bits are used for each of the color components red, green and blue."),(0,n.kt)("p",null,"Representing such a color, say bright purple rgb(255,0,255), in code is done by assembling the components into a color value"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"uint32_t brightPurpleRGB888 = 255 << 16 | 0 << 8 | 255 << 0;\n")),(0,n.kt)("h4",m({},{id:"rgb565"}),"RGB565"),(0,n.kt)("p",null,"For 16 bpp colors, TouchGFX uses the color format RGB565. That is 5 bits for red, 6 bits for green, 5 bits for blue. As we have 5 bits for red, fully lit is 31, and a bright red in code is"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"uint16_t brightPurpleRGB565 = 31 << 11 | 0 << 5 | 0 << 0;\n")),(0,n.kt)("h4",m({},{id:"rgbx2222-xrgb2222-bgrx2222-xbgr2222"}),"RGBx2222, xRGB2222, BGRx2222, xBGR2222"),(0,n.kt)("p",null,"For 6 bpp colors, TouchGFX supports 4 different formats, RGBx2222, xRGB2222, BGRx2222, xBGR222. 6 bit colors are stored as bytes and this is the reason for having the x in the forementioned formats. The color is padded with 2 bits, to fit into a byte. The reason for having both RGB and BGR is that some displays need this and we do not want to convert pixels before sending them to the display. Representing a bright yellow in RGBx2222 in code is"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"uint8_t brightYellowRGBx2222 = 3 << 6 | 3 << 4 | 0 << 2;\n")),(0,n.kt)("h4",m({},{id:"gray4-gray2-bw"}),"GRAY4, GRAY2, BW"),(0,n.kt)("p",null,"For each of the grayscale color depths TouchGFX supports one corresponding color format. For 4 bpp the color format is denoted GRAY4, for 2 bpp it is GRAY2 and for 1 bpp it is denoted BW for black and white. In 4 bpp a completely white color is"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"uint8_t whiteGRAY4 = 15;\n")),(0,n.kt)("p",null,"TouchGFX includes a helper function that will return the correct representation of a color in the correct color format."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/Color.hpp>\n...\naColor = Color::getColorFromRGB(255,0,128);\n")),(0,n.kt)("h3",m({},{id:"image-formats"}),"Image formats"),(0,n.kt)("p",null,"Images are an important part of most UI applications and images are filled with colors. In TouchGFX images are stored in memory and are filled with colors of a specific format. In many cases images are using one of the ",(0,n.kt)("a",m({parentName:"p"},{href:"#pixel-color-formats"}),"supported pixel color formats"),", but other image formats are also available. A pixel in an image of a particular image color format will be converted into the appropriate pixel format before being drawn"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Image Color format"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ARGB8888"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"32 bits, 8 bits per component")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8 bits indexed format, ARGB8888 palette")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"RGB888"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"24 bits, 8 bits per component.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"L8_RGB888"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8 bits indexed format, RGB888 palette")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"RGB666"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"24 bits, 6 bits per component")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"RGB565"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"16 bits, 5 bits red, 6 bits green, 5 bits blue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"L8_RGB565"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8 bits indexed format, RGB565 palette")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ARGB2222"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ABGR2222"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"RGBA2222"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"BGRA2222"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"GRAY4"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4 bits grayscale")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"GRAY2"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2 bits grayscale")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"BW"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"1 bit grayscale")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"BW_RLE"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"1 bit grayscale run-length encoded")))),(0,n.kt)("p",null,"Some of these image formats, the L8 ones, are representing the image in question by a lookup table of colors (known as a CLUT) and indices into this table. The maximum number of possible colors in such an L8 image is 2",(0,n.kt)("sup",null,"8")," = 256. The L8 formats take up less space than their non-L8 counterparts, as an example a 100x100 image with 200 different colors, takes up 100x100x32 bits = 40000 bytes when stored in the ARGB8888 format, and only 100x100x8 bits + 200x32 bits = 10800 bytes when stored in the L8_ARGB8888 format."),(0,n.kt)("p",null,"The image format BW_RLE stores the colors as consecutive runs of black and white instead of storing single pixel colors. This can in many cases also be more space efficient."),(0,n.kt)("p",null,"The rest of the formats are the same as the pixel color formats above."),(0,n.kt)("h3",m({},{id:"text-formats"}),"Text formats"),(0,n.kt)("p",null,"Texts, or more accurately glyphs, are also stored in memory in a specific color format. The available text color formats in TouchGFX are"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Text Color format"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A8"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8 bits, opacity only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A4"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"4 bits, opacity only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A2"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2 bits, opacity only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A1"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"1 bits, opacity only")))),(0,n.kt)("p",null,"Glyph formats are comparable to small images, where each color entry holds the level of opacity of each pixel. This enables applying the actual color, the red, green and blue components, at a later time, and enables drawing for instance the stored glyph 'A' in both a blue version and a red version."),(0,n.kt)("p",null,"The more bits used for each glyph the smoother and nicer it will typically appear."),(0,n.kt)("h2",m({},{id:"visual-quality"}),"Visual quality"),(0,n.kt)("p",null,"When doing embedded graphics we want the highest visual quality, but at the same time we need to look at the amount of memory consumed."),(0,n.kt)("p",null,"Therefore it is many times desirable to go for an RGB565 color format instead of the richer RGB888 and in general we should go for the color format that provides us the most visual quality, while respecting our memory requirements."),(0,n.kt)("h3",m({},{id:"dithering"}),"Dithering"),(0,n.kt)("p",null,"TouchGFX employs what is known as dithering to improve the visual quality of images when representing these in different color formats."),(0,n.kt)("p",null,"Dithering is a well known technique for making images appear to have more colors than what is actually present. This is done by adding a bit of noise to the colors of the image."),(0,n.kt)("p",null,"One example - when converting an RGB888 image to an RGB565 image, instead of just chopping of the lower bits of each color component, the conversion process adds some noise to each of the resulting colors, the result being that the converted image looks richer and similar to the RGB888 original."),(0,n.kt)("p",null,"Explaining by images instead of words, we have an original RGB888 image, and a number of converted images. The converted images have the formats RGB565 with and without dithering, xRGB2222 with and without dithering, GRAY4 with and without dithering."),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgb888.png",noShadow:"true",width:"480",mdxType:"Figure"},"Original RGB888 image"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/rgb565.png",noShadow:"true",width:"480",mdxType:"Figure"},"Converted RGB565 images with and without dithering"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/xrgb2222.png",noShadow:"true",width:"480",mdxType:"Figure"},"Converted xRGB2222 images with and without dithering"),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/gray4.png",noShadow:"true",width:"480",mdxType:"Figure"},"Converted GRAY4 images with and without dithering"),(0,n.kt)("p",null,"As can be seen dithering improves the perceived quality of images quite a bit. When looking closely at the RGB565 with and without dithering, it can be seen that the dithered version looks almost exactly like the original whereas the undithered one has some areas where color banding is apparent. This examplifies that in many cases 16 bit colors is more than enough to do great looking graphics."),(0,n.kt)("p",null,"When your graphics assets has big gradients, you might experience some color banding even in dithered images. Here are two examples. A bluish gradient ranging from RGB888 (64,190,222) to black and the converted RGB565 image with and without dithering."),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/bluish.png",noShadow:"true",width:"800",mdxType:"Figure"},"Original RGB888 and converted RGB565 images with and without dithering"),(0,n.kt)("p",null,"And another red gradient ranging from (255,0,0) to black."),(0,n.kt)(i.Z,{imageSource:"/img/basic-concepts/color-formats/red.png",noShadow:"true",width:"800",mdxType:"Figure"},"Original RGB888 and converted RGB565 images with and without dithering"),(0,n.kt)("p",null,"Looking closely, it can be seen that color banding is present in both the dithered and the undithered RGB565 versions. The red image has the most noticeable bands."),(0,n.kt)("p",null,"Always pay close attention to your resulting images and color formats and if needed alter your original images or choose another color format."),(0,n.kt)("h2",m({},{id:"performance"}),"Performance"),(0,n.kt)("p",null,'All the image formats discussed are optimized for "easiness" of drawing. This means that the images can more or less be copied to the framebuffer without much conversion taking place.'),(0,n.kt)("p",null,"This is intentional and is one of the reasons TouchGFX can achieve fluent graphics on microcontrollers."),(0,n.kt)("p",null,"When designing a UI with TouchGFX one uses .png images and at compile time each of these images are converted into one of the efficient image formats detailed above."),(0,n.kt)("h3",m({},{id:"alpha-blending"}),"Alpha blending"),(0,n.kt)("p",null,"At runtime the copying of image data is done either by a regular CPU copy operation or by using features of the MCU. If the image includes pixels that are not completely transparent or opaque, the pixels need to be alpha blended onto the background. In some STM32 MCUs this blending is supported by the hardware."),(0,n.kt)("h2",m({},{id:"other-image-formats"}),"Other image formats"),(0,n.kt)("p",null,"If you need to support other image formats at runtime, for example compressed image formats, such as .jpg or .png you can utilize the support of TouchGFX for ",(0,n.kt)("a",m({parentName:"p"},{href:"../development/ui-development/touchgfx-engine-features/dynamic-bitmaps"}),"dynamic bitmaps.")),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},"Wikipedia article on ",(0,n.kt)(a.Z,{to:"https://en.wikipedia.org/wiki/Color_depth",mdxType:"Link"},"color depth"),"."))}v.isMDXComponent=!0}}]);