(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/login-success.75df9ada.svg"},21:function(e,t,a){e.exports=a.p+"static/media/login-fail.db56ee32.svg"},24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),i=a(6),l=(a(29),a(23)),s=a(1),u=a(2);var m=function(e){var t=e.children;return r.a.createElement("header",{className:"header"},r.a.createElement("a",{href:"###",className:"header__logo"},"logo"),t)};var p=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020. \u0410\u0431\u0440\u043e\u0441\u0438\u043c\u043e\u0432 \u0412\u0438\u043a\u0442\u043e\u0440"))};var d=function(e){var t=e.currentUser,a=e.card,n=e.onCardClick,o=e.onCardLike,c=e.onCardDelete,i=a.owner===t._id,l="".concat(i?"card__btn-delete":"card__btn-delete_hidden"),s=a.likes.some((function(e){return e===t._id})),u="".concat(s?"btn-image btn-image_like btn-image_like_active":"btn-image btn-image_like");return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:a.link,alt:"\u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c ".concat(a.name),className:"card__image",onClick:function(){n(a.name,a.link)}}),r.a.createElement("button",{type:"button",className:l,onClick:function(){return c(a)}},r.a.createElement("div",{className:"btn-image btn-image_delete"})),r.a.createElement("div",{className:"card__info"},r.a.createElement("h2",{className:"card__title"},a.name),r.a.createElement("div",{className:"card__block-like"},r.a.createElement("button",{type:"button",className:"card__btn-like",onClick:function(){return o(a)}},r.a.createElement("div",{className:u})),r.a.createElement("span",{className:"card__count-like"},a.likes.length))))},_=r.a.createContext();var f=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,o=e.onCardClick,c=e.cards,i=e.onCardLike,l=e.onCardDelete,s=r.a.useContext(_);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("img",{src:s.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",onClick:n}),r.a.createElement("span",{className:"profile__edit-avatar"}),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__change-elem"},r.a.createElement("h1",{className:"profile__name"},s.name),r.a.createElement("button",{type:"button",className:"profile__btn-edit",onClick:t},r.a.createElement("div",{className:"btn-image btn-image_edit"}))),r.a.createElement("p",{className:"profile__signature"},s.about)),r.a.createElement("button",{type:"button",className:"profile__btn-plus",onClick:a},r.a.createElement("div",{className:"btn-image btn-image_plus"}))),r.a.createElement("section",{className:"cards"},c.map((function(e){return r.a.createElement(d,{key:e._id,card:e,currentUser:s,onCardLike:i,onCardDelete:l,onCardClick:o})}))))};var g=function(e){var t=e.title,a=e.name,n=e.inputSignature,o=e.children,c=e.isOpen,i=e.onClose,l=e.onSubmit,s=e.isForm;return r.a.createElement("section",{className:"popup-".concat(a," popup ").concat(!c&&"popup_closed")},r.a.createElement("form",{name:a,className:"popup__container",onSubmit:l,noValidate:!0},r.a.createElement("span",{className:"popup__close",onClick:i}),s&&r.a.createElement("h2",{className:"popup__title"},t),o,s&&r.a.createElement("button",{type:"submit",className:"popup__input-save"},r.a.createElement("p",{className:"popup__text-color"},n))))};var h=function(e){var t=e.onClose,a=e.card;return r.a.createElement("section",{className:"popup popup-image ".concat(!a.isOpen&&"popup_closed")},r.a.createElement("div",{className:"popup-image__container"},r.a.createElement("img",{src:a.link,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c ".concat(a.name).toLowerCase(),className:"popup-image__content"}),r.a.createElement("span",{className:"popup__close",onClick:t}),r.a.createElement("p",{className:"popup-image__name"},a.name)))},E=a(18),v=a(19),b=new(function(){function e(t){var a=t.url,n=t.headers;Object(E.a)(this,e),this.url=a,this.headers=n}return Object(v.a)(e,[{key:"getInfoUser",value:function(){return this._updateToken(),fetch("".concat(this.url,"/users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():401===e.status?localStorage.removeItem("token"):Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: \u043e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.url,"/cards"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u0421\u0431\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: \u043e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}},{key:"editProfile",value:function(e){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440: \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 ".concat(e.status))}))}},{key:"addCard",value:function(e){return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440: \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:this.headers})}},{key:"putLikeCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: \u043e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0431\u0440\u0430\u0442\u044c \u043b\u0430\u0439\u043a \u0441 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: \u043e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440: \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 ".concat(e.status))}))}},{key:"_updateToken",value:function(){var e=localStorage.getItem("token");e&&(localStorage.setItem("token",e),this.headers={Authorization:e,"Content-Type":"application/json"})}}]),e}())({url:"https://mesto-auth.abrosimov.site/api",headers:{Authorization:localStorage.getItem("token"),"Content-Type":"application/json"}});var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,o=r.a.useState(""),c=Object(s.a)(o,2),i=c[0],l=c[1],u=r.a.useState(""),m=Object(s.a)(u,2),p=m[0],d=m[1],f=r.a.useContext(_);return r.a.useEffect((function(){l(f.name),d(f.about)}),[f]),r.a.createElement(g,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",inputSignature:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,about:p})},isForm:!0},r.a.createElement("input",{name:"name",type:"text",defaultValue:i,onChange:function(e){return l(e.target.value)},className:"popup__input popup__input-name",id:"name-input",required:!0,pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f -]{2,40}",placeholder:"\u0418\u043c\u044f"}),r.a.createElement("span",{className:"popup__input-error",id:"name-input-error"}),r.a.createElement("input",{name:"about",type:"text",defaultValue:p,onChange:function(e){return d(e.target.value)},className:"popup__input popup__input-signature",id:"signature-input",required:!0,minLength:"2",maxLength:"200",placeholder:"\u041e \u0441\u0435\u0431\u0435"}),r.a.createElement("span",{className:"popup__input-error",id:"signature-input-error"}))};var k=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,o=r.a.useRef(""),c=r.a.useContext(_);return r.a.createElement(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",inputSignature:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:o.current.value})},isForm:!0},r.a.createElement("input",{name:"avatar",ref:o,defaultValue:c.avatar,type:"url",className:"popup__input popup__input-signature",id:"signature-input",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),r.a.createElement("span",{className:"popup__input-error",id:"signature-input-error"}))};var C=function(e){var t=e.isOpen,a=e.onClose,o=e.onAddPlace,c=Object(n.useRef)(""),i=Object(n.useRef)("");return r.a.createElement(g,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",inputSignature:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),o({name:c.current.value,link:i.current.value})},isForm:!0},r.a.createElement("input",{name:"name",ref:c,type:"text",className:"popup__input popup__input-name",id:"name-input",required:!0,pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f -]{1,30}",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),r.a.createElement("span",{className:"popup__input-error",id:"name-input-error"}),r.a.createElement("input",{name:"link",type:"url",ref:i,className:"popup__input popup__input-signature",id:"signature-input",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),r.a.createElement("span",{className:"popup__input-error",id:"signature-input-error"}))},y=r.a.createContext(),j=function(){var e=document.querySelector(".burger-menu"),t=document.querySelector(".header");e.classList.toggle("burger-menu_active"),t.classList.toggle("header_burger-menu")},S=a(20),O=a.n(S),P=a(21),w=a.n(P);var A=function(e){var t=e.success,a=e.message,n=r.a.useState(!0),o=Object(s.a)(n,2),c=o[0],i=o[1];return r.a.createElement(g,{name:"tool-tip",isForm:!1,isOpen:c,onClose:function(){i(!1)}},r.a.createElement("img",{className:"tool-tip__image",src:t?O.a:w.a,alt:t?"\u0418\u043d\u0444\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043e\u0431 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438":"\u0418\u043d\u0444\u043e-\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043e \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e\u0439 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0432\u0432\u043e\u0434\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"}),r.a.createElement("h2",{className:"tool-tip__title"},t?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":a||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."))};var L=function(e){var t=e.handleLogin,a=e.registerSuccess,n=r.a.useRef(""),o=r.a.useRef(""),c=r.a.useState(!1),l=Object(s.a)(c,2),u=l[0],p=l[1],d=r.a.useState(""),_=Object(s.a)(d,2),f=_[0],g=_[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement(i.b,{to:"sign-up",className:"login__signup login__signup_header"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),r.a.createElement("main",{className:"login"},r.a.createElement("section",{className:"login__enter"},r.a.createElement("h2",{className:"login__title"},"\u0412\u0445\u043e\u0434"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),p(!1),!n.current.value||!o.current.value)return g("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 email \u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),p(!0);var a={email:n.current.value,password:o.current.value};return t(a,g,p)},className:"login__form"},r.a.createElement("input",{ref:n,type:"email",placeholder:"Email",className:"login__input login__input_email"}),r.a.createElement("input",{ref:o,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"login__input login__input_pswd"}),r.a.createElement("button",{type:"submit",className:"login__btn-submit"},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("div",{className:"login__block-signup"},r.a.createElement("p",{className:"login__issue"},"\u0415\u0449\u0435 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",r.a.createElement(i.b,{to:"sign-up",className:"login__signup login__signup_form"}," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))),u&&r.a.createElement(A,{success:!1,message:f}),a&&r.a.createElement(A,{success:!0})))};var T=function(e){var t=e.handleRegister,a=r.a.useRef(""),n=r.a.useRef(""),o=r.a.useState(!1),c=Object(s.a)(o,2),l=c[0],u=c[1],p=r.a.useState(""),d=Object(s.a)(p,2),_=d[0],f=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement(i.b,{to:"sign-in",className:"login__signup login__signup_header"},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement("main",{className:"login"},r.a.createElement("section",{className:"login__enter"},r.a.createElement("h2",{className:"login__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),u(!1),!a.current.value||!n.current.value)return f("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 email \u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),u(!0);var r={email:a.current.value,password:n.current.value};return t(r,f,u)},className:"login__form"},r.a.createElement("input",{ref:a,type:"email",name:"email",placeholder:"Email",className:"login__input login__input_email"}),r.a.createElement("input",{ref:n,type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"login__input login__input_pswd"}),r.a.createElement("button",{type:"submit",className:"login__btn-submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),r.a.createElement("div",{className:"login__block-signup"},r.a.createElement("p",{className:"login__issue"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",r.a.createElement(i.b,{to:"sign-in",className:"login__signup login__signup_form"}," \u0412\u043e\u0439\u0442\u0438"))))),l&&r.a.createElement(A,{success:!1,message:_})))},I=function(e){var t=e.Component,a=e.loggedIn;return r.a.createElement(u.b,null,(function(){return a?t:r.a.createElement(u.a,{to:"/sign-in"})}))},x="https://mesto-auth.abrosimov.site/api",D=function(e){return fetch("".concat(x,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))};var U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement(i.b,{to:"sign-in",className:"login__signup login__signup_header"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")),r.a.createElement("section",{className:"not-found"},r.a.createElement("p",{className:"not-found__error"},"404"),r.a.createElement("h2",{className:"not-found__title"},"\u041a\u0430\u0436\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u0430\u0434\u0440\u0435\u0441.")))};var F=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],o=r.a.useState(""),c=Object(s.a)(o,2),i=c[0],d=c[1],E=r.a.useState(!1),v=Object(s.a)(E,2),S=v[0],O=v[1],P=Object(u.g)(),w=r.a.useState({}),A=Object(s.a)(w,2),F=A[0],R=A[1],q=r.a.useState([]),J=Object(s.a)(q,2),z=J[0],V=J[1],B=r.a.useState(!1),H=Object(s.a)(B,2),W=H[0],Z=H[1],G=r.a.useState(!1),M=Object(s.a)(G,2),$=M[0],K=M[1],Q=r.a.useState(!1),X=Object(s.a)(Q,2),Y=X[0],ee=X[1],te=r.a.useState({isOpen:!1,name:"",link:""}),ae=Object(s.a)(te,2),ne=ae[0],re=ae[1];function oe(){Z(!1),ee(!1),K(!1),re({isOpen:!1,name:"",link:""})}var ce=function(){Promise.all([b.getInfoUser(),b.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];R(a),V(n)})).catch((function(e){return console.log(e)}))};return r.a.useEffect((function(){(function(){var e=localStorage.getItem("token");return e&&D(e).then((function(e){return n(!0),P.push("/my-profile"),d(e)})),e})()&&ce()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/sign-in"},r.a.createElement(L,{handleLogin:function(e,t,a){(function(e){var t=e.email,a=e.password;return fetch("".concat(x,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("token",e.token),e})).catch((function(e){return console.log(e)}))})(e).then((function(e){return e.token?D(e.token).then((function(e){return n(!0),P.push("/my-profile"),d(e)})).then((function(e){console.log(ce()),ce()})):(t(e.message||e.error),a(!0))})).catch((function(e){return a(!0),console.log(e)}))},registerSuccess:S})),r.a.createElement(u.b,{path:"/sign-up"},r.a.createElement(T,{handleRegister:function(e,t,a){(function(e){var t=e.email,a=e.password;return fetch("".concat(x,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))})(e).then((function(e){return e?(P.push("/sign-in"),O(!0)):(t(e.error||e.message),a(!0))}))}})),r.a.createElement(I,{path:"/",loggedIn:a,Component:r.a.createElement(_.Provider,{value:F},r.a.createElement(y.Provider,{value:z},r.a.createElement(m,null,r.a.createElement("div",{className:"header__info"},r.a.createElement("p",{className:"header__email"},i.email),r.a.createElement("button",{type:"button",className:"header__sign-out",onClick:function(){localStorage.removeItem("token"),P.push("/sign-in"),O(!1)}},"\u0412\u044b\u0439\u0442\u0438")),r.a.createElement("span",{className:"burger-menu",onClick:j})),r.a.createElement(f,{onEditProfile:function(){Z(!0)},onAddPlace:function(){K(!0)},onEditAvatar:function(){ee(!0)},onCardClick:function(e,t){re({isOpen:!0,name:e,link:t})},cards:z,onCardLike:function(e){(e.likes.some((function(e){return e===F._id}))?b.deleteLikeCard(e._id):b.putLikeCard(e._id)).then((function(t){var a=z.map((function(a){return a._id===e._id?t:a}));V(a)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){b.deleteCard(e._id).then((function(){var t=z.filter((function(t){return t._id!==e._id}));V(t)})).catch((function(e){return console.log(e)}))}}),r.a.createElement(N,{isOpen:W,onClose:oe,onUpdateUser:function(e){b.editProfile(e).then((function(e){return R(e),oe()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(C,{isOpen:$,onClose:oe,onAddPlace:function(e){b.addCard(e).then((function(e){return V([].concat(Object(l.a)(z),[e])),oe()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(k,{isOpen:Y,onClose:oe,onUpdateAvatar:function(e){b.changeAvatar(e).then((function(e){return R(e),oe()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(g,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",inputSignature:"\u0414\u0430"}),r.a.createElement(h,{card:ne,onClose:oe})))}),r.a.createElement(p,null),r.a.createElement(u.b,{path:"*"},r.a.createElement(U,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.8e35a9f8.chunk.js.map