(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(6),s=n.n(r),u=(n(15),n(10)),a=n(3),i=n(7),o=n.n(i),j=n(0),d=function(e){return Object(j.jsx)("div",{className:o.a.card,children:e.children})},b=n(8),l=n.n(b),h=function(e){return Object(j.jsx)("button",{className:l.a.button,type:e.type||"button",children:e.children})},O=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),r=n[0],s=n[1],u=Object(c.useState)(""),i=Object(a.a)(u,2),o=i[0],b=i[1];return Object(j.jsx)(d,{children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==r.trim().length&&0!==o.trim().length&&(+o<1||(e.onAddUser(r,o),s(""),b("")))},children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username "}),Object(j.jsx)("input",{id:"username",value:r,onChange:function(e){s(e.target.value)},type:"text"}),Object(j.jsx)("label",{htmlFor:"age",children:"Age (Years) "}),Object(j.jsx)("input",{id:"age",value:o,onChange:function(e){b(e.target.value)},type:"number"}),Object(j.jsx)(h,{type:"submit",children:"Add User"})]})})},m=n(9),x=n.n(m),p=function(e){return Object(j.jsx)("div",{className:x.a.users,children:Object(j.jsx)(d,{children:Object(j.jsx)("ul",{children:e.users.map((function(e){return Object(j.jsxs)("li",{children:[e.name,": ",e.age," years old"]},e.id)}))})})})},f=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{onAddUser:function(e,t){r((function(n){return[].concat(Object(u.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(j.jsx)(p,{users:n})]})};s.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))},7:function(e,t,n){e.exports={card:"Card_card__314gH"}},8:function(e,t,n){e.exports={button:"Button_button__145YO"}},9:function(e,t,n){e.exports={users:"UsersList_users__33h5V"}}},[[17,1,2]]]);
//# sourceMappingURL=main.f1878c36.chunk.js.map