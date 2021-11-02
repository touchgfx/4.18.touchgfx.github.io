(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5394],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var a=n(67294),r=n(73727),i=n(11368),o=n(35096),l=n(84487);const u=(0,a.createContext)({collectLink:()=>{}});var c=n(25026),s=n(67023),p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,g=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))f.call(e,n)&&g(t,n,e[n]);if(k)for(var n of k(e))_.call(e,n)&&g(t,n,e[n]);return t};var b=function(t){var e,n=t,{isNavLink:p,to:g,href:b,activeClassName:v,isActive:y,"data-noBrokenLinkCheck":x,autoAddBaseUrl:N=!0}=n,w=((t,e)=>{var n={};for(var a in t)f.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&k)for(var a of k(t))e.indexOf(a)<0&&_.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:E}}=(0,i.Z)(),{withBaseUrl:P}=(0,c.C)(),j=(0,a.useContext)(u),T=g||b,D=(0,o.Z)(T),A=null==T?void 0:T.replace("pathname://","");let S=void 0!==A?(Z=A,N&&(t=>t.startsWith("/"))(Z)?P(Z):Z):void 0;var Z;S&&D&&(S=(0,s.applyTrailingSlash)(S,{trailingSlash:O,baseUrl:E}));const L=(0,a.useRef)(!1),C=p?r.OL:r.rU,q=l.Z.canUseIntersectionObserver,U=(0,a.useRef)();(0,a.useEffect)((()=>(!q&&D&&null!=S&&window.docusaurus.prefetch(S),()=>{q&&U.current&&U.current.disconnect()})),[U,S,q,D]);const M=null!==(e=null==S?void 0:S.startsWith("#"))&&void 0!==e&&e,I=!S||!D||M;return S&&D&&!M&&!x&&j.collectLink(S),I?a.createElement("a",h(h({href:S},T&&!D&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(C,h((B=h({},w),m(B,d({onMouseEnter:()=>{L.current||null==S||(window.docusaurus.preload(S),L.current=!0)},innerRef:t=>{var e,n;q&&t&&D&&(e=t,n=()=>{null!=S&&window.docusaurus.prefetch(S)},U.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.current.unobserve(e),U.current.disconnect(),n())}))})),U.current.observe(e))},to:S||""}))),p&&{isActive:y,activeClassName:v}));var B}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return i},Z:function(){return o}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const o=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+o:o}(e,t,n,a)}}function o(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const{trailingSlash:n,baseUrl:a}=e;if(t.startsWith("#"))return t;if(void 0===n)return t;const[r]=t.split(/[#?]/),i="/"===r||r===a?r:(o=r,n?function(t){return t.endsWith("/")?t:`${t}/`}(o):function(t){return t.endsWith("/")?t.slice(0,-1):t}(o));var o;return t.replace(r,i)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},155:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return k},contentTitle:function(){return f},metadata:function(){return _},toc:function(){return g},default:function(){return b}});var a=n(3905),r=n(31217),i=n(43861),o=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&m(t,n,e[n]);if(c)for(var n of c(e))p.call(e,n)&&m(t,n,e[n]);return t};const k={title:"AnimationSetting"},f=void 0,_={unversionedId:"api/classes/structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting",id:"api/classes/structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting",isDocsHomePage:!1,title:"AnimationSetting",description:"Information about how a specific animation parameter should be animated.",source:"@site/docs/api/classes/structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting",permalink:"/4.18/ko/docs/api/classes/structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting",tags:[],version:"current",frontMatter:{title:"AnimationSetting"},sidebar:"docs",previous:{title:"AnimatedImageButtonStyle",permalink:"/4.18/ko/docs/api/classes/classtouchgfx_1_1_animated_image_button_style"},next:{title:"AnimationTextureMapper",permalink:"/4.18/ko/docs/api/classes/classtouchgfx_1_1_animation_texture_mapper"}},g=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"animationActive",id:"animationactive",children:[],level:3},{value:"animationDelay",id:"animationdelay",children:[],level:3},{value:"animationDuration",id:"animationduration",children:[],level:3},{value:"animationEnd",id:"animationend",children:[],level:3},{value:"animationProgressionEquation",id:"animationprogressionequation",children:[],level:3},{value:"animationStart",id:"animationstart",children:[],level:3}],level:2}],h={toc:g};function b(t){var e,n=t,{components:o}=n,m=((t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&c)for(var a of c(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=d(d({},h),m),l(e,u({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Information about how a specific animation parameter should be animated. "),(0,a.kt)("h2",d({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"right"})),(0,a.kt)("th",d({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"}),"bool"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationactive",mdxType:"Link"},"animationActive")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Should this animation be performed?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"}),"uint16_t"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationdelay",mdxType:"Link"},"animationDelay")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"A delay before the actual animation start. Expressed in ticks.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"}),"uint16_t"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationduration",mdxType:"Link"},"animationDuration")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The complete duration of the animation. Expressed in ticks.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationend",mdxType:"Link"},"animationEnd")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The animation end value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"}),(0,a.kt)("a",d({parentName:"td"},{href:"../namespacetouchgfx#typedef-easingequation"}),"EasingEquation")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationprogressionequation",mdxType:"Link"},"animationProgressionEquation")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"EasingEquation expressing the development of the value during the animation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationstart",mdxType:"Link"},"animationStart")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The animation start value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"right"})),(0,a.kt)("td",d({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",d({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationactive",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",d({},{id:"animationactive"}),"animationActive"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"bool animationActive ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Should this animation be performed? "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationdelay",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",d({},{id:"animationdelay"}),"animationDelay"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t animationDelay ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"A delay before the actual animation start. Expressed in ticks. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationduration",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",d({},{id:"animationduration"}),"animationDuration"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint16_t animationDuration ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The complete duration of the animation. Expressed in ticks. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationend",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",d({},{id:"animationend"}),"animationEnd"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float animationEnd ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The animation end value. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationprogressionequation",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",d({},{id:"animationprogressionequation"}),"animationProgressionEquation"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"../namespacetouchgfx#typedef-easingequation"}),"EasingEquation")," animationProgressionEquation ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"EasingEquation expressing the development of the value during the animation. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_animation_texture_mapper_1_1_animation_setting#variable-animationstart",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",d({},{id:"animationstart"}),"animationStart"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float animationStart ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The animation start value. "))))}b.isMDXComponent=!0}}]);