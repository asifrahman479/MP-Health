(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{70:function(e,t,a){},71:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(7),i=a.n(c),s=a(41),r=a.n(s),l=(a(70),a(15)),o=a(16),d=a(18),j=a(17),p=(a(71),a(27)),h=a(12),b=a(50),m=a.n(b),u=a(58),O=a(92),x=a(28),v=a(88),f=a(89),y=a(90),N=a(91),g=a(93),w=a(43),T=a(42),k=[{title:"Available doctors",path:"/doctor",icon:Object(n.jsx)(T.a,{icon:w.c}),sub:[],cName:"nav-text"}],S=[{title:"Set Availibility",path:"/",icon:Object(n.jsx)(T.a,{icon:w.b}),sub:[],cName:"nav-text"},{title:"Appointments",path:"/",icon:Object(n.jsx)(T.a,{icon:w.a}),cName:"nav-text"},{title:"Patient",path:"/patient",icon:Object(n.jsx)(T.a,{icon:w.d}),sub:[],cName:"nav-text"}],E=a(0);Object(E.I)(!0);var C=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"rendereComplete",value:function(){}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.rendereComplete()}))}}]),a}(c.PureComponent),M=a(11),D=a(33),A=a(87),F=a(86),P=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.apply(this,arguments)).dataManger=new M.a({url:"http://mphealth.herokuapp.com/api/Appointment/",crudUrl:"http://mphealth.herokuapp.com/api/Appointment/",adaptor:new D.e,crossDomain:!0}),e.state={appointmentsList:[]},e}return Object(o.a)(a,[{key:"editorTemplate",value:function(e){return void 0!==e?Object(n.jsx)("table",{className:"custom-event-editor",style:{width:"100%",cellpadding:"5"},children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"e-textlabel",children:"Name"}),Object(n.jsx)("td",{colSpan:4,children:Object(n.jsx)("input",{id:"Summary",className:"e-field e-input",type:"text",name:"Subject",style:{width:"100%"}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"e-textlabel",children:"Type of Visit"}),Object(n.jsx)("td",{colSpan:4,children:Object(n.jsx)(F.a,{id:"EventType",placeholder:"Choose Type","data-name":"EventType",className:"e-field",style:{width:"100%"},dataSource:["Sick","Emergency","Check-Up"],value:e.EventType||null})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"e-textlabel",children:"From"}),Object(n.jsx)("td",{colSpan:4,children:Object(n.jsx)(A.a,{format:"dd/MM/yy hh:mm a",id:"StartTime","data-name":"StartTime",value:new Date(e.startTime||e.StartTime),className:"e-field"})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"e-textlabel",children:"To"}),Object(n.jsx)("td",{colSpan:4,children:Object(n.jsx)(A.a,{format:"dd/MM/yy hh:mm a",id:"EndTime","data-name":"EndTime",value:new Date(e.endTime||e.EndTime),className:"e-field"})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"e-textlabel",children:"Reason for visit"}),Object(n.jsx)("td",{colSpan:4,children:Object(n.jsx)("textarea",{id:"Description",className:"e-field e-input",name:"Description",rows:3,cols:50,style:{width:"100%",height:"60px !important",resize:"vertical"}})})]})]})}):Object(n.jsx)("div",{})}},{key:"onEventRendered",value:function(e){var t=e.data.CategoryColor;e.element.style.backgroundColor=t}},{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://mphealth.herokuapp.com/api/Appointment");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({appointmentsList:a}),console.log(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("hello");case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{style:{backgroundColor:"#E5E5E5"},children:[Object(n.jsx)("div",{className:"sidenav",children:S.map((function(e,t){return Object(n.jsx)("li",{className:e.cName,children:Object(n.jsxs)(p.b,{to:e.path,children:[e.icon,Object(n.jsx)("span",{children:e.title})]})},t)}))}),Object(n.jsx)("div",{className:"calender",children:Object(n.jsx)(O.a,{ref:function(t){return e.scheduleObj=t},editorTemplate:this.editorTemplate.bind(this),style:{float:"right",backgroundColor:"E5E5E5",border:"none",paddingTop:"5%"},width:"80%",height:"100%",currentView:"Week",eventSettings:{dataSource:this.dataManger},eventRendered:this.onEventRendered.bind(this),children:Object(n.jsx)(x.b,{services:[v.a,f.a,y.a,N.a,g.a]})})})]})}}]),a}(C),L=(a(80),c.Component,function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.apply(this,arguments)).dataManger=new M.a({url:"https://mphealth.herokuapp.com/api/DocAvailability",crudUrl:"https://mphealth.herokuapp.com/admin/user/appointment/add/",adaptor:new D.e,crossDomain:!0,IsBlock:!0}),e}return Object(o.a)(a,[{key:"onPopupOpen",value:function(e){"QuickInfo"===e.type&&(e.cancel=!0,window.open("/create/create_appointment"),window.location.reload())}},{key:"editorTemplate",value:function(e){return void 0!==e?Object(n.jsx)("table",{className:"custom-event-editor",style:{width:"100%",cellpadding:"5"},children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"e-textlabel",children:"Name"}),Object(n.jsx)("td",{colSpan:4,children:Object(n.jsx)("input",{id:"Summary",className:"e-field e-input",type:"text",name:"Subject",style:{width:"100%"}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"e-textlabel",children:"Type of Visit"}),Object(n.jsx)("td",{colSpan:4,children:Object(n.jsx)(F.a,{id:"EventType",placeholder:"Choose Type","data-name":"EventType",className:"e-field",style:{width:"100%"},dataSource:["Sick","Emergency","Check-Up"],value:e.EventType||null})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"e-textlabel",children:"From"}),Object(n.jsx)("td",{colSpan:4,children:Object(n.jsx)(A.a,{format:"dd/MM/yy hh:mm a",id:"StartTime","data-name":"StartTime",value:new Date(e.startTime||e.StartTime),className:"e-field"})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"e-textlabel",children:"To"}),Object(n.jsx)("td",{colSpan:4,children:Object(n.jsx)(A.a,{format:"dd/MM/yy hh:mm a",id:"EndTime","data-name":"EndTime",value:new Date(e.endTime||e.EndTime),className:"e-field"})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"e-textlabel",children:"Reason for visit"}),Object(n.jsx)("td",{colSpan:4,children:Object(n.jsx)("textarea",{id:"Description",className:"e-field e-input",name:"Description",rows:3,cols:50,style:{width:"100%",height:"60px !important",resize:"vertical"}})})]})]})}):Object(n.jsx)("div",{})}},{key:"render",value:function(){return Object(n.jsxs)("div",{style:{backgroundColor:"#E5E5E5"},children:[Object(n.jsx)("div",{className:"sidenav",children:k.map((function(e,t){return Object(n.jsx)("li",{className:e.cName,children:Object(n.jsxs)(p.b,{to:e.path,children:[e.icon,Object(n.jsx)("span",{children:e.title})]})},t)}))}),Object(n.jsx)("div",{className:"calender",children:Object(n.jsx)(O.a,{editorTemplate:this.editorTemplate.bind(this),popupOpen:this.onPopupOpen.bind(this),style:{float:"right",backgroundColor:"E5E5E5",border:"none",paddingTop:"5%"},width:"81%",height:"100%",currentView:"Week",eventSettings:{dataSource:this.dataManger},children:Object(n.jsx)(x.b,{services:[v.a,f.a,y.a,N.a,g.a]})})})]})}}]),a}(c.Component)),I=Object(h.f)(L),R=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.apply(this,arguments)).dataManger=new M.a({url:"http://127.0.0.1:8000/api/Appointment/?format=json",adaptor:new D.e,crossDomain:!0}),e}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"schedule-control-section",children:Object(n.jsx)("div",{className:"control-section",children:Object(n.jsx)("div",{className:"control-wrapper",children:Object(n.jsx)(O.a,{width:"100%",height:"650px",eventSettings:{dataSource:this.dataManger},readonly:!1,children:Object(n.jsx)(x.b,{services:[v.a,f.a,y.a,N.a,g.a]})})})})})}}]),a}(C),U=(a(81),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"basecontainer",children:[Object(n.jsx)("div",{className:"header",children:" Login"}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("div",{className:"form",children:[Object(n.jsxs)("div",{className:"formgroup",children:[Object(n.jsx)("label",{htmlFor:"username",children:" Username"}),Object(n.jsx)("input",{type:"text",name:"username",placeholder:"username"})]}),Object(n.jsxs)("div",{className:"formgroup",children:[Object(n.jsx)("label",{htmlFor:"password",children:" Password"}),Object(n.jsx)("input",{type:"password",name:"password",placeholder:"password"})]})]})}),Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)("button",{type:"button",className:"btn",children:"Login"})})]})}}]),a}(c.Component)),V=(c.Component,function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)(p.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{path:"/",exact:!0,component:B}),Object(n.jsx)(h.a,{path:"/doctor",component:P}),Object(n.jsx)(h.a,{path:"/patient",component:I}),Object(n.jsx)(h.a,{path:"/temp",component:R})]})})})}}]),a}(c.Component)),B=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{}),Object(n.jsx)(p.b,{to:"/doctor",children:Object(n.jsx)("button",{renderAs:"button",children:Object(n.jsx)("span",{children:"Doctor"})})})]})},z=V,J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),J()}},[[82,1,2]]]);
//# sourceMappingURL=main.488c179b.chunk.js.map