"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,d=p["".concat(c,".").concat(u)]||p[u]||f[u]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m[p]="string"==typeof e?e:a,i[1]=m;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"command_reply_meta_information",title:"core.messaging.meta.command_reply_meta_information"},i=void 0,m={unversionedId:"reference/core/messaging/meta/command_reply_meta_information",id:"reference/core/messaging/meta/command_reply_meta_information",title:"core.messaging.meta.command_reply_meta_information",description:"CommandReplyMetaInformation Objects",source:"@site/docs/reference/core/messaging/meta/command_reply_meta_information.md",sourceDirName:"reference/core/messaging/meta",slug:"/reference/core/messaging/meta/command_reply_meta_information",permalink:"/rnawrozi.github.io/docs/reference/core/messaging/meta/command_reply_meta_information",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"command_reply_meta_information",title:"core.messaging.meta.command_reply_meta_information"},sidebar:"referenceSidebar",previous:{title:"command_meta_information",permalink:"/rnawrozi.github.io/docs/reference/core/messaging/meta/command_meta_information"},next:{title:"event_meta_information",permalink:"/rnawrozi.github.io/docs/reference/core/messaging/meta/event_meta_information"}},c={},l=[{value:"CommandReplyMetaInformation Objects",id:"commandreplymetainformation-objects",level:2}],s={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"commandreplymetainformation-objects"},"CommandReplyMetaInformation Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@dataclasses.dataclass(frozen=True, kw_only=True)\nclass CommandReplyMetaInformation(MessageMetaInformation)\n")),(0,a.kt)("p",null,"Message meta information specific to ",(0,a.kt)("inlineCode",{parentName:"p"},"CommandReply"),"."))}f.isMDXComponent=!0}}]);