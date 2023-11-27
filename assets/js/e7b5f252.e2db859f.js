"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1368],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=o(a),g=n,u=m["".concat(p,".").concat(g)]||m[g]||d[g]||s;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var o=2;o<s;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_label:"message_dispatcher",title:"core.messaging.dispatchers.message_dispatcher"},i=void 0,l={unversionedId:"reference/core/messaging/dispatchers/message_dispatcher",id:"reference/core/messaging/dispatchers/message_dispatcher",title:"core.messaging.dispatchers.message_dispatcher",description:"MessageDispatcher Objects",source:"@site/docs/reference/core/messaging/dispatchers/message_dispatcher.md",sourceDirName:"reference/core/messaging/dispatchers",slug:"/reference/core/messaging/dispatchers/message_dispatcher",permalink:"/rnawrozi.github.io/docs/reference/core/messaging/dispatchers/message_dispatcher",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"message_dispatcher",title:"core.messaging.dispatchers.message_dispatcher"},sidebar:"referenceSidebar",previous:{title:"event_dispatcher",permalink:"/rnawrozi.github.io/docs/reference/core/messaging/dispatchers/event_dispatcher"},next:{title:"event",permalink:"/rnawrozi.github.io/docs/reference/core/messaging/event"}},p={},o=[{value:"MessageDispatcher Objects",id:"messagedispatcher-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"process",id:"process",level:4},{value:"pre_dispatch",id:"pre_dispatch",level:4},{value:"dispatch",id:"dispatch",level:4},{value:"post_dispatch",id:"post_dispatch",level:4}],c={toc:o},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"messagedispatcher-objects"},"MessageDispatcher Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class MessageDispatcher(abc.ABC, typing.Generic[MessageType])\n")),(0,n.kt)("p",null,"Base message dispatcher responsible for sending messages to registered handlers."),(0,n.kt)("p",null,"Dispatching a message (locally) is done by passing the message to one or more registered message handlers within a ",(0,n.kt)("inlineCode",{parentName:"p"},"Service"),".\nThe message dispatcher also performs pre- and post-dispatching tasks and takes care of catching errors raised in a handler."),(0,n.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(meta_information_type: type[MessageMetaInformationType])\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"meta_information_type")," - The required type of the message meta information passed alongside the actual messages.")),(0,n.kt)("h4",{id:"process"},"process"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def process() -> None\n")),(0,n.kt)("p",null,"Called to perform periodic tasks."),(0,n.kt)("h4",{id:"pre_dispatch"},"pre","_","dispatch"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def pre_dispatch(msg: MessageType,\n                 msg_meta: MessageMetaInformationType) -> None\n")),(0,n.kt)("p",null,"Called to perform tasks ",(0,n.kt)("em",{parentName:"p"},"before")," sending a message."),(0,n.kt)("p",null,"This method is called before any service-registered message handler is invoked."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"msg")," - The message that is about to be dispatched."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"msg_meta")," - The message meta information.")),(0,n.kt)("h4",{id:"dispatch"},"dispatch"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"@abc.abstractmethod\ndef dispatch(msg: MessageType, msg_meta: MessageMetaInformationType,\n             handler: MessageHandlerMapping, ctx: MessageContextType) -> None\n")),(0,n.kt)("p",null,"Dispatches a message to locally registered message handlers."),(0,n.kt)("p",null,"Handlers can be either called synchronously or asynchronously, depending on how the handler was registered."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notes"),":"),(0,n.kt)("p",null,"  Exceptions arising within a message handler will not interrupt the running program; instead, such errors will only be logged."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"msg")," - The message to be dispatched."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"msg_meta")," - The message meta information."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"handler")," - The handler to be invoked."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ctx")," - The message context.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Raises"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RuntimeError")," - If the handler requires a different message type.")),(0,n.kt)("h4",{id:"post_dispatch"},"post","_","dispatch"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def post_dispatch(msg: MessageType,\n                  msg_meta: MessageMetaInformationType) -> None\n")),(0,n.kt)("p",null,"Called to perform tasks ",(0,n.kt)("em",{parentName:"p"},"after")," sending a message."),(0,n.kt)("p",null,"This method is called after any service-registered message handler have been invoked."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"msg")," - The message that has just been dispatched."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"msg_meta")," - The message meta information.")))}d.isMDXComponent=!0}}]);