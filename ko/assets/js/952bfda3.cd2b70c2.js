"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9561],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},39130:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),a=n(73727),o=n(11368),i=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),p=n(67023),s=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&k(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:s,to:k,href:b,activeClassName:y,isActive:w,"data-noBrokenLinkCheck":O,autoAddBaseUrl:T=!0}=n,P=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:N,baseUrl:x}}=(0,o.Z)(),{withBaseUrl:j}=(0,u.C)(),E=(0,r.useContext)(c),_=k||b,F=(0,i.Z)(_),X=null==_?void 0:_.replace("pathname://","");let S=void 0!==X?(C=X,T&&(e=>e.startsWith("/"))(C)?j(C):C):void 0;var C;S&&F&&(S=(0,p.applyTrailingSlash)(S,{trailingSlash:N,baseUrl:x}));const B=(0,r.useRef)(!1),G=s?a.OL:a.rU,Z=l.Z.canUseIntersectionObserver,A=(0,r.useRef)();(0,r.useEffect)((()=>(!Z&&F&&null!=S&&window.docusaurus.prefetch(S),()=>{Z&&A.current&&A.current.disconnect()})),[A,S,Z,F]);const I=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,L=!S||!F||I;return S&&F&&!I&&!O&&E.collectLink(S),L?r.createElement("a",v(v({href:S},_&&!F&&{target:"_blank",rel:"noopener noreferrer"}),P)):r.createElement(G,v((U=v({},P),d(U,f({onMouseEnter:()=>{B.current||null==S||(window.docusaurus.preload(S),B.current=!0)},innerRef:e=>{var t,n;Z&&e&&F&&(t=e,n=()=>{null!=S&&window.docusaurus.prefetch(S)},A.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.current.unobserve(t),A.current.disconnect(),n())}))})),A.current.observe(t))},to:S||""}))),s&&{isActive:w,activeClassName:y}));var U}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,o)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},51214:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return g},metadata:function(){return k},toc:function(){return v},default:function(){return y}});var r=n(3905),a=n(39130),o=n(44035),i=n(22425),l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&f(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&f(e,n,t[n]);return e};const h={id:"graphics-engine",title:"\uadf8\ub798\ud53d \uc5d4\uc9c4"},g=void 0,k={unversionedId:"basic-concepts/graphics-engine",id:"basic-concepts/graphics-engine",isDocsHomePage:!1,title:"\uadf8\ub798\ud53d \uc5d4\uc9c4",description:"TouchGFX \uadf8\ub798\ud53d \uc5d4\uc9c4\uc758 \uc8fc\ub41c \uc5ed\ud560\uc740 \ub0b4\uc7a5\ub41c \uc7a5\uce58\uc758 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uadf8\ub798\ud53d\uc744 \ub4dc\ub85c\uc789\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/graphics-engine.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/graphics-engine",permalink:"/4.18/ko/docs/basic-concepts/graphics-engine",tags:[],version:"current",frontMatter:{id:"graphics-engine",title:"\uadf8\ub798\ud53d \uc5d4\uc9c4"},sidebar:"docs",previous:{title:"\ud504\ub808\uc784\ubc84\ud37c",permalink:"/4.18/ko/docs/basic-concepts/framebuffer"},next:{title:"\uba54\uc778 \ub8e8\ud504",permalink:"/4.18/ko/docs/basic-concepts/rendering"}},v=[{value:"\uc7a5\uba74 \ubaa8\ub378",id:"scene-model",children:[],level:2},{value:"\ubaa8\ub378 \uc870\uc791",id:"manipulate-the-model",children:[],level:2},{value:"\uadf8\ub9ac\uae30 \uba85\ub839 \uc2e4\ud589",id:"issue-drawing-commands",children:[],level:2},{value:"\uba54\uc778 \ub8e8\ud504",id:"main-loop",children:[],level:2},{value:"\ud50c\ub7ab\ud3fc \uc801\uc751 \ub2a5\ub825",id:"platform-adaptibility",children:[],level:2}],b={toc:v};function y(e){var t,n=e,{components:l}=n,f=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),f),c(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX \uadf8\ub798\ud53d \uc5d4\uc9c4\uc758 \uc8fc\ub41c \uc5ed\ud560\uc740 \ub0b4\uc7a5\ub41c \uc7a5\uce58\uc758 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uadf8\ub798\ud53d\uc744 \ub4dc\ub85c\uc789\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 TouchGFX \uadf8\ub798\ud53d \uc5d4\uc9c4\uc5d0 \ub300\ud55c \uc18c\uac1c\uc640 \ub354\ubd88\uc5b4 \uc774\ub7ec\ud55c \ubc29\uc2dd\uc744 \uc774\uc6a9\ud558\ub294 \uc774\uc720\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4."),(0,r.kt)("h2",m({},{id:"scene-model"}),"\uc7a5\uba74 \ubaa8\ub378"),(0,r.kt)("p",null,"\uadf8\ub798\ud53d \uc5d4\uc9c4\uc740 \ud06c\uac8c \ub450 \uac00\uc9c0 \ubc94\uc8fc\ub85c \ub098\ub269\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc989\uc2dc \ubaa8\ub4dc \uadf8\ub798\ud53d \uc5d4\uc9c4"),"\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uadf8\ub798\ud53d\uc744 \ubc14\ub85c \ub4dc\ub85c\uc789\ud560 \uc218 \uc788\ub294 API\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uadf8\ub9ac\uae30 \uc5f0\uc0b0\uc744 \uc801\uc2dc\uc5d0 \ud638\ucd9c\ud558\ub294 \uac83\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc720\uc9c0 \ubaa8\ub4dc \uadf8\ub798\ud53d \uc5d4\uc9c4"),"\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 \ud45c\uc2dc\ub418\ub294 \uadf8\ub798\ud53d \uad6c\uc131\uc694\uc18c\uc758 \ucd94\uc0c1\uc801 \ubaa8\ub378\uc744 \uc870\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5d4\uc9c4\uc740 \uc774 \uadf8\ub798\ud53d \uad6c\uc131\uc694\uc18c \ubaa8\ub378\uc744 \uc815\ud655\ud55c \uadf8\ub798\ud53d \uadf8\ub9ac\uae30 \uc5f0\uc0b0\uc73c\ub85c \uc801\uc2dc\uc5d0 \ubcc0\ud658\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"TouchGFX\ub294 \uc720\uc9c0 \ubaa8\ub4dc \uadf8\ub798\ud53d \uc6d0\ub9ac\ub97c \ub530\ub985\ub2c8\ub2e4. \uc989, TouchGFX\ub294 \uc0ac\uc6a9\uc790\uac00 \uc870\uc791\ud560 \uc218 \uc788\ub294 \ubaa8\ub378\uc744 \uc81c\uacf5\ud558\uace0, \uc774\ud6c4 \uc870\uc791\ub41c \ubaa8\ub378\uc744 \ucd5c\uc801\uc758 \ub80c\ub354\ub9c1 \uba54\uc18c\ub4dc \ud638\ucd9c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/basic-concepts/retained-mode-graphics2.svg",noShadow:"true",width:480,mdxType:"Figure"},"\uc720\uc9c0 \ubaa8\ub4dc \uadf8\ub798\ud53d"),(0,r.kt)("p",null,"TouchGFX\uac00 \uc720\uc9c0 \ubaa8\ub4dc\ub85c \uc2e4\ud589\ub418\ub294 \ub370 \ub530\ub978 \uc774\uc810\uc5d0\ub294 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\ub294\ub370, \ub300\ud45c\uc801\uc778 \uc774\uc810\uc744 \uc608\ub85c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc0ac\uc6a9 \uc6a9\uc774\uc131:")," \uc720\uc9c0 \ubaa8\ub4dc \uadf8\ub798\ud53d \uc5d4\uc9c4\uc740 \uc0ac\uc6a9\uc774 \uc27d\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \ub0b4\ubd80 \ubaa8\ub378\uc5d0 \ub300\ud55c \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud558\uc5ec \uad6c\uc131\uc694\uc18c\uc758 \uc2a4\ud06c\ub9b0 \uad6c\uc131 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \ubfd0, \uc2e4\uc81c \uadf8\ub9ac\uae30 \uc5f0\uc0b0\uc5d0 \ub300\ud574\uc11c\ub294 \uc2e0\uacbd \uc4f8 \ud544\uc694 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc131\ub2a5:")," TouchGFX\ub294 \uc7a5\uba74 \ubaa8\ub378\uc744 \ubd84\uc11d\ud558\uc5ec \ubaa8\ub378\uc744 \uc2a4\ud06c\ub9b0\uc5d0 \uadf8\ub9b4 \ub54c \ud544\uc694\ud55c \ud638\ucd9c\uc744 \ucd5c\uc801\ud654\ud569\ub2c8\ub2e4. \uc774\ub54c \uc228\uc740 \uad6c\uc131\uc694\uc18c\ub294 \uc758\ub3c4\uc801\uc73c\ub85c \uadf8\ub9ac\uc9c0 \uc54a\uc73c\uba70, \uad6c\uc131\uc694\uc18c\uc5d0\uc11c \ubc14\ub010 \ubd80\ubd84\ub9cc \uadf8\ub824\uc11c \uc804\uc1a1\ud558\uac70\ub098, \ud504\ub808\uc784\ubc84\ud37c\ub97c \uad00\ub9ac\ud558\ub294 \uc791\uc5c5 \ub4f1\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc0c1\ud0dc \uad00\ub9ac:")," TouchGFX\ub294 \uc7a5\uba74 \ubaa8\ub378\uc5d0\uc11c \ud65c\uc131\ud654\ub41c \ubd80\ubd84\uc744 \ucd94\uc801\ud569\ub2c8\ub2e4. \ub355\ubd84\uc5d0 \uc0ac\uc6a9\uc790\ub294 \uc7a5\uba74 \ubaa8\ub378 \ub0b4\uc6a9\uc744 \ub354\uc6b1 \uc27d\uac8c \ucd5c\uc801\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"TouchGFX\uac00 \uc720\uc9c0 \ubaa8\ub4dc \uadf8\ub798\ud53d \uae30\ubc95\uc744 \ub530\ub97c \ub54c \ubc1c\uc0dd\ud558\ub294 \uc8fc\ub41c \ub2e8\uc810\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uba54\ubaa8\ub9ac \uc0ac\uc6a9:")," \uc7a5\uba74 \ubaa8\ub378\uc744 \ub098\ud0c0\ub0b4\uba74 \uba54\ubaa8\ub9ac\ub97c \ucc28\uc9c0\ud558\uac8c \ub429\ub2c8\ub2e4. TouchGFX\ub294 \uc7a5\uba74 \ubaa8\ub378\uc744 \ubd84\uc11d\ud558\uc5ec \ud574\ub2f9\ud558\ub294 \ub80c\ub354\ub9c1 \uc791\uc5c5\uc744 \ucd5c\uc801\ud654\ud568\uc73c\ub85c\uc368 \ucd08\ub2f9 60\ud504\ub808\uc784\uc73c\ub85c \ub80c\ub354\ub9c1\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc9c0\uae08\uae4c\uc9c0 TouchGFX\uc758 \uc7a5\uba74 \ubaa8\ub378\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uba54\ubaa8\ub9ac \uc6a9\ub7c9\uc744 \uc904\uc774\uae30 \uc704\ud574 \ub9ce\uc740 \ub178\ub825\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc7a5\uba74 \ubaa8\ub378\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uba54\ubaa8\ub9ac\uc758 \uc6a9\ub7c9\uc740 1\ud0ac\ub85c\ubc14\uc774\ud2b8\uc5d0 \ud6e8\uc52c \ubabb \ubbf8\uce69\ub2c8\ub2e4.")),(0,r.kt)("h2",m({},{id:"manipulate-the-model"}),"\ubaa8\ub378 \uc870\uc791"),(0,r.kt)("p",null,"\uc7a5\uba74 \ubaa8\ub378\uc740 \uc5ec\ub7ec \uac00\uc9c0 \uc694\uc18c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/basic-concepts/scene-model.svg",noShadow:"true",width:280,mdxType:"Figure"},"\uc704\uc82f \ud2b8\ub9ac"),(0,r.kt)("p",null,"\ubaa8\ub378\uc758 \uac01 \uad6c\uc131\uc694\uc18c\ub294 \uc5f0\uacb0\ub41c \ubd80\ubaa8 \uad6c\uc131\uc694\uc18c\uac00 1\uac1c\uc529 \uc788\uc2b5\ub2c8\ub2e4. \ubd80\ubaa8 \uad6c\uc131\uc694\uc18c \uc5ed\uc2dc \uc7a5\uba74 \ubaa8\ub378\uc758 \uc77c\ubd80\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubaa8\ub378\uc744 \uc77c\ubc18\uc801\uc73c\ub85c ",(0,r.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"}),"\ud2b8\ub9ac"),"\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc55e\uc73c\ub85c \uc774\ub7ec\ud55c \ud2b8\ub9ac \uad6c\uc131\uc694\uc18c\ub97c UI \uad6c\uc131\uc694\uc18c \ub0b4\uc9c0\ub294 \uc704\uc82f\uc774\ub77c\uace0 \uce6d\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uad00\uc810\uc5d0\uc11c \ubd24\uc744 \ub54c, \ud45c\uc2dc\ub418\ub294 \uadf8\ub798\ud53d\uc740 \uc7a5\uba74 \ubaa8\ub378\uc758 \uc704\uc82f\uc744 \uc124\uc815\ud558\uac70\ub098 \uc870\uc791\ud588\uc744 \ub54c \uc5c5\ub370\uc774\ud2b8\ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uce58\uc640 \uc774\ubbf8\uc9c0\ub97c \uc124\uc815\ud558\uc5ec \ubc84\ud2bc\uc744 \uc7a5\uba74 \ubaa8\ub378\uc5d0 \ucd94\uac00\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"myButton.setXY(100,50);\nmyButton.setBitmaps(Bitmap(BITMAP_BUTTON_RELEASED_ID), Bitmap(BITMAP_BUTTON_PRESSED_ID));\nadd(myButton);\n")),(0,r.kt)("h2",m({},{id:"issue-drawing-commands"}),"\uadf8\ub9ac\uae30 \uba85\ub839 \uc2e4\ud589"),(0,r.kt)("p",null,"\uacb0\uacfc\uc801\uc73c\ub85c TouchGFX\ub294 \uc7a5\uba74 \ubaa8\ub378\uc744 \ub80c\ub354\ub9c1\ud560 \ub54c \uadf8\ub9ac\uae30 API\ub97c \uc774\uc6a9\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uae30 API\uc5d0\ub294 \ubc15\uc2a4, \uc774\ubbf8\uc9c0, \ud14d\uc2a4\ud2b8, \uc120, \ub2e4\uac01\ud615, \ud14d\uc2a4\ucc98 \uc0bc\uac01\ud615 \ub4f1 \uadf8\ub798\ud53d \ud504\ub9ac\ubbf8\ud2f0\ube0c\ub97c \uadf8\ub9b4 \ub54c \ud544\uc694\ud55c \uba54\uc18c\ub4dc\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 TouchGFX\uc758 ",(0,r.kt)(a.Z,{to:"../development/ui-development/ui-components/buttons/button",mdxType:"Link"},"\ubc84\ud2bc")," \uc704\uc82f\uc740 \ub80c\ub354\ub9c1 \uc2dc \uc774\ubbf8\uc9c0 \uadf8\ub9ac\uae30 \uc704\ud574 ",(0,r.kt)(a.Z,{to:"../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap",mdxType:"Link"},"drawPartialBitmap \uba54\uc18c\ub4dc"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. TouchGFX\uc5d0\uc11c \ubc84\ud2bc \uc704\uc82f\uc744 \uadf8\ub9b4 \ub54c \uc0ac\uc6a9\ub418\ub294 \uc18c\uc2a4 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uc720\uc0ac\ud569\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"touchgfx/widgets/button.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void Button::draw(const Rect& invalidatedArea) const\n{\n    // calculate the part of the bitmap to draw\n    api.drawPartialBitmap(bitmap, x, y, part, alpha);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("inlineCode",{parentName:"em"},"touchgfx/widgets/button.cpp"),"\uc5d0\uc11c \uc2e4\uc81c \uc18c\uc2a4\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624.")),(0,r.kt)("p",null,"TouchGFX\uc5d0\ub294 \ucd5c\uc801\ud654\ub41c \uadf8\ub9ac\uae30 API \uad6c\ud604\uccb4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)(a.Z,{to:"../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap",mdxType:"Link"},"drawPartialBitmap")," \uc778\uc2a4\ud134\uc2a4 \uba54\uc18c\ub4dc\ub294 \ube44\ud2b8\ub9f5 \uadf8\ub9ac\uae30\ub97c \uc704\ud574 \uae30\ubc18 \ud558\ub4dc\uc6e8\uc5b4(\uac00\ub2a5\ud55c \uacbd\uc6b0 Chrom-ART)\ub97c \uc774\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub530\ub77c\uc11c \uc0c8\ub85c\uc6b4 \uc720\ud615\uc758 \uc704\uc82f\uc744 \ucd94\uac00\ud558\uc5ec \uc7a5\uba74 \ubaa8\ub378\uc744 \ud655\uc7a5\ud560 \ub54c\ub294 \uc774\ub7ec\ud55c API \uadf8\ub9ac\uae30 \uba54\uc18c\ub4dc\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)(a.Z,{to:"../development/ui-development/touchgfx-engine-features/custom-widgets",mdxType:"Link"},"\ucee4\uc2a4\ud140 \uc704\uc82f"),"\uc744 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc740 \ud574\ub2f9 \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("p",null,"\uadf8\ub9ac\uae30 API \uba54\uc18c\ub4dc\uc758 \uad6c\ud604\uccb4\ub294 \ud50c\ub7ab\ud3fc\uc5d0 \ub530\ub77c \ub2e4\ub974\uba70, \ud2b9\uc815 MCU\uc5d0 \ucd5c\uc801\ud654\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",m({},{id:"main-loop"}),"\uba54\uc778 \ub8e8\ud504"),(0,r.kt)("p",null,"\ub2e4\uc218\uc758 \uac8c\uc784 \uc5d4\uc9c4\uacfc \uadf8\ub798\ud53d \uc5d4\uc9c4\uc744 \ube44\ub86f\ud574 \ud2b9\ud788 TouchGFX\uc758 \uc791\uc5c5 \ubc29\uc2dd\uc740 \ubb34\ud55c \ub8e8\ud504\ub77c\uace0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX\uc758 \uba54\uc778 \ub8e8\ud504\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc138 \uac00\uc9c0 \uc8fc\uc694 \uc791\uc5c5\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc774\ubca4\ud2b8 \uc218\uc9d1:")," \ud130\uce58 \uc2a4\ud06c\ub9b0, \ubb3c\ub9ac\uc801 \ubc84\ud2bc \ub204\ub984, \ubc31\uc5d4\ub4dc \uc2dc\uc2a4\ud15c\uc758 \uba54\uc2dc\uc9c0 \ub4f1\uc5d0\uc11c \uc774\ubca4\ud2b8\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc7a5\uba74 \ubaa8\ub378 \uc5c5\ub370\uc774\ud2b8:")," \uc218\uc9d1\ub41c \uc774\ubca4\ud2b8\uc5d0 \ub300\ud574 \ubaa8\ub378\uc758 \uc704\uce58\uc640 \uc560\ub2c8\uba54\uc774\uc158, \uc0c9\uc0c1, \uc774\ubbf8\uc9c0 \ub4f1\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uc5ec \ubc18\uc751\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc7a5\uba74 \ubaa8\ub378 \ub80c\ub354\ub9c1:")," \ubaa8\ub378\uc5d0\uc11c \uc5c5\ub370\uc774\ud2b8\ub41c \ubd80\ubd84\uc744 \ub2e4\uc2dc \ub4dc\ub85c\uc789\ud558\uc5ec \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uba54\uc778 \ub8e8\ud504\ub97c \ub3c4\ud45c\ub85c \ub098\ud0c0\ub0b4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/basic-concepts/engine-cycle.png",noShadow:"true",width:320,mdxType:"Figure"},"\uba54\uc778 \ub8e8\ud504"),(0,r.kt)("p",null,"\uba54\uc778 \ub8e8\ud504\uac00 \uc2e4\ud589\ub420 \ub54c\ub9c8\ub2e4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ud55c \ubc88\uc529 \uc2e4\ud589\ub41c\ub2e4\uace0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",m({},{id:"platform-adaptibility"}),"\ud50c\ub7ab\ud3fc \uc801\uc751 \ub2a5\ub825"),(0,r.kt)("p",null,"TouchGFX\ub294 STM32\uc5d0 \uc0bd\uc785\ub418\ub294 \ubaa8\ub4e0 \uad6c\uc131\uc5d0\uc11c \uc2e4\ud589\ub418\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 \uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \uc791\uc5c5\ub4e4\ub3c4 \ub9de\ucda4 \uc124\uc815\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \uc218\uc9d1\uc740 \uc804\ub2f4 \ucd94\uc0c1\ud654 \uacc4\uce35\uc5d0\uc11c \ucc98\ub9ac\ub429\ub2c8\ub2e4. \ucd94\uc0c1\ud654 \uacc4\uce35\uc5d0 \ub300\ud55c \ub9de\ucda4 \uc124\uc815\uc740 ",(0,r.kt)(a.Z,{to:"../development/touchgfx-hal-development/touchgfx-al-development-introduction",mdxType:"Link"},"TouchGFX AL \uac1c\ubc1c")," \uc139\uc158\uc5d0 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub378 \uc5c5\ub370\uc774\ud2b8\ub294 \uc804\uc801\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4. \uc5c5\ub370\uc774\ud2b8 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)(a.Z,{to:"../development/ui-development/ui-development-introduction",mdxType:"Link"},"UI \uac1c\ubc1c")," \uc139\uc158\uc5d0 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud504\ub808\uc784\ubc84\ud37c\uc5d0 \ub300\ud55c \uadf8\ub798\ud53d \ub80c\ub354\ub9c1\uc740 TouchGFX\uc5d0\uc11c \ucc98\ub9ac\ud558\uba70, \uc77c\ubc18\uc801\uc73c\ub85c \ub9de\ucda4 \uc124\uc815\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud504\ub808\uc784\ubc84\ud37c\uc758 \ud53d\uc140\uc744 \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uc804\uc1a1\ud558\ub294 \uc791\uc5c5\uc740 \ud50c\ub7ab\ud3fc\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \ud50c\ub7ab\ud3fc\uc5d0 \ub530\ub77c \ub9de\ucda4 \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc740 ",(0,r.kt)("a",m({parentName:"li"},{href:"../development/board-bring-up/board-introduction"}),"\ubcf4\ub4dc \ube0c\ub9c1 \uc5c5")," \ubc0f ",(0,r.kt)("a",m({parentName:"li"},{href:"../development/touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL \uac1c\ubc1c")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624.")),(0,r.kt)("p",null,"\ub2e4\uc74c \uc139\uc158\uc5d0\uc11c TouchGFX\uc758 \uba54\uc778 \ub8e8\ud504\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc2ed\uc2dc\uc624."))}y.isMDXComponent=!0}}]);