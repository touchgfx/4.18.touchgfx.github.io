(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2695],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),h=l(n),f=r,p=h["".concat(s,".").concat(f)]||h[f]||c[f]||i;return n?o.createElement(p,a(a({ref:t},u),{},{components:n})):o.createElement(p,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var o=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,r.Z)(e.imageSource);return t?o.createElement("div",{class:"figure noshadow"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:i,src:a})),o.createElement("p",null,e.children)):o.createElement("div",{class:"figure"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:i,src:a})),o.createElement("p",null,e.children))}},82985:function(e,t,n){"use strict";var o=n(67294);class r extends o.Component{render(){return o.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=r},35096:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var o=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,o)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},61177:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return v},default:function(){return k}});var o=n(3905),r=n(44035),i=n(82985),a=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&h(e,n,t[n]);return e};const p={id:"video",title:"MJPEG Video"},m=void 0,g={unversionedId:"development/ui-development/touchgfx-engine-features/video",id:"development/ui-development/touchgfx-engine-features/video",isDocsHomePage:!1,title:"MJPEG Video",description:"TouchGFX supports using MJPEG video starting from version 4.18. Video",source:"@site/docs/development/ui-development/touchgfx-engine-features/video.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/video",permalink:"/4.18/docs/development/ui-development/touchgfx-engine-features/video",tags:[],version:"current",frontMatter:{id:"video",title:"MJPEG Video"},sidebar:"docs",previous:{title:"Languages and Characters",permalink:"/4.18/docs/development/ui-development/touchgfx-engine-features/languages-and-characters"},next:{title:"Button",permalink:"/4.18/docs/development/ui-development/ui-components/buttons/button"}},v=[{value:"MJPEG video",id:"mjpeg-video",children:[],level:2},{value:"Using Video with TouchGFX",id:"using-video-with-touchgfx",children:[{value:"Video files in a TouchGFX project",id:"video-files-in-a-touchgfx-project",children:[],level:3},{value:"List of video enabled development kits",id:"list-of-video-enabled-development-kits",children:[],level:3}],level:2},{value:"Creating MJPEG AVI files",id:"creating-mjpeg-avi-files",children:[],level:2},{value:"Decoding Strategies",id:"decoding-strategies",children:[{value:"Direct To Frame Buffer",id:"direct-to-frame-buffer",children:[],level:3},{value:"Dedicated Buffer",id:"dedicated-buffer",children:[],level:3},{value:"Double Buffer",id:"double-buffer",children:[],level:3}],level:2}],b={toc:v};function k(e){var t,n=e,{components:a}=n,h=((e,t)=>{var n={};for(var o in e)u.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=f(f({},b),h),d(t,s({components:a,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"TouchGFX supports using MJPEG video starting from version 4.18. Video\ncan be used to create more alive user interfaces or to show short\ninstructions or user guides."),(0,o.kt)("p",null,"Video is included in the user interface through the new\nVideoWidget. This Widget is available in the TouchGFX Designer and can\nbe added to the user interface as any other widget."),(0,o.kt)(r.Z,{width:"60%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/designer-1.png",mdxType:"Figure"},"Using the Video Widget in TouchGFX Designer"),(0,o.kt)("p",null,"Extra support software is required to decode the video on a STM32\nmicrocontroller. This software is easily included in the project by\nenabling video support in the TouchGFX Generator. With a TouchGFX\nBoard Setup where video is enabled (see list below) it is easy to run\nthe video on the target by pressing Run Target (",(0,o.kt)(i.Z,{mdxType:"Shortcut"},"F6"),") as normal."),(0,o.kt)(r.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/stm32f746-1.png",mdxType:"Figure"},"Using the Video Widget with STM32F746Discovery"),(0,o.kt)("h2",f({},{id:"mjpeg-video"}),"MJPEG video"),(0,o.kt)("p",null,"MJPEG videos consists of a large number of JPEG images (frames) packed\nin a container file (.avi). The JPEG frames cannot be copied directly\nto the framebuffer as they are compressed. The individual frames must\ntherefore be decompressed into RGB format (16 or 24 bit) before they\ncan be shown on the display."),(0,o.kt)("p",null,"This decompression is computationally expensive and lowers the\nperformance considerably compared to using RGB bitmaps."),(0,o.kt)("p",null,"The advantage of the JPEG compression is the much reduced size of the\ndata."),(0,o.kt)("p",null,"The video used in the above screenshots is 240 x 135 pixel. This means\nthat each frame would take up 240 x 135 x 2 bytes = 64.800 bytes. The\n7 seconds long video contains 178 frames. The total size of the video\nstored as bitmap would thus be 178 x 64.800 bytes = 11.534.400\nbytes. The MJPEG AVI file is only 1.242.282 bytes or 10.7 % of the\nbitmaps."),(0,o.kt)("p",null,"This size reduction makes MJPEG video files very usefull for small\nsequences of video."),(0,o.kt)("p",null,"Some STM32 microcontrollers supports hardware accelerated decoding of\nJPEG images (e.g. STM32F769 or STM32H750). This speeds up the decoding\nof JPEG and increases the possible framerate of the video."),(0,o.kt)("p",null,"The decoding of a JPEG frame can easily take more than 16ms. This means\nthat the decoding rate of a MJPEG video is often lower than the normal\nframe rate of the user interface. For some application it is\nacceptable to lower the overall frame rate to the decoding rate. For\nothers it is required to keep the 60 fps frame rate of the user\ninterface even if the video runs at e.g. 20 fps."),(0,o.kt)("p",null,"The above example on STM32F746 uses 18-20 ms for decoding the\nindividual JPEG frames."),(0,o.kt)("h2",f({},{id:"using-video-with-touchgfx"}),"Using Video with TouchGFX"),(0,o.kt)("p",null,"TouchGFX makes it easy to include a video as part of your user\ninterface. You need three things: A VideoWidget, a VideoController,\nand of course your MJPEG video file."),(0,o.kt)("p",null,"The VideoWidget is used in your user interface as all other\nWidgets. The video controller is part of the software that makes up a\nfull TouchGFX environment (HAL, Operating System, drivers, etc.)"),(0,o.kt)(r.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/video-sw-architecture.png",mdxType:"Figure"},"Video Widget and Video Controller"),(0,o.kt)("p",null,"The VideoController consists of software to control the decoding of\nthe MJPEG file and buffer management."),(0,o.kt)("p",null,'The TouchGFX Designer automatically includes a video controller into\nall simulator projects. This makes it very easy to use video in\nsimulator prototypes: Just add a VideoWidget, select a video file, and\npress "Run Simulator" (',(0,o.kt)(i.Z,{mdxType:"Shortcut"},"F5"),")."),(0,o.kt)("p",null,"To use video on hardware you also need a video controller to be part\nof the project. This is already added to some of the TouchGFX Board\nSpecification packages (see list below), but you can also easily add\nvideo support to other projects with the TouchGFX Generator. See the\n",(0,o.kt)("a",f({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-generator#video-decoding"}),"Generator User\nGuide"),"."),(0,o.kt)("p",null,"When you have a video enabled platform it is easy to add and configure\nthe Video Widget in the Designer. The VideoWidget is detailed ",(0,o.kt)("a",f({parentName:"p"},{href:"../ui-components/miscellaneous/video"}),"here"),"."),(0,o.kt)("h3",f({},{id:"video-files-in-a-touchgfx-project"}),"Video files in a TouchGFX project"),(0,o.kt)("p",null,"When you include a video file in TouchGFX Designer it copies the .avi\nfile to the ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/vidoes")," folder. During code generation the video\nis copied to ",(0,o.kt)("inlineCode",{parentName:"p"},"generated/videos/bin")," as a .bin file and to\n",(0,o.kt)("inlineCode",{parentName:"p"},"generated/videos/obj")," as a .o file. The .o and .bin contains the same\ndata, but the .o file is ELF format (which is preferred by some\ncompilers)."),(0,o.kt)("p",null,"The project updaters that are executed when generating code includes\nthe video files in the target project. This means that the video files\nare linked into the executable and are available in the application."),(0,o.kt)("p",null,"The application programmer can add other videos to the ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/videos"),"\nfolder. These will also be included in the project."),(0,o.kt)("p",null,"The file ",(0,o.kt)("inlineCode",{parentName:"p"},"generated/videos/include/videos/VideoDatabase.hpp")," contains\nsymbolic information about the videos compiled into application:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"const uint32_t video_SampleVideo1_240x135_bin_length = 1242282;\n#ifdef SIMULATOR\nextern const uint8_t* video_SampleVideo1_240x135_bin_start;\n#else\nextern const uint8_t video_SampleVideo1_240x135_bin_start[];\n#endif\n")),(0,o.kt)("p",null,"These declarations can be used to assign the video to a VideoWidget in\nuser code. The Designer does this automatically if you select the\nvideo there."),(0,o.kt)("h3",f({},{id:"list-of-video-enabled-development-kits"}),"List of video enabled development kits"),(0,o.kt)("p",null,"These development kits have video enabled by default in TouchGFX Board\nSetup package available in the TouchGFX Designer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"STM32F769Discovery (hardware accelerated decoding)"),(0,o.kt)("li",{parentName:"ul"},"STM32H750BDiscovery (hardware accelerated decoding)"),(0,o.kt)("li",{parentName:"ul"},"STM32F746Discovery (software based decoding)")),(0,o.kt)("h2",f({},{id:"creating-mjpeg-avi-files"}),"Creating MJPEG AVI files"),(0,o.kt)("p",null,"Most videos are not stored in MJPEG AVI files as this is not a common\nvideo format. It is therefore often necessary to convert a video file\nbefore using it in a TouchGFX project."),(0,o.kt)("p",null,"Conversion can easily be done with\n",(0,o.kt)("a",f({parentName:"p"},{href:"https://en.wikipedia.org/wiki/FFmpeg"}),"FFMPEG"),". Windows binaries can\nbe found ",(0,o.kt)("a",f({parentName:"p"},{href:"https://www.gyan.dev/ffmpeg/builds/"}),"here"),"."),(0,o.kt)("p",null,"To convert the video file input.mov to MJPEG used this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"ffmpeg -i input.mov -s 480x272 -vcodec mjpeg -qscale 1 -an output.avi\n")),(0,o.kt)("p",null,"To keep the correct aspect ratio of the video you can specify the height as -1:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"ffmpeg -i input.mov -vf scale=480:-1 -vcodec mjpeg -qscale 1 -an output.avi\n")),(0,o.kt)("p",null,"It is possible to cut out a section of a video:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"ffmpeg -ss 3 -i input.mov -t 3 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi\n")),(0,o.kt)("p",null,"or:"),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"ffmpeg -ss 3 -i input.mov -to 5 -s 480x272 -vcodec mjpeg -qscale 1 -an output_section.avi\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",f({parentName:"tr"},{align:null}),"Option"),(0,o.kt)("th",f({parentName:"tr"},{align:null}),"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",f({parentName:"tr"},{align:null}),"-s"),(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Output video resolution")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",f({parentName:"tr"},{align:null}),"-qscale"),(0,o.kt)("td",f({parentName:"tr"},{align:null}),"quality scale from 1..31 (from good to bad)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",f({parentName:"tr"},{align:null}),"-an"),(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Strip audio")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",f({parentName:"tr"},{align:null}),"-vf"),(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Set filter graph")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",f({parentName:"tr"},{align:null}),"-ss"),(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Start time in seconds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",f({parentName:"tr"},{align:null}),"-t"),(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Duration in seconds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",f({parentName:"tr"},{align:null}),"-to"),(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Stop time in seconds")))),(0,o.kt)("h2",f({},{id:"decoding-strategies"}),"Decoding Strategies"),(0,o.kt)("p",null,"As mentioned above, TouchGFX needs to convert the individual MJPEG\nframes from JPEG to RGB before showing them on the framebuffer. This\ndecoding can be done either on-the-fly when needed or asynchronous by\ndecoding the next frame to a video buffer in advance."),(0,o.kt)("p",null,"The asynchronous decoding is done by second task, not the UI\ntask. This means that the decoding can run in parallel with the UI\ntask's drawing (although not all the time)."),(0,o.kt)("p",null,"TouchGFX has 3 strategies, each with advantages and disadvantages:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",f({parentName:"tr"},{align:null}),"Strategy"),(0,o.kt)("th",f({parentName:"tr"},{align:null}),"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Direct To Frame Buffer"),(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Decode the current video frame directly to the framebuffer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Dedicated Buffer"),(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Decode the next video frame to a video buffer. Copy from the video buffer to the frame buffer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Double Buffer"),(0,o.kt)("td",f({parentName:"tr"},{align:null}),"Decode the next video frame to a second video buffer. Swap video buffer when decoding is done")))),(0,o.kt)("p",null,"The Designer always select the Direct To Frame Buffer strategy for\nsimulator projects. The strategy used on target is configurable by the\nuser in the\n",(0,o.kt)("a",f({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-generator#video-decoding"}),"Generator"),"."),(0,o.kt)("p",null,"The strategies are explained in detail below."),(0,o.kt)("h3",f({},{id:"direct-to-frame-buffer"}),"Direct To Frame Buffer"),(0,o.kt)("p",null,"The Direct To Frame Buffer strategy decodes a JPEG frame during the\nrendering phase on the TouchGFX engine (see\n",(0,o.kt)("a",f({parentName:"p"},{href:"../../../basic-concepts/rendering#render"}),"Rendering"),")"),(0,o.kt)(r.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/direct-decode.png",mdxType:"Figure"},"Decoding directly to the frame buffer"),(0,o.kt)("p",null,"During the Update phase (see\n",(0,o.kt)("a",f({parentName:"p"},{href:"../../../basic-concepts/rendering#update"}),"Update"),') the Video Widget\ndecides if the movie should be advanced to the next frame. During\nRendering, the JPEG frame is decoded line-by-line to a "line\nbuffer". The pixels are then converted to match the frame buffer\nformat and copied to the framebuffer.'),(0,o.kt)("p",null,"This happens for all the parts of the Video Widgets that needs to be\nredrawn. This makes this strategy unsuitable for user interface where\nother UI elements like Buttons are put on top of the video."),(0,o.kt)("p",null,"The advantage of this solution is that only a little extra memory is\nused."),(0,o.kt)("p",null,"The decoding speed of the video affects the effective frame rate of\nthe user interface. Assume as an example that the decoding of one JPEG\nframe takes 30 ms, and that we want to show 20 video frames each\nsecond (20 fps). This is realistic as the total decoding time is: 30\nms x 20/s = 600 ms/s.  The 20 fps corresponds to a new video frame in\nevery third UI frame (of 60 fps). So in every third UI frame we want a\nnew video frame, but as the decoding is part of the rendering phase,\nthe rendering of that frame takes 30 ms plus the rendering of the rest\nof the user interface. Assuming the total rendering is 32 ms, we lost\none frame. In the next frame we are not decoding video, so here the\nrendering is below 16 ms and meets the limit."),(0,o.kt)("p",null,"The result is that we cannot animate other elements of the UI with 60\nfps because the video decoding limits the frame rate."),(0,o.kt)("h3",f({},{id:"dedicated-buffer"}),"Dedicated Buffer"),(0,o.kt)("p",null,"The Dedicated or single buffer decoding strategy decodes a JPEG frame\nto a dedicated RGB buffer first, and then later copies that buffer to\nthe frame buffer."),(0,o.kt)(r.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/single-buf-decode.png",mdxType:"Figure"},"Decoding to a separate buffer"),(0,o.kt)("p",null,"Opposed to the previous strategy the decoding now runs in a separate\ntask, not the normal TouchGFX task. The Video Widget calculates if the\nnew movie frame should be shown in the next user interface frame and\nsignal the decoding task to start decoding the next frame. During this\ndecoding the video buffer cannot be drawn to the frame buffer (it is\npartly updated). In case the user interface needs to redraw the video\nwidget, the user interface task is blocked until the decoding has\nfinished. If the user interface does not need to redraw the video, the\nuser interface can continue as normal."),(0,o.kt)("p",null,"When the video is decoded, the cost of rendering the video to the\nframebuffer is the same as drawing a bitmap. With this strategy it is\nthus not a problem to put buttons or text on top of the video."),(0,o.kt)("p",null,"The disadvantage of this strategy the memory used by the task and the\nvideo buffer."),(0,o.kt)("h3",f({},{id:"double-buffer"}),"Double Buffer"),(0,o.kt)("p",null,"The double buffered decoding strategy has two RGB buffers. The\ndecoding is done into either of these buffers, whereas the rendering\nto the frame buffer happens from the other RGB buffer."),(0,o.kt)(r.Z,{width:"50%",imageSource:"/img/development/ui-development/touchgfx-engine-features/video/double-buf-decode.png",mdxType:"Figure"},"Decoding to two video buffers"),(0,o.kt)("p",null,"The advantage of this strategy is improved frame rate. Both of the\nvideo decoding and the user interface."),(0,o.kt)("p",null,"The decoding of the next frame can start as soon as the user interface\nhas changed buffer. The decoding does not have to wait until the\ncurrent frame is not needed anymore by the rendering."),(0,o.kt)("p",null,"Similarly, the user interface does not have to wait for the decoding\nto finish. It can continue to render the current frame whenever\nneeded. It is thus possible to have user interface with elements\nupdated in every frame, even if the video decoding is only able to\nproduce a new frame every 3 ticks."),(0,o.kt)("p",null,"An obvious disadvantage here is the memory usage which is doubled from\nthe previous strategy."))}k.isMDXComponent=!0}}]);