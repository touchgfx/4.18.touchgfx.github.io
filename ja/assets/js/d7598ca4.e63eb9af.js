"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2245],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=a},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},39130:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),i=n(73727),o=n(11368),a=n(35096),c=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var l=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))g.call(t,n)&&v(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:p,to:v,href:b,activeClassName:y,isActive:k,"data-noBrokenLinkCheck":O,autoAddBaseUrl:x=!0}=n,j=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:E,baseUrl:T}}=(0,o.Z)(),{withBaseUrl:P}=(0,l.C)(),C=(0,r.useContext)(u),Z=v||b,F=(0,a.Z)(Z),_=null==Z?void 0:Z.replace("pathname://","");let S=void 0!==_?(D=_,x&&(e=>e.startsWith("/"))(D)?P(D):D):void 0;var D;S&&F&&(S=(0,s.applyTrailingSlash)(S,{trailingSlash:E,baseUrl:T}));const X=(0,r.useRef)(!1),U=p?i.OL:i.rU,N=c.Z.canUseIntersectionObserver,G=(0,r.useRef)();(0,r.useEffect)((()=>(!N&&F&&null!=S&&window.docusaurus.prefetch(S),()=>{N&&G.current&&G.current.disconnect()})),[G,S,N,F]);const M=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,I=!S||!F||M;return S&&F&&!M&&!O&&C.collectLink(S),I?r.createElement("a",w(w({href:S},Z&&!F&&{target:"_blank",rel:"noopener noreferrer"}),j)):r.createElement(U,w((B=w({},j),d(B,f({onMouseEnter:()=>{X.current||null==S||(window.docusaurus.preload(S),X.current=!0)},innerRef:e=>{var t,n;N&&e&&F&&(t=e,n=()=>{null!=S&&window.docusaurus.prefetch(S)},G.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(G.current.unobserve(t),G.current.disconnect(),n())}))})),G.current.observe(t))},to:S||""}))),p&&{isActive:k,activeClassName:y}));var B}},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(11368),i=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(i,o)}},67023:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},17549:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return v},toc:function(){return w},default:function(){return y}});var r=n(3905),i=n(44035),o=n(29415),a=n(39130),c=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&f(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&f(e,n,t[n]);return e};const m={id:"widgets-and-containers",title:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u30b3\u30f3\u30c6\u30ca"},g=void 0,v={unversionedId:"development/ui-development/working-with-touchgfx/widgets-and-containers",id:"development/ui-development/working-with-touchgfx/widgets-and-containers",isDocsHomePage:!1,title:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u30b3\u30f3\u30c6\u30ca",description:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u3067\u6700\u3082\u6839\u5e79\u7684\u306a\u6982\u5ff5\u306e2\u3064\u3092\u53d6\u308a\u4e0a\u3052\u307e\u3059\u3002\u305d\u308c\u306f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u30b3\u30f3\u30c6\u30ca\u3067\u3059\u3002 \u3053\u308c\u3089\u306f\u3001\u30e6\u30fc\u30b6\u304cUI\u306e\u958b\u767a\u5168\u4f53\u3092\u901a\u3057\u3066\u4f7f\u7528\u3059\u308b\u69cb\u6210\u8981\u7d20\u306e2\u3064\u3067\u3059\u3002 \u3069\u3061\u3089\u3082TouchGFX\u3067\u63d0\u4f9b\u3055\u308c\u308b\u65e2\u88fd\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u542b\u3080\u3068\u540c\u6642\u306b\u3001\u30ab\u30b9\u30bf\u30e0\u5b9f\u88c5\u306e\u4f5c\u6210\u3092\u5341\u5206\u306b\u30b5\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u30aa\u30fc\u30d7\u30f3\u30a8\u30f3\u30c9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/widgets-and-containers.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/widgets-and-containers",permalink:"/4.18/ja/docs/development/ui-development/working-with-touchgfx/widgets-and-containers",tags:[],version:"current",frontMatter:{id:"widgets-and-containers",title:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u30b3\u30f3\u30c6\u30ca"},sidebar:"docs",previous:{title:"TouchGFX\u306b\u304a\u3051\u308bIDE\u306e\u4f7f\u7528",permalink:"/4.18/ja/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx"},next:{title:"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf",permalink:"/4.18/ja/docs/development/ui-development/working-with-touchgfx/simulator"}},w=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8",id:"widgets",children:[],level:2},{value:"\u30b3\u30f3\u30c6\u30ca",id:"containers",children:[],level:2}],b={toc:w};function y(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},b),f),u(t,l({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001TouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u3067\u6700\u3082\u6839\u5e79\u7684\u306a\u6982\u5ff5\u306e2\u3064\u3092\u53d6\u308a\u4e0a\u3052\u307e\u3059\u3002\u305d\u308c\u306f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u30b3\u30f3\u30c6\u30ca\u3067\u3059\u3002 \u3053\u308c\u3089\u306f\u3001\u30e6\u30fc\u30b6\u304cUI\u306e\u958b\u767a\u5168\u4f53\u3092\u901a\u3057\u3066\u4f7f\u7528\u3059\u308b\u69cb\u6210\u8981\u7d20\u306e2\u3064\u3067\u3059\u3002 \u3069\u3061\u3089\u3082TouchGFX\u3067\u63d0\u4f9b\u3055\u308c\u308b\u65e2\u88fd\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u542b\u3080\u3068\u540c\u6642\u306b\u3001\u30ab\u30b9\u30bf\u30e0\u5b9f\u88c5\u306e\u4f5c\u6210\u3092\u5341\u5206\u306b\u30b5\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u30aa\u30fc\u30d7\u30f3\u30a8\u30f3\u30c9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",h({},{id:"widgets"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),(0,r.kt)("p",null,"TouchGFX\u304a\u3088\u3073TouchGFX Designer\u30c4\u30fc\u30eb\u306f\u3001",(0,r.kt)("a",h({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"Text Area"),"\u3001",(0,r.kt)("a",h({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button"),"\u3001",(0,r.kt)("a",h({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"Texture Mapper"),"\u306a\u3069\u306e\u591a\u6570\u306e\u6a19\u6e96\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u3001\u30e6\u30fc\u30b6\u306f\u3053\u308c\u3092\u81ea\u7531\u306b\u4f7f\u7528\u3057\u3066UI\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\u57fa\u672c\u7684\u306a\u30ec\u30d9\u30eb\u3067\u306f\u3001TouchGFX\u306b\u304a\u3051\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306b\u63cf\u304b\u308c\u3001\u76f8\u4e92\u4f5c\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u4f55\u304b\u306e\u62bd\u8c61\u7684\u306a\u5b9a\u7fa9\u306b\u3059\u304e\u307e\u305b\u3093\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/button/widget-appearance.png",mdxType:"Figure"},"Image\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u4f7f\u7528\u3059\u308bButton\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),(0,r.kt)("p",null,"TouchGFX Designer\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u306f\u76ee\u7684\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u8ffd\u52a0\u3057\u3001\u5404\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u56fa\u6709\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u597d\u304d\u306a\u3088\u3046\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u3001TouchGFX\u304b\u3089\u63d0\u4f9b\u3055\u308c\u308b\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30d7\u306e\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b0\u30eb\u30fc\u30d7\u5206\u3051\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"add(widget_instance_name);"),"\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3042\u308b\u3044\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u8ffd\u52a0\u95a2\u6570\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"myContainer.add(widget_instance_name);"),"\u306a\u3069\uff09\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30b3\u30f3\u30c6\u30ca\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u8ffd\u52a0\u9806\u5e8f\u306b\u3088\u3063\u3066\u3001Z\u30aa\u30fc\u30c0\u30fc\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002 \u6700\u5f8c\u306b\u8ffd\u52a0\u3055\u308c\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u6700\u524d\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5ea7\u6a19\u306f\u5e38\u306b\u3001\u30eb\u30fc\u30c8\uff65\u30b3\u30f3\u30c6\u30ca\uff08\u30b9\u30af\u30ea\u30fc\u30f3\uff09\u307e\u305f\u306f\u30b3\u30f3\u30c6\u30ca\u306e\u3044\u305a\u308c\u304b\u306e\u89aa\u30ce\u30fc\u30c9\u3092\u57fa\u6e96\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u30e6\u30fc\u30b6\u306f\u56fa\u6709\u306e\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u72ec\u81ea\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-widgets",mdxType:"Link"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",h({},{id:"containers"}),"\u30b3\u30f3\u30c6\u30ca"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u306fTouchGFX\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3084\u305d\u306e\u4ed6\u306e\u30b3\u30f3\u30c6\u30ca\u306a\u3069\u306e\u5b50\u30ce\u30fc\u30c9\u3092\u683c\u7d0d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX Designer\u3067\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u306fWidgets\u30bf\u30d6\u306eContainers\u30ab\u30c6\u30b4\u30ea\u4e0b\u306b\u3042\u308a\u3001\u30c4\u30ea\u30fc\uff65\u30d3\u30e5\u30fc\u3067\u30b3\u30f3\u30c6\u30ca\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3053\u3068\u3067\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30b3\u30f3\u30c6\u30ca\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5b50\u306eZ\u65b9\u5411\u306e\u9806\u5e8f\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u306b\u5b50\u304c\u8ffd\u52a0\u3055\u308c\u305f\u9806\u5e8f\u306b\u3088\u3063\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002\u6700\u5f8c\u306b\u8ffd\u52a0\u3055\u308c\u305f\u5b50\u304c\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u6700\u524d\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX\u306b\u304a\u3051\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4f4d\u7f6e\u306f\u305d\u308c\u305e\u308c\u306e\u89aa\u3092\u57fa\u6e96\u306b\u6c7a\u307e\u308b\u306e\u3067\u3001\u89aa\u306e\u30b3\u30f3\u30c6\u30ca\u306e\u4f4d\u7f6e\u3092\u5909\u66f4\u3059\u308b\u3068\u3001\u305d\u308c\u306b\u5408\u308f\u305b\u3066\u5b50\u3082\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u306f\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30b3\u30f3\u30c6\u30ca\u306e\u5f62\u72b6\u3068\u4ea4\u308f\u308b\u5b50\u306e\u90e8\u5206\u306e\u307f\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u304c\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u3068\u3057\u3066\u6a5f\u80fd\u3059\u308b\u69d8\u5b50\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u6700\u521d\u306b\u8868\u793a\u3055\u308c\u308b\u306e\u306f\u30b3\u30f3\u30c6\u30ca\u306e\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3\u3067\u3001\u3053\u306e\u30b3\u30f3\u30c6\u30ca\u306e\u5b50\u304c\u30dc\u30bf\u30f3\u3067\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.gif",mdxType:"Figure"},"\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u3068\u3057\u3066\u6a5f\u80fd\u3059\u308b\u30b3\u30f3\u30c6\u30ca"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"\u30e6\u30fc\u30b6\u306f\u56fa\u6709\u306e\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u72ec\u81ea\u306e\u30b3\u30f3\u30c6\u30ca\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,r.kt)(a.Z,{to:"../touchgfx-engine-features/custom-containers",mdxType:"Link"},"\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}y.isMDXComponent=!0}}]);