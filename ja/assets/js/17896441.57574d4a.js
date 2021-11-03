"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7918],{26495:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ue}});var n=a(67294),l=a(86010),r=a(34603),i=a(39130),o=a(33084);var s=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},c=a(11368),d=a(33204),m=a(32033),u=Object.defineProperty,p=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const g={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=g[e.versionMetadata.banner];return n.createElement(t,((e,t)=>{for(var a in t||(t={}))v.call(t,a)&&f(e,a,t[a]);if(p)for(var a of p(t))b.call(t,a)&&f(e,a,t[a]);return e})({},e))}function E({to:e,onClick:t}){return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:e,onClick:t},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink}.")}function y({versionMetadata:e}){const{siteConfig:{title:t,url:a,customFields:l}}=(0,c.Z)(),{pluginId:r}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,m.J)(r),{latestVersionSuggestion:o}=(0,d.Jo)(r),[s,u]=(0,n.useState)([]);(0,n.useEffect)((()=>{fetch("/newestVersion.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){u(e)}))}),[]);return void 0===s[0]||s[0]===o.label?n.createElement(n.Fragment,null):n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:t,versionMetadata:e})),n.createElement("div",{className:"margin-top--md"},n.createElement(E,{to:a,onClick:()=>i(o.name)})))}var O=function({versionMetadata:e}){return n.createElement(y,{versionMetadata:e})},N=a(3730);function k({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function _({lastUpdatedBy:e}){return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,e)}}," by {user}")}function w({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(k,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?n.createElement(_,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}var L="iconEdit_2_ui",U=Object.defineProperty,C=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,Z=(e,t,a)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var P=e=>{var t=e,{className:a}=t,r=((e,t)=>{var a={};for(var n in e)j.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&C)for(var n of C(e))t.indexOf(n)<0&&T.call(e,n)&&(a[n]=e[n]);return a})(t,["className"]);return n.createElement("svg",((e,t)=>{for(var a in t||(t={}))j.call(t,a)&&Z(e,a,t[a]);if(C)for(var a of C(t))T.call(t,a)&&Z(e,a,t[a]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(L,a),"aria-hidden":"true"},r),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function x({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(P,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var M="tag_1Okp",A="tagRegular_3MiF",H="tagWithCount_1HU1";var S=function(e){const{permalink:t,name:a,count:r}=e;return n.createElement(i.Z,{href:t,className:(0,l.Z)(M,{[A]:!r,[H]:r})},a,r&&n.createElement("span",null,r))},I="tags_2ga9",B="tag_11ep";function F({tags:e}){return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(I,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>n.createElement("li",{key:t,className:B},n.createElement(S,{name:e,permalink:t}))))))}var D="lastUpdated_13-_",V=Object.defineProperty,R=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,q=(e,t,a)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function J(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(F,((e,t)=>{for(var a in t||(t={}))z.call(t,a)&&q(e,a,t[a]);if(R)for(var a of R(t))W.call(t,a)&&q(e,a,t[a]);return e})({},e))))}function Y({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:a,formattedLastUpdatedAt:r}){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},e&&n.createElement(x,{editUrl:e})),n.createElement("div",{className:(0,l.Z)("col",D)},(t||a)&&n.createElement(w,{lastUpdatedAt:t,formattedLastUpdatedAt:r,lastUpdatedBy:a})))}function $(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:i,formattedLastUpdatedAt:o,lastUpdatedBy:s,tags:c}=a,d=c.length>0,u=!!(r||i||s);return d||u?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(J,{tags:c}),u&&n.createElement(Y,{editUrl:r,lastUpdatedAt:i,lastUpdatedBy:s,formattedLastUpdatedAt:o})):n.createElement(n.Fragment,null)}var G=Object.defineProperty,K=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,ee=(e,t,a)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function te({toc:e,className:t,linkClassName:a,isChild:l}){return e.length?n.createElement("ul",{className:l?void 0:t},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(te,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}function ae(e){var t=e,{toc:a,className:l="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:s}=t,c=((e,t)=>{var a={};for(var n in e)Q.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&K)for(var n of K(e))t.indexOf(n)<0&&X.call(e,n)&&(a[n]=e[n]);return a})(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const d=(0,m.LU)(),u=null!=o?o:d.tableOfContents.minHeadingLevel,p=null!=s?s:d.tableOfContents.maxHeadingLevel,v=(0,m.DA)({toc:a,minHeadingLevel:u,maxHeadingLevel:p}),b=(0,n.useMemo)((()=>{if(r&&i)return{linkClassName:r,linkActiveClassName:i,minHeadingLevel:u,maxHeadingLevel:p}}),[r,i,u,p]);return(0,m.Si)(b),n.createElement(te,((e,t)=>{for(var a in t||(t={}))Q.call(t,a)&&ee(e,a,t[a]);if(K)for(var a of K(t))X.call(t,a)&&ee(e,a,t[a]);return e})({toc:v,className:l,linkClassName:r},c))}var ne="tableOfContents_35-E",le=Object.defineProperty,re=Object.defineProperties,ie=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,de=(e,t,a)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var me=function(e){var t,a=e,{className:r}=a,i=((e,t)=>{var a={};for(var n in e)se.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&oe)for(var n of oe(e))t.indexOf(n)<0&&ce.call(e,n)&&(a[n]=e[n]);return a})(a,["className"]);return n.createElement("div",{className:(0,l.Z)(ne,"thin-scrollbar",r)},n.createElement(ae,(t=((e,t)=>{for(var a in t||(t={}))se.call(t,a)&&de(e,a,t[a]);if(oe)for(var a of oe(t))ce.call(t,a)&&de(e,a,t[a]);return e})({},i),re(t,ie({linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))))},ue="tocCollapsible_1PrD",pe="tocCollapsibleButton_2O1e",ve="tocCollapsibleContent_2Ydz",be="tocCollapsibleExpanded_3GYr";function fe({toc:e,className:t,minHeadingLevel:a,maxHeadingLevel:r}){const{collapsed:i,toggleCollapsed:s}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(ue,{[be]:!i},t)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",pe),onClick:s},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:ve,collapsed:i},n.createElement(ae,{toc:e,minHeadingLevel:a,maxHeadingLevel:r})))}var ge=a(64845),he="docItemContainer_33ec",Ee="docItemCol_3FnS",ye="tocMobile_3Hoh",Oe=Object.defineProperty,Ne=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,we=(e,t,a)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Le=(e,t)=>{for(var a in t||(t={}))ke.call(t,a)&&we(e,a,t[a]);if(Ne)for(var a of Ne(t))_e.call(t,a)&&we(e,a,t[a]);return e};function Ue(e){const{content:t,versionMetadata:a}=e,{metadata:i,frontMatter:o}=t,{image:c,keywords:d,hide_title:u,hide_table_of_contents:p,toc_min_heading_level:v,toc_max_heading_level:b}=o,{description:f,title:g}=i,h=!u&&void 0===t.contentTitle,E=(0,r.Z)(),y=!p&&t.toc&&t.toc.length>0,k=y&&("desktop"===E||"ssr"===E);return n.createElement(n.Fragment,null,n.createElement(N.Z,Le({},{title:g,description:f,keywords:d,image:c})),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[Ee]:!p})},n.createElement(O,{versionMetadata:a}),n.createElement("div",{className:he},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),y&&n.createElement(fe,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:b,className:(0,l.Z)(m.kM.docs.docTocMobile,ye)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},h&&n.createElement(ge.N,null,g),n.createElement(t,null)),n.createElement($,Le({},e))),n.createElement(s,{metadata:i}))),k&&n.createElement("div",{className:"col col--3"},n.createElement(me,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:b,className:m.kM.docs.docTocDesktop}))))}},64845:function(e,t,a){a.d(t,{N:function(){return E},Z:function(){return y}});var n=a(67294),l=a(86010),r=a(33084),i=a(32033),o="anchorWithStickyNavbar_31ik",s="anchorWithHideOnScrollNavbar_3R7-",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&b(e,a,t[a]);if(u)for(var a of u(t))v.call(t,a)&&b(e,a,t[a]);return e},g=(e,t)=>d(e,m(t)),h=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&v.call(e,n)&&(a[n]=e[n]);return a};const E=function(e){var t=h(e,[]);return n.createElement("header",null,n.createElement("h1",g(f({},t),{id:void 0}),t.children))};var y=e=>{return"h1"===e?E:(t=e,function(e){var a=e,{id:c}=a,d=h(a,["id"]);const{navbar:{hideOnScroll:m}}=(0,i.LU)();return c?n.createElement(t,g(f({},d),{className:(0,l.Z)("anchor",{[s]:m,[o]:!m}),id:c}),d.children,n.createElement("a",{"aria-hidden":"true",className:"hash-link",href:`#${c}`,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(t,f({},d))});var t}}}]);