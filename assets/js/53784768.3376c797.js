"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9188],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={id:"devops-guide-requirements",title:"Requirements"},d=void 0,u={unversionedId:"devops-guide/devops-guide-requirements",id:"devops-guide/devops-guide-requirements",title:"Requirements",description:"Jitsi Meet is a real-time system.",source:"@site/docs/devops-guide/requirements.md",sourceDirName:"devops-guide",slug:"/devops-guide/devops-guide-requirements",permalink:"/handbook/docs/devops-guide/devops-guide-requirements",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/requirements.md",tags:[],version:"current",lastUpdatedAt:1688383263,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"devops-guide-requirements",title:"Requirements"},sidebar:"docs",previous:{title:"Overview",permalink:"/handbook/docs/devops-guide/"},next:{title:"Debian/Ubuntu server",permalink:"/handbook/docs/devops-guide/devops-guide-quickstart"}},l={},c=[],p={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Jitsi Meet is a real-time system.\nRequirements are very different from a web server and depend on many factors.\nMiscalculations can very easily destroy basic functionality rather than cause slow performance.\nAvoid adding other functions to your Jitsi Meet setup as it can harm performance and complicate optimizations."),(0,o.kt)("p",{parentName:"admonition"},"Note that Jitsi Meet design priorizes scalability by adding servers on using a huge server. Check Jitsi-videobridge documentation on adding several bridges to a Jitsi Meet server, and OCTO to go even beyond that (federation of Jitsi Meet servers). If you feel that you are a network and server administration newbie, don't even think of going there.")),(0,o.kt)("h1",{id:"jitsi-meet-needs-by-order-of-importance"},"Jitsi Meet needs, by order of importance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Network link: basic speed and reliability are essential. Check speed against the provider claims using any download tool (or ftp), and\nverify latency using a tool such as iperf3.\nExact calculation is very complex and depend on many optimisations and tricks, but you should at least remember these numbers on resolution:\n180 = 200 kbits/s\n360 = 500 kbits/s\n720 (HD) = 2500 kbits/s\n4k = 10 Mbits/s\nSo don't expect to have 20 users using 4K on a server with 100Mbits/s upload and download.\nFor a friends/small organization server, 1 Gbits/s will often be enough but for a serious server 10 Gbits/s\nis advisable. Several (or many...) bridges having each a 10 Gbits/s link are used by big deployments.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"These requirements concern the videobridge. If there are only external videobridges (as can be the case on high end Jitsi Meet servers), network performance matters much less.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RAM:")," it's usually suggested to get 8 GB.\nFor small meetings you can get away with 4 GB, for test servers or very small meetings you can try to use 2 GB.\nFor big meetings it's suggested to go the scalable way over getting huge amounts of memory.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CPU:")," very low processor performance can seriously harm a real time system, especially when using a shared server (where your CPU performance can be stolen by other customers of your hoster, check on 'dedicated CPU' if you are getting a VPS, rather than a physical server). However, a consideration is that a Jitsi Meet component, Prosody, can only use ONE (1) core. So getting a lot of cores, let's say more than 32, is not always useful. For a basic server, 4 dedicated cores can be enough.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Disk:")," unless you are doing heavy logging or have very specific needs, you can get away with 20 Gbytes of standard hard disk.\nSSD are more a nice to have than a necessity."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you want additional services, requirements can go up.")),(0,o.kt)("h1",{id:"recording"},"Recording"),(0,o.kt)("p",null,"Jibri needs ONE system per recording.\nOne Jibri instance = one meeting. For 5 meetings recorded simultaneously, you need 5 Jibris.\nThere is no workaround to that.\nIf you are knowledgeable, you can setup Jibris in containers and use a big server to save a bit on resources but that's about it."),(0,o.kt)("p",null,"Jibri RAM and CPU needs are far higher than Jitsi Meet itself, as it does video encoding.\nFor ",(0,o.kt)("inlineCode",{parentName:"p"},"1080x720")," you currently need at least 8 GB RAM, for ",(0,o.kt)("inlineCode",{parentName:"p"},"1280x1024")," 12 GB (this is for recording a ",(0,o.kt)("strong",{parentName:"p"},"single"),"  meeting).\nIf memory is not sufficient or CPU can't encode fast enough, recordings will fail."),(0,o.kt)("p",null,"While Jibri and Jitsi Meet can technically be hosted in a single server, it's not recommended because Jibri is a resource drain and it can harm Jitsi Meet performance, and can exhaust disk space and stop Jitsi Meet function altogether."))}m.isMDXComponent=!0}}]);