"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6732],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(m,l(l({ref:e},s),{},{components:n})):a.createElement(m,l({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},39130:function(t,e,n){n.d(e,{Z:function(){return x}});var a=n(67294),r=n(73727),o=n(11368),l=n(35096),i=n(84487);const c=(0,a.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,_=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))k.call(e,n)&&_(t,n,e[n]);if(m)for(var n of m(e))g.call(e,n)&&_(t,n,e[n]);return t};var x=function(t){var e,n=t,{isNavLink:d,to:_,href:x,activeClassName:b,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:N=!0}=n,w=((t,e)=>{var n={};for(var a in t)k.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&m)for(var a of m(t))e.indexOf(a)<0&&g.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:L,baseUrl:O}}=(0,o.Z)(),{withBaseUrl:T}=(0,u.C)(),U=(0,a.useContext)(c),F=_||x,P=(0,l.Z)(F),C=null==F?void 0:F.replace("pathname://","");let Z=void 0!==C?(j=C,N&&(t=>t.startsWith("/"))(j)?T(j):j):void 0;var j;Z&&P&&(Z=(0,s.applyTrailingSlash)(Z,{trailingSlash:L,baseUrl:O}));const z=(0,a.useRef)(!1),D=d?r.OL:r.rU,S=i.Z.canUseIntersectionObserver,X=(0,a.useRef)();(0,a.useEffect)((()=>(!S&&P&&null!=Z&&window.docusaurus.prefetch(Z),()=>{S&&X.current&&X.current.disconnect()})),[X,Z,S,P]);const E=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,A=!Z||!P||E;return Z&&P&&!E&&!v&&U.collectLink(Z),A?a.createElement("a",h(h({href:Z},F&&!P&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(D,h((H=h({},w),p(H,f({onMouseEnter:()=>{z.current||null==Z||(window.docusaurus.preload(Z),z.current=!0)},innerRef:t=>{var e,n;S&&t&&P&&(e=t,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},X.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(X.current.unobserve(e),X.current.disconnect(),n())}))})),X.current.observe(e))},to:Z||""}))),d&&{isActive:y,activeClassName:b}));var H}},35096:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){n.d(e,{C:function(){return o},Z:function(){return l}});var a=n(11368),r=n(35096);function o(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return o?t+l:l}(e,t,n,a)}}function l(t,e={}){const{withBaseUrl:n}=o();return n(t,e)}},67271:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),o="/"===r||r===a?r:(l=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(l):function(t){return t.endsWith("/")?t.slice(0,-1):t}(l));var l;return t.replace(r,o)}},67023:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var o=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(o).default}})},11080:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},6919:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return g},toc:function(){return _},default:function(){return x}});var a=n(3905),r=n(39130),o=n(43861),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&p(t,n,e[n]);if(u)for(var n of u(e))d.call(e,n)&&p(t,n,e[n]);return t};const m={title:"FontContextualFormsTable"},k=void 0,g={unversionedId:"api/classes/structtouchgfx_1_1_font_contextual_forms_table",id:"api/classes/structtouchgfx_1_1_font_contextual_forms_table",isDocsHomePage:!1,title:"FontContextualFormsTable",description:"Structure providing information about the contextual forms available in a font.",source:"@site/docs/api/classes/structtouchgfx_1_1_font_contextual_forms_table.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_font_contextual_forms_table",permalink:"/4.18/ko/docs/api/classes/structtouchgfx_1_1_font_contextual_forms_table",tags:[],version:"current",frontMatter:{title:"FontContextualFormsTable"},sidebar:"docs",previous:{title:"Font",permalink:"/4.18/ko/docs/api/classes/classtouchgfx_1_1_font"},next:{title:"FontManager",permalink:"/4.18/ko/docs/api/classes/classtouchgfx_1_1_font_manager"}},_=[{value:"Public Types",id:"public-types",children:[],level:2},{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"arrayOf4UnicodesPtr",id:"arrayof4unicodesptr",children:[],level:3},{value:"arrayOf5UnicodesPtr",id:"arrayof5unicodesptr",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"contextualForms0621_063a",id:"contextualforms0621_063a",children:[],level:3},{value:"contextualForms0641_064a",id:"contextualforms0641_064a",children:[],level:3},{value:"contextualForms06XX",id:"contextualforms06xx",children:[],level:3},{value:"contextualForms06XXSize",id:"contextualforms06xxsize",children:[],level:3},{value:"contextualForms2Long",id:"contextualforms2long",children:[],level:3},{value:"contextualForms2LongSize",id:"contextualforms2longsize",children:[],level:3},{value:"contextualForms3Long",id:"contextualforms3long",children:[],level:3},{value:"contextualForms3LongSize",id:"contextualforms3longsize",children:[],level:3},{value:"contextualForms4Long",id:"contextualforms4long",children:[],level:3},{value:"contextualForms4LongSize",id:"contextualforms4longsize",children:[],level:3}],level:2}],h={toc:_};function x(t){var e,n=t,{components:l}=n,p=((t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=f(f({},h),p),i(e,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Structure providing information about the contextual forms available in a font. "),(0,a.kt)("h2",f({},{id:"public-types"}),"Public Types"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null})),(0,a.kt)("th",f({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"typedef const ",(0,a.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(*)","[4]"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#typedef-arrayof4unicodesptr",mdxType:"Link"},"arrayOf4UnicodesPtr")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Defines pointer to array of 4 unicodes type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null})),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),"typedef const ",(0,a.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(*)","[5]"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#typedef-arrayof5unicodesptr",mdxType:"Link"},"arrayOf5UnicodesPtr")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Defines pointer to array of 5 unicodes type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null})),(0,a.kt)("td",f({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",f({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:"right"})),(0,a.kt)("th",f({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(*"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms0621_063a",mdxType:"Link"},"contextualForms0621_063a")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Table of contextual forms for glyphs 0x0621 to 0x63A.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(*"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms0641_064a",mdxType:"Link"},"contextualForms0641_064a")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Table of contextual forms for glyphs 0x0641 to 0x64A.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(*"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms06xx",mdxType:"Link"},"contextualForms06XX")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Table of contextual forms for remaining glyphs 0x06XX.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"uint16_t"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms06xxsize",mdxType:"Link"},"contextualForms06XXSize")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Length of the table.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(*"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms2long",mdxType:"Link"},"contextualForms2Long")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Table of contextual forms for sequences of 2 glyphs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"uint16_t"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms2longsize",mdxType:"Link"},"contextualForms2LongSize")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Length of the table.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(*"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms3long",mdxType:"Link"},"contextualForms3Long")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Table of contextual forms for sequences of 3 glyphs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"uint16_t"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms3longsize",mdxType:"Link"},"contextualForms3LongSize")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Length of the table.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(*"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms4long",mdxType:"Link"},"contextualForms4Long")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Table of contextual forms for sequences of 4 glyphs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"}),"uint16_t"),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms4longsize",mdxType:"Link"},"contextualForms4LongSize")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Length of the table.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"right"})),(0,a.kt)("td",f({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",f({},{id:"public-types-documentation"}),"Public Types Documentation"),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#typedef-arrayof4unicodesptr",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"arrayof4unicodesptr"}),"arrayOf4UnicodesPtr"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header",markdown:"1"},(0,a.kt)("p",null," typedef const ",(0,a.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(*)","[4]"," ",(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#typedef-arrayof4unicodesptr",mdxType:"Link"},"arrayOf4UnicodesPtr")," ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Defines pointer to array of 4 unicodes type. "))),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#typedef-arrayof5unicodesptr",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"arrayof5unicodesptr"}),"arrayOf5UnicodesPtr"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header",markdown:"1"},(0,a.kt)("p",null," typedef const ",(0,a.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(*)","[5]"," ",(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_font_contextual_forms_table#typedef-arrayof5unicodesptr",mdxType:"Link"},"arrayOf5UnicodesPtr")," ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Defines pointer to array of 5 unicodes type. "))),(0,a.kt)("h2",f({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms0621_063a",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"contextualforms0621_063a"}),"contextualForms0621_063a"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const ",(0,a.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(* contextualForms0621_063a ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Table of contextual forms for glyphs 0x0621 to 0x63A. "))),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms0641_064a",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"contextualforms0641_064a"}),"contextualForms0641_064a"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const ",(0,a.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(* contextualForms0641_064a ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Table of contextual forms for glyphs 0x0641 to 0x64A. "))),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms06xx",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"contextualforms06xx"}),"contextualForms06XX"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const ",(0,a.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(* contextualForms06XX ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Table of contextual forms for remaining glyphs 0x06XX. "))),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms06xxsize",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"contextualforms06xxsize"}),"contextualForms06XXSize"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t contextualForms06XXSize ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Length of the table. "))),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms2long",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"contextualforms2long"}),"contextualForms2Long"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const ",(0,a.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(* contextualForms2Long ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Table of contextual forms for sequences of 2 glyphs. "))),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms2longsize",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"contextualforms2longsize"}),"contextualForms2LongSize"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t contextualForms2LongSize ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Length of the table. "))),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms3long",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"contextualforms3long"}),"contextualForms3Long"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const ",(0,a.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(* contextualForms3Long ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Table of contextual forms for sequences of 3 glyphs. "))),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms3longsize",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"contextualforms3longsize"}),"contextualForms3LongSize"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t contextualForms3LongSize ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Length of the table. "))),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms4long",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"contextualforms4long"}),"contextualForms4Long"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const ",(0,a.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar"),"(* contextualForms4Long ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Table of contextual forms for sequences of 4 glyphs. "))),(0,a.kt)(o.Z,{url:"structtouchgfx_1_1_font_contextual_forms_table#variable-contextualforms4longsize",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",f({},{id:"contextualforms4longsize"}),"contextualForms4LongSize"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t contextualForms4LongSize ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Length of the table. "))))}x.isMDXComponent=!0}}]);