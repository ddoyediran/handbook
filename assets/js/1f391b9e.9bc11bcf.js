"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3085],{6416:(e,a,l)=>{l.r(a),l.d(a,{default:()=>d});var n=l(7294),t=l(6010),i=l(2773),s=l(3905),c=l(4689),m=l(1575),r=l(3725);const o="mdxPageWrapper_zHyg";function d(e){var a=e.content,l=a.metadata,d=l.title,v=l.description,N=l.permalink,u=l.frontMatter,g=u.wrapperClassName,f=u.hide_table_of_contents;return n.createElement(i.Z,{title:d,description:v,permalink:N,wrapperClassName:null!=g?g:r.kM.wrapper.mdxPages,pageClassName:r.kM.page.mdxPage},n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,t.Z)("row",o)},n.createElement("div",{className:(0,t.Z)("col",!f&&"col--8")},n.createElement(s.Zo,{components:c.Z},n.createElement(a,null))),!f&&a.toc&&n.createElement("div",{className:"col col--2"},n.createElement(m.Z,{toc:a.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level})))))}},1575:(e,a,l)=>{l.d(a,{Z:()=>o});var n=l(7462),t=l(3366),i=l(7294),s=l(6010),c=l(5002);const m="tableOfContents_cNA8";var r=["className"];function o(e){var a=e.className,l=(0,t.Z)(e,r);return i.createElement("div",{className:(0,s.Z)(m,"thin-scrollbar",a)},i.createElement(c.Z,(0,n.Z)({},l,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,a,l)=>{l.d(a,{Z:()=>r});var n=l(7462),t=l(3366),i=l(7294),s=l(3725),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,l=e.className,n=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:l},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:l,linkClassName:n}))}))):null}function r(e){var a=e.toc,l=e.className,r=void 0===l?"table-of-contents table-of-contents__left-border":l,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,N=void 0===v?void 0:v,u=e.minHeadingLevel,g=e.maxHeadingLevel,f=(0,t.Z)(e,c),k=(0,s.LU)(),C=null!=u?u:k.tableOfContents.minHeadingLevel,_=null!=g?g:k.tableOfContents.maxHeadingLevel,p=(0,s.b9)({toc:a,minHeadingLevel:C,maxHeadingLevel:_}),h=(0,i.useMemo)((function(){if(d&&N)return{linkClassName:d,linkActiveClassName:N,minHeadingLevel:C,maxHeadingLevel:_}}),[d,N,C,_]);return(0,s.Si)(h),i.createElement(m,(0,n.Z)({toc:p,className:r,linkClassName:d},f))}}}]);