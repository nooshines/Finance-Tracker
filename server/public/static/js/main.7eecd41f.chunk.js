(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{131:function(e,t,n){e.exports=n(238)},136:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),s=(n(136),n(8)),l=n(6),u=n.n(l),i=n(12);function m(){return{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}function p(){return(p=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/incomes",{headers:m()});case 2:if(!((t=e.sent).status>299)){e.next=5;break}return e.abrupt("return",Promise.reject("not authorised"));case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/incomes",{method:"POST",body:JSON.stringify(t),headers:m()});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(){var e=Object(i.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/incomes/".concat(t),{method:"PATCH",body:JSON.stringify(n),headers:m()});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function g(e){return E.apply(this,arguments)}function E(){return(E=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/incomes/"+t,{method:"DELETE",headers:m()});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/expenses",{headers:m()});case 2:if(!((t=e.sent).status>299)){e.next=5;break}return e.abrupt("return",Promise.reject("not authorised"));case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/expenses",{method:"POST",body:JSON.stringify(t),headers:m()});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(){var e=Object(i.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/expenses/".concat(t),{method:"PATCH",body:JSON.stringify(n),headers:m()});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function O(e){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/expenses/"+t,{method:"DELETE",headers:m()});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).catch((function(e){console.log("error",e)}));case 3:return n=e.sent,e.next=6,n.json().catch((function(e){console.log("error",e)}));case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function S(){return(S=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if(!((n=e.sent).status>299)){e.next=5;break}return e.abrupt("return",Promise.reject("incorrect login"));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=Object(a.createContext)(),N=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(s.a)(n,2),o=c[0],l=c[1],u=Object(a.useState)([]),i=Object(s.a)(u,2),m=i[0],d=i[1];Object(a.useEffect)((function(){(function(){return p.apply(this,arguments)})().then((function(e){console.log("incomes",e),l(e)})),function(){return v.apply(this,arguments)}().then((function(e){console.log("expenses",e),d(e)}))}),[]);var f=o.map((function(e){return e.amount})),b=m.map((function(e){return e.amount})),g=f.reduce((function(e,t){return e+t}),0).toFixed(2),E=b.reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(C.Provider,{value:{incomes:o,setIncome:l,expenses:m,setExpense:d,totalIncome:g,totalExpense:E}},t)},I=n(71),T=n(13),z=function(e){var t=e.setLoggedIn,n=e.setUser,c=Object(a.useState)({}),o=Object(s.a)(c,2),l=o[0],u=o[1],i=Object(T.g)(),m=function(e){var t=e.currentTarget.name,n=Object(I.a)({},l);n[t]=e.currentTarget.value,u(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-container"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("submitted"),function(e){return S.apply(this,arguments)}(l).then((function(e){console.log("loggedin",e),localStorage.setItem("token",e.user.token),t(!0),n(e.user),i.push("/home")})).catch((function(e){console.log("error",e)}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"UserName"),r.a.createElement("input",{id:"name",type:"name",name:"name",onChange:m,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",type:"password",name:"password",onChange:m,required:!0,minLength:"6"})),r.a.createElement("input",{type:"submit",value:"submit",className:"btn btn-primary btn-block"}))))},F=n(38),P=n(25),B=n(278),L=n(292),q=n(283),D=Object(B.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),A=function(){var e=D(),t=Object(a.useContext)(C),n=t.incomes,c=t.setIncome,o=Object(a.useState)(""),l=Object(s.a)(o,2),m=l[0],p=l[1],f=Object(a.useState)(""),b=Object(s.a)(f,2),g=b[0],E=b[1],v=Object(a.useState)(""),x=Object(s.a)(v,2),h=x[0],j=x[1],O=Object(a.useState)(""),y=Object(s.a)(O,2),w=y[0],k=y[1],S=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!m||!g){e.next=12;break}return e.next=4,d({title:m,amount:g});case 4:a=e.sent,c([].concat(Object(P.a)(n),[a])),p(""),E(""),j(""),k(""),e.next=14;break;case 12:m||j("Income Input is required"),g||k("Amount Input is required");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){"income"===e.currentTarget.name?p(e.currentTarget.value):E(e.currentTarget.value)},I=function(e){"income"===e.currentTarget.name?(p(e.currentTarget.value),e.currentTarget.value?j(""):j("Income Input is required")):(E(e.currentTarget.value),e.currentTarget.value?k(""):k("Amount Input is required"))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:S,className:e.root,autoComplete:"off"},r.a.createElement(L.a,{id:"outlined-size-small",size:"small",error:!!h,helperText:h||"",label:"income",variant:"outlined",name:"income",value:m,onChange:N,onBlur:I}),r.a.createElement(L.a,{id:"outlined-size-small",size:"small",error:!!w,helperText:w||"",type:"number",label:"amount",variant:"outlined",name:"amount",value:g,onChange:N,onBlur:I}),r.a.createElement(q.a,{type:"submit",variant:"contained"},"Submit")))},J=Object(B.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),R=function(){var e=J(),t=Object(a.useContext)(C),n=t.expenses,c=t.setExpense,o=Object(a.useState)(""),l=Object(s.a)(o,2),m=l[0],p=l[1],d=Object(a.useState)(""),f=Object(s.a)(d,2),b=f[0],g=f[1],E=Object(a.useState)(""),v=Object(s.a)(E,2),h=v[0],j=v[1],O=Object(a.useState)(""),y=Object(s.a)(O,2),w=y[0],k=y[1],S=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!m||!b){e.next=12;break}return e.next=4,x({title:m,amount:b});case 4:a=e.sent,c([].concat(Object(P.a)(n),[a])),p(""),g(""),j(""),k(""),e.next=14;break;case 12:m||j("Expense Input is required"),b||k("Amount Input is required");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){"expense"===e.currentTarget.name?p(e.currentTarget.value):g(e.currentTarget.value)},I=function(e){"expense"===e.currentTarget.name?(p(e.currentTarget.value),e.currentTarget.value?j(""):j("Expense Input is required")):(g(e.currentTarget.value),e.currentTarget.value?k(""):k("Amount Input is required"))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:S,className:e.root,autoComplete:"off"},r.a.createElement(L.a,{id:"outlined-size-small",size:"small",error:!!h,helperText:h||"",label:"expense",variant:"outlined",name:"expense",value:m,onChange:N,onBlur:I}),r.a.createElement(L.a,{id:"outlined-size-small",size:"small",error:!!w,helperText:w||"",type:"number",label:"amount",variant:"outlined",name:"amount",value:b,onChange:N,onBlur:I}),r.a.createElement(q.a,{type:"submit",variant:"contained"},"Submit")))},$=n(69),V=n(70),W=n(296),H=n(284);function U(){var e=Object($.a)(["\n  width: 40%;\n  &.view {\n    input {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: black;\n    }\n  }\n  &.edit {\n    /* border: 1px solid lightgray; */\n    background-color: #f5f5f5;\n    padding: 5px;\n    border-radius: 5px;\n    margin-right: 3px;\n  }\n"]);return U=function(){return e},e}var G=Object(B.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}})),M=Object(V.a)(W.a)(U()),K=function(e){var t=e.income,n=G(),c=Object(a.useContext)(C),o=c.incomes,l=c.setIncome,m=Object(a.useState)(!1),p=Object(s.a)(m,2),d=p[0],f=p[1],E=Object(a.useState)(t.title),v=Object(s.a)(E,2),x=v[0],h=v[1],j=Object(a.useState)(t.amount),O=Object(s.a)(j,2),y=O[0],w=O[1],k=Object(a.useState)(""),S=Object(s.a)(k,2),N=S[0],I=S[1],T=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:n=e.sent,l(o.filter((function(e){return e.id!==n[0].id})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("id",N),e.next=3,b(N,{title:x,amount:y});case 3:t=e.sent,f(!1),n=Object(P.a)(o),a=n.findIndex((function(e){return e.id===N})),console.log("finsIndexIncome",a),console.log("newincome.data",t.data),console.log("updateIncomeState[findIncomeIndex]",n[a]),a&&void 0!==a&&(n[a]=t.data,l(Object(P.a)(n)));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,d?r.a.createElement("div",null,r.a.createElement(H.a,{item:!0,container:!0,xs:12},r.a.createElement(H.a,{item:!0,xs:6},r.a.createElement(M,{className:"edit",onChange:function(e){h(e.target.value)},defaultValue:t.title},t.title),r.a.createElement(M,{className:"edit",onChange:function(e){w(e.target.value)},defaultValue:t.amount},t.amount)),r.a.createElement(H.a,{item:!0,justify:"flex-end",xs:6},r.a.createElement(q.a,{variant:"contained",size:"small",className:n.margin,onClick:function(){return z()}},"Save"),r.a.createElement(q.a,{variant:"contained",size:"small",className:n.margin,onClick:function(){return f(!1)}},"Cancel")))):r.a.createElement("div",null,r.a.createElement(H.a,{item:!0,container:!0,s:12},r.a.createElement(H.a,{item:!0,xs:6},r.a.createElement(M,{disabled:!0,defaultValue:t.title,className:"view"}),r.a.createElement("span",null,"$"),r.a.createElement(M,{disabled:!0,className:"view",value:t.amount})),r.a.createElement(H.a,{item:!0,justify:"flex-end",xs:6},r.a.createElement(q.a,{variant:"contained",size:"small",className:n.margin,onClick:function(){return T(t.id)}},"Remove"),r.a.createElement(q.a,{variant:"contained",size:"small",className:n.margin,onClick:function(){return e=t.id,f(!0),void I(e);var e}},"Edit")))))},Q=function(){var e=Object(a.useContext)(C).incomes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Income - Transaction History"),e.map((function(e){return r.a.createElement(K,{income:e,key:e.id})})))};function X(){var e=Object($.a)(["\n  width: 40%;\n  &.view {\n    input {\n      color: black;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n  &.edit {\n    /* border: 1px solid lightgray; */\n    background-color: #f5f5f5;\n    padding: 5px;\n    border-radius: 5px;\n    margin-right: 3px;\n  }\n"]);return X=function(){return e},e}var Y=Object(B.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}})),Z=Object(V.a)(W.a)(X()),_=function(e){var t=e.expense,n=Y(),c=Object(a.useContext)(C),o=c.expenses,l=c.setExpense,m=Object(a.useState)(!1),p=Object(s.a)(m,2),d=p[0],f=p[1],b=Object(a.useState)(t.title),g=Object(s.a)(b,2),E=g[0],v=g[1],x=Object(a.useState)(t.amount),h=Object(s.a)(x,2),y=h[0],w=h[1],k=Object(a.useState)(""),S=Object(s.a)(k,2),N=S[0],I=S[1],T=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:n=e.sent,l(o.filter((function(e){return e.id!==n[0].id})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(N,{title:E,amount:y});case 2:t=e.sent,f(!1),n=Object(P.a)(o),void 0!==(a=n.findIndex((function(e){return e.id===N})))&&(n[a]=t.data,l(Object(P.a)(n)));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,d?r.a.createElement("div",null,r.a.createElement(H.a,{item:!0,container:!0,xs:12},r.a.createElement(H.a,{item:!0,xs:6},r.a.createElement(Z,{className:"edit",onChange:function(e){v(e.target.value)},defaultValue:t.title},t.title),r.a.createElement(Z,{type:"number",className:"edit",onChange:function(e){w(e.target.value)},defaultValue:t.amount},t.amount)),r.a.createElement(H.a,{item:!0,justify:"flex-end",xs:6},r.a.createElement(q.a,{variant:"contained",size:"small",className:n.margin,onClick:function(){return z()}},"Save"),r.a.createElement(q.a,{variant:"contained",size:"small",className:n.margin,onClick:function(){return f(!1)}},"Cancel")))):r.a.createElement("div",null,r.a.createElement(H.a,{item:!0,container:!0,s:12},r.a.createElement(H.a,{item:!0,xs:6},r.a.createElement(Z,{disabled:!0,defaultValue:t.title,className:"view"}),r.a.createElement("span",null,"$"),r.a.createElement(Z,{disabled:!0,className:"view",value:t.amount})),r.a.createElement(H.a,{item:!0,justify:"flex-end",xs:6},r.a.createElement(q.a,{variant:"contained",size:"small",className:n.margin,onClick:function(){return T(t.id)}},"Remove"),r.a.createElement(q.a,{variant:"contained",size:"small",className:n.margin,onClick:function(){return e=t.id,f(!0),void I(e);var e}},"Edit")))))},ee=function(){var e=Object(a.useContext)(C).expenses;return console.log("expenses",e),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Expense - Transaction History"),e.map((function(e){return r.a.createElement(_,{expense:e,key:e.id})})))},te=n(43),ne=function(){var e=Object(a.useContext)(C),t=e.totalIncome,n=e.totalExpense,c={labels:["Income $".concat(t),"Expense $".concat(n)],datasets:[{label:"Income",backgroundColor:["#66d37e","#ea5455"],hoverBackgroundColor:["#175000","#003350"],data:[t,n]}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(te.Doughnut,{data:c,options:{title:{text:"Balance $ ".concat(t-n),display:!0,fontSize:20},legend:{display:!0,position:"bottom"}}}))},ae=function(){var e=Object(a.useContext)(C),t=e.totalIncome,n={labels:["Income","Balance"],datasets:[{label:"Income",backgroundColor:["#66d37e","#d9dad7"],hoverBackgroundColor:["#175000","#003350"],data:[t,t-e.totalExpense]}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(te.Doughnut,{data:n,options:{title:{display:!0,text:"Income $ ".concat(t),fontSize:20},legend:{display:!0,position:"bottom"}}})))},re=function(){var e=Object(a.useContext)(C),t=e.totalExpense,n={labels:["Expense","Balance"],datasets:[{label:"Expense",backgroundColor:["#ea5455","#d9dad7"],hoverBackgroundColor:["#175000","#003350"],data:[t,e.totalIncome-t]}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(te.Doughnut,{data:n,options:{title:{display:!0,text:"Expense $ ".concat(t),fontSize:20},legend:{display:!0,position:"bottom"}}})))},ce=n(239),oe=Object(B.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"center"},paper1:{padding:e.spacing(1),textAlign:"center"},paper2:{padding:e.spacing(1),textAlign:"center"}}})),se=function(){var e=oe();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.root},r.a.createElement(H.a,{container:!0,spacing:4},r.a.createElement(H.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(ce.a,{className:e.paper},r.a.createElement(ae,null))),r.a.createElement(H.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(ce.a,{className:e.paper},r.a.createElement(re,null))),r.a.createElement(H.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(ce.a,{className:e.paper},r.a.createElement(ne,null))),r.a.createElement(H.a,{item:!0,xs:12,sm:6,md:6},r.a.createElement(ce.a,{className:e.paper1}," ",r.a.createElement("h2",null,"Income"),r.a.createElement(A,null))),r.a.createElement(H.a,{item:!0,xs:12,sm:6,md:6},r.a.createElement(ce.a,{className:e.paper1}," ",r.a.createElement("h2",null,"Expense"),r.a.createElement(R,null))),r.a.createElement(H.a,{item:!0,xs:12,sm:6,md:6},r.a.createElement(ce.a,{className:e.paper2}," ",r.a.createElement(Q,null))),r.a.createElement(H.a,{item:!0,xs:12,sm:6,md:6},r.a.createElement(ce.a,{className:e.paper2}," ",r.a.createElement(ee,null))))))},le=n(295),ue=n(286),ie=n(285),me=n(287),pe=n(282),de=n(72),fe=n(291),be=n(288),ge=n(289),Ee=n(290),ve=n(119),xe=n.n(ve),he=n(120),je=n.n(he),Oe=Object(B.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)}}})),ye=function(e){var t=e.user,n=e.setLoggedIn,a=Oe();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root},r.a.createElement(ie.a,null),r.a.createElement(ue.a,{position:"fixed",className:a.appBar,style:{background:"#22b2da"}},r.a.createElement(me.a,null,r.a.createElement(de.a,{variant:"h6",noWrap:!0},"Finance Tracker"),r.a.createElement(de.a,{variant:"h6",noWrap:!0,style:{marginLeft:"200px",paddingLeft:"300px"}},"Welcome"),r.a.createElement(de.a,{variant:"h6",noWrap:!0,style:{marginLeft:"10px",textTransform:"uppercase"}},t.name))),r.a.createElement(le.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper}},r.a.createElement(me.a,null),r.a.createElement("div",{className:a.drawerContainer},r.a.createElement(pe.a,null,["Dashboard","Profile","Daily Report","Monthly Report"].map((function(e,t){return r.a.createElement(be.a,{button:!0,key:e},r.a.createElement(ge.a,null,r.a.createElement(xe.a,null)),r.a.createElement(Ee.a,{primary:e}))}))),r.a.createElement(fe.a,null),r.a.createElement(pe.a,null,r.a.createElement(be.a,{button:!0},r.a.createElement(ge.a,null,r.a.createElement(je.a,null)),r.a.createElement(F.b,{to:"/signup",onClick:function(){localStorage.removeItem("token"),n(!1)},className:"styledanchor",style:{color:"black"}},"Logout"))))),r.a.createElement("main",{className:a.content},r.a.createElement(me.a,null),r.a.createElement(se,null))))},we=n(293),ke=Object(B.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),Se=function(){ke();var e=Object(a.useState)({name:"",password:""}),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),m=l[0],p=l[1],d=Object(a.useState)("info"),f=Object(s.a)(d,2),b=f[0],g=f[1],E=Object(a.useState)(""),v=Object(s.a)(E,2),x=v[0],h=v[1],j=function(e){var t=e.currentTarget.name,a=Object(I.a)({},n);a[t]=e.currentTarget.value,c(a)},O=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("formDta",n),t.preventDefault(),e.next=4,w({user:n}).catch((function(e){console.log("errors",e)}));case 4:a=e.sent,console.log("user",a),c({name:"",password:""}),a.errors?(p(!0),g("error"),h("User already exist!")):a.id&&(p(!0),g("info"),h(" User Successfully created, Please Login !"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-container"},r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:O},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{value:n.name,id:"name",type:"name",name:"name",onChange:j,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{value:n.password,id:"password",type:"password",name:"password",onChange:j,required:!0,minLength:"6"})),r.a.createElement("input",{type:"submit",value:"Register",className:"btn btn-primary btn-block"}),m&&r.a.createElement(we.a,{severity:b},x)),r.a.createElement("span",null,"Have an acount?"),r.a.createElement(F.b,{to:"/login"},"Login")))};n(237);var Ce=function(){var e=Object(a.useState)(!!window.localStorage.getItem("token")),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({}),l=Object(s.a)(o,2),u=l[0],i=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,null,r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"/login"},r.a.createElement(z,{setLoggedIn:c,setUser:i})),r.a.createElement(T.b,{path:"/home"},n?r.a.createElement(N,null,r.a.createElement(ye,{user:u,setLoggedIn:c})):r.a.createElement(T.a,{to:"/signup"})),r.a.createElement(T.b,{path:"/"},r.a.createElement(Se,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.7eecd41f.chunk.js.map