"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,g=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"service_context",title:"service.service_context"},c=void 0,a={unversionedId:"reference/service/service_context",id:"reference/service/service_context",title:"service.service_context",description:"ServiceContext Objects",source:"@site/docs/reference/service/service_context.md",sourceDirName:"reference/service",slug:"/reference/service/service_context",permalink:"/rnawrozi.github.io/docs/reference/service/service_context",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"service_context",title:"service.service_context"},sidebar:"referenceSidebar",previous:{title:"service",permalink:"/rnawrozi.github.io/docs/reference/service/"},next:{title:"component_setting_ids",permalink:"/rnawrozi.github.io/docs/reference/settings/component_setting_ids"}},l={},s=[{value:"ServiceContext Objects",id:"servicecontext-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"config",id:"config",level:4},{value:"ServiceContextType",id:"servicecontexttype",level:4}],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"servicecontext-objects"},"ServiceContext Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class ServiceContext(MessageContext)\n")),(0,i.kt)("p",null,"An execution context for messages dispatched by the message bus to a service."),(0,i.kt)("p",null,"This class is an extension to the more general ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageContext")," specifically used by ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," and its message handlers."),(0,i.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(msg_emitter: MessageEmitter, config: Configuration,\n             logger: LoggerProtocol)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"msg_emitter")," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"MessageEmitter")," to be assigned to this context."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config")," - The global component configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"logger")," - A logger that is configured to automatically print the trace belonging to the message that caused the handler to be executed.")),(0,i.kt)("h4",{id:"config"},"config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef config() -> Configuration\n")),(0,i.kt)("p",null,"The global component configuration."),(0,i.kt)("h4",{id:"servicecontexttype"},"ServiceContextType"),(0,i.kt)("p",null,"pylint: disable=invalid-name"))}f.isMDXComponent=!0}}]);