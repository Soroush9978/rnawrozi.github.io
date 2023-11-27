"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9370],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),f=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=f(e.components);return o.createElement(i.Provider,{value:r},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=f(t),u=n,m=s["".concat(i,".").concat(u)]||s[u]||g[u]||a;return t?o.createElement(m,c(c({ref:r},p),{},{components:t})):o.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=u;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[s]="string"==typeof e?e:n,c[1]=l;for(var f=2;f<a;f++)c[f]=t[f];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5916:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>f});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_label:"formatter",title:"core.logging.formatter"},c=void 0,l={unversionedId:"reference/core/logging/formatter",id:"reference/core/logging/formatter",title:"core.logging.formatter",description:"Formatter Objects",source:"@site/docs/reference/core/logging/formatter.md",sourceDirName:"reference/core/logging",slug:"/reference/core/logging/formatter",permalink:"/rnawrozi.github.io/docs/reference/core/logging/formatter",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"formatter",title:"core.logging.formatter"},sidebar:"referenceSidebar",previous:{title:"core",permalink:"/rnawrozi.github.io/docs/reference/core/"},next:{title:"logger",permalink:"/rnawrozi.github.io/docs/reference/core/logging/logger"}},i={},f=[{value:"Formatter Objects",id:"formatter-objects",level:2},{value:"format",id:"format",level:4}],p={toc:f},s="wrapper";function g(e){let{components:r,...t}=e;return(0,n.kt)(s,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"formatter-objects"},"Formatter Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class Formatter(logging.Formatter)\n")),(0,n.kt)("p",null,"Customized log formatter."),(0,n.kt)("p",null,"This formatter mainly colorizes log records for better readability."),(0,n.kt)("h4",{id:"format"},"format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def format(record: logging.LogRecord) -> str\n")),(0,n.kt)("p",null,"Colorizes the various portions of a log record."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),":"),(0,n.kt)("p",null,"  The formatted text."))}g.isMDXComponent=!0}}]);