(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),o=n.n(a),s=(n(14),n(3)),i=n.n(s),l=n(8),u=n(6),d=n(2),j=n(0),h=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("a",{href:"/memes",className:"logo",children:Object(j.jsx)("h1",{children:t})}),Object(j.jsx)("button",{className:"butn justify-right",onClick:n,children:c?"Close":"Add Meme"})]})};h.defaultProps={title:"XMeme"};var m=h,b=function(e){var t=e.onEdit,n=e.meme,r=Object(c.useState)(n.name),a=Object(d.a)(r,2),o=a[0],s=a[1],i=Object(c.useState)(n.url),l=Object(d.a)(i,2),u=l[0],h=l[1],m=Object(c.useState)(n.caption),b=Object(d.a)(m,2),f=b[0],O=b[1];return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(e){var c={name:o,url:u,caption:f};t(n.id,c),s(""),h(""),O("")},children:[Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Meme-Owner* "}),Object(j.jsx)("input",{type:"text",className:"border rounded",placeholder:"Write in your name",value:o,readOnly:!0,required:!0})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Meme Url* "}),Object(j.jsx)("input",{type:"url",className:"border rounded",placeholder:"URL of meme here",value:u,onChange:function(e){return h(e.target.value)},required:!0})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Caption* "}),Object(j.jsx)("input",{type:"text",className:"border rounded",value:f,onChange:function(e){return O(e.currentTarget.value)},required:!0})]}),Object(j.jsx)("input",{type:"submit",value:"Update Meme",className:"btn btn-outline-success"})]})},f=function(e){var t=e.meme,n=e.onDelete,r=e.onEdit,a=Object(c.useState)(!0),o=Object(d.a)(a,2),s=o[0],i=o[1];return Object(j.jsxs)("div",{className:"meme shadow p-1 mb-5 bg-white rounded border border-shadow border-light",children:[Object(j.jsxs)("div",{className:"meme-head",children:[Object(j.jsx)("h6",{className:"meme-owner",children:t.name}),Object(j.jsxs)("div",{className:"options",children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"green",viewBox:"0 0 16 16",onClick:function(){i(!s)},cursor:"pointer",className:"edit",children:[Object(j.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(j.jsx)("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]}),Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",viewBox:"0 0 15 15",onClick:function(){return n(t.id)},cursor:"pointer",className:"delete justify-right",children:[Object(j.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(j.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})]})]}),s?Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:t.url,onError:function(e){e.target.onerror=null,e.target.src="https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"},alt:"meme"}),Object(j.jsx)("p",{className:"caption lead",children:t.caption})]}):Object(j.jsx)(b,{onEdit:r,meme:t})]})},O=function(e){for(var t=e.memes,n=e.onDelete,c=e.onEdit,r=[],a=t.length-1;a>=0;a--)r.push(t[a]);return Object(j.jsx)("div",{className:"all-memes shadow-sm p-5 mb-5 bg-white rounded border border-shadow border-light",children:r.map((function(e){return Object(j.jsx)(f,{meme:e,onDelete:n,onEdit:c},e.id)}))})},p=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),l=i[0],u=i[1],h=Object(c.useState)(""),m=Object(d.a)(h,2),b=m[0],f=m[1];return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(e){t({name:a,url:l,caption:b}),o(""),u(""),f("")},children:[Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Meme-Owner* "}),Object(j.jsx)("input",{type:"text",className:"input-control border rounded",placeholder:"Write in your name",value:a,onChange:function(e){return o(e.target.value)},required:!0})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Meme Url* "}),Object(j.jsx)("input",{type:"url",className:"border rounded",placeholder:"URL of meme here",value:l,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Caption* "}),Object(j.jsx)("input",{type:"text",className:"border rounded",placeholder:"Be creative with your caption",value:b,onChange:function(e){return f(e.currentTarget.value)},required:!0})]}),Object(j.jsx)("input",{type:"submit",value:"Submit Meme",className:"btn btn-outline-success"})]})},v=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),o=Object(d.a)(a,2),s=o[0],h=o[1],b=8081;Object(c.useEffect)((function(){!function(){var e=window.location.pathname;fetch("http://localhost:".concat(b).concat(e)).then((function(e){return e.json()})).then((function(e){return e})).then((function(e){h(e)})).catch((function(e){console.log(e)}))}()}),[]);var v=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:".concat(b,"/memes"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,h([].concat(Object(l.a)(s),[c]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://localhost:".concat(b,"/memes/").concat(t),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){console.log(e),h(Object(l.a)(s))})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://localhost:".concat(b,"/memes/").concat(t),{method:"DELETE"}).then((function(){h(s.filter((function(e){return e.id!==t})))})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(m,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(j.jsx)(p,{onAdd:v}),s.length>0?Object(j.jsx)("div",{children:Object(j.jsx)(O,{memes:s,onDelete:g,onEdit:x})}):"object"===typeof s&&void 0!==s.name?Object(j.jsx)(f,{meme:s,onDelete:g,onEdit:x}):Object(j.jsxs)("div",{children:["Either there are no memes to show, or the page you requested was not found :(",Object(j.jsx)("br",{}),'Click on the "XMeme" logo to get back to the home page']})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.a17bcedf.chunk.js.map