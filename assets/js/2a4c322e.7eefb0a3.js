(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5780],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),h=o,d=f["".concat(l,".").concat(h)]||f[h]||u[h]||i;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class o extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){"use strict";var a=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,r=(0,o.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children))}},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return r}});var a=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},93316:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return g},metadata:function(){return m},toc:function(){return y},default:function(){return T}});var a=n(3905),o=n(44035),i=n(22425),r=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&f(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&f(e,n,t[n]);return e};const d={id:"using-binary-fonts",title:"Binary Fonts"},g=void 0,m={unversionedId:"development/ui-development/touchgfx-engine-features/using-binary-fonts",id:"development/ui-development/touchgfx-engine-features/using-binary-fonts",isDocsHomePage:!1,title:"Binary Fonts",description:"This section describes how to use binary fonts in TouchGFX. The first",source:"@site/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/using-binary-fonts",permalink:"/4.18/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",version:"current",frontMatter:{id:"using-binary-fonts",title:"Binary Fonts"},sidebar:"docs",previous:{title:"Dynamic Bitmaps",permalink:"/4.18/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"},next:{title:"Font Caching",permalink:"/4.18/docs/development/ui-development/touchgfx-engine-features/font-cache"}},y=[{value:"The Font and Text system classes",id:"the-font-and-text-system-classes",children:[]},{value:"Using Binary Fonts",id:"using-binary-fonts",children:[{value:"Configuring the Font converter to generate Binary Fonts",id:"configuring-the-font-converter-to-generate-binary-fonts",children:[]},{value:"Manual Configuration",id:"manual-configuration",children:[]},{value:"Installing the binary font",id:"installing-the-binary-font",children:[]},{value:"Resetting a font",id:"resetting-a-font",children:[]}]}],b={toc:y};function T(e){var t,n=e,{components:r}=n,f=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},b),f),s(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This section describes how to use binary fonts in TouchGFX. The first\nsection contains some in-depth information about the font and text\nsystem in TouchGFX that can be beneficial to understand when working\nwith binary fonts. The second section explains how to use binary\nfonts."),(0,a.kt)("p",null,"Binary fonts can be used as an alternative to the traditional way of\ncompiling and linking font information in to your application (the\n.cpp files in ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/src"),").\nThe main advantages of this approach is to get a smaller application\nbinary and get flexibility in providing different sets of fonts with\nyour device. For example you can pack the Chinese font with devices\ngoing to China, and the Japanese font with devices going there.\nThe drawback of this approach is that the whole binary font needs to\nbe loaded to RAM (or memory-mapped flash) which can be a problem if\nthe font is large."),(0,a.kt)("p",null,"The main advantage of the normal principle of linking fonts into the\napplication is that the application will always automatically contain\nthe updated texts and typographies used in the application. This\nis very easy and safe to use. The disadvantage is that fonts can make\nthe application big."),(0,a.kt)("h2",h({},{id:"the-font-and-text-system-classes"}),"The Font and Text system classes"),(0,a.kt)("p",null,"In the default configuration TouchGFX generates .cpp-files for all\ntexts and fonts used in the application. These files are compiled and\nlinked into the application together with the generated UI and your\napplication code."),(0,a.kt)("p",null,"When you show a text on the UI with e.g. a TextArea, you reference the\ntext with a TextId. This TextId is used by the Widgets to find the\nactual letters in the text. The Widgets will access the texts through\nthe ",(0,a.kt)("em",{parentName:"p"},"touchgfx::Texts")," class ",(0,a.kt)("inlineCode",{parentName:"p"},"framework/include/touchgfx/Texts.hpp"),"."),(0,a.kt)("p",null,"The Text class contains a pointer array with a pointer to a\ntranslation table for each language in the application. A translation\ntable is in principle a collection of all strings used in that\nlanguage:"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",noShadow:"true",width:"420",mdxType:"Figure"},"Mapping texts to specific languages"),(0,a.kt)("p",null,"This table allows TouchGFX to find a given text in the selected language."),(0,a.kt)("p",null,"The tables are regenerated whenever you change a text in TouchGFX\nDesigner and generate your application."),(0,a.kt)("p",null,"Before we can draw on the screen we need to know\nwhich font to use for the text. This mapping between texts and fonts\nis controlled by the TypedTextDatabase class\n(",(0,a.kt)("inlineCode",{parentName:"p"},"generated/texts/include/texts/TypedTextDatabase.hpp"),")."),(0,a.kt)("p",null,"In the texts tab in TouchGFX Designer you can specify a typography,\nwriting order (Left-to-right or Right-to-left), and an alignment for\neach text (Left, Right, Center). The typography, order, and alignment\ncan be different for each translation of the text.\nThis information is compiled into a table specific for each\nlanguage. This makes it easy for TouchGFX to find out what font to use\nfor a given text, how to align it, and how to write it."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.png",noShadow:"true",width:"600",mdxType:"Figure"},"typography information is specific to a language"),(0,a.kt)("p",null,"In the above figure the TypedTextData table has pointers to three\narrays. One for each language in the application. Each of the arrays\nhas 3 elements, one for each text in the system. Each elements\ndescribes a font, a reading order, and the alignment. We see that in\nthis example the texts use the same font in the three languages.\nThe Fonts table has two pointers because there are two fonts in the\napplication."),(0,a.kt)("p",null,"When TouchGFX is about to draw a text on the screen, it\nlooks up the TypedTextData for the given text. This data contains the\nfont index, letter order (LTR/RTL), and the horizontal alignment\n(Left, Right, Center) of the text as specified in the Excel\nsheet. TouchGFX uses the font index in the TypedTextData (F1 or F2) to\nlookup the correct font for the text."),(0,a.kt)("p",null,"All this happens automatically when the fonts are compiled into your\napplication."),(0,a.kt)("h2",h({},{id:"using-binary-fonts"}),"Using Binary Fonts"),(0,a.kt)("p",null,"When an application is using many letters in many different fonts the\nsize of the application can grow substantially."),(0,a.kt)("p",null,"To relieve this problem TouchGFX allows applications to use binary\nfonts. These fonts are not linked into the application but are stored\nseparately from the application as files. These files are loaded and\nprovided to TouchGFX by the application at runtime.\nThe application can e.g. load the font from an external storage like an\nsd-card or maybe download the font from the Internet."),(0,a.kt)("p",null,"When the application has loaded the font, it can ask TouchGFX to\ninstall the Binary Font in the font system:"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.png",noShadow:"true",width:"600",mdxType:"Figure"},"Installing a binary font in the font table"),(0,a.kt)("p",null,"Here the built-in Font2 is replaced by the Binaryfont loaded by the\napplication. The linked-in Font2 is hereafter not used by TouchGFX."),(0,a.kt)("h3",h({},{id:"configuring-the-font-converter-to-generate-binary-fonts"}),"Configuring the Font converter to generate Binary Fonts"),(0,a.kt)("p",null,'The font converter must be configured to generate binary fonts. This is\neasily done in TouchGFX Designer.\nGo to the Config tab, select "Text Configuration", and click "Binary\nfont files":'),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2-4.17.png",mdxType:"Figure"},"Selecting Binary Fonts"),(0,a.kt)("p",null,"When you regenerate the code, TouchGFX will generate binary fonts in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin/")," folder, and empty fonts in the normal files\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/src/")),(0,a.kt)("h3",h({},{id:"manual-configuration"}),"Manual Configuration"),(0,a.kt)("p",null,'If you are not using TouchGFX Designer you can still generate binary\nfonts. Change the option "binary_fonts" to "yes" in the\ntext_configuration section in the ',(0,a.kt)("em",{parentName:"p"},"application.config")," file in your\nproject."),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"application.config"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),'  "text_configuration": {\n    "remap": "yes",\n    "a4": "yes",\n    "binary_translations": "no",\n    "binary_fonts": "yes",\n    "framebuffer_bpp": "16"\n  }\n')),(0,a.kt)("p",null,"When you generate assets the next time, the binary fonts will be in the ",(0,a.kt)("inlineCode",{parentName:"p"},"generated/fonts/bin")," folder."),(0,a.kt)("h3",h({},{id:"installing-the-binary-font"}),"Installing the binary font"),(0,a.kt)("p",null,"Before TouchGFX can use a binary font it must be copied from the file\nor other storage. The font must be made available in addressable\nmemory like RAM or QSPI flash (where it can be accessed through a\npointer)."),(0,a.kt)("p",null,"When the application has loaded the binary font to memory, it can\ninstall the font in TouchGFX. Now TouchGFX will use that font\nand not the compiled font. The binary needs to be installed before\nthe text is used, but it does not need to be done immediately after\nbooting.\nThe ",(0,a.kt)("em",{parentName:"p"},"FrontendApplication::FrontendApplication(Model& m, FrontendHeap&\nheap)")," constructor in ",(0,a.kt)("inlineCode",{parentName:"p"},"FrontApplication.cpp")," can be used to install\nfonts. This constructor is executed before anything is drawn."),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"FrontendApplication.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,19-19,22-22}","{5-5,19-19,22-22}":!0}),'//read the file into this array in internal RAM\nuint8_t fontdata[10000];\n\n//binary font object using the data\nBinaryFont bf;\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    //read the binary font from a file\n    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");\n    if (font)\n    {\n        //read data from the file\n        fread(fontdata, 1, 10000, font);\n        fclose(font);\n\n        //initialize BinaryFont object in bf using placement new\n        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);\n\n        //replace application font \'DEFAULT\' with the binary font\n        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp\n    }\n}\n')),(0,a.kt)("p",null,"The exact code for opening a file and reading data will depend on your\nfile system and operating system.\nThe basic steps are to make the font data available in memory,\ninitialize a BinaryFont object with a pointer to the data, and finally\npass the BinaryFont object to TouchGFX."),(0,a.kt)("p",null,"After the call to ",(0,a.kt)("em",{parentName:"p"},"setFont")," TouchGFX will use the binary font to draw\ntext on the screen."),(0,a.kt)("h3",h({},{id:"resetting-a-font"}),"Resetting a font"),(0,a.kt)("p",null,"Sometimes you want to go back to the original font compiled into\nyour application after using a binary font.\nFor example if you are changing language, and want to use the default\nfont. The ",(0,a.kt)("inlineCode",{parentName:"p"},"resetFont()")," function in TypedTextDatabase will reset the\nfont pointer to the built-in font:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"//reset to original font\nTypedTextDatabase::resetFont(DEFAULT);\n")),(0,a.kt)("p",null,"After this call, the application can reuse the memory occupied by the\nbinary font to allocate a new font or for other purposes."))}T.isMDXComponent=!0}}]);