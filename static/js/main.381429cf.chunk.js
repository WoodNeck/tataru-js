(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{31:function(e,c,n){},32:function(e,c,n){},33:function(e,c,n){},40:function(e,c,n){},41:function(e,c,n){},42:function(e,c,n){},43:function(e,c,n){},44:function(e,c,n){},46:function(e,c,n){},47:function(e,c,n){},49:function(e,c,n){},50:function(e,c,n){},51:function(e,c,n){},52:function(e,c,n){},53:function(e,c,n){"use strict";n.r(c);var t=n(1),s=n.n(t),i=n(12),a=n.n(i),o=(n(31),n(9)),r=n(7),j=n(3),l=(n(32),n(33),n(0)),d=[{path:"/",name:"\ud648",icon:"home"},{path:"/icon",name:"\uc544\uc774\ucf58",icon:"archive"},{path:"/command",name:"\uba85\ub839\uc5b4 \ubaa9\ub85d",icon:"bolt"}],u=function(){return Object(l.jsxs)("div",{className:"sidebar-container",children:[Object(l.jsx)("div",{className:"sidebar-menu",children:d.map((function(e){return Object(l.jsxs)(r.c,{to:e.path,className:"sidebar-menu-item",activeClassName:"selected",isActive:function(c,n){return!!c&&("/"===e.path?n.pathname===e.path:n.pathname.includes(e.path))},children:[Object(l.jsx)("svg",{className:"sidebar-menu-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/").concat(e.icon,".svg#icon")})}),Object(l.jsx)("span",{children:e.name})]},e.name)}))}),Object(l.jsx)("div",{className:"sidebar-others",children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://discord.com/oauth2/authorize?client_id=357073005819723777&permissions=3238976&scope=bot",children:Object(l.jsxs)("div",{className:"sidebar-others-item",children:[Object(l.jsx)("svg",{className:"sidebar-others-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/discord.svg#icon")})}),Object(l.jsx)("span",{children:"\uc0f4\uace0\uc591\uc774 \ucd08\ub300\ud558\uae30"})]})})})]})},m=(n(40),n(41),function(){return Object(l.jsx)("div",{className:"header-menu",children:Object(l.jsxs)("div",{className:"header-menu-item",onClick:function(){window.location.href="".concat("https://para.n-e.kr:4260","/auth/discord")},children:[Object(l.jsx)("svg",{className:"header-menu-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/login.svg#icon")})}),Object(l.jsx)("span",{children:"\ub85c\uadf8\uc778"})]})})}),b=(n(42),function(e){var c=e.user;return Object(l.jsxs)("div",{className:"profile-container",children:[Object(l.jsx)("div",{className:"profile-overlay",onClick:function(){window.location.href="".concat("https://para.n-e.kr:4260","/logout")},children:"\ub85c\uadf8\uc544\uc6c3"}),Object(l.jsx)("img",{className:"profile-avatar",src:c.avatarURL})]})}),h=function(e){var c=e.user;return Object(l.jsxs)("div",{className:"header-container",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsxs)("div",{className:"header-logo",children:[Object(l.jsx)("div",{className:"header-logo-text",children:Object(l.jsx)("span",{children:"\uc0f4\uace0\uc591\uc774"})}),Object(l.jsx)("img",{className:"header-logo-img",alt:"logo",src:"".concat("/siamese","/logo20.png")})]})}),null!=c?c.id?Object(l.jsx)(b,{user:c}):Object(l.jsx)(m,{}):Object(l.jsx)(l.Fragment,{})]})},x=(n(43),function(){return Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("h1",{className:"emoji-big",children:"\ud83c\udfd7\ufe0f"}),Object(l.jsx)("h1",{children:"\ud83d\udea7\uacf5\uc0ac\uc911\ud83d\udea7"})]})}),O=(n(44),function(e){var c=e.guilds;return Object(l.jsxs)("div",{className:"guild-container",children:[Object(l.jsx)("div",{className:"guild-header",children:Object(l.jsx)("div",{className:"guild-header-text",children:Object(l.jsx)("span",{children:"\uc11c\ubc84 \ubaa9\ub85d"})})}),Object(l.jsx)("div",{className:"guild-subtitle",children:"\uc544\uc774\ucf58\uc744 \ud3b8\uc9d1\ud560 \uc11c\ubc84\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),c.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"guild-separator"}),Object(l.jsxs)(r.b,{to:"/icon/".concat(e.id),className:"guild-item",children:[Object(l.jsx)("img",{className:"guild-icon",src:e.iconURL?e.iconURL:"".concat("/siamese","/icons/discord.svg#icon")}),Object(l.jsx)("div",{className:"guild-name",children:e.name}),Object(l.jsx)("svg",{className:"guild-approved-icon ".concat(e.hasPermission?"yes":"no"),children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/").concat(e.hasPermission?"approve":"cancel",".svg#icon")})}),Object(l.jsx)("div",{className:"guild-enter-icon-container",children:Object(l.jsx)("svg",{className:"guild-enter-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/right-arrow.svg#icon")})})})]})]},e.id)})),Object(l.jsx)("div",{className:"guild-footer",children:"- \uc11c\ubc84\uac00 \ud45c\uc2dc\ub418\uc9c0 \uc54a\ub098\uc694? \uc0f4\uace0\uc591\uc774\ub97c \uc0ac\uc6a9\ud558\ub294 \uc11c\ubc84\uc5d0\uc11c \uc544\ubb34 \uba54\uc2dc\uc9c0\ub098 \ubcf4\ub0b8 \ub2e4\uc74c \ub2e4\uc2dc \ud655\uc778\ud574\ubcf4\uc138\uc694!"})]})}),v=n(14),p=n(13),g=n.n(p),f=n(19),N=n(23),k=n.n(N),w=n(24),C=n.n(w),D=n(26),y=n(10),H=(n(46),function(){return Object(l.jsx)("div",{className:"loading-container",children:Object(l.jsxs)("div",{className:"lds-spinner",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})});const S="/icons";n(47),n(48);var P=function(e){var c=e.guilds,n=Object(j.f)(),s=n.guildID,i=n.groupID,a=Object(t.useState)(null),d=Object(o.a)(a,2),u=d[0],m=d[1],b=Object(t.useState)(null),h=Object(o.a)(b,2),x=h[0],O=h[1],p=Object(t.useState)(null),N=Object(o.a)(p,2),w=N[0],P=N[1],I=c.find((function(e){return e.id===s})),R=C()(k.a),L=Object(t.useReducer)((function(e){return e+1}),0),E=Object(o.a)(L,2),U=E[0],F=E[1];Object(t.useEffect)((function(){i?Promise.all([fetch("".concat("https://para.n-e.kr:4260").concat("/directory","?id=").concat(i),{credentials:"include"}).then((function(e){return e.json()})),fetch("".concat("https://para.n-e.kr:4260").concat(S,"?guildID=").concat(s,"&groupID=").concat(i),{credentials:"include"}).then((function(e){return e.json()}))]).then((function(e){var c=Object(o.a)(e,2),n=c[0],t=c[1];m([]),O(t),P(n)})):Promise.all([fetch("".concat("https://para.n-e.kr:4260").concat("/directories","?id=").concat(s),{credentials:"include"}).then((function(e){return e.json()})),fetch("".concat("https://para.n-e.kr:4260").concat(S,"?guildID=").concat(s),{credentials:"include"}).then((function(e){return e.json()}))]).then((function(e){var c=Object(o.a)(e,2),n=c[0],t=c[1];m(n),O(t),P(null)}))}),[s,i,U]);var T=Object(t.useCallback)((function(e){R.fire({imageUrl:e.url,heightAuto:!1})}),[R]),A=Object(D.a)({accept:"image/jpg, image/jpeg, image/png, image/gif, image/webp",noClick:!0,noKeyboard:!0,maxSize:8388608,onDrop:function(e){if(e.length<=0)R.fire({icon:"error",html:"\uc774\ubbf8\uc9c0 \ud06c\uae30\uac00 \ub108\ubb34 \ud06c\uac70\ub098(8MB \uc774\uc0c1)<br/>\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud30c\uc77c \ud3ec\ub9f7\uc774 \uc11e\uc5ec\uc788\uc5b4\uc694!",heightAuto:!1});else{var c=new FormData;c.append("guildID",s),i&&c.append("groupID",i),e.forEach((function(e){c.append("icons[]",e,e.name)}));var n=Object(y.b)("".concat(e.length,"\uac1c\uc758 \uc544\uc774\ucf58\uc744 \uc5c5\ub85c\ub4dc\uc911\uc785\ub2c8\ub2e4..."),{autoClose:!1});fetch("".concat("https://para.n-e.kr:4260").concat(S),{method:"POST",credentials:"include",body:c}).then(function(){var c=Object(f.a)(g.a.mark((function c(t){return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(200===t.status){c.next=6;break}return c.t0=Error,c.next=4,t.text();case 4:throw c.t1=c.sent,new c.t0(c.t1);case 6:y.b.update(n,{render:"".concat(e.length,"\uac1c\uc758 \uc544\uc774\ucf58\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4!"),type:y.b.TYPE.SUCCESS,autoClose:5e3}),F();case 8:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()).catch((function(e){y.b.update(n,{render:function(){return Object(l.jsxs)("div",{children:["\u274c \uc544\uc774\ucf58 \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4 :(",Object(l.jsx)("br",{}),e.message?e.message:e.toString()]})},type:y.b.TYPE.ERROR,autoClose:5e3})}))}}}),B=A.getRootProps,z=A.getInputProps,J=A.open,M=A.isDragActive,Y=A.isDragAccept,_=A.isDragReject,K=Object(t.useMemo)((function(){var e=["icon-container"];return M&&e.push("drag-active"),Y&&e.push("drag-accept"),_&&e.push("drag-reject"),e.join(" ")}),[M,_,Y]);return u&&x?Object(l.jsxs)("div",Object(v.a)(Object(v.a)({},B({className:K})),{},{children:[Object(l.jsxs)("div",{className:"icon-menu-container",children:[Object(l.jsxs)("div",{className:"icon-menu-left",children:[Object(l.jsx)(r.b,{to:i?"/icon/".concat(s):"/icon",className:"icon-menu-item icon-back-button-container",children:Object(l.jsx)("svg",{className:"icon-arrow-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/left-arrow.svg#icon")})})}),Object(l.jsx)("img",{className:"icon-guild-icon",src:I.iconURL?I.iconURL:"".concat("/siamese","/icons/discord.svg#icon")}),Object(l.jsxs)("div",{className:"icon-guild-title",children:[Object(l.jsx)("span",{children:I.name}),w&&Object(l.jsxs)("div",{className:"icon-group-title",children:[Object(l.jsx)("span",{className:"icon-group-separator",children:" / "}),Object(l.jsx)("svg",{className:"icon-group-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/folder.svg#icon")})}),Object(l.jsx)("span",{children:w.name})]})]})]}),Object(l.jsxs)("div",{className:"icon-menu-right",children:[!w&&Object(l.jsx)("div",{className:"icon-menu-item icon-add-folder-btn",children:Object(l.jsx)("svg",{className:"icon-menu-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/add-folder.svg#icon")})})}),Object(l.jsx)("div",{className:"icon-menu-item icon-remove-btn",children:Object(l.jsx)("svg",{className:"icon-menu-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/trash.svg#icon")})})}),Object(l.jsxs)("div",{className:"icon-menu-item",children:[Object(l.jsx)("svg",{className:"icon-upload-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/upload.svg#icon")})}),Object(l.jsx)("span",{className:"icon-upload-text",onClick:J,children:"\uc5c5\ub85c\ub4dc"})]})]})]}),Object(l.jsxs)("div",{className:"icon-item-container",children:[Object(l.jsxs)("div",{className:"icon-item icon-item-header",children:[Object(l.jsx)("input",{type:"checkbox",className:"icon-item-checkbox",onClick:function(e){return e.stopPropagation()}}),Object(l.jsx)("div",{className:"icon-item-name-container header-name",children:"\uc774\ub984"}),Object(l.jsx)("div",{className:"icon-item-author",children:"\uc0dd\uc131\uc790"}),Object(l.jsx)("div",{className:"icon-item-count",children:"\uc544\uc774\ucf58 \uac1c\uc218"}),Object(l.jsx)("div",{className:"icon-item-date",children:"\uc0dd\uc131\uc77c\uc790"})]}),Object(l.jsx)("div",{className:"icon-item-separator"}),u.map((function(e){var c,n,t,i;return Object(l.jsxs)(r.b,{to:"/icon/".concat(s,"/").concat(e.id),className:"icon-item",children:[Object(l.jsx)("input",{type:"checkbox",className:"icon-item-checkbox",onClick:function(e){return e.stopPropagation()}}),Object(l.jsxs)("div",{className:"icon-item-name-container",children:[Object(l.jsx)("svg",{className:"icon-item-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/folder.svg#icon")})}),Object(l.jsx)("span",{children:e.name})]}),Object(l.jsxs)("div",{className:"icon-item-author",children:[Object(l.jsx)("img",{className:"icon-item-author-icon",src:null!==(c=null===(n=e.author)||void 0===n?void 0:n.avatarURL)&&void 0!==c?c:""}),Object(l.jsx)("span",{className:"icon-item-author-tag",children:null!==(t=null===(i=e.author)||void 0===i?void 0:i.tag)&&void 0!==t?t:""})]}),Object(l.jsx)("div",{className:"icon-item-count",children:e.iconCount}),Object(l.jsx)("div",{className:"icon-item-date",children:new Date(e.createdTimestamp).toLocaleDateString()})]},e.id)})),x.map((function(e){var c,n,t,s;return Object(l.jsxs)("div",{className:"icon-item",onClick:function(){return T(e)},children:[Object(l.jsx)("input",{type:"checkbox",className:"icon-item-checkbox",onClick:function(e){return e.stopPropagation()}}),Object(l.jsxs)("div",{className:"icon-item-name-container",children:[Object(l.jsx)("svg",{className:"icon-item-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/image.svg#icon")})}),Object(l.jsx)("input",{type:"text",maxLength:10,onBlur:function(c){var n=c.target.value;n!==e.name&&function(e,c,n){n.value=c,fetch("".concat("https://para.n-e.kr:4260").concat("/icon"),{method:"PATCH",credentials:"include",headers:{"Content-type":"application/json; charset=utf-8"},body:JSON.stringify({id:e.id,name:c})}).then(function(){var e=Object(f.a)(g.a.mark((function e(c){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200===c.status){e.next=6;break}return e.t0=Error,e.next=4,c.text();case 4:throw e.t1=e.sent,new e.t0(e.t1);case 6:y.b.success("\uc544\uc774\ucf58 \uc774\ub984\uc744 \uc5c5\ub370\uc774\ud2b8\ud588\uc2b5\ub2c8\ub2e4!"),F();case 8:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()).catch((function(c){n.value=e.name,y.b.error((function(){return Object(l.jsxs)("div",{children:["\u274c \uc544\uc774\ucf58 \uc774\ub984\uc744 \ubcc0\uacbd\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4",Object(l.jsx)("br",{}),c.message?c.message:c.toString()]})}))}))}(e,n.replace(/\s+/,""),c.target)},onClick:function(e){return e.stopPropagation()},className:"icon-item-name",defaultValue:e.name})]}),Object(l.jsxs)("div",{className:"icon-item-author",children:[Object(l.jsx)("img",{className:"icon-item-author-icon",src:null!==(c=null===(n=e.author)||void 0===n?void 0:n.avatarURL)&&void 0!==c?c:""}),Object(l.jsx)("span",{className:"icon-item-author-tag",children:null!==(t=null===(s=e.author)||void 0===s?void 0:s.tag)&&void 0!==t?t:""})]}),Object(l.jsx)("div",{className:"icon-item-count"}),Object(l.jsx)("div",{className:"icon-item-date",children:new Date(e.createdTimestamp).toLocaleDateString()})]},e.id)}))]}),Object(l.jsxs)("div",{className:"icon-drag-visualizer",children:[Object(l.jsx)("svg",{className:"icon-drag-add",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/add.svg#icon")})}),Object(l.jsxs)("div",{className:"icon-drag-reject-container",children:[Object(l.jsx)("svg",{className:"icon-drag-reject",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/cancel.svg#icon")})}),Object(l.jsx)("div",{children:"\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud30c\uc77c \ud3ec\ub9f7\uc774 \uc11e\uc5ec\uc788\uc5b4\uc694!"})]})]}),Object(l.jsx)("input",Object(v.a)({},z())),Object(l.jsx)(y.a,{position:"bottom-right",closeOnClick:!0})]})):Object(l.jsx)(H,{})},I=(n(49),function(){var e=Object(j.g)(),c=Object(t.useState)(null),n=Object(o.a)(c,2),s=n[0],i=n[1];return Object(t.useEffect)((function(){fetch("".concat("https://para.n-e.kr:4260","/guilds"),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),s?Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:["".concat(e.path,"/:guildID/:groupID"),"".concat(e.path,"/:guildID")],children:Object(l.jsx)(P,{guilds:s})}),Object(l.jsx)(j.a,{path:e.path,children:Object(l.jsx)(O,{guilds:s})})]}):Object(l.jsx)(H,{})}),R=(n(50),function(){return Object(l.jsxs)("div",{className:"command-container",children:[Object(l.jsx)("h1",{className:"emoji-big",children:"\ud83c\udfd7\ufe0f"}),Object(l.jsx)("h1",{children:"\ud83d\udea7\uacf5\uc0ac\uc911\ud83d\udea7"})]})}),L=(n(51),function(){return Object(l.jsxs)("div",{className:"not-found-container",children:[Object(l.jsx)("svg",{className:"not-found-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/warn.svg#icon")})}),Object(l.jsx)("span",{children:"404 Not Found"})]})}),E=(n(52),function(){return Object(l.jsxs)("div",{className:"auth-container",children:[Object(l.jsx)("div",{className:"auth-header",children:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4"}),Object(l.jsxs)("div",{className:"auth-login-button",onClick:function(){window.location.href="".concat("https://para.n-e.kr:4260","/auth/discord")},children:[Object(l.jsx)("svg",{className:"auth-discord-icon",children:Object(l.jsx)("use",{xlinkHref:"".concat("/siamese","/icons/discord.svg#icon")})}),Object(l.jsx)("div",{className:"auth-login-separator"}),Object(l.jsx)("span",{children:"\ub514\uc2a4\ucf54\ub4dc\ub85c \ub85c\uadf8\uc778\ud558\uae30"})]})]})}),U=function(){var e=Object(t.useState)(null),c=Object(o.a)(e,2),n=c[0],s=c[1];return Object(t.useEffect)((function(){fetch("".concat("https://para.n-e.kr:4260","/user"),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"main-container",children:[Object(l.jsx)(h,{user:n}),Object(l.jsxs)("div",{className:"contents-container",children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{className:"page-container",children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/icon",children:n?n.id?Object(l.jsx)(I,{}):Object(l.jsx)(E,{}):Object(l.jsx)(l.Fragment,{})}),Object(l.jsx)(j.a,{path:"/command",component:R}),Object(l.jsx)(j.a,{path:"/",exact:!0,component:x}),Object(l.jsx)(j.a,{path:"*",component:L})]})})]})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(c){var n=c.getCLS,t=c.getFID,s=c.getFCP,i=c.getLCP,a=c.getTTFB;n(e),t(e),s(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(U,{})}),document.getElementById("root")),F()}},[[53,1,2]]]);
//# sourceMappingURL=main.381429cf.chunk.js.map