(window["webpackJsonpservice-worker-101"]=window["webpackJsonpservice-worker-101"]||[]).push([[0],[,,,function(e,t,n){e.exports={NewRoot:"Post_NewRoot__2yEyv",Root:"Post_Root__11Wzi",PostTitleContainer:"Post_PostTitleContainer__1aDwB",LinkWrapper:"Post_LinkWrapper__1JnOM",PostTitle:"Post_PostTitle__JJeEM",PostID:"Post_PostID___SF-s",PostFooter:"Post_PostFooter__1pJwn",Content:"Post_Content__1M4qk",ButtonContainer:"Post_ButtonContainer__2QvXx"}},,,,function(e,t,n){e.exports={"lds-hourglass":"Loader_lds-hourglass__2ysjR"}},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),i=(n(13),n(2)),s=(n(14),n(1)),u=n.n(s),l=n(4),f=fetch("http://localhost:8000/wp-json/wp/v2/posts").then(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return e})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)})),d=n(3),p=n.n(d),h=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!1),u=Object(i.a)(s,2),l=u[0],f=u[1],d=e.in;return d?o.a.createElement("article",{className:p.a.NewRoot},o.a.createElement("main",{className:p.a.Root,key:d.id},o.a.createElement("h2",{className:p.a.PostTitleContainer,title:"Post ID = "+d.id,onClick:function(){return c(!a)}},d.title.rendered),a&&o.a.createElement("aside",{className:p.a.PostFooter},a&&o.a.createElement("div",{className:p.a.ButtonContainer},o.a.createElement("button",{id:"save"},o.a.createElement("span",{role:"img","aria-label":"Icon"},"\u23f0")," ","Save offline"),o.a.createElement("button",{id:"expand",onClick:function(){return f(!l)}},o.a.createElement("span",{role:"img","aria-label":"Icon"},"\ud83c\udfb6"),"Read now"),o.a.createElement("button",{id:"hide"},o.a.createElement("span",{role:"img","aria-label":"Icon"},"\u270b"),"Delete")))),l&&o.a.createElement("aside",{className:p.a.Content,dangerouslySetInnerHTML:{__html:d.content.rendered}})):o.a.createElement("h1",null,"Post not loaded")},w=fetch("http://localhost:8000/wp-json/wp/v2/categories").then(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return e})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)})),m=fetch("http://localhost:8000/wp-json/wp/v2/tags").then(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return e})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)})),v=n(7),g=n.n(v),_=function(){return o.a.createElement("div",{className:g.a.ldsHourglass})},b=function(e){var t=Object(r.useState)(),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(),u=Object(i.a)(s,2),l=u[0],f=u[1];return m.then((function(e){return f(e)})),w.then((function(e){return c(e)})),e.in?e.in.map((function(e){return o.a.createElement(h,{in:e,tags:l,categories:a,key:e.id})})):o.a.createElement(_,null)};var E=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1];return f.then((function(e){return a(e)})),o.a.createElement("div",{className:"App"},o.a.createElement(b,{in:n}))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/wordpress-reader-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/wordpress-reader-react","/service-worker.js");P?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.fd396e39.chunk.js.map