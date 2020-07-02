(this["webpackJsonpkanban-board-reactjs"]=this["webpackJsonpkanban-board-reactjs"]||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=n(6),s=n(61),l=(n(84),n(85),n(71)),d=n(23),u=n(37),m=n(19),_=n(62),f=n.n(_),p=n(72),g=n(45),b=n(7),C=n(118),v=Object(d.b)({}),O=Object(d.c)({name:"tasks",initialState:v.getInitialState({newListTitle:"",newCardTitles:{},isTasksLoading:!1,isLoadingNewList:!1,isDeletingCard:!1,isDeletingList:!1}),reducers:{getTasks:function(e){e.isTasksLoading=!0},tasksReceived:function(e,t){e.isTasksLoading=!1,v.setAll(e,t.payload)},tasksFailed:function(e){e.isTasksLoading=!1},startCreateList:function(e){e.isLoadingNewList=!0},createdList:function(e,t){var n=t.payload;n.id=Object(C.a)(),n.cards=[],v.addOne(e,t.payload),e.newListTitle="",e.isLoadingNewList=!1},startDeletingList:function(e){e.isDeletingList=!0},deletedList:function(e,t){v.removeOne(e,t.payload),e.isDeletingList=!1},onChangeNewListTitle:function(e,t){e.newListTitle=t.payload},startCreateCard:function(e,t){e.entities[t.payload.listId].isCreatingCard=!0},createdCard:function(e,t){var n=t.payload,a=n.listId,r=n.card,c=v.getSelectors().selectById(e,a),o=c.cards,i=r;i.id=Object(C.a)(),i.order=c.cards.length,o.push(i),c.isCreatingCard=!1,e.newCardTitles[a]="",v.updateOne(e,{id:a,cards:o})},startDeletingCard:function(e){e.isDeletingCard=!0},deletedCard:function(e,t){var n=t.payload,a=n.listId,r=n.cardId,c=v.getSelectors().selectById(e,a),o=c.cards,i=o.findIndex((function(e){return e.id===r}));i>-1&&c.cards.splice(i,1),v.updateOne(e,{id:a,cards:o}),e.isDeletingCard=!1},onChangeNewCardTitle:function(e,t){var n=t.payload,a=n.listId,r=n.value,c=void 0===r?"":r;e.newCardTitles[a]=c},changeCardOrder:function(){},changedCardOrder:function(e,t){var n=t.payload,a=n.cardId,r=n.toListId,c=n.fromListId,o=n.toOrder,i=n.fromOrder,s=v.getSelectors().selectById(e,r),l=v.getSelectors().selectById(e,c),d=s.cards,u=l.cards;if(r===c){var m=d.find((function(e){return e.id===a}));d.splice(i,1),d.splice(o,0,m);for(var _=m.order>o?o:i,f=m.order>o?i:d.length-1,p=_;p<=f;p+=1){d[p].order=p}m.order=o,v.updateOne(e,{id:r,cards:d})}else{var g=u.find((function(e){return e.id===a}));g.order=o,u.splice(i,1),d.splice(o,0,g);for(var b=o,C=d.length-1,O=b;O<=C;O+=1){d[O].order=O}for(var h=i,E=u.length-1,j=h;j<=E;j+=1){u[j].order=j}v.updateMany(e,[{id:r,cards:s},{id:c,cards:l}])}},changeListOrder:function(){},changedListOrder:function(e,t){var n=t.payload,a=n.listId,r=n.toOrder,c=n.fromOrder,o=v.getSelectors().selectEntities(e),i=v.getSelectors().selectIds(e),s=v.getSelectors().selectById(e,a);i.splice(c,1),i.splice(r,0,a);for(var l=r>s.order?c:r,d=r>s.order?r:c,u=[],m=l;m<=d;m+=1){var _=o[i[m]];_.order=m,u.push(_)}s.order=r,v.updateMany(e,u)}}}),h=O.actions,E=v.getSelectors((function(e){return e.tasks})),j=O.reducer;function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(b.c)(Object(g.a)(Object(g.a)({},e),{},{tasks:j}));return t}var k={key:"root",storage:f.a,whitelist:["tasks"]},L=Object(m.g)(k,y());var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},n=Object(p.a)(t),a=n.run,r=[n],c=[Object(u.a)({createReducer:y,runSaga:a})],o=Object(d.a)({reducer:L,middleware:[].concat(Object(l.a)(Object(d.d)({thunk:!1,serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),r),preloadedState:e,devTools:!1,enhancers:c});return o}(),N=Object(m.h)(x),w=n(63),I=n(64),D=n(74),T=n(70),S=n(10),A=n.n(S),B=n(11),R=n.n(B),P=n(9),W=R.a.mark(X),z=R.a.mark(Y),F=R.a.mark(U),M=R.a.mark(K),q=R.a.mark(Z),H=R.a.mark($),J=R.a.mark(G),Q=R.a.mark(ee);function V(){return fetch("tasks.json").then((function(e){return e.json()}))}function X(){var e;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(P.a)(V);case 3:return e=t.sent,t.next=6,Object(P.c)(h.tasksReceived(e.tasks));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(P.c)(h.tasksFailed());case 12:case"end":return t.stop()}}),W,null,[[0,8]])}function Y(e){var t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(P.b)(800);case 2:return n.next=4,Object(P.c)(h.createdCard({listId:e.payload.listId,card:{title:e.payload.title}}));case 4:if(t=document.querySelector(".dashboard__column-".concat(e.payload.listId,"-cards"))){n.next=7;break}return n.abrupt("return");case 7:t.scrollTop=t.scrollHeight;case 8:case"end":return n.stop()}}),z)}function U(e){var t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(P.b)(800);case 2:return n.next=4,Object(P.c)(h.createdList({title:e.payload.title}));case 4:if(t=document.querySelector(".dashboard-page")){n.next=7;break}return n.abrupt("return");case 7:t.scrollLeft=t.scrollWidth;case 8:case"end":return n.stop()}}),F)}function K(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.b)(800);case 2:return t.next=4,Object(P.c)(h.deletedList(e.payload));case 4:case"end":return t.stop()}}),M)}function Z(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.b)(800);case 2:return t.next=4,Object(P.c)(h.deletedCard(e.payload));case 4:case"end":return t.stop()}}),q)}function $(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.c)(h.changedCardOrder(e.payload));case 2:case"end":return t.stop()}}),H)}function G(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.c)(h.changedListOrder(e.payload));case 2:case"end":return t.stop()}}),J)}function ee(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.d)(h.getTasks.toString(),X);case 2:return e.next=4,Object(P.d)(h.startCreateList.toString(),U);case 4:return e.next=6,Object(P.d)(h.startDeletingList.toString(),K);case 6:return e.next=8,Object(P.d)(h.startCreateCard.toString(),Y);case 8:return e.next=10,Object(P.d)(h.startDeletingCard.toString(),Z);case 10:return e.next=12,Object(P.d)(h.changeCardOrder.toString(),$);case 12:return e.next=14,Object(P.d)(h.changeListOrder.toString(),G);case 14:case"end":return e.stop()}}),Q)}var te=n(24),ne=n(22),ae=n(14),re=n(15),ce=n(12),oe=n(25),ie=n(18),se=n.n(ie);function le(e){var t,n=e.type,a=e.displayType,c=e.children,o=e.icon,i=e.className,s=e.color,l=e.loading,d=e.innerRef,u=e.tag,m=Object(oe.a)(e,["type","displayType","children","icon","className","color","loading","innerRef","tag"]),_=u;return r.a.createElement(_,Object.assign({ref:d,type:n,className:A()((t={},Object(ce.a)(t,se.a.button,!0),Object(ce.a)(t,se.a["button--with-icon"],!!o),Object(ce.a)(t,i,!!i),Object(ce.a)(t,se.a.icon,"icon"===a),Object(ce.a)(t,se.a.loading,l),t),se.a[s])},m),r.a.createElement("div",null,o&&r.a.createElement("span",{className:se.a.button__icon},o),"icon"!==a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:se.a.button__text},c))),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:se.a.button__spinner})))}le.defaultProps={displayType:"default",type:"button",tag:"button",loading:!1};var de=n(8),ue=n.n(de);function me(e){var t=e.isCreatingColumn,n=e.onStartCreateColumn;return r.a.createElement("div",{className:A()(ue.a.column,ue.a["column--create"])},r.a.createElement("div",{className:ue.a.column__buttons},r.a.createElement(le,{className:ue.a.column__btn,onClick:n,disabled:t,icon:r.a.createElement(ae.a,{icon:re.a,size:"sm"})},"Add another list")))}var _e=n(65),fe=n.n(_e);function pe(e){var t=e.className,n=Object(oe.a)(e,["className"]);return r.a.createElement("input",Object.assign({className:A()(t,fe.a.input)},n))}function ge(e){var t=e.toggleStartedCreatingColumn,n=e.onAddList,a=Object(i.e)((function(e){return e.tasks.newListTitle})),c=Object(i.e)((function(e){return e.tasks.isLoadingNewList})),o=Object(i.d)();return r.a.createElement("form",{className:A()(ue.a.column,ue.a["column--new"]),onSubmit:function(e){e.preventDefault(),a.trim().length&&n(a)}},r.a.createElement("div",{className:ue.a.column__header},r.a.createElement(pe,{className:ue.a.column__headerInput,value:a,onChange:function(e){var t=e.target.value;o(h.onChangeNewListTitle(t))},autoFocus:!0,placeholder:"Enter list title..."})),r.a.createElement("div",{className:ue.a.column__buttons},r.a.createElement(le,{type:"submit",className:ue.a["column__btn--create"],loading:c,color:"green",icon:r.a.createElement(ae.a,{icon:re.a,size:"sm"})},"Add List"),r.a.createElement(le,{displayType:"icon",className:ue.a["column__btn--cancel"],onClick:t,disabled:c,color:"transparent",icon:r.a.createElement(ae.a,{icon:re.b,size:"lg"})})))}var be=n(73),Ce=n(66),ve=n.n(Ce);function Oe(e){var t=e.className,n=e.inputRef,a=Object(oe.a)(e,["className","inputRef"]);return r.a.createElement(be.a,Object.assign({className:A()(ve.a.textarea,t),ref:n},a))}Oe.defaultProps={className:""};var he=n(5),Ee=n.n(he),je=n(40),ye=n.n(je);function ke(e){var t=e.maxWidth,n=e.children,a=e.onClickOverlay,o=r.a.createElement("div",{className:ye.a.modal,role:"presentation"},r.a.createElement("div",{className:ye.a.modal__content,role:"dialog",style:{maxWidth:t}},n),r.a.createElement("div",{className:ye.a.modal__overlay,"aria-hidden":"true",onClick:a}));return Object(c.createPortal)(o,document.body)}ke.propTypes={maxWidth:Ee.a.oneOfType([Ee.a.string,Ee.a.number]),children:Ee.a.node,onClickOverlay:Ee.a.func},ke.defaultProps={maxWidth:350,onClickOverlay:function(){}};var Le=n(17),xe=n.n(Le);function Ne(e){var t=e.title,n=e.maxWidth,c=e.onDelete,o=e.onCancel,s=Object(i.e)((function(e){return e.tasks.isDeletingCard})),l=Object(i.e)((function(e){return e.tasks.isDeletingList})),d=Object(a.useRef)();return Object(a.useEffect)((function(){function e(e){e&&27===e.keyCode&&o(e)}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),Object(a.useEffect)((function(){d.current&&d.current.focus()}),[d]),r.a.createElement(ke,{maxWidth:n,onClickOverlay:o},r.a.createElement("div",{className:xe.a["card__delete-modal"]},r.a.createElement("div",{className:xe.a["delete-modal__title"]},'Are you sure to delete "'.concat(t,'"?')),r.a.createElement("div",{className:xe.a["delete-modal__actions"]},r.a.createElement(le,{innerRef:d,className:xe.a["delete-modal__btn"],onClick:c,loading:s||l,color:"red"},"Delete"),r.a.createElement(le,{className:xe.a["delete-modal__btn"],onClick:o,disabled:s||l,color:"dark-gray"},"Cancel"))))}var we=n(67),Ie=n.n(we);function De(e){var t=e.children;return r.a.createElement("h3",{className:Ie.a.title},t)}var Te=n(68),Se=n.n(Te);var Ae=Object(a.memo)((function(e){var t=e.index,n=e.id,c=e.listId,o=e.title,i=e.onDeleteCard,s=Object(a.useState)(!1),l=Object(te.a)(s,2),d=l[0],u=l[1];function m(){u((function(e){return!e}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.b,{draggableId:n,index:t},(function(e,t){return r.a.createElement("div",Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),r.a.createElement("div",{className:A()(xe.a.card,Object(ce.a)({},xe.a["card--is-dragging"],t.isDragging))},o,r.a.createElement(le,{displayType:"icon",className:xe.a["card__delete-btn"],onClick:m,color:"red",icon:r.a.createElement(ae.a,{icon:re.b,size:"lg"})})))})),d&&r.a.createElement(Ne,{title:o,onDelete:function(){i(c,n)},onCancel:m}))}),(function(e,t){return e.index===t.index}));function Be(e){var t=e.id,n=e.cards,a=e.onDeleteCard;return n&&!n.length?null:r.a.createElement("ul",{className:Se.a.cards},n.map((function(e,n){return r.a.createElement(Ae,{key:e.id,index:n,id:e.id,listId:t,title:e.title,onDeleteCard:a})})))}function Re(e){var t=e.index,n=e.id,c=e.title,o=e.cards,s=e.onDeleteList,l=e.onAddCard,d=e.onDeleteCard,u=Object(i.e)((function(e){return e.tasks.entities[n]}),(function(e,t){var n=e.cards===t.cards,a=e.cards.length===t.cards.length,r=e.isCreatingCard===t.isCreatingCard;return n&&a&&r})),m=Object(i.e)((function(e){return e.tasks.newCardTitles[n]}),(function(e,t){return e===t})),_=Object(a.useState)(!1),f=Object(te.a)(_,2),p=f[0],g=f[1],b=Object(a.useState)(!1),C=Object(te.a)(b,2),v=C[0],O=C[1],E=Object(i.d)(),j=Object(a.useRef)(),y=Object(a.useRef)();function k(e){e&&13===Number(e.which)&&(e.preventDefault(),I())}function L(e){e.stopPropagation(),O((function(e){return!e}))}function x(){p||E(h.onChangeNewCardTitle({listId:n,value:""})),g((function(e){return!e}))}function N(e){var t=e.target.value;E(h.onChangeNewCardTitle({listId:n,value:t}))}function w(){s(n)}function I(){m.trim().length&&l({listId:n,title:m})}return Object(a.useEffect)((function(){var e=j.current;if(p&&e)return e.addEventListener("keypress",k),function(){e&&e.removeEventListener("keypress",k)}}),[j,p,m]),r.a.createElement(ne.b,{draggableId:n,index:t},(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({ref:e.innerRef,className:ue.a.column},e.draggableProps),r.a.createElement("div",Object.assign({className:ue.a.column__header},e.dragHandleProps),r.a.createElement(De,null,c),r.a.createElement(le,{displayType:"icon",className:ue.a["column__delete-list-btn"],onClick:L,color:"red",icon:r.a.createElement(ae.a,{icon:re.c})})),r.a.createElement("div",{ref:y,className:A()(ue.a.column__cards,"dashboard__column-".concat(n,"-cards"))},r.a.createElement(ne.c,{droppableId:n,type:"card"},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef,className:ue.a["column__drop-zone"]},e.droppableProps),r.a.createElement(Be,{id:n,cards:o,onDeleteCard:d}),e.placeholder)})),p&&r.a.createElement(Oe,{inputRef:j,value:m,onChange:N,placeholder:"Enter a title for this card...",minRows:3,maxRows:7,autoFocus:!0})),r.a.createElement("div",{className:ue.a.column__buttons},p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{className:ue.a["column__btn--create"],onClick:I,loading:u.isCreatingCard,color:"green",icon:r.a.createElement(ae.a,{icon:re.a,size:"sm"})},"Add Card"),r.a.createElement(le,{displayType:"icon",onClick:x,className:ue.a["column__btn--cancel"],color:"transparent",disabled:u.isCreatingCard,icon:r.a.createElement(ae.a,{icon:re.b,size:"lg"})})),!p&&r.a.createElement(le,{onClick:x,className:ue.a.column__btn,icon:r.a.createElement(ae.a,{icon:re.a,size:"sm"})},"Add a card"))),v&&r.a.createElement(Ne,{title:c,maxWidth:400,onDelete:w,onCancel:L}))}))}Be.defaultProps={cards:[]},Re.defaultProps={cards:[]};var Pe=Object(a.memo)(Re,(function(e,t){var n=e.index===t.index;return e.cards===t.cards&&n})),We=n(47),ze=n.n(We);function Fe(e){var t=e.columns,n=e.onAddList,c=e.onDeleteList,o=e.onAddCard,i=e.onDeleteCard,s=e.onChangeCardOrder,l=e.onChangeListOrder,d=Object(a.useState)(!1),u=Object(te.a)(d,2),m=u[0],_=u[1];function f(){_((function(e){return!e}))}return r.a.createElement(ne.a,{onDragEnd:function(e){var t=e.destination,n=e.source,a=e.type;t&&(t.droppableId===n.droppableId&&t.index===n.index||("list"===a&&function(e){var t=e.destination,n=e.source,a=e.draggableId,r=t.index,c=n.index;l({listId:a,toOrder:r,fromOrder:c})}(e),"card"===a&&function(e){var t=e.destination,n=e.source,a=e.draggableId,r=t.droppableId,c=n.droppableId,o=t.index,i=n.index;s({cardId:a,toListId:r,fromListId:c,toOrder:o,fromOrder:i})}(e)))}},r.a.createElement(ne.c,{droppableId:"list",direction:"horizontal",type:"list"},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef,className:ze.a.columns},e.droppableProps),t.map((function(e,t){return r.a.createElement(Pe,{index:t,key:e.id,id:e.id,cards:e.cards,title:e.title,onAddCard:o,onDeleteList:c,onDeleteCard:i})})),e.placeholder,m&&r.a.createElement(ge,{onAddList:n,toggleStartedCreatingColumn:f}),r.a.createElement(me,{isCreatingColumn:m,onStartCreateColumn:f}),r.a.createElement("div",{className:ze.a["columns__demy-column"]}))})))}Fe.defaultProps={columns:[]};var Me=n(33),qe=n.n(Me);function He(e){var t=e.isLoading;return t?r.a.createElement("div",{className:A()(qe.a.box,Object(ce.a)({},qe.a.loading,t),Object(ce.a)({},qe.a.loaded,!t))},r.a.createElement("div",{className:qe.a.spinner},r.a.createElement("span",null,"Loading..."))):null}He.defaultProps={isLoading:!1};var Je=n(69),Qe=n.n(Je),Ve=function(e){Object(D.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onAddList=function(t){(0,e.props.startCreateList)({title:t})},e.onDeleteList=function(t){(0,e.props.startDeletingList)(t)},e.onAddCard=function(t){(0,e.props.startCreateCard)(t)},e.onDeleteCard=function(t,n){(0,e.props.startDeletingCard)({listId:t,cardId:n})},e.onChangeCardOrder=function(t){(0,e.props.onChangeCardOrder)(t)},e.onChangeListOrder=function(t){(0,e.props.onChangeListOrder)(t)},e}return Object(I.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getTasks;e.tasks.length||t()}},{key:"render",value:function(){var e=this.props,t=e.tasks,n=e.isTasksLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:A()(Qe.a.dashboard,"dashboard-page")},r.a.createElement(Fe,{columns:t,onAddList:this.onAddList,onDeleteList:this.onDeleteList,onAddCard:this.onAddCard,onDeleteCard:this.onDeleteCard,onChangeCardOrder:this.onChangeCardOrder,onChangeListOrder:this.onChangeListOrder})),r.a.createElement(He,{isLoading:n}))}}]),n}(a.Component);Ve.defaultProps={tasks:[]};var Xe=Object(i.c)((function(e){return{tasks:E.selectAll(e),isTasksLoading:e.tasks.isTasksLoading}}),(function(e){return{getTasks:function(){return e(h.getTasks())},startCreateList:function(t){return e(h.startCreateList(t))},startDeletingList:function(t){return e(h.startDeletingList(t))},startCreateCard:function(t){return e(h.startCreateCard(t))},startDeletingCard:function(t){return e(h.startDeletingCard(t))},onChangeCardOrder:function(t){return e(h.changeCardOrder(t))},onChangeListOrder:function(t){return e(h.changeListOrder(t))}}}))(Object(u.b)({key:"tasks",saga:ee})(Ve));var Ye=function(){return r.a.createElement(Xe,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:x},r.a.createElement(s.a,{loading:null,persistor:N},r.a.createElement(Ye,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,n){e.exports={card:"ColumnCard_card__3qMqY","card--is-dragging":"ColumnCard_card--is-dragging__2Xtvm","card__delete-btn":"ColumnCard_card__delete-btn__3lY27","delete-modal__title":"ColumnCard_delete-modal__title__3Y0eQ","delete-modal__actions":"ColumnCard_delete-modal__actions__7AQly","delete-modal__btn":"ColumnCard_delete-modal__btn__Lszce"}},18:function(e,t,n){e.exports={button:"Button_button__2XPbj","button--with-icon":"Button_button--with-icon__2mTBF",button__text:"Button_button__text__3pwWn",icon:"Button_icon__1WJdU",green:"Button_green__1TOMw",red:"Button_red__3fO7b","dark-gray":"Button_dark-gray__nL9kN",transparent:"Button_transparent__17AuW",loading:"Button_loading__VYV8W",button__icon:"Button_button__icon__3WrMJ",button__spinner:"Button_button__spinner__KASpU",spinner:"Button_spinner__3OUQ3"}},33:function(e,t,n){e.exports={box:"PageLoader_box__3RvKg",spinner:"PageLoader_spinner__RcNXU",spinner_loading_text:"PageLoader_spinner_loading_text__30XJb"}},40:function(e,t,n){e.exports={modal:"Modal_modal__3kgh3",modal__content:"Modal_modal__content__1ILQq",modal__overlay:"Modal_modal__overlay__c1s7q"}},47:function(e,t,n){e.exports={columns:"Columns_columns__lzzwH","columns__demy-column":"Columns_columns__demy-column__WrYhS"}},65:function(e,t,n){e.exports={input:"Input_input__2ZPX1"}},66:function(e,t,n){e.exports={textarea:"Textarea_textarea__20Vs3"}},67:function(e,t,n){e.exports={title:"ColumnTitle_title__3gobv"}},68:function(e,t,n){e.exports={cards:"ColumnCards_cards__-bKoe"}},69:function(e,t,n){e.exports={dashboard:"Dashboard_dashboard__3f3Dv"}},75:function(e,t,n){e.exports=n(116)},8:function(e,t,n){e.exports={column:"Column_column__3yOFN",column__header:"Column_column__header__1h3fQ","column--new":"Column_column--new__2yyfC","column__delete-list-btn":"Column_column__delete-list-btn__3wwCm",column__headerInput:"Column_column__headerInput__3RRuk",column__cards:"Column_column__cards__2EVMA","column__drop-zone":"Column_column__drop-zone__1xiBL",column__buttons:"Column_column__buttons__25buy","column--create":"Column_column--create__3V9bk",column__btn:"Column_column__btn__3Hseg","column__btn--create":"Column_column__btn--create__3t0ct","column__btn--cancel":"Column_column__btn--cancel__auBDM"}},85:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.d2491009.chunk.js.map