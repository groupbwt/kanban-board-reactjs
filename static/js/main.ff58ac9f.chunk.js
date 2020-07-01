(this["webpackJsonpkanban-board-reactjs"]=this["webpackJsonpkanban-board-reactjs"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),s=a(6),i=a(61),l=(a(84),a(85),a(71)),d=a(23),u=a(37),m=a(19),_=a(62),g=a.n(_),p=a(72),b=a(45),f=a(7),C=a(118),v=Object(d.b)({}),h=Object(d.c)({name:"tasks",initialState:v.getInitialState({newListTitle:"",newCardTitles:{},isTasksLoading:!1,isLoadingNewList:!1,isDeletingCard:!1,isDeletingList:!1}),reducers:{getTasks:function(e){e.isTasksLoading=!0},tasksReceived:function(e,t){e.isTasksLoading=!1,v.setAll(e,t.payload)},tasksFailed:function(e){e.isTasksLoading=!1},startCreateList:function(e){e.isLoadingNewList=!0},createdList:function(e,t){var a=t.payload;a.id=Object(C.a)(),a.cards=[],v.addOne(e,t.payload),e.newListTitle="",e.isLoadingNewList=!1},startDeletingList:function(e){e.isDeletingList=!0},deletedList:function(e,t){v.removeOne(e,t.payload),e.isDeletingList=!1},onChangeNewListTitle:function(e,t){e.newListTitle=t.payload},startCreateCard:function(e,t){e.entities[t.payload.listId].isCreatingCard=!0},createdCard:function(e,t){var a=t.payload,n=a.listId,r=a.card,c=v.getSelectors().selectById(e,n),o=c.cards,s=r;s.id=Object(C.a)(),s.order=c.cards.length,o.push(s),c.isCreatingCard=!1,e.newCardTitles[n]="",v.updateOne(e,{id:n,cards:o})},startDeletingCard:function(e){e.isDeletingCard=!0},deletedCard:function(e,t){var a=t.payload,n=a.listId,r=a.cardId,c=v.getSelectors().selectById(e,n),o=c.cards,s=o.findIndex((function(e){return e.id===r}));s>-1&&c.cards.splice(s,1),v.updateOne(e,{id:n,cards:o}),e.isDeletingCard=!1},onChangeNewCardTitle:function(e,t){var a=t.payload,n=a.listId,r=a.value,c=void 0===r?"":r;e.newCardTitles[n]=c},changeCardOrder:function(){},changedCardOrder:function(e,t){var a=t.payload,n=a.cardId,r=a.toListId,c=a.fromListId,o=a.toOrder,s=a.fromOrder,i=v.getSelectors().selectById(e,r),l=v.getSelectors().selectById(e,c),d=i.cards,u=l.cards;if(r===c){var m=d.find((function(e){return e.id===n}));d.splice(s,1),d.splice(o,0,m);for(var _=m.order>o?o:s,g=m.order>o?s:d.length-1,p=_;p<=g;p+=1){d[p].order=p}m.order=o,v.updateOne(e,{id:r,cards:d})}else{var b=u.find((function(e){return e.id===n}));b.order=o,u.splice(s,1),d.splice(o,0,b);for(var f=o,C=d.length-1,h=f;h<=C;h+=1){d[h].order=h}for(var O=s,E=u.length-1,j=O;j<=E;j+=1){u[j].order=j}v.updateMany(e,[{id:r,cards:i},{id:c,cards:l}])}},changeListOrder:function(){},changedListOrder:function(e,t){var a=t.payload,n=a.listId,r=a.toOrder,c=a.fromOrder,o=v.getSelectors().selectEntities(e),s=v.getSelectors().selectIds(e),i=v.getSelectors().selectById(e,n);s.splice(c,1),s.splice(r,0,n);for(var l=r>i.order?c:r,d=r>i.order?r:c,u=[],m=l;m<=d;m+=1){var _=o[s[m]];_.order=m,u.push(_)}i.order=r,v.updateMany(e,u)}}}),O=h.actions,E=v.getSelectors((function(e){return e.tasks})),j=h.reducer;function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(f.c)(Object(b.a)(Object(b.a)({},e),{},{tasks:j}));return t}var x={key:"root",storage:g.a,whitelist:["tasks"]},L=Object(m.g)(x,y());var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},a=Object(p.a)(t),n=a.run,r=[a],c=[Object(u.a)({createReducer:y,runSaga:n})],o=Object(d.a)({reducer:L,middleware:[].concat(Object(l.a)(Object(d.d)({thunk:!1,serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),r),preloadedState:e,devTools:!1,enhancers:c});return o}(),N=Object(m.h)(k),w=a(63),D=a(64),I=a(74),T=a(70),S=a(10),A=a.n(S),B=a(11),P=a.n(B),R=a(9),W=P.a.mark(X),z=P.a.mark(Y),F=P.a.mark(U),M=P.a.mark(K),q=P.a.mark(Z),H=P.a.mark($),J=P.a.mark(G),Q=P.a.mark(ee);function V(){return fetch("tasks.json").then((function(e){return e.json()}))}function X(){var e;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(R.a)(V);case 3:return e=t.sent,t.next=6,Object(R.c)(O.tasksReceived(e.tasks));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(R.c)(O.tasksFailed());case 12:case"end":return t.stop()}}),W,null,[[0,8]])}function Y(e){var t;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(R.b)(800);case 2:return a.next=4,Object(R.c)(O.createdCard({listId:e.payload.listId,card:{title:e.payload.title}}));case 4:if(t=document.querySelector(".dashboard__column-".concat(e.payload.listId,"-cards"))){a.next=7;break}return a.abrupt("return");case 7:t.scrollTop=t.scrollHeight;case 8:case"end":return a.stop()}}),z)}function U(e){var t;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(R.b)(800);case 2:return a.next=4,Object(R.c)(O.createdList({title:e.payload.title}));case 4:if(t=document.querySelector(".dashboard-page")){a.next=7;break}return a.abrupt("return");case 7:t.scrollLeft=t.scrollWidth;case 8:case"end":return a.stop()}}),F)}function K(e){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(R.b)(800);case 2:return t.next=4,Object(R.c)(O.deletedList(e.payload));case 4:case"end":return t.stop()}}),M)}function Z(e){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(R.b)(800);case 2:return t.next=4,Object(R.c)(O.deletedCard(e.payload));case 4:case"end":return t.stop()}}),q)}function $(e){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(R.c)(O.changedCardOrder(e.payload));case 2:case"end":return t.stop()}}),H)}function G(e){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(R.c)(O.changedListOrder(e.payload));case 2:case"end":return t.stop()}}),J)}function ee(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(O.getTasks.toString(),X);case 2:return e.next=4,Object(R.d)(O.startCreateList.toString(),U);case 4:return e.next=6,Object(R.d)(O.startDeletingList.toString(),K);case 6:return e.next=8,Object(R.d)(O.startCreateCard.toString(),Y);case 8:return e.next=10,Object(R.d)(O.startDeletingCard.toString(),Z);case 10:return e.next=12,Object(R.d)(O.changeCardOrder.toString(),$);case 12:return e.next=14,Object(R.d)(O.changeListOrder.toString(),G);case 14:case"end":return e.stop()}}),Q)}var te=a(24),ae=a(22),ne=a(14),re=a(15),ce=a(12),oe=a(25),se=a(18),ie=a.n(se);function le(e){var t,a=e.type,n=e.displayType,c=e.children,o=e.icon,s=e.className,i=e.color,l=e.loading,d=Object(oe.a)(e,["type","displayType","children","icon","className","color","loading"]);return r.a.createElement("button",Object.assign({type:a,className:A()((t={},Object(ce.a)(t,ie.a.button,!0),Object(ce.a)(t,ie.a["button--with-icon"],!!o),Object(ce.a)(t,s,!!s),Object(ce.a)(t,ie.a.icon,"icon"===n),Object(ce.a)(t,ie.a.loading,l),t),ie.a[i])},d),r.a.createElement("div",null,o&&r.a.createElement("span",{className:ie.a.button__icon},o),"icon"!==n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:ie.a.button__text},c))),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ie.a.button__spinner})))}le.defaultProps={displayType:"default",type:"button",loading:!1};var de=a(8),ue=a.n(de);function me(e){var t=e.isCreatingColumn,a=e.onStartCreateColumn;return r.a.createElement("div",{className:A()(ue.a.column,ue.a["column--create"])},r.a.createElement("div",{className:ue.a.column__buttons},r.a.createElement(le,{className:ue.a.column__btn,onClick:a,disabled:t,icon:r.a.createElement(ne.a,{icon:re.a,size:"sm"})},"Add another list")))}var _e=a(65),ge=a.n(_e);function pe(e){var t=e.className,a=Object(oe.a)(e,["className"]);return r.a.createElement("input",Object.assign({className:A()(t,ge.a.input)},a))}function be(e){var t=e.toggleStartedCreatingColumn,a=e.onAddList,n=Object(s.e)((function(e){return e.tasks.newListTitle})),c=Object(s.e)((function(e){return e.tasks.isLoadingNewList})),o=Object(s.d)();return r.a.createElement("form",{className:A()(ue.a.column,ue.a["column--new"]),onSubmit:function(e){e.preventDefault(),n.trim().length&&a(n)}},r.a.createElement("div",{className:ue.a.column__header},r.a.createElement(pe,{className:ue.a.column__headerInput,value:n,onChange:function(e){var t=e.target.value;o(O.onChangeNewListTitle(t))},autoFocus:!0,placeholder:"Enter list title..."})),r.a.createElement("div",{className:ue.a.column__buttons},r.a.createElement(le,{type:"submit",className:ue.a["column__btn--create"],loading:c,color:"green",icon:r.a.createElement(ne.a,{icon:re.a,size:"sm"})},"Add List"),r.a.createElement(le,{displayType:"icon",className:ue.a["column__btn--cancel"],onClick:t,disabled:c,color:"transparent",icon:r.a.createElement(ne.a,{icon:re.b,size:"lg"})})))}var fe=a(73),Ce=a(66),ve=a.n(Ce);function he(e){var t=e.className,a=e.inputRef,n=Object(oe.a)(e,["className","inputRef"]);return r.a.createElement(fe.a,Object.assign({className:A()(ve.a.textarea,t),ref:a},n))}he.defaultProps={className:""};var Oe=a(5),Ee=a.n(Oe),je=a(40),ye=a.n(je);function xe(e){var t=e.maxWidth,a=e.children,n=r.a.createElement("div",{className:ye.a.modal},r.a.createElement("div",{className:ye.a.modal__content,style:{maxWidth:t}},a),r.a.createElement("div",{className:ye.a.modal__overlay}));return Object(c.createPortal)(n,document.body)}xe.propTypes={maxWidth:Ee.a.oneOfType([Ee.a.string,Ee.a.number]),children:Ee.a.node},xe.defaultProps={maxWidth:350};var Le=a(17),ke=a.n(Le);function Ne(e){var t=e.title,a=e.maxWidth,n=e.onDelete,c=e.onCancel,o=Object(s.e)((function(e){return e.tasks.isDeletingCard})),i=Object(s.e)((function(e){return e.tasks.isDeletingList}));return r.a.createElement(xe,{maxWidth:a},r.a.createElement("div",{className:ke.a["card__delete-modal"]},r.a.createElement("div",{className:ke.a["delete-modal__title"]},'Are you sure to delete "'.concat(t,'"?')),r.a.createElement("div",{className:ke.a["delete-modal__actions"]},r.a.createElement(le,{className:ke.a["delete-modal__btn"],onClick:n,loading:o||i,color:"red"},"Delete"),r.a.createElement(le,{className:ke.a["delete-modal__btn"],onClick:c,disabled:o||i,color:"dark-gray"},"Cancel"))))}var we=a(67),De=a.n(we);function Ie(e){var t=e.children;return r.a.createElement("h3",{className:De.a.title},t)}var Te=a(68),Se=a.n(Te);var Ae=Object(n.memo)((function(e){var t=e.index,a=e.id,c=e.listId,o=e.title,s=e.onDeleteCard,i=Object(n.useState)(!1),l=Object(te.a)(i,2),d=l[0],u=l[1];function m(){u((function(e){return!e}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.b,{draggableId:a,index:t},(function(e,t){return r.a.createElement("div",Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),r.a.createElement("div",{className:A()(ke.a.card,Object(ce.a)({},ke.a["card--is-dragging"],t.isDragging))},o,r.a.createElement(le,{displayType:"icon",className:ke.a["card__delete-btn"],onClick:m,color:"red",icon:r.a.createElement(ne.a,{icon:re.b,size:"lg"})})))})),d&&r.a.createElement(Ne,{title:o,onDelete:function(){s(c,a)},onCancel:m}))}),(function(e,t){return e.index===t.index}));function Be(e){var t=e.id,a=e.cards,n=e.onDeleteCard;return a&&!a.length?null:r.a.createElement("ul",{className:Se.a.cards},a.map((function(e,a){return r.a.createElement(Ae,{key:e.id,index:a,id:e.id,listId:t,title:e.title,onDeleteCard:n})})))}function Pe(e){var t=e.index,a=e.id,c=e.title,o=e.cards,i=e.onDeleteList,l=e.onAddCard,d=e.onDeleteCard,u=Object(s.e)((function(e){return e.tasks.entities[a]}),(function(e,t){var a=e.cards===t.cards,n=e.cards.length===t.cards.length,r=e.isCreatingCard===t.isCreatingCard;return a&&n&&r})),m=Object(s.e)((function(e){return e.tasks.newCardTitles[a]}),(function(e,t){return e===t})),_=Object(n.useState)(!1),g=Object(te.a)(_,2),p=g[0],b=g[1],f=Object(n.useState)(!1),C=Object(te.a)(f,2),v=C[0],h=C[1],E=Object(s.d)(),j=Object(n.useRef)(),y=Object(n.useRef)();function x(e){e&&13===Number(e.which)&&(e.preventDefault(),D())}function L(){h((function(e){return!e}))}function k(){p||E(O.onChangeNewCardTitle({listId:a,value:""})),b((function(e){return!e}))}function N(e){var t=e.target.value;E(O.onChangeNewCardTitle({listId:a,value:t}))}function w(){i(a)}function D(){m.trim().length&&l({listId:a,title:m})}return Object(n.useEffect)((function(){var e=j.current;if(p&&e)return e.addEventListener("keypress",x),function(){e&&e.removeEventListener("keypress",x)}}),[j,p,m]),r.a.createElement(ae.b,{draggableId:a,index:t},(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({ref:e.innerRef,className:ue.a.column},e.draggableProps),r.a.createElement("div",Object.assign({className:ue.a.column__header},e.dragHandleProps),r.a.createElement(Ie,null,c),r.a.createElement(le,{displayType:"icon",className:ue.a["column__delete-list-btn"],onClick:L,color:"red",icon:r.a.createElement(ne.a,{icon:re.c})})),r.a.createElement("div",{ref:y,className:A()(ue.a.column__cards,"dashboard__column-".concat(a,"-cards"))},r.a.createElement(ae.c,{droppableId:a,type:"card"},(function(e,t){return r.a.createElement("div",Object.assign({ref:e.innerRef,className:A()({is:!!t.isDraggingOver})},e.droppableProps),r.a.createElement(Be,{id:a,cards:o,onDeleteCard:d}),e.placeholder)})),p&&r.a.createElement(he,{inputRef:j,value:m,onChange:N,placeholder:"Enter a title for this card...",minRows:3,maxRows:7,autoFocus:!0})),r.a.createElement("div",{className:ue.a.column__buttons},p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{className:ue.a["column__btn--create"],onClick:D,loading:u.isCreatingCard,color:"green",icon:r.a.createElement(ne.a,{icon:re.a,size:"sm"})},"Add Card"),r.a.createElement(le,{displayType:"icon",onClick:k,className:ue.a["column__btn--cancel"],color:"transparent",disabled:u.isCreatingCard,icon:r.a.createElement(ne.a,{icon:re.b,size:"lg"})})),!p&&r.a.createElement(le,{onClick:k,className:ue.a.column__btn,icon:r.a.createElement(ne.a,{icon:re.a,size:"sm"})},"Add a card"))),v&&r.a.createElement(Ne,{title:c,maxWidth:400,onDelete:w,onCancel:L}))}))}Be.defaultProps={cards:[]},Pe.defaultProps={cards:[]};var Re=Object(n.memo)(Pe,(function(e,t){var a=e.index===t.index;return e.cards===t.cards&&a})),We=a(47),ze=a.n(We);function Fe(e){var t=e.columns,a=e.onAddList,c=e.onDeleteList,o=e.onAddCard,s=e.onDeleteCard,i=e.onChangeCardOrder,l=e.onChangeListOrder,d=Object(n.useState)(!1),u=Object(te.a)(d,2),m=u[0],_=u[1];function g(){_((function(e){return!e}))}return r.a.createElement(ae.a,{onDragEnd:function(e){var t=e.destination,a=e.source,n=e.type;t&&(t.droppableId===a.droppableId&&t.index===a.index||("list"===n&&function(e){var t=e.destination,a=e.source,n=e.draggableId,r=t.index,c=a.index;l({listId:n,toOrder:r,fromOrder:c})}(e),"card"===n&&function(e){var t=e.destination,a=e.source,n=e.draggableId,r=t.droppableId,c=a.droppableId,o=t.index,s=a.index;i({cardId:n,toListId:r,fromListId:c,toOrder:o,fromOrder:s})}(e)))}},r.a.createElement(ae.c,{droppableId:"list",direction:"horizontal",type:"list"},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef,className:ze.a.columns},e.droppableProps),t.map((function(e,t){return r.a.createElement(Re,{index:t,key:e.id,id:e.id,cards:e.cards,title:e.title,onAddCard:o,onDeleteList:c,onDeleteCard:s})})),e.placeholder,m&&r.a.createElement(be,{onAddList:a,toggleStartedCreatingColumn:g}),r.a.createElement(me,{isCreatingColumn:m,onStartCreateColumn:g}),r.a.createElement("div",{className:ze.a["columns__demy-column"]}))})))}Fe.defaultProps={columns:[]};var Me=a(33),qe=a.n(Me);function He(e){var t=e.isLoading;return t?r.a.createElement("div",{className:A()(qe.a.box,Object(ce.a)({},qe.a.loading,t),Object(ce.a)({},qe.a.loaded,!t))},r.a.createElement("div",{className:qe.a.spinner},r.a.createElement("span",null,"Loading..."))):null}He.defaultProps={isLoading:!1};var Je=a(69),Qe=a.n(Je),Ve=function(e){Object(I.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onAddList=function(t){(0,e.props.startCreateList)({title:t})},e.onDeleteList=function(t){(0,e.props.startDeletingList)(t)},e.onAddCard=function(t){(0,e.props.startCreateCard)(t)},e.onDeleteCard=function(t,a){(0,e.props.startDeletingCard)({listId:t,cardId:a})},e.onChangeCardOrder=function(t){(0,e.props.onChangeCardOrder)(t)},e.onChangeListOrder=function(t){(0,e.props.onChangeListOrder)(t)},e}return Object(D.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getTasks;e.tasks.length||t()}},{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.isTasksLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:A()(Qe.a.dashboard,"dashboard-page")},r.a.createElement(Fe,{columns:t,onAddList:this.onAddList,onDeleteList:this.onDeleteList,onAddCard:this.onAddCard,onDeleteCard:this.onDeleteCard,onChangeCardOrder:this.onChangeCardOrder,onChangeListOrder:this.onChangeListOrder})),r.a.createElement(He,{isLoading:a}))}}]),a}(n.Component);Ve.defaultProps={tasks:[]};var Xe=Object(s.c)((function(e){return{tasks:E.selectAll(e),isTasksLoading:e.tasks.isTasksLoading}}),(function(e){return{getTasks:function(){return e(O.getTasks())},startCreateList:function(t){return e(O.startCreateList(t))},startDeletingList:function(t){return e(O.startDeletingList(t))},startCreateCard:function(t){return e(O.startCreateCard(t))},startDeletingCard:function(t){return e(O.startDeletingCard(t))},onChangeCardOrder:function(t){return e(O.changeCardOrder(t))},onChangeListOrder:function(t){return e(O.changeListOrder(t))}}}))(Object(u.b)({key:"tasks",saga:ee})(Ve));var Ye=function(){return r.a.createElement(Xe,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:k},r.a.createElement(i.a,{loading:null,persistor:N},r.a.createElement(Ye,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,a){e.exports={card:"ColumnCard_card__3qMqY","card--is-dragging":"ColumnCard_card--is-dragging__2Xtvm","card__delete-btn":"ColumnCard_card__delete-btn__3lY27","delete-modal__title":"ColumnCard_delete-modal__title__3Y0eQ","delete-modal__actions":"ColumnCard_delete-modal__actions__7AQly","delete-modal__btn":"ColumnCard_delete-modal__btn__Lszce"}},18:function(e,t,a){e.exports={button:"Button_button__2XPbj","button--with-icon":"Button_button--with-icon__2mTBF",button__text:"Button_button__text__3pwWn",icon:"Button_icon__1WJdU",green:"Button_green__1TOMw",red:"Button_red__3fO7b","dark-gray":"Button_dark-gray__nL9kN",transparent:"Button_transparent__17AuW",loading:"Button_loading__VYV8W",button__icon:"Button_button__icon__3WrMJ",button__spinner:"Button_button__spinner__KASpU",spinner:"Button_spinner__3OUQ3"}},33:function(e,t,a){e.exports={box:"PageLoader_box__3RvKg",spinner:"PageLoader_spinner__RcNXU",spinner_loading_text:"PageLoader_spinner_loading_text__30XJb"}},40:function(e,t,a){e.exports={modal:"Modal_modal__3kgh3",modal__content:"Modal_modal__content__1ILQq",modal__overlay:"Modal_modal__overlay__c1s7q"}},47:function(e,t,a){e.exports={columns:"Columns_columns__lzzwH","columns__demy-column":"Columns_columns__demy-column__WrYhS"}},65:function(e,t,a){e.exports={input:"Input_input__2ZPX1"}},66:function(e,t,a){e.exports={textarea:"Textarea_textarea__20Vs3"}},67:function(e,t,a){e.exports={title:"ColumnTitle_title__3gobv"}},68:function(e,t,a){e.exports={cards:"ColumnCards_cards__-bKoe"}},69:function(e,t,a){e.exports={dashboard:"Dashboard_dashboard__3f3Dv"}},75:function(e,t,a){e.exports=a(116)},8:function(e,t,a){e.exports={column:"Column_column__3yOFN",column__header:"Column_column__header__1h3fQ","column--new":"Column_column--new__2yyfC","column__delete-list-btn":"Column_column__delete-list-btn__3wwCm",column__headerInput:"Column_column__headerInput__3RRuk",column__cards:"Column_column__cards__2EVMA",column__buttons:"Column_column__buttons__25buy","column--create":"Column_column--create__3V9bk",column__btn:"Column_column__btn__3Hseg","column__btn--create":"Column_column__btn--create__3t0ct","column__btn--cancel":"Column_column__btn--cancel__auBDM"}},85:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.ff58ac9f.chunk.js.map