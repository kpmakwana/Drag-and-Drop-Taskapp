(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(t,e,n){t.exports=n(96)},96:function(t,e,n){"use strict";n.r(e);var a=n(15),r=n(6),s=n(9),o=n(10),i=n(13),c=n(11),d=n(14),u=n(4),l=n(0),p=n.n(l),b=n(21),m=n.n(b),k={tasks:{task1:{id:"task1",content:"Get Up"},task2:{id:"task2",content:"Get Ready"},task3:{id:"task3",content:"Breackfast"},task4:{id:"task4",content:"Go to Work"},task5:{id:"task5",content:"Lunch"},task6:{id:"task6",content:"Dinner"},task7:{id:"task7",content:"Sleep"}},columns:{column1:{id:"column1",title:"To Do List",taskIds:["task5","task6","task7"]},column2:{id:"column2",title:"In Progress",taskIds:["task4"]},column3:{id:"column3",title:"Done",taskIds:["task1","task2","task3"]}},columnOrder:["column1","column2","column3"]},f=n(5),g=n(12);function O(){var t=Object(u.a)(["\nborder: 1px solid lightgrey;\nborder-radius: 4px;\npadding : 8px;\nmargin-bottom: 8px;\nbackground: ",";\ndisplay : flex;\n"]);return O=function(){return t},t}var h=f.a.div(O(),function(t){return t.isDragDisabled?"#7FB3D5":"#D6EAF8"}),v=function(t){function e(){return Object(s.a)(this,e),Object(i.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return p.a.createElement(g.b,{draggableId:this.props.task.id,index:this.props.index},function(e,n){return p.a.createElement(h,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,isDragging:n.isDragging}),t.props.task.content)})}}]),e}(p.a.Component);function j(){var t=Object(u.a)(["\npadding : 8px;\nbackground-color: ",";\nmin-hight: 100px;\nflex-grow: 1;\n"]);return j=function(){return t},t}function x(){var t=Object(u.a)(["\npadding :8px;\n"]);return x=function(){return t},t}function D(){var t=Object(u.a)(["\nmargin: 8px;\nwidth: 300px;\nborder: 1px solid skyblue;\nborder-radius: 2px;\ndisplay : flex;\nflex-direction : column;\n"]);return D=function(){return t},t}var I=f.a.div(D()),y=f.a.h3(x()),E=f.a.div(j(),function(t){return t.isDraggingOver?"#D4EFDF":"white"}),w=function(t){function e(){return Object(s.a)(this,e),Object(i.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return p.a.createElement(I,null,p.a.createElement(y,null,this.props.coloumn.title),p.a.createElement(g.c,{droppableId:this.props.coloumn.id,isDropDisabled:this.props.isDropDisabled},function(e,n){return p.a.createElement(E,Object.assign({ref:e.innerRef,isDraggingOver:n.isDraggingOver},e.droppableProps),t.props.tasks.map(function(t,e){return p.a.createElement(v,{id:t.id,task:t,index:e})}),e.placeholder)}))}}]),e}(p.a.Component);n(94);function S(){var t=Object(u.a)(["\ndisplay: flex"]);return S=function(){return t},t}var A=f.a.div(S()),F=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,d=new Array(o),u=0;u<o;u++)d[u]=arguments[u];return(n=Object(i.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(d)))).state=k,n.onDragStart=function(t){var e=n.state.columnOrder.indexOf(t.source.droppableId);n.setState({homeIndex:e})},n.onDragEnd=function(t){var e;n.setState({homeIndex:null}),document.body.style.color="inherit";var s=t.destination,o=t.source,i=t.draggableId;if(s&&(s.droppableId!==o.droppableId||s.index!==o.index)){var c=n.state.columns[o.droppableId],d=n.state.columns[s.droppableId];if(c!==d){var u=Array.from(c.taskIds),l=Array.from(d.taskIds);u.splice(o.index,1),l.splice(s.index,0,i);var p=Object(r.a)({},c,{taskIds:u}),b=Object(r.a)({},d,{taskIds:l}),m=Object(r.a)({},n.state,{columns:Object(r.a)({},n.state.columns,(e={},Object(a.a)(e,p.id,p),Object(a.a)(e,b.id,b),e))});n.setState(m)}else{var k=Array.from(c.taskIds);k.splice(o.index,1),k.splice(s.index,0,i);var f=Object(r.a)({},c,{taskIds:k}),g=Object(r.a)({},n.state,{columns:Object(r.a)({},n.state.columns,Object(a.a)({},f.id,f))});n.setState(g)}}},n}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return p.a.createElement(A,null,p.a.createElement(g.a,{onDragEnd:this.onDragEnd,onDragStart:this.onDragStart},this.state.columnOrder.map(function(e,n){var a=t.state.columns[e],r=a.taskIds.map(function(e){return t.state.tasks[e]}),s=n<t.state.homeIndex;return p.a.createElement(w,{key:"{colomn.id}",coloumn:a,tasks:r,isDropDisabled:s})})))}}]),e}(p.a.Component);m.a.render(p.a.createElement(F,null),document.getElementById("root"))}},[[51,2,1]]]);
//# sourceMappingURL=main.2a3bcfcc.chunk.js.map