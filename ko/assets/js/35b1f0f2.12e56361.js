(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7246],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=m(n),u=i,h=d["".concat(p,".").concat(u)]||d[u]||l[u]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class i extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){"use strict";var a=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,o=(0,i.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:r,src:o})),a.createElement("p",null,e.children))}},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return o}});var a=n(11368),i=n(35096);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},56159:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return y},default:function(){return w}});var a=n(3905),i=n(44035),r=n(22425),o=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(m)for(var n of m(t))l.call(t,n)&&d(e,n,t[n]);return e};const h={id:"dynamic-bitmaps",title:"Dynamic Bitmaps"},f=void 0,g={unversionedId:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",id:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",isDocsHomePage:!1,title:"Dynamic Bitmaps",description:"This section explains how to use Dynamic Bitmaps. Recall that standard bitmaps are compiled into the application and therefore must be available at compile time. The bitmaps are converted from e.g. PNG files and stored in an internal format together with size and format information.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/dynamic-bitmaps.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",version:"current",frontMatter:{id:"dynamic-bitmaps",title:"Dynamic Bitmaps"},sidebar:"docs",previous:{title:"Canvas Widgets",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"},next:{title:"Binary Fonts",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"}},y=[{value:"Dynamic Bitmap Configuration",id:"dynamic-bitmap-configuration",children:[]},{value:"Using a Dynamic Bitmap Example",id:"using-a-dynamic-bitmap-example",children:[]},{value:"Dynamic Bitmap Operations",id:"dynamic-bitmap-operations",children:[{value:"Creating a Dynamic Bitmap",id:"creating-a-dynamic-bitmap",children:[]},{value:"Deleting a Dynamic Bitmap",id:"deleting-a-dynamic-bitmap",children:[]},{value:"Get the address of the pixels in a Dynamic Bitmap",id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap",children:[]},{value:"Set the solid area of a Dynamic Bitmap",id:"set-the-solid-area-of-a-dynamic-bitmap",children:[]}]},{value:"Dynamic Bitmap in portrait mode",id:"dynamic-bitmap-in-portrait-mode",children:[]}],b={toc:y};function w(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},b),d),c(t,p({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This section explains how to use Dynamic Bitmaps. Recall that standard bitmaps are compiled into the application and therefore must be available at compile time. The bitmaps are converted from e.g. PNG files and stored in an internal format together with size and format information."),(0,a.kt)("p",null,"It is also possible to create a bitmap in RAM at runtime. This is called a ",(0,a.kt)("em",{parentName:"p"},"dynamic bitmap"),". A dynamic bitmap can be used just as the static bitmaps that are compiled into the application. This means that you can use a dynamic bitmap with e.g. the Image and Button widgets."),(0,a.kt)("h2",u({},{id:"dynamic-bitmap-configuration"}),"Dynamic Bitmap Configuration"),(0,a.kt)("p",null,"When you create a dynamic bitmap the pixel memory is allocated from the bitmap cache. You must therefore configure a bitmap cache before you can create dynamic bitmaps. This is a manual process that cannot be done in the TouchGFX Designer or the Generator."),(0,a.kt)("p",null,"See the article on ",(0,a.kt)("a",u({parentName:"p"},{href:"caching-bitmaps"}),"bitmap caching")," for configuration instructions."),(0,a.kt)("p",null,"It is required to define the maximum number of Dynamic Bitmaps used in your application. This maximum is passed to TouchGFX together with the bitmap cache address and size. Here we configure a bitmap cache with up to ",(0,a.kt)("strong",{parentName:"p"},"4")," dynamic bitmaps. You can do this in any file in your application. If you need to do it only once, the file FrontendApplication.cpp is a good candidate:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,10-10}","{2-2,10-10}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n}\n")),(0,a.kt)("p",null,"If you are using the Windows simulator you must create a bitmap cache here also. On Windows it is easy to declare a big array or use malloc:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{9-10}","{9-10}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n#ifdef SIMULATOR\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    uint16_t* const cacheStartAddr = (uint16_t*)malloc(cacheSize);\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n#else\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize, 4);\n#endif\n}\n")),(0,a.kt)("h2",u({},{id:"using-a-dynamic-bitmap-example"}),"Using a Dynamic Bitmap Example"),(0,a.kt)("p",null,"To use the dynamic bitmap we need a widget to show it. So insert an Image widget in the view (in code or in the Designer):"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{6-6}","{6-6}":!0}),"#include <touchgfx/widgets/Image.hpp>\nusing namespace touchgfx;\nclass TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),(0,a.kt)("p",null,"Using this widget with a dynamic bitmap is a three step process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create Dynamic bitmap in the bitmap cache"),(0,a.kt)("li",{parentName:"ol"},"Clear the memory used by the dynamic bitmap"),(0,a.kt)("li",{parentName:"ol"},"Assign the bitmap to a Widget")),(0,a.kt)("p",null,"Create the dynamic bitmap in setupScreen. Here we use the 16bpp format RGB565. If your framebuffer is 24 bit use RGB888. To create a transparent bitmap, use the format ARGB8888."),(0,a.kt)("p",null,"The address of the pixels in the dynamic bitmap is returned by the dynamicBitmapGetAddress function:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{9-9,14-14}","{9-9,14-14}":!0}),"#include <touchgfx/Bitmap.hpp>\nvoid TemplateView::setupScreen()\n{\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of size 100x150\n    const int width = 100;\n    const int height = 150;\n    bmpId = Bitmap::dynamicBitmapCreate(100, 150, Bitmap::RGB565);\n\n    //set all pixels white\n    if (bmpId != BITMAP_INVALID)\n    {\n       memset(Bitmap::dynamicBitmapGetAddress(bmpId), 0xFF, width*height*2);\n    }\n\n    //Make Image widget show the dynamic bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n")),(0,a.kt)("p",null,"The pixel memory you get from the bitmap cache is not cleared, so you are adviced to clear or overwrite it immediately."),(0,a.kt)("p",null,"If you want to load your image from a file you can replace the call to memset with your loader code. See the article ",(0,a.kt)("a",u({parentName:"p"},{href:"../scenarios/loading-images-at-runtime"}),"Loading Images At Runtime")),(0,a.kt)("h2",u({},{id:"dynamic-bitmap-operations"}),"Dynamic Bitmap Operations"),(0,a.kt)("p",null,"The dynamic bitmap operations are all placed in the ",(0,a.kt)("a",u({parentName:"p"},{href:"../../../api/classes/classtouchgfx_1_1_bitmap"}),"Bitmap")," class."),(0,a.kt)("h3",u({},{id:"creating-a-dynamic-bitmap"}),"Creating a Dynamic Bitmap"),(0,a.kt)("p",null,"The following method creates a dynamic bitmap with the width, height and bitmap format specified. The bitmap is only created if enough unused memory is available. The method returns BITMAP_INVALID if the bitmap was not created."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"static BitmapId Bitmap::dynamicBitmapCreate(const uint16_t width, const uint16_t height, BitmapFormat format, ClutFormat clutFormat)\n")),(0,a.kt)("h3",u({},{id:"deleting-a-dynamic-bitmap"}),"Deleting a Dynamic Bitmap"),(0,a.kt)("p",null,"This method deletes a dynamic bitmap."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"static bool Bitmap::dynamicBitmapDelete(BitmapId id)\n")),(0,a.kt)("h3",u({},{id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap"}),"Get the address of the pixels in a Dynamic Bitmap"),(0,a.kt)("p",null,"The following method returns the address of the dynamic bitmap. This method is used by file loaders to copy image data into the bitmap."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"static uint8_t* dynamicBitmapGetAddress(BitmapId id)\n")),(0,a.kt)("h3",u({},{id:"set-the-solid-area-of-a-dynamic-bitmap"}),"Set the solid area of a Dynamic Bitmap"),(0,a.kt)("p",null,"The following method sets the solid rectangle of a dynamic bitmap."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"static bool dynamicBitmapSetSolidRect(BitmapId id, const Rect& solidRect)\n")),(0,a.kt)("p",null,'Read more about the "solid area" concept in the ',(0,a.kt)("a",u({parentName:"p"},{href:"custom-widgets#solid-area"}),"Custom Widgets")," article."),(0,a.kt)("p",null,"By default the solid area is set to be the whole bitmap for non-transparent formats like RGB565 and RGB888. It is set to empty for transparent formats like ARGB8888."),(0,a.kt)("h2",u({},{id:"dynamic-bitmap-in-portrait-mode"}),"Dynamic Bitmap in portrait mode"),(0,a.kt)("p",null,"TouchGFX can run in portrait mode. This is used in situations where the display is mounted rotated 90 degrees from its native orientation. A little extra care is required when using dynamic bitmaps in this mode."),(0,a.kt)("p",null,"Here is an example project for the STM32F746. It has a display width of 480 pixels and height of 272 pixels. The framebuffer has the same dimensions."),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/designer-portrait.png",noShadow:"true",width:"480",mdxType:"Figure"},"Portrait project"),(0,a.kt)("p",null,"No bitmap has been assigned to the image1 Image widget. We will use it to show a dynamic bitmap."),(0,a.kt)("p",null,"When using portrait mode the coordinate system is rotated 90 degrees counter clockwise. The (0, 0) coordinate is in the upper left corner near the 'D'. The first byte of the framebuffer (which colors the first pixels on the screen), is in the upper right corner."),(0,a.kt)("p",null,"The framebuffer is thus ",(0,a.kt)("em",{parentName:"p"},"not")," rotated when running in portrait. This is also true for dynamic bitmaps.",(0,a.kt)("br",{parentName:"p"}),"\n","But the pixels we want to be shown on first line on the display (as mounted) must be drawn on the left edge in the framebuffer."),(0,a.kt)("p",null,"In the function below, we create a dynamic bitmap and make the upper row green, and the right edge red:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp (extract)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp",metastring:"{13-14,16-21}","{13-14,16-21}":!0}),"void Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    BitmapId bmpId;\n    bmpId = Bitmap::dynamicBitmapCreate(100, 100, Bitmap::RGB565);\n\n    if (bmpId != BITMAP_INVALID)\n    {\n        //set all pixels white\n        uint16_t* const bitmapPixels = (uint16_t*)Bitmap::dynamicBitmapGetAddress(bmpId);\n        memset(bitmapPixels, 0xFF, 100*100*2);\n\n        //first 200 pixels red, => two column on the right on display\n        for (int i = 0; i<200; i++) bitmapPixels[i] = 0xF800;\n\n        //first two pixels in all rows green in bitmap => top two rows on display\n        for (int i = 0; i<100; i++)\n        {\n            bitmapPixels[i*100]     = 0x07E0;\n            bitmapPixels[i*100 + 1] = 0x07E0;\n        }\n    }\n\n    image1.setBitmap(bmpId);\n}\n")),(0,a.kt)("p",null,"The display shows the dynamic bitmap:"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/dynamic-bitmaps/stm32f746-portrait.png",noShadow:"true",width:"272",mdxType:"Figure"},"Portrait project framebuffer content"))}w.isMDXComponent=!0}}]);