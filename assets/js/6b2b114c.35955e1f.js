(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4667],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=d(n),g=r,k=p["".concat(u,".").concat(g)]||p[g]||s[g]||l;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var a=n(67294),r=n(73727),l=n(11368),i=n(35096),o=n(84487);const u=(0,a.createContext)({collectLink:()=>{}});var d=n(25026),c=n(67023),s=Object.defineProperty,p=Object.defineProperties,g=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,N=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&h(t,n,e[n]);if(k)for(var n of k(e))f.call(e,n)&&h(t,n,e[n]);return t};var b=function(t){var e,n=t,{isNavLink:s,to:h,href:b,activeClassName:y,isActive:v,"data-noBrokenLinkCheck":x,autoAddBaseUrl:_=!0}=n,w=((t,e)=>{var n={};for(var a in t)m.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&k)for(var a of k(t))e.indexOf(a)<0&&f.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:T}}=(0,l.Z)(),{withBaseUrl:P}=(0,d.C)(),L=(0,a.useContext)(u),j=h||b,C=(0,i.Z)(j),Z=null==j?void 0:j.replace("pathname://","");let D=void 0!==Z?(E=Z,_&&(t=>t.startsWith("/"))(E)?P(E):E):void 0;var E;D&&C&&(D=(0,c.applyTrailingSlash)(D,{trailingSlash:O,baseUrl:T}));const S=(0,a.useRef)(!1),U=s?r.OL:r.rU,I=o.Z.canUseIntersectionObserver;let A;(0,a.useEffect)((()=>(!I&&C&&null!=D&&window.docusaurus.prefetch(D),()=>{I&&A&&A.disconnect()})),[D,I,C]);const M=null!==(e=null==D?void 0:D.startsWith("#"))&&void 0!==e&&e,B=!D||!C||M;return D&&C&&!M&&!x&&L.collectLink(D),B?a.createElement("a",N(N({href:D},j&&!C&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(U,N((R=N({},w),p(R,g({onMouseEnter:()=>{S.current||null==D||(window.docusaurus.preload(D),S.current=!0)},innerRef:t=>{var e,n;I&&t&&C&&(e=t,n=()=>{null!=D&&window.docusaurus.prefetch(D)},A=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(A.unobserve(e),A.disconnect(),n())}))})),A.observe(e))},to:D||""}))),s&&{isActive:v,activeClassName:y}));var R}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(11368),r=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),l="/"===r||r===a?r:(i=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(i):function(t){return t.endsWith("/")?t.slice(0,-1):t}(i));var i;return t.replace(r,l)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},4e3:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return k},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return h},default:function(){return b}});var a=n(3905),r=n(31217),l=n(43861),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))c.call(e,n)&&p(t,n,e[n]);if(d)for(var n of d(e))s.call(e,n)&&p(t,n,e[n]);return t};const k={title:"Texts"},m=void 0,f={unversionedId:"api/classes/classtouchgfx_1_1_texts",id:"api/classes/classtouchgfx_1_1_texts",isDocsHomePage:!1,title:"Texts",description:"Class for setting language and getting texts.",source:"@site/docs/api/classes/classtouchgfx_1_1_texts.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_texts",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_texts",version:"current",frontMatter:{title:"Texts"},sidebar:"docs",previous:{title:"TextProvider",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_text_provider"},next:{title:"TextureMapper",permalink:"/4.18/docs/api/classes/classtouchgfx_1_1_texture_mapper"}},h=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"getLanguage",id:"getlanguage",children:[]},{value:"setLanguage",id:"setlanguage",children:[]},{value:"setTranslation",id:"settranslation",children:[]},{value:"getText",id:"gettext",children:[]}]}],N={toc:h};function b(t){var e,n=t,{components:i}=n,p=((t,e)=>{var n={};for(var a in t)c.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&d)for(var a of d(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=g(g({},N),p),o(e,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," Class for setting language and getting texts.\nThe language set will determine which texts will be used in the application. "),(0,a.kt)("h2",g({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:"right"})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),(0,a.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-languageid"}),"LanguageId")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-getlanguage",mdxType:"Link"},"getLanguage")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Gets the current language.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-setlanguage",mdxType:"Link"},"setLanguage")),"(",(0,a.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-languageid"}),"LanguageId")," id)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Sets the current language for texts.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-settranslation",mdxType:"Link"},"setTranslation")),"(",(0,a.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-languageid"}),"LanguageId")," id, const void * translation)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Adds or replaces a translation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")," *"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-gettext",mdxType:"Link"},"getText")),"(",(0,a.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-typedtextid"}),"TypedTextId")," id) const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"Get text in the set language.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:"right"})),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",g({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_texts#function-getlanguage",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"getlanguage"}),"getLanguage"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"static","\xa0","LanguageId","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-getlanguage",mdxType:"Link"},"getLanguage")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the current language. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The id of the language. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_texts#function-setlanguage",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"setlanguage"}),"setLanguage"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-setlanguage",mdxType:"Link"},"setLanguage")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-languageid"}),"LanguageId")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets the current language for texts. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"The id of the language."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_texts#function-settranslation",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"settranslation"}),"setTranslation"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-settranslation",mdxType:"Link"},"setTranslation")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-languageid"}),"LanguageId")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"id ,"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"const void *"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"translation"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Adds or replaces a translation. "),(0,a.kt)("p",null,"This function allows an application to add a translation at runtime."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"The id of the language to add or replace.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"translation"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"A pointer to the translation in flash or RAM."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_texts#function-gettext",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",g({},{id:"gettext"}),"getText"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"const Unicode::UnicodeChar *","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-gettext",mdxType:"Link"},"getText")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",g({parentName:"tr"},{align:null}),(0,a.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-typedtextid"}),"TypedTextId")),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",g({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})),(0,a.kt)("td",g({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Get text in the set language. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",g({parentName:"tr"},{align:null})),(0,a.kt)("th",g({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",g({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",g({parentName:"tr"},{align:null}),"The id of the text to lookup."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The text.")),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_texts#function-setlanguage"}),"setLanguage"))))))}b.isMDXComponent=!0}}]);