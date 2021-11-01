(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2997],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,p=m["".concat(c,".").concat(d)]||m[d]||g[d]||o;return n?i.createElement(p,a(a({ref:t},u),{},{components:n})):i.createElement(p,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var i=n(67294);class r extends i.Component{render(){return i.createElement("div",{class:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){"use strict";var i=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,r.Z)(e.imageSource);return t?i.createElement("div",{class:"figure noshadow"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:n,height:o,src:a})),i.createElement("p",null,e.children)):i.createElement("div",{class:"figure"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:n,height:o,src:a})),i.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var i=n(67294),r=n(88678);const o=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends i.Component{render(){return i.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=a},88678:function(e,t,n){"use strict";var i=n(67294);class r extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{class:e},i.createElement("div",{class:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var i=n(67294),r=n(73727),o=n(11368),a=n(35096),s=n(84487);const c=(0,i.createContext)({collectLink:()=>{}});var l=n(25026),u=n(67023),g=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&C(e,n,t[n]);if(p)for(var n of p(t))f.call(t,n)&&C(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:g,to:C,href:v,activeClassName:k,isActive:w,"data-noBrokenLinkCheck":y,autoAddBaseUrl:T=!0}=n,x=((e,t)=>{var n={};for(var i in e)h.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&p)for(var i of p(e))t.indexOf(i)<0&&f.call(e,i)&&(n[i]=e[i]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:S,baseUrl:A}}=(0,o.Z)(),{withBaseUrl:N}=(0,l.C)(),I=(0,i.useContext)(c),O=C||v,B=(0,a.Z)(O),E=null==O?void 0:O.replace("pathname://","");let Z=void 0!==E?(j=E,T&&(e=>e.startsWith("/"))(j)?N(j):j):void 0;var j;Z&&B&&(Z=(0,u.applyTrailingSlash)(Z,{trailingSlash:S,baseUrl:A}));const V=(0,i.useRef)(!1),P=g?r.OL:r.rU,U=s.Z.canUseIntersectionObserver;let D;(0,i.useEffect)((()=>(!U&&B&&null!=Z&&window.docusaurus.prefetch(Z),()=>{U&&D&&D.disconnect()})),[Z,U,B]);const F=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,H=!Z||!B||F;return Z&&B&&!F&&!y&&I.collectLink(Z),H?i.createElement("a",b(b({href:Z},O&&!B&&{target:"_blank",rel:"noopener noreferrer"}),x)):i.createElement(P,b((_=b({},x),m(_,d({onMouseEnter:()=>{V.current||null==Z||(window.docusaurus.preload(Z),V.current=!0)},innerRef:e=>{var t,n;U&&e&&B&&(t=e,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:Z||""}))),g&&{isActive:w,activeClassName:k}));var _}},35096:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var i=n(11368),r=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,i)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:i}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[r]=e.split(/[#?]/),o="/"===r||r===i?r:(a=r,n?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(r,o)}},67023:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},63657:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return C},metadata:function(){return b},toc:function(){return v},default:function(){return w}});var i=n(3905),r=n(44035),o=n(29415),a=n(31217),s=n(22425),c=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&p(e,n,t[n]);if(g)for(var n of g(t))d.call(t,n)&&p(e,n,t[n]);return e};const f={id:"custom-triggers-and-actions",title:"Custom Triggers and Actions"},C=void 0,b={unversionedId:"development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",id:"development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",isDocsHomePage:!1,title:"Custom Triggers and Actions",description:"With TouchGFX Designer it is possible to define your own interaction components with Custom Triggers and Actions. Each Screen in your application can contain a collection of actions (these are simply void methods in C++) that you can call from within the TouchGFX Designer as well as in code, while custom containers can also have a collection of triggers (which is equal to a callback in C++) which your application can react to. In this article, we will go through this functionality to learn the possibilities this gives us to create more clean and dynamic TouchGFX applications.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",permalink:"/4.18/ja/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",version:"current",frontMatter:{id:"custom-triggers-and-actions",title:"Custom Triggers and Actions"},sidebar:"docs",previous:{title:"Interactions",permalink:"/4.18/ja/docs/development/ui-development/designer-user-guide/interactions-view"},next:{title:"Custom Containers",permalink:"/4.18/ja/docs/development/ui-development/touchgfx-engine-features/custom-containers"}},v=[{value:"Custom Triggers",id:"custom-triggers",children:[{value:"Adding Custom Triggers",id:"adding-custom-triggers",children:[]},{value:"Emitting Custom Triggers from Interactions",id:"emitting-custom-triggers-from-interactions",children:[]},{value:"Emitting Custom Triggers from User Code",id:"emitting-custom-triggers-from-user-code",children:[]},{value:"Reacting to Custom Triggers from Interactions",id:"reacting-to-custom-triggers-from-interactions",children:[]},{value:"Reacting to Custom Triggers from User Code",id:"reacting-to-custom-triggers-from-user-code",children:[]}]},{value:"Custom Actions",id:"custom-actions",children:[{value:"Adding Custom Actions",id:"adding-custom-actions",children:[]},{value:"Calling Custom Action from Interactions",id:"calling-custom-action-from-interactions",children:[]},{value:"Calling Custom Action from User Code",id:"calling-custom-action-from-user-code",children:[]},{value:"Adding Behaviour to Custom Actions from Interactions",id:"adding-behaviour-to-custom-actions-from-interactions",children:[]},{value:"Adding Behaviour to Custom Actions from User Code",id:"adding-behaviour-to-custom-actions-from-user-code",children:[]}]}],k={toc:v};function w(e){var t,n=e,{components:c}=n,p=((e,t)=>{var n={};for(var i in e)m.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&g)for(var i of g(e))t.indexOf(i)<0&&d.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=h(h({},k),p),l(t,u({components:c,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"With TouchGFX Designer it is possible to define your own interaction components with Custom Triggers and Actions. Each Screen in your application can contain a collection of actions (these are simply void methods in C++) that you can call from within the TouchGFX Designer as well as in code, while custom containers can also have a collection of triggers (which is equal to a callback in C++) which your application can react to. In this article, we will go through this functionality to learn the possibilities this gives us to create more clean and dynamic TouchGFX applications."),(0,i.kt)("h2",h({},{id:"custom-triggers"}),"Custom Triggers"),(0,i.kt)("p",null,"Custom Containers have the ability to create Custom Triggers. These are generated as C++ callbacks and can be emitted or reacted to from the Interaction system, or from User Code."),(0,i.kt)("h3",h({},{id:"adding-custom-triggers"}),"Adding Custom Triggers"),(0,i.kt)("p",null,'Adding a Custom Trigger is done via the properties tab of a Custom Container, by clicking the "+" button in the ',(0,i.kt)("strong",{parentName:"p"},"TRIGGERS")," section highlighted in the image below."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-trigger-4.17.png",mdxType:"Figure"},"Adding a Custom Trigger"),(0,i.kt)("p",null,"When the Custom Trigger has been created further options become available as shown in the image below."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-trigger-4.17.png",mdxType:"Figure"},"Editing a Custom Trigger"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Name"),(0,i.kt)("br",null)," The name specified here will be used for reference within the Interaction system and in the generated code files, as shown in the code examples below:"),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{11-14,24-30,37}","{11-14,24-30,37}":!0}),"class CustomContainer1Base : public touchgfx::Container\n{\npublic:\n    CustomContainer1Base();\n    virtual ~CustomContainer1Base() {}\n    virtual void initialize();\n\n    /*\n     * Custom Trigger Callback Setters\n     */\n    void setTrigger1Callback(touchgfx::GenericCallback<>& callback)\n    {\n        this->trigger1Callback = &callback;\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Custom Trigger Emitters\n     */\n    virtual void emitTrigger1Callback()\n    {\n        if (trigger1Callback && trigger1Callback->isValid())\n        {\n            this->trigger1Callback->execute();\n        }\n    }\n\nprivate:\n\n    /*\n     * Custom Trigger Callback Declarations\n     */\n    touchgfx::GenericCallback<>* trigger1Callback;\n\n};\n")),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{2}","{2}":!0}),"CustomContainer1Base::CustomContainer1Base() :\n    trigger1Callback(0)\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid CustomContainer1Base::initialize()\n{\n\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),(0,i.kt)("br",null)," The text written here, will be used in the Interaction system and can be seen when hovering over the Trigger when selecting it in the Interaction system. If a description has not been specified a standard description will be created as shown in the ",(0,i.kt)("a",h({parentName:"p"},{href:"#emitting-custom-triggers-from-interactions"}),"Emitting Custom Triggers from Interactions")," section."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),(0,i.kt)("br",null)," Enabling Type will allow for creating triggers that return a value given a specific type. The type can either be selected from a list, or by writing the type manually. Shown below is the code generated when selecting ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),"."),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{11-14,24-30,37}","{11-14,24-30,37}":!0}),"class CustomContainer1Base : public touchgfx::Container\n{\npublic:\n    CustomContainer1Base();\n    virtual ~CustomContainer1Base() {}\n    virtual void initialize();\n\n    /*\n     * Custom Trigger Callback Setters\n     */\n    void setTrigger1Callback(touchgfx::GenericCallback<bool>& callback)\n    {\n        this->trigger1Callback = &callback;\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Custom Trigger Emitters\n     */\n    virtual void emitTrigger1Callback(bool value)\n    {\n        if (trigger1Callback && trigger1Callback->isValid())\n        {\n            this->trigger1Callback->execute(value);\n        }\n    }\n\nprivate:\n\n    /*\n     * Custom Trigger Callback Declarations\n     */\n    touchgfx::GenericCallback<bool>* trigger1Callback;\n\n};\n")),(0,i.kt)("h3",h({},{id:"emitting-custom-triggers-from-interactions"}),"Emitting Custom Triggers from Interactions"),(0,i.kt)("p",null,"A Custom Trigger can be emitted by using the Interaction system. Simply go to the Interaction tab of the Custom Container that owns the Custom Trigger, create a new Interaction and select the Custom Trigger as the action as shown in the image below."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/emitting-a-custom-trigger-from-interaction-4.17.png",mdxType:"Figure"},"Emitting a Custom Trigger from an Interaction"),(0,i.kt)("p",null,"As shown in the above picture, whenever the button, that has been added to the Custom Container, is clicked the Custom Trigger is emitted."),(0,i.kt)("p",null,"If the Custom Trigger has type enabled, the parameter value or variable must be specified as shown in the image below, where ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," has been specified as the Type."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-emitting-custom-trigger-from-interaction-4.17.png",mdxType:"Figure"},"Specifying a parameter on a Custom Trigger emitted from an Interaction"),(0,i.kt)("h3",h({},{id:"emitting-custom-triggers-from-user-code"}),"Emitting Custom Triggers from User Code"),(0,i.kt)("p",null,'Custom Triggers can also be emitted from the User Code class file that inherits from the generated Custom Container. In the generated Custom Container the method below is generated, for a CustomTrigger named "trigger1".'),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{24-30}","{24-30}":!0}),"virtual void emitTrigger1Callback(bool value)\n{\n    if (trigger1Callback && trigger1Callback->isValid())\n    {\n        this->trigger1Callback->execute(value);\n    }\n}\n")),(0,i.kt)("p",null,"This function can be overwritten or called in the User Code class file that inherits from it."),(0,i.kt)("h3",h({},{id:"reacting-to-custom-triggers-from-interactions"}),"Reacting to Custom Triggers from Interactions"),(0,i.kt)("p",null,"If a Custom Container with a Custom Trigger is added to a Screen, the Custom Trigger can be used as Trigger on an Interaction on the Screen, as shown in the Image below."),(0,i.kt)("p",null,"The naming scheme of the Custom Trigger when selecting it as Trigger in an Interaction is: ",(0,i.kt)("inlineCode",{parentName:"p"},"<Custom Container Name> <Custom Trigger name> happens"),"."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-trigger-as-trigger-on-interaction-4.17.png",mdxType:"Figure"},"Selecting Custom Trigger as Trigger on an Interaction"),(0,i.kt)("p",null,"After selecting the Trigger, if there are multiple instances of the same Custom Container containing the Custom Trigger, the component needs to be selected. However if there is only one instance, it will be auto selected."),(0,i.kt)("h3",h({},{id:"reacting-to-custom-triggers-from-user-code"}),"Reacting to Custom Triggers from User Code"),(0,i.kt)("p",null,'A Custom Trigger can also be reacted to from User Code by implementing the callback as shown in the following code example, where a Custom Container with a Custom Trigger name "trigger1" has been added to a Screen. In the User Code class file that inherits from the Screen, the following highlighted lines have been added to implement the Callback/Custom Trigger.'),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{10-18}","{10-18}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\nprivate:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<Screen1View> customContainer1Trigger1Callback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void customContainer1Trigger1CallbackHandler();\n};\n\n")),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{4,6,19-22}","{4,6,19-22}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View():\n    customContainer1Trigger1Callback(this, &Screen1View::customContainer1Trigger1CallbackHandler)\n{\n    customContainer1.setTrigger1Callback(customContainer1Trigger1Callback);\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::customContainer1Trigger1CallbackHandler()\n{\n    //Your code here.\n}\n")),(0,i.kt)("h2",h({},{id:"custom-actions"}),"Custom Actions"),(0,i.kt)("p",null,"Screens and Custom Containers have the ability to create Custom Actions. These are generated as virtual C++ methods, and can be executed from the Interaction system, or from User Code. The implementation and behaviour of a Custom Action, can either be configured within the Interaction system, or by overwriting the generated C++ methods in the User Code class file."),(0,i.kt)("h3",h({},{id:"adding-custom-actions"}),"Adding Custom Actions"),(0,i.kt)("p",null,'Adding a Custom Trigger is done via the properties tab of a Screen or Custom Container, by clicking the "+" button in the ',(0,i.kt)("strong",{parentName:"p"},"ACTIONS")," section highlighted in the image below."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-action-4.17.png",mdxType:"Figure"},"Adding a Custom Action"),(0,i.kt)("p",null,"When the Custom Action has been created further options become available as shown in the image below."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-action-4.17.png",mdxType:"Figure"},"Editing a Custom Action"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Name"),(0,i.kt)("br",null)," The name specified here will be used for further reference within the Interaction system and in the generated code files, as shown in the code examples below."),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),"class CustomContainer1Base : public touchgfx::Container\n{\npublic:\n    CustomContainer1Base();\n    virtual ~CustomContainer1Base() {}\n    virtual void initialize();\n\n    /*\n     * Custom Actions\n     */\n    virtual void action1();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\nprivate:\n\n};\n")),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{12-15}","{12-15}":!0}),"CustomContainer1Base::CustomContainer1Base()\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid CustomContainer1Base::initialize()\n{\n\n}\n\nvoid CustomContainer1Base::action1()\n{\n\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),(0,i.kt)("br",null)," The text written here, will be used in the Interaction system and can be seen when hovering over the Action when selecting it in the Interaction system. If a description has not been specified a standard description will be created as shown in the ",(0,i.kt)("a",h({parentName:"p"},{href:"#calling-custom-action-from-interactions"}),"Calling Custom Action from Interactions")," section, that follows this scheme: ",(0,i.kt)("inlineCode",{parentName:"p"},"Call <Name> on <Screen or Custom Container Name>"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),(0,i.kt)("br",null)," Enabling Type will allow for creating actions that require a parameter given a specific type. The type can either be selected from a list, or by writing the type manually. Shown below is the code generated when selecting ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),"."),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),"/*\n * Custom Actions\n */\nvirtual void action1(bool value);\n")),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void CustomContainer1Base::action1(bool value)\n{\n\n}\n")),(0,i.kt)("h3",h({},{id:"calling-custom-action-from-interactions"}),"Calling Custom Action from Interactions"),(0,i.kt)("p",null,"When a Custom Action has been created the action can be executed from within the Interaction system. If the Action is created on a Custom Container and the Custom Container is added to a Screen, the Action can be executed from the screens Interaction tab as shown in the image below."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/executing-custom-action-from-interaction-4.17.png",mdxType:"Figure"},"Executing a Custom Action from an Interaction"),(0,i.kt)("p",null,"After selecting the action, if there are multiple instances of the same Custom Container, the component needs to be selected. However if there is only one instance, it will be auto selected."),(0,i.kt)("p",null,"If the Custom Action has type enabled, the parameter value or variable must be specified as shown in the image below, where ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," has been specified as the Type."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-executing-custom-action-from-interaction-4.17.png",mdxType:"Figure"},"Specifying a parameter on a Custom Action executed from an Interaction"),(0,i.kt)("h3",h({},{id:"calling-custom-action-from-user-code"}),"Calling Custom Action from User Code"),(0,i.kt)("p",null,'Custom Actions can also be called directly from User Code. In the following code example a Custom Container with a Custom Action named "action1" is created. The Custom Container has been added to a Screen resulting in the generated code below.'),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{4-6}","{4-6}":!0}),"Screen1ViewBase::Screen1ViewBase()\n{\n\n    customContainer11.setXY(50, 11);\n\n    add(customContainer11);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    customContainer11.initialize();\n}\n")),(0,i.kt)("p",null,"In the User Code class file ",(0,i.kt)("inlineCode",{parentName:"p"},"Screen1View")," that inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase"),' the Custom Action "action1" can be called as shown below.'),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{3}","{3}":!0}),"Screen1View::Screen1View()\n{\n    customContainer11.action1();\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n")),(0,i.kt)("h3",h({},{id:"adding-behaviour-to-custom-actions-from-interactions"}),"Adding Behaviour to Custom Actions from Interactions"),(0,i.kt)("p",null,"Behaviour can be added to Custom Actions by using the Interaction system. Simply go to the Interaction tab of the Screen or Custom Container that owns the Custom Action, create a new Interaction and select the Custom Action as the trigger as shown in the image below."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-action-as-trigger-on-interaction-4.17.png",mdxType:"Figure"},"Selecting a Custom Action as Trigger on an Interaction"),(0,i.kt)("p",null,"Then any Action that is defined in the Interaction, will be executed whenever the Custom Action is called."),(0,i.kt)("h3",h({},{id:"adding-behaviour-to-custom-actions-from-user-code"}),"Adding Behaviour to Custom Actions from User Code"),(0,i.kt)("p",null,"Custom Actions can also implement its behaviour by overwriting the Action in the User Code class ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomContainer1")," that inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomContainer1Base")," as shown below."),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"CustomContainer1.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{9}","{9}":!0}),"class CustomContainer1 : public CustomContainer1Base\n{\npublic:\n    CustomContainer1();\n    virtual ~CustomContainer1() {}\n\n    virtual void initialize();\n\n    void action1();\n\nprotected:\n};\n")),(0,i.kt)(s.Z,{mdxType:"CodeHeader"},"CustomContainer1.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{11-14}","{11-14}":!0}),"CustomContainer1::CustomContainer1()\n{\n\n}\n\nvoid CustomContainer1::initialize()\n{\n    CustomContainer1Base::initialize();\n}\n\nvoid CustomContainer1::action1()\n{\n    //Your code here\n}\n")),(0,i.kt)(o.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(a.Z,{to:"../../../tutorials/tutorial-05",mdxType:"Link"},"Tutorial 5: Creating Custom Triggers and Actions"))))}w.isMDXComponent=!0}}]);