"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[497],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,f=h["".concat(u,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70814:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:i},this.props.children)}}t.Z=a},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},82985:function(e,t,n){var r=n(67294);class o extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=o},35096:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},91098:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return w},default:function(){return y}});var r=n(3905),o=n(44035),i=n(70814),a=n(82985),c=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))h.call(t,n)&&d(e,n,t[n]);return e};const g={id:"updating-to-a-new-touchgfx-version",title:"Updating to a new TouchGFX Version"},m=void 0,v={unversionedId:"miscellaneous/updating-to-a-new-touchgfx-version",id:"miscellaneous/updating-to-a-new-touchgfx-version",isDocsHomePage:!1,title:"Updating to a new TouchGFX Version",description:"When a TouchGFX Designer application is created, the .touchgfx project file created will have the same version as the TouchGFX version used to create the application. But this does not mean that you are only able to use that specific version of TouchGFX to further develop your application.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/miscellaneous/updating-to-a-new-touchgfx-version.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/updating-to-a-new-touchgfx-version",permalink:"/4.18/zh-TW/docs/miscellaneous/updating-to-a-new-touchgfx-version",tags:[],version:"current",frontMatter:{id:"updating-to-a-new-touchgfx-version",title:"Updating to a new TouchGFX Version"},sidebar:"docs",previous:{title:"Adding files to STM32CubeMX project",permalink:"/4.18/zh-TW/docs/development/scenarios/adding-files-to-stm32cubemx-projet"},next:{title:"Getting Help",permalink:"/4.18/zh-TW/docs/miscellaneous/getting-help"}},w=[{value:"Update TouchGFX Generator",id:"update-touchgfx-generator",children:[],level:2}],b={toc:w};function y(e){var t,n=e,{components:c}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},b),d),u(t,l({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"When a TouchGFX Designer application is created, the .touchgfx project file created will have the same version as the TouchGFX version used to create the application. But this does not mean that you are only able to use that specific version of TouchGFX to further develop your application."),(0,r.kt)("p",null,"TouchGFX is backwards-compatible by design and in most cases it requires a very simple procedure to make an older versioned application work with a new version of TouchGFX."),(0,r.kt)("p",null,"Simply open your newly installed version of TouchGFX Designer and try to open your older application either through recent applications or the Open dialog. You will be greeted with the following popup:"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/updating-to-a-new-touchgfx-version/update-popup-4-17.png",mdxType:"Figure"},"Update popup"),(0,r.kt)(i.Z,{mdxType:"Caution"},"As stated in the popup, it is recommended to always have a backup of your application before running the updater."),(0,r.kt)("p",null,"Press 'Yes' and the updater will start. After it is finished, the application will open as normal in TouchGFX Designer and you are ready to use the new version."),(0,r.kt)("p",null,"In rare cases, you will have to do some manual changes to an application to make it fully updated to a new TouchGFX version. Consult the ",(0,r.kt)("a",f({parentName:"p"},{href:"known-issues"}),"Known Issues section")," if you are having additional problems updating an application to a new version."),(0,r.kt)("h2",f({},{id:"update-touchgfx-generator"}),"Update TouchGFX Generator"),(0,r.kt)("p",null,"After installing X-Cube-TouchGFX-4.17.0 in STM32CubeMX 6.2.1 or later by following ",(0,r.kt)("a",f({parentName:"p"},{href:"../introduction/installation#installing-touchgfx-generator-in-stm32cubemx"}),"Installing TouchGFX Generator in STM32CubeMX")," open the project and navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Software Packs")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Select Components")," (or press ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Alt + U"),")"),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx.png",mdxType:"Figure"},"Software Pack Component Selector"),(0,r.kt)("p",null,"In the details and warnings pane select the version to migrate to and press try. STM32CubeMX will perform a trail migration and present the result, some refparameters are not able to be migrated to the new version and therefore will be presented as null values. Select accept to save the migration and then press OK to close the Software Pack Component Selector window."),(0,r.kt)(o.Z,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx-migrate-to.png",mdxType:"Figure"},"Software Pack Component Selector : Migrate Parameters for TouchGFX Generator"),(0,r.kt)("p",null,"Now TouchGFX Generator is migrated to the new version and the changes are saved in the .ioc file. Please validate the configuration of TouchGFX Generator before generating code with STM32CubeMX. After generating code with STM32CubeMX open TouchGFX Designer and validate the ui before generating code from TouchGFX Designer."),(0,r.kt)(i.Z,{mdxType:"Caution"},(0,r.kt)("li",null,"The migration is a two step process to update TouchGFX to the new version. It requires code generation from both STM32CubeMX and TouchGFX Designer."),(0,r.kt)("li",null,"C++ code provided by TouchGFX Generator is first written to disk after the Generate Code button in STM32CubeMX has been pressed.")))}y.isMDXComponent=!0}}]);