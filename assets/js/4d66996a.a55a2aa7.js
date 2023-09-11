"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(k,s(s({ref:t},d),{},{components:a})):r.createElement(k,s({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8292:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),s=["components"],o={id:"releases",title:"Releases"},l=void 0,p={unversionedId:"releases",id:"releases",title:"Releases",description:"Release notes for Jitsi Meet are kept here.",source:"@site/docs/releases.md",sourceDirName:".",slug:"/releases",permalink:"/handbook/docs/releases",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/releases.md",tags:[],version:"current",lastUpdatedAt:1694435441,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"releases",title:"Releases"},sidebar:"releases-sidebar"},d={},m=[{value:"Mobile apps",id:"mobile-apps",level:2},{value:"Beta versions",id:"beta-versions",level:3},{value:"Desktop apps",id:"desktop-apps",level:2},{value:"Mobile SDKs",id:"mobile-sdks",level:2},{value:"Docker images",id:"docker-images",level:2},{value:"Debian/Ubuntu packages",id:"debianubuntu-packages",level:2},{value:"Web frontend",id:"web-frontend",level:2}],c={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Release notes for Jitsi Meet are kept ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet-release-notes"},"here"),".")),(0,i.kt)("h2",{id:"mobile-apps"},"Mobile apps"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Android"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Android (F-Droid)"),(0,i.kt)("th",{parentName:"tr",align:"center"},"iOS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=org.jitsi.meet"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/jitsi/handbook/master/docs/assets/google-play-badge.png",height:"50"}))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://f-droid.org/en/packages/org.jitsi.meet/"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/jitsi/handbook/master/docs/assets/f-droid-badge.png",height:"50"}))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://itunes.apple.com/us/app/jitsi-meet/id1165103905"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/jitsi/handbook/master/docs/assets/appstore-badge.png",height:"50"})))))),(0,i.kt)("h3",{id:"beta-versions"},"Beta versions"),(0,i.kt)("p",null,"If you are feeling adventurous and want to get an early scoop of the features as they are being\ndeveloped you can also sign up for our open beta testing here:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Android"),(0,i.kt)("th",{parentName:"tr",align:"center"},"iOS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://play.google.com/apps/testing/org.jitsi.meet"},"Play Store Beta")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://testflight.apple.com/join/isy6ja7S"},"TestFlight"))))),(0,i.kt)("h2",{id:"desktop-apps"},"Desktop apps"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Windows"),(0,i.kt)("th",{parentName:"tr",align:"center"},"macOS"),(0,i.kt)("th",{parentName:"tr",align:"center"},"GNU/Linux (AppImage)"),(0,i.kt)("th",{parentName:"tr",align:"center"},"GNU/Linux (Deb)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet-electron/releases/latest/download/jitsi-meet.exe"},"Download")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet-electron/releases/latest/download/jitsi-meet.dmg"},"Download")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet-electron/releases/latest/download/jitsi-meet-x86_64.AppImage"},"Download")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet-electron/releases/latest/download/jitsi-meet-amd64.deb"},"Download"))))),(0,i.kt)("p",null,"The desktop applications are based on Electron. For macOS it is also available as a ",(0,i.kt)("inlineCode",{parentName:"p"},"brew")," cask which can be installed using ",(0,i.kt)("inlineCode",{parentName:"p"},"brew install jitsi-meet"),"."),(0,i.kt)("h2",{id:"mobile-sdks"},"Mobile SDKs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Android"),(0,i.kt)("th",{parentName:"tr",align:"center"},"iOS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-android-sdk#use-pre-build-sdk-artifactsbinaries"},"Maven repository")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://cocoapods.org/pods/JitsiMeetSDK"},"CocoaPods"))))),(0,i.kt)("h2",{id:"docker-images"},"Docker images"),(0,i.kt)("p",null,"See the Docker image releases ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jitsi/docker-jitsi-meet/releases"},"here"),"."),(0,i.kt)("h2",{id:"debianubuntu-packages"},"Debian/Ubuntu packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://download.jitsi.org/stable/"},(0,i.kt)("inlineCode",{parentName:"a"},"stable"))," (",(0,i.kt)("a",{parentName:"li",href:"https://jitsi.org/downloads/ubuntu-debian-installations-instructions/"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://download.jitsi.org/testing/"},(0,i.kt)("inlineCode",{parentName:"a"},"testing"))," (",(0,i.kt)("a",{parentName:"li",href:"https://jitsi.org/downloads/ubuntu-debian-installations-instructions-for-testing/"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://download.jitsi.org/unstable/"},(0,i.kt)("inlineCode",{parentName:"a"},"nightly"))," (",(0,i.kt)("a",{parentName:"li",href:"https://jitsi.org/downloads/ubuntu-debian-installations-instructions-nightly/"},"instructions"),")")),(0,i.kt)("h2",{id:"web-frontend"},"Web frontend"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Latest stable release"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://github.com/jitsi/jitsi-meet/releases/latest"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/release-latest-green.svg",alt:"release"})))))),(0,i.kt)("p",null,"Prebuilt ",(0,i.kt)("a",{parentName:"p",href:"https://download.jitsi.org/jitsi-meet/src/"},"source builds")," are also available."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Generally, you won't need to download this, as it's part of the Debian packages and Docker images already.")))}u.isMDXComponent=!0}}]);