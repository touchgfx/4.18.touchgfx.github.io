"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8960],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=h(n),u=r,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var h=2;h<i;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,s=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:s,target:"_blank"},a.createElement("img",{width:n,height:i,src:s})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:s,target:"_blank"},a.createElement("img",{width:n,height:i,src:s})),a.createElement("p",null,e.children))}},35096:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return s}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+s:s}(t,e,n,a)}}function s(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},22588:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return b},default:function(){return v}});var a=n(3905),r=n(44035),i=n(22425),s=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(h)for(var n of h(t))c.call(t,n)&&p(e,n,t[n]);return e};const f={id:"rendering",title:"Main Loop"},m=void 0,g={unversionedId:"basic-concepts/rendering",id:"basic-concepts/rendering",isDocsHomePage:!1,title:"Main Loop",description:"In this section you will learn more about the workings of the graphics engine in TouchGFX and in particular the main loop. Recall that the main task for the graphics engine is to render the graphics (the ui model) of your application in to the framebuffer. This process happens over and over again to produce new frames on the display.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/basic-concepts/rendering.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/rendering",permalink:"/4.18/zh-CN/docs/basic-concepts/rendering",tags:[],version:"current",frontMatter:{id:"rendering",title:"Main Loop"},sidebar:"docs",previous:{title:"Graphics Engine",permalink:"/4.18/zh-CN/docs/basic-concepts/graphics-engine"},next:{title:"Performance",permalink:"/4.18/zh-CN/docs/basic-concepts/performance"}},b=[{value:"Collect",id:"collect",children:[],level:2},{value:"Update",id:"update",children:[{value:"Time based updates",id:"time-based-updates",children:[],level:3},{value:"Requesting a redraw",id:"requesting-a-redraw",children:[],level:3}],level:2},{value:"Render",id:"render",children:[],level:2},{value:"Wait",id:"wait",children:[],level:2},{value:"Handling the framebuffers",id:"handling-the-framebuffers",children:[{value:"Two framebuffers",id:"two-framebuffers",children:[],level:3},{value:"One framebuffer",id:"one-framebuffer",children:[],level:3}],level:2}],w={toc:b};function v(e){var t,n=e,{components:s}=n,p=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&h)for(var a of h(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},w),p),o(t,l({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"In this section you will learn more about the workings of the graphics engine in TouchGFX and in particular the main loop. Recall that the main task for the graphics engine is to render the graphics (the ui model) of your application in to the framebuffer. This process happens over and over again to produce new frames on the display."),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle.png",noShadow:"true",width:320,mdxType:"Figure"}),(0,a.kt)("p",null,"The graphics engine ",(0,a.kt)("em",{parentName:"p"},"collects")," external events like display touches or button presses. These events are filtered and forwarded to the application. The application can use these events to update the ui model. \u5982 by changing a button to its pressed state when the user touches the screen over the button, and later changing the button back to the released state when the user does not touch the screen anymore."),(0,a.kt)("p",null,"Finally the graphics engine renders the updated model to the framebuffer. This process loops forever."),(0,a.kt)("p",null,"After rendering a frame, the framebuffer is transferred to the display, where the user can see the graphics. The transfer to the display must be synchronized with the display to avoid disturbing glitches on the display. For some displays the transfers must happen regularly with a minimum time inverval. For other displays the transfer must happen when a signal is sent from the display."),(0,a.kt)("p",null,'The graphics engine implements this synchronisation by waiting for a "go" signal from the hardware abstraction layer. Read more about the hardware abstraction layer ',(0,a.kt)("a",u({parentName:"p"},{href:"../development/touchgfx-hal-development/touchgfx-al-development-introduction"}),"here")),(0,a.kt)("p",null,"In pseudo code the main loop inside the TouchGFX graphics engine looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"while(true) {\n    collect();    // Collect events from outside\n    update();     // Update the application ui model\n    render();     // Render new updated graphics to the framebuffer\n    wait();       // Wait for 'go' from display\n}\n")),(0,a.kt)("p",null,"The code is more involved in the real implementation, but the pseudo code above helps in understanding the main parts of the engine."),(0,a.kt)("p",null,"We will discuss these four stages in more detail below."),(0,a.kt)("h2",u({},{id:"collect"}),"Collect"),(0,a.kt)("p",null,"In this phase the graphics engine collects events from the outside environment. These events are typically touch events and buttons."),(0,a.kt)("p",null,"TouchGFX samples and propagates events to the application. The raw touch events are converted into more specific touch events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Click:")," The user pressed or released his finger from the display"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Drag:")," The user moved his finger on the display (while touching the display)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Gestures:")," The user moved his finger fast in a direction and then released. This is called a ",(0,a.kt)("em",{parentName:"li"},"swipe")," and is recognized by the graphics engine.")),(0,a.kt)("p",null,"The events are forwarded to the ui elements (e.g. widgets) that are currently active."),(0,a.kt)("p",null,"The engine also forwards a ",(0,a.kt)("em",{parentName:"p"},"tick")," event. This event represents the new frame (or the step in time), and is always send, also if there was no other external input. This event is used by applications to drive animations, or other timebased actions like changing to a pause screen after a specific time has elapsed."),(0,a.kt)("h2",u({},{id:"update"}),"Update"),(0,a.kt)("p",null,"Here the graphics engine works together with the application to update the ui to reflect the collected events. The graphics engine knows which Screen is currently active and passes events to this object."),(0,a.kt)("p",null,"The basic principle is that the engine informs the application (i.e. the Screen and Widget objects in the ui model) about the events. In response, the application requests specific parts of the display to be redrawn. The application does not draw directly as response to the events, it changes the properties of Widgets and request redraws."),(0,a.kt)("p",null,"If for example a Click event occurs, the graphics engine searches the scene model of the Screen object to find the Widget that should receive the event. Some Widgets like Image and TextArea do not wish to receive Click events. They further have an empty event handler, so nothing happens."),(0,a.kt)("p",null,"Other Widgets like Button reacts to a Click event (pressed or released). The Button widget changes its state to show another image when pressed, and changes the state back again when the touch is released again."),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/button-on-image.png",noShadow:"true",width:480,mdxType:"Figure"},"Image widget in the background with a Button widget in front"),(0,a.kt)("p",null,"When a Widget like the Button changes its state, it must also be redrawn in the framebuffer. The Widget is responsible for communicating this back to the graphics engine as response to the event. The graphics engine does not itself redraw any Widgets based on the collected events. The Widgets keep track of their own internal state (for a Button, what image to draw), and instruct the graphics engine to redraw the part (a rectangle) of the display that is covered by the Widget."),(0,a.kt)("p",null,"The application itself can also react to the events. One of two ways are common:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Configure an ",(0,a.kt)("a",u({parentName:"strong"},{href:"../development/ui-development/designer-user-guide/interactions-view"}),"interaction")," for a Widget in TouchGFX Designer")," For example, we can configure an interaction to make another Widget visible when the Button is pressed. This interaction is executed after the Button has changed its state and requested a redraw of itself from the graphics engine. If you use the interaction to show another (invisible) Widget, the application should also request a redraw from the graphics engine."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"React to events on the Screen")," It is also possible to react to events in the Screen itself. The event handler are virtual functions on the Screen class. These functions can be reimplemented in the Screens in the application. This can e.g. be used to perform an action whenever the user touches the screen no matter where if the touch is on a Widget.")),(0,a.kt)("p",null,"The Screen class has the following event handlers. These are called by the graphics engine when the corresponding external event has been collected:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"framework/include/touchgfx/Screen.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"\nvirtual void handleClickEvent(const ClickEvent& evt);\n\nvirtual void handleDragEvent(const DragEvent& evt);\n\nvirtual void handleGestureEvent(const GestureEvent& evt);\n\nvirtual void handleTickEvent();\n\nvirtual void handleKeyEvent(uint8_t key);\n")),(0,a.kt)("p",null,"Any C++ code can be inserted in these event handlers. Typically applications update the state of some Widgets and/or call some application specific functions (business logic)."),(0,a.kt)("h3",u({},{id:"time-based-updates"}),"Time based updates"),(0,a.kt)("p",null,"The handleTickEvent event handler is called in every frame. This allows the application to perform time based updates of the user interface. An example could be to fade a Widget away after 10 seconds. Assuming that we have 60 frames in a second, the code could look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void handleTickEvent() {\n  tickCounter += 1;\n  if (tickCounter == 600) {\n    myWidget.startFadeAnimation(0, 20); // Fade to 0 = invisible in 20 frames\n  }\n}\n")),(0,a.kt)("p",null,"The graphics engine also calls an event handler on the Model class. This event handler is typically used to perform repeated actions like checking message queues or sampling GPIO:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void Model::tick() {\n  bool b = sampleGPIO_Input1(); // Sample polled IO\n  if (b) {\n    ...\n  }\n}\n")),(0,a.kt)("h3",u({},{id:"requesting-a-redraw"}),"Requesting a redraw"),(0,a.kt)("p",null,"As we discussed above with the Button example; the Widgets are responsible for requesting a redraw when their state changes. The mechanism behind this is called an ",(0,a.kt)("em",{parentName:"p"},"invalidated area"),"."),(0,a.kt)("p",null,"When the Button changes state (e.g. from released to pressed) and needs a redraw, the area covered by the Button Widget is an invalidated area. The graphics engine keeps a list of these invalidated areas requested for the frame. All the collected events (touch, button, tick) may result in one or more invalidated areas, so there can be many invalidated areas in every frame."),(0,a.kt)("p",null,"The event handlers on the Screen class can also request a redraw of an area. Here we change the color of a Box widget, box1, in frame 10 and request a redraw by calling the ",(0,a.kt)("em",{parentName:"p"},"invalidate")," method on the Box:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"void handleTickEvent() {\n  tickCounter += 1;\n  if (tickCounter == 10) {\n    box1.setColor(Color::getColorFromRGB(0xFF, 0x00, 0x00)); // Set color to red\n    box1.invalidate();                                            // Request redraw\n  }\n}\n")),(0,a.kt)("p",null,"In this example the graphics engine will call the ",(0,a.kt)("em",{parentName:"p"},"handleTickEvent")," handler in every frame. In the 10th frame, the application code requests a redraw of the area covered by ",(0,a.kt)("em",{parentName:"p"},"box1"),". As a response to this the graphics engine will redraw that area in the framebuffer using the color saved in the ",(0,a.kt)("em",{parentName:"p"},"box1")," widget."),(0,a.kt)("p",null,"In the user interface below we have a Button Widget and a Box Widget on top of a background image. If we insert an interaction on the Button to change the color of the Box when the Button is clicked we get two invalidated areas (indicated with red) when the user clicks the Button:"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/button-and-box.png",noShadow:"true",width:480,mdxType:"Figure"},"Two invalidated areas"),(0,a.kt)("p",null,"The area of the Box is invalidated to get the new color drawn in the framebuffer. The Button also invalidates itself to get the released state drawn again."),(0,a.kt)("h2",u({},{id:"render"}),"Render"),(0,a.kt)("p",null,"As we just discussed, the result of the update phase is a list of areas to redraw, the invalidated areas. The task for the render phase is basically to run through this list and draw the Widgets covering these areas into the framebuffer."),(0,a.kt)("p",null,"This phase is handled automatically by the graphics engine. The application has defined the scene model (the Widgets in the ui) and invalidated some area. The rest is handled by the engine."),(0,a.kt)("p",null,"The graphics engine handles the invalidated areas one-by-one. For each area the engine scans the scene model and collects a list of the widgets that is covered by the area (partly or in whole)."),(0,a.kt)("p",null,"Given this list of Widgets the graphics engine calls the draw method on the Widgets. Starting with the widget in the background and ending with the foremost Widget."),(0,a.kt)("p",null,"The Widget's draw methods use the state of the Widget, e.g. the color, when drawing to the framebuffer. Any information that is needed to draw the Widget must be saved to the Widget during the update phase. Otherwise this information is not available in the rendering phase."),(0,a.kt)("h2",u({},{id:"wait"}),"Wait"),(0,a.kt)("p",null,"The TouchGFX graphics engine waits for a signal before updating and rendering the next frame. There are two reasons for waiting between the frames instead of just continuously rendering frames as fast as possible:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The rendering is synchronized with the display. As mentioned above some displays requires that the framebuffer is transmitted repeatedly. While this transmission is ongoing, it is not adviseable to render arbitrarily to the framebuffer. The graphics engine therefore waits for a short time after the transmission is started before starting the rendering. Other displays send a signal to the microcontroller when the framebuffer should be transmitted. The graphics engine waits for that signal.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Frames are rendered at a fixed rate. It is often beneficial for the application that frames are rendered at a fixed rate, as this makes it easier to create animations that lasts a specific time. For example, if you have a 60 Hz display, a two seconds animation should be programmed to complete in 120 frames."))),(0,a.kt)("p",null,"The time where the graphics engine is waiting is typically used by other lower priority processes in the application. In these cases the time is not wasted, as the lower priority processes should run at some point in time anyway."),(0,a.kt)("h2",u({},{id:"handling-the-framebuffers"}),"Handling the framebuffers"),(0,a.kt)("p",null,"Recall from the discussion previously that the graphics engine synchronizes with the display before the framebuffer is updated. After the rendering to the framebuffer the engine also needs to make sure that the display shows the updated framebuffer."),(0,a.kt)("h3",u({},{id:"two-framebuffers"}),"Two framebuffers"),(0,a.kt)("p",null,"In the simplest setup we have two framebuffers available. The graphics engine alternates between the two framebuffers. While drawing a frame into a framebuffer, the other framebuffer is transferred to (and shown on) the display."),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",noShadow:"true",mdxType:"Figure"},"Double framebuffers"),(0,a.kt)("p",null,"In this drawing we assume a parallel RGB display connected to the LTDC controller. This means that a framebuffer must be transmitted to the display in every frame. As we have two framebuffers the graphics engine can draw into one framebuffer while the other framebuffer is being transmitted. This scheme works very well and is preferred if possible."),(0,a.kt)("p",null,"As the graphics engine is drawing in every frame we also transmit a new framebuffer in all frames in the above drawing."),(0,a.kt)("p",null,"There will often be frames where the application is not updating anything. This implies that nothing is rendered. The same framebuffer is therefore transmitted again in the succeeding frame."),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-no-update.png",noShadow:"true",mdxType:"Figure"},"No update in frame 2"),(0,a.kt)("p",null,"The application is not drawing anything in frame 2, so the graphics engine retransmits framebuffer 2 again in frame 3."),(0,a.kt)("p",null,"The typical parallel RGB display has a refresh rate around 60 Hz. This update frequence must be maintained by the microcontroller. This update frequency means that we have 16 ms to render a new frame before the transmit begins again. In some cases the time to render a new frame is more than 16 ms. In this case the graphics engine just retransmit the same frame again (as before):"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",noShadow:"true",mdxType:"Figure"},"Long render time"),(0,a.kt)("p",null,"The rendering of frame 1 takes more than 16 ms, so the frame 0 previously rendered to framebuffer 1 is retransmitted. The new frame in framebuffer 2 is transmitted in frame 3. When two framebuffers are available, the rendering time can be very long. The previous frame is retransmitted until the new frame is available."),(0,a.kt)("h3",u({},{id:"one-framebuffer"}),"One framebuffer"),(0,a.kt)("p",null,"In some systems there is only memory for one framebuffer. If we have a parallel RGB display we are thus forced to transmit framebuffer 1 in every frame."),(0,a.kt)("p",null,"This can be problematic because the graphics engine is forced to draw into the same framebuffer that we are also transmitting to the display at the same time. If this is done without care there is a high risk that the display shows a frame that is a mix of the previous frame and the new."),(0,a.kt)("p",null,"One solution is to hold back the drawing until the transfer is complete and only draw in timeslot before the transfer starts again. This yields little time to draw as the transfer takes up a significant part of the overall frame time. Another drawback is that incomplete frames (tearing) might still occur if the drawing is not complete when the next transfer starts."),(0,a.kt)("p",null,"A more potential solution is to keep track of how much of the framebuffer is already transmitted and then limit the rendering to the appropriate part of the framebuffer. As the transfer progresses more and more of the framebuffer is available for the rendering algorithms."),(0,a.kt)("p",null,"The graphics engine contains algorithms that help the programmer to ensure that the drawing is performed correctly."),(0,a.kt)("p",null,"The application updates and renders the framebuffer in every frame:"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle-1fb-normal.png",noShadow:"true",mdxType:"Figure"},"A single framebuffer is retransmitted in every frame"),(0,a.kt)("p",null,"The framebuffer is retransmitted unchanged if nothing is updated in a frame."),(0,a.kt)("p",null,"If the rendering time is longer than 16 ms the rendering has not finished when the retransmission starts again:"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle-1fb-long-render.png",noShadow:"true",mdxType:"Figure"},"Long render time"),(0,a.kt)("p",null,"In this situation the graphics engine must make sure that the part that is being transmitted is rendered completely. Otherwise the display will show the unfinished framebuffer."),(0,a.kt)("p",null,"In the next section we will discuss the rendering time for the individual Widgets. This will help the programmer to write applications of high performance."))}v.isMDXComponent=!0}}]);