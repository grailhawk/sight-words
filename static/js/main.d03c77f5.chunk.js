(this["webpackJsonpsight-words"]=this["webpackJsonpsight-words"]||[]).push([[0],{112:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var r=n(5),s=n(0),o=n.n(s),a=n(37),c=n.n(a),i=(n(112),n(41)),l=n(98),u=n(83),p=n(93),h=n(136),j=n(134),d=n(133);n(84);var b=function(e){var t,n=e.current,s=e.total,o=e.word,a=e.status,c=e.next,i=e.prev,l=e.hits,b=e.hit,f=e.misses,O=e.miss,w=e.defer,v=e.reset,m=e.showTimer,x=e.changeMode,g=e.showHelp,k=e.time,y=Object(p.useSwipeable)({onSwipedDown:function(e){return O()},onSwipedUp:function(e){return b()},onSwipedLeft:function(e){return c()},onSwipedRight:function(e){return i()},preventDefaultTouchmoveEvent:!0});return m&&(t=Object(r.jsx)(h.a,{inverted:!0,children:Object(r.jsx)(j.a,{percent:k,inverted:!0})})),Object(r.jsxs)("div",Object(u.a)(Object(u.a)({},y),{},{className:"app-header",onClick:w,onContextMenu:function(e){e.preventDefault(),i()},children:[Object(r.jsxs)("div",{className:"app-report",children:[Object(r.jsx)("div",{className:"app-report-left",children:Object(r.jsx)(d.a,{className:"app-button",circular:!0,icon:"play",onClick:function(e){e.preventDefault(),e.stopPropagation(),v()}})}),Object(r.jsx)("div",{className:"app-report-center"}),Object(r.jsxs)("div",{className:"app-report-right",children:[Object(r.jsx)(d.a,{className:"app-button",circular:!0,icon:"hourglass outline",onClick:function(e){e.preventDefault(),e.stopPropagation(),x()}}),Object(r.jsx)(d.a,{className:"app-button",circular:!0,icon:"help",onClick:function(e){e.preventDefault(),e.stopPropagation(),g()}})]})]}),Object(r.jsx)("div",{className:"word",children:o}),Object(r.jsxs)("div",{className:"app-report",children:[Object(r.jsx)("div",{className:"app-report-left",children:l}),Object(r.jsxs)("div",{className:"app-report-center",children:[n,"/",s]}),Object(r.jsx)("div",{className:"app-report-right",children:f})]}),Object(r.jsx)("div",{children:a}),Object(r.jsx)("div",{className:"progress-div",children:t})]}))},f=n(132),O=n(53);var w=function(e){return Object(r.jsxs)(f.a,{basic:!0,onClose:function(){return e.setOpen(!1)},onOpen:function(){return e.setOpen(!0)},open:e.open,size:"small",children:[Object(r.jsx)(f.a.Content,{children:Object(r.jsxs)("p",{children:[Object(r.jsx)("br",{}),"Swipe up when answer corect.",Object(r.jsx)("br",{}),"Swipe down when answer is wrong.",Object(r.jsx)("br",{}),"Tap work when answer is unknown."]})}),Object(r.jsx)(f.a.Actions,{children:Object(r.jsxs)(d.a,{color:"green",inverted:!0,onClick:function(){return e.setOpen(!1)},children:[Object(r.jsx)(O.a,{name:"checkmark"})," OK"]})})]})},v=n(97),m="rapid_fire",x="normal_mode",g=0,k=function(e){var t=Object(l.a)(e),n=[];for(;t.length>0;){var r=Math.floor(Math.random()*t.length);n.push(t[r]),t.splice(r,1)}return n}(v),y=[],S={};function N(e){var t=e+1;return t>=k.length&&(t=0),t}var C=null;var M=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(s.useState)(0),c=Object(i.a)(a,2),l=c[0],u=c[1],p=Object(s.useState)(0),h=Object(i.a)(p,2),j=h[0],d=h[1],f=Object(s.useState)(x),O=Object(i.a)(f,2),v=O[0],M=O[1],D=Object(s.useState)(""),P=Object(i.a)(D,2),T=P[0],I=P[1],F=Object(s.useState)(!1),J=Object(i.a)(F,2),L=J[0],B=J[1],E=k[j];function H(e){"reset"===e&&(H("stop"),H("start")),"stop"===e&&null!=C&&(C(),C=null,g=0,I("")),null!=e&&""!==e&&"start"!==e||(C=function(e){var t=setInterval((function(t){e()}),1e3);return function(e){return clearInterval(t)}}((function(e){var t=g+1;t>10?(g=0,I(0)):(g=t,I(t))})),console.log(C))}return Object(r.jsxs)("div",{children:[Object(r.jsx)(w,{open:L,setOpen:B}),Object(r.jsx)(b,{current:j+1,total:k.length,word:E,status:T,hits:n,misses:l,showTimer:v===m,time:g/10*100,changeMode:function(e){v===x?(M(m),H("start")):(M(x),H("stop"))},next:function(e){d(N(j)),I("Next")},prev:function(e){d(function(e){var t=e-1;return t<=0&&(t=k.length-1),t}(j)),I("Prev")},hit:function(e){v===m&&H("reset"),o(n+1),d(N(j)),I("Score")},miss:function(e){v===m&&H("reset"),u(l+1),d(N(j)),I("Miss")},defer:function(e){v===m&&H("reset"),u(l+1),d(function(e){var t=k[e];return null==S[t]&&(S[t]=y.length-1,y.push(t)),N(e)}(j)),I("Miss")},showHelp:function(e){return B(!0)},reset:function(e){o(0),u(0),d(0)}})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),o(e),a(e)}))};n(119);c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(M,{})}),document.getElementById("root")),D()},84:function(e,t,n){},97:function(e){e.exports=JSON.parse('["a","not","be","please","will","just","and","one","black","pretty","with","know","away","play","brown","ran","yes","let","big","red","but","ride","after","live","blue","run","came","saw","again","may","can","said","did","say","an","of","come","see","do","she","any","old","down","the","eat","so","as","once","find","three","four","soon","ask","open","for","to","get","that","by","over","funny","two","good","there","could","put","go","up","have","they","every","round","help","we","he","this","fly","some","here","where","into","too","from","stop","in","yellow","like","under","give","take","is","you","must","want","giving","thank","it","I","new","was","had","them","jump","all","no","well","has","then","little","am","now","went","her","think","look","are","on","what","him","walk","make","at","our","white","his","were","me","ate","out","who","how","when","my"]')}},[[120,1,2]]]);
//# sourceMappingURL=main.d03c77f5.chunk.js.map