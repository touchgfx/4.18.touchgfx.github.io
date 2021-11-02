(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3448],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},41991:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return b},metadata:function(){return g},toc:function(){return v},default:function(){return k}});var r=n(3905),a=n(44035),o=n(93054),l=n(22425),i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"06-flash-external-addressable",title:"6. External addressable flash",sidebar_label:"6. External addressable flash"},b=void 0,g={unversionedId:"development/board-bring-up/how-to/06-flash-external-addressable",id:"development/board-bring-up/how-to/06-flash-external-addressable",isDocsHomePage:!1,title:"6. External addressable flash",description:"\uac1c\uc694",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/06-flash-external-addressable.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/06-flash-external-addressable",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/06-flash-external-addressable",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"06-flash-external-addressable",title:"6. External addressable flash",sidebar_label:"6. External addressable flash"},sidebar:"docs",previous:{title:"5. Display with framebuffer in external RAM",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/05-display-external"},next:{title:"7. External flash in block mode",permalink:"/4.18/ko/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"}},v=[{value:"\uac1c\uc694",id:"motivation",children:[],level:2},{value:"\ubaa9\ud45c",id:"goal",children:[{value:"\ud655\uc778",id:"verification",children:[],level:3}],level:2},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",children:[],level:2},{value:"\uc2e4\ud589",id:"do",children:[{value:"\ube14\ub85d \ubaa8\ub4dc",id:"block-mode",children:[],level:3},{value:"\uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc",id:"memory-mapped-mode",children:[],level:3}],level:2}],y={toc:v};function k(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),m),c(t,s({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"motivation"}),"\uac1c\uc694"),(0,r.kt)("p",null,"\uc774 \ub2e8\uacc4\uc5d0\uc11c\ub294 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uc5d0\uc11c \uc678\ubd80\uc758 \ucffc\ub4dc \ub610\ub294 \uc625\ud1a0 SPI \ud50c\ub798\uc2dc\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4. \uc678\ubd80 \ud50c\ub798\uc2dc\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub300\uc6a9\ub7c9\uc758 \uc774\ubbf8\uc9c0\ub97c \ub2e4\uc218 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud55c\ub2e4\ub294 \uc810\uc5d0\uc11c \ub300\ubd80\ubd84\uc758 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uad8c\uc7a5\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub0b4\ubd80 \ud50c\ub798\uc2dc\ub294 \uc0ac\uc6a9\ub7c9\uc774 \uc801\uc815\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub77c \ud558\ub354\ub77c\ub3c4 \uc6a9\ub7c9\uc774 \uae08\uc0c8 \uac00\ub4dd\ucc28\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)(o.Z,{mdxType:"Note"},"\uc678\ubd80 \ud50c\ub798\uc2dc\uac00 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uacfc \uad00\ub828\uc774 \uc5c6\ub2e4\uba74 \uc774 \ub2e8\uacc4\ub97c \uac74\ub108\ub6f0\uc2ed\uc2dc\uc624."),(0,r.kt)("p",null,"\ub370\uc774\ud130\uac00 \uc678\ubd80 \ud50c\ub798\uc2dc\uc5d0 \ubc30\uce58\ub420 \uacbd\uc6b0 MCU\uc5d0\uc11c \uc678\ubd80 \ud50c\ub798\uc2dc\ub97c \uc77d\uc5b4\ub4e4\uc77c \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ucd5c\uc801\uc758 \uc131\ub2a5\uc744 \uc5bb\uc73c\ub824\uba74 \uc678\ubd80 \ud50c\ub798\uc2dc\uac00 \uc6d0\ud558\ub294 \uc18d\ub3c4(\ubcf4\ud1b5 \ucd5c\uace0 \uc18d\ub3c4) \ub85c \uc2e4\ud589\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h2",h({},{id:"goal"}),"\ubaa9\ud45c"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc758 \ubaa9\ud45c\ub294 \uc678\ubd80 \ud50c\ub798\uc2dc\ub97c \ud65c\uc131\ud654\ud558\uace0, \uc774\ub97c \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\ub85c \ubcc0\uacbd\ud55c \ub2e4\uc74c, \uc5ec\uae30\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc77d\uc5b4\uc624\ub294 \uac83\uc785\ub2c8\ub2e4. \uc678\ubd80 \ud50c\ub798\uc2dc\uc758 \uc77d\uae30 \uc18d\ub3c4\uac00 \uadf8\ub798\ud53d\uc5d0 \ub9e4\uc6b0 \uc911\uc694\ud558\ubbc0\ub85c \uc77d\uae30 \uc18d\ub3c4\ub3c4 \ud14c\uc2a4\ud2b8\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",h({},{id:"verification"}),"\ud655\uc778"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\ud655\uc778\uadfc\uac70"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc678\ubd80 \ud50c\ub798\uc2dc\uac00 \uc77d\uae30 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc678\ubd80 \ud50c\ub798\uc2dc\uac00 \uc774\ubbf8\uc9c0 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc678\ubd80 \ud50c\ub798\uc2dc \uc131\ub2a5"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uadf8\ub798\ud53d \uc131\ub2a5\uc774 \uc774\ubbf8\uc9c0 \uba54\ubaa8\ub9ac\uc758 \uc131\ub2a5\uc5d0 \ud06c\uac8c \uc88c\uc6b0\ub418\ub294\uc9c0 \uc5ec\ubd80")))),(0,r.kt)("h2",h({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uc81c \uc870\uac74\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud50c\ub798\uc2dc \uc815\ubcf4(\uc77c\ubc18\uc801\uc73c\ub85c \uc81c\uc870\uc0ac \ub370\uc774\ud130 \uc2dc\ud2b8\uc758 \uc815\ubcf4)"),(0,r.kt)("li",{parentName:"ul"},"MCU\uc640 \uc678\ubd80 \ud50c\ub798\uc2dc \uac04 \uc5f0\uacb0 \uc815\ubcf4")),(0,r.kt)("h2",h({},{id:"do"}),"\uc2e4\ud589"),(0,r.kt)("p",null,"The QSPI controller is configured in STM32CubeMX under Connectivity -> QUADSPI:"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/qspi/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"QSPI \ud50c\ub798\uc2dc \uad6c\uc131"),(0,r.kt)("p",null,"\uc774 \ubaa8\ub4dc \uc139\uc158\uc5d0\uc11c \uc2f1\uae00/\ub4c0\uc5bc/\ucffc\ub4dc \ub370\uc774\ud130 \ub77c\uc778\uc5d0 \ub300\ud55c \ud50c\ub798\uc2dc\ub97c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucffc\ub4dc \ub77c\uc778\uc774 \uc18d\ub3c4\uac00 \uac00\uc7a5 \ube60\ub985\ub2c8\ub2e4. \uc678\ubd80 RAM\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c, \ub370\uc774\ud130 \ub77c\uc778, \uce69 \ubc0f \ud074\ub85d \uc2e0\ud638\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 GPIO\ub3c4 \uc120\ud0dd\ud558\uc5ec \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",h({},{id:"block-mode"}),"\ube14\ub85d \ubaa8\ub4dc"),(0,r.kt)("p",null,"\ud50c\ub798\uc2dc\ub97c \ud65c\uc131\ud654\ud55c \ud6c4\uc5d0\ub294 \ud50c\ub798\uc2dc\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc77d\uc5b4\uc624\ub294 \ubc29\ubc95\uc73c\ub85c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. The STM32Cube Firmware package contains examples for that."),(0,r.kt)("h3",h({},{id:"memory-mapped-mode"}),"\uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc"),(0,r.kt)("p",null,"\ud50c\ub798\uc2dc\ub97c \ud65c\uc131\ud654\ud558\uace0 \ube14\ub85d \ubaa8\ub4dc\uc5d0\uc11c \uc774\ub97c \ud14c\uc2a4\ud2b8\ud55c \ud6c4\uc5d0\ub294 \ubc18\ub4dc\uc2dc \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\ub85c \ubcc0\uacbd\ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub798\uc57c CPU\uac00 \ud50c\ub798\uc2dc\uc5d0\uc11c \ubc14\ub85c \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"The STM32 STM32Cube HAL contains functions to change to memory mapped mode. \uc5ec\uae30\uc5d0 \uc608\uc2dc\uac00 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4. \uad6c\uc131 \ub370\uc774\ud130\uc5d0 \ub300\ud55c \ub370\uc774\ud130 \uc2dc\ud2b8\ub97c \ucc38\uc870\ud574\uc57c \ud569\ub2c8\ub2e4. The STM32Cube Firmware package for your MCU contains more examples."),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'QSPI_CommandTypeDef      s_command;\nQSPI_MemoryMappedTypeDef s_mem_mapped_cfg;\n\n/* Configure the command for the read instruction */\ns_command.InstructionMode   = QSPI_INSTRUCTION_1_LINE;\ns_command.Instruction       = QUAD_INOUT_FAST_READ_CMD;\ns_command.AddressMode       = QSPI_ADDRESS_4_LINES;\ns_command.AddressSize       = QSPI_ADDRESS_24_BITS;\ns_command.AlternateByteMode = QSPI_ALTERNATE_BYTES_NONE;\ns_command.DataMode          = QSPI_DATA_4_LINES;\ns_command.DummyCycles       = N25Q128A_DUMMY_CYCLES_READ_QUAD;\ns_command.DdrMode           = QSPI_DDR_MODE_DISABLE;\ns_command.DdrHoldHalfCycle  = QSPI_DDR_HHC_ANALOG_DELAY;\ns_command.SIOOMode          = QSPI_SIOO_INST_EVERY_CMD;\n\n<p spaces-before="0">If you are using the same flash as one of the STM32 evaluation kits,\nthen the BSP packages for these boards (also in the STM32Cube Firmware)\ncontains valuable examples that can be modified for your hardware.</p>\n\n<p spaces-before="0">\ud50c\ub798\uc2dc\uac00 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uc5d0 \uc788\uc744 \ub54c\ub294 \uc678\ubd80 RAM\uc5d0\uc11c \uc0ac\uc6a9\ud55c \uac83\uacfc \ube44\uc2b7\ud55c \ucf54\ub4dc\ub97c \uc774\uc6a9\ud574 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(MCU \ub370\uc774\ud130 \uc2dc\ud2b8\uc5d0\uc11c \uc8fc\uc18c \ud655\uc778).</p>\n\n<pre><code class="cpp">volatile uint32_t *externalFlash = 0x90000000;\nconst uint32_t size = 1000;\nvolatile uint32_t result = 0;\n\n//read external Flash\nfor(int i = 0; i < size; i++)\n{\n    result += externalFlash[i];\n}\n')),(0,r.kt)("p",null,"\uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \uc218\ud589\ud55c \uba54\ubaa8\ub9ac \uc131\ub2a5 \ud14c\uc2a4\ud2b8\ub97c \uc7ac\uc0ac\uc6a9\ud574\uc11c \uc678\ubd80 \ud50c\ub798\uc2dc\uc758 \uc131\ub2a5\ub3c4 \ud14c\uc2a4\ud2b8\ud558\uc2ed\uc2dc\uc624."))}k.isMDXComponent=!0}}]);