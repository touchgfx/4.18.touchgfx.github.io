"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2508],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,d=m["".concat(l,".").concat(u)]||m[u]||s[u]||o;return a?n.createElement(d,r(r({ref:t},h),{},{components:a})):n.createElement(d,r({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22425:function(e,t,a){var n=a(67294);class i extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,a){var n=a(67294),i=a(25026);t.Z=function(e){const t=e.noShadow||!1,a=e.width,o=e.height,r=(0,i.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:r,target:"_blank"},n.createElement("img",{width:a,height:o,src:r})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:r,target:"_blank"},n.createElement("img",{width:a,height:o,src:r})),n.createElement("p",null,e.children))}},35096:function(e,t,a){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return i}})},25026:function(e,t,a){a.d(t,{C:function(){return o},Z:function(){return r}});var n=a(11368),i=a(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,i.b)(a))return a;if(n)return t+a;const r=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+r:r}(t,e,a,n)}}function r(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},97033:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return b},default:function(){return k}});var n=a(3905),i=a(44035),o=a(22425),r=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))s.call(t,a)&&m(e,a,t[a]);return e};const d={id:"caching-bitmaps",title:"Caching Bitmaps"},f=void 0,g={unversionedId:"development/ui-development/touchgfx-engine-features/caching-bitmaps",id:"development/ui-development/touchgfx-engine-features/caching-bitmaps",isDocsHomePage:!1,title:"Caching Bitmaps",description:"In this section we will discuss the bitmap cache in TouchGFX. The",source:"@site/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/caching-bitmaps",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps",tags:[],version:"current",frontMatter:{id:"caching-bitmaps",title:"Caching Bitmaps"},sidebar:"docs",previous:{title:"Custom Containers",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/custom-containers"},next:{title:"Custom Widgets",permalink:"/4.18/ko/docs/development/ui-development/touchgfx-engine-features/custom-widgets"}},b=[{value:"Setup the Bitmap Cache",id:"setup-the-bitmap-cache",children:[{value:"Bitmap Cache Configuration",id:"bitmap-cache-configuration",children:[{value:"Enabling Bitmap cache with TouchGFX Generator",id:"enabling-bitmap-cache-with-touchgfx-generator",children:[],level:4}],level:3},{value:"BlockCopy Copies Data from Flash to the Cache",id:"blockcopy-copies-data-from-flash-to-the-cache",children:[],level:3}],level:2},{value:"Cache Operations",id:"cache-operations",children:[],level:2},{value:"Cache Strategies",id:"cache-strategies",children:[{value:"Cache Bitmap on a Screen Basis",id:"cache-bitmap-on-a-screen-basis",children:[],level:3},{value:"Replace the Background Bitmaps in the Cache",id:"replace-the-background-bitmaps-in-the-cache",children:[],level:3}],level:2},{value:"Cache Memory Management",id:"cache-memory-management",children:[],level:2}],y={toc:b};function k(e){var t,a=e,{components:r}=a,m=((e,t)=>{var a={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),m),c(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"In this section we will discuss the bitmap cache in TouchGFX. The\nbitmap cache is a dedicated RAM buffer where bitmaps can be stored (or\ncached) by the application.\nIf a bitmap is cached, TouchGFX will automatically use the RAM cache\nas pixel source when drawing the bitmap."),(0,n.kt)("p",null,"Bitmap caching can be beneficial in many cases. Reading data from RAM\nis often faster than reading from flash (especially when using the\nTexturemapper because it uses non-linear memory access), so caching to\nRAM can increase the performance of your UI. Be aware that caching\nfrom internal flash to external RAM can reduce performance.\nCaching to RAM also allows you to use the flash for other purposes\nlike log files while showing your UI, because bitmaps will be read\nfrom RAM (in some cases writing to a flash requires it to be\nnon-memory mapped).  It can also be useful when you need to modify the\npixels of a bitmap and therefore need the bitmap to be in modifiable\nmemory."),(0,n.kt)("p",null,"For performance reasons, TouchGFX requires all graphics data stored in\nexternal flash to be directly accessible (through a pointer), without\ngoing through a driver layer. This means that TouchGFX cannot render\ndirectly from a non-memory mapped flash (like an SD-card).\nTo overcome this limitation the bitmap cache provides a mechanism for\ncaching some or all of the bitmap data in RAM during power-up.\nBitmap caching is therefore useful when you need to store your bitmaps\non slow external storage like a USB-disk or SD-card."),(0,n.kt)("h2",u({},{id:"setup-the-bitmap-cache"}),"Setup the Bitmap Cache"),(0,n.kt)("p",null,"In order to use the bitmap caching feature, you need to first provide\na bitmap cache configuration to TouchGFX, and secondly (in some cases)\nto provide a hardware specific implementation of the ",(0,n.kt)("inlineCode",{parentName:"p"},"BlockCopy")," function for\nreading data from your external storage."),(0,n.kt)("h3",u({},{id:"bitmap-cache-configuration"}),"Bitmap Cache Configuration"),(0,n.kt)("p",null,"The bitmap cache configuration consists of a pointer to a buffer and\nthe size of the buffer. These two values must be provided to TouchGFX\nin the call to Bitmap::setCache. This call is normally found in the\nFrontendApplication.cpp file:"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    // Place cache start address in SDRAM at address 0xC0008000;\n    uint16_t* const cacheStartAddr = (uint16_t*)0xC0008000;\n    const uint32_t cacheSize = 0x300000; //3 MB, as example\n    Bitmap::setCache(cacheStartAddr, cacheSize);\n}\n")),(0,n.kt)("p",null,"In the above example a 3 MB buffer in external memory is passed to\nTouchGFX as bitmap cache. The address is selected by the application\nprogrammer. In the next example we just declare an array and just pass\nthe address and size of the array. The specific location of the array\nwill depend on your linker script. This method is most often used when\ncreating a (small) bitmap cache in internal RAM:"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\n// Define an array for the bitmap cache\nuint16_t cache[128*1024]; //256 KB cache\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    Bitmap::setCache(cache, sizeof(cache));\n}\n")),(0,n.kt)("h4",u({},{id:"enabling-bitmap-cache-with-touchgfx-generator"}),"Enabling Bitmap cache with TouchGFX Generator"),(0,n.kt)("p",null,"If you are using CubeMX and TouchGFX Generator, enabling and\nconfiguring of the bitmap cache could also be done in TouchGFXHAL.cpp."),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp (extract)"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::initialize()\n{\n    /* Initialize TouchGFX Engine */\n    TouchGFXGeneratedHAL::initialize();\n\n    uint16_t* cacheStartAddr = (uint16_t*)0xC0008000;\n    uint32_t cacheSize = 0x300000; //3 MB, as example\n\n    touchgfx::Bitmap::setCache(cache, sizeof(cache));\n}\n")),(0,n.kt)("p",null,"If you want to reuse the cache, the previous one must be removed before\nsetting the new one, this is done by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx::Bitmap::removeCache()"),".\nYou don't need to remove the cache, if you only set it once in your\napplication."),(0,n.kt)("p",null,"If you need to cache all your bitmaps, of course the size of the cache\nmust be large enough to contain all your bitmap data.\nNote: There is a small amount of memory used for bookkeeping (8 bytes\nx number of bitmaps in the application), so you must allocate slightly\nmore memory than actually needed for the raw pixel data. This amount\ndepends on the number of bitmaps in your application, but a few\nkilobytes of additional memory is usually enough."),(0,n.kt)("h3",u({},{id:"blockcopy-copies-data-from-flash-to-the-cache"}),"BlockCopy Copies Data from Flash to the Cache"),(0,n.kt)("p",null,"When you cache a bitmap, TouchGFX copies the pixels from the original\nlocation to the bitmap cache using the ",(0,n.kt)("inlineCode",{parentName:"p"},"BlockCopy")," function in the\nHAL class."),(0,n.kt)("p",null,"If your bitmaps are stored in normal addressable flash (like internal\nflash or a memory mapped external flash like a QSPI-flash), you do not\nneed to do anything. The built-in implementation works fine."),(0,n.kt)("p",null,"On the other hand, if your bitmaps are stored in flash that is not\naddressable, e.g. a filesystem or non-memory mapped flash, then the\nstandard copy method is not sufficient and you need to provide an\nupdated version that is able to read from your specific flash storage."),(0,n.kt)("p",null,"Read more about this topic ",(0,n.kt)("a",u({parentName:"p"},{href:"../../scenarios/using-non-memory-mapped-flash"}),"Using Non-Memory Mapped flash for storing images"),"\nsection."),(0,n.kt)("h2",u({},{id:"cache-operations"}),"Cache Operations"),(0,n.kt)("p",null,"The bitmap caching operations are all placed in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Bitmap")," class:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},(0,n.kt)("inlineCode",{parentName:"strong"},"Bitmap")," caching method")),(0,n.kt)("th",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"bool Bitmap::cache(BitmapId id)")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"This method caches a bitmap. The bitmap is only cached if enough unused memory is available in the cache. Returns true if the bitmap was cached. Caching an already cached bitmap does not do any work.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"bool Bitmap::cacheReplaceBitmap(BitmapId out, BitmapId in)")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"This method replaces a bitmap (out) in the cache with another bitmap (in). The method will only succeed if the bitmap to be replaced is already cached and if the bitmaps have the same size (in bytes).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"bool Bitmap::cacheRemoveBitmap(BitmapId id)")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"This method removes a bitmap from the cache. The memory used by the bitmap can be used for caching of another bitmap afterwards.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"void Bitmap::clearCache()")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"This method removes all the cached bitmaps from the cache.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"void Bitmap::cacheAll()")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"This method caches all bitmaps. It can not be used if the amount of RAM allocated for the cache (or available) is less than the total size of the bitmaps.")))),(0,n.kt)("h2",u({},{id:"cache-strategies"}),"Cache Strategies"),(0,n.kt)("p",null,"When the amount of RAM that you can allocate for your bitmap cache is\nless than the total size of the bitmaps you can not cache all the\nbitmaps during startup.\nYou can e.g. select to cache only the bitmaps needed for the first\nscreen. When you change between your screens you can remove some or\nall of the cached bitmaps and cache the bitmaps needed for the next\nscreen. This is exemplified in the next section."),(0,n.kt)("h3",u({},{id:"cache-bitmap-on-a-screen-basis"}),"Cache Bitmap on a Screen Basis"),(0,n.kt)("p",null,"Your application user interface is composed of a set of Views. The\nViews probably all use some bitmaps.  A simple strategy for caching is\nto cache all the bitmaps used by a View in the ",(0,n.kt)("inlineCode",{parentName:"p"},"View::setupScreen")," method and clear the cache in the\n",(0,n.kt)("inlineCode",{parentName:"p"},"View::tearDownScreen")," method:"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp (extract)"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::setupScreen()\n{\n    //ensure background is cached\n    Bitmap::cache(BITMAP_SCREEN2_ID);\n    //cache some icons\n    Bitmap::cache(BITMAP_ICON10_ID);\n    Bitmap::cache(BITMAP_ICON11_ID);\n    Bitmap::cache(BITMAP_ICON12_ID);\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    //Remove all bitmaps from the cache\n    Bitmap::clearCache();\n}\n")),(0,n.kt)("p",null,"The memory requirement for the cache is the size of the bitmaps used\nby the screen with the biggest use of bitmaps.\nThe drawback of this method is that if two ",(0,n.kt)("inlineCode",{parentName:"p"},"Views")," both use a\nbitmap, the bitmap will be erased from the cache on exit from the\nfirst ",(0,n.kt)("inlineCode",{parentName:"p"},"View")," and cached again on entry to the second ",(0,n.kt)("inlineCode",{parentName:"p"},"View"),"."),(0,n.kt)("p",null,"The Bitmap::cacheRemoveBitmap can be used to selective uncache bitmaps\nand thus reduce this overhead. The drawback of the cacheRemoveBitmap\nis that the cache memory will be fragmented."),(0,n.kt)("p",null,"Another general drawback of caching is that when you change your UI\n(e.g. adding a button) you may need to update the caching code to\ninclude the new bitmap."),(0,n.kt)("h3",u({},{id:"replace-the-background-bitmaps-in-the-cache"}),"Replace the Background Bitmaps in the Cache"),(0,n.kt)("p",null,'If your application has a set of minor bitmaps (e.g. icons) and some\nlarge full screen "background" bitmaps another strategy can be\nadvised:'),(0,n.kt)("p",null,"Cache all the small bitmaps prior to entering the first screen. A good\nplace to do this is in the FrontendApplication constructor. Also cache\nthe background bitmap for the first screen:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : touchgfx::MVPApplication(),\n      transitionCallback(),\n      frontendHeap(heap),\n      model(m)\n{\n    //cache some icons\n    Bitmap::cache(BITMAP_ICON10_ID);\n    Bitmap::cache(BITMAP_ICON11_ID);\n    Bitmap::cache(BITMAP_ICON12_ID);\n\n    //cache first background\n    Bitmap::cache(BITMAP_SCREEN1_ID);\n    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember ID in a variable\n}\n")),(0,n.kt)("p",null,"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"View::setupScreen")," method replace the\ncached background bitmap with the required bitmap:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"Screen1View::setupScreen()\n{\n    //ensure background is cached\n    Bitmap::cacheReplaceBitmap(backgroundBitmapCached, BITMAP_SCREEN1_ID);\n    backgroundBitmapCached = BITMAP_SCREEN1_ID; //remember new ID of cached bitmap\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::tearDownScreen()\n{\n    //nothing cache related\n}\n")),(0,n.kt)("p",null,"The memory requirement for the cache using this strategy is the size\nof the cached bitmaps and one background bitmap. Compared to the\nprevious method the code is simpler to maintain as the views have less\ncode. The performance is better as we move less bitmaps in and out of\nthe cache."),(0,n.kt)("p",null,"The cacheReplaceBitmap operation is preferable to the\ncacheRemoveBitmap method as it does not fragment the memory."),(0,n.kt)("h2",u({},{id:"cache-memory-management"}),"Cache Memory Management"),(0,n.kt)("p",null,"In order to get the full effect of the bitmap caching it is necessary to understand the internal operations of the cache."),(0,n.kt)("p",null,'The cache is implemented as a stack. New bitmaps are cached after\nthe previously cached bitmaps. Memory used by a bitmap is marked as\n"free" when the bitmap is removed from the cache, but the memory is not\nimmediately useable unless the removed bitmap was on top of the stack.\nIf the bitmap was in "the middle" of the cache a compacting operation\nis performed the next time Bitmap::cache is called to reclaim the\nmemory. This "costly" method can be avoided if you do not call\nBitmap::cache with a "hole" in the cache.'),(0,n.kt)("p",null,"The drawings below illustrates the principles:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Caching allocates on top of the previously allocated bitmaps:")),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-cache.png",noShadow:"true",width:"340",mdxType:"Figure"},"Allocation sequence of bitmaps in memory"),(0,n.kt)("ol",u({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Removal marks the memory unused:")),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache.png",noShadow:"true",width:"340",mdxType:"Figure"},"Unused memory in cache after removal of cached bitmap"),(0,n.kt)("ol",u({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Allocating the next bitmap compacts the cache and allocates on the top:")),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-compact.png",noShadow:"true",width:"340",mdxType:"Figure"},"The cache reclaims unused memory before caching a bitmap"),(0,n.kt)("ol",u({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"When you remove the topmost (last allocated) bitmap, the memory is freed immediately along with any free memory just below it:")),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-operations-uncache-top.png",noShadow:"true",width:"700",mdxType:"Figure"},"Topmost bitmap cache removal"),(0,n.kt)("p",null,"The next cache operation will in this case not involve a compact."),(0,n.kt)("p",null,"This animation shows the whole sequence for this code:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"Bitmap::cache(BITMAP_BITMAP1_ID);\nBitmap::cache(BITMAP_BITMAP2_ID);\nBitmap::cache(BITMAP_BITMAP3_ID);\n...\nBitmap::cacheRemoveBitmap(BITMAP_BITMAP2_ID);\n...\nBitmap::cache(BITMAP_BITMAP4_ID);\n...\nBitmap::cacheRemoveBitmap(BITMAP_BITMAP3_ID);\nBitmap::cacheRemoveBitmap(BITMAP_BITMAP4_ID);\n")),(0,n.kt)(i.Z,{width:"600",imageSource:"/img/development/ui-development/touchgfx-engine-features/caching-bitmaps/cache-bitmap-animation.gif",noShadow:"true",mdxType:"Figure"},"Caching and uncaching bitmaps"))}k.isMDXComponent=!0}}]);