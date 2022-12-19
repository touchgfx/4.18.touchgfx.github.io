"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9612],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||s[m]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var i=n(67294);class a extends i.Component{render(){return i.createElement("div",{class:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=a},88678:function(e,t,n){var i=n(67294);class a extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{class:e},i.createElement("div",{class:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var i=n(67294),a=n(88678);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=o},47239:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return B},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return y}});var i=n(3905),a=n(39130),r=n(93054),o=n(22425),l=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&m(e,n,t[n]);return e};const h={id:"loading-images-at-runtime",title:"\u5b9f\u884c\u6642\u306e\u753b\u50cf\u306e\u8aad\u8fbc\u307f"},g=void 0,b={unversionedId:"development/ui-development/scenarios/loading-images-at-runtime",id:"development/ui-development/scenarios/loading-images-at-runtime",title:"\u5b9f\u884c\u6642\u306e\u753b\u50cf\u306e\u8aad\u8fbc\u307f",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f7f\u7528\u3057\u3066\u3001\u5b9f\u884c\u6642\u306b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e00\u90e8\u3092\u30d5\u30a1\u30a4\u30eb\u307e\u305f\u306f\u305d\u306e\u4ed6\u306e\u5165\u529b\u304b\u3089\u8aad\u307f\u53d6\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f7f\u7528\u3057\u3066\u3001\u305f\u3068\u3048\u3070\u3001SD\u30ab\u30fc\u30c9\u304b\u3089\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u3092\u8868\u793a\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/loading-images-at-runtime.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/loading-images-at-runtime",permalink:"/4.18/ja/docs/development/ui-development/scenarios/loading-images-at-runtime",draft:!1,tags:[],version:"current",frontMatter:{id:"loading-images-at-runtime",title:"\u5b9f\u884c\u6642\u306e\u753b\u50cf\u306e\u8aad\u8fbc\u307f"},sidebar:"docs",previous:{title:"\u30ad\u30e3\u30c3\u30b7\u30e5\u53ef\u80fd\u30b3\u30f3\u30c6\u30ca\u306b\u3088\u308b\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a",permalink:"/4.18/ja/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"},next:{title:"L8\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u305f\u30e1\u30e2\u30ea\u6d88\u8cbb\u91cf\u306e\u524a\u6e1b",permalink:"/4.18/ja/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"}},v={},y=[{value:"BMP\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u8fbc\u307f\u4f8b",id:"loading-bmp-file-example",level:2},{value:"BMP\u30ed\u30fc\u30c0",id:"the-bmp-loader",level:3},{value:"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u7528\u306e\u30e1\u30e2\u30ea\u8a2d\u5b9a",id:"configure-memory-for-dynamic-bitmaps",level:2},{value:"JPEG\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u8fbc\u307f",id:"loading-jpeg-files",level:2}],x={toc:y};function B(e){var t,l=e,{components:m}=l,h=((e,t)=>{var n={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&c)for(var i of c(e))t.indexOf(i)<0&&s.call(e,i)&&(n[i]=e[i]);return n})(l,["components"]);return(0,i.kt)("wrapper",(t=f(f({},x),h),d(t,p({components:m,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f7f\u7528\u3057\u3066\u3001\u5b9f\u884c\u6642\u306b\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\uff65\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e00\u90e8\u3092\u30d5\u30a1\u30a4\u30eb\u307e\u305f\u306f\u305d\u306e\u4ed6\u306e\u5165\u529b\u304b\u3089\u8aad\u307f\u53d6\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002 \u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f7f\u7528\u3057\u3066\u3001\u305f\u3068\u3048\u3070\u3001SD\u30ab\u30fc\u30c9\u304b\u3089\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u3092\u8868\u793a\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)(r.Z,{mdxType:"Note"},"\u6700\u521d\u306b\u3001\u300c",(0,i.kt)(a.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7"),"\u300d\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u6a19\u6e96\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u308b\u306e\u3067\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u6642\u306b\u4f7f\u7528\u53ef\u80fd\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3053\u3068\u3092\u601d\u3044\u51fa\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u6a5f\u80fd\u306b\u3088\u308a\u3001\u5b9f\u884c\u6642\u306b\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u753b\u50cf\u3092\u8aad\u307f\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u63a5\u7d9a\u3092\u4ecb\u3057\u3066\u753b\u50cf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",f({},{id:"loading-bmp-file-example"}),"BMP\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u8fbc\u307f\u4f8b"),(0,i.kt)("p",null,"\u6b21\u306b\u3001BMP\u30ed\u30fc\u30c0\u3092\u4f7f\u7528\u3057\u3066Windows BMP\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30d4\u30af\u30bb\u30eb\u3092\u8aad\u307f\u8fbc\u3080\u65b9\u6cd5\u306b\u3064\u3044\u3066\u898b\u3066\u3044\u304d\u307e\u3059\u3002 \u30ed\u30fc\u30c0\u7528\u306e\u30b3\u30fc\u30c9\u306f\u8a18\u4e8b\u306e\u5f8c\u534a\u306b\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u307e\u305a\u753b\u50cf\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30d3\u30e5\u30fc\u306b\u633f\u5165\u3057\u307e\u3059\u3002 \u3053\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cBMP\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"class TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),(0,i.kt)("p",null,"\u753b\u50cf\u306e\u65e5\u4ed8\u3092setupScreen\u306b\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{7-8,13-14}","{7-8,13-14}":!0}),'void TemplateView::setupScreen()\n{\n    FILE* f = fopen("image.jpg", "rb");\n    uint16_t width, height;\n\n    //Get the image dimensions from the BMP file\n    BMPFileLoader::getBMP24Dimensions(f, width, height);\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of same dimension\n    bmpId = Bitmap::dynamicBitmapCreate(width, height, Bitmap::RGB565);\n\n    //Load pixels from BMP file to dynamic bitmap\n    BMPFileLoader::readBMP24File(Bitmap(bmpId), f);\n\n    //Make Image show the loaded bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n')),(0,i.kt)("h3",f({},{id:"the-bmp-loader"}),"BMP\u30ed\u30fc\u30c0"),(0,i.kt)("p",null,"\u6b21\u306b\u3001\u5358\u7d14\u306aBMP\u30d5\u30a1\u30a4\u30eb\uff65\u30ed\u30fc\u30c0\u306e\u30b3\u30fc\u30c9\u3092\u793a\u3057\u307e\u3059\u3002 \u3053\u308c\u306f24bpp\u306eBMP\u30d5\u30a1\u30a4\u30eb\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002  \u304a\u4f7f\u3044\u306e\u30b7\u30b9\u30c6\u30e0\u306b\u5408\u308f\u305b\u3066\u3001\u30d5\u30a1\u30a4\u30eb\uff65\u30b7\u30b9\u30c6\u30e0\u306e\u547c\u3073\u51fa\u3057\u306e\u8abf\u6574\u304c\u5fc5\u8981\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"BMPFileLoader.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/hal/Types.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nusing namespace touchgfx;\n\nclass BMPFileLoader\n{\npublic:\n    typedef void* FileHdl;\n\n    static void getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height);\n    static void readBMP24File(Bitmap bitmap, FileHdl fileHandle);\nprivate:\n    static int readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length);\n    static void seekFile(FileHdl hdl, uint32_t offset);\n};\n")),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"BMPFileLoader.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui/common/BMPFileLoader.hpp>\n#include <platform/driver/lcd/LCD16bpp.hpp>\n#include <touchgfx/Color.hpp>\n\nint BMPFileLoader::readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length)\n{\n    uint32_t r = fread(buffer, 1, length, (FILE*)hdl);\n    if (r != length)\n    {\n        return 1;\n    }\n    return 0;\n}\n\nvoid BMPFileLoader::seekFile(FileHdl hdl, uint32_t offset)\n{\n    fseek((FILE*)hdl, offset, SEEK_SET);\n}\n\nvoid BMPFileLoader::getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n}\n\nvoid BMPFileLoader::readBMP24File(Bitmap bitmap, FileHdl fileHandle)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    const uint32_t offset = data[10] | (data[11] << 8) | (data[12] << 16) | (data[12] << 24);\n    const uint32_t width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    const uint32_t height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n\n    readFile(fileHandle, data, offset - 26); //read rest of header.\n\n    //get dynamic bitmap boundaries\n    const uint32_t buffer_width = bitmap.getWidth();\n    const uint32_t buffer_height = bitmap.getHeight();\n\n    const uint32_t rowpadding = (4 - ((width * 3) % 4)) % 4;\n\n    const Bitmap::BitmapFormat format = bitmap.getFormat();\n    uint8_t* const  buffer8  = Bitmap::dynamicBitmapGetAddress(bitmap.getId());\n    uint16_t* const buffer16 = (uint16_t*)buffer8;\n\n    for (uint32_t y = 0; y < height; y++)\n    {\n        for (uint32_t x = 0; x < width; x++)\n        {\n            if (x % 10 == 0) //read data every 10 pixels = 30 bytes\n            {\n                if (x + 10 <= width) //read 10\n                {\n                    readFile(fileHandle, data, 10 * 3); //10 pixels\n                }\n                else\n                {\n                    readFile(fileHandle, data, (width - x) * 3 + rowpadding); //rest of line\n                }\n            }\n            //insert pixel, if within dynamic bitmap boundaries\n            if (x < buffer_width && ((height - y - 1) < buffer_height))\n            {\n                switch (format)\n                {\n                case Bitmap::RGB565:\n                    buffer16[x + (height - y - 1) * buffer_width] =\n                        LCD16bpp::getNativeColorFromRGB(data[(x % 10) * 3 + 2], data[(x % 10) * 3 + 1], data[(x % 10) * 3]);\n                    break;\n                case Bitmap::RGB888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 3 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        break;\n                    }\n                case Bitmap::ARGB8888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 4 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        buffer8[inx + 3] = 255; //solid\n                        break;\n                    }\n                default:\n                    assert(!"Unsupported bitmap format in BMPFileLoader!");\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u306f\u5b9f\u4f8b\u3092\u793a\u3059\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002 RGB888\u306e\u3082\u3063\u3068\u6700\u9069\u306a\u30ea\u30fc\u30c0\u3067\u306f\u3001\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30e1\u30e2\u30ea\u306b\u76f4\u63a5\u8aad\u307f\u53d6\u308a\u3067\u304d\u307e\u3059\uff08\u884c\u306e\u30d1\u30c7\u30a3\u30f3\u30b0\u3092\u30b9\u30ad\u30c3\u30d7\u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\uff09\u3002 \u4e0a\u8a18\u306e\u30ea\u30fc\u30c0\u306f\u3001BMP\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u4e00\u6642\u7684\u306a\u30d0\u30c3\u30d5\u30a1\u306b10\u30d4\u30af\u30bb\u30eb\u3092\u8aad\u307f\u53d6\u308a\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30d4\u30af\u30bb\u30eb\u306f\u3001\u6b63\u3057\u3044\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5909\u63db\u3055\u308c\u306a\u304c\u3089\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306b\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("h2",f({},{id:"configure-memory-for-dynamic-bitmaps"}),"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u7528\u306e\u30e1\u30e2\u30ea\u8a2d\u5b9a"),(0,i.kt)("p",null,"\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3057\u3066\u4f7f\u7528\u3059\u308b\u524d\u306b\u3001TouchGFX\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u307e\u305a\u3001\u30d0\u30c3\u30d5\u30a1\u3068\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u6700\u5927\u6570\u3092\u3001\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff08\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u7528\u306b\u3082\uff09\u3002"),(0,i.kt)("p",null,"\u6b21\u306b\u793a\u3059STM32F7xx\u306e\u4f8b\u3067\u306f\u3001\u5916\u90e8RAM\u306b\u30d0\u30c3\u30d5\u30a1\u3092\u5272\u308a\u5f53\u3066\u3066\u3044\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u30b5\u30a4\u30ba\u304c320x240\u306e24\u30d3\u30c3\u30c8\u306e\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u3092\u8aad\u307f\u8fbc\u3093\u3067\u8868\u793a\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u5fc5\u8981\u306a\u30e1\u30e2\u30ea\u306f320x240x3 = 230,400\u30d0\u30a4\u30c8\u306b\u306a\u308a\u307e\u3059\u3002 \u3055\u3089\u306b\u30d6\u30c3\u30af\u30ad\u30fc\u30d4\u30f3\u30b0\u7528\u306e\u5c0f\u3055\u3044\u9818\u57df\u3082\u5fc5\u8981\u306a\u306e\u3067\u3001\u30d0\u30c3\u30d5\u30a1\u7528\u306b232,000\u30d0\u30a4\u30c8\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp (extract)"),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,8-8}","{2-2,8-8}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    static uint32_t bmpCache = (uint32_t)(0xC00C0000); // SDRAM\n    Bitmap::setCache((uint16_t*)bmpCache, 232000, 1);\n}\n")),(0,i.kt)("p",null,"\u6700\u5f8c\u306e\u5f15\u6570\u306f\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u306e\u6700\u5927\u6570\u306a\u306e\u3067\u3001\u5404\u81ea\u306e\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u3053\u308c\u3092\u8abf\u6574\u3057\u307e\u3059\u3002 \u591a\u304f\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u3082\u5916\u90e8RAM\u306b\u4fdd\u5b58\u3055\u308c\u308b\u306e\u3067\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u30d3\u30c3\u30c8\u30de\u30c3\u30d7\uff65\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u91cd\u8907\u3059\u308b\u30e1\u30e2\u30ea\u9818\u57df\u306b\u914d\u7f6e\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)(r.Z,{mdxType:"Note"},"\u30e1\u30e2\u30ea\u91cf\u304c\u5341\u5206\u3067\u306a\u3044\u5834\u5408\u3001dynamicBitmapCreate\u304b\u3089\u8fd4\u3055\u308c\u308bBitmapId\u304c\u3001BITMAP_INVALID\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("h2",f({},{id:"loading-jpeg-files"}),"JPEG\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u8fbc\u307f"),(0,i.kt)("p",null,"JPEG\u30d5\u30a1\u30a4\u30eb\uff65\u30ed\u30fc\u30c0\u306e\u4f8b\u306f",(0,i.kt)("a",{target:"_blank",href:n(8727).Z},"\u3053\u3061\u3089"),"\u306b\u3042\u308a\u307e\u3059\u3002\u3053\u3053\u306b\u306f\u3001LibJPEG\u3092\u4f7f\u7528\u3057\u3066JPEG\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u304c\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u4e0a\u8a18\u306eBMPFileLoader\u3068\u540c\u3058\u3088\u3046\u306b\u3001JPEGLoader\u30af\u30e9\u30b9\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002"))}B.isMDXComponent=!0},8727:function(e,t,n){t.Z=n.p+"assets/files/jpeg-file-loader-4ee676d38cdfca7ef2583412712b6bf1.zip"}}]);