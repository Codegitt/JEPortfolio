(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(47)},33:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l);a(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=a(18),i=a(14),o=a(3),u=a(4),s=a(6),h=a(5),p=a(7),b=a(2),d=a(13),E=(a(38),Object(d.d)(function(e){return r.a.createElement("header",null,r.a.createElement("nav",{className:"nav-wrapper transparent"},r.a.createElement("div",{className:"container"},r.a.createElement(b.b,{to:"/",className:"brand-logo"},"J.E. Portfolio"),r.a.createElement("a",{href:"",class:"sidenav-trigger","data-target":"mobile-menu"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(b.b,{to:"/"}," Home ")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/App1"}," App1 ")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/App2"}," App2 ")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/App3"}," App3 ")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/App4"}," App4 "))),r.a.createElement("ul",{class:"sidenav grey lighten-2",id:"mobile-menu"},r.a.createElement("li",null,r.a.createElement(b.b,{to:"/"}," Home ")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/App1"}," App1 ")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/App2"}," App2 ")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/App3"}," App3 ")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/App4"}," App4 "))))))})),f=(a(44),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.posts,t=e.length?e.map(function(e){return r.a.createElement("div",{className:"background"},r.a.createElement(b.a,null,r.a.createElement(b.b,{to:"/"+e.id},"  ",r.a.createElement("div",{className:"post card",key:e.id},r.a.createElement("img",{src:e.src,alt:"a pic"}),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title",style:{color:"blue"}}," ",e.title," "),r.a.createElement("p",null,r.a.createElement("span",{style:{color:"black"}},e.body," ")," "))))))}):r.a.createElement("div",{className:"center"}," Nothing yet. ");return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",{className:"center"},r.a.createElement("u",null,r.a.createElement("b",null,"J.E. Portfolio"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null," ",t," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container indigo lighten-3"},r.a.createElement("div",{className:"outline"},r.a.createElement("br",null),r.a.createElement("h4",{className:"center"},"About Me"),r.a.createElement("p",{className:"center"},"I am a Full Stack Developer and I truly enjoy coding.  All of the apps were built by me and the webpages were also built by me."),r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(n.Component)),y=Object(i.b)(function(e){return{posts:e.posts}})(f),v=a(19),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={year:" ",month:" ",day:" ",message:" "},a.handleOnChangeYear=function(e){a.setState({year:e.target.value})},a.handleOnChangeMonth=function(e){a.setState({month:e.target.value})},a.handleOnChangeDay=function(e){a.setState({day:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.setState({year:" ",month:" ",day:" "})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"center"},"Event-Date Calculator App"),r.a.createElement("div",{className:"center"},r.a.createElement("p",{className:"flow-text"},"Select or type the year, month, and day of your upcoming event or deadline"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"year"},"Year"),r.a.createElement("input",{id:"year",name:"year",value:this.state.year,type:"number",min:"2019",onChange:this.handleOnChangeYear})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"month"},"Month"),r.a.createElement("input",{id:"month",name:"month",value:this.state.month,type:"number",min:"1",max:"12",onChange:this.handleOnChangeMonth})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"day"},"Day"),r.a.createElement("input",{id:"day",name:"day",value:this.state.day,type:"number",min:"1",max:"31",onChange:this.handleOnChangeDay})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){try{var t=e.state.year,a=e.state.month,n=e.state.day,r=new Date,l=new Date(t,a-1,n),c=new Date(l.getFullYear(),l.getMonth(),l.getDate()),m=r.getTime(),i=c.getTime()-m,o=Math.ceil(i/864e5),u=(new Date,r.getFullYear()),s=r.getMonth(),h=r.getDate();if(" "==t)throw'You did not enter a number for "Year".';if(t<u)throw'The number for "Year" must be the same or greater than the current year.';if(" "==a)throw'You did not enter a number for "Month".';if(a>12)throw'The number for "Month" cannot be greater than 12.';if(" "==n)throw'You did not enter a number for "Day".';if(n<=0)throw'The number for "Day" must be greater than zero.';if(n>31)throw'The number for "Day" cannot be greater than 31.';if(n<h&&a<=s+1&&t==u)throw'The number for your "Month" and "Day" must be greater than today\'s date.';e.setState({message:"You have "+o+" day(s) remaining until your upcoming event."})}catch(p){e.setState({message:p})}},className:"btn-large blue lighten-3 waves-effect waves-light"}," Submit"),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("p",null," ",r.a.createElement("span",{style:{color:"#cc6600",fontSize:"27px"}}," ",r.a.createElement("b",null," ",this.state.message," ")," ")," "),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={eventDate:[{year:" ",month:" ",day:" ",message:" "}]},a.output=function(e){var t=[].concat(Object(v.a)(a.state.eventDate),[e]);a.setState({eventDate:t})},a.handleSubmit=function(e){e.preventDefault(),a.props.output(a.state),a.setState({year:" "}),a.setState({month:" "}),a.setState({day:" "})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.eventDate.map(function(t){return r.a.createElement(g,{year:t.year,month:t.month,day:t.day,message:t.message,output:e.output,answer:e.answer,handleSubmit:e.handleSubmit})});return r.a.createElement("div",{style:{backgroundColor:"#f9e6ff"}},r.a.createElement("p",null,t))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={item:" ",completed:null},a.handleOnChange=function(e){a.setState({item:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.addReminder(a.state),a.setState({item:" "})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){this.props.reminders,this.props.deleteButton;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"center"},r.a.createElement("section",{className:"section container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 l5 offset-l2"},r.a.createElement("form",{onSubmit:this.handleSubmit,action:""},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"item"},"Enter Item:"),r.a.createElement("input",{type:"text",value:this.state.item,name:"item",onChange:this.handleOnChange,id:"item"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn-large brown lighten-4 black-text waves-effect waves-light"},"Submit")),r.a.createElement("br",null),r.a.createElement("br",null))))))}}]),t}(n.Component),N=function(e){e.reminders;var t=e.item,a=e.id,n=e.completed,l=(e.addReminder,e.deleteButton),c=e.handleOnChange,m=e.handleSubmit;return r.a.createElement("div",{className:"col s12 l5 offset-l2"},r.a.createElement("form",{onSubmit:m,action:""},r.a.createElement("div",{className:"input-field"},r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"completed",checked:n,value:n,onChange:function(){return c(a)},id:"completed"}),r.a.createElement("span",{style:n?{fontStyle:"italic",color:"blue",textDecoration:"line-through"}:null}," ",t," "),r.a.createElement("a",{href:"#",class:"btn-floating  btn-small red lighten-2  right"},r.a.createElement("i",{class:"material-icons right",onClick:function(){return l(a)}},"remove")))))))},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={reminders:[{item:'First item (You can delete this item by clicking on the " - " icon to the right.)',completed:!1,id:" "}]},a.addReminder=function(e){e.id=Math.random();var t=[].concat(Object(v.a)(a.state.reminders),[e]);a.setState({reminders:t})},a.deleteButton=function(e){var t=a.state.reminders.filter(function(t){return t.id!==e});a.setState({reminders:t})},a.handleOnChange=function(e){a.setState(function(t){return{reminders:t.reminders.map(function(t){return t.id===e&&(t.completed=!t.completed),t})}})},a.handleSubmit=function(e){e.preventDefault(),a.setState({item:" "})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){console.log(this.state.reminders)}},{key:"render",value:function(){var e=this,t=this.state.reminders.map(function(t){return r.a.createElement(N,{reminders:t,item:t.item,id:t.id,completed:t.completed,deleteButton:e.deleteButton,addReminder:e.addReminder,handleOnChange:e.handleOnChange,handleSubmit:e.handleSubmit})});return r.a.createElement("div",null,r.a.createElement("h3",null," Reminder List:"),r.a.createElement("br",null),r.a.createElement("p",null," ",t," "),r.a.createElement(O,{reminders:this.state.reminders,addReminder:this.addReminder,item:this.state.reminders.item,deleteButton:this.deleteButton}),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(n.Component),S=function(){return r.a.createElement("div",{class:"container"},r.a.createElement("h4",{className:"center"},"Reminder List App"),r.a.createElement("br",null),r.a.createElement(j,null))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={min:" ",max:" ",message:" "},a.handleChangeMin=function(e){a.setState({min:e.target.value})},a.handleChangeMax=function(e){a.setState({max:e.target.value})},a.handleSubmit=function(e){e.preventDefault()},a.handleReset=function(){a.setState({min:" ",max:" ",message:" "})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"center"},r.a.createElement("h6",null," After entering your numbers, click the submit button multiple times to generate different numbers between your minimum and your maximum numbers "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("p",null,"Enter your minimum number:"),r.a.createElement("input",{type:"number",id:"min",name:"min",placeholder:"Min. Number",value:this.state.min,onChange:this.handleChangeMin}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Enter your maximum number:"),r.a.createElement("input",{type:"number",id:"max",name:"max",placeholder:"Max. Number",value:this.state.max,onChange:this.handleChangeMax}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null," ",r.a.createElement("span",{style:{color:"blueviolet",fontSize:"27px"}}," ",r.a.createElement("b",null,this.state.message,"  ")," ")," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){try{var t=e.state.min,a=e.state.max,n=Math.floor(t),r=Math.ceil(a),l=Math.floor(Math.random()*(r-n+1))+n;if(" "==t)throw"You must enter a number as a minimum value.";if(" "==a)throw"You must enter a number as a maximum number.";if(a<=t)throw"The number as your maximum number must be greater than your minimum number.";if(isNaN(t))throw"You must enter a number.";if(isNaN(a))throw"You must enter a number.";e.setState({message:l})}catch(c){e.setState({message:c})}},className:"btn-large blue lighten-3 waves-effect waves-light"}," Submit"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{id:"reset",onClick:this.handleReset,className:"btn-small red lighten-3 waves-effect waves-light"}," Reset "))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component),C=function(){return r.a.createElement("div",{class:"container"},r.a.createElement("h4",{className:"center"},"Random Number Generator App"),r.a.createElement("br",null),r.a.createElement(A,null))},x=function(){return r.a.createElement("div",{class:"container"},r.a.createElement("h4",{className:"center"},"Arithmetic App"))},k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.post?r.a.createElement("div",{className:"post"},r.a.createElement("p",null,r.a.createElement("span",{style:{color:"purple",fontSize:"20px"}},r.a.createElement("b",null,"Description:"))," ",this.props.post.body)):r.a.createElement("div",{className:"center",style:{color:"purple",fontSize:"43px"}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Click on any link above"));return r.a.createElement("div",{className:"container"},e)}}]),t}(n.Component),D=Object(i.b)(function(e,t){var a=t.match.params.post_id;return{post:e.posts.find(function(e){return e.id===a})}})(k),M=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(d.a,{exact:!0,path:"/",component:y}),r.a.createElement(d.a,{path:"/App1",component:w}),r.a.createElement(d.a,{path:"/App2",component:S}),r.a.createElement(d.a,{path:"/App3",component:C}),r.a.createElement(d.a,{path:"/App4",component:x}),r.a.createElement(d.a,{path:"/:post_id",component:D})))}}]),t}(n.Component),Y={posts:[{id:"App1",title:"Event Date Calculator App (App1)",body:"This app will allow you to calculate how many days are remaining until your upcoming event which will be a future date that you pick.",src:"https://images.unsplash.com/photo-1521020773588-3b28297b1e70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:"App2",title:"Reminder List App (App2)",body:'This app will allow you to type any reminders that you do not want to forget and that you do want to complete.  It is accompanied with a checkbox so that you can check off any reminders that you have completed. You can also delete an item by clicking on the " - " icon to the right of it.',src:"https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:"App3",title:"Random Number Generator App (App3)",body:"This app allows you to generate random number from two numbers that you enter. One of the numbers has to be a minimum number and the other number has to be the maximum number.",src:"https://images.unsplash.com/photo-1502570149819-b2260483d302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},{id:"App4",title:"Arithmetic App (App4)",body:"This app can be likened to a game (of some sort).  It starts with a number and every 3 seconds it prompts you to click on the button associated with what the prompt says.",src:"https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;arguments.length>1&&arguments[1];return e},B=(a(45),a(46),Object(m.b)(R));c.a.render(r.a.createElement(i.a,{store:B}," ",r.a.createElement(M,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.a6eeea5b.chunk.js.map