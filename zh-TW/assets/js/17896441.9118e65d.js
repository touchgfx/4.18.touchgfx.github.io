(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7918],{63954:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ee}});var n=a(67294),r=a(86010),l=a(33204),o=a(34603),i=a(31217),s=a(30910);var c=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=a(11368),m=a(40190),u=Object.defineProperty,p=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const h={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function E(e){const t=h[e.versionMetadata.banner];return n.createElement(t,((e,t)=>{for(var a in t||(t={}))v.call(t,a)&&f(e,a,t[a]);if(p)for(var a of p(t))b.call(t,a)&&f(e,a,t[a]);return e})({},e))}function g({to:e,onClick:t}){return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:e,onClick:t},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink}.")}function y({versionMetadata:e}){const{siteConfig:{title:t,url:a,customFields:r}}=(0,d.Z)(),{pluginId:o}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,m.J)(o),{latestVersionSuggestion:s}=(0,l.Jo)(o),[c,u]=(0,n.useState)([]);(0,n.useEffect)((()=>{fetch("/newestVersion.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){u(e)}))}),[]);return void 0===c[0]||c[0]===s.label?n.createElement(n.Fragment,null):n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(E,{siteTitle:t,versionMetadata:e})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{to:a,onClick:()=>i(s.name)})))}var _=function({versionMetadata:e}){return n.createElement(y,{versionMetadata:e})},N=a(3730);function O({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function w({lastUpdatedBy:e}){return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,e)}}," by {user}")}function k({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return n.createElement(n.Fragment,null,n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(O,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?n.createElement(w,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}var L=function(e,t,a){const[r,l]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,o=!1;const i=document.getElementsByClassName(e);for(;a<i.length&&!o;){const e=i[a],{href:s}=e,c=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===c&&(r&&r.classList.remove(t),e.classList.add(t),l(e),o=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},T="tableOfContents_35-E";const C="table-of-contents__link";function U({toc:e,isChild:t}){return e.length?n.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:C,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(U,{isChild:!0,toc:e.children}))))):null}var Z=function({toc:e}){return L(C,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(T,"thin-scrollbar")},n.createElement(U,{toc:e}))},j="tocCollapsible_1PrD",A="tocCollapsibleButton_2O1e",P="tocCollapsibleContent_2Ydz",x="tocCollapsibleExpanded_3GYr";function I({toc:e,className:t}){const{collapsed:a,toggleCollapsed:l}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,r.Z)(j,{[x]:!a},t)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",A),onClick:l},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:P,collapsed:a},n.createElement(U,{toc:e})))}var B="iconEdit_2_ui",S=Object.defineProperty,M=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,F=(e,t,a)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var z=e=>{var t=e,{className:a}=t,l=((e,t)=>{var a={};for(var n in e)V.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&M)for(var n of M(e))t.indexOf(n)<0&&D.call(e,n)&&(a[n]=e[n]);return a})(t,["className"]);return n.createElement("svg",((e,t)=>{for(var a in t||(t={}))V.call(t,a)&&F(e,a,t[a]);if(M)for(var a of M(t))D.call(t,a)&&F(e,a,t[a]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(B,a),"aria-hidden":"true"},l),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function R({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},n.createElement(z,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var H=a(50186),q="docItemContainer_33ec",J="lastUpdated_3DPF",Y="docItemCol_3FnS",$="tocMobile_3Hoh",G=Object.defineProperty,W=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,X=(e,t,a)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var ee=function(e){const{content:t,versionMetadata:a}=e,{metadata:i,frontMatter:s}=t,{image:d,keywords:m,hide_title:u,hide_table_of_contents:p}=s,{description:v,title:b,editUrl:f,lastUpdatedAt:h,formattedLastUpdatedAt:E,lastUpdatedBy:g}=i,{pluginId:y}=(0,l.gA)({failfast:!0}),O=(0,l.gB)(y).length>1,w=!u&&void 0===t.contentTitle,L=(0,o.Z)(),T=!p&&t.toc&&t.toc.length>0,C=T&&("desktop"===L||"ssr"===L);return n.createElement(n.Fragment,null,n.createElement(N.Z,((e,t)=>{for(var a in t||(t={}))K.call(t,a)&&X(e,a,t[a]);if(W)for(var a of W(t))Q.call(t,a)&&X(e,a,t[a]);return e})({},{title:b,description:v,keywords:m,image:d})),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",{[Y]:!p})},n.createElement(_,{versionMetadata:a}),n.createElement("div",{className:q},n.createElement("article",null,O&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",a.label),T&&n.createElement(I,{toc:t.toc,className:$}),n.createElement("div",{className:"markdown"},w&&n.createElement(H.N,null,b),n.createElement(t,null)),(f||h||g)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},f&&n.createElement(R,{editUrl:f})),n.createElement("div",{className:(0,r.Z)("col",J)},(h||g)&&n.createElement(k,{lastUpdatedAt:h,formattedLastUpdatedAt:E,lastUpdatedBy:g})))),n.createElement(c,{metadata:i}))),C&&n.createElement("div",{className:"col col--3"},n.createElement(Z,{toc:t.toc}))))}},50186:function(e,t,a){"use strict";a.d(t,{N:function(){return E},Z:function(){return g}});var n=a(67294),r=a(86010),l=a(30910),o=a(40190),i="enhancedAnchor_2LWZ",s="h1Heading_27L5",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&b(e,a,t[a]);if(u)for(var a of u(t))v.call(t,a)&&b(e,a,t[a]);return e},h=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&v.call(e,n)&&(a[n]=e[n]);return a};const E=function(e){var t,a=h(e,[]);return n.createElement("header",null,n.createElement("h1",(t=f({},a),d(t,m({id:void 0,className:s}))),a.children))};var g=e=>{return"h1"===e?E:(t=e,function(e){var a=e,{id:s}=a,c=h(a,["id"]);const{navbar:{hideOnScroll:d}}=(0,o.LU)();return s?n.createElement(t,f({},c),n.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,r.Z)("anchor",{[i]:!d}),id:s}),c.children,n.createElement("a",{className:"hash-link",href:`#${s}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):n.createElement(t,f({},c))});var t}}}]);