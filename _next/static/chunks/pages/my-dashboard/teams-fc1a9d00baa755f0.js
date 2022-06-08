(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{35611:function(e,n,t){"use strict";n.ZP=void 0;var r=t(96282),i=t(69829),a={shared:{label:"\n      display: block;\n      margin-bottom: 0.2777em;\n    ",wrapper:"\n      position: relative;\n      display: flex;\n      background: #fff;\n      overflow: hidden;\n      border: 2px solid #606060;\n      border-radius: 0;\n      padding: 0.3em 0;\n\n      &:after {\n        content: ' ';\n        background-image: "+(0,i.toSvgUrl)(i.ChevronDown)+";\n        background-size: contain;\n        background-repeat: no-repeat;\n        position: absolute;\n        right: 0.2em;\n        width: 1.2em;\n        height: 100%;\n        text-align: center;\n        cursor: pointer;\n        pointer-events: none;\n        -webkit-transition: .25s all ease;\n        -o-transition: .25s all ease;\n        transition: .25s all ease;\n      }\n\n      &:focus-within  {\n        outline: 4px solid #3B99FC;\n        outline-offset: 1px;\n      }\n\n      &:hover::after {}\n  ",input:"\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      -ms-appearance: none;\n      appearance: none;\n      outline: 0;\n      box-shadow: none;\n      border: 0 !important;\n      background: #fff;\n      background-image: none;\n      display: inline-block;\n      flex: 1;\n      padding: 0 .5em;\n      color: #000;\n      cursor: pointer;\n\n      &::-ms-expand {\n        display: none;\n      }\n    "},size:{small:{container:"\n        font-size: 0.8rem;\n      "},medium:{container:"\n        font-size: 1rem;\n      "},large:{container:"\n        font-size: 1.2rem;\n      "}},rounded:{wrapper:"\n      border-radius: 0.25em;\n    "}};var o=(0,r.applyTheme)(a,{defaultProps:{size:"medium",rounded:!0,required:!1},staticProps:["fullWidth"],includeWrapper:!0});n.ZP=o},96282:function(e,n,t){"use strict";var r=t(95318);Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.applyTheme=void 0;var i=r(t(87462)),a=r(t(63366)),o=r(t(67294)),s=r(t(86010)),l=t(80927),c=function(e,n){var t=(0,l.processStyle)(e),r=(0,l.createStyleBuilder)(t,n),c=n.as||{},u=r(c.container||"div","container"),d=r("label","label"),f=n.includeWrapper?r(c.wrapper||"div","wrapper"):null,m=r("select","input"),h=(0,l.createBootstrap)(t,"select");return function(e){var n=h(e),t=n.id,r=n.name,l=n.label,c=n.ariaLabel,p=n.styleProps,x=n.children,v=n.className,g=n.rest,b=g.style,w=g.labelStyle,j=g.inputStyle,y=g.wrapperStyle,Z=(0,a.default)(g,["style","labelStyle","inputStyle","wrapperStyle"]),k=o.default.createElement(m,(0,i.default)({"aria-label":c},Z,{id:t,name:r,style:j,className:"pg-select-input"}),x);return o.default.createElement(u,(0,i.default)({},p,{style:b,className:(0,s.default)("pg-select",v)}),l&&o.default.createElement(d,(0,i.default)({htmlFor:t},p,{style:w,className:"pg-select-label"}),l),f?o.default.createElement(f,(0,i.default)({},p,{style:y,className:"pg-select-wrapper"}),k):k)}};n.applyTheme=c;var u=c({},{staticProps:["fullWidth"]});n.default=u},76691:function(e,n,t){"use strict";t.d(n,{Kk:function(){return b},MO:function(){return w},ZP:function(){return j},c4:function(){return g}});var r,i,a,o=t(50029),s=t(71383),l=t(87794),c=t.n(l),u=t(11163),d=t(37797),f=t(92814),m=t(51436),h=t(61165),p=t(37226),x=t(63055),v=t(85893),g=d.default.div(r||(r=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 15px;\n  & > * {\n    margin-left: 15px;\n  }\n"]))),b=(0,d.default)(f.G)(i||(i=(0,s.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"])),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"color: #CACACA;":"color: black; &:hover { color: ".concat(e.activeColor||"#137ac8","; }")}),(function(e){return e.isUnread?"color: ".concat(x.Uo):""})),w=d.default.div(a||(a=(0,s.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"])));function j(e){var n=e.request,t=e.onDelete,r=e.children,i=(0,u.useRouter)(),a=(n||{}).archived,s=!a&&!["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||""),l=!a&&["draft","applied"].includes(n.status||""),d="delete-modal-".concat(null===n||void 0===n?void 0:n.id),f=function(){var e=(0,o.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),l){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,i.push("/request/".concat(n.id,"?status=").concat(n.status));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=(0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||"")){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,p.Jl)(n.id);case 5:window.location.hash="#",t&&t(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(g,{children:[r,(0,v.jsx)(b,{disabled:!l,icon:m.Xcf,role:"button","aria-label":"edit",onClick:f,title:"Edit",size:"lg"}),(0,v.jsx)(b,{icon:m.$aW,role:"button","aria-label":"delete",onClick:function(){n.id&&s&&(window.location.hash=d)},disabled:!s,activeColor:x.Uo,title:"Delete",size:"lg"})]}),(0,v.jsx)(h.Z,{id:d,content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:w,title:"Confirm Deletion",confirmText:"Delete"})]})}},73118:function(e,n,t){"use strict";t.d(n,{H:function(){return l}});var r,i=t(71383),a=t(37797),o=t(2556),s=t(63055),l=(0,a.default)(o.Z)(r||(r=(0,i.Z)(["\n  .nav-link {\n    color: black !important;\n    height: 30px !important;\n    font-size: "," !important;\n    padding-top: 0; !important;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n    font-weight: 600;\n  }\n"])),s.CA)},88214:function(e,n,t){"use strict";var r,i=t(71383),a=t(37797),o=t(63055),s=a.default.table(r||(r=(0,i.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 ","px;\n\n  & thead {\n    font-size: 16px;\n    color: black;\n\n    & th {\n      min-width: ",";\n    }\n  }\n\n  & tbody {\n    font-size: ",";\n    tr {\n      height: ",";\n      background-color: #f8f8f8;\n      ","\n    }\n  }\n\n  td:first-child {\n    padding-left: 1em;\n    text-align: left;\n  }\n\n  & th,\n  & td {\n    border: none;\n    padding: 0;\n    overflow: hidden;\n  }\n\n  & th.w60,\n  & td.w60 {\n    width: 60px;\n  }\n\n  & th.min-width-60,\n  & td.min-width-60 {\n    min-width: 60px;\n  }\n"])),o.gM,(function(e){return"mini"===e.variant?"30px":"140px"}),(function(e){return"mini"===e.variant?"14px":"16px"}),(function(e){return"mini"===e.variant?"".concat(o.ZW,"px"):"".concat(o.eX,"px")}),(function(e){return!e.readOnly&&"\n        &:hover {\n          background-color: ".concat(o.uB,";\n          cursor: pointer;\n        }\n        &.active {\n          background-color: ").concat(o.uB,";\n          font-weight: bold;\n          border: 2px solid #9fadc0 !important;\n        }\n      ")}));n.Z=s},49910:function(e,n,t){"use strict";t.d(n,{FE:function(){return x}});var r,i,a=t(71383),o=t(67294),s=t(11163),l=t(64735),c=t(37797),u=t(73192),d=t(73118),f=t(59912),m=t(60377),h=t(23130),p=t(85893),x=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],v=c.default.div(r||(r=(0,a.Z)(["\n  overflow: auto;\n"]))),g=c.default.div(i||(i=(0,a.Z)(["\n  padding-top: 2px;\n"]))),b=o.createContext({});n.ZP=function(e){var n,t=e.tab,r=e.leftPanel,i=e.rightPanel,a=e.children,c=(0,s.useRouter)(),w=(0,o.useReducer)(m.Z,m.E),j=w[0],y=w[1],Z=(0,o.useContext)(h.SessionContext)||{},k=Z.user,O=Z.enableGold,N=null===k||void 0===k||null===(n=k.integrations)||void 0===n?void 0:n.find((function(e){return"silver"===e.serviceType})),S=(0,o.useMemo)((function(){return{state:j,dispatch:y}}),[j,y]),C=(0,p.jsxs)(d.H,{onSelect:function(e){c.replace("/my-dashboard/".concat(e))},activeKey:t,children:[(0,p.jsx)(u.Z,{eventKey:"integrations",title:"My Projects"}),(0,p.jsx)(u.Z,{eventKey:"teams",title:"My Teams"}),O&&N&&(0,p.jsx)(u.Z,{eventKey:"s2g",title:"*New - Silver to Gold Upgrade"})]});return(0,p.jsx)(f.Z,{rules:x,children:(0,p.jsx)(b.Provider,{value:S,children:a?(0,p.jsxs)(g,{children:[C,a]}):(0,p.jsx)(l.ZP,{cols:10,children:(0,p.jsxs)(l.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,p.jsx)(l.ZP.Col,{span:6,children:(0,p.jsxs)(v,{children:[C,r&&r(j,y)]})}),(0,p.jsx)(l.ZP.Col,{span:4,children:i&&i(j,y)})]})})})})}},61401:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Se}});var r,i,a,o,s,l,c,u=t(16835),d=t(50029),f=t(87794),m=t.n(f),h=t(67294),p=t(49910),x=t(59499),v=t(71383),g=t(11163),b=t(37797),w=t(73192),j=t(73118),y=t(88214),Z=t(85330),k=t(35611),O=t(61165),N=t(91679),S=t(37226),C=t(48966),P=t.n(C),T=t(3016),E=t(15812),_=t(76457),R=t(92814),D=t(51436),A=t(31513),z=t(76691),M=t(85893),I=(0,b.default)(R.G)(r||(r=(0,v.Z)(["\n  color: #ff0303;\n"]))),U=b.default.div(i||(i=(0,v.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 6fr;\n"]))),F=function(e){var n=e.title,t=e.content;return(0,M.jsxs)(U,{children:[(0,M.jsx)(I,{icon:D.RLE,size:"3x"}),(0,M.jsxs)("div",{children:[n&&(0,M.jsx)("strong",{children:n}),t&&(0,M.jsx)("p",{children:t})]})]})},B=t(73366);function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var L=((0,t(11752).default)()||{}).publicRuntimeConfig,W=((void 0===L?{}:L).enable_gold,b.default.div(a||(a=(0,v.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  ","\n"])),(function(e){return"\n  margin-top: ".concat(e.marginTop||"0",";\n  margin-bottom: ").concat(e.marginBottom||"0",";\n  margin-left: ").concat(e.marginLeft||"0",";\n  margin-right: ").concat(e.marginRight||"0",";\n  ")}))),K=(0,b.default)(Z.zx)(o||(o=(0,v.Z)(["\n  padding: 0 !important;\n  margin: 20px 0 !important;\n"]))),q=b.default.div(s||(s=(0,v.Z)(["\n  border: 3px solid #a6b1c4;\n  padding: 10px;\n"]))),H=b.default.td(l||(l=(0,v.Z)(["\n  text-align: left !important;\n"]))),X="add-member-modal",Y="delete-member-modal",$=function(e,n){var t={members:[]};return e.forEach((function(e,n){e.idirEmail&&P().isEmail(e.idirEmail)?e.idirEmail.endsWith("@gov.bc.ca")||(t.members[n]="Please enter a government email address"):t.members[n]="Please enter an email"})),0===t.members.length?(n(null),null):(n(t),t)},J={idirEmail:"",role:"member",pending:!0},V=function(e){var n=e.onConfirmDelete,t={confirmText:"Delete",buttonStyle:"danger"},r="",i="";switch(e.type){case"allow":r="Once they are deleted, they will no longer have access to the team's integrations.",i="Are you sure that you want to delete this team member?",t.onConfirm=n;break;case"notAllowed":r="Before you delete the last team admin, you must assign a new admin.",t.confirmText="Okay",t.buttonStyle="custom"}return(0,M.jsx)(O.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){(0,x.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({title:"Delete Team Member",icon:null,id:Y,content:(0,M.jsx)(F,{content:r,title:i}),closable:!0},t))},Q=(0,b.default)(R.G)(c||(c=(0,v.Z)(["\n  margin-right: 10px;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),ee=function(e){var n=e.status;if(!n)return null;var t=D.RLE,r="black";return"draft"===n?(t=D.Xcf,r="#1a5a96"):"submitted"===n?(t=D.SZw,r="#fcba19"):["prFailed","applyFailed","planFailed"].includes(n)?(t=D.nYk,r="#ff0303"):"applied"===n&&(r="#2e8540",t=D.f8k),(0,M.jsx)(R.G,{icon:t,title:n,style:{color:r}})},ne=function(e){var n=e.pending,t=e.invitationSendTime;if(!t)return null;var r,i,a,o=(new Date).getTime()-new Date(t).getTime();return n&&o/864e5>2?(r=D.RLE,i="#ff0303",a="Invitation Expired"):n?(r=D.SZw,i="#fcba19",a="Invitation Sent"):(i="#2e8540",r=D.f8k,a="Active Member"),(0,M.jsx)(R.G,{icon:r,title:a,style:{color:i}})};var te,re=(0,E.hU)((function(e){var n,t=e.alert,r=e.currentUser,i=e.team,a=e.loadTeams,o=(0,g.useRouter)(),s=(0,h.useState)([]),l=s[0],c=s[1],f=(0,h.useState)([]),p=f[0],x=f[1],v=(0,h.useState)(null),b=v[0],Z=v[1],C=(0,h.useState)(null),P=C[0],E=C[1],R=(0,h.useState)([J]),I=R[0],U=R[1],F=(0,h.useState)(),G=F[0],L=F[1],te=(0,h.useState)(!1),re=te[0],ie=te[1],ae=(0,h.useState)(),oe=ae[0],se=ae[1],le=(0,h.useState)("allow"),ce=le[0],ue=le[1],de=function(){var e=(0,d.Z)(m().mark((function e(n){var t,i,a,o,s,l,d,f,h,p,v,g,b,w;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie(!0),e.next=3,Promise.all([(0,T.YY)(n),(0,S.H0)(n),(0,T.ZT)(n)]);case 3:t=e.sent,i=(0,u.Z)(t,3),a=i[0],o=i[1],s=i[2],l=(0,u.Z)(a,2),d=l[0],f=l[1],h=(0,u.Z)(o,2),p=h[0],v=h[1],g=(0,u.Z)(s,2),b=g[0],w=g[1],f||v||w?(c([]),E(null),x([]),Z(null)):(c(d),E(d.find((function(e){return e.idirEmail===r.email}))),x(p||[]),Z(b)),ie(!1);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,h.useEffect)((function(){de(i.id)}),[null===i||void 0===i?void 0:i.id]),(0,h.useEffect)((function(){return b&&"submitted"===b.status&&(clearInterval(n),n=setInterval((0,d.Z)(m().mark((function e(){var t,r,a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,T.ZT)(i.id);case 2:t=e.sent,r=(0,u.Z)(t,2),a=r[0],r[1]?clearInterval(n):Z(a);case 7:case"end":return e.stop()}}),e)}))),5e3)),function(){n&&clearInterval(n)}}),[b]);var fe=function(){var e=(0,d.Z)(m().mark((function e(){var n,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!$(I,L)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,T.yG)({members:I,id:i.id});case 5:if(n=e.sent,r=(0,u.Z)(n,2),!r[1]){e.next=12;break}t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to add new members. Please ensure the emails you have entered are valid,\n        and reach out to the SSO team if the problem persists"}),e.next=17;break;case 12:return e.next=14,de(i.id);case 14:U([J]),window.location.hash="",t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Invited new members to your team!"});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=(0,d.Z)(m().mark((function e(){var n,r,a,o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(oe&&i.id){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,T.MH)(Number(oe),i.id);case 4:n=e.sent,r=(0,u.Z)(n,2),r[1]?t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to delete team member."}):(c(l.filter((function(e){return e.id!==oe}))),o=null===(a=l.find((function(e){return e.id===oe})))||void 0===a?void 0:a.idirEmail,t.show({variant:"success",fadeOut:1e4,closable:!0,content:"".concat(o," has successfully been deleted.")}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=(0,d.Z)(m().mark((function e(n){var r,a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.id){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,T.rU)(n,i.id);case 4:r=e.sent,a=(0,u.Z)(r,2),a[1]?t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to resend invitation."}):t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Sent new invitation for team member ".concat(n.idirEmail)});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),pe=function(){var e=(0,d.Z)(m().mark((function e(n,r){var a,o,s,d,f;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,T.zZ)(i.id,n,{role:r});case 2:if(a=e.sent,o=(0,u.Z)(a,2),s=o[0],!(d=o[1])){e.next=9;break}return console.error(d),e.abrupt("return");case 9:f=l.map((function(e){return e.id===n?s:e})),c(f),t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Member role updated successfully"});case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();if(!i||!P)return null;var xe="admin"===P.role;return(0,M.jsxs)(q,{children:[(0,M.jsxs)(j.H,{defaultActiveKey:"members",children:[(0,M.jsx)(w.Z,{eventKey:"members",title:"Members",children:(0,M.jsxs)(W,{children:[xe?(0,M.jsx)(K,{variant:"plainText",onClick:function(){return window.location.hash=X},children:"+ Add new team members"}):(0,M.jsx)("br",{}),(0,M.jsx)(_.Z,{type:"text",rows:7,ready:!re,style:{marginTop:"20px"},children:(0,M.jsxs)(y.Z,{variant:"medium",readOnly:!0,children:[(0,M.jsx)("thead",{children:(0,M.jsxs)("tr",{children:[(0,M.jsx)("th",{className:"min-width-60",children:"Status"}),(0,M.jsx)("th",{className:"min-width-60",children:"Email"}),(0,M.jsxs)("th",{className:"min-width-60",children:["Role\xa0",(0,M.jsx)(B.Z,{title:"",content:'Admin: can manage integrations <span class="strong">and</span> teams. <br> Members: can <span class="strong">only</span> manage integrations.',hide:200})]}),(0,M.jsx)("th",{className:"min-width-60",style:{textAlign:"right"},children:"Actions"})]})}),(0,M.jsx)("tbody",{children:l.map((function(e){var n=xe&&P.id!==e.id;return(0,M.jsxs)("tr",{children:[(0,M.jsx)("td",{className:"min-width-60",children:(0,M.jsx)(ne,{pending:e.pending,invitationSendTime:e.createdAt})}),(0,M.jsx)("td",{className:"min-width-60",children:e.idirEmail}),(0,M.jsx)("td",{className:"min-width-60",children:n&&!e.pending?(0,M.jsxs)(k.ZP,{onChange:function(n){return pe(e.id,n.target.value)},value:e.role,children:[(0,M.jsx)("option",{value:"member",children:"Member"}),(0,M.jsx)("option",{value:"admin",children:"Admin"})]}):(0,A.kC)(e.role)}),(0,M.jsxs)("td",{style:{textAlign:"right"},children:[n&&e.pending&&(0,M.jsx)(Q,{icon:D.zBy,size:"lg",onClick:function(){return he(e)},title:"Resend Invitation",style:{marginRight:"6px"}}),n&&(0,M.jsx)(Q,{icon:D.$aW,onClick:function(){return function(e){if(e){var n=(0,A.Wv)(l,e);ue(n?"allow":"notAllowed"),se(e),window.location.hash=Y}}(e.id)},size:"lg",title:"Delete User",style:{marginRight:"16px"}})]})]},e.id)}))})]})})]})}),(0,M.jsx)(w.Z,{eventKey:"integrations",title:"Integrations",children:(0,M.jsx)(W,{marginTop:"20px",children:(0,M.jsx)(_.Z,{type:"text",rows:7,ready:!re,style:{marginTop:"20px"},children:(0,M.jsxs)(y.Z,{variant:"medium",readOnly:!0,children:[(0,M.jsx)("thead",{children:(0,M.jsxs)("tr",{children:[(0,M.jsx)("th",{className:"min-width-60",children:"Status"}),(0,M.jsx)("th",{className:"min-width-60",children:"Request ID"}),(0,M.jsx)("th",{className:"min-width-60",children:"Project Name"}),(0,M.jsx)("th",{className:"min-width-60",style:{textAlign:"right",paddingRight:"30px"},children:"Actions"})]})}),(0,M.jsx)("tbody",{children:(null===p||void 0===p?void 0:p.length)>0?null===p||void 0===p?void 0:p.map((function(e){return(0,M.jsxs)("tr",{children:[(0,M.jsx)("td",{className:"min-width-60",children:(0,M.jsx)(ee,{status:null===e||void 0===e?void 0:e.status})}),(0,M.jsx)("td",{className:"min-width-60",children:e.id}),(0,M.jsx)("td",{className:"min-width-60",children:e.projectName}),(0,M.jsx)("td",{className:"min-width-60",style:{float:"right",marginTop:"20px"},children:(0,M.jsx)(z.ZP,{request:e,onDelete:function(){a(),de(null===i||void 0===i?void 0:i.id)},children:(0,M.jsx)(z.Kk,{icon:D.Mdf,onClick:function(){return n=e.id,void o.push({pathname:"/my-dashboard/integrations",query:{integr:n}});var n},size:"lg"})})})]},e.id)})):(0,M.jsx)("tr",{children:(0,M.jsxs)(H,{colSpan:5,children:[(0,M.jsx)("br",{}),"There are no integrations for this team yet.",(0,M.jsx)("br",{}),(0,M.jsx)("br",{}),"To add this team to an ",(0,M.jsx)("span",{className:"strong",children:"existing integration"}),":",(0,M.jsx)("span",{className:"line-height-200"}),(0,M.jsxs)("ol",{children:[(0,M.jsxs)("li",{children:["Go to your"," ",(0,M.jsx)("span",{className:"text-blue",children:(0,M.jsx)("span",{className:"strong",children:"Projects"})})," ","tab"]}),(0,M.jsx)("li",{children:'Select the "pencil" icon to edit the integration'}),(0,M.jsx)("li",{children:'Select this team from the "Project Team" drop down'})]}),(0,M.jsx)("br",{}),"To add this team to a ",(0,M.jsx)("span",{className:"strong",children:"new integration"}),":",(0,M.jsx)("span",{className:"line-height-200"}),(0,M.jsxs)("ol",{children:[(0,M.jsxs)("li",{children:["Go to your"," ",(0,M.jsx)("span",{className:"text-blue",children:(0,M.jsx)("span",{className:"strong",children:"Projects"})})," ","tab"]}),(0,M.jsx)("li",{children:'Select "+ Request SSO Integration"'}),(0,M.jsx)("li",{children:'Select "Yes" to allow multiple team members to manage the integration'}),(0,M.jsx)("li",{children:'Select this team from the "Project Team" drop down'})]})]})})})]})})})})]}),(0,M.jsx)(O.Z,{title:"Add a New Team Member",icon:null,id:X,content:(0,M.jsx)(N.Z,{members:I,setMembers:U,allowDelete:xe,errors:G,currentUser:r}),onConfirm:fe,skipCloseOnConfirm:!0,buttonStyle:"custom",closable:!0}),(0,M.jsx)(V,{onConfirmDelete:me,type:ce})]})})),ie=t(96486),ae=t(39772),oe=t(11915),se=t(56839),le=t(36575),ce=b.default.div(te||(te=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  & button {\n    min-width: 180px;\n  }\n"])));function ue(e){var n=e.onSubmit,t=e.teamId,r=e.initialTeamName,i=(0,h.useState)(""),a=i[0],o=i[1],s=(0,h.useState)(!1),l=s[0],c=s[1],f=(0,h.useState)(),p=f[0],x=f[1];(0,h.useEffect)((function(){o(r)}),[r]);var v=function(e){var n={members:[]},t=!1;return e.name.trim()||(n.name="Please enter a name",t=!0),t?n:(x(void 0),null)},g=function(){var e=(0,d.Z)(m().mark((function e(){var r,i,o,s,l;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={name:a.trim(),id:t},!(i=v(r))){e.next=4;break}return e.abrupt("return",x(i));case 4:return c(!0),e.next=7,(0,T.w2)(r);case 7:return o=e.sent,s=(0,u.Z)(o,2),(l=s[1])&&console.error(l),e.next=13,n();case 13:c(!1),window.location.hash="#";case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,M.jsxs)("div",{children:[(0,M.jsx)(oe.ZP,{label:"New Team Name",onChange:function(e){o(e.target.value)},value:a}),p&&p.name&&(0,M.jsx)(le.Z,{children:null===p||void 0===p?void 0:p.name}),(0,M.jsx)("br",{}),(0,M.jsxs)(ce,{children:[(0,M.jsx)(Z.zx,{variant:"secondary",onClick:function(){o(r),window.location.hash="#"},style:{marginRight:"20px"},children:"Cancel"}),(0,M.jsx)(Z.zx,{type:"button",onClick:g,children:l?(0,M.jsx)(se.rj,{color:"#FFF",height:18,width:50,visible:l}):"Save"})]})]})}var de,fe,me,he,pe=t(90352),xe=t(31637),ve="delete-team-modal",ge="edit-team-name-modal",be=b.default.th(de||(de=(0,v.Z)(["\n  text-align: right;\n  min-width: 100px;\n"]))),we=b.default.div(fe||(fe=(0,v.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]))),je=b.default.div(me||(me=(0,v.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]))),ye=(0,b.default)(Z.zx)(he||(he=(0,v.Z)(["\n  &&& {\n    margin: 0;\n  }\n"]))),Ze=(0,M.jsxs)(we,{children:[(0,M.jsx)(R.G,{icon:D.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]}),ke=function(e){var n=e.message;return(0,M.jsxs)(je,{children:[(0,M.jsx)(R.G,{icon:D.sqG,title:"Information"}),"\xa0 ",n]})},Oe=function(e){var n=e.handleNewTeamClick;return(0,M.jsx)(ye,{size:"large",onClick:n,variant:"callout",children:"+ Create a new Team"})};function Ne(e){var n=e.currentUser,t=e.setTeam,r=e.loading,i=e.teams,a=e.loadTeams,o=e.state,s=(e.dispatch,(0,h.useState)(null)),l=s[0],c=s[1],u=(0,h.useState)(void 0),f=u[0],p=u[1],x=o.downloadError,v=l&&0===Number(l.integrationCount),g=function(e){c(e),p(null===e||void 0===e?void 0:e.id),t(e)};(0,h.useEffect)((function(){(null===i||void 0===i?void 0:i.length)>0?f&&i.find((function(e){return e.id===f}))||g(i[0]):g(null)}),[i]);var b=function(){var e=(0,d.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.location.hash=pe.zw);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=x?Ze:i&&0!==(null===i||void 0===i?void 0:i.length)?(0,M.jsxs)(y.Z,{children:[(0,M.jsx)("thead",{children:(0,M.jsxs)("tr",{children:[(0,M.jsx)("th",{children:"Team Name"}),(0,M.jsx)(be,{children:"Actions"})]})}),(0,M.jsx)("tbody",{children:i&&i.map((function(e){var n=0===Number(e.integrationCount);return(0,M.jsxs)("tr",{className:f===e.id?"active":"",onClick:function(){return g(e)},children:[(0,M.jsx)("td",{children:e.name}),(0,M.jsx)("td",{style:{float:"right",marginTop:"20px"},children:(0,M.jsxs)(z.c4,{children:[(0,M.jsx)(z.Kk,{icon:D.Xcf,role:"button","aria-label":"edit",title:"Edit",size:"lg",onClick:function(){return function(e){g(e),window.location.hash=ge}(e)}}),(0,M.jsx)(z.Kk,{disabled:!n,icon:D.$aW,role:"button","aria-label":"delete",title:"Delete",size:"lg",onClick:function(){return n?function(e){g(e),window.location.hash=ve}(e):ie.noop},style:{marginRight:"2px",marginLeft:"6px"}})]})})]},e.id)}))})]}):(0,M.jsx)(ke,{message:"You have not been added to any teams yet."}),j=function(){var e=(0,d.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,T.fC)(f);case 4:return e.next=6,a();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r?(0,M.jsx)(xe.Z,{}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("br",{}),(0,M.jsx)(Oe,{handleNewTeamClick:b}),(0,M.jsx)("br",{}),(0,M.jsx)("br",{}),w,(0,M.jsx)(O.Z,{title:"Create a new team",icon:null,onConfirm:function(){return console.log("confirm")},id:pe.zw,content:(0,M.jsx)(ae.Z,{onSubmit:a,currentUser:n}),showCancel:!1,showConfirm:!1,closable:!0}),(0,M.jsx)(O.Z,{title:"Edit Team Name",icon:null,onConfirm:function(){return console.log("confirm")},id:ge,content:(0,M.jsx)(ue,{onSubmit:a,teamId:f,initialTeamName:(null===l||void 0===l?void 0:l.name)||""}),showCancel:!1,showConfirm:!1,closable:!0}),(0,M.jsx)(O.Z,{title:"Delete team",icon:null,onConfirm:j,id:ve,content:(0,M.jsx)(F,{title:"Are you sure that you want to delete this team?",content:v?"Once you delete this team, this action cannot be undone.":"Before you delete this team, you will need to delete the integration(s) the team is responsible for."}),buttonStyle:v?"danger":"custom",confirmText:v?"Delete Team":"Okay",closable:!0})]})}var Se=function(e){var n=e.session,t=(0,h.useState)(!0),r=t[0],i=t[1],a=(0,h.useState)(null),o=a[0],s=a[1],l=(0,h.useState)([]),c=l[0],f=l[1],x=function(){var e=(0,d.Z)(m().mark((function e(){var n,t,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,(0,T.Dc)();case 3:n=e.sent,t=(0,u.Z)(n,2),r=t[0],t[1],r&&f(r||[]),i(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.useEffect)((function(){x()}),[]),(0,M.jsx)(p.ZP,{tab:"teams",leftPanel:function(e,t){return(0,M.jsx)(Ne,{currentUser:n,setTeam:s,loading:r,teams:c,loadTeams:x,state:e,dispatch:t})},rightPanel:function(e,t){return o&&(0,M.jsx)(re,{team:o,currentUser:n,loadTeams:x,state:e,dispatch:t})}})}},60377:function(e,n,t){"use strict";t.d(n,{E:function(){return o}});var r=t(59499);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var o={};n.Z=function(e,n){switch(n.type){case"setPanelTab":return a(a({},e),{},{panelTab:n.payload});case"setDownloadError":return a(a({},e),{},{downloadError:n.payload});default:return e}}},69137:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-dashboard/teams",function(){return t(61401)}])},41070:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t};n.__esModule=!0;var a=t(67294),o=t(65837),s=t(64643);n.default=function(e){var n=e.delay,t=void 0===n?0:n,l=e.type,c=void 0===l?"text":l,u=e.color,d=void 0===u?"#CDCDCD":u,f=e.rows,m=void 0===f?3:f,h=e.ready,p=e.firstLaunchOnly,x=e.children,v=e.className,g=e.showLoadingAnimation,b=e.customPlaceholder,w=i(e,["delay","type","color","rows","ready","firstLaunchOnly","children","className","showLoadingAnimation","customPlaceholder"]),j=a.useState(h),y=j[0],Z=j[1],k=a.useRef(null);return a.useEffect((function(){p||!y||h?h&&(k.current&&window.clearTimeout(k.current),y||Z(!0)):t&&t>0?k.current=window.setTimeout((function(){Z(!1)}),t):Z(!1)}),[p,y,h,t]),a.useEffect((function(){return function(){k.current&&window.clearTimeout(k.current)}}),[]),y?x:function(){var e=g?s.joinClassNames("show-loading-animation",v):v;if(b&&a.isValidElement(b)){var n=s.joinClassNames(b.props.className,e);return a.cloneElement(b,{className:n})}if(b)return b;var t=o[c];return a.createElement(t,r({},w,{color:d,rows:m,className:e}))}()}},76457:function(e,n,t){"use strict";var r=t(41070);n.Z=r.default},41985:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},r.apply(this,arguments)};n.__esModule=!0;var i=t(67294),a=t(72075),o=t(91817),s=t(64643),l={display:"flex"};n.default=function(e){var n=e.className,t=e.style,c=e.color,u=e.rows;return i.createElement("div",{className:s.joinClassNames("media-block",n),style:r(r({},l),t)},i.createElement(o.default,{color:c,style:{minHeight:55,width:55,minWidth:55,marginRight:10}}),i.createElement(a.default,{color:c,rows:u}))}},38588:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},r.apply(this,arguments)};n.__esModule=!0;var i=t(67294),a=t(64643);n.default=function(e){var n=e.className,t=e.style,o={backgroundColor:e.color,width:"100%",height:"100%",marginRight:10};return i.createElement("div",{className:a.joinClassNames("rect-shape",n),style:r(r({},o),t)})}},91817:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},r.apply(this,arguments)};n.__esModule=!0;var i=t(67294),a=t(64643);n.default=function(e){var n=e.className,t=e.style,o={backgroundColor:e.color,borderRadius:"500rem",width:"100%",height:"100%"};return i.createElement("div",{className:a.joinClassNames("round-shape",n),style:r(r({},o),t)})}},72075:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},r.apply(this,arguments)};n.__esModule=!0;var i=t(67294),a=t(72992),o=t(64643),s={width:"100%"},l=[97,100,94,90,98,95,98,40];n.default=function(e){var n=e.rows,t=e.lineSpacing,c=e.color,u=e.style,d=e.className,f=e.widths,m=void 0===f?l:f,h=function(e){return{maxHeight:100/(2*n-1)+"%",width:m[(e+m.length)%m.length]+"%"}};return i.createElement("div",{className:o.joinClassNames("text-block",d),style:r(r({},s),u)},Array.apply(null,Array(n)).map((function(e,n){return i.createElement(a.default,{color:c,style:h(n),lineSpacing:0!==n?t:0,key:n})})))}},72992:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},r.apply(this,arguments)};n.__esModule=!0;var i=t(67294),a=t(64643);n.default=function(e){var n=e.className,t=e.maxHeight,o=e.color,s=e.lineSpacing,l=void 0===s?"0.7em":s,c=e.style,u={maxHeight:t,width:"100%",height:"1em",backgroundColor:o,marginTop:l};return i.createElement("div",{className:a.joinClassNames("text-row",n),style:r(r({},u),c)})}},65837:function(e,n,t){"use strict";n.__esModule=!0,n.media=n.text=n.rect=n.round=n.textRow=n.MediaBlock=n.TextBlock=n.RectShape=n.RoundShape=n.TextRow=void 0;var r=t(72992);n.TextRow=r.default;var i=t(91817);n.RoundShape=i.default;var a=t(38588);n.RectShape=a.default;var o=t(72075);n.TextBlock=o.default;var s=t(41985);n.MediaBlock=s.default,n.textRow=r.default,n.round=i.default,n.rect=a.default,n.text=o.default,n.media=s.default},64643:function(e,n){"use strict";n.__esModule=!0,n.joinClassNames=void 0,n.joinClassNames=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return e})).join(" ")}},27812:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(52587);var i=t(2937);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[163,202,774,888,179],(function(){return n=69137,e(e.s=n);var n}));var n=e.O();_N_E=n}]);