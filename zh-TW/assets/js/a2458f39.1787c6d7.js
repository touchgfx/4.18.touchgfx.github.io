"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6110,9514],{36044:function(e,t){t.Z=()=>null},35088:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(67294),a=r(73935),l=r(11368),o=r(76775),c=r(25026),u=r(39130),s=r(30898),i=r(2199),m=r(57052),h=r(64136),f=r(2641),d=r(33084),b="searchBox_1ZXk",p=Object.defineProperty,C=Object.defineProperties,g=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&y(e,r,t[r]);if(v)for(var r of v(t))O.call(t,r)&&y(e,r,t[r]);return e},E=(e,t)=>C(e,g(t));let S=null;function Z({hit:e,children:t}){return n.createElement(u.Z,{to:e.url},t)}function w({state:e,onClose:t}){const{generateSearchPageLink:r}=(0,i.Z)();return n.createElement(u.Z,{to:r(e.query),onClick:t},"See all ",e.context.nbHits," results")}function x(e){var t,u,i=e,{contextualSearch:p}=i,C=((e,t)=>{var r={};for(var n in e)k.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&v)for(var n of v(e))t.indexOf(n)<0&&O.call(e,n)&&(r[n]=e[n]);return r})(i,["contextualSearch"]);const{siteMetadata:g}=(0,l.Z)(),y=(0,f.Z)(),x=null!=(u=null==(t=C.searchParameters)?void 0:t.facetFilters)?u:[],j=p?[...y,...x]:x,I=E(P({},C.searchParameters),{facetFilters:j}),{withBaseUrl:R}=(0,c.C)(),A=(0,o.k6)(),B=(0,n.useRef)(null),F=(0,n.useRef)(null),[M,$]=(0,n.useState)(!1),[D,T]=(0,n.useState)(null),_=(0,n.useCallback)((()=>S?Promise.resolve():Promise.all([r.e(736).then(r.bind(r,60736)),Promise.all([r.e(532),r.e(6945)]).then(r.bind(r,46945)),Promise.all([r.e(532),r.e(9846)]).then(r.bind(r,9846))]).then((([{DocSearchModal:e}])=>{S=e}))),[]),L=(0,n.useCallback)((()=>{_().then((()=>{B.current=document.createElement("div"),document.body.insertBefore(B.current,document.body.firstChild),$(!0)}))}),[_,$]),U=(0,n.useCallback)((()=>{$(!1),B.current.remove()}),[$]),V=(0,n.useCallback)((e=>{_().then((()=>{$(!0),T(e.key)}))}),[_,$,T]),Y=(0,n.useRef)({navigate({itemUrl:e}){A.push(e)}}).current,q=(0,n.useRef)((e=>e.map((e=>{const t=document.createElement("a");return e.url.endsWith("/")&&(e.url=e.url.replace(/\/$/,"")),t.href=e.url,E(P({},e),{url:R(`${t.pathname}${t.hash}`)})})))).current,H=(0,n.useMemo)((()=>e=>n.createElement(w,E(P({},e),{onClose:U}))),[U]),N=(0,n.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",g.docusaurusVersion),e)),[g.docusaurusVersion]);(0,m.D)({isOpen:M,onOpen:L,onClose:U,onInput:V,searchButtonRef:F});const Q=(0,d.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return n.createElement(n.Fragment,null,n.createElement(s.Z,null,n.createElement("link",{rel:"preconnect",href:`https://${C.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),n.createElement("div",{className:b},n.createElement(h.a,{onTouchStart:_,onFocus:_,onMouseOver:_,onClick:L,ref:F,translations:{buttonText:Q,buttonAriaLabel:Q}})),M&&(0,a.createPortal)(n.createElement(S,E(P({onClose:U,initialScrollY:window.scrollY,initialQuery:D,navigator:Y,transformItems:q,hitComponent:Z,resultsFooterComponent:H,transformSearchClient:N},C),{searchParameters:I})),B.current))}var j=function(){const{siteConfig:e}=(0,l.Z)();return n.createElement(x,P({},e.themeConfig.algolia))}}}]);