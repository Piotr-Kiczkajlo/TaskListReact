(this["webpackJsonptask-list-react"]=this["webpackJsonptask-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(7),s=n.n(o),a=(n(13),n(8)),r=n(4),l=n(3),u=(n(14),n(0)),d=function(t){var e=t.addNewTask,n=Object(c.useState)(""),i=Object(l.a)(n,2),o=i[0],s=i[1];return Object(u.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),0!==o.length&&e(o.trim()),s("")},children:[Object(u.jsx)("input",{value:o,className:"form__inputField",placeholder:"Co jest do zrobienia ?",onChange:function(t){return s(t.target.value)}}),Object(u.jsx)("button",{className:"form__submitButton",type:"submit",children:"Dodaj zadanie"})]})},j=(n(16),function(t){var e=t.tasks,n=t.hideDone,c=t.toggleHideDone,o=t.setAllDone;return Object(u.jsx)("div",{className:"listButtons",children:e.length>0&&Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)("button",{onClick:c,className:"manageTasksButton",children:e.some((function(t){return t.done}))&&n?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"}),Object(u.jsx)("button",{onClick:o,className:"manageTasksButton",disabled:e.every((function(t){return t.done})),children:"Uko\u0144cz wszystkie"})]})})}),b=(n(17),function(t){var e=t.tasks,n=t.hideDone,c=t.removeTask,i=t.toggleDoneTask;return Object(u.jsx)("ul",{className:"list",children:e.map((function(t){return Object(u.jsxs)("li",{className:"list__item ".concat(t.done&&n?"list__item--hide":""),children:[Object(u.jsx)("button",{onClick:function(){return i(t.id)},className:"list__toggleButton list__toggleButton--check",children:t.done?"\u2714":""}),Object(u.jsx)("span",{className:"list__item--content ".concat(t.done?"list__item--done":""),children:t.content}),Object(u.jsx)("button",{onClick:function(){return c(t.id)},className:"list__toggleButton list__toggleButton--delete",children:"\ud83d\uddd1\ufe0f"})]},t.id)}))})}),f=(n(18),function(t){var e=t.title,n=t.body,c=t.extraHeaderContent;return Object(u.jsxs)("section",{className:"section",children:[Object(u.jsxs)("header",{className:"section__header",children:[Object(u.jsx)("h2",{className:"section__listTitle",children:e}),c]}),Object(u.jsx)("div",{className:"section__body ",children:n})]})}),h=function(t){var e=t.title;return Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:e})})},m=(n(19),function(t){var e=t.children;return Object(u.jsx)("main",{className:"container",children:e})});var O=function(){var t=Object(c.useState)(!1),e=Object(l.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)([]),s=Object(l.a)(o,2),O=s[0],g=s[1];return Object(u.jsxs)(m,{children:[Object(u.jsx)(h,{title:"Lista zada\u0144"}),Object(u.jsx)(f,{title:"Dodaj nowe zadanie",body:Object(u.jsx)(d,{addNewTask:function(t){g((function(e){return[].concat(Object(a.a)(e),[{content:t,done:!1,id:0===e.length?1:e[e.length-1].id+1}])}))}})}),Object(u.jsx)(f,{title:"Lista zada\u0144",body:Object(u.jsx)(b,{tasks:O,hideDone:n,removeTask:function(t){g((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleDoneTask:function(t){g((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(u.jsx)(j,{tasks:O,hideDone:n,toggleHideDone:function(){i((function(t){return!t}))},setAllDone:function(){g((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}})})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),o(t),s(t)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),g()}],[[20,1,2]]]);
//# sourceMappingURL=main.ba685d49.chunk.js.map