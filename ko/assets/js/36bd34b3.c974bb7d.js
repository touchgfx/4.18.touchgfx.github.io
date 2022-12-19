"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7454],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,k=u["".concat(d,".").concat(s)]||u[s]||c[s]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:l,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=i},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=i},93063:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return M},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return x}});var r=n(3905),a=n(44035),l=n(29415),i=n(37793),o=n(31217),d=n(39130),p=n(22425),m=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))g.call(t,n)&&h(e,n,t[n]);return e};const b={id:"slide-menu",title:"Slide Menu"},v=void 0,f={unversionedId:"development/ui-development/ui-components/containers/slide-menu",id:"development/ui-development/ui-components/containers/slide-menu",title:"Slide Menu",description:"TouchGFX\uc5d0\uc11c Slide Menu\ub294 \ub0b4\ubd80 Container\uc640 Image, \uadf8\ub9ac\uace0 \ud3bc\uce5c \uc0c1\ud0dc\uc640 \uc811\ud78c \uc0c1\ud0dc \uc0ac\uc774\uc5d0\uc11c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\uac00 \uac00\ub2a5\ud55c \uc635\uc158\ud615 Button\uc73c\ub85c \uad6c\uc131\ub41c Container \uc804\uc6a9 \uc704\uc82f\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/slide-menu.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/slide-menu",permalink:"/4.18/ko/docs/development/ui-development/ui-components/containers/slide-menu",draft:!1,tags:[],version:"current",frontMatter:{id:"slide-menu",title:"Slide Menu"},sidebar:"docs",previous:{title:"Scroll Wheel",permalink:"/4.18/ko/docs/development/ui-development/ui-components/containers/scroll-wheel"},next:{title:"Box Progress",permalink:"/4.18/ko/docs/development/ui-development/ui-components/progress-indicators/box-progress"}},y={},x=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],E={toc:x};function M(e){var t,n=e,{components:m}=n,h=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=N(N({},E),h),u(t,c({components:m,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\uc5d0\uc11c Slide Menu\ub294 \ub0b4\ubd80 ",(0,r.kt)("a",N({parentName:"p"},{href:"container"}),"Container"),"\uc640 ",(0,r.kt)("a",N({parentName:"p"},{href:"../images/image"}),"Image"),", \uadf8\ub9ac\uace0 \ud3bc\uce5c \uc0c1\ud0dc\uc640 \uc811\ud78c \uc0c1\ud0dc \uc0ac\uc774\uc5d0\uc11c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\uac00 \uac00\ub2a5\ud55c \uc635\uc158\ud615 ",(0,r.kt)("a",N({parentName:"p"},{href:"../buttons/button"}),"Button"),"\uc73c\ub85c \uad6c\uc131\ub41c ",(0,r.kt)("a",N({parentName:"p"},{href:"container"}),"Container")," \uc804\uc6a9 \uc704\uc82f\uc785\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/slide-menu/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Slide Menu"),(0,r.kt)("h2",N({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,r.kt)("p",null,"Slide Menu\ub294 TouchGFX Designer\uc758 Containers \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/slide-menu/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Slide Menu"),(0,r.kt)("h2",N({},{id:"properties"}),"\uc18d\uc131"),(0,r.kt)("p",null,"Slide Menu\uc758 \uc18d\uc131\uc740 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\ubc84\ud2bc\uc758 \ud06c\uae30\ub294 \uc120\ud0dd\ud55c \uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\uc5d0 \ub530\ub77c \uacb0\uc815\ub429\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Expanding Direction")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Expanding Direction"),"\uc740 Slide Menu\uac00 \ud3bc\uccd0\uc9c0\ub294 \ubc29\ud5a5\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"State")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"State"),"\ub294 \uc2ac\ub77c\uc774\ub4dc \uba54\ub274\uc758 \ucd08\uae30 \uc0c1\ud0dc(\uc811\ud78c \ub610\ub294 \ud3bc\uce5c \uc0c1\ud0dc)\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Collapsed: Visible Pixels"),"\ub294 \uc811\ud78c \uc0c1\ud0dc\uc77c \ub54c \ud45c\uc2dc\ub418\ub294 \ud53d\uc140\uc758 \uc591\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Expanded: Hidden Pixels"),"\ub294 \ud3bc\uce5c \uc0c1\ud0dc\uc77c \ub54c \ud45c\uc2dc\ub418\uc9c0 \uc54a\ub294 \ud53d\uc140\uc758 \uc591\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Expanded Timeout"),"\uc740 \ud3bc\uce5c \uc0c1\ud0dc\uc5d0\uc11c \uc811\ud78c \uc0c1\ud0dc\ub85c \uc790\ub3d9\uc73c\ub85c \ub3cc\uc544\uac08 \ub54c\uae4c\uc9c0 \uc18c\uc694\ub418\ub294 \uc2dc\uac04\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Background")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Background Image"),"\ub294 \ubc30\uacbd\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Background Location"),"\uc740 \uc704\uc82f\uc758 \uc88c\ud45c\ub97c \uae30\uc900\uc73c\ub85c \ubc30\uacbd \uc774\ubbf8\uc9c0\uc758 x,y \uc88c\ud45c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Button")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Use Button"),"\uc740 \uc704\uc82f\uc758 \uc0c1\ud0dc\ub97c \uc81c\uc5b4\ud560 \ub54c \ubc84\ud2bc \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Released Image"),"\ub294 \ubc84\ud2bc\uc5d0\uc11c \uc190\uc744 \ub5c0 \uc0c1\ud0dc\uc5d0 \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Pressed Image"),"\ub294 \ubc84\ud2bc\uc744 \ub204\ub978 \uc0c1\ud0dc\uc5d0 \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Button Location"),"\uc740 \uc704\uc82f\uc758 \uc88c\ud45c\ub97c \uae30\uc900\uc73c\ub85c \ubc84\ud2bc\uc758 x,y \uc88c\ud45c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Animation")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Easing")," \ubc0f ",(0,r.kt)("em",{parentName:"td"},"Easing Option"),"\uc740 \uc560\ub2c8\uba54\uc774\uc158\uc5d0 \uc0ac\uc6a9\ud560 \uc644\ud654 \ubc29\uc815\uc2dd(easing euation)\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Duration"),"\uc740 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc2e4\ud589\ud558\ub294 \ub370 \uc18c\uc694\ub418\ub294 \uc2dc\uac04\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"\uc54c\ud30c")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,r.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",N({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,r.kt)("p",null,"Slide Menu\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",N({},{id:"actions"}),"\uc561\uc158"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc704\uc82f\ubcc4 \uc561\uc158")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Change State of Slide Menu")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"Slide Menu\ub97c \uc811\ud788\uac70\ub098 \ud3bc\uce5c \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Reset Timer of Slide Menu")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"Slide Menu\ub97c \uc811\ud78c \uc0c1\ud0dc\ub85c \uc790\ub3d9\uc73c\ub85c \ubcf5\uc6d0\ud558\ub294 \ud0c0\uc774\uba38\ub97c \ub9ac\uc14b\ud569\ub2c8\ub2e4.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,r.kt)("h3",N({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud2b8\ub9ac\uac70")),(0,r.kt)("th",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Slide Menu animation ended")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"\ud55c \uc0c1\ud0dc\uc5d0\uc11c \ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubc14\ub00c\ub294 Slide Menu \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc885\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",N({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Slide Menu state changed")),(0,r.kt)("td",N({parentName:"tr"},{align:null}),"Slide Menu\uc758 \uc0c1\ud0dc\uac00 \ubc14\ub00c\uc5c8\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h2",N({},{id:"performance"}),"\uc131\ub2a5"),(0,r.kt)("p",null,"Slide Menu\ub294 ",(0,r.kt)("a",N({parentName:"p"},{href:"container"}),"Container")," \uc720\ud615\uc73c\ub85c, \uae30\ubcf8\uc801\uc73c\ub85c \ub4dc\ub85c\uc6b0 \uccb4\uc778\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc131\ub2a5\uc740 \uc8fc\ub85c \ud558\uc704 \ub178\ub4dc\uc758 \uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",N({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",N({},{id:"examples"}),"\uc608\uc81c"),(0,r.kt)("h3",N({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,r.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74TouchGFX Designer\uc5d0\uc11c Slide Menu\uac00 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",N({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    slideMenuName.setup(touchgfx::SlideMenu::EAST,\n        touchgfx::Bitmap(BITMAP_LEFT_SLIDE_MENU_BACKGROUND_ID),\n        touchgfx::Bitmap(BITMAP_LEFT_SLIDE_MENU_BUTTON_ID),\n        touchgfx::Bitmap(BITMAP_LEFT_SLIDE_MENU_BUTTON_ID),\n        0, 0, 49, 111);\n    slideMenuName.setState(touchgfx::SlideMenu::COLLAPSED);\n    slideMenuName.setVisiblePixelsWhenCollapsed(24);\n    slideMenuName.setHiddenPixelsWhenExpanded(0);\n    slideMenuName.setAnimationEasingEquation(touchgfx::EasingEquations::circEaseInOut);\n    slideMenuName.setAnimationDuration(18);\n    slideMenuName.setExpandedStateTimeout(180);\n    slideMenuName.setXY(0, 0);\n\n    add(slideMenuName);\n}\n')),(0,r.kt)(i.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 SlideMenu \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"Slide MenuName.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",N({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,r.kt)("p",null,"Slide Menu\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c UI \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/slide-menu-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Slide Menu Example UI \ud15c\ud50c\ub9bf"),(0,r.kt)("h2",N({},{id:"api-reference"}),"API \ucc38\uc870"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_slide_menu",mdxType:"Link"},"SlideMenu \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}M.isMDXComponent=!0}}]);