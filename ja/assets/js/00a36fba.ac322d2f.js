"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9604,9514],{36044:function(e,t){t.Z=()=>null},35088:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(67294),a=n(73935),l=n(11368),o=n(76775),c=n(25026),s=n(39130),u=n(30898),i=n(2199),m=n(57052),h=n(64136),f=n(2641),d=n(33084),p="searchBox_1ZXk",b=Object.defineProperty,C=Object.defineProperties,g=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&y(e,n,t[n]);if(v)for(var n of v(t))O.call(t,n)&&y(e,n,t[n]);return e},E=(e,t)=>C(e,g(t));let S=null;function Z({hit:e,children:t}){return r.createElement(s.Z,{to:e.url},t)}function w({state:e,onClose:t}){const{generateSearchPageLink:n}=(0,i.Z)();return r.createElement(s.Z,{to:n(e.query),onClick:t},"See all ",e.context.nbHits," results")}function x(e){var t,s,i=e,{contextualSearch:b}=i,C=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&v)for(var r of v(e))t.indexOf(r)<0&&O.call(e,r)&&(n[r]=e[r]);return n})(i,["contextualSearch"]);const{siteMetadata:g}=(0,l.Z)(),y=(0,f.Z)(),x=null!=(s=null==(t=C.searchParameters)?void 0:t.facetFilters)?s:[],j=b?[...y,...x]:x,I=E(P({},C.searchParameters),{facetFilters:j}),{withBaseUrl:R}=(0,c.C)(),A=(0,o.k6)(),B=(0,r.useRef)(null),F=(0,r.useRef)(null),[M,$]=(0,r.useState)(!1),[D,T]=(0,r.useState)(null),_=(0,r.useCallback)((()=>S?Promise.resolve():Promise.all([n.e(736).then(n.bind(n,60736)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,46945)),Promise.all([n.e(532),n.e(9846)]).then(n.bind(n,9846))]).then((([{DocSearchModal:e}])=>{S=e}))),[]),L=(0,r.useCallback)((()=>{_().then((()=>{B.current=document.createElement("div"),document.body.insertBefore(B.current,document.body.firstChild),$(!0)}))}),[_,$]),U=(0,r.useCallback)((()=>{$(!1),B.current.remove()}),[$]),V=(0,r.useCallback)((e=>{_().then((()=>{$(!0),T(e.key)}))}),[_,$,T]),Y=(0,r.useRef)({navigate({itemUrl:e}){A.push(e)}}).current,q=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,t.pathname.endsWith("/")&&(t.pathname=t.pathname.replace(/\/$/,"")),E(P({},e),{url:R(`${t.pathname}${t.hash}`)})})))).current,H=(0,r.useMemo)((()=>e=>r.createElement(w,E(P({},e),{onClose:U}))),[U]),N=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",g.docusaurusVersion),e)),[g.docusaurusVersion]);(0,m.D)({isOpen:M,onOpen:L,onClose:U,onInput:V,searchButtonRef:F});const Q=(0,d.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(u.Z,null,r.createElement("link",{rel:"preconnect",href:`https://${C.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.createElement("div",{className:p},r.createElement(h.a,{onTouchStart:_,onFocus:_,onMouseOver:_,onClick:L,ref:F,translations:{buttonText:Q,buttonAriaLabel:Q}})),M&&(0,a.createPortal)(r.createElement(S,E(P({onClose:U,initialScrollY:window.scrollY,initialQuery:D,navigator:Y,transformItems:q,hitComponent:Z,resultsFooterComponent:H,transformSearchClient:N},C),{searchParameters:I})),B.current))}var j=function(){const{siteConfig:e}=(0,l.Z)();return r.createElement(x,P({},e.themeConfig.algolia))}}}]);