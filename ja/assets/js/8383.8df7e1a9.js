(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8383],{16747:function(e,t,r){"use strict";r.d(t,{a:function(){return s}});var n=r(67294);function a(){return n.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},n.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var o=r(20830);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i="Ctrl";var s=n.forwardRef((function(e,t){var r=e.translations,s=void 0===r?{}:r,u=c(e,["translations"]),m=s.buttonText,d=void 0===m?"Search":m,f=s.buttonAriaLabel,b=void 0===f?"Search":f,p=(0,n.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":i:null}),[]);return n.createElement("button",l({type:"button",className:"DocSearch DocSearch-Button","aria-label":b},u,{ref:t}),n.createElement("span",{className:"DocSearch-Button-Container"},n.createElement(o.W,null),n.createElement("span",{className:"DocSearch-Button-Placeholder"},d)),n.createElement("span",{className:"DocSearch-Button-Keys"},null!==p&&n.createElement(n.Fragment,null,n.createElement("span",{className:"DocSearch-Button-Key"},p===i?n.createElement(a,null):p),n.createElement("span",{className:"DocSearch-Button-Key"},"K"))))}))},20830:function(e,t,r){"use strict";r.d(t,{W:function(){return a}});var n=r(67294);function a(){return n.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},n.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},57052:function(e,t,r){"use strict";r.d(t,{D:function(){return a}});var n=r(67294);function a(e){var t=e.isOpen,r=e.onOpen,a=e.onClose,o=e.onInput,l=e.searchButtonRef;n.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,r=t.tagName;return t.isContentEditable||"INPUT"===r||"SELECT"===r||"TEXTAREA"===r}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||r()),l&&l.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,r,a,o,l])}},28210:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(67294),a="iconExternalLink_3J9K";var o=({width:e=13.5,height:t=13.5})=>n.createElement("svg",{width:e,height:t,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))},88878:function(e,t,r){"use strict";r.d(t,{Z:function(){return at}});var n=r(67294),a=r(86010),o=r(5977),l=r(30910),c=r(40190),i="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){const e=(0,n.useRef)(null),{action:t}=(0,o.k6)();return(0,c.SL)((({location:r})=>{e.current&&!r.hash&&"PUSH"===t&&s(e.current)})),n.createElement("div",{ref:e},n.createElement("a",{href:"#",className:i,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},n.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",b="announcementBarCloseable_3myR";var p=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:r}=(0,c.LU)();if(!r)return null;const{content:o,backgroundColor:i,textColor:s,isCloseable:u}=r;return!o||u&&e?null:n.createElement("div",{className:m,style:{backgroundColor:i,color:s},role:"banner"},n.createElement("div",{className:(0,a.Z)(f,{[b]:u}),dangerouslySetInnerHTML:{__html:o}}),u?n.createElement("button",{type:"button",className:(0,a.Z)(d,"clean-btn"),onClick:t,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},n.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},v=r(42012),h=r(11368),g={toggle:"toggle_71bT"},y=Object.defineProperty,E=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const _=({icon:e,style:t})=>n.createElement("span",{className:(0,a.Z)(g.toggle,g.dark),style:t},e),N=({icon:e,style:t})=>n.createElement("span",{className:(0,a.Z)(g.toggle,g.light),style:t},e),Z=(0,n.memo)((({className:e,icons:t,checked:r,disabled:o,onChange:l})=>{const[c,i]=(0,n.useState)(r),[s,u]=(0,n.useState)(!1),m=(0,n.useRef)(null);return n.createElement("div",{className:(0,a.Z)("react-toggle",e,{"react-toggle--checked":c,"react-toggle--focus":s,"react-toggle--disabled":o})},n.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>{var e;return null==(e=m.current)?void 0:e.click()}},n.createElement("div",{className:"react-toggle-track-check"},t.checked),n.createElement("div",{className:"react-toggle-track-x"},t.unchecked),n.createElement("div",{className:"react-toggle-thumb"})),n.createElement("input",{ref:m,checked:c,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:l,onClick:()=>i(!c),onFocus:()=>u(!0),onBlur:()=>u(!1)}))}));function C(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:r,lightIcon:a,lightIconStyle:o}}}=(0,c.LU)(),{isClient:l}=(0,h.Z)();return n.createElement(Z,((e,t)=>{for(var r in t||(t={}))w.call(t,r)&&k(e,r,t[r]);if(E)for(var r of E(t))O.call(t,r)&&k(e,r,t[r]);return e})({disabled:!l,icons:{checked:n.createElement(_,{icon:t,style:r}),unchecked:n.createElement(N,{icon:a,style:o})}},e))}var P=r(2756),j=r(58809);var S=e=>{const t=(0,o.TH)(),[r,a]=(0,n.useState)(e),l=(0,n.useRef)(!1),[i,s]=(0,n.useState)(0),u=(0,n.useCallback)((e=>{null!==e&&s(e.getBoundingClientRect().height)}),[]);return(0,j.Z)(((t,r)=>{const n=t.scrollY,o=null==r?void 0:r.scrollY;if(!e)return;if(n<i)return void a(!0);if(l.current)return l.current=!1,void a(!1);o&&0===n&&a(!0);const c=document.documentElement.scrollHeight-i,s=window.innerHeight;o&&n>=o?a(!1):n+s<c&&a(!0)}),[i,l]),(0,c.SL)((t=>{e&&!t.location.hash&&a(!0)})),(0,n.useEffect)((()=>{e&&t.hash&&(l.current=!0)}),[t.hash]),{navbarRef:u,isNavbarVisible:r}};var I=function(e=!0){(0,n.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])},D=r(34603),L=r(32064),x=r(72644),T=Object.defineProperty,B=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var R=e=>{var t=e,{width:r=30,height:a=30,className:o}=t,l=((e,t)=>{var r={};for(var n in e)M.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&B)for(var n of B(e))t.indexOf(n)<0&&A.call(e,n)&&(r[n]=e[n]);return r})(t,["width","height","className"]);return n.createElement("svg",((e,t)=>{for(var r in t||(t={}))M.call(t,r)&&U(e,r,t[r]);if(B)for(var r of B(t))A.call(t,r)&&U(e,r,t[r]);return e})({className:o,width:r,height:a,viewBox:"0 0 30 30","aria-hidden":"true"},l),n.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},W="toggle_3Zt9",H="navbarHideable_2qcr",V="navbarHidden_3yey",$=Object.defineProperty,K=Object.defineProperties,q=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,J=(e,t)=>{for(var r in t||(t={}))F.call(t,r)&&X(e,r,t[r]);if(z)for(var r of z(t))G.call(t,r)&&X(e,r,t[r]);return e},Q=(e,t)=>K(e,q(t));const Y="right";function ee(){return(0,c.LU)().navbar.items}function te(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:r,setDarkTheme:a}=(0,P.Z)();return{isDarkTheme:t,toggle:(0,n.useCallback)((e=>e.target.checked?a():r()),[r,a]),disabled:e}}function re({sidebarShown:e,toggleSidebar:t}){I(e);const r=ee(),o=te(),i=function({sidebarShown:e,toggleSidebar:t}){var r;const a=null==(r=(0,c.g8)())?void 0:r({toggleSidebar:t}),o=(0,c.D9)(a),[l,i]=(0,n.useState)((()=>!1));(0,n.useEffect)((()=>{a&&!o&&i(!0)}),[a,o]);const s=!!a;return(0,n.useEffect)((()=>{s?e||i(!0):i(!1)}),[e,s]),{shown:l,hide:(0,n.useCallback)((()=>{i(!1)}),[]),content:a}}({sidebarShown:e,toggleSidebar:t});return n.createElement("div",{className:"navbar-sidebar"},n.createElement("div",{className:"navbar-sidebar__brand"},n.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!o.disabled&&e&&n.createElement(C,{checked:o.isDarkTheme,onChange:o.toggle})),n.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},n.createElement("div",{className:"navbar-sidebar__item menu"},n.createElement("ul",{className:"menu__list"},r.map(((e,r)=>n.createElement(L.Z,Q(J({mobile:!0},e),{onClick:t,key:r})))))),n.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},n.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},n.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}var ne=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),r=function(){const e=(0,D.Z)(),t="mobile"===e,[r,a]=(0,n.useState)(!1),o=(0,n.useCallback)((()=>{a((e=>!e))}),[]);return(0,n.useEffect)((()=>{"desktop"===e&&a(!1)}),[e]),{shouldRender:t,toggle:o,shown:r}}(),o=te(),{navbarRef:l,isNavbarVisible:i}=S(e),s=ee(),u=s.some((e=>"search"===e.type)),{leftItems:m,rightItems:d}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!=(t=e.position)?t:Y)})),rightItems:e.filter((e=>{var t;return"right"===(null!=(t=e.position)?t:Y)}))}}(s);return n.createElement("nav",{ref:l,className:(0,a.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":r.shown,[H]:e,[V]:e&&!i})},n.createElement("div",{className:"navbar__inner"},n.createElement("div",{className:"navbar__items"},(null==s?void 0:s.length)>0&&n.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:r.toggle,onKeyDown:r.toggle},n.createElement(R,null)),n.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),m.map(((e,t)=>n.createElement(L.Z,Q(J({},e),{key:t}))))),n.createElement("div",{className:"navbar__items navbar__items--right"},d.map(((e,t)=>n.createElement(L.Z,Q(J({},e),{key:t})))),!o.disabled&&n.createElement(C,{className:W,checked:o.isDarkTheme,onChange:o.toggle}),!u&&n.createElement(v.Z,null))),n.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:r.toggle}),r.shouldRender&&n.createElement(re,{sidebarShown:r.shown,toggleSidebar:r.toggle}))},ae=r(31217),oe=r(25026),le=r(35096),ce="footerLogoLink_MyFc",ie=r(50009),se=r(28210),ue=Object.defineProperty,me=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,be=(e,t,r)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,pe=(e,t)=>{for(var r in t||(t={}))de.call(t,r)&&be(e,r,t[r]);if(me)for(var r of me(t))fe.call(t,r)&&be(e,r,t[r]);return e};function ve(e){var t=e,{to:r,href:a,label:o,prependBaseUrlToHref:l}=t,c=((e,t)=>{var r={};for(var n in e)de.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&me)for(var n of me(e))t.indexOf(n)<0&&fe.call(e,n)&&(r[n]=e[n]);return r})(t,["to","href","label","prependBaseUrlToHref"]);const i=(0,oe.Z)(r),s=(0,oe.Z)(a,{forcePrependBaseUrl:!0});return n.createElement(ae.Z,pe(pe({className:"footer__link-item"},a?{href:l?s:a}:{to:i}),c),a&&!(0,le.Z)(a)?n.createElement("span",null,o,n.createElement(se.Z,null)):o)}const he=({sources:e,alt:t})=>n.createElement(ie.Z,{className:"footer__logo",alt:t,sources:e});var ge=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:r=[],logo:o={}}=e||{},l={light:(0,oe.Z)(o.src),dark:(0,oe.Z)(o.srcDark||o.src)};return e?n.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},r&&r.length>0&&n.createElement("div",{className:"row footer__links"},r.map(((e,t)=>n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(ve,pe({},e)))))):null)))),(o||t)&&n.createElement("div",{className:"footer__bottom text--center"},o&&(o.src||o.srcDark)&&n.createElement("div",{className:"margin-bottom--sm"},o.href?n.createElement(ae.Z,{href:o.href,className:ce},n.createElement(he,{alt:o.alt,sources:l})):n.createElement(he,{alt:o.alt,sources:l})),t?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null},ye=r(84487);const Ee=(0,c.WA)("theme"),we="light",Oe="dark",ke=e=>e===Oe?Oe:we,_e=e=>{(0,c.WA)("theme").set(ke(e))};var Ne=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:r}}=(0,c.LU)(),[a,o]=(0,n.useState)((e=>ye.Z.canUseDOM?ke(document.documentElement.getAttribute("data-theme")):ke(e))(e)),l=(0,n.useCallback)((()=>{o(we),_e(we)}),[]),i=(0,n.useCallback)((()=>{o(Oe),_e(Oe)}),[]);return(0,n.useEffect)((()=>{document.documentElement.setAttribute("data-theme",ke(a))}),[a]),(0,n.useEffect)((()=>{if(!t)try{const e=Ee.get();null!==e&&o(ke(e))}catch(e){console.error(e)}}),[o]),(0,n.useEffect)((()=>{t&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{o(e?Oe:we)}))}),[]),{isDarkTheme:a===Oe,setLightTheme:l,setDarkTheme:i}},Ze=r(76289);var Ce=function(e){const{isDarkTheme:t,setLightTheme:r,setDarkTheme:a}=Ne();return n.createElement(Ze.Z.Provider,{value:{isDarkTheme:t,setLightTheme:r,setDarkTheme:a}},e.children)},Pe=Object.defineProperty,je=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,Ie=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,xe=(e,t,r)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const Te="docusaurus.tab.";var Be=()=>{const[e,t]=(0,n.useState)({}),r=(0,n.useCallback)(((e,t)=>{(0,c.WA)(`docusaurus.tab.${e}`).set(t)}),[]);return(0,n.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(Te)){const r=t.substring(Te.length);e[r]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t((t=>{return r=((e,t)=>{for(var r in t||(t={}))De.call(t,r)&&xe(e,r,t[r]);if(Ie)for(var r of Ie(t))Le.call(t,r)&&xe(e,r,t[r]);return e})({},t),je(r,Se({[e]:n}));var r})),r(e,n)}}};var Me=(0,n.createContext)(void 0);var Ae=function(e){const{tabGroupChoices:t,setTabGroupChoices:r}=Be();return n.createElement(Me.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:r}},e.children)};function Ue({children:e}){return n.createElement(Ce,null,n.createElement(c.pl,null,n.createElement(Ae,null,n.createElement(c.L5,null,n.createElement(c.Cn,null,e)))))}var Re=r(9671);function We({locale:e,version:t,tag:r}){const a=e;return n.createElement(Re.Z,null,a&&n.createElement("meta",{name:"docsearch:language",content:a}),t&&n.createElement("meta",{name:"docsearch:version",content:t}),r&&n.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var He=r(3730),Ve=Object.defineProperty,$e=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,ze=(e,t,r)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fe=(e,t)=>{for(var r in t||(t={}))Ke.call(t,r)&&ze(e,r,t[r]);if($e)for(var r of $e(t))qe.call(t,r)&&ze(e,r,t[r]);return e};function Ge(){const{i18n:{defaultLocale:e,locales:t}}=(0,h.Z)(),r=(0,c.l5)();return n.createElement(Re.Z,null,t.map((e=>n.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),n.createElement("link",{rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function Xe({permalink:e}){const{siteConfig:{url:t}}=(0,h.Z)(),r=function(){const{siteConfig:{url:e}}=(0,h.Z)(),{pathname:t}=(0,o.TH)();return e+(0,oe.Z)(t)}(),a=e?`${t}${e}`:r;return n.createElement(Re.Z,null,n.createElement("meta",{property:"og:url",content:a}),n.createElement("link",{rel:"canonical",href:a}))}function Je(e){const{siteConfig:{favicon:t,themeConfig:{metadatas:r,image:a}},i18n:{currentLocale:o,localeConfigs:l}}=(0,h.Z)(),{title:i,description:s,image:u,keywords:m,searchMetadatas:d}=e,f=(0,oe.Z)(t),b=(0,c.pe)(i),p=o,v=l[o].direction;return n.createElement(n.Fragment,null,n.createElement(Re.Z,null,n.createElement("html",{lang:p,dir:v}),t&&n.createElement("link",{rel:"shortcut icon",href:f}),n.createElement("title",null,b),n.createElement("meta",{property:"og:title",content:b}),u||a&&n.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),n.createElement(He.Z,Fe({},{description:s,keywords:m,image:u})),n.createElement(Xe,null),n.createElement(Ge,null),n.createElement(We,Fe({tag:c.HX,locale:o},d)),n.createElement(Re.Z,null,r.map(((e,t)=>n.createElement("meta",Fe({key:`metadata_${t}`},e))))))}var Qe=function(){(0,n.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])},Ye=Object.defineProperty,et=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,nt=(e,t,r)=>t in e?Ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var at=function(e){const{children:t,noFooter:r,wrapperClassName:o,pageClassName:l}=e;return Qe(),n.createElement(Ue,null,n.createElement(Je,((e,t)=>{for(var r in t||(t={}))tt.call(t,r)&&nt(e,r,t[r]);if(et)for(var r of et(t))rt.call(t,r)&&nt(e,r,t[r]);return e})({},e)),n.createElement(u,null),n.createElement(p,null),n.createElement(ne,null),n.createElement("div",{className:(0,a.Z)(c.kM.wrapper.main,o,l)},t),!r&&n.createElement(ge,null))}},72644:function(e,t,r){"use strict";var n=r(67294),a=r(31217),o=r(50009),l=r(25026),c=r(11368),i=Object.defineProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))m.call(t,r)&&d(e,r,t[r]);return e};t.Z=e=>{const{siteConfig:{title:t,themeConfig:{navbar:{title:r,logo:i={src:""}}}},isClient:d}=(0,c.Z)(),b=e,{imageClassName:p,titleClassName:v}=b,h=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(b,["imageClassName","titleClassName"]),g=(0,l.Z)(i.href||"/"),y={light:(0,l.Z)(i.src),dark:(0,l.Z)(i.srcDark||i.src)};return n.createElement(a.Z,f(f({to:g},h),i.target&&{target:i.target}),i.src&&n.createElement(o.Z,{key:d,className:p,sources:y,alt:i.alt||r||t}),null!=r&&n.createElement("b",{className:v},r))}},55976:function(e,t,r){"use strict";r.d(t,{O:function(){return v}});var n=r(67294),a=r(86010),o=r(31217),l=r(25026),c=r(28210),i=r(35096),s=Object.defineProperty,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&f(e,r,t[r]);return e},p=(e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};function v(e){var t=e,{activeBasePath:r,activeBaseRegex:a,to:s,href:u,label:m,activeClassName:d="navbar__link--active",prependBaseUrlToHref:f}=t,v=p(t,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]);const h=(0,l.Z)(s),g=(0,l.Z)(r),y=(0,l.Z)(u,{forcePrependBaseUrl:!0}),E=m&&u&&!(0,i.Z)(u),w="dropdown__link--active"===d;return n.createElement(o.Z,b(b({},u?{href:f?y:u}:b({isNavLink:!0,activeClassName:d,to:h},r||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(g)}:null)),v),E?n.createElement("span",null,m,n.createElement(c.Z,b({},w&&{width:12,height:12}))):m)}function h(e){var t=e,{className:r,isDropdownItem:o=!1}=t,l=p(t,["className","isDropdownItem"]);const c=n.createElement(v,b({className:(0,a.Z)(o?"dropdown__link":"navbar__item navbar__link",r)},l));return o?n.createElement("li",null,c):c}function g(e){var t=e,{className:r,isDropdownItem:o}=t,l=p(t,["className","isDropdownItem"]);return n.createElement("li",{className:"menu__list-item"},n.createElement(v,b({className:(0,a.Z)("menu__link",r)},l)))}t.Z=function(e){var t=e,{mobile:r=!1,position:a}=t,o=p(t,["mobile","position"]);const l=r?g:h;return n.createElement(l,b({},o))}},86206:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(67294),a=r(55976),o=r(33204),l=r(86010),c=r(40190),i=r(67023),s=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function v(e){var t=e,{docId:r,activeSidebarClassName:s,label:v,docsPluginId:h}=t,g=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r})(t,["docId","activeSidebarClassName","label","docsPluginId"]);const{activeVersion:y,activeDoc:E}=(0,o.Iw)(h),{preferredVersion:w}=(0,c.J)(h),O=(0,o.yW)(h),k=function(e,t){const r=e.flatMap((e=>e.docs)),n=r.find((e=>e.id===t));if(!n){const n=r.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${n}`)}return n}((0,i.uniq)([y,w,O].filter(Boolean)),r);return n.createElement(a.Z,(_=((e,t)=>{for(var r in t||(t={}))f.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))b.call(t,r)&&p(e,r,t[r]);return e})({exact:!0},g),N={className:(0,l.Z)(g.className,{[s]:E&&E.sidebar===k.sidebar}),label:null!=v?v:k.id,to:k.path},u(_,m(N))));var _,N}},31319:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(67294),a=r(55976),o=r(62808),l=r(33204),c=r(40190),i=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&b(e,r,t[r]);if(m)for(var r of m(t))f.call(t,r)&&b(e,r,t[r]);return e},v=(e,t)=>s(e,u(t));const h=e=>e.docs.find((t=>t.id===e.mainDocId));function g(e){var t,r,i=e,{mobile:s,docsPluginId:u,dropdownActiveClassDisabled:b,dropdownItemsBefore:g,dropdownItemsAfter:y}=i,E=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(i,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]);const w=(0,l.Iw)(u),O=(0,l.gB)(u),k=(0,l.yW)(u),{preferredVersion:_,savePreferredVersionName:N}=(0,c.J)(u);const Z=function(){const e=O.map((e=>{const t=(null==w?void 0:w.alternateDocVersions[e.name])||h(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==w?void 0:w.activeVersion),onClick:()=>{N(e.name)}}}));return[...g,...e,...y]}(),C=null!=(r=null!=(t=w.activeVersion)?t:_)?r:k,P=s&&Z?"Versions":C.label,j=s&&Z?void 0:h(C).path;return Z.length<=1?n.createElement(a.Z,v(p({},E),{mobile:s,label:P,to:j,isActive:b?()=>!1:void 0})):n.createElement(o.Z,v(p({},E),{mobile:s,label:P,to:j,items:Z,isActive:b?()=>!1:void 0}))}},14988:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(67294),a=r(55976),o=r(33204),l=r(40190),c=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function b(e){var t,r=e,{label:c,to:b,docsPluginId:p}=r,v=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["label","to","docsPluginId"]);const h=(0,o.zu)(p),{preferredVersion:g}=(0,l.J)(p),y=(0,o.yW)(p),E=null!=(t=null!=h?h:g)?t:y,w=null!=c?c:E.label,O=null!=b?b:(e=>e.docs.find((t=>t.id===e.mainDocId)))(E).path;return n.createElement(a.Z,(k=((e,t)=>{for(var r in t||(t={}))m.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&f(e,r,t[r]);return e})({},v),i(k,s({label:w,to:O}))));var k}},62808:function(e,t,r){"use strict";var n=r(67294),a=r(86010),o=r(40190),l=r(55976),c=r(32064),i=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&b(e,r,t[r]);if(m)for(var r of m(t))f.call(t,r)&&b(e,r,t[r]);return e},v=(e,t)=>s(e,u(t)),h=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r};function g(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function y(e){var t,r=e,{items:o,position:i,className:s}=r,u=h(r,["items","position","className"]);const m=(0,n.useRef)(null),d=(0,n.useRef)(null),[f,b]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),n.createElement("div",{ref:m,className:(0,a.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":f})},n.createElement(l.O,v(p({className:(0,a.Z)("navbar__item navbar__link",s)},u),{onClick:u.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),b(!f))}}),null!=(t=u.children)?t:u.label),n.createElement("ul",{ref:d,className:"dropdown__menu"},o.map(((e,t)=>n.createElement(c.Z,v(p({isDropdownItem:!0,onKeyDown:e=>{if(t===o.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e),{key:t}))))))}function E(e){var t,r=e,{items:i,className:s,position:u}=r,m=h(r,["items","className","position"]);const d=(0,o.be)(),f=g(i,d),{collapsed:b,toggleCollapsed:y,setCollapsed:E}=(0,o.uR)({initialState:()=>!f});return(0,n.useEffect)((()=>{f&&E(!f)}),[d,f]),n.createElement("li",{className:(0,a.Z)("menu__list-item",{"menu__list-item--collapsed":b})},n.createElement(l.O,v(p({role:"button",className:(0,a.Z)("menu__link menu__link--sublist",s)},m),{onClick:e=>{e.preventDefault(),y()}}),null!=(t=m.children)?t:m.label),n.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},i.map(((e,t)=>n.createElement(c.Z,v(p({mobile:!0,isDropdownItem:!0,onClick:m.onClick,activeClassName:"menu__link--active"},e),{key:t}))))))}t.Z=function(e){var t=e,{mobile:r=!1}=t,a=h(t,["mobile"]);const o=r?E:y;return n.createElement(o,p({},a))}},32064:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(67294),a=r(55976),o=r(62808),l=r(36044),c=r(11368),i=r(40190),s=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function v(e){var t=e,{mobile:r,dropdownItemsBefore:a,dropdownItemsAfter:s}=t,v=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r})(t,["mobile","dropdownItemsBefore","dropdownItemsAfter"]);const{i18n:{currentLocale:h,locales:g,localeConfigs:y}}=(0,c.Z)(),E=(0,i.l5)();function w(e){return y[e].label}const O=[...a,...g.map((e=>{const t=`pathname://${E.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:w(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...s],k=r?"Languages":w(h);return n.createElement(o.Z,(_=((e,t)=>{for(var r in t||(t={}))f.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))b.call(t,r)&&p(e,r,t[r]);return e})({},v),N={href:"#",mobile:r,label:n.createElement("span",null,n.createElement(l.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),n.createElement("span",null,k)),items:O},u(_,m(N))));var _,N}var h=r(42012);function g({mobile:e}){return e?null:n.createElement(h.Z,null)}var y=Object.defineProperty,E=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const _={default:()=>a.Z,localeDropdown:()=>v,search:()=>g,dropdown:()=>o.Z,docsVersion:()=>r(14988).Z,docsVersionDropdown:()=>r(31319).Z,doc:()=>r(86206).Z};function N(e){var t=e,{type:r}=t,a=((e,t)=>{var r={};for(var n in e)w.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&E)for(var n of E(e))t.indexOf(n)<0&&O.call(e,n)&&(r[n]=e[n]);return r})(t,["type"]);const o=(e=>{const t=_[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()})(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(r,void 0!==a.items));return n.createElement(o,((e,t)=>{for(var r in t||(t={}))w.call(t,r)&&k(e,r,t[r]);if(E)for(var r of E(t))O.call(t,r)&&k(e,r,t[r]);return e})({},a))}},76289:function(e,t,r){"use strict";const n=r(67294).createContext(void 0);t.Z=n},50009:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(67294),a=r(86010),o=r(11368),l=r(2756),c={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},i=Object.defineProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var f=e=>{const{isClient:t}=(0,o.Z)(),{isDarkTheme:r}=(0,l.Z)(),i=e,{sources:f,className:b,alt:p=""}=i,v=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r})(i,["sources","className","alt"]),h=t?r?["dark"]:["light"]:["light","dark"];return n.createElement(n.Fragment,null,h.map((e=>n.createElement("img",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))m.call(t,r)&&d(e,r,t[r]);return e})({key:e,src:f[e],alt:p,className:(0,a.Z)(c.themedImage,c[`themedImage--${e}`],b)},v)))))}},58809:function(e,t,r){"use strict";var n=r(67294),a=r(84487);const o=()=>a.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;t.Z=(e,t=[])=>{const r=(0,n.useRef)(o()),a=()=>{const t=o();e&&e(t,r.current),r.current=t};(0,n.useEffect)((()=>{const e={passive:!0};return a(),window.addEventListener("scroll",a,e),()=>window.removeEventListener("scroll",a,e)}),t)}},2756:function(e,t,r){"use strict";var n=r(67294),a=r(76289);t.Z=function(){const e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},81567:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(33204),a=r(40190),o=r(11368);function l(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,o.Z)(),t=(0,n._r)(),r=(0,n.WS)(),l=(0,a.Oh)(),c=[a.HX,...Object.keys(t).map((function(e){var n,o;const c=(null==(n=null==r?void 0:r.activePlugin)?void 0:n.pluginId)===e?r.activeVersion:void 0,i=l[e],s=t[e].versions.find((e=>e.isLast)),u=null!=(o=null!=c?c:i)?o:s;return(0,a.os)(e,u.name)}))];return{locale:e.currentLocale,tags:c}}();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}},2199:function(e,t,r){"use strict";var n=r(5977),a=r(84487),o=r(11368);t.Z=function(){const e=(0,n.k6)(),t=(0,n.TH)(),{siteConfig:{baseUrl:r}={}}=(0,o.Z)();return{searchValue:a.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:r=>{const n=new URLSearchParams(t.search);r?n.set("q",r):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${r}search?q=${encodeURIComponent(e)}`}}}}]);