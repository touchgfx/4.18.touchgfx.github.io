"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[190],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,h=s["".concat(c,".").concat(u)]||s[u]||d[u]||a;return n?l.createElement(h,i(i({ref:t},m),{},{components:n})):l.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var l=n(67294);class r extends l.Component{render(){return l.createElement("div",{class:"code-header"},l.createElement("div",null,l.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var l=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,r.Z)(e.imageSource);return t?l.createElement("div",{class:"figure noshadow"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:a,src:i})),l.createElement("p",null,e.children)):l.createElement("div",{class:"figure"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:a,src:i})),l.createElement("p",null,e.children))}},29415:function(e,t,n){var l=n(67294),r=n(88678);const a=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends l.Component{render(){return l.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=i},88678:function(e,t,n){var l=n(67294);class r extends l.Component{render(){const e=`highlight highlight-${this.props.type}`;return l.createElement("div",{class:e},l.createElement("div",{class:"highlight-heading"},l.createElement("h5",null,l.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),l.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var l=n(67294);class r extends l.Component{render(){return l.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var l=n(67294),r=n(88678);const a=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},l.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends l.Component{render(){return l.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=i},29010:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return N},default:function(){return I},frontMatter:function(){return f},metadata:function(){return S},toc:function(){return w}});var l=n(3905),r=n(44035),a=n(29415),i=n(37793),o=n(31217),c=n(39130),p=n(22425),m=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(u)for(var n of u(t))k.call(t,n)&&g(e,n,t[n]);return e};const f={id:"scroll-wheel",title:"Scroll Wheel"},N=void 0,S={unversionedId:"development/ui-development/ui-components/containers/scroll-wheel",id:"development/ui-development/ui-components/containers/scroll-wheel",title:"Scroll Wheel",description:"Scroll Wheel\uc740 \ub2e4\uc218\uc758 \ud56d\ubaa9\uc774 \ud3ec\ud568\ub418\uc5b4 \uc2a4\ud06c\ub864\uc774 \uac00\ub2a5\ud55c \uba54\ub274\uc785\ub2c8\ub2e4. \ud720\uc5d0\uc11c \uc2a4\ud06c\ub864\ud558\uba74 \ud56d\ubaa9\ub4e4\uc774 \ub3d9\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\uba70, \uc120\ud0dd\ud55c \ud56d\ubaa9\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \uac15\uc870 \ud45c\uc2dc\ub429\ub2c8\ub2e4. Scroll Wheel\uacfc \uc77c\uc5b4\ub098\ub294 \uc778\ud130\ub799\uc158\uc5d0 \ubc18\uc751\ud558\ub3c4\ub85d \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uba74 \ud720\uc758 \ud56d\ubaa9\uacfc \uc77c\uc5b4\ub098\ub294 \uc778\ud130\ub799\uc158\uc5d0 \ub530\ub77c \ub2e4\uc591\ud55c \ucf5c\ubc31\uc744 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/scroll-wheel.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scroll-wheel",permalink:"/4.18/ko/docs/development/ui-development/ui-components/containers/scroll-wheel",draft:!1,tags:[],version:"current",frontMatter:{id:"scroll-wheel",title:"Scroll Wheel"},sidebar:"docs",previous:{title:"Scroll List",permalink:"/4.18/ko/docs/development/ui-development/ui-components/containers/scroll-list"},next:{title:"Slide Menu",permalink:"/4.18/ko/docs/development/ui-development/ui-components/containers/slide-menu"}},b={},w=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"Item Templates",id:"item-templates",level:3},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"user-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],C={toc:w};function I(e){var t,n=e,{components:m}=n,g=((e,t)=>{var n={};for(var l in e)h.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&u)for(var l of u(e))t.indexOf(l)<0&&k.call(e,l)&&(n[l]=e[l]);return n})(n,["components"]);return(0,l.kt)("wrapper",(t=v(v({},C),g),s(t,d({components:m,mdxType:"MDXLayout"}))),(0,l.kt)("p",null,"Scroll Wheel\uc740 \ub2e4\uc218\uc758 \ud56d\ubaa9\uc774 \ud3ec\ud568\ub418\uc5b4 \uc2a4\ud06c\ub864\uc774 \uac00\ub2a5\ud55c \uba54\ub274\uc785\ub2c8\ub2e4. \ud720\uc5d0\uc11c \uc2a4\ud06c\ub864\ud558\uba74 \ud56d\ubaa9\ub4e4\uc774 \ub3d9\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\uba70, \uc120\ud0dd\ud55c \ud56d\ubaa9\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \uac15\uc870 \ud45c\uc2dc\ub429\ub2c8\ub2e4. Scroll Wheel\uacfc \uc77c\uc5b4\ub098\ub294 \uc778\ud130\ub799\uc158\uc5d0 \ubc18\uc751\ud558\ub3c4\ub85d \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uba74 \ud720\uc758 \ud56d\ubaa9\uacfc \uc77c\uc5b4\ub098\ub294 \uc778\ud130\ub799\uc158\uc5d0 \ub530\ub77c \ub2e4\uc591\ud55c \ucf5c\ubc31\uc744 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Scroll Wheel"),(0,l.kt)("h2",v({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,l.kt)("p",null,"Scroll Wheel\uc740 TouchGFX Designer\uc758 Containers \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Scroll Wheel"),(0,l.kt)("h2",v({},{id:"properties"}),"\uc18d\uc131"),(0,l.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c Scroll Wheel\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,l.kt)("th",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Name")),(0,l.kt)("td",v({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,l.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,l.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("em",{parentName:"td"},"Type\uc740 ")," Scroll Wheel\uc758 \uc138\ub85c \ub610\ub294 \uac00\ub85c \ubc29\ud5a5\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Location")),(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,l.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,l.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Item Template")),(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("em",{parentName:"td"},"Item Template"),"\uc740 \ud15c\ud50c\ub9bf\uc73c\ub85c \uc0ac\uc6a9\ud560 CustomContainer\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Number of Items"),"\ub294 Scroll Wheel\uc5d0 \ud3ec\ud568\ub418\ub294 \ud56d\ubaa9 \uc218\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Initial Selected Item"),"\uc740 \ucc98\uc74c\uc5d0 \uc120\ud0dd\ub418\ub294 \ud56d\ubaa9\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Use Selected Style Template"),"\uc740 \uc120\ud0dd\ud55c \ud56d\ubaa9\uc5d0 \ub300\ud55c \ubcc4\ub3c4\uc758 \ud15c\ud50c\ub9bf \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Selected Style Template\uc740 ")," \uc120\ud0dd\ud55c \ud15c\ud50c\ub9bf\uc73c\ub85c \uc0ac\uc6a9\ud560 CustomContainer\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"List Appearance")),(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("em",{parentName:"td"},"Circular"),"\ub294 \uc2a4\ud06c\ub864\uc774 \ub05d\uc5d0 \ub3c4\ub2ec\ud588\uc744 \ub54c Scroll Wheel \ud56d\ubaa9\uc758 \uc21c\ud658 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Selected Item Offset"),"\uc740 \uc120\ud0dd\ud55c \ud56d\ubaa9\uc758 \uc704\uce58\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Item Margin"),"\uc740 \ud56d\ubaa9 \uac04 \uac04\uaca9\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Extra Size Before")," \uc640 ",(0,l.kt)("em",{parentName:"td"},"Extra Size After"),"\ub294 \uc704\uc758 ",(0,l.kt)("em",{parentName:"td"},"Selected Style Template")," \uc18d\uc131\uc774 \ud45c\uc2dc\ub418\ub294 \uc601\uc5ed\uc758 \ud06c\uae30\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Margin Before"),"\uc640 ",(0,l.kt)("em",{parentName:"td"},"Margin After"),"\ub294 \uc704\uc758 ",(0,l.kt)("em",{parentName:"td"},"Selected Style Template")," \uc18d\uc131\uc774 \ud45c\uc2dc\ub418\ub294 \uc601\uc5ed \uc55e\ub4a4 \uc5ec\ubc31\uc758 \ud06c\uae30\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Animation")),(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("em",{parentName:"td"},"Easing")," \ubc0f ",(0,l.kt)("em",{parentName:"td"},"Easing Option"),"\uc740  \uc560\ub2c8\uba54\uc774\uc158\uc5d0 \uc0ac\uc6a9\ud560 \uc644\ud654 \ubc29\uc815\uc2dd(easing euation) \uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Swipe Acc.")," \uc640 ",(0,l.kt)("em",{parentName:"td"},"Drag Acc. "),"\ub294 \uc2a4\ud06c\ub864 \uc2dc \uac00\uc18d\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Mixins")),(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,l.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,l.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,l.kt)("h3",v({},{id:"item-templates"}),"Item Templates"),(0,l.kt)("p",null,"Scroll List\uc758 \ud56d\ubaa9\uc740 ",(0,l.kt)("em",{parentName:"p"},"Item Template")," \uac1c\ub150\uc744 \ub530\ub985\ub2c8\ub2e4. Item Template\uc774\ub780 Scroll Wheel\uc758 \ud56d\ubaa9\uc5d0\uac8c \uadf8\ub798\ud53d \uc694\uc18c\ub97c \uc704\ud55c \uae30\ucd08 \uc5ed\ud560\uc744 \ud558\ub294 ",(0,l.kt)("a",v({parentName:"p"},{href:"../../touchgfx-engine-features/custom-containers"}),"CustomContainer"),"\ub97c \ub9d0\ud569\ub2c8\ub2e4. \uc120\ud0dd\ud55c \ud56d\ubaa9\uc744 \uac15\uc870 \ud45c\uc2dc\ud560 \ub54c Scroll Wheel\uc5d0\ub294 ",(0,l.kt)("em",{parentName:"p"},"Selected Style Template\uc774\ub77c\ub294 ")," \uc774\ub984\uc758 Item Template\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc774 \uc788\ub294\ub370, \uc774 Item Template\uc740 \uc120\ud0dd\ud55c \ud56d\ubaa9\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub429\ub2c8\ub2e4. Scroll Wheel\uc744 \uc0dd\uc131\ud558\ub824\uba74 ",(0,l.kt)("em",{parentName:"p"},"Selected Style Template")," \uc18d\uc131(\ud65c\uc131\ud654\ub41c \uacbd\uc6b0) \uacfc \ud568\uaed8 Item Template\uc73c\ub85c \uc0ac\uc6a9\ud560 CustomContainer\ub97c \uba3c\uc800 \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"Scroll Wheel\uc744 \uc0dd\uc131\ud55c \ud6c4\uc5d0\ub294 ",(0,l.kt)("em",{parentName:"p"},"Item Template")," \uc18d\uc131 \uc544\ub798\uc5d0\uc11c CustomContainer\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc5b4\uc11c ",(0,l.kt)("em",{parentName:"p"},"Item Template")," \uc18d\uc131\uc5d0\uc11c Custom Container\ub97c \uc120\ud0dd\ud558\uba74 Scroll Wheel\uc774 \uc120\ud0dd\ud55c Custom Container\uc5d0\uc11c \uc2a4\ud06c\ub864 \uac00\ub2a5\ud55c \ubc29\ud5a5\uc774 \uc544\ub2cc \ud06c\uae30 \uc18d\uc131(",(0,l.kt)("em",{parentName:"p"},"\uc138\ub85c \ubc29\ud5a5\uc758 \uacbd\uc6b0 \uac00\ub85c \uae38\uc774, \uac00\ub85c \ubc29\ud5a5\uc758 \uacbd\uc6b0 \uc138\ub85c \uae38\uc774"),") \uc5d0 \ub9de\ucdb0 \ud06c\uae30\uac00 \ubcc0\uacbd\ub429\ub2c8\ub2e4. \ub098\uba38\uc9c0 \ud06c\uae30 \uc18d\uc131(",(0,l.kt)("em",{parentName:"p"},"\uc138\ub85c \ubc29\ud5a5\uc758 \uacbd\uc6b0 \uc138\ub85c \uae38\uc774, \uac00\ub85c \ubc29\ud5a5\uc758 \uacbd\uc6b0 \uac00\ub85c \uae38\uc774"),") \uc744 \ubcc0\uacbd\ud558\uba74 \ud45c\uc2dc\ud560 \uc218 \uc788\ub294 \ud56d\ubaa9\uc758 \uc218\uac00 \uacb0\uc815\ub429\ub2c8\ub2e4."),(0,l.kt)("h2",v({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,l.kt)("p",null,"Scroll Wheel\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",v({},{id:"actions"}),"\uc561\uc158"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,l.kt)("th",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Hide widget")),(0,l.kt)("td",v({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",v({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"Show widget")),(0,l.kt)("td",v({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,l.kt)("h3",v({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,l.kt)("p",null,"Scroll Wheel\uc740 \ud2b8\ub9ac\uac70\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",v({},{id:"performance"}),"\uc131\ub2a5"),(0,l.kt)("p",null,"Scroll Wheel\uc740 ",(0,l.kt)("a",v({parentName:"p"},{href:"container"}),"Container")," \uc720\ud615\uc73c\ub85c, \uae30\ubcf8\uc801\uc73c\ub85c \ub4dc\ub85c\uc6b0 \uccb4\uc778\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc131\ub2a5\uc740 \uc804\uc801\uc73c\ub85c \ud558\uc704 \ub178\ub4dc\uc758 \uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,l.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("h2",v({},{id:"examples"}),"\uc608\uc81c"),(0,l.kt)("h3",v({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,l.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74TouchGFX Designer\uc5d0\uc11c Scroll Wheel\uc774 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,l.kt)("pre",null,(0,l.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollWheel.setPosition(140, 10, 200, 252);\n    scrollWheel.setHorizontal(false);\n    scrollWheel.setCircular(false);\n    scrollWheel.setEasingEquation(touchgfx::EasingEquations::backEaseIn);\n    scrollWheel.setSwipeAcceleration(10);\n    scrollWheel.setDragAcceleration(10);\n    scrollWheel.setNumberOfItems(60);\n    scrollWheel.setSelectedItemOffset(100);\n    scrollWheel.setSelectedItemExtraSize(0, 0);\n    scrollWheel.setSelectedItemMargin(0, 0);\n    scrollWheel.setDrawableSize(50, 3);\n    scrollWheel.setDrawables(scrollWheelListItems, updateItemCallback,\n                              scrollWheelSelectedListItems, updateItemCallback);\n    scrollWheel.animateToItem(0, 0);\n\n    add(scrollWheel);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollWheel.initialize();\n    for (int i = 0; i < scrollWheelListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelListItems[i].initialize();\n    }\n    for (int i = 0; i < scrollWheelSelectedListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelSelectedListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollWheelListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollWheelUpdateItem(*cc, itemIndex);\n    }\n    else if (items == &scrollWheelSelectedListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextCenterContainer* cc = (TextCenterContainer*)d;\n        scrollWheelUpdateCenterItem(*cc, itemIndex);\n    }\n}\n')),(0,l.kt)(i.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 ScrollWheel \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,l.kt)(o.Z,{mdxType:"InlineCode"},"scrollWheel.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("h3",v({},{id:"user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,l.kt)("p",null,"\uc2a4\ud06c\ub864 \ud720\uc758 \uadf8\ub798\ud53d \uc694\uc18c\uc640 \uc18d\uc131\uc5d0 \ub300\ud55c \uc124\uc815\uc744 \ub9c8\ucce4\ub2e4\uba74 \uc774\uc81c \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc5ec Scroll Wheel\uc758 \ud56d\ubaa9\ub4e4\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. TouchGFX Designer\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 Screen1ViewBase \ud074\ub798\uc2a4 \ud5e4\ub354 \ud30c\uc77c\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",v({parentName:"pre"},{className:"language-cpp",metastring:"{8-11,13-16}","{8-11,13-16}":!0}),"class Screen1ViewBase : public touchgfx::View\n{\npublic:\n    Screen1ViewBase();\n    virtual ~Screen1ViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n\n    touchgfx::BoxWithBorder boxWithBorder1;\n    touchgfx::ScrollWheelWithSelectionStyle scrollWheel1;\n    touchgfx::DrawableListItems<CustomContainer1, 6> scrollWheel1ListItems;\n    touchgfx::DrawableListItems<CustomContainer2, 2> scrollWheel1SelectedListItems;\n\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<Screen1ViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n\n};\n")),(0,l.kt)("p",null,"TouchGFX Designer\uac00 Scroll Wheel \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uba74 \uc704\uc5d0\uc11c \uac15\uc870 \ud45c\uc2dc\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem")," \ud568\uc218\uac00 \uc0dd\uc131\ub418\uc5b4 \uc0ac\uc6a9\uc790\uac00 Scroll Wheel\uc758 \ud56d\ubaa9\ub4e4\uc744 \uc7ac\uc815\uc758\ud558\uace0 \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UpdateItem")," \ud568\uc218\ub294 \uc5b8\uc81c\ub4e0\uc9c0 Scroll Wheel\uc5d0 \uc0dd\uc131\ud558\uace0 \uad6c\ud604\ud558\uc5ec \ud3ec\ud568\ub41c \ud56d\ubaa9\ub4e4\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\ub294 \ubc18\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateCenterItem")," \ud568\uc218\ub294 ",(0,l.kt)("em",{parentName:"p"},"Selected Style Template")," \uc18d\uc131\uc5d0 \ub530\ub77c \ud56d\ubaa9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \ub54c\ubb38\uc5d0 ",(0,l.kt)("em",{parentName:"p"},"Selected Style Template")," \uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc120\ud0dd\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc0dd\uc131\ub429\ub2c8\ub2e4. \ub450 \ud568\uc218\ub294 \uc5ec\ub7ec \ud56d\ubaa9\ub4e4\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uae30\ub2a5 \uc678\uc5d0\ub3c4 Scroll Wheel\uc758 \ud56d\ubaa9\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c \uc0ac\uc6a9\ub418\ub294 \ub9e4\uac1c\ubcc0\uc218\uac00 \ub3d9\uc77c\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud558\ub098\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"itemIndex")," \ub9e4\uac1c\ubcc0\uc218\ub85c\uc11c, \ud56d\ubaa9\uc758 \uc778\ub371\uc2a4 \uac12\uc774 \ud3ec\ud568\ub418\uc5b4 \uc5c5\ub370\uc774\ud2b8 \uc911\uc778 \ud56d\ubaa9\uc744 \uc2dd\ubcc4\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub098\uba38\uc9c0 \ud558\ub098\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"item")," \ub9e4\uac1c\ubcc0\uc218\ub85c\uc11c, Scroll Wheel\uc5d0 \ud45c\uc2dc\ub418\ub294 \ud56d\ubaa9\uc5d0 \ub300\ud55c \ucc38\uc870\uc785\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"item")," \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub530\ub77c \ubaa8\uc2b5\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uba74 Scroll Wheel\uc5d0 \ud45c\uc2dc\ub418\ub294 \ud56d\ubaa9\uc5d0 \ub300\ud55c \ub80c\ub354\ub9c1\uc774 \uc5c5\ub370\uc774\ud2b8\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud30c\uc77c\uc778 ",(0,l.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem")," \ud568\uc218\ub97c \uad6c\ud604\ud55c \uc608\uc81c\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex);\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HPP\n")),(0,l.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,l.kt)("pre",null,(0,l.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n\nvoid Screen1View::scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n")),(0,l.kt)("p",null,"\uc704\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp")," \ud5e4\ub354 \ud30c\uc77c\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem")," \ud568\uc218\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"\uc5d0\uc11c \uc7ac\uc815\uc758\ub41c \ud6c4 \uad6c\ud604\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uc608\uc81c\uc758 \ubaa9\uc801\uc740 \ud45c\uc2dc\ub418\ub294 \ud56d\ubaa9\uc758 \uc778\ub371\uc2a4 \uac12\uc744 \uc774\uc6a9\ud574 Item Template\uc758 \ud14d\uc2a4\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud55c \uac83\uc73c\ub85c, ",(0,l.kt)("a",v({parentName:"p"},{href:"scroll-wheel"}),"\uc774 \uc139\uc158\uc758 \ucd08\ubc18"),"\uc5d0 \uc81c\uc2dc\ub41c \uc608\uc81c\uc640 \ube44\uc2b7\ud569\ub2c8\ub2e4. Item Template\uacfc Selected Style Template\uc774 CustomContainer\ub97c \uae30\ubc18\uc73c\ub85c \ud558\uae30 \ub54c\ubb38\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"setIndex")," \ud568\uc218\uac00 \ub450 CustomContainer\uc5d0 \ubaa8\ub450 \uc0dd\uc131\ub429\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"setIndex")," \ud568\uc218\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"itemIndex")," \ub9e4\uac1c\ubcc0\uc218\ub97c \ud1b5\ud574 Item Template\uacfc Selected Style Template\uc758 \ud14d\uc2a4\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c item \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub9de\ucdb0 ",(0,l.kt)("inlineCode",{parentName:"p"},"setIndex")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 \ud45c\uc2dc\ub418\ub294 \ud56d\ubaa9\uc758 \ubaa8\uc2b5\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uc5b4 \uc778\ub371\uc2a4 \uac12\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,l.kt)("p",null,"Scroll Wheel\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/scroll-wheel-and-list-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Scroll Wheel \ubc0f List Example UI \ud15c\ud50c\ub9bf"),(0,l.kt)("h2",v({},{id:"api-reference"}),"API \ucc38\uc870"),(0,l.kt)(a.Z,{mdxType:"FurtherReading"},(0,l.kt)("li",null,(0,l.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scroll_wheel",mdxType:"Link"},"ScrollWheel \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}I.isMDXComponent=!0}}]);