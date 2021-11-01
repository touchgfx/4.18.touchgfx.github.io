(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1475],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){"use strict";var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},37793:function(e,t,n){"use strict";var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=i},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(11368),o=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},10139:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return k},toc:function(){return y},default:function(){return v}});var r=n(3905),o=n(44035),a=n(37793),i=n(22425),l=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&h(e,n,t[n]);return e};const f={id:"scenarios-create-at",title:"Creating an TouchGFX Board Setup"},g=void 0,k={unversionedId:"development/scenarios/scenarios-create-at",id:"development/scenarios/scenarios-create-at",isDocsHomePage:!1,title:"Creating an TouchGFX Board Setup",description:'TouchGFX Board Setups (TBSs) are .tpa files that define the platform on which a TouchGFX application runs. This approach is for developers who wish to be able to distribute easy-to-use TBSs separately from the UI code that runs on top of them. This article describes how an existing TouchGFX project can be packaged into a redistributable TBS using the built-in tool tgfx.exe. For the duration of this article examples are based on an application called "MyApplication".',source:"@site/docs/development/scenarios/scenarios-create-at.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/scenarios-create-at",permalink:"/4.18/docs/development/scenarios/scenarios-create-at",version:"current",frontMatter:{id:"scenarios-create-at",title:"Creating an TouchGFX Board Setup"},sidebar:"docs",previous:{title:"Changing the Pixel Format of an Application",permalink:"/4.18/docs/development/scenarios/scenarios-change-pixelformat-bpp"},next:{title:"External Events as Triggers",permalink:"/4.18/docs/development/scenarios/example-gpio"}},y=[{value:"Describe TouchGFX Board Setup",id:"describe-application-template",children:[]},{value:"Create TouchGFX Board Setup",id:"create-touchgfx-board-setup",children:[]},{value:"Test &amp; Verify",id:"test--verify",children:[]},{value:"Final Notes",id:"final-notes",children:[{value:"General Tips",id:"general-tips",children:[]},{value:"Version Control",id:"version-control",children:[]}]}],b={toc:y};function v(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),h),s(t,p({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TouchGFX Board Setups")," (TBSs) are ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," files that define the ",(0,r.kt)("em",{parentName:"p"},"platform")," on which a TouchGFX application runs. This approach is for developers who wish to be able to distribute easy-to-use TBSs separately from the ",(0,r.kt)("em",{parentName:"p"},"UI")," code that runs on top of them. This article describes how an existing TouchGFX project can be packaged into a redistributable TBS using the built-in tool ",(0,r.kt)("inlineCode",{parentName:"p"},"tgfx.exe"),". For the duration of this article examples are based on an application called ",(0,r.kt)("em",{parentName:"p"},'"MyApplication"'),"."),(0,r.kt)("p",null,"Once you have a fully functional TouchGFX project the following steps are required to create an TBS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Describe TouchGFX Board Setup"),"  Call ",(0,r.kt)("inlineCode",{parentName:"li"},"tgfx.exe")," and edit json file (inherits from .touchgfx)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create TouchGFX Board Setup")," Call ",(0,r.kt)("inlineCode",{parentName:"li"},"tgfx.exe")," to finalize ",(0,r.kt)("inlineCode",{parentName:"li"},".tpa")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Test & Verify")," Import into designer, create- and verify application")),(0,r.kt)("h2",m({},{id:"describe-application-template"}),"Describe TouchGFX Board Setup"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tgfx.exe")," tool generates a configuration file (.json) that describes the internals of the TBS. This information is read by TouchGFX Designer and presented to the user. Open a ",(0,r.kt)("em",{parentName:"p"},"TouchGFX Environment")," console and execute the following command in the ",(0,r.kt)("em",{parentName:"p"},"parent")," directory of the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -d MyApplication\n")),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-zip.png",width:"550px",mdxType:"Figure"},"Prepare files for .tpa"),(0,r.kt)("p",null,"The following files are created in the directory where the command was run:"),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-desc-files.png",width:"240px",mdxType:"Figure"},"List of generated files"),(0,r.kt)("p",null,"Before creating the final ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," file, edit ",(0,r.kt)("inlineCode",{parentName:"p"},"MyApplication.json")," to control how the TBS is displayed to users in TouchGFX Designer. Users should edit the following sections: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Author")," Use the fields in the ",(0,r.kt)("em",{parentName:"li"},"Author")," section to specify name of author, contact email and a URL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data")," Use the fields in the ",(0,r.kt)("em",{parentName:"li"},"Data")," section to specify TBS version, images, board name, vendor, description, and link to further information.")),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"MyApplication.json"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'   ...\n    "Author": [\n      {\n        "Name": "Chad Brody",\n        "Contact": "chad.brody@mycompany.com",\n        "URL": "http://mycompany.com/"\n      }\n    ],  \n  ...  \n  "Data": {\n    "Version": {\n      "Major": 1,\n      "Minor": 0,\n      "Build": 0\n    },\n    "Name": "MyApplication",\n    "HumanFriendlyName": "MyApplication",\n    "BoardName": "Custom STM32 Board",\n    "Type": "TGAT",\n    "Vendor": "MyCompany",\n    "Description": "This is a working project on which to base your UI on top of.",\n    "DocumentationLink": "",\n    "Category": "",\n    "Images": [\n      "http://mysite.com/MyCustomBoard-front.png",\n      "http://mysite.com/MyCustomBoard-back.png"\n    ],\n    ...\n  }\n}\n')),(0,r.kt)(a.Z,{mdxType:"Tip"},"Be sure to set the 'Type' attribute to ",(0,r.kt)("b",null,"TGAT"),". Otherwise the TBS won't show up in TouchGFX Designer!"),(0,r.kt)(a.Z,{mdxType:"Tip"},"TouchGFX Designer is able to display up to three images (Image references must be URLs) from this list when displaying the extended information card for an TBS. The optimal resolution for the images is 400x280 pixels."),(0,r.kt)("h2",m({},{id:"create-touchgfx-board-setup"}),"Create TouchGFX Board Setup"),(0,r.kt)("p",null,"Execute the following command to create the final \xb4.tpa\xb4 file and finalize the TouchGFX Board Setup. "),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -rc -d MyApplication\n")),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-tpa.png",width:"570px",mdxType:"Figure"},"Create TouchGFX Board Setup"),(0,r.kt)("h2",m({},{id:"test--verify"}),"Test & Verify"),(0,r.kt)("p",null,"To verify that the ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," file can be seen by TouchGFX Designer as an TBS and used to create new applications, perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rename the ",(0,r.kt)("inlineCode",{parentName:"li"},".tpa")," file to your requirements. "),(0,r.kt)("li",{parentName:"ol"},"Copy or move the ",(0,r.kt)("inlineCode",{parentName:"li"},".tpa")," file to ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\TouchGFX\\4.13.0\\app\\packages"),". This allows users to import TBSs into TouchGFX Designer from a local folder.")),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-mv-to-pkg.png",width:"550",mdxType:"Figure"},"Install TBS to local folder"),(0,r.kt)("ol",m({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Open the Designer and select the TBS under the ",(0,r.kt)("em",{parentName:"li"},"By Partners")," tab.")),(0,r.kt)(o.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-designer-main-info-4-17.png",width:"550",mdxType:"Figure"},"Information about the TBS"),(0,r.kt)("h2",m({},{id:"final-notes"}),"Final Notes"),(0,r.kt)("p",null,"The following section contains tips about what to consider when developing code for/distributing TBSs. "),(0,r.kt)("h3",m({},{id:"general-tips"}),"General Tips"),(0,r.kt)("p",null,"Generally, before distributing the ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," one should: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ensure that all supplied IDE projects work as expected."),(0,r.kt)("li",{parentName:"ol"},"Delete ",(0,r.kt)("em",{parentName:"li"},"build"),"- and ",(0,r.kt)("em",{parentName:"li"},"generated")," folders to reduce the size of the TBS."),(0,r.kt)("li",{parentName:"ol"},"Ensure that custom commands (",(0,r.kt)("em",{parentName:"li"},"PostGenerate"),"-, etc.) defined in the TouchGFX project file ",(0,r.kt)("inlineCode",{parentName:"li"},".touchgfx")," work as expected. "),(0,r.kt)("li",{parentName:"ol"},"Ensure that the TBS can be read by TouchGFX Designer and used to create a new application."),(0,r.kt)("li",{parentName:"ol"},"There is no immediate way to specify an upgrade procedure between versions of TBSs. ")),(0,r.kt)(a.Z,{mdxType:"Tip"},"Be sure to re-pack the application template after modifying the content of either the TouchGFX Project or the `.json` file."),(0,r.kt)("p",null,"After distributing the ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," one should instruct users to copy the ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," file into ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\TouchGFX\\4.13.0\\app\\packages")," and restart the designer, if open."),(0,r.kt)("h3",m({},{id:"version-control"}),"Version Control"),(0,r.kt)("p",null,"Usually, developers will keep an entire development project (Board bringup, TouchGFX AL, TouchGFX UI) in the same repository which  eliminates the need for distributable ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," files. However, for team members to be able to start a new TouchGFX application, unified platform code is powerful when it comes to test and verification."),(0,r.kt)("p",null,"For those that do distribute ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," files and/or use tools like ",(0,r.kt)("inlineCode",{parentName:"p"},"repo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"git submodules")," to modularize their codebase it is wise to let the version of the TBS-component follow the version specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," descriptor mentioned previously in this article. If using a modularized approach, the ",(0,r.kt)("em",{parentName:"p"},"platform")," code could still be used to create a distributable ",(0,r.kt)("inlineCode",{parentName:"p"},".tpa")," file while also being used as a module in a main project struture. "),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json"}),'  "Data": {\n    "Version": {\n      "Major": 3,\n      "Minor": 0,\n      "Build": 0\n    },\n')),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"$ git tag\nv1.1.0\nv2.0.0\nv2.1.0\nv3.0.0\n")))}v.isMDXComponent=!0}}]);