"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9601],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),p=r,m=g["".concat(c,".").concat(p)]||g[p]||d[p]||o;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44035:function(e,t,n){var i=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,r.Z)(e.imageSource);return t?i.createElement("div",{class:"figure noshadow"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:n,height:o,src:a})),i.createElement("p",null,e.children)):i.createElement("div",{class:"figure"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:n,height:o,src:a})),i.createElement("p",null,e.children))}},35096:function(e,t,n){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return a}});var i=n(11368),r=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,i)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},34375:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return f},default:function(){return v}});var i=n(3905),r=n(44035),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&d(e,n,t[n]);return e};const p={id:"interactions-view",title:"Interactions"},m=void 0,h={unversionedId:"development/ui-development/designer-user-guide/interactions-view",id:"development/ui-development/designer-user-guide/interactions-view",isDocsHomePage:!1,title:"Interactions",description:"Interactions allow you to configure an action to take place when a trigger happens. An interaction in TouchGFX Designer is built up of a trigger and an action:",source:"@site/docs/development/ui-development/designer-user-guide/interactions-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/interactions-view",permalink:"/4.18/zh-TW/docs/development/ui-development/designer-user-guide/interactions-view",tags:[],version:"current",frontMatter:{id:"interactions-view",title:"Interactions"},sidebar:"docs",previous:{title:"Config View",permalink:"/4.18/zh-TW/docs/development/ui-development/designer-user-guide/config-view"},next:{title:"Custom Triggers and Actions",permalink:"/4.18/zh-TW/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions"}},f=[{value:"Triggers",id:"triggers",children:[],level:2},{value:"Actions",id:"actions",children:[],level:2},{value:"Chaining Interactions",id:"chaining-interactions",children:[],level:2}],w={toc:f};function v(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&c)for(var i of c(e))t.indexOf(i)<0&&u.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=g(g({},w),d),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Interactions allow you to configure an action to take place when a trigger happens. An interaction in TouchGFX Designer is built up of a ",(0,i.kt)("strong",{parentName:"p"},"trigger")," and an ",(0,i.kt)("strong",{parentName:"p"},"action"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("em",{parentName:"li"},"Trigger")," is what will start the interaction - what needs to happen in our application for the Action to take place."),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("em",{parentName:"li"},"Action")," is what will happen after a Trigger has been emitted. This is where you can decide what happens in your application, when your defined trigger conditions have been met.")),(0,i.kt)("p",null,'To add an interaction, go to the Interactions tab for any Screen or Custom Container and press the "+" button as shown in the image below.'),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/add-interaction-4.17.png",mdxType:"Figure"},"Interactions tab in TouchGFX Designer"),(0,i.kt)("p",null,'After pressing the "+" button, the interaction in the image below will be added. The Interaction detail view (to the left) consists of the name given to the Interaction and the configuration options available.'),(0,i.kt)("p",null,'The Interaction summary view (to the right) has a dynamic description which is modified based on the Trigger and Action that have been selected. Since no Trigger and Action have been selected in the image below, the dynamic description is "When none none".'),(0,i.kt)("p",null,"The button with a cross icon in the Interaction summary view will delete the Interaction with a confirmation popup."),(0,i.kt)("p",null,"Clicking anywhere outside the Interaction detail view will collapse the view. Clicking the Interaction summary view will open the Interaction detail view."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/empty-interaction-4.17.png",mdxType:"Figure"},"New Interaction in the Interactions tab"),(0,i.kt)("h2",g({},{id:"triggers"}),"Triggers"),(0,i.kt)("p",null,"The Trigger dropdown is populated based on what widgets have been added to the current Screen or Custom Container.",(0,i.kt)("br",null),"An empty Screen will only have three Triggers available: ",(0,i.kt)("strong",{parentName:"p"},"Hardware button is clicked"),", ",(0,i.kt)("strong",{parentName:"p"},"Screen transition begins")," and ",(0,i.kt)("strong",{parentName:"p"},"Screen transition ends"),"."),(0,i.kt)("p",null,"Adding a widget will add the Triggers associated with it. For example, adding a ",(0,i.kt)("a",g({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button")," widget to the Screen or Custom Container will add the ",(0,i.kt)("strong",{parentName:"p"},"Button is clicked")," Trigger."),(0,i.kt)("p",null,"Some Triggers, like ",(0,i.kt)("strong",{parentName:"p"},"Button is clicked"),", require a component to be selected as shown in the image below. However, if there is only one widget matching the Trigger, that widget will be auto-selected."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-4.17.png",mdxType:"Figure"},"Button is Clicked Trigger selected on Interaction"),(0,i.kt)("p",null,'As can be seen in the image above, after selecting the Trigger, the dynamic description in Interaction summary view has been updated from "When none none" to "When button1 clicked none".'),(0,i.kt)("h2",g({},{id:"actions"}),"Actions"),(0,i.kt)("p",null,"The Action dropdown is also populated based on what widgets have been added to the current Screen or Custom Container.",(0,i.kt)("br",null),"An empty Screen will only have five Actions available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Call new virtual function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Change screen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Execute C++ code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Set Language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wait for"))),(0,i.kt)("p",null,"Adding a widget will add the Actions associated with it. Adding a ",(0,i.kt)("a",g({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button")," widget will add the following Actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Move widget")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fade widget")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hide widget")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Show widget"))),(0,i.kt)("p",null,"Some Actions, like ",(0,i.kt)("strong",{parentName:"p"},"Move widget"),", require a component to be selected as shown in the image below. However, if there is only one widget matching the Action, that widget will be auto-selected. Selecting the action ",(0,i.kt)("strong",{parentName:"p"},"Move widget")," also adds more properties relevant to moving a widget."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/interaction-button-clicked-trigger-move-button1-action-4.17.png",mdxType:"Figure"},"Move widget action selected on Interaction"),(0,i.kt)("p",null,'As can be seen above, after selecting the Action, the dynamic description in the Interaction summary view has been updated from "When button1 clicked none" to "When button1 clicked move button1".'),(0,i.kt)("h2",g({},{id:"chaining-interactions"}),"Chaining Interactions"),(0,i.kt)("p",null,"Interactions can also be triggered by another Interaction upon completing its Action."),(0,i.kt)("p",null,"To enable this behaviour, the checkbox labeled ",(0,i.kt)("em",{parentName:"p"},"Can trigger another interaction")," needs to be enabled as shown in the image below:"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/interaction-can-trigger-another-interaction-enabled-4.17.png",mdxType:"Figure"},"Can trigger another interaction enabled on Interaction"),(0,i.kt)("p",null,"After enabling this behaviour, other Interactions can be triggered by this Interaction completing, as shown in the image below:"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/interactions-view/interaction-triggering-on-another-interaction-4.17.png",mdxType:"Figure"},"Interaction triggering on another Interaction"))}v.isMDXComponent=!0}}]);