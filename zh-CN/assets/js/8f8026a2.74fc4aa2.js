"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4610],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(u,o(o({ref:t},h),{},{components:a})):n.createElement(u,o({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},88678:function(e,t,a){var n=a(67294);class r extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,a){var n=a(67294);class r extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,a){var n=a(67294),r=a(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},30588:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return v},default:function(){return w}});var n=a(3905),r=a(37793),i=a(31217),o=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&p(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&p(e,a,t[a]);return e};const u={id:"general-ui-component-performance",title:"General UI Component Performance"},f=void 0,g={unversionedId:"development/ui-development/ui-components/general-ui-component-performance",id:"development/ui-development/ui-components/general-ui-component-performance",isDocsHomePage:!1,title:"General UI Component Performance",description:"This section describes the performance of general TouchGFX rendering operations used by most UI components.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/general-ui-component-performance.mdx",sourceDirName:"development/ui-development/ui-components",slug:"/development/ui-development/ui-components/general-ui-component-performance",permalink:"/4.18/zh-CN/docs/development/ui-development/ui-components/general-ui-component-performance",tags:[],version:"current",frontMatter:{id:"general-ui-component-performance",title:"General UI Component Performance"},sidebar:"docs",previous:{title:"Video",permalink:"/4.18/zh-CN/docs/development/ui-development/ui-components/miscellaneous/video"},next:{title:"Achieving Better Performance with Cacheable Container",permalink:"/4.18/zh-CN/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"}},v=[{value:"Image Drawing",id:"image-drawing",children:[{value:"Hardware support for data copy",id:"hardware-support-for-data-copy",children:[],level:3},{value:"Image format",id:"image-format",children:[],level:3},{value:"Access to the Image data",id:"access-to-the-image-data",children:[],level:3},{value:"Access to the framebuffer",id:"access-to-the-framebuffer",children:[],level:3},{value:"Image resolution",id:"image-resolution",children:[],level:3},{value:"Transparency",id:"transparency",children:[],level:3}],level:2},{value:"MCU Drawing",id:"mcu-drawing",children:[],level:2},{value:"Canvas Widgets",id:"canvas-widgets",children:[],level:2},{value:"Texts",id:"texts",children:[],level:2}],y={toc:v};function w(e){var t,a=e,{components:o}=a,p=((e,t)=>{var a={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),p),s(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This section describes the performance of general TouchGFX rendering operations used by most UI components."),(0,n.kt)("h2",m({},{id:"image-drawing"}),"Image Drawing"),(0,n.kt)("p",null,"Image drawing is one of the most essential drawing operations in TouchGFX, as almost all UI components to some extent rely on drawing one or more images. The ability of your system to draw images in a fast and effective way is therefore often very important. There are a lot of factors that influence the performance of image drawing. However, on almost all hardware setups, TouchGFX image drawing is considered a fast operation compared to other drawing operations."),(0,n.kt)("h3",m({},{id:"hardware-support-for-data-copy"}),"Hardware support for data copy"),(0,n.kt)("p",null,"TouchGFX stores the image data uncompressed in the selected image format (e.g. RGB565, L8, ARGB8888). The advantage of the uncompressed format is that it allows TouchGFX, in most cases, to use the image directly and transfer it unmodified to the framebuffer. If the MCU has a DMA, this can and should be used for the memory copy, as this speeds up the transfer and minimizes the MCU load."),(0,n.kt)("p",null,"One limitation to this approach is if the image format includes an alpha channel. Here a normal DMA transfer cannot be used since the MCU needs to perform pixel blending of the image data with framebuffer pixels. However, if you are using an STM32 with graphics acceleration like Chrom-ART / DMA2D, you can utilize the DMA for these types of images as well. Here the DMA is not only capable of copying data, but actually does a copy and blending operation in one go, thereby improving speed and lowering the MCU load considerably."),(0,n.kt)("h3",m({},{id:"image-format"}),"Image format"),(0,n.kt)("p",null,"The image format has an impact on the image drawing performance as well, depending on the hardware support you have. A rule of thumb is, that the less data you have to transfer, the faster you can do it. So transfering an RGB565 image compared to a similar RGB888 will be faster in most cases, since an RGB565 image is two thirds the size of the equivalent RGB888 image."),(0,n.kt)("h3",m({},{id:"access-to-the-image-data"}),"Access to the Image data"),(0,n.kt)("p",null,"The time needed to access the image data is very important, since this will be accessed each time the image is rendered. The image data can be stored in different hardware locations, with different access times, in a TouchGFX application."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Image data location")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"External Flash")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The advantage of external flash is its low cost and the size, which is often quite large, allowing you to have a lot of images in your application. However, access time varies a lot, but choosing QSPI or alternatives like it, will give you a high throughput, resulting in a significant boost to the image drawing performance.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"External RAM")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"In some cases you might need to cache your images in External RAM. This is often the case when you are forced to use non-memory mapped flash (e.g. NAND, EMMC) which cannot be used directly for image rendering in TouchGFX. In this case the access to the external RAM is essential for the performance of image drawing in your application.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Internal Flash")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"In some cases you can store some or all of your images in internal flash, even though the storage space here is very limited. Access is very fast, so if you have some images that are essential for an animation and performance is an issue (e.g. if it is used by a Texture Mapper) it might be worth trying to store it in internal flash if possible.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Internal RAM")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"In very rare cases, you will render images from the internal RAM. The storage space is very limited but the access time is very fast, so images stored here (using TouchGFX Image Caching) will be rendered very fast.")))),(0,n.kt)("h3",m({},{id:"access-to-the-framebuffer"}),"Access to the framebuffer"),(0,n.kt)("p",null,"Rendering an image will always end up in an update to the framebuffer. If the image includes an alpha channel, you will not only write, but also read pixel data in the framebuffer to perform the actual blending. Therefore, the read/write access time to the RAM you are using for storing the framebuffer is key to have a good image drawing performance."),(0,n.kt)("h3",m({},{id:"image-resolution"}),"Image resolution"),(0,n.kt)("p",null,"Since the data that needs to be transfered is proportional to the resolution of the image, the image resolution naturally has an effect on the image drawing operation."),(0,n.kt)("h3",m({},{id:"transparency"}),"Transparency"),(0,n.kt)("p",null,"The opacity of an image has an effect on the rendering time for an image. An image with alpha will have a longer rendering time than an image without due to the fact that it will have to be blended with the framebuffer. Therefore, a blending operation has to read from the framebuffer, whereas a solid image can simply overwrite data in the framebuffer. This is the case even if you have hardware acceleration. The ratio between rendering solid and semi-transparent images may, however, vary from one setup to another."),(0,n.kt)("h2",m({},{id:"mcu-drawing"}),"MCU Drawing"),(0,n.kt)("p",null,"Some widgets rely on direct framebuffer manipulation. This approach performs one or more calculations for each pixel in the invalidated area, then updates the pixel in the framebuffer. This is a rather slow operation, especially if the calculation for each pixel is complex."),(0,n.kt)("p",null,"The MCU processing power is essential if your MCU drawing is performing a lot of calcuations. Access to the framebuffer (access to either internal or external RAM) will also have an impact since writing (and possibly reading) the framebuffer data is done per pixel in the invalidated area."),(0,n.kt)("h2",m({},{id:"canvas-widgets"}),"Canvas Widgets"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"../touchgfx-engine-features/canvas-widgets"}),"Canvas widgets")," are a special type of TouchGFX widget used for drawing anti-aliased geometric shapes. They are typically quite complex and thus potentially fairly slow to render."),(0,n.kt)("p",null,"The rendering time is linear to the size of the invalidated part of the geometric shape."),(0,n.kt)("p",null,"Canvas widgets requires a memory block to store intermediate calcuation results. The size and performance impact of this is described in the ",(0,n.kt)("a",m({parentName:"p"},{href:"../touchgfx-engine-features/canvas-widgets"}),"canvas widgets section"),"."),(0,n.kt)(r.Z,{mdxType:"Tip"},"Most of the standard TouchGFX canvas widgets, like Circle, have update methods that will only invalidate the changed part of the widget. So if you are updating a Circle for example, use ",(0,n.kt)(i.Z,{mdxType:"InlineCode"},"circle::updateArc(...)"),", which will not invalidate the entire circle but only the changed part. Be sure to use these kind of operations for optimal performance."),(0,n.kt)("h2",m({},{id:"texts"}),"Texts"),(0,n.kt)("p",null,"Text rendering depends on image drawing, as all the used characters are transformed into images as described in the ",(0,n.kt)("a",m({parentName:"p"},{href:"../touchgfx-engine-features/texts-and-fonts"}),"text section"),". The images are in A4 format which is basically a 4 bit alpha value for each of the pixels in the image. If you apply a color to this pattern, you will have an anti-aliased image of a character."),(0,n.kt)("p",null,"Since text rendering is a set of image drawing operations, one for each character, the performance characteristics for image drawing applies to text rendering as well, including performance improvements using hardware acceleration like Chrom-ART / DMA2D."))}w.isMDXComponent=!0}}]);