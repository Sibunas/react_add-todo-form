(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(8),c=a(6),s=a(2),o=a(1),d=(a(13),a(0)),l=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},u=function(e){var t=e.todo;return Object(d.jsxs)("article",{"data-id":t.id,className:"TodoInfo ".concat(t.completed?"TodoInfo--completed":""),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(d.jsx)(l,{user:t.user})]})},m=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(u,{todo:e},e.id)}))})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],b=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],h=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),l=Object(s.a)(i,2),u=l[0],h=l[1],f=Object(o.useState)(""),O=Object(s.a)(f,2),p=O[0],v=O[1],x=Object(o.useState)(""),y=Object(s.a)(x,2),S=y[0],N=y[1],I=Object(o.useState)(""),g=Object(s.a)(I,2),C=g[0],_=g[1];Object(o.useEffect)((function(){var e=b.map((function(e){var t=j.find((function(t){return t.id===e.userId}));if(!t)throw new Error("User not found");return Object(c.a)(Object(c.a)({},e),{},{user:t})}));n(e)}),[]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=!1;u.trim()||(N("Please enter a title"),t=!0),p||(_("Please choose a user"),t=!0),t||function(){var e=j.find((function(e){return e.id===Number(p)})),t=a.reduce((function(e,t){return t.id>e?t.id:e}),0);if(e){var i={id:t+1,title:u,user:e,completed:!1};n([].concat(Object(r.a)(a),[i])),h(""),v("")}else _("User not found")}()},children:[Object(d.jsxs)("div",{className:"field",children:["Title: \xa0",Object(d.jsx)("input",{type:"text","data-cy":"titleInput",value:u,onChange:function(e){h(e.target.value),S&&N("")},placeholder:"Enter a title"}),S&&Object(d.jsx)("span",{className:"error",children:S})]}),Object(d.jsxs)("div",{className:"field",children:["User:\xa0",Object(d.jsxs)("select",{"data-cy":"userSelect",value:p,onChange:function(e){v(e.target.value),C&&_("")},children:[Object(d.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),j.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),C&&Object(d.jsx)("span",{className:"error",children:C})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(m,{todos:a})]})};i.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f4633f44.chunk.js.map