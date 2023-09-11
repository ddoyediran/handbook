"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"dev-guide-flutter-sdk",title:"Flutter SDK"},p=void 0,s={unversionedId:"dev-guide/dev-guide-flutter-sdk",id:"dev-guide/dev-guide-flutter-sdk",title:"Flutter SDK",description:"The Jitsi Meet Flutter SDK provides the same user experience as the Jitsi Meet app, in the form of a Flutter plugin so that you can embed and customize Jitsi Meet in your own Flutter app.",source:"@site/docs/dev-guide/flutter-sdk.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-flutter-sdk",permalink:"/handbook/docs/dev-guide/dev-guide-flutter-sdk",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/flutter-sdk.md",tags:[],version:"current",lastUpdatedAt:1694435441,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"dev-guide-flutter-sdk",title:"Flutter SDK"},sidebar:"docs",previous:{title:"React Native SDK",permalink:"/handbook/docs/dev-guide/dev-guide-react-native-sdk"},next:{title:"Web",permalink:"/handbook/docs/category/web"}},d={},m=[{value:"Sample application using the Flutter",id:"sample-application-using-the-flutter",level:2},{value:"Installation",id:"installation",level:2},{value:"Add dependency",id:"add-dependency",level:3},{value:"Install",id:"install",level:3},{value:"Import files",id:"import-files",level:3},{value:"Usage",id:"usage",level:3},{value:"Join meeting",id:"join-meeting",level:4},{value:"Configuration",id:"configuration",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Using the API",id:"using-the-api",level:2},{value:"JitsiMeet",id:"jitsimeet",level:3},{value:"JitsiMeetConferenceOptions",id:"jitsimeetconferenceoptions",level:3},{value:"JitsiMeetEventListener",id:"jitsimeeteventlistener",level:3},{value:"Example of listener:",id:"example-of-listener",level:4}],c={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Jitsi Meet Flutter SDK provides the same user experience as the Jitsi Meet app, in the form of a Flutter plugin so that you can embed and customize Jitsi Meet in your own Flutter app."),(0,r.kt)("h2",{id:"sample-application-using-the-flutter"},"Sample application using the Flutter"),(0,r.kt)("p",null,"If you want to see how easy integrating the Jitsi Meet Flutter SDK into a Flutter application is, take a look at the",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet-sdk-samples#flutter"},"sample applications repository"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"add-dependency"},"Add dependency"),(0,r.kt)("p",null,"Add the dependency from command-line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter pub add jitsi_meet_flutter_sdk\n")),(0,r.kt)("p",null,"The command above will add this to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file in your project (you can do this manually):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n    jitsi_meet_flutter_sdk: ^0.1.4\n")),(0,r.kt)("h3",{id:"install"},"Install"),(0,r.kt)("p",null,"Install the packages from the terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter pub get\n")),(0,r.kt)("h3",{id:"import-files"},"Import files"),(0,r.kt)("p",null,"Import the following files into your dart code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:jitsi_meet_flutter_sdk/jitsi_meet_flutter_sdk.dart';\n")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("h4",{id:"join-meeting"},"Join meeting"),(0,r.kt)("p",null,"Firstly, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"JitsiMeet")," object, then call the method ",(0,r.kt)("inlineCode",{parentName:"p"},"join")," from it with a ",(0,r.kt)("inlineCode",{parentName:"p"},"JitsiMeetConferenceOptions")," object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"var jitsiMeet = JitsiMeet();\nvar options = JitsiMeetConferenceOptions(room: 'jitsiIsAwesome');\njitsiMeet.join(options);\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("p",null,"Make sure in ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"ios")," directory you set the ios version ",(0,r.kt)("inlineCode",{parentName:"p"},"12.4 or higher")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"platform :ios, '12.4'\n")),(0,r.kt)("p",null,"The plugin requests camera and microphone access, make sure to include the required entries for ",(0,r.kt)("inlineCode",{parentName:"p"},"NSCameraUsageDescription")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NSMicrophoneUsageDescription")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist")," file from the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/Runner")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<key>NSCameraUsageDescription</key>\n<string>The app needs access to your camera for meetings.</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>The app needs access to your microphone for meetings.</string>\n")),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," and make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"minSdkVersion")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"at lest 24")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"android {\n    ...\n    defaultConfig {\n        ...\n        minSdkVersion 24\n    }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"application:label")," field from the Jitsi Meet Android SDK will conflict with your application's one . Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/src/main/AndroidManifest.xml")," and add the tools library and ",(0,r.kt)("inlineCode",{parentName:"p"},'tools:replace="android:label"')," to the application tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<manifest xmlns:android="http://schemas.android.com/apk/res/android" \n    xmlns:tools="http://schemas.android.com/tools">\n    <application\n        tools:replace="android:label"\n        android:label="sample_app"\n        android:name="${applicationName}"\n        android:icon="@mipmap/ic_launcher">\n        ...\n    </application>\n</manifest>\n')),(0,r.kt)("h2",{id:"using-the-api"},"Using the API"),(0,r.kt)("h3",{id:"jitsimeet"},"JitsiMeet"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"JitsiMeet")," class is the entry point for the sdk. It is used to launch the meeting screen, to send and receive all the events."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"jitsimeet-1"},"JitsiMeet()"),"The constructor for the class.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"joinjitsimeetconferenceoptions-options-jitsimeeteventlistener-listener"},"join(JitsiMeetConferenceOptions options, ","[JitsiMeetEventListener? listener]",")"),(0,r.kt)("p",{parentName:"li"},"Joins a meeting with the given options and optionally a listener is given"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," : meeting options"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listener")," : event listener for events triggered by the native sdks"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"hangup"},"hangUp()"),(0,r.kt)("p",{parentName:"li"},"The localParticipant leaves the current meeting.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"setaudiomutedbool-muted"},"setAudioMuted(bool muted)"),(0,r.kt)("p",{parentName:"li"},"Sets the state of the localParticipant audio muted according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"muted")," parameter.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"setvideomutedbool-muted"},"setVideoMuted(bool muted)"),(0,r.kt)("p",{parentName:"li"},"Sets the state of the localParticipant video muted according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"muted")," parameter.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"sendendpointtextmessagestring-to-required-string-message"},"sendEndpointTextMessage({String? to, required String message})"),(0,r.kt)("p",{parentName:"li"},"Sends a message via the data channel to one particular participant or to all of them. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," param is empty, the message will be sent to all the participants in the conference."),(0,r.kt)("p",{parentName:"li"},"In order to get the participantId, the ",(0,r.kt)("inlineCode",{parentName:"p"},"participantsJoined")," event should be listened for, which have as a parameter the ",(0,r.kt)("inlineCode",{parentName:"p"},"participantId")," and this should be stored somehow.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"togglescreensharebool-enabled"},"toggleScreenShare(bool enabled)"),(0,r.kt)("p",{parentName:"li"},"Sets the state of the localParticipant screen sharing according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," parameter.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"openchatstring-to"},"openChat(","[String? to]",")"),(0,r.kt)("p",{parentName:"li"},"Opens the chat dialog. If ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," contains a valid participantId, the private chat with that particular participant will be opened.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"sendchatmessagestring-to-required-string-message"},"sendChatMessage({String? to, required String message})"),(0,r.kt)("p",{parentName:"li"},"Sends a chat message via to one particular participant or to all of them. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," param is empty, the message will be sent to all the participants in the conference."),(0,r.kt)("p",{parentName:"li"},"In order to get the participantId, the ",(0,r.kt)("inlineCode",{parentName:"p"},"participantsJoined")," event should be listened for, which have as a parameter the ",(0,r.kt)("inlineCode",{parentName:"p"},"participantId")," and this should be stored somehow.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"closechat"},"closeChat()"),(0,r.kt)("p",{parentName:"li"},"Closes the chat dialog.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"retrieveparticipantsinfo"},"retrieveParticipantsInfo()"),(0,r.kt)("p",{parentName:"li"},"Sends and event that will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"participantsInfoRetrieved")," event which will contain participants information"))),(0,r.kt)("h3",{id:"jitsimeetconferenceoptions"},"JitsiMeetConferenceOptions"),(0,r.kt)("p",null,"This object encapsulates all the options that can be tweaked when joining a conference."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'var options = JitsiMeetConferenceOptions(\n      serverURL: "https://meet.jit.si",\n      room: "jitsiIsAwesomeWithFlutter",\n      configOverrides: {\n        "startWithAudioMuted": false,\n        "startWithVideoMuted": false,\n        "subject" : "Jitsi with Flutter",\n      },\n      featureFlags: {\n        "unsaferoomwarning.enabled": false\n      },\n      userInfo: JitsiMeetUserInfo(\n          displayName: "Flutter user",\n          email: "user@example.com"\n      ),\n    );\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All the values that can be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"configOverrides")," can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/config.js"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All the values that can be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"featureFlags")," can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/react/features/base/flags/constants.ts"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"jitsimeetuserinfostring-displayname-string-email-string-avatar"},"JitsiMeetUserInfo({String displayName, String email, String avatar})"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"The constructor for the JitsiMeetUserInfo. \n")),(0,r.kt)("p",{parentName:"li"},"P.S. the avatar should be an url."))),(0,r.kt)("h3",{id:"jitsimeeteventlistener"},"JitsiMeetEventListener"),(0,r.kt)("p",null,"This class intends to be used as a listener for events that come from the native sdks. It will receive as arguments the event handlers"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"conferencejoinedstring-url"},"conferenceJoined(String url)"),(0,r.kt)("p",{parentName:"li"},"Called when a conference was joined."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," : the conference URL"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"conferenceterminatedstring-url-object-error"},"conferenceTerminated(String url, Object? error)"),(0,r.kt)("p",{parentName:"li"},"Called when the active conference ends, be it because of user choice or because of a failure."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," : the conference URL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," : missing if the conference finished gracefully, otherwise contains the error message"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"conferencewilljoinstring-url"},"conferenceWillJoin(String url)"),(0,r.kt)("p",{parentName:"li"},"Called before a conference is joined."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"url: the conference URL"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"participantjoinedstring-email-string-name-string-role-string-participantid"},"participantJoined(String? email, String? name, String? role, String? participantId)"),(0,r.kt)("p",{parentName:"li"},"Called when a participant has joined the conference."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"email")," : the email of the participant. It may not be set if the remote participant didn't set one."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," : the name of the participant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"role")," : the role of the participant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"participantId")," : the id of the participant."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"participantleftstring-participantid"},"participantLeft(String? participantId)"),(0,r.kt)("p",{parentName:"li"},"Called when a participant has left the conference."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"participantId")," : the id of the participant that left."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"audiomutedchangedbool-muted"},"audioMutedChanged(bool muted)"),(0,r.kt)("p",{parentName:"li"},"Called when the local participant's audio is muted or unmuted. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"muted")," : a boolean indicating whether the audio is muted or not."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"videomutedchangedbool-muted"},"videoMutedChanged(bool muted)"),(0,r.kt)("p",{parentName:"li"},"Called when the local participant's video is muted or unmuted. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"muted")," : a boolean indicating whether the video is muted or not."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"endpointtextmessagereceivedstring-senderid-string-message"},"endpointTextMessageReceived(String senderId, String message)"),(0,r.kt)("p",{parentName:"li"},"Called when an endpoint text message is received."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"senderId")," : the participantId of the sender"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," : the content."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"screensharetoggledstring-participantid-bool-sharing"},"screenShareToggled(String participantId, bool sharing)"),(0,r.kt)("p",{parentName:"li"},"Called when a participant starts or stops sharing his screen."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"participantId")," : the id of the participant"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sharing")," : the state of screen share"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"chatmessagereceivedstring-senderid-string-message-bool-isprivate-string-timestamp"},"chatMessageReceived(String senderId, String message, bool isPrivate, String? timestamp)"),(0,r.kt)("p",{parentName:"li"},"Called when a chat text message is received."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"senderId")," : the id of the participant that sent the message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," : the content of the message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isPrivate")," : true if the message is private, false otherwise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," : the (optional) timestamp of the message."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"chattoggledbool-isopen"},"chatToggled(bool isOpen)"),(0,r.kt)("p",{parentName:"li"},"Called when the chat dialog is opened or closed."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isOpen")," : true if the chat dialog is open, false otherwise."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"participantsinforetrievedstring-participantsinfo"},"participantsInfoRetrieved(String participantsInfo)"),(0,r.kt)("p",{parentName:"li"},"Called when ",(0,r.kt)("inlineCode",{parentName:"p"},"retrieveParticipantsInfo")," action is called"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"participantsInfo")," : a list of participants information as a string."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h4",{parentName:"li",id:"readytoclose"},"readyToClose()"),(0,r.kt)("p",{parentName:"li"},"Called when the SDK is ready to be closed. No meeting is happening at this point."))),(0,r.kt)("h4",{id:"example-of-listener"},"Example of listener:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'var listener = JitsiMeetEventListener(\n      conferenceJoined: (url) {\n        debugPrint("conferenceJoined: url: $url");\n      },\n\n      participantJoined: (email, name, role, participantId) {\n        debugPrint(\n          "participantJoined: email: $email, name: $name, role: $role, "\n              "participantId: $participantId",\n        );\n        participants.add(participantId!);\n      },\n\n      chatMessageReceived: (senderId, message, isPrivate) {\n        debugPrint(\n          "chatMessageReceived: senderId: $senderId, message: $message, "\n              "isPrivate: $isPrivate",\n        );\n      },\n\n      readyToClose: () {\n        debugPrint("readyToClose");\n      },\n    );\n')))}u.isMDXComponent=!0}}]);