"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"dev-guide-react-native-sdk",title:"React Native SDK"},l=void 0,p={unversionedId:"dev-guide/dev-guide-react-native-sdk",id:"dev-guide/dev-guide-react-native-sdk",title:"React Native SDK",description:"The Jitsi React Native SDK provides the same user experience as the Jitsi Meet app,",source:"@site/docs/dev-guide/react-native-sdk.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-react-native-sdk",permalink:"/handbook/docs/dev-guide/dev-guide-react-native-sdk",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/react-native-sdk.md",tags:[],version:"current",lastUpdatedAt:1694435441,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"dev-guide-react-native-sdk",title:"React Native SDK"},sidebar:"docs",previous:{title:"iOS SDK",permalink:"/handbook/docs/dev-guide/dev-guide-ios-sdk"},next:{title:"Flutter SDK",permalink:"/handbook/docs/dev-guide/dev-guide-flutter-sdk"}},d={},c=[{value:"Sample application using the React Native SDK",id:"sample-application-using-the-react-native-sdk",level:2},{value:"Usage",id:"usage",level:2},{value:"Android permissions",id:"android-permissions",level:3},{value:"iOS permissions",id:"ios-permissions",level:3},{value:"JitsiMeeting props",id:"jitsimeeting-props",level:2},{value:"config",id:"config",level:3},{value:"flags",id:"flags",level:3},{value:"eventListeners",id:"eventlisteners",level:3},{value:"room",id:"room",level:3},{value:"serverURL",id:"serverurl",level:3},{value:"style",id:"style",level:3},{value:"token",id:"token",level:3},{value:"userInfo",id:"userinfo",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Jitsi React Native SDK provides the same user experience as the Jitsi Meet app,\nin a customizable way which you can embed in your React Native apps."),(0,r.kt)("h2",{id:"sample-application-using-the-react-native-sdk"},"Sample application using the React Native SDK"),(0,r.kt)("p",null,"If you want to see how easy integrating the Jitsi React Native SDK into a React Native application is, take a look at the",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet-sdk-samples#react-native"},"sample applications repository"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"While this is a published library, you can ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i @jitsi/react-native-sdk"),".",(0,r.kt)("br",null),"\nAlso, some dependencies need will maybe need to be added and this will be done by running the following script ",(0,r.kt)("inlineCode",{parentName:"p"},"node node_modules/@jitsi/react-native-sdk/update_dependencies.js"),".\nThis will sync all of our peer dependencies with your dependencies. Next you need to do ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install"),"."),(0,r.kt)("p",null,"Because our SDK uses SVG files, you will need to update your metro bundler configuration accordingly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config",metastring:'title="metro.config"',title:'"metro.config"'},"const { getDefaultConfig } = require('metro-config');\n\nmodule.exports = (async () => {\n  const {\n    resolver: {\n      sourceExts,\n      assetExts\n    }\n  } = await getDefaultConfig();\n\n  return {\n    transformer: {\n      babelTransformerPath: require.resolve('react-native-svg-transformer'),\n      getTransformOptions: async () => ({\n        transform: {\n          experimentalImportSupport: false,\n          inlineRequires: true,\n        },\n      }),\n    },\n    resolver: {\n      assetExts: assetExts.filter(ext => ext !== 'svg'),\n      sourceExts: [...sourceExts, 'svg']\n    }\n  }\n})();\n")),(0,r.kt)("h3",{id:"android-permissions"},"Android permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/src/debug/AndroidManifest.xml")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/src/main/AndroidManifest.xml"),", under the ",(0,r.kt)("inlineCode",{parentName:"li"},"</application>")," tag, include",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n  <uses-permission android:name="android.permission.BLUETOOTH" />\n  <uses-permission android:name="android.permission.CAMERA" />\n  <uses-permission android:name="android.permission.INTERNET" />\n  <uses-permission android:name="android.permission.MANAGE_OWN_CALLS" />\n  <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />\n  <uses-permission android:name="android.permission.RECORD_AUDIO" />\n  <uses-permission android:name="android.permission.WAKE_LOCK" />\n  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n  <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />\n')))),(0,r.kt)("h3",{id:"ios-permissions"},"iOS permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React Native SDK requests camera and microphone access, make sure to include the required entries for ",(0,r.kt)("inlineCode",{parentName:"li"},"NSCameraUsageDescription")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NSMicrophoneUsageDescription"),"in your ",(0,r.kt)("inlineCode",{parentName:"li"},"Info.plist")," file."),(0,r.kt)("li",{parentName:"ul"},"React Native SDK shows and hides the status bar based on the conference state,\nyou may want to set ",(0,r.kt)("inlineCode",{parentName:"li"},"UIViewControllerBasedStatusBarAppearance")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"NO")," in your\n",(0,r.kt)("inlineCode",{parentName:"li"},"Info.plist")," file."),(0,r.kt)("li",{parentName:"ul"},"For starting screen sharing React Native SDK provides the UI to present the ",(0,r.kt)("inlineCode",{parentName:"li"},"RPSystemBroadcastPickerView")," to the user. By default, the picker will display a list of all the available broadcast providers. In order to limit the picker to our particular broadcast provider, we have to set ",(0,r.kt)("inlineCode",{parentName:"li"},"preferredExtension")," to the bundle identifier of the broadcast extension. We are doing this by adding a new key named ",(0,r.kt)("inlineCode",{parentName:"li"},"RTCScreenSharingExtension")," to the app's Info.plist and setting the broadcast extension bundle identifier as the value."),(0,r.kt)("li",{parentName:"ul"},"Make sure ",(0,r.kt)("inlineCode",{parentName:"li"},"voip")," is added to ",(0,r.kt)("inlineCode",{parentName:"li"},"UIBackgroundModes"),", in the app's ",(0,r.kt)("inlineCode",{parentName:"li"},"Info.plist"),", in order to work when the app is in the background.")),(0,r.kt)("h2",{id:"jitsimeeting-props"},"JitsiMeeting props"),(0,r.kt)("p",null,"Our JitsiMeeting component renders the full meeting experience. This has some customizable properties:"),(0,r.kt)("h3",{id:"config"},"config"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")," - Updates ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/config.js"},"configuration"),"."),(0,r.kt)("h3",{id:"flags"},"flags"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")," - Add different feature ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/react/features/base/flags/constants.ts"},"flags"),"\nthat your meeting experience would like to have. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For example: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"<JitsiMeeting flags={{\n    'call-integration.enabled': true, \n    'fullscreen.enabled': false, \n    'invite.enabled': true }} />\n")),(0,r.kt)("h3",{id:"eventlisteners"},"eventListeners"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")," - Options that personalize your meeting experience:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"onConferenceBlurred\n",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," - Takes a function that gets triggered when ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFERENCE_BLURRED")," action is dispatched, more exactly when a conference screen is out of focus, more exactly when navigation to another screen is initiated. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"onConferenceFocused\n",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," - Takes a function that gets triggered when ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFERENCE_FOCUSED")," action is dispatched, more exactly when a conference screen is focused.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"onConferenceJoined\n",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," - Takes a function that gets triggered when ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFERENCE_JOINED")," action is dispatched, more exactly when a conference was joined.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"onConferenceLeft\n",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," - Takes a function that gets triggered when ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFERENCE_LEFT")," action is dispatched, more exactly when a conference was left.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"onConferenceWillJoin\n",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," - Takes a function that gets triggered when ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFERENCE_WILL_JOIN")," action is dispatched, more exactly when a conference will be joined.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"onEnterPictureInPicture\n",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," - Takes a function that gets triggered when ",(0,r.kt)("inlineCode",{parentName:"p"},"ENTER_PICTURE_IN_PICTURE")," action is dispatched, more exactly when entering picture-in-picture is initiated.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"onParticipantJoined\n",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," - Takes a function that gets triggered when ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTICIPANT_JOINED")," action is dispatched, more exactly when a specific participant joined a conference.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"onReadyToClose\n",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," - Takes a function that gets triggered when ",(0,r.kt)("inlineCode",{parentName:"p"},"READY_TO_CLOSE")," action is dispatched, more exactly when one exits a conference."))),(0,r.kt)("h3",{id:"room"},"room"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," - Name of the room where the conference takes place."),(0,r.kt)("h3",{id:"serverurl"},"serverURL"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," - Server where the conference should take place."),(0,r.kt)("h3",{id:"style"},"style"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")," - CSS your meeting experience."),(0,r.kt)("h3",{id:"token"},"token"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," - JWT token used for authentication."),(0,r.kt)("h3",{id:"userinfo"},"userInfo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"avatarUrl\n",(0,r.kt)("inlineCode",{parentName:"p"},"string")," - Path to participant's avatar.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"displayName\n",(0,r.kt)("inlineCode",{parentName:"p"},"string")," - Default participant name to be displayed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"email\n",(0,r.kt)("inlineCode",{parentName:"p"},"string")," - Default email for participant."))))}m.isMDXComponent=!0}}]);